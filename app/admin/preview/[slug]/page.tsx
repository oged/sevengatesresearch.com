import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { PdfReportSurface } from "@/components/PdfReportSurface";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/admin-auth";
import { getResearchItemAny } from "@/lib/research";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Draft preview",
  robots: { index: false, follow: false },
};

export default async function AdminResearchPreview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const cookieStore = await cookies();
  if (!verifyAdminSession(cookieStore.get(ADMIN_COOKIE)?.value)) {
    redirect("/admin/publish");
  }

  const { slug } = await params;
  const item = getResearchItemAny(slug);
  if (!item || !item.pdf) notFound();

  return <PdfReportSurface item={item} preview />;
}
