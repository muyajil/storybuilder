/**
 * LionKing Sprite Component
 * Enhanced with gradients, majestic mane, and expressive features
 */

import type { SpriteProps } from '../types';

export function LionKing({ size = 64, color = '#DAA520' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Mane gradient */}
        <radialGradient id="lionKingManeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#CD853F" />
          <stop offset="60%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5C3317" />
        </radialGradient>
        {/* Fur gradient */}
        <linearGradient id="lionKingFurGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F4C430" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Snout gradient */}
        <linearGradient id="lionKingSnoutGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF5E6" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </linearGradient>
        {/* Crown gradient */}
        <linearGradient id="lionKingCrownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Nose gradient */}
        <radialGradient id="lionKingNoseGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#5C3317" />
          <stop offset="100%" stopColor="#3D2314" />
        </radialGradient>
        {/* Inner ear gradient */}
        <linearGradient id="lionKingEarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#CD853F" />
          <stop offset="100%" stopColor="#8B4513" />
        </linearGradient>
      </defs>

      {/* Outer mane - layered for depth */}
      <ellipse cx="32" cy="24" rx="26" ry="24" fill="url(#lionKingManeGradient)" />

      {/* Mane detail tufts */}
      <ellipse cx="12" cy="18" rx="6" ry="8" fill="#8B4513" />
      <ellipse cx="52" cy="18" rx="6" ry="8" fill="#8B4513" />
      <ellipse cx="8" cy="28" rx="5" ry="7" fill="#6B3510" />
      <ellipse cx="56" cy="28" rx="5" ry="7" fill="#6B3510" />
      <ellipse cx="16" cy="38" rx="4" ry="6" fill="#5C3317" />
      <ellipse cx="48" cy="38" rx="4" ry="6" fill="#5C3317" />

      {/* Inner mane highlight */}
      <ellipse cx="32" cy="22" rx="20" ry="18" fill="#A0522D" opacity="0.4" />

      {/* Head / Kopf */}
      <ellipse cx="32" cy="26" rx="16" ry="14" fill="url(#lionKingFurGradient)" />

      {/* Face highlight */}
      <ellipse cx="32" cy="24" rx="12" ry="10" fill="#F4C430" opacity="0.3" />

      {/* Ears / Ohren */}
      <ellipse cx="14" cy="12" rx="7" ry="7" fill="url(#lionKingFurGradient)" />
      <ellipse cx="50" cy="12" rx="7" ry="7" fill="url(#lionKingFurGradient)" />
      <ellipse cx="14" cy="12" rx="4" ry="4" fill="url(#lionKingEarGradient)" />
      <ellipse cx="50" cy="12" rx="4" ry="4" fill="url(#lionKingEarGradient)" />

      {/* Snout / Schnauze */}
      <ellipse cx="32" cy="32" rx="9" ry="7" fill="url(#lionKingSnoutGradient)" />

      {/* Nose / Nase */}
      <ellipse cx="32" cy="30" rx="5" ry="3.5" fill="url(#lionKingNoseGradient)" />
      <ellipse cx="32" cy="29" rx="2" ry="1" fill="#8B4513" opacity="0.3" />

      {/* Mouth / Mund */}
      <path d="M32 33 L32 36" stroke="#5C3317" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 36 Q32 39 36 36" stroke="#5C3317" strokeWidth="1" fill="none" />

      {/* Whisker dots */}
      <circle cx="26" cy="32" r="1" fill="#5C3317" />
      <circle cx="24" cy="34" r="1" fill="#5C3317" />
      <circle cx="38" cy="32" r="1" fill="#5C3317" />
      <circle cx="40" cy="34" r="1" fill="#5C3317" />

      {/* Eyes / Augen */}
      <ellipse cx="24" cy="24" rx="5" ry="6" fill="white" />
      <ellipse cx="40" cy="24" rx="5" ry="6" fill="white" />
      <ellipse cx="24" cy="24" rx="3" ry="4" fill="#8B4513" />
      <ellipse cx="40" cy="24" rx="3" ry="4" fill="#8B4513" />
      <circle cx="24" cy="24" r="2" fill="black" />
      <circle cx="40" cy="24" r="2" fill="black" />
      <circle cx="25" cy="23" r="1" fill="white" />
      <circle cx="41" cy="23" r="1" fill="white" />

      {/* Eyebrows - wise expression */}
      <path d="M19 18 Q24 16 28 19" stroke="#8B4513" strokeWidth="1.5" fill="none" />
      <path d="M36 19 Q40 16 45 18" stroke="#8B4513" strokeWidth="1.5" fill="none" />

      {/* Crown / Krone */}
      <polygon points="22,4 26,-2 30,3 32,-3 34,3 38,-2 42,4" fill="url(#lionKingCrownGradient)" />
      <rect x="24" y="4" width="16" height="4" fill="url(#lionKingCrownGradient)" />

      {/* Crown gems */}
      <circle cx="26" cy="2" r="1.5" fill="#FF0000" />
      <circle cx="32" cy="0" r="2" fill="#00CED1" />
      <circle cx="38" cy="2" r="1.5" fill="#FF0000" />

      {/* Body / Körper */}
      <ellipse cx="32" cy="52" rx="15" ry="13" fill="url(#lionKingFurGradient)" />

      {/* Body highlight */}
      <ellipse cx="32" cy="50" rx="10" ry="8" fill="#F4C430" opacity="0.3" />

      {/* Front legs / Beine */}
      <rect x="19" y="56" width="9" height="8" fill="url(#lionKingFurGradient)" rx="3" />
      <rect x="36" y="56" width="9" height="8" fill="url(#lionKingFurGradient)" rx="3" />

      {/* Paws */}
      <ellipse cx="23" cy="64" rx="5" ry="2" fill="#B8860B" />
      <ellipse cx="41" cy="64" rx="5" ry="2" fill="#B8860B" />
    </svg>
  );
}
