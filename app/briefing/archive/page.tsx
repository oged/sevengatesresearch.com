import type { Metadata } from "next";
import { formatDate } from "@/components/BriefingCard";
import { getAllBriefings } from "@/lib/content";
export const metadata: Metadata = { title: "Daily Brief Archive", description: "The Seven Gates Research Daily Brief archive." };
export default function ArchivePage() {
  const items = getAllBriefings();
  return <section className="archive"><div className="shell">
    <div className="archive-head"><p className="kicker">DAILY BRIEF ARCHIVE</p><h1>Every morning kept.</h1><p className="deck">Permanent dated editions, newest first. Yesterday does not disappear because today has opinions.</p></div>
    {items.length ? <div className="archive-list">{items.map(item => <article className="archive-row" key={item.date}><time>{formatDate(item.date)}</time><div><h2>{item.title}</h2><p>{item.excerpt}</p></div><a href={`/briefing/${item.date}`}>Read →</a></article>)}</div>
    : <div className="empty-state">No migrated editions yet. Add a validated Markdown file to <code>content/briefings/YYYY-MM-DD.md</code>.</div>}
  </div></section>;
}
