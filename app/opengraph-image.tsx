import { ImageResponse } from "next/og";

export const alt = "Seven Gates Research. Independent research on companies, markets and power.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";


// The gate mark, inlined as a data URI. satori renders a limited subset of SVG
// but handles <img src="data:image/svg+xml,...">, which keeps the real voussoir
// geometry rather than approximating it with boxes.
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 56" fill="none">
  <g stroke="#C6BFAE" stroke-width="1.1" opacity="0.55">
    <path d="M14 50V30a10 10 0 0 1 20 0v20"/>
    <path d="M18.5 50V30a5.5 5.5 0 0 1 11 0v20"/>
  </g>
  <path d="M21.6 50v-6.4a2.4 2.4 0 0 1 4.8 0V50Z" fill="#C69A52"/>
  <path d="M4 30a20 20 0 0 1 40 0h-6a14 14 0 0 0-28 0Z" stroke="#C6BFAE" stroke-width="1.4"/>
  <g stroke="#C6BFAE" stroke-width="1.1">
    <path d="M5.98 21.32 11.39 23.93"/><path d="M11.53 14.36 15.27 19.05"/>
    <path d="M19.55 10.50 20.89 16.35"/><path d="M28.45 10.50 27.11 16.35"/>
    <path d="M36.47 14.36 32.73 19.05"/><path d="M42.02 21.32 36.61 23.93"/>
  </g>
  <path d="M19.55 10.50a20 20 0 0 1 8.9 0l-1.34 5.85a14 14 0 0 0-6.22 0Z" fill="#C69A52"/>
  <g stroke="#C6BFAE" stroke-width="1.4">
    <path d="M4.7 30v20M43.3 30v20M10 30v20M38 30v20"/>
    <path d="M1.5 50.8h45" stroke-width="2.4"/>
  </g>
</svg>`;

const MARK_SRC = `data:image/svg+xml,${encodeURIComponent(MARK)}`;

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
        <img src={MARK_SRC} width={90} height={105} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ color: "#FBF8F1", fontSize: 36, letterSpacing: 5 }}>SEVEN GATES</div>
          <div style={{ color: "#E3C08A", fontSize: 15, letterSpacing: 13 }}>RESEARCH</div>
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
