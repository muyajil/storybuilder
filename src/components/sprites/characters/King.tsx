/**
 * King Sprite Component
 * Enhanced with gradients, royal details, and expressive features
 */

import type { SpriteProps } from '../types';

export function King({ size = 64, color = '#8B0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="kingSkinGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#DEBB9B" />
        </radialGradient>
        {/* Crown gradient */}
        <linearGradient id="kingCrownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE878" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Robe gradient */}
        <linearGradient id="kingRobeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#CD2020" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#5C0000" />
        </linearGradient>
        {/* Ermine trim gradient */}
        <linearGradient id="kingErmineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
        {/* Gold belt gradient */}
        <linearGradient id="kingBeltGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Gem gradient */}
        <radialGradient id="kingGemGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF6060" />
          <stop offset="100%" stopColor="#FF0000" />
        </radialGradient>
      </defs>

      {/* Grand Crown */}
      <polygon points="18,12 22,2 26,8 30,0 34,8 38,0 42,8 46,2 46,16 18,16" fill="url(#kingCrownGradient)" />
      {/* Crown base band */}
      <rect x="18" y="12" width="28" height="4" fill="url(#kingCrownGradient)" />
      {/* Crown jewels */}
      <circle cx="32" cy="4" r="3" fill="url(#kingGemGradient)" />
      <circle cx="24" cy="6" r="2" fill="#4169E1" />
      <circle cx="40" cy="6" r="2" fill="#228B22" />
      {/* Gem sparkles */}
      <circle cx="31" cy="3" r="1" fill="white" opacity="0.8" />
      {/* Crown details */}
      <circle cx="32" cy="14" r="2.5" fill="url(#kingGemGradient)" />
      <circle cx="24" cy="14" r="1.5" fill="#4169E1" />
      <circle cx="40" cy="14" r="1.5" fill="#4169E1" />

      {/* Head */}
      <circle cx="32" cy="20" r="10" fill="url(#kingSkinGradient)" />

      {/* Royal beard */}
      <ellipse cx="32" cy="28" rx="8" ry="6" fill="#808080" />
      <ellipse cx="32" cy="26" rx="6" ry="4" fill="#A0A0A0" />
      {/* Beard texture */}
      <path d="M26 26 Q28 30 26 34" stroke="#707070" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M32 24 Q32 30 32 34" stroke="#707070" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M38 26 Q36 30 38 34" stroke="#707070" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Royal eyebrows */}
      <path d="M24 16 Q28 14 30 17" stroke="#808080" strokeWidth="1.5" fill="none" />
      <path d="M34 17 Q36 14 40 16" stroke="#808080" strokeWidth="1.5" fill="none" />

      {/* Wise eyes */}
      <ellipse cx="28" cy="18" rx="2" ry="2.2" fill="#4A6B8A" />
      <ellipse cx="36" cy="18" rx="2" ry="2.2" fill="#4A6B8A" />
      <circle cx="27.5" cy="17.5" r="0.8" fill="white" />
      <circle cx="35.5" cy="17.5" r="0.8" fill="white" />

      {/* Dignified nose */}
      <ellipse cx="32" cy="21" rx="1.5" ry="1.2" fill="#DEB887" />

      {/* Royal Robe */}
      <rect x="16" y="30" width="32" height="26" fill="url(#kingRobeGradient)" rx="3" />

      {/* Ermine collar */}
      <ellipse cx="32" cy="32" rx="14" ry="4" fill="url(#kingErmineGradient)" />
      {/* Ermine spots */}
      <circle cx="24" cy="32" r="1" fill="#1A1A1A" />
      <circle cx="32" cy="33" r="1" fill="#1A1A1A" />
      <circle cx="40" cy="32" r="1" fill="#1A1A1A" />

      {/* White shirt front */}
      <rect x="28" y="32" width="8" height="12" fill="url(#kingErmineGradient)" />

      {/* Gold medallion */}
      <circle cx="32" cy="40" r="4" fill="url(#kingCrownGradient)" />
      <circle cx="32" cy="40" r="2.5" fill="url(#kingGemGradient)" />
      <circle cx="31" cy="39" r="0.8" fill="white" opacity="0.7" />

      {/* Royal sash */}
      <path d="M18 36 L46 48" stroke="url(#kingBeltGradient)" strokeWidth="4" />
      <path d="M18 36 L46 48" stroke="#FFD700" strokeWidth="2" />

      {/* Robe bottom with ermine trim */}
      <path d="M16 54 L12 64 L52 64 L48 54" fill="url(#kingRobeGradient)" />
      <rect x="12" y="60" width="40" height="4" fill="url(#kingErmineGradient)" />
      {/* Ermine spots on trim */}
      <circle cx="18" cy="62" r="1" fill="#1A1A1A" />
      <circle cx="26" cy="62" r="1" fill="#1A1A1A" />
      <circle cx="34" cy="62" r="1" fill="#1A1A1A" />
      <circle cx="42" cy="62" r="1" fill="#1A1A1A" />

      {/* Gold belt */}
      <rect x="22" y="52" width="20" height="5" fill="url(#kingBeltGradient)" rx="1" />
      <rect x="30" y="52" width="4" height="5" fill="url(#kingGemGradient)" rx="1" />

      {/* Royal sleeves */}
      <rect x="6" y="32" width="10" height="8" fill="url(#kingRobeGradient)" rx="2" />
      <rect x="48" y="32" width="10" height="8" fill="url(#kingRobeGradient)" rx="2" />
      {/* Sleeve trim */}
      <rect x="6" y="38" width="10" height="2" fill="url(#kingErmineGradient)" />
      <rect x="48" y="38" width="10" height="2" fill="url(#kingErmineGradient)" />

      {/* Royal hands */}
      <circle cx="6" cy="38" r="4" fill="url(#kingSkinGradient)" />
      <circle cx="58" cy="38" r="4" fill="url(#kingSkinGradient)" />

      {/* Royal ring */}
      <circle cx="4" cy="40" r="1.5" fill="url(#kingCrownGradient)" />
      <circle cx="4" cy="40" r="0.8" fill="url(#kingGemGradient)" />
    </svg>
  );
}
