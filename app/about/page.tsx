import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Standards",
  description: "The editorial and analytical principles behind Seven Gates Research.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About & Standards | Seven Gates Research",
    description: "The editorial and analytical principles behind Seven Gates Research.",
    url: "/about",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About & Standards | Seven Gates Research",
    description: "The editorial and analytical principles behind Seven Gates Research.",
    images: ["/opengraph-image"],
  },
};

const GATES = [
  { n: "01", title: "Ownership & governance", body: "Who controls the asset, who gets paid first, and whether minority shareholders have meaningful protection." },
  { n: "02", title: "Business economics", body: "Returns on capital, pricing power, reinvestment needs and the actual cash engine underneath the story." },
  { n: "03", title: "Financial integrity", body: "Cash conversion, leverage, accounting quality and the small footnotes that occasionally contain the larger truth." },
  { n: "04", title: "Capital allocation", body: "Whether management compounds, dilutes, overpays or simply mistakes activity for value creation." },
  { n: "05", title: "Competitive endurance", body: "How long the economics can survive competition, regulation, technology and the occasional macro ambush." },
  { n: "06", title: "Valuation & return", body: "A good company can still be a poor purchase. Price is always part of the argument." },
  { n: "07", title: "Downside & catalysts", body: "What breaks the thesis, what changes the odds, and what evidence would force us to change our mind." },
];

export default function AboutPage() {
  return <section className="archive" aria-labelledby="about-title">
    <div className="shell">
      <div className="archive-head">
        <p className="kicker">About &amp; standards</p>
        <h1 id="about-title">Seven Gates Research</h1>
        <p className="deck">
          Independent research on companies, markets and power. Nigerian in knowledge rather
          than costume, internationally intelligible, sceptical of cant and willing to change
          its mind when the evidence changes.
        </p>
      </div>

      <div className="section-heading">
        <h2 id="gates-title">The seven gates</h2>
      </div>
      <div className="method-grid">
        {GATES.map((gate) => <div key={gate.n}>
          <strong aria-hidden="true">{gate.n}</strong>
          <h3>{gate.title}</h3>
          <p>{gate.body}</p>
        </div>)}
      </div>

      <div className="disclaimer">
        <strong>Standing disclosure.</strong> Seven Gates Research publishes independent
        analysis for informational and educational purposes. It is not personal investment,
        legal or tax advice. Prices, assumptions and valuations inside reports are dated
        research snapshots rather than live quotes.
      </div>
    </div>
  </section>;
}
