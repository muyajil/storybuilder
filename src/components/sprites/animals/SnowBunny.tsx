/**
 * SnowBunny Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function SnowBunny({ size = 64, color = '#F0F8FF' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="snowBunnyBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#D8E8F8" />
        </radialGradient>
        {/* Ice ear gradient */}
        <linearGradient id="snowBunnyEarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#6BB8DC" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="snowBunnyEyeGradient" cx="30%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#6495ED" />
          <stop offset="70%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#2848B0" />
        </radialGradient>
        {/* Frost effect */}
        <radialGradient id="snowBunnyFrostGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E0F0FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#B0D8F8" stopOpacity="0" />
        </radialGradient>
        {/* Cheek glow */}
        <radialGradient id="snowBunnyCheekGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C0E8F8" />
          <stop offset="100%" stopColor="#B0E0E6" stopOpacity="0" />
        </radialGradient>
        {/* Ice crystal gradient */}
        <linearGradient id="snowBunnyCrystalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0F8FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#6BB8DC" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="60" rx="18" ry="3" fill="#A8C8E8" opacity="0.3" />

      {/* Frost aura */}
      <circle cx="32" cy="32" r="28" fill="url(#snowBunnyFrostGradient)" opacity="0.3" />

      {/* Body */}
      <ellipse cx="32" cy="44" rx="16" ry="14" fill="url(#snowBunnyBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="40" rx="8" ry="6" fill="#FFFFFF" opacity="0.5" />

      {/* Body fur texture */}
      <ellipse cx="32" cy="48" rx="10" ry="6" fill="#E8F4FF" opacity="0.4" />

      {/* Head */}
      <circle cx="32" cy="26" r="16" fill="url(#snowBunnyBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="26" cy="20" rx="6" ry="5" fill="#FFFFFF" opacity="0.6" />

      {/* Ears outer */}
      <ellipse cx="20" cy="10" rx="5" ry="12" fill="url(#snowBunnyBodyGradient)" />
      <ellipse cx="44" cy="10" rx="5" ry="12" fill="url(#snowBunnyBodyGradient)" />

      {/* Ears inner - ice blue */}
      <ellipse cx="20" cy="10" rx="3" ry="8" fill="url(#snowBunnyEarGradient)" />
      <ellipse cx="44" cy="10" rx="3" ry="8" fill="url(#snowBunnyEarGradient)" />

      {/* Ear frost sparkle */}
      <circle cx="20" cy="6" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="44" cy="6" r="1" fill="#FFFFFF" opacity="0.8" />

      {/* Eyes - white part */}
      <circle cx="26" cy="24" r="5" fill="white" />
      <circle cx="38" cy="24" r="5" fill="white" />

      {/* Eyes - iris */}
      <circle cx="26" cy="24" r="3.5" fill="url(#snowBunnyEyeGradient)" />
      <circle cx="38" cy="24" r="3.5" fill="url(#snowBunnyEyeGradient)" />

      {/* Eyes - pupil */}
      <circle cx="26" cy="24" r="1.5" fill="#1a2a4a" />
      <circle cx="38" cy="24" r="1.5" fill="#1a2a4a" />

      {/* Eye shine */}
      <circle cx="27" cy="23" r="1.2" fill="white" />
      <circle cx="39" cy="23" r="1.2" fill="white" />
      <circle cx="25" cy="25" r="0.5" fill="white" opacity="0.6" />
      <circle cx="37" cy="25" r="0.5" fill="white" opacity="0.6" />

      {/* Nose */}
      <ellipse cx="32" cy="30" rx="2.5" ry="2" fill="#FFC0CB" />
      <ellipse cx="32" cy="29.5" rx="1.5" ry="1" fill="#FFB6C1" />
      <ellipse cx="31" cy="29" rx="0.5" ry="0.3" fill="#FFD8E0" opacity="0.7" />

      {/* Mouth */}
      <path d="M30 34 L32 37 L34 34" stroke="#87CEEB" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Whiskers */}
      <path d="M22 30 L14 28" stroke="#C8D8E8" strokeWidth="0.5" opacity="0.6" />
      <path d="M22 32 L14 33" stroke="#C8D8E8" strokeWidth="0.5" opacity="0.6" />
      <path d="M42 30 L50 28" stroke="#C8D8E8" strokeWidth="0.5" opacity="0.6" />
      <path d="M42 32 L50 33" stroke="#C8D8E8" strokeWidth="0.5" opacity="0.6" />

      {/* Cheeks - icy glow */}
      <circle cx="20" cy="30" r="4" fill="url(#snowBunnyCheekGradient)" opacity="0.7" />
      <circle cx="44" cy="30" r="4" fill="url(#snowBunnyCheekGradient)" opacity="0.7" />

      {/* Feet */}
      <ellipse cx="24" cy="58" rx="6" ry="3" fill="url(#snowBunnyBodyGradient)" />
      <ellipse cx="40" cy="58" rx="6" ry="3" fill="url(#snowBunnyBodyGradient)" />
      <ellipse cx="24" cy="57" rx="4" ry="2" fill="#FFFFFF" opacity="0.5" />
      <ellipse cx="40" cy="57" rx="4" ry="2" fill="#FFFFFF" opacity="0.5" />

      {/* Ice crystals */}
      <polygon points="10,44 8,40 12,42 10,38 14,44" fill="url(#snowBunnyCrystalGradient)" opacity="0.7" />
      <polygon points="54,44 52,40 56,42 54,38 58,44" fill="url(#snowBunnyCrystalGradient)" opacity="0.7" />

      {/* Sparkles */}
      <circle cx="12" cy="36" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="52" cy="34" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="8" cy="28" r="0.8" fill="#FFFFFF" opacity="0.6" />
      <circle cx="56" cy="26" r="0.8" fill="#FFFFFF" opacity="0.6" />

      {/* Snowflake detail on forehead */}
      <path d="M32 16 L32 12 M30 14 L34 14 M31 13 L33 15 M33 13 L31 15" stroke="#87CEEB" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}
