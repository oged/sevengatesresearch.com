# Change log and open decisions (public edition)

## Lineage

| Version | Date | What it was |
|---|---|---|
| Seven Gates standard v0.3 to v0.6 | July to 30 September 2026 | Repository editorial standard: voice, research, ratings, corrections, visuals, ledger, gates G1 to G16, retired register |
| v6.2 | 2 October 2026 | Master standard PDF; added liquidity, SOTP, matched dates, sentence geometry |
| v6.3 | 5 October 2026 | Merged v6.2 and v0.6; lessons L1 to L17; gates G0 to G22 (unadopted draft on branch `docs/editorial-standard-v6.3`) |
| v6.4 | 23 October 2026 | Chellarams lessons L18 to L27, G23 (same branch, unadopted) |
| 6.5 (content only) | 31 October 2026 | Retirements of narrator constructions recorded in the ledger (c1505b5) |
| **Lokoja OS 6.6** | 26 November 2026 | One OS for every room: the Seven Gates standard plus Stop Slop, Clear Technical Writing, Hemingway, Hemingway-Oil, Hemingway-Slides and the Executive Communication Advisor, the house decision and challenge tools, session lessons and the repository history to 26 November 2026. Adds the PhD module, the repertoire engine, the thinker library, the technique library, the self-improvement loop, new lessons and the tools. |

This public edition omits employer and consulting templates, client details and personal material. The private edition carries them and is installed separately.

## What this OS supersedes

- For craft and voice: `stop-slop`, `clear-technical-writing`, `hemingway-oil`, `hemingway-slides`, `executive-communication-advisor` and the voice sections of the house operating systems.
- For Seven Gates editorial rules: the v6.4 standard on the `docs/editorial-standard-v6.3` branch and, for craft, `docs/editorial-standard.md` v0.6 on `main`. The repository keeps publication mechanics.
- The `seven-gates-longform` skill's moves are folded into `modules/longform.md`; the `daily-brief` skill remains the Brief's procedure, with this OS's palette and ledger overrides.

## Open decisions for the editor

1. **Adopt the standard.** `main` still carries v0.6 and `CLAUDE.md` says "G1 to G16". Adopting means replacing `docs/editorial-standard.md` (v6.4, or a v6.6 rewrite from `modules/seven-gates.md`) and updating `CLAUDE.md` and the repository skills.
2. **Restore the ledger.** Commits on 24 and 29 October 2026 removed the research entries (July to October) and the corrections record (24 rows) from the ledger. They can be restored from commit 7a6bbc0~1 and merged with later entries; `tools/ledger_guard.py` confirms the result.
3. **Fix the daily publisher** so it appends to the ledger instead of rewriting it.
4. **Evidence labels.** Confirm prose attribution with inline links replaces "labels belong inline" in `CLAUDE.md`.
5. **Feature length.** Confirm the 4,000 to 9,000-word Feature mode with editor acceptance.
6. **Overrides.** Confirm one-piece overrides of retired constructions, recorded in the ledger.
7. **First person and disclosure.** Confirm the first-person narrator with an unnamed author, and whether rated pieces need a standing disclosure line.
8. **Lyrics.** Confirm the 25-word ceiling for lyrics and in-copyright prose.
9. **PDF editions.** Required for every research piece, or only for stock research and long pieces?
10. **Five-year chart.** Is a disclosed sparse series compliant, or should publication wait for a daily or weekly series?
11. **Site palette.** The site's warm neutrals and green masthead differ from the brand guide; confirm which governs new web work.
12. **Research validator.** Build `validate:research` from `tools/lokoja_lint.py` and the gate list.
