/**
 * Surfer Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Surfer({ size = 64, color = '#00CED1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hair gradient */}
        <radialGradient id="surferHairGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Skin gradient - tanned */}
        <radialGradient id="surferSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="70%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#D2A679" />
        </radialGradient>
        {/* Wetsuit/rashguard gradient */}
        <linearGradient id="surferSuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#20E8E8" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#008B8B" />
        </linearGradient>
        {/* Board gradient */}
        <linearGradient id="surferBoardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Board stripe gradient */}
        <linearGradient id="surferStripeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF7F50" />
          <stop offset="50%" stopColor="#FF6347" />
          <stop offset="100%" stopColor="#E5533D" />
        </linearGradient>
        {/* Water gradient */}
        <linearGradient id="surferWaterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#1E90FF" />
        </linearGradient>
      </defs>

      {/* Splashing water behind */}
      <ellipse cx="12" cy="56" rx="6" ry="4" fill="url(#surferWaterGradient)" opacity="0.4" />
      <ellipse cx="52" cy="56" rx="6" ry="4" fill="url(#surferWaterGradient)" opacity="0.4" />

      {/* Surfboard */}
      <ellipse cx="32" cy="56" rx="26" ry="5" fill="url(#surferBoardGradient)" />
      {/* Board stripe design */}
      <path d="M6 56 Q32 48 58 56" fill="url(#surferStripeGradient)" />
      {/* Board wax texture */}
      <ellipse cx="32" cy="54" rx="16" ry="3" fill="white" opacity="0.2" />
      {/* Board fin shadow */}
      <ellipse cx="32" cy="58" rx="3" ry="1" fill="#B8860B" opacity="0.5" />

      {/* Sun-bleached hair */}
      <ellipse cx="32" cy="8" rx="9" ry="7" fill="url(#surferHairGradient)" />
      {/* Hair highlights */}
      <ellipse cx="28" cy="6" rx="3" ry="2" fill="#FFEE88" opacity="0.5" />

      {/* Head */}
      <circle cx="32" cy="14" r="8" fill="url(#surferSkinGradient)" />

      {/* Eyes */}
      <ellipse cx="29" cy="13" rx="2" ry="1.5" fill="white" />
      <ellipse cx="35" cy="13" rx="2" ry="1.5" fill="white" />
      <circle cx="29" cy="13" r="1" fill="black" />
      <circle cx="35" cy="13" r="1" fill="black" />
      <circle cx="28.7" cy="12.7" r="0.4" fill="white" />
      <circle cx="34.7" cy="12.7" r="0.4" fill="white" />

      {/* Stoked smile */}
      <path d="M28 17 Q32 20 36 17" stroke="#8B4513" strokeWidth="1.5" fill="none" />

      {/* Rashguard/Wetsuit top */}
      <rect x="25" y="22" width="14" height="16" fill="url(#surferSuitGradient)" rx="2" />
      {/* V-neck design */}
      <path d="M26 22 L32 30 L38 22" fill="white" />
      <path d="M27 22 L32 28 L37 22" fill="#E0FFFF" opacity="0.5" />
      {/* Suit seams */}
      <line x1="32" y1="28" x2="32" y2="38" stroke="#008B8B" strokeWidth="0.5" />

      {/* Arms - extended for balance */}
      <rect x="11" y="24" width="14" height="5" fill="url(#surferSuitGradient)" rx="2" />
      <rect x="39" y="24" width="14" height="5" fill="url(#surferSuitGradient)" rx="2" />

      {/* Hands */}
      <circle cx="11" cy="27" r="4" fill="url(#surferSkinGradient)" />
      <circle cx="53" cy="27" r="4" fill="url(#surferSkinGradient)" />
      {/* Spread fingers */}
      <circle cx="8" cy="25" r="1.5" fill="url(#surferSkinGradient)" />
      <circle cx="56" cy="25" r="1.5" fill="url(#surferSkinGradient)" />

      {/* Board shorts */}
      <rect x="25" y="38" width="5" height="10" fill="url(#surferSuitGradient)" rx="1" />
      <rect x="34" y="38" width="5" height="10" fill="url(#surferSuitGradient)" rx="1" />

      {/* Bare feet on board */}
      <ellipse cx="27.5" cy="49" rx="4" ry="2.5" fill="url(#surferSkinGradient)" />
      <ellipse cx="36.5" cy="49" rx="4" ry="2.5" fill="url(#surferSkinGradient)" />
      {/* Toes */}
      <circle cx="25" cy="48" r="0.8" fill="#DEB887" />
      <circle cx="26.5" cy="47.5" r="0.8" fill="#DEB887" />
      <circle cx="28" cy="47.5" r="0.8" fill="#DEB887" />
      <circle cx="29.5" cy="48" r="0.8" fill="#DEB887" />

      {/* Water spray */}
      <circle cx="6" cy="54" r="2" fill="#87CEEB" opacity="0.5" />
      <circle cx="58" cy="54" r="1.5" fill="#87CEEB" opacity="0.4" />
      <circle cx="4" cy="52" r="1" fill="#87CEEB" opacity="0.3" />
      <circle cx="60" cy="52" r="1" fill="#87CEEB" opacity="0.3" />
    </svg>
  );
}
