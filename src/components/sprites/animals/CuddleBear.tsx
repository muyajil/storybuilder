/**
 * CuddleBear Sprite Component
 * Enhanced with gradients, fur texture, and warm cuddly appearance
 */

import type { SpriteProps } from '../types';

export function CuddleBear({ size = 64, color = '#D2691E' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body fur gradient */}
        <radialGradient id="cuddleBearBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#E0A060" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#8B4513" />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="cuddleBearBellyGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="70%" stopColor="#DEB887" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="cuddleBearHeadGrad" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#E0A060" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#A0522D" />
        </radialGradient>
        {/* Ear inner gradient */}
        <radialGradient id="cuddleBearEarGrad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="cuddleBearNoseGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="cuddleBearEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
      </defs>

      {/* Body with gradient */}
      <ellipse cx="32" cy="44" rx="18" ry="16" fill="url(#cuddleBearBodyGrad)" />
      {/* Body shadow */}
      <ellipse cx="34" cy="52" rx="14" ry="6" fill="#6B4226" opacity="0.2" />

      {/* Belly with gradient */}
      <ellipse cx="32" cy="46" rx="12" ry="10" fill="url(#cuddleBearBellyGrad)" />
      {/* Belly fur texture */}
      <path d="M26,42 Q28,44 26,46" stroke="#F5DEB3" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M32,40 Q34,43 32,46" stroke="#F5DEB3" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M38,42 Q36,44 38,46" stroke="#F5DEB3" strokeWidth="0.8" fill="none" opacity="0.6" />

      {/* Arms with gradient */}
      <ellipse cx="14" cy="42" rx="6" ry="10" fill="url(#cuddleBearBodyGrad)" />
      <ellipse cx="50" cy="42" rx="6" ry="10" fill="url(#cuddleBearBodyGrad)" />
      {/* Arm highlights */}
      <ellipse cx="12" cy="40" rx="2" ry="5" fill="#E0A060" opacity="0.4" />
      <ellipse cx="48" cy="40" rx="2" ry="5" fill="#E0A060" opacity="0.4" />

      {/* Head with gradient */}
      <circle cx="32" cy="22" r="16" fill="url(#cuddleBearHeadGrad)" />
      {/* Head highlight */}
      <ellipse cx="28" cy="16" rx="6" ry="4" fill="#E0A060" opacity="0.4" />

      {/* Ears */}
      <circle cx="18" cy="12" r="6" fill="url(#cuddleBearBodyGrad)" />
      <circle cx="46" cy="12" r="6" fill="url(#cuddleBearBodyGrad)" />
      {/* Ear inner */}
      <circle cx="18" cy="12" r="3.5" fill="url(#cuddleBearEarGrad)" />
      <circle cx="46" cy="12" r="3.5" fill="url(#cuddleBearEarGrad)" />

      {/* Snout with gradient */}
      <ellipse cx="32" cy="28" rx="6" ry="5" fill="url(#cuddleBearBellyGrad)" />
      {/* Snout highlight */}
      <ellipse cx="31" cy="26" rx="3" ry="2" fill="#FAEBD7" opacity="0.5" />

      {/* Eyes with depth */}
      <ellipse cx="26" cy="20" rx="4" ry="4.5" fill="white" />
      <ellipse cx="38" cy="20" rx="4" ry="4.5" fill="white" />
      {/* Eye shadow */}
      <ellipse cx="26" cy="21" rx="3.5" ry="3.5" fill="#f0f0f0" />
      <ellipse cx="38" cy="21" rx="3.5" ry="3.5" fill="#f0f0f0" />
      {/* Pupils with gradient */}
      <circle cx="26" cy="20" r="2.5" fill="url(#cuddleBearEyeGrad)" />
      <circle cx="38" cy="20" r="2.5" fill="url(#cuddleBearEyeGrad)" />
      {/* Eye sparkles */}
      <circle cx="25" cy="19" r="1" fill="white" />
      <circle cx="37" cy="19" r="1" fill="white" />
      <circle cx="27" cy="21" r="0.4" fill="white" />
      <circle cx="39" cy="21" r="0.4" fill="white" />

      {/* Nose with gradient */}
      <ellipse cx="32" cy="26" rx="3" ry="2.2" fill="url(#cuddleBearNoseGrad)" />
      {/* Nose highlight */}
      <ellipse cx="31" cy="25.5" rx="1" ry="0.6" fill="#666" opacity="0.5" />

      {/* Mouth with expression */}
      <path d="M29 30 Q32 34 35 30" stroke="#1a1a1a" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Feet with gradient */}
      <ellipse cx="24" cy="58" rx="6" ry="4" fill="url(#cuddleBearBodyGrad)" />
      <ellipse cx="40" cy="58" rx="6" ry="4" fill="url(#cuddleBearBodyGrad)" />
      {/* Feet pads */}
      <ellipse cx="24" cy="58" rx="4" ry="2.5" fill="url(#cuddleBearBellyGrad)" />
      <ellipse cx="40" cy="58" rx="4" ry="2.5" fill="url(#cuddleBearBellyGrad)" />
      {/* Toe beans */}
      <circle cx="21" cy="57" r="1" fill="#DEB887" />
      <circle cx="24" cy="56" r="1" fill="#DEB887" />
      <circle cx="27" cy="57" r="1" fill="#DEB887" />
      <circle cx="37" cy="57" r="1" fill="#DEB887" />
      <circle cx="40" cy="56" r="1" fill="#DEB887" />
      <circle cx="43" cy="57" r="1" fill="#DEB887" />

      {/* Fur texture on body */}
      <path d="M20,36 Q22,38 20,40" stroke="#8B4513" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M44,36 Q42,38 44,40" stroke="#8B4513" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}
