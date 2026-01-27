/**
 * Boy Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Boy({ size = 64, color = '#4169E1', hairColor = '#8B4513' }: SpriteProps & { hairColor?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hair gradient */}
        <radialGradient id="boyHairGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor={hairColor} />
        </radialGradient>
        {/* Skin gradient */}
        <radialGradient id="boySkinGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* T-shirt gradient */}
        <linearGradient id="boyShirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5B8DEF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#2850A7" />
        </linearGradient>
        {/* Pants gradient */}
        <linearGradient id="boyPantsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D5C5C" />
          <stop offset="100%" stopColor="#2F4F4F" />
        </linearGradient>
        {/* Shoe gradient */}
        <radialGradient id="boyShoeGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#6B3510" />
        </radialGradient>
      </defs>

      {/* Haare / Hair */}
      <rect x="20" y="6" width="24" height="14" fill="url(#boyHairGradient)" rx="6" />
      {/* Hair highlight */}
      <ellipse cx="28" cy="10" rx="5" ry="3" fill="#B8784E" opacity="0.4" />
      {/* Hair texture lines */}
      <path d="M24 8 Q26 12 24 16" stroke="#6B3510" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M32 6 Q34 10 32 14" stroke="#6B3510" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M38 8 Q40 12 38 16" stroke="#6B3510" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Kopf / Head */}
      <circle cx="32" cy="18" r="12" fill="url(#boySkinGradient)" />
      {/* Face highlight */}
      <ellipse cx="28" cy="14" rx="4" ry="3" fill="white" opacity="0.15" />

      {/* Augen / Eyes */}
      <ellipse cx="28" cy="16" rx="2.5" ry="2" fill="white" />
      <ellipse cx="36" cy="16" rx="2.5" ry="2" fill="white" />
      <circle cx="28" cy="16" r="1.5" fill="#4A3728" />
      <circle cx="36" cy="16" r="1.5" fill="#4A3728" />
      {/* Pupils */}
      <circle cx="28" cy="16" r="0.8" fill="#1a1a1a" />
      <circle cx="36" cy="16" r="0.8" fill="#1a1a1a" />
      {/* Eye sparkle */}
      <circle cx="27" cy="15" r="0.5" fill="white" />
      <circle cx="35" cy="15" r="0.5" fill="white" />

      {/* Eyebrows */}
      <path d="M25 13 Q28 12 30 13" stroke="#6B3510" strokeWidth="1" fill="none" />
      <path d="M34 13 Q36 12 39 13" stroke="#6B3510" strokeWidth="1" fill="none" />

      {/* Nose hint */}
      <ellipse cx="32" cy="19" rx="1" ry="0.5" fill="#E8C4A8" />

      {/* Mund / Mouth - friendly smile */}
      <path d="M28 23 Q32 26 36 23" stroke="#D2691E" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Cheeks */}
      <circle cx="24" cy="20" r="2" fill="#FFB6C1" opacity="0.3" />
      <circle cx="40" cy="20" r="2" fill="#FFB6C1" opacity="0.3" />

      {/* T-Shirt */}
      <rect x="22" y="30" width="20" height="18" fill="url(#boyShirtGradient)" rx="3" />
      {/* Shirt collar */}
      <path d="M26 30 Q32 34 38 30" fill="#5B8DEF" />
      {/* Shirt fold */}
      <line x1="32" y1="34" x2="32" y2="48" stroke="#2850A7" strokeWidth="0.5" opacity="0.3" />

      {/* Arme / Arms */}
      <rect x="12" y="30" width="10" height="7" fill="url(#boyShirtGradient)" rx="3" />
      <rect x="42" y="30" width="10" height="7" fill="url(#boyShirtGradient)" rx="3" />

      {/* Hände / Hands */}
      <circle cx="12" cy="34" r="4.5" fill="url(#boySkinGradient)" />
      <circle cx="52" cy="34" r="4.5" fill="url(#boySkinGradient)" />
      {/* Finger hints */}
      <circle cx="9" cy="32" r="1.5" fill="url(#boySkinGradient)" />
      <circle cx="55" cy="32" r="1.5" fill="url(#boySkinGradient)" />

      {/* Hose / Pants */}
      <rect x="22" y="48" width="20" height="8" fill="url(#boyPantsGradient)" rx="2" />
      {/* Belt */}
      <rect x="22" y="48" width="20" height="2" fill="#4A3728" />
      <rect x="30" y="47" width="4" height="4" fill="#C0C0C0" rx="0.5" />

      {/* Beine / Legs */}
      <rect x="24" y="54" width="6" height="8" fill="url(#boyPantsGradient)" rx="2" />
      <rect x="34" y="54" width="6" height="8" fill="url(#boyPantsGradient)" rx="2" />
      {/* Pant highlights */}
      <rect x="25" y="54" width="1.5" height="8" fill="#4A6666" opacity="0.3" rx="0.5" />
      <rect x="35" y="54" width="1.5" height="8" fill="#4A6666" opacity="0.3" rx="0.5" />

      {/* Schuhe / Shoes */}
      <ellipse cx="27" cy="62" rx="5" ry="3" fill="url(#boyShoeGradient)" />
      <ellipse cx="37" cy="62" rx="5" ry="3" fill="url(#boyShoeGradient)" />
      {/* Shoe details */}
      <ellipse cx="27" cy="61" rx="3" ry="1.5" fill="#8B4513" />
      <ellipse cx="37" cy="61" rx="3" ry="1.5" fill="#8B4513" />
      {/* Shoe laces hint */}
      <line x1="25" y1="61" x2="29" y2="61" stroke="#333" strokeWidth="0.5" />
      <line x1="35" y1="61" x2="39" y2="61" stroke="#333" strokeWidth="0.5" />
    </svg>
  );
}
