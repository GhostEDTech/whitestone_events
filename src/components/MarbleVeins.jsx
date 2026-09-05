// Generative marble-vein texture — stands in for a photograph in the hero,
// echoing the "white stone" of the venue's name without relying on stock imagery.
export default function MarbleVeins({ className = "", opacity = 0.5 }) {
  return (
    <svg
      className={className}
      style={{ opacity }}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="veinTurbulence" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="3" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="60" />
        </filter>
        <linearGradient id="veinFade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A8823D" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#7C5E2A" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#A8823D" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <g filter="url(#veinTurbulence)" stroke="url(#veinFade)" fill="none" strokeWidth="1.4">
        <path d="M -50 120 C 200 200, 350 60, 600 180 S 950 100, 1250 220" />
        <path d="M -50 340 C 250 260, 400 420, 650 340 S 1000 460, 1250 380" />
        <path d="M -50 540 C 300 480, 500 620, 750 520 S 1050 600, 1250 540" />
        <path d="M 100 -30 C 180 200, 60 400, 180 650" />
        <path d="M 820 -30 C 760 220, 900 400, 800 720" />
      </g>
    </svg>
  );
}
