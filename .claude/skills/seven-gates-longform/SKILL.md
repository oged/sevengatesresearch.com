---
name: seven-gates-longform
description: Rewrite a finished Seven Gates Research article into engaging long-form narrative prose in the Lokoja Contrarian voice, keeping every number, chart, table and source untouched, then publish it to the site. Use whenever asked to make a Seven Gates piece more engaging, readable, human or fun, to add stories, quotes, history or diversions, to "give it the treatment", or to rewrite in a Steinbeck, Crichton, Michael Lewis, Gladwell or Janan Ganesh register.
---

# Seven Gates long-form rewrite

Turn a correct but dry article into prose a reader finishes. The analysis, figures and conclusions stay exactly as the author wrote them. What changes is how the reader travels through them. Read CLAUDE.md first for the house standard and site conventions.

## Before you start

1. Read the Used ledger at the bottom of this file. Anything listed is spent: do not reuse its anecdotes, quotes or episodes without the user's say-so, and do not repeat an opening type used in the last two pieces.
2. Read the source in full (a PDF, a draft, or an existing `content/research/*.md`). Extract every figure.
3. Name, privately, the article's one mechanism: the single thing a reader should understand by the end. Every story you add must illuminate it. A story that is merely interesting gets cut.

## What never changes

Every number, date, percentage, score, table cell, chart, source line and principal source. The headline, kicker and date unless asked. The author's conclusions and ratings. Keep the author's best lines; they like their own piece.

## Voice

Dry, specific, unhurried. An engineer who reads balance sheets. The influences each lend one thing; blend them, one per paragraph at most, nothing forced.

- Steinbeck: the interchapter. A short present-tense scene with unnamed people showing the mechanism landing on ordinary lives.
- Crichton: the procedural near-miss. Clock times, instruments, competent people reading the wrong gauge.
- Michael Lewis: the specific person who noticed what the room missed.
- Gladwell: the counterintuitive reframe and the parallel from a far field.
- Janan Ganesh: the dry aphorism that closes a thought without raising its voice. At most one per section.

House constants: engineering analogies are native to this author; humour is structural, never a joke for its own sake; Nigerian and African texture is home ground.

## Moves

1. Open cold on a scene, not a claim: a moment with a place and a clock that contains the mechanism in miniature, then turn it onto the subject within three sentences. Choose the opening from what the mechanism demands: a procedural scene, a single transaction, the person who noticed, an absurd number, a day in the market, or a misreading that broke.
2. One real public-record episode per section, with a date and a number.
3. At most one interchapter per piece, labelled ILLUSTRATION, 100 to 150 words. Bring a character from it back later.
4. Three to five quotes in the whole piece, each doing work where the argument turns.
5. Plant the opening image and call back to it two or three times: the diagnostic section, the self-attack, the close.
6. End by resolving the opening, not by summarising.
7. If a reference needs a sentence of explanation to justify itself, it is decoration. Cut it.

## Quotes and facts

- Only quotes you can attribute to a named person and source. Unsure of wording: paraphrase and attribute.
- Books still in copyright: paraphrase only. Pre-1929 works and short spoken remarks may be quoted. Nothing over about 25 words; one quote per source.
- Verify every historical episode with a web search before using it. Never invent numbers for colour.
- List the historical references in Research notes and tell the user which ones deserve a second check.

## Prose rules

No em dashes. No stock AI phrasing. No reflexive "not X but Y", triads or one-line paragraph endings on every paragraph. British spelling. Test each paragraph by what the reader would lose without it.

## Publish

1. Write `content/research/<slug>.md` in the site format (copy components from an existing article such as `gdp-does-not-pay-the-coupon.md`). Figures go to `public/images/research/<slug>/` as webp; add a 1200x630 jpg social card.
2. Charts with clipped labels, overlaps or truncated titles: redraw them from their cited data rather than shipping the defect. Values must not change.
3. Open every image you wrote and confirm it decodes. Check there are no em dashes in the file.
4. Commit as `Publish research: <title>`, push to `main`, wait for the Vercel deployment to reach READY, then load the live page and check the hero, every figure and the tables.
5. Append this piece to the Used ledger below in the same commit.
6. Report back briefly: the new opening, what was added or cut, facts worth a second look, and the live URL.

## Used ledger

| Date | Piece | Opening type | Episodes used | Quotes / authors used | Interchapter |
|---|---|---|---|---|---|
| 2026-09-25 | GDP Does Not Pay the Coupon | Procedural near-miss (Three Mile Island 1979) | Mexico 1982; Tesobonos 1994; Reinhart-Rogoff / Herndon 2013; Consol redemption 2015; Egypt 2022 outflows; Ghana DDEP pickets 2023; Kenya Finance Bill 2024; SA Nene sacking Dec 2015; Zambia default Nov 2020 | Wriston; Hemingway (The Sun Also Rises); Dornbusch; Carville; Steinbeck (paraphrase); Lewis (The Big Short) | Lagos loan officer / Aba manufacturer |
| 2026-09-26 | Nigeria Is Back at the Frontier | Day in the market (21 Sep 2026, Zenith 77m shares, +0.2%) | JPMorgan GBI-EM removal of Nigeria 2015; Tesla S&P 500 inclusion 2020; MSCI Pakistan back to Frontier 2021; MSCI Argentina to Standalone 2021; Samuel Brannan 1848 | Ozark (author's); Hamlet; Shelley Ozymandias (adapted); J.P. Clark Night Rain (paraphrase); r/wallstreetbets (author's). Cut: Breaking Bad, Byron, Soyinka | Lagos portfolio manager selling Zenith to a London passive fund |
