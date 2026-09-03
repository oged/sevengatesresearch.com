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
