import type { Metadata } from "next";
import { ValuationLab } from "@/components/ValuationLab";

export const metadata: Metadata = {
  title: "NGX Valuation Lab",
  description: "Make the assumptions explicit. Build a DCF, compare bear/base/bull scenarios and test a margin of safety.",
  alternates: { canonical: "/valuation-lab" },
  openGraph: {
    title: "NGX Valuation Lab | Seven Gates Research",
    description: "Price is observable. Value is an argument. Make the assumptions explicit, then see how much room they leave.",
    url: "/valuation-lab",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "NGX Valuation Lab | Seven Gates Research",
    description: "Price is observable. Value is an argument.",
    images: ["/opengraph-image"],
  },
};

export default function ValuationLabPage() {
  return <section className="archive" aria-labelledby="lab-page-title">
    <div className="shell">
      <div className="archive-head valuation-head">
        <p className="kicker">NGX Valuation Lab &middot; Tools &amp; assumptions</p>
        <h1 id="lab-page-title">What has to go right?</h1>
        <p className="deck">
          Price is observable. Value is an argument. Make the assumptions explicit,
          then see how much room they leave.
        </p>
      </div>
      <ValuationLab />
    </div>
  </section>;
}
