/**
 * Queen Sprite Component
 * Enhanced with gradients, regal attire, and expressive features
 */

import type { SpriteProps } from '../types';

export function Queen({ size = 64, color = '#4B0082' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Crown gradient */}
        <linearGradient id="queenCrownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Hair gradient */}
        <linearGradient id="queenHairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Skin gradient */}
        <linearGradient id="queenSkinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </linearGradient>
        {/* Gown gradient */}
        <linearGradient id="queenGownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6A0DAD" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#2E0854" />
        </linearGradient>
        {/* Gown shimmer */}
        <linearGradient id="queenGownShimmer" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#6A0DAD" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4B0082" stopOpacity="0" />
        </linearGradient>
        {/* Gem gradient - pink */}
        <radialGradient id="queenPinkGemGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF91A4" />
          <stop offset="50%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#DB3B6D" />
        </radialGradient>
        {/* Gem gradient - cyan */}
        <radialGradient id="queenCyanGemGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#7FFFD4" />
          <stop offset="50%" stopColor="#00CED1" />
          <stop offset="100%" stopColor="#008B8B" />
        </radialGradient>
        {/* Collar gradient */}
        <linearGradient id="queenCollarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
      </defs>

      {/* Crown / Krone */}
      <polygon points="20,11 24,2 28,9 32,0 36,9 40,2 44,11" fill="url(#queenCrownGradient)" />

      {/* Crown base band */}
      <rect x="20" y="10" width="24" height="4" fill="url(#queenCrownGradient)" />
      <rect x="22" y="11" width="20" height="2" fill="#FFE44D" opacity="0.4" />

      {/* Crown jewels */}
      <circle cx="24" cy="5" r="2.5" fill="url(#queenPinkGemGradient)" />
      <circle cx="32" cy="2" r="3" fill="url(#queenCyanGemGradient)" />
      <circle cx="40" cy="5" r="2.5" fill="url(#queenPinkGemGradient)" />

      {/* Jewel sparkles */}
      <circle cx="23" cy="4" r="0.8" fill="#FFFFFF" opacity="0.7" />
      <circle cx="31" cy="1" r="1" fill="#FFFFFF" opacity="0.7" />
      <circle cx="39" cy="4" r="0.8" fill="#FFFFFF" opacity="0.7" />

      {/* Hair / Haare - elegant updo */}
      <ellipse cx="32" cy="22" rx="16" ry="18" fill="url(#queenHairGradient)" />

      {/* Hair highlight */}
      <ellipse cx="28" cy="18" rx="6" ry="8" fill="#FFE44D" opacity="0.5" />

      {/* Side curls */}
      <ellipse cx="16" cy="24" rx="4" ry="6" fill="url(#queenHairGradient)" />
      <ellipse cx="48" cy="24" rx="4" ry="6" fill="url(#queenHairGradient)" />

      {/* Head / Kopf */}
      <circle cx="32" cy="20" r="11" fill="url(#queenSkinGradient)" />

      {/* Face highlight */}
      <ellipse cx="30" cy="17" rx="5" ry="4" fill="#FFF5E6" opacity="0.3" />

      {/* Eyes / Augen - elegant and wise */}
      <ellipse cx="27" cy="18" rx="3.5" ry="3" fill="white" />
      <ellipse cx="37" cy="18" rx="3.5" ry="3" fill="white" />
      <ellipse cx="27" cy="18" rx="2" ry="2.5" fill="#4B0082" />
      <ellipse cx="37" cy="18" rx="2" ry="2.5" fill="#4B0082" />
      <circle cx="27" cy="18" r="1.2" fill="black" />
      <circle cx="37" cy="18" r="1.2" fill="black" />
      <circle cx="28" cy="17" r="0.8" fill="white" />
      <circle cx="38" cy="17" r="0.8" fill="white" />

      {/* Eyebrows - regal arched */}
      <path d="M23 14 Q27 12 30 15" stroke="#DAA520" strokeWidth="1" fill="none" />
      <path d="M34 15 Q37 12 41 14" stroke="#DAA520" strokeWidth="1" fill="none" />

      {/* Eyelashes */}
      <line x1="24" y1="16" x2="22" y2="14" stroke="black" strokeWidth="1" strokeLinecap="round" />
      <line x1="40" y1="16" x2="42" y2="14" stroke="black" strokeWidth="1" strokeLinecap="round" />

      {/* Nose */}
      <ellipse cx="32" cy="21" rx="1.5" ry="1" fill="#EEB89B" />

      {/* Elegant smile / Mund */}
      <path d="M28 25 Q32 28 36 25" stroke="#FF69B4" strokeWidth="1.5" fill="none" />

      {/* Rosy cheeks */}
      <circle cx="24" cy="22" r="2" fill="#FFB6C1" opacity="0.4" />
      <circle cx="40" cy="22" r="2" fill="#FFB6C1" opacity="0.4" />

      {/* Earrings */}
      <circle cx="19" cy="22" r="2" fill="url(#queenCrownGradient)" />
      <ellipse cx="19" cy="26" rx="1.5" ry="2.5" fill="url(#queenPinkGemGradient)" />
      <circle cx="45" cy="22" r="2" fill="url(#queenCrownGradient)" />
      <ellipse cx="45" cy="26" rx="1.5" ry="2.5" fill="url(#queenPinkGemGradient)" />

      {/* Regal collar / Kragen */}
      <ellipse cx="32" cy="34" rx="14" ry="5" fill="url(#queenCollarGradient)" />
      <ellipse cx="32" cy="33" rx="12" ry="3" fill="#FFFFFF" opacity="0.5" />

      {/* Gown / Kleid */}
      <path d="M16 32 L10 64 L54 64 L48 32 Z" fill="url(#queenGownGradient)" />

      {/* Gown shimmer overlay */}
      <path d="M20 34 L16 62 L32 62 L28 34 Z" fill="url(#queenGownShimmer)" />

      {/* Gown neckline detail */}
      <ellipse cx="32" cy="36" rx="13" ry="5" fill="url(#queenCrownGradient)" />
      <ellipse cx="32" cy="35" rx="11" ry="3.5" fill="#FFE44D" opacity="0.3" />

      {/* Center jewel brooch */}
      <circle cx="32" cy="44" r="5" fill="url(#queenCrownGradient)" />
      <circle cx="32" cy="44" r="3.5" fill="url(#queenPinkGemGradient)" />
      <circle cx="31" cy="43" r="1" fill="#FFFFFF" opacity="0.6" />

      {/* Gown decorative trim */}
      <path d="M18 50 L46 50" stroke="url(#queenCrownGradient)" strokeWidth="1.5" />
      <path d="M14 58 L50 58" stroke="url(#queenCrownGradient)" strokeWidth="1.5" />

      {/* Small jewels on gown */}
      <circle cx="24" cy="50" r="1.5" fill="url(#queenCyanGemGradient)" />
      <circle cx="40" cy="50" r="1.5" fill="url(#queenCyanGemGradient)" />
      <circle cx="20" cy="58" r="1.5" fill="url(#queenPinkGemGradient)" />
      <circle cx="44" cy="58" r="1.5" fill="url(#queenPinkGemGradient)" />

      {/* Arms / Arme */}
      <rect x="5" y="34" width="13" height="6" fill="url(#queenGownGradient)" rx="3" />
      <rect x="46" y="34" width="13" height="6" fill="url(#queenGownGradient)" rx="3" />

      {/* Sleeve details */}
      <rect x="5" y="34" width="13" height="2" fill="url(#queenCrownGradient)" rx="1" />
      <rect x="46" y="34" width="13" height="2" fill="url(#queenCrownGradient)" rx="1" />

      {/* Hands / Hände */}
      <circle cx="5" cy="37" r="4" fill="url(#queenSkinGradient)" />
      <circle cx="59" cy="37" r="4" fill="url(#queenSkinGradient)" />

      {/* Royal rings */}
      <circle cx="4" cy="38" r="1.5" fill="url(#queenCrownGradient)" />
      <circle cx="4" cy="38" r="0.8" fill="url(#queenPinkGemGradient)" />
      <circle cx="60" cy="38" r="1.5" fill="url(#queenCrownGradient)" />
      <circle cx="60" cy="38" r="0.8" fill="url(#queenCyanGemGradient)" />

      {/* Scepter hint */}
      <rect x="1" cy="32" width="2" height="12" fill="url(#queenCrownGradient)" rx="1" />
      <circle cx="2" cy="30" r="3" fill="url(#queenCrownGradient)" />
      <circle cx="2" cy="30" r="2" fill="url(#queenCyanGemGradient)" />
    </svg>
  );
}
