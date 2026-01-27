/**
 * Apple Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Apple({ x = 0, y = 0, size = 24, color = '#FF0000' }: EffectProps) {
  const id = `apple-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main apple gradient */}
        <radialGradient id={`${id}-body`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>
        {/* Glow effect */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Stem gradient */}
        <linearGradient id={`${id}-stem`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5D3A1A" />
        </linearGradient>
        {/* Leaf gradient */}
        <linearGradient id={`${id}-leaf`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#32CD32" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#006400" />
        </linearGradient>
        {/* Shine highlight */}
        <linearGradient id={`${id}-shine`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Outer glow */}
      <ellipse cx="12" cy="14" rx="12" ry="11" fill={`url(#${id}-glow)`} />

      {/* Main apple body */}
      <ellipse cx="12" cy="14" rx="10" ry="9" fill={`url(#${id}-body)`} />

      {/* Apple indent at top */}
      <ellipse cx="12" cy="6" rx="3" ry="1.5" fill="#8B0000" opacity="0.4" />

      {/* Primary highlight */}
      <ellipse cx="7" cy="11" rx="4" ry="3" fill={`url(#${id}-shine)`} opacity="0.7" />

      {/* Secondary highlight */}
      <ellipse cx="9" cy="13" rx="2" ry="1.5" fill="white" opacity="0.5" />

      {/* Stem */}
      <rect x="11" y="2" width="2" height="5" rx="0.5" fill={`url(#${id}-stem)`} />

      {/* Leaf */}
      <ellipse cx="16" cy="5" rx="4" ry="2.5" fill={`url(#${id}-leaf)`} transform="rotate(30 16 5)" />
      <ellipse cx="16" cy="4.5" rx="2" ry="1" fill="#90EE90" opacity="0.5" transform="rotate(30 16 4.5)" />

      {/* Sparkle effects */}
      <circle cx="6" cy="10" r="0.8" fill="white" opacity="0.9" />
      <circle cx="8" cy="8" r="0.5" fill="white" opacity="0.7" />
      <circle cx="5" cy="12" r="0.4" fill="white" opacity="0.6" />
    </svg>
  );
}
