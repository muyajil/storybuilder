/**
 * Girl Sprite Component
 * Enhanced with gradients, detailed clothing, and expressive features
 */

import type { SpriteProps } from '../types';

export function Girl({ size = 64, color = '#FF69B4', hairColor = '#FFD700' }: SpriteProps & { hairColor?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="girlSkinGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFF0E6" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* Hair gradient */}
        <linearGradient id="girlHairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={hairColor} />
          <stop offset="50%" stopColor={hairColor === '#FFD700' ? '#DAA520' : hairColor} />
          <stop offset="100%" stopColor={hairColor === '#FFD700' ? '#B8860B' : hairColor} />
        </linearGradient>
        {/* Hair shine */}
        <linearGradient id="girlHairShineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Dress gradient */}
        <linearGradient id="girlDressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF85C0" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#C44E89" />
        </linearGradient>
        {/* Sleeve gradient */}
        <linearGradient id="girlSleeveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF85C0" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        {/* Shoe gradient */}
        <linearGradient id="girlShoeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
      </defs>

      {/* Long flowing hair - back */}
      <ellipse cx="32" cy="22" rx="18" ry="20" fill="url(#girlHairGradient)" />
      {/* Hair sides */}
      <ellipse cx="16" cy="30" rx="5" ry="14" fill="url(#girlHairGradient)" />
      <ellipse cx="48" cy="30" rx="5" ry="14" fill="url(#girlHairGradient)" />
      {/* Hair shine */}
      <ellipse cx="26" cy="14" rx="6" ry="4" fill="url(#girlHairShineGradient)" />

      {/* Head */}
      <circle cx="32" cy="18" r="12" fill="url(#girlSkinGradient)" />

      {/* Bangs */}
      <path d="M22 14 Q26 8 32 10 Q38 8 42 14" fill="url(#girlHairGradient)" />
      <path d="M24 12 Q28 16 32 14 Q36 16 40 12" fill="url(#girlHairGradient)" />

      {/* Cute eyebrows */}
      <path d="M26 13 Q28 12 30 13" stroke={hairColor === '#FFD700' ? '#B8860B' : '#4A3728'} strokeWidth="0.8" fill="none" />
      <path d="M34 13 Q36 12 38 13" stroke={hairColor === '#FFD700' ? '#B8860B' : '#4A3728'} strokeWidth="0.8" fill="none" />

      {/* Big expressive eyes */}
      <ellipse cx="28" cy="16" rx="2.5" ry="3" fill="#2F2F2F" />
      <ellipse cx="36" cy="16" rx="2.5" ry="3" fill="#2F2F2F" />
      {/* Eye highlights */}
      <circle cx="27" cy="15" r="1" fill="white" />
      <circle cx="35" cy="15" r="1" fill="white" />
      <circle cx="29" cy="17" r="0.5" fill="white" />
      <circle cx="37" cy="17" r="0.5" fill="white" />

      {/* Pretty eyelashes */}
      <path d="M25 13 L24 11" stroke="#2F2F2F" strokeWidth="0.5" />
      <path d="M27 12.5 L26.5 10.5" stroke="#2F2F2F" strokeWidth="0.5" />
      <path d="M39 13 L40 11" stroke="#2F2F2F" strokeWidth="0.5" />
      <path d="M37 12.5 L37.5 10.5" stroke="#2F2F2F" strokeWidth="0.5" />

      {/* Rosy cheeks */}
      <ellipse cx="24" cy="19" rx="2" ry="1.2" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="40" cy="19" rx="2" ry="1.2" fill="#FFB6C1" opacity="0.5" />

      {/* Cute nose */}
      <ellipse cx="32" cy="18" rx="1" ry="0.8" fill="#E8C4B0" />

      {/* Happy smile */}
      <path d="M28 22 Q32 26 36 22" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Hair bow/ribbon */}
      <ellipse cx="42" cy="10" rx="4" ry="2" fill={color} />
      <ellipse cx="44" cy="12" rx="3" ry="2" fill={color} />
      <circle cx="42" cy="11" r="1.5" fill="#C44E89" />

      {/* Pretty dress */}
      <path d="M24 30 L18 54 L46 54 L40 30 Z" fill="url(#girlDressGradient)" />
      {/* Dress collar */}
      <path d="M26 30 Q32 34 38 30" fill="#FF85C0" />
      {/* Dress details - ruffles */}
      <path d="M20 44 Q32 48 44 44" stroke="#C44E89" strokeWidth="0.5" fill="none" />
      <path d="M18 52 Q32 56 46 52" stroke="#C44E89" strokeWidth="0.5" fill="none" />
      {/* Dress pattern - polka dots */}
      <circle cx="28" cy="38" r="1.5" fill="white" opacity="0.5" />
      <circle cx="36" cy="42" r="1.5" fill="white" opacity="0.5" />
      <circle cx="30" cy="48" r="1.5" fill="white" opacity="0.5" />

      {/* Puffy sleeves */}
      <ellipse cx="16" cy="34" rx="6" ry="4" fill="url(#girlSleeveGradient)" />
      <ellipse cx="48" cy="34" rx="6" ry="4" fill="url(#girlSleeveGradient)" />

      {/* Arms */}
      <rect x="10" y="34" width="6" height="4" fill="url(#girlSleeveGradient)" rx="2" />
      <rect x="48" y="34" width="6" height="4" fill="url(#girlSleeveGradient)" rx="2" />

      {/* Cute hands */}
      <circle cx="10" cy="37" r="4" fill="url(#girlSkinGradient)" />
      <circle cx="54" cy="37" r="4" fill="url(#girlSkinGradient)" />
      {/* Tiny fingers */}
      <circle cx="7" cy="38" r="1.2" fill="url(#girlSkinGradient)" />
      <circle cx="57" cy="38" r="1.2" fill="url(#girlSkinGradient)" />

      {/* Legs */}
      <rect x="26" y="54" width="4" height="8" fill="url(#girlSkinGradient)" rx="1" />
      <rect x="34" y="54" width="4" height="8" fill="url(#girlSkinGradient)" rx="1" />

      {/* Cute Mary Jane shoes */}
      <ellipse cx="28" cy="62" rx="5" ry="2.5" fill="url(#girlShoeGradient)" />
      <ellipse cx="36" cy="62" rx="5" ry="2.5" fill="url(#girlShoeGradient)" />
      {/* Shoe straps */}
      <path d="M25 60 Q28 58 31 60" stroke="#1A1A1A" strokeWidth="1" fill="none" />
      <path d="M33 60 Q36 58 39 60" stroke="#1A1A1A" strokeWidth="1" fill="none" />
      {/* Shoe buttons */}
      <circle cx="28" cy="60" r="0.8" fill={color} />
      <circle cx="36" cy="60" r="0.8" fill={color} />
    </svg>
  );
}
