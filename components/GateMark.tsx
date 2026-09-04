/**
 * The Seven Gates mark, from the supplied brand/mark.svg.
 *
 * The vault recedes through seven arches — each the brand ink at a rising
 * opacity — to a lit brass core. The ring above carries seven voussoirs, the
 * middle one the brass keystone. Travertine jambs, podium below.
 *
 * Geometry is the artwork's, unaltered. Only the stone colour is a token, so
 * the mark can reverse onto a dark ground the way brand/favicon.svg does:
 * parchment stone, brass-light keystone. The keystone is never anything but
 * brass, per the brand guide.
 */
export function GateMark({ className }: { className?: string }) {
  const stone = "var(--mark-stone, #1A1F24)";
  const keystone = "var(--mark-keystone, #A67C3D)";

  return (
    <svg
      className={className}
      width="232"
      height="164"
      viewBox="2 50 116 82"
      fill="none"
      role="img"
      aria-label="Seven Gates Research"
    >
      {/* the vault: seven arches receding, ink at a rising opacity */}
      <path d="M27 126 L27 100 A33 33 0 0 1 93 100 L93 126 Z" fill={stone} fillOpacity=".08" />
      <path d="M30 126 L30 100 A30 30 0 0 1 90 100 L90 126" stroke={stone} strokeWidth="1.4" strokeOpacity=".26" />
      <path d="M33.4 126 L33.4 100 A26.6 26.6 0 0 1 86.6 100 L86.6 126" stroke={stone} strokeWidth="1.4" strokeOpacity=".36" />
      <path d="M36.8 126 L36.8 100 A23.2 23.2 0 0 1 83.2 100 L83.2 126" stroke={stone} strokeWidth="1.4" strokeOpacity=".46" />
      <path d="M40.2 126 L40.2 100 A19.8 19.8 0 0 1 79.8 100 L79.8 126" stroke={stone} strokeWidth="1.4" strokeOpacity=".56" />
      <path d="M43.6 126 L43.6 100 A16.4 16.4 0 0 1 76.4 100 L76.4 126" stroke={stone} strokeWidth="1.4" strokeOpacity=".68" />
      <path d="M47 126 L47 100 A13 13 0 0 1 73 100 L73 126" stroke={stone} strokeWidth="1.4" strokeOpacity=".84" />

      {/* the lit brass core */}
      <path d="M50 126 L50 100 A10 10 0 0 1 70 100 L70 126 Z" fill={keystone} />

      {/* the ring: seven voussoirs, the middle one the keystone */}
      <path d="M10.08 97.21 A50 50 0 0 1 13.81 80.85 L29.52 87.36 A33 33 0 0 0 27.05 98.16 Z" fill={stone} />
      <path d="M16.23 75.82 A50 50 0 0 1 26.69 62.71 L38.02 75.39 A33 33 0 0 0 31.11 84.04 Z" fill={stone} />
      <path d="M31.06 59.23 A50 50 0 0 1 46.17 51.95 L50.87 68.29 A33 33 0 0 0 40.90 73.09 Z" fill={stone} />
      <path d="M51.61 50.71 A50 50 0 0 1 68.39 50.71 L65.54 67.47 A33 33 0 0 0 54.46 67.47 Z" fill={keystone} />
      <path d="M73.83 51.95 A50 50 0 0 1 88.94 59.23 L79.10 73.09 A33 33 0 0 0 69.13 68.29 Z" fill={stone} />
      <path d="M93.31 62.71 A50 50 0 0 1 103.77 75.82 L88.89 84.04 A33 33 0 0 0 81.98 75.39 Z" fill={stone} />
      <path d="M106.19 80.85 A50 50 0 0 1 109.92 97.21 L92.95 98.16 A33 33 0 0 0 90.48 87.36 Z" fill={stone} />

      {/* travertine jambs, podium */}
      <rect x="10" y="100" width="17" height="26" fill="#C6BFAE" />
      <rect x="93" y="100" width="17" height="26" fill="#C6BFAE" />
      <rect x="2" y="126" width="116" height="6" fill={stone} />
    </svg>
  );
}
