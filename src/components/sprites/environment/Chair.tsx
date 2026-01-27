/**
 * Chair Sprite Component
 * Enhanced with wood grain textures, 3D depth, and realistic details
 */

import type { ElementProps } from '../types';

export function Chair({ x = 0, y = 0, size = 50, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main wood gradient */}
        <linearGradient id="chairWoodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6a3a1a" />
          <stop offset="25%" stopColor={color} />
          <stop offset="50%" stopColor="#9a5a23" />
          <stop offset="75%" stopColor={color} />
          <stop offset="100%" stopColor="#6a3a1a" />
        </linearGradient>
        {/* Vertical wood gradient for legs */}
        <linearGradient id="chairLegGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5a3010" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#7a4518" />
          <stop offset="100%" stopColor="#5a3010" />
        </linearGradient>
        {/* Seat top gradient */}
        <linearGradient id="chairSeatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9a5a23" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#6a3a1a" />
        </linearGradient>
        {/* Wood grain pattern */}
        <pattern id="chairWoodPattern" patternUnits="userSpaceOnUse" width="8" height="50">
          <path d="M0 0 Q4 25 0 50" fill="none" stroke="#5a3010" strokeWidth="0.3" opacity="0.3" />
          <path d="M4 0 Q8 25 4 50" fill="none" stroke="#5a3010" strokeWidth="0.3" opacity="0.2" />
        </pattern>
        {/* Shadow filter */}
        <filter id="chairShadow">
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="22" cy="49" rx="18" ry="2" fill="#000" opacity="0.2" />

      <g filter="url(#chairShadow)">
        {/* Back legs (behind) */}
        <rect x="5" y="28" width="5" height="22" fill="url(#chairLegGradient)" rx="1" />
        <rect x="6" y="29" width="1.5" height="20" fill="white" opacity="0.1" />
        <rect x="30" y="28" width="5" height="22" fill="url(#chairLegGradient)" rx="1" />
        <rect x="31" y="29" width="1.5" height="20" fill="white" opacity="0.1" />

        {/* Back support - top rail */}
        <rect x="4" y="4" width="32" height="5" fill="url(#chairWoodGradient)" rx="2" />
        <rect x="4" y="4" width="32" height="5" fill="url(#chairWoodPattern)" rx="2" />
        <rect x="5" y="5" width="30" height="1.5" fill="white" opacity="0.15" rx="1" />

        {/* Back support - left vertical */}
        <rect x="4" y="4" width="6" height="26" fill="url(#chairLegGradient)" rx="2" />
        <rect x="4" y="4" width="6" height="26" fill="url(#chairWoodPattern)" rx="2" />
        <rect x="5" y="5" width="2" height="24" fill="white" opacity="0.1" rx="1" />

        {/* Back support - right vertical */}
        <rect x="30" y="4" width="6" height="26" fill="url(#chairLegGradient)" rx="2" />
        <rect x="30" y="4" width="6" height="26" fill="url(#chairWoodPattern)" rx="2" />
        <rect x="31" y="5" width="2" height="24" fill="white" opacity="0.1" rx="1" />

        {/* Back support - middle horizontal slats */}
        <rect x="10" y="10" width="20" height="3" fill="url(#chairWoodGradient)" rx="1" />
        <rect x="10" y="16" width="20" height="3" fill="url(#chairWoodGradient)" rx="1" />
        <rect x="10" y="22" width="20" height="3" fill="url(#chairWoodGradient)" rx="1" />

        {/* Seat */}
        <rect x="4" y="25" width="36" height="6" fill="url(#chairSeatGradient)" rx="1" />
        <rect x="4" y="25" width="36" height="6" fill="url(#chairWoodPattern)" rx="1" />
        {/* Seat highlight */}
        <rect x="5" y="26" width="34" height="2" fill="white" opacity="0.15" rx="0.5" />
        {/* Seat edge shadow */}
        <rect x="4" y="29" width="36" height="2" fill="#000" opacity="0.1" rx="0.5" />

        {/* Front legs */}
        <rect x="5" y="31" width="5" height="19" fill="url(#chairLegGradient)" rx="1" />
        <rect x="6" y="32" width="1.5" height="17" fill="white" opacity="0.15" />
        <rect x="35" y="31" width="5" height="19" fill="url(#chairLegGradient)" rx="1" />
        <rect x="36" y="32" width="1.5" height="17" fill="white" opacity="0.15" />

        {/* Front leg cross support */}
        <rect x="10" y="40" width="25" height="3" fill="url(#chairWoodGradient)" rx="1" />
        <rect x="11" y="40.5" width="23" height="1" fill="white" opacity="0.1" rx="0.5" />

        {/* Side supports (connecting legs) */}
        <rect x="7" y="35" width="3" height="3" fill={color} rx="0.5" />
        <rect x="32" y="35" width="3" height="3" fill={color} rx="0.5" />
      </g>
    </svg>
  );
}
