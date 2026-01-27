/**
 * SpookyPup Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function SpookyPup({ size = 64, color = '#9370DB' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Ghost body gradient */}
        <linearGradient id="spookyPupBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B8A0E8" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#6B4FA0" />
        </linearGradient>
        {/* Ghost glow */}
        <radialGradient id="spookyPupGlowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C8B0F0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#9370DB" stopOpacity="0" />
        </radialGradient>
        {/* Eye glow */}
        <radialGradient id="spookyPupEyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F8F8FF" />
          <stop offset="100%" stopColor="#E8E8F8" />
        </radialGradient>
        {/* Ear gradient */}
        <linearGradient id="spookyPupEarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A888D8" />
          <stop offset="100%" stopColor="#7858A8" />
        </linearGradient>
        {/* Sparkle gradient */}
        <radialGradient id="spookyPupSparkleGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E0F8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ethereal glow */}
      <ellipse cx="32" cy="38" rx="22" ry="20" fill="url(#spookyPupGlowGradient)" />

      {/* Ghost body with wavy bottom */}
      <path
        d="M16 56 Q16 32 32 24 Q48 32 48 56 Q44 52 40 56 Q36 52 32 56 Q28 52 24 56 Q20 52 16 56"
        fill="url(#spookyPupBodyGradient)"
        opacity="0.85"
      />

      {/* Body highlight */}
      <path
        d="M20 40 Q24 30 32 28 Q36 30 38 36"
        fill="#C8B0F0"
        opacity="0.4"
      />

      {/* Body inner glow */}
      <path
        d="M24 50 Q28 44 32 42 Q36 44 40 50"
        fill="#B8A0E8"
        opacity="0.3"
      />

      {/* Head */}
      <circle cx="32" cy="28" r="16" fill="url(#spookyPupBodyGradient)" opacity="0.85" />

      {/* Head highlight */}
      <ellipse cx="26" cy="22" rx="6" ry="5" fill="#C8B0F0" opacity="0.5" />

      {/* Ghost ears */}
      <ellipse cx="20" cy="16" rx="6" ry="10" fill="url(#spookyPupEarGradient)" opacity="0.75" />
      <ellipse cx="44" cy="16" rx="6" ry="10" fill="url(#spookyPupEarGradient)" opacity="0.75" />

      {/* Ear inner */}
      <ellipse cx="20" cy="16" rx="3" ry="6" fill="#B8A0E8" opacity="0.4" />
      <ellipse cx="44" cy="16" rx="3" ry="6" fill="#B8A0E8" opacity="0.4" />

      {/* Eyes - large and cute */}
      <circle cx="26" cy="26" r="6" fill="url(#spookyPupEyeGlow)" />
      <circle cx="38" cy="26" r="6" fill="url(#spookyPupEyeGlow)" />

      {/* Eye pupils - large puppy eyes */}
      <circle cx="26" cy="28" r="4" fill="#2a2a2a" />
      <circle cx="38" cy="28" r="4" fill="#2a2a2a" />

      {/* Eye inner color */}
      <circle cx="26" cy="28" r="3" fill="#4B0082" />
      <circle cx="38" cy="28" r="3" fill="#4B0082" />

      {/* Eye shine - multiple for sparkly effect */}
      <circle cx="27" cy="27" r="1.5" fill="white" />
      <circle cx="39" cy="27" r="1.5" fill="white" />
      <circle cx="25" cy="29" r="0.8" fill="white" opacity="0.6" />
      <circle cx="37" cy="29" r="0.8" fill="white" opacity="0.6" />

      {/* Nose */}
      <ellipse cx="32" cy="34" rx="2.5" ry="2" fill="#4B0082" />
      <ellipse cx="32" cy="33.5" rx="1.5" ry="1" fill="#6B30A2" />
      <ellipse cx="31" cy="33" rx="0.5" ry="0.3" fill="#8B50C2" opacity="0.6" />

      {/* Mouth - cute smile */}
      <path d="M28 38 Q32 42 36 38" stroke="#4B0082" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Tongue peek */}
      <ellipse cx="32" cy="40" rx="2" ry="1.5" fill="#DDA0DD" />

      {/* Ghost sparkles */}
      <circle cx="12" cy="40" r="2.5" fill="url(#spookyPupSparkleGradient)" opacity="0.6" />
      <circle cx="52" cy="36" r="2" fill="url(#spookyPupSparkleGradient)" opacity="0.5" />
      <circle cx="48" cy="48" r="1.5" fill="url(#spookyPupSparkleGradient)" opacity="0.4" />
      <circle cx="16" cy="50" r="1" fill="url(#spookyPupSparkleGradient)" opacity="0.5" />

      {/* Floating sparkle stars */}
      <path d="M10 32 L11 30 L12 32 L10 31 L12 31" fill="#FFF" opacity="0.6" />
      <path d="M54 28 L55 26 L56 28 L54 27 L56 27" fill="#FFF" opacity="0.5" />
      <path d="M8 48 L9 46 L10 48 L8 47 L10 47" fill="#FFF" opacity="0.4" />

      {/* Wispy trails */}
      <path d="M18 56 Q16 60 14 58" stroke="#B8A0E8" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M46 56 Q48 60 50 58" stroke="#B8A0E8" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}
