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

export default function AboutPage(){
  return <section className="archive"><div className="shell">
    <div className="archive-head">
      <p className="kicker">ABOUT & STANDARDS</p>
      <h1>Seven Gates Research</h1>
      <p className="deck">Independent research on companies, markets and power. Nigerian in knowledge rather than costume, internationally intelligible, sceptical of cant and willing to change its mind when the evidence changes.</p>
    </div>
    <div className="method-grid">
      <div><strong>01</strong><h2>Ownership & governance</h2><p>Who controls the asset, who gets paid first, and whether minority shareholders have meaningful protection.</p></div>
      <div><strong>02</strong><h2>Business economics</h2><p>Returns on capital, pricing power, reinvestment needs and the actual cash engine underneath the story.</p></div>
      <div><strong>03</strong><h2>Financial integrity</h2><p>Cash conversion, leverage, accounting quality and the small footnotes that occasionally contain the larger truth.</p></div>
      <div><strong>04</strong><h2>Capital allocation</h2><p>Whether management compounds, dilutes, overpays or simply mistakes activity for value creation.</p></div>
      <div><strong>05</strong><h2>Competitive endurance</h2><p>How long the economics can survive competition, regulation, technology and the occasional macro ambush.</p></div>
      <div><strong>06</strong><h2>Valuation & return</h2><p>A good company can still be a poor purchase. Price is always part of the argument.</p></div>
      <div><strong>07</strong><h2>Downside & catalysts</h2><p>What breaks the thesis, what changes the odds, and what evidence would force us to change our mind.</p></div>
    </div>
  </div></section>;
}
