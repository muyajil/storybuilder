/**
 * SparkMouse Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function SparkMouse({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="sparkMouseBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Electric aura */}
        <radialGradient id="sparkMouseAuraGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF00" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        {/* Ear gradient */}
        <linearGradient id="sparkMouseEarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Cheek gradient */}
        <radialGradient id="sparkMouseCheekGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="100%" stopColor="#CC0000" />
        </radialGradient>
        {/* Lightning gradient */}
        <linearGradient id="sparkMouseLightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFF66" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#FFB300" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="36" cy="56" rx="20" ry="4" fill="#B8860B" opacity="0.3" />

      {/* Electric aura */}
      <ellipse cx="36" cy="38" rx="24" ry="18" fill="url(#sparkMouseAuraGradient)" />

      {/* Lightning tail */}
      <polygon points="4,36 12,32 8,28 16,24 12,20 20,38 12,34 16,38 8,40" fill="url(#sparkMouseLightningGradient)" />
      <polygon points="6,35 11,32 9,29 14,26 12,23 17,36 12,34 14,37 9,38" fill="#FFFF88" opacity="0.6" />

      {/* Body */}
      <ellipse cx="36" cy="40" rx="16" ry="12" fill="url(#sparkMouseBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="32" cy="36" rx="8" ry="5" fill="#FFE44D" opacity="0.5" />

      {/* Body fur texture */}
      <path d="M28 36 Q30 40 28 44" stroke="#DAA520" strokeWidth="0.5" opacity="0.4" />
      <path d="M36 34 Q38 40 36 46" stroke="#DAA520" strokeWidth="0.5" opacity="0.4" />
      <path d="M44 36 Q42 40 44 44" stroke="#DAA520" strokeWidth="0.5" opacity="0.4" />

      {/* Head */}
      <circle cx="48" cy="30" r="14" fill="url(#sparkMouseBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="44" cy="24" rx="5" ry="4" fill="#FFE44D" opacity="0.6" />

      {/* Ears outer */}
      <ellipse cx="38" cy="16" rx="8" ry="12" fill="url(#sparkMouseBodyGradient)" />
      <ellipse cx="58" cy="16" rx="8" ry="12" fill="url(#sparkMouseBodyGradient)" />

      {/* Ears inner */}
      <ellipse cx="38" cy="18" rx="4" ry="6" fill="url(#sparkMouseEarGradient)" />
      <ellipse cx="58" cy="18" rx="4" ry="6" fill="url(#sparkMouseEarGradient)" />

      {/* Ear highlights */}
      <ellipse cx="37" cy="16" rx="1.5" ry="3" fill="#3a3a3a" opacity="0.5" />
      <ellipse cx="57" cy="16" rx="1.5" ry="3" fill="#3a3a3a" opacity="0.5" />

      {/* Eyes white */}
      <circle cx="44" cy="28" r="5" fill="white" />
      <circle cx="54" cy="28" r="5" fill="white" />

      {/* Eyes pupils */}
      <circle cx="44" cy="28" r="3" fill="#1a1a1a" />
      <circle cx="54" cy="28" r="3" fill="#1a1a1a" />

      {/* Eye shine */}
      <circle cx="45" cy="27" r="1.2" fill="white" />
      <circle cx="55" cy="27" r="1.2" fill="white" />
      <circle cx="43" cy="29" r="0.5" fill="white" opacity="0.6" />
      <circle cx="53" cy="29" r="0.5" fill="white" opacity="0.6" />

      {/* Cheeks - electric */}
      <circle cx="40" cy="34" r="4" fill="url(#sparkMouseCheekGradient)" />
      <circle cx="58" cy="34" r="4" fill="url(#sparkMouseCheekGradient)" />

      {/* Cheek highlights */}
      <circle cx="39" cy="33" r="1.5" fill="#FF6666" opacity="0.5" />
      <circle cx="57" cy="33" r="1.5" fill="#FF6666" opacity="0.5" />

      {/* Nose */}
      <ellipse cx="49" cy="36" rx="2.5" ry="2" fill="#2a2a2a" />
      <ellipse cx="49" cy="35.5" rx="1.5" ry="1" fill="#1a1a1a" />
      <ellipse cx="48" cy="35" rx="0.5" ry="0.3" fill="#4a4a4a" opacity="0.5" />

      {/* Mouth */}
      <path d="M47 39 Q49 41 51 39" stroke="#2a2a2a" strokeWidth="0.8" fill="none" />

      {/* Whiskers */}
      <path d="M42 36 L34 34" stroke="#DAA520" strokeWidth="0.5" opacity="0.6" />
      <path d="M42 38 L34 40" stroke="#DAA520" strokeWidth="0.5" opacity="0.6" />
      <path d="M56 36 L64 34" stroke="#DAA520" strokeWidth="0.5" opacity="0.6" />
      <path d="M56 38 L64 40" stroke="#DAA520" strokeWidth="0.5" opacity="0.6" />

      {/* Feet */}
      <ellipse cx="28" cy="52" rx="5" ry="3" fill="url(#sparkMouseBodyGradient)" />
      <ellipse cx="44" cy="52" rx="5" ry="3" fill="url(#sparkMouseBodyGradient)" />
      <ellipse cx="28" cy="51" rx="3" ry="2" fill="#FFE44D" opacity="0.5" />
      <ellipse cx="44" cy="51" rx="3" ry="2" fill="#FFE44D" opacity="0.5" />

      {/* Electric sparks */}
      <polygon points="60,20 64,18 62,22 66,20" fill="#FFFFFF" />
      <polygon points="36,22 40,20 38,24 42,22" fill="#FFFFFF" />
      <polygon points="62,40 66,38 64,42 68,40" fill="#FFFF88" opacity="0.8" />

      {/* Additional spark effects */}
      <circle cx="30" cy="24" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="64" cy="30" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="24" cy="42" r="0.8" fill="#FFFF88" opacity="0.6" />
    </svg>
  );
}
