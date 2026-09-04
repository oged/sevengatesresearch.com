/**
 * The Seven Gates mark — an Etruscan gateway, per brand/BRAND-GUIDE.md.
 *
 * The arch ring is cut into seven voussoirs, one per gate. The seventh — the
 * keystone at the apex — is brass: it locks the ring, and pulling any one stone
 * brings the arch down. Behind it the vault recedes to a lit brass core.
 * Travertine jambs, podium, no ornament.
 *
 * Stone takes `currentColor`; the keystone and core take --mark-keystone so the
 * brand rule "never re-colour the keystone anything but brass" holds wherever
 * the mark is placed.
 *
 * NOTE: drawn from the written brand description. The canonical files
 * (brand/svg/mark.svg, mark-small.svg) were not supplied; swap them in here.
 */
export function GateMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 56" fill="none" role="img" aria-label="Seven Gates Research">
      {/* the vault receding behind the arch */}
      <g stroke="currentColor" strokeWidth="1.1" opacity="0.55">
        <path d="M14 50V30a10 10 0 0 1 20 0v20" />
        <path d="M18.5 50V30a5.5 5.5 0 0 1 11 0v20" />
      </g>

      {/* the lit brass core at the far end of the vault */}
      <path d="M21.6 50v-6.4a2.4 2.4 0 0 1 4.8 0V50Z" fill="var(--mark-keystone, #C69A52)" />

      {/* the arch ring */}
      <path
        d="M4 30a20 20 0 0 1 40 0h-6a14 14 0 0 0-28 0Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      {/* six radial joints, cutting the ring into seven voussoirs */}
      <g stroke="currentColor" strokeWidth="1.1">
        <path d="M5.98 21.32 11.39 23.93" />
        <path d="M11.53 14.36 15.27 19.05" />
        <path d="M19.55 10.50 20.89 16.35" />
        <path d="M28.45 10.50 27.11 16.35" />
        <path d="M36.47 14.36 32.73 19.05" />
        <path d="M42.02 21.32 36.61 23.93" />
      </g>

      {/* the seventh stone: the keystone, at the apex, in brass */}
      <path
        d="M19.55 10.50a20 20 0 0 1 8.9 0l-1.34 5.85a14 14 0 0 0-6.22 0Z"
        fill="var(--mark-keystone, #C69A52)"
      />

      {/* jambs and podium */}
      <g stroke="currentColor" strokeWidth="1.4">
        <path d="M4.7 30v20M43.3 30v20M10 30v20M38 30v20" />
        <path d="M1.5 50.8h45" strokeWidth="2.4" />
      </g>
    </svg>
  );
}
