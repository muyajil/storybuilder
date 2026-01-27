/**
 * ThunderBird Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function ThunderBird({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="thunderBirdBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="thunderBirdWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Breast gradient */}
        <radialGradient id="thunderBirdBreastGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFFFF0" />
          <stop offset="70%" stopColor="#F5F5DC" />
          <stop offset="100%" stopColor="#E8E8D0" />
        </radialGradient>
        {/* Beak gradient */}
        <linearGradient id="thunderBirdBeakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB030" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#E09000" />
        </linearGradient>
        {/* Feet gradient */}
        <linearGradient id="thunderBirdFeetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFB030" />
          <stop offset="100%" stopColor="#E09000" />
        </linearGradient>
        {/* Electric glow */}
        <radialGradient id="thunderBirdGlowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF00" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="thunderBirdEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Electric aura */}
      <ellipse cx="32" cy="32" rx="28" ry="24" fill="url(#thunderBirdGlowGradient)" />

      {/* Shadow */}
      <ellipse cx="32" cy="58" rx="16" ry="3" fill="#B8860B" opacity="0.3" />

      {/* Lightning wings - left */}
      <polygon points="8,32 0,24 8,28 4,20 16,32" fill="url(#thunderBirdWingGradient)" />
      <polygon points="10,31 4,26 10,29 6,23 15,31" fill="#FFFF88" opacity="0.5" />

      {/* Lightning wings - right */}
      <polygon points="56,32 64,24 56,28 60,20 48,32" fill="url(#thunderBirdWingGradient)" />
      <polygon points="54,31 60,26 54,29 58,23 49,31" fill="#FFFF88" opacity="0.5" />

      {/* Body */}
      <ellipse cx="32" cy="36" rx="14" ry="12" fill="url(#thunderBirdBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="32" rx="6" ry="5" fill="#FFE44D" opacity="0.5" />

      {/* Breast */}
      <ellipse cx="32" cy="40" rx="10" ry="6" fill="url(#thunderBirdBreastGradient)" />

      {/* Head */}
      <circle cx="32" cy="20" r="12" fill="url(#thunderBirdBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="28" cy="16" rx="5" ry="4" fill="#FFE44D" opacity="0.6" />

      {/* Head crest feathers */}
      <polygon points="28,8 26,2 30,6 32,0 34,6 38,2 36,8" fill="url(#thunderBirdWingGradient)" />
      <polygon points="29,7 27,4 31,6 32,3 33,6 37,4 35,7" fill="#FFFF88" opacity="0.5" />

      {/* Eyes */}
      <circle cx="28" cy="18" r="4" fill="white" />
      <circle cx="36" cy="18" r="4" fill="white" />

      {/* Pupils */}
      <circle cx="28" cy="18" r="2.5" fill="url(#thunderBirdEyeGradient)" />
      <circle cx="36" cy="18" r="2.5" fill="url(#thunderBirdEyeGradient)" />

      {/* Eye shine */}
      <circle cx="29" cy="17" r="1" fill="white" />
      <circle cx="37" cy="17" r="1" fill="white" />
      <circle cx="27" cy="19" r="0.5" fill="white" opacity="0.6" />
      <circle cx="35" cy="19" r="0.5" fill="white" opacity="0.6" />

      {/* Beak */}
      <polygon points="32,24 28,30 36,30" fill="url(#thunderBirdBeakGradient)" />
      <polygon points="32,24 30,28 34,28" fill="#FFB030" opacity="0.5" />

      {/* Feet */}
      <path d="M26 48 L22 56 L26 54 L30 56 L26 48" fill="url(#thunderBirdFeetGradient)" />
      <path d="M38 48 L34 56 L38 54 L42 56 L38 48" fill="url(#thunderBirdFeetGradient)" />

      {/* Feet highlights */}
      <path d="M25 50 L23 54" stroke="#FFB030" strokeWidth="0.5" opacity="0.5" />
      <path d="M37 50 L35 54" stroke="#FFB030" strokeWidth="0.5" opacity="0.5" />

      {/* Lightning bolt decoration */}
      <polygon points="46,10 52,6 48,14 54,10 46,18" fill="#FFF" />
      <polygon points="47,11 50,8 48,13 52,11 47,16" fill="#FFFF88" opacity="0.6" />

      {/* Electric sparks around body */}
      <polygon points="10,40 12,38 14,40 12,42" fill="#FFFF88" opacity="0.6" />
      <polygon points="52,36 54,34 56,36 54,38" fill="#FFFF88" opacity="0.6" />
      <circle cx="18" cy="24" r="1" fill="#FFF" opacity="0.7" />
      <circle cx="46" cy="28" r="1" fill="#FFF" opacity="0.7" />
      <circle cx="24" cy="48" r="0.8" fill="#FFF" opacity="0.5" />
      <circle cx="42" cy="46" r="0.8" fill="#FFF" opacity="0.5" />

      {/* Feather texture on body */}
      <path d="M26 36 Q28 40 26 44" stroke="#DAA520" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M38 36 Q36 40 38 44" stroke="#DAA520" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}
