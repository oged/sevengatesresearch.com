import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type ResearchItem = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  readingTime: string;
  kicker: string;
  researchType: string;
  category: string;
  ticker?: string;
  region?: string;
  hero?: string;
  heroAlt?: string;
  heroCaption?: string;
  legacyUrl?: string;
  legacyImported?: boolean;
  draft?: boolean;
  html: string;
};

const dir = path.join(process.cwd(), "content", "research");

function getFiles() {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((name) => name.endsWith(".md") && !name.startsWith("_"));
}

function parse(fileName: string): ResearchItem {
  const raw = fs.readFileSync(path.join(dir, fileName), "utf8");
  const { data, content } = matter(raw);
  return {
    slug: String(data.slug || fileName.replace(/\.md$/, "")),
    date: String(data.date || "2026-01-01"),
    title: String(data.title || "Untitled research"),
    excerpt: String(data.excerpt || ""),
    readingTime: String(data.readingTime || "8 min"),
    kicker: String(data.kicker || "SEVEN GATES RESEARCH"),
    researchType: String(data.researchType || "Report"),
    category: String(data.category || "Research"),
    ticker: data.ticker ? String(data.ticker) : undefined,
    region: data.region ? String(data.region) : undefined,
    hero: data.hero ? String(data.hero) : undefined,
    heroAlt: data.heroAlt ? String(data.heroAlt) : undefined,
    heroCaption: data.heroCaption ? String(data.heroCaption) : undefined,
    legacyUrl: data.legacyUrl ? String(data.legacyUrl) : undefined,
    legacyImported: Boolean(data.legacyImported),
    draft: Boolean(data.draft),
    html: marked.parse(content, { async: false }) as string,
  };
}

export function getAllResearch() {
  return getFiles().map(parse).filter((x) => !x.draft).sort((a, b) => {
    const byDate = b.date.localeCompare(a.date);
    return byDate || a.title.localeCompare(b.title);
  });
}

export function getResearchItem(slug: string) {
  return getAllResearch().find((x) => x.slug === slug);
}

export function getRelatedResearch(slug: string, count = 6) {
  const current = getResearchItem(slug);
  if (!current) return [];
  const all = getAllResearch().filter((x) => x.slug !== slug);
  const sameCategory = all.filter((x) => x.category === current.category);
  const rest = all.filter((x) => x.category !== current.category);
  return [...sameCategory, ...rest].slice(0, count);
}
