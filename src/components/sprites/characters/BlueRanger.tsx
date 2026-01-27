/**
 * BlueRanger Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function BlueRanger({ size = 64, color = '#0000FF' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Helmet gradient */}
        <radialGradient id="blueRangerHelmetGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4D4DFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0000AA" />
        </radialGradient>
        {/* Visor gradient */}
        <linearGradient id="blueRangerVisorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#333" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#444" />
        </linearGradient>
        {/* Body gradient */}
        <linearGradient id="blueRangerBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4D4DFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0000AA" />
        </linearGradient>
        {/* Gold gradient */}
        <linearGradient id="blueRangerGoldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#CC9900" />
        </linearGradient>
        {/* White glove/boot gradient */}
        <linearGradient id="blueRangerWhiteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        {/* Diamond gradient */}
        <linearGradient id="blueRangerDiamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Helm / Helmet */}
      <ellipse cx="32" cy="16" rx="14" ry="12" fill="url(#blueRangerHelmetGradient)" />
      {/* Helmet highlight */}
      <ellipse cx="26" cy="10" rx="5" ry="3" fill="#6666FF" opacity="0.4" />

      {/* Helmet ridge/crest */}
      <path d="M32 4 L34 8 L32 10 L30 8 Z" fill="url(#blueRangerGoldGradient)" />

      {/* Visier / Visor */}
      <ellipse cx="32" cy="18" rx="12" ry="6" fill="url(#blueRangerVisorGradient)" />
      {/* Visor shine */}
      <ellipse cx="28" cy="16" rx="4" ry="2" fill="white" opacity="0.2" />
      {/* Visor inner detail */}
      <ellipse cx="32" cy="18" rx="10" ry="4" fill="#222" opacity="0.5" />

      {/* Tier-Symbol / Animal symbol on forehead */}
      <ellipse cx="32" cy="10" rx="4" ry="3" fill="url(#blueRangerGoldGradient)" />
      {/* Symbol detail */}
      <path d="M30 10 L32 8 L34 10 L32 12 Z" fill="#FFE066" />

      {/* Mouth plate */}
      <rect x="28" y="22" width="8" height="4" fill="#C0C0C0" rx="1" />
      <line x1="29" y1="23" x2="35" y2="23" stroke="#888" strokeWidth="0.5" />
      <line x1="29" y1="25" x2="35" y2="25" stroke="#888" strokeWidth="0.5" />

      {/* Körper / Body */}
      <rect x="20" y="28" width="24" height="22" fill="url(#blueRangerBodyGradient)" rx="2" />
      {/* Body highlight */}
      <rect x="21" y="28" width="3" height="22" fill="#4D4DFF" opacity="0.3" rx="1" />

      {/* Diamant-Muster / Diamond pattern */}
      <polygon points="32,32 26,40 32,48 38,40" fill="url(#blueRangerDiamondGradient)" />
      {/* Diamond outline */}
      <polygon points="32,32 26,40 32,48 38,40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />

      {/* Gürtel / Belt */}
      <rect x="18" y="44" width="28" height="6" fill="url(#blueRangerGoldGradient)" />
      {/* Belt buckle (morpher) */}
      <rect x="27" y="42" width="10" height="10" fill="url(#blueRangerGoldGradient)" rx="1" />
      {/* Morpher details */}
      <circle cx="32" cy="47" r="3" fill="#CC9900" />
      <circle cx="32" cy="47" r="2" fill="#FFE066" />
      <polygon points="32,45 30,47 32,49 34,47" fill="#FF0000" />

      {/* Arme / Arms */}
      <rect x="8" y="30" width="12" height="6" fill="url(#blueRangerBodyGradient)" rx="2" />
      <rect x="44" y="30" width="12" height="6" fill="url(#blueRangerBodyGradient)" rx="2" />

      {/* Handschuhe / Gloves */}
      <rect x="4" y="36" width="8" height="10" fill="url(#blueRangerWhiteGradient)" rx="2" />
      <rect x="52" y="36" width="8" height="10" fill="url(#blueRangerWhiteGradient)" rx="2" />
      {/* Glove cuffs */}
      <rect x="4" y="36" width="8" height="2" fill="url(#blueRangerGoldGradient)" />
      <rect x="52" y="36" width="8" height="2" fill="url(#blueRangerGoldGradient)" />

      {/* Beine / Legs */}
      <rect x="22" y="50" width="8" height="14" fill="url(#blueRangerBodyGradient)" rx="2" />
      <rect x="34" y="50" width="8" height="14" fill="url(#blueRangerBodyGradient)" rx="2" />
      {/* Leg highlights */}
      <rect x="23" y="50" width="1.5" height="14" fill="#4D4DFF" opacity="0.3" rx="0.5" />
      <rect x="35" y="50" width="1.5" height="14" fill="#4D4DFF" opacity="0.3" rx="0.5" />

      {/* Stiefel / Boots */}
      <rect x="20" y="58" width="10" height="6" fill="url(#blueRangerWhiteGradient)" rx="2" />
      <rect x="34" y="58" width="10" height="6" fill="url(#blueRangerWhiteGradient)" rx="2" />
      {/* Boot cuffs */}
      <rect x="20" y="58" width="10" height="2" fill="url(#blueRangerGoldGradient)" />
      <rect x="34" y="58" width="10" height="2" fill="url(#blueRangerGoldGradient)" />
      {/* Boot soles */}
      <rect x="20" y="62" width="10" height="2" fill="#333" rx="1" />
      <rect x="34" y="62" width="10" height="2" fill="#333" rx="1" />
    </svg>
  );
}
