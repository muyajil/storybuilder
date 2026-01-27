/**
 * Sloth Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Sloth({ size = 64, color = '#A0522D' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="slothBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8733D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#7A3D1A" />
        </linearGradient>
        {/* Face gradient */}
        <radialGradient id="slothFaceGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E8D4B8" />
          <stop offset="70%" stopColor="#D2B48C" />
          <stop offset="100%" stopColor="#C4A675" />
        </radialGradient>
        {/* Fur texture */}
        <linearGradient id="slothFurTexture" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B5693A" />
          <stop offset="100%" stopColor="#8B4513" />
        </linearGradient>
        {/* Arm gradient */}
        <linearGradient id="slothArmGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#8B5A2B" />
          <stop offset="100%" stopColor="#6B4423" />
        </linearGradient>
        {/* Eye shadow */}
        <radialGradient id="slothEyeShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="58" rx="20" ry="4" fill="#000" opacity="0.2" />

      {/* Body */}
      <ellipse cx="32" cy="36" rx="16" ry="20" fill="url(#slothBodyGradient)" />

      {/* Body fur texture lines */}
      <path d="M22 28 Q24 36 22 44" stroke="#7A3D1A" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M26 26 Q28 38 26 48" stroke="#7A3D1A" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M38 26 Q36 38 38 48" stroke="#7A3D1A" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M42 28 Q40 36 42 44" stroke="#7A3D1A" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* Belly patch */}
      <ellipse cx="32" cy="42" rx="10" ry="10" fill="url(#slothFaceGradient)" />

      {/* Head */}
      <circle cx="32" cy="20" r="14" fill="url(#slothBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="28" cy="14" rx="5" ry="4" fill="#B8733D" opacity="0.5" />

      {/* Face mask */}
      <ellipse cx="32" cy="24" rx="10" ry="8" fill="url(#slothFaceGradient)" />

      {/* Eye patches - dark circles around eyes (characteristic sloth feature) */}
      <ellipse cx="26" cy="20" rx="5" ry="3" fill="url(#slothEyeShadow)" />
      <ellipse cx="38" cy="20" rx="5" ry="3" fill="url(#slothEyeShadow)" />

      {/* Eyes - sleepy half-closed look */}
      <ellipse cx="26" cy="20" rx="3" ry="1.5" fill="#2a2a2a" />
      <ellipse cx="38" cy="20" rx="3" ry="1.5" fill="#2a2a2a" />

      {/* Eye shine */}
      <ellipse cx="25" cy="19.5" rx="1" ry="0.5" fill="#555" opacity="0.6" />
      <ellipse cx="37" cy="19.5" rx="1" ry="0.5" fill="#555" opacity="0.6" />

      {/* Nose */}
      <ellipse cx="32" cy="26" rx="2.5" ry="2" fill="#5D3A1A" />
      <ellipse cx="32" cy="25.5" rx="1.5" ry="1" fill="#3D2A0A" />
      <ellipse cx="31" cy="25" rx="0.5" ry="0.3" fill="#7D4A2A" opacity="0.5" />

      {/* Gentle smile */}
      <path d="M28 28 Q32 32 36 28" stroke="#5D3A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Cheek highlights */}
      <circle cx="22" cy="24" r="2" fill="#E8C4A8" opacity="0.4" />
      <circle cx="42" cy="24" r="2" fill="#E8C4A8" opacity="0.4" />

      {/* Left arm with claws */}
      <path d="M14 24 Q8 20 10 32 Q12 44 16 40" stroke="url(#slothArmGradient)" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M14 24 Q8 20 10 32 Q12 44 16 40" stroke="#B5693A" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.5" />
      {/* Left claws */}
      <path d="M8 18 L6 14" stroke="#D4C4B0" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 17 L9 12" stroke="#D4C4B0" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 18 L12 13" stroke="#D4C4B0" strokeWidth="2" strokeLinecap="round" />

      {/* Right arm with claws */}
      <path d="M50 24 Q56 20 54 32 Q52 44 48 40" stroke="url(#slothArmGradient)" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M50 24 Q56 20 54 32 Q52 44 48 40" stroke="#B5693A" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.5" />
      {/* Right claws */}
      <path d="M56 18 L58 14" stroke="#D4C4B0" strokeWidth="2" strokeLinecap="round" />
      <path d="M54 17 L55 12" stroke="#D4C4B0" strokeWidth="2" strokeLinecap="round" />
      <path d="M52 18 L52 13" stroke="#D4C4B0" strokeWidth="2" strokeLinecap="round" />

      {/* Ears */}
      <circle cx="20" cy="12" r="4" fill="url(#slothBodyGradient)" />
      <circle cx="44" cy="12" r="4" fill="url(#slothBodyGradient)" />
      <circle cx="20" cy="12" r="2" fill="#C4A675" />
      <circle cx="44" cy="12" r="2" fill="#C4A675" />
    </svg>
  );
}
