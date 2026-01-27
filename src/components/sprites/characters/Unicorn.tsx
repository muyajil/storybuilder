/**
 * Unicorn Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Unicorn({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="unicornBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#E8E8E8" />
        </radialGradient>
        {/* Horn gradient */}
        <linearGradient id="unicornHornGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFF8DC" />
        </linearGradient>
        {/* Mane gradient */}
        <linearGradient id="unicornManeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF69B4" />
          <stop offset="33%" stopColor="#9370DB" />
          <stop offset="66%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#98FB98" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="unicornTailGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF69B4" />
          <stop offset="33%" stopColor="#DDA0DD" />
          <stop offset="66%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#FFB6C1" />
        </linearGradient>
        {/* Hoof gradient */}
        <linearGradient id="unicornHoofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="unicornEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#9370DB" />
          <stop offset="70%" stopColor="#4B0082" />
          <stop offset="100%" stopColor="#2E0854" />
        </radialGradient>
      </defs>

      {/* Tail */}
      <path d="M14 40 Q4 34 6 42 Q0 38 4 46 Q-2 44 6 52" stroke="url(#unicornTailGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M14 40 Q6 36 8 44 Q2 42 6 48" stroke="#FFB6C1" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* Body */}
      <ellipse cx="32" cy="40" rx="20" ry="14" fill="url(#unicornBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="36" rx="12" ry="8" fill="white" opacity="0.3" />
      {/* Body shadow */}
      <ellipse cx="36" cy="46" rx="10" ry="4" fill="#D0D0D0" opacity="0.3" />

      {/* Legs */}
      <rect x="18" y="48" width="5" height="14" fill="url(#unicornBodyGradient)" rx="2" />
      <rect x="26" y="48" width="5" height="14" fill="url(#unicornBodyGradient)" rx="2" />
      <rect x="35" y="48" width="5" height="14" fill="url(#unicornBodyGradient)" rx="2" />
      <rect x="43" y="48" width="5" height="14" fill="url(#unicornBodyGradient)" rx="2" />
      {/* Leg highlights */}
      <rect x="19" y="48" width="2" height="12" fill="white" opacity="0.3" />
      <rect x="27" y="48" width="2" height="12" fill="white" opacity="0.3" />

      {/* Hooves */}
      <rect x="17" y="60" width="7" height="4" fill="url(#unicornHoofGradient)" rx="2" />
      <rect x="25" y="60" width="7" height="4" fill="url(#unicornHoofGradient)" rx="2" />
      <rect x="34" y="60" width="7" height="4" fill="url(#unicornHoofGradient)" rx="2" />
      <rect x="42" y="60" width="7" height="4" fill="url(#unicornHoofGradient)" rx="2" />

      {/* Head */}
      <ellipse cx="52" cy="26" rx="12" ry="14" fill="url(#unicornBodyGradient)" />
      {/* Head highlight */}
      <ellipse cx="50" cy="22" rx="6" ry="8" fill="white" opacity="0.3" />

      {/* Mane */}
      <path d="M46 18 Q38 22 42 30 Q34 26 40 36 Q32 34 38 42" stroke="url(#unicornManeGradient)" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M46 20 Q40 24 44 30 Q38 28 42 36" stroke="#DDA0DD" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* Horn */}
      <polygon points="56,6 52,24 58,24" fill="url(#unicornHornGradient)" />
      {/* Horn spiral lines */}
      <line x1="53" y1="20" x2="57" y2="18" stroke="#DAA520" strokeWidth="0.5" />
      <line x1="53.5" y1="16" x2="57" y2="14" stroke="#DAA520" strokeWidth="0.5" />
      <line x1="54" y1="12" x2="57" y2="10" stroke="#DAA520" strokeWidth="0.5" />
      {/* Horn sparkle */}
      <circle cx="56" cy="8" r="1" fill="white" />

      {/* Ear */}
      <ellipse cx="48" cy="14" rx="3" ry="6" fill="url(#unicornBodyGradient)" />
      <ellipse cx="48" cy="16" rx="1.5" ry="3" fill="#FFB6C1" opacity="0.5" />

      {/* Eye */}
      <ellipse cx="56" cy="24" rx="4" ry="5" fill="url(#unicornEyeGradient)" />
      {/* Eye shine */}
      <circle cx="57" cy="22" r="1.5" fill="white" />
      <circle cx="55" cy="25" r="0.8" fill="white" opacity="0.6" />
      {/* Eyelashes */}
      <path d="M60 22 L62 20 M60 24 L63 24 M60 26 L62 28" stroke="#333" strokeWidth="0.5" />

      {/* Nostril */}
      <ellipse cx="62" cy="30" rx="1" ry="1.5" fill="#D0D0D0" />

      {/* Magical sparkles */}
      <circle cx="10" cy="36" r="1" fill="#FFD700" opacity="0.7" />
      <circle cx="6" cy="44" r="0.8" fill="#FF69B4" opacity="0.6" />
      <circle cx="2" cy="40" r="0.6" fill="#87CEEB" opacity="0.5" />
      <circle cx="60" cy="10" r="1" fill="#FFD700" opacity="0.7" />
    </svg>
  );
}
