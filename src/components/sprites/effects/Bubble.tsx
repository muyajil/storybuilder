/**
 * Bubble Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Bubble({ x = 0, y = 0, size = 24, color = '#87CEEB' }: EffectProps) {
  const id = `bubble-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main bubble gradient - iridescent effect */}
        <radialGradient id={`${id}-body`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="30%" stopColor={color} stopOpacity="0.3" />
          <stop offset="60%" stopColor="#E0FFFF" stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0.15" />
        </radialGradient>
        {/* Rim gradient */}
        <radialGradient id={`${id}-rim`} cx="50%" cy="50%" r="50%">
          <stop offset="85%" stopColor={color} stopOpacity="0" />
          <stop offset="95%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4682B4" stopOpacity="0.8" />
        </radialGradient>
        {/* Rainbow sheen */}
        <linearGradient id={`${id}-rainbow`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF69B4" stopOpacity="0.2" />
          <stop offset="25%" stopColor="#87CEEB" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#98FB98" stopOpacity="0.2" />
          <stop offset="75%" stopColor="#DDA0DD" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.2" />
        </linearGradient>
        {/* Highlight gradient */}
        <radialGradient id={`${id}-highlight`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Glow filter */}
        <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main bubble body */}
      <circle cx="12" cy="12" r="10" fill={`url(#${id}-body)`} />

      {/* Rainbow sheen overlay */}
      <circle cx="12" cy="12" r="10" fill={`url(#${id}-rainbow)`} />

      {/* Rim effect */}
      <circle cx="12" cy="12" r="10" fill={`url(#${id}-rim)`} />

      {/* Outer ring */}
      <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6" />

      {/* Primary highlight */}
      <ellipse cx="7" cy="7" rx="4" ry="3" fill={`url(#${id}-highlight)`} opacity="0.9" />

      {/* Secondary highlight */}
      <ellipse cx="9" cy="9" rx="2" ry="1.5" fill="white" opacity="0.8" />

      {/* Bottom reflection */}
      <ellipse cx="15" cy="17" rx="2.5" ry="1.5" fill="white" opacity="0.3" />

      {/* Sparkle effects */}
      <circle cx="6" cy="6" r="1" fill="white" opacity="1" filter={`url(#${id}-glow)`} />
      <circle cx="8" cy="5" r="0.5" fill="white" opacity="0.8" />
      <circle cx="5" cy="8" r="0.4" fill="white" opacity="0.6" />

      {/* Small inner bubbles */}
      <circle cx="16" cy="15" r="1" fill="white" opacity="0.2" />
      <circle cx="14" cy="17" r="0.7" fill="white" opacity="0.15" />
    </svg>
  );
}
