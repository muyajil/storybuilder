/**
 * PixieCat Sprite Component
 * Enhanced with gradients, sparkle effects, and magical features
 */

import type { SpriteProps } from '../types';

export function PixieCat({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="pixieCatBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#FF4DA6" stopOpacity="1" />
          <stop offset="100%" stopColor="#E6007E" stopOpacity="1" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="pixieCatHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#FF4DA6" stopOpacity="1" />
        </radialGradient>
        {/* Wing gradient */}
        <radialGradient id="pixieCatWingGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFC0CB" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FFB6C1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF69B4" stopOpacity="0.4" />
        </radialGradient>
        {/* Inner wing gradient */}
        <radialGradient id="pixieCatInnerWingGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE4EC" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFC0CB" stopOpacity="0.3" />
        </radialGradient>
        {/* Eye gradient - magical purple */}
        <radialGradient id="pixieCatEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#BA55D3" stopOpacity="1" />
          <stop offset="100%" stopColor="#9400D3" stopOpacity="1" />
        </radialGradient>
        {/* Highlight */}
        <radialGradient id="pixieCatHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Sparkle glow */}
        <radialGradient id="pixieCatSparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        {/* Nose gradient */}
        <linearGradient id="pixieCatNoseGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FF1493" stopOpacity="1" />
          <stop offset="100%" stopColor="#C71585" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Fairy wings - outer */}
      <ellipse cx="16" cy="36" rx="12" ry="18" fill="url(#pixieCatWingGradient)" />
      <ellipse cx="48" cy="36" rx="12" ry="18" fill="url(#pixieCatWingGradient)" />

      {/* Fairy wings - inner */}
      <ellipse cx="12" cy="32" rx="7" ry="12" fill="url(#pixieCatInnerWingGradient)" />
      <ellipse cx="52" cy="32" rx="7" ry="12" fill="url(#pixieCatInnerWingGradient)" />

      {/* Wing vein details */}
      <path d="M10 26 Q14 36 10 46" stroke="#FFB6C1" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M16 24 Q20 36 16 48" stroke="#FFB6C1" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M54 26 Q50 36 54 46" stroke="#FFB6C1" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M48 24 Q44 36 48 48" stroke="#FFB6C1" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Tail with magical swirl */}
      <path d="M44 48 Q58 42 54 34 Q62 38 58 48" fill="url(#pixieCatBodyGradient)" />
      <path d="M56 38 Q60 42 58 46" stroke="#FF4DA6" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Body */}
      <ellipse cx="32" cy="44" rx="12" ry="10" fill="url(#pixieCatBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="40" rx="6" ry="5" fill="url(#pixieCatHighlight)" />

      {/* Head */}
      <circle cx="32" cy="28" r="14" fill="url(#pixieCatHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="26" cy="22" rx="8" ry="6" fill="url(#pixieCatHighlight)" />

      {/* Ears */}
      <polygon points="22,16 18,2 30,12" fill="url(#pixieCatHeadGradient)" />
      <polygon points="42,16 46,2 34,12" fill="url(#pixieCatHeadGradient)" />

      {/* Inner ears */}
      <polygon points="23,15 20,6 28,12" fill="#FF85A1" opacity="0.5" />
      <polygon points="41,15 44,6 36,12" fill="#FF85A1" opacity="0.5" />

      {/* Eyes - large and magical */}
      <ellipse cx="26" cy="26" rx="6" ry="5.5" fill="white" />
      <ellipse cx="38" cy="26" rx="6" ry="5.5" fill="white" />
      <circle cx="26" cy="26" r="4" fill="url(#pixieCatEyeGradient)" />
      <circle cx="38" cy="26" r="4" fill="url(#pixieCatEyeGradient)" />

      {/* Eye highlights */}
      <circle cx="24" cy="24" r="1.5" fill="white" />
      <circle cx="36" cy="24" r="1.5" fill="white" />
      <circle cx="27" cy="27" r="0.8" fill="white" opacity="0.6" />
      <circle cx="39" cy="27" r="0.8" fill="white" opacity="0.6" />

      {/* Star-shaped eye sparkles */}
      <path d="M29 25 L30 26 L29 27 L28 26 Z" fill="white" opacity="0.5" />
      <path d="M41 25 L42 26 L41 27 L40 26 Z" fill="white" opacity="0.5" />

      {/* Nose */}
      <polygon points="32,32 29,36 35,36" fill="url(#pixieCatNoseGradient)" />

      {/* Cheek blush */}
      <ellipse cx="22" cy="32" rx="4" ry="3" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="42" cy="32" rx="4" ry="3" fill="#FFB6C1" opacity="0.5" />

      {/* Whiskers */}
      <line x1="28" y1="33" x2="16" y2="30" stroke="#FFC0CB" strokeWidth="1" />
      <line x1="28" y1="35" x2="16" y2="38" stroke="#FFC0CB" strokeWidth="1" />
      <line x1="36" y1="33" x2="48" y2="30" stroke="#FFC0CB" strokeWidth="1" />
      <line x1="36" y1="35" x2="48" y2="38" stroke="#FFC0CB" strokeWidth="1" />

      {/* Mouth */}
      <path d="M30 36 Q32 38 34 36" stroke="#C71585" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Sparkles/glitter around the pixie cat */}
      <circle cx="8" cy="22" r="2" fill="url(#pixieCatSparkle)" />
      <circle cx="56" cy="24" r="1.5" fill="url(#pixieCatSparkle)" />
      <circle cx="32" cy="8" r="1.5" fill="url(#pixieCatSparkle)" />
      <circle cx="6" cy="42" r="1" fill="url(#pixieCatSparkle)" />
      <circle cx="58" cy="44" r="1" fill="url(#pixieCatSparkle)" />

      {/* Star sparkles */}
      <path d="M10 24 L11 26 L10 28 L9 26 Z" fill="#FFD700" opacity="0.7" />
      <path d="M54 24 L55 26 L54 28 L53 26 Z" fill="#FFD700" opacity="0.7" />
      <path d="M32 10 L33 12 L32 14 L31 12 Z" fill="#FFD700" opacity="0.8" />
    </svg>
  );
}
