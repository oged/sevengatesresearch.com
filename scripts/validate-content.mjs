import fs from "node:fs"; import path from "node:path"; import matter from "gray-matter";
const dir=path.join(process.cwd(),"content","briefings"); if(!fs.existsSync(dir))process.exit(0);
const files=fs.readdirSync(dir).filter(f=>f.endsWith(".md")&&!f.startsWith("_")); const seen=new Set(); const errors=[];
for(const file of files){const raw=fs.readFileSync(path.join(dir,file),"utf8");const {data,content}=matter(raw);if(data.draft===true)continue;
 const date=String(data.date||file.replace(/\.md$/,"")); if(!/^\d{4}-\d{2}-\d{2}$/.test(date))errors.push(`${file}: date must be YYYY-MM-DD`);
 if(seen.has(date))errors.push(`${file}: duplicate date ${date}`);seen.add(date);
 if(!data.title||String(data.title).trim().length<8)errors.push(`${file}: missing/weak title`);
 if(!data.excerpt||String(data.excerpt).trim().length<20)errors.push(`${file}: missing/weak excerpt`);
 if(!data.readingTime)errors.push(`${file}: readingTime required`);
 if(content.includes("—"))errors.push(`${file}: em dash found`);
 const links=[...content.matchAll(/https?:\/\/[^)\s]+/g)]; if(links.length<2)errors.push(`${file}: fewer than two source links`);
 if(data.hero&&(!data.heroAlt||!data.heroCaption))errors.push(`${file}: hero requires alt text and caption`);
}
if(errors.length){console.error("Seven Gates publication gate failed:\n"+errors.map(e=>`- ${e}`).join("\n"));process.exit(1)}
console.log(`Seven Gates publication gate passed for ${files.length} briefing file(s).`);
