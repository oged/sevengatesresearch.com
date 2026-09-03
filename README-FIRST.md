# Seven Gates production fix

Upload the contents of this folder to the repository root, preserving `.github/workflows`.

This overlay does three things:
1. fixes duplicated section numbering in all future Daily Briefs;
2. adds a one-off legacy archive importer that fetches the existing public Seven Gates briefing pages before DNS cutover;
3. normalises the already-published 3 September headings during the archive import.

After upload, run GitHub Actions > Import Seven Gates Legacy Briefings > Run workflow.
Do not switch the custom domain until that action and the resulting Vercel deployment are green.
