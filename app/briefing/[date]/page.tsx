import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

export default async function BriefingPage({params}:{params:Promise<{date:string}>}){
  const {date}=await params; const item=getBriefing(date); if(!item)notFound(); const earlier=getEarlierBriefings(date,7);
  return <article className="article-shell">
    <header className="article-head"><p className="kicker">{item.kicker}</p><h1>{item.title}</h1><p className="deck">{item.excerpt}</p><div className="meta"><span>{formatDate(item.date)}</span><span>{item.readingTime} read</span><span>Seven Gates Research</span></div></header>
    {item.hero && <figure className="article-hero"><img src={item.hero} alt={item.heroAlt||"Seven Gates editorial illustration"}/><figcaption>{item.heroCaption||"Editorial illustration."}</figcaption></figure>}
    <div className="article-grid"><div><div className="prose" dangerouslySetInnerHTML={{__html:item.html}}/>
      <div className="disclaimer"><strong>Disclaimer.</strong> This publication is provided for informational and educational purposes only. It does not constitute financial, investment, tax, legal, or other professional advice, nor does it constitute a recommendation, offer, solicitation, or invitation to buy, sell, or hold any security, financial instrument, or investment. The analysis may contain opinions, estimates, assumptions, forecasts and forward-looking statements based on information considered reliable at the time of publication. Such views may change without notice, and actual outcomes may differ materially. Investing involves risk, including the possible loss of principal. Readers should conduct their own independent research, verify the information presented, consider their individual circumstances and risk tolerance, and obtain advice from appropriately qualified professional advisers before making any investment decision. Seven Gates Research accepts no responsibility for investment decisions made solely on the basis of this publication.</div>
    </div><aside className="aside"><div className="aside-box"><h3>Earlier Briefings</h3>{earlier.length?<ul className="aside-list">{earlier.map(x=><li key={x.date}><time>{formatDate(x.date)}</time><a href={`/briefing/${x.date}`}>{x.title}</a></li>)}</ul>:<p>No earlier migrated editions.</p>}<p><a href="/briefing/archive">View full archive →</a></p></div><div className="aside-box"><h3>Seven Gates rule</h3><p>Interesting first. Correct always.</p></div></aside></div>
  </article>;
}
