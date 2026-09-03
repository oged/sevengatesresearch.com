import { BriefingCard, formatDate } from "@/components/BriefingCard";
import { getAllBriefings } from "@/lib/content";
import { getAllResearch } from "@/lib/research";

export default function HomePage() {
  const briefings = getAllBriefings();
  const latest = briefings[0];
  const recent = briefings.slice(1, 4);
  const research = getAllResearch().slice(0, 3);

  return <>
    <section className="hero"><div className="shell hero-grid">
      <div>
        <p className="kicker">SEVEN GATES RESEARCH</p>
        <h1>Independent research on companies, markets and power.</h1>
        <p className="deck">Nigerian in knowledge, international in scope, sceptical by habit. The argument comes first. The arithmetic gets the final vote.</p>
      </div>
      <aside className="hero-card">
        <p className="kicker">LATEST DAILY BRIEF</p>
        {latest ? <><h2>{latest.title}</h2><p>{formatDate(latest.date)} · {latest.readingTime}</p><p>{latest.excerpt}</p><a href={`/briefing/${latest.date}`}>Read today’s brief →</a></>
        : <><h2>Migration in progress</h2><p>The publication engine is live in source control.</p><a href="/briefing/archive">Open archive →</a></>}
      </aside>
    </div></section>

    <section className="section"><div className="shell">
      <div className="section-heading"><h2>Latest research</h2><a href="/research">Explore all research →</a></div>
      {research.length ? <div className="cards">{research.map((item) => <article className="card" key={item.slug}>
        <time>{formatDate(item.date)} · {item.researchType}</time>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <a href={`/research/${item.slug}`}>Read the analysis →</a>
      </article>)}</div> : <div className="empty-state">Research migration is in progress.</div>}
    </div></section>

    <section className="section"><div className="shell">
      <div className="section-heading"><h2>Recent briefings</h2><a href="/briefing/archive">View archive →</a></div>
      {recent.length ? <div className="cards">{recent.map((item) => <BriefingCard key={item.date} item={item}/>)}</div>
      : <div className="empty-state">The briefing archive populates automatically from <code>content/briefings</code>.</div>}
    </div></section>

    <section className="section" style={{ background: "var(--parchment)" }}><div className="shell hero-grid">
      <div>
        <p className="kicker">THE SEVEN GATES</p>
        <h2>Judgement before ornament.</h2>
        <p className="deck">Ownership and governance. Business economics. Financial integrity. Capital allocation. Competitive endurance. Valuation and expected return. Downside, catalysts and portfolio fit.</p>
      </div>
      <div className="hero-card"><h3>House rule</h3><p>Interesting first. Correct always.</p><p>Strong opinions, loosely held. Capital, tightly held.</p></div>
    </div></section>
  </>;
}
