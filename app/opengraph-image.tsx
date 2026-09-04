import { ImageResponse } from "next/og";

export const alt = "Seven Gates Research. Independent research on companies, markets and power.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";


// The gate mark, inlined as a data URI. satori renders a limited subset of SVG
// but handles <img src="data:image/svg+xml,...">, which keeps the real voussoir
// geometry rather than approximating it with boxes.
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 50 116 82" fill="none">
  <path d="M27 126 L27 100 A33 33 0 0 1 93 100 L93 126 Z" fill="#F4F0E8" fill-opacity=".08"/>
  <path d="M30 126 L30 100 A30 30 0 0 1 90 100 L90 126" stroke="#F4F0E8" stroke-width="1.4" stroke-opacity=".26"/>
  <path d="M33.4 126 L33.4 100 A26.6 26.6 0 0 1 86.6 100 L86.6 126" stroke="#F4F0E8" stroke-width="1.4" stroke-opacity=".36"/>
  <path d="M36.8 126 L36.8 100 A23.2 23.2 0 0 1 83.2 100 L83.2 126" stroke="#F4F0E8" stroke-width="1.4" stroke-opacity=".46"/>
  <path d="M40.2 126 L40.2 100 A19.8 19.8 0 0 1 79.8 100 L79.8 126" stroke="#F4F0E8" stroke-width="1.4" stroke-opacity=".56"/>
  <path d="M43.6 126 L43.6 100 A16.4 16.4 0 0 1 76.4 100 L76.4 126" stroke="#F4F0E8" stroke-width="1.4" stroke-opacity=".68"/>
  <path d="M47 126 L47 100 A13 13 0 0 1 73 100 L73 126" stroke="#F4F0E8" stroke-width="1.4" stroke-opacity=".84"/>
  <path d="M50 126 L50 100 A10 10 0 0 1 70 100 L70 126 Z" fill="#C69A52"/>
  <path d="M10.08 97.21 A50 50 0 0 1 13.81 80.85 L29.52 87.36 A33 33 0 0 0 27.05 98.16 Z" fill="#F4F0E8"/>
  <path d="M16.23 75.82 A50 50 0 0 1 26.69 62.71 L38.02 75.39 A33 33 0 0 0 31.11 84.04 Z" fill="#F4F0E8"/>
  <path d="M31.06 59.23 A50 50 0 0 1 46.17 51.95 L50.87 68.29 A33 33 0 0 0 40.90 73.09 Z" fill="#F4F0E8"/>
  <path d="M51.61 50.71 A50 50 0 0 1 68.39 50.71 L65.54 67.47 A33 33 0 0 0 54.46 67.47 Z" fill="#C69A52"/>
  <path d="M73.83 51.95 A50 50 0 0 1 88.94 59.23 L79.10 73.09 A33 33 0 0 0 69.13 68.29 Z" fill="#F4F0E8"/>
  <path d="M93.31 62.71 A50 50 0 0 1 103.77 75.82 L88.89 84.04 A33 33 0 0 0 81.98 75.39 Z" fill="#F4F0E8"/>
  <path d="M106.19 80.85 A50 50 0 0 1 109.92 97.21 L92.95 98.16 A33 33 0 0 0 90.48 87.36 Z" fill="#F4F0E8"/>
  <rect x="10" y="100" width="17" height="26" fill="#C6BFAE"/>
  <rect x="93" y="100" width="17" height="26" fill="#C6BFAE"/>
  <rect x="2" y="126" width="116" height="6" fill="#F4F0E8"/>
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
      background: "#26342B",
      color: "#FBF8F1",
      padding: "72px 82px",
      borderTop: "16px solid #A67C3D",
      fontFamily: "Georgia, serif",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        <img src={MARK_SRC} width={116} height={82} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ color: "#FBF8F1", fontSize: 36, letterSpacing: 5 }}>SEVEN GATES</div>
          <div style={{ color: "#C69A52", fontSize: 15, letterSpacing: 13 }}>RESEARCH</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 68, lineHeight: 1.02, maxWidth: 920 }}>Independent research on companies, markets and power.</div>
        <div style={{ display: "flex", alignItems: "center", gap: 22, fontSize: 24, color: "#D5DBD2" }}>
          <span>Nigeria at the centre.</span>
          <span style={{ color: "#C69A52" }}>•</span>
          <span>The world in view.</span>
        </div>
      </div>
    </div>,
    size,
  );
}
