// Verification: internal links, single H1, banned phrases, em dashes, American spellings.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })(root);
const banned = ['it is important to note', 'it should be noted', 'it is worth noting', "in today's world", 'rapidly evolving', 'landscape', 'at the heart of', 'against this backdrop', 'key takeaway', 'here is the thing', 'unpack', 'delve', 'intricate', 'interplay', 'tapestry', 'navigating', 'pivotal', 'crucial',  'robust', 'seamless', 'holistic', 'synerg', 'unlock', 'leverage', 'cutting-edge', 'world-class', 'best-in-class', 'game-changer', 'underscore', 'testament to', 'tell a story', 'paints a picture', 'things get interesting', 'profound', 'make no mistake', 'the reality is', 'in essence', 'moreover', 'furthermore', 'crucially', 'only time will tell', 'at the end of the day', 'in conclusion', 'ultimately', 'crossroads', 'ensure optimal', 'trusted', 'leading', 'end-to-end', 'not just', 'not only', 'optimize', 'optimization', 'color', 'center', 'program ',  'analyze'];
let errors = 0;
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/\s+/g, ' ');
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const rel = f.slice(root.length);
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) { console.log(`H1 count ${h1}: ${rel}`); errors++; }
  for (const m of html.matchAll(/(?:href|src)="([^"#?]+)[#?]?[^"]*"/g)) {
    const u = m[1];
    if (/^(https?:|mailto:|tel:)/.test(u)) continue;
    const target = u.endsWith('/') ? join(root, u, 'index.html') : join(root, u);
    if (!existsSync(target) && !existsSync(join(root, u, 'index.html'))) { console.log(`Broken link ${u} in ${rel}`); errors++; }
  }
  const text = strip(html).toLowerCase();
  if (/—|–/.test(html)) { console.log(`Dash found in ${rel}`); errors++; }
  const t2 = text.replace(/safety-critical/g, 'safety-x');
  for (const b of [...banned, 'critical']) { const i = t2.indexOf(b); if (i >= 0) { console.log(`Banned "${b}" in ${rel}: ...${text.slice(Math.max(0, i - 40), i + 50)}...`); errors++; } }
}
console.log(`${files.length} pages checked, ${errors} issues`);
process.exit(errors ? 1 : 0);
