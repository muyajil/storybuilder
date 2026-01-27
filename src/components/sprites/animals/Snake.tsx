/**
 * Snake Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Snake({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="snakeBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#32AB32" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#186B18" />
        </linearGradient>
        {/* Scale pattern gradient */}
        <linearGradient id="snakeScaleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#006400" />
          <stop offset="100%" stopColor="#004000" />
        </linearGradient>
        {/* Belly gradient */}
        <linearGradient id="snakeBellyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="100%" stopColor="#7CCD7C" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="snakeHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#32AB32" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#186B18" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="snakeEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#FFFF66" />
          <stop offset="70%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#CCCC00" />
        </radialGradient>
        {/* Tongue gradient */}
        <linearGradient id="snakeTongueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#CC0000" />
          <stop offset="100%" stopColor="#FF3333" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="56" rx="24" ry="3" fill="#000" opacity="0.15" />

      {/* Body - main curve with gradient */}
      <path
        d="M8 48 Q16 32 32 40 Q48 48 40 32 Q32 16 48 24 Q64 32 56 16"
        stroke="url(#snakeBodyGradient)"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />

      {/* Body highlight (top edge) */}
      <path
        d="M8 48 Q16 32 32 40 Q48 48 40 32 Q32 16 48 24 Q64 32 56 16"
        stroke="#32AB32"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Scale pattern */}
      <path
        d="M8 48 Q16 32 32 40 Q48 48 40 32 Q32 16 48 24 Q64 32 56 16"
        stroke="url(#snakeScaleGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="6 6"
      />

      {/* Body belly hint */}
      <path
        d="M10 50 Q18 36 32 42"
        stroke="url(#snakeBellyGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Tail tip */}
      <circle cx="8" cy="48" r="3" fill="url(#snakeBodyGradient)" />
      <circle cx="8" cy="48" r="1.5" fill="#186B18" />

      {/* Head */}
      <ellipse cx="56" cy="14" rx="7" ry="6" fill="url(#snakeHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="54" cy="11" rx="3" ry="2" fill="#42BB42" opacity="0.5" />

      {/* Head scales texture */}
      <ellipse cx="52" cy="14" rx="2" ry="1.5" fill="#186B18" opacity="0.3" />
      <ellipse cx="56" cy="12" rx="2" ry="1.5" fill="#186B18" opacity="0.3" />

      {/* Eye socket */}
      <ellipse cx="58" cy="12" rx="3" ry="2.5" fill="#186B18" opacity="0.4" />

      {/* Eye */}
      <ellipse cx="58" cy="12" rx="2.5" ry="2" fill="url(#snakeEyeGradient)" />

      {/* Pupil - vertical slit */}
      <ellipse cx="58" cy="12" rx="0.8" ry="1.5" fill="#1a1a1a" />

      {/* Eye shine */}
      <circle cx="57" cy="11" r="0.6" fill="white" opacity="0.8" />

      {/* Nostril */}
      <circle cx="61" cy="12" r="0.5" fill="#186B18" />

      {/* Tongue */}
      <path d="M62 16 L66 18 M62 16 L66 14" stroke="url(#snakeTongueGradient)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="66" cy="18" r="0.5" fill="#FF3333" />
      <circle cx="66" cy="14" r="0.5" fill="#FF3333" />

      {/* Additional scale details */}
      <circle cx="14" cy="42" r="1" fill="#186B18" opacity="0.3" />
      <circle cx="24" cy="38" r="1" fill="#186B18" opacity="0.3" />
      <circle cx="36" cy="42" r="1" fill="#186B18" opacity="0.3" />
      <circle cx="44" cy="36" r="1" fill="#186B18" opacity="0.3" />
    </svg>
  );
}
