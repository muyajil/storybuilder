/**
 * Banana Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Banana({ x = 0, y = 0, size = 28, color = '#FFD700' }: EffectProps) {
  const id = `banana-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main banana gradient */}
        <linearGradient id={`${id}-body`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEC8B" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Glow effect */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Highlight gradient */}
        <linearGradient id={`${id}-shine`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="50%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Stem gradient */}
        <linearGradient id={`${id}-stem`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5D3A1A" />
        </linearGradient>
        {/* Edge shadow */}
        <linearGradient id={`${id}-shadow`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B7355" stopOpacity="0" />
          <stop offset="100%" stopColor="#5D4E37" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Outer glow */}
      <path d="M4 26 Q0 16 4 6 Q12 0 22 2 Q14 4 8 12 Q4 20 6 26 Z" fill={`url(#${id}-glow)`} />

      {/* Main banana body */}
      <path d="M6 24 Q2 16 6 8 Q12 2 20 4 Q14 6 10 12 Q6 18 8 24 Z" fill={`url(#${id}-body)`} />

      {/* Inner shadow for depth */}
      <path d="M6 24 Q2 16 6 8 Q12 2 20 4 Q14 6 10 12 Q6 18 8 24 Z" fill={`url(#${id}-shadow)`} />

      {/* Highlight stripe */}
      <path d="M8 20 Q5 14 9 8 Q13 4 17 5" stroke={`url(#${id}-shine)`} strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Secondary highlight */}
      <path d="M7 18 Q5 14 8 10" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* Brown ridge lines */}
      <path d="M8 22 Q4 16 8 10 Q12 6 18 6" stroke="#8B4513" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M7 23 Q3 16 7 9 Q11 4 17 4" stroke="#654321" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Stem */}
      <ellipse cx="19" cy="5" rx="3.5" ry="2.5" fill={`url(#${id}-stem)`} />
      <ellipse cx="18" cy="4" rx="1.5" ry="1" fill="#CD853F" opacity="0.6" />

      {/* Sparkle effects */}
      <circle cx="7" cy="12" r="0.8" fill="white" opacity="0.9" />
      <circle cx="9" cy="16" r="0.5" fill="white" opacity="0.7" />
      <circle cx="6" cy="19" r="0.4" fill="white" opacity="0.6" />
    </svg>
  );
}
