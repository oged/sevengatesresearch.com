# Assos Tech Ltd website

Static site for assostechltd.com. No framework, no dependencies: `node src/build.mjs` reads `src/content.mjs` and `src/figures.mjs` and writes `dist/`.

## Structure

- `src/content.mjs`: every word on the site. Site identity, seven service lines, fourteen anonymised cases, six insight notes, page copy for home, services, work, regions, approach, insights, about, contact, legal and privacy.
- `src/figures.mjs`: inline SVG figures (constraint chain, performance chain, produced water routes, gas chain, capacity balance, restart phases, pipeline envelope). Fluid colours and data palette follow the Forest & Sage Rev E standard.
- `src/build.mjs`: page templates, navigation, footer, sitemap, robots and `vercel.json`.
- `src/check.mjs`: verification. Internal links, one H1 per page, em dashes, banned phrases, American spellings. Run after every content change.
- `public/assets/`: stylesheet, client script (menu, case filter, contact form), favicon and social card.

## Commands

```
npm run build    # writes dist/
npm run check    # verifies dist/
npm run serve    # http://localhost:8080
```

## Editing rules

- British English, no em dashes, numbers carry a source and a date. The checker enforces the banned-phrase list from the house voice standard.
- Case studies state setting, period and basis (embedded engineering role, Assos study, practitioner experience). Client, field, station and well identities are withheld. Figures are plan values or dated study inputs, labelled as such.
- Fonts are Newsreader and Instrument Sans from Google Fonts. Colours are the Rev E tokens on `:root` in `styles.css`.
- One Forest field per page: the closing band. Do not add a second.

## Hosting

Vercel builds with `node src/build.mjs` and serves `dist/`. Pushing to `main` deploys production. The custom domain is added in the Vercel project settings once DNS is pointed.
