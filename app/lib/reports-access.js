import { createHmac, timingSafeEqual } from "crypto";
import { REPORTS_COOKIE } from "./reports";

const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;

function secret() {
  return (
    process.env.PLAYBOOK_UNLOCK_SECRET ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    "playbook-dev-unlock"
  );
}

function sign(payload) {
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = createHmac("sha256", secret()).update(encoded).digest("base64url");
  return `${encoded}.${sig}`;
}

function readToken(token) {
  if (!token || typeof token !== "string") return null;

  const dot = token.lastIndexOf(".");
  if (dot <= 0) return null;

  const encoded = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = createHmac("sha256", secret())
    .update(encoded)
    .digest("base64url");

  const sigBuf = Buffer.from(sig);
  const expectedBuf = Buffer.from(expected);
  if (sigBuf.length !== expectedBuf.length) return null;
  if (!timingSafeEqual(sigBuf, expectedBuf)) return null;

  try {
    const data = JSON.parse(Buffer.from(encoded, "base64url").toString());
    if (Number(data.exp) <= Date.now()) return null;
    if (data.kind !== "reports") return null;
    return data;
  } catch {
    return null;
  }
}

export function unlockedReportSlugs(cookieStore) {
  const data = readToken(cookieStore.get(REPORTS_COOKIE)?.value);
  if (!data || data.v !== 2 || !Array.isArray(data.slugs)) return [];
  return data.slugs.filter((slug) => typeof slug === "string" && slug);
}

export function createReportsToken(slugs) {
  const unique = [...new Set(slugs.filter(Boolean))];
  return sign({
    v: 2,
    kind: "reports",
    slugs: unique,
    exp: Date.now() + NINETY_DAYS_MS,
  });
}

export function hasReportsAccess(cookieStore, slug) {
  if (!slug) return false;
  return unlockedReportSlugs(cookieStore).includes(slug);
}

export function reportsCookieOptions() {
  return {
    name: REPORTS_COOKIE,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 90,
  };
}
