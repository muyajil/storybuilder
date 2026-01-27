/**
 * Pirate Sprite Component
 * Enhanced with gradients, detailed clothing, and expressive features
 */

import type { SpriteProps } from '../types';

export function Pirate({ size = 64, color = '#8B0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Bandana gradient */}
        <linearGradient id="pirateBandanaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A00000" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#660000" />
        </linearGradient>
        {/* Skin gradient */}
        <linearGradient id="pirateSkinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </linearGradient>
        {/* Vest gradient */}
        <linearGradient id="pirateVestGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A00000" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#550000" />
        </linearGradient>
        {/* Shirt gradient */}
        <linearGradient id="pirateShirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
        {/* Belt gradient */}
        <linearGradient id="pirateBeltGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5C3317" />
        </linearGradient>
        {/* Gold gradient */}
        <linearGradient id="pirateGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Pants gradient */}
        <linearGradient id="piratePantsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Hook gradient */}
        <linearGradient id="pirateHookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
        {/* Wood gradient */}
        <linearGradient id="pirateWoodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5C3317" />
        </linearGradient>
        {/* Beard gradient */}
        <linearGradient id="pirateBeardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#2A2A2A" />
        </linearGradient>
      </defs>

      {/* Bandana / Bandana */}
      <ellipse cx="32" cy="12" rx="15" ry="9" fill="url(#pirateBandanaGradient)" />
      <ellipse cx="32" cy="10" rx="12" ry="6" fill="#A00000" opacity="0.3" />

      {/* Bandana knot and tails */}
      <path d="M17 12 L12 22" stroke="url(#pirateBandanaGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M14 14 L10 20" stroke="url(#pirateBandanaGradient)" strokeWidth="3" strokeLinecap="round" />

      {/* Bandana pattern (skull and crossbones hint) */}
      <circle cx="32" cy="10" r="2" fill="#FFFFFF" opacity="0.3" />

      {/* Head / Kopf */}
      <circle cx="32" cy="18" r="11" fill="url(#pirateSkinGradient)" />

      {/* Face highlight */}
      <ellipse cx="30" cy="15" rx="5" ry="4" fill="#FFF5E6" opacity="0.3" />

      {/* Eye patch / Augenklappe */}
      <circle cx="39" cy="16" r="5" fill="#1A1A1A" />
      <circle cx="39" cy="16" r="4" fill="#2A2A2A" />
      <line x1="34" y1="11" x2="44" y2="11" stroke="#1A1A1A" strokeWidth="2" />

      {/* Good eye / Auge */}
      <ellipse cx="25" cy="16" rx="3" ry="2.5" fill="white" />
      <circle cx="25" cy="16" r="2" fill="#3D2314" />
      <circle cx="25" cy="16" r="1" fill="black" />
      <circle cx="26" cy="15" r="0.7" fill="white" />

      {/* Eyebrow - rugged */}
      <path d="M22 13 Q25 11 29 13" stroke="#333333" strokeWidth="1.5" fill="none" />

      {/* Scar on cheek */}
      <path d="M38 20 L42 24" stroke="#DEB887" strokeWidth="1" opacity="0.6" />

      {/* Beard / Bart */}
      <path d="M21 22 Q27 26 32 24 Q37 26 43 22 Q40 34 32 34 Q24 34 21 22" fill="url(#pirateBeardGradient)" />

      {/* Beard highlight */}
      <path d="M26 26 Q32 28 38 26" stroke="#5A5A5A" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Smirk */}
      <path d="M27 22 Q30 24 33 22" stroke="#333333" strokeWidth="1" fill="none" />

      {/* Gold earring */}
      <circle cx="20" cy="20" r="2" fill="url(#pirateGoldGradient)" />

      {/* Vest / Weste */}
      <rect x="19" y="28" width="26" height="21" fill="url(#pirateVestGradient)" rx="3" />

      {/* Vest lapels */}
      <path d="M22 28 L28 36 L22 36 Z" fill="#550000" />
      <path d="M42 28 L36 36 L42 36 Z" fill="#550000" />

      {/* Vest buttons */}
      <circle cx="32" cy="32" r="1.5" fill="url(#pirateGoldGradient)" />
      <circle cx="32" cy="38" r="1.5" fill="url(#pirateGoldGradient)" />

      {/* Shirt / Hemd (V-neck) */}
      <path d="M28 28 L28 49 L36 49 L36 28 L32 34 Z" fill="url(#pirateShirtGradient)" />

      {/* Shirt ruffle detail */}
      <path d="M29 30 Q32 32 35 30" stroke="#CCCCCC" strokeWidth="0.5" fill="none" />
      <path d="M29 34 Q32 36 35 34" stroke="#CCCCCC" strokeWidth="0.5" fill="none" />

      {/* Belt / Gürtel */}
      <rect x="17" y="44" width="30" height="5" fill="url(#pirateBeltGradient)" rx="1" />

      {/* Belt buckle */}
      <rect x="29" y="43" width="6" height="7" fill="url(#pirateGoldGradient)" rx="1" />
      <rect x="30" y="44" width="4" height="5" fill="#8B4513" rx="0.5" />

      {/* Arms / Arme */}
      <rect x="7" y="30" width="12" height="7" fill="url(#pirateShirtGradient)" rx="3" />
      <rect x="45" y="30" width="12" height="7" fill="url(#pirateShirtGradient)" rx="3" />

      {/* Sleeve cuffs */}
      <rect x="7" y="30" width="12" height="2" fill="#E8E8E8" rx="1" />
      <rect x="45" y="30" width="12" height="2" fill="#E8E8E8" rx="1" />

      {/* Good hand / Hand */}
      <circle cx="7" cy="34" r="4" fill="url(#pirateSkinGradient)" />

      {/* Hook hand / Haken */}
      <circle cx="57" cy="34" r="4" fill="url(#pirateWoodGradient)" />
      <path d="M57 34 Q62 34 62 40 Q62 45 57 45" stroke="url(#pirateHookGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Legs / Beine */}
      <rect x="21" y="48" width="9" height="12" fill="url(#piratePantsGradient)" rx="2" />
      <rect x="34" y="48" width="9" height="8" fill="url(#piratePantsGradient)" rx="2" />

      {/* Peg leg / Holzbein */}
      <rect x="35" y="56" width="6" height="8" fill="url(#pirateWoodGradient)" rx="1" />
      <rect x="36" y="57" width="4" height="2" fill="#5C3317" opacity="0.5" rx="0.5" />
      <rect x="36" y="61" width="4" height="2" fill="#5C3317" opacity="0.5" rx="0.5" />

      {/* Good boot */}
      <ellipse cx="25" cy="60" rx="6" ry="3" fill="#1A1A1A" />
      <ellipse cx="25" cy="59" rx="5" ry="2" fill="#333333" opacity="0.5" />

      {/* Cutlass hint on belt */}
      <rect x="14" y="42" width="3" height="10" fill="url(#pirateHookGradient)" rx="1" />
      <rect x="13" y="40" width="5" height="4" fill="url(#pirateGoldGradient)" rx="1" />
    </svg>
  );
}
