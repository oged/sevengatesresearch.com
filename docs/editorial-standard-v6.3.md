---
title: "Master Editorial, Research, Visual and Publishing Standard"
version: "v6.3"
status: "Working master"
revision_date: "2026-10-05"
house_voice: "The Lokoja Contrarian"
supersedes: "v6.2 (PDF, 2 October 2026) and docs/editorial-standard.md v0.6"
---

# Seven Gates Research: Master Editorial, Research, Visual and Publishing Standard (v6.3)

Working master. Default model: Dangote Refinery IPO format. House voice: The Lokoja Contrarian. Operating maxim: strong opinions, loosely held; capital, tightly held. Primary test: fine grammar, where is the cash? House rule: interesting first, correct always.

**What changed in v6.3.** Version 6.2 and the repository's v0.6 had drifted into two separate documents, each holding rules the other lacked. v6.3 is the single merged master. It adds what v6.2 lacked (ratings with horizons and review dates, the corrections protocol, the publication ladder, the ban on "red team" in public copy, the hard-gate and advisory split) and keeps what v0.6 lacked (the enduring review gate, sentence-geometry audit, matched NGN and USD dates, liquidity and exit test, SOTP bridge, development ledger). It then closes the gaps that the September and October 2026 publications exposed: file integrity checks for images and PDFs, a recomputation rule for derived numbers, a rewrite inventory, a repository frontmatter map, a publication runbook, a lessons-learnt register and a specification for the automated checks that research articles still lack. Section numbers cited by `CLAUDE.md`, the skills and the ledger are preserved. The full change record is Appendix E.

## Release card

One page. It does not replace the standard; it orders the work. IDs refer to gates in 19.

1. **Read** this standard (G0) and the last 20 ledger entries plus the permanent register (6.4, A1, A5).
2. **Decide** the reader's decision, the one-sentence claim and the mode (12.1). Schedule the five-year chart now if a listed stock is the subject (10.10).
3. **Evidence.** Dated sources, price, FX source and dates, free float and daily traded value (7, 8.6, 8.7). Inventory first if this is a rewrite or refresh (12.11).
4. **Arithmetic before prose.** Valuation, scenarios, SOTP bridge (9). Recompute every derived number from its inputs (7.4, G1).
5. **Draft.** Fresh signature (5.4), answer early (4.8), evidence labels inline (7.1), no em dashes, no slop, no retired families (5.5, 5.6, A1).
6. **Rating.** Horizon, reference price date, fair value, entry or walk-away price, review date (9.4, G7).
7. **Visuals.** Brand palette only (3.3). Real data, insight titles, source notes (10). Open every image, SVG and PDF in full (11.5, G20).
8. **One truth.** Date, price, rating and review date identical on every surface (G22). Mechanical scan: em dashes, "red team", placeholders, deprecated hex.
9. **Ledger.** Write the entry in the same commit (G8). Add a corrections row if a view or number changed (16.4).
10. **Ship as one commit.** `npm run validate` for briefs, the manual scans for research (Appendix D), then push to `main` (Appendix B).
11. **Verify live.** READY, page, hero, figures, tables, disclaimer, PDF (P1 to P6).

## 0. Enduring Editorial Review Gate

This standard is not a museum piece. It is an operating control.

Before any Seven Gates article, note, PDF, briefing, chart pack or publication package is released, the **current** Master Editorial, Research, Visual and Publishing Standard must be reviewed and applied. A writer or model may not rely on remembered house style, an older prompt, a previous PDF or a convenient template.

The review covers the current rules on:

- factual verification and data cut-offs;
- prose and anti-LLM sentence geometry;
- repetition, quotation and permanent-retirement ledgers;
- analytical method, valuation, ratings and corrections;
- Nigeria-specific FX, liquidity and investability;
- chart, table and image standards, including file integrity;
- PDF and mobile rendering;
- metadata, source notes, legal disclaimer and live-page checks.

If the standard has changed since the last article, the new standard wins. An older article is precedent for facts that remain true, not for execution.

**Release rule.** No publication until the current standard has been reviewed against the final artefact, not merely the draft text.

**One file, one version.** The standard lives in one file and carries one version number. Two documents that both claim the same version number are a defect (Appendix C, L12). Every article records the version it was checked against in its metadata (`template_version`).

## 1. What This Document Controls

This is the canonical Seven Gates Research publication standard. It governs:

- company research;
- earnings reviews;
- valuation notes;
- contrarian essays;
- macro and political-economy research;
- thematic research;
- quantitative research;
- market commentary;
- Daily Brief and shorter analytical notes where the full template would be excessive;
- editorial illustrations, charts, tables, callouts and scenario panels;
- titles, subtitles, metadata, sources, disclaimers and publication QA;
- rewrites and refreshes of published pieces;
- corrections, rating changes and the withdrawal of a published view.

It replaces the need to consult several overlapping style notes before every article.

The goal is not visual uniformity for its own sake. The goal is recognisable Seven Gates judgement: independent, sceptical, numerate, Nigerian in knowledge rather than costume, internationally intelligible, visually premium and willing to say that a good company can still be a bad security at the wrong price.

Seven Gates should look and read like a research house with an editor, an investment committee and a memory.

Not a collection of clever posts.

Not a consultant deck translated into paragraphs.

Certainly not a machine wearing a pocket square.

## 2. Rule Hierarchy: What Wins When Sources Conflict

To remove ambiguity, apply the following precedence.

### 2.1 Factual truth wins first

Current verified evidence outranks all previous prose, templates, charts and assumptions. An elegant old sentence does not survive a new filing.

Research wins over narrative. Never preserve a story because it is entertaining after the evidence has killed it, and never bend evidence to protect a Seven Gates house view. Change the view. That is the point of having a research house rather than a fan club.

### 2.2 The Seven Gates brand guide owns identity

The approved logo, mark, core colours, typography and use restrictions come from the Seven Gates brand guide. Do not improvise the logo because a chart designer has discovered enthusiasm.

### 2.3 The Dangote Refinery IPO owns default publication architecture

Use the Dangote Refinery IPO as the model for how a substantial Seven Gates piece is assembled: strong editorial opening, immediate investment judgement, key facts, numbered analytical sections, real charts, scenario analysis where relevant, compact source notes and a hard conclusion.

Do not copy its jokes, metaphors or exact section names. Copy the discipline of the package.

### 2.4 The Lokoja Contrarian manual owns prose voice

It controls temperament, rhythm, humour, cultural references, engineering logic, scepticism, anti-slop rules, quotation discipline and the obligation to separate asset, business, management, balance sheet and security.

### 2.5 This master standard owns execution

Where older documents repeat or slightly contradict one another, this document is the operational rule for future publication. Skills and project instructions (`CLAUDE.md`, the `daily-brief` and `seven-gates-longform` skills) implement this standard. Where one of them disagrees with it, this standard wins and the skill is corrected in the same commit that notices the disagreement.

### 2.6 Conflicts inside this document

Where this document appears to contradict itself, doctrine outranks running order.

Section 5.4 governs how an article is shaped. The flows in section 12 are coverage checklists that list what a piece of that type must cover somewhere. They are not a sequence, and an article assembled by following one of them line by line has probably failed 5.4.

Where a rule of craft meets a rule of evidence, evidence wins. A standard about writing does not get to overrule a standard about truth.

### 2.7 Section numbers are an interface

Project instructions, skills and ledger entries cite this standard by section number and by gate ID. Renumbering silently breaks them. Section numbers and gate IDs are therefore stable between versions. If a renumbering is unavoidable, the same commit updates every citation and Appendix E records the mapping.

## 3. Seven Gates Identity

### 3.1 Name and positioning

**SEVEN GATES RESEARCH.** Independent research on companies, markets and power.

The brand is analytical rather than promotional. It should signal that the reader will receive a view, the arithmetic behind it and the conditions under which the view changes.

The public voice is attributed to The Lokoja Contrarian. No individual author is named.

The identity should never feel like a brokerage research clone. Seven Gates is allowed to have taste, curiosity and a sharp tongue. It is not allowed to use taste as a substitute for evidence.

### 3.2 The seven gates

The Etruscan gateway mark encodes seven analytical gates:

1. Ownership and governance
2. Business economics
3. Financial integrity
4. Capital allocation
5. Competitive endurance
6. Valuation and expected return
7. Downside, catalysts and portfolio fit

These are research disciplines, not seven compulsory article headings. The argument decides the structure. A short piece may touch only the gates that matter. A full company underwrite should normally test all seven somewhere in the work.

A second discipline runs through all investment research: asset, business, management, balance sheet, security. Never collapse them into one judgement. A wonderful asset can sit inside a poor business model; a wonderful business can have weak management; a wonderful company can carry a dangerous balance sheet; and all four can be attractive while the security is still too expensive.

### 3.3 Brand colours

Official identity palette. These values are locked. Use them for the site, PDFs, charts and Daily Brief visuals alike.

| Role | Name | Hex | Use |
|---|---|---|---|
| Primary identity | Ink | #1A1F24 | Logo, body framing, deep text, chart values |
| Keystone accent | Brass | #A67C3D | Primary accent, rules, emphasis |
| Brass on dark | Brass Light | #C69A52 | Dark backgrounds |
| Brass on oxblood | Brass Pale | #E0B268 | Covers and seals |
| Stone | Travertine | #C6BFAE | Borders, card strokes, secondary structural areas |
| Background | Parchment | #F4F0E8 | Soft panels, At a Glance and callout fills |
| Page background | Canvas | #FBF8F1 | Default editorial canvas and chart ground |
| Secondary | Oxblood | #46160F | Covers, seals, rare editorial use |
| Body text | Slate | #46504F | Secondary text, muted labels |

**Deprecated values.** An older Daily Brief palette circulated before 28 September 2026: #F5F0E6 ground, #0B1F33 navy, #B08A3E gold, #EDE4D3 card stroke, #64707B muted. Do not use these in new work, and replace them when a visual is redrawn. Where a skill or template still lists them, the values in the table above override (Appendix C, L8).

#### Chart-specific colour rule

For charts and data panels, use a warm ivory canvas, Ink or dark navy framing, and brass or gold accents. The dark framing may appear navy in chart applications, but the official logo and core identity remain Ink and Brass.

Green is reserved for genuinely positive economic meaning. Red is reserved for genuinely negative economic meaning. Do not use either decoratively.

If a series is merely different, not good or bad, use navy, Ink, brass, Travertine or neutral grey. A higher number is not automatically green. A lower number is not automatically red.

### 3.4 Type

Brand type:

- **Cinzel 600** for the wordmark and selected display use.
- **EB Garamond 400/500** for headlines and editorial prose.
- **Archivo 500** for small caps, labels, navigation, chart labels and interface text.

For environments where these fonts cannot be guaranteed, use a high-quality serif plus neutral sans fallback without altering the actual Seven Gates logo lockup. Fallback fonts must still render the naira sign (₦) correctly. Check it in the rendered output (10.11).

### 3.5 Logo rules

- Use approved assets.
- Do not redraw the mark.
- Do not stretch it.
- Do not add gradients, shadows or outlines.
- Do not recolour the keystone away from Brass.
- Maintain clear space of at least one podium-width around the mark.
- Use the detailed mark at 40px and above; use the small mark below 40px.
- The wordmark must not fall below 14px cap height.
- On the website, use the text-free mark plus live HTML wordmark where possible.
- Where font loading is uncertain, use the approved PNG lockup.

## 4. The Default Article Package

A substantial Seven Gates article should usually be assembled in the following order. This is a system, not a prison. Omit sections that add nothing; do not omit the decision-making information merely because the prose is flowing nicely.

### 4.1 Kicker

A compact label that tells the reader what kind of piece this is. On the site the kicker is written in the form `SEVEN GATES RESEARCH · SECTION · REGION`, with middle dots.

Examples:

- SEVEN GATES RESEARCH · EQUITY RESEARCH · NIGERIA
- SEVEN GATES RESEARCH · MACRO · AFRICA
- SEVEN GATES RESEARCH · QUANTITATIVE RESEARCH · NIGERIA
- LOKOJA CONTRARIAN · CONTRARIAN ESSAY

### 4.2 Headline

The headline must contain an argument, tension or memorable fact. It should not be a generic company name plus a quarter.

Good headline characteristics:

- specific;
- compact;
- intelligible without insider context;
- serious enough to age well;
- witty only where wit sharpens the claim;
- not a recycled construction from recent articles.

Avoid habitual formulas, including:

- "Company X is no longer just a…"
- "A tale of two…"
- "The real story is…"
- "The question is not X, but Y…"
- "X stands at a crossroads."
- "Naira says X, dollar says Y" (retired, Appendix A1).

A good headline should survive after the joke has gone stale. Headlines carry an argument or an analytical fact. They do not chat with the reader.

### 4.3 Deck or subtitle

One sentence explaining what changed, what matters and why the reader should care. Do not merely restate the headline. On the site the deck is the `excerpt` field and appears on research cards, so it must stand alone.

### 4.4 Byline and metadata

The body opens with a byline line in the form: `By The Lokoja Contrarian · 25 September 2026 · Seven Gates Research`.

Where applicable show:

- publication date;
- reading time;
- company and ticker;
- data cut-off;
- reference share price and time basis;
- reporting currency;
- article type;
- rating, horizon and review date where a rating is given.

The byline date, the frontmatter date, the PDF cover date and the ledger entry date are the same date (G22). Run-together byline and tag lines are a rendering defect: check that the byline sits on its own line (Appendix C, L6).

Every live price, FX rate or market-cap calculation must carry a date. Precision without a timestamp is costume jewellery.

### 4.5 Hero editorial image

Every substantial article begins with a strong editorial image, usually AI-generated unless a superior licensed, documentary or company image is clearly better.

The hero should function as a visual first paragraph. It must stop the scroll without misleading the reader.

Default qualities:

- editorial rather than advertising;
- cinematic, illustrative, satirical, industrial, historical, architectural or intelligently conceptual;
- specific to the argument;
- composed for mobile crop as well as desktop;
- visually compatible with the Seven Gates palette;
- no generic handshake, skyline, stock-chart-on-a-phone or smiling-boardroom stock photography.

AI-generated hero art is identified as an AI-generated editorial illustration in the caption, metadata or alt workflow.

AI art must never substitute for factual charting. If the visual claims revenue rose 42 per cent, plot the data. Do not ask an image model to hallucinate a bar chart and then admire the typography.

Do not depict a real facility, person, event or transaction in a way that could reasonably be mistaken for documentary evidence when the scene is invented. Stylisation is often safer and better. Any invented scene in the body (a composite character, a reconstructed afternoon, a dramatised trade) is labelled ILLUSTRATION where it appears (Appendix C, L5).

A hero is not finished until the file has been opened and confirmed to decode at full size (11.5).

### 4.6 At a Glance block

A default feature of the Dangote publishing system.

Place an At a Glance information block high in the article, usually immediately after the hero or beside the opening on desktop.

For company research, include the most decision-useful facts, not every fact available:

- company and ticker;
- reference price and date;
- market capitalisation;
- shares outstanding;
- key operating scale;
- latest earnings or cash-flow metric;
- net debt or net cash;
- key valuation multiple;
- dividend or yield where material;
- Seven Gates view, with horizon and review date;
- fair-value range;
- preferred entry zone;
- principal risk;
- data cut-off.

For macro or thematic work, replace company fields with the equivalent decision variables.

Keep it compact. The reader should understand the terrain in under thirty seconds. Every number in the block is checked against the body, the charts and the valuation table before release (G22).

### 4.7 Opening

The opening should earn the next 150 words.

Possible entry doors:

- a peculiar fact;
- a human scene;
- a historical incident;
- a contradiction;
- an operating ritual;
- a management decision;
- a number that changes the argument;
- a remembered experience;
- a small detail with a large consequence.

Do not start every article with the investment conclusion. Curiosity has value. Spend it.

But do not make the reader wait 700 words to discover what Seven Gates thinks.

### 4.8 The answer before the sermon

Very early in a substantial investment article, state the current decision.

This should usually cover:

- Seven Gates view;
- fair-value range;
- preferred entry or walk-away price;
- base case;
- main reason the view could be wrong;
- confidence level where appropriate.

A strong article may begin with story and then move into this section. The point is to avoid making investors excavate the conclusion from literary rubble.

## 5. Voice: The Lokoja Contrarian

### 5.1 Character

The narrator is a Nigerian engineer, investor, traveller and reader who has seen enough machinery and management to distrust perfect presentations.

He is:

- technically exact;
- sceptical of cant;
- haughty about standards;
- capable of laughing at his own certainty;
- culturally literate without name-dropping;
- willing to make a decision;
- explicit about uncertainty;
- interested in incentives, systems and cash.

The arrogance attaches to standards, not class or human worth.

### 5.2 Emotional temperature

Default: cool, amused, watchful.

Turn up the heat for:

- accounting games;
- dilution disguised as growth;
- governance abuse;
- promotional arithmetic;
- fashionable stupidity;
- avoidable operational failure;
- confident claims without a mechanism.

Turn it down for:

- genuine uncertainty;
- poverty and human hardship;
- safety incidents;
- junior employees;
- shareholder losses already causing real pain;
- competent people attempting difficult recoveries in good faith.

Punch up. Punch through fog. Do not punch down.

### 5.3 Registers

The Lokoja Contrarian is not one voice at one temperature.

#### Deadpan Lokoja

Use when the facts are already absurd. Understate. Give the number enough room to embarrass itself.

#### Serious Lokoja

Use for human loss, debt distress, national finances, poverty, safety, fraud allegations and material governance failures. Elegant writing does not require making misery entertaining.

#### Mischievous Lokoja

Use when consensus is lazy, management language is doing suspicious amounts of work or fashion has displaced arithmetic.

#### Forensic Lokoja

Use for accounts, banks, working capital, capital allocation, M&A, debt, SOTP and valuation. The numbers lead; humour waits in the corridor.

#### Reflective Lokoja

Use for history, industrial change, technology, political economy and structural cycles. Digressions may widen, but must return carrying analytical value.

A strong article may move from story to humour to data to seriousness to valuation to mischief. The reader should not know where the next joke is scheduled because there should be no joke schedule.

### 5.4 Consistency without sameness

Seven Gates must be recognisable without becoming predictable. A house style is a set of standards, not one recurring article disguised with different company names.

The durable signatures should be:

- intellectual seriousness;
- scepticism;
- numerical discipline;
- narrative intelligence;
- dry edge;
- clean visual language;
- willingness to make a judgement.

Everything else may move.

Across consecutive articles, deliberately vary:

- opening architecture;
- narrative distance;
- paragraph cadence;
- section length;
- humour density;
- cultural register;
- degree of autobiography;
- amount of historical context;
- where the first chart appears;
- whether the article moves chronologically, causally, financially or through a single contradiction;
- the shape of the ending.

#### Entry routes

Useful ways into an argument include:

- begin with a person, place or small event, then widen into the economics;
- begin with two facts that should not comfortably coexist;
- begin with a single number whose implications are initially disguised;
- begin with the outcome and work backwards through the mechanism;
- explain the operating system first, then show where the economics leak or compound;
- begin with a genuinely relevant historical episode, then leave it behind once it has done its work;
- begin with what investors appear to believe, then test the belief against cash, incentives and constraints;
- begin with the customer, worker, shareholder, supplier or citizen who meets the economics before the spreadsheet does;
- begin with a constraint and follow it until it moves;
- begin with the disclosure the company would have preferred to bury.

These routes are deliberately unnamed. A named device becomes a menu, a menu becomes a rota, and a rota is the thing this section exists to prevent. The list is illustrative and incomplete by design. (Version 6.2 named eight signatures. Version 6.3 removes the names for this reason.)

If the reader can identify the editorial formula by paragraph three, the formula has become too visible.

The opening, middle and ending should not all perform at the same emotional pitch. Some articles should open quietly and finish hard. Others should begin with mischief and settle into forensic prose. A serious piece may contain almost no comedy. A naturally absurd subject may require less commentary because reality has already hired a satirist.

#### Lexical range without peacocking

Seven Gates may use high-register or unusual language when it is the most exact or most pleasurable expression available. Words with altitude are welcome. Pomposity is not.

Elevated diction earns its place when it compresses an idea, sharpens a difference, fixes a rhythm or rescues a sentence from the dead vocabulary of investor relations. It fails when it advertises education, dresses a weak argument or obscures a simple point.

Prefer the ordinary precise word most of the time. Let the uncommon word arrive, do its work and leave. If the reader notices the vocabulary more than the idea, the sentence has overperformed.

#### Compression and stopping rules

Do not confuse literary ambition with length. Seven Gates should usually be shorter than the amount of research behind it.

Cut:

- repeated explanation after the point is already clear;
- background the intended reader can reasonably infer;
- a second example when the first proves the point;
- quotations that duplicate the prose;
- adjectives already contained in the number;
- scene-setting that never returns to the thesis;
- a concluding paragraph whose only function is to say the article has concluded.

A paragraph earns its place by moving the story, mechanism, evidence, valuation or judgement. Publication length follows the complexity of the argument, not the writer's affection for the material.

#### Organised tight chaos

The research process should be systematic. The published page should not show every joint in the scaffolding.

Allow controlled variation in paragraph length, sentence length, fragments when they are natural, the distance between humour and arithmetic, where charts enter the argument, section length and number of headings, cultural references, narrative distance and the location of the hardest judgement.

Published structure should follow curiosity, causality and evidence rather than a fixed template. Avoid predictable transitions, mini-summaries, tidy cadence and formulaic section order.

This is intentional variation, not randomness. The reader should feel control without seeing the grid.

### 5.5 Sentence discipline

A sentence should do at least one of four jobs:

1. deliver judgement;
2. explain mechanism;
3. present evidence;
4. offer a controlled flourish.

If it does none, cut it.

Prefer:

- direct verbs;
- varied sentence length;
- short paragraphs;
- named actors;
- exact nouns;
- numbers instead of decorative adjectives;
- confidence expressed through evidence rather than volume.

**No em dashes.** Use full stops, commas, colons, semicolons and parentheses. Use "to" for ranges. This applies to body text, captions, chart text, alt text, frontmatter and the ledger. The check is mechanical: search every file in the package for the em dash character and the spaced en dash before release (G22). Older articles were found with surviving em dashes during the September 2026 archive clean-up (Appendix C, L5).

### 5.6 No AI slop

Delete habitual machine prose such as:

- "It is important to note…"
- "This is not just about X; it is about Y."
- "The real story is…"
- "The question is not whether…, but whether…"
- "At the heart of…"
- "Against this backdrop…"
- "The company stands at a crossroads."
- "The numbers tell a story."
- "This paints a picture…"
- "This is where things get interesting."
- "The implications are profound."
- "Make no mistake."
- "Navigating the complexities of…"
- "Only time will tell."
- "In conclusion…"

Also remove:

- mechanical three-item lists;
- fake profundity;
- over-written transitions;
- consultant vocabulary;
- slogan endings after every section;
- repeated thesis summaries;
- jokes explained after delivery;
- rhetorical questions used as structural scaffolding;
- grand adjectives unsupported by numbers.

Do not replace a cheap cliché with a premium cliché.

Delete it.

#### Anti-LLM sentence geometry register

The problem is not only vocabulary. Machine prose often has recognisable geometry even after the obvious phrases are removed. Audit the shape of the writing. Reject or rewrite:

- symmetrical X-versus-Y antithesis used as a default sentence engine;
- automatic triads and three-beat comic escalation;
- throat-clearing transitions that announce what the next paragraph will do;
- narrator commentary such as "a qualification belongs here", "which leaves us with a better question" or "that is now part of the story";
- canned contrasts built around "not X but Y" when a direct sentence would do;
- paragraph-end slogans and mini TED-talk conclusions;
- batches of rhetorical questions used to manufacture momentum;
- repeated short-statement, pause, punchline rhythms;
- anthropomorphic markets, costs, rates, currencies or cash flows behaving like people;
- headings that talk to the reader instead of naming the analytical point;
- substitutable company prose, where another ticker could be pasted in without changing the sentence.

Do not explain an obvious point after the number has already made it. "That matters", "this is important", "significant" and similar emphasis must earn their place through mechanism or arithmetic.

Facts and numbers should carry the punch. If the wit can be removed without losing meaning and the sentence improves, cut the wit.

### 5.7 Narrative lineage: influence, not impersonation

Seven Gates prose should have a broad literary and intellectual ancestry without becoming pastiche.

The useful qualities are:

- **Achebe:** narrative economy, social observation, proverb-level compression, Nigerian reality presented without explaining Nigeria to itself;
- **Taleb:** suspicion of fragile stories, contempt for false precision, asymmetry, skin-in-the-game instincts and the occasional sharpened elbow;
- **Orwell:** clean syntax, concrete nouns, moral and political clarity, hostility to euphemism;
- **Bulgakov:** flashes of controlled absurdity when institutions or markets have already crossed into the surreal;
- **Aristotle:** causal logic, first principles, classification, incentives and the disciplined movement from premise to consequence;
- **Kanye West:** occasional cultural voltage, bravado, contradiction and unexpected juxtaposition, used as seasoning rather than costume.

These are qualities to draw from, not voices to imitate. Never write an article as though one author has possessed the narrator. The Lokoja Contrarian remains the authorial centre.

A useful mental model is: Achebe supplies the ground, Orwell cleans the glass, Aristotle checks the joints, Taleb tests for fragility, Bulgakov is allowed into the room when reality becomes sufficiently ridiculous, and Kanye may touch the aux cable once. Then everybody goes home before the article becomes a costume party.

Storytelling still answers to evidence. A memorable scene must move the argument, reveal incentives, humanise scale, expose contradiction or make a mechanism easier to understand. Narrative colour that does none of those jobs is decoration and should be cut.

## 6. Cultural References, Quotes and Digressions

Seven Gates may range through Nigerian literature, European history, politics, hip-hop, Fuji, classical music, art, science, sport, folklore, operating experience and street observation. The practical repertoire includes Soyinka, J.P. Clark, Shelley, Byron, Voltaire and Shakespeare, Nigerian music from Fuji to Afrobeats, hip-hop, television and film, personal travel, engineering anecdotes and market folklore.

This is repertoire, not a compulsory cast list.

### 6.1 The one-guest rule

Use at most one improbable cultural guest per section. One sharp comparison can illuminate. Four references begin to resemble a university common room after the wine has arrived.

### 6.2 Every digression pays rent

A digression must do at least one useful job:

- explain mechanism;
- expose absurdity;
- reveal incentive;
- make risk memorable;
- humanise scale;
- reveal something genuine about the narrator;
- lead to a less obvious conclusion.

Then return to the numbers.

If removing the digression changes nothing, remove it first.

### 6.3 Quotations

Before publishing a quotation:

- verify that the person actually said it;
- verify the wording;
- check translation where relevant;
- check that historical context has not been reversed;
- attribute it cleanly;
- quote briefly;
- do not use lyrics as decoration;
- do not invent dialogue for future or hypothetical figures.

A candidate quotation is not publication-ready until provenance is checked. Books still in copyright are paraphrased, not quoted at length. Every historical episode used as colour is verified against a source and listed in the research notes so that an editor knows which references deserve a second look.

### 6.4 The repetition ledger

The ledger is a file, not an intention: `docs/repetition-ledger.md`. An audit that does not say where it lives requires nothing.

Maintain one table covering every published Seven Gates piece. Update it **in the same commit as the article**, not at the next audit (Appendix C, L9).

#### Fields

Each entry records:

- publication date and slug;
- article type and rating, where one was given;
- entry route used, described in one line;
- narrative shape, and where the ending lands;
- hero concept in one line;
- cultural guests used;
- quotations used, with speaker;
- proverbs, biblical figures and historical episodes used;
- Nigerian social types invoked;
- closing cadence in one line;
- memorable phrases of roughly six words or more;
- analogies and metaphor families;
- word count and, where outside the mode range in 12.1, the accepted length and the reason (Appendix C, L15).

#### Windows

The rolling audit window is the last 20 published pieces. Quotations, proverbs and retired jokes remain in the permanent register whatever the window says, because a line does not become fresh again merely by ageing out of a spreadsheet.

#### When it is consulted

Twice. At workflow step 8, when the article signature is chosen, and at step 10, before the draft is finalised. Gate G8 is answered yes only when the check was run against the file and the article's own entry has been written.

An entry that is not written down did not happen, and the drafting workflow will reproduce it within a year.

#### Permanent retired register

Retirement applies to the construction, scene and metaphor family, not only to the exact wording. Changing the noun, city, drink, vehicle or celebrity does not make the device new. Necessary technical language remains available when it is the clearest term. The full register is in Appendix A1.

Retirement is permanent until an editor explicitly restores a construction in this file. Ageing out of the rolling window does not restore it. Retirement is editorial memory, not a ban on the underlying concept: explain the same mechanism directly when it is still analytically relevant.

A line should arrive, perform and retire.

### 6.5 Phrase fingerprint and quotation rotation

The ledger tracks more than anecdotes, because a house also develops verbal tics. Before publication, compare the draft against the rolling window and the permanent retired register. The audit is structural as well as lexical: a banned device remains banned when its nouns are changed. Flag:

- exact or near-exact memorable phrases of roughly six words or more;
- recurring opening cadences;
- repeated sentence skeletons and rhetorical constructions;
- the same metaphor family with different nouns;
- repeated anecdote architecture even when the names or setting have changed;
- repeated proverbs, punchlines, biblical figures, historical episodes and cultural guests;
- repeated quotations;
- repeated closing cadences;
- repeated hero concepts tied to the same joke.

Standard legal language, source labels, technical terminology, company names and necessary financial vocabulary are exempt. Everything memorable is not.

A memorable phrase is an editorial asset with a depreciation schedule. A phrase that became distinctive because it worked once is precisely the phrase most likely to become annoying when repeated.

#### Churchill and Yogi Berra

Maintain an extensive, verified quotation bank for Winston Churchill and Yogi Berra, alongside other useful voices. The bank exists to widen the repertoire, not to create a quotation quota.

Rules:

- zero quotations in an article is perfectly acceptable;
- use a quotation only when it sharpens the argument, changes the rhythm or gives a difficult idea a cleaner edge;
- keep quotations brief and verify provenance before publication;
- treat famous quotations with particular suspicion because misattribution is common;
- do not repeat the same quotation inside the rolling window unless the article is specifically about that quotation, person or historical event;
- preferably do not reuse a memorable quotation at all until enough editorial distance has accumulated that it feels fresh again;
- do not place Churchill, Berra, Aristotle, Achebe, Taleb or anyone else into an article merely because the quote bank is available;
- do not stack quotations. One well-placed line beats a parade of dead men and celebrities giving evidence for the defence.

The governing rule is **extensive repertoire, sparse deployment**.

## 7. Research Comes Before Voice

Style cannot rescue incorrect arithmetic.

For every research piece:

- verify current figures, dates, currencies, units and shares outstanding;
- verify dividends, ex-dates and corporate actions where relevant;
- distinguish announcement from completion;
- distinguish filing from regulatory approval;
- distinguish consolidated profit from profit attributable to ordinary shareholders;
- distinguish adjusted from statutory earnings;
- distinguish cash capex from accrued PPE additions;
- distinguish operating cash flow from free cash flow;
- distinguish nominal growth from real growth;
- distinguish naira growth from dollar wealth creation;
- identify reconstructed data and estimates;
- show material assumptions;
- explain missing or weak data;
- avoid false precision.

If evidence is uncertain, say so. Uncertainty does not become certainty because the sentence looks better in bold.

### 7.1 Evidence labels

Seven Gates analysis should clearly distinguish, inline, where the reader meets the claim:

- **Fact:** directly supported by a dated source.
- **Management claim:** stated by the company or executive, not independently proven.
- **Estimate:** an explicitly modelled Seven Gates number.
- **Reconstruction:** calculated from incomplete or multiple historical inputs.
- **Inference:** a reasoned conclusion from known facts.
- **Opinion:** Seven Gates judgement.

Do not blur them.

### 7.2 Source hierarchy

Prefer, in order:

1. regulator, exchange and official government documents;
2. audited annual reports and statutory filings;
3. company results, investor presentations and transaction documents;
4. earnings-call transcripts and direct management statements;
5. primary statistical agencies and original datasets;
6. credible wire services and high-quality financial media;
7. specialist industry sources with transparent methodology;
8. reputable local reporting;
9. market-data aggregators, clearly labelled;
10. social media as a lead, not as proof.

AI output is never a source. A tweet may reveal a story. It does not settle one.

### 7.3 Current information

For changing facts such as prices, regulation, acquisitions, government policy and officeholders, use dated current sources. Do not recycle an old article or previous Seven Gates draft as evidence.

For policy, distinguish proposal, issued rule, effective date, implementation deadline and enforcement evidence.

For transactions, distinguish rumour, announced intention, signed agreement, shareholder approval, regulatory approval, completion and integration.

These are different rooms even when social media prefers one corridor.

### 7.4 Derived numbers are recomputed, not copied

A figure that is calculated rather than quoted (a dollar conversion, a multiple, a yield, a per-share value, a percentage change) is recomputed from its inputs at the final proof, and the inputs are shown or sourced. A transcribed intermediate is not a check.

The Vitafoam piece reached the pre-publication stage with a September 2026 dollar share price of US$0.136 where the sourced inputs gave US$0.146 (N1,329.50 per US$ on 30 September 2026). It was corrected and logged before release. Recomputation from the stated inputs is the check that catches this class of error (Appendix C, L7).

Rules:

- for every conversion, show or source the price, the FX rate, both dates and the FX source;
- recompute every derived number in a table or chart from the stated inputs in the final proof;
- when a number appears in more than one place (At a Glance, body, chart, table, PDF), all instances are made equal in the same edit;
- a correction made before release is logged in the corrections record if the wrong figure had already left the drafting session in a pushed commit, a shared draft or a PDF.

## 8. Analytical Spine

Every substantial company underwrite should separate five questions.

| Question | Required judgement |
|---|---|
| Is the asset useful? | Scarcity, quality, durability, replacement cost |
| Is the business good? | Returns, cash conversion, reinvestment, resilience |
| Is management trustworthy? | Allocation, disclosure, incentives, related parties |
| Is the balance sheet survivable? | Liquidity, debt, covenant, refinancing and currency risk |
| Is the security attractive? | Price, expectations, dilution, exit liquidity and scenario-weighted return |

A magnificent asset can be a dreadful security. Seven Gates should be very comfortable saying so.

### 8.1 Business economics

Establish how revenue is actually produced and how much of it survives contact with capital.

Where relevant, test revenue drivers split into volume, price and mix; market structure and customer concentration; pricing power and switching costs; unit economics and margins; capital intensity and cyclicality; distribution; regulatory privileges; replacement cost; and the reinvestment runway.

The question underneath all of it: does this business earn its returns from a position, or from a moment?

### 8.2 Financial quality

Take it in four passes.

**Earnings quality.** Cash conversion, working capital, receivables, free cash flow, and the split between sustaining and growth capex.

**Returns.** ROIC and ROCE, and more importantly the return on capital invested most recently (incremental returns).

**Survival.** Debt quantum and maturity profile, interest coverage, free cash flow to debt.

**Leakage.** What separates the headline from the shareholder: dilution, minority interests, tax, FX translation, exceptional gains and capitalised costs.

The ordinary shareholder does not own the consolidated income statement. He owns what survives it.

### 8.3 Capital allocation

Test dividends, buybacks, acquisitions, disposals, reinvestment, equity issuance, management incentives, related-party transactions and returns on new capital.

A capital raise is not automatically balance-sheet strength. Ask what happened to per-share earning power after the new owners arrived.

### 8.4 Competitive endurance

Market share is not a moat by itself.

Look for evidence in repeat purchase, switching costs, cost advantage, licence scarcity, network effects, distribution density, customer economics, brand pricing power, returns through cycles and competitor behaviour.

Ask whether the advantage survives if a well-funded rival is given five years and access to capital.

### 8.5 Engineering spine

Always distinguish:

- nameplate capacity from reliable throughput;
- production from sales;
- sales from collected cash;
- EBITDA from free cash flow;
- accounting equity from usable loss-absorbing capital;
- current ROIC from incremental ROIC;
- cyclical recovery from structural improvement;
- access from repeatable advantage;
- backlog from profitable, funded work;
- a removed bottleneck from a solved system;
- forecast capacity from actual operating performance.

Where a constraint is removed, ask where it moved. Where a system appears fixed, look for the next bottleneck.

### 8.6 Nigeria return discipline

For Nigerian securities, nominal naira growth is not enough.

Where data permits, show:

- naira revenue and earnings growth;
- dollar revenue and earnings growth;
- total shareholder return in naira;
- total shareholder return in dollars;
- inflation-adjusted return;
- dividends and withholding tax treatment;
- FX basis and date;
- performance against an appropriate NGX and international benchmark.

A rising naira share price may coexist with falling external purchasing power. Both facts belong on the page.

For stock and FX returns, use **matched observation dates**. Do not pair a year-end share price with an annual-average exchange rate and present the result as a precise dollar return. State the first and last price dates, the FX observations used on those dates, the FX source and the dividend convention. Price appreciation is not total shareholder return.

For comparative charts, use a common start date wherever the securities have enough history. If one listing is younger, keep the common-start panel for the overlapping period and show the shorter listing history separately. Never create comparability by silently splicing unlike periods.

### 8.7 Liquidity, free float and the exit test

A quoted market capitalisation is not the same thing as executable liquidity. For Nigerian securities and any market where float is constrained, test:

- controlling ownership and effective free float;
- total, free-float-adjusted and investable market capitalisation;
- average daily traded value and volume over stated periods;
- bid-offer spreads and price staleness;
- suspensions, trading constraints and repatriation risk;
- custody or settlement constraints where material;
- minority treatment and disclosure quality;
- the practical time and price impact required to enter or exit a realistic position.

Where "days of liquidity" is used, state the average daily traded **value or volume**, the observation window and the participation-rate assumption. Do not divide a theoretical position by one unusually busy day.

For index-event research, distinguish total market cap, float-adjusted cap, investable cap, eligibility, candidacy, announcement, effective inclusion and actual passive holdings. Model forced buying only from identified mandates and defensible assets under management.

A security can be cheap on paper and expensive to leave. That belongs in the valuation decision.

### 8.8 Consequence chain

Do not stop at the first beneficiary or first-order effect.

Ask:

- what happens next if the thesis works?
- which constraint moves?
- who gains bargaining power?
- who pays for the improvement?
- what new cost appears elsewhere?
- what competitor response follows?
- what business becomes the picks-and-shovels supplier?
- who merely stands near the value rather than captures it?
- what new gaming behaviour appears?
- what regulation is likely to follow?

Do not label this second-order thinking as a flourish. Show the chain.

## 9. Valuation and Decision Rules

The prose may entertain. The arithmetic adjudicates.

Use the valuation method suited to the business, not the method that creates the most impressive spreadsheet.

Possible tools:

- normalised P/E, earnings yield and FCF yield;
- EV/EBITDA;
- P/B for banks and other balance-sheet businesses;
- price-to-sales where margins are unstable and the metric is genuinely useful;
- DCF where cash-flow visibility supports it;
- reverse DCF, to show what the current price already requires;
- SOTP where separate assets deserve separate economics (9.5);
- EPV where current earning power matters more than heroic growth;
- asset or replacement value where appropriate;
- peer and historical valuation;
- CAPE or market-level valuation where relevant.

Every valuation must state:

- valuation date;
- reference price;
- currency;
- share count;
- whether the value is EV or equity value;
- debt and lease treatment;
- normalised earnings or cash-flow basis;
- scenario assumptions;
- treatment of dividends;
- relevant horizon;
- major uncertainty.

### 9.1 Expectations test

Ask:

- what does consensus expect?
- what does the current price appear to require?
- which assumptions are doing the most work?
- what would surprise the market?
- what can go right without being priced?
- what can go wrong that the multiple treats as impossible?

A cheap multiple can hide collapsing earnings. An expensive multiple can be justified by extraordinary incremental returns. The ratio is the beginning of the argument.

Put the question plainly: what growth, margins, returns or capital efficiency does the current price require?

### 9.2 Bear, base and bull

Where valuation uncertainty is material, build bear, base and bull cases.

Each case should state:

- operating assumptions;
- margins;
- capital needs;
- growth or utilisation;
- debt;
- normalised earnings or FCF;
- valuation multiple or discount rate;
- implied value per share;
- upside or downside from the dated reference price;
- what would falsify the case.

Do not make bear, base and bull three versions of the same story with slightly different Excel percentages. They must be economically different worlds, not 8, 10 and 12 per cent versions of one spreadsheet. Each case should name the evidence that would make it more or less likely.

### 9.3 Contrarian or punk case

For major underwrites, include one explicit attack on the preferred thesis when it adds value. Ask what an intelligent sceptic would say after reading the entire report.

This is not performative pessimism. The point is to identify the assumption most likely to make the whole underwrite look silly later.

In published copy call this the contrarian case, challenge case, alternative hypothesis, thesis stress test, robustness test or falsification test. "Red team" is internal terminology only (section 14).

### 9.4 Action, ratings and rating staleness

Where appropriate, finish with an investable conclusion:

- rating;
- preferred entry range;
- fair-value range;
- walk-away price;
- expected return basis;
- position-size guidance only where the publication mandate supports it;
- catalysts;
- disconfirming evidence;
- monitoring variables;
- review date.

#### What the ratings mean

Ratings are expected-return judgements measured against the dated reference price over the stated horizon. They are not enthusiasm ratings, and they are not a ranking of how much Seven Gates admires the company.

| Rating | Meaning |
|---|---|
| Buy | Expected total return comfortably above the required return, with a survivable downside case. The price is the reason to act now. |
| Accumulate | Attractive but not urgent. Build the position on weakness or over time rather than in a single purchase. |
| Hold | Fairly priced on the base case. Owning it is reasonable. Adding to it is not. |
| Watch | The business interests Seven Gates. The price, the disclosure or the evidence does not yet support a position. |
| Avoid | Expected return is inadequate, the downside is not survivable, or the accounts and governance cannot be trusted at any price. |
| Not rated | Insufficient evidence, a conflict, or a deliberate decision not to publish a view. |

Every rating states its horizon and the reference price date. A rating without a horizon is a mood. Compound or hedged labels (for example "Hold / accumulate lower") are allowed only if each half has its own price level; otherwise choose one.

#### Rating staleness

A published rating carries a review date. Default: six months for company research, or the next scheduled reporting event, whichever arrives first.

At the review date one of three things happens:

- the rating is reaffirmed with a dated note;
- the rating is changed under section 16;
- the rating is withdrawn to Not rated with a short explanation.

A rating nobody has revisited in a year is not a view. It is a liability with a logo on it.

The September 2026 archive clean-up found published views with no horizon or review date and had to backfill them across the library (Appendix C, L5). A new article without them does not pass G7.

Never confuse an excellent company with a purchase at any price.

### 9.5 SOTP, minority interests and attributable value

A sum-of-the-parts valuation fails easily when enterprise value, equity value and minority claims are mixed. Use an explicit bridge.

For every SOTP component, state whether the starting value is:

- enterprise value;
- 100 per cent equity value; or
- equity value attributable to the parent's actual ownership stake.

Then apply these rules:

1. Value the economic interest actually owned, not the headline value of the subsidiary.
2. Deduct debt only at the level where it economically sits and only once.
3. Deduct minority interests only when the component value still includes value belonging to minorities. Do not subtract minorities again from an already attributable stake valuation.
4. Include parent or central costs if the component valuations do not already absorb them.
5. Identify cross-holdings, restricted cash, guarantees, cross-defaults, pension obligations and contingent liabilities where material.
6. State whether holding-company tax or leakage applies to distributions or exits.
7. Apply a holding-company discount only with a reasoned mechanism, not because a conglomerate exists.
8. Use a consistent diluted share count at the final equity bridge.
9. Reconcile the SOTP equity value to the stated per-share value.

For acquisitions and partial disposals, separate accounting gain, cash received, retained stake value and minority leakage. An asset can create value while the listed parent captures less of it than the headline transaction suggests.

## 10. Visual System: The Dangote Standard

Charts, tables and data panels should feel like one editorial system.

### 10.1 Core visual language

Every visual should be premium, restrained, modern, institutional, publication-ready, mobile-readable, consistent with Seven Gates branding and clean enough to understand in seconds.

Avoid raw spreadsheet exports, rainbow palettes, decorative 3D charts, gradients in data series and infographic clutter masquerading as sophistication.

### 10.2 Canvas and framing

Default chart system:

- warm ivory or Canvas (#FBF8F1) background;
- dark navy or Ink (#1A1F24) frame, headings and values;
- thin Travertine (#C6BFAE) or muted grey rules and card strokes;
- Brass (#A67C3D) or gold for primary accent;
- Slate (#46504F) for muted labels;
- green only for positive emphasis;
- red only for negative emphasis;
- neutral dark or grey for comparison series;
- boxed panels with generous internal padding;
- clean edge alignment across adjacent visuals.

The chart should look at home beside the Seven Gates mark before anyone reads the logo.

### 10.3 Numbered insight headlines

Every substantive visual should have a figure number and, where useful, a numbered analytical headline.

Prefer insight titles to dataset titles.

Weak: Revenue, 2019 to 2026.

Better: Revenue doubled. Free cash flow did not.

The visual title should tell the reader what to notice without dictating a conclusion the data cannot support. Titles name the analytical fact. They do not personify the variable.

### 10.4 Figure anatomy

A Seven Gates chart should normally include:

1. figure number;
2. insight headline;
3. optional one-line descriptor or unit;
4. plot area;
5. direct labels where practical;
6. compact legend only if needed;
7. source note;
8. methodology note if calculations are reconstructed;
9. one-sentence editorial interpretation where the point is not obvious.

Keep source notes compact but specific.

> **EXAMPLE SOURCE NOTE**
> Source: Dangote Cement H1 2026 results; Seven Gates calculations. EBITDA margin uses reported segment EBITDA divided by segment revenue.

### 10.5 What charts should do

Use a chart when it allows the reader to understand something in five seconds that would otherwise require a paragraph.

Good chart subjects include revenue versus earnings and free cash flow, margins through time, price versus earnings or book value, TSR in naira versus dollars, debt trajectory, free-cash-flow conversion, ROIC or ROCE, capex intensity, dividend history, peer valuation, market share, scenario outcomes, FX and commodity sensitivity, required growth rate, structural breaks, segment economics, earnings revisions and valuation versus history.

Charts are strongly preferred when useful. They are never quota-driven.

A strong full company underwrite will often benefit from three to five genuine visuals. A short commentary may need one. Some pieces need none beyond the hero and the mandatory five-year chart. The argument decides.

### 10.6 Chart truth rules

- Plot real data.
- Label axes and units.
- State whether values are nominal or real.
- State currency.
- Keep periods comparable.
- Do not truncate axes in a misleading way.
- Distinguish actual from estimate.
- Distinguish restated from originally reported data.
- Do not combine incompatible metrics without explanation.
- If dual axes are unavoidable, make the relationship explicit and visually restrained.
- Do not infer causation from simultaneous lines.
- Do not show precision the source data cannot support.

If the data cannot support the chart, use a qualitative table or omit the visual. Never invent values to complete a layout, and never silently interpolate or forward-fill material missing periods.

### 10.7 Tables

Use tables where precise comparison matters more than visual trend.

High-value table types: historical financials, segment economics, debt maturity, SOTP, peer valuation, scenario assumptions, bear/base/bull, valuation sensitivity, dividend history, cash-flow bridge, key operating metrics, ownership and governance, and the risk matrix.

Table rules:

- keep rows decision-relevant;
- align numerical columns;
- show units in the header;
- use no more decimal places than the decision requires;
- highlight only the cells that matter;
- preserve semantic colours;
- avoid databases disguised as tables.

On the site, Markdown tables are wrapped automatically for horizontal scrolling on mobile, so prefer Markdown tables for wide data. Hand-built HTML tables must be given a scroll wrapper by hand (10.12).

The reader should find the conclusion without measuring the table.

### 10.8 Callout panels

Use boxed panels for At a Glance, The Verdict, Key Risks, What the Price Assumes, scenario summaries, data limitations, catalyst watch and important accounting reconciliations.

Callouts should interrupt the reading rhythm usefully, not turn the page into airport signage.

### 10.9 Chart production rules

- No AI-generated financial charts.
- No data-vendor screenshots published as finished Seven Gates charts.
- No generic finance widgets and no raw spreadsheet styling.
- Every published chart is rebuilt in the Seven Gates visual system. There is no quick-chart exemption.
- Build from data. Keep the source data (file, URL or dataset identifier, retrieval date, currency, frequency, adjustment method) so that the chart can be redrawn without changing a value.
- A chart with clipped labels, overlapping text, a truncated title or an illegible legend is redrawn from its cited data before release. Values do not change in a redraw. The defect does not ship (Appendix C, L2).
- Maps use real borders and real geography. A hand-sketched approximation is not a map.
- Inline SVG is acceptable and often best. Raster charts are exported at no less than 2x of their display width.

### 10.10 Mandatory five-year share-price chart

This section is mandatory for new and refreshed stock-focused research and overrides general chart-omission discretion. Factual truth remains the first rule.

#### 10.10.1 Scope and placement

Every new or refreshed stock-focused article carries a real plotted five-year share-price chart for each principal listed stock analysed. Company underwrites, earnings reviews, valuation notes, contrarian stock essays and stock-pick comparisons are in scope. Incidental company mentions, brief news items and macro pieces without a principal stock are not.

Place the figure beside the discussion of share-price history, performance or valuation, after At a Glance and the early investment judgement. Keep it in both the article body and the PDF. A return percentage, a price table or a broker-chart link does not satisfy the requirement. The chart ships with the article, not in a follow-up commit (Appendix C, L10).

#### 10.10.2 Time window, sampling and series

Plot the trailing five calendar years through the latest verified closing price at the article data cut-off. State the actual first and last observation dates. Use daily closes where available; disclosed weekly sampling is acceptable for legibility if the latest verified close is retained.

For multi-stock comparisons, the comparison panel uses a **common start date** across securities with sufficient history. If one security has less history, label the exception and do not force it into a false five-year comparison. Actual-price panels may retain each stock's full verified history. Any rebased comparison discloses its common base date. A rebased chart may supplement the actual-price panels. It does not replace them.

Use a consistently adjusted price history for splits, consolidations, bonus issues and rights issues where applicable, and disclose the treatment. Cash dividends are not silently included in a price series. Total shareholder return is a separate measure.

#### 10.10.3 Nigerian equities: matched NGN and USD dates

Where a Nigerian stock is shown in both naira and US dollars, use matched stock-price and FX observation dates. State the FX source and the actual first and last FX dates. Do not combine annual-average FX with point-in-time share prices without clearly identifying the mismatch.

If dividends are included, label the series total shareholder return and state the reinvestment and withholding-tax assumptions. A USD price-translation series is not automatically USD TSR.

#### 10.10.4 Limited history and missing data

For a listing younger than five years, plot all available listed history and label it "Since listing" with the listing date. For a delisted security, use the last verified traded close and state the date and status. Never fabricate pre-listing history.

Check alternative credible sources before declaring a gap. Show material gaps or suspensions honestly. Do not invent, interpolate or silently forward-fill prices. If a five-year series remains unavailable, plot the verified available period and explain the limitation. An unlisted company has no public share-price history; state that fact.

#### 10.10.5 Seven Gates chart template

Use Canvas #FBF8F1, Ink #1A1F24 or dark navy framing, Brass #A67C3D accents and restrained Travertine #C6BFAE rules. Green denotes genuinely positive meaning; red denotes genuinely negative meaning. Neither is a decorative default series colour.

Include a figure number, an evidence-led title, a subtitle naming stock, period, currency and sampling frequency, a clean plot, a dated final-price label, and compact source and adjustment notes. Use direct labels where practical. Keep axes honest, event annotations sparse and text legible on mobile and in the exported PDF.

Use verified data and standard plotting tools. No AI-generated factual charts, generic finance widgets, vendor screenshots or raw spreadsheet styling.

#### 10.10.6 Workflow and publication gate

Retain the source price data, URL or dataset identifier, retrieval date, currency, frequency and adjustment method. Refresh the series whenever the article is refreshed. Reconcile the final plotted price and date with At a Glance and the valuation reference.

Before publication verify: the five-year window or stated exception; common-start logic for comparisons; real observations and correct corporate-action treatment; matched NGN and USD dates where used; dated end price and consistent units; Seven Gates visual treatment; and legibility in the final website and PDF.

A missing required chart, unmatched FX conversion or unexplained short history fails the gate (G16, G17).

### 10.11 Visual render check

Every figure is inspected in the rendered page and, where a PDF exists, in the PDF. Source files do not count. For each figure confirm:

- the image or SVG loads and is not truncated or low resolution;
- the title is complete and not clipped;
- no labels overlap each other, the lines or the frame;
- text is readable at a 375px-wide phone viewport;
- the naira sign renders correctly;
- the numbers shown equal the numbers in the text and tables;
- the source note is present and not cut off;
- green and red carry only semantic meaning.

### 10.12 Markup rules for the Markdown site

- Body is Markdown plus inline-styled HTML blocks. Copy the At a Glance box, figure boxes, captions and disclaimer from an existing article such as `gdp-does-not-pay-the-coupon.md`.
- Keep each HTML block free of blank lines. A blank line inside an HTML block ends the block and the remainder is rendered as Markdown, which breaks the layout.
- Close every tag that is opened. Check the rendered page, not the source.
- Wide hand-built tables need an overflow-x wrapper. Markdown tables get one automatically.
- Use the brand hex values in inline styles (3.3), not the deprecated values.

## 11. Editorial Image System

### 11.1 Default hero philosophy

The hero image is editorial art, not decoration. It should tell the reader what kind of argument is coming.

A refinery piece might emphasise scale, single-train concentration or control-room risk. A bank piece might use architecture, institutional ritual or a stylised balance-sheet metaphor. An aviation-services piece might show turnaround choreography rather than a generic aircraft glamour shot.

### 11.2 Preferred styles

Rotate styles to avoid visual fatigue: sophisticated editorial cartoon; painted magazine illustration; cinematic industrial scene; restrained collage; architectural conceptual image; historical engraving-inspired treatment; satirical poster; graphic-novel realism; stylised data-and-object composition.

Do not make every hero photorealistic. Do not make every hero a cartoon either. The visual register should vary with the article.

### 11.3 AI-image prompt discipline

An image brief should include subject, central argument, emotional temperature, setting and geography, composition, palette, degree of realism, aspect ratio and crop needs, elements to avoid, and an instruction to avoid fake financial data or tiny generated text.

Do not ask the image model to render dense tables or charts. Add factual labels separately in the publishing layer if needed.

### 11.4 Captions and alt text

Every hero should have:

- useful alt text describing the image rather than repeating the headline;
- a caption where context matters;
- source or credit;
- an AI-generated editorial illustration label where applicable.

On the site these are the `heroAlt` and `heroCaption` fields. The briefing validator rejects a hero without both; research articles are checked by hand until a research validator exists (Appendix D). Narrative illustrations inside the body carry the same label and a caption.

### 11.5 Image file integrity

A truncated hero once shipped because nobody checked it (Appendix C, L1). The rule is therefore mechanical.

After writing or exporting any binary (hero, figure, social card, PDF):

1. open it and confirm it decodes in full, to the bottom row and the right-hand edge;
2. confirm the pixel dimensions are the intended ones, with no cropped or half-rendered area;
3. confirm the file is not implausibly small for its dimensions;
4. confirm the path in the frontmatter or the page resolves to the file that was just checked, with the exact case and extension.

File conventions: `public/images/research/<slug>/`. Hero as `00-hero-<name>.webp`. Social card as `00-hero-social-1200x630.jpg`, used as `ogImage`. Figures numbered `01-...`, `02-...`. A PDF companion, where produced, lives in `public/downloads/<slug>.pdf`. Commit image and PDF assets with, or before, the article that references them, so there is no window in which the live page points at a missing file.

## 12. Publication Modes and Article Structure

The flows below are coverage checklists, not running orders. They list what a piece of that type must cover somewhere in the work. They do not fix the sequence, and section 2.6 settles the point when they appear to conflict with the variation doctrine in 5.4.

Four elements are load-bearing and keep their position in substantial articles: the kicker, title and deck; the hero; the At a Glance block; and the early statement of the current decision. Everything else may be arranged as the argument requires.

### 12.1 The publication ladder

The DNA is the same at every length. The amount of apparatus changes.

| Mode | Length | Typical use | Visuals |
|---|---|---|---|
| Brief | about 750 words, 5 to 7 minutes | Daily Brief | one chart or image when earned |
| Short | 400 to 900 words | earnings reaction, valuation update, market or policy event, quick contrarian note, explanatory note | zero to two, plus the five-year chart for a principal listed stock |
| Standard | 900 to 1,800 words | company analysis, thematic and policy essays, sector commentary, major earnings reviews | two to four, plus the five-year chart |
| Long | 1,800 to 4,000 words, more only when the research requires it | full underwrites, IPOs, major industrial projects, macro and historical essays, market structure | three to six, plus the five-year chart |
| Deep or quantitative | as the method requires | monetary-policy rules, CAPE, Taylor and McCallum work | as the method requires |

Choose the mode from the material, not from ambition. There is no word-count padding and no chart quota.

A piece that lands outside its mode's range is not automatically wrong, but the deviation is a decision. Record the accepted length and the reason in the ledger entry, and say so in the commit message. A rewrite or narrative treatment stays inside the mode's range or says plainly that the material needs more (Appendix C, L15).

### 12.2 Short form

Must cover: kicker, headline, deck, a compact opening, the judgement, two to four analytical sections, the implication, and sources and disclaimer where required. Do not force a large At a Glance block when it adds bulk without information. Short does not mean shallow. It means compressed.

### 12.3 Standard form

The workhorse. Must cover: kicker, headline, deck, hero, At a Glance, opening, early judgement, what changed, mechanism or business economics, numbers and cash, valuation or implications, risks and the countercase, conclusion, sources and methodology, and the disclaimer where applicable.

### 12.4 Long form and full company underwrite

Must cover:

1. Kicker, title, deck, byline
2. Hero image
3. At a Glance
4. Opening story or tension
5. The answer before the sermon: what we think, what it is worth, where we would buy, what the market assumes, what breaks the thesis
6. What changed, with history and context where it earns its place
7. Ownership and governance
8. How the business makes money
9. What the accounts say
10. Cash flow, debt and capital intensity
11. Competitive endurance and next bottleneck
12. Consequence chain, growth and optionality
13. Liquidity, free float and the exit test
14. Valuation, including the five-year share-price chart
15. Bear, base and bull
16. Strongest alternative case, key risks and falsification conditions
17. The verdict, with rating, horizon and review date
18. Research notes, sources and methodology
19. Disclaimer

Do not make the reader excavate the judgement from 2,500 words of elegant prose.

### 12.5 Earnings review

Shorter than an underwrite. It answers one question: what changed in our view? Must cover what surprised, what was optical versus economic, cash versus profit, guidance and what it requires, the valuation change and the updated action. One to three visuals plus the five-year chart. Link back to the underlying underwrite rather than retelling the company history every quarter.

### 12.6 Contrarian essay

Must cover:

1. strongest fact against consensus;
2. why consensus believes what it believes;
3. mechanism that could break the consensus;
4. evidence;
5. human or institutional consequences;
6. what the market price assumes;
7. scenario map;
8. what would prove the contrarian wrong;
9. verdict.

Contrarian does not mean automatically opposite. A contrarian without arithmetic is merely quarrelsome.

### 12.7 Macro or political economy

Must cover a human or institutional opening, the headline claim, the base and definition of the measure being argued about, the mechanics, winners and losers, second- and third-order responses, market implications, scenario paths, and what would falsify the thesis.

Follow incentives and cash before personalities. Keep political analysis fair and mechanism-led. Do not substitute tribal applause for economics.

### 12.8 Deep and quantitative research

Must cover the research question, data provenance, construction or reconstruction method, definitions, methodology, assumptions, limitations, results, robustness and sensitivity, economic interpretation, regime effects, out-of-sample or forward limitations, and decision relevance.

Do not let statistical significance wear a cape. Report sample size, dependence, regime shifts, structural breaks, data weaknesses and specification sensitivity. In the published paper use robustness, sensitivity, falsification, alternative specification and regime testing, never internal challenge-process terminology.

### 12.9 Daily Brief

A distinct product, not a miniature long-form article. About 750 words and a 5 to 7 minute read. Signal density matters more than completeness: drop low-signal items rather than lengthening the brief.

Keep the Seven Gates DNA: the highest-signal item first; for each item, what happened, why it matters and what the market may be missing; one useful chart or image when earned; dry humour sparingly; clear dated sources; what to watch next; no filler and no five paragraphs explaining yesterday's headline.

The operating procedure (research order, frontmatter, body layout, hero templates, validation and publishing) lives in the `daily-brief` skill. `npm run validate` is the publication gate for Daily Briefs.

Brief visuals use the brand palette in 3.3. The deprecated palette is not used (Appendix C, L8). A brief chart goes through the visual render check in 10.11 like any other figure; a chart label had to be fixed after a brief had been published (Appendix C, L2).

### 12.10 Marcus Daily Intelligence Brief

A separate intelligence product. Hard maximum 1,500 words; when there is too much news, drop lower-signal stories rather than lengthening. For each item: what happened, why it matters, second-order implications and what to watch. Keep the DYOR ticker table. The purpose is intelligence compression, not a display of how much was found.

### 12.11 Rewrites and refreshes

A rewrite changes how the reader travels. A refresh changes what the facts say. Neither is permitted to lose analysis by accident.

Before the first edit, make an **inventory** of the published piece: every figure, table, chart, source link, rating line, key number and the sentence that states the conclusion. After the last edit, compare the inventory with the result. Every difference is deliberate and listed in the commit message. A rewrite does not change a number, a chart value, a source or a rating unless the user asked for it.

The SAHCO and NAHCO note later needed its analytical exhibits restored (Appendix C, L3). An inventory comparison is the check that catches an exhibit going missing between versions. For a refresh, the date, price, data cut-off and review date all move together (G22), and the corrections record notes any changed view (16.2).

## 13. Metadata and Publishing Fields

### 13.1 The metadata record

For a full research article, maintain the following structured metadata. Where the site has no field for an item, carry it in the At a Glance block, the verdict and the ledger entry (13.2).

```
title: "[Company or theme]: [The investment argument]"
subtitle: "[One sentence explaining what changed and why it matters]"
publication: "Seven Gates Research"
author: "The Lokoja Contrarian"
section: "Research"
content_type: "[Company research | Earnings review | Thematic research | Macro | Quantitative research | Contrarian essay]"
publication_mode: "[Brief | Short | Standard | Long | Deep]"
slug: "[lowercase-hyphenated-slug]"
published_at: "[YYYY-MM-DD]"
updated_at: "[YYYY-MM-DD]"
data_cutoff: "[YYYY-MM-DD HH:MM timezone]"
company: "[Name, if applicable]"
ticker: "[Exchange: ticker, if applicable]"
reporting_currency: "[NGN / USD / other]"
price_currency: "[NGN / USD / other]"
price_as_of: "[YYYY-MM-DD HH:MM timezone; close/delayed/intraday]"
fx_source_and_dates: "[source; first and last observation dates, if USD figures are shown]"
rating: "[Buy | Accumulate | Hold | Watch | Avoid | Not rated]"
rating_as_of: "[YYYY-MM-DD]"
review_due: "[YYYY-MM-DD]"
supersedes: "[slug of the previous view, if this is a rating change]"
valuation_horizon: "[Years]"
confidence: "[High | Medium | Low, with explanation in article]"
corrections: "[none | dated correction notes]"
tags: ["[Sector]", "[Company or theme]", "[Geography]"]
excerpt: "[Clear research-card summary]"
hero_image: "[Verified asset path]"
hero_alt: "[Specific description]"
status: "draft"
template_version: "master-v6.3"
```

Never publish bracketed placeholders. A search for `[` followed by a capital letter, and for the words TODO, TBC, XXX and "lorem", is part of G22.

### 13.2 Repository frontmatter map

The site reads these frontmatter fields from `content/research/<slug>.md`. Files whose names begin with `_` are ignored.

| Site field | Content | Maps from |
|---|---|---|
| `draft` | `true` until release, then `false` | status |
| `slug` | lowercase, hyphenated, equal to the file name | slug |
| `date` | YYYY-MM-DD, equal to the byline date | published_at |
| `title` | the headline | title |
| `excerpt` | the deck, one standalone sentence or two | subtitle, excerpt |
| `readingTime` | text such as "20 min" | computed |
| `kicker` | `SEVEN GATES RESEARCH · SECTION · REGION` | section, geography |
| `researchType` | Essay, Note or Report | content_type |
| `category` | for example Macro, Equities, Banking | tags |
| `ticker`, `region` | optional | ticker, geography |
| `hero`, `heroAlt`, `heroCaption` | hero path, alt text, caption with AI label | hero_image, hero_alt |
| `seoTitle` | the title followed by `\| Seven Gates Research` | title |
| `ogImage` | the 1200x630 social card | hero_image |

These items have **no frontmatter field today**: publication_mode, updated_at, data_cutoff, price_as_of, fx_source_and_dates, rating, rating_as_of, review_due, supersedes, valuation_horizon, confidence, corrections and template_version. Until the site code supports them they live in three places: the At a Glance block and verdict in the article (price, date, rating, horizon, review date, cut-off, FX), the article's ledger entry (mode, word count, version checked against), and the corrections record (rating changes and corrections). Extra frontmatter keys are not read by the site and must not be relied on to carry a disclosure.

## 14. Proprietary Internal Analysis

Internal scoring systems, frameworks and proprietary mechanics may inform the analysis. Public copy should present the resulting judgement in ordinary investment-research language.

Do not expose internal framework names, scores, sub-scores, secret weights or proprietary process mechanics in public-facing Seven Gates articles. This includes internal framework names such as AAAMi.

**"Red team" is internal terminology and never appears in published copy**: not in body text, headings, captions, chart text, alt text, metadata, filenames or PDFs. Challenge the thesis internally as hard as necessary. In published copy call it the contrarian case, challenge case, alternative hypothesis, thesis stress test, robustness or sensitivity analysis, or falsification test. A published "red team" label was found and removed in the Uber essay during the September 2026 clean-up (Appendix C, L5).

The reader needs the reasoning, evidence and arithmetic. He does not need the recipe book from the kitchen.

## 15. Sources, Notes and Methodology

### 15.1 In-body sourcing

Use links or citations close enough to the claim that the reader can verify important facts.

High-risk claims need particularly tight attribution: allegations, regulatory action, transactions, ownership, government policy, debt, safety incidents, legal disputes and unusual operating performance.

### 15.2 Source note under visuals

Every chart or table with external data should carry a compact source line.

> **EXAMPLE**
> Source: Company H1 2026 results; NGX; Seven Gates calculations. Price as at 2 September 2026 close.

### 15.3 Research notes section

Every article ends with research notes, sources and the standard disclaimer. Longer or technical pieces explain unusual definitions, reconstructed series, estimated values, source conflicts, missing data, currency conversion, valuation assumptions and important limitations. List historical references used as colour and say which deserve a second check.

Do not hide methodological caveats in tiny legal text if they can change the conclusion.

### 15.4 Link hygiene

At least two working source links appear in the body of every briefing, and research articles carry primary sources for every high-risk claim (15.1). Open each link before release. Prefer the primary document over an aggregator. Where a source is paywalled or likely to move, give the publisher, the title, the date and the retrieval date so that the reader can find it again.

## 16. Corrections and Changes of View

A research house with a memory needs a rule for being wrong. Section 2.1 says a new filing beats an elegant old sentence. This section says what happens to the sentence.

### 16.1 Corrections

Where a published number, date, name, quotation or attribution is wrong, correct it in place and record it.

- correct the error in the article body;
- add a dated correction note at the foot of the article stating what was wrong and what it now says;
- never silently edit a figure that carried the argument;
- where the error changed the conclusion, say so in the first line of the correction note and update the rating line and ledger;
- typographical fixes that change no meaning need no note.

The test is simple. Would a reader who acted on the original want to know? If yes, the correction is published, not absorbed.

A figure caught and fixed before release is logged in the record when the wrong version had already left the drafting session (7.4). The log protects the house from repeating the error in a sibling article.

### 16.2 Changes of view

A rating change is an article, not an edit.

It must state:

- the previous view, rating and date;
- what changed: the evidence, the price, the mechanism, or Seven Gates' reading of the same facts;
- which of the original assumptions failed;
- what the original piece got right, where that is still load-bearing;
- the new view, with fair value, entry or walk-away price, horizon and review date;
- what would falsify the new view.

Distinguish three cases plainly. The facts changed. The price changed. Seven Gates was wrong.

The third is the most useful to the reader and the most tempting to dress as the first.

The older article is annotated with a dated note pointing to the article that carries the current view, and the ledger records the supersession.

### 16.3 Withdrawal

Where the evidence base has decayed, coverage has lapsed or a conflict has arisen, move the rating to Not rated with a dated line explaining why.

An abandoned view is worse than a withdrawn one, because the reader cannot tell the difference between conviction and neglect.

### 16.4 The record

Corrections, rating changes, clarifications and withdrawals are logged in the corrections table at the foot of `docs/repetition-ledger.md`, carrying date, slug, type, previous rating, new rating and one line of reason.

Seven Gates should be able to answer the question at any time: what have we been wrong about, and did we say so?

## 17. Legal Disclaimer

Every investment-related Seven Gates article ends with the standard disclaimer, visually separated from the editorial body and set in smaller, unobtrusive type. The wording is not paraphrased. A missing or non-standard disclaimer is a defect to be fixed, not a style choice (Appendix C, L5).

> **DISCLAIMER**
> This publication is provided for informational and educational purposes only. It does not constitute financial, investment, tax, legal, or other professional advice, nor does it constitute a recommendation, offer, solicitation, or invitation to buy, sell, or hold any security, financial instrument, or investment.
>
> The analysis may contain opinions, estimates, assumptions, forecasts and forward-looking statements based on information considered reliable at the time of publication. Such views may change without notice, and actual outcomes may differ materially.
>
> Investing involves risk, including the possible loss of principal. Readers should conduct their own independent research, verify the information presented, consider their individual circumstances and risk tolerance, and obtain advice from appropriately qualified professional advisers before making any investment decision.
>
> Seven Gates Research accepts no responsibility for investment decisions made solely on the basis of this publication.

## 18. Drafting Workflow

#### Step 1: Define the decision

Before writing prose, write one internal sentence: what does the reader need to decide after reading this? Then write the principal Seven Gates claim in one sentence, and choose the publication mode (12.1).

If the answer is unclear, the article is not ready to draft.

#### Step 2: Build the evidence pack

Collect primary filings, current price and FX (with dates and sources), historical financials, ownership, debt, major announcements, peer data, industry data, relevant policy documents, daily traded value and free-float data for the liquidity test, and the previous Seven Gates view with its date and rating. For a rewrite or refresh, also build the inventory required by 12.11.

#### Step 3: Attack the thesis first

Write the strongest fact against the intended thesis before building the case for it.

Test whether the thesis survives inflation, FX translation, dilution, maintenance capex, working capital, refinancing, competition, regulatory intervention, minority interests, tax, exit liquidity and management incentives.

#### Step 4: Reconstruct the mechanism

Explain what changed, through which channel, who captures the economics, who bears the cost, how long it can last, what the market already prices and where the next constraint appears.

#### Step 5: Do the arithmetic before the flourish

Build valuation and scenarios before writing the clever conclusion. Keep the workbook or script. Every derived number in the article traces to it (7.4).

#### Step 6: Decide the visual argument

Before creating charts, write the sentence each chart must prove or illuminate. If you cannot state the insight, do not make the chart. For a stock-focused piece, schedule the five-year chart now, not after drafting.

#### Step 7: Choose the opening and hero together

The opening paragraph and hero image should not tell two unrelated stories. They are the same door in different media.

#### Step 8: Choose a fresh article signature

Open the repetition ledger. Decide what narrative architecture suits this specific argument, then compare it against the rolling window and the permanent register. If the entry route, cadence, section rhythm or ending resembles several recent pieces, choose another route.

Do not vary merely for novelty. Vary because a research house with a memory should not sound as though one template is being refilled.

#### Step 9: Draft in mixed registers

Let the material determine when the article is forensic, deadpan, reflective or serious. Vary cadence and paragraph length. Keep the prose lean. Permit elevated diction only where it adds precision or voltage without slowing comprehension.

#### Step 10: Repetition audit

Return to the ledger. Check anecdotes, analogies, proverbs, memorable phrases, quotations, cultural guests, hero concepts and closing lines against the rolling window and the permanent register, structurally as well as lexically. Write the article's own ledger entry now, so that it ships in the same commit.

#### Step 11: Source audit

For every important number, ask: where did it come from, is it current, is the unit right, is the period comparable, and is this fact, estimate or inference? Recompute every derived number from its inputs (7.4). Open every link.

#### Step 12: Line edit

Ask:

- Can I name the actor?
- Can I replace an adjective with a number?
- Can I cut the opening clause?
- Is the contrast real?
- Does this sentence know why it exists?
- Is the line memorable because it is true, or because it is dressed for attention?
- Have I trusted the reader?

Run the anti-LLM geometry audit in 5.6.

#### Step 13: Compression pass

Read once, only to remove weight. Cut repetition, surplus examples, redundant quotations, decorative transitions and any paragraph that does not alter the reader's understanding. Check that unusual vocabulary clarifies rather than performs.

The test on each surviving paragraph: does the reader know something after it that he did not know before it? If not, it goes.

#### Step 14: Mobile preview

Check headline wrapping, hero crop, At a Glance readability, chart text size at 375px, table scrolling, source notes, whitespace, disclaimer, image loading and logo fidelity.

The mobile version is not the desktop article squeezed into a phone. It is the article most readers will actually receive.

#### Step 15: Render the actual deliverable

Open the rendered page and, where produced, the PDF, not the source. After any material change check: clipped text or tables; hidden or overlapping objects; font fallback and broken naira symbols; hero and chart resolution and truncation (11.5); captions and source notes; page breaks and orphan headings; chart and table legibility at normal viewing size; hyperlinks; the final disclaimer; and consistency between the article body, At a Glance, charts, the PDF and the valuation reference. Confirm the five-year chart is identical on the page and in the PDF.

A successful export is not proof of a correct PDF. The rendered pages are the artefact.

#### Step 16: Publish as one unit

Commit the article, its assets, the PDF and the ledger entry together, with the commit message in the house form (Appendix B). Pull the latest main before editing any shared file, and review the diff of shared files before committing (A5).

#### Step 17: Verify live, then record

Wait for the deployment to reach READY, then load the live page and run the post-publication checks P1 to P6 (19.3). Record any defect found as a lesson in Appendix C if it was not already covered by a rule.

## 19. Final Publication Gate

An article does not publish until the following questions have acceptable answers.

**Gate zero (G0).** Has the current Master Editorial, Research, Visual and Publishing Standard been reviewed against the final artefact? If no, stop. This requirement endures across versions.

The gate has three parts. The **hard gate** blocks publication. The **advisory annex** is an editor's checklist that improves a piece but does not, on its own, stop it going out. The **post-publication checks** confirm that what shipped is what was checked.

The split exists because a long list that nobody completes protects less than a short list that everybody does.

### 19.1 The hard gate

A no is a stop, not a discussion.

- **G1.** Is every current figure verified against a dated source, and has every derived number been recomputed from its inputs?
- **G2.** Are dates, data cut-offs, currencies and units explicit and correct?
- **G3.** Are fact, management claim, estimate, reconstruction, inference and opinion distinguishable?
- **G4.** Does the current price carry a date?
- **G5.** Is the asset separated from the security?
- **G6.** Is there a clear Seven Gates judgement, with an action where the piece warrants one?
- **G7.** Where a rating is given, are horizon, fair value, entry or walk-away price and review date all present?
- **G8.** Has the repetition ledger and permanent retired register been checked structurally as well as lexically, and has this article's entry been written in the same commit?
- **G9.** Is the strongest counterargument presented fairly, with disconfirming evidence that would change the view?
- **G10.** Are the major assumptions stated and false precision avoided?
- **G11.** Does every chart plot real data, with axes, units, periods and a compact source note?
- **G12.** Are green and red used semantically rather than decoratively?
- **G13.** Is AI art labelled, are invented scenes labelled ILLUSTRATION, and does the hero avoid false documentary implication?
- **G14.** Are proprietary framework names, scores, mechanics and internal terms such as "red team" absent from the public copy?
- **G15.** Is the standard legal disclaimer present, and have the live page or its preview and the PDF been checked as rendered rather than the source?
- **G16.** For stock research, does every principal listed stock carry the five-year share-price chart required by 10.10, identical on the website and in the PDF, shipped with the article?
- **G17.** Where Nigerian securities are shown in naira and dollars, are the returns built from matched observation dates, with the FX source and dates stated, and is TSR distinguished from price change?
- **G18.** Where liquidity, position size, index events or exit are discussed, are free float, average daily traded value or volume, the observation window and the participation assumption stated (8.7)?
- **G19.** For a SOTP, is the bridge level declared for every component, are debt and minorities deducted once and at the correct level, and does the sum reconcile to the stated per-share value (9.5)?
- **G20.** Has every image, chart and PDF been opened and confirmed to decode in full, with no truncation, clipped titles, overlapping labels or broken naira signs, at desktop and 375px widths (10.11, 11.5)?
- **G21.** For a rewrite or refresh, does the after-inventory match the before-inventory except for listed, intended changes (12.11)?
- **G22.** Is there one truth across every surface? Date, byline, price and price date, rating, horizon, review date, fair value, cut-off and ticker are identical in the frontmatter, the byline, At a Glance, body, figures, PDF and ledger entry; and a mechanical scan finds no em dashes, no bracketed placeholders, no "red team" and no deprecated palette values.

### 19.2 Advisory annex

#### Editorial

- **E1.** Would an intelligent reader continue after the first 150 words?
- **E2.** Does the headline carry an argument rather than a label?
- **E3.** Does the deck add information?
- **E4.** Is the tone appropriate to the human stakes?
- **E5.** Is humour serving the analysis?
- **E6.** Has machine-sounding prose been removed?
- **E7.** Does the conclusion add a final implication rather than summarise the introduction?
- **E8.** Has the draft passed the sentence-geometry audit (5.6): automatic triads, symmetrical antithesis, staged transitions, paragraph-end slogans, rhetorical-question scaffolding, anthropomorphic finance and short-statement punchline rhythm?
- **E9.** Does the published structure hide the scaffolding rather than expose a fixed template (5.4)?
- **E10.** Is the length inside the mode range of 12.1, or is the accepted length recorded with a reason?

#### Freshness

- **F1.** Is the opening fresh rather than recycled?
- **F2.** Has any memorable exact or near-exact phrase been reused from recent Seven Gates prose?
- **F3.** Has any quotation been repeated inside the rolling window without a specific editorial reason?
- **F4.** Does every anecdote, quotation and cultural guest earn analytical rent rather than advertise taste?
- **F5.** Does the article have a fresh signature rather than a recently repeated opening, cadence, section rhythm or ending?
- **F6.** Is Seven Gates recognisable through judgement and standards without the prose feeling templated?
- **F7.** Is the piece as short as the argument permits, with repetition and decorative background removed?
- **F8.** Where elevated or unusual vocabulary appears, is it exact and unobtrusive rather than ornamental?
- **F9.** Does the draft avoid every construction in the permanent retired register, including variants that merely change the nouns, setting or cultural props?
- **F10.** Is the development and unpublished ledger (A3) respected, so that an unpublished draft's devices are not consumed by another piece?

#### Research and investment

- **R1.** Are actuals separated from forecasts, and statutory from adjusted metrics?
- **R2.** Is cash reconciled to earnings where material?
- **R3.** Is debt treated correctly, and dilution captured per share?
- **R4.** Are minority interests, tax and FX material to the conclusion, and handled if so?
- **R5.** Are business quality and valuation kept as separate judgements?
- **R6.** Does the valuation method suit the business?
- **R7.** Is the market expectation test explicit?
- **R8.** Are bear, base and bull used where uncertainty requires them, and does each scenario differ economically rather than cosmetically?
- **R9.** Where this piece changes a previous view, does it meet section 16.2?
- **R10.** Is the consequence chain shown rather than labelled (8.8)?

#### Visual, brand and publication

- **V1.** Is the hero strong enough to deserve the top of the page?
- **V2.** Is the At a Glance block present where useful?
- **V3.** Has every chart earned its place, and was it rebuilt in the Seven Gates ivory, dark framing and brass system rather than screenshotted?
- **V4.** Does every substantive figure have a number and an insight-led title?
- **V5.** Are tables readable on mobile?
- **B1.** Is the approved logo used correctly, with typography and spacing consistent with the brand?
- **B2.** Is the slug clean and the hero alt text useful?
- **B3.** Are metadata fields complete, including rating date and review date, and the version checked against recorded?
- **B4.** Are sources and methodology accessible, and have the links been opened?

If an important answer is no, the piece is not finished.

### 19.3 Post-publication checks

Run after the push, on the live site. A failure is fixed forward the same day, or the deployment is rolled back if a wrong number or rating could mislead a reader who acts on it. A correction under 16.1 follows if the error was visible.

- **P1.** The deployment reached READY with no build error.
- **P2.** The live page loads at its final URL and shows the intended title, date and kicker.
- **P3.** The hero, every figure and the social card load at full size.
- **P4.** Tables scroll on a phone width, the At a Glance block reads cleanly, and the disclaimer is present.
- **P5.** The research index shows the card with the correct excerpt, date and reading time.
- **P6.** The PDF, if any, downloads and matches the page (G15, G16).

### 19.4 How the gate is run

Gate and annex items have stable IDs. They are never renumbered, and a new item takes the next free number. Sub-lettered items (such as 8a, 24b) are not used; if an item has two questions, split it. Cite items by ID in commit messages and in the ledger ("G1 to G22 passed", or "G16 failed, chart added"). Version 6.2 broke this rule (Appendix C, L14).

For each publication, the person or agent running the gate states which items were checked and how, in the commit message or the hand-over note. "Checked" means a mechanical check or a rendered inspection, not a recollection of having been careful.

## 20. Compact Commissioning Prompt

Use this when commissioning a Seven Gates article:

> **COMMISSIONING PROMPT**
> Produce a publication-ready Seven Gates Research article using the current Master Editorial, Research, Visual and Publishing Standard (v6.3). Read the standard and the repetition ledger before drafting and review them again against the final artefact. Use the Dangote Refinery IPO as the default publication architecture, not as a source of recycled jokes or metaphors. Choose the publication mode (Short 400 to 900 words, Standard 900 to 1,800, Long 1,800 to 4,000 or more) from the material, not from ambition, and record any accepted deviation. Write in the sophisticated Lokoja Contrarian voice: judgement-led, technically exact, sceptical, culturally literate, dryly funny when earned, serious when the subject requires it, and explicit about uncertainty. Keep the Seven Gates identity consistent but vary the article's signature. Opening architecture, cadence, humour density, cultural register, section rhythm and ending should answer to the material and should not resemble recent pieces. Be concise. Use occasional high-register or unusual words when they are exact and add flavour, but never let vocabulary become an exhibition. Begin with a strong editorial hero concept, usually AI-generated, then an At a Glance block and a compelling opening. Put the strongest objection early and state the Seven Gates view early. Explain the business and mechanism before celebrating the share price. Separate asset, business, management, balance sheet and security. Reconcile earnings to cash. Test inflation, FX, dilution, maintenance capital, debt, governance, exit liquidity and what the current price assumes. Use bear, base and bull cases where material, each economically distinct, and state what would falsify the preferred case. Where a rating is given, state the horizon, the reference price date, the fair value, the entry or walk-away price and the review date, and if this changes a previous view, say what changed and which assumption failed. Use a SOTP bridge that deducts debt and minorities once. Use warm ivory canvas, dark navy or Ink framing, brass accents, green only for positive meaning, red only for negative meaning, boxed panels, numbered insight headlines and compact source notes. Use real plotted data rebuilt in the Seven Gates system, never AI-generated charts or vendor screenshots, and include the mandatory five-year share-price chart for every principal listed stock, with matched NGN and USD dates where both are shown. Verify all current numbers and dates from dated sources, recompute every derived number, distinguish fact, management claim, estimate, reconstruction, inference and opinion inline, and never expose proprietary internal scoring, framework mechanics or internal terms such as red team in public copy. Avoid em dashes, AI filler, recycled anecdotes, the construction "Company X is no longer just a…", and every family in the permanent retired register (Appendix A1), checked structurally and not by exact-word search. Open every image, chart and PDF and confirm it decodes in full. For a rewrite, inventory the figures, tables, charts and sources before and after, and change none of them unasked. Write the ledger entry in the same commit as the article. End with an investable view, disconfirming evidence, research notes, sources and the standard Seven Gates disclaimer, then verify the live page.

For the Daily Brief, use the `daily-brief` skill. For a narrative rewrite of a finished piece, use the `seven-gates-longform` skill.

## 21. Final Doctrine

Seven Gates Research should be recognisable before the logo appears.

The reader should find a point of view, then the mechanism supporting it, then the numbers capable of killing it.

Use the hero image to invite the reader in.

Use story to create curiosity.

Use humour to expose pretension, not to escape seriousness.

Use charts to make patterns visible.

Use tables to make comparisons unavoidable.

Use history and culture only when they return with analytical cargo.

Use valuation to separate admiration from ownership.

Use sources because memory is not evidence.

Use uncertainty because certainty is expensive when it is wrong.

Open the file before trusting it.

Keep the signature recognisable, but keep changing the route.

Let an occasional uncommon word sparkle. Do not make the reader carry a dictionary as hand luggage.

Write the shortest article that can still contain the full argument.

Correct the record in public, with a date, when the record is wrong.

And when the argument has made its point, stop writing.

> **SEVEN GATES HOUSE RULE**
> Interesting first. Correct always.

## Appendix A. Editorial Memory, Retirement and Development Ledger

This appendix is part of the operating standard. The live, growing record is `docs/repetition-ledger.md`; this appendix is the rule and the permanent core. Update the ledger before publication. A phrase can be analytically correct and still be editorially exhausted.

### A1. Permanent retirement families

Retirement applies to the construction, scene and metaphor family. Changing the noun does not reset the device. Technical vocabulary (distinguish, market, settlement, custody, conversion, ratio, base) remains available when it is the clearest term.

| Family | Status | Rule |
|---|---|---|
| The "distinction" flourish | Retired | Do not use "that distinction now matters", "one distinction remains", "that difference is now the story" or close variants as a transition. Name the actual change. Technical "distinguish reported from adjusted earnings" remains valid. |
| "Plumbing" and pipes as shorthand for market structure | Retired | Name the mechanism: settlement, funding, custody, convertibility, liquidity, cash conversion, transmission, logistics, balance sheet or operations. |
| Anthropomorphic finance | Retired | Markets, FX, inflation, tax, rates, valuation, capital and cash flow do not throw tantrums, send invoices, take seats, arrive, complain, eat dinner or hold conversations. Costs and constraints do not enter a scene as characters. A human framing device may remain when the human is genuinely part of the story. |
| Billing and invoice metaphors | Retired | Cycles, leverage, inflation, regulation and risk do not "send an invoice", "present a bill" or "collect rent". State the consequence: lower margins, higher funding costs, losses, dilution, weaker cash flow or lower returns. |
| Party, dinner, chair, guest, champagne, bar-tab and night-out imagery | Retired | Includes "paid for dinner" and all variants, for costs, dilution, arbitrage or market friction. |
| Mock Nobel, medal, trophy or award jokes | Retired | Not a default response to bad policy or weak arithmetic. |
| Free money on pavements, streets or roads | Retired | Includes arbitrage framed as crossing the road. |
| Coffee, caffeine or another stimulant restarting machinery | Retired | Includes coffee-versus-industrial-machinery exaggeration used as a generic scale joke. |
| Old-technology-to-Bloomberg escalation | Retired | Includes boats, telegraphs and terminals in a compressed history gag, and structural variants. |
| By-morning-the-trade-disappeared imagery | Retired | Spread convergence is stated as spread convergence. |
| The market as a wry, knowing or irritated character | Retired | "The market price implies" and "investors appear to expect" remain available. Literal shorthand is allowed where it is not the joke. |
| First-calculation and second-calculation epigram | Retired | Do not use the structure as a recurring reveal. |
| "Denominator" as editorial shorthand | Retired | State the ratio, base or population explicitly. |
| "Naira says X, dollar says Y" headline construction | Retired | The dual-currency analysis remains mandatory where useful; the headline construction is retired. |
| Familiar Nigerian archetypes | Retired from routine use | The uncle, agbada, Mercedes, collection plate, ceremonial moat, diluted drink, generic Lagos traffic and wedding-list jokes. |
| Conversational or anthropomorphic headings | Retired | Headings carry an argument or analytical fact. They do not chat with the reader. |
| Staged cleverness | Retired | Wit that advertises the narrator rather than advances the evidence. |

New families are added here and in the ledger on the day they are recognised. An editor may restore a construction explicitly in this file, and no one else may.

### A2. Article-linked signatures already used

These remain available as historical references but should not drift into unrelated pieces. The ledger holds the full per-article record.

| Article or family | Used signature | Treatment |
|---|---|---|
| Dangote Cement | "60% Margin Problem" | Retire as reusable house phrase |
| Dangote Cement | "Republic" as a corporate-state device | Strong caution; do not make it a recurring trope |
| Dangote Cement | "same company, very different religion" | Retire |
| Dangote Cement | "Nigeria looks like Adobe with limestone reserves" | Retire |
| Dangote Cement | "Sinoma can build your moat too" | Retire |
| Dangote Cement | "The Ships Are Coming" | Retire as a repeated headline device |
| Dangote Cement | "capital intensity discovering another room in the house" | Retire |
| Dangote Cement | "corporate navy" | Retire as a house joke |
| Dangote Cement | "London will ask why" | Retire as a recurring cadence |
| Dangote Cement | "how much to pay for the Republic, and how long the Republic lasts" | Retire |
| Taylor and McCallum essay family | "The Brake, the Accelerator and the Rat" | Article-linked; do not reuse casually |
| Taylor and McCallum essay family | "You can't 25bp a chokepoint" | Article-linked |
| Taylor and McCallum essay family | "r* has been kidnapped" | Article-linked |
| NGX portfolio | "paid for dinner" family | Permanently retired with dinner and party metaphors |

### A3. Development and unpublished ledger

Items in development do **not** count as published until publication is verified. Their distinctive devices stay reserved while the piece is active, so that another draft does not consume them by accident (F10).

| Piece | Status at v6.3 | Reserved or required elements | Release note |
|---|---|---|---|
| Vitafoam Nigeria | **Published 3 October 2026** (`vitafoam-how-do-you-sleep-at-night`). Moved out of development. | Its devices (sleep and somnambulism material, motivational-speaker joke, Nas's "sleep is the cousin of death" reference, Soyinka's *The Interpreters*) are now in the rolling window and the ledger. | Do not reuse. A pre-publication correction to the September US$ price is logged in the corrections record. |
| GTCO draft | Draft and unpublished, unless later verified. The published GTCO piece of 2 August 2026 is separate. | Do not enter draft-only phrases into the published rolling-20 ledger. | Verify publication before treating as prior published prose. |

At each version, the owner reviews this table against the ledger and moves anything published out of it. A stale development entry is an error (Appendix C, L16).

### A4. Sentence-geometry ledger

Track structures as well as phrases. Flag repeated use of:

- automatic triads;
- symmetrical "X is not Y; it is Z" reversals;
- narrator signposting;
- "qualification belongs here" constructions;
- obvious transition sentences that merely announce a section;
- repeated rhetorical-question sequences;
- three-beat comic escalation;
- paragraph-end slogans;
- one-line dramatic statements followed by an explanatory punchline;
- anthropomorphic finance;
- a formulaic "strong opening, At a Glance, three numbered sections, mini-summary" sequence when the material does not require it.

The test is not whether one instance is grammatically wrong. The test is whether the machinery has become visible.

### A5. Ledger operating rule

Before release:

1. compare the draft with the latest 20 published pieces;
2. compare it with the permanent retirement register (A1);
3. check article-linked signatures and quotation rotation;
4. check the development and unpublished ledger so that unpublished material is not misclassified as published;
5. write the new article's entry (opening device, memorable phrases, analogy family, cultural guest, hero concept, ending, word count) in the ledger, in the same commit as the article;
6. retire any device that has become recognisable as a trick rather than a fresh observation.

The ledger and the standard are shared files that more than one session or person may edit. Pull the latest main before editing either. Never overwrite a shared file from an older copy. After a merge, read the diff: a ledger commit should add lines, not remove them, unless a retirement or correction is the point. Two ledger regressions in September 2026 (an overwrite from an older copy and a merge conflict) cost a manual restoration (Appendix C, L4).

Editorial memory is part of quality control. The aim is not sterile prose. It is freshness without amnesia.

## Appendix B. Publication Runbook

The repository and deployment facts that the standard depends on. If they change, change this appendix in the same commit.

**Stack.** Next.js 15 with content in Markdown. Pushing to `main` deploys to production through Vercel's GitHub integration (Vercel team `ogeds-projects`, project `sevengatesresearch-com`). There is no separate deploy step, which means every push is a publication. A partial push is a partial publication.

**Files.**

- Article: `content/research/<slug>.md`. Daily Briefs: `content/briefings/`. Files starting with `_` are ignored.
- Images: `public/images/research/<slug>/` (hero `00-hero-<name>.webp`, social `00-hero-social-1200x630.jpg`, figures `01-...`).
- PDF companion: `public/downloads/<slug>.pdf`.
- Ledger and corrections: `docs/repetition-ledger.md`. Standard: `docs/editorial-standard.md`.

**Before the push.**

1. Pull the latest `main` if any shared file will be touched.
2. Run `npm run validate`. It is the publication gate for Daily Briefs. It does not cover research articles (Appendix D).
3. Run the mechanical scans in Appendix D against the article, its frontmatter, captions, chart text and alt text.
4. Open every image, SVG and PDF in full (G20).
5. Recompute derived numbers (G1) and compare the inventory for a rewrite (G21).
6. Confirm the ledger entry is written (G8) and a corrections row is added where 16.1 or 16.2 applies.

**Build limits.** `next build` may fail in a sandbox that cannot reach Google Fonts. That is an environment limit, not a content error. Read the error: a failure that names a font fetch or a network host is the environment; any other failure is the content and blocks release.

**Commit.** One commit carries the article, its assets, the PDF and the ledger entry. Messages: `Publish research: <title>`, `Publish <d Month> Daily Brief`, or a plain description for fixes. State the gate result and any accepted deviation in the body.

**After the push.** Wait for the deployment to reach READY. Load the live page. Run P1 to P6 (19.3). If a defect is found, fix forward with a plain-description commit; if a wrong number or rating could mislead, roll back to the previous deployment first, then correct under 16.1.

**Skills.** The `daily-brief` and `seven-gates-longform` skills and `CLAUDE.md` implement this standard. When this file's version, gate range or section numbers change, update them in the same commit (2.7).

## Appendix C. Lessons-Learnt Register

Each entry records what happened, the rule it produced and where the rule is enforced. Evidence is cited by commit or ledger row so that it can be checked. Add a new row whenever a defect reaches the live site or is caught late, and add the rule at the same time.

| ID | What happened | Rule | Enforced at |
|---|---|---|---|
| L1 | A truncated hero image shipped on *GDP Does Not Pay the Coupon* because the file was not checked (commit 01ccf53). | Open every binary and confirm it decodes in full. | 11.5, G20 |
| L2 | Charts shipped with defects: an Africa map without real borders, redrawn in 7c13655; a Daily Brief chart label fixed after publication in 841f2bb; the long-form skill also records clipped labels, overlaps and truncated titles. | Redraw from cited data without changing values; maps use real geography; run the visual render check on every figure, brief charts included. | 10.9, 10.11, G20 |
| L3 | The SAHCO and NAHCO note had to have its analytical exhibits restored (fd4eefa, "Restore analytical exhibits"). | Inventory before and after any rewrite; no figure, table, chart or source is lost unasked. | 12.11, G21 |
| L4 | The naira refresh commit overwrote a backfilled ledger from an older copy, and a merge conflict hit the ledger (66ef689, 242c85f). | Pull before editing shared files; never overwrite from an older copy; read the diff after a merge. | A5, Appendix B, 18 step 16 |
| L5 | The archive was not at standard. Horizon and review dates were missing from published views, the disclaimer was missing or non-standard, em dashes survived, composite scenes were unlabelled, a published "red team" label sat in the Uber essay, and fourteen legacy imports had run-together byline and tag lines (66ef689, 55daab6). | Horizon and review date on every rating; standard disclaimer verbatim; mechanical scans for em dashes and "red team"; composite scenes labelled ILLUSTRATION; byline on its own line. | 4.4, 4.5, 5.5, 9.4, 14, 17, G7, G13, G14, G15, G22 |
| L6 | A wrong byline date went live on both the page and the PDF for *Nigeria Is Back at the Frontier* (f829747, b3d3f34). | One date across frontmatter, byline, PDF cover and ledger. | G22 |
| L7 | A derived US$ price (September 2026, Vitafoam) was US$0.136 where the sourced inputs gave US$0.146 (N1,329.50 per US$, 30 September 2026). Logged as a pre-publication correction on 3 October 2026. | Recompute every derived number from its inputs; show FX source and dates; log late catches. | 7.4, 16.1, G1 |
| L8 | Daily Brief visuals drifted onto an older palette until switched to the brand palette (8f0bf5f, bc0500a, e98a8a6). | Locked palette with a deprecated-values list; skills defer to the standard. | 3.3, 12.9 |
| L9 | The ledger entry for *Nigeria Is Back at the Frontier* went in a separate later commit (a92f89e after d8bd40c). | Ledger entry in the same commit as the article. | 6.4, 18 step 16, G8 |
| L10 | The SAHCO and NAHCO five-year NGN and USD charts were added in commits after the note was first published (91a045d, f66fd19 after 175d45f). | Schedule the five-year chart at step 6; it ships with the article. | 10.10.1, 18 step 6, G16, G17 |
| L11 | The automated validator reads only `content/briefings`. Research articles have no automated gate, and `next build` cannot run where fonts are unreachable. | A research checklist and a specified validator; a rule for telling environment failures from content failures. | Appendix B, Appendix D |
| L12 | Two documents circulated as v0.4 in September 2026, and the v6.2 PDF is a separate lineage from the repository's v0.6. Each held rules the other lacked. | One file, one version, merged. | 0, Appendix E |
| L13 | Section numbers were cited by `CLAUDE.md`, skills and the ledger. A renumbering would silently break them. | Section numbers and gate IDs are stable; renumbering updates every citation in one commit. | 2.7 |
| L14 | The v6.2 gate had items lettered 8a, 8b, 24a to 24c and 45a, 45b, and lists that restarted at 1 after bullets. | Stable IDs, no sub-letters, items split rather than chained. | 19.4 |
| L15 | A rewritten piece landed outside its mode range, and the accepted length had to be recorded after the fact (da1f7b9). | Record accepted length and reason when outside the range. | 6.4, 12.1, E10 |
| L16 | The standard contradicted itself. v6.2 retired "denominator" yet used it as a flow heading; v0.6 used a billing idiom in 9.1 that it retired the same week; v6.2 named eight article signatures that its own 5.4 says should stay unnamed; v6.2 listed Vitafoam as unpublished after publication. | Contradictions are defects: a version is checked against its own retirement register before release. | 2.6, F9, A3, 19.2 |
| L17 | Markdown breaks when an HTML block contains a blank line; wide hand-built tables overflow on phones. | Keep HTML blocks blank-line-free; wrap wide tables. | 10.7, 10.12 |

## Appendix D. Automated Check Specification

### D1. What exists today

`npm run validate` (`scripts/validate-content.mjs`) checks Daily Briefs only: valid and unique date, title length, excerpt length, `readingTime`, absence of em dashes, at least two source links, and alt text plus caption on a hero. Nothing equivalent runs on `content/research/`. Until a research validator exists, the manual scans below are mandatory before every research push (G22).

### D2. Specified research checks (not yet implemented)

A `validate:research` script should fail the build on:

1. Frontmatter: `slug`, `date`, `title`, `excerpt`, `readingTime`, `kicker`, `researchType`, `category`, `hero`, `heroAlt`, `heroCaption`, `seoTitle` and `ogImage` present; `slug` equals the file name; `date` is YYYY-MM-DD; `researchType` is Essay, Note or Report; `kicker` matches `SEVEN GATES RESEARCH · … · …`; `draft` is false for published files.
2. Assets: `hero` and `ogImage` resolve to existing files; every `/images/research/<slug>/` reference resolves; each image decodes at its full dimensions; the social card is 1200x630.
3. Text bans: no em dash; no spaced en dash; no "red team" (case-insensitive) anywhere including frontmatter; no bracketed placeholders, TODO, TBC or lorem; no phrase from 5.6; no deprecated palette hex (#F5F0E6, #0B1F33, #B08A3E, #EDE4D3, #64707B); no "percent" (the house spelling is "per cent").
4. Structure: byline line present and equal to `date`; the standard disclaimer present verbatim; a Research notes heading present; at least two external links; HTML blocks contain no blank lines.
5. Ratings: if a rating word appears in At a Glance, a horizon and a review date also appear.
6. Stock research: if `ticker` is a listed ticker, at least one figure whose caption or alt text contains "five-year" or "since listing".
7. Ledger: an entry whose slug equals the article slug exists in `docs/repetition-ledger.md`.

### D3. What cannot be automated

Voice, freshness, the structural retirement check, the soundness of valuation, the fairness of the counterargument and the legibility of a chart remain editorial judgements. The script narrows the gate. It does not replace the editor.

## Appendix E. v6.3 Revision Control

**Revision date:** 5 October 2026.
**Basis:** the v6.2 master of 2 October 2026 (reconstituted 5 October 2026) merged with the repository standard `docs/editorial-standard.md` (v0.6, 30 September 2026), the repetition ledger and corrections record, and the repository's commit history to 5 October 2026.
**Numbering:** v6.3 keeps the repository's section numbers where `CLAUDE.md`, the skills and the ledger cite them (5.6, 6.2, 6.4, 9.4, 10.10, 12, 14, 16.4, 19). v6.3 therefore moves the disclaimer to 17, the workflow to 18, the gate to 19, the commissioning prompt to 20 and the doctrine to 21, compared with v6.2.

**Section map from v6.2.** 12 (structure) became 12.2 to 12.8 under the new 12.1 ladder; 10.9 (five-year chart) became 10.10; 16 became 17; 17 became 18; 18 became 19; 19 became 20; 20 became 21; Appendix B became this appendix.

### E1. Added from the repository standard (absent from v6.2)

Publication ladder with word ranges (12.1); short, standard and long forms; rating definitions, horizon and staleness (9.4); corrections, changes of view, withdrawal and the record (16); "red team" ban in public copy (14); hard gate and advisory split (19); Daily Brief and Marcus Daily limits (12.9, 12.10); the rule that flows are coverage checklists (2.6); unnamed entry routes (5.4); reverse DCF (9); the ledger fields and windows (6.4); the brand-palette override for Daily Brief visuals (3.3).

### E2. Kept from v6.2 (absent from the repository standard)

The enduring review gate (0); organised tight chaos and the anti-LLM geometry register (5.4, 5.6); the permanent retirement and article-linked signature tables (A1, A2) and development ledger (A3); matched NGN and USD dates and common-start charts (8.6, 10.10); the liquidity, free-float and exit test (8.7); SOTP and minority-interest bridge (9.5); the extended metadata record (13); the rendered-PDF checks (18 step 15); gate checks for matched dates, liquidity and SOTP (G17 to G19).

### E3. New in v6.3

Derived-number recomputation (7.4); image file integrity (11.5); the visual render check (10.11); Markdown site markup rules (10.12); chart production additions (10.9); the rewrite and refresh inventory (12.11); the repository frontmatter map (13.2); link hygiene (15.4); workflow steps 16 and 17; gates G17 to G22 and G0; post-publication checks P1 to P6; stable-ID rule (19.4) and section-number stability (2.7); ledger merge hygiene (A5); the runbook (Appendix B); the lessons register (Appendix C); the automated check specification (Appendix D). Rules introduced without a precedent in prior text, and therefore for the editor's confirmation: the 2x raster export size (10.9), the rule that compound rating labels need a price level for each half (9.4), the logging of late-caught pre-release figures (16.1), and the 375px legibility test (10.11).

### E4. Corrected from earlier versions

Numbering defects in the v6.2 gate (L14). The v6.2 "denominator" heading and the v0.6 billing idiom in 9.1 (L16). Named signatures in 5.4 (L16). The stale Vitafoam development entry (A3). The v6.2 "Reconstituted file date" note is retained in this appendix's basis line.

### E5. Actions required to adopt v6.3

1. Replace `docs/editorial-standard.md` with this file, and update `CLAUDE.md`, which currently says "v0.5" and "G1 to G16", to "v6.3" and "G1 to G22".
2. Update the "Standard v0.5 rules" heading in `.claude/skills/seven-gates-longform/SKILL.md` and add the inventory rule (12.11) and the image-integrity rule (11.5).
3. Implement `validate:research` from Appendix D, and wire it into `npm run build`.
4. Decide whether the site should gain optional rating, review and cut-off frontmatter fields (13.2).
5. Add the GTCO and any other draft pieces to A3 as they are opened.

The purpose of revision control is operational continuity. It is not permission to prefer an old rule over current evidence.
