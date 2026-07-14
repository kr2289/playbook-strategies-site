import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Playbook Strategies — Strategy & insights that drive growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const headshotPath = join(process.cwd(), "public/headshot.jpg");
  const headshot = await readFile(headshotPath);
  const headshotSrc = `data:image/jpeg;base64,${headshot.toString("base64")}`;

  const forest = "#0f2f26";
  const field = "#17483a";
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
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 36 }}>
            <svg width="72" height="72" viewBox="0 0 100 100" fill="none">
              <rect x="16" y="16" width="68" height="68" stroke="#ffffff" strokeWidth="5" />
              <line x1="50" y1="5" x2="50" y2="16" stroke="#ffffff" strokeWidth="5" />
              <line x1="50" y1="84" x2="50" y2="95" stroke="#ffffff" strokeWidth="5" />
              <line x1="5" y1="50" x2="16" y2="50" stroke="#ffffff" strokeWidth="5" />
              <line x1="84" y1="50" x2="95" y2="50" stroke="#ffffff" strokeWidth="5" />
              <line x1="40" y1="60" x2="59" y2="41" stroke="#ffffff" strokeWidth="5" />
              <path d="M63 37 L55.5 39.5 L60.5 44.5 Z" fill="#ffffff" />
              <circle cx="36" cy="64" r="7" stroke="#ffffff" strokeWidth="5" />
              <circle cx="66" cy="34" r="7" stroke="#ffffff" strokeWidth="5" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: 34,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  lineHeight: 1.1,
                }}
              >
                PLAYBOOK
              </span>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: "0.34em",
                  color: sage,
                }}
              >
                STRATEGIES
              </span>
            </div>
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
