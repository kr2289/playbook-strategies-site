import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const logoPath = join(process.cwd(), "public/logo.png");
  const logo = await readFile(logoPath);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbf7f5",
        }}
      >
        <img
          src={`data:image/png;base64,${logo.toString("base64")}`}
          alt=""
          width="32"
          height="32"
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
