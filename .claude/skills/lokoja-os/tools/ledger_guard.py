#!/usr/bin/env python3
"""Ledger guard: a memory file only grows.

Compares two versions of a ledger, register or log and fails if entries
(### headings) or record rows (table lines starting with "| 20") were removed.
Written after the October 2026 incidents in which the Seven Gates repetition
ledger was overwritten from partial copies (lessons L4 and L28).

Usage:
  python3 ledger_guard.py OLD.md NEW.md [--allow-removal]
  python3 ledger_guard.py --git REPO PATH [--from REV] [--to REV]
  python3 ledger_guard.py --git REPO PATH --history [-n 200]

--history walks the file's commit history and lists every commit that removed
entries or record rows, so a past loss can be found and restored.
Exit code 1 when a removal is found (unless --allow-removal).
Standard library only; uses the git command line for --git.
"""
import argparse
import re
import subprocess
import sys


def parse(text):
    entries = re.findall(r"(?m)^#{2,4} (20\d\d-\d\d-\d\d[^\n]*)$", text)
    rows = re.findall(r"(?m)^\| (20\d\d-\d\d-\d\d \|[^\n]*)$", text)
    return {"entries": entries, "rows": rows, "lines": text.count("\n") + 1}


def compare(old, new):
    o, n = parse(old), parse(new)
    lost_entries = [e for e in o["entries"] if e not in set(n["entries"])]
    lost_rows = [r for r in o["rows"] if r not in set(n["rows"])]
    return {
        "old": {"entries": len(o["entries"]), "rows": len(o["rows"]), "lines": o["lines"]},
        "new": {"entries": len(n["entries"]), "rows": len(n["rows"]), "lines": n["lines"]},
        "lost_entries": lost_entries,
        "lost_rows": lost_rows,
    }


def git(repo, *args):
    out = subprocess.run(["git", "-C", repo] + list(args), capture_output=True, check=True).stdout
    return out.decode("utf8", errors="replace")


def show(repo, rev, path):
    try:
        return git(repo, "show", "%s:%s" % (rev, path))
    except subprocess.CalledProcessError:
        return ""


def report(res, label=""):
    o, n = res["old"], res["new"]
    print("%sentries %d -> %d | record rows %d -> %d | lines %d -> %d"
          % (label, o["entries"], n["entries"], o["rows"], n["rows"], o["lines"], n["lines"]))
    for e in res["lost_entries"][:50]:
        print("  LOST ENTRY: %s" % e)
    for r in res["lost_rows"][:50]:
        print("  LOST ROW:   %s" % r[:110])


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("files", nargs="*")
    ap.add_argument("--git", nargs=2, metavar=("REPO", "PATH"))
    ap.add_argument("--from", dest="rev_from", default="HEAD~1")
    ap.add_argument("--to", dest="rev_to", default="HEAD")
    ap.add_argument("--history", action="store_true")
    ap.add_argument("-n", type=int, default=200)
    ap.add_argument("--allow-removal", action="store_true")
    a = ap.parse_args()

    if a.git and a.history:
        repo, path = a.git
        revs = git(repo, "log", "--format=%h|%ad|%s", "--date=short", "-n", str(a.n), "--", path).strip().split("\n")
        bad = 0
        for line in revs:
            if not line:
                continue
            h, d, subj = line.split("|", 2)
            res = compare(show(repo, h + "~1", path), show(repo, h, path))
            if res["lost_entries"] or res["lost_rows"]:
                bad += 1
                print("%s %s %s" % (h, d, subj))
                report(res, "  ")
        print("%d commit(s) removed entries or rows" % bad)
        sys.exit(1 if bad and not a.allow_removal else 0)

    if a.git:
        repo, path = a.git
        old, new = show(repo, a.rev_from, path), show(repo, a.rev_to, path)
    elif len(a.files) == 2:
        old = open(a.files[0], encoding="utf8").read()
        new = open(a.files[1], encoding="utf8").read()
    else:
        ap.error("give OLD NEW files, or --git REPO PATH")
    res = compare(old, new)
    report(res)
    lost = res["lost_entries"] or res["lost_rows"]
    if lost and not a.allow_removal:
        print("FAIL: memory file lost entries or rows. Restore from history or pass --allow-removal for a stated correction.")
        sys.exit(1)
    print("PASS" if not lost else "PASS (removal allowed)")


if __name__ == "__main__":
    main()
