// Assos Tech website generator. Reads src/content.mjs, writes dist/.
import { mkdirSync, writeFileSync, readFileSync, cpSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, SERVICES, CASES, INSIGHTS, PAGES } from './content.mjs';
import { FIGURES } from './figures.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(join(root, 'public'), dist, { recursive: true });

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (s) => String(s).replace(/<[^>]+>/g, '');
const paras = (arr, cls = '') => arr.map((p) => `<p${cls ? ` class="${cls}"` : ''}>${p}</p>`).join('\n');
const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV'];
const bySlug = (arr, slug) => arr.find((x) => x.slug === slug);

const MARK = `<svg class="mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><circle cx="24" cy="24" r="23.5" fill="none" stroke="currentColor" stroke-width="0.9"/><path d="M24 24 L24 4.5 A19.5 19.5 0 0 1 43.5 24 Z" fill="currentColor"/><path d="M24 24 L24 43.5 A19.5 19.5 0 0 1 4.5 24 Z" fill="currentColor"/></svg>`;

const lockup = (href = '/') => `<a class="lockup" href="${href}" aria-label="Assos Tech home">${MARK}<span><span class="word">Assos</span><span class="desc">Tech · Energy</span></span></a>`;

const NAV = [
  ['/services/', 'Services'],
  ['/work/', 'Work'],
  ['/regions/', 'Regions'],
  ['/approach/', 'Approach'],
  ['/insights/', 'Insights'],
  ['/about/', 'About'],
];

function header(path) {
  const cur = (href) => (path === href || (href !== '/' && path.startsWith(href)) ? ' aria-current="page"' : '');
  const links = NAV.map(([h, t]) => `<a href="${h}"${cur(h)}>${t}</a>`).join('');
  return `<header class="site-header"><div class="wrap">${lockup()}<nav class="nav" aria-label="Primary">${links}<a class="btn" href="/contact/">Start a conversation</a></nav><button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button></div><nav class="mobile-nav" id="mobile-nav" aria-label="Primary mobile">${links}<a href="/contact/">Start a conversation</a></nav></header>`;
}

function band(ctaTitle, ctaText) {
  return `<section class="band"><div class="wrap spine"><div class="side"><span class="label on-forest">Start a conversation</span></div><div class="content"><h2>${ctaTitle}</h2><hr><p class="lead measure">${ctaText}</p><div class="actions" style="margin-top:28px"><a class="btn btn-ice" href="/contact/">Describe the decision</a><a class="btn btn-ice" href="mailto:${SITE.email}">${SITE.email}</a></div></div></div></section>`;
}

function footer() {
  const svc = SERVICES.map((s) => `<li><a href="/services/${s.slug}/">${s.name}</a></li>`).join('');
  return `<footer class="site-footer"><div class="wrap"><div class="cols"><div>${lockup()}<p class="tag">${SITE.line}</p><p>${SITE.descriptor}</p></div><div><p class="label">Services</p><ul>${svc}</ul></div><div><p class="label">Company</p><ul><li><a href="/work/">Selected work</a></li><li><a href="/regions/">Where we work</a></li><li><a href="/approach/">How we work</a></li><li><a href="/insights/">Insights</a></li><li><a href="/about/">About Assos Tech</a></li><li><a href="/contact/">Contact</a></li></ul></div><div><p class="label">Contact</p><ul><li><a href="mailto:${SITE.email}">${SITE.email}</a></li><li>${SITE.registeredOffice.join('<br>')}</li></ul></div></div><div class="legal"><span>© ${SITE.year} ${SITE.legalName} · Registered in ${SITE.registeredIn} · Company No. ${SITE.companyNo}</span><span><a href="/legal/">Company information</a> · <a href="/privacy/">Privacy</a></span></div></div></footer>`;
}

function layout({ path, title, description, body, type = 'website' }) {
  const fullTitle = path === '/' ? `${SITE.name} | ${SITE.tagline}` : `${strip(title)} | ${SITE.name}`;
  const url = SITE.url + path;
  const ld = {
    '@context': 'https://schema.org', '@type': 'ProfessionalService', name: SITE.legalName, url: SITE.url,
    email: SITE.email, description: SITE.descriptor,
    address: { '@type': 'PostalAddress', streetAddress: SITE.registeredOffice[0], addressLocality: SITE.registeredOffice[1].split(',')[0], postalCode: SITE.registeredOffice[1].split(', ')[1] || '', addressCountry: 'GB' },
    areaServed: ['Middle East', 'North Sea', 'West Africa'],
  };
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(strip(title) || SITE.tagline)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE.url}/assets/social-card.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#22362A">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/styles.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${header(path)}
<main id="main">
${body}
</main>
${footer()}
<script src="/assets/app.js" defer></script>
</body>
</html>`;
}

function write(path, html) {
  const dir = join(dist, path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
}

function pageHero({ label, title, lead, crumbs, extra = '' }) {
  const c = crumbs ? `<p class="crumbs small">${crumbs.map(([h, t]) => `<a href="${h}">${t}</a>`).join('<span>/</span>')}</p>` : '';
  return `<section class="page-hero"><div class="wrap spine"><div class="side"><span class="label">${label}</span></div><div class="content">${c}<h1>${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}${extra}</div></div></section>`;
}

function section({ numeral, label, title, lead, inner, cls = '' }) {
  return `<section class="section ${cls}"><div class="wrap spine"><div class="side">${numeral ? `<span class="numeral">${numeral}</span>` : ''}<span class="label">${label}</span></div><div class="content">${title ? `<div class="head"><h2>${title}</h2>${lead ? `<p class="lead">${lead}</p>` : ''}</div>` : ''}${inner}</div></div></section>`;
}

const basisBadge = (basis) => {
  const map = { 'Assos study': 'steel', 'Embedded engineering role': '', 'Practitioner experience': '' };
  return `<span class="badge ${map[basis] ?? ''}">${basis}</span>`;
};

function caseCard(c) {
  return `<a class="card" href="/work/${c.slug}/"><span class="label"><span>${c.region}</span><span>·</span><span>${c.stage}</span></span><h3>${c.title}</h3><p>${c.sub}</p><span class="foot">${basisBadge(c.basis)}<span class="textlink">Read the case</span></span></a>`;
}

function serviceRow(s, i) {
  return `<li class="wide"><a class="row" href="/services/${s.slug}/"><span class="numeral">${s.numeral}</span><span><h3>${s.name}</h3><p>${s.short}</p></span><span class="arrow">read</span></a></li>`;
}

function insightCard(a) {
  return `<a class="card" href="/insights/${a.slug}/"><span class="label"><span>${a.tag}</span><span>·</span><span>${a.date}</span></span><h3>${a.title}</h3><p>${a.intro}</p><span class="foot"><span class="textlink">Read</span></span></a>`;
}

function figure(key, opts = {}) {
  const f = FIGURES[key];
  if (!f) throw new Error(`Missing figure ${key}`);
  const { title, descr, svg, caption, source, conceptual = true } = f();
  return `<figure class="figure"><p class="title">${title}</p><p class="descr">${descr}</p>${conceptual ? `<span class="conceptual">Conceptual, not for construction</span>` : ''}${svg}${caption ? `<figcaption class="caption">${opts.num ? `<span class="fig-num">${opts.num}</span> ` : ''}${caption}</figcaption>` : ''}${source ? `<p class="source">${source}</p>` : ''}</figure>`;
}

/* ---------- Home ---------- */
{
  const h = PAGES.home;
  const body = `
<section class="hero"><div class="wrap spine"><div class="side"><span class="label">${h.label}</span></div><div class="content"><h1>${h.title}</h1><p class="lead">${h.lead}</p><div class="actions"><a class="btn btn-solid" href="/work/">See the work</a><a class="btn" href="/services/">What we do</a></div><div class="hero-meta">${h.meta.map(([l, t]) => `<div><p class="label">${l}</p><p>${t}</p></div>`).join('')}</div></div></div></section>
${section({ numeral: 'I', label: 'The Assos view', title: h.view.title, inner: `<div class="grid-2"><div>${paras(h.view.left)}</div><div>${paras(h.view.right)}<p style="margin-top:20px"><a class="textlink" href="/approach/">How we work</a></p></div></div>${figure('chain', { num: 'Figure 1.' })}` })}
${section({ numeral: 'II', label: 'Services', title: h.services.title, lead: h.services.lead, inner: `<ul class="ruled">${SERVICES.map(serviceRow).join('')}</ul><p class="notice">${h.services.note}</p>` })}
${section({ numeral: 'III', label: 'Selected work', title: h.work.title, lead: h.work.lead, inner: `<div class="cards">${h.work.cases.map((s) => caseCard(bySlug(CASES, s))).join('')}</div><div class="actions" style="margin-top:36px"><a class="btn" href="/work/">All selected work</a></div><p class="notice">${h.work.note}</p>` })}
${section({ numeral: 'IV', label: 'How we work', title: h.method.title, lead: h.method.lead, inner: `<ol class="steps">${h.method.steps.map(([n, t, p]) => `<li><span class="numeral">${n}</span><h3>${t}</h3><p>${p}</p></li>`).join('')}</ol>` })}
${section({ numeral: 'V', label: 'Insights', title: h.insights.title, lead: h.insights.lead, inner: `<div class="cards three">${h.insights.items.map((s) => insightCard(bySlug(INSIGHTS, s))).join('')}</div>` })}
${band(h.cta.title, h.cta.text)}`;
  write('/', layout({ path: '/', title: SITE.tagline, description: SITE.descriptor, body }));
}

/* ---------- Services ---------- */
{
  const p = PAGES.services;
  const body = `${pageHero({ label: 'Services', title: p.title, lead: p.lead })}
${section({ label: 'Seven service lines', inner: `<ul class="ruled">${SERVICES.map(serviceRow).join('')}</ul>` })}
${section({ label: 'Scope and assurance', title: p.scope.title, inner: `<div class="grid-2"><div>${paras(p.scope.left)}</div><div>${paras(p.scope.right)}</div></div>` })}
${band(p.cta.title, p.cta.text)}`;
  write('/services/', layout({ path: '/services/', title: 'Services', description: strip(p.lead), body }));

  SERVICES.forEach((s, i) => {
    const related = s.cases.map((c) => bySlug(CASES, c)).filter(Boolean);
    const insight = bySlug(INSIGHTS, s.insight);
    const prev = SERVICES[(i + SERVICES.length - 1) % SERVICES.length];
    const next = SERVICES[(i + 1) % SERVICES.length];
    const body = `${pageHero({ label: `Service ${s.numeral}`, title: s.title, lead: s.standfirst, crumbs: [['/services/', 'Services'], [`/services/${s.slug}/`, s.name]] })}
${section({ numeral: 'I', label: 'The question', title: s.question, inner: `<div class="measure">${paras(s.body)}</div>${s.figure ? figure(s.figure, { num: 'Figure 1.' }) : ''}` })}
${section({ numeral: 'II', label: 'What we do', inner: `<ul class="ruled">${s.scopes.map(([n, t], k) => `<li><span class="numeral">${roman[k].toLowerCase()}</span><span><h3>${n}</h3><p>${t}</p></span></li>`).join('')}</ul>` })}
${section({ numeral: 'III', label: 'What you receive', title: 'Deliverables', inner: `<div class="grid-2"><ul class="plain">${s.outputs.map((o) => `<li>${o}</li>`).join('')}</ul><div>${paras(s.delivery)}${s.note ? `<div class="callout"><p class="label">Scope boundary</p><p>${s.note}</p></div>` : ''}</div></div>` })}
${related.length ? section({ numeral: 'IV', label: 'Where this has mattered', title: 'Selected work', inner: `<div class="cards">${related.map(caseCard).join('')}</div>` }) : ''}
${insight ? section({ numeral: 'V', label: 'Reading', inner: `<div class="cards three">${insightCard(insight)}</div><p class="small" style="margin-top:40px"><a class="textlink" href="/services/${prev.slug}/">Previous: ${prev.name}</a> &nbsp;·&nbsp; <a class="textlink" href="/services/${next.slug}/">Next: ${next.name}</a></p>` }) : ''}
${band(s.cta?.title ?? PAGES.services.cta.title, s.cta?.text ?? PAGES.services.cta.text)}`;
    write(`/services/${s.slug}/`, layout({ path: `/services/${s.slug}/`, title: s.name, description: strip(s.standfirst), body }));
  });
}

/* ---------- Work ---------- */
{
  const p = PAGES.work;
  const cats = [...new Set(CASES.map((c) => c.category))];
  const body = `${pageHero({ label: 'Selected work', title: p.title, lead: p.lead })}
${section({ label: `${CASES.length} cases`, inner: `<div class="filters" role="group" aria-label="Filter cases"><button type="button" aria-pressed="true" data-filter="all">All</button>${cats.map((c) => `<button type="button" aria-pressed="false" data-filter="${c}">${c}</button>`).join('')}</div><div class="cards" id="case-grid">${CASES.map((c) => `<div data-category="${c.category}" style="display:contents">${caseCard(c)}</div>`).join('')}</div><p class="notice">${p.note}</p>` })}
${section({ label: 'Reading the basis labels', title: p.basis.title, inner: `<div class="grid-3 col-rule">${p.basis.items.map(([b, t]) => `<div>${basisBadge(b)}<p style="margin-top:12px">${t}</p></div>`).join('')}</div>` })}
${band(p.cta.title, p.cta.text)}`;
  write('/work/', layout({ path: '/work/', title: 'Selected work', description: strip(p.lead), body }));

  CASES.forEach((c, i) => {
    const svc = bySlug(SERVICES, c.service);
    const others = CASES.filter((x) => x.slug !== c.slug && (x.service === c.service || x.category === c.category)).slice(0, 2);
    const next = CASES[(i + 1) % CASES.length];
    const body = `${pageHero({ label: `Case ${c.numeral}`, title: c.title, lead: c.sub, crumbs: [['/work/', 'Selected work'], [`/work/${c.slug}/`, c.short ?? c.category]], extra: `<div class="meta"><div><p class="label">Setting</p><p>${c.setting}</p></div><div><p class="label">Basis</p><p>${basisBadge(c.basis)}</p></div><div><p class="label">Period</p><p>${c.period}</p></div><div><p class="label">Service line</p><p><a class="textlink" href="/services/${svc.slug}/">${svc.name}</a></p></div></div>` })}
${section({ numeral: 'I', label: 'The problem', inner: `<div class="measure">${paras(c.problem)}</div>` })}
${section({ numeral: 'II', label: 'What we did', inner: `<div class="measure">${paras(c.work)}</div>${c.figure ? figure(c.figure, { num: 'Figure 1.' }) : ''}${c.table ?? ''}` })}
${section({ numeral: 'III', label: 'What it changed', inner: `<div class="measure">${paras(c.result)}</div>${c.takeaway ? `<div class="callout"><p class="label">The point</p><p>${c.takeaway}</p></div>` : ''}` })}
${section({ numeral: 'IV', label: 'Deliverables and basis', inner: `<div class="grid-2"><div><p class="label" style="margin-bottom:10px">Deliverables</p><ul class="plain">${c.deliverables.map((d) => `<li>${d}</li>`).join('')}</ul></div><div><p class="label" style="margin-bottom:10px">Evidence note</p><p class="small">${c.evidence}</p></div></div>` })}
${others.length ? section({ numeral: 'V', label: 'Related', inner: `<div class="cards">${others.map(caseCard).join('')}</div><p class="small" style="margin-top:40px"><a class="textlink" href="/work/${next.slug}/">Next case: ${strip(next.title)}</a></p>` }) : ''}
${band(PAGES.work.cta.title, PAGES.work.cta.text)}`;
    write(`/work/${c.slug}/`, layout({ path: `/work/${c.slug}/`, title: c.title, description: strip(c.sub), body, type: 'article' }));
  });
}

/* ---------- Approach ---------- */
{
  const p = PAGES.approach;
  const body = `${pageHero({ label: 'How we work', title: p.title, lead: p.lead })}
${section({ numeral: 'I', label: 'The sequence', title: p.sequence.title, lead: p.sequence.lead, inner: `<ol class="steps">${p.sequence.steps.map(([n, t, d]) => `<li><span class="numeral">${n}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>` })}
${section({ numeral: 'II', label: 'Evidence discipline', title: p.evidence.title, inner: `<div class="grid-2"><div>${paras(p.evidence.left)}</div><div>${p.evidence.table}</div></div>` })}
${section({ numeral: 'III', label: 'The verdict', title: p.verdict.title, inner: `<div class="grid-2"><div>${paras(p.verdict.left)}</div><div><ul class="plain">${p.verdict.items.map(([b, t]) => `<li><strong>${b}</strong> ${t}</li>`).join('')}</ul></div></div>` })}
${section({ numeral: 'IV', label: 'Engagement models', title: p.models.title, inner: `<div class="grid-3 col-rule">${p.models.items.map(([t, d]) => `<div><h3>${t}</h3><p style="margin-top:10px">${d}</p></div>`).join('')}</div>` })}
${section({ numeral: 'V', label: 'What you receive', title: p.deliver.title, inner: `<div class="measure">${paras(p.deliver.body)}</div>` })}
${band(p.cta.title, p.cta.text)}`;
  write('/approach/', layout({ path: '/approach/', title: 'How we work', description: strip(p.lead), body }));
}

/* ---------- Insights ---------- */
{
  const p = PAGES.insights;
  const body = `${pageHero({ label: 'Insights', title: p.title, lead: p.lead })}
${section({ label: `${INSIGHTS.length} notes`, inner: `<div class="cards three">${INSIGHTS.map(insightCard).join('')}</div>` })}
${band(p.cta.title, p.cta.text)}`;
  write('/insights/', layout({ path: '/insights/', title: 'Insights', description: strip(p.lead), body }));

  INSIGHTS.forEach((a, i) => {
    const svc = bySlug(SERVICES, a.service);
    const next = INSIGHTS[(i + 1) % INSIGHTS.length];
    const sections = a.sections.map(([h, ps], k) => `<h2><span class="numeral" style="font-size:inherit;margin-right:12px">${roman[k].toLowerCase()}</span>${h}</h2>${paras(ps)}${a.figures?.[k] ? figure(a.figures[k], { num: `Figure ${k + 1}.` }) : ''}`).join('');
    const body = `${pageHero({ label: a.tag, title: a.title, lead: a.intro, crumbs: [['/insights/', 'Insights'], [`/insights/${a.slug}/`, a.tag]], extra: `<p class="small muted" style="margin-top:20px">${a.date} · ${a.reading} min read · Related service: <a class="textlink" href="/services/${svc.slug}/">${svc.name}</a></p>` })}
<section class="section"><div class="wrap spine"><div class="side"><span class="label">Note</span></div><div class="content"><article class="article">${sections}<blockquote>${a.closing}</blockquote><p class="small" style="margin-top:40px"><a class="textlink" href="/insights/${next.slug}/">Next note: ${strip(next.title)}</a></p></article></div></div></section>
${band(PAGES.insights.cta.title, PAGES.insights.cta.text)}`;
    write(`/insights/${a.slug}/`, layout({ path: `/insights/${a.slug}/`, title: a.title, description: strip(a.intro), body, type: 'article' }));
  });
}

/* ---------- Regions ---------- */
{
  const p = PAGES.regions;
  const body = `${pageHero({ label: 'Where we work', title: p.title, lead: p.lead })}
${p.items.map((r, i) => section({ numeral: roman[i], label: r.label, title: r.title, lead: r.lead, inner: `<div class="grid-2"><div>${paras(r.body)}</div><div><div class="table-wrap" style="margin-top:0"><table><thead><tr><th>Number to hold</th><th class="num">Value</th><th>Source, date</th></tr></thead><tbody>${r.numbers.map(([n, v, src]) => `<tr><td class="k">${n}</td><td class="num">${v}</td><td>${src}</td></tr>`).join('')}</tbody></table></div><p class="label" style="margin:24px 0 10px">What we are asked for</p><ul class="plain">${r.asks.map((a) => `<li>${a}</li>`).join('')}</ul></div></div>${r.cases.length ? `<div class="cards" style="margin-top:40px">${r.cases.map((c) => caseCard(bySlug(CASES, c))).join('')}</div>` : ''}` })).join('')}
${band(p.cta.title, p.cta.text)}`;
  write('/regions/', layout({ path: '/regions/', title: 'Where we work', description: strip(p.lead), body }));
}

/* ---------- About ---------- */
{
  const p = PAGES.about;
  const body = `${pageHero({ label: 'About Assos Tech', title: p.title, lead: p.lead })}
${section({ numeral: 'I', label: 'The firm', title: p.firm.title, inner: `<div class="grid-2"><div>${paras(p.firm.left)}</div><div>${paras(p.firm.right)}</div></div>` })}
${section({ numeral: 'II', label: 'Experience', title: p.experience.title, lead: p.experience.lead, inner: `<div class="grid-2 col-rule">${p.experience.items.map(([t, d]) => `<div><h3>${t}</h3><p style="margin-top:10px">${d}</p></div>`).join('')}</div>` })}
${section({ numeral: 'III', label: 'The name', title: p.name.title, inner: `<div class="grid-2"><div>${paras(p.name.left)}</div><div><ul class="plain">${p.name.pillars.map(([t, d]) => `<li><strong>${t}</strong> ${d}</li>`).join('')}</ul></div></div>` })}
${section({ numeral: 'IV', label: 'Standards', title: p.standards.title, inner: `<div class="measure">${paras(p.standards.body)}</div>` })}
${band(p.cta.title, p.cta.text)}`;
  write('/about/', layout({ path: '/about/', title: 'About', description: strip(p.lead), body }));
}

/* ---------- Contact ---------- */
{
  const p = PAGES.contact;
  const body = `${pageHero({ label: 'Contact', title: p.title, lead: p.lead })}
${section({ numeral: 'I', label: 'Describe the decision', inner: `<div class="grid-2"><form class="form" id="brief-form" action="mailto:${SITE.email}" method="post" enctype="text/plain"><label><span class="label">Your name</span><input name="name" type="text" autocomplete="name" required></label><label><span class="label">Organisation</span><input name="organisation" type="text" autocomplete="organization"></label><label><span class="label">Email</span><input name="email" type="email" autocomplete="email" required></label><div class="row"><label><span class="label">Service line</span><select name="service"><option value="">Not yet defined</option>${SERVICES.map((s) => `<option>${s.name}</option>`).join('')}</select></label><label><span class="label">Decision timing</span><select name="timing"><option>To be agreed</option><option>Within two weeks</option><option>Within one month</option><option>Within three months</option><option>Exploratory</option></select></label></div><label><span class="label">The decision or problem</span><textarea name="brief" required placeholder="${esc(p.placeholder)}"></textarea><p class="hint">${p.hint}</p></label><div class="actions"><button class="btn btn-solid" type="submit">Send by email</button><a class="btn" href="mailto:${SITE.email}">Open your email client</a></div></form><div>${paras(p.right)}<div class="callout"><p class="label">Direct</p><p><a class="textlink" href="mailto:${SITE.email}">${SITE.email}</a></p><p>${SITE.legalName}<br>${SITE.registeredOffice.join('<br>')}</p></div><p class="small muted">${p.privacy}</p></div></div>` })}
${section({ numeral: 'II', label: 'What happens next', inner: `<ol class="steps">${p.next.map(([n, t, d]) => `<li><span class="numeral">${n}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>` })}`;
  write('/contact/', layout({ path: '/contact/', title: 'Contact', description: strip(p.lead), body }));
}

/* ---------- Legal, privacy, 404 ---------- */
for (const key of ['legal', 'privacy']) {
  const p = PAGES[key];
  const body = `${pageHero({ label: p.label, title: p.title, lead: p.lead })}<section class="section"><div class="wrap spine"><div class="side"></div><div class="content prose">${p.body}</div></div></section>`;
  write(`/${key}/`, layout({ path: `/${key}/`, title: p.title, description: strip(p.lead), body }));
}
{
  const body = `${pageHero({ label: 'Page not found', title: 'That page is not <em>here</em>.', lead: 'The address may have changed. The links below cover the whole site.' })}<section class="section"><div class="wrap spine"><div class="side"></div><div class="content"><div class="actions"><a class="btn" href="/">Home</a><a class="btn" href="/services/">Services</a><a class="btn" href="/work/">Work</a><a class="btn" href="/contact/">Contact</a></div></div></div></section>`;
  writeFileSync(join(dist, '404.html'), layout({ path: '/404', title: 'Page not found', description: 'Page not found.', body }));
}

/* ---------- Sitemap, robots ---------- */
{
  const urls = ['/', '/services/', ...SERVICES.map((s) => `/services/${s.slug}/`), '/work/', ...CASES.map((c) => `/work/${c.slug}/`), '/regions/', '/approach/', '/insights/', ...INSIGHTS.map((a) => `/insights/${a.slug}/`), '/about/', '/contact/', '/legal/', '/privacy/'];
  writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE.url}${u}</loc><lastmod>${SITE.lastmod}</lastmod></url>`).join('\n')}\n</urlset>\n`);
  writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);
  writeFileSync(join(dist, 'vercel.json'), JSON.stringify({ cleanUrls: true, trailingSlash: true, headers: [{ source: '/(.*)', headers: [{ key: 'X-Content-Type-Options', value: 'nosniff' }, { key: 'X-Frame-Options', value: 'DENY' }, { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }] }] }, null, 2));
  console.log(`Built ${urls.length} pages into dist/`);
}
