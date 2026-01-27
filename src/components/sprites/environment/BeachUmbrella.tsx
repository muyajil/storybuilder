/**
 * BeachUmbrella Sprite Component
 * Enhanced with fabric gradients, shadows, and depth
 */

import type { ElementProps } from '../types';

export function BeachUmbrella({ x = 0, y = 0, size = 80, color = '#FF6347' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main umbrella fabric gradient */}
        <linearGradient id="beachUmbrellaFabricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff8066" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#e54030" />
          <stop offset="100%" stopColor="#c53020" />
        </linearGradient>
        {/* White stripe gradient */}
        <linearGradient id="beachUmbrellaStripeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" />
          <stop offset="50%" stopColor="#f5f5f5" />
          <stop offset="100%" stopColor="#e8e8e8" />
        </linearGradient>
        {/* Pole wood gradient */}
        <linearGradient id="beachUmbrellaPoleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6a3a1a" />
          <stop offset="30%" stopColor="#8B4513" />
          <stop offset="70%" stopColor="#9a5523" />
          <stop offset="100%" stopColor="#6a3a1a" />
        </linearGradient>
        {/* Top ornament gradient */}
        <radialGradient id="beachUmbrellaTopGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8960B" />
        </radialGradient>
        {/* Umbrella under-shadow gradient */}
        <radialGradient id="beachUmbrellaUnderGradient" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        {/* Shadow filter */}
        <filter id="beachUmbrellaShadow">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="40" cy="78" rx="15" ry="3" fill="#000" opacity="0.2" />

      {/* Pole with wood grain */}
      <rect x="37" y="25" width="6" height="55" fill="url(#beachUmbrellaPoleGradient)" rx="1" />
      {/* Pole highlight */}
      <rect x="38" y="25" width="2" height="55" fill="white" opacity="0.2" />
      {/* Pole grain lines */}
      <line x1="39" y1="30" x2="39" y2="75" stroke="#5a3010" strokeWidth="0.3" opacity="0.4" />
      <line x1="41" y1="30" x2="41" y2="75" stroke="#5a3010" strokeWidth="0.3" opacity="0.4" />

      <g filter="url(#beachUmbrellaShadow)">
        {/* Main umbrella canopy */}
        <path d="M5 25 Q40 0 75 25 Q40 32 5 25" fill="url(#beachUmbrellaFabricGradient)" />

        {/* Umbrella segments (alternating colors) */}
        <path d="M5 25 Q15 12 25 25 Q15 28 5 25" fill="url(#beachUmbrellaFabricGradient)" />
        <path d="M25 25 Q32 10 40 25 Q32 29 25 25" fill="url(#beachUmbrellaStripeGradient)" />
        <path d="M40 25 Q48 10 55 25 Q48 29 40 25" fill="url(#beachUmbrellaFabricGradient)" />
        <path d="M55 25 Q65 12 75 25 Q65 28 55 25" fill="url(#beachUmbrellaStripeGradient)" />

        {/* Segment lines for definition */}
        <path d="M25 25 Q32 10 40 25" fill="none" stroke="#c53020" strokeWidth="0.5" opacity="0.5" />
        <path d="M55 25 Q48 10 40 25" fill="none" stroke="#c53020" strokeWidth="0.5" opacity="0.5" />

        {/* Under-canopy shadow */}
        <path d="M8 25 Q40 20 72 25 Q40 30 8 25" fill="url(#beachUmbrellaUnderGradient)" />

        {/* Scalloped edge detail */}
        <path d="M5 25 Q10 27 15 25 Q20 27 25 25 Q30 27 35 25 Q40 27 45 25 Q50 27 55 25 Q60 27 65 25 Q70 27 75 25"
              fill="none" stroke="#c53020" strokeWidth="1.5" />

        {/* Edge trim highlight */}
        <path d="M6 24 Q40 1 74 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
      </g>

      {/* Top ornament/finial */}
      <circle cx="40" cy="12" r="4" fill="url(#beachUmbrellaTopGradient)" />
      <circle cx="39" cy="11" r="1.5" fill="white" opacity="0.4" />
      {/* Ornament stem */}
      <rect x="39" y="15" width="2" height="10" fill="#B8960B" />
    </svg>
  );
}
