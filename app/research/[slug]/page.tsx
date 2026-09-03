import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate } from "@/components/BriefingCard";
import { getAllResearch, getRelatedResearch, getResearchItem } from "@/lib/research";

export function generateStaticParams() {
  return getAllResearch().map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/research/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.excerpt,
      type: "article",
      publishedTime: item.date,
      images: item.hero ? [item.hero] : undefined,
    },
  };
}

export default async function ResearchArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) notFound();
  const related = getRelatedResearch(slug, 6);

  return <article className="article-shell">
    <header className="article-head">
      <p className="kicker">{item.kicker}</p>
      <h1>{item.title}</h1>
      <p className="deck">{item.excerpt}</p>
      <div className="meta">
        <span>{formatDate(item.date)}</span>
        <span>{item.readingTime} read</span>
        <span>{item.researchType}</span>
        <span>{item.category}</span>
        {item.ticker && <span>{item.ticker}</span>}
      </div>
    </header>

    {item.hero && <figure className="article-hero">
      <img src={item.hero} alt={item.heroAlt || item.title} />
      {item.heroCaption && <figcaption>{item.heroCaption}</figcaption>}
    </figure>}

    <div className="article-grid">
      <div>
        <div className="prose research-prose" dangerouslySetInnerHTML={{ __html: item.html }} />
        <div className="disclaimer"><strong>Disclaimer.</strong> Seven Gates Research is provided for informational and educational purposes only. It is not personal investment, legal, tax or financial advice. Prices, assumptions and valuations are dated research snapshots. Readers should verify the evidence and consider their own circumstances before making investment decisions.</div>
      </div>
      <aside className="aside">
        <div className="aside-box">
          <h3>Related research</h3>
          {related.length ? <ul className="aside-list">{related.map((x) => <li key={x.slug}>
            <time>{formatDate(x.date)}</time>
            <a href={`/research/${x.slug}`}>{x.title}</a>
          </li>)}</ul> : <p>No related migrated research yet.</p>}
          <p><a href="/research">Browse full research archive →</a></p>
        </div>
        <div className="aside-box">
          <h3>Seven Gates rule</h3>
          <p>Interesting first. Correct always.</p>
        </div>
      </aside>
    </div>
  </article>;
}
