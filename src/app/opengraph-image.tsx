import { ImageResponse } from "next/og";

export const alt = "Kollaborate. Done-for-you growth for local service businesses.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAF9F6",
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 10,
              height: 48,
              background: "#2D4A3E",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 34,
              fontWeight: 500,
              color: "#111111",
              letterSpacing: "-0.02em",
            }}
          >
            Kollaborate
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 500,
              lineHeight: 1.05,
              color: "#111111",
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            Done-for-you growth for local service businesses.
          </div>
          <div
            style={{
              fontSize: 28,
              fontFamily: "sans-serif",
              color: "#5C5C5C",
              lineHeight: 1.4,
              maxWidth: 920,
            }}
          >
            One team. Voice, reviews, website, content, follow-up. Starting at
            $750/mo.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            fontFamily: "sans-serif",
            color: "#5C5C5C",
          }}
        >
          <div>kollaborate.ca</div>
          <div>Montreal &middot; Ottawa</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
