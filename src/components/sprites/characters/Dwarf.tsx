/**
 * Dwarf Sprite Component
 * Enhanced with gradients, detailed clothing, and expressive features
 */

import type { SpriteProps } from '../types';

export function Dwarf({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="dwarfSkinGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#DEBB9B" />
        </radialGradient>
        {/* Beard gradient */}
        <linearGradient id="dwarfBeardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="50%" stopColor="#CD853F" />
          <stop offset="100%" stopColor="#A0522D" />
        </linearGradient>
        {/* Tunic gradient */}
        <linearGradient id="dwarfTunicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#5C3317" />
        </linearGradient>
        {/* Pants gradient */}
        <linearGradient id="dwarfPantsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5B7BC0" />
          <stop offset="100%" stopColor="#2E4A8A" />
        </linearGradient>
        {/* Belt buckle gradient */}
        <radialGradient id="dwarfBuckleGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="80%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        {/* Boot gradient */}
        <linearGradient id="dwarfBootGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#5C3317" />
        </linearGradient>
        {/* Helmet/hat gradient */}
        <linearGradient id="dwarfHelmetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E6C084" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>

      {/* Hat/Helmet */}
      <ellipse cx="32" cy="10" rx="9" ry="7" fill="url(#dwarfHelmetGradient)" />
      <ellipse cx="32" cy="12" rx="11" ry="4" fill="url(#dwarfHelmetGradient)" />

      {/* Head */}
      <circle cx="32" cy="16" r="12" fill="url(#dwarfSkinGradient)" />

      {/* Bushy eyebrows */}
      <path d="M24 11 Q28 9 30 12" fill="#8B4513" />
      <path d="M34 12 Q36 9 40 11" fill="#8B4513" />

      {/* Eyes with highlights */}
      <ellipse cx="28" cy="14" rx="2.5" ry="2" fill="#2F2F2F" />
      <ellipse cx="36" cy="14" rx="2.5" ry="2" fill="#2F2F2F" />
      <circle cx="27" cy="13" r="0.8" fill="white" />
      <circle cx="35" cy="13" r="0.8" fill="white" />

      {/* Rosy cheeks */}
      <circle cx="24" cy="18" r="2" fill="#E8A0A0" opacity="0.5" />
      <circle cx="40" cy="18" r="2" fill="#E8A0A0" opacity="0.5" />

      {/* Nose */}
      <ellipse cx="32" cy="17" rx="2" ry="1.5" fill="#DEB887" />

      {/* Big bushy beard */}
      <ellipse cx="32" cy="30" rx="15" ry="12" fill="url(#dwarfBeardGradient)" />
      <ellipse cx="24" cy="28" rx="6" ry="8" fill="url(#dwarfBeardGradient)" />
      <ellipse cx="40" cy="28" rx="6" ry="8" fill="url(#dwarfBeardGradient)" />
      {/* Beard texture lines */}
      <path d="M26 24 Q28 32 26 38" stroke="#A0522D" strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M32 22 Q32 32 32 40" stroke="#A0522D" strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M38 24 Q36 32 38 38" stroke="#A0522D" strokeWidth="0.5" fill="none" opacity="0.6" />

      {/* Tunic/Body */}
      <rect x="18" y="36" width="28" height="16" fill="url(#dwarfTunicGradient)" rx="3" />
      {/* Tunic details - stitching */}
      <line x1="32" y1="36" x2="32" y2="52" stroke="#3D2410" strokeWidth="0.5" strokeDasharray="2,1" />

      {/* Overalls/Pants visible */}
      <rect x="22" y="38" width="8" height="12" fill="url(#dwarfPantsGradient)" rx="1" />
      <rect x="34" y="38" width="8" height="12" fill="url(#dwarfPantsGradient)" rx="1" />

      {/* Belt with ornate buckle */}
      <rect x="18" y="42" width="28" height="3" fill="#4A3728" />
      <circle cx="32" cy="43.5" r="3.5" fill="url(#dwarfBuckleGradient)" />
      <circle cx="32" cy="43.5" r="2" fill="none" stroke="#B8860B" strokeWidth="0.5" />

      {/* Arms with sleeves */}
      <rect x="8" y="38" width="10" height="6" fill="url(#dwarfTunicGradient)" rx="2" />
      <rect x="46" y="38" width="10" height="6" fill="url(#dwarfTunicGradient)" rx="2" />

      {/* Hands */}
      <circle cx="8" cy="41" r="4" fill="url(#dwarfSkinGradient)" />
      <circle cx="56" cy="41" r="4" fill="url(#dwarfSkinGradient)" />
      {/* Fingers detail */}
      <circle cx="5" cy="42" r="1.2" fill="url(#dwarfSkinGradient)" />
      <circle cx="59" cy="42" r="1.2" fill="url(#dwarfSkinGradient)" />

      {/* Legs/Pants */}
      <rect x="22" y="52" width="8" height="10" fill="url(#dwarfPantsGradient)" rx="2" />
      <rect x="34" y="52" width="8" height="10" fill="url(#dwarfPantsGradient)" rx="2" />

      {/* Boots */}
      <ellipse cx="26" cy="62" rx="7" ry="3" fill="url(#dwarfBootGradient)" />
      <ellipse cx="38" cy="62" rx="7" ry="3" fill="url(#dwarfBootGradient)" />
      {/* Boot buckles */}
      <rect x="24" y="58" width="4" height="2" fill="#B8860B" rx="0.5" />
      <rect x="36" y="58" width="4" height="2" fill="#B8860B" rx="0.5" />
    </svg>
  );
}
