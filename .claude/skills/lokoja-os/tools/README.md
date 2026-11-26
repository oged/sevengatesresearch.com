# Tools

Standard-library Python 3 scripts. They run in Claude Code sessions, in Claude's code-execution sandbox when this OS is installed as a skill, or on any machine with Python 3.9 or later.

## lokoja_lint.py: the mechanical scan

```
python3 .claude/skills/lokoja-os/tools/lokoja_lint.py content/research/DRAFT.md --room sevengates --ledger docs/repetition-ledger.md
python3 .claude/skills/lokoja-os/tools/lokoja_lint.py report.md --room technical --strict
python3 .claude/skills/lokoja-os/tools/lokoja_lint.py text.txt --room email --json
```

Rooms: `sevengates`, `brief`, `technical`, `academic`, `email`, `deck`, `neutral`.

It reports:

- **HARD** findings that block release: em dashes, placeholders, "red team" in public copy, deprecated palette values, rejected technical terms, the printed "answer before the sermon" label.
- **WARN** findings: slop lexicon, retired constructions (all of `core/05-memory.md` that can be matched by pattern), personified data and markets, signpost openers, quotation framing, and metric breaches (", so", ", which", semicolons, triads, "not X but Y", questions, sentence-length spread, short paragraph endings).
- **REVIEW** items for a human read: short sentences with no number (verdict or signpost?), long sentences, repeated four-word phrases, intensifiers, imperative openers, names on the misattribution watchlist, six-word overlaps with spent ledger phrases.

With `--ledger`, it compares the draft with every memorable phrase and quotation recorded in the ledger, skipping the draft's own entry (matched by file name and slug).

What it cannot do: judge whether a reference pays rent, whether an argument is right, whether a structural device has been used too often, or whether a metaphor belongs to a retired family under new nouns. Those stay with the editor and `core/05-memory.md`.

Calibration (26 November 2026, four published Seven Gates pieces): no hard findings once link text was excluded from the placeholder rule; the retired "would matter more than" and "plumbing" constructions were found in pieces written before their retirement, as expected; short paragraph endings ran at 0.46 to 0.56 of paragraphs, so the warning threshold is 0.40.

## ledger_guard.py: memory only grows

```
python3 .claude/skills/lokoja-os/tools/ledger_guard.py OLD.md NEW.md
python3 .claude/skills/lokoja-os/tools/ledger_guard.py --git . docs/repetition-ledger.md                  # HEAD~1 against HEAD
python3 .claude/skills/lokoja-os/tools/ledger_guard.py --git . docs/repetition-ledger.md --history -n 300 # find past losses
```

Fails when dated entries (`### 2026-...` headings) or dated record rows (`| 2026-... |`) disappear. Run it before every commit that touches a ledger, register or log, and in any automated publisher. On this repository on 26 November 2026, `--history` found four commits that removed entries: 7a6bbc0 (24 October), 1bcc466 (27 October), 88f80bc (29 October) and 0d5faa3 (3 November).

## style_profile.py: learning from exemplars

```
python3 .claude/skills/lokoja-os/tools/style_profile.py EXEMPLAR.md
python3 .claude/skills/lokoja-os/tools/style_profile.py EXEMPLAR.md DRAFT.md
```

Measures form only: sentence-length mean, median, spread and mix; paragraph length; openers; questions, quotations, passives and adverbs per 1,000 words; share of sentences carrying a number; function-word share; type-token ratio. Use the comparison to see how a draft's rhythm differs from an admired piece, then write the technique (not the phrases) into `library/techniques.md`.

## patterns.json: rules as data

Every machine-checkable rule lives here, with its room, severity, message and the lesson or section it came from. The learning loop adds patterns without code changes. In this public edition, never add patterns that name an employer, a client or a person (`SKILL.md` section 4). After adding one, run the self-test.

## Self-test

```
python3 .claude/skills/lokoja-os/tools/lokoja_lint.py .claude/skills/lokoja-os/tools/tests/slop_sample.md --room sevengates   # expect HARD >= 5
python3 .claude/skills/lokoja-os/tools/lokoja_lint.py .claude/skills/lokoja-os/tools/tests/reuse_sample.md --room sevengates --ledger docs/repetition-ledger.md  # expect ledger_exact
```
