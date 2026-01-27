/**
 * Goblin Sprite Component
 * Enhanced with gradients, detailed skin texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Goblin({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="goblinSkinGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3CB371" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1B5E1B" />
        </radialGradient>
        {/* Ear gradient */}
        <linearGradient id="goblinEarGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1B5E1B" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#3CB371" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="goblinEyeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF80" />
          <stop offset="70%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Body gradient */}
        <linearGradient id="goblinBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3CB371" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#145A14" />
        </linearGradient>
        {/* Nose gradient */}
        <radialGradient id="goblinNoseGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3CB371" />
          <stop offset="100%" stopColor="#1B5E1B" />
        </radialGradient>
      </defs>

      {/* Large pointed ears */}
      <polygon points="16,22 4,4 26,18" fill="url(#goblinEarGradient)" />
      <polygon points="48,22 60,4 38,18" fill="url(#goblinEarGradient)" />
      {/* Inner ear */}
      <polygon points="16,20 10,10 22,18" fill="#2E8B2E" opacity="0.5" />
      <polygon points="48,20 54,10 42,18" fill="#2E8B2E" opacity="0.5" />
      {/* Ear notches (battle-worn) */}
      <path d="M8 8 L10 12 L6 10" fill="#1B5E1B" />
      <path d="M56 8 L54 12 L58 10" fill="#1B5E1B" />

      {/* Large head */}
      <circle cx="32" cy="22" r="15" fill="url(#goblinSkinGradient)" />

      {/* Brow ridges */}
      <path d="M20 14 Q26 10 32 14" fill="#1B5E1B" />
      <path d="M32 14 Q38 10 44 14" fill="#1B5E1B" />

      {/* Menacing eyebrows */}
      <path d="M22 14 L28 16" stroke="#0A3A0A" strokeWidth="2" fill="none" />
      <path d="M42 14 L36 16" stroke="#0A3A0A" strokeWidth="2" fill="none" />

      {/* Glowing yellow eyes */}
      <ellipse cx="26" cy="19" rx="4.5" ry="5" fill="url(#goblinEyeGradient)" />
      <ellipse cx="38" cy="19" rx="4.5" ry="5" fill="url(#goblinEyeGradient)" />
      {/* Slit pupils */}
      <ellipse cx="26" cy="19" rx="1.5" ry="4" fill="black" />
      <ellipse cx="38" cy="19" rx="1.5" ry="4" fill="black" />
      {/* Eye glow highlight */}
      <circle cx="24" cy="17" r="1" fill="white" opacity="0.6" />
      <circle cx="36" cy="17" r="1" fill="white" opacity="0.6" />

      {/* Big warty nose */}
      <ellipse cx="32" cy="26" rx="5" ry="4" fill="url(#goblinNoseGradient)" />
      <circle cx="30" cy="24" r="1" fill="#1B5E1B" opacity="0.5" />
      <circle cx="35" cy="25" r="0.8" fill="#1B5E1B" opacity="0.5" />
      {/* Nostrils */}
      <ellipse cx="30" cy="28" rx="1.5" ry="1" fill="#0A3A0A" />
      <ellipse cx="34" cy="28" rx="1.5" ry="1" fill="#0A3A0A" />

      {/* Wide grinning mouth */}
      <ellipse cx="32" cy="32" rx="8" ry="4" fill="#1a1a1a" />
      {/* Sharp teeth */}
      <polygon points="24,30 26,34 28,30" fill="#F5F5DC" />
      <polygon points="28,30 30,35 32,30" fill="#F5F5DC" />
      <polygon points="32,30 34,35 36,30" fill="#F5F5DC" />
      <polygon points="36,30 38,34 40,30" fill="#F5F5DC" />
      {/* Bottom teeth */}
      <polygon points="27,34 29,32 31,34" fill="#E8E8D0" />
      <polygon points="33,34 35,32 37,34" fill="#E8E8D0" />
      {/* Tongue */}
      <ellipse cx="32" cy="34" rx="3" ry="1.5" fill="#8B4060" />

      {/* Warts on face */}
      <circle cx="20" cy="24" r="1.5" fill="#1B5E1B" />
      <circle cx="44" cy="22" r="1" fill="#1B5E1B" />
      <circle cx="40" cy="30" r="0.8" fill="#1B5E1B" />

      {/* Hunched body */}
      <ellipse cx="32" cy="48" rx="14" ry="12" fill="url(#goblinBodyGradient)" />
      {/* Belly */}
      <ellipse cx="32" cy="50" rx="8" ry="6" fill="#2E8B2E" opacity="0.3" />

      {/* Ragged vest/clothing */}
      <path d="M20 42 L18 58 L26 58 L24 42" fill="#4A3728" />
      <path d="M44 42 L46 58 L38 58 L40 42" fill="#4A3728" />
      {/* Torn edges */}
      <path d="M18 58 L20 56 L22 58 L24 56 L26 58" fill="#4A3728" />
      <path d="M38 58 L40 56 L42 58 L44 56 L46 58" fill="#4A3728" />

      {/* Belt with stolen loot */}
      <rect x="20" y="52" width="24" height="3" fill="#5C3317" />
      <circle cx="32" cy="53.5" r="2" fill="#B8860B" />

      {/* Scrawny arms */}
      <path d="M18 44 L8 38 L6 42" fill="url(#goblinBodyGradient)" />
      <path d="M46 44 L56 38 L58 42" fill="url(#goblinBodyGradient)" />
      {/* Clawed hands */}
      <circle cx="6" cy="40" r="4" fill="url(#goblinSkinGradient)" />
      <circle cx="58" cy="40" r="4" fill="url(#goblinSkinGradient)" />
      {/* Claws */}
      <path d="M3 38 L1 36" stroke="#1B5E1B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 36 L4 34" stroke="#1B5E1B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M61 38 L63 36" stroke="#1B5E1B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M59 36 L60 34" stroke="#1B5E1B" strokeWidth="1.5" strokeLinecap="round" />

      {/* Short bandy legs */}
      <rect x="24" y="56" width="6" height="8" fill="url(#goblinBodyGradient)" rx="2" />
      <rect x="34" y="56" width="6" height="8" fill="url(#goblinBodyGradient)" rx="2" />

      {/* Big bare feet */}
      <ellipse cx="27" cy="64" rx="5" ry="2" fill="url(#goblinSkinGradient)" />
      <ellipse cx="37" cy="64" rx="5" ry="2" fill="url(#goblinSkinGradient)" />
      {/* Toes with claws */}
      <circle cx="23" cy="64" r="1.2" fill="url(#goblinSkinGradient)" />
      <circle cx="26" cy="65" r="1" fill="url(#goblinSkinGradient)" />
      <circle cx="41" cy="64" r="1.2" fill="url(#goblinSkinGradient)" />
      <circle cx="38" cy="65" r="1" fill="url(#goblinSkinGradient)" />
    </svg>
  );
}
