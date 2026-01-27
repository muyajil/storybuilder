/**
 * Grandpa Sprite Component
 * Enhanced with gradients, detailed clothing, and expressive features
 */

import type { SpriteProps } from '../types';

export function Grandpa({ size = 64, color = '#4682B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="grandpaSkinGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4D6" />
          <stop offset="100%" stopColor="#E8D4C4" />
        </radialGradient>
        {/* Bald head gradient */}
        <radialGradient id="grandpaBaldGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE8DC" />
          <stop offset="100%" stopColor="#E8D4C4" />
        </radialGradient>
        {/* Hair gradient */}
        <linearGradient id="grandpaHairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D8D8D8" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>
        {/* Vest gradient */}
        <linearGradient id="grandpaVestGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5B9BD5" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#2E5A7A" />
        </linearGradient>
        {/* Shirt gradient */}
        <linearGradient id="grandpaShirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
        {/* Tie gradient */}
        <linearGradient id="grandpaTieGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#CD3333" />
          <stop offset="50%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#5C1010" />
        </linearGradient>
        {/* Pants gradient */}
        <linearGradient id="grandpaPantsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#2A2A2A" />
        </linearGradient>
        {/* Shoe gradient */}
        <linearGradient id="grandpaShoeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#5C3317" />
        </linearGradient>
        {/* Glasses gradient */}
        <linearGradient id="grandpaGlassesGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#4A4A4A" />
        </linearGradient>
      </defs>

      {/* Bald head with side hair */}
      <ellipse cx="32" cy="14" rx="13" ry="9" fill="url(#grandpaBaldGradient)" />
      {/* Side hair tufts */}
      <ellipse cx="17" cy="18" rx="5" ry="7" fill="url(#grandpaHairGradient)" />
      <ellipse cx="47" cy="18" rx="5" ry="7" fill="url(#grandpaHairGradient)" />
      {/* Head shine */}
      <ellipse cx="28" cy="10" rx="4" ry="2" fill="white" opacity="0.4" />

      {/* Face */}
      <circle cx="32" cy="20" r="10" fill="url(#grandpaSkinGradient)" />

      {/* Wrinkle lines */}
      <path d="M24 14 Q26 13 28 15" stroke="#D4B8A8" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M36 15 Q38 13 40 14" stroke="#D4B8A8" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Rectangular glasses */}
      <rect x="21" y="16" width="9" height="6" fill="none" stroke="url(#grandpaGlassesGradient)" strokeWidth="2" rx="1" />
      <rect x="34" y="16" width="9" height="6" fill="none" stroke="url(#grandpaGlassesGradient)" strokeWidth="2" rx="1" />
      {/* Glasses bridge */}
      <line x1="30" y1="19" x2="34" y2="19" stroke="url(#grandpaGlassesGradient)" strokeWidth="2" />
      {/* Lens shine */}
      <rect x="23" y="17" width="2" height="1.5" fill="white" opacity="0.3" rx="0.5" />
      <rect x="36" y="17" width="2" height="1.5" fill="white" opacity="0.3" rx="0.5" />

      {/* Wise eyes */}
      <ellipse cx="26" cy="19" rx="2" ry="2.2" fill="#4A6B8A" />
      <ellipse cx="38" cy="19" rx="2" ry="2.2" fill="#4A6B8A" />
      <circle cx="25.5" cy="18.5" r="0.8" fill="white" />
      <circle cx="37.5" cy="18.5" r="0.8" fill="white" />

      {/* Bushy eyebrows */}
      <path d="M22 15 Q26 13 30 16" fill="url(#grandpaHairGradient)" />
      <path d="M34 16 Q38 13 42 15" fill="url(#grandpaHairGradient)" />

      {/* Distinguished mustache */}
      <path d="M26 24 Q28 26 32 25 Q36 26 38 24" fill="url(#grandpaHairGradient)" />
      <path d="M28 25 Q32 27 36 25" fill="#B0B0B0" />

      {/* Gentle smile under mustache */}
      <path d="M29 26 Q32 28 35 26" stroke="#B08080" strokeWidth="0.8" fill="none" />

      {/* Dress shirt with collar */}
      <rect x="22" y="30" width="20" height="22" fill="url(#grandpaVestGradient)" rx="2" />
      {/* White shirt underneath */}
      <path d="M28 30 L28 52 L36 52 L36 30" fill="url(#grandpaShirtGradient)" />
      {/* Collar */}
      <path d="M26 30 L32 36 L38 30" fill="url(#grandpaShirtGradient)" />
      <path d="M27 30 L32 34 L37 30" fill="none" stroke="#C0C0C0" strokeWidth="0.5" />

      {/* Elegant tie */}
      <polygon points="32,34 28,40 32,52 36,40" fill="url(#grandpaTieGradient)" />
      {/* Tie knot */}
      <ellipse cx="32" cy="35" rx="2" ry="1.5" fill="url(#grandpaTieGradient)" />
      {/* Tie pattern */}
      <line x1="30" y1="42" x2="34" y2="42" stroke="#6B0000" strokeWidth="0.5" opacity="0.5" />
      <line x1="31" y1="46" x2="33" y2="46" stroke="#6B0000" strokeWidth="0.5" opacity="0.5" />

      {/* Vest buttons */}
      <circle cx="26" cy="38" r="1" fill="#B8860B" />
      <circle cx="26" cy="44" r="1" fill="#B8860B" />
      <circle cx="38" cy="38" r="1" fill="#B8860B" />
      <circle cx="38" cy="44" r="1" fill="#B8860B" />

      {/* Sleeves */}
      <rect x="10" y="32" width="12" height="6" fill="url(#grandpaVestGradient)" rx="2" />
      <rect x="42" y="32" width="12" height="6" fill="url(#grandpaVestGradient)" rx="2" />

      {/* Weathered hands */}
      <circle cx="10" cy="36" r="4" fill="url(#grandpaSkinGradient)" />
      <circle cx="54" cy="36" r="4" fill="url(#grandpaSkinGradient)" />
      {/* Fingers */}
      <ellipse cx="7" cy="37" rx="1.5" ry="1" fill="url(#grandpaSkinGradient)" />
      <ellipse cx="57" cy="37" rx="1.5" ry="1" fill="url(#grandpaSkinGradient)" />

      {/* Dress pants */}
      <rect x="24" y="52" width="6" height="10" fill="url(#grandpaPantsGradient)" rx="2" />
      <rect x="34" y="52" width="6" height="10" fill="url(#grandpaPantsGradient)" rx="2" />
      {/* Pant creases */}
      <line x1="27" y1="52" x2="27" y2="62" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.3" />
      <line x1="37" y1="52" x2="37" y2="62" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.3" />

      {/* Polished shoes */}
      <ellipse cx="27" cy="62" rx="6" ry="3" fill="url(#grandpaShoeGradient)" />
      <ellipse cx="37" cy="62" rx="6" ry="3" fill="url(#grandpaShoeGradient)" />
      {/* Shoe shine */}
      <ellipse cx="25" cy="61" rx="2" ry="1" fill="white" opacity="0.2" />
      <ellipse cx="35" cy="61" rx="2" ry="1" fill="white" opacity="0.2" />
    </svg>
  );
}
