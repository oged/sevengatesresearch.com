#!/usr/bin/env python3
"""Lokoja OS prose linter.

Runs the mechanical scan from core/02-human-prose.md section 8 and the
machine-checkable rules in tools/patterns.json against Markdown, text or
HTML files.

Usage:
  python3 lokoja_lint.py FILE [FILE ...] [--room ROOM] [--ledger LEDGER.md]
                         [--json] [--strict] [--patterns patterns.json]

Rooms: sevengates, brief, technical, academic, email, deck, neutral. The room switches room-specific patterns and thresholds.

Exit code: 0 when no hard failures (or always 0 without --strict);
1 when --strict and any hard failure or threshold breach is found.
Standard library only.
"""
import argparse
import html
import json
import os
import re
import statistics
import sys
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))

ABBREV = r"(?:Mr|Mrs|Ms|Dr|Prof|St|No|Nos|Fig|Figs|vs|etc|e\.g|i\.e|Inc|Ltd|Plc|Co|Jr|Sr|U\.S|U\.K|approx|cf|al)"


def load_patterns(path):
    with open(path, encoding="utf8") as fh:
        return json.load(fh)


def strip_to_prose(text):
    """Return (prose, lines_map) with frontmatter, code, tables, HTML tags,
    image markup and URLs removed. Keeps paragraph breaks."""
    # frontmatter
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            text = text[end + 4:]
    # fenced code
    text = re.sub(r"```.*?```", "\n", text, flags=re.S)
    # HTML: keep inner text of block elements, drop tags
    text = re.sub(r"<(script|style)\b.*?</\1>", " ", text, flags=re.S | re.I)
    text = re.sub(r"<br\s*/?>", "\n", text, flags=re.I)
    text = re.sub(r"</(p|div|li|tr|h[1-6]|figcaption|blockquote)>", "\n\n", text, flags=re.I)
    text = re.sub(r"<[^>]+>", " ", text)
    text = html.unescape(text)
    out_lines = []
    for line in text.split("\n"):
        s = line.strip()
        if s.startswith("|"):          # markdown table rows
            out_lines.append("")
            continue
        if re.match(r"^#{1,6}\s", s):  # headings are not prose sentences
            out_lines.append("")
            continue
        s = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", s)          # images
        s = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)      # links keep text
        s = re.sub(r"https?://\S+", " ", s)                   # bare urls
        s = re.sub(r"^[>\-*+]\s+|^\d+\.\s+", "", s)           # list and quote markers
        s = s.replace("**", "").replace("__", "")
        out_lines.append(s)
    return "\n".join(out_lines)


def paragraphs(prose):
    paras = [re.sub(r"\s+", " ", p).strip() for p in re.split(r"\n\s*\n", prose)]
    return [p for p in paras if len(p.split()) >= 4]


def sentences(par):
    protected = re.sub(r"\b(" + ABBREV + r")\.", lambda m: m.group(1) + "<DOT>", par)
    protected = re.sub(r"(\d)\.(\d)", r"\1<DOT>\2", protected)
    parts = re.split(r"(?<=[.!?])[\"')\]]?\s+(?=[\"'(\[]?[A-Z0-9₦$£€])", protected)
    return [p.replace("<DOT>", ".").strip() for p in parts if p.strip()]


def words(s):
    return re.findall(r"[A-Za-z0-9₦$£€%'’-]+", s)


def has_number(s):
    return bool(re.search(r"\d", s))


def line_of(text, idx):
    return text.count("\n", 0, idx) + 1


def room_thresholds(cfg, room):
    t = dict(cfg["thresholds"]["default"])
    t.update(cfg["thresholds"].get(room, {}))
    return t


def applies(rule_rooms, room):
    return "all" in rule_rooms or room in rule_rooms


def ledger_phrases(path, exclude_slug=None):
    """Memorable phrases and quotations recorded in a repetition ledger,
    skipping the entry and quotation rows for exclude_slug (the piece being
    checked), so a published piece is not flagged for its own phrases."""
    phrases = set()
    current = None
    with open(path, encoding="utf8") as fh:
        for line in fh:
            h = re.match(r"^#{2,4} 20\d\d-\d\d-\d\d[^\n]*?·\s*(\S+)", line)
            if h:
                current = h.group(1).strip()
                continue
            if line.startswith("## "):
                current = None
            if exclude_slug and current and exclude_slug in current:
                continue
            if exclude_slug and line.startswith("| ") and exclude_slug in line:
                continue
            if "Memorable phrase" in line or line.startswith('| "') or line.startswith("| \u201c"):
                for q in re.findall(r'["\u201c]([^"\u201d]{18,200})["\u201d]', line):
                    q = q.strip().rstrip(".,;:")
                    if len(q.split()) >= 5:
                        phrases.add(q)
    return phrases


def shingles(text, n=6):
    toks = [w.lower() for w in re.findall(r"[A-Za-z0-9']+", text)]
    return {" ".join(toks[i:i + n]) for i in range(len(toks) - n + 1)}


def lint_file(path, cfg, room, ledger=None):
    raw = open(path, encoding="utf8", errors="replace").read()
    prose = strip_to_prose(raw)
    paras = paragraphs(prose)
    sents = [s for p in paras for s in sentences(p)]
    nwords = sum(len(words(s)) for s in sents) or 1
    per_k = lambda n: round(n * 1000.0 / nwords, 2)
    th = room_thresholds(cfg, room)
    findings = []

    def add(rule_id, severity, message, idx=None, snippet="", source=""):
        findings.append({
            "rule": rule_id, "severity": severity, "message": message,
            "line": line_of(raw, idx) if idx is not None else None,
            "snippet": snippet.strip()[:120], "source": source})

    # patterns on raw text (catches captions, alt text and frontmatter too)
    counts = Counter()
    for pat in cfg["patterns"]:
        if not applies(pat["rooms"], room):
            continue
        flags = 0 if pat.get("case_sensitive") else re.I
        for m in re.finditer(pat["regex"], raw, flags):
            # ignore URLs and file paths for word rules
            ctx_start = raw.rfind(" ", 0, m.start()) + 1
            token = raw[ctx_start:m.end() + 20]
            if pat["id"] not in ("em_dash", "spaced_en_dash", "deprecated_hex", "roo_banned_hex") and ("/" in token.split()[0] if token.split() else False):
                continue
            counts[pat.get("counts_as", pat["id"])] += 1
            s0 = max(0, m.start() - 40)
            add(pat["id"], pat["severity"], pat["message"], m.start(), raw[s0:m.end() + 40], pat.get("source", ""))

    # lexicon
    lex = cfg["lexicon"]
    if applies(lex["rooms"], room):
        for term in lex["terms"]:
            for m in re.finditer(r"\b" + re.escape(term) + r"\b", raw, re.I):
                s0 = max(0, m.start() - 30)
                add("lexicon", lex["severity"], "Slop lexicon: '%s'" % term, m.start(), raw[s0:m.end() + 30], lex["source"])

    # mechanical metrics on prose
    so = len(re.findall(r",\s+so\b", prose))
    which = len(re.findall(r",\s+which\b", prose))
    semis = prose.count(";")
    questions = sum(1 for s in sents if s.rstrip().endswith("?"))
    triads = len(re.findall(r"\b\w+(?: \w+)?, \w+(?: \w+)?,? and \w+", prose))
    lens = [len(words(s)) for s in sents]
    sd = round(statistics.pstdev(lens), 1) if len(lens) > 1 else 0.0
    short_no_num = [s for s in sents if len(words(s)) <= 8 and not has_number(s)]
    finals = [sentences(p)[-1] for p in paras if sentences(p)]
    final_short = [f for f in finals if len(words(f)) <= 12]
    final_ratio = round(len(final_short) / len(finals), 2) if finals else 0
    long_sents = [s for s in sents if len(words(s)) > th["max_sentence_words"]]
    first_words = [words(s)[0].lower() for s in sents if words(s)]
    same_start = sum(1 for a, b in zip(first_words, first_words[1:]) if a == b and a not in ("the",))
    grams = Counter()
    for s in sents:
        w = [x.lower() for x in words(s)]
        for i in range(len(w) - 3):
            grams[" ".join(w[i:i + 4])] += 1
    repeated = [(g, c) for g, c in grams.most_common(15) if c >= 3]

    metrics = {
        "words": nwords, "sentences": len(sents), "paragraphs": len(paras),
        "mean_sentence": round(statistics.mean(lens), 1) if lens else 0,
        "median_sentence": statistics.median(lens) if lens else 0,
        "sentence_sd": sd,
        "so_per_1000": per_k(so), "which_per_1000": per_k(which),
        "semicolon_per_1000": per_k(semis), "triads_per_1000": per_k(triads),
        "questions": questions, "not_x_y": counts["not_x_y"],
        "short_no_number": len(short_no_num),
        "final_short_ratio": final_ratio,
        "long_sentences": len(long_sents),
        "same_start_pairs": same_start,
        "repeated_4grams": repeated,
    }

    def breach(name, value, limit, kind="max"):
        bad = value > limit if kind == "max" else value < limit
        if bad:
            add("metric:" + name, "warn", "%s = %s (limit %s %s)" % (name, value, "max" if kind == "max" else "min", limit),
                source="core/02-human-prose.md section 8")
        return bad

    if nwords >= 400:
        breach("so_per_1000", metrics["so_per_1000"], th["so_per_1000"])
        breach("which_per_1000", metrics["which_per_1000"], th["which_per_1000"])
        breach("semicolon_per_1000", metrics["semicolon_per_1000"], th["semicolon_per_1000"])
        breach("triads_per_1000", metrics["triads_per_1000"], th["triads_per_1000"])
        breach("sentence_sd", metrics["sentence_sd"], th["sentence_sd_min"], kind="min")
        breach("final_short_ratio", metrics["final_short_ratio"], th["final_short_ratio_max"])
    breach("not_x_y", metrics["not_x_y"], th["not_x_y_max"])
    breach("questions", metrics["questions"], th["questions_max"])
    for s in long_sents[:10]:
        add("long_sentence", "review", "Sentence of %d words" % len(words(s)), snippet=s[:120], source="core/02-human-prose.md section 2 check 5")
    for s in short_no_num[:15]:
        add("short_sentence", "review", "Short sentence with no number: verdict or signpost?", snippet=s, source="core/02-human-prose.md section 4")
    for g, c in repeated:
        add("repeated_4gram", "review", "'%s' appears %d times" % (g, c), source="core/02-human-prose.md section 8")

    # ledger repetition
    if ledger:
        slug = os.path.splitext(os.path.basename(path))[0]
        lp = ledger_phrases(ledger, exclude_slug=slug)
        low = re.sub(r"\s+", " ", prose.lower())
        draft_sh = shingles(prose)
        for ph in sorted(lp):
            if ph.lower() in low:
                add("ledger_exact", "warn", "Spent phrase from the ledger reused", snippet=ph, source="core/05-memory.md section 4")
            else:
                sh = shingles(ph)
                if sh and draft_sh & sh:
                    add("ledger_near", "review", "Six-word overlap with a spent ledger phrase", snippet=ph, source="core/05-memory.md section 4")

    hard = [f for f in findings if f["severity"] == "hard"]
    warn = [f for f in findings if f["severity"] == "warn"]
    review = [f for f in findings if f["severity"] == "review"]
    return {"file": path, "room": room, "metrics": metrics,
            "summary": {"hard": len(hard), "warn": len(warn), "review": len(review)},
            "findings": findings}


def print_report(res):
    m = res["metrics"]
    s = res["summary"]
    print("=" * 72)
    print("%s  [room: %s]" % (res["file"], res["room"]))
    print("words %d | sentences %d | paragraphs %d | mean %.1f | median %s | sd %.1f"
          % (m["words"], m["sentences"], m["paragraphs"], m["mean_sentence"], m["median_sentence"], m["sentence_sd"]))
    print(", so %.2f/1k | , which %.2f/1k | ; %.2f/1k | triads %.2f/1k | not-X-Y %d | questions %d"
          % (m["so_per_1000"], m["which_per_1000"], m["semicolon_per_1000"], m["triads_per_1000"], m["not_x_y"], m["questions"]))
    print("short sentences without numbers %d | paragraph-final short ratio %.2f | long sentences %d | same-start pairs %d"
          % (m["short_no_number"], m["final_short_ratio"], m["long_sentences"], m["same_start_pairs"]))
    print("HARD %d | WARN %d | REVIEW %d" % (s["hard"], s["warn"], s["review"]))
    order = {"hard": 0, "warn": 1, "review": 2}
    for f in sorted(res["findings"], key=lambda f: (order[f["severity"]], f["line"] or 0)):
        loc = "L%s" % f["line"] if f["line"] else "--"
        print("  [%s] %-6s %-22s %s" % (f["severity"].upper(), loc, f["rule"], f["message"]))
        if f["snippet"]:
            print("           > %s" % f["snippet"].replace("\n", " "))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("files", nargs="+")
    ap.add_argument("--room", default="sevengates")
    ap.add_argument("--ledger")
    ap.add_argument("--patterns", default=os.path.join(HERE, "patterns.json"))
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--strict", action="store_true")
    a = ap.parse_args()
    cfg = load_patterns(a.patterns)
    if a.room not in cfg["rooms"]:
        sys.exit("Unknown room '%s'. Rooms: %s" % (a.room, ", ".join(cfg["rooms"])))
    results = [lint_file(f, cfg, a.room, a.ledger) for f in a.files]
    if a.json:
        print(json.dumps(results, indent=2, ensure_ascii=False))
    else:
        for r in results:
            print_report(r)
    failed = any(r["summary"]["hard"] for r in results)
    sys.exit(1 if (a.strict and failed) else 0)


if __name__ == "__main__":
    main()
