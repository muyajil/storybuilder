/**
 * FireDrake Sprite Component
 * Enhanced with fiery gradients, dragon scales, and dramatic flame effects
 */

import type { SpriteProps } from '../types';

export function FireDrake({ size = 64, color = '#DC143C' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="fireDrakeBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#FF3B3B" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>
        {/* Belly scales gradient */}
        <linearGradient id="fireDrakeBellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Flame gradient */}
        <linearGradient id="fireDrakeFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF4500" />
          <stop offset="40%" stopColor="#FF8C00" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFFF80" />
        </linearGradient>
        {/* Horn gradient */}
        <linearGradient id="fireDrakeHornGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#CC6600" />
          <stop offset="50%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="fireDrakeEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="50%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="fireDrakeWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#FF6347" />
          <stop offset="100%" stopColor="#CD5C5C" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="fireDrakeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Flame tail with glow */}
      <g filter="url(#fireDrakeGlow)">
        <path d="M8 44 Q4 40 8 36 Q12 32 8 28" stroke="#FF8C00" strokeWidth="7" fill="none" />
      </g>
      <path d="M8 44 Q4 40 8 36 Q12 32 8 28" stroke="url(#fireDrakeFlameGrad)" strokeWidth="5" fill="none" />
      {/* Flame tip */}
      <ellipse cx="6" cy="26" rx="5" ry="7" fill="url(#fireDrakeFlameGrad)" />
      <ellipse cx="6" cy="24" rx="3" ry="5" fill="#FFFF80" opacity="0.8" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="42" rx="18" ry="14" fill="url(#fireDrakeBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="38" rx="10" ry="6" fill="#FF5555" opacity="0.4" />
      {/* Body shadow */}
      <ellipse cx="34" cy="52" rx="14" ry="4" fill="#5A0000" opacity="0.3" />

      {/* Belly scales with gradient */}
      <ellipse cx="32" cy="46" rx="10" ry="8" fill="url(#fireDrakeBellyGrad)" />
      {/* Scale pattern */}
      <path d="M24 42 L32 40 L40 42 L32 44 Z" fill="#FFA500" />
      <path d="M26 46 L32 44 L38 46 L32 48 Z" fill="#FF8C00" opacity="0.7" />
      <path d="M28 50 L32 48 L36 50 L32 52 Z" fill="#FF8C00" opacity="0.5" />

      {/* Head with gradient */}
      <ellipse cx="52" cy="32" rx="12" ry="10" fill="url(#fireDrakeBodyGrad)" />
      {/* Head highlight */}
      <ellipse cx="48" cy="28" rx="6" ry="5" fill="#FF5555" opacity="0.4" />

      {/* Horns with gradient */}
      <polygon points="48,24 44,14 50,22" fill="url(#fireDrakeHornGrad)" />
      <polygon points="56,24 60,14 54,22" fill="url(#fireDrakeHornGrad)" />
      {/* Horn glow */}
      <g filter="url(#fireDrakeGlow)">
        <ellipse cx="44" cy="14" rx="2" ry="3" fill="#FFD700" opacity="0.6" />
        <ellipse cx="60" cy="14" rx="2" ry="3" fill="#FFD700" opacity="0.6" />
      </g>

      {/* Dragon eyes with glow */}
      <ellipse cx="50" cy="30" rx="4" ry="4.5" fill="#FFFF00" />
      <ellipse cx="56" cy="30" rx="4" ry="4.5" fill="#FFFF00" />
      {/* Eye glow effect */}
      <g filter="url(#fireDrakeGlow)">
        <ellipse cx="50" cy="30" rx="4" ry="4.5" fill="#FFFF00" opacity="0.5" />
        <ellipse cx="56" cy="30" rx="4" ry="4.5" fill="#FFFF00" opacity="0.5" />
      </g>
      {/* Slit pupils */}
      <ellipse cx="50" cy="30" rx="1.5" ry="3.5" fill="#000000" />
      <ellipse cx="56" cy="30" rx="1.5" ry="3.5" fill="#000000" />
      {/* Eye inner glow */}
      <ellipse cx="49" cy="29" rx="0.8" ry="1.5" fill="#FFA500" opacity="0.6" />
      <ellipse cx="55" cy="29" rx="0.8" ry="1.5" fill="#FFA500" opacity="0.6" />

      {/* Nose with smoke */}
      <circle cx="60" cy="36" r="2.5" fill="#8B0000" />
      <circle cx="62" cy="36" r="1.5" fill="#5A0000" />
      {/* Smoke puffs */}
      <g opacity="0.4">
        <path d="M62 34 Q66 30 64 26" stroke="#888" strokeWidth="2" fill="none" />
        <ellipse cx="64" cy="26" rx="2" ry="2" fill="#999" />
        <ellipse cx="66" cy="24" rx="1.5" ry="1.5" fill="#AAA" />
      </g>

      {/* Wings with gradient */}
      <polygon points="28,28 18,12 12,28 20,32" fill="url(#fireDrakeWingGrad)" />
      <polygon points="32,28 24,16 20,28" fill="#FF6347" opacity="0.8" />
      {/* Wing membrane lines */}
      <path d="M20,20 L22,28" stroke="#8B0000" strokeWidth="0.5" opacity="0.5" />
      <path d="M16,16 L20,28" stroke="#8B0000" strokeWidth="0.5" opacity="0.5" />
      {/* Wing highlight */}
      <path d="M22,18 L24,24" stroke="#FF8C8C" strokeWidth="1" opacity="0.4" />

      {/* Legs with gradient */}
      <rect x="22" y="52" width="6" height="10" fill="url(#fireDrakeBodyGrad)" rx="2" />
      <rect x="36" y="52" width="6" height="10" fill="url(#fireDrakeBodyGrad)" rx="2" />
      {/* Leg highlights */}
      <rect x="23" y="53" width="2" height="6" fill="#FF5555" opacity="0.4" rx="1" />
      <rect x="37" y="53" width="2" height="6" fill="#FF5555" opacity="0.4" rx="1" />

      {/* Claws */}
      <path d="M22,62 L20,64 L22,63 L24,64 L26,62 L28,64" stroke="#DAA520" strokeWidth="1" fill="none" />
      <path d="M36,62 L34,64 L36,63 L38,64 L40,62 L42,64" stroke="#DAA520" strokeWidth="1" fill="none" />

      {/* Floating embers */}
      <g filter="url(#fireDrakeGlow)">
        <circle cx="14" cy="24" r="1" fill="#FFD700" opacity="0.7" />
        <circle cx="10" cy="20" r="0.8" fill="#FFA500" opacity="0.6" />
        <circle cx="18" cy="18" r="0.6" fill="#FF8C00" opacity="0.5" />
        <circle cx="56" cy="18" r="0.8" fill="#FFD700" opacity="0.6" />
      </g>
    </svg>
  );
}
