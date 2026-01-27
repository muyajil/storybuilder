/**
 * Arrow Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Arrow({ x = 0, y = 0, size = 32, color = '#333', direction = 'right' }: EffectProps & { direction?: 'up' | 'down' | 'left' | 'right' }) {
  const rotations = { up: -90, down: 90, left: 180, right: 0 };
  const id = `arrow-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ position: 'absolute', left: x, top: y, transform: `rotate(${rotations[direction]}deg)` }}
    >
      <defs>
        {/* Main arrow gradient */}
        <linearGradient id={`${id}-body`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </linearGradient>
        {/* Glow effect */}
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Metallic shine */}
        <linearGradient id={`${id}-shine`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="50%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Edge highlight */}
        <linearGradient id={`${id}-edge`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Outer glow */}
      <polygon points="6,5 26,16 6,27" fill={color} opacity="0.3" filter={`url(#${id}-glow)`} />

      {/* Main arrow body */}
      <polygon points="8,6 24,16 8,26" fill={`url(#${id}-body)`} />

      {/* Top edge highlight */}
      <polygon points="8,6 24,16 16,11 8,8" fill={`url(#${id}-shine)`} opacity="0.6" />

      {/* Inner shine */}
      <polygon points="10,9 20,16 10,14" fill="white" opacity="0.3" />

      {/* Tip sparkle */}
      <circle cx="23" cy="16" r="1.5" fill="white" opacity="0.8" />
      <circle cx="22" cy="14" r="0.8" fill="white" opacity="0.5" />

      {/* Motion lines */}
      <line x1="3" y1="12" x2="6" y2="12" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="2" y1="16" x2="6" y2="16" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <line x1="3" y1="20" x2="6" y2="20" stroke={color} strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
