/**
 * Fairy Sprite Component
 * Enhanced with gradients, sparkles, detailed wings, and expressive features
 */

import type { SpriteProps } from '../types';

export function Fairy({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="fairySkinGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFF0E6" />
          <stop offset="100%" stopColor="#FFE4D6" />
        </radialGradient>
        {/* Hair gradient */}
        <linearGradient id="fairyHairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE878" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Wing gradient */}
        <radialGradient id="fairyWingGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFB6E1" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#DB5A9C" />
        </radialGradient>
        {/* Inner wing gradient */}
        <radialGradient id="fairyInnerWingGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </radialGradient>
        {/* Dress gradient */}
        <linearGradient id="fairyDressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF85C2" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#C44E89" />
        </linearGradient>
        {/* Wand gradient */}
        <linearGradient id="fairyWandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFF8DC" />
        </linearGradient>
        {/* Star gradient */}
        <radialGradient id="fairyStarGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFACD" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
      </defs>

      {/* Outer Wings with shimmer */}
      <ellipse cx="14" cy="32" rx="12" ry="20" fill="url(#fairyWingGradient)" opacity="0.7" />
      <ellipse cx="50" cy="32" rx="12" ry="20" fill="url(#fairyWingGradient)" opacity="0.7" />
      {/* Wing veins */}
      <path d="M14 16 Q10 32 14 48" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M50 16 Q54 32 50 48" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M14 32 Q8 32 6 32" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M50 32 Q56 32 58 32" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Inner Wings */}
      <ellipse cx="18" cy="32" rx="8" ry="14" fill="url(#fairyInnerWingGradient)" />
      <ellipse cx="46" cy="32" rx="8" ry="14" fill="url(#fairyInnerWingGradient)" />

      {/* Wing sparkles */}
      <circle cx="10" cy="26" r="1" fill="white" opacity="0.8" />
      <circle cx="54" cy="26" r="1" fill="white" opacity="0.8" />
      <circle cx="8" cy="38" r="0.8" fill="white" opacity="0.8" />
      <circle cx="56" cy="38" r="0.8" fill="white" opacity="0.8" />

      {/* Flowing Hair */}
      <ellipse cx="32" cy="18" rx="11" ry="13" fill="url(#fairyHairGradient)" />
      <ellipse cx="24" cy="22" rx="3" ry="6" fill="url(#fairyHairGradient)" />
      <ellipse cx="40" cy="22" rx="3" ry="6" fill="url(#fairyHairGradient)" />
      {/* Hair shine */}
      <ellipse cx="28" cy="12" rx="4" ry="2" fill="white" opacity="0.4" />

      {/* Flower crown */}
      <circle cx="26" cy="10" r="2" fill="#FF6B9D" />
      <circle cx="32" cy="8" r="2" fill="#FFB6C1" />
      <circle cx="38" cy="10" r="2" fill="#FF85A2" />
      <circle cx="26" cy="10" r="0.8" fill="#FFD700" />
      <circle cx="32" cy="8" r="0.8" fill="#FFD700" />
      <circle cx="38" cy="10" r="0.8" fill="#FFD700" />

      {/* Head */}
      <circle cx="32" cy="20" r="8" fill="url(#fairySkinGradient)" />

      {/* Delicate eyebrows */}
      <path d="M27 16 Q29 15 31 16" stroke="#DAA520" strokeWidth="0.5" fill="none" />
      <path d="M33 16 Q35 15 37 16" stroke="#DAA520" strokeWidth="0.5" fill="none" />

      {/* Sparkly eyes */}
      <ellipse cx="29" cy="19" rx="2" ry="2.2" fill="#4169E1" />
      <ellipse cx="35" cy="19" rx="2" ry="2.2" fill="#4169E1" />
      <circle cx="29" cy="18.5" r="0.8" fill="white" />
      <circle cx="35" cy="18.5" r="0.8" fill="white" />
      {/* Long lashes */}
      <path d="M27 17 L26 15" stroke="#333" strokeWidth="0.5" />
      <path d="M29 16.5 L29 14.5" stroke="#333" strokeWidth="0.5" />
      <path d="M37 17 L38 15" stroke="#333" strokeWidth="0.5" />
      <path d="M35 16.5 L35 14.5" stroke="#333" strokeWidth="0.5" />

      {/* Rosy cheeks */}
      <circle cx="26" cy="21" r="1.5" fill="#FFB6C1" opacity="0.5" />
      <circle cx="38" cy="21" r="1.5" fill="#FFB6C1" opacity="0.5" />

      {/* Sweet smile */}
      <path d="M29 24 Q32 26 35 24" stroke={color} strokeWidth="1.2" fill="none" />

      {/* Elegant Dress */}
      <path d="M26 28 L21 52 L43 52 L38 28 Z" fill="url(#fairyDressGradient)" />
      {/* Dress layers/ruffles */}
      <path d="M22 42 Q32 45 42 42" stroke="#C44E89" strokeWidth="0.5" fill="none" />
      <path d="M21 48 Q32 51 43 48" stroke="#C44E89" strokeWidth="0.5" fill="none" />

      {/* Dress sparkles */}
      <circle cx="30" cy="34" r="1.2" fill="white" opacity="0.9" />
      <circle cx="34" cy="40" r="1" fill="white" opacity="0.9" />
      <circle cx="28" cy="46" r="1.2" fill="white" opacity="0.9" />
      <circle cx="36" cy="44" r="0.8" fill="white" opacity="0.9" />
      <circle cx="32" cy="38" r="0.6" fill="white" opacity="0.9" />

      {/* Delicate Arms */}
      <path d="M26 30 L17 37" stroke="url(#fairySkinGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M38 30 L47 37" stroke="url(#fairySkinGradient)" strokeWidth="4" strokeLinecap="round" />
      {/* Tiny hands */}
      <circle cx="16" cy="38" r="2.5" fill="url(#fairySkinGradient)" />
      <circle cx="48" cy="38" r="2.5" fill="url(#fairySkinGradient)" />

      {/* Wand */}
      <rect x="46" y="34" width="12" height="2" fill="url(#fairyWandGradient)" rx="1" />
      {/* Star on wand */}
      <polygon points="60,35 62,32 64,35 62,38" fill="url(#fairyStarGradient)" />
      <polygon points="60,35 58,33 62,35 58,37" fill="url(#fairyStarGradient)" />
      {/* Star sparkle */}
      <circle cx="61" cy="35" r="1" fill="white" opacity="0.8" />

      {/* Dainty Legs */}
      <rect x="28" y="52" width="3" height="8" fill="url(#fairySkinGradient)" rx="1" />
      <rect x="33" y="52" width="3" height="8" fill="url(#fairySkinGradient)" rx="1" />

      {/* Cute pointed shoes */}
      <ellipse cx="29" cy="60" rx="4" ry="2" fill={color} />
      <ellipse cx="35" cy="60" rx="4" ry="2" fill={color} />
      {/* Shoe bows */}
      <circle cx="28" cy="59" r="1" fill="#FF85C2" />
      <circle cx="34" cy="59" r="1" fill="#FF85C2" />

      {/* Floating sparkles around fairy */}
      <circle cx="20" cy="12" r="0.8" fill="#FFD700" opacity="0.7" />
      <circle cx="44" cy="14" r="0.6" fill="#FFD700" opacity="0.7" />
      <circle cx="12" cy="48" r="0.7" fill="#FFD700" opacity="0.7" />
      <circle cx="52" cy="46" r="0.5" fill="#FFD700" opacity="0.7" />
    </svg>
  );
}
