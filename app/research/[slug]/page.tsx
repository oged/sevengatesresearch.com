import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Disclaimer } from "@/components/Disclaimer";
import { PdfReportSurface } from "@/components/PdfReportSurface";
import { ShareMenu } from "@/components/ShareMenu";
import { getCompanyDirectory } from "@/lib/companies";
import { formatDate } from "@/components/BriefingCard";
import { getAllResearch, getRelatedResearch, getResearchItem } from "@/lib/research";

const REPUBLIC_SLUG = "republic-of-30-percent-nigeria-ponzi-schemes";
const REPUBLIC_IMAGE_BASE = `/images/research/${REPUBLIC_SLUG}`;

function narrativeFigure(src: string, alt: string, caption: string) {
  return `<figure style="margin:2.25em 0"><img src="${REPUBLIC_IMAGE_BASE}/${src}" alt="${alt}" loading="lazy" decoding="async" style="width:100%;height:auto;display:block"/><figcaption>${caption}</figcaption></figure>`;
}

function withRepublicNarrativeIllustrations(slug: string, html: string) {
  if (slug !== REPUBLIC_SLUG) return html;

  return html
    .replace(
      "<p>Then came a man in Port Harcourt who understood the difference.</p>",
      `<p>Then came a man in Port Harcourt who understood the difference.</p>${narrativeFigure(
        "01-before-telegram-aba-road.png",
        "Black-and-white Seven Gates editorial reconstruction of a queue outside a Nigerian investment company before the Telegram era.",
        "Seven Gates editorial illustration. Fictional reconstruction, not documentary evidence.",
      )}`,
    )
    .replace(
      "<p>This was not competition. It was a declaration of war on multiplication.</p>",
      `${narrativeFigure(
        "02-1991-port-harcourt.png",
        "Black-and-white Seven Gates editorial reconstruction of investors outside Resources Managers Investments Limited in 1991 Port Harcourt.",
        "Seven Gates editorial illustration. Fictional reconstruction of the 1991 wonder-bank moment, not documentary evidence.",
      )}<p>This was not competition. It was a declaration of war on multiplication.</p>`,
    )
    .replace(
      "<p>The Professor of Wonders has acquired a dashboard.</p>",
      `<p>The Professor of Wonders has acquired a dashboard.</p>${narrativeFigure(
        "03-scam-dresses-for-dinner.png",
        "Seven Gates editorial montage showing investment-fraud costumes shifting across oil, forex, agriculture, crypto and artificial intelligence.",
        "Seven Gates editorial illustration. Oil, forex, agriculture, crypto and AI: different costumes, same promise.",
      )}`,
    )
    .replace(
      "<p>Then came the number that travelled fastest: ₦1.3 trillion.</p>",
      `${narrativeFigure(
        "04-digital-ponzi.png",
        "Black-and-white Seven Gates editorial illustration of Nigerian investors using phones around a fictional 30 per cent monthly digital investment platform.",
        "Seven Gates editorial illustration. Fictional digital-Ponzi scene, not documentary evidence.",
      )}<p>Then came the number that travelled fastest: ₦1.3 trillion.</p>`,
    );
}

export function generateStaticParams() {
  return getAllResearch().map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) return {};
  const image = item.ogImage || item.hero || "/opengraph-image";
  return {
    title: item.seoTitle ? { absolute: item.seoTitle } : item.title,
    description: item.excerpt,
    alternates: { canonical: `/research/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.excerpt,
      url: `/research/${item.slug}`,
      type: "article",
      publishedTime: item.date,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.excerpt,
      images: [image],
    },
  };
}

export default async function ResearchArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) notFound();

  if (item.pdf) {
    return <PdfReportSurface item={item} />;
  }

  const related = getRelatedResearch(slug, 6);
  const company = item.ticker
    ? getCompanyDirectory().find((entry) => entry.ticker === item.ticker)
    : undefined;
  const articleHtml = withRepublicNarrativeIllustrations(slug, item.html);

  return <article className="article-shell">
    <header className="article-head">
      <p className="kicker">{item.kicker}</p>
      <h1>{item.title}</h1>
      <p className="deck">{item.excerpt}</p>
      <div className="meta">
        <span><time dateTime={item.date}>{formatDate(item.date)}</time></span>
        <span>{item.readingTime} read</span>
        <span>{item.researchType}</span>
        <span>{item.category}</span>
        {item.ticker && <span>{item.ticker}</span>}
      </div>
      <ShareMenu title={item.title} excerpt={item.excerpt} path={`/research/${item.slug}`} />
    </header>

    {item.hero && <figure className="article-hero">
      <img src={item.hero} alt={item.heroAlt || ""} />
      {item.heroCaption && <figcaption>{item.heroCaption}</figcaption>}
    </figure>}

    <div className="article-grid">
      <div>
        <div className="prose research-prose" dangerouslySetInnerHTML={{ __html: articleHtml }} />
        <Disclaimer variant="research" />
      </div>

      <aside className="aside">
        {company && <div className="aside-box">
          <h3>Company file</h3>
          <p><a href={`/companies/${company.slug}`}>{company.name} &rarr;</a></p>
        </div>}
        <div className="aside-box">
          <h3>Related research</h3>
          {related.length ? <ul className="aside-list">
            {related.map((x) => <li key={x.slug}>
              <time dateTime={x.date}>{formatDate(x.date)}</time>
              <a href={`/research/${x.slug}`}>{x.title}</a>
            </li>)}
          </ul> : <p>No related migrated research yet.</p>}
          <p><a href="/research">Browse full research archive &rarr;</a></p>
        </div>
        <div className="aside-box">
          <h3>Seven Gates rule</h3>
          <p>Interesting first. Correct always.</p>
        </div>
      </aside>
    </div>
  </article>;
}
