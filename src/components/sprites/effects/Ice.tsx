/**
 * Ice Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Ice({ x = 0, y = 0, size = 28, color = '#00BFFF' }: EffectProps) {
  const id = `ice-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main ice gradient */}
        <linearGradient id={`${id}-body`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0FFFF" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#00008B" />
        </linearGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Inner crystal gradient */}
        <radialGradient id={`${id}-inner`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#E0FFFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </radialGradient>
        {/* Frost overlay */}
        <linearGradient id={`${id}-frost`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#B0E0E6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        {/* Sparkle filter */}
        <filter id={`${id}-sparkle`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <polygon points="14,-2 22,6 30,6 22,14 26,24 14,20 2,24 6,14 -2,6 6,6" fill={`url(#${id}-glow)`} />

      {/* Main ice crystal */}
      <polygon points="14,0 20,7 28,7 21,14 24,22 14,18 4,22 7,14 0,7 8,7" fill={`url(#${id}-body)`} />

      {/* Inner crystal layer */}
      <polygon points="14,4 18,9 24,9 19,14 21,19 14,16 7,19 9,14 4,9 10,9" fill={`url(#${id}-inner)`} />

      {/* Frost overlay effect */}
      <polygon points="14,4 18,9 24,9 19,14 21,19 14,16 7,19 9,14 4,9 10,9" fill={`url(#${id}-frost)`} />

      {/* Crystal facet lines */}
      <line x1="14" y1="0" x2="14" y2="18" stroke="#E0FFFF" strokeWidth="0.5" opacity="0.4" />
      <line x1="8" y1="7" x2="20" y2="7" stroke="#E0FFFF" strokeWidth="0.5" opacity="0.4" />
      <line x1="4" y1="22" x2="14" y2="12" stroke="#87CEEB" strokeWidth="0.5" opacity="0.3" />
      <line x1="24" y1="22" x2="14" y2="12" stroke="#87CEEB" strokeWidth="0.5" opacity="0.3" />

      {/* Center crystal */}
      <circle cx="14" cy="12" r="3.5" fill={`url(#${id}-inner)`} />
      <circle cx="14" cy="12" r="3.5" fill="none" stroke="#E0FFFF" strokeWidth="0.5" opacity="0.6" />

      {/* Center highlight */}
      <circle cx="13" cy="11" r="1.5" fill="white" opacity="0.8" />

      {/* Crystal point highlights */}
      <circle cx="14" cy="1" r="1" fill="white" opacity="0.9" filter={`url(#${id}-sparkle)`} />
      <circle cx="27" cy="7" r="0.8" fill="white" opacity="0.8" />
      <circle cx="1" cy="7" r="0.8" fill="white" opacity="0.8" />
      <circle cx="24" cy="21" r="0.7" fill="white" opacity="0.7" />
      <circle cx="4" cy="21" r="0.7" fill="white" opacity="0.7" />

      {/* Frost sparkles */}
      <circle cx="10" cy="5" r="0.5" fill="white" opacity="0.9" />
      <circle cx="18" cy="5" r="0.4" fill="white" opacity="0.8" />
      <circle cx="6" cy="10" r="0.4" fill="white" opacity="0.7" />
      <circle cx="22" cy="10" r="0.5" fill="white" opacity="0.75" />
      <circle cx="8" cy="16" r="0.3" fill="white" opacity="0.6" />
      <circle cx="20" cy="16" r="0.4" fill="white" opacity="0.65" />

      {/* Icy mist effect */}
      <ellipse cx="14" cy="20" rx="6" ry="2" fill="#E0FFFF" opacity="0.2" />
    </svg>
  );
}
