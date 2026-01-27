/**
 * Leprechaun Sprite Component
 * Enhanced with gradients, detailed clothing, and expressive features
 */

import type { SpriteProps } from '../types';

export function Leprechaun({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hat gradient */}
        <linearGradient id="leprechaunHatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E8B2E" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1B5E1B" />
        </linearGradient>
        {/* Skin gradient */}
        <linearGradient id="leprechaunSkinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </linearGradient>
        {/* Gold buckle gradient */}
        <linearGradient id="leprechaunGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Beard gradient */}
        <linearGradient id="leprechaunBeardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
        {/* Coat gradient */}
        <linearGradient id="leprechaunCoatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#32CD32" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#196619" />
        </linearGradient>
        {/* Shoe gradient */}
        <linearGradient id="leprechaunShoeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#5C3317" />
        </linearGradient>
      </defs>

      {/* Hat brim */}
      <ellipse cx="32" cy="10" rx="15" ry="6" fill="url(#leprechaunHatGradient)" />
      <ellipse cx="32" cy="9" rx="13" ry="4" fill="#2E8B2E" opacity="0.5" />

      {/* Hat top */}
      <rect x="21" y="2" width="22" height="10" fill="url(#leprechaunHatGradient)" rx="2" />
      <rect x="23" y="3" width="18" height="3" fill="#32CD32" opacity="0.3" />

      {/* Hat buckle */}
      <rect x="27" y="5" width="10" height="7" fill="url(#leprechaunGoldGradient)" rx="1" />
      <rect x="29" y="7" width="6" height="3" fill="#1B5E1B" rx="0.5" />

      {/* Hair peeking out */}
      <ellipse cx="20" cy="14" rx="4" ry="3" fill="url(#leprechaunBeardGradient)" />
      <ellipse cx="44" cy="14" rx="4" ry="3" fill="url(#leprechaunBeardGradient)" />

      {/* Head */}
      <circle cx="32" cy="20" r="10" fill="url(#leprechaunSkinGradient)" />

      {/* Rosy cheeks */}
      <circle cx="25" cy="22" r="2.5" fill="#FFB6C1" opacity="0.5" />
      <circle cx="39" cy="22" r="2.5" fill="#FFB6C1" opacity="0.5" />

      {/* Beard */}
      <ellipse cx="32" cy="28" rx="9" ry="5" fill="url(#leprechaunBeardGradient)" />
      <ellipse cx="32" cy="30" rx="7" ry="3" fill="#FF8C00" opacity="0.6" />

      {/* Eyebrows */}
      <path d="M25 16 Q27.5 14 30 16" stroke="#FF8C00" strokeWidth="1.5" fill="none" />
      <path d="M34 16 Q36.5 14 39 16" stroke="#FF8C00" strokeWidth="1.5" fill="none" />

      {/* Eyes */}
      <ellipse cx="27" cy="18" rx="2.5" ry="2" fill="white" />
      <ellipse cx="37" cy="18" rx="2.5" ry="2" fill="white" />
      <circle cx="27.5" cy="18" r="1.5" fill="#228B22" />
      <circle cx="37.5" cy="18" r="1.5" fill="#228B22" />
      <circle cx="28" cy="17.5" r="0.5" fill="white" />
      <circle cx="38" cy="17.5" r="0.5" fill="white" />

      {/* Nose */}
      <ellipse cx="32" cy="20" rx="2" ry="1.5" fill="#EEB89B" />

      {/* Smile */}
      <path d="M28 24 Q32 27 36 24" stroke="#B8860B" strokeWidth="1.2" fill="none" />

      {/* Coat / Body */}
      <rect x="19" y="32" width="26" height="18" fill="url(#leprechaunCoatGradient)" rx="3" />

      {/* Coat lapels */}
      <path d="M22 32 L28 40 L22 40 Z" fill="#196619" />
      <path d="M42 32 L36 40 L42 40 Z" fill="#196619" />

      {/* Gold buttons */}
      <circle cx="32" cy="36" r="2" fill="url(#leprechaunGoldGradient)" />
      <circle cx="32" cy="42" r="2" fill="url(#leprechaunGoldGradient)" />

      {/* Belt buckle on coat */}
      <rect x="27" y="46" width="10" height="4" fill="url(#leprechaunGoldGradient)" rx="1" />

      {/* Arms */}
      <rect x="7" y="34" width="13" height="6" fill="url(#leprechaunCoatGradient)" rx="3" />
      <rect x="44" y="34" width="13" height="6" fill="url(#leprechaunCoatGradient)" rx="3" />

      {/* Hands */}
      <circle cx="7" cy="37" r="4" fill="url(#leprechaunSkinGradient)" />
      <circle cx="57" cy="37" r="4" fill="url(#leprechaunSkinGradient)" />

      {/* Legs */}
      <rect x="23" y="50" width="7" height="12" fill="url(#leprechaunCoatGradient)" rx="2" />
      <rect x="34" y="50" width="7" height="12" fill="url(#leprechaunCoatGradient)" rx="2" />

      {/* Shoes */}
      <ellipse cx="26" cy="62" rx="6" ry="3" fill="url(#leprechaunShoeGradient)" />
      <ellipse cx="38" cy="62" rx="6" ry="3" fill="url(#leprechaunShoeGradient)" />

      {/* Shoe buckles */}
      <rect x="24" y="60" width="4" height="3" fill="url(#leprechaunGoldGradient)" rx="0.5" />
      <rect x="36" y="60" width="4" height="3" fill="url(#leprechaunGoldGradient)" rx="0.5" />

      {/* Shamrock accent on hat */}
      <path d="M40 6 Q42 4 42 6 Q44 6 42 8 Q42 10 40 8 Q38 8 40 6" fill="#32CD32" />
    </svg>
  );
}
