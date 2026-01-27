/**
 * Scientist Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Scientist({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hair gradient */}
        <radialGradient id="scientistHairGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F0F0F0" />
          <stop offset="70%" stopColor="#D0D0D0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </radialGradient>
        {/* Skin gradient */}
        <radialGradient id="scientistSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="70%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Lab coat gradient */}
        <linearGradient id="scientistCoatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>
        {/* Glasses lens gradient */}
        <radialGradient id="scientistLensGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#5F9EA0" />
        </radialGradient>
        {/* Flask liquid gradient */}
        <linearGradient id="scientistFlaskGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7FFF00" />
          <stop offset="50%" stopColor="#32CD32" />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Pants gradient */}
        <linearGradient id="scientistPantsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2F2F2F" />
          <stop offset="50%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>

      {/* Wild Einstein hair */}
      <ellipse cx="32" cy="8" rx="14" ry="7" fill="url(#scientistHairGradient)" />
      <ellipse cx="22" cy="10" rx="5" ry="4" fill="#E0E0E0" />
      <ellipse cx="42" cy="10" rx="5" ry="4" fill="#E0E0E0" />

      {/* Head */}
      <circle cx="32" cy="16" r="10" fill="url(#scientistSkinGradient)" />

      {/* Glasses frame */}
      <rect x="22" y="10" width="20" height="4" fill="#333" rx="1" />
      {/* Left lens */}
      <circle cx="26" cy="14" r="5" fill="url(#scientistLensGradient)" stroke="#333" strokeWidth="1.5" />
      <circle cx="24" cy="12" r="1.5" fill="white" opacity="0.6" />
      {/* Right lens */}
      <circle cx="38" cy="14" r="5" fill="url(#scientistLensGradient)" stroke="#333" strokeWidth="1.5" />
      <circle cx="36" cy="12" r="1.5" fill="white" opacity="0.6" />
      {/* Nose bridge */}
      <rect x="30" y="12" width="4" height="2" fill="#333" />

      {/* Eyes behind glasses */}
      <circle cx="26" cy="14" r="2" fill="black" />
      <circle cx="38" cy="14" r="2" fill="black" />
      <circle cx="25" cy="13" r="0.5" fill="white" />
      <circle cx="37" cy="13" r="0.5" fill="white" />

      {/* Smile */}
      <path d="M28 20 Q32 23 36 20" stroke="#8B4513" strokeWidth="1.5" fill="none" />

      {/* Lab coat body */}
      <rect x="20" y="26" width="24" height="24" fill="url(#scientistCoatGradient)" rx="2" />
      {/* Coat lapels */}
      <path d="M20 26 L28 34 L28 26" fill="#E0E0E0" />
      <path d="M44 26 L36 34 L36 26" fill="#E0E0E0" />
      {/* Coat buttons */}
      <circle cx="32" cy="36" r="1.5" fill="#C0C0C0" />
      <circle cx="32" cy="42" r="1.5" fill="#C0C0C0" />

      {/* Pocket with pens */}
      <rect x="22" y="30" width="6" height="8" fill="#F0F0F0" stroke="#CCC" strokeWidth="0.5" />
      <rect x="23" y="28" width="1" height="4" fill="#FF0000" />
      <rect x="25" y="29" width="1" height="3" fill="#0000FF" />

      {/* Name badge */}
      <rect x="34" y="30" width="8" height="5" fill="#87CEEB" stroke="#333" strokeWidth="0.5" rx="1" />
      <line x1="35" y1="32" x2="41" y2="32" stroke="#333" strokeWidth="0.5" />
      <line x1="35" y1="34" x2="39" y2="34" stroke="#333" strokeWidth="0.5" />

      {/* Arms */}
      <rect x="8" y="28" width="12" height="6" fill="url(#scientistCoatGradient)" rx="2" />
      <rect x="44" y="28" width="12" height="6" fill="url(#scientistCoatGradient)" rx="2" />

      {/* Hands */}
      <circle cx="8" cy="31" r="4" fill="url(#scientistSkinGradient)" />
      <circle cx="56" cy="31" r="4" fill="url(#scientistSkinGradient)" />

      {/* Pants */}
      <rect x="24" y="50" width="6" height="12" fill="url(#scientistPantsGradient)" rx="1" />
      <rect x="34" y="50" width="6" height="12" fill="url(#scientistPantsGradient)" rx="1" />

      {/* Shoes */}
      <ellipse cx="27" cy="62" rx="4" ry="2" fill="#1a1a1a" />
      <ellipse cx="37" cy="62" rx="4" ry="2" fill="#1a1a1a" />

      {/* Flask in hand */}
      <ellipse cx="56" cy="38" rx="7" ry="5" fill="url(#scientistFlaskGradient)" />
      <ellipse cx="56" cy="38" rx="7" ry="5" fill="none" stroke="#228B22" strokeWidth="1" />
      <path d="M52 36 L56 30 L56 36" fill="none" stroke="#333" strokeWidth="1.5" />
      {/* Bubbles in flask */}
      <circle cx="54" cy="39" r="1" fill="#90EE90" opacity="0.7" />
      <circle cx="58" cy="37" r="0.8" fill="#90EE90" opacity="0.7" />
      <circle cx="56" cy="40" r="0.6" fill="#ADFF2F" opacity="0.8" />
    </svg>
  );
}
