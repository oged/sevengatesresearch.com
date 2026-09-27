"use client";

import { useEffect, useMemo, useState } from "react";

type PublishResult = {
  ok?: boolean;
  error?: string;
  slug?: string;
  draft?: boolean;
  commitSha?: string;
  commitUrl?: string;
  livePath?: string;
  previewPath?: string;
  pdfPath?: string;
};

const DEFAULTS = {
  readingTime: "10 min",
  kicker: "SEVEN GATES RESEARCH · REPORT",
  researchType: "Report",
  category: "Research",
  author: "The Lokoja Contrarian",
};

export function PdfPublisher() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PublishResult | null>(null);
  const [deploymentReady, setDeploymentReady] = useState(false);

  useEffect(() => {
    if (!pdfFile) {
      setPreviewUrl("");
      return;
    }
    const url = URL.createObjectURL(pdfFile);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [pdfFile]);

  const sizeLabel = useMemo(() => {
    if (!pdfFile) return "";
    return `${(pdfFile.size / 1024 / 1024).toFixed(2)} MB`;
  }, [pdfFile]);

  useEffect(() => {
    if (!result?.ok) return;
    const target = result.draft ? result.previewPath : result.livePath;
    if (!target) return;

    let cancelled = false;
    let attempts = 0;

    const check = async () => {
      attempts += 1;
      try {
        const response = await fetch(target, {
          method: "GET",
          cache: "no-store",
          headers: { "x-seven-gates-publish-check": "1" },
        });
        if (!cancelled && response.ok) {
          setDeploymentReady(true);
          return;
        }
      } catch {
        // Deployment is still moving through Vercel.
      }

      if (!cancelled && attempts < 30) {
        window.setTimeout(check, 4000);
      }
    };

    window.setTimeout(check, 3000);
    return () => {
      cancelled = true;
    };
  }, [result]);

  async function publish(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setResult(null);
    setDeploymentReady(false);

    try {
      const form = new FormData(event.currentTarget);
      if (!pdfFile) {
        setResult({ error: "Choose a PDF first." });
        return;
      }
      form.set("pdf", pdfFile);

      const response = await fetch("/api/admin/publish", {
        method: "POST",
        body: form,
      });
      const data = (await response.json()) as PublishResult;
      setResult(data);
    } catch (error) {
      setResult({ error: error instanceof Error ? error.message : "Publishing failed." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="publisher-layout">
      <section className="publisher-panel">
        <div className="publisher-head">
          <p className="kicker">Mobile publishing console</p>
          <h1>Publish the finished PDF.</h1>
          <p className="deck">
            The PDF remains the canonical designed report. Seven Gates creates the
            research landing page and adds it to the normal Research Library.
          </p>
        </div>

        <form className="publisher-form" onSubmit={publish}>
          <fieldset>
            <legend>Publication</legend>

            <label>
              <span>Title</span>
              <input name="title" required autoCapitalize="sentences" />
            </label>

            <label>
              <span>Deck / excerpt</span>
              <textarea name="excerpt" required rows={4} minLength={20} />
            </label>

            <div className="publisher-two">
              <label>
                <span>Publication date</span>
                <input name="date" type="date" defaultValue={new Date().toISOString().slice(0, 10)} required />
              </label>

              <label>
                <span>Reading time</span>
                <input name="readingTime" defaultValue={DEFAULTS.readingTime} required />
              </label>
            </div>

            <label>
              <span>Slug (optional)</span>
              <input name="slug" placeholder="generated-from-title" autoCapitalize="none" />
            </label>
          </fieldset>

          <fieldset>
            <legend>Classification</legend>

            <label>
              <span>Kicker</span>
              <input name="kicker" defaultValue={DEFAULTS.kicker} required />
            </label>

            <div className="publisher-two">
              <label>
                <span>Research type</span>
                <input name="researchType" defaultValue={DEFAULTS.researchType} required />
              </label>
              <label>
                <span>Category</span>
                <input name="category" defaultValue={DEFAULTS.category} required />
              </label>
            </div>

            <div className="publisher-two">
              <label>
                <span>Ticker (optional)</span>
                <input name="ticker" autoCapitalize="characters" />
              </label>
              <label>
                <span>Region (optional)</span>
                <input name="region" />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Hero image, if already in the site</legend>
            <label>
              <span>Hero path</span>
              <input name="hero" placeholder="/images/research/.../hero.jpg" autoCapitalize="none" />
            </label>
            <label>
              <span>Hero alt text</span>
              <input name="heroAlt" />
            </label>
            <label>
              <span>Hero caption</span>
              <input name="heroCaption" />
            </label>
          </fieldset>

          <fieldset>
            <legend>PDF</legend>
            <label className="publisher-file">
              <span>Choose report</span>
              <input
                name="pdf"
                type="file"
                accept="application/pdf,.pdf"
                required
                onChange={(event) => setPdfFile(event.target.files?.[0] || null)}
              />
            </label>
            <p className="publisher-fine">
              GitHub-backed mobile upload is deliberately capped at 4 MB. It
              preserves the file byte-for-byte. Larger reports can still be
              published through the repository until Blob storage is connected.
            </p>
            {pdfFile && <p className="publisher-file-meta"><strong>{pdfFile.name}</strong> · {sizeLabel}</p>}
          </fieldset>

          <fieldset>
            <legend>Release state</legend>
            <label className="publisher-check">
              <input type="checkbox" name="draft" value="true" />
              <span>Save as private draft first</span>
            </label>
            <p className="publisher-fine">
              Drafts deploy to a password-protected preview URL and stay out of
              the public Research Library. Publish again with the same slug and
              this box unticked when approved.
            </p>
          </fieldset>

          <button className="publisher-submit" type="submit" disabled={loading}>
            {loading ? "Publishing to GitHub…" : "Commit report and deploy"}
          </button>
        </form>

        {result?.error && <div className="publisher-message is-error">{result.error}</div>}

        {result?.ok && (
          <div className="publisher-message is-success">
            <strong>{result.draft ? "Draft committed." : "Report committed."}</strong>
            <p>
              Vercel is deploying commit <code>{result.commitSha?.slice(0, 8)}</code>.
              {deploymentReady ? " The new page is live." : " This normally takes a short while; this page is checking automatically."}
            </p>
            <div className="pdf-report-actions">
              <a
                className="button-link"
                href={result.draft ? result.previewPath : result.livePath}
                target="_blank"
                rel="noopener noreferrer"
              >
                {result.draft ? "Open private preview" : "Open live report"}
              </a>
              {result.commitUrl && (
                <a className="button-link secondary-button" href={result.commitUrl} target="_blank" rel="noopener noreferrer">
                  View GitHub commit
                </a>
              )}
            </div>
          </div>
        )}
      </section>

      <aside className="publisher-preview">
        <p className="kicker">Local PDF check</p>
        <h2>Preview before committing.</h2>
        {previewUrl ? (
          <iframe src={previewUrl} title="Selected PDF preview" />
        ) : (
          <div className="publisher-empty">Choose a PDF to preview it here on your phone before publishing.</div>
        )}
      </aside>
    </div>
  );
}
