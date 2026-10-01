import { cookies } from "next/headers";
import { readFile } from "fs/promises";
import path from "path";
import { hasPlaybookAccess } from "../../../../lib/playbook-access";
import { getPlaybookPiece, getPlaybookVersion } from "../../../../lib/playbook";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  if (!hasPlaybookAccess(cookies())) {
    return new Response("Unlock this piece to view it.", { status: 401 });
  }

  const piece = getPlaybookPiece(params.slug);
  if (!piece) {
    return new Response("Not found.", { status: 404 });
  }

  const versionId = new URL(request.url).searchParams.get("v");
  const version = getPlaybookVersion(piece, versionId);
  if (!version) {
    return new Response("Not found.", { status: 404 });
  }

  const playbookDir = path.resolve(process.cwd(), "content", "playbook");
  const filePath = path.resolve(playbookDir, version.file);

  if (!filePath.startsWith(playbookDir + path.sep)) {
    return new Response("Not found.", { status: 404 });
  }

  let html;

  try {
    html = await readFile(filePath, "utf8");
  } catch {
    return new Response("Not found.", { status: 404 });
  }

  if (!/<meta[^>]+viewport/i.test(html)) {
    html = html.replace(
      /<head([^>]*)>/i,
      `<head$1><meta name="viewport" content="width=${version.width}">`
    );
  }

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
