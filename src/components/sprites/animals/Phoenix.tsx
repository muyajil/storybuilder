/**
 * Phoenix Sprite Component
 * Enhanced with gradients, fire effects, and majestic features
 */

import type { SpriteProps } from '../types';

export function Phoenix({ size = 64, color = '#FF4500' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient - fiery */}
        <radialGradient id="phoenixBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFCC00" stopOpacity="1" />
          <stop offset="40%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#CC3300" stopOpacity="1" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="phoenixHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="60%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#CC3300" stopOpacity="1" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="phoenixWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#8B0000" stopOpacity="1" />
        </linearGradient>
        {/* Flame gradient */}
        <linearGradient id="phoenixFlameGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFFF99" stopOpacity="1" />
        </linearGradient>
        {/* Tail flame gradient */}
        <linearGradient id="phoenixTailFlameGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFFF00" stopOpacity="0.7" />
        </linearGradient>
        {/* Glow effect */}
        <radialGradient id="phoenixGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        {/* Highlight */}
        <radialGradient id="phoenixHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#FFFF99" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        {/* Beak gradient */}
        <linearGradient id="phoenixBeakGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFA500" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Outer glow aura */}
      <ellipse cx="32" cy="32" rx="30" ry="28" fill="url(#phoenixGlow)" />

      {/* Tail flames */}
      <path d="M32 52 Q24 58 18 54" stroke="url(#phoenixTailFlameGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M32 52 L32 64" stroke="url(#phoenixTailFlameGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M32 52 Q40 58 46 54" stroke="url(#phoenixTailFlameGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Tail flame tips */}
      <circle cx="18" cy="54" r="3" fill="#FFFF00" opacity="0.6" />
      <circle cx="32" cy="64" r="3" fill="#FFFF00" opacity="0.6" />
      <circle cx="46" cy="54" r="3" fill="#FFFF00" opacity="0.6" />

      {/* Wings */}
      <path d="M18 30 Q4 24 8 40 Q12 54 22 48" fill="url(#phoenixWingGradient)" />
      <path d="M46 30 Q60 24 56 40 Q52 54 42 48" fill="url(#phoenixWingGradient)" />

      {/* Wing flame edges */}
      <path d="M6 34 L2 30 L8 36 L4 38 L10 40" fill="#FFD700" opacity="0.8" />
      <path d="M58 34 L62 30 L56 36 L60 38 L54 40" fill="#FFD700" opacity="0.8" />

      {/* Wing feather details */}
      <path d="M10 32 Q14 38 12 46" stroke="#8B0000" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M16 30 Q18 40 16 50" stroke="#8B0000" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M54 32 Q50 38 52 46" stroke="#8B0000" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M48 30 Q46 40 48 50" stroke="#8B0000" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Body */}
      <ellipse cx="32" cy="36" rx="14" ry="16" fill="url(#phoenixBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="30" rx="8" ry="10" fill="url(#phoenixHighlight)" />

      {/* Body feather texture */}
      <path d="M26 34 Q28 40 26 46" stroke="#CC3300" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M32 32 Q34 40 32 48" stroke="#CC3300" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M38 34 Q36 40 38 46" stroke="#CC3300" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Head */}
      <circle cx="32" cy="20" r="10" fill="url(#phoenixHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="28" cy="16" rx="5" ry="4" fill="url(#phoenixHighlight)" />

      {/* Crown flames */}
      <path d="M28 10 L24 0 L30 8" fill="url(#phoenixFlameGradient)" />
      <path d="M32 8 L32 -2 L34 8" fill="url(#phoenixFlameGradient)" />
      <path d="M36 10 L40 0 L34 8" fill="url(#phoenixFlameGradient)" />

      {/* Crown flame tips */}
      <circle cx="24" cy="0" r="2" fill="#FFFF99" opacity="0.8" />
      <circle cx="32" cy="-2" r="2" fill="#FFFF99" opacity="0.8" />
      <circle cx="40" cy="0" r="2" fill="#FFFF99" opacity="0.8" />

      {/* Eyes */}
      <circle cx="28" cy="18" r="3" fill="white" />
      <circle cx="36" cy="18" r="3" fill="white" />
      <circle cx="28" cy="18" r="2" fill="#8B0000" />
      <circle cx="36" cy="18" r="2" fill="#8B0000" />

      {/* Eye glow */}
      <circle cx="28" cy="18" r="4" fill="#FFD700" opacity="0.3" />
      <circle cx="36" cy="18" r="4" fill="#FFD700" opacity="0.3" />

      {/* Eye highlights */}
      <circle cx="27" cy="17" r="1" fill="white" />
      <circle cx="35" cy="17" r="1" fill="white" />

      {/* Beak */}
      <polygon points="32,24 27,32 37,32" fill="url(#phoenixBeakGradient)" />
      <polygon points="32,24 29,30 35,30" fill="#FFFF99" opacity="0.4" />

      {/* Sparkle effects */}
      <circle cx="12" cy="20" r="1.5" fill="#FFFF99" opacity="0.7" />
      <circle cx="52" cy="22" r="1.5" fill="#FFFF99" opacity="0.7" />
      <circle cx="26" cy="50" r="1" fill="#FFFF99" opacity="0.6" />
      <circle cx="38" cy="52" r="1" fill="#FFFF99" opacity="0.6" />
    </svg>
  );
}
