import { ImageResponse } from "next/og";

export const alt = "Seven Gates Research. Independent research on companies, markets and power.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "#443A2D",
      color: "#FBF8F1",
      padding: "72px 82px",
      borderTop: "16px solid #A67C3D",
      fontFamily: "Georgia, serif",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        <div style={{
          width: 86,
          height: 104,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          border: "3px solid #E3C08A",
          borderRadius: "43px 43px 8px 8px",
        }}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 11,
            height: 56,
            borderTop: "3px solid #E3C08A",
          }}>
            <div style={{ width: 5, height: 53, background: "#E3C08A" }} />
            <div style={{ width: 5, height: 53, background: "#E3C08A" }} />
            <div style={{ width: 5, height: 53, background: "#E3C08A" }} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ color: "#E3C08A", fontSize: 25, letterSpacing: 5 }}>SEVEN GATES RESEARCH</div>
          <div style={{ color: "#DED6C6", fontSize: 22 }}>Knowledge. Context. Advantage.</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 68, lineHeight: 1.02, maxWidth: 920 }}>Independent research on companies, markets and power.</div>
        <div style={{ display: "flex", alignItems: "center", gap: 22, fontSize: 24, color: "#DED6C6" }}>
          <span>Nigeria at the centre.</span>
          <span style={{ color: "#E3C08A" }}>•</span>
          <span>The world in view.</span>
        </div>
      </div>
    </div>,
    size,
  );
}
