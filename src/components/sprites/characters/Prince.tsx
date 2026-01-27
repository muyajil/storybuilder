/**
 * Prince Sprite Component
 * Enhanced with gradients, royal attire, and expressive features
 */

import type { SpriteProps } from '../types';

export function Prince({ size = 64, color = '#4169E1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Crown gradient */}
        <linearGradient id="princeCrownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Hair gradient */}
        <linearGradient id="princeHairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5C3317" />
        </linearGradient>
        {/* Skin gradient */}
        <linearGradient id="princeSkinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </linearGradient>
        {/* Tunic gradient */}
        <linearGradient id="princeTunicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5B8DEE" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#2850A0" />
        </linearGradient>
        {/* Cape gradient */}
        <linearGradient id="princeCapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B0000" />
          <stop offset="50%" stopColor="#660000" />
          <stop offset="100%" stopColor="#440000" />
        </linearGradient>
        {/* Pants gradient */}
        <linearGradient id="princePantsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Boot gradient */}
        <linearGradient id="princeBootGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Sash gradient */}
        <linearGradient id="princeSashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>

      {/* Crown base */}
      <ellipse cx="32" cy="5" rx="11" ry="4" fill="url(#princeCrownGradient)" />

      {/* Crown points */}
      <polygon points="26,5 28,-1 32,3 36,-1 38,5" fill="url(#princeCrownGradient)" />

      {/* Crown jewels */}
      <circle cx="28" cy="2" r="1.5" fill="#FF0000" />
      <circle cx="32" cy="0" r="2" fill="#00CED1" />
      <circle cx="36" cy="2" r="1.5" fill="#FF0000" />

      {/* Crown highlight */}
      <ellipse cx="30" cy="4" rx="4" ry="2" fill="#FFFFFF" opacity="0.3" />

      {/* Hair / Haare */}
      <rect x="21" y="6" width="22" height="8" fill="url(#princeHairGradient)" rx="3" />
      <ellipse cx="24" cy="10" rx="4" ry="5" fill="url(#princeHairGradient)" />
      <ellipse cx="40" cy="10" rx="4" ry="5" fill="url(#princeHairGradient)" />

      {/* Hair highlight */}
      <ellipse cx="28" cy="8" rx="3" ry="2" fill="#A0522D" opacity="0.5" />

      {/* Head / Kopf */}
      <circle cx="32" cy="17" r="10" fill="url(#princeSkinGradient)" />

      {/* Face highlight */}
      <ellipse cx="30" cy="14" rx="5" ry="4" fill="#FFF5E6" opacity="0.3" />

      {/* Eyes / Augen */}
      <ellipse cx="28" cy="15" rx="3" ry="2.5" fill="white" />
      <ellipse cx="36" cy="15" rx="3" ry="2.5" fill="white" />
      <circle cx="28" cy="15" r="2" fill="#4169E1" />
      <circle cx="36" cy="15" r="2" fill="#4169E1" />
      <circle cx="28" cy="15" r="1" fill="black" />
      <circle cx="36" cy="15" r="1" fill="black" />
      <circle cx="29" cy="14" r="0.7" fill="white" />
      <circle cx="37" cy="14" r="0.7" fill="white" />

      {/* Eyebrows - noble expression */}
      <path d="M25 12 Q28 10 31 12" stroke="#8B4513" strokeWidth="1" fill="none" />
      <path d="M33 12 Q36 10 39 12" stroke="#8B4513" strokeWidth="1" fill="none" />

      {/* Nose */}
      <ellipse cx="32" cy="18" rx="1.5" ry="1" fill="#EEB89B" />

      {/* Confident smile */}
      <path d="M28 21 Q32 24 36 21" stroke="#333333" strokeWidth="1.2" fill="none" />

      {/* Rosy cheeks */}
      <circle cx="25" cy="18" r="1.5" fill="#FFB6C1" opacity="0.4" />
      <circle cx="39" cy="18" r="1.5" fill="#FFB6C1" opacity="0.4" />

      {/* Cape / Umhang - behind body */}
      <path d="M16 28 L10 60 L54 60 L48 28 Z" fill="url(#princeCapeGradient)" />
      <path d="M18 30 L14 58 L50 58 L46 30 Z" fill="#8B0000" opacity="0.3" />

      {/* Cape collar */}
      <ellipse cx="32" cy="28" rx="16" ry="4" fill="#8B0000" />
      <ellipse cx="32" cy="27" rx="14" ry="3" fill="#A00000" opacity="0.5" />

      {/* Tunic / Wams */}
      <rect x="19" y="26" width="26" height="23" fill="url(#princeTunicGradient)" rx="3" />

      {/* Tunic shading */}
      <rect x="19" y="26" width="9" height="23" fill="#2850A0" opacity="0.2" rx="3" />

      {/* Royal collar detail */}
      <path d="M24 26 L28 32 L32 26" fill="#5B8DEE" />
      <path d="M40 26 L36 32 L32 26" fill="#5B8DEE" />

      {/* White undershirt showing */}
      <polygon points="28,26 32,34 36,26" fill="#FFFFFF" />
      <polygon points="29,27 32,32 35,27" fill="#F0F0F0" opacity="0.5" />

      {/* Royal sash */}
      <path d="M42 28 L20 48" stroke="url(#princeSashGradient)" strokeWidth="4" />
      <path d="M42 28 L20 48" stroke="#B8860B" strokeWidth="1" opacity="0.3" />

      {/* Royal medallion */}
      <circle cx="32" cy="38" r="4" fill="url(#princeCrownGradient)" />
      <circle cx="32" cy="38" r="2.5" fill="#4169E1" />
      <polygon points="32,36 31,38 32,40 33,38" fill="#FFD700" />

      {/* Belt with gold buckle */}
      <rect x="19" y="44" width="26" height="4" fill="#8B4513" />
      <rect x="29" y="43" width="6" height="6" fill="url(#princeCrownGradient)" rx="1" />
      <rect x="30" y="44" width="4" height="4" fill="#8B4513" rx="0.5" />

      {/* Arms / Arme */}
      <rect x="7" y="28" width="13" height="6" fill="url(#princeTunicGradient)" rx="3" />
      <rect x="44" y="28" width="13" height="6" fill="url(#princeTunicGradient)" rx="3" />

      {/* Sleeve cuffs */}
      <rect x="7" y="32" width="6" height="3" fill="url(#princeCrownGradient)" rx="1" />
      <rect x="51" y="32" width="6" height="3" fill="url(#princeCrownGradient)" rx="1" />

      {/* Hands / Hände */}
      <circle cx="7" cy="32" r="4" fill="url(#princeSkinGradient)" />
      <circle cx="57" cy="32" r="4" fill="url(#princeSkinGradient)" />

      {/* Royal ring */}
      <circle cx="8" cy="33" r="1" fill="url(#princeCrownGradient)" />

      {/* Pants / Hose */}
      <rect x="23" y="48" width="7" height="14" fill="url(#princePantsGradient)" rx="2" />
      <rect x="34" y="48" width="7" height="14" fill="url(#princePantsGradient)" rx="2" />

      {/* Pant crease */}
      <line x1="26.5" y1="50" x2="26.5" y2="60" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.3" />
      <line x1="37.5" y1="50" x2="37.5" y2="60" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.3" />

      {/* Boots / Stiefel */}
      <ellipse cx="26" cy="62" rx="5" ry="2.5" fill="url(#princeBootGradient)" />
      <ellipse cx="38" cy="62" rx="5" ry="2.5" fill="url(#princeBootGradient)" />

      {/* Boot tops */}
      <rect x="22" y="58" width="8" height="4" fill="url(#princeBootGradient)" rx="1" />
      <rect x="34" y="58" width="8" height="4" fill="url(#princeBootGradient)" rx="1" />

      {/* Boot buckles */}
      <rect x="24" y="59" width="4" height="2" fill="url(#princeCrownGradient)" rx="0.5" />
      <rect x="36" y="59" width="4" height="2" fill="url(#princeCrownGradient)" rx="0.5" />

      {/* Sword hilt hint */}
      <rect x="14" y="44" width="3" height="10" fill="#C0C0C0" rx="1" />
      <rect x="12" y="42" width="7" height="4" fill="url(#princeCrownGradient)" rx="1" />
    </svg>
  );
}
