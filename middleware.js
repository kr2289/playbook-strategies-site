import { NextResponse } from "next/server";

export function middleware(request) {
  const password = process.env.SITE_PASSWORD;
  if (!password) {
    return NextResponse.next();
  }

  const username = process.env.SITE_USERNAME || "playbook";
  const authHeader = request.headers.get("authorization");

  if (authHeader?.startsWith("Basic ")) {
    const encoded = authHeader.slice(6);
    let decoded = "";

    try {
      decoded = atob(encoded);
    } catch {
      decoded = "";
    }

    const separator = decoded.indexOf(":");
    if (separator !== -1) {
      const user = decoded.slice(0, separator);
      const pass = decoded.slice(separator + 1);

      if (user === username && pass === password) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Playbook Strategies", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon|opengraph-image|robots.txt|sitemap.xml).*)",
  ],
};
