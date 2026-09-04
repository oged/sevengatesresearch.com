/**
 * The Seven Gates mark: a barred gateway. The lintel closes the arch and the
 * five bars hang from it which, counted with the two arch legs, make seven.
 * Drawn in `currentColor` so it takes the brass from whatever it sits in.
 */
export function GateMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 48"
      fill="none"
      role="img"
      aria-label="Seven Gates Research"
    >
      <path
        d="M3.2 45.6V17.6a16.8 16.8 0 0 1 33.6 0v28"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path d="M3.2 17.6h33.6" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M8.8 45.6V17.6M14.4 45.6V17.6M20 45.6V17.6M25.6 45.6V17.6M31.2 45.6V17.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
