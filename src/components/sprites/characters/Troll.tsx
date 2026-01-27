/**
 * Troll Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Troll({ size = 64, color = '#696969' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="trollSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#808080" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#4a4a4a" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="trollEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFF66" />
          <stop offset="70%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Nose/mouth gradient */}
        <radialGradient id="trollMouthGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#5a5a5a" />
          <stop offset="70%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#3a3a3a" />
        </radialGradient>
        {/* Teeth gradient */}
        <linearGradient id="trollTeethGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFF99" />
          <stop offset="50%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Body gradient */}
        <radialGradient id="trollBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#787878" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#505050" />
        </radialGradient>
        {/* Wart gradient */}
        <radialGradient id="trollWartGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#5a5a5a" />
          <stop offset="100%" stopColor="#3a3a3a" />
        </radialGradient>
      </defs>

      {/* Head */}
      <ellipse cx="32" cy="20" rx="20" ry="18" fill="url(#trollSkinGradient)" />
      {/* Head texture/wrinkles */}
      <path d="M20 14 Q24 16 28 14" stroke="#505050" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M36 14 Q40 16 44 14" stroke="#505050" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Brow ridge */}
      <ellipse cx="32" cy="12" rx="16" ry="4" fill="#5a5a5a" opacity="0.5" />

      {/* Eyes */}
      <circle cx="24" cy="16" r="6" fill="url(#trollEyeGradient)" />
      <circle cx="24" cy="16" r="6" fill="none" stroke="#8B8000" strokeWidth="1" />
      <circle cx="40" cy="16" r="6" fill="url(#trollEyeGradient)" />
      <circle cx="40" cy="16" r="6" fill="none" stroke="#8B8000" strokeWidth="1" />
      {/* Pupils */}
      <circle cx="24" cy="16" r="2.5" fill="black" />
      <circle cx="40" cy="16" r="2.5" fill="black" />
      {/* Eye shine */}
      <circle cx="23" cy="15" r="1" fill="white" opacity="0.6" />
      <circle cx="39" cy="15" r="1" fill="white" opacity="0.6" />

      {/* Big nose/snout */}
      <ellipse cx="32" cy="28" rx="10" ry="6" fill="url(#trollMouthGradient)" />
      {/* Nostrils */}
      <ellipse cx="28" cy="28" rx="2" ry="1.5" fill="#2a2a2a" />
      <ellipse cx="36" cy="28" rx="2" ry="1.5" fill="#2a2a2a" />

      {/* Mouth with teeth */}
      <path d="M22 32 Q32 38 42 32" stroke="#2a2a2a" strokeWidth="2" fill="none" />
      {/* Jagged teeth */}
      <polygon points="24,32 26,38 28,32" fill="url(#trollTeethGradient)" />
      <polygon points="30,32 32,40 34,32" fill="url(#trollTeethGradient)" />
      <polygon points="36,32 38,38 40,32" fill="url(#trollTeethGradient)" />

      {/* Warts */}
      <circle cx="18" cy="22" r="2" fill="url(#trollWartGradient)" />
      <circle cx="46" cy="20" r="1.5" fill="url(#trollWartGradient)" />
      <circle cx="14" cy="16" r="1" fill="url(#trollWartGradient)" />

      {/* Body */}
      <ellipse cx="32" cy="48" rx="18" ry="16" fill="url(#trollBodyGradient)" />
      {/* Belly button */}
      <ellipse cx="32" cy="50" rx="2" ry="3" fill="#505050" />

      {/* Arms */}
      <rect x="4" y="36" width="14" height="12" fill="url(#trollSkinGradient)" rx="4" />
      <rect x="46" y="36" width="14" height="12" fill="url(#trollSkinGradient)" rx="4" />
      {/* Arm highlights */}
      <rect x="6" y="38" width="4" height="8" fill="#787878" opacity="0.3" rx="2" />
      <rect x="48" y="38" width="4" height="8" fill="#787878" opacity="0.3" rx="2" />

      {/* Hands/fists */}
      <circle cx="4" cy="44" r="6" fill="url(#trollSkinGradient)" />
      <circle cx="60" cy="44" r="6" fill="url(#trollSkinGradient)" />
      {/* Knuckle details */}
      <circle cx="2" cy="42" r="1.5" fill="#787878" />
      <circle cx="4" cy="40" r="1.5" fill="#787878" />
      <circle cx="58" cy="42" r="1.5" fill="#787878" />
      <circle cx="60" cy="40" r="1.5" fill="#787878" />

      {/* Feet */}
      <rect x="18" y="58" width="12" height="6" fill="url(#trollSkinGradient)" rx="3" />
      <rect x="34" y="58" width="12" height="6" fill="url(#trollSkinGradient)" rx="3" />
      {/* Toes */}
      <circle cx="20" cy="62" r="2" fill="#787878" />
      <circle cx="24" cy="63" r="2" fill="#787878" />
      <circle cx="28" cy="62" r="2" fill="#787878" />
      <circle cx="36" cy="62" r="2" fill="#787878" />
      <circle cx="40" cy="63" r="2" fill="#787878" />
      <circle cx="44" cy="62" r="2" fill="#787878" />
    </svg>
  );
}
