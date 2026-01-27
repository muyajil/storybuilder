/**
 * Princess Sprite Component
 * Enhanced with gradients, elegant styling inspired by Jasmine, and expressive features
 */

import type { SpriteProps } from '../types';

export function Princess({ size = 64, color = '#00CED1' }: SpriteProps) {
  const skinTone = '#C68642'; // Olive/tan skin like Jasmine
  const hairColor = '#1a1a1a'; // Black hair
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hair gradient */}
        <linearGradient id="princessHairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#333333" />
          <stop offset="50%" stopColor={hairColor} />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        {/* Skin gradient */}
        <linearGradient id="princessSkinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4975A" />
          <stop offset="50%" stopColor={skinTone} />
          <stop offset="100%" stopColor="#A67B4B" />
        </linearGradient>
        {/* Outfit gradient - teal like Jasmine */}
        <linearGradient id="princessOutfitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#40E0D0" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#008B8B" />
        </linearGradient>
        {/* Gold jewelry gradient */}
        <linearGradient id="princessGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Headband jewel gradient */}
        <radialGradient id="princessJewelGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#7FFFD4" />
          <stop offset="50%" stopColor="#00BFFF" />
          <stop offset="100%" stopColor="#0080FF" />
        </radialGradient>
        {/* Pants shimmer gradient */}
        <linearGradient id="princessPantsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5FDDE5" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#00B5B5" />
          <stop offset="100%" stopColor="#008888" />
        </linearGradient>
      </defs>

      {/* Long black hair - flowing behind */}
      <ellipse cx="32" cy="30" rx="18" ry="20" fill="url(#princessHairGradient)" />
      <ellipse cx="17" cy="40" rx="7" ry="18" fill="url(#princessHairGradient)" />
      <ellipse cx="47" cy="40" rx="7" ry="18" fill="url(#princessHairGradient)" />
      <ellipse cx="13" cy="50" rx="5" ry="12" fill={hairColor} />
      <ellipse cx="51" cy="50" rx="5" ry="12" fill={hairColor} />

      {/* Hair highlight */}
      <ellipse cx="26" cy="24" rx="5" ry="8" fill="#333333" opacity="0.5" />
      <ellipse cx="38" cy="26" rx="4" ry="6" fill="#333333" opacity="0.4" />

      {/* Headband / Haarband */}
      <ellipse cx="32" cy="14" rx="13" ry="5" fill="url(#princessGoldGradient)" />
      <ellipse cx="32" cy="13" rx="11" ry="3" fill="#FFE44D" opacity="0.4" />

      {/* Headband jewel */}
      <circle cx="32" cy="14" r="5" fill="url(#princessGoldGradient)" />
      <circle cx="32" cy="14" r="3.5" fill="url(#princessJewelGradient)" />
      <circle cx="31" cy="13" r="1" fill="#FFFFFF" opacity="0.6" />

      {/* Side jewels */}
      <circle cx="22" cy="15" r="2" fill="url(#princessJewelGradient)" />
      <circle cx="42" cy="15" r="2" fill="url(#princessJewelGradient)" />

      {/* Head / Kopf */}
      <circle cx="32" cy="24" r="11" fill="url(#princessSkinGradient)" />

      {/* Face highlight */}
      <ellipse cx="30" cy="21" rx="5" ry="4" fill="#D4975A" opacity="0.4" />

      {/* Eyes / Augen - big expressive eyes */}
      <ellipse cx="27" cy="22" rx="4" ry="3.5" fill="white" />
      <ellipse cx="37" cy="22" rx="4" ry="3.5" fill="white" />
      <ellipse cx="27" cy="22" rx="2.5" ry="3" fill="#3D2314" />
      <ellipse cx="37" cy="22" rx="2.5" ry="3" fill="#3D2314" />
      <circle cx="27" cy="22" r="1.5" fill="black" />
      <circle cx="37" cy="22" r="1.5" fill="black" />
      <circle cx="28" cy="21" r="1" fill="white" />
      <circle cx="38" cy="21" r="1" fill="white" />

      {/* Eyebrows / Augenbrauen - elegant arched */}
      <path d="M23 18 Q27 16 30 18" stroke={hairColor} strokeWidth="1.2" fill="none" />
      <path d="M34 18 Q37 16 41 18" stroke={hairColor} strokeWidth="1.2" fill="none" />

      {/* Eyelashes / Wimpern */}
      <path d="M23 20 L21 18" stroke="black" strokeWidth="1" strokeLinecap="round" />
      <path d="M24 19 L23 17" stroke="black" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M41 20 L43 18" stroke="black" strokeWidth="1" strokeLinecap="round" />
      <path d="M40 19 L41 17" stroke="black" strokeWidth="0.8" strokeLinecap="round" />

      {/* Nose */}
      <ellipse cx="32" cy="25" rx="1.5" ry="1" fill="#A67B4B" opacity="0.5" />

      {/* Lips / Mund - full beautiful smile */}
      <path d="M28 29 Q32 33 36 29" stroke="#C44536" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M29 29 Q32 31 35 29" fill="#E85A4F" />

      {/* Blush */}
      <ellipse cx="24" cy="26" rx="2.5" ry="1.5" fill="#FF9999" opacity="0.3" />
      <ellipse cx="40" cy="26" rx="2.5" ry="1.5" fill="#FF9999" opacity="0.3" />

      {/* Earrings / Ohrringe */}
      <circle cx="20" cy="27" r="2.5" fill="url(#princessGoldGradient)" />
      <ellipse cx="20" cy="30" rx="1.5" ry="2" fill="url(#princessGoldGradient)" />
      <circle cx="44" cy="27" r="2.5" fill="url(#princessGoldGradient)" />
      <ellipse cx="44" cy="30" rx="1.5" ry="2" fill="url(#princessGoldGradient)" />

      {/* Necklace / Halskette */}
      <path d="M24 33 Q32 37 40 33" stroke="url(#princessGoldGradient)" strokeWidth="2.5" fill="none" />
      <circle cx="32" cy="36" r="3" fill="url(#princessGoldGradient)" />
      <circle cx="32" cy="36" r="2" fill="url(#princessJewelGradient)" />

      {/* Top - crop top like Jasmine */}
      <path d="M23 35 L21 46 L43 46 L41 35 Z" fill="url(#princessOutfitGradient)" />
      <path d="M25 35 Q32 40 39 35" fill="url(#princessOutfitGradient)" />

      {/* Top highlight */}
      <path d="M24 36 L23 44 L30 44 L29 36 Z" fill="#5FDDE5" opacity="0.3" />

      {/* Top decorative trim */}
      <path d="M23 35 Q32 33 41 35" stroke="url(#princessGoldGradient)" strokeWidth="1.5" fill="none" />
      <path d="M21 46 L43 46" stroke="url(#princessGoldGradient)" strokeWidth="1" />

      {/* Bare midriff hint */}
      <ellipse cx="32" cy="48" rx="8" ry="3" fill="url(#princessSkinGradient)" />

      {/* Pants / Hose - puffy harem pants like Jasmine */}
      <ellipse cx="27" cy="56" rx="11" ry="13" fill="url(#princessPantsGradient)" />
      <ellipse cx="37" cy="56" rx="11" ry="13" fill="url(#princessPantsGradient)" />

      {/* Pants shimmer highlight */}
      <ellipse cx="24" cy="54" rx="5" ry="6" fill="#7FFFD4" opacity="0.2" />
      <ellipse cx="40" cy="54" rx="5" ry="6" fill="#7FFFD4" opacity="0.2" />

      {/* Pants waistband */}
      <ellipse cx="32" cy="48" rx="12" ry="3" fill="url(#princessGoldGradient)" />

      {/* Arms / Arme */}
      <path d="M23 37 L13 46" stroke="url(#princessSkinGradient)" strokeWidth="6" strokeLinecap="round" />
      <path d="M41 37 L51 46" stroke="url(#princessSkinGradient)" strokeWidth="6" strokeLinecap="round" />

      {/* Arm highlight */}
      <path d="M22 38 L14 45" stroke="#D4975A" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M42 38 L50 45" stroke="#D4975A" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

      {/* Bracelets / Armreifen */}
      <circle cx="15" cy="43" r="4" fill="none" stroke="url(#princessGoldGradient)" strokeWidth="2.5" />
      <circle cx="49" cy="43" r="4" fill="none" stroke="url(#princessGoldGradient)" strokeWidth="2.5" />

      {/* Upper arm bracelets */}
      <ellipse cx="18" cy="40" rx="3" ry="1.5" fill="url(#princessGoldGradient)" />
      <ellipse cx="46" cy="40" rx="3" ry="1.5" fill="url(#princessGoldGradient)" />

      {/* Hands / Hände */}
      <circle cx="13" cy="46" r="3.5" fill="url(#princessSkinGradient)" />
      <circle cx="51" cy="46" r="3.5" fill="url(#princessSkinGradient)" />

      {/* Ring on hand */}
      <circle cx="14" cy="47" r="1" fill="url(#princessGoldGradient)" />
      <circle cx="50" cy="47" r="1" fill="url(#princessGoldGradient)" />

      {/* Ankle details */}
      <ellipse cx="22" cy="66" rx="4" ry="2" fill="url(#princessGoldGradient)" />
      <ellipse cx="42" cy="66" rx="4" ry="2" fill="url(#princessGoldGradient)" />

      {/* Sparkle accents */}
      <circle cx="8" cy="38" r="1" fill="#FFFFFF" opacity="0.7" />
      <circle cx="56" cy="40" r="1" fill="#FFFFFF" opacity="0.7" />
      <circle cx="32" cy="62" r="1" fill="#7FFFD4" opacity="0.6" />
    </svg>
  );
}
