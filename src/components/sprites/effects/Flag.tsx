/**
 * Flag Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Flag({ x = 0, y = 0, size = 32, color = '#FF0000' }: EffectProps) {
  const id = `flag-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Pole gradient */}
        <linearGradient id={`${id}-pole`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D2691E" />
          <stop offset="30%" stopColor="#8B4513" />
          <stop offset="70%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        {/* Flag gradient */}
        <linearGradient id={`${id}-flag`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
        {/* Flag highlight */}
        <linearGradient id={`${id}-shine`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="50%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Glow effect */}
        <filter id={`${id}-glow`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Shadow filter */}
        <filter id={`${id}-shadow`}>
          <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Pole shadow */}
      <rect x="5" y="3" width="3" height="29" rx="1" fill="#000" opacity="0.2" />

      {/* Main pole */}
      <rect x="4" y="2" width="3" height="30" rx="1" fill={`url(#${id}-pole)`} />

      {/* Pole highlight */}
      <rect x="4.5" y="2" width="1" height="30" rx="0.5" fill="white" opacity="0.3" />

      {/* Pole top ornament */}
      <circle cx="5.5" cy="2" r="2" fill="#FFD700" />
      <circle cx="5" cy="1.5" r="0.8" fill="white" opacity="0.7" />

      {/* Flag shadow */}
      <polygon points="8,3 31,9 8,17" fill="#000" opacity="0.2" transform="translate(1, 1)" />

      {/* Main flag with wave effect */}
      <path
        d="M7,2 Q15,4 22,6 Q28,8 30,8 Q28,9 22,11 Q15,13 7,16 Z"
        fill={`url(#${id}-flag)`}
        filter={`url(#${id}-shadow)`}
      />

      {/* Flag wave highlight */}
      <path
        d="M7,2 Q12,3 17,5 Q20,6 22,6 L17,7 Q12,8 7,10 Z"
        fill={`url(#${id}-shine)`}
      />

      {/* Flag fold shadow */}
      <path
        d="M18,7 Q22,8 26,8 Q22,9 18,10 Z"
        fill="#8B0000"
        opacity="0.3"
      />

      {/* Flag bottom edge highlight */}
      <path
        d="M7,14 Q12,15 17,14"
        stroke="white"
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
      />

      {/* Sparkle on pole top */}
      <circle cx="5.5" cy="1" r="0.8" fill="white" opacity="0.9" filter={`url(#${id}-glow)`} />

      {/* Flag sparkles */}
      <circle cx="20" cy="7" r="0.6" fill="white" opacity="0.7" />
      <circle cx="15" cy="5" r="0.4" fill="white" opacity="0.6" />
      <circle cx="25" cy="8" r="0.5" fill="white" opacity="0.5" />
    </svg>
  );
}
