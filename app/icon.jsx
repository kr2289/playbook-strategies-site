import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const color = "#17483a";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
          <rect x="16" y="16" width="68" height="68" stroke={color} strokeWidth="8" />
          <line x1="50" y1="5" x2="50" y2="16" stroke={color} strokeWidth="8" />
          <line x1="50" y1="84" x2="50" y2="95" stroke={color} strokeWidth="8" />
          <line x1="5" y1="50" x2="16" y2="50" stroke={color} strokeWidth="8" />
          <line x1="84" y1="50" x2="95" y2="50" stroke={color} strokeWidth="8" />
          <line x1="40" y1="60" x2="59" y2="41" stroke={color} strokeWidth="8" />
          <path d="M63 37 L55.5 39.5 L60.5 44.5 Z" fill={color} />
          <circle cx="36" cy="64" r="7" stroke={color} strokeWidth="8" />
          <circle cx="66" cy="34" r="7" stroke={color} strokeWidth="8" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
