# Seven Gates automated Daily Brief publisher

This overlay adds a GitHub Actions publisher to the existing Seven Gates Next.js repository.

## What it does

1. Runs at 06:55 in the `Europe/London` timezone every day using GitHub Actions timezone-aware scheduling.
2. BST/GMT changes are automatic.
3. Refuses to overwrite an existing `content/briefings/YYYY-MM-DD.md` unless a manual run explicitly enables overwrite.
4. Calls the OpenAI Responses API with built-in web search.
5. Produces a structured Seven Gates Daily Brief, live source links and a factual SVG visual.
6. Runs the existing `npm run validate` publication gate.
7. Commits the dated Markdown and SVG to `main` using GitHub Actions' `GITHUB_TOKEN`.
8. The existing Vercel Git integration deploys the commit automatically.

## Required secret

Create an OpenAI API key in the OpenAI API platform. In GitHub go to:

`Repository > Settings > Secrets and variables > Actions > New repository secret`

Name it exactly:

`OPENAI_API_KEY`

Paste the API key as the value.

API billing is separate from the ChatGPT subscription. Make sure the API account has billing/credits configured.

## Optional model variable

The script defaults to `gpt-5.6-sol`.

To change it without editing code, create a GitHub Actions repository variable:

`OPENAI_DAILY_BRIEF_MODEL`

For example: `gpt-5.6-terra` for a lower-cost daily run.

## First test

After adding the secret:

1. Open the repository's **Actions** tab.
2. Select **Publish Seven Gates Daily Brief**.
3. Choose **Run workflow**.
4. Leave `publish_date` blank for today's London date, or enter a date such as `2026-09-03`.
5. Keep **overwrite** off unless intentionally replacing an existing dated edition.
6. Watch the run. It should generate, validate, commit and push.
7. Vercel should then start a production deployment automatically.

## Files added

- `.github/workflows/daily-brief.yml`
- `scripts/generate-daily-brief.mjs`

The generator creates:

- `content/briefings/YYYY-MM-DD.md`
- `public/images/briefings/YYYY-MM-DD-visual.svg`

## Safety/reliability properties

- Date-based idempotency prevents duplicate daily editions.
- Scheduled DST handling does not rely on changing cron manually.
- The OpenAI key lives only in GitHub Secrets and is never committed.
- The existing Seven Gates validator blocks weak/malformed publication output.
- Vercel remains downstream of GitHub, so the repository is the canonical source of truth.
