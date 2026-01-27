/**
 * CrossMark Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function CrossMark({ x = 0, y = 0, size = 24, color = '#FF0000' }: EffectProps) {
  const id = `crossmark-${Math.random().toString(36).substr(2, 9)}`;

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
        {/* Cross gradient */}
        <linearGradient id={`${id}-cross`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" />
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

      {/* Cross shadow */}
      <line x1="7.5" y1="7.5" x2="17.5" y2="17.5" stroke="#8B0000" strokeWidth="3.5" strokeLinecap="round" opacity="0.3" />
      <line x1="17.5" y1="7.5" x2="7.5" y2="17.5" stroke="#8B0000" strokeWidth="3.5" strokeLinecap="round" opacity="0.3" />

      {/* Main cross */}
      <line x1="7" y1="7" x2="17" y2="17" stroke={`url(#${id}-cross)`} strokeWidth="3" strokeLinecap="round" filter={`url(#${id}-filter)`} />
      <line x1="17" y1="7" x2="7" y2="17" stroke={`url(#${id}-cross)`} strokeWidth="3" strokeLinecap="round" filter={`url(#${id}-filter)`} />

      {/* Cross highlights */}
      <line x1="7.5" y1="7" x2="12" y2="11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="16.5" y1="7" x2="14" y2="9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

      {/* Sparkle effects */}
      <circle cx="7" cy="7" r="1" fill="white" opacity="0.9" />
      <circle cx="17" cy="7" r="1" fill="white" opacity="0.9" />
      <circle cx="5" cy="5" r="0.6" fill="white" opacity="0.6" />
      <circle cx="19" cy="5" r="0.5" fill="white" opacity="0.5" />
    </svg>
  );
}
