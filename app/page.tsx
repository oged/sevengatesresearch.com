import type { Metadata } from "next";
import { BriefingCard, formatDate } from "@/components/BriefingCard";
import { getAllBriefings } from "@/lib/content";
import { getFeaturedCompanies } from "@/lib/companies";
import { getAllResearch } from "@/lib/research";

export const metadata: Metadata = {
  title: { absolute: "Seven Gates Research | Daily Briefs, Company Research & Valuation" },
  description: "Independent equity and macro research. Nigeria at the centre, the world in view. Daily Briefs, company research and the NGX Valuation Lab.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Seven Gates Research | Daily Briefs, Company Research & Valuation",
    description: "Independent equity and macro research. Nigeria at the centre, the world in view.",
    url: "/",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven Gates Research | Daily Briefs, Company Research & Valuation",
    description: "Independent equity and macro research. Nigeria at the centre, the world in view.",
    images: ["/opengraph-image"],
  },
};

const GATES = [
  "Ownership and governance",
  "Business economics",
  "Financial integrity",
  "Capital allocation",
  "Competitive endurance",
  "Valuation and expected return",
  "Downside, catalysts and portfolio fit",
];

export default function HomePage() {
  const briefings = getAllBriefings();
  const latest = briefings[0];
  const recent = briefings.slice(1, 4);
  const research = getAllResearch().slice(0, 3);
  const companies = getFeaturedCompanies(["SEPLAT", "GTCO", "VFDGROUP", "UBA", "MTNN"]);

  return <>
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div>
          <p className="kicker">Seven Gates Research</p>
          <h1 id="hero-title">Independent research on companies, markets and power.</h1>
          <p className="deck">
            Nigerian in knowledge, international in scope, sceptical by habit.
            The argument comes first. The arithmetic gets the final vote.
          </p>
        </div>
        <aside className="hero-card" aria-labelledby="latest-brief-title">
          <p className="kicker">Latest Daily Brief</p>
          {latest ? <>
            <h2 id="latest-brief-title">{latest.title}</h2>
            <p className="meta">
              <span><time dateTime={latest.date}>{formatDate(latest.date)}</time></span>
              <span>{latest.readingTime} read</span>
            </p>
            <p>{latest.excerpt}</p>
            <a href={`/briefing/${latest.date}`}>Read today&rsquo;s brief &rarr;</a>
          </> : <>
            <h2 id="latest-brief-title">Migration in progress</h2>
            <p>The publication engine is live in source control.</p>
            <a href="/briefing/archive">Open archive &rarr;</a>
          </>}
        </aside>
      </div>
    </section>

    <section className="section" aria-labelledby="latest-research-title">
      <div className="shell">
        <div className="section-heading">
          <h2 id="latest-research-title">Latest research</h2>
          <a href="/research">Explore all research &rarr;</a>
        </div>
        {research.length ? <div className="cards">
          {research.map((item) => <article className="card" key={item.slug}>
            <time dateTime={item.date}>{formatDate(item.date)} &middot; {item.researchType}</time>
            <h3><a href={`/research/${item.slug}`}>{item.title}</a></h3>
            <p>{item.excerpt}</p>
            <a href={`/research/${item.slug}`}>Read the analysis &rarr;</a>
          </article>)}
        </div> : <div className="empty-state">Research migration is in progress.</div>}
      </div>
    </section>

    <section className="section coverage-section" aria-labelledby="coverage-title">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="kicker">The coverage directory</p>
            <h2 id="coverage-title">Follow the company. Test the thesis.</h2>
          </div>
          <a href="/companies">All companies &rarr;</a>
        </div>
        <p className="section-intro">
          Published coverage, with the latest view in each company file. Values inside
          reports are dated research snapshots, never live quotes.
        </p>
        <div className="company-strip">
          {companies.map((company) => <article className="company-mini" key={company.slug}>
            <span>{company.sector}</span>
            <strong>{company.ticker}</strong>
            <h3><a href={`/companies/${company.slug}`}>{company.name}</a></h3>
            <p>{company.summary}</p>
            {company.latest && <small>
              Research as of <time dateTime={company.latest.date}>{formatDate(company.latest.date)}</time>
            </small>}
            <a href={`/companies/${company.slug}`}>Open company file &rarr;</a>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section valuation-home" aria-labelledby="lab-title">
      <div className="shell hero-grid">
        <div>
          <p className="kicker">The NGX Valuation Lab</p>
          <h2 id="lab-title">Bring your own assumptions.</h2>
          <p className="deck">
            What has to go right for the price to make sense? Change the inputs
            and see what happens to value.
          </p>
          <a className="button-link" href="/valuation-lab">Open the Valuation Lab &rarr;</a>
        </div>
        <div className="valuation-steps">
          <div><strong>01</strong><span>Discounted cash flow</span><p>Growth, reinvestment and the cost of capital.</p></div>
          <div><strong>02</strong><span>Bear, base &amp; bull</span><p>Compare the cases behind your conviction.</p></div>
          <div><strong>03</strong><span>Margin of safety</span><p>How much room is there to be wrong?</p></div>
        </div>
      </div>
    </section>

    <section className="section" aria-labelledby="recent-briefings-title">
      <div className="shell">
        <div className="section-heading">
          <h2 id="recent-briefings-title">Recent briefings</h2>
          <a href="/briefing/archive">View archive &rarr;</a>
        </div>
        {recent.length ? <div className="cards">
          {recent.map((item) => <BriefingCard key={item.date} item={item} />)}
        </div> : <div className="empty-state">
          The briefing archive populates automatically from <code>content/briefings</code>.
        </div>}
      </div>
    </section>

    <section className="section creed-section" aria-labelledby="creed-title">
      <div className="shell hero-grid">
        <div>
          <p className="kicker">The seven gates</p>
          <h2 id="creed-title">Judgement before ornament.</h2>
          <p className="deck">Every company passes through the same seven gates before it earns a view.</p>
          <ol className="gate-list">
            {GATES.map((gate, index) => <li key={gate}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              {gate}
            </li>)}
          </ol>
        </div>
        <div className="hero-card">
          <h3>House rule</h3>
          <p>Interesting first. Correct always.</p>
          <p>Strong opinions, loosely held. Capital, tightly held.</p>
          <a href="/about">Read the standards &rarr;</a>
        </div>
      </div>
    </section>
  </>;
}
