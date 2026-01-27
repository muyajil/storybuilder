/**
 * BeachChair Sprite Component
 * Enhanced with fabric textures, wood grain, and depth
 */

import type { ElementProps } from '../types';

export function BeachChair({ x = 0, y = 0, size = 60, color = '#4169E1' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Fabric gradient for depth */}
        <linearGradient id="beachChairFabricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#2a4a9a" />
          <stop offset="100%" stopColor="#1a3a7a" />
        </linearGradient>
        {/* Stripe gradient for white bands */}
        <linearGradient id="beachChairStripeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f0f0f0" />
          <stop offset="50%" stopColor="white" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </linearGradient>
        {/* Wood frame gradient */}
        <linearGradient id="beachChairWoodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6a3a1a" />
          <stop offset="30%" stopColor="#8B4513" />
          <stop offset="70%" stopColor="#9a5523" />
          <stop offset="100%" stopColor="#6a3a1a" />
        </linearGradient>
        {/* Top edge fabric gradient */}
        <linearGradient id="beachChairEdgeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5a79d1" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        {/* Shadow filter */}
        <filter id="beachChairShadow">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.3" />
        </filter>
        {/* Fabric texture pattern */}
        <pattern id="beachChairFabricPattern" patternUnits="userSpaceOnUse" width="4" height="4">
          <rect width="4" height="4" fill="transparent" />
          <line x1="0" y1="0" x2="4" y2="0" stroke="#000" strokeWidth="0.2" opacity="0.1" />
          <line x1="0" y1="2" x2="4" y2="2" stroke="#000" strokeWidth="0.2" opacity="0.1" />
        </pattern>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="30" cy="58" rx="22" ry="3" fill="#000" opacity="0.2" />

      <g filter="url(#beachChairShadow)">
        {/* Back panel with fabric gradient */}
        <path d="M10 15 L10 55 L50 55 L50 15 Q30 5 10 15" fill="url(#beachChairFabricGradient)" />
        {/* Fabric texture overlay */}
        <path d="M10 15 L10 55 L50 55 L50 15 Q30 5 10 15" fill="url(#beachChairFabricPattern)" />

        {/* Stripes with gradient and slight shadow */}
        <rect x="15" y="20" width="30" height="6" fill="url(#beachChairStripeGradient)" rx="1" />
        <rect x="15" y="21" width="30" height="2" fill="white" opacity="0.5" rx="0.5" />

        <rect x="15" y="31" width="30" height="6" fill="url(#beachChairStripeGradient)" rx="1" />
        <rect x="15" y="32" width="30" height="2" fill="white" opacity="0.5" rx="0.5" />

        <rect x="15" y="42" width="30" height="6" fill="url(#beachChairStripeGradient)" rx="1" />
        <rect x="15" y="43" width="30" height="2" fill="white" opacity="0.5" rx="0.5" />

        {/* Seat with wood grain */}
        <rect x="6" y="50" width="48" height="9" fill="url(#beachChairWoodGradient)" rx="2" />
        {/* Wood grain lines */}
        <line x1="10" y1="52" x2="10" y2="57" stroke="#5a3010" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="52" x2="20" y2="57" stroke="#5a3010" strokeWidth="0.5" opacity="0.3" />
        <line x1="30" y1="52" x2="30" y2="57" stroke="#5a3010" strokeWidth="0.5" opacity="0.3" />
        <line x1="40" y1="52" x2="40" y2="57" stroke="#5a3010" strokeWidth="0.5" opacity="0.3" />
        <line x1="50" y1="52" x2="50" y2="57" stroke="#5a3010" strokeWidth="0.5" opacity="0.3" />
        {/* Seat highlight */}
        <rect x="8" y="51" width="44" height="2" fill="white" opacity="0.15" rx="1" />

        {/* Top curved edge with piping */}
        <path d="M5 15 Q30 3 55 15" fill="none" stroke="url(#beachChairEdgeGradient)" strokeWidth="5" strokeLinecap="round" />
        {/* Edge highlight */}
        <path d="M7 14 Q30 4 53 14" fill="none" stroke="white" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      </g>

      {/* Side frame details */}
      <line x1="10" y1="15" x2="10" y2="55" stroke="#5a3a20" strokeWidth="2" />
      <line x1="50" y1="15" x2="50" y2="55" stroke="#5a3a20" strokeWidth="2" />
    </svg>
  );
}
