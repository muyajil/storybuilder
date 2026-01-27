/**
 * Baby Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Baby({ size = 64, color = '#FFB6C1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="babySkinGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE8D6" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* Onesie gradient */}
        <linearGradient id="babyOnesieGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFC8D4" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#FF9EB5" />
        </linearGradient>
        {/* Hair gradient */}
        <radialGradient id="babyHairGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B4513" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="babyEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#444" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        {/* Cheek gradient */}
        <radialGradient id="babyCheekGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Kopf / Head */}
      <circle cx="32" cy="24" r="16" fill="url(#babySkinGradient)" />
      {/* Head highlight */}
      <ellipse cx="26" cy="18" rx="6" ry="4" fill="white" opacity="0.2" />

      {/* Haare / Hair - cute curly wisps */}
      <path d="M20 16 Q22 8 28 10" stroke="url(#babyHairGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M28 12 Q32 6 36 10" stroke="url(#babyHairGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M36 10 Q42 8 44 16" stroke="url(#babyHairGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Augen / Eyes - big and cute */}
      <ellipse cx="26" cy="22" rx="4" ry="4.5" fill="white" />
      <ellipse cx="38" cy="22" rx="4" ry="4.5" fill="white" />
      <circle cx="26" cy="23" r="3" fill="url(#babyEyeGradient)" />
      <circle cx="38" cy="23" r="3" fill="url(#babyEyeGradient)" />
      {/* Eye shine */}
      <circle cx="25" cy="21" r="1.2" fill="white" />
      <circle cx="37" cy="21" r="1.2" fill="white" />
      <circle cx="27" cy="24" r="0.6" fill="white" />
      <circle cx="39" cy="24" r="0.6" fill="white" />

      {/* Eyebrows - soft */}
      <path d="M23 18 Q26 17 29 18" stroke="#C4A57B" strokeWidth="1" fill="none" />
      <path d="M35 18 Q38 17 41 18" stroke="#C4A57B" strokeWidth="1" fill="none" />

      {/* Wangen / Cheeks */}
      <circle cx="20" cy="28" r="4" fill="url(#babyCheekGradient)" />
      <circle cx="44" cy="28" r="4" fill="url(#babyCheekGradient)" />

      {/* Mund / Mouth - pacifier or smile */}
      <ellipse cx="32" cy="30" rx="3" ry="2" fill="#FF8FAB" />
      {/* Inner mouth */}
      <ellipse cx="32" cy="30.5" rx="2" ry="1" fill="#FF6B8A" />

      {/* Strampler / Onesie */}
      <ellipse cx="32" cy="50" rx="16" ry="14" fill="url(#babyOnesieGradient)" />
      {/* Onesie pattern - little hearts */}
      <path d="M26 46 L27 45 L28 46 L27 48 Z" fill="#FF8FAB" opacity="0.6" />
      <path d="M36 50 L37 49 L38 50 L37 52 Z" fill="#FF8FAB" opacity="0.6" />
      <path d="M30 54 L31 53 L32 54 L31 56 Z" fill="#FF8FAB" opacity="0.6" />
      {/* Onesie snap buttons */}
      <circle cx="28" cy="58" r="1.5" fill="#C0C0C0" />
      <circle cx="32" cy="59" r="1.5" fill="#C0C0C0" />
      <circle cx="36" cy="58" r="1.5" fill="#C0C0C0" />

      {/* Arme / Arms */}
      <ellipse cx="16" cy="46" rx="7" ry="5" fill="url(#babyOnesieGradient)" />
      <ellipse cx="48" cy="46" rx="7" ry="5" fill="url(#babyOnesieGradient)" />

      {/* Hände / Hands - chubby baby hands */}
      <circle cx="11" cy="46" r="4.5" fill="url(#babySkinGradient)" />
      <circle cx="53" cy="46" r="4.5" fill="url(#babySkinGradient)" />
      {/* Little fingers */}
      <circle cx="8" cy="44" r="1.5" fill="url(#babySkinGradient)" />
      <circle cx="8" cy="48" r="1.5" fill="url(#babySkinGradient)" />
      <circle cx="56" cy="44" r="1.5" fill="url(#babySkinGradient)" />
      <circle cx="56" cy="48" r="1.5" fill="url(#babySkinGradient)" />

      {/* Füße / Feet */}
      <ellipse cx="24" cy="60" rx="6" ry="4" fill="url(#babyOnesieGradient)" />
      <ellipse cx="40" cy="60" rx="6" ry="4" fill="url(#babyOnesieGradient)" />
      {/* Foot details */}
      <ellipse cx="22" cy="61" rx="2" ry="1" fill="#FF9EB5" />
      <ellipse cx="38" cy="61" rx="2" ry="1" fill="#FF9EB5" />
    </svg>
  );
}
