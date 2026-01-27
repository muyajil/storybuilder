/**
 * Chef Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Chef({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hat gradient */}
        <radialGradient id="chefHatGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </radialGradient>
        {/* Hat puff gradient */}
        <radialGradient id="chefPuffGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </radialGradient>
        {/* Skin gradient */}
        <radialGradient id="chefSkinGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* Jacket gradient */}
        <linearGradient id="chefJacketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        {/* Apron gradient */}
        <linearGradient id="chefApronGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#444" />
          <stop offset="100%" stopColor="#222" />
        </linearGradient>
      </defs>

      {/* Kochmütze / Chef hat - puffy top */}
      <circle cx="24" cy="7" r="6" fill="url(#chefPuffGradient)" />
      <circle cx="32" cy="5" r="7" fill="url(#chefPuffGradient)" />
      <circle cx="40" cy="7" r="6" fill="url(#chefPuffGradient)" />
      {/* Hat base */}
      <ellipse cx="32" cy="12" rx="14" ry="8" fill="url(#chefHatGradient)" />
      <rect x="20" y="10" width="24" height="10" fill="url(#chefHatGradient)" />
      {/* Hat band */}
      <rect x="20" y="18" width="24" height="2" fill="#E8E8E8" />
      {/* Hat highlight */}
      <ellipse cx="28" cy="8" rx="4" ry="2" fill="white" opacity="0.5" />

      {/* Kopf / Head */}
      <circle cx="32" cy="24" r="9" fill="url(#chefSkinGradient)" />

      {/* Augen / Eyes */}
      <ellipse cx="29" cy="22" rx="2" ry="2.5" fill="white" />
      <ellipse cx="35" cy="22" rx="2" ry="2.5" fill="white" />
      <circle cx="29" cy="23" r="1.5" fill="#4A3728" />
      <circle cx="35" cy="23" r="1.5" fill="#4A3728" />
      {/* Eye sparkle */}
      <circle cx="28" cy="22" r="0.5" fill="white" />
      <circle cx="34" cy="22" r="0.5" fill="white" />

      {/* Eyebrows - friendly */}
      <path d="M27 19 Q29 18 31 19" stroke="#333" strokeWidth="1" fill="none" />
      <path d="M33 19 Q35 18 37 19" stroke="#333" strokeWidth="1" fill="none" />

      {/* Schnurrbart / Mustache */}
      <path d="M26 27 Q29 29 32 27 Q35 29 38 27" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Cheeks */}
      <circle cx="25" cy="26" r="2" fill="#FFB6C1" opacity="0.3" />
      <circle cx="39" cy="26" r="2" fill="#FFB6C1" opacity="0.3" />

      {/* Jacke / Jacket */}
      <rect x="18" y="32" width="28" height="20" fill="url(#chefJacketGradient)" rx="3" />
      {/* Jacket fold lines */}
      <line x1="32" y1="34" x2="32" y2="52" stroke="#E0E0E0" strokeWidth="0.5" />

      {/* Jacket lapels */}
      <path d="M24 32 L20 38 L24 38 Z" fill="#F5F5F5" />
      <path d="M40 32 L44 38 L40 38 Z" fill="#F5F5F5" />

      {/* Doppelreihe Knöpfe / Double row buttons */}
      <circle cx="26" cy="38" r="2" fill="#333" />
      <circle cx="26" cy="38" r="1" fill="#444" />
      <circle cx="26" cy="46" r="2" fill="#333" />
      <circle cx="26" cy="46" r="1" fill="#444" />
      <circle cx="38" cy="38" r="2" fill="#333" />
      <circle cx="38" cy="38" r="1" fill="#444" />
      <circle cx="38" cy="46" r="2" fill="#333" />
      <circle cx="38" cy="46" r="1" fill="#444" />

      {/* Arme / Arms */}
      <rect x="8" y="34" width="10" height="6" fill="url(#chefJacketGradient)" rx="2" />
      <rect x="46" y="34" width="10" height="6" fill="url(#chefJacketGradient)" rx="2" />

      {/* Sleeve cuffs */}
      <rect x="8" y="38" width="10" height="2" fill="#E8E8E8" />
      <rect x="46" y="38" width="10" height="2" fill="#E8E8E8" />

      {/* Hände / Hands */}
      <circle cx="8" cy="38" r="4.5" fill="url(#chefSkinGradient)" />
      <circle cx="56" cy="38" r="4.5" fill="url(#chefSkinGradient)" />

      {/* Schürze / Apron */}
      <rect x="22" y="46" width="20" height="14" fill="url(#chefApronGradient)" rx="1" />
      {/* Apron pocket */}
      <rect x="26" y="52" width="12" height="6" fill="none" stroke="#555" strokeWidth="0.5" rx="0.5" />
      {/* Apron strings */}
      <path d="M22 46 L18 44 L18 48" stroke="#333" strokeWidth="1" fill="none" />
      <path d="M42 46 L46 44 L46 48" stroke="#333" strokeWidth="1" fill="none" />

      {/* Beine / Legs */}
      <rect x="24" y="56" width="6" height="8" fill="url(#chefApronGradient)" rx="2" />
      <rect x="34" y="56" width="6" height="8" fill="url(#chefApronGradient)" rx="2" />

      {/* Spoon in hand */}
      <ellipse cx="56" cy="44" rx="3" ry="4" fill="#C0C0C0" />
      <rect x="54" y="36" width="4" height="8" fill="#C0C0C0" rx="1" />
    </svg>
  );
}
