import type { Metadata } from "next";
import { Archivo, Cinzel, EB_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["600"], variable: "--font-display" });
const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-editorial" });
const archivo = Archivo({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-interface" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sevengatesresearch.com"),
  title: { default: "Seven Gates Research", template: "%s | Seven Gates Research" },
  description: "Independent research on companies, markets and power.",
  applicationName: "Seven Gates Research",
  authors: [{ name: "Seven Gates Research" }],
  creator: "Seven Gates Research",
  publisher: "Seven Gates Research",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Seven Gates Research",
    description: "Independent research on companies, markets and power.",
    url: "/",
    siteName: "Seven Gates Research",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Seven Gates Research" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven Gates Research",
    description: "Independent research on companies, markets and power.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${garamond.variable} ${archivo.variable}`}>
      <body>
        <header className="site-header">
          <div className="shell header-inner">
            <a className="brand" href="/">
              <span className="gate-mark" aria-hidden="true">Ⅶ</span>
              <span><strong>SEVEN GATES RESEARCH</strong><small>Knowledge. Context. Advantage.</small></span>
            </a>
            <nav aria-label="Primary navigation">
              <a href="/briefing">Daily Brief</a>
              <a href="/briefing/archive">Archive</a>
              <a href="/research">Research</a>
              <a href="/companies">Company directory</a>
              <a href="/valuation-lab">Valuation Lab</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="shell footer-inner">
            <div><strong>SEVEN GATES RESEARCH</strong><p>Independent research on companies, markets and power.</p></div>
            <div className="footer-links" aria-label="Footer navigation">
              <a href="/briefing">Daily Brief</a>
              <a href="/research">Research</a>
              <a href="/companies">Company directory</a>
              <a href="/valuation-lab">Valuation Lab</a>
              <a href="/about">About</a>
            </div>
            <p className="house-rule">Interesting first. Correct always.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
