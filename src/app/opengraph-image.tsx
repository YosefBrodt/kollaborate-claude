import { ImageResponse } from "next/og";

export const alt =
  "Kollaborate. We run the five things that grow your business.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0C1F1A",
          padding: 72,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          color: "#F4F1E8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 10,
              height: 36,
              background: "#A8D5BB",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              color: "#F4F1E8",
              letterSpacing: "-0.02em",
            }}
          >
            Kollaborate
          </div>
          <div style={{ fontSize: 30, color: "#A8D5BB" }}>.</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 600,
              lineHeight: 1.02,
              color: "#F4F1E8",
              letterSpacing: "-0.035em",
              maxWidth: 1040,
            }}
          >
            We run the five things that grow your business.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#9BB0A3",
              lineHeight: 1.35,
              maxWidth: 900,
            }}
          >
            Calls. Reviews. Website. Content. Leads. One team from $750/mo.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#9BB0A3",
            fontFamily: "monospace",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div>kollaborate.ca</div>
          <div>MTL · OTT · Eastern ON</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
