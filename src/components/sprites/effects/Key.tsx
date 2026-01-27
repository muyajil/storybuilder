/**
 * Key Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Key({ x = 0, y = 0, size = 32, color = '#FFD700' }: EffectProps) {
  const id = `key-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 32 20"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main gold gradient */}
        <linearGradient id={`${id}-gold`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Handle inner gradient */}
        <radialGradient id={`${id}-handle`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="70%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Shine gradient */}
        <linearGradient id={`${id}-shine`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Glow filter */}
        <filter id={`${id}-filter`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow for whole key */}
      <ellipse cx="16" cy="10" rx="16" ry="10" fill={`url(#${id}-glow)`} />

      {/* Handle outer ring shadow */}
      <circle cx="9" cy="11" r="7" fill="#8B6914" opacity="0.3" />

      {/* Handle outer ring */}
      <circle cx="8" cy="10" r="7" fill={`url(#${id}-gold)`} />

      {/* Handle inner hole */}
      <circle cx="8" cy="10" r="4" fill={`url(#${id}-handle)`} />

      {/* Handle ring highlight */}
      <path d="M3 6 A6 6 0 0 1 13 6" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />

      {/* Handle inner ring decoration */}
      <circle cx="8" cy="10" r="5.5" fill="none" stroke="#B8860B" strokeWidth="0.5" opacity="0.6" />

      {/* Shaft shadow */}
      <rect x="13" y="9" width="16" height="4" rx="1" fill="#8B6914" opacity="0.3" />

      {/* Main shaft */}
      <rect x="12" y="8" width="16" height="4" rx="1" fill={`url(#${id}-gold)`} />

      {/* Shaft highlight */}
      <rect x="12" y="8" width="16" height="1.5" rx="0.5" fill={`url(#${id}-shine)`} opacity="0.6" />

      {/* Shaft decorative lines */}
      <line x1="14" y1="8.5" x2="14" y2="11.5" stroke="#B8860B" strokeWidth="0.5" opacity="0.5" />
      <line x1="16" y1="8.5" x2="16" y2="11.5" stroke="#B8860B" strokeWidth="0.5" opacity="0.5" />

      {/* Bit (teeth) shadow */}
      <rect x="25" y="9" width="4" height="8" rx="0.5" fill="#8B6914" opacity="0.3" />
      <rect x="21" y="9" width="4" height="6" rx="0.5" fill="#8B6914" opacity="0.3" />

      {/* Main bit */}
      <rect x="24" y="8" width="4" height="8" rx="0.5" fill={`url(#${id}-gold)`} />
      <rect x="20" y="8" width="4" height="6" rx="0.5" fill={`url(#${id}-gold)`} />

      {/* Bit highlights */}
      <rect x="24" y="8" width="4" height="2" rx="0.5" fill="white" opacity="0.4" />
      <rect x="20" y="8" width="4" height="1.5" rx="0.5" fill="white" opacity="0.35" />

      {/* Bit notch details */}
      <rect x="25" y="12" width="2" height="1" fill="#B8860B" opacity="0.4" />

      {/* Sparkle effects */}
      <circle cx="4" cy="6" r="1" fill="white" opacity="0.95" filter={`url(#${id}-filter)`} />
      <circle cx="12" cy="5" r="0.6" fill="white" opacity="0.8" />
      <circle cx="27" cy="7" r="0.7" fill="white" opacity="0.85" />
      <circle cx="6" cy="4" r="0.4" fill="white" opacity="0.7" />
      <circle cx="22" cy="6" r="0.5" fill="white" opacity="0.6" />
    </svg>
  );
}
