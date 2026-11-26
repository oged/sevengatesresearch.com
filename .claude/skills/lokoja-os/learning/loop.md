# The self-improvement loop

The OS improves from real use, not from theory. Every correction the editor gives, every defect that reaches a reader and every exemplar worth studying becomes a rule, a pattern or a technique, with a test that would have caught it. A correction given twice is a defect in the OS.

## 1. The algorithm

```
job delivered
  -> capture: lesson card (section 2)
  -> classify: type, room, severity, recurrence
  -> encode: rule in the right file; machine pattern in tools/patterns.json if it can be detected
  -> test: add a failing example to tools/tests/ and confirm the lint now catches it
  -> record: learning/lessons.md row; learning/changelog.md entry
  -> review: monthly audit (section 6) promotes, merges or deletes rules
```

Three inputs feed it:

1. **Corrections and defects** (section 2): the editor's edits, his complaints, and anything fixed after delivery.
2. **The editor's own edits** (section 3): the difference between the draft delivered and the text he published.
3. **Exemplars** (section 4): writing the editor admires or supplies, studied for technique, never copied for phrasing.

## 2. Lesson card (write after every substantial job and every correction)

```
ID:            next free L-number
Date:          26 November 2026
Room:          Seven Gates | Operations | Consulting | Academic | Email | Deck | All
What happened: one or two sentences, with the evidence (commit, file, quote of the editor's words)
Type:          lexicon | structure | voice | evidence | number | visual | template | memory | workflow | firewall
Severity:      Critical (reached a reader or broke the firewall) | Major (caught late) | Minor (caught in draft)
Recurrence:    first time | repeat (list earlier IDs)
Rule:          the rule in one sentence, written as an instruction
Lives in:      file and section
Machine check: pattern added to tools/patterns.json (id) | not automatable (why)
Test:          example that fails before the rule and passes after
```

Rules for writing the card:

- Quote the editor's own words where he stated the preference. They carry more authority than a paraphrase.
- Name the defect, not the person.
- If the lesson contradicts an existing rule, say which, and ask the editor which wins before changing either.
- A firewall breach is always Critical and is reported to the editor at once.

## 3. Learning from the editor's edits

When a draft comes back edited, or a published piece differs from the delivered draft:

1. Diff the two versions at sentence level.
2. Classify every change: fact or number corrected; wording made plainer; construction removed; reference cut or replaced; structure moved; tone changed; length changed.
3. For each class that appears more than once, propose a rule or a pattern.
4. Phrases the editor deleted go into the per-room rejected list (`core/05-memory.md` section 2) when he deletes the same family twice.
5. Phrases the editor added are not copied into other pieces; they are his and enter the ledger as spent.

## 4. Learning from exemplars

When the editor supplies or praises a piece of writing (an article, a speech, a report, a song, a book chapter):

1. Run `tools/style_profile.py` on it to measure sentence-length spread, paragraph length, opener types, question rate, quotation rate and function-word density. Compare with the house profile of recent Seven Gates pieces.
2. Read it for **techniques**: how it opens, how it moves between evidence and story, how it handles numbers, how it ends, what it leaves out.
3. Write each technique as a row in `library/techniques.md`: what it does, how to use it, its failure mode.
4. Never store the exemplar's phrases for reuse. Techniques transfer; sentences do not.
5. If the exemplar contradicts a house rule (for example, it uses rhetorical questions well), note the condition under which it works rather than loosening the rule.

## 5. Automatic retirement and promotion

- **Retirement**: when the lint or the ledger shows a construction, metaphor family or reference used three times inside the 20-piece window, propose its retirement to the editor with the instances. On approval, add it to `core/05-memory.md` and `tools/patterns.json` the same day.
- **Promotion**: a technique used well in three pieces without complaint is noted as reliable in `library/techniques.md`, and its last-use dates keep it from becoming a tic.
- **Overrides**: a one-piece override (`core/01-voice.md`) never retires or promotes anything by itself.

## 6. Monthly audit (`/audit_os`)

Run once a month, or when the editor asks. Report:

1. **Use**: which modules, templates and commands were used; which were not.
2. **Corrections**: number of lesson cards by type and room; repeated corrections (a correction given twice means the rule is missing, unclear or in the wrong place).
3. **Lint trend**: average hits per 1,000 words for the last ten published pieces against the ten before; which patterns still fire.
4. **Memory integrity**: run `tools/ledger_guard.py` against the last month's history of each ledger; report any loss.
5. **Freshness**: references, families and openings nearing the retirement threshold.
6. **Open decisions**: the list in `learning/changelog.md`, with a recommendation for each.
7. **Proposed changes**: for each, the problem, why it matters, the fix, the expected benefit and the files affected.
8. **Deletions**: rules nobody uses and that do not improve reliability are simplified or removed. Complexity is added only if it reduces future work or improves decision quality.

## 7. Where the learning is written

- **In a Claude Code session with the Seven Gates repository**: lesson cards for Seven Gates go to the ledger's corrections record or a `docs/lessons.md` file in the same commit as the fix.
- **In claude.ai, where an installed skill is read-only**: deliver the lesson card and a ready-to-apply patch for the OS file at the end of the job, and tell the editor which file to update in the skill settings. Do not pretend the OS has been changed.
- **Employer and consulting lessons** stay in the private edition; only a general writing rule, with no employer or client data, may enter this public edition.
- **Version**: any change to a rule raises the OS version (6.6.1 for wording and patterns, 6.7 for new rules or modules) and is logged in `learning/changelog.md`.

## 8. What the loop must never do

- Learn a fact from a draft and reuse it as evidence elsewhere.
- Copy an exemplar's sentences into house writing.
- Carry data across the firewall in the name of learning.
- Loosen a rule because a deadline is close.
