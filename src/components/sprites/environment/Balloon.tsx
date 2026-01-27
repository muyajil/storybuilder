/**
 * Balloon Sprite Component
 * Enhanced with smooth gradients, realistic shine, and depth
 */

import type { ElementProps } from '../types';

export function Balloon({ x = 0, y = 0, size = 40, color = '#FF6347' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 40 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main balloon gradient for 3D effect */}
        <radialGradient id="balloonMainGradient" cx="35%" cy="30%" r="70%" fx="25%" fy="25%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="20%" stopColor={color} stopOpacity="0.9" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#000" stopOpacity="0.3" />
        </radialGradient>
        {/* Highlight shine gradient */}
        <radialGradient id="balloonShineGradient" cx="30%" cy="25%" r="40%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Knot gradient */}
        <linearGradient id="balloonKnotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#000" stopOpacity="0.4" />
        </linearGradient>
        {/* String shadow */}
        <filter id="balloonStringShadow">
          <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.3" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Balloon body with 3D gradient */}
      <ellipse cx="20" cy="18" rx="16" ry="18" fill="url(#balloonMainGradient)" />

      {/* Primary shine highlight */}
      <ellipse cx="14" cy="12" rx="5" ry="7" fill="url(#balloonShineGradient)" />

      {/* Secondary smaller shine */}
      <ellipse cx="10" cy="8" rx="2" ry="3" fill="white" opacity="0.5" />

      {/* Subtle rim light on opposite side */}
      <ellipse cx="28" cy="22" rx="3" ry="6" fill="white" opacity="0.15" />

      {/* Knot with shading */}
      <polygon points="20,36 15,40 20,42 25,40" fill="url(#balloonKnotGradient)" />
      <polygon points="20,36 17,38 20,40 23,38" fill={color} opacity="0.8" />

      {/* String with curve and shadow */}
      <g filter="url(#balloonStringShadow)">
        <path d="M20 42 Q14 48 18 54 Q22 58 20 60" stroke="#444" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M20 42 Q15 47 18 53" stroke="#666" strokeWidth="0.5" fill="none" opacity="0.5" />
      </g>

      {/* Bottom of balloon subtle shadow */}
      <ellipse cx="20" cy="34" rx="8" ry="2" fill="#000" opacity="0.1" />
    </svg>
  );
}
