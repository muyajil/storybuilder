/**
 * Firefighter Sprite Component
 * Enhanced with gradients, detailed uniform, and expressive features
 */

import type { SpriteProps } from '../types';

export function Firefighter({ size = 64, color = '#B22222' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="firefighterSkinGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#DEBB9B" />
        </radialGradient>
        {/* Helmet gradient */}
        <linearGradient id="firefighterHelmetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="30%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Jacket gradient */}
        <linearGradient id="firefighterJacketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#CD3333" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#8B1A1A" />
        </linearGradient>
        {/* Reflective stripe gradient */}
        <linearGradient id="firefighterStripeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="50%" stopColor="#FFFF80" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Boot gradient */}
        <linearGradient id="firefighterBootGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Glove gradient */}
        <linearGradient id="firefighterGloveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Badge gradient */}
        <radialGradient id="firefighterBadgeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E0E0E0" />
          <stop offset="100%" stopColor="#B0B0B0" />
        </radialGradient>
      </defs>

      {/* Helmet */}
      <ellipse cx="32" cy="12" rx="15" ry="11" fill="url(#firefighterHelmetGradient)" />
      {/* Helmet brim */}
      <rect x="16" y="10" width="32" height="10" fill="url(#firefighterHelmetGradient)" rx="2" />
      {/* Helmet front peak */}
      <path d="M20 18 Q32 24 44 18" fill="url(#firefighterHelmetGradient)" />
      {/* Helmet shine */}
      <ellipse cx="26" cy="8" rx="6" ry="3" fill="white" opacity="0.3" />
      {/* Badge on helmet */}
      <path d="M28 6 L32 2 L36 6 L36 12 L28 12 Z" fill={color} />
      <circle cx="32" cy="8" r="2" fill="url(#firefighterBadgeGradient)" />
      {/* Helmet ear flaps */}
      <rect x="16" y="14" width="4" height="8" fill="url(#firefighterHelmetGradient)" rx="1" />
      <rect x="44" y="14" width="4" height="8" fill="url(#firefighterHelmetGradient)" rx="1" />

      {/* Face/Head */}
      <circle cx="32" cy="22" r="8" fill="url(#firefighterSkinGradient)" />

      {/* Determined eyebrows */}
      <path d="M26 18 L30 19" stroke="#4A3728" strokeWidth="1.2" fill="none" />
      <path d="M34 19 L38 18" stroke="#4A3728" strokeWidth="1.2" fill="none" />

      {/* Focused eyes */}
      <ellipse cx="29" cy="21" rx="2" ry="2.2" fill="#4A3728" />
      <ellipse cx="35" cy="21" rx="2" ry="2.2" fill="#4A3728" />
      <circle cx="28.5" cy="20.5" r="0.8" fill="white" />
      <circle cx="34.5" cy="20.5" r="0.8" fill="white" />

      {/* Determined expression */}
      <path d="M29 25 L35 25" stroke="#8B4513" strokeWidth="1" fill="none" />

      {/* Turnout Jacket */}
      <rect x="16" y="28" width="32" height="24" fill="url(#firefighterJacketGradient)" rx="3" />
      {/* Jacket center closure */}
      <rect x="30" y="28" width="4" height="24" fill="#8B1A1A" />
      {/* Collar */}
      <rect x="24" y="28" width="16" height="4" fill="url(#firefighterJacketGradient)" />
      <path d="M28 28 L32 32 L36 28" fill="#8B1A1A" />

      {/* Reflective stripes */}
      <rect x="16" y="36" width="32" height="4" fill="url(#firefighterStripeGradient)" />
      <rect x="16" y="44" width="32" height="4" fill="url(#firefighterStripeGradient)" />

      {/* Name badge area */}
      <rect x="18" y="30" width="10" height="4" fill="url(#firefighterBadgeGradient)" rx="1" />

      {/* Pockets */}
      <rect x="18" y="40" width="8" height="6" fill="#8B1A1A" rx="1" />
      <rect x="38" y="40" width="8" height="6" fill="#8B1A1A" rx="1" />

      {/* Arms */}
      <rect x="6" y="30" width="10" height="10" fill="url(#firefighterJacketGradient)" rx="2" />
      <rect x="48" y="30" width="10" height="10" fill="url(#firefighterJacketGradient)" rx="2" />
      {/* Arm stripes */}
      <rect x="6" y="36" width="10" height="2" fill="url(#firefighterStripeGradient)" />
      <rect x="48" y="36" width="10" height="2" fill="url(#firefighterStripeGradient)" />

      {/* Protective gloves */}
      <rect x="4" y="40" width="10" height="7" fill="url(#firefighterGloveGradient)" rx="3" />
      <rect x="50" y="40" width="10" height="7" fill="url(#firefighterGloveGradient)" rx="3" />
      {/* Glove cuffs */}
      <rect x="4" y="40" width="10" height="2" fill="#B8860B" />
      <rect x="50" y="40" width="10" height="2" fill="#B8860B" />
      {/* Fingers */}
      <ellipse cx="6" cy="46" rx="2" ry="1.5" fill="url(#firefighterGloveGradient)" />
      <ellipse cx="12" cy="46" rx="2" ry="1.5" fill="url(#firefighterGloveGradient)" />
      <ellipse cx="52" cy="46" rx="2" ry="1.5" fill="url(#firefighterGloveGradient)" />
      <ellipse cx="58" cy="46" rx="2" ry="1.5" fill="url(#firefighterGloveGradient)" />

      {/* Turnout pants */}
      <rect x="20" y="52" width="10" height="12" fill="url(#firefighterJacketGradient)" rx="2" />
      <rect x="34" y="52" width="10" height="12" fill="url(#firefighterJacketGradient)" rx="2" />
      {/* Pants stripes */}
      <rect x="20" y="56" width="10" height="2" fill="url(#firefighterStripeGradient)" />
      <rect x="34" y="56" width="10" height="2" fill="url(#firefighterStripeGradient)" />

      {/* Heavy-duty boots */}
      <rect x="18" y="60" width="12" height="6" fill="url(#firefighterBootGradient)" rx="2" />
      <rect x="34" y="60" width="12" height="6" fill="url(#firefighterBootGradient)" rx="2" />
      {/* Boot soles */}
      <rect x="18" y="64" width="12" height="2" fill="#0A0A0A" rx="1" />
      <rect x="34" y="64" width="12" height="2" fill="#0A0A0A" rx="1" />
      {/* Boot buckles */}
      <rect x="22" y="61" width="4" height="2" fill="url(#firefighterStripeGradient)" rx="0.5" />
      <rect x="38" y="61" width="4" height="2" fill="url(#firefighterStripeGradient)" rx="0.5" />
    </svg>
  );
}
