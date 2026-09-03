import { redirect } from "next/navigation";
import { getAllBriefings } from "@/lib/content";
export default function BriefingLanding() {
  const latest = getAllBriefings()[0];
  redirect(latest ? `/briefing/${latest.date}` : "/briefing/archive");
}
