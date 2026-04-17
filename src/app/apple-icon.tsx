import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAF9F6",
          color: "#2D4A3E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 128,
          fontWeight: 600,
          fontFamily: "serif",
          letterSpacing: "-0.03em",
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
