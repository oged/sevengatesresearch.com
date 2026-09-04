import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Disclaimer } from "@/components/Disclaimer";
import { formatDate } from "@/components/BriefingCard";
import { getCompanyBySlug, getCompanyDirectory } from "@/lib/companies";

export function generateStaticParams() {
  return getCompanyDirectory().map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) return {};

  return {
    title: `${company.name} Research`,
    description: company.summary,
    alternates: { canonical: `/companies/${company.slug}` },
    openGraph: {
      title: `${company.name} | Seven Gates Research`,
      description: company.summary,
      url: `/companies/${company.slug}`,
      type: "website",
      images: [company.latest?.hero || "/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${company.name} | Seven Gates Research`,
      description: company.summary,
      images: [company.latest?.hero || "/opengraph-image"],
    },
  };
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) notFound();

  return <section className="archive">
    <div className="shell">
      <div className="company-file-head">
        <p className="kicker">
          NGX company coverage &middot; {company.ticker} &middot; {company.sector}
        </p>
        <h1>{company.name}</h1>
        <p className="deck">{company.summary}</p>
        <div className="company-file-actions">
          {company.latest && <a className="button-link" href={`/research/${company.latest.slug}`}>
            Read latest report &rarr;
          </a>}
          <a className="button-link secondary" href="/valuation-lab">Open Valuation Lab &rarr;</a>
        </div>
      </div>

      {company.latest && <section className="company-latest-panel" aria-labelledby="latest-view-title">
        <p className="kicker">Latest published view</p>
        <h2 id="latest-view-title">{company.latest.title}</h2>
        <p>{company.latest.excerpt}</p>
        <div className="meta">
          <span><time dateTime={company.latest.date}>{formatDate(company.latest.date)}</time></span>
          <span>{company.latest.readingTime} read</span>
          <span>{company.latest.researchType}</span>
        </div>
      </section>}

      <section className="section compact-section" aria-labelledby="filed-title">
        <div className="section-heading">
          <h2 id="filed-title">
            Research filed under {company.ticker}
            <span className="visually-hidden"> ({company.reports.length} items)</span>
          </h2>
          <a href="/research">Search all research &rarr;</a>
        </div>
        <div className="archive-list">
          {company.reports.map((item) => <article className="archive-row" key={item.slug}>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
            <div>
              <h3><a href={`/research/${item.slug}`}>{item.title}</a></h3>
              <p>{item.excerpt}</p>
            </div>
            <a href={`/research/${item.slug}`}>Read &rarr;</a>
          </article>)}
        </div>
      </section>

      <Disclaimer variant="company" />
    </div>
  </section>;
}
