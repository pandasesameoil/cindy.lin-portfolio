import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Cindy Lin - Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              marginBottom: 24,
              textAlign: "center",
            }}
          >
            Cindy Lin
          </div>

          {/* Tagline with dots */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 40,
            }}
          >
            <span
              style={{
                fontSize: 28,
                color: "#B45309",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              Venture Capital
            </span>
            <span
              style={{
                fontSize: 28,
                color: "#666666",
              }}
            >
              •
            </span>
            <span
              style={{
                fontSize: 28,
                color: "#B45309",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              Startup Ecosystem
            </span>
            <span
              style={{
                fontSize: 28,
                color: "#666666",
              }}
            >
              •
            </span>
            <span
              style={{
                fontSize: 28,
                color: "#B45309",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              E-Commerce
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 20,
              color: "#888888",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            GTM & Ecosystem Operator | Partnerships, Community-Led Growth
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #B45309 0%, #D97706 50%, #B45309 100%)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
