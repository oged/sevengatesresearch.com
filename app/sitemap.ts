import type { MetadataRoute } from "next";
import { getAllBriefings } from "@/lib/content";
import { getCompanyDirectory } from "@/lib/companies";
import { getAllResearch } from "@/lib/research";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sevengatesresearch.com";

  const staticRoutes = ["", "/briefing/archive", "/research", "/companies", "/valuation-lab", "/about"]
    .map((route) => ({ url: `${base}${route}` }));

  const briefs = getAllBriefings().map((item) => ({
    url: `${base}/briefing/${item.date}`,
    lastModified: new Date(`${item.date}T12:00:00Z`),
  }));

  const research = getAllResearch().map((item) => ({
    url: `${base}/research/${item.slug}`,
    lastModified: new Date(`${item.date}T12:00:00Z`),
  }));

  const companies = getCompanyDirectory().map((company) => ({
    url: `${base}/companies/${company.slug}`,
    lastModified: company.latest ? new Date(`${company.latest.date}T12:00:00Z`) : undefined,
  }));

  return [...staticRoutes, ...briefs, ...research, ...companies];
}
