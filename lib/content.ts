import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Briefing = {
  date: string;
  title: string;
  excerpt: string;
  readingTime: string;
  kicker: string;
  hero?: string;
  heroAlt?: string;
  heroCaption?: string;
  draft?: boolean;
  html: string;
};

const dir = path.join(process.cwd(), "content", "briefings");

function getFiles() {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((name) => name.endsWith(".md") && !name.startsWith("_"));
}

function parse(fileName: string): Briefing {
  const raw = fs.readFileSync(path.join(dir, fileName), "utf8");
  const { data, content } = matter(raw);
  return {
    date: String(data.date || fileName.replace(/\.md$/, "")),
    title: String(data.title || "Untitled briefing"),
    excerpt: String(data.excerpt || ""),
    readingTime: String(data.readingTime || "5 min"),
    kicker: String(data.kicker || "SEVEN GATES DAILY BRIEF"),
    hero: data.hero ? String(data.hero) : undefined,
    heroAlt: data.heroAlt ? String(data.heroAlt) : undefined,
    heroCaption: data.heroCaption ? String(data.heroCaption) : undefined,
    draft: Boolean(data.draft),
    html: marked.parse(content, { async: false }) as string,
  };
}

export function getAllBriefings() {
  return getFiles().map(parse).filter((x) => !x.draft).sort((a,b) => b.date.localeCompare(a.date));
}
export function getBriefing(date: string) {
  return getAllBriefings().find((x) => x.date === date);
}
export function getEarlierBriefings(date: string, count=7) {
  return getAllBriefings().filter((x) => x.date < date).slice(0, count);
}
