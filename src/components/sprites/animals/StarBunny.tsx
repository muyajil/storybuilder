/**
 * StarBunny Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function StarBunny({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Star aura gradient */}
        <radialGradient id="starBunnyAuraGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="70%" stopColor="#FFE44D" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        {/* Body gradient */}
        <radialGradient id="starBunnyBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFF0" />
          <stop offset="50%" stopColor="#FFFACD" />
          <stop offset="100%" stopColor="#F5E8B8" />
        </radialGradient>
        {/* Star ear gradient */}
        <linearGradient id="starBunnyEarGradient" x1="0%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#FFC000" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="starBunnyEyeGradient" cx="30%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Cheek gradient */}
        <radialGradient id="starBunnyCheekGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFC8D0" />
          <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0" />
        </radialGradient>
        {/* Small star gradient */}
        <linearGradient id="starBunnyStarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFACD" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#FFB300" />
        </linearGradient>
      </defs>

      {/* Star aura */}
      <circle cx="32" cy="32" r="30" fill="url(#starBunnyAuraGradient)" />

      {/* Sparkle rays */}
      <path d="M32 2 L32 8" stroke={color} strokeWidth="1" opacity="0.4" />
      <path d="M32 56 L32 62" stroke={color} strokeWidth="1" opacity="0.4" />
      <path d="M2 32 L8 32" stroke={color} strokeWidth="1" opacity="0.4" />
      <path d="M56 32 L62 32" stroke={color} strokeWidth="1" opacity="0.4" />

      {/* Shadow */}
      <ellipse cx="32" cy="60" rx="16" ry="3" fill="#DAA520" opacity="0.2" />

      {/* Body */}
      <ellipse cx="32" cy="44" rx="14" ry="12" fill="url(#starBunnyBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="40" rx="6" ry="5" fill="#FFFFF0" opacity="0.6" />

      {/* Head */}
      <circle cx="32" cy="26" r="16" fill="url(#starBunnyBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="26" cy="20" rx="6" ry="5" fill="#FFFFF0" opacity="0.6" />

      {/* Star ears */}
      <polygon points="18,8 20,0 22,8 16,4 24,4" fill="url(#starBunnyEarGradient)" />
      <polygon points="42,8 44,0 46,8 40,4 48,4" fill="url(#starBunnyEarGradient)" />

      {/* Star ear inner glow */}
      <polygon points="18,7 19,3 20,7 17,5 21,5" fill="#FFFACD" opacity="0.6" />
      <polygon points="42,7 43,3 44,7 41,5 45,5" fill="#FFFACD" opacity="0.6" />

      {/* Eyes - white part */}
      <circle cx="26" cy="24" r="5" fill="white" />
      <circle cx="38" cy="24" r="5" fill="white" />

      {/* Eyes - golden iris */}
      <circle cx="26" cy="24" r="3.5" fill="url(#starBunnyEyeGradient)" />
      <circle cx="38" cy="24" r="3.5" fill="url(#starBunnyEyeGradient)" />

      {/* Eyes - star-shaped pupils */}
      <polygon points="26,24 25.5,22.5 26.5,22.5" fill="#2a2a2a" />
      <polygon points="26,24 24.5,23.5 25,24.5" fill="#2a2a2a" />
      <polygon points="26,24 27.5,23.5 27,24.5" fill="#2a2a2a" />
      <polygon points="38,24 37.5,22.5 38.5,22.5" fill="#2a2a2a" />
      <polygon points="38,24 36.5,23.5 37,24.5" fill="#2a2a2a" />
      <polygon points="38,24 39.5,23.5 39,24.5" fill="#2a2a2a" />

      {/* Eye shine */}
      <circle cx="27" cy="23" r="1" fill="white" />
      <circle cx="39" cy="23" r="1" fill="white" />

      {/* Nose */}
      <ellipse cx="32" cy="30" rx="2.5" ry="2" fill="#FFB6C1" />
      <ellipse cx="32" cy="29.5" rx="1.5" ry="1" fill="#FFC8D0" />
      <ellipse cx="31" cy="29" rx="0.5" ry="0.3" fill="#FFD8E0" opacity="0.7" />

      {/* Mouth */}
      <path d="M30 34 L32 37 L34 34" stroke="#FFB6C1" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Whiskers */}
      <path d="M22 30 L14 28" stroke="#E8D8A0" strokeWidth="0.5" opacity="0.6" />
      <path d="M22 32 L14 34" stroke="#E8D8A0" strokeWidth="0.5" opacity="0.6" />
      <path d="M42 30 L50 28" stroke="#E8D8A0" strokeWidth="0.5" opacity="0.6" />
      <path d="M42 32 L50 34" stroke="#E8D8A0" strokeWidth="0.5" opacity="0.6" />

      {/* Star cheeks */}
      <polygon points="18,28 16,26 20,26" fill="url(#starBunnyCheekGradient)" opacity="0.7" />
      <polygon points="46,28 44,26 48,26" fill="url(#starBunnyCheekGradient)" opacity="0.7" />

      {/* Feet */}
      <ellipse cx="24" cy="56" rx="6" ry="3" fill="url(#starBunnyBodyGradient)" />
      <ellipse cx="40" cy="56" rx="6" ry="3" fill="url(#starBunnyBodyGradient)" />
      <ellipse cx="24" cy="55" rx="4" ry="2" fill="#FFFFF0" opacity="0.5" />
      <ellipse cx="40" cy="55" rx="4" ry="2" fill="#FFFFF0" opacity="0.5" />

      {/* Floating stars */}
      <polygon points="8,44 9,42 10,44 8,43 10,43" fill="url(#starBunnyStarGradient)" />
      <polygon points="56,38 57,36 58,38 56,37 58,37" fill="url(#starBunnyStarGradient)" />
      <polygon points="52,52 53,50 54,52 52,51 54,51" fill="url(#starBunnyStarGradient)" />
      <polygon points="10,20 11,18 12,20 10,19 12,19" fill="url(#starBunnyStarGradient)" opacity="0.7" />

      {/* Sparkle effects */}
      <circle cx="6" cy="36" r="1" fill="#FFFACD" opacity="0.6" />
      <circle cx="58" cy="28" r="1" fill="#FFFACD" opacity="0.6" />
      <circle cx="50" cy="46" r="0.8" fill="#FFFACD" opacity="0.5" />

      {/* Forehead star marking */}
      <polygon points="32,16 32.5,14 33,16 31,15 33,15" fill={color} opacity="0.5" />
    </svg>
  );
}
