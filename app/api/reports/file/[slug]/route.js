import { cookies } from "next/headers";
import { readFile, stat } from "fs/promises";
import path from "path";
import { hasReportsAccess } from "../../../../lib/reports-access";
import { getReport } from "../../../../lib/reports";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  if (!hasReportsAccess(cookies())) {
    return new Response("Unlock this report to download it.", { status: 401 });
  }

  const report = getReport(params.slug);
  if (!report) {
    return new Response("Not found.", { status: 404 });
  }

  const reportsDir = path.resolve(process.cwd(), "content", "reports");
  const filePath = path.resolve(reportsDir, report.file);

  if (!filePath.startsWith(reportsDir + path.sep)) {
    return new Response("Not found.", { status: 404 });
  }

  let file;
  let size;

  try {
    const info = await stat(filePath);
    size = info.size;
    file = await readFile(filePath);
  } catch {
    return new Response("Not found.", { status: 404 });
  }

  const download = new URL(request.url).searchParams.get("download") === "1";
  const filename = report.file;

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Length": String(size),
      "Content-Disposition": `${download ? "attachment" : "inline"}; filename="${filename}"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
