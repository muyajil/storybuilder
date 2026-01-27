/**
 * YellowRanger Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function YellowRanger({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Suit gradient */}
        <linearGradient id="yellowRangerSuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Helmet gradient */}
        <radialGradient id="yellowRangerHelmetGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        {/* Visor gradient */}
        <linearGradient id="yellowRangerVisorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        {/* Belt gradient */}
        <linearGradient id="yellowRangerBeltGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        {/* White accent gradient */}
        <linearGradient id="yellowRangerWhiteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        {/* Animal emblem gradient */}
        <linearGradient id="yellowRangerEmblemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>

      {/* Helmet */}
      <ellipse cx="32" cy="16" rx="15" ry="13" fill="url(#yellowRangerHelmetGradient)" />
      {/* Helmet highlight */}
      <ellipse cx="26" cy="10" rx="6" ry="4" fill="#FFE44D" opacity="0.4" />
      {/* Helmet lines */}
      <path d="M20 10 Q32 6 44 10" stroke="#DAA520" strokeWidth="1" fill="none" />

      {/* Animal symbol on helmet */}
      <rect x="27" y="6" width="10" height="8" fill="url(#yellowRangerEmblemGradient)" rx="2" />
      {/* Symbol detail - saber tooth tiger */}
      <path d="M29 10 L32 8 L35 10" stroke="#FFD700" strokeWidth="1" fill="none" />
      <circle cx="32" cy="11" r="1" fill="#FFD700" />

      {/* Visor */}
      <ellipse cx="32" cy="18" rx="13" ry="7" fill="url(#yellowRangerVisorGradient)" />
      {/* Visor shine */}
      <ellipse cx="32" cy="18" rx="11" ry="5" fill="#333" opacity="0.4" />
      <ellipse cx="26" cy="16" rx="4" ry="2" fill="#444" opacity="0.3" />
      {/* Visor edge */}
      <ellipse cx="32" cy="18" rx="13" ry="7" fill="none" stroke="#B8860B" strokeWidth="0.5" />

      {/* Mouthplate */}
      <rect x="28" y="22" width="8" height="4" fill="#C0C0C0" rx="1" />
      <line x1="29" y1="24" x2="35" y2="24" stroke="#888" strokeWidth="0.5" />

      {/* Body */}
      <rect x="19" y="28" width="26" height="24" fill="url(#yellowRangerSuitGradient)" rx="3" />
      {/* Body highlight */}
      <rect x="21" y="28" width="4" height="22" fill="#FFE44D" opacity="0.3" />

      {/* Diamond pattern on chest */}
      <polygon points="32,32 24,42 32,52 40,42" fill="white" opacity="0.25" />
      <polygon points="32,34 26,42 32,50 38,42" fill="none" stroke="#DAA520" strokeWidth="0.5" />

      {/* Center stripe */}
      <rect x="30" y="28" width="4" height="24" fill="white" opacity="0.15" />

      {/* Belt */}
      <rect x="17" y="46" width="30" height="7" fill="url(#yellowRangerBeltGradient)" rx="1" />
      {/* Belt buckle */}
      <rect x="27" y="44" width="10" height="11" fill="url(#yellowRangerBeltGradient)" rx="2" />
      {/* Buckle detail - morpher */}
      <circle cx="32" cy="49" r="3" fill="#FFD700" />
      <circle cx="32" cy="49" r="2" fill="#DAA520" />
      <circle cx="32" cy="49" r="1" fill="#B8860B" />

      {/* Arms */}
      <rect x="6" y="30" width="13" height="7" fill="url(#yellowRangerSuitGradient)" rx="2" />
      <rect x="45" y="30" width="13" height="7" fill="url(#yellowRangerSuitGradient)" rx="2" />
      {/* Arm highlights */}
      <rect x="8" y="31" width="3" height="5" fill="#FFE44D" opacity="0.3" />
      <rect x="47" y="31" width="3" height="5" fill="#FFE44D" opacity="0.3" />

      {/* Gloves */}
      <rect x="2" y="36" width="10" height="10" fill="url(#yellowRangerWhiteGradient)" rx="3" />
      <rect x="52" y="36" width="10" height="10" fill="url(#yellowRangerWhiteGradient)" rx="3" />
      {/* Glove cuffs */}
      <rect x="2" y="36" width="10" height="2" fill="#E0E0E0" />
      <rect x="52" y="36" width="10" height="2" fill="#E0E0E0" />
      {/* Glove details */}
      <line x1="4" y1="40" x2="10" y2="40" stroke="#CCC" strokeWidth="0.5" />
      <line x1="54" y1="40" x2="60" y2="40" stroke="#CCC" strokeWidth="0.5" />

      {/* Legs */}
      <rect x="21" y="52" width="9" height="14" fill="url(#yellowRangerSuitGradient)" rx="2" />
      <rect x="34" y="52" width="9" height="14" fill="url(#yellowRangerSuitGradient)" rx="2" />
      {/* Leg highlights */}
      <rect x="22" y="52" width="2" height="12" fill="#FFE44D" opacity="0.3" />
      <rect x="35" y="52" width="2" height="12" fill="#FFE44D" opacity="0.3" />

      {/* Boots */}
      <rect x="19" y="60" width="11" height="6" fill="url(#yellowRangerWhiteGradient)" rx="2" />
      <rect x="34" y="60" width="11" height="6" fill="url(#yellowRangerWhiteGradient)" rx="2" />
      {/* Boot tops */}
      <rect x="19" y="60" width="11" height="2" fill="#E0E0E0" />
      <rect x="34" y="60" width="11" height="2" fill="#E0E0E0" />
      {/* Boot soles */}
      <rect x="19" y="64" width="11" height="2" fill="#333" rx="1" />
      <rect x="34" y="64" width="11" height="2" fill="#333" rx="1" />

      {/* Power effect */}
      <circle cx="32" cy="49" r="6" fill="#FFD700" opacity="0.15" />
    </svg>
  );
}
