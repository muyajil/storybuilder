/**
 * Cat Sprite Component
 * Enhanced with gradients, fur texture, and detailed features
 */

import type { SpriteProps } from '../types';

export function Cat({ size = 64, color = '#FFA500' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="catBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFB830" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="catHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFB830" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="catEyeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#98FB98" />
          <stop offset="50%" stopColor="#90EE90" />
          <stop offset="100%" stopColor="#228B22" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="catNoseGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFD0D0" />
          <stop offset="100%" stopColor="#FFB6C1" />
        </radialGradient>
        {/* Ear inner gradient */}
        <radialGradient id="catEarInnerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD0D0" />
          <stop offset="100%" stopColor="#FFB6C1" />
        </radialGradient>
        {/* Fur shine */}
        <linearGradient id="catShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Fur texture */}
        <pattern id="catFurPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M0 2 Q2 0 4 2" stroke={color} strokeWidth="0.3" fill="none" opacity="0.2" />
        </pattern>
      </defs>

      {/* Tail - fluffy and curved */}
      <path d="M48 44 Q56 38 58 46 Q60 54 56 58 Q52 62 48 58" fill="url(#catBodyGradient)" stroke={color} strokeWidth="0.5" />
      {/* Tail stripes */}
      <path d="M52 42 Q54 44 52 48" stroke="#E08000" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M54 48 Q56 52 54 56" stroke="#E08000" strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Body */}
      <ellipse cx="32" cy="46" rx="18" ry="14" fill="url(#catBodyGradient)" />
      {/* Body fur texture */}
      <ellipse cx="32" cy="46" rx="18" ry="14" fill="url(#catFurPattern)" />
      {/* Body highlight */}
      <ellipse cx="26" cy="40" rx="8" ry="5" fill="url(#catShineGradient)" />
      {/* Belly - lighter */}
      <ellipse cx="32" cy="50" rx="10" ry="6" fill="#FFE4B5" opacity="0.4" />

      {/* Back paws */}
      <ellipse cx="20" cy="56" rx="5" ry="4" fill={color} />
      <ellipse cx="44" cy="56" rx="5" ry="4" fill={color} />

      {/* Front legs */}
      <ellipse cx="22" cy="54" rx="4" ry="6" fill="url(#catBodyGradient)" />
      <ellipse cx="42" cy="54" rx="4" ry="6" fill="url(#catBodyGradient)" />

      {/* Head */}
      <circle cx="32" cy="24" r="16" fill="url(#catHeadGradient)" />
      {/* Head fur texture */}
      <circle cx="32" cy="24" r="16" fill="url(#catFurPattern)" />
      {/* Head highlight */}
      <ellipse cx="26" cy="18" rx="6" ry="4" fill="url(#catShineGradient)" />

      {/* Ears */}
      <polygon points="14,20 18,2 26,16" fill="url(#catHeadGradient)" />
      <polygon points="50,20 46,2 38,16" fill="url(#catHeadGradient)" />
      {/* Ear inner */}
      <polygon points="16,18 19,6 24,15" fill="url(#catEarInnerGradient)" />
      <polygon points="48,18 45,6 40,15" fill="url(#catEarInnerGradient)" />
      {/* Ear fur tufts */}
      <path d="M18 8 L17 4" stroke={color} strokeWidth="1" />
      <path d="M46 8 L47 4" stroke={color} strokeWidth="1" />

      {/* Eyes - large and expressive */}
      <ellipse cx="25" cy="22" rx="5" ry="6" fill="url(#catEyeGradient)" />
      <ellipse cx="39" cy="22" rx="5" ry="6" fill="url(#catEyeGradient)" />
      {/* Eye pupils - vertical slits */}
      <ellipse cx="25" cy="22" rx="2" ry="5" fill="black" />
      <ellipse cx="39" cy="22" rx="2" ry="5" fill="black" />
      {/* Eye shine */}
      <circle cx="23" cy="20" r="1.5" fill="white" />
      <circle cx="37" cy="20" r="1.5" fill="white" />
      <circle cx="26" cy="24" r="0.8" fill="white" opacity="0.5" />
      <circle cx="40" cy="24" r="0.8" fill="white" opacity="0.5" />

      {/* Nose */}
      <path d="M32 28 L29 32 L32 34 L35 32 Z" fill="url(#catNoseGradient)" />
      {/* Nose highlight */}
      <ellipse cx="31" cy="30" rx="1" ry="0.5" fill="white" opacity="0.3" />

      {/* Mouth */}
      <path d="M32 34 L32 36" stroke="#8B4513" strokeWidth="1" />
      <path d="M28 38 Q32 42 36 38" stroke="#8B4513" strokeWidth="1" fill="none" />

      {/* Whiskers */}
      <g stroke="#4a3520" strokeWidth="0.8" opacity="0.7">
        <line x1="18" y1="30" x2="6" y2="28" />
        <line x1="18" y1="33" x2="6" y2="34" />
        <line x1="18" y1="36" x2="8" y2="40" />
        <line x1="46" y1="30" x2="58" y2="28" />
        <line x1="46" y1="33" x2="58" y2="34" />
        <line x1="46" y1="36" x2="56" y2="40" />
      </g>

      {/* Whisker dots */}
      <g fill="#4a3520">
        <circle cx="20" cy="30" r="0.8" />
        <circle cx="21" cy="33" r="0.8" />
        <circle cx="20" cy="36" r="0.8" />
        <circle cx="44" cy="30" r="0.8" />
        <circle cx="43" cy="33" r="0.8" />
        <circle cx="44" cy="36" r="0.8" />
      </g>

      {/* Stripes on forehead */}
      <g stroke="#E08000" strokeWidth="1.5" opacity="0.5" strokeLinecap="round">
        <path d="M28 12 L28 16" />
        <path d="M32 10 L32 15" />
        <path d="M36 12 L36 16" />
      </g>
    </svg>
  );
}
