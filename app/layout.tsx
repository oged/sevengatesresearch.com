import type { Metadata } from "next";
import { Archivo, Cinzel, EB_Garamond } from "next/font/google";
import { GateMark } from "@/components/GateMark";
import { SiteNav } from "@/components/SiteNav";
import { NAV_LINKS } from "@/lib/nav";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-display" });
const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-editorial" });
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
        <a className="skip-link" href="#main">Skip to content</a>

        <header className="site-header">
          <div className="shell header-inner">
            <a className="brand" href="/">
              <GateMark className="gate-mark" />
              <span className="wordmark">
                <strong>Seven Gates</strong>
                <small>Research</small>
              </span>
            </a>
            <SiteNav />
          </div>
        </header>

        <main id="main">{children}</main>

        <footer className="site-footer">
          <div className="shell footer-inner">
            <div>
              <span className="wordmark">
                <strong>Seven Gates</strong>
                <small>Research</small>
              </span>
              <p>Independent research on companies, markets and power.</p>
            </div>
            <nav className="footer-links" aria-label="Footer">
              {NAV_LINKS.filter((link) => link.href !== "/briefing/archive").map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </nav>
            <p className="house-rule">Interesting first. Correct always.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
