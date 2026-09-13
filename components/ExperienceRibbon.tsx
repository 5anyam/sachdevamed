/* "25+ Years of experience" ribbon from the Longfian artwork, overlaid on the
   top-right of product gallery images. Drawn as SVG so it stays sharp at any size. */
export default function ExperienceRibbon() {
  return (
    <div
      aria-label="25+ years of experience"
      style={{ position: 'absolute', top: 10, right: 10, zIndex: 2, width: 'clamp(104px, 30%, 168px)', pointerEvents: 'none', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.18))' }}
    >
      <svg viewBox="0 0 232 112" width="100%" role="img" style={{ display: 'block' }}>
        <polygon points="104,6 170,6 152,48 86,48" fill="#8E949E" />
        <polygon points="42,6 146,6 132,50 28,50" fill="#34489A" />
        <text x="50" y="40" fill="#fff" fontSize="30" fontWeight="800" fontFamily="inherit">25+</text>
        <polygon points="72,94 112,94 94,110" fill="#5B616B" />
        <polygon points="22,48 230,48 210,98 2,98" fill="#34489A" />
        <text x="28" y="80" fill="#fff" fontSize="21" fontWeight="700" fontFamily="inherit" textLength="176" lengthAdjust="spacingAndGlyphs">
          Years of experience
        </text>
      </svg>
    </div>
  );
}
