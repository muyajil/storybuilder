/**
 * Angel Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Angel({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Halo gradient */}
        <linearGradient id="angelHaloGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEB3B" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA000" />
        </linearGradient>
        {/* Hair gradient */}
        <radialGradient id="angelHairGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="100%" stopColor="#FFB300" />
        </radialGradient>
        {/* Skin gradient */}
        <radialGradient id="angelSkinGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* Robe gradient */}
        <linearGradient id="angelRobeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
        {/* Wing gradient */}
        <linearGradient id="angelWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="angelEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B3E5FC" />
          <stop offset="100%" stopColor="#4FC3F7" />
        </radialGradient>
      </defs>

      {/* Halo glow */}
      <ellipse cx="32" cy="4" rx="10" ry="4" fill="#FFD700" opacity="0.3" />
      {/* Halo */}
      <ellipse cx="32" cy="4" rx="8" ry="3" fill="none" stroke="url(#angelHaloGradient)" strokeWidth="2" />
      <ellipse cx="32" cy="4" rx="6" ry="2" fill="url(#angelHaloGradient)" opacity="0.5" />

      {/* Hair */}
      <ellipse cx="32" cy="20" rx="14" ry="18" fill="url(#angelHairGradient)" />
      {/* Hair highlight */}
      <ellipse cx="28" cy="14" rx="6" ry="4" fill="#FFECB3" opacity="0.6" />

      {/* Face */}
      <circle cx="32" cy="18" r="10" fill="url(#angelSkinGradient)" />
      {/* Cheek blush */}
      <circle cx="25" cy="20" r="2.5" fill="#FFCDD2" opacity="0.5" />
      <circle cx="39" cy="20" r="2.5" fill="#FFCDD2" opacity="0.5" />

      {/* Eyes */}
      <ellipse cx="28" cy="16" rx="2.5" ry="2" fill="url(#angelEyeGradient)" />
      <ellipse cx="36" cy="16" rx="2.5" ry="2" fill="url(#angelEyeGradient)" />
      {/* Pupils */}
      <circle cx="28" cy="16" r="1" fill="#333" />
      <circle cx="36" cy="16" r="1" fill="#333" />
      {/* Eye sparkle */}
      <circle cx="27" cy="15" r="0.5" fill="white" />
      <circle cx="35" cy="15" r="0.5" fill="white" />

      {/* Gentle smile */}
      <path d="M28 22 Q32 25 36 22" stroke="#E91E63" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Wings - Left */}
      <path d="M18 26 L6 38 L10 42 L8 48 L18 50" fill="url(#angelWingGradient)" />
      {/* Wing feather details */}
      <path d="M10 36 L14 40" stroke="#E0E0E0" strokeWidth="1" />
      <path d="M9 42 L14 44" stroke="#E0E0E0" strokeWidth="1" />

      {/* Wings - Right */}
      <path d="M46 26 L58 38 L54 42 L56 48 L46 50" fill="url(#angelWingGradient)" />
      {/* Wing feather details */}
      <path d="M54 36 L50 40" stroke="#E0E0E0" strokeWidth="1" />
      <path d="M55 42 L50 44" stroke="#E0E0E0" strokeWidth="1" />

      {/* Robe body */}
      <path d="M20 28 L12 44 L20 56 L44 56 L52 44 L44 28" fill="url(#angelRobeGradient)" />
      {/* Robe fold shadows */}
      <path d="M24 32 L20 48 L24 56" stroke="#E0E0E0" strokeWidth="1" fill="none" />
      <path d="M40 32 L44 48 L40 56" stroke="#E0E0E0" strokeWidth="1" fill="none" />
      {/* Robe highlight */}
      <path d="M28 30 L26 50" stroke="white" strokeWidth="2" opacity="0.3" />

      {/* Legs */}
      <rect x="26" y="56" width="4" height="6" fill="url(#angelSkinGradient)" />
      <rect x="34" y="56" width="4" height="6" fill="url(#angelSkinGradient)" />

      {/* Shoes/feet */}
      <ellipse cx="28" cy="62" rx="4" ry="2" fill="url(#angelRobeGradient)" />
      <ellipse cx="36" cy="62" rx="4" ry="2" fill="url(#angelRobeGradient)" />
    </svg>
  );
}
