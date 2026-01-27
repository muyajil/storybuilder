/**
 * Swan Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Swan({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="swanBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#E8E8E8" />
        </radialGradient>
        {/* Neck gradient */}
        <linearGradient id="swanNeckGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#F8F8F8" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="swanBeakGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF7050" />
          <stop offset="50%" stopColor="#FF6347" />
          <stop offset="100%" stopColor="#E54030" />
        </linearGradient>
        {/* Wing feather gradient */}
        <linearGradient id="swanWingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D8D8D8" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="swanEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Water reflection */}
        <linearGradient id="swanWaterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4682B4" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Water ripples */}
      <ellipse cx="38" cy="56" rx="20" ry="4" fill="url(#swanWaterGradient)" />
      <ellipse cx="38" cy="58" rx="24" ry="3" fill="#87CEEB" opacity="0.15" />

      {/* Body */}
      <ellipse cx="38" cy="44" rx="16" ry="12" fill="url(#swanBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="34" cy="40" rx="8" ry="6" fill="#FFFFFF" opacity="0.6" />

      {/* Raised wing feathers */}
      <path d="M52 40 Q58 42 54 50" fill="url(#swanWingGradient)" />
      <path d="M50 42 Q56 44 53 50" fill="#FFFFFF" opacity="0.5" />

      {/* Wing feather details */}
      <path d="M48 44 Q52 46 50 50" stroke="#D8D8D8" strokeWidth="1" fill="none" />
      <path d="M50 43 Q54 45 52 49" stroke="#D8D8D8" strokeWidth="1" fill="none" />
      <path d="M52 42 Q56 44 54 48" stroke="#D8D8D8" strokeWidth="1" fill="none" />

      {/* Body feather texture */}
      <path d="M30 44 Q32 48 30 50" stroke="#E8E8E8" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M36 42 Q38 46 36 50" stroke="#E8E8E8" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M42 44 Q44 48 42 50" stroke="#E8E8E8" strokeWidth="0.8" fill="none" opacity="0.6" />

      {/* Elegant S-curved neck */}
      <path d="M22 44 Q16 30 24 16 Q28 12 32 16" stroke="url(#swanNeckGradient)" strokeWidth="9" fill="none" strokeLinecap="round" />

      {/* Neck highlight */}
      <path d="M24 44 Q18 32 25 18" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* Head */}
      <circle cx="32" cy="16" r="6" fill="url(#swanBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="30" cy="14" rx="3" ry="2.5" fill="#FFFFFF" opacity="0.6" />

      {/* Black face mask */}
      <path d="M28 14 Q26 16 28 18" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />

      {/* Beak */}
      <polygon points="32,18 24,22 32,20" fill="url(#swanBeakGradient)" />
      <polygon points="32,18 26,20 32,20" fill="#FF8060" opacity="0.4" />

      {/* Beak knob (characteristic of mute swans) */}
      <circle cx="30" cy="16" r="2" fill="#2a2a2a" />
      <circle cx="30" cy="15.5" r="1" fill="#4a4a4a" opacity="0.5" />

      {/* Eye */}
      <circle cx="30" cy="14" r="2" fill="white" />
      <circle cx="30" cy="14" r="1.2" fill="url(#swanEyeGradient)" />
      <circle cx="30.5" cy="13.5" r="0.4" fill="white" />

      {/* Nostril */}
      <ellipse cx="27" cy="19" rx="0.5" ry="0.3" fill="#E54030" />

      {/* Crown feathers */}
      <path d="M34 12 Q36 10 38 12" stroke={color} strokeWidth="1" fill="none" />
      <path d="M36 10 Q38 8 40 10" stroke={color} strokeWidth="1" fill="none" />

      {/* Reflection in water */}
      <ellipse cx="38" cy="54" rx="12" ry="2" fill={color} opacity="0.2" />
    </svg>
  );
}
