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
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="shell footer-inner">
            <div><strong>SEVEN GATES RESEARCH</strong><p>Independent research on companies, markets and power.</p></div>
            <p className="house-rule">Interesting first. Correct always.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
