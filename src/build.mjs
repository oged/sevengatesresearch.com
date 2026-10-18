// Assos Tech website generator. Reads src/content.mjs, writes dist/.
import { mkdirSync, writeFileSync, cpSync, rmSync } from 'node:fs';
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
const ISSUED = '18 October 2026';

const MARK = `<svg class="mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><circle cx="24" cy="24" r="23.5" fill="none" stroke="currentColor" stroke-width="0.9"/><path d="M24 24 L24 4.5 A19.5 19.5 0 0 1 43.5 24 Z" fill="currentColor"/><path d="M24 24 L24 43.5 A19.5 19.5 0 0 1 4.5 24 Z" fill="currentColor"/></svg>`;
const lockup = (href = '/') => `<a class="lockup" href="${href}" aria-label="Assos Tech home">${MARK}<span><span class="word">Assos</span><span class="desc">Tech · Energy</span></span></a>`;
const stacked = () => `<a class="stack" href="/" aria-label="Assos Tech home">${MARK}<span class="word">Assos</span><span class="desc">Tech · Energy · Engineering</span></a>`;

const NAV = [['/services/', 'Services'], ['/work/', 'Work'], ['/regions/', 'Regions'], ['/approach/', 'Approach'], ['/insights/', 'Insights'], ['/origin/', 'Origin']];

function header(path) {
  const cur = (href) => (path === href || (href !== '/' && path.startsWith(href)) ? ' aria-current="page"' : '');
  const links = NAV.map(([h, t]) => `<a href="${h}"${cur(h)}>${t}</a>`).join('');
  return `<header class="site-header"><div class="wrap">${lockup()}<nav class="nav" aria-label="Primary">${links}<a class="btn" href="/contact/">Start a conversation</a></nav><button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button></div><nav class="mobile-nav" id="mobile-nav" aria-label="Primary mobile">${links}<a href="/about/">About</a><a href="/contact/">Start a conversation</a></nav></header>`;
}

function close(title, text) {
  return `<section class="close" id="close"><div class="wrap">${stacked()}<h2 class="reveal">${title}</h2><hr><p class="lead reveal">${text}</p><div class="actions reveal"><a class="btn btn-ice" href="/contact/">Describe the decision</a><a class="btn btn-ice" href="mailto:${SITE.email}">Write to us</a></div><p class="contact"><a href="mailto:${SITE.email}">${SITE.email}</a> · ${SITE.registeredOffice[0]}, ${SITE.registeredOffice[1]}</p></div></section>`;
}

function footer() {
  const svc = SERVICES.map((s) => `<li><a href="/services/${s.slug}/">${s.name}</a></li>`).join('');
  return `<footer class="site-footer"><div class="wrap"><div class="cols"><div>${lockup()}<p class="tag">${SITE.line}</p><p>${SITE.descriptor}</p></div><div><p class="label">Services</p><ul>${svc}</ul></div><div><p class="label">Company</p><ul><li><a href="/work/">Selected work</a></li><li><a href="/regions/">Where we work</a></li><li><a href="/approach/">How we work</a></li><li><a href="/insights/">Insights</a></li><li><a href="/origin/">Origin</a></li><li><a href="/about/">About Assos Tech</a></li><li><a href="/contact/">Contact</a></li></ul></div><div><p class="label">Contact</p><ul><li><a href="mailto:${SITE.email}">${SITE.email}</a></li><li>${SITE.registeredOffice.join('<br>')}</li></ul></div></div><div class="legal"><span>© ${SITE.year} ${SITE.legalName} · Registered in ${SITE.registeredIn} · Company No. ${SITE.companyNo}</span><span><a href="/legal/">Company information</a> · <a href="/privacy/">Privacy</a></span></div></div></footer>`;
}

function rail(items) {
  if (!items?.length) return '';
  return `<ol class="rail" aria-label="Page sections">${items.map(([id, label]) => `<li><a href="#${id}"><span>${label}</span></a></li>`).join('')}</ol>`;
}

function layout({ path, title, description, body, type = 'website', railItems = [] }) {
  const fullTitle = path === '/' ? `${SITE.name} | ${SITE.tagline}` : `${strip(title)} | ${SITE.name}`;
  const url = SITE.url + path;
  const ld = { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: SITE.legalName, url: SITE.url, email: SITE.email, description: SITE.descriptor, foundingDate: '2014-04-07', address: { '@type': 'PostalAddress', streetAddress: SITE.registeredOffice[0], addressLocality: 'Edinburgh', postalCode: 'EH2 4AN', addressCountry: 'GB' }, areaServed: ['Middle East', 'North Sea', 'West Africa'] };
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
<noscript><style>.reveal{opacity:1;transform:none}</style></noscript>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${header(path)}
${rail(railItems)}
<main id="main">
${body}
</main>
${footer()}
<script src="/assets/app.js" defer></script>
</body>
</html>`;
}

function write(path, html) { const dir = join(dist, path); mkdirSync(dir, { recursive: true }); writeFileSync(join(dir, 'index.html'), html); }

function pageHero({ label, title, lead, crumbs, extra = '' }) {
  const c = crumbs ? `<p class="crumbs small">${crumbs.map(([h, t]) => `<a href="${h}">${t}</a>`).join('<span>/</span>')}</p>` : '';
  return `<section class="page-hero"><div class="wrap spine"><div class="side"><span class="label">${label}</span></div><div class="content">${c}<h1>${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}${extra}</div></div></section>`;
}

function section({ id, numeral, label, title, lead, inner, cls = '' }) {
  return `<section class="section ${cls}"${id ? ` id="${id}"` : ''}><div class="wrap spine"><div class="side">${numeral ? `<span class="numeral">${numeral}</span>` : ''}<span class="label">${label}</span></div><div class="content">${title ? `<div class="head reveal"><h2>${title}</h2>${lead ? `<p class="lead">${lead}</p>` : ''}</div>` : ''}<div class="reveal">${inner}</div></div></div></section>`;
}

const basisBadge = (basis) => `<span class="badge ${basis === 'Assos study' ? 'steel' : ''}">${basis}</span>`;

function caseCard(c) {
  return `<a class="card" href="/work/${c.slug}/"><span class="label"><span>${c.region}</span><span>·</span><span>${c.stage}</span></span><h3>${c.title}</h3><p>${c.sub}</p><span class="foot">${basisBadge(c.basis)}<span class="textlink">Read the case</span></span></a>`;
}
const serviceRow = (s) => `<li class="wide"><a class="row" href="/services/${s.slug}/"><span class="numeral">${s.numeral}</span><span><h3>${s.name}</h3><p>${s.short}</p></span><span class="arrow">read</span></a></li>`;
const insightCard = (a) => `<a class="card" href="/insights/${a.slug}/"><span class="label"><span>${a.tag}</span><span>·</span><span>${a.date}</span></span><h3>${a.title}</h3><p>${a.intro}</p><span class="foot"><span class="textlink">Read</span></span></a>`;

let figCounter = 0;
function figure(key, opts = {}) {
  const f = FIGURES[key];
  if (!f) throw new Error(`Missing figure ${key}`);
  const { title, descr, svg, caption, source, conceptual = true } = f();
  const n = opts.num ?? `Figure ${++figCounter}.`;
  return `<figure class="figure"><p class="title">${title}</p><p class="descr">${descr}</p>${conceptual ? `<span class="conceptual">Conceptual, not for construction</span>` : ''}${svg}${caption ? `<figcaption class="caption"><span class="fig-num">${n}</span> ${caption}</figcaption>` : ''}${source ? `<p class="source">${source}</p>` : ''}<div class="block"><span>${n.replace('.', '')} · ${conceptual ? 'Conceptual' : 'Plan values, labelled'}</span><span>Issued ${ISSUED} · Rev 0</span></div></figure>`;
}

const ledger = (cases) => `<div class="table-wrap" style="margin:0"><table class="ledger"><thead><tr><th>No.</th><th>Case</th><th class="hide-m">Setting</th><th>Basis</th><th class="hide-m">Period</th><th></th></tr></thead><tbody>${cases.map((c) => `<tr data-category="${c.category}"><td class="no">${c.numeral}</td><td class="title"><a href="/work/${c.slug}/">${c.title}</a><span class="sub">${c.sub}</span></td><td class="hide-m"><span class="label">${c.region}</span>${c.stage}</td><td>${basisBadge(c.basis)}</td><td class="hide-m">${c.period}</td><td class="read"><a class="serif-link" href="/work/${c.slug}/">Read<span class="dash"></span></a></td></tr>`).join('')}</tbody></table></div>`;

/* ---------- Home ---------- */
{
  const h = PAGES.home;
  figCounter = 0;
  const feat = bySlug(CASES, h.featured);
  const railItems = [['top', 'Start'], ['view', 'The view'], ['services', 'Services'], ['numbers', 'Numbers'], ['work', 'Work'], ['method', 'Method'], ['origin', 'Origin'], ['notes', 'Notes'], ['close', 'Contact']];
  const body = `
<section class="hero" id="top"><div class="wrap"><div><p class="label eyebrow">${h.eyebrow}</p><h1>${h.title}</h1><p class="lead">${h.lead}</p><div class="actions"><a class="btn btn-solid" href="/work/">See the work</a><a class="serif-link" href="/services/">What we do<span class="dash"></span></a></div></div><div class="hero-art">${FIGURES.heroDatum().svg}</div></div></section>
<section class="statement-wrap" id="view"><div class="wrap"><div><span class="label">In short</span></div><div><p class="statement reveal">${h.statement.text}</p><p class="note reveal">${h.statement.note}</p></div></div></section>
${section({ numeral: 'I', label: 'The work', title: h.view.title, inner: `<div class="grid-2"><div>${paras(h.view.left)}</div><div>${paras(h.view.right)}<p style="margin-top:24px"><a class="serif-link" href="/approach/">How we work<span class="dash"></span></a></p></div></div>${figure('chain')}` })}
${section({ id: 'services', numeral: 'II', label: 'Services', title: h.services.title, lead: h.services.lead, inner: `<ul class="ruled">${SERVICES.map(serviceRow).join('')}</ul><p class="notice">${h.services.note}</p>` })}
${section({ id: 'numbers', numeral: 'III', label: 'By the numbers', title: h.metrics.title, lead: h.metrics.lead, inner: `<div class="metrics">${h.metrics.items.map(([l, v, u, m, s]) => `<div class="metric"><p class="label">${l}</p><p class="value">${v}${u ? `<small>${u}</small>` : ''}</p><p class="meaning">${m}</p><p class="src">${s}</p></div>`).join('')}</div>` })}
${section({ id: 'work', numeral: 'IV', label: 'Selected work', title: h.work.title, lead: h.work.lead, inner: `<div class="featured"><div><span class="label">Featured · ${feat.region}</span><h3>${feat.title}</h3><p>${feat.sub}</p><p style="margin-top:18px">${basisBadge(feat.basis)}</p><p style="margin-top:22px"><a class="serif-link" href="/work/${feat.slug}/">Read the case<span class="dash"></span></a></p></div>${figure(feat.figure)}</div><div class="cards three" style="margin-top:56px">${h.work.cases.filter((s) => s !== h.featured).map((s) => caseCard(bySlug(CASES, s))).join('')}</div><div class="actions" style="margin-top:44px"><a class="btn" href="/work/">All fourteen cases</a></div><p class="notice">${h.work.note}</p>` })}
${section({ id: 'method', numeral: 'V', label: 'How we work', title: h.method.title, lead: h.method.lead, inner: `<ol class="steps">${h.method.steps.map(([n, t, p]) => `<li><span class="numeral">${n}</span><h3>${t}</h3><p>${p}</p></li>`).join('')}</ol>` })}
${section({ id: 'origin', numeral: 'VI', label: 'The name', title: h.pillars.title, lead: h.pillars.lead, inner: `<div class="pillars">${h.pillars.items.map(([w, d]) => `<div class="pillar"><p class="word">${w}</p><p>${d}</p></div>`).join('')}</div><p style="margin-top:36px"><a class="serif-link" href="/origin/">The origin of the name<span class="dash"></span></a></p>` })}
${section({ id: 'notes', numeral: 'VII', label: 'Notes', title: h.insights.title, lead: h.insights.lead, inner: `<div class="cards three">${h.insights.items.map((s) => insightCard(bySlug(INSIGHTS, s))).join('')}</div>` })}
${close(h.cta.title, h.closeText)}`;
  write('/', layout({ path: '/', title: SITE.tagline, description: SITE.descriptor, body, railItems }));
}

/* ---------- Services ---------- */
{
  const p = PAGES.services;
  const m = p.matrix;
  const dot = (v) => `<span class="dot ${['none', 'half', 'full'][v]}" aria-label="${['by request', 'contribute', 'lead'][v]}"></span>`;
  const matrix = `<div class="table-wrap" style="margin:0"><table class="matrix"><thead><tr><th>Service line</th>${m.stages.map((s) => `<th>${s}</th>`).join('')}</tr></thead><tbody>${m.rows.map(([slug, vals]) => `<tr><td><a href="/services/${slug}/">${bySlug(SERVICES, slug).name}</a></td>${vals.map((v) => `<td>${dot(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="legend"><span>${dot(2)} Lead</span><span>${dot(1)} Contribute to a wider team</span><span>${dot(0)} By specific request</span></div>`;
  const body = `${pageHero({ label: 'Services', title: p.title, lead: p.lead })}
${section({ numeral: 'I', label: 'Seven lines', inner: `<ul class="ruled">${SERVICES.map(serviceRow).join('')}</ul>` })}
${section({ numeral: 'II', label: 'Capability matrix', title: m.title, lead: m.lead, inner: matrix })}
${section({ numeral: 'III', label: 'Scope and assurance', title: p.scope.title, inner: `<div class="grid-2"><div>${paras(p.scope.left)}</div><div>${paras(p.scope.right)}</div></div>` })}
${close(p.cta.title, p.cta.text)}`;
  write('/services/', layout({ path: '/services/', title: 'Services', description: strip(p.lead), body }));

  SERVICES.forEach((s, i) => {
    figCounter = 0;
    const related = s.cases.map((c) => bySlug(CASES, c)).filter(Boolean);
    const insight = bySlug(INSIGHTS, s.insight);
    const prev = SERVICES[(i + SERVICES.length - 1) % SERVICES.length];
    const next = SERVICES[(i + 1) % SERVICES.length];
    const body = `${pageHero({ label: `Service ${s.numeral}`, title: s.title, lead: s.standfirst, crumbs: [['/services/', 'Services'], [`/services/${s.slug}/`, s.name]] })}
${section({ numeral: 'I', label: 'The question', title: s.question, inner: `<div class="measure">${paras(s.body)}</div>${s.figure ? figure(s.figure) : ''}` })}
${section({ numeral: 'II', label: 'What we do', inner: `<ul class="ruled">${s.scopes.map(([n, t], k) => `<li><span class="numeral">${roman[k].toLowerCase()}</span><span><h3>${n}</h3><p>${t}</p></span></li>`).join('')}</ul>` })}
${section({ numeral: 'III', label: 'What you receive', title: 'Deliverables', inner: `<div class="grid-2"><ul class="plain">${s.outputs.map((o) => `<li>${o}</li>`).join('')}</ul><div>${paras(s.delivery)}${s.note ? `<div class="callout"><p class="label">Scope boundary</p><p>${s.note}</p></div>` : ''}</div></div>` })}
${related.length ? section({ numeral: 'IV', label: 'Where this has mattered', title: 'Selected work', inner: `<div class="cards">${related.map(caseCard).join('')}</div>` }) : ''}
${insight ? section({ numeral: 'V', label: 'Reading', inner: `<div class="cards three">${insightCard(insight)}</div><p class="small" style="margin-top:48px"><a class="textlink" href="/services/${prev.slug}/">Previous: ${prev.name}</a> &nbsp;·&nbsp; <a class="textlink" href="/services/${next.slug}/">Next: ${next.name}</a></p>` }) : ''}
${close(s.cta?.title ?? PAGES.services.cta.title, s.cta?.text ?? PAGES.services.cta.text)}`;
    write(`/services/${s.slug}/`, layout({ path: `/services/${s.slug}/`, title: s.name, description: strip(s.standfirst), body }));
  });
}

/* ---------- Work ---------- */
{
  const p = PAGES.work;
  const cats = [...new Set(CASES.map((c) => c.category))];
  const body = `${pageHero({ label: 'Selected work', title: p.title, lead: p.lead })}
${section({ numeral: 'I', label: `${CASES.length} cases`, inner: `<div class="filters" role="group" aria-label="Filter cases"><button type="button" aria-pressed="true" data-filter="all">All</button>${cats.map((c) => `<button type="button" aria-pressed="false" data-filter="${c}">${c}</button>`).join('')}</div><div id="case-ledger">${ledger(CASES)}</div><p class="notice">${p.note}</p>` })}
${section({ numeral: 'II', label: 'Reading the basis labels', title: p.basis.title, inner: `<div class="grid-3 col-rule">${p.basis.items.map(([b, t]) => `<div>${basisBadge(b)}<p style="margin-top:14px">${t}</p></div>`).join('')}</div>` })}
${close(p.cta.title, p.cta.text)}`;
  write('/work/', layout({ path: '/work/', title: 'Selected work', description: strip(p.lead), body }));

  CASES.forEach((c, i) => {
    figCounter = 0;
    const svc = bySlug(SERVICES, c.service);
    const others = CASES.filter((x) => x.slug !== c.slug && (x.service === c.service || x.category === c.category)).slice(0, 2);
    const next = CASES[(i + 1) % CASES.length];
    const body = `${pageHero({ label: `Case ${c.numeral}`, title: c.title, lead: c.sub, crumbs: [['/work/', 'Selected work'], [`/work/${c.slug}/`, c.short ?? c.category]], extra: `<div class="meta"><div><p class="label">Setting</p><p>${c.setting}</p></div><div><p class="label">Basis</p><p>${basisBadge(c.basis)}</p></div><div><p class="label">Period</p><p>${c.period}</p></div><div><p class="label">Service line</p><p><a class="textlink" href="/services/${svc.slug}/">${svc.name}</a></p></div></div>` })}
${section({ numeral: 'I', label: 'The problem', inner: `<div class="measure">${paras(c.problem)}</div>` })}
${section({ numeral: 'II', label: 'What we did', inner: `<div class="measure">${paras(c.work)}</div>${c.figure ? figure(c.figure) : ''}${c.table ?? ''}` })}
${section({ numeral: 'III', label: 'What it changed', inner: `<div class="measure">${paras(c.result)}</div>${c.takeaway ? `<div class="callout"><p class="label">The point</p><p>${c.takeaway}</p></div>` : ''}` })}
${section({ numeral: 'IV', label: 'Deliverables and basis', inner: `<div class="grid-2"><div><p class="label" style="margin-bottom:12px">Deliverables</p><ul class="plain">${c.deliverables.map((d) => `<li>${d}</li>`).join('')}</ul></div><div><p class="label" style="margin-bottom:12px">Evidence note</p><p class="small">${c.evidence}</p></div></div>` })}
${others.length ? section({ numeral: 'V', label: 'Related', inner: `<div class="cards">${others.map(caseCard).join('')}</div><p style="margin-top:48px"><a class="serif-link" href="/work/${next.slug}/">Next case: ${strip(next.title)}<span class="dash"></span></a></p>` }) : ''}
${close(PAGES.work.cta.title, PAGES.work.cta.text)}`;
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
${section({ numeral: 'IV', label: 'Engagement models', title: p.models.title, inner: `<div class="grid-3 col-rule">${p.models.items.map(([t, d]) => `<div><h3>${t}</h3><p style="margin-top:12px">${d}</p></div>`).join('')}</div>` })}
${section({ numeral: 'V', label: 'What you receive', title: p.deliver.title, inner: `<div class="measure">${paras(p.deliver.body)}</div>` })}
${close(p.cta.title, p.cta.text)}`;
  write('/approach/', layout({ path: '/approach/', title: 'How we work', description: strip(p.lead), body }));
}

/* ---------- Regions ---------- */
{
  const p = PAGES.regions;
  const body = `${pageHero({ label: 'Where we work', title: p.title, lead: p.lead })}
${p.items.map((r, i) => section({ numeral: roman[i], label: r.label, title: r.title, lead: r.lead, inner: `<div class="grid-2"><div>${paras(r.body)}</div><div>${r.numbers.length ? `<div class="table-wrap" style="margin-top:0"><table><thead><tr><th>Number to hold</th><th class="num">Value</th><th>Source, date</th></tr></thead><tbody>${r.numbers.map(([n, v, src]) => `<tr><td class="k">${n}</td><td class="num">${v}</td><td>${src}</td></tr>`).join('')}</tbody></table></div>` : ''}<p class="label" style="margin:${r.numbers.length ? 28 : 0}px 0 12px">What we are asked for</p><ul class="plain">${r.asks.map((a) => `<li>${a}</li>`).join('')}</ul></div></div>${r.cases.length ? `<div class="cards" style="margin-top:48px">${r.cases.map((c) => caseCard(bySlug(CASES, c))).join('')}</div>` : ''}` })).join('')}
${close(p.cta.title, p.cta.text)}`;
  write('/regions/', layout({ path: '/regions/', title: 'Where we work', description: strip(p.lead), body }));
}

/* ---------- Insights ---------- */
{
  const p = PAGES.insights;
  const body = `${pageHero({ label: 'Insights', title: p.title, lead: p.lead })}
${section({ numeral: 'I', label: `${INSIGHTS.length} notes`, inner: `<div class="cards three">${INSIGHTS.map(insightCard).join('')}</div>` })}
${close(p.cta.title, p.cta.text)}`;
  write('/insights/', layout({ path: '/insights/', title: 'Insights', description: strip(p.lead), body }));

  INSIGHTS.forEach((a, i) => {
    figCounter = 0;
    const svc = bySlug(SERVICES, a.service);
    const next = INSIGHTS[(i + 1) % INSIGHTS.length];
    const sections = a.sections.map(([h, ps], k) => `<h2><span class="numeral" style="font-size:inherit;margin-right:12px">${roman[k].toLowerCase()}</span>${h}</h2>${paras(ps)}`).join('');
    const body = `${pageHero({ label: a.tag, title: a.title, lead: a.intro, crumbs: [['/insights/', 'Insights'], [`/insights/${a.slug}/`, a.tag]], extra: `<p class="small muted" style="margin-top:22px">${a.date} · ${a.reading} min read · Related service: <a class="textlink" href="/services/${svc.slug}/">${svc.name}</a></p>` })}
<section class="section"><div class="wrap spine"><div class="side"><span class="label">Note</span></div><div class="content"><article class="article">${sections}<blockquote>${a.closing}</blockquote><p style="margin-top:48px"><a class="serif-link" href="/insights/${next.slug}/">Next note: ${strip(next.title)}<span class="dash"></span></a></p></article></div></div></section>
${close(PAGES.insights.cta.title, PAGES.insights.cta.text)}`;
    write(`/insights/${a.slug}/`, layout({ path: `/insights/${a.slug}/`, title: a.title, description: strip(a.intro), body, type: 'article' }));
  });
}

/* ---------- Origin ---------- */
{
  const p = PAGES.origin;
  const body = `${pageHero({ label: 'Origin', title: p.title, lead: p.lead })}
${section({ numeral: 'I', label: 'The city', title: p.city.title, inner: `<div class="grid-2"><div>${paras(p.city.body.slice(0, 2))}</div><div>${paras(p.city.body.slice(2))}</div></div>` })}
${section({ numeral: 'II', label: 'The ace', title: p.card.title, inner: `<div class="measure">${paras(p.card.body)}</div>` })}
${section({ numeral: 'III', label: 'The mark', title: p.datum.title, inner: `<div class="grid-2"><div>${paras(p.datum.body)}</div><div class="figure" style="margin:0">${FIGURES.heroDatum().svg}<div class="block"><span>The mark</span><span>Issued ${ISSUED}</span></div></div></div>` })}
${section({ numeral: 'IV', label: 'Three words', title: 'Observe, endure, vantage', inner: `<div class="pillars">${PAGES.home.pillars.items.map(([w, d]) => `<div class="pillar"><p class="word">${w}</p><p>${d}</p></div>`).join('')}</div>` })}
${section({ numeral: 'V', label: 'The ambition', title: p.ambition.title, inner: `<div class="measure">${paras(p.ambition.body)}</div><ol class="timeline" style="margin-top:56px">${p.timeline.map(([w, t, d], k) => `<li${k === p.timeline.length - 1 ? ' class="now"' : ''}><span class="when">${w}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>` })}
${close(p.cta.title, p.cta.text)}`;
  write('/origin/', layout({ path: '/origin/', title: 'Origin', description: strip(p.lead), body }));
}

/* ---------- About ---------- */
{
  const p = PAGES.about;
  const body = `${pageHero({ label: 'About Assos Tech', title: p.title, lead: p.lead })}
${section({ numeral: 'I', label: 'The firm', title: p.firm.title, inner: `<div class="grid-2"><div>${paras(p.firm.left)}</div><div>${paras(p.firm.right)}</div></div>` })}
${section({ numeral: 'II', label: 'Experience', title: p.experience.title, lead: p.experience.lead, inner: `<div class="grid-2 col-rule">${p.experience.items.map(([t, d]) => `<div><h3>${t}</h3><p style="margin-top:12px">${d}</p></div>`).join('')}</div>` })}
${section({ numeral: 'III', label: 'The name', title: p.name.title, inner: `<div class="grid-2"><div>${paras(p.name.left)}<p style="margin-top:24px"><a class="serif-link" href="/origin/">The origin of the name<span class="dash"></span></a></p></div><div><ul class="plain">${p.name.pillars.map(([t, d]) => `<li><strong>${t}</strong> ${d}</li>`).join('')}</ul></div></div>` })}
${section({ numeral: 'IV', label: 'Standards', title: p.standards.title, inner: `<div class="measure">${paras(p.standards.body)}</div>` })}
${close(p.cta.title, p.cta.text)}`;
  write('/about/', layout({ path: '/about/', title: 'About', description: strip(p.lead), body }));
}

/* ---------- Contact ---------- */
{
  const p = PAGES.contact;
  const body = `${pageHero({ label: 'Contact', title: p.title, lead: p.lead })}
${section({ numeral: 'I', label: 'Describe the decision', inner: `<div class="grid-2"><form class="form" id="brief-form" action="mailto:${SITE.email}" method="post" enctype="text/plain"><label><span class="label">Your name</span><input name="name" type="text" autocomplete="name" required></label><label><span class="label">Organisation</span><input name="organisation" type="text" autocomplete="organization"></label><label><span class="label">Email</span><input name="email" type="email" autocomplete="email" required></label><div class="row"><label><span class="label">Service line</span><select name="service"><option value="">Not yet defined</option>${SERVICES.map((s) => `<option>${s.name}</option>`).join('')}</select></label><label><span class="label">Decision timing</span><select name="timing"><option>To be agreed</option><option>Within two weeks</option><option>Within one month</option><option>Within three months</option><option>Exploratory</option></select></label></div><label><span class="label">The decision or problem</span><textarea name="brief" required placeholder="${esc(p.placeholder)}"></textarea><p class="hint">${p.hint}</p></label><div class="actions"><button class="btn btn-solid" type="submit">Send by email</button><a class="serif-link" href="mailto:${SITE.email}">Or open your email client<span class="dash"></span></a></div></form><div>${paras(p.right)}<div class="callout"><p class="label">Direct</p><p><a class="textlink" href="mailto:${SITE.email}">${SITE.email}</a></p><p class="small" style="font-family:var(--sans);font-size:14px">${SITE.legalName}<br>${SITE.registeredOffice.join('<br>')}</p></div><p class="small muted">${p.privacy}</p></div></div>` })}
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
  const urls = ['/', '/services/', ...SERVICES.map((s) => `/services/${s.slug}/`), '/work/', ...CASES.map((c) => `/work/${c.slug}/`), '/regions/', '/approach/', '/insights/', ...INSIGHTS.map((a) => `/insights/${a.slug}/`), '/origin/', '/about/', '/contact/', '/legal/', '/privacy/'];
  writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE.url}${u}</loc><lastmod>${SITE.lastmod}</lastmod></url>`).join('\n')}\n</urlset>\n`);
  writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);
  console.log(`Built ${urls.length} pages into dist/`);
}
