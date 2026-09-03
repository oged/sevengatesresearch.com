import { ResearchLibrary } from "@/components/ResearchLibrary";
import { getAllResearch } from "@/lib/research";

export const metadata = {
  title: "Research Library | Seven Gates Research",
  description: "Company underwrites, market notes and essays from Seven Gates Research.",
};

export default function ResearchPage() {
  const items = getAllResearch().map(({ html, hero, heroAlt, heroCaption, legacyUrl, legacyImported, draft, kicker, ...item }) => item);
  return <section className="archive">
    <div className="shell">
      <div className="archive-head">
        <p className="kicker">RESEARCH · REPORTS · NOTES · ESSAYS</p>
        <h1>Arguments sorted by the work they do.</h1>
        <p className="deck">Reports underwrite companies. Notes update an argument. Essays examine markets, institutions and power. Geography is a filter, not a separate corridor.</p>
      </div>
      <ResearchLibrary items={items} />
    </div>
  </section>;
}
