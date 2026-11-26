#!/usr/bin/env python3
"""Style profile: measure how a text is written, and compare two texts.

Used by the learning loop (learning/loop.md section 4) to study an exemplar
and to compare a draft with it or with the house profile. It measures form,
never content: the point is to learn techniques, not to copy phrases.

Usage:
  python3 style_profile.py FILE                 profile one text
  python3 style_profile.py EXEMPLAR DRAFT       compare two texts
  python3 style_profile.py --json FILE [FILE]   machine-readable output

Standard library only. Shares the prose extraction of lokoja_lint.py.
"""
import json
import re
import statistics
import sys
from collections import Counter
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lokoja_lint import strip_to_prose, paragraphs, sentences, words  # noqa: E402

FUNCTION = set("the a an of to in on at by for with from and but or so as that which who whom whose this these those it its is are was were be been being have has had do does did not no".split())


def profile(path):
    raw = open(path, encoding="utf8", errors="replace").read()
    prose = strip_to_prose(raw)
    paras = paragraphs(prose)
    sents = [s for p in paras for s in sentences(p)]
    toks = [w.lower() for s in sents for w in words(s)]
    lens = [len(words(s)) for s in sents] or [0]
    plens = [len(words(p)) for p in paras] or [0]
    first = Counter(words(s)[0].lower() for s in sents if words(s))
    n = len(toks) or 1
    q = sum(1 for s in sents if s.endswith("?"))
    quotes = len(re.findall(r"[\"“][^\"”]{3,}[\"”]", prose))
    passive = len(re.findall(r"\b(?:is|are|was|were|been|being|be)\s+\w+ed\b", prose, re.I))
    ly = sum(1 for t in toks if t.endswith("ly") and len(t) > 4)
    numbers = sum(1 for s in sents if re.search(r"\d", s))
    buckets = Counter()
    for L in lens:
        buckets["1-8" if L <= 8 else "9-15" if L <= 15 else "16-25" if L <= 25 else "26-40" if L <= 40 else "41+"] += 1
    total = len(sents) or 1
    return {
        "file": path,
        "words": n,
        "sentences": len(sents),
        "sentence_mean": round(statistics.mean(lens), 1),
        "sentence_median": statistics.median(lens),
        "sentence_sd": round(statistics.pstdev(lens), 1) if len(lens) > 1 else 0,
        "sentence_mix_pct": {k: round(100.0 * buckets[k] / total) for k in ["1-8", "9-15", "16-25", "26-40", "41+"]},
        "paragraph_mean_words": round(statistics.mean(plens), 1),
        "paragraph_sd": round(statistics.pstdev(plens), 1) if len(plens) > 1 else 0,
        "top_openers": first.most_common(8),
        "opener_the_pct": round(100.0 * first.get("the", 0) / total),
        "questions_per_1000w": round(1000.0 * q / n, 2),
        "quotations_per_1000w": round(1000.0 * quotes / n, 2),
        "passive_per_1000w": round(1000.0 * passive / n, 2),
        "ly_adverbs_per_1000w": round(1000.0 * ly / n, 2),
        "sentences_with_numbers_pct": round(100.0 * numbers / total),
        "function_word_pct": round(100.0 * sum(1 for t in toks if t in FUNCTION) / n, 1),
        "type_token_ratio": round(len(set(toks)) / n, 3),
        "mean_word_length": round(statistics.mean(len(t) for t in toks), 2) if toks else 0,
    }


def compare(a, b):
    keys = ["sentence_mean", "sentence_median", "sentence_sd", "paragraph_mean_words", "paragraph_sd",
            "opener_the_pct", "questions_per_1000w", "quotations_per_1000w", "passive_per_1000w",
            "ly_adverbs_per_1000w", "sentences_with_numbers_pct", "function_word_pct",
            "type_token_ratio", "mean_word_length"]
    rows = []
    for k in keys:
        x, y = a[k], b[k]
        rows.append((k, x, y, round(y - x, 2) if isinstance(x, (int, float)) else ""))
    return rows


def main():
    args = [x for x in sys.argv[1:] if x != "--json"]
    as_json = "--json" in sys.argv
    if not args or len(args) > 2:
        sys.exit(__doc__)
    profs = [profile(p) for p in args]
    if as_json:
        print(json.dumps(profs, indent=2, ensure_ascii=False))
        return
    for p in profs:
        print("=" * 60)
        print(p["file"])
        for k, v in p.items():
            if k != "file":
                print("  %-28s %s" % (k, v))
    if len(profs) == 2:
        print("=" * 60)
        print("%-28s %12s %12s %10s" % ("metric", "exemplar", "draft", "diff"))
        for k, x, y, d in compare(*profs):
            print("%-28s %12s %12s %10s" % (k, x, y, d))


if __name__ == "__main__":
    main()
