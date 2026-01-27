/**
 * Superhero Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Superhero({ size = 64, color = '#FF0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="superheroSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="70%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Suit gradient */}
        <linearGradient id="superheroSuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        {/* Cape gradient */}
        <linearGradient id="superheroCapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF3333" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#990000" />
        </linearGradient>
        {/* Emblem gradient */}
        <linearGradient id="superheroEmblemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Pants gradient */}
        <linearGradient id="superheroPantsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4169E1" />
          <stop offset="50%" stopColor="#0000FF" />
          <stop offset="100%" stopColor="#00008B" />
        </linearGradient>
        {/* Mask gradient */}
        <linearGradient id="superheroMaskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF3333" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        {/* Boot gradient */}
        <linearGradient id="superheroBootGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#AA0000" />
        </linearGradient>
      </defs>

      {/* Cape (behind body) */}
      <path d="M20 24 L6 38 L6 56 L20 42" fill="url(#superheroCapeGradient)" />
      <path d="M44 24 L58 38 L58 56 L44 42" fill="url(#superheroCapeGradient)" />
      {/* Cape inner shadow */}
      <path d="M20 26 L10 38 L10 52 L20 40" fill="#990000" opacity="0.3" />
      <path d="M44 26 L54 38 L54 52 L44 40" fill="#990000" opacity="0.3" />
      {/* Cape highlights */}
      <path d="M20 24 L8 36 L8 40" stroke="#FF6666" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Head */}
      <circle cx="32" cy="14" r="10" fill="url(#superheroSkinGradient)" />

      {/* Mask */}
      <rect x="20" y="4" width="24" height="8" fill="url(#superheroMaskGradient)" rx="3" />
      {/* Mask eye holes */}
      <ellipse cx="26" cy="8" rx="4" ry="3" fill="url(#superheroSkinGradient)" />
      <ellipse cx="38" cy="8" rx="4" ry="3" fill="url(#superheroSkinGradient)" />

      {/* Eyes */}
      <ellipse cx="28" cy="12" rx="2.5" ry="2" fill="white" />
      <ellipse cx="36" cy="12" rx="2.5" ry="2" fill="white" />
      <circle cx="28" cy="12" r="1.5" fill="black" />
      <circle cx="36" cy="12" r="1.5" fill="black" />
      <circle cx="27.5" cy="11.5" r="0.5" fill="white" />
      <circle cx="35.5" cy="11.5" r="0.5" fill="white" />

      {/* Determined smile */}
      <path d="M28 18 Q32 20 36 18" stroke="#8B4513" strokeWidth="1.5" fill="none" />

      {/* Body/Suit */}
      <rect x="20" y="24" width="24" height="24" fill="url(#superheroSuitGradient)" rx="3" />
      {/* Suit muscle definition */}
      <path d="M24 28 L24 42" stroke="#CC0000" strokeWidth="1" opacity="0.3" />
      <path d="M40 28 L40 42" stroke="#CC0000" strokeWidth="1" opacity="0.3" />
      <path d="M28 34 Q32 36 36 34" stroke="#CC0000" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Emblem */}
      <polygon points="32,26 26,38 38,38" fill="url(#superheroEmblemGradient)" />
      <polygon points="32,28 28,36 36,36" fill="#FFE44D" opacity="0.4" />
      {/* Emblem border */}
      <polygon points="32,26 26,38 38,38" fill="none" stroke="#DAA520" strokeWidth="0.5" />

      {/* Belt */}
      <rect x="20" y="44" width="24" height="4" fill="url(#superheroEmblemGradient)" />
      <rect x="28" y="43" width="8" height="6" fill="#DAA520" rx="1" />
      {/* Belt buckle shine */}
      <rect x="29" y="44" width="2" height="4" fill="#FFE44D" opacity="0.5" />

      {/* Arms */}
      <circle cx="8" cy="38" r="5" fill="url(#superheroSkinGradient)" />
      <circle cx="56" cy="38" r="5" fill="url(#superheroSkinGradient)" />
      {/* Gloves */}
      <circle cx="8" cy="38" r="3" fill="url(#superheroSuitGradient)" />
      <circle cx="56" cy="38" r="3" fill="url(#superheroSuitGradient)" />

      {/* Pants/Legs */}
      <rect x="24" y="48" width="6" height="14" fill="url(#superheroPantsGradient)" rx="1" />
      <rect x="34" y="48" width="6" height="14" fill="url(#superheroPantsGradient)" rx="1" />
      {/* Leg highlights */}
      <rect x="25" y="48" width="2" height="14" fill="#5B8DEE" opacity="0.3" />
      <rect x="35" y="48" width="2" height="14" fill="#5B8DEE" opacity="0.3" />

      {/* Boots */}
      <ellipse cx="27" cy="62" rx="5" ry="2.5" fill="url(#superheroBootGradient)" />
      <ellipse cx="37" cy="62" rx="5" ry="2.5" fill="url(#superheroBootGradient)" />
      {/* Boot tops */}
      <rect x="23" y="58" width="8" height="4" fill="url(#superheroBootGradient)" />
      <rect x="33" y="58" width="8" height="4" fill="url(#superheroBootGradient)" />
      {/* Boot shine */}
      <ellipse cx="25" cy="61" rx="1.5" ry="1" fill="#FF6666" opacity="0.4" />
      <ellipse cx="35" cy="61" rx="1.5" ry="1" fill="#FF6666" opacity="0.4" />

      {/* Power effect lines */}
      <line x1="2" y1="30" x2="6" y2="32" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
      <line x1="58" y1="30" x2="62" y2="32" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
