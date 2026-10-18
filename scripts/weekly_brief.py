"""Spoken script for one podcast run: this week's projects, and next week.

The existing Cursor automation already makes the audio. It should speak the
text from `python3 scripts/podcast_feed.py draft`, then publish that file
with `python3 scripts/podcast_feed.py publish --audio <file>`.
"""

from __future__ import annotations

import json
import subprocess
from datetime import date, datetime, timedelta, timezone
from urllib.parse import quote

MONTHS = (
    "januari",
    "februari",
    "mars",
    "april",
    "maj",
    "juni",
    "juli",
    "augusti",
    "september",
    "oktober",
    "november",
    "december",
)


def swedish_date(day: date) -> str:
    return f"{day.day} {MONTHS[day.month - 1]} {day.year}"


def repo_name(full_name: str) -> str:
    return full_name.split("/")[-1]


def first_line(message: str) -> str:
    return message.strip().splitlines()[0].strip() if message else ""


def is_merge(subject: str) -> bool:
    lowered = subject.lower()
    return lowered.startswith("merge pull request") or lowered.startswith("merge branch")


def group_lines(rows: list[tuple[str, str]], limit_repos: int = 6, limit_lines: int = 3) -> list[tuple[str, list[str]]]:
    grouped: dict[str, list[str]] = {}
    for repo, subject in rows:
        subject = subject.strip().rstrip(".")
        if not repo or not subject or is_merge(subject):
            continue
        lines = grouped.setdefault(repo, [])
        if subject not in lines and len(lines) < limit_lines:
            lines.append(subject)
    return list(grouped.items())[:limit_repos]


def render_brief(
    commits: list[dict],
    open_prs: list[dict],
    day: date,
) -> str:
    week = day.isocalendar().week
    this_week = group_lines(
        [(repo_name(item["repo"]), first_line(item["subject"])) for item in commits]
    )
    coming_up = group_lines(
        [(repo_name(item["repo"]), first_line(item["title"])) for item in open_prs]
    )
    parts = [
        f"Det här är Klas Veckologg, vecka {week}, den {swedish_date(day)}.",
        "Den här veckan har jag jobbat med de här projekten.",
    ]
    if not this_week:
        parts.append("Det var lugnt. Inga nya ändringar i projekten den här veckan.")
    else:
        for repo, lines in this_week:
            parts.append(f"{repo}. " + ". ".join(lines) + ".")
    parts.append("Nästa vecka är det här på gång.")
    if not coming_up:
        parts.append("Inget särskilt ligger öppet inför nästa vecka.")
    else:
        for repo, lines in coming_up:
            parts.append(f"{repo}. " + ". ".join(lines) + ".")
    return "\n\n".join(parts) + "\n"


def run_gh(args: list[str]) -> str:
    result = subprocess.run(["gh", *args], check=False, capture_output=True, text=True)
    if result.returncode != 0:
        detail = (result.stderr or result.stdout).strip()
        raise SystemExit(detail or "gh failed")
    return result.stdout


def fetch_commits(day: date, author: str = "Klas96") -> list[dict]:
    since = (day - timedelta(days=7)).isoformat()
    query = quote(f"author:{author} committer-date:>={since}")
    payload = json.loads(
        run_gh(
            [
                "api",
                "-H",
                "Accept: application/vnd.github+json",
                f"search/commits?q={query}&sort=committer-date&order=desc&per_page=30",
            ]
        )
    )
    commits = []
    for item in payload.get("items", []):
        commits.append(
            {
                "repo": item.get("repository", {}).get("full_name", ""),
                "subject": item.get("commit", {}).get("message", ""),
            }
        )
    return commits


def fetch_open_prs(author: str = "Klas96") -> list[dict]:
    payload = json.loads(
        run_gh(
            [
                "search",
                "prs",
                "--author",
                author,
                "--state",
                "open",
                "--limit",
                "20",
                "--json",
                "title,repository",
            ]
        )
    )
    prs = []
    for item in payload:
        repository = item.get("repository") or {}
        full_name = repository.get("nameWithOwner") or repository.get("name") or ""
        prs.append({"repo": full_name, "title": item.get("title", "")})
    return prs


def draft(day: date | None = None) -> str:
    day = day or datetime.now(timezone.utc).date()
    return render_brief(fetch_commits(day), fetch_open_prs(), day)
