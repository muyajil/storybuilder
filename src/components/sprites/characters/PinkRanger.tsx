/**
 * PinkRanger Sprite Component
 * Enhanced with gradients, detailed suit, and dynamic appearance
 */

import type { SpriteProps } from '../types';

export function PinkRanger({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Suit gradient */}
        <linearGradient id="pinkRangerSuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF85B3" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#DB5C8C" />
        </linearGradient>
        {/* Helmet gradient */}
        <linearGradient id="pinkRangerHelmetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF9AC5" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC5490" />
        </linearGradient>
        {/* Visor gradient */}
        <linearGradient id="pinkRangerVisorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="30%" stopColor="#2A2A2A" />
          <stop offset="70%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#333333" />
        </linearGradient>
        {/* Gold accent gradient */}
        <linearGradient id="pinkRangerGoldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* White glove/boot gradient */}
        <linearGradient id="pinkRangerWhiteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        {/* Diamond pattern gradient */}
        <linearGradient id="pinkRangerDiamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FF69B4" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Helmet / Helm */}
      <ellipse cx="32" cy="16" rx="15" ry="13" fill="url(#pinkRangerHelmetGradient)" />

      {/* Helmet highlight */}
      <ellipse cx="28" cy="10" rx="6" ry="4" fill="#FF9AC5" opacity="0.4" />

      {/* Helmet ridge */}
      <path d="M18 16 Q32 8 46 16" stroke="#CC5490" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Visor / Visier */}
      <ellipse cx="32" cy="18" rx="13" ry="7" fill="url(#pinkRangerVisorGradient)" />
      <ellipse cx="32" cy="18" rx="11" ry="5" fill="#333333" opacity="0.3" />

      {/* Visor shine */}
      <ellipse cx="26" cy="16" rx="4" ry="2" fill="#FFFFFF" opacity="0.15" />

      {/* Animal symbol (Pterodactyl/crane shape) */}
      <path d="M26 8 Q32 4 38 8 Q32 13 26 8" fill="url(#pinkRangerGoldGradient)" />
      <circle cx="32" cy="8" r="1.5" fill="#FFFFFF" opacity="0.5" />

      {/* Body / Körper */}
      <rect x="19" y="28" width="26" height="23" fill="url(#pinkRangerSuitGradient)" rx="3" />

      {/* Body shading */}
      <rect x="19" y="28" width="9" height="23" fill="#CC5490" opacity="0.2" rx="3" />

      {/* Diamond pattern / Diamant-Muster */}
      <polygon points="32,30 24,40 32,50 40,40" fill="url(#pinkRangerDiamondGradient)" />
      <polygon points="32,32 26,40 32,48 38,40" stroke="#FFFFFF" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Chest detail line */}
      <path d="M24 30 L32 36 L40 30" stroke="#CC5490" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Belt / Gürtel */}
      <rect x="17" y="44" width="30" height="7" fill="url(#pinkRangerGoldGradient)" rx="2" />
      <rect x="19" y="45" width="26" height="5" fill="#B8860B" opacity="0.3" rx="1" />

      {/* Belt buckle / Morpher */}
      <rect x="27" y="42" width="10" height="11" fill="url(#pinkRangerGoldGradient)" rx="2" />
      <rect x="29" y="44" width="6" height="7" fill="#CC5490" rx="1" />
      <circle cx="32" cy="47.5" r="2" fill="#FFFFFF" opacity="0.5" />

      {/* Arms / Arme */}
      <rect x="7" y="30" width="12" height="7" fill="url(#pinkRangerSuitGradient)" rx="3" />
      <rect x="45" y="30" width="12" height="7" fill="url(#pinkRangerSuitGradient)" rx="3" />

      {/* Arm detail */}
      <rect x="7" y="30" width="4" height="7" fill="#CC5490" opacity="0.2" rx="3" />
      <rect x="53" y="30" width="4" height="7" fill="#FF85B3" opacity="0.3" rx="3" />

      {/* Gloves / Handschuhe */}
      <rect x="3" y="36" width="9" height="9" fill="url(#pinkRangerWhiteGradient)" rx="3" />
      <rect x="52" y="36" width="9" height="9" fill="url(#pinkRangerWhiteGradient)" rx="3" />

      {/* Glove cuffs */}
      <rect x="3" y="36" width="9" height="2" fill="#E0E0E0" rx="1" />
      <rect x="52" y="36" width="9" height="2" fill="#E0E0E0" rx="1" />

      {/* Glove details */}
      <line x1="5" y1="40" x2="10" y2="40" stroke="#CCCCCC" strokeWidth="0.5" />
      <line x1="54" y1="40" x2="59" y2="40" stroke="#CCCCCC" strokeWidth="0.5" />

      {/* Legs / Beine */}
      <rect x="21" y="50" width="9" height="14" fill="url(#pinkRangerSuitGradient)" rx="2" />
      <rect x="34" y="50" width="9" height="14" fill="url(#pinkRangerSuitGradient)" rx="2" />

      {/* Leg shading */}
      <rect x="21" y="50" width="3" height="14" fill="#CC5490" opacity="0.2" rx="2" />
      <rect x="34" y="50" width="3" height="14" fill="#CC5490" opacity="0.2" rx="2" />

      {/* Boots / Stiefel */}
      <rect x="19" y="58" width="11" height="6" fill="url(#pinkRangerWhiteGradient)" rx="2" />
      <rect x="34" y="58" width="11" height="6" fill="url(#pinkRangerWhiteGradient)" rx="2" />

      {/* Boot cuffs */}
      <rect x="19" y="58" width="11" height="2" fill="#E0E0E0" rx="1" />
      <rect x="34" y="58" width="11" height="2" fill="#E0E0E0" rx="1" />

      {/* Boot soles */}
      <rect x="19" y="62" width="11" height="2" fill="#CCCCCC" rx="1" />
      <rect x="34" y="62" width="11" height="2" fill="#CCCCCC" rx="1" />

      {/* Action pose sparkle */}
      <circle cx="10" cy="28" r="1.5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="54" cy="28" r="1.5" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}
