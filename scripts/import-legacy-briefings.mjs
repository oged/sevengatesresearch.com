import fs from 'node:fs';
import path from 'node:path';
import { load } from 'cheerio';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'content', 'briefings');
const BASE = 'https://www.sevengatesresearch.com';
const ARCHIVE = `${BASE}/briefing/archive`;
fs.mkdirSync(OUT, { recursive: true });

const fallback = [
['2026-09-02','Oil near $95. The costs travel further.','Renewed Gulf strikes lift oil and borrowing costs, New Zealand raises rates, Sudan faces an aid shortfall and AI regulation tests the boundary between innovation and accountability.'],
['2026-09-01','Oil crossed $91. Bonds lost the argument.','Energy drives a global bond selloff, Nigeria grows 4.43%, Kyiv endures a sixth day of strikes, Anthropic adds $35 billion of compute and US voters sour on Iran.'],
['2026-08-31','The video was artificial. The risk premium was not.','An AI-generated Kharg claim outruns the evidence, oil and yields tighten, Niger retakes its airbase, China reforms property finance and AI demand reaches optical wafers.'],
['2026-08-30','Niamey has two camps. Markets have one dollar.','Niger’s mutiny becomes a factional standoff, Europe questions US financial-policy norms, Venezuela offers a 25-year oil bargain, the Himalayan toll rises and Anthropic pursues custom silicon.'],
['2026-08-29','Niamey woke to gunfire. Markets woke to Warsh.','An attack tests Niger’s military rulers, Warsh lifts rate-hike odds, Nigeria earns a positive Moody’s outlook, Nepal counts the rebuilding bill and OpenAI breaks with Cursor.'],
['2026-08-28','The strait has conditions. Markets have assumptions.','Hormuz offers terms rather than normal traffic, Warsh faces the long-bond test, Nigeria returns to FTSE Frontier status, Anthropic defeats a Pentagon blacklist and Sudan’s war tests Chad’s border.'],
['2026-08-27','The machines delivered. The chokepoints have not.','Hormuz diplomacy outruns shipping, Nvidia clears an immense bar, Nigeria’s kidnapping economy expands, Himalayan floods deepen and Uganda rehearses a succession.'],
['2026-08-26','Winter has entered the gas market early.','Qatar’s LNG blockade reaches Europe, Nvidia faces its earnings test, Dangote redraws fuel trade, Nigerian FX liquidity deepens and Ghana keeps more gold refining at home.'],
['2026-08-24','The shortage is moving downstream.','Hormuz squeezes fuel supply, AI capital meets a harder test, Congo’s Ebola emergency deepens and Nigerian election spending enters the inflation debate.'],
['2026-08-23','The week opens with permission slips.','Hormuz becomes a permissioned route, AI hardware gets dearer, Canada retaliates on trade, and Nigeria’s stronger currency meets a weaker security economy.'],
['2026-08-22','Capital has started asking awkward questions.','AI debt tests bond demand, Qatar cuts spending under the Gulf shock, Nigeria investigates fake agencies, and Zambia’s election dispute hardens.'],
['2026-08-21','The chokepoints are charging rent.','Hormuz and Black Sea disruption lift energy and food costs, Treasury loses its grip on long bonds, and Brazil buys AI autonomy.'],
['2026-08-20','Treasury bought time. The bill remains.','Treasury buys time in the bond market, Washington widens Iran risk, Nigeria audits its reform dividend and AI becomes a geopolitical bloc.'],
['2026-08-19','The bond market wants receipts.','Long yields stay historically high, OpenAI slows after a security test, Nigeria’s election campaign begins and Unitree surges on debut.'],
['2026-08-18','Oil and long bonds have formed a committee.','Oil and long bonds reprice Gulf risk, Nigeria’s headline inflation eases while food accelerates, and the ECB questions AI valuations.'],
['2026-08-17','Hormuz traffic fell to zero. Markets are still pricing a softer Fed.','Hormuz traffic stops, rate paths diverge, AI investors favour scale, NGX delays pricing reform and Osun returns Adeleke.'],
['2026-08-16','Markets want peace. Politics has added a fuel surcharge.','Hormuz stalls, Europe’s heat-insurance gap widens, Osun counts votes, Nigeria awaits inflation and AI financing becomes circular.'],
['2026-08-15','The weekend has three large assumptions.','Hormuz damage, a softer US consumer, Dangote’s refinery IPO, African rail reform and Anthropic’s 2028 wager.'],
['2026-08-14','Inflation behaved. Hormuz did not.','Hormuz, US inflation, Nigeria’s liquidity toolkit, power-sector debt and the new economics of AI services.'],
['2026-08-10','The market is richer. The citizen has questions.','Nigeria’s two-speed economy, power-sector credit risk, Hormuz, AI earnings and the signals that matter before Tuesday.']
];
const fallbackMap = new Map(fallback.map(x => [x[0], {title:x[1], excerpt:x[2]}]));

function clean(s='') { return String(s).replace(/\s+/g,' ').trim(); }
function inlineMd($, el) {
  const clone = $(el).clone();
  clone.find('script,style,button,svg').remove();
  clone.find('a').each((_,a)=>{ const t=clean($(a).text()); const h=$(a).attr('href'); $(a).replaceWith(h ? `[${t}](${new URL(h, BASE).toString()})` : t); });
  clone.find('strong,b').each((_,n)=>$(n).replaceWith(`**${clean($(n).text())}**`));
  clone.find('em,i').each((_,n)=>$(n).replaceWith(`*${clean($(n).text())}*`));
  clone.find('br').replaceWith('\n');
  return clean(clone.text().replace(/\s*\n\s*/g,'\n'));
}
function tableMd($, table) {
  const rows=[]; $(table).find('tr').each((_,tr)=>{const cells=$(tr).find('th,td').map((_,c)=>clean($(c).text()).replaceAll('|','\\|')).get(); if(cells.length) rows.push(cells);});
  if(!rows.length) return ''; const width=Math.max(...rows.map(r=>r.length)); const pad=r=>[...r,...Array(width-r.length).fill('')]; const out=[`| ${pad(rows[0]).join(' | ')} |`,`| ${Array(width).fill('---').join(' | ')} |`]; for(const r of rows.slice(1)) out.push(`| ${pad(r).join(' | ')} |`); return out.join('\n');
}
function extractBody(html) {
  const $=load(html); $('script,style,noscript,header,footer,nav,aside').remove();
  const root=$('article').first().length ? $('article').first() : $('main').first(); if(!root.length) return '';
  const blocks=[]; let passedTitle=false;
  root.find('h1,h2,h3,p,blockquote,ul,ol,table').each((_,el)=>{
    const tag=el.tagName?.toLowerCase(); if(tag==='h1'){passedTitle=true; return;} if(!passedTitle && root.find('h1').length) return;
    if(tag==='h2'||tag==='h3'){ const t=clean($(el).text()).replace(/^\d{1,2}\s*[·.:-]\s*/,''); if(t) blocks.push(`${tag==='h2'?'##':'###'} ${t}`); }
    else if(tag==='p'){const t=inlineMd($,el); if(t && !/^(Reading time|Nigeria · Africa · World|Ranked by)/i.test(t)) blocks.push(t);}
    else if(tag==='blockquote'){const t=inlineMd($,el); if(t) blocks.push(t.split('\n').map(x=>`> ${x}`).join('\n'));}
    else if(tag==='ul'||tag==='ol'){const items=$(el).children('li').map((i,li)=>`${tag==='ol'?`${i+1}.`:'-'} ${inlineMd($,li)}`).get(); if(items.length) blocks.push(items.join('\n'));}
    else if(tag==='table'){const t=tableMd($,el); if(t) blocks.push(t);}
  });
  return blocks.join('\n\n').replace(/\n{3,}/g,'\n\n');
}
function yaml(v){ return JSON.stringify(clean(v)); }

let candidates=[...fallbackMap.keys()];
try {
  const res=await fetch(ARCHIVE,{headers:{'user-agent':'SevenGatesMigration/1.0'}}); if(res.ok){const $=load(await res.text()); const found=$('a[href]').map((_,a)=>$(a).attr('href')).get().map(h=>{const m=h?.match(/\/briefing\/(\d{4}-\d{2}-\d{2})/); return m?.[1];}).filter(Boolean); candidates=[...new Set([...found,...candidates])];}
} catch(e){console.warn('Archive discovery failed; using known legacy index.',e.message);}

candidates.sort().reverse(); let imported=0, stubs=0;
for(const date of candidates){
  const dest=path.join(OUT,`${date}.md`); if(fs.existsSync(dest)) { console.log(`Skip existing ${date}`); continue; }
  const url=`${BASE}/briefing/${date}`; const fb=fallbackMap.get(date)||{title:`Daily Briefing, ${date}`,excerpt:'Recovered Seven Gates Daily Brief archive edition.'};
  let title=fb.title, excerpt=fb.excerpt, body='';
  try{
    const res=await fetch(url,{headers:{'user-agent':'SevenGatesMigration/1.0'}}); if(!res.ok) throw new Error(`HTTP ${res.status}`); const html=await res.text(); const $=load(html);
    title=clean($('h1').first().text())||clean($('meta[property="og:title"]').attr('content'))||title;
    title=title.replace(/\s*\|\s*Seven Gates Research\s*$/i,'');
    excerpt=clean($('meta[name="description"]').attr('content'))||excerpt; body=extractBody(html);
  }catch(e){console.warn(`${date}: fetch failed (${e.message}); creating archive reconstruction.`);}
  if(body.length<600){stubs++; body=`This edition has been reconstructed from the Seven Gates legacy archive index because the complete rendered article could not be recovered automatically during migration.\n\n${excerpt}\n\nThe permanent date and headline have been preserved. The research desk can restore the full body from project history if required.\n\n[Legacy edition source](${url}) · [Legacy briefing archive](${ARCHIVE})`;}
  else body += `\n\n---\n\n*Legacy edition migrated from the original Seven Gates site before the Vercel cutover.*\n\n[Legacy edition source](${url}) · [Legacy briefing archive](${ARCHIVE})`;
  const md=[`---`,`draft: false`,`legacyRecovered: true`,`date: ${yaml(date)}`,`title: ${yaml(title)}`,`excerpt: ${yaml(excerpt)}`,`readingTime: "5 min"`,`kicker: "SEVEN GATES DAILY BRIEF"`,`---`,``,body,``].join('\n');
  fs.writeFileSync(dest,md,'utf8'); imported++; console.log(`Imported ${date}: ${title}`);
}
console.log(`Legacy migration complete: ${imported} files created, ${stubs} reconstructed from archive metadata.`);
