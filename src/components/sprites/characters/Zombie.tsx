/**
 * Zombie Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Zombie({ size = 64, color = '#9ACD32' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Zombie skin gradient */}
        <radialGradient id="zombieSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B8E062" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#6B8E23" />
        </radialGradient>
        {/* Hair gradient */}
        <radialGradient id="zombieHairGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#6B8E3B" />
          <stop offset="70%" stopColor="#556B2F" />
          <stop offset="100%" stopColor="#3B5323" />
        </radialGradient>
        {/* Torn shirt gradient */}
        <linearGradient id="zombieShirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        {/* Pants gradient */}
        <linearGradient id="zombiePantsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5B7BB5" />
          <stop offset="50%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#2E4A8E" />
        </linearGradient>
        {/* Wound/scar gradient */}
        <linearGradient id="zombieWoundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B0000" />
          <stop offset="50%" stopColor="#556B2F" />
          <stop offset="100%" stopColor="#3B5323" />
        </linearGradient>
      </defs>

      {/* Messy hair */}
      <ellipse cx="32" cy="14" rx="14" ry="10" fill="url(#zombieHairGradient)" />
      {/* Hair tufts */}
      <path d="M22 10 Q24 4 26 10" fill="url(#zombieHairGradient)" />
      <path d="M30 8 Q32 2 34 8" fill="url(#zombieHairGradient)" />
      <path d="M38 10 Q40 4 42 10" fill="url(#zombieHairGradient)" />
      {/* Hair falling out */}
      <path d="M20 16 Q18 20 20 24" stroke="#556B2F" strokeWidth="1" fill="none" />

      {/* Head */}
      <circle cx="32" cy="20" r="13" fill="url(#zombieSkinGradient)" />
      {/* Head shading for decay */}
      <ellipse cx="38" cy="16" rx="4" ry="3" fill="#6B8E23" opacity="0.4" />

      {/* Uneven eyes */}
      <ellipse cx="26" cy="18" rx="5" ry="4" fill="white" />
      <ellipse cx="38" cy="20" rx="4" ry="3" fill="white" />
      {/* Bloodshot effect */}
      <line x1="22" y1="17" x2="24" y2="18" stroke="#8B0000" strokeWidth="0.3" />
      <line x1="23" y1="20" x2="25" y2="19" stroke="#8B0000" strokeWidth="0.3" />
      {/* Uneven pupils */}
      <circle cx="26" cy="18" r="2.5" fill="#556B2F" />
      <circle cx="38" cy="20" r="1.8" fill="#556B2F" />
      <circle cx="26" cy="18" r="1.2" fill="black" />
      <circle cx="38" cy="20" r="1" fill="black" />
      {/* Dull eye shine */}
      <circle cx="25" cy="17" r="0.5" fill="white" opacity="0.5" />
      <circle cx="37" cy="19" r="0.4" fill="white" opacity="0.5" />

      {/* Scar */}
      <path d="M36 12 L42 22" stroke="url(#zombieWoundGradient)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Scar stitches */}
      <line x1="37" y1="14" x2="39" y2="13" stroke="#3B5323" strokeWidth="0.5" />
      <line x1="38" y1="16" x2="40" y2="15" stroke="#3B5323" strokeWidth="0.5" />
      <line x1="39" y1="18" x2="41" y2="17" stroke="#3B5323" strokeWidth="0.5" />
      <line x1="40" y1="20" x2="42" y2="19" stroke="#3B5323" strokeWidth="0.5" />

      {/* Droopy mouth */}
      <path d="M24 28 Q32 34 40 28" stroke="#3B5323" strokeWidth="2.5" fill="none" />
      {/* Missing teeth gaps */}
      <rect x="28" y="27" width="3" height="4" fill="#3B5323" />
      <rect x="34" y="27" width="2" height="3" fill="#3B5323" />

      {/* Torn shirt */}
      <rect x="19" y="32" width="26" height="22" fill="url(#zombieShirtGradient)" rx="2" />
      {/* Shirt tears showing zombie skin */}
      <path d="M19 32 L24 42 L19 52" fill="url(#zombieSkinGradient)" />
      <path d="M45 32 L40 40 L45 52" fill="url(#zombieSkinGradient)" />
      {/* Shirt holes */}
      <ellipse cx="28" cy="40" rx="2" ry="3" fill="url(#zombieSkinGradient)" />
      <ellipse cx="38" cy="44" rx="1.5" ry="2" fill="url(#zombieSkinGradient)" />
      {/* Dirt stains */}
      <ellipse cx="32" cy="38" rx="4" ry="2" fill="#654321" opacity="0.3" />
      <ellipse cx="26" cy="48" rx="3" ry="2" fill="#654321" opacity="0.2" />

      {/* Arms reaching out */}
      <rect x="4" y="32" width="15" height="7" fill="url(#zombieSkinGradient)" rx="2" />
      <rect x="45" y="30" width="15" height="7" fill="url(#zombieSkinGradient)" rx="2" />
      {/* Arm decay */}
      <ellipse cx="10" cy="35" rx="2" ry="1.5" fill="#6B8E23" opacity="0.4" />
      <ellipse cx="52" cy="33" rx="2" ry="1.5" fill="#6B8E23" opacity="0.4" />

      {/* Zombie hands */}
      <ellipse cx="4" cy="36" rx="6" ry="5" fill="url(#zombieSkinGradient)" />
      <ellipse cx="60" cy="34" rx="6" ry="5" fill="url(#zombieSkinGradient)" />
      {/* Fingers spread out */}
      <ellipse cx="0" cy="34" rx="2" ry="3" fill={color} />
      <ellipse cx="2" cy="32" rx="2" ry="3" fill={color} />
      <ellipse cx="4" cy="31" rx="2" ry="3" fill={color} />
      <ellipse cx="62" cy="32" rx="2" ry="3" fill={color} />
      <ellipse cx="64" cy="34" rx="2" ry="3" fill={color} />
      {/* Dirty fingernails */}
      <ellipse cx="0" cy="31" rx="1" ry="0.5" fill="#556B2F" />
      <ellipse cx="2" cy="29" rx="1" ry="0.5" fill="#556B2F" />

      {/* Torn jeans */}
      <rect x="21" y="52" width="9" height="14" fill="url(#zombiePantsGradient)" rx="2" />
      <rect x="34" y="52" width="9" height="14" fill="url(#zombiePantsGradient)" rx="2" />
      {/* Knee tears */}
      <ellipse cx="25.5" cy="58" rx="3" ry="2" fill="url(#zombieSkinGradient)" />
      <ellipse cx="38.5" cy="60" rx="2" ry="1.5" fill="url(#zombieSkinGradient)" />
      {/* Dirt on pants */}
      <ellipse cx="24" cy="62" rx="2" ry="1.5" fill="#3B5323" opacity="0.3" />
      <ellipse cx="40" cy="64" rx="2" ry="1" fill="#3B5323" opacity="0.3" />

      {/* Dragging foot */}
      <rect x="20" y="64" width="10" height="4" fill="#3B5323" rx="1" />
      <rect x="34" y="64" width="10" height="4" fill="#3B5323" rx="1" />

      {/* Flies buzzing around */}
      <circle cx="46" cy="16" r="1" fill="#1a1a1a" />
      <circle cx="48" cy="20" r="0.8" fill="#1a1a1a" />
      <circle cx="50" cy="14" r="0.6" fill="#1a1a1a" />
      {/* Fly wings */}
      <ellipse cx="47" cy="15" rx="1" ry="0.5" fill="#888" opacity="0.5" />
    </svg>
  );
}
