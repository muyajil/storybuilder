/**
 * PalmTree Sprite Component
 * Enhanced with layered fronds, textured trunk, realistic coconuts, and natural depth
 */

import type { ElementProps } from '../types';

export function PalmTree({ x = 0, y = 0, size = 100, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Trunk bark gradient */}
        <linearGradient id="palmTreeTrunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="30%" stopColor="#8B5A2B" />
          <stop offset="50%" stopColor="#9B6A3B" />
          <stop offset="70%" stopColor="#8B5A2B" />
          <stop offset="100%" stopColor="#5B3413" />
        </linearGradient>

        {/* Frond gradient for depth */}
        <linearGradient id="palmTreeFrondMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#1B7A1B" />
          <stop offset="100%" stopColor="#0D5A0D" />
        </linearGradient>

        <linearGradient id="palmTreeFrondLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2AAB2A" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>

        {/* Coconut gradient */}
        <radialGradient id="palmTreeCoconut" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#A0724A" />
          <stop offset="50%" stopColor="#7B5230" />
          <stop offset="100%" stopColor="#5B3A20" />
        </radialGradient>

        {/* Trunk segment pattern */}
        <pattern id="palmTreeBarkPattern" patternUnits="userSpaceOnUse" width="10" height="8">
          <rect width="10" height="8" fill="#8B5A2B" />
          <path d="M0 4 Q5 2 10 4" stroke="#6B4423" strokeWidth="1" fill="none" />
          <path d="M0 7 Q5 5 10 7" stroke="#5B3413" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>

      {/* Trunk shadow */}
      <path d="M47 120 Q50 80 52 50 Q54 80 57 120" fill="rgba(0,0,0,0.2)" />

      {/* Main trunk with bark texture */}
      <path d="M45 120 Q48 80 50 50 Q52 80 55 120" fill="url(#palmTreeTrunkGradient)" stroke="#5B3413" strokeWidth="1" />

      {/* Trunk ring details */}
      {[...Array(8)].map((_, i) => (
        <path
          key={i}
          d={`M${46 + i * 0.3} ${115 - i * 8} Q${50} ${113 - i * 8} ${54 - i * 0.3} ${115 - i * 8}`}
          stroke="#5B3413"
          strokeWidth="1.5"
          fill="none"
          opacity={0.7}
        />
      ))}

      {/* Coconut cluster */}
      <ellipse cx="46" cy="48" rx="6" ry="5" fill="url(#palmTreeCoconut)" />
      <ellipse cx="54" cy="50" rx="5.5" ry="5" fill="url(#palmTreeCoconut)" />
      <ellipse cx="50" cy="46" rx="5" ry="4.5" fill="url(#palmTreeCoconut)" />
      {/* Coconut highlights */}
      <ellipse cx="44" cy="46" rx="1.5" ry="1" fill="rgba(255,255,255,0.2)" />
      <ellipse cx="52" cy="48" rx="1.5" ry="1" fill="rgba(255,255,255,0.2)" />

      {/* Back layer fronds (darker) */}
      <ellipse cx="25" cy="50" rx="22" ry="7" fill="#0D5A0D" transform="rotate(-55 25 50)" />
      <ellipse cx="75" cy="50" rx="22" ry="7" fill="#0D5A0D" transform="rotate(55 75 50)" />

      {/* Main fronds with gradient */}
      <ellipse cx="30" cy="40" rx="28" ry="9" fill="url(#palmTreeFrondMain)" transform="rotate(-30 30 40)" />
      <ellipse cx="70" cy="40" rx="28" ry="9" fill="url(#palmTreeFrondMain)" transform="rotate(30 70 40)" />
      <ellipse cx="50" cy="25" rx="9" ry="28" fill="url(#palmTreeFrondMain)" />
      <ellipse cx="25" cy="55" rx="24" ry="7" fill="url(#palmTreeFrondMain)" transform="rotate(-60 25 55)" />
      <ellipse cx="75" cy="55" rx="24" ry="7" fill="url(#palmTreeFrondMain)" transform="rotate(60 75 55)" />

      {/* Highlight fronds (lighter) */}
      <ellipse cx="32" cy="38" rx="22" ry="6" fill="url(#palmTreeFrondLight)" transform="rotate(-35 32 38)" opacity="0.7" />
      <ellipse cx="68" cy="38" rx="22" ry="6" fill="url(#palmTreeFrondLight)" transform="rotate(35 68 38)" opacity="0.7" />

      {/* Frond detail lines */}
      <line x1="50" y1="45" x2="50" y2="5" stroke="#1A6A1A" strokeWidth="1.5" />
      <line x1="50" y1="45" x2="20" y2="30" stroke="#1A6A1A" strokeWidth="1" />
      <line x1="50" y1="45" x2="80" y2="30" stroke="#1A6A1A" strokeWidth="1" />
      <line x1="50" y1="48" x2="15" y2="55" stroke="#1A6A1A" strokeWidth="1" />
      <line x1="50" y1="48" x2="85" y2="55" stroke="#1A6A1A" strokeWidth="1" />
    </svg>
  );
}
