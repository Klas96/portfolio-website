import filecmp
import shutil
import tempfile
import unittest
import wave
from datetime import date
from pathlib import Path
from unittest.mock import patch
from xml.etree import ElementTree

import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

import podcast_feed  # noqa: E402
import weekly_brief  # noqa: E402


def write_wav(path: Path, frames: int = 800) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with wave.open(str(path), "w") as handle:
        handle.setnchannels(1)
        handle.setsampwidth(2)
        handle.setframerate(8000)
        handle.writeframes(b"\x00\x00" * frames)


def seed_site(root: Path) -> None:
    shutil.copy(ROOT / "podcast" / "show.json", root / "podcast" / "show.json")
    (root / "podcast" / "episodes.json").write_text("[]\n", encoding="utf-8")
    (root / "static" / "podcast").mkdir(parents=True)
    page = (ROOT / "podcast.html").read_text(encoding="utf-8")
    (root / "podcast.html").write_text(page, encoding="utf-8")
    index = (ROOT / "index.html").read_text(encoding="utf-8")
    if "<!-- PODCAST_HOME -->" not in index:
        index = index.replace(
            "    <div class=\"portfolioCol\">\n      <div class=\"row pb-2\">\n        <div class=\"col\">\n          <h4 class=\"lgTitle\">Contact</h4>",
            "    <!-- PODCAST_HOME -->\n    <p>placeholder</p>\n    <!-- /PODCAST_HOME -->\n\n    <div class=\"portfolioCol\">\n      <div class=\"row pb-2\">\n        <div class=\"col\">\n          <h4 class=\"lgTitle\">Contact</h4>",
            1,
        )
    (root / "index.html").write_text(index, encoding="utf-8")
    (root / "discussion.html").write_text(
        '<link rel="alternate" type="application/rss+xml" title="Old" href="https://klasholmgren.se/podcast.xml">\n',
        encoding="utf-8",
    )


class PodcastFeedTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        (self.root / "podcast").mkdir()
        seed_site(self.root)

    def tearDown(self):
        self.tmp.cleanup()

    def test_empty_feed_has_channel_and_no_items(self):
        changed = podcast_feed.build(self.root)
        self.assertIn("podcast.xml", changed)
        rss = ElementTree.parse(self.root / "podcast.xml")
        channel = rss.getroot().find("channel")
        self.assertEqual(channel.findtext("title"), "Klas Veckologg")
        self.assertEqual(channel.findtext("language"), "sv")
        self.assertIn("vad som är på gång nästa vecka", channel.findtext("description"))
        self.assertEqual(channel.findall("item"), [])
        self.assertIn("Inga avsnitt ännu.", (self.root / "podcast.html").read_text(encoding="utf-8"))

    def test_add_episode_logs_enclosure_and_is_idempotent(self):
        source = self.root / "incoming.wav"
        write_wav(source)
        result = podcast_feed.add_episode(
            self.root,
            source,
            "Vecka 42",
            "2026-10-15",
            "Dans på torsdagen.\nKod på söndagen.",
        )
        self.assertEqual(result["file"], "2026-10-15-vecka-42.wav")
        self.assertEqual(
            result["url"],
            "https://klasholmgren.se/static/podcast/2026-10-15-vecka-42.wav",
        )
        rss = ElementTree.parse(self.root / "podcast.xml")
        item = rss.getroot().find("channel/item")
        self.assertEqual(item.findtext("title"), "Vecka 42")
        self.assertIn("Dans på torsdagen.", item.findtext("description"))
        self.assertIn("Kod på söndagen.", item.findtext("description"))
        self.assertTrue(item.findtext("pubDate").startswith("Thu, 15 Oct 2026"))
        enclosure = item.find("enclosure")
        self.assertEqual(enclosure.get("url"), result["url"])
        self.assertEqual(enclosure.get("type"), "audio/wav")
        self.assertEqual(
            enclosure.get("length"),
            str((self.root / "static/podcast" / result["file"]).stat().st_size),
        )
        page = (self.root / "podcast.html").read_text(encoding="utf-8")
        self.assertIn("Vecka 42", page)
        self.assertIn("static/podcast/2026-10-15-vecka-42.wav", page)
        self.assertNotIn("Inga avsnitt ännu.", page)

        again = podcast_feed.add_episode(
            self.root,
            source,
            "Vecka 42",
            "2026-10-15",
            "Dans på torsdagen.\nKod på söndagen.",
        )
        self.assertEqual(again["file"], result["file"])
        items = ElementTree.parse(self.root / "podcast.xml").getroot().findall("channel/item")
        self.assertEqual(len(items), 1)

    def test_newer_episode_is_first_and_text_is_escaped(self):
        older = self.root / "older.mp3"
        newer = self.root / "newer.mp3"
        older.write_bytes(b"ID3old")
        newer.write_bytes(b"ID3new!")
        podcast_feed.add_episode(self.root, older, "Först", "2026-10-01", "Vanlig vecka")
        podcast_feed.add_episode(
            self.root,
            newer,
            'Vecka <två> & "tre"',
            "2026-10-08",
            "A < B & C",
        )
        items = ElementTree.parse(self.root / "podcast.xml").getroot().findall("channel/item")
        self.assertEqual([item.findtext("title") for item in items], ['Vecka <två> & "tre"', "Först"])
        self.assertEqual(items[0].findtext("description"), "A < B & C")
        page = (self.root / "podcast.html").read_text(encoding="utf-8")
        self.assertIn("Vecka &lt;två&gt; &amp; &quot;tre&quot;", page)
        self.assertNotIn("<två>", page)
        self.assertLess(page.index("Vecka &lt;två&gt;"), page.index(">Först<"))

    def test_different_audio_at_the_same_url_is_refused(self):
        first = self.root / "a.mp3"
        second = self.root / "b.mp3"
        first.write_bytes(b"aaaa")
        second.write_bytes(b"bbbb")
        podcast_feed.add_episode(
            self.root, first, "Vecka", "2026-10-15", "Samma vecka", filename="week.mp3"
        )
        with self.assertRaises(SystemExit):
            podcast_feed.add_episode(
                self.root, second, "Vecka", "2026-10-15", "Annan fil", filename="week.mp3"
            )
        self.assertTrue(filecmp.cmp(first, self.root / "static/podcast/week.mp3", shallow=False))

    def test_brief_covers_this_week_and_next_week(self):
        text = weekly_brief.render_brief(
            [
                {"repo": "Klas96/echoes-of-elysium", "subject": "Release 0.3.5: abilities HUD.\nMore detail"},
                {"repo": "Klas96/echoes-of-elysium", "subject": "Merge pull request #68 from Klas96/design"},
                {"repo": "Klas96/fdroid", "subject": "Fix F-Droid listing icons."},
            ],
            [
                {"repo": "Klas96/fdroid", "title": "Publish KeyMatch 134.10.26"},
                {"repo": "Klas96/portfolio-website", "title": "Add a weekly podcast RSS feed"},
            ],
            date(2026, 10, 16),
        )
        self.assertIn("vecka 42", text)
        self.assertIn("16 oktober 2026", text)
        self.assertIn("Den här veckan", text)
        self.assertIn("echoes-of-elysium. Release 0.3.5: abilities HUD.", text)
        self.assertNotIn("Merge pull request", text)
        self.assertIn("Nästa vecka", text)
        self.assertIn("fdroid. Publish KeyMatch 134.10.26.", text)
        self.assertIn("portfolio-website. Add a weekly podcast RSS feed.", text)

    def test_publish_makes_one_episode_per_run(self):
        first = self.root / "first.mp3"
        second = self.root / "second.mp3"
        first.write_bytes(b"run-one")
        second.write_bytes(b"run-two")
        def fake_draft(_day=None):
            return "Den här veckan: Echoes.\n\nNästa vecka: KeyMatch.\n"

        with patch.object(podcast_feed.weekly_brief, "draft", fake_draft):
            podcast_feed.main(["--root", str(self.root), "publish", "--audio", str(first), "--date", "2026-10-16"])
            podcast_feed.main(["--root", str(self.root), "publish", "--audio", str(second), "--date", "2026-10-16"])
            podcast_feed.main(["--root", str(self.root), "publish", "--audio", str(first), "--date", "2026-10-16"])
        items = ElementTree.parse(self.root / "podcast.xml").getroot().findall("channel/item")
        self.assertEqual(len(items), 2)
        self.assertEqual(items[0].findtext("description"), "Den här veckan: Echoes.\n\nNästa vecka: KeyMatch.")
        self.assertTrue(items[0].findtext("title").startswith("Vecka 42"))

    def test_home_block_and_autodiscovery_follow_the_show_title(self):
        show_file = self.root / "podcast" / "show.json"
        text = show_file.read_text(encoding="utf-8").replace("Klas Veckologg", "Arbetsnamn")
        show_file.write_text(text, encoding="utf-8")
        podcast_feed.build(self.root)
        index = (self.root / "index.html").read_text(encoding="utf-8")
        self.assertIn(">Arbetsnamn</a>", index)
        self.assertIn('href="podcast.xml"', index)
        discussion = (self.root / "discussion.html").read_text(encoding="utf-8")
        self.assertIn('title="Arbetsnamn"', discussion)


if __name__ == "__main__":
    unittest.main()
