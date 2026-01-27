/**
 * Bench Sprite Component
 * Enhanced with wood grain textures, metal details, and depth
 */

import type { ElementProps } from '../types';

export function Bench({ x = 0, y = 0, size = 70, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 70 35"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Wood plank gradient */}
        <linearGradient id="benchWoodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6a3a1a" />
          <stop offset="15%" stopColor={color} />
          <stop offset="50%" stopColor="#9a5523" />
          <stop offset="85%" stopColor={color} />
          <stop offset="100%" stopColor="#6a3a1a" />
        </linearGradient>
        {/* Wood vertical gradient for supports */}
        <linearGradient id="benchSupportGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9a5523" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#6a3a1a" />
        </linearGradient>
        {/* Metal leg gradient */}
        <linearGradient id="benchMetalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="30%" stopColor="#5a5a5a" />
          <stop offset="70%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>
        {/* Wood grain pattern */}
        <pattern id="benchWoodPattern" patternUnits="userSpaceOnUse" width="8" height="6">
          <path d="M0 0 Q4 3 8 0" fill="none" stroke="#5a3010" strokeWidth="0.3" opacity="0.2" />
          <path d="M0 3 Q4 6 8 3" fill="none" stroke="#5a3010" strokeWidth="0.3" opacity="0.2" />
        </pattern>
        {/* Shadow filter */}
        <filter id="benchShadow">
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="35" cy="34" rx="30" ry="2" fill="#000" opacity="0.2" />

      <g filter="url(#benchShadow)">
        {/* Backrest plank 1 */}
        <rect x="5" y="2" width="60" height="3" fill="url(#benchWoodGradient)" rx="1" />
        <rect x="5" y="2" width="60" height="3" fill="url(#benchWoodPattern)" />
        <rect x="6" y="2.5" width="58" height="1" fill="white" opacity="0.15" rx="0.5" />

        {/* Backrest plank 2 */}
        <rect x="5" y="6" width="60" height="3" fill="url(#benchWoodGradient)" rx="1" />
        <rect x="5" y="6" width="60" height="3" fill="url(#benchWoodPattern)" />
        <rect x="6" y="6.5" width="58" height="1" fill="white" opacity="0.15" rx="0.5" />

        {/* Vertical support left */}
        <rect x="7" y="2" width="5" height="14" fill="url(#benchSupportGradient)" rx="1" />
        <rect x="8" y="3" width="1.5" height="12" fill="white" opacity="0.1" />

        {/* Vertical support right */}
        <rect x="58" y="2" width="5" height="14" fill="url(#benchSupportGradient)" rx="1" />
        <rect x="59" y="3" width="1.5" height="12" fill="white" opacity="0.1" />

        {/* Seat plank */}
        <rect x="5" y="10" width="60" height="7" fill="url(#benchWoodGradient)" rx="1" />
        <rect x="5" y="10" width="60" height="7" fill="url(#benchWoodPattern)" />
        {/* Seat highlight */}
        <rect x="6" y="11" width="58" height="2" fill="white" opacity="0.15" rx="0.5" />
        {/* Seat edge shadow */}
        <rect x="5" y="15" width="60" height="2" fill="#000" opacity="0.1" rx="0.5" />

        {/* Seat wood grain lines */}
        <line x1="15" y1="11" x2="15" y2="16" stroke="#5a3010" strokeWidth="0.4" opacity="0.3" />
        <line x1="30" y1="11" x2="30" y2="16" stroke="#5a3010" strokeWidth="0.4" opacity="0.3" />
        <line x1="45" y1="11" x2="45" y2="16" stroke="#5a3010" strokeWidth="0.4" opacity="0.3" />
        <line x1="55" y1="11" x2="55" y2="16" stroke="#5a3010" strokeWidth="0.4" opacity="0.3" />

        {/* Metal legs */}
        {/* Left leg */}
        <rect x="9" y="17" width="5" height="18" fill="url(#benchMetalGradient)" rx="1" />
        <rect x="10" y="17" width="1.5" height="18" fill="#6a6a6a" opacity="0.3" />
        {/* Left leg foot */}
        <rect x="8" y="33" width="7" height="2" fill="#3a3a3a" rx="0.5" />

        {/* Right leg */}
        <rect x="56" y="17" width="5" height="18" fill="url(#benchMetalGradient)" rx="1" />
        <rect x="57" y="17" width="1.5" height="18" fill="#6a6a6a" opacity="0.3" />
        {/* Right leg foot */}
        <rect x="55" y="33" width="7" height="2" fill="#3a3a3a" rx="0.5" />

        {/* Cross support between legs */}
        <rect x="14" y="25" width="42" height="2" fill="url(#benchMetalGradient)" rx="0.5" />
        <rect x="15" y="25.5" width="40" height="0.5" fill="#6a6a6a" opacity="0.3" />

        {/* Bolts/screws detail */}
        <circle cx="9.5" cy="12" r="1" fill="#5a5a5a" />
        <circle cx="60.5" cy="12" r="1" fill="#5a5a5a" />
        <circle cx="9.5" cy="5" r="1" fill="#5a5a5a" />
        <circle cx="60.5" cy="5" r="1" fill="#5a5a5a" />
      </g>
    </svg>
  );
}
