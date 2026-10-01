import { createHmac, timingSafeEqual } from "crypto";
import { PLAYBOOK_COOKIE } from "./playbook";

const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;

function secret() {
  return (
    process.env.PLAYBOOK_UNLOCK_SECRET ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    "playbook-dev-unlock"
  );
}

export function createPlaybookToken() {
  const payload = Buffer.from(
    JSON.stringify({ v: 1, exp: Date.now() + NINETY_DAYS_MS })
  ).toString("base64url");
  const sig = createHmac("sha256", secret()).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function isPlaybookTokenValid(token) {
  if (!token || typeof token !== "string") return false;

  const dot = token.lastIndexOf(".");
  if (dot <= 0) return false;

  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = createHmac("sha256", secret())
    .update(payload)
    .digest("base64url");

  const sigBuf = Buffer.from(sig);
  const expectedBuf = Buffer.from(expected);
  if (sigBuf.length !== expectedBuf.length) return false;
  if (!timingSafeEqual(sigBuf, expectedBuf)) return false;

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    return Number(data.exp) > Date.now();
  } catch {
    return false;
  }
}

export function hasPlaybookAccess(cookieStore) {
  return isPlaybookTokenValid(cookieStore.get(PLAYBOOK_COOKIE)?.value);
}

export function playbookCookieOptions() {
  return {
    name: PLAYBOOK_COOKIE,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 90,
  };
}
