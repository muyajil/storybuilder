/**
 * Seagull Sprite Component
 * Enhanced with gradients, feather texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Seagull({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="seagullBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#F5F5F5" stopOpacity="1" />
          <stop offset="100%" stopColor="#E8E8E8" stopOpacity="1" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="seagullHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#F5F5F5" stopOpacity="1" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="seagullWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A0A0A0" stopOpacity="1" />
          <stop offset="50%" stopColor="#808080" stopOpacity="1" />
          <stop offset="100%" stopColor="#606060" stopOpacity="1" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="seagullBeakGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="seagullHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Feet gradient */}
        <linearGradient id="seagullFeetGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFB347" stopOpacity="1" />
          <stop offset="100%" stopColor="#CC7000" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Tail feathers */}
      <polygon points="32,50 26,58 32,54 38,58" fill="#E0E0E0" />

      {/* Wings */}
      <path d="M20 32 Q6 22 8 36 Q10 44 18 40" fill="url(#seagullWingGradient)" />
      <path d="M44 32 Q58 22 56 36 Q54 44 46 40" fill="url(#seagullWingGradient)" />

      {/* Wing feather details */}
      <path d="M10 28 Q12 34 10 40" stroke="#505050" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M14 26 Q16 34 14 42" stroke="#505050" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M54 28 Q52 34 54 40" stroke="#505050" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M50 26 Q48 34 50 42" stroke="#505050" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Wing tips - darker */}
      <path d="M6 24 Q8 28 10 32" stroke="#404040" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M58 24 Q56 28 54 32" stroke="#404040" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Body */}
      <ellipse cx="32" cy="36" rx="12" ry="10" fill="url(#seagullBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="32" rx="6" ry="5" fill="url(#seagullHighlight)" />

      {/* Breast feather texture */}
      <path d="M28 36 Q30 42 28 48" stroke="#E8E8E8" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M36 36 Q34 42 36 48" stroke="#E8E8E8" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Head */}
      <circle cx="32" cy="24" r="9" fill="url(#seagullHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="28" cy="20" rx="5" ry="4" fill="url(#seagullHighlight)" />

      {/* Beak */}
      <polygon points="32,28 25,36 39,36" fill="url(#seagullBeakGradient)" />
      <polygon points="32,28 28,34 36,34" fill="#FFF0C0" opacity="0.3" />

      {/* Beak tip - red spot */}
      <circle cx="32" cy="35" r="1.5" fill="#CC3300" />

      {/* Eyes */}
      <circle cx="29" cy="22" r="3" fill="white" />
      <circle cx="35" cy="22" r="3" fill="white" />
      <circle cx="29" cy="22" r="2" fill="#2F1F1F" />
      <circle cx="35" cy="22" r="2" fill="#2F1F1F" />

      {/* Eye highlights */}
      <circle cx="28" cy="21" r="0.8" fill="white" />
      <circle cx="34" cy="21" r="0.8" fill="white" />

      {/* Eye ring - yellow */}
      <circle cx="29" cy="22" r="3.5" fill="none" stroke="#FFD700" strokeWidth="0.5" opacity="0.6" />
      <circle cx="35" cy="22" r="3.5" fill="none" stroke="#FFD700" strokeWidth="0.5" opacity="0.6" />

      {/* Feet */}
      <path d="M28 46 L26 52 L24 50 M28 46 L28 52 M28 46 L30 52 L32 50" stroke="url(#seagullFeetGradient)" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 46 L34 52 L32 50 M36 46 L36 52 M36 46 L38 52 L40 50" stroke="url(#seagullFeetGradient)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
