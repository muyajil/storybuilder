/**
 * Sunflower Sprite Component
 * High quality with petal gradients, seed texture, and natural stem details
 */

import type { ElementProps } from '../types';

export function Sunflower({ x = 0, y = 0, size = 50, color = '#FFD700' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.6}
      viewBox="0 0 50 80"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Stem gradient */}
        <linearGradient id="sunflowerStemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a5a1a" />
          <stop offset="30%" stopColor="#228B22" />
          <stop offset="70%" stopColor="#2a8a2a" />
          <stop offset="100%" stopColor="#1a6a1a" />
        </linearGradient>
        {/* Leaf gradient */}
        <linearGradient id="sunflowerLeafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a9a2a" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#1a6a1a" />
        </linearGradient>
        {/* Petal gradient */}
        <linearGradient id="sunflowerPetalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEE44" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#E6B800" />
        </linearGradient>
        {/* Inner petal gradient */}
        <linearGradient id="sunflowerPetalInnerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#CC9900" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#FFEE44" />
        </linearGradient>
        {/* Seed center gradient */}
        <radialGradient id="sunflowerCenterGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#8B5A2B" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5D3A1A" />
        </radialGradient>
        {/* Inner seed ring */}
        <radialGradient id="sunflowerSeedGradient" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="60%" stopColor="#654321" />
          <stop offset="100%" stopColor="#4A3219" />
        </radialGradient>
        {/* Seed pattern */}
        <pattern id="sunflowerSeedPattern" width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="#3D2817" />
        </pattern>
      </defs>

      {/* Stem / Stiel */}
      <rect x="22" y="35" width="6" height="45" fill="url(#sunflowerStemGradient)" />
      {/* Stem detail line */}
      <line x1="24" y1="35" x2="24" y2="80" stroke="#1a5a1a" strokeWidth="0.5" />
      <line x1="26" y1="35" x2="26" y2="80" stroke="#2a8a2a" strokeWidth="0.5" />

      {/* Leaves / Blätter */}
      <ellipse cx="15" cy="55" rx="14" ry="7" fill="url(#sunflowerLeafGradient)" transform="rotate(-30 15 55)" />
      <ellipse cx="15" cy="55" rx="12" ry="5" fill="#228B22" opacity="0.7" transform="rotate(-30 15 55)" />
      {/* Leaf vein */}
      <path d="M8 52 Q15 55 22 58" stroke="#1a5a1a" strokeWidth="0.5" fill="none" transform="rotate(-30 15 55)" />

      <ellipse cx="35" cy="60" rx="12" ry="6" fill="url(#sunflowerLeafGradient)" transform="rotate(30 35 60)" />
      <ellipse cx="35" cy="60" rx="10" ry="4" fill="#228B22" opacity="0.7" transform="rotate(30 35 60)" />
      {/* Leaf vein */}
      <path d="M28 58 Q35 60 42 62" stroke="#1a5a1a" strokeWidth="0.5" fill="none" transform="rotate(30 35 60)" />

      {/* Back petals layer / Hintere Blütenblätter */}
      {[...Array(12)].map((_, i) => {
        const petalAngle = i * Math.PI / 6;
        const cx = 25 + Math.cos(petalAngle) * 16;
        const cy = 20 + Math.sin(petalAngle) * 16;
        return (
          <ellipse
            key={`back-${i}`}
            cx={cx}
            cy={cy}
            rx="9"
            ry="4.5"
            fill="#CC9900"
            opacity="0.6"
            transform={`rotate(${i * 30} ${cx} ${cy})`}
          />
        );
      })}

      {/* Main petals / Blütenblätter */}
      {[...Array(12)].map((_, i) => {
        const petalAngle = i * Math.PI / 6;
        const cx = 25 + Math.cos(petalAngle) * 15;
        const cy = 20 + Math.sin(petalAngle) * 15;
        return (
          <g key={`petal-${i}`}>
            <ellipse
              cx={cx}
              cy={cy}
              rx="8"
              ry="4"
              fill="url(#sunflowerPetalGradient)"
              transform={`rotate(${i * 30} ${cx} ${cy})`}
            />
            {/* Petal highlight */}
            <ellipse
              cx={cx}
              cy={cy}
              rx="6"
              ry="2"
              fill="#FFEE88"
              opacity="0.4"
              transform={`rotate(${i * 30} ${cx} ${cy})`}
            />
          </g>
        );
      })}

      {/* Center / Mitte */}
      <circle cx="25" cy="20" r="11" fill="url(#sunflowerCenterGradient)" />
      <circle cx="25" cy="20" r="9" fill="url(#sunflowerSeedGradient)" />

      {/* Seed pattern overlay */}
      <circle cx="25" cy="20" r="8" fill="url(#sunflowerSeedPattern)" opacity="0.5" />

      {/* Spiral seed arrangement */}
      {[...Array(5)].map((_, ring) => (
        [...Array(6 + ring * 2)].map((_, seed) => {
          const angle = seed * (2 * Math.PI / (6 + ring * 2)) + ring * 0.3;
          const r = 2 + ring * 1.5;
          const seedX = 25 + Math.cos(angle) * r;
          const seedY = 20 + Math.sin(angle) * r;
          return (
            <circle
              key={`seed-${ring}-${seed}`}
              cx={seedX}
              cy={seedY}
              r="0.8"
              fill="#2D1F10"
              opacity="0.7"
            />
          );
        })
      ))}

      {/* Center highlight */}
      <circle cx="23" cy="18" r="3" fill="#A0522D" opacity="0.4" />
    </svg>
  );
}
