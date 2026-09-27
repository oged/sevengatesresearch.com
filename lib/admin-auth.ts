import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "sgr_admin";
const SESSION_MS = 7 * 24 * 60 * 60 * 1000;

function getAuthSecret() {
  return process.env.PUBLISH_ADMIN_SECRET || process.env.PUBLISH_ADMIN_PASSWORD || "";
}

function digest(value: string) {
  const secret = getAuthSecret();
  if (!secret) return "";
  return createHmac("sha256", secret).update(value).digest("hex");
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function adminAuthConfigured() {
  return Boolean(process.env.PUBLISH_ADMIN_PASSWORD && getAuthSecret());
}

export function verifyAdminPassword(candidate: string) {
  const expected = process.env.PUBLISH_ADMIN_PASSWORD || "";
  if (!expected || !candidate) return false;
  return safeEqual(candidate, expected);
}

export function createAdminSession() {
  const expires = Date.now() + SESSION_MS;
  const payload = String(expires);
  return `${payload}.${digest(payload)}`;
}

export function verifyAdminSession(value?: string | null) {
  if (!value) return false;
  const [expiresRaw, signature] = value.split(".");
  if (!expiresRaw || !signature) return false;

  const expires = Number(expiresRaw);
  if (!Number.isFinite(expires) || expires <= Date.now()) return false;

  const expected = digest(expiresRaw);
  if (!expected) return false;
  return safeEqual(signature, expected);
}

export const ADMIN_SESSION_MAX_AGE = Math.floor(SESSION_MS / 1000);
