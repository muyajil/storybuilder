/**
 * Bed Sprite Component
 * Enhanced with fabric textures, wood grain, and soft shadows
 */

import type { ElementProps } from '../types';

export function Bed({ x = 0, y = 0, size = 100, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Wood frame gradient */}
        <linearGradient id="bedWoodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6a3a1a" />
          <stop offset="20%" stopColor={color} />
          <stop offset="50%" stopColor="#9a5523" />
          <stop offset="80%" stopColor={color} />
          <stop offset="100%" stopColor="#6a3a1a" />
        </linearGradient>
        {/* Headboard gradient */}
        <linearGradient id="bedHeadboardGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5a3010" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#5a3010" />
        </linearGradient>
        {/* Mattress gradient */}
        <linearGradient id="bedMattressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" />
          <stop offset="30%" stopColor="#f8f8f8" />
          <stop offset="100%" stopColor="#e8e8e8" />
        </linearGradient>
        {/* Pillow gradient for softness */}
        <radialGradient id="bedPillowGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="white" />
          <stop offset="70%" stopColor="#f5f5f5" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </radialGradient>
        {/* Blanket gradient */}
        <linearGradient id="bedBlanketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5a79d1" />
          <stop offset="30%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#2a4aa0" />
        </linearGradient>
        {/* Blanket fold highlight */}
        <linearGradient id="bedBlanketHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6a89e1" />
          <stop offset="100%" stopColor="#4169E1" />
        </linearGradient>
        {/* Shadow filter */}
        <filter id="bedShadow">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Floor shadow */}
      <ellipse cx="50" cy="58" rx="48" ry="4" fill="#000" opacity="0.15" />

      <g filter="url(#bedShadow)">
        {/* Bed frame base */}
        <rect x="0" y="30" width="100" height="25" fill="url(#bedWoodGradient)" rx="2" />
        {/* Frame highlight */}
        <rect x="2" y="31" width="96" height="3" fill="white" opacity="0.1" rx="1" />
        {/* Wood grain details */}
        <line x1="20" y1="32" x2="20" y2="53" stroke="#5a3010" strokeWidth="0.5" opacity="0.3" />
        <line x1="40" y1="32" x2="40" y2="53" stroke="#5a3010" strokeWidth="0.5" opacity="0.3" />
        <line x1="60" y1="32" x2="60" y2="53" stroke="#5a3010" strokeWidth="0.5" opacity="0.3" />
        <line x1="80" y1="32" x2="80" y2="53" stroke="#5a3010" strokeWidth="0.5" opacity="0.3" />

        {/* Headboard */}
        <rect x="0" y="5" width="12" height="50" fill="url(#bedHeadboardGradient)" rx="3" />
        {/* Headboard carving detail */}
        <rect x="2" y="10" width="8" height="20" fill="none" stroke="#5a3010" strokeWidth="1" rx="2" opacity="0.3" />
        {/* Headboard highlight */}
        <rect x="1" y="6" width="3" height="48" fill="white" opacity="0.1" rx="1" />

        {/* Footboard */}
        <rect x="88" y="18" width="12" height="37" fill="url(#bedHeadboardGradient)" rx="3" />
        {/* Footboard highlight */}
        <rect x="89" y="19" width="3" height="35" fill="white" opacity="0.1" rx="1" />

        {/* Mattress */}
        <rect x="12" y="24" width="76" height="16" fill="url(#bedMattressGradient)" rx="3" />
        {/* Mattress quilting lines */}
        <line x1="25" y1="26" x2="25" y2="38" stroke="#ddd" strokeWidth="0.5" />
        <line x1="40" y1="26" x2="40" y2="38" stroke="#ddd" strokeWidth="0.5" />
        <line x1="55" y1="26" x2="55" y2="38" stroke="#ddd" strokeWidth="0.5" />
        <line x1="70" y1="26" x2="70" y2="38" stroke="#ddd" strokeWidth="0.5" />
        {/* Mattress side shadow */}
        <rect x="12" y="36" width="76" height="4" fill="#000" opacity="0.05" rx="1" />

        {/* Pillow with soft shading */}
        <ellipse cx="24" cy="31" rx="11" ry="6" fill="url(#bedPillowGradient)" />
        {/* Pillow indent/crease */}
        <path d="M16 31 Q24 33 32 31" fill="none" stroke="#ddd" strokeWidth="0.5" />
        {/* Pillow highlight */}
        <ellipse cx="20" cy="28" rx="4" ry="2" fill="white" opacity="0.4" />

        {/* Blanket/comforter */}
        <rect x="36" y="26" width="50" height="14" fill="url(#bedBlanketGradient)" rx="3" />
        {/* Blanket fold at top */}
        <rect x="36" y="26" width="50" height="4" fill="url(#bedBlanketHighlight)" rx="2" />
        {/* Blanket texture lines */}
        <line x1="45" y1="28" x2="45" y2="38" stroke="#3a59c1" strokeWidth="0.5" opacity="0.3" />
        <line x1="60" y1="28" x2="60" y2="38" stroke="#3a59c1" strokeWidth="0.5" opacity="0.3" />
        <line x1="75" y1="28" x2="75" y2="38" stroke="#3a59c1" strokeWidth="0.5" opacity="0.3" />
        {/* Blanket edge detail */}
        <path d="M36 40 L86 40" stroke="#2a4aa0" strokeWidth="1" />

        {/* Bed legs */}
        <rect x="2" y="55" width="8" height="5" fill="url(#bedWoodGradient)" rx="1" />
        <rect x="90" y="55" width="8" height="5" fill="url(#bedWoodGradient)" rx="1" />
      </g>
    </svg>
  );
}
