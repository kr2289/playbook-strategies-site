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

  const paper = "#FDFCFA";
  const forest = "#0F2F26";
  const field = "#17483A";
  const text2 = "#333333";
  const stone = "#D5D4CF";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: paper,
          color: forest,
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
          <img
            src={logoSrc}
            alt=""
            width="72"
            height="72"
            style={{ objectFit: "contain", marginBottom: 28 }}
          />

          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: field,
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
              letterSpacing: "-0.015em",
              maxWidth: 680,
              marginBottom: 24,
            }}
          >
            Decisions that drive growth for sports & entertainment.
          </div>

          <div style={{ fontSize: 26, color: text2, maxWidth: 640 }}>
            Katherine Rowe · Ticketing, sponsorship, media & data strategy
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 420,
            background: paper,
            borderLeft: `1px solid ${stone}`,
          }}
        >
          <img
            src={headshotSrc}
            alt=""
            width="300"
            height="300"
            style={{
              borderRadius: 4,
              border: `1px solid ${stone}`,
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
