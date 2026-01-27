/**
 * PineTree Sprite Component
 * Enhanced with layered branches, textured bark, snow-ready tips, and natural depth
 */

import type { ElementProps } from '../types';

export function PineTree({ x = 0, y = 0, size = 80, color = '#006400' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 80 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Trunk bark gradient */}
        <linearGradient id="pineTreeTrunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5A3A1A" />
          <stop offset="30%" stopColor="#7A4A2A" />
          <stop offset="50%" stopColor="#8B5230" />
          <stop offset="70%" stopColor="#7A4A2A" />
          <stop offset="100%" stopColor="#4A2A10" />
        </linearGradient>

        {/* Foliage gradients for depth */}
        <linearGradient id="pineTreeFoliageTop" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#0A8A0A" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#003000" />
        </linearGradient>

        <linearGradient id="pineTreeFoliageMid" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#008000" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#002800" />
        </linearGradient>

        <linearGradient id="pineTreeFoliageBase" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#007000" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#002000" />
        </linearGradient>

        {/* Shadow gradient */}
        <linearGradient id="pineTreeShadow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="rgba(0,0,0,0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="40" cy="118" rx="25" ry="4" fill="rgba(0,0,0,0.2)" />

      {/* Trunk with bark texture */}
      <rect x="35" y="90" width="10" height="30" fill="url(#pineTreeTrunkGrad)" />
      {/* Bark detail lines */}
      <line x1="36" y1="92" x2="36" y2="118" stroke="#4A2A10" strokeWidth="0.5" opacity="0.5" />
      <line x1="39" y1="90" x2="39" y2="120" stroke="#4A2A10" strokeWidth="0.5" opacity="0.5" />
      <line x1="43" y1="92" x2="43" y2="118" stroke="#4A2A10" strokeWidth="0.5" opacity="0.5" />

      {/* Back shadow layer */}
      <polygon points="40,5 8,42 72,42" fill="rgba(0,40,0,0.5)" />
      <polygon points="40,25 3,72 77,72" fill="rgba(0,40,0,0.5)" />
      <polygon points="40,50 -2,102 82,102" fill="rgba(0,40,0,0.5)" />

      {/* Base layer - darkest */}
      <polygon points="40,45 0,100 80,100" fill="url(#pineTreeFoliageBase)" />
      {/* Branch texture on base */}
      <line x1="40" y1="50" x2="10" y2="95" stroke="#003500" strokeWidth="2" opacity="0.4" />
      <line x1="40" y1="50" x2="70" y2="95" stroke="#003500" strokeWidth="2" opacity="0.4" />
      <line x1="40" y1="55" x2="20" y2="90" stroke="#004000" strokeWidth="1.5" opacity="0.3" />
      <line x1="40" y1="55" x2="60" y2="90" stroke="#004000" strokeWidth="1.5" opacity="0.3" />

      {/* Middle layer */}
      <polygon points="40,20 5,70 75,70" fill="url(#pineTreeFoliageMid)" />
      {/* Branch texture on mid */}
      <line x1="40" y1="25" x2="15" y2="65" stroke="#003500" strokeWidth="1.5" opacity="0.4" />
      <line x1="40" y1="25" x2="65" y2="65" stroke="#003500" strokeWidth="1.5" opacity="0.4" />

      {/* Top layer - lightest */}
      <polygon points="40,0 10,40 70,40" fill="url(#pineTreeFoliageTop)" />
      {/* Branch texture on top */}
      <line x1="40" y1="5" x2="20" y2="35" stroke="#003500" strokeWidth="1" opacity="0.4" />
      <line x1="40" y1="5" x2="60" y2="35" stroke="#003500" strokeWidth="1" opacity="0.4" />

      {/* Highlight edges */}
      <polygon points="40,0 35,8 40,5 45,8" fill="#0A9A0A" opacity="0.6" />
      <line x1="10" y1="40" x2="25" y2="35" stroke="#0A8A0A" strokeWidth="1.5" opacity="0.5" />
      <line x1="5" y1="70" x2="22" y2="62" stroke="#008A00" strokeWidth="1.5" opacity="0.4" />
      <line x1="0" y1="100" x2="20" y2="90" stroke="#007A00" strokeWidth="2" opacity="0.4" />

      {/* Snow caps (subtle, can be enhanced) */}
      <path d="M38 2 Q40 -1 42 2 Q41 3 40 2 Q39 3 38 2" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}
