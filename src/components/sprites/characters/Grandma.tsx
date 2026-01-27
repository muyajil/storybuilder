/**
 * Grandma Sprite Component
 * Enhanced with gradients, detailed clothing, and expressive features
 */

import type { SpriteProps } from '../types';

export function Grandma({ size = 64, color = '#9370DB' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="grandmaSkinGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4D6" />
          <stop offset="100%" stopColor="#E8D4C4" />
        </radialGradient>
        {/* Hair gradient */}
        <radialGradient id="grandmaHairGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </radialGradient>
        {/* Dress gradient */}
        <linearGradient id="grandmaDressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A890D0" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#6B4D8A" />
        </linearGradient>
        {/* Glasses frame gradient */}
        <linearGradient id="grandmaGlassesGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#4A4A4A" />
        </linearGradient>
        {/* Cane gradient */}
        <linearGradient id="grandmaCaneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#6B3A1F" />
        </linearGradient>
      </defs>

      {/* Curly gray hair */}
      <ellipse cx="32" cy="16" rx="15" ry="13" fill="url(#grandmaHairGradient)" />
      {/* Hair curls */}
      <circle cx="18" cy="16" r="6" fill="url(#grandmaHairGradient)" />
      <circle cx="46" cy="16" r="6" fill="url(#grandmaHairGradient)" />
      <circle cx="22" cy="10" r="4" fill="url(#grandmaHairGradient)" />
      <circle cx="42" cy="10" r="4" fill="url(#grandmaHairGradient)" />
      <circle cx="32" cy="6" r="4" fill="url(#grandmaHairGradient)" />
      {/* Hair shine */}
      <ellipse cx="28" cy="8" rx="4" ry="2" fill="white" opacity="0.3" />

      {/* Head */}
      <circle cx="32" cy="20" r="10" fill="url(#grandmaSkinGradient)" />

      {/* Gentle wrinkles */}
      <path d="M26 14 Q28 13 30 14" stroke="#D4B8A8" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M34 14 Q36 13 38 14" stroke="#D4B8A8" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Glasses */}
      <circle cx="27" cy="18" r="5" fill="none" stroke="url(#grandmaGlassesGradient)" strokeWidth="2" />
      <circle cx="37" cy="18" r="5" fill="none" stroke="url(#grandmaGlassesGradient)" strokeWidth="2" />
      {/* Glasses bridge */}
      <path d="M32 18 L32 18" stroke="url(#grandmaGlassesGradient)" strokeWidth="2" />
      {/* Glasses arms */}
      <path d="M22 18 L18 16" stroke="url(#grandmaGlassesGradient)" strokeWidth="1.5" />
      <path d="M42 18 L46 16" stroke="url(#grandmaGlassesGradient)" strokeWidth="1.5" />
      {/* Lens shine */}
      <ellipse cx="25" cy="16" rx="1.5" ry="1" fill="white" opacity="0.3" />
      <ellipse cx="35" cy="16" rx="1.5" ry="1" fill="white" opacity="0.3" />

      {/* Kind eyes behind glasses */}
      <ellipse cx="27" cy="18" rx="2" ry="2.2" fill="#4A6B8A" />
      <ellipse cx="37" cy="18" rx="2" ry="2.2" fill="#4A6B8A" />
      <circle cx="26.5" cy="17.5" r="0.8" fill="white" />
      <circle cx="36.5" cy="17.5" r="0.8" fill="white" />

      {/* Rosy cheeks */}
      <ellipse cx="22" cy="22" rx="2" ry="1.2" fill="#E8A0A0" opacity="0.4" />
      <ellipse cx="42" cy="22" rx="2" ry="1.2" fill="#E8A0A0" opacity="0.4" />

      {/* Warm smile */}
      <path d="M28 24 Q32 28 36 24" stroke="#B08080" strokeWidth="1.2" fill="none" />

      {/* Elegant dress */}
      <path d="M22 30 L16 62 L48 62 L42 30 Z" fill="url(#grandmaDressGradient)" />
      {/* Dress collar with lace */}
      <path d="M24 30 Q32 34 40 30" fill="#D8C8E8" />
      <path d="M26 32 Q32 35 38 32" stroke="white" strokeWidth="0.5" fill="none" opacity="0.6" />
      {/* Dress pattern - flowers */}
      <circle cx="28" cy="42" r="2" fill="#FFB6C1" opacity="0.4" />
      <circle cx="36" cy="50" r="2" fill="#FFB6C1" opacity="0.4" />
      <circle cx="30" cy="56" r="2" fill="#FFB6C1" opacity="0.4" />
      {/* Flower centers */}
      <circle cx="28" cy="42" r="0.8" fill="#FFD700" opacity="0.5" />
      <circle cx="36" cy="50" r="0.8" fill="#FFD700" opacity="0.5" />
      <circle cx="30" cy="56" r="0.8" fill="#FFD700" opacity="0.5" />

      {/* Cardigan/shawl */}
      <path d="M22 30 Q20 40 18 50" stroke={color} strokeWidth="3" fill="none" />
      <path d="M42 30 Q44 40 46 50" stroke={color} strokeWidth="3" fill="none" />

      {/* Sleeves */}
      <rect x="8" y="32" width="14" height="6" fill="url(#grandmaDressGradient)" rx="3" />
      <rect x="42" y="32" width="14" height="6" fill="url(#grandmaDressGradient)" rx="3" />

      {/* Gentle hands */}
      <circle cx="8" cy="36" r="4" fill="url(#grandmaSkinGradient)" />
      <circle cx="56" cy="36" r="4" fill="url(#grandmaSkinGradient)" />
      {/* Delicate fingers */}
      <ellipse cx="5" cy="37" rx="1.5" ry="1" fill="url(#grandmaSkinGradient)" />
      <ellipse cx="59" cy="37" rx="1.5" ry="1" fill="url(#grandmaSkinGradient)" />

      {/* Walking cane */}
      <rect x="3" y="34" width="4" height="30" fill="url(#grandmaCaneGradient)" rx="2" />
      {/* Cane handle */}
      <path d="M1 34 Q1 30 5 30 Q9 30 9 34" fill="url(#grandmaCaneGradient)" />
      {/* Cane detail */}
      <rect x="3" y="44" width="4" height="2" fill="#B8860B" rx="1" />

      {/* Pearl necklace */}
      <ellipse cx="32" cy="30" rx="8" ry="2" fill="none" stroke="#F5F5DC" strokeWidth="1.5" />
      <circle cx="28" cy="31" r="1" fill="#F5F5DC" />
      <circle cx="32" cy="32" r="1" fill="#F5F5DC" />
      <circle cx="36" cy="31" r="1" fill="#F5F5DC" />
    </svg>
  );
}
