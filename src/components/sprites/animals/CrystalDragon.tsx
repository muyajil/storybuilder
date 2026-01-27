/**
 * CrystalDragon Sprite Component
 * Enhanced with gradients, crystalline effects, and detailed shading
 */

import type { SpriteProps } from '../types';

export function CrystalDragon({ size = 64, color = '#00CED1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="crystalDragonBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#40E0D0" />
          <stop offset="100%" stopColor="#008B8B" />
        </linearGradient>
        {/* Crystal gradient */}
        <linearGradient id="crystalDragonCrystalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#E0FFFF" />
          <stop offset="100%" stopColor="#B0E0E6" />
        </linearGradient>
        {/* Wing gradient */}
        <linearGradient id="crystalDragonWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="50%" stopColor="#7FFFD4" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E0FFFF" stopOpacity="0.3" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="crystalDragonEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#6495ED" />
          <stop offset="50%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#00008B" />
        </radialGradient>
        {/* Sparkle filter */}
        <filter id="crystalDragonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Crystal wings with faceted look */}
      <polygon points="8,36 4,20 16,32 12,16 24,32" fill="url(#crystalDragonWingGrad)" />
      <polygon points="56,36 60,20 48,32 52,16 40,32" fill="url(#crystalDragonWingGrad)" />
      {/* Wing detail lines */}
      <path d="M8,28 L16,32" stroke="#E0FFFF" strokeWidth="0.5" opacity="0.8" />
      <path d="M56,28 L48,32" stroke="#E0FFFF" strokeWidth="0.5" opacity="0.8" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="44" rx="14" ry="12" fill="url(#crystalDragonBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="30" cy="40" rx="8" ry="5" fill="#7FFFD4" opacity="0.3" />
      {/* Body shadow */}
      <ellipse cx="34" cy="50" rx="10" ry="4" fill="#006666" opacity="0.3" />

      {/* Crystal pattern on body */}
      <polygon points="32,36 26,44 32,52 38,44" fill="url(#crystalDragonCrystalGrad)" />
      <path d="M32,36 L32,52" stroke="#B0E0E6" strokeWidth="0.5" opacity="0.6" />
      <path d="M26,44 L38,44" stroke="#B0E0E6" strokeWidth="0.5" opacity="0.6" />

      {/* Head with gradient */}
      <ellipse cx="32" cy="26" rx="12" ry="10" fill="url(#crystalDragonBodyGrad)" />
      {/* Head highlight */}
      <ellipse cx="30" cy="22" rx="6" ry="4" fill="#7FFFD4" opacity="0.4" />

      {/* Crystal horns with gradient */}
      <polygon points="22,18 18,6 26,14" fill="url(#crystalDragonCrystalGrad)" />
      <polygon points="42,18 46,6 38,14" fill="url(#crystalDragonCrystalGrad)" />
      {/* Horn inner detail */}
      <path d="M20,12 L24,16" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.8" />
      <path d="M44,12 L40,16" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.8" />

      {/* Eyes with depth */}
      <ellipse cx="28" cy="24" rx="4" ry="4.5" fill="white" />
      <ellipse cx="36" cy="24" rx="4" ry="4.5" fill="white" />
      <circle cx="28" cy="24" r="2.5" fill="url(#crystalDragonEyeGrad)" />
      <circle cx="36" cy="24" r="2.5" fill="url(#crystalDragonEyeGrad)" />
      {/* Eye sparkles */}
      <circle cx="27" cy="23" r="0.8" fill="white" />
      <circle cx="35" cy="23" r="0.8" fill="white" />
      <circle cx="29" cy="25" r="0.4" fill="white" />
      <circle cx="37" cy="25" r="0.4" fill="white" />

      {/* Nose with detail */}
      <ellipse cx="32" cy="30" rx="2" ry="1.5" fill="#008B8B" />
      <ellipse cx="31.5" cy="29.5" rx="0.8" ry="0.5" fill="#40E0D0" opacity="0.5" />

      {/* Tail with gradient */}
      <polygon points="46,50 56,44 52,52 60,50 50,56" fill="url(#crystalDragonBodyGrad)" />
      {/* Crystal tip on tail */}
      <polygon points="58,48 64,44 60,52" fill="url(#crystalDragonCrystalGrad)" />
      <path d="M60,46 L60,50" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.6" />

      {/* Feet with gradient */}
      <rect x="24" y="52" width="5" height="10" fill="url(#crystalDragonBodyGrad)" rx="2" />
      <rect x="35" y="52" width="5" height="10" fill="url(#crystalDragonBodyGrad)" rx="2" />
      {/* Feet highlights */}
      <rect x="25" y="53" width="2" height="6" fill="#7FFFD4" opacity="0.3" rx="1" />
      <rect x="36" y="53" width="2" height="6" fill="#7FFFD4" opacity="0.3" rx="1" />

      {/* Enhanced sparkles with glow */}
      <g filter="url(#crystalDragonGlow)">
        <circle cx="12" cy="28" r="1.5" fill="#FFF" />
        <circle cx="52" cy="28" r="1" fill="#FFF" />
        <circle cx="20" cy="40" r="0.8" fill="#FFF" />
        <circle cx="44" cy="40" r="0.8" fill="#FFF" />
        <circle cx="32" cy="16" r="1" fill="#E0FFFF" />
      </g>

      {/* Additional crystal texture details */}
      <path d="M24,42 L26,46" stroke="#E0FFFF" strokeWidth="0.5" opacity="0.4" />
      <path d="M40,42 L38,46" stroke="#E0FFFF" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}
