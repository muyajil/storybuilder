/**
 * Goat Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Goat({ size = 64, color = '#F5F5F5' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="goatBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#D3D3D3" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="goatHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#C0C0C0" />
        </radialGradient>
        {/* Horn gradient */}
        <linearGradient id="goatHornGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#5D3A1A" />
          <stop offset="50%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="goatEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Leg gradient */}
        <linearGradient id="goatLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#A9A9A9" />
        </linearGradient>
        {/* Beard gradient */}
        <linearGradient id="goatBeardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#C0C0C0" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="60" rx="18" ry="3" fill="rgba(0,0,0,0.15)" />

      {/* Body with gradient */}
      <ellipse cx="28" cy="40" rx="18" ry="13" fill="url(#goatBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="24" cy="36" rx="10" ry="6" fill="rgba(255,255,255,0.3)" />
      {/* Body texture - fur lines */}
      <path d="M16 38 Q18 40 16 42" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />
      <path d="M20 36 Q22 38 20 40" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />
      <path d="M36 38 Q38 40 36 42" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />

      {/* Legs with gradient */}
      <rect x="15" y="48" width="5" height="12" fill="url(#goatLegGradient)" rx="1" />
      <rect x="35" y="48" width="5" height="12" fill="url(#goatLegGradient)" rx="1" />
      {/* Hooves */}
      <rect x="14" y="58" width="7" height="3" fill="#2F2F2F" rx="1" />
      <rect x="34" y="58" width="7" height="3" fill="#2F2F2F" rx="1" />

      {/* Head with gradient */}
      <ellipse cx="48" cy="30" rx="13" ry="11" fill="url(#goatHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="44" cy="26" rx="6" ry="4" fill="rgba(255,255,255,0.3)" />

      {/* Horns with gradient and ridges */}
      <path d="M43 22 Q38 14 43 8" stroke="url(#goatHornGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M53 22 Q58 14 53 8" stroke="url(#goatHornGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Horn ridges */}
      <path d="M41 18 Q40 17 41 16" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" fill="none" />
      <path d="M40 14 Q39 13 40 12" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" fill="none" />
      <path d="M55 18 Q56 17 55 16" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" fill="none" />
      <path d="M56 14 Q57 13 56 12" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" fill="none" />

      {/* Ears with inner detail */}
      <ellipse cx="39" cy="28" rx="5" ry="2.5" fill={color} transform="rotate(-30 39 28)" />
      <ellipse cx="57" cy="28" rx="5" ry="2.5" fill={color} transform="rotate(30 57 28)" />
      <ellipse cx="39" cy="28" rx="3" ry="1.5" fill="#FFB6C1" transform="rotate(-30 39 28)" />
      <ellipse cx="57" cy="28" rx="3" ry="1.5" fill="#FFB6C1" transform="rotate(30 57 28)" />

      {/* Beard with gradient */}
      <path d="M48 38 Q48 46 44 52" stroke="url(#goatBeardGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M50 40 Q52 46 50 50" stroke="url(#goatBeardGradient)" strokeWidth="2" fill="none" opacity="0.7" />

      {/* Eyes with rectangular pupils (goat characteristic) */}
      <ellipse cx="45" cy="28" rx="3" ry="4" fill="url(#goatEyeGradient)" />
      <ellipse cx="51" cy="28" rx="3" ry="4" fill="url(#goatEyeGradient)" />
      <rect x="44" y="26" width="2.5" height="4" fill="black" rx="0.5" />
      <rect x="50" y="26" width="2.5" height="4" fill="black" rx="0.5" />
      {/* Eye highlights */}
      <circle cx="44" cy="26" r="0.8" fill="white" opacity="0.8" />
      <circle cx="50" cy="26" r="0.8" fill="white" opacity="0.8" />

      {/* Nose with detail */}
      <ellipse cx="48" cy="35" rx="4" ry="2.5" fill="#FFB6C1" />
      <ellipse cx="48" cy="35" rx="2" ry="1.5" fill="#FF9999" />
      <circle cx="46" cy="35" r="1" fill="#4A3728" />
      <circle cx="50" cy="35" r="1" fill="#4A3728" />

      {/* Mouth */}
      <path d="M46 37 Q48 38 50 37" stroke="#4A3728" strokeWidth="0.5" fill="none" />
    </svg>
  );
}
