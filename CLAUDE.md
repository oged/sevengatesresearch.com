# Seven Gates Research: working rules for Claude

This repository is sevengatesresearch.com, an independent research house covering Nigerian and African equities, macro and market structure. The house voice is "The Lokoja Contrarian". No individual author is named.

## Stack and publishing

- Next.js 15, content in Markdown. Pushing to `main` deploys to production through Vercel's GitHub integration. There is no separate deploy step.
- Vercel: team `ogeds-projects`, project `sevengatesresearch-com`. After pushing, confirm the deployment reaches READY and check the live page.
- Commit messages: `Publish research: <title>`, `Publish <d Month> Daily Brief`, or a plain description for fixes.
- `npm run validate` is the publication gate for Daily Briefs. `next build` may fail in sandboxes that cannot reach Google Fonts; that is an environment limit, not a content error.

## Research articles

- File: `content/research/<slug>.md`. Files starting with `_` are ignored.
- Frontmatter: draft, slug, date (YYYY-MM-DD), title, excerpt, readingTime, kicker ("SEVEN GATES RESEARCH · SECTION · REGION"), researchType (Essay, Note or Report), category, optional ticker and region, hero, heroAlt, heroCaption, seoTitle, ogImage.
- Images: `public/images/research/<slug>/`. Hero as `00-hero-<name>.webp`, social card as `00-hero-social-1200x630.jpg` for ogImage, figures numbered `01-...`, `02-...`. Charts may also be inline SVG.
- After writing any binary, open it and confirm it decodes at full size. A truncated hero once shipped because nobody checked.
- Body is Markdown plus inline-styled HTML blocks (see `content/research/gdp-does-not-pay-the-coupon.md` for the At a Glance box, figure boxes, captions and disclaimer). Keep each HTML block free of blank lines or Markdown will break it. Markdown tables get a mobile scroll wrapper automatically, so prefer them for wide tables.
- Every article ends with Research notes, sources, and the standard disclaimer.

## Editorial standard and ledger (read before drafting or publishing)

- The full house standard is `docs/editorial-standard.md`. It is authoritative. Read it in full before drafting, rewriting or publishing any research article. It is currently v0.5. Section 12 sets the publication mode and length; section 10.10 makes a five-year share-price chart mandatory for stock research; "red team" never appears in published copy (section 14). Section 19 is the publication gate: G1 to G16 block publication.
- The repetition ledger and corrections record is `docs/repetition-ledger.md`. Read it before choosing an opening (standard 6.4, workflow step 8). Add the article's entry in the same commit as the article (step 10, gate G8). Log every correction, rating change and withdrawal there (standard 16.4).
- Quick reminders, not a substitute for the full text:
  - The answer before the sermon: state the Seven Gates view early.
  - Evidence labels (Fact, Management claim, Estimate, Reconstruction, Inference, Opinion) belong inline.
  - Every figure carries a dated source line. Every price carries a date.
  - Ratings are expected-return judgements with a horizon and a review date (default six months).
  - No em dashes. None of the banned phrases in standard 5.6. British spelling, "per cent".
  - References and quotes must pay rent (standard 6.2). Illustrative composite scenes are labelled ILLUSTRATION.

## Daily Brief palette

The `daily-brief` skill lists an older chart palette. Override it with the brand palette: ground #FBF8F1 (not #F5F0E6), ink/navy #1A1F24 (not #0B1F33), gold #A67C3D (not #B08A3E), card stroke #C6BFAE (not #EDE4D3), muted #46504F (not #64707B). `scripts/generate-daily-brief.mjs` already uses the brand values.

## Skills

- `.claude/skills/seven-gates-longform`: rewrites a finished article into engaging long-form prose without touching its numbers, charts or tables, then publishes it and updates the ledger. Use it whenever asked to make a piece more engaging, human or readable, or to "give it the treatment".
