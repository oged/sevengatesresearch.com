import fs from 'node:fs';
import path from 'node:path';

const dir = path.join(process.cwd(), 'content', 'briefings');
const target = String(process.env.PUBLISH_DATE || '').trim();
const all = process.argv.includes('--all');
if (!fs.existsSync(dir)) process.exit(0);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_'))
  .filter(f => all || !target || f === `${target}.md`);

for (const file of files) {
  const p = path.join(dir, file);
  const before = fs.readFileSync(p, 'utf8');
  const after = before.replace(/^##\s+(\d+)\.\s+(?:\1\.\s+)+/gm, '## $1. ');
  if (after !== before) {
    fs.writeFileSync(p, after, 'utf8');
    console.log(`Normalised duplicated heading numbers in ${file}`);
  }
}
