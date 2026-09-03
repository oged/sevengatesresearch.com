import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Disclaimer } from "@/components/Disclaimer";
import { formatDate } from "@/components/BriefingCard";
import { getAllBriefings, getBriefing, getEarlierBriefings } from "@/lib/content";

export function generateStaticParams() { return getAllBriefings().map(x => ({date:x.date})); }

export async function generateMetadata({params}:{params:Promise<{date:string}>}):Promise<Metadata>{
  const {date}=await params; const item=getBriefing(date); if(!item)return {};
  const image=item.hero||"/opengraph-image";
  return {
    title:item.title,
    description:item.excerpt,
    alternates:{canonical:`/briefing/${item.date}`},
    openGraph:{title:item.title,description:item.excerpt,url:`/briefing/${item.date}`,type:"article",publishedTime:item.date,images:[image]},
    twitter:{card:"summary_large_image",title:item.title,description:item.excerpt,images:[image]}
  };
}

export default async function BriefingPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const item = getBriefing(date);
  if (!item) notFound();
  const earlier = getEarlierBriefings(date, 7);

  return <article className="article-shell">
    <header className="article-head">
      <p className="kicker">{item.kicker}</p>
      <h1>{item.title}</h1>
      <p className="deck">{item.excerpt}</p>
      <div className="meta">
        <span><time dateTime={item.date}>{formatDate(item.date)}</time></span>
        <span>{item.readingTime} read</span>
        <span>Seven Gates Research</span>
      </div>
    </header>

    {item.hero && <figure className="article-hero">
      <img src={item.hero} alt={item.heroAlt || ""} />
      <figcaption>{item.heroCaption || "Editorial illustration."}</figcaption>
    </figure>}

    <div className="article-grid">
      <div>
        <div className="prose" dangerouslySetInnerHTML={{ __html: item.html }} />
        <Disclaimer variant="briefing" />
      </div>

      <aside className="aside">
        <div className="aside-box">
          <h3>Earlier briefings</h3>
          {earlier.length ? <ul className="aside-list">
            {earlier.map((x) => <li key={x.date}>
              <time dateTime={x.date}>{formatDate(x.date)}</time>
              <a href={`/briefing/${x.date}`}>{x.title}</a>
            </li>)}
          </ul> : <p>No earlier migrated editions.</p>}
          <p><a href="/briefing/archive">View full archive &rarr;</a></p>
        </div>
        <div className="aside-box">
          <h3>Seven Gates rule</h3>
          <p>Interesting first. Correct always.</p>
        </div>
      </aside>
    </div>
  </article>;
}
