import type { Metadata } from "next";
import { formatDate } from "@/components/BriefingCard";
import { getAllBriefings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Daily Brief Archive",
  description: "Permanent dated editions of the Seven Gates Research Daily Brief, newest first.",
  alternates: { canonical: "/briefing/archive" },
  openGraph: {
    title: "Daily Brief Archive | Seven Gates Research",
    description: "Permanent dated editions of the Seven Gates Research Daily Brief, newest first.",
    url: "/briefing/archive",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Brief Archive | Seven Gates Research",
    description: "Permanent dated editions of the Seven Gates Research Daily Brief, newest first.",
    images: ["/opengraph-image"],
  },
};

export default function ArchivePage() {
  const items = getAllBriefings();
  return <section className="archive" aria-labelledby="archive-title">
    <div className="shell">
      <div className="archive-head">
        <p className="kicker">Daily Brief archive</p>
        <h1 id="archive-title">Every morning kept.</h1>
        <p className="deck">
          Permanent dated editions, newest first. Yesterday does not disappear because
          today has opinions.
        </p>
      </div>

      {items.length ? <>
        <p className="research-count">{items.length} edition{items.length === 1 ? "" : "s"}</p>
        <div className="archive-list">
          {items.map((item) => <article className="archive-row" key={item.date}>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
            <div>
              <h2><a href={`/briefing/${item.date}`}>{item.title}</a></h2>
              <p>{item.excerpt}</p>
            </div>
            <a href={`/briefing/${item.date}`}>Read &rarr;</a>
          </article>)}
        </div>
      </> : <div className="empty-state">
        No migrated editions yet. Add a validated Markdown file to <code>content/briefings/YYYY-MM-DD.md</code>.
      </div>}
    </div>
  </section>;
}
