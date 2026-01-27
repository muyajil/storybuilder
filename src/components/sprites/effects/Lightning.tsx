/**
 * Lightning Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Lightning({ x = 0, y = 0, size = 40, color = '#FFFF00' }: EffectProps) {
  const id = `lightning-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 40 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main lightning gradient */}
        <linearGradient id={`${id}-bolt`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        {/* Inner core gradient */}
        <linearGradient id={`${id}-core`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" />
          <stop offset="50%" stopColor="#FFFAF0" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Glow filter */}
        <filter id={`${id}-filter`} x="-50%" y="-20%" width="200%" height="140%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Intense glow */}
        <filter id={`${id}-intense`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow shape */}
      <polygon
        points="24,0 8,28 18,28 12,60 36,24 24,24 32,0"
        fill={`url(#${id}-glow)`}
        filter={`url(#${id}-filter)`}
      />

      {/* Main lightning bolt */}
      <polygon
        points="24,0 8,28 18,28 12,60 36,24 24,24 32,0"
        fill={`url(#${id}-bolt)`}
        filter={`url(#${id}-intense)`}
      />

      {/* Inner bright core */}
      <polygon
        points="22,5 12,26 20,26 16,50 30,26 22,26 28,5"
        fill={`url(#${id}-core)`}
        opacity="0.9"
      />

      {/* Brightest center line */}
      <polygon
        points="21,10 15,25 21,25 18,42 27,25 21,25 26,10"
        fill="white"
        opacity="0.7"
      />

      {/* Edge highlights */}
      <path
        d="M24,0 L8,28"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M32,0 L24,24"
        stroke="white"
        strokeWidth="1"
        opacity="0.4"
        strokeLinecap="round"
      />

      {/* Branch lightning effect */}
      <path
        d="M18,20 L12,26 L16,26"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26,18 L32,22 L28,24"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Electric sparkle effects */}
      <circle cx="24" cy="0" r="2" fill="white" opacity="1" filter={`url(#${id}-intense)`} />
      <circle cx="12" cy="60" r="1.5" fill="white" opacity="0.9" filter={`url(#${id}-filter)`} />
      <circle cx="8" cy="28" r="1.2" fill="white" opacity="0.85" />
      <circle cx="36" cy="24" r="1" fill="white" opacity="0.8" />

      {/* Small energy particles */}
      <circle cx="15" cy="15" r="0.8" fill="white" opacity="0.9" />
      <circle cx="28" cy="12" r="0.6" fill="white" opacity="0.8" />
      <circle cx="10" cy="35" r="0.7" fill={color} opacity="0.7" />
      <circle cx="25" cy="40" r="0.5" fill={color} opacity="0.6" />
      <circle cx="18" cy="50" r="0.6" fill="white" opacity="0.7" />

      {/* Crackling energy lines */}
      <path
        d="M6,30 L4,32 L7,33"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M38,22 L40,24 L38,26"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
