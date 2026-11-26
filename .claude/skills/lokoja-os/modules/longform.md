# Long form

For essays, underwrites, features, long reports and the "treatment" of a finished piece. Applies in Seven Gates by default; in other rooms, take the structure and leave the colour (`core/01-voice.md` section 11).

## 1. Before writing

1. Name, privately, the piece's one mechanism: the single thing the reader should understand by the end. Every story, reference and chart must illuminate it.
2. Write the two decision sentences (`core/04-thinking.md` section 1).
3. Choose the mode and length from the material (`modules/seven-gates.md` section 3).
4. Read the last 20 ledger entries and the permanent register. Choose an entry route, a shape, a hero concept and a closing cadence that none of the recent pieces used.
5. Build the evidence pack and do the arithmetic before the flourish.

## 2. Shapes

Pick the shape that the argument demands, then vary it across pieces.

- **Chronological**: the history is the mechanism (a family business across a century; a policy across three governments).
- **Causal**: start from the effect and walk back through the chain.
- **Single contradiction**: two facts that cannot both be true, resolved by the end.
- **Financial**: revenue to margin to cash to balance sheet to price; the story is where value leaks.
- **Constraint-following**: name the binding limit, follow it until it moves, then name the next one.
- **Two-part**: the story first, the underwrite second, with the opening image carried across the seam.
- **Five-part or more**: only for pieces that genuinely carry a century of history and a full valuation; record the accepted length.

Structure follows curiosity, causality and evidence. Hide the scaffolding. The reader should feel control without seeing the grid.

## 3. Moves that work

1. **Open cold on something concrete**: a moment with a place and a clock that contains the mechanism in miniature, a number whose meaning is not obvious, or a remembered experience. Turn it onto the subject within three sentences.
2. **One real public-record episode per major section**, with a date and a number, verified before use.
3. **At most one interchapter**, labelled ILLUSTRATION, 100 to 150 words: a short scene with unnamed people showing the mechanism landing on ordinary lives. Bring a character from it back later if it helps.
4. **Quotations where the argument turns**: in a long piece, usually zero to five, each doing work, each verified (`core/03-evidence.md` section 8). Anthology pieces follow `modules/repertoire.md` section 5.
5. **Plant the opening image and return to it** two or three times: in the diagnosis, in the contrarian case and at the close.
6. **End by resolving the opening**, not by summarising.
7. **Put the risk beside the claim** it qualifies.
8. **Let the numbers land in the prose**: one number per sentence where it carries the judgement; tables for anything with more than three numbers.
9. **The person who noticed**: where the record allows, show the specific analyst, engineer, regulator or shopkeeper who saw what the room missed.
10. **The far-field parallel**: one comparison from another domain that explains the mechanism better than the domain's own vocabulary can (`core/01-voice.md` section 4).

## 4. Moves that fail

- Opening on the category ("Family businesses are a feature of Nigerian markets").
- A scene that never returns to the thesis.
- A historical episode used because it is interesting rather than because it carries the mechanism.
- A reference that needs a sentence of explanation to justify itself.
- Three references in one section.
- A quotation that duplicates the prose.
- A narrator who keeps telling the reader what he is about to do.
- The same emotional pitch from opening to close.
- A closing paragraph that announces the end.

## 5. Drawing on past ideas, including our own

The house has an archive. Use it the way a serious columnist uses his own back catalogue: as context, not as recycled prose.

- **Link, do not repeat.** When a past piece did the work ("the Chellarams underwrite set out why a 2,000-share day is not a price"), link it and add what is new. Do not paste its memorable lines.
- **Carry frameworks, not phrases.** A method (the exit test, the matched-date return, the SOTP bridge) can be reused indefinitely. A phrase, joke, image or closing line is spent once it is in the ledger.
- **Say when the view has changed.** If a past piece reached a different conclusion, say so, give the date, and say what changed (`modules/seven-gates.md` section 6).
- **Series devices** are allowed and named as such: a recurring feature title, a running table, a standing chart. A recurring joke is not a series device.
- **Quoting our own past work** is allowed when the earlier wording is itself the evidence (a fair-value range we published, a prediction we made). Quote it exactly, with the date and a link.

## 6. The treatment (rewriting a finished piece into engaging long form)

The analysis, figures and conclusions stay exactly as written. What changes is how the reader travels through them.

1. Read `core/05-memory.md` and the last 20 ledger entries. Anything spent there is unavailable without the editor's agreement. Do not repeat an opening type used in the last two pieces.
2. **Inventory** the source before the first edit: every figure, table, chart, source link, rating line, key number and the sentence stating the conclusion.
3. Keep the mode's word range, or say plainly that the material needs more and record the accepted length.
4. Apply the moves in section 3.
5. Keep the author's best lines. Keep the headline, kicker and date unless asked.
6. Verify every historical episode and quotation; list the historical references in the research notes and flag those that deserve a second check.
7. **Compare the inventory after the last edit.** Every difference is deliberate and listed in the commit message. No figure, table, chart, source or rating changes unasked.
8. Run `tools/lokoja_lint.py` and the freshness check against the final text.
9. Publish per `modules/seven-gates.md` section 8; write the ledger entry in the same commit.
10. Report back briefly: the new opening, what was added or cut, the facts worth a second look, the live URL.

## 7. Compression

A long piece is usually shorter than the research behind it. Cut repeated explanation, background the reader can infer, the second example when the first proves the point, quotations that duplicate the prose, adjectives the number already carries, scene-setting that never returns, and any paragraph after which the reader knows nothing new. Length follows the complexity of the argument, not the writer's affection for the material.

## 8. Long-form release questions

- Would an intelligent reader continue after the first 150 words?
- Is the view visible early, with its levels and its weakness?
- Does every digression pay rent?
- Is the contrarian case fair enough that its holder would sign it?
- Does the ending resolve the opening rather than summarise the body?
- Has the final text, not the plan, been checked against the ledger?
- Did the lint pass, and were the numbers recomputed after the last edit?
