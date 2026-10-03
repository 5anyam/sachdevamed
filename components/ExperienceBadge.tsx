/* "Over 25 Years of Experience" shield, overlaid on a product's main image. */
export default function ExperienceBadge({ size = 96 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.18} viewBox="0 0 100 118" role="img" aria-label="Over 25 Years of Experience" style={{ display: 'block', filter: 'drop-shadow(0 4px 10px rgba(15,17,23,0.3))' }}>
      <defs>
        <linearGradient id="xb-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#0F1E4D" />
        </linearGradient>
        <linearGradient id="xb-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E5E7EB" />
          <stop offset="0.5" stopColor="#9CA3AF" />
          <stop offset="1" stopColor="#F3F4F6" />
        </linearGradient>
      </defs>
      <path d="M50 2 L96 16 V58 C96 86 74 104 50 116 C26 104 4 86 4 58 V16 Z" fill="url(#xb-rim)" />
      <path d="M50 8 L90 20 V58 C90 82 71 98 50 109 C29 98 10 82 10 58 V20 Z" fill="url(#xb-fill)" />
      <text x="50" y="40" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600" fontFamily="inherit">Over</text>
      <text x="50" y="66" textAnchor="middle" fill="#fff" fontSize="27" fontWeight="900" fontFamily="inherit" letterSpacing="-0.5">25</text>
      <text x="50" y="79" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800" fontFamily="inherit">YEARS</text>
      <text x="50" y="90" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="7.5" fontWeight="600" fontFamily="inherit">of Experience</text>
      <text x="50" y="101" textAnchor="middle" fill="#FBBF24" fontSize="7" letterSpacing="1">★★★★★</text>
    </svg>
  );
}
