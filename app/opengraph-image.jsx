import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Playbook Strategies — Strategy & insights that drive growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const headshotPath = join(process.cwd(), "public/headshot.jpg");
  const logoPath = join(process.cwd(), "public/logo.png");
  const [headshot, logo] = await Promise.all([
    readFile(headshotPath),
    readFile(logoPath),
  ]);
  const headshotSrc = `data:image/jpeg;base64,${headshot.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  const forest = "#182e27";
  const field = "#233931";
  const sage = "#97b7a5";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: forest,
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "64px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: 36 }}>
            <img
              src={logoSrc}
              alt=""
              width="120"
              height="120"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: sage,
              marginBottom: 18,
            }}
          >
            Strategy. Insight. Growth.
          </div>

          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: 640,
              marginBottom: 24,
            }}
          >
            Decisions that drive growth for sports & entertainment.
          </div>

          <div style={{ fontSize: 26, color: "#d8e8df", maxWidth: 620 }}>
            Katherine Rowe · Ticketing, sponsorship, media & data strategy
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 420,
            background: field,
            borderLeft: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <img
            src={headshotSrc}
            alt=""
            width="300"
            height="300"
            style={{
              borderRadius: 999,
              border: "6px solid rgba(255,255,255,0.18)",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
