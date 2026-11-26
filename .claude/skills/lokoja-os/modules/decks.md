# Decks

One deck engine, many houses. The engine (this file) sets structure, writing, layout discipline, charts and QA. The template (exactly one file from `templates/`) sets appearance, metadata and house vocabulary. Precedence when rules conflict: the template wins on appearance; this file wins on structure; `core/02-human-prose.md` wins on wording; facts and figures are never changed to satisfy any style rule.

## 1. Switching templates

1. Identify the house that will issue the deck: Seven Gates, neutral (business development for a third party, or no brand), or a private house template (employer and consulting templates are kept in the private edition of this OS). If unclear, ask once. A deck never mixes houses (`SKILL.md` section 4).
2. Load `templates/<house>.md`. If the user supplies a client template, follow it and keep this engine's discipline.
3. Find the house assets (logo, motif, ready-built template file) where the template file says they live. Copy the real template and edit in place when one exists; it preserves logo, fonts and colours exactly. Never draw a logo from memory or substitute a text wordmark.
4. Put every colour, font and coordinate from the template in a constants block at the top of the build script. No ad hoc values below it.
5. Set metadata from the template (author, company, title, subject; comments cleared) and remove every tool trace.

Default build library: **python-pptx**. Node.js libraries have produced files that fail to open on iOS (a hard rule from operations work, applied everywhere). If pptxgenjs is used for slide masters, test the file on iOS and strip repeated paragraph properties so PowerPoint does not ask to repair it.

## 2. Spine and slide jobs

- **One spine per deck**: five to seven sentences that connect the slides. Write it before building. Cut any slide that does not serve it, or move it to the appendix.
- **One job per slide**: what should the audience understand or decide after this slide? Two jobs means two slides, or one job made dominant.
- **Spines by purpose**: decision (problem, solution, economics, risks and gates, ask); program update (state, changes, status against plan, decisions); HSE (context, hazard, control, action); learning (context, gap, objective, practice); announcement (state, change, implication, action); investor or BD (problem, offer, proof, economics, risks, ask).
- **Pyramid**: the opening slide carries the core message; each section supports it; each slide supports its section.

## 3. Titles and text

- **Message titles**: the conclusion with its number, one line (about 75 characters at 22 pt, or two lines at most at 30 pt for templates that use larger titles). Never a category ("Background", "Overview", "Update", "Trial results", "Next steps").
- Titles pass checks 1 to 4 and 6 of the seven syntax checks: no noun stacks, no coined pairs, no nouns used as verbs, no personified data or limits.
- Takeaways, callouts and asks are full sentences that pass all seven checks.
- **Evidence before adjectives**: the number and its basis replace "robust", "significant", "strong".
- **Label uncertainty**: Confirmed, Assumed, Indicative, Pending, Modelled, For approval, Proposed.
- **Put the risk beside the claim** on the same slide.
- **Each fact appears once** in the main deck; reference detail goes to the appendix.
- **Density only where the reader needs it**: dense for registers, matrices and FMEA; sparse for the thesis, the ask and the economics.
- Read every title and label aloud at speed. Any line that sounds like a press release, a consultant or a chatbot is rewritten in the words a practitioner would use in a morning meeting.
- No speaker notes unless asked or unless the template requires them; basis detail goes to the appendix or a companion note.
- End on the ask or the next action, never on a summary slide.

## 4. Layout discipline

- Canvas 13.333 x 7.5 in (16:9) unless the template or an old deck requires otherwise.
- **Zones**: title, optional takeaway, body, footer. The body never enters the title or footer zones.
- **Grid**: margins and columns from the template. Where the template gives none, use 0.6 in margins and a 12-column body grid with 0.25 in gutters (column width 0.782 in; spans: 2 cols 1.81, 3 cols 2.85, 4 cols 3.88, 6 cols 5.94, 8 cols 8.00, 12 cols 12.13). Choose the split from the slide's job.
- **Vertical rhythm**: stack blocks top-down with a fixed gap (about 0.3 in). Never centre objects in leftover space.
- **Reserve then fill**: list each object's rectangle before placing it. No two objects share a rectangle. At least 0.2 in between adjacent labels.
- **Fit by arithmetic before rendering**: characters per line is about box width in points divided by (k x font size), with k about 0.50 for Arial, 0.52 for Georgia regular and 0.55 for Georgia bold. Lines = characters / characters per line, rounded up; height = lines x size x 1.2. If it does not fit, cut words or split the slide. Never shrink below the type floor; never overflow.
- **Type floor** unless the template sets a different one: body 13 pt (12 pt only on a dense data slide), table body 11 pt, captions and axis labels 10 pt, source line 9 pt.
- **One text box per conceptual unit**: a list, a card's lines or a timeline is one box with several paragraphs, never one box per line. Separate boxes only where the style changes (title, caps label, big figure and caption, footer). Tabular content in a native table.
- Left-align body text. Centre only titles if the template does.
- Never open or close on a dark block slide unless the template's cover requires it or the user asks.

## 5. Charts and tables

- Native, editable charts and tables only. No images of data or text.
- Every value axis has a title with units. Every series is named by a legend or direct label.
- Single-series charts: turn off the automatic title.
- Direct labels at line ends with four or fewer series; legend otherwise, never over data.
- Distinguish series by line style or marker as well as colour, so the chart reads in greyscale and for colour-blind viewers.
- Mark events with a thin grey vertical line and a short label. Shade constraint periods as labelled bands that do not sit on gridlines or cross data lines.
- Explain any drop or gap with a waterfall whose steps add exactly to the end values shown elsewhere.
- Sensitivities go on the same chart as a dotted line with an end label.
- Bars start at zero. No 3D, no gauges, no donuts, no pies beyond three slices.
- Number format: thousands separators, consistent decimals in a series, units not repeated in every label.
- `BAR_CLUSTERED` in python-pptx plots the first category at the bottom: reverse the list so the largest sits on top. Set series colours after creation by iterating `chart.series`. Use `<c:logBase val="10"/>` for a log axis where a series spans orders of magnitude.
- Data colours come from the template. Green and red only where good and bad is the point. Every status colour carries its word.

## 6. Anti-slop for slides

No accent lines beyond the template's own rules, no decorative bars or side stripes, no decorative icons, no generic three-card "challenge, solution, impact" layouts unless the three items are genuinely parallel, no fake technical visuals (abstract grids, generic rigs, random molecules), no decorative quote slides, no corporate filler, no cream or beige grounds unless the template uses one, no identical layout on every slide. Do not add irregularity to look human.

## 7. Build recipe

1. Fix the content: facts, figures, units, data dates, the decision, the owner.
2. Write the spine and every title. Run the syntax checks on the titles.
3. Load the template; copy the real template file if available.
4. Define helpers once: `header()`, `cover()`, `divider()`, `native_line()`, `native_bar()`, `kpi()`, `dtable()`, `source()`.
5. Reserve zones, estimate text heights, then place.
6. Write takeaways and bullets in full sentences; run the prose engine.
7. Set metadata, remove tool traces and shape shadows, patch theme fonts to the template's font.

## 8. QA (every deck, every time)

1. Convert to PDF with LibreOffice headless; render every page with pdftoppm; look at each slide for overflow, overlap, label collisions, wrapped titles, and logo, motif and rules in place.
2. Re-extract all text. Reconcile every number against its source and across slides, the companion report and the model. Check every "from Q3" style timing statement against each later period, not just the end points.
3. Search the text for em dashes, the slop lexicon, the retired register and the template's rejected phrases.
4. Search the package XML for colours outside the template's palette.
5. Confirm that editing changed no fact, figure, unit, name or date.
6. Open the file on a second viewer where possible (and on iOS).
7. Fix real issues once, re-verify the affected slides, then stop. Report what was checked, what was fixed and what remains open.

## 9. Review and scoring

When asked for a review, score out of 120 across spine, slide jobs, message titles, evidence, visual hierarchy, density control, design discipline, decision quality, authenticity, technical and commercial weight, governance, and artefact quality (10 each), and give a prioritised fix list. The CEO test applies to the first two slides.
