/**
 * Exclamation Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Exclamation({ x = 0, y = 0, size = 24, color = '#FF0000' }: EffectProps) {
  const id = `exclamation-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main circle gradient */}
        <radialGradient id={`${id}-circle`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Exclamation gradient */}
        <linearGradient id={`${id}-mark`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" />
          <stop offset="50%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        {/* Glow filter */}
        <filter id={`${id}-filter`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <circle cx="12" cy="12" r="13" fill={`url(#${id}-glow)`} />

      {/* Main circle */}
      <circle cx="12" cy="12" r="11" fill={`url(#${id}-circle)`} />

      {/* Inner ring for depth */}
      <circle cx="12" cy="12" r="9" fill="none" stroke="#FF6B6B" strokeWidth="0.5" opacity="0.4" />

      {/* Top arc highlight */}
      <path d="M5 8 A9 9 0 0 1 17 5" fill="none" stroke="white" strokeWidth="2" opacity="0.3" strokeLinecap="round" />

      {/* Exclamation bar shadow */}
      <rect x="10.5" y="5.5" width="4" height="10" rx="2" fill="#8B0000" opacity="0.3" />

      {/* Exclamation bar */}
      <rect x="10" y="5" width="4" height="10" rx="2" fill={`url(#${id}-mark)`} filter={`url(#${id}-filter)`} />

      {/* Bar highlight */}
      <rect x="10.5" y="5.5" width="1.5" height="8" rx="0.75" fill="white" opacity="0.5" />

      {/* Dot shadow */}
      <circle cx="12.5" cy="18.5" r="2" fill="#8B0000" opacity="0.3" />

      {/* Exclamation dot */}
      <circle cx="12" cy="18" r="2" fill={`url(#${id}-mark)`} filter={`url(#${id}-filter)`} />

      {/* Dot highlight */}
      <circle cx="11" cy="17" r="0.8" fill="white" opacity="0.7" />

      {/* Sparkle effects */}
      <circle cx="5" cy="7" r="0.9" fill="white" opacity="0.9" />
      <circle cx="19" cy="7" r="0.7" fill="white" opacity="0.7" />
      <circle cx="3" cy="12" r="0.5" fill="white" opacity="0.5" />
      <circle cx="21" cy="12" r="0.4" fill="white" opacity="0.4" />
    </svg>
  );
}
