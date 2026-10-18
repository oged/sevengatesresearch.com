# Hosting assostechltd.com

The site is static HTML. It needs no server, database or runtime. Any host that serves files can run it. This note says where it lives now, how to point the domain at it, and how to host it elsewhere if you ever want to.

## Where it lives now

- Production: https://assostechltd-com.vercel.app (Vercel, team `ogeds-projects`, project `assostechltd-com`).
- Source: branch `assostech-website` of the `oged/sevengatesresearch.com` repository on GitHub. Every push to that branch can be deployed to production.
- Domain: `assostechltd.com` and `www.assostechltd.com` are attached to the Vercel project and verified. `www` redirects to the bare domain (308).

## Recommendation: stay on Vercel

Vercel is the right host for this site. It is already live there, HTTPS is automatic, the pages are served from a global edge network, and every change pushed to the repository deploys itself. The Hobby plan is free and covers a site this size with room to spare. Pro is USD 20 a month if you want team seats or higher limits.

The only step left is DNS.

## Pointing the domain (the one step that remains)

Your DNS is managed at Squarespace Domains (the nameservers are `ns-cloud-e1` to `e4.googledomains.com`, which Squarespace took over from Google Domains). The domain currently points at a Squarespace site.

Sign in at https://account.squarespace.com, open Domains, choose `assostechltd.com`, then DNS settings, and make these changes.

| Action | Type | Host | Value | TTL |
|---|---|---|---|---|
| Delete | A | @ | 198.185.159.144 | |
| Delete | A | @ | 198.185.159.145 | |
| Delete | A | @ | 198.49.23.144 | |
| Delete | A | @ | 198.49.23.145 | |
| Add | A | @ | 216.198.79.1 | 1 hour |
| Add | A | @ | 64.29.17.1 | 1 hour |
| Replace | CNAME | www | 4284392fd0da323d.vercel-dns-017.com | 1 hour |

The existing `www` CNAME points at `ext-sq.squarespace.com`. Replace it with the Vercel value above.

Do not touch MX, TXT (SPF, DKIM, DMARC) or any other record. Those carry your email, and `hello@assostechltd.com` depends on them.

Propagation takes from a few minutes to a few hours. When it is done, https://assostechltd.com serves the Assos Tech site with a certificate Vercel issues on its own. You can check progress at https://vercel.com/ogeds-projects/assostechltd-com/settings/domains.

If Squarespace will not let you edit the records because the domain is tied to a Squarespace website subscription, cancel or disconnect that website first, then edit. The domain registration itself stays with Squarespace; only the records change.

## Package contents

Two zips are supplied.

- `assostech-website-source.zip`: the whole repository. `src/content.mjs` holds every word, `src/figures.mjs` the drawings, `src/build.mjs` writes the pages into `dist/`, `src/check.mjs` verifies them. No dependencies. Needs Node 18 or later.
- `assostechltd-com-static.zip`: the built site, 38 pages plus assets, ready to upload to any static host. Includes an `.htaccess` for Apache hosts.

Commands, from the source folder:

```
node src/build.mjs    # writes dist/
node src/check.mjs    # verifies dist/: links, one H1 per page, house voice
python3 -m http.server 8080 --directory dist    # preview at http://localhost:8080
```

## Moving the source to its own repository

The source currently sits on a branch of the research repository because the GitHub app in the build session could not create repositories. To give it its own home:

```
git clone --branch assostech-website --single-branch https://github.com/oged/sevengatesresearch.com assostechltd-com
cd assostechltd-com
git branch -m main
git remote set-url origin https://github.com/oged/assostechltd-com   # after creating the empty repo on GitHub
git push -u origin main
```

Then in Vercel, project settings, Git, connect the project to the new repository and set the production branch to `main`. Remove the "ignored build step" command from both Vercel projects at the same time; it exists only to keep the two sites apart while they share a repository.

## Hosting it elsewhere

Should you ever leave Vercel, these all work with the static zip.

| Host | Cost | How |
|---|---|---|
| Cloudflare Pages | Free | Create a Pages project, connect the repository, build command `node src/build.mjs`, output `dist`. Or drag the unzipped static folder onto the dashboard. Add the custom domain in the project. |
| Netlify | Free tier | Same build settings, or drag and drop the static folder at app.netlify.com/drop. |
| GitHub Pages | Free | Commit `dist/` output through a GitHub Action on push, or publish the static folder from a `gh-pages` branch. Custom domain via a `CNAME` file. |
| Any cPanel or shared host | From about GBP 3 a month | Upload the contents of the static folder to `public_html`. The `.htaccess` sets the security headers and the 404 page. |

Each page is a folder with an `index.html`, so clean URLs such as `/services/` work on every host without rewrite rules.

## Email

The website only links to `hello@assostechltd.com`. The contact form opens the visitor's own email client; nothing is stored or posted. Email hosting is separate from web hosting and is not affected by any of the above as long as the MX and TXT records are left alone.
