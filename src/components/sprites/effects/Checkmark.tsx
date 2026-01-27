/**
 * Checkmark Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Checkmark({ x = 0, y = 0, size = 24, color = '#00FF00' }: EffectProps) {
  const id = `checkmark-${Math.random().toString(36).substr(2, 9)}`;

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
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#006400" />
        </radialGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Check gradient */}
        <linearGradient id={`${id}-check`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        {/* Glow filter */}
        <filter id={`${id}-filter`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Inner shadow */}
        <filter id={`${id}-shadow`}>
          <feDropShadow dx="1" dy="1" stdDeviation="0.5" floodColor="#004d00" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Outer glow */}
      <circle cx="12" cy="12" r="13" fill={`url(#${id}-glow)`} />

      {/* Main circle */}
      <circle cx="12" cy="12" r="11" fill={`url(#${id}-circle)`} />

      {/* Inner ring */}
      <circle cx="12" cy="12" r="9" fill="none" stroke="#90EE90" strokeWidth="0.5" opacity="0.4" />

      {/* Highlight arc */}
      <path d="M5 8 A9 9 0 0 1 17 5" fill="none" stroke="white" strokeWidth="2" opacity="0.3" strokeLinecap="round" />

      {/* Check mark shadow */}
      <path d="M6 12.5 L10 16.5 L18 8.5" stroke="#004d00" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />

      {/* Main check mark */}
      <path d="M6 12 L10 16 L18 8" stroke={`url(#${id}-check)`} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" filter={`url(#${id}-filter)`} />

      {/* Check highlight */}
      <path d="M6.5 11.5 L10 15" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* Sparkle effects */}
      <circle cx="18" cy="7" r="1.2" fill="white" opacity="0.9" />
      <circle cx="5" cy="7" r="0.8" fill="white" opacity="0.7" />
      <circle cx="19" cy="10" r="0.5" fill="white" opacity="0.6" />
      <circle cx="17" cy="5" r="0.6" fill="#90EE90" opacity="0.8" />
    </svg>
  );
}
