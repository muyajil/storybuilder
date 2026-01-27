/**
 * Life Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Life({ x = 0, y = 0, size = 40, count = 3 }: EffectProps & { count?: number }) {
  const id = `life-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 40 32"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main heart gradient */}
        <radialGradient id={`${id}-heart`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="40%" stopColor="#FF0000" />
          <stop offset="80%" stopColor="#DC143C" />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF0000" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
        </radialGradient>
        {/* Highlight gradient */}
        <radialGradient id={`${id}-highlight`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Text shadow */}
        <filter id={`${id}-shadow`}>
          <feDropShadow dx="1" dy="1" stdDeviation="0.5" floodColor="#000" floodOpacity="0.5" />
        </filter>
        {/* Glow filter */}
        <filter id={`${id}-filter`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <path
        d="M20 30 C6 22 0 14 0 8 C0 1 6 -2 12 -2 C15 -2 18 0 20 3 C22 0 25 -2 28 -2 C34 -2 40 1 40 8 C40 14 34 22 20 30"
        fill={`url(#${id}-glow)`}
      />

      {/* Main heart */}
      <path
        d="M20 28 C8 20 2 14 2 8 C2 3 6 0 11 0 C14 0 17 2 20 5 C23 2 26 0 29 0 C34 0 38 3 38 8 C38 14 32 20 20 28"
        fill={`url(#${id}-heart)`}
        filter={`url(#${id}-filter)`}
      />

      {/* Inner shadow for depth */}
      <path
        d="M20 26 C9 19 4 13 4 8 C4 4 7 2 11 2 C14 2 17 4 20 7 C23 4 26 2 29 2 C33 2 36 4 36 8 C36 13 31 19 20 26"
        fill="none"
        stroke="#8B0000"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Left lobe highlight */}
      <ellipse cx="10" cy="7" rx="4" ry="3" fill={`url(#${id}-highlight)`} opacity="0.8" />

      {/* Secondary highlight */}
      <ellipse cx="8" cy="5" rx="2" ry="1.5" fill="white" opacity="0.7" />

      {/* Right lobe subtle highlight */}
      <ellipse cx="30" cy="8" rx="2.5" ry="2" fill="white" opacity="0.25" />

      {/* Count text shadow */}
      <text
        x="21"
        y="19"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#000"
        opacity="0.3"
      >
        x{count}
      </text>

      {/* Count text */}
      <text
        x="20"
        y="18"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="white"
        filter={`url(#${id}-shadow)`}
      >
        x{count}
      </text>

      {/* Sparkle effects */}
      <circle cx="7" cy="4" r="1" fill="white" opacity="0.95" filter={`url(#${id}-filter)`} />
      <circle cx="11" cy="3" r="0.6" fill="white" opacity="0.8" />
      <circle cx="5" cy="7" r="0.4" fill="white" opacity="0.6" />
      <circle cx="33" cy="5" r="0.5" fill="white" opacity="0.5" />
    </svg>
  );
}
