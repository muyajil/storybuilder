/**
 * Artist Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Artist({ size = 64, color = '#9370DB' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Beret gradient */}
        <radialGradient id="artistBeretGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Skin gradient */}
        <radialGradient id="artistSkinGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* Shirt gradient */}
        <linearGradient id="artistShirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A890E0" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#7B5DC0" />
        </linearGradient>
        {/* Palette gradient */}
        <radialGradient id="artistPaletteGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>
        {/* Scarf gradient */}
        <linearGradient id="artistScarfGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFC107" />
        </linearGradient>
      </defs>

      {/* Beret */}
      <ellipse cx="32" cy="6" rx="14" ry="8" fill="url(#artistBeretGradient)" />
      {/* Beret pom-pom */}
      <circle cx="32" cy="2" r="3" fill="#222" />
      {/* Beret highlight */}
      <ellipse cx="28" cy="4" rx="4" ry="2" fill="#444" opacity="0.5" />

      {/* Head */}
      <circle cx="32" cy="16" r="10" fill="url(#artistSkinGradient)" />

      {/* Eyes */}
      <ellipse cx="28" cy="14" rx="2.5" ry="2" fill="white" />
      <ellipse cx="36" cy="14" rx="2.5" ry="2" fill="white" />
      <circle cx="28" cy="14" r="1.5" fill="#4A4A4A" />
      <circle cx="36" cy="14" r="1.5" fill="#4A4A4A" />
      {/* Eye sparkle */}
      <circle cx="27" cy="13.5" r="0.5" fill="white" />
      <circle cx="35" cy="13.5" r="0.5" fill="white" />

      {/* Eyebrows (creative/raised) */}
      <path d="M25 11 Q28 9 31 11" stroke="#333" strokeWidth="1" fill="none" />
      <path d="M33 11 Q36 9 39 11" stroke="#333" strokeWidth="1" fill="none" />

      {/* Artistic smile */}
      <path d="M28 20 Q32 24 36 20" stroke="#333" strokeWidth="1.5" fill="none" />

      {/* Cheek blush */}
      <ellipse cx="25" cy="18" rx="2" ry="1.5" fill="#FF69B4" opacity="0.4" />
      <ellipse cx="39" cy="18" rx="2" ry="1.5" fill="#FF69B4" opacity="0.4" />

      {/* Smock/Shirt */}
      <rect x="20" y="26" width="24" height="22" fill="url(#artistShirtGradient)" rx="3" />
      {/* Paint splatters on smock */}
      <circle cx="24" cy="32" r="2" fill="#FF6B6B" opacity="0.7" />
      <circle cx="40" cy="38" r="1.5" fill="#4ECDC4" opacity="0.7" />
      <circle cx="36" cy="30" r="1" fill="#FFE66D" opacity="0.7" />

      {/* Scarf/Cravat */}
      <path d="M24 26 L32 34 L40 26" fill="url(#artistScarfGradient)" />
      <polygon points="32,34 30,40 32,38 34,40" fill="#FFC107" />

      {/* Arms */}
      <rect x="8" y="28" width="12" height="5" fill="url(#artistShirtGradient)" rx="2" />
      <rect x="44" y="28" width="12" height="5" fill="url(#artistShirtGradient)" rx="2" />

      {/* Hands */}
      <circle cx="8" cy="30" r="3.5" fill="url(#artistSkinGradient)" />
      <circle cx="56" cy="30" r="3.5" fill="url(#artistSkinGradient)" />

      {/* Pants */}
      <rect x="24" y="48" width="6" height="14" fill="#2C2C2C" rx="2" />
      <rect x="34" y="48" width="6" height="14" fill="#2C2C2C" rx="2" />
      {/* Pant highlight */}
      <rect x="25" y="48" width="1.5" height="14" fill="#444" opacity="0.3" rx="1" />
      <rect x="35" y="48" width="1.5" height="14" fill="#444" opacity="0.3" rx="1" />

      {/* Palette */}
      <ellipse cx="8" cy="40" rx="9" ry="7" fill="url(#artistPaletteGradient)" />
      {/* Thumb hole */}
      <ellipse cx="6" cy="44" rx="2" ry="3" fill="#8B7355" />
      {/* Paint blobs */}
      <circle cx="4" cy="36" r="3" fill="#E53935" />
      <circle cx="4" cy="36" r="1.5" fill="#EF5350" />
      <circle cx="9" cy="34" r="2.5" fill="#43A047" />
      <circle cx="9" cy="34" r="1" fill="#66BB6A" />
      <circle cx="13" cy="37" r="2.5" fill="#1E88E5" />
      <circle cx="13" cy="37" r="1" fill="#42A5F5" />
      <circle cx="6" cy="41" r="2" fill="#FDD835" />
      <circle cx="6" cy="41" r="0.8" fill="#FFEB3B" />
      <circle cx="11" cy="42" r="2" fill="#AB47BC" />
      <circle cx="11" cy="42" r="0.8" fill="#CE93D8" />

      {/* Paintbrush in other hand */}
      <rect x="54" y="26" width="2" height="16" fill="#8B4513" rx="1" />
      <rect x="53" y="24" width="4" height="4" fill="#666" />
      <polygon points="53,24 57,24 55,20" fill="#FF6B6B" />
    </svg>
  );
}
