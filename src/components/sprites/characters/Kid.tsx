/**
 * Kid Sprite Component
 * Enhanced with gradients, detailed clothing, and expressive features
 */

import type { SpriteProps } from '../types';

export function Kid({ size = 64, color = '#FFB6C1', hairColor = '#8B4513' }: SpriteProps & { hairColor?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="kidSkinGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFF0E6" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* Hair gradient */}
        <radialGradient id="kidHairGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={hairColor} />
          <stop offset="100%" stopColor={hairColor === '#8B4513' ? '#5C3317' : hairColor} />
        </radialGradient>
        {/* Shirt gradient */}
        <linearGradient id="kidShirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFC8D8" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#E89AAA" />
        </linearGradient>
        {/* Pants gradient */}
        <linearGradient id="kidPantsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5B7BC0" />
          <stop offset="50%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#2E4A8A" />
        </linearGradient>
        {/* Shoe gradient */}
        <linearGradient id="kidShoeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
      </defs>

      {/* Messy hair */}
      <circle cx="32" cy="16" r="14" fill="url(#kidHairGradient)" />
      {/* Hair tufts */}
      <ellipse cx="24" cy="8" rx="4" ry="6" fill="url(#kidHairGradient)" />
      <ellipse cx="40" cy="8" rx="4" ry="6" fill="url(#kidHairGradient)" />
      <ellipse cx="32" cy="4" rx="5" ry="4" fill="url(#kidHairGradient)" />
      {/* Hair shine */}
      <ellipse cx="26" cy="10" rx="4" ry="2" fill="white" opacity="0.2" />

      {/* Head */}
      <circle cx="32" cy="18" r="12" fill="url(#kidSkinGradient)" />

      {/* Cute eyebrows */}
      <path d="M26 13 Q28 12 30 14" stroke={hairColor} strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M34 14 Q36 12 38 13" stroke={hairColor} strokeWidth="1" fill="none" opacity="0.6" />

      {/* Big friendly eyes */}
      <ellipse cx="28" cy="16" rx="2.5" ry="3" fill="#2F2F2F" />
      <ellipse cx="36" cy="16" rx="2.5" ry="3" fill="#2F2F2F" />
      {/* Eye highlights */}
      <circle cx="27" cy="15" r="1" fill="white" />
      <circle cx="35" cy="15" r="1" fill="white" />
      <circle cx="29" cy="17" r="0.5" fill="white" />
      <circle cx="37" cy="17" r="0.5" fill="white" />

      {/* Rosy cheeks */}
      <ellipse cx="24" cy="20" rx="2.5" ry="1.5" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="40" cy="20" rx="2.5" ry="1.5" fill="#FFB6C1" opacity="0.5" />

      {/* Cute nose */}
      <ellipse cx="32" cy="18" rx="1.2" ry="1" fill="#E8C4B0" />

      {/* Happy smile */}
      <path d="M28 22 Q32 27 36 22" stroke="#4A3728" strokeWidth="1.2" fill="none" />

      {/* Freckles */}
      <circle cx="26" cy="18" r="0.5" fill="#C4A080" opacity="0.5" />
      <circle cx="28" cy="19" r="0.5" fill="#C4A080" opacity="0.5" />
      <circle cx="36" cy="19" r="0.5" fill="#C4A080" opacity="0.5" />
      <circle cx="38" cy="18" r="0.5" fill="#C4A080" opacity="0.5" />

      {/* T-shirt body */}
      <rect x="22" y="30" width="20" height="22" fill="url(#kidShirtGradient)" rx="4" />
      {/* Shirt collar */}
      <path d="M26 30 Q32 34 38 30" fill="#E89AAA" />
      {/* Shirt design - star */}
      <polygon points="32,36 30,42 34,38 30,38 34,42" fill="white" opacity="0.6" />

      {/* Sleeves */}
      <rect x="12" y="32" width="10" height="7" fill="url(#kidShirtGradient)" rx="3" />
      <rect x="42" y="32" width="10" height="7" fill="url(#kidShirtGradient)" rx="3" />

      {/* Cute hands */}
      <circle cx="12" cy="36" r="4" fill="url(#kidSkinGradient)" />
      <circle cx="52" cy="36" r="4" fill="url(#kidSkinGradient)" />
      {/* Tiny fingers */}
      <circle cx="9" cy="37" r="1.2" fill="url(#kidSkinGradient)" />
      <circle cx="55" cy="37" r="1.2" fill="url(#kidSkinGradient)" />

      {/* Jeans */}
      <rect x="22" y="50" width="8" height="14" fill="url(#kidPantsGradient)" rx="2" />
      <rect x="34" y="50" width="8" height="14" fill="url(#kidPantsGradient)" rx="2" />
      {/* Jean seams */}
      <line x1="26" y1="50" x2="26" y2="64" stroke="#2E4A8A" strokeWidth="0.5" />
      <line x1="38" y1="50" x2="38" y2="64" stroke="#2E4A8A" strokeWidth="0.5" />
      {/* Pockets */}
      <path d="M24 52 L24 56 L28 56" stroke="#2E4A8A" strokeWidth="0.5" fill="none" />
      <path d="M40 52 L40 56 L36 56" stroke="#2E4A8A" strokeWidth="0.5" fill="none" />

      {/* Sneakers */}
      <ellipse cx="26" cy="62" rx="6" ry="3.5" fill="url(#kidShoeGradient)" />
      <ellipse cx="38" cy="62" rx="6" ry="3.5" fill="url(#kidShoeGradient)" />
      {/* Shoe soles */}
      <ellipse cx="26" cy="64" rx="5" ry="1.5" fill="#0A0A0A" />
      <ellipse cx="38" cy="64" rx="5" ry="1.5" fill="#0A0A0A" />
      {/* Shoe laces */}
      <line x1="24" y1="60" x2="28" y2="60" stroke="white" strokeWidth="1" />
      <line x1="36" y1="60" x2="40" y2="60" stroke="white" strokeWidth="1" />
      {/* Shoe stripe */}
      <path d="M22 62 Q26 60 30 62" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M34 62 Q38 60 42 62" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}
