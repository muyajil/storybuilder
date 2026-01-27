/**
 * Table Sprite Component
 * High quality with wood grain texture, shadows, and realistic details
 */

import type { ElementProps } from '../types';

export function Table({ x = 0, y = 0, size = 80, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 80 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Tabletop gradient */}
        <linearGradient id="tableTopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="20%" stopColor={color} />
          <stop offset="80%" stopColor="#7A4010" />
          <stop offset="100%" stopColor="#5D3000" />
        </linearGradient>
        {/* Tabletop side gradient */}
        <linearGradient id="tableTopSideGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#5D3000" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="tableLegGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5D3000" />
          <stop offset="25%" stopColor="#7A4010" />
          <stop offset="50%" stopColor={color} />
          <stop offset="75%" stopColor="#7A4010" />
          <stop offset="100%" stopColor="#5D3000" />
        </linearGradient>
        {/* Wood grain pattern */}
        <pattern id="tableWoodGrain" width="10" height="40" patternUnits="userSpaceOnUse">
          <line x1="2" y1="0" x2="2" y2="40" stroke="#6B3A0A" strokeWidth="0.3" opacity="0.4" />
          <line x1="5" y1="0" x2="5" y2="40" stroke="#6B3A0A" strokeWidth="0.2" opacity="0.3" />
          <line x1="8" y1="0" x2="8" y2="40" stroke="#5D3000" strokeWidth="0.4" opacity="0.3" />
          <path d="M0 10 Q5 12 10 10" stroke="#5D3000" strokeWidth="0.2" fill="none" opacity="0.2" />
          <path d="M0 25 Q5 23 10 25" stroke="#5D3000" strokeWidth="0.2" fill="none" opacity="0.2" />
        </pattern>
        {/* Top surface pattern */}
        <pattern id="tableTopPattern" width="20" height="8" patternUnits="userSpaceOnUse">
          <line x1="0" y1="2" x2="20" y2="2" stroke="#9A5020" strokeWidth="0.3" opacity="0.3" />
          <line x1="0" y1="5" x2="20" y2="5" stroke="#6B3A0A" strokeWidth="0.2" opacity="0.2" />
          <ellipse cx="10" cy="4" rx="3" ry="1" fill="#5D3000" opacity="0.1" />
        </pattern>
        {/* Shadow gradient */}
        <linearGradient id="tableShadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="40" cy="47" rx="35" ry="3" fill="#000000" opacity="0.2" />

      {/* Left leg / Linkes Bein */}
      <rect x="5" y="10" width="6" height="36" fill="url(#tableLegGradient)" />
      <rect x="5" y="10" width="6" height="36" fill="url(#tableWoodGrain)" />
      {/* Leg detail lines */}
      <line x1="6" y1="10" x2="6" y2="46" stroke="#4D2500" strokeWidth="0.5" />
      <line x1="10" y1="10" x2="10" y2="46" stroke="#A0522D" strokeWidth="0.3" />
      {/* Leg shadow */}
      <rect x="11" y="12" width="2" height="34" fill="url(#tableShadowGradient)" />

      {/* Right leg / Rechtes Bein */}
      <rect x="69" y="10" width="6" height="36" fill="url(#tableLegGradient)" />
      <rect x="69" y="10" width="6" height="36" fill="url(#tableWoodGrain)" />
      {/* Leg detail lines */}
      <line x1="70" y1="10" x2="70" y2="46" stroke="#4D2500" strokeWidth="0.5" />
      <line x1="74" y1="10" x2="74" y2="46" stroke="#A0522D" strokeWidth="0.3" />

      {/* Cross support / Querstrebe */}
      <rect x="10" y="28" width="60" height="4" fill="url(#tableLegGradient)" />
      <rect x="10" y="28" width="60" height="4" fill="url(#tableWoodGrain)" opacity="0.5" />

      {/* Tabletop front edge / Tischplatte Vorderkante */}
      <rect x="0" y="6" width="80" height="4" fill="url(#tableTopSideGradient)" rx="1" />

      {/* Tabletop / Tischplatte */}
      <rect x="0" y="0" width="80" height="7" fill="url(#tableTopGradient)" rx="2" />
      <rect x="0" y="0" width="80" height="7" fill="url(#tableTopPattern)" />

      {/* Tabletop edge highlight */}
      <rect x="1" y="1" width="78" height="1" fill="#B8763D" opacity="0.5" rx="0.5" />

      {/* Wood knot details */}
      <ellipse cx="25" cy="3.5" rx="2" ry="1.2" fill="#6B3A0A" opacity="0.3" />
      <ellipse cx="60" cy="4" rx="1.5" ry="1" fill="#5D3000" opacity="0.25" />

      {/* Surface shine */}
      <rect x="5" y="1.5" width="30" height="0.5" fill="#FFFFFF" opacity="0.15" rx="0.25" />
      <rect x="45" y="1.5" width="25" height="0.5" fill="#FFFFFF" opacity="0.1" rx="0.25" />
    </svg>
  );
}
