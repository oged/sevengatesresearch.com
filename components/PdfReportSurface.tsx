import { Disclaimer } from "@/components/Disclaimer";
import { ShareMenu } from "@/components/ShareMenu";
import { formatDate } from "@/components/BriefingCard";
import type { ResearchItem } from "@/lib/research";

export function PdfReportSurface({
  item,
  preview = false,
}: {
  item: ResearchItem;
  preview?: boolean;
}) {
  if (!item.pdf) return null;

  const pagePath = preview ? `/admin/preview/${item.slug}` : `/research/${item.slug}`;

  return (
    <article className="article-shell pdf-report-shell">
      {preview && (
        <div className="preview-banner" role="status">
          Draft preview. This report is not listed in the public Research Library.
        </div>
      )}

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
          <span>PDF edition</span>
        </div>
        <ShareMenu title={item.title} excerpt={item.excerpt} path={pagePath} />
      </header>

      {item.hero && (
        <figure className="article-hero">
          <img src={item.hero} alt={item.heroAlt || ""} />
          {item.heroCaption && <figcaption>{item.heroCaption}</figcaption>}
        </figure>
      )}

      <section className="pdf-report-card" aria-label="PDF report">
        <div className="pdf-report-intro">
          <p className="kicker">Canonical designed edition</p>
          <h2>The PDF is the publication.</h2>
          <p>
            Open the report full-screen for the exact Seven Gates layout, charts,
            typography and pagination. The web page supplies discovery, metadata
            and sharing without reflowing the designed document.
          </p>
          <div className="pdf-report-actions">
            <a className="button-link" href={item.pdf} target="_blank" rel="noopener noreferrer">
              Open full PDF
            </a>
            <a className="button-link secondary-button" href={item.pdf} download>
              Download PDF
            </a>
          </div>
        </div>

        <div className="pdf-viewer-frame">
          <iframe
            src={`${item.pdf}#view=FitH`}
            title={`${item.title} PDF`}
            loading="lazy"
          />
          <p className="pdf-viewer-fallback">
            Some mobile browsers open PDFs outside the embedded viewer. If this
            panel does not render cleanly, <a href={item.pdf} target="_blank" rel="noopener noreferrer">open the full PDF</a>.
          </p>
        </div>
      </section>

      <Disclaimer variant="research" />
    </article>
  );
}
