/**
 * Badge Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Badge({ x = 0, y = 0, size = 32, color = '#4169E1' }: EffectProps) {
  const id = `badge-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main badge gradient */}
        <radialGradient id={`${id}-body`} cx="30%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#6495ED" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1E3A8A" />
        </radialGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Gold rim gradient */}
        <linearGradient id={`${id}-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Center jewel gradient */}
        <radialGradient id={`${id}-jewel`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" />
          <stop offset="30%" stopColor="#E0E0E0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </radialGradient>
        {/* Sparkle filter */}
        <filter id={`${id}-sparkle`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <polygon points="16,0 21,10 32,10 24,18 28,30 16,24 4,30 8,18 0,10 11,10" fill={`url(#${id}-glow)`} />

      {/* Main badge star */}
      <polygon points="16,2 20,10 30,10 22,18 26,28 16,22 6,28 10,18 2,10 12,10" fill={`url(#${id}-body)`} />

      {/* Gold outline effect */}
      <polygon points="16,2 20,10 30,10 22,18 26,28 16,22 6,28 10,18 2,10 12,10"
        fill="none" stroke={`url(#${id}-gold)`} strokeWidth="1" />

      {/* Inner highlight star */}
      <polygon points="16,6 18,11 24,11 20,16 22,23 16,19 10,23 12,16 8,11 14,11" fill="white" opacity="0.25" />

      {/* Top highlight */}
      <polygon points="16,2 20,10 12,10" fill="white" opacity="0.4" />

      {/* Center jewel */}
      <circle cx="16" cy="14" r="5" fill={`url(#${id}-jewel)`} />
      <circle cx="16" cy="14" r="5" fill="none" stroke="#FFD700" strokeWidth="0.5" />

      {/* Jewel highlight */}
      <ellipse cx="14" cy="12" rx="2" ry="1.5" fill="white" opacity="0.8" />

      {/* Sparkle effects */}
      <circle cx="20" cy="10" r="1" fill="white" opacity="0.9" filter={`url(#${id}-sparkle)`} />
      <circle cx="12" cy="10" r="0.8" fill="white" opacity="0.7" />
      <circle cx="26" cy="28" r="0.6" fill="#FFD700" opacity="0.8" />
      <circle cx="6" cy="28" r="0.6" fill="#FFD700" opacity="0.8" />
      <circle cx="16" cy="2" r="1" fill="white" opacity="0.9" />
    </svg>
  );
}
