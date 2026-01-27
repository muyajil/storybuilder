/**
 * Flamingo Sprite Component
 * Enhanced with elegant gradients, feather texture, and graceful details
 */

import type { SpriteProps } from '../types';

export function Flamingo({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="flamingoBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#FF85C0" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#DB5698" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="flamingoHeadGrad" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#FF85C0" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#DB5698" />
        </radialGradient>
        {/* Wing gradient */}
        <radialGradient id="flamingoWingGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#FF1493" />
          <stop offset="70%" stopColor="#DB1482" />
          <stop offset="100%" stopColor="#C71585" />
        </radialGradient>
        {/* Neck gradient */}
        <linearGradient id="flamingoNeckGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#DB5698" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="flamingoBeakGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="flamingoLegGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#DB5698" />
          <stop offset="100%" stopColor="#C04680" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="flamingoEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
      </defs>

      {/* Legs with gradient */}
      <path d="M28 44 L24 62" stroke="url(#flamingoLegGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Standing leg */}
      <path d="M36 44 L32 58" stroke="url(#flamingoLegGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Bent leg portion */}
      <path d="M32 58 L36 62" stroke="url(#flamingoLegGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Feet */}
      <ellipse cx="24" cy="62" rx="3" ry="1.5" fill="#C04680" />
      <ellipse cx="36" cy="62" rx="3" ry="1.5" fill="#C04680" />
      {/* Leg joints */}
      <circle cx="32" cy="58" r="1.5" fill="#DB5698" />
      <circle cx="26" cy="52" r="1" fill="#DB5698" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="38" rx="14" ry="10" fill="url(#flamingoBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="34" rx="8" ry="5" fill="#FF99CC" opacity="0.4" />
      {/* Body feather texture */}
      <path d="M24,36 Q26,38 24,40" stroke="#DB5698" strokeWidth="0.6" fill="none" opacity="0.4" />
      <path d="M32,34 Q34,36 32,38" stroke="#DB5698" strokeWidth="0.6" fill="none" opacity="0.4" />
      <path d="M40,36 Q38,38 40,40" stroke="#DB5698" strokeWidth="0.6" fill="none" opacity="0.4" />

      {/* Neck with gradient - elegant S curve */}
      <path d="M38 32 Q52 22 48 10 Q46 4 46 8" stroke="url(#flamingoNeckGrad)" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      {/* Neck highlight */}
      <path d="M40 30 Q50 22 48 12" stroke="#FF99CC" strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Head with gradient */}
      <circle cx="46" cy="8" r="6" fill="url(#flamingoHeadGrad)" />
      {/* Head highlight */}
      <ellipse cx="44" cy="6" rx="3" ry="2" fill="#FF99CC" opacity="0.4" />

      {/* Beak with gradient - distinctive curve */}
      <path d="M50 10 L58 12 L50 14 Z" fill="url(#flamingoBeakGrad)" />
      {/* Beak upper section */}
      <path d="M50 10 L56 11 L50 12 Z" fill="#FFB6C1" />
      {/* Beak tip - black */}
      <path d="M55 11 L58 12 L55 13 Z" fill="#1a1a1a" />
      {/* Beak curve detail */}
      <path d="M52 11.5 Q54 12 52 12.5" stroke="#E69500" strokeWidth="0.5" fill="none" />

      {/* Eye with depth */}
      <ellipse cx="48" cy="7" rx="1.5" ry="1.8" fill="white" />
      <circle cx="48" cy="7" r="1.2" fill="url(#flamingoEyeGrad)" />
      {/* Eye sparkle */}
      <circle cx="47.5" cy="6.5" r="0.4" fill="white" />

      {/* Wing with gradient and feather texture */}
      <ellipse cx="28" cy="36" rx="9" ry="7" fill="url(#flamingoWingGrad)" />
      {/* Wing feather layers */}
      <path d="M22,34 Q24,36 22,38" stroke="#FF69B4" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M26,32 Q28,35 26,38" stroke="#FF69B4" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M30,32 Q32,35 30,38" stroke="#FF69B4" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M34,34 Q32,36 34,38" stroke="#FF69B4" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* Wing highlight */}
      <ellipse cx="26" cy="34" rx="5" ry="3" fill="#FF85C0" opacity="0.4" />

      {/* Tail feathers */}
      <ellipse cx="18" cy="38" rx="4" ry="3" fill="url(#flamingoBodyGrad)" />
      <path d="M14,38 Q16,36 18,38 Q16,40 14,38" stroke="#DB5698" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Water reflection hint */}
      <ellipse cx="30" cy="64" rx="16" ry="2" fill="#87CEEB" opacity="0.2" />
    </svg>
  );
}
