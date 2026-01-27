/**
 * Elf Sprite Component
 * Enhanced with gradients, detailed clothing, and expressive features
 */

import type { SpriteProps } from '../types';

export function Elf({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="elfSkinGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFECD4" />
          <stop offset="100%" stopColor="#E8D4B8" />
        </radialGradient>
        {/* Hair gradient */}
        <linearGradient id="elfHairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Tunic gradient */}
        <linearGradient id="elfTunicGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#32CD32" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1B5E1B" />
        </linearGradient>
        {/* Ear gradient */}
        <linearGradient id="elfEarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8D4B8" />
          <stop offset="100%" stopColor="#FFECD4" />
        </linearGradient>
        {/* Boot gradient */}
        <linearGradient id="elfBootGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E8B2E" />
          <stop offset="100%" stopColor="#1B5E1B" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="elfLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#6B3A1F" />
        </linearGradient>
        {/* Gold accent gradient */}
        <linearGradient id="elfGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>

      {/* Pointed Ears */}
      <polygon points="18,18 8,6 22,14" fill="url(#elfEarGradient)" />
      <polygon points="46,18 56,6 42,14" fill="url(#elfEarGradient)" />
      {/* Inner ear detail */}
      <polygon points="18,17 12,10 20,14" fill="#E8C4A8" opacity="0.5" />
      <polygon points="46,17 52,10 44,14" fill="#E8C4A8" opacity="0.5" />

      {/* Flowing Hair */}
      <ellipse cx="32" cy="10" rx="12" ry="8" fill="url(#elfHairGradient)" />
      <ellipse cx="22" cy="14" rx="4" ry="6" fill="url(#elfHairGradient)" />
      <ellipse cx="42" cy="14" rx="4" ry="6" fill="url(#elfHairGradient)" />
      {/* Hair shine */}
      <ellipse cx="28" cy="8" rx="4" ry="2" fill="white" opacity="0.3" />

      {/* Head */}
      <circle cx="32" cy="16" r="10" fill="url(#elfSkinGradient)" />

      {/* Elegant eyebrows */}
      <path d="M25 11 Q28 10 30 12" stroke="#B8860B" strokeWidth="0.8" fill="none" />
      <path d="M34 12 Q36 10 39 11" stroke="#B8860B" strokeWidth="0.8" fill="none" />

      {/* Expressive green eyes */}
      <ellipse cx="28" cy="14" rx="2.5" ry="2" fill="#228B22" />
      <ellipse cx="36" cy="14" rx="2.5" ry="2" fill="#228B22" />
      <circle cx="28" cy="14" r="1" fill="black" />
      <circle cx="36" cy="14" r="1" fill="black" />
      {/* Eye highlights */}
      <circle cx="27" cy="13" r="0.6" fill="white" />
      <circle cx="35" cy="13" r="0.6" fill="white" />

      {/* Gentle smile */}
      <path d="M28 20 Q32 23 36 20" stroke="#C48080" strokeWidth="1.2" fill="none" />

      {/* Elegant Tunic */}
      <rect x="22" y="26" width="20" height="20" fill="url(#elfTunicGradient)" rx="3" />
      {/* Tunic V-neck detail */}
      <path d="M28 26 L32 32 L36 26" fill="#1B5E1B" />
      {/* Gold trim */}
      <rect x="22" y="26" width="20" height="2" fill="url(#elfGoldGradient)" />

      {/* Pointed tunic bottom */}
      <polygon points="22,46 32,58 42,46" fill="url(#elfTunicGradient)" />
      {/* Tunic decoration */}
      <path d="M32 48 L28 52 L32 56 L36 52 Z" fill="url(#elfGoldGradient)" opacity="0.6" />

      {/* Belt */}
      <rect x="22" y="38" width="20" height="3" fill="#6B3A1F" />
      <ellipse cx="32" cy="39.5" rx="3" ry="2" fill="url(#elfGoldGradient)" />

      {/* Sleeves */}
      <rect x="10" y="28" width="12" height="4" fill="url(#elfTunicGradient)" rx="2" />
      <rect x="42" y="28" width="12" height="4" fill="url(#elfTunicGradient)" rx="2" />

      {/* Graceful hands */}
      <circle cx="10" cy="30" r="3" fill="url(#elfSkinGradient)" />
      <circle cx="54" cy="30" r="3" fill="url(#elfSkinGradient)" />
      {/* Delicate fingers */}
      <ellipse cx="7" cy="31" rx="1.5" ry="1" fill="url(#elfSkinGradient)" />
      <ellipse cx="57" cy="31" rx="1.5" ry="1" fill="url(#elfSkinGradient)" />

      {/* Legs */}
      <rect x="26" y="56" width="4" height="6" fill="url(#elfLegGradient)" rx="1" />
      <rect x="34" y="56" width="4" height="6" fill="url(#elfLegGradient)" rx="1" />

      {/* Pointed elf boots */}
      <ellipse cx="28" cy="62" rx="5" ry="2.5" fill="url(#elfBootGradient)" />
      <ellipse cx="36" cy="62" rx="5" ry="2.5" fill="url(#elfBootGradient)" />
      {/* Curled boot tips */}
      <path d="M23 62 Q20 60 22 58" fill="url(#elfBootGradient)" />
      <path d="M41 62 Q44 60 42 58" fill="url(#elfBootGradient)" />
      {/* Boot bells */}
      <circle cx="22" cy="58" r="1.5" fill="url(#elfGoldGradient)" />
      <circle cx="42" cy="58" r="1.5" fill="url(#elfGoldGradient)" />
    </svg>
  );
}
