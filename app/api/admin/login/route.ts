import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  createAdminSession,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

function safeReturnTo(value: string) {
  return value.startsWith("/") && !value.startsWith("//") ? value : "/admin/publish";
}

export async function POST(request: Request) {
  const form = await request.formData();
  const password = String(form.get("password") || "");
  const returnTo = safeReturnTo(String(form.get("returnTo") || "/admin/publish"));

  if (!verifyAdminPassword(password)) {
    return NextResponse.redirect(new URL("/admin/publish?error=1", request.url), 303);
  }

  const response = NextResponse.redirect(new URL(returnTo, request.url), 303);
  response.cookies.set(ADMIN_COOKIE, createAdminSession(), {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE,
  });
  return response;
}
