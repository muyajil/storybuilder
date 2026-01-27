/**
 * Knight Sprite Component
 * Enhanced with gradients, detailed armor, and heroic features
 */

import type { SpriteProps } from '../types';

export function Knight({ size = 64, color = '#C0C0C0' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Armor gradient */}
        <linearGradient id="knightArmorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#909090" />
          <stop offset="100%" stopColor="#606060" />
        </linearGradient>
        {/* Helmet gradient */}
        <linearGradient id="knightHelmetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D8D8D8" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>
        {/* Gold accent gradient */}
        <linearGradient id="knightGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Plume gradient */}
        <linearGradient id="knightPlumeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF4040" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
        {/* Shield gradient */}
        <linearGradient id="knightShieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5B7BC0" />
          <stop offset="50%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#2E4A8A" />
        </linearGradient>
        {/* Sword blade gradient */}
        <linearGradient id="knightBladeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#F8F8F8" />
          <stop offset="100%" stopColor="#C0C0C0" />
        </linearGradient>
        {/* Chainmail texture */}
        <pattern id="knightChainmail" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="none" stroke="#A0A0A0" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* Helmet */}
      <rect x="18" y="6" width="28" height="26" fill="url(#knightHelmetGradient)" rx="6" />
      {/* Helmet top */}
      <ellipse cx="32" cy="8" rx="12" ry="4" fill="url(#knightHelmetGradient)" />
      {/* Helmet crest ridge */}
      <rect x="30" y="4" width="4" height="8" fill="url(#knightHelmetGradient)" rx="2" />

      {/* Heroic Plume */}
      <path d="M32 6 Q42 -2 48 6 Q44 4 40 8 Q38 4 34 8" fill="url(#knightPlumeGradient)" />
      <path d="M34 4 Q38 0 42 4" fill="#FF6060" />

      {/* Visor slit */}
      <rect x="20" y="16" width="24" height="6" fill="#1A1A1A" rx="1" />
      {/* Eyes glowing behind visor */}
      <ellipse cx="26" cy="19" rx="2" ry="1.5" fill="#4A6B8A" opacity="0.8" />
      <ellipse cx="38" cy="19" rx="2" ry="1.5" fill="#4A6B8A" opacity="0.8" />
      <circle cx="25" cy="18" r="0.5" fill="white" opacity="0.6" />
      <circle cx="37" cy="18" r="0.5" fill="white" opacity="0.6" />

      {/* Visor breathing holes */}
      <circle cx="24" cy="24" r="1" fill="#1A1A1A" />
      <circle cx="28" cy="24" r="1" fill="#1A1A1A" />
      <circle cx="36" cy="24" r="1" fill="#1A1A1A" />
      <circle cx="40" cy="24" r="1" fill="#1A1A1A" />

      {/* Helmet chin guard */}
      <path d="M20 28 Q32 34 44 28" fill="url(#knightHelmetGradient)" />

      {/* Armor body/breastplate */}
      <rect x="14" y="32" width="36" height="24" fill="url(#knightArmorGradient)" rx="4" />
      {/* Chest plate center line */}
      <line x1="32" y1="32" x2="32" y2="56" stroke="#808080" strokeWidth="2" />
      {/* Chest rivets */}
      <circle cx="20" cy="36" r="1.5" fill="#808080" />
      <circle cx="44" cy="36" r="1.5" fill="#808080" />
      <circle cx="20" cy="48" r="1.5" fill="#808080" />
      <circle cx="44" cy="48" r="1.5" fill="#808080" />

      {/* Chest emblem */}
      <polygon points="32,36 24,48 40,48" fill="url(#knightGoldGradient)" />
      <polygon points="32,38 27,46 37,46" fill="#FFE55C" opacity="0.5" />

      {/* Chainmail under armor */}
      <rect x="16" y="54" width="32" height="4" fill="url(#knightChainmail)" />

      {/* Pauldrons (shoulder armor) */}
      <ellipse cx="12" cy="36" rx="8" ry="10" fill="url(#knightArmorGradient)" />
      <ellipse cx="52" cy="36" rx="8" ry="10" fill="url(#knightArmorGradient)" />
      {/* Pauldron ridges */}
      <path d="M8 32 Q12 28 16 32" stroke="#808080" strokeWidth="1" fill="none" />
      <path d="M48 32 Q52 28 56 32" stroke="#808080" strokeWidth="1" fill="none" />
      {/* Pauldron rivets */}
      <circle cx="12" cy="34" r="1" fill="#808080" />
      <circle cx="52" cy="34" r="1" fill="#808080" />

      {/* Arm armor */}
      <rect x="4" y="36" width="10" height="18" fill="url(#knightArmorGradient)" rx="3" />
      <rect x="50" y="36" width="10" height="18" fill="url(#knightArmorGradient)" rx="3" />
      {/* Arm segments */}
      <line x1="4" y1="44" x2="14" y2="44" stroke="#808080" strokeWidth="1" />
      <line x1="50" y1="44" x2="60" y2="44" stroke="#808080" strokeWidth="1" />

      {/* Gauntlets */}
      <rect x="2" y="52" width="12" height="8" fill="url(#knightArmorGradient)" rx="2" />
      <rect x="50" y="52" width="12" height="8" fill="url(#knightArmorGradient)" rx="2" />
      {/* Gauntlet fingers */}
      <rect x="2" y="58" width="3" height="3" fill="url(#knightArmorGradient)" rx="1" />
      <rect x="6" y="58" width="3" height="3" fill="url(#knightArmorGradient)" rx="1" />
      <rect x="10" y="58" width="3" height="3" fill="url(#knightArmorGradient)" rx="1" />
      <rect x="51" y="58" width="3" height="3" fill="url(#knightArmorGradient)" rx="1" />
      <rect x="55" y="58" width="3" height="3" fill="url(#knightArmorGradient)" rx="1" />
      <rect x="59" y="58" width="3" height="3" fill="url(#knightArmorGradient)" rx="1" />

      {/* Sword */}
      <rect x="0" y="54" width="18" height="3" fill="url(#knightBladeGradient)" />
      {/* Sword edge */}
      <polygon points="0,54 -2,55.5 0,57" fill="url(#knightBladeGradient)" />
      {/* Sword guard */}
      <rect x="16" y="52" width="5" height="8" fill="#5C3317" rx="1" />
      {/* Sword pommel */}
      <circle cx="22" cy="56" r="2" fill="url(#knightGoldGradient)" />

      {/* Leg armor / greaves */}
      <rect x="18" y="54" width="12" height="12" fill="url(#knightArmorGradient)" rx="3" />
      <rect x="34" y="54" width="12" height="12" fill="url(#knightArmorGradient)" rx="3" />
      {/* Knee guards */}
      <ellipse cx="24" cy="56" rx="4" ry="3" fill="url(#knightArmorGradient)" />
      <ellipse cx="40" cy="56" rx="4" ry="3" fill="url(#knightArmorGradient)" />

      {/* Shield */}
      <ellipse cx="58" cy="46" rx="8" ry="12" fill="url(#knightShieldGradient)" />
      {/* Shield border */}
      <ellipse cx="58" cy="46" rx="8" ry="12" fill="none" stroke="url(#knightGoldGradient)" strokeWidth="2" />
      {/* Shield emblem */}
      <polygon points="58,38 52,50 64,50" fill="url(#knightGoldGradient)" />
      {/* Shield shine */}
      <ellipse cx="54" cy="42" rx="2" ry="4" fill="white" opacity="0.2" />
    </svg>
  );
}
