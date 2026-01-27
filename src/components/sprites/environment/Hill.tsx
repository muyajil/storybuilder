/**
 * Hill Sprite Component
 * Enhanced with terrain depth and natural textures
 */

import type { ElementProps } from '../types';

export function Hill({ x = 0, y = 0, size = 120, color = '#228B22' }: ElementProps) {
  // Create color variations
  const darkGreen = '#1a6b1a';
  const lightGreen = '#32CD32';
  const highlight = '#90EE90';
  const shadowGreen = '#155015';

  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 120 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main hill gradient */}
        <radialGradient id="hillMainGradient" cx="50%" cy="20%" r="80%">
          <stop offset="0%" stopColor={lightGreen} />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={darkGreen} />
          <stop offset="100%" stopColor={shadowGreen} />
        </radialGradient>

        {/* Top highlight gradient */}
        <radialGradient id="hillHighlight" cx="40%" cy="10%" r="50%">
          <stop offset="0%" stopColor={highlight} stopOpacity="0.5" />
          <stop offset="100%" stopColor={lightGreen} stopOpacity="0" />
        </radialGradient>

        {/* Shadow gradient for depth */}
        <linearGradient id="hillShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="70%" stopColor="rgba(0,0,0,0.1)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
        </linearGradient>

        {/* Side shadow gradient */}
        <linearGradient id="hillSideShadow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.15)" />
          <stop offset="50%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
        </linearGradient>

        {/* Grass texture pattern */}
        <pattern id="hillGrassTexture" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <line x1="2" y1="10" x2="3" y2="6" stroke={darkGreen} strokeWidth="0.5" opacity="0.3" />
          <line x1="5" y1="10" x2="5" y2="5" stroke={color} strokeWidth="0.5" opacity="0.3" />
          <line x1="8" y1="10" x2="7" y2="6" stroke={darkGreen} strokeWidth="0.5" opacity="0.3" />
        </pattern>

        {/* Drop shadow filter */}
        <filter id="hillDropShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="3" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="62" cy="58" rx="55" ry="6" fill="rgba(0,0,0,0.15)" />

      {/* Back hill layer for depth (if wanted) */}
      <ellipse cx="65" cy="52" rx="50" ry="35" fill={shadowGreen} opacity="0.3" />

      {/* Main hill shape */}
      <ellipse cx="60" cy="50" rx="58" ry="40" fill="url(#hillMainGradient)" filter="url(#hillDropShadow)" />

      {/* Grass texture overlay */}
      <ellipse cx="60" cy="50" rx="58" ry="40" fill="url(#hillGrassTexture)" opacity="0.4" />

      {/* Top highlight */}
      <ellipse cx="55" cy="35" rx="40" ry="25" fill="url(#hillHighlight)" />

      {/* Shadow overlay for depth */}
      <ellipse cx="60" cy="50" rx="58" ry="40" fill="url(#hillShadow)" />
      <ellipse cx="60" cy="50" rx="58" ry="40" fill="url(#hillSideShadow)" />

      {/* Contour lines for terrain effect */}
      <g stroke={darkGreen} fill="none" opacity="0.15">
        <ellipse cx="60" cy="45" rx="50" ry="32" strokeWidth="0.5" />
        <ellipse cx="60" cy="40" rx="42" ry="25" strokeWidth="0.5" />
        <ellipse cx="60" cy="35" rx="32" ry="18" strokeWidth="0.5" />
      </g>

      {/* Grass blade details on top */}
      <g opacity="0.6">
        <path d="M30 35 Q28 30 31 25" stroke={lightGreen} strokeWidth="1" fill="none" />
        <path d="M45 28 Q44 23 46 18" stroke={lightGreen} strokeWidth="1" fill="none" />
        <path d="M60 25 Q60 20 60 15" stroke={highlight} strokeWidth="1" fill="none" />
        <path d="M75 28 Q76 23 74 18" stroke={lightGreen} strokeWidth="1" fill="none" />
        <path d="M90 35 Q92 30 89 25" stroke={lightGreen} strokeWidth="1" fill="none" />
      </g>

      {/* Small grass tufts */}
      <g opacity="0.5">
        <path d="M20 45 Q18 42 21 38" stroke={color} strokeWidth="0.8" fill="none" />
        <path d="M22 44 Q22 40 22 37" stroke={color} strokeWidth="0.8" fill="none" />
        <path d="M24 45 Q26 42 23 38" stroke={color} strokeWidth="0.8" fill="none" />

        <path d="M96 45 Q94 42 97 38" stroke={color} strokeWidth="0.8" fill="none" />
        <path d="M98 44 Q98 40 98 37" stroke={color} strokeWidth="0.8" fill="none" />
        <path d="M100 45 Q102 42 99 38" stroke={color} strokeWidth="0.8" fill="none" />
      </g>

      {/* Highlight edge at the crest */}
      <path
        d="M20 40 Q40 18 60 15 Q80 18 100 40"
        stroke={highlight}
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />

      {/* Small flowers/details scattered */}
      <g opacity="0.6">
        <circle cx="35" cy="32" r="1.5" fill="#FFB6C1" />
        <circle cx="35" cy="32" r="0.8" fill="#FFD700" />
        <circle cx="80" cy="30" r="1.5" fill="#FFB6C1" />
        <circle cx="80" cy="30" r="0.8" fill="#FFD700" />
        <circle cx="55" cy="22" r="1" fill="#FFFFFF" />
        <circle cx="68" cy="24" r="1" fill="#FFFFFF" />
      </g>

      {/* Subtle rocks */}
      <g opacity="0.3">
        <ellipse cx="15" cy="52" rx="4" ry="2" fill="#696969" />
        <ellipse cx="105" cy="50" rx="3" ry="1.5" fill="#696969" />
      </g>
    </svg>
  );
}
