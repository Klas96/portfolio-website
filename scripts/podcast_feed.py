#!/usr/bin/env python3
"""Build the weekly podcast RSS feed from the catalog in podcast/.

The existing Cursor automation already produces the audio. Keep that job.
Every run should end with these two commands, in this repo:

    python3 scripts/podcast_feed.py draft
    python3 scripts/podcast_feed.py publish --audio /path/to/the-file-just-written.mp3

`draft` prints what to say: projects from the last seven days, then open
work for next week. Speak that text. `publish` logs that audio file as one
episode and rewrites podcast.xml. Commit the files it prints. Do not run
scripts/deploy-simple.sh.

Rename the show by editing podcast/show.json, then run:

    python3 scripts/podcast_feed.py build
"""

from __future__ import annotations

import argparse
import email.utils
import filecmp
import hashlib
import json
import re
import shutil
import sys
from datetime import datetime, timezone
from pathlib import Path
from xml.sax.saxutils import escape

import weekly_brief

MIME_TYPES = {
    ".mp3": "audio/mpeg",
    ".m4a": "audio/mp4",
    ".mp4": "audio/mp4",
    ".wav": "audio/wav",
    ".ogg": "audio/ogg",
    ".oga": "audio/ogg",
    ".aac": "audio/aac",
    ".mpga": "audio/mpeg",
}

SHOW_KEYS = (
    "title",
    "description",
    "language",
    "author",
    "email",
    "site_url",
    "page_path",
    "feed_path",
    "audio_dir",
    "image",
    "explicit",
    "category",
)

EPISODE_KEYS = ("title", "date", "description", "file")
SAFE_NAME = re.compile(r"^[A-Za-z0-9][A-Za-z0-9._-]{0,119}$")
ALT_LINK = re.compile(
    r'(<link rel="alternate" type="application/rss\+xml" title=")([^"]*)'
    r'(" href="https://klasholmgren\.se/podcast\.xml">)'
)
HOME_START = "<!-- PODCAST_HOME -->"
HOME_END = "<!-- /PODCAST_HOME -->"
EPISODES_START = "<!-- PODCAST_EPISODES -->"
EPISODES_END = "<!-- /PODCAST_EPISODES -->"
TITLE_START = "<!-- PODCAST_TITLE -->"
TITLE_END = "<!-- /PODCAST_TITLE -->"
BLURB_START = "<!-- PODCAST_BLURB -->"
BLURB_END = "<!-- /PODCAST_BLURB -->"


def repo_root() -> Path:
    return Path(__file__).resolve().parents[1]


def show_path(root: Path) -> Path:
    return root / "podcast" / "show.json"


def episodes_path(root: Path) -> Path:
    return root / "podcast" / "episodes.json"


def load_json(path: Path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError as exc:
        raise SystemExit(f"Missing {path}") from exc
    except json.JSONDecodeError as exc:
        raise SystemExit(f"{path} is not valid JSON: {exc}") from exc


def load_show(root: Path) -> dict:
    show = load_json(show_path(root))
    if not isinstance(show, dict):
        raise SystemExit("podcast/show.json must be an object")
    missing = [key for key in SHOW_KEYS if key not in show or str(show[key]).strip() == ""]
    if missing:
        raise SystemExit("podcast/show.json is missing: " + ", ".join(missing))
    show["site_url"] = str(show["site_url"]).rstrip("/")
    show["explicit"] = bool(show["explicit"])
    return show


def load_episodes(root: Path) -> list:
    episodes = load_json(episodes_path(root))
    if not isinstance(episodes, list):
        raise SystemExit("podcast/episodes.json must be a list")
    seen = set()
    for index, episode in enumerate(episodes):
        validate_episode(episode, index)
        if episode["file"] in seen:
            raise SystemExit(f"Duplicate episode file: {episode['file']}")
        seen.add(episode["file"])
    return episodes


def validate_episode(episode, index: int) -> None:
    if not isinstance(episode, dict):
        raise SystemExit(f"Episode {index} must be an object")
    missing = [key for key in EPISODE_KEYS if key not in episode or str(episode[key]).strip() == ""]
    if missing:
        raise SystemExit(f"Episode {index} is missing: " + ", ".join(missing))
    parse_date(str(episode["date"]))
    if not SAFE_NAME.match(str(episode["file"])):
        raise SystemExit(f"Unsafe episode filename: {episode['file']}")
    suffix = Path(str(episode["file"])).suffix.lower()
    if suffix not in MIME_TYPES:
        raise SystemExit(f"Unsupported audio type for {episode['file']}")


def parse_date(value: str) -> datetime:
    try:
        day = datetime.strptime(value, "%Y-%m-%d")
    except ValueError as exc:
        raise SystemExit(f"Date must be YYYY-MM-DD, got {value!r}") from exc
    return day.replace(hour=12, tzinfo=timezone.utc)


def newest_first(episodes: list) -> list:
    return sorted(episodes, key=lambda episode: (episode["date"], episode["file"]), reverse=True)


def public_audio_url(show: dict, filename: str) -> str:
    return f"{show['site_url']}/{show['audio_dir'].strip('/')}/{filename}"


def page_url(show: dict) -> str:
    return f"{show['site_url']}/{show['page_path']}"


def feed_url(show: dict) -> str:
    return f"{show['site_url']}/{show['feed_path']}"


def xml_text(value: str) -> str:
    return escape(str(value), {'"': "&quot;", "'": "&apos;"})


def rfc822(day: datetime) -> str:
    return email.utils.format_datetime(day)


def render_feed(show: dict, episodes: list, lengths: dict[str, int]) -> str:
    items = []
    ordered = newest_first(episodes)
    for episode in ordered:
        filename = episode["file"]
        url = public_audio_url(show, filename)
        mime = MIME_TYPES[Path(filename).suffix.lower()]
        published = rfc822(parse_date(episode["date"]))
        description = str(episode["description"]).strip()
        items.append(
            "\n".join(
                [
                    "    <item>",
                    f"      <title>{xml_text(episode['title'])}</title>",
                    f"      <description>{xml_text(description)}</description>",
                    f"      <pubDate>{published}</pubDate>",
                    f"      <guid isPermaLink=\"true\">{xml_text(url)}</guid>",
                    f"      <link>{xml_text(url)}</link>",
                    "      <enclosure "
                    f'url="{xml_text(url)}" '
                    f'length="{lengths[filename]}" '
                    f'type="{mime}"/>',
                    f"      <itunes:summary>{xml_text(description)}</itunes:summary>",
                    f"      <itunes:explicit>{'true' if show['explicit'] else 'false'}</itunes:explicit>",
                    "    </item>",
                ]
            )
        )
    last_build = ""
    if ordered:
        last_build = f"    <lastBuildDate>{rfc822(parse_date(ordered[0]['date']))}</lastBuildDate>\n"
    explicit = "true" if show["explicit"] else "false"
    body = ""
    if items:
        body = "\n".join(items) + "\n"
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" '
        'xmlns:atom="http://www.w3.org/2005/Atom">\n'
        "  <channel>\n"
        f"    <title>{xml_text(show['title'])}</title>\n"
        f"    <link>{xml_text(page_url(show))}</link>\n"
        f"    <atom:link href=\"{xml_text(feed_url(show))}\" rel=\"self\" "
        'type="application/rss+xml"/>\n'
        f"    <description>{xml_text(show['description'])}</description>\n"
        f"    <language>{xml_text(show['language'])}</language>\n"
        f"{last_build}"
        f"    <itunes:author>{xml_text(show['author'])}</itunes:author>\n"
        f"    <itunes:summary>{xml_text(show['description'])}</itunes:summary>\n"
        f"    <itunes:explicit>{explicit}</itunes:explicit>\n"
        f"    <itunes:type>episodic</itunes:type>\n"
        "    <itunes:owner>\n"
        f"      <itunes:name>{xml_text(show['author'])}</itunes:name>\n"
        f"      <itunes:email>{xml_text(show['email'])}</itunes:email>\n"
        "    </itunes:owner>\n"
        f"    <itunes:image href=\"{xml_text(show['image'])}\"/>\n"
        f"    <itunes:category text=\"{xml_text(show['category'])}\"/>\n"
        "    <image>\n"
        f"      <url>{xml_text(show['image'])}</url>\n"
        f"      <title>{xml_text(show['title'])}</title>\n"
        f"      <link>{xml_text(page_url(show))}</link>\n"
        "    </image>\n"
        f"{body}"
        "  </channel>\n"
        "</rss>\n"
    )


def html_text(value: str) -> str:
    return escape(str(value), {'"': "&quot;"})


def html_paragraph(value: str) -> str:
    lines = [html_text(line) for line in str(value).strip().splitlines()]
    return "<br>\n".join(lines) if lines else ""


def render_episode_html(show: dict, episode: dict) -> str:
    filename = episode["file"]
    mime = MIME_TYPES[Path(filename).suffix.lower()]
    src = f"{show['audio_dir'].strip('/')}/{filename}"
    return (
        '            <li style="margin-bottom: 20px;">\n'
        '              <details style="background-color: black; color: white; '
        'border-radius: 8px; padding: 10px; max-width: 600px; margin: 0 auto;">\n'
        "                <summary>\n"
        f"                  <h2>{html_text(episode['title'])}</h2>\n"
        "                </summary>\n"
        f"                <p>{html_text(episode['date'])}</p>\n"
        f"                <p>{html_paragraph(episode['description'])}</p>\n"
        '                <audio controls volume="1.0">\n'
        f'                  <source src="{html_text(src)}" type="{mime}">\n'
        "                  Your browser does not support the audio element.\n"
        "                </audio>\n"
        "              </details>\n"
        "            </li>\n"
    )


def render_episode_list(show: dict, episodes: list) -> str:
    if not episodes:
        inner = "            <li>Inga avsnitt ännu.</li>\n"
    else:
        inner = "".join(render_episode_html(show, episode) for episode in newest_first(episodes))
    return '          <ul class="audio-files">\n' + inner + "          </ul>"


def render_home_block(show: dict) -> str:
    title = html_text(show["title"])
    description = html_text(show["description"])
    return (
        '    <div class="portfolioCol">\n'
        '      <div class="row pb-2">\n'
        '        <div class="col">\n'
        f'          <h4 class="lgTitle"><a href="podcast.html">{title}</a></h4>\n'
        "        </div>\n"
        "        <p>\n"
        f'          {description} <a href="podcast.xml" style="color: yellow;">RSS</a>.\n'
        "        </p>\n"
        "      </div>\n"
        "    </div>"
    )


def replace_inline(text: str, start: str, end: str, inner: str) -> str:
    pattern = re.compile(re.escape(start) + r".*?" + re.escape(end), re.DOTALL)
    replacement = f"{start}{inner}{end}"
    updated, count = pattern.subn(replacement, text, count=1)
    if count != 1:
        raise SystemExit(f"Could not find markers {start} ... {end}")
    return updated


def replace_region(text: str, start: str, end: str, inner: str, indent: str) -> str:
    pattern = re.compile(re.escape(start) + r".*?" + re.escape(end), re.DOTALL)
    replacement = f"{start}\n{inner}\n{indent}{end}"
    updated, count = pattern.subn(replacement, text, count=1)
    if count != 1:
        raise SystemExit(f"Could not find markers {start} ... {end}")
    return updated


def set_meta_descriptions(html: str, description: str) -> str:
    escaped = html_text(description)
    patterns = (
        r'(<meta name="description" content=")([^"]*)(">)',
        r'(<meta property="og:description" content=")([^"]*)(">)',
        r'(<meta name="twitter:description" content=")([^"]*)(">)',
    )
    for pattern in patterns:
        html, count = re.subn(pattern, rf"\1{escaped}\3", html, count=1)
        if count != 1:
            raise SystemExit("podcast.html is missing a description meta tag")
    return html


def write_if_changed(path: Path, content: str) -> bool:
    if path.exists() and path.read_text(encoding="utf-8") == content:
        return False
    path.write_text(content, encoding="utf-8")
    return True


def episode_lengths(root: Path, show: dict, episodes: list) -> dict[str, int]:
    audio_dir = root / show["audio_dir"]
    lengths = {}
    for episode in episodes:
        path = audio_dir / episode["file"]
        if not path.is_file():
            raise SystemExit(f"Missing audio file: {path}")
        size = path.stat().st_size
        if size <= 0:
            raise SystemExit(f"Audio file is empty: {path}")
        lengths[episode["file"]] = size
    return lengths


def build(root: Path) -> list[str]:
    show = load_show(root)
    episodes = load_episodes(root)
    lengths = episode_lengths(root, show, episodes)
    changed = []

    feed = render_feed(show, episodes, lengths)
    feed_file = root / show["feed_path"]
    if write_if_changed(feed_file, feed):
        changed.append(show["feed_path"])

    page_file = root / show["page_path"]
    page = page_file.read_text(encoding="utf-8")
    page = replace_inline(page, TITLE_START, TITLE_END, html_text(show["title"]))
    page = replace_inline(page, BLURB_START, BLURB_END, html_text(show["description"]))
    page = replace_region(
        page, EPISODES_START, EPISODES_END, render_episode_list(show, episodes), "          "
    )
    page = set_meta_descriptions(page, show["description"])
    if write_if_changed(page_file, page):
        changed.append(show["page_path"])

    index_file = root / "index.html"
    if index_file.exists() and HOME_START in index_file.read_text(encoding="utf-8"):
        index = index_file.read_text(encoding="utf-8")
        index = replace_region(index, HOME_START, HOME_END, render_home_block(show), "    ")
        if write_if_changed(index_file, index):
            changed.append("index.html")

    title = show["title"]
    for html_file in sorted(root.glob("*.html")):
        original = html_file.read_text(encoding="utf-8")
        updated, count = ALT_LINK.subn(rf"\1{xml_text(title)}\3", original)
        if count and updated != original and write_if_changed(html_file, updated):
            rel = html_file.name
            if rel not in changed:
                changed.append(rel)
    return changed


def slugify(title: str) -> str:
    translated = title.translate(str.maketrans({"å": "a", "ä": "a", "ö": "o", "Å": "A", "Ä": "A", "Ö": "O"}))
    slug = re.sub(r"[^A-Za-z0-9]+", "-", translated).strip("-").lower()
    return (slug or "avsnitt")[:60]


def destination_name(audio: Path, title: str, date: str, filename: str | None) -> str:
    if filename:
        name = Path(filename).name
    else:
        name = f"{date}-{slugify(title)}{audio.suffix.lower()}"
    if not SAFE_NAME.match(name) or Path(name).suffix.lower() not in MIME_TYPES:
        raise SystemExit(f"Refusing filename {name}")
    return name


def save_episodes(root: Path, episodes: list) -> None:
    text = json.dumps(episodes, ensure_ascii=False, indent=2) + "\n"
    episodes_path(root).write_text(text, encoding="utf-8")


def add_episode(
    root: Path,
    audio: Path,
    title: str,
    date: str,
    description: str,
    filename: str | None = None,
    replace: bool = False,
) -> dict:
    title = title.strip()
    description = description.strip()
    if not title:
        raise SystemExit("Title is empty")
    if not description:
        raise SystemExit("Description is empty")
    parse_date(date)
    if not audio.is_file():
        raise SystemExit(f"Audio file not found: {audio}")
    if audio.stat().st_size <= 0:
        raise SystemExit(f"Audio file is empty: {audio}")

    show = load_show(root)
    episodes = load_episodes(root)
    name = destination_name(audio, title, date, filename)
    dest = root / show["audio_dir"] / name
    dest.parent.mkdir(parents=True, exist_ok=True)
    existing = next((episode for episode in episodes if episode["file"] == name), None)

    if dest.exists():
        same = filecmp.cmp(audio, dest, shallow=False)
        if not same and not replace:
            raise SystemExit(
                f"{dest} already exists with different audio. "
                "The public URL stays stable, so pick another --filename or pass --replace."
            )
        if not same and replace:
            shutil.copyfile(audio, dest)
    else:
        if existing and not replace:
            raise SystemExit(f"{name} is in the catalog but the audio file is missing")
        shutil.copyfile(audio, dest)

    episode = {
        "title": title,
        "date": date,
        "description": description,
        "file": name,
    }
    if existing:
        existing.update(episode)
    else:
        episodes.append(episode)
    save_episodes(root, episodes)
    changed = build(root)
    for rel in (f"{show['audio_dir']}/{name}", "podcast/episodes.json"):
        if rel not in changed:
            changed.insert(0, rel)
    return {
        "file": name,
        "url": public_audio_url(show, name),
        "feed": feed_url(show),
        "changed": changed,
    }


def episode_title(day: datetime) -> str:
    week = day.isocalendar().week
    return f"Vecka {week}, {weekly_brief.swedish_date(day.date())}"


def audio_token(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()[:8]


def cmd_draft(_args: argparse.Namespace) -> int:
    sys.stdout.write(weekly_brief.draft())
    return 0


def cmd_publish(args: argparse.Namespace) -> int:
    day = parse_date(args.date) if args.date else datetime.now(timezone.utc).replace(hour=12, minute=0, second=0, microsecond=0)
    audio = Path(args.audio)
    if not audio.is_file():
        raise SystemExit(f"Audio file not found: {audio}")
    description = weekly_brief.draft(day.date()).strip()
    title = args.title or episode_title(day)
    filename = args.filename or f"{day.date().isoformat()}-vecka-{day.isocalendar().week}-{audio_token(audio)}{audio.suffix.lower()}"
    result = add_episode(
        Path(args.root).resolve(),
        audio,
        title,
        day.date().isoformat(),
        description,
        filename,
        False,
    )
    print(f"Episode logged: {result['file']}")
    print(f"Public URL: {result['url']}")
    print(f"Feed: {result['feed']}")
    print("Commit: " + " ".join(result["changed"]))
    return 0


def cmd_build(args: argparse.Namespace) -> int:
    changed = build(Path(args.root).resolve())
    if changed:
        print("Updated: " + ", ".join(changed))
    else:
        print("Feed already up to date.")
    return 0


def cmd_add(args: argparse.Namespace) -> int:
    result = add_episode(
        Path(args.root).resolve(),
        Path(args.audio),
        args.title,
        args.date,
        args.description,
        args.filename,
        args.replace,
    )
    print(f"Episode logged: {result['file']}")
    print(f"Public URL: {result['url']}")
    print(f"Feed: {result['feed']}")
    print("Commit: " + " ".join(result["changed"]))
    return 0


def parser() -> argparse.ArgumentParser:
    program = argparse.ArgumentParser(description="Log weekly podcast episodes and rebuild the RSS feed.")
    program.add_argument("--root", default=str(repo_root()), help=argparse.SUPPRESS)
    sub = program.add_subparsers(dest="command", required=True)

    build_cmd = sub.add_parser("build", help="Rewrite podcast.xml and the episode list from the catalog")
    build_cmd.set_defaults(func=cmd_build)

    add_cmd = sub.add_parser("add", help="Copy one audio file into the catalog and rebuild the feed")
    add_cmd.add_argument("--audio", required=True, help="Path to the new audio file")
    add_cmd.add_argument("--title", required=True, help="Episode title")
    add_cmd.add_argument("--date", required=True, help="Episode date, YYYY-MM-DD")
    add_cmd.add_argument("--description", required=True, help="A few lines on what happened that week")
    add_cmd.add_argument("--filename", help="Stable filename under static/podcast/. Default: date plus title.")
    add_cmd.add_argument("--replace", action="store_true", help="Overwrite the audio at an existing public URL")
    add_cmd.set_defaults(func=cmd_add)

    draft_cmd = sub.add_parser("draft", help="Print what this run should say about projects")
    draft_cmd.set_defaults(func=cmd_draft)

    publish_cmd = sub.add_parser("publish", help="Log the audio from this run as one episode")
    publish_cmd.add_argument("--audio", required=True, help="Audio file this run just produced")
    publish_cmd.add_argument("--date", help="Episode date, YYYY-MM-DD. Default: today, UTC")
    publish_cmd.add_argument("--title", help="Override the episode title")
    publish_cmd.add_argument("--filename", help="Stable filename under static/podcast/")
    publish_cmd.set_defaults(func=cmd_publish)
    return program


def main(argv: list[str] | None = None) -> int:
    args = parser().parse_args(argv)
    return args.func(args)


if __name__ == "__main__":
    sys.exit(main())
