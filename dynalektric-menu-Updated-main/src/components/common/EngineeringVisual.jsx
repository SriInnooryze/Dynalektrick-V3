/* EngineeringVisual.jsx — SVG core topology visual component */

function EngineeringVisual({ variant = 'grid' }) {
  return (
    <svg viewBox="0 0 600 660" className="eng-svg" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="dynaGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14,17,22,0.06)" strokeWidth="1" />
        </pattern>
        <pattern id="dynaGridMajor" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(14,17,22,0.12)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="660" fill="var(--bg-card)" />
      <rect width="600" height="660" fill="url(#dynaGrid)" />
      <rect width="600" height="660" fill="url(#dynaGridMajor)" />
      <g transform="translate(300 330)" fill="none" stroke="var(--ink)" strokeWidth="1">
        <circle r="40" />
        <circle r="80" />
        <circle r="120" strokeOpacity="0.7" />
        <circle r="160" strokeOpacity="0.5" />
        <circle r="200" strokeOpacity="0.3" />
        <circle r="240" strokeOpacity="0.15" />
      </g>
      <g stroke="var(--accent)" strokeWidth="1.5" fill="none">
        <path d="M 60 330 L 180 330" />
        <path d="M 420 330 L 540 330" />
        <circle cx="180" cy="330" r="3" fill="var(--accent)" />
        <circle cx="420" cy="330" r="3" fill="var(--accent)" />
      </g>
      <path d="M 60 540 Q 105 500 150 540 T 240 540 T 330 540 T 420 540 T 510 540 T 540 540"
            fill="none" stroke="var(--accent-2)" strokeWidth="1.5" />
      <g stroke="var(--ink)" strokeWidth="1">
        <line x1="60" y1="60" x2="60" y2="80" />
        <line x1="60" y1="60" x2="80" y2="60" />
        <line x1="540" y1="60" x2="540" y2="80" />
        <line x1="540" y1="60" x2="520" y2="60" />
        <line x1="60" y1="600" x2="60" y2="580" />
        <line x1="60" y1="600" x2="80" y2="600" />
        <line x1="540" y1="600" x2="540" y2="580" />
        <line x1="540" y1="600" x2="520" y2="600" />
      </g>
      <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--ink-muted)" letterSpacing="1">
        <text x="60" y="50">FIG. 01 / CORE TOPOLOGY</text>
        <text x="60" y="640">f = 50 / 60 Hz</text>
        <text x="540" y="640" textAnchor="end">DYN-01.A</text>
      </g>
    </svg>
  );
}

export default EngineeringVisual;
