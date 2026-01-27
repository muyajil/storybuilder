/**
 * Wizard Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Wizard({ size = 64, color = '#4B0082' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hat gradient */}
        <linearGradient id="wizardHatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B238E" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#2E0854" />
        </linearGradient>
        {/* Skin gradient */}
        <radialGradient id="wizardSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="70%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Beard gradient */}
        <linearGradient id="wizardBeardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>
        {/* Robe gradient */}
        <linearGradient id="wizardRobeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B238E" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#2E0854" />
        </linearGradient>
        {/* Star gradient */}
        <radialGradient id="wizardStarGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF99" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Wand gradient */}
        <linearGradient id="wizardWandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
      </defs>

      {/* Hat */}
      <polygon points="32,0 16,30 48,30" fill="url(#wizardHatGradient)" />
      {/* Hat highlight */}
      <polygon points="32,4 22,26 32,22" fill="#7B339E" opacity="0.4" />
      {/* Hat brim */}
      <ellipse cx="32" cy="30" rx="18" ry="5" fill="url(#wizardHatGradient)" />
      {/* Hat folds */}
      <path d="M26 20 Q28 24 26 28" stroke="#2E0854" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Stars on hat */}
      <polygon points="26,12 25,15 28,15" fill="url(#wizardStarGradient)" />
      <circle cx="26.3" cy="13.5" r="0.5" fill="#FFFF99" />
      <polygon points="38,18 36,22 40,22" fill="url(#wizardStarGradient)" />
      <circle cx="38" cy="19.5" r="0.4" fill="#FFFF99" />
      <polygon points="22,22 21,24 23,24" fill="url(#wizardStarGradient)" />

      {/* Head */}
      <circle cx="32" cy="34" r="9" fill="url(#wizardSkinGradient)" />

      {/* Eyes */}
      <ellipse cx="29" cy="33" rx="2" ry="1.5" fill="white" />
      <ellipse cx="35" cy="33" rx="2" ry="1.5" fill="white" />
      <circle cx="29" cy="33" r="1.2" fill="#4169E1" />
      <circle cx="35" cy="33" r="1.2" fill="#4169E1" />
      <circle cx="29" cy="33" r="0.6" fill="black" />
      <circle cx="35" cy="33" r="0.6" fill="black" />
      {/* Eye shine */}
      <circle cx="28.5" cy="32.5" r="0.4" fill="white" />
      <circle cx="34.5" cy="32.5" r="0.4" fill="white" />
      {/* Eyebrows */}
      <path d="M26 30 Q29 29 31 31" stroke="#888" strokeWidth="0.8" fill="none" />
      <path d="M38 30 Q35 29 33 31" stroke="#888" strokeWidth="0.8" fill="none" />

      {/* Nose */}
      <ellipse cx="32" cy="36" rx="1" ry="1.5" fill="#DEB887" />

      {/* Beard */}
      <path d="M23 38 Q32 56 41 38" fill="url(#wizardBeardGradient)" />
      {/* Inner beard */}
      <path d="M25 38 Q32 52 39 38" fill="#E8E8E8" />
      {/* Beard texture */}
      <path d="M28 42 Q32 48 36 42" stroke="#D0D0D0" strokeWidth="0.5" fill="none" />
      <path d="M30 46 Q32 50 34 46" stroke="#D0D0D0" strokeWidth="0.5" fill="none" />

      {/* Mustache */}
      <path d="M28 38 Q32 40 36 38" fill="#E8E8E8" stroke="#D0D0D0" strokeWidth="0.3" />

      {/* Robe */}
      <path d="M18 42 L14 64 L50 64 L46 42 Z" fill="url(#wizardRobeGradient)" />
      {/* Robe folds */}
      <path d="M24 46 L22 62" stroke="#2E0854" strokeWidth="0.5" />
      <path d="M40 46 L42 62" stroke="#2E0854" strokeWidth="0.5" />
      <path d="M32 44 L32 60" stroke="#2E0854" strokeWidth="0.5" />
      {/* Robe highlight */}
      <path d="M20 44 L18 62" stroke="#7B339E" strokeWidth="1" opacity="0.3" />

      {/* Stars on robe */}
      <polygon points="26,52 24,56 28,56" fill="url(#wizardStarGradient)" />
      <circle cx="26" cy="53.5" r="0.4" fill="#FFFF99" />
      <polygon points="40,58 38,62 42,62" fill="url(#wizardStarGradient)" />
      <circle cx="40" cy="59.5" r="0.4" fill="#FFFF99" />

      {/* Arms */}
      <path d="M18 44 L6 52" stroke="url(#wizardRobeGradient)" strokeWidth="7" strokeLinecap="round" />
      <path d="M46 44 L58 52" stroke="url(#wizardRobeGradient)" strokeWidth="7" strokeLinecap="round" />
      {/* Sleeve highlights */}
      <path d="M18 43 L8 50" stroke="#7B339E" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

      {/* Hands */}
      <circle cx="6" cy="52" r="3" fill="url(#wizardSkinGradient)" />
      <circle cx="58" cy="52" r="3" fill="url(#wizardSkinGradient)" />

      {/* Wand */}
      <rect x="56" y="48" width="10" height="4" fill="url(#wizardWandGradient)" rx="1" />
      {/* Wand tip */}
      <polygon points="66,48 68,44 68,54 66,52" fill="url(#wizardStarGradient)" />
      {/* Wand sparkle */}
      <circle cx="67" cy="49" r="1" fill="#FFFF99" />

      {/* Magic sparkles */}
      <circle cx="62" cy="44" r="1" fill="url(#wizardStarGradient)" opacity="0.7" />
      <circle cx="66" cy="40" r="0.8" fill="#9370DB" opacity="0.6" />
      <circle cx="60" cy="38" r="0.6" fill="url(#wizardStarGradient)" opacity="0.5" />
    </svg>
  );
}
