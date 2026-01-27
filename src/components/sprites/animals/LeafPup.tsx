/**
 * LeafPup Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function LeafPup({ size = 64, color = '#32CD32' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="leafPupBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="leafPupHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </radialGradient>
        {/* Leaf gradient */}
        <linearGradient id="leafPupLeafGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#006400" />
        </linearGradient>
        {/* Leaf ear gradient */}
        <linearGradient id="leafPupEarGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#006400" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#90EE90" />
        </linearGradient>
        {/* Belly gradient */}
        <radialGradient id="leafPupBellyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ADFF2F" />
          <stop offset="100%" stopColor="#90EE90" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="leafPupEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#006400" />
        </radialGradient>
        {/* Flower gradient */}
        <radialGradient id="leafPupFlowerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="100%" stopColor="#FF69B4" />
        </radialGradient>
        {/* Leg gradient */}
        <linearGradient id="leafPupLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="36" cy="60" rx="18" ry="3" fill="rgba(0,0,0,0.15)" />

      {/* Leaf tail */}
      <ellipse cx="8" cy="38" rx="9" ry="11" fill="url(#leafPupLeafGradient)" />
      {/* Tail vein */}
      <path d="M8 30 L8 46" stroke="#006400" strokeWidth="1.5" />
      <path d="M8 34 L4 32" stroke="#006400" strokeWidth="0.8" opacity="0.7" />
      <path d="M8 38 L3 38" stroke="#006400" strokeWidth="0.8" opacity="0.7" />
      <path d="M8 42 L4 44" stroke="#006400" strokeWidth="0.8" opacity="0.7" />
      {/* Tail highlight */}
      <ellipse cx="6" cy="36" rx="3" ry="4" fill="rgba(255,255,255,0.15)" />

      {/* Legs with gradient */}
      <rect x="22" y="48" width="7" height="12" fill="url(#leafPupLegGradient)" rx="3" />
      <rect x="36" y="48" width="7" height="12" fill="url(#leafPupLegGradient)" rx="3" />
      {/* Leg highlights */}
      <rect x="23" y="49" width="2" height="8" fill="rgba(255,255,255,0.15)" rx="1" />
      <rect x="37" y="49" width="2" height="8" fill="rgba(255,255,255,0.15)" rx="1" />
      {/* Paw pads */}
      <ellipse cx="25" cy="58" rx="3" ry="1.5" fill="#228B22" />
      <ellipse cx="40" cy="58" rx="3" ry="1.5" fill="#228B22" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="40" rx="16" ry="12" fill="url(#leafPupBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="36" rx="8" ry="5" fill="rgba(255,255,255,0.15)" />

      {/* Belly with gradient */}
      <ellipse cx="32" cy="42" rx="10" ry="7" fill="url(#leafPupBellyGradient)" />
      {/* Leaf pattern on belly */}
      <path d="M32 36 L32 48" stroke="#228B22" strokeWidth="0.8" opacity="0.5" />
      <path d="M28 40 L36 40" stroke="#228B22" strokeWidth="0.5" opacity="0.4" />
      <path d="M29 44 L35 44" stroke="#228B22" strokeWidth="0.5" opacity="0.4" />

      {/* Leaf ears */}
      <ellipse cx="38" cy="16" rx="6" ry="11" fill="url(#leafPupEarGradient)" />
      <ellipse cx="58" cy="16" rx="6" ry="11" fill="url(#leafPupEarGradient)" />
      {/* Ear veins */}
      <path d="M38 8 L38 24" stroke="#006400" strokeWidth="1" />
      <path d="M58 8 L58 24" stroke="#006400" strokeWidth="1" />
      <path d="M38 12 L35 10" stroke="#006400" strokeWidth="0.5" opacity="0.7" />
      <path d="M38 16 L34 16" stroke="#006400" strokeWidth="0.5" opacity="0.7" />
      <path d="M58 12 L61 10" stroke="#006400" strokeWidth="0.5" opacity="0.7" />
      <path d="M58 16 L62 16" stroke="#006400" strokeWidth="0.5" opacity="0.7" />
      {/* Ear highlights */}
      <ellipse cx="36" cy="14" rx="2" ry="4" fill="rgba(255,255,255,0.2)" />
      <ellipse cx="56" cy="14" rx="2" ry="4" fill="rgba(255,255,255,0.2)" />

      {/* Head with gradient */}
      <circle cx="48" cy="30" r="14" fill="url(#leafPupHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="44" cy="24" rx="5" ry="4" fill="rgba(255,255,255,0.2)" />

      {/* Eyes with gradient */}
      <ellipse cx="44" cy="28" rx="5.5" ry="6" fill="white" />
      <ellipse cx="54" cy="28" rx="5.5" ry="6" fill="white" />
      <circle cx="44" cy="28" r="3.5" fill="url(#leafPupEyeGradient)" />
      <circle cx="54" cy="28" r="3.5" fill="url(#leafPupEyeGradient)" />
      {/* Eye highlights */}
      <circle cx="45" cy="27" r="1.5" fill="white" />
      <circle cx="55" cy="27" r="1.5" fill="white" />
      <circle cx="43" cy="29" r="0.8" fill="white" opacity="0.5" />
      <circle cx="53" cy="29" r="0.8" fill="white" opacity="0.5" />

      {/* Nose with detail */}
      <ellipse cx="49" cy="36" rx="3.5" ry="2.5" fill="#8B4513" />
      <ellipse cx="48" cy="35" rx="1.5" ry="1" fill="rgba(255,255,255,0.2)" />

      {/* Mouth */}
      <path d="M47 38 Q49 40 51 38" stroke="#5D3A1A" strokeWidth="0.8" fill="none" />

      {/* Flower decoration */}
      {/* Petals */}
      <circle cx="40" cy="18" r="2" fill="url(#leafPupFlowerGradient)" />
      <circle cx="44" cy="16" r="2" fill="url(#leafPupFlowerGradient)" />
      <circle cx="44" cy="20" r="2" fill="url(#leafPupFlowerGradient)" />
      <circle cx="40" cy="22" r="2" fill="url(#leafPupFlowerGradient)" />
      <circle cx="38" cy="18" r="1.5" fill="url(#leafPupFlowerGradient)" />
      {/* Flower center */}
      <circle cx="42" cy="18" r="1.5" fill="#FFD700" />
      <circle cx="42" cy="18" r="0.8" fill="#FFA500" />

      {/* Dew drops */}
      <ellipse cx="14" cy="34" rx="1" ry="1.5" fill="rgba(255,255,255,0.4)" />
      <ellipse cx="36" cy="18" rx="0.8" ry="1.2" fill="rgba(255,255,255,0.3)" />

      {/* Cheek blush */}
      <ellipse cx="40" cy="32" rx="2" ry="1.5" fill="#FF69B4" opacity="0.3" />
      <ellipse cx="56" cy="32" rx="2" ry="1.5" fill="#FF69B4" opacity="0.3" />
    </svg>
  );
}
