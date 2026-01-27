/**
 * Heart Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Heart({ x = 0, y = 0, size = 30, color = '#FF0000' }: EffectProps) {
  const id = `heart-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main heart gradient */}
        <radialGradient id={`${id}-body`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="40%" stopColor={color} />
          <stop offset="80%" stopColor="#DC143C" />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Highlight gradient */}
        <radialGradient id={`${id}-highlight`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
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
        d="M15 30 C3 22 -2 14 -2 8 C-2 1 4 -2 10 -2 C13 -2 15 0 15 2 C15 0 17 -2 20 -2 C26 -2 32 1 32 8 C32 14 27 22 15 30"
        fill={`url(#${id}-glow)`}
      />

      {/* Main heart shape */}
      <path
        d="M15 28 C5 20 0 12 0 8 C0 2 5 0 10 0 C12 0 14 1 15 3 C16 1 18 0 20 0 C25 0 30 2 30 8 C30 12 25 20 15 28"
        fill={`url(#${id}-body)`}
        filter={`url(#${id}-filter)`}
      />

      {/* Inner depth shadow */}
      <path
        d="M15 26 C6 19 2 12 2 8 C2 4 6 2 10 2 C12 2 14 3 15 5 C16 3 18 2 20 2 C24 2 28 4 28 8 C28 12 24 19 15 26"
        fill="none"
        stroke="#8B0000"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Left lobe highlight */}
      <ellipse cx="8" cy="8" rx="5" ry="4" fill={`url(#${id}-highlight)`} opacity="0.8" />

      {/* Secondary highlight */}
      <ellipse cx="6" cy="6" rx="2.5" ry="2" fill="white" opacity="0.7" />

      {/* Right lobe subtle highlight */}
      <ellipse cx="22" cy="9" rx="3" ry="2.5" fill="white" opacity="0.25" />

      {/* Center crease shadow */}
      <path
        d="M15 5 Q15 10 15 15"
        stroke="#8B0000"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
        strokeLinecap="round"
      />

      {/* Bottom point highlight */}
      <ellipse cx="15" cy="24" rx="2" ry="1.5" fill="white" opacity="0.15" />

      {/* Sparkle effects */}
      <circle cx="6" cy="5" r="1.2" fill="white" opacity="0.95" filter={`url(#${id}-filter)`} />
      <circle cx="9" cy="4" r="0.7" fill="white" opacity="0.8" />
      <circle cx="4" cy="8" r="0.5" fill="white" opacity="0.6" />
      <circle cx="24" cy="6" r="0.6" fill="white" opacity="0.5" />
      <circle cx="15" cy="2" r="0.4" fill="white" opacity="0.4" />
    </svg>
  );
}
