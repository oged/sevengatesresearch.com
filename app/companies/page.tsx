import type { Metadata } from "next";
import { formatDate } from "@/components/BriefingCard";
import { getCompanyDirectory } from "@/lib/companies";

export const metadata: Metadata = {
  title: "Company Directory",
  description: "Seven Gates Research company coverage, organised by issuer and latest published view.",
  alternates: { canonical: "/companies" },
  openGraph: {
    title: "Company Directory | Seven Gates Research",
    description: "Follow the company. Test the thesis. Published coverage with the latest Seven Gates view in each company file.",
    url: "/companies",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Directory | Seven Gates Research",
    description: "Follow the company. Test the thesis.",
    images: ["/opengraph-image"],
  },
};

export default function CompaniesPage() {
  const companies = getCompanyDirectory();

  return <section className="archive">
    <div className="shell">
      <div className="archive-head">
        <p className="kicker">THE COVERAGE DIRECTORY</p>
        <h1>Follow the company. Test the thesis.</h1>
        <p className="deck">Published company coverage, organised around the latest research file. Prices and valuation ranges inside reports are dated snapshots, never live quotes.</p>
      </div>

      <div className="company-grid">
        {companies.map((company) => <article className="company-card" key={company.slug}>
          <div className="company-card-head">
            <span>{company.sector}</span>
            <strong>{company.ticker}</strong>
          </div>
          <h2><a href={`/companies/${company.slug}`}>{company.name}</a></h2>
          <p>{company.summary}</p>
          {company.latest && <div className="company-latest">
            <span>Latest research</span>
            <strong>{company.latest.title}</strong>
            <small>{formatDate(company.latest.date)} · {company.latest.readingTime}</small>
          </div>}
          <a className="company-link" href={`/companies/${company.slug}`}>Open company file →</a>
        </article>)}
      </div>
    </div>
  </section>;
}
