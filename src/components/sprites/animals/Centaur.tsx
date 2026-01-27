/**
 * Centaur Sprite Component
 * Enhanced with gradients, muscular detail, and expressive features
 */

import type { SpriteProps } from '../types';

export function Centaur({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Horse body gradient */}
        <radialGradient id="centaurBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0652D" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Human skin gradient */}
        <radialGradient id="centaurSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* Hair gradient */}
        <linearGradient id="centaurHairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5a4030" />
          <stop offset="50%" stopColor="#4a3728" />
          <stop offset="100%" stopColor="#3a2718" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="centaurEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="100%" stopColor="#3a2010" />
        </radialGradient>
        {/* Shine gradient */}
        <linearGradient id="centaurShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Hoof gradient */}
        <linearGradient id="centaurHoofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a3728" />
          <stop offset="100%" stopColor="#2a1a10" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="centaurTailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a3728" />
          <stop offset="100%" stopColor="#3a2718" />
        </linearGradient>
      </defs>

      {/* Tail */}
      <path d="M56 44 Q64 42 62 48 Q60 54 56 50" fill="url(#centaurTailGradient)" />
      {/* Tail hair strands */}
      <g stroke="#3a2718" strokeWidth="0.5" opacity="0.5">
        <path d="M58 44 Q62 46 60 50" fill="none" />
        <path d="M56 46 Q60 48 58 52" fill="none" />
      </g>

      {/* Back legs */}
      <rect x="44" y="42" width="6" height="16" rx="2" fill="url(#centaurBodyGradient)" />
      <rect x="54" y="42" width="5" height="14" rx="2" fill="url(#centaurBodyGradient)" />
      {/* Back hooves */}
      <ellipse cx="47" cy="58" rx="4" ry="3" fill="url(#centaurHoofGradient)" />
      <ellipse cx="56" cy="56" rx="3" ry="2.5" fill="url(#centaurHoofGradient)" />

      {/* Front legs */}
      <rect x="18" y="42" width="6" height="16" rx="2" fill="url(#centaurBodyGradient)" />
      <rect x="28" y="42" width="5" height="14" rx="2" fill="url(#centaurBodyGradient)" />
      {/* Front hooves */}
      <ellipse cx="21" cy="58" rx="4" ry="3" fill="url(#centaurHoofGradient)" />
      <ellipse cx="30" cy="56" rx="3" ry="2.5" fill="url(#centaurHoofGradient)" />

      {/* Horse body */}
      <ellipse cx="40" cy="40" rx="20" ry="12" fill="url(#centaurBodyGradient)" />
      {/* Body shine */}
      <ellipse cx="34" cy="34" rx="10" ry="5" fill="url(#centaurShineGradient)" />
      {/* Belly lighter area */}
      <ellipse cx="40" cy="46" rx="14" ry="6" fill="#A0652D" opacity="0.3" />

      {/* Human torso */}
      <ellipse cx="22" cy="30" rx="9" ry="14" fill="url(#centaurSkinGradient)" />
      {/* Torso shine */}
      <ellipse cx="20" cy="26" rx="4" ry="6" fill="url(#centaurShineGradient)" />

      {/* Chest definition */}
      <path d="M18 28 Q22 32 26 28" stroke="#E6C8A4" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Arms */}
      <ellipse cx="14" cy="30" rx="3" ry="8" fill="url(#centaurSkinGradient)" />
      <ellipse cx="30" cy="30" rx="3" ry="8" fill="url(#centaurSkinGradient)" />
      {/* Hands */}
      <circle cx="14" cy="38" r="2.5" fill="url(#centaurSkinGradient)" />
      <circle cx="30" cy="38" r="2.5" fill="url(#centaurSkinGradient)" />

      {/* Head */}
      <circle cx="22" cy="14" r="10" fill="url(#centaurSkinGradient)" />
      {/* Head shine */}
      <ellipse cx="19" cy="10" rx="4" ry="3" fill="url(#centaurShineGradient)" />

      {/* Hair - flowing */}
      <path d="M12 8 Q10 4 14 6 Q18 2 22 4 Q26 2 30 6 Q34 4 32 8 Q28 6 22 8 Q16 6 12 8" fill="url(#centaurHairGradient)" />
      {/* Hair back flow */}
      <path d="M30 10 Q36 8 38 14 Q40 20 36 24 Q34 20 32 16" fill="url(#centaurHairGradient)" />
      {/* Hair strands */}
      <g stroke="#3a2718" strokeWidth="0.5" opacity="0.4">
        <path d="M14 8 Q12 12 14 16" fill="none" />
        <path d="M18 6 Q16 10 18 14" fill="none" />
      </g>

      {/* Eyes */}
      <ellipse cx="18" cy="12" rx="2.5" ry="3" fill="white" />
      <ellipse cx="26" cy="12" rx="2.5" ry="3" fill="white" />
      <ellipse cx="18" cy="12" rx="1.5" ry="2" fill="url(#centaurEyeGradient)" />
      <ellipse cx="26" cy="12" rx="1.5" ry="2" fill="url(#centaurEyeGradient)" />
      {/* Eye shine */}
      <circle cx="17" cy="11" r="0.8" fill="white" />
      <circle cx="25" cy="11" r="0.8" fill="white" />

      {/* Eyebrows - determined */}
      <path d="M15 9 Q18 8 21 9" stroke="#4a3728" strokeWidth="1" fill="none" />
      <path d="M23 9 Q26 8 29 9" stroke="#4a3728" strokeWidth="1" fill="none" />

      {/* Nose */}
      <path d="M22 14 L21 17 L23 17" stroke="#D4A574" strokeWidth="0.8" fill="none" />

      {/* Friendly smile */}
      <path d="M19 19 Q22 22 25 19" stroke="#8B5A2B" strokeWidth="1" fill="none" />

      {/* Ears */}
      <ellipse cx="12" cy="12" rx="2" ry="3" fill="url(#centaurSkinGradient)" />
      <ellipse cx="32" cy="12" rx="2" ry="3" fill="url(#centaurSkinGradient)" />

      {/* Blush */}
      <ellipse cx="15" cy="16" rx="2" ry="1.5" fill="#FFB6C1" opacity="0.3" />
      <ellipse cx="29" cy="16" rx="2" ry="1.5" fill="#FFB6C1" opacity="0.3" />

      {/* Horse/human connection - muscle detail */}
      <path d="M16 40 Q20 38 24 40" stroke="#8B4513" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}
