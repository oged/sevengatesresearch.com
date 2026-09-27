# Seven Gates Research

Production source for **sevengatesresearch.com**.

## Architecture

**ChatGPT writes → GitHub remembers → Vercel publishes.**

Daily Briefs are Markdown files in `content/briefings/`. The app derives the latest briefing, permanent dated route, archive, Earlier Briefings, sitemap and RSS automatically. No agent manually rebuilds the archive.

## Publish one Daily Brief

Create:

`content/briefings/YYYY-MM-DD.md`

Use `_template.md`. Put hero art under `public/images/briefings/` and real charts under `public/charts/`.

The build runs `scripts/validate-content.mjs` first. Invalid content fails the deployment.

## Routes

- `/` homepage
- `/briefing` latest edition
- `/briefing/YYYY-MM-DD` permanent edition
- `/briefing/archive` newest-first archive
- `/feed.xml` RSS
- `/sitemap.xml` sitemap

## One-time Vercel setup

1. Vercel → Add New → Project.
2. Import `oged/sevengatesresearch.com`.
3. Framework: Next.js.
4. Build command: `npm run build`.
5. Deploy preview.
6. Verify desktop/mobile, `/briefing/archive`, `/feed.xml`, `/sitemap.xml`.
7. Only then add `sevengatesresearch.com` and `www.sevengatesresearch.com`.
8. Move DNS away from ChatGPT Sites after the preview passes QA.

House rule: **Interesting first. Correct always.**


## Mobile PDF publisher

Long-form designed reports can be published from a phone without converting the PDF back into HTML.

Route:

`/admin/publish`

The publisher:

1. authenticates with an HTTP-only signed session cookie;
2. previews the selected PDF locally before upload;
3. commits the PDF unchanged to `public/reports/<slug>.pdf`;
4. creates or updates a Markdown metadata stub in `content/research/<slug>.md`;
5. lets the existing Research Library, sitemap and metadata pipeline discover the report automatically;
6. supports a private draft state at `/admin/preview/<slug>`; and
7. relies on the existing GitHub → Vercel integration to deploy the commit.

Required Vercel environment variables:

- `PUBLISH_ADMIN_PASSWORD`
- `GITHUB_TOKEN` — fine-grained token with Contents read/write access to this repository

Optional:

- `PUBLISH_ADMIN_SECRET` — separate HMAC signing secret
- `GITHUB_REPO` — defaults to `oged/sevengatesresearch.com`
- `GITHUB_BRANCH` — defaults to `main`

The GitHub-backed web upload is capped at 4 MB so it remains within the serverless request path. Larger PDFs should be committed directly until a Vercel Blob store is connected.
