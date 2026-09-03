import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
        <p className="kicker">NGX / COMPANY COVERAGE · {company.ticker} · {company.sector}</p>
        <h1>{company.name}</h1>
        <p className="deck">{company.summary}</p>
        <div className="company-file-actions">
          {company.latest && <a className="button-link" href={`/research/${company.latest.slug}`}>Read latest report →</a>}
          <a className="button-link secondary" href="/valuation-lab">Open Valuation Lab →</a>
        </div>
      </div>

      {company.latest && <section className="company-latest-panel">
        <p className="kicker">LATEST PUBLISHED VIEW</p>
        <h2>{company.latest.title}</h2>
        <p>{company.latest.excerpt}</p>
        <div className="meta">
          <span>{formatDate(company.latest.date)}</span>
          <span>{company.latest.readingTime} read</span>
          <span>{company.latest.researchType}</span>
        </div>
      </section>}

      <section className="section compact-section">
        <div className="section-heading">
          <h2>Research filed under {company.ticker}</h2>
          <a href="/research">Search all research →</a>
        </div>
        <div className="archive-list">
          {company.reports.map((item) => <article className="archive-row" key={item.slug}>
            <time>{formatDate(item.date)}</time>
            <div>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
            </div>
            <a href={`/research/${item.slug}`}>Read →</a>
          </article>)}
        </div>
      </section>

      <div className="disclaimer"><strong>Company-file note.</strong> This page organises published Seven Gates research. It is not a live market-data feed and does not create a new recommendation. Use the date, assumptions and disclosures in the underlying report.</div>
    </div>
  </section>;
}
