import type { MetadataRoute } from "next"; import { getAllBriefings } from "@/lib/content";
export default function sitemap():MetadataRoute.Sitemap{
 const base="https://sevengatesresearch.com";
 const staticRoutes=["","/briefing","/briefing/archive","/research","/about"].map(route=>({url:`${base}${route}`,lastModified:new Date()}));
 const briefs=getAllBriefings().map(x=>({url:`${base}/briefing/${x.date}`,lastModified:new Date(`${x.date}T12:00:00Z`)}));
 return [...staticRoutes,...briefs];
}