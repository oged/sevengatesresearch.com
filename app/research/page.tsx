import type { Metadata } from "next";
import { ResearchLibrary } from "@/components/ResearchLibrary";
import { getAllResearch } from "@/lib/research";

export const metadata: Metadata = {
  title: "Research Library",
  description: "Company underwrites, market notes and essays from Seven Gates Research.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Research Library | Seven Gates Research",
    description: "Company underwrites, market notes and essays from Seven Gates Research.",
    url: "/research",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Library | Seven Gates Research",
    description: "Company underwrites, market notes and essays from Seven Gates Research.",
    images: ["/opengraph-image"],
  },
};

export default function ResearchPage() {
  const items = getAllResearch().map(({ html, hero, heroAlt, heroCaption, legacyUrl, legacyImported, draft, kicker, ...item }) => item);
  return <section className="archive" aria-labelledby="research-title">
    <div className="shell">
      <div className="archive-head">
        <p className="kicker">Research &middot; Reports &middot; Notes &middot; Essays</p>
        <h1 id="research-title">Arguments sorted by the work they do.</h1>
        <p className="deck">
          Reports underwrite companies. Notes update an argument. Essays examine markets,
          institutions and power. Geography is a filter, not a separate corridor.
        </p>
      </div>
      <ResearchLibrary items={items} />
    </div>
  </section>;
}
