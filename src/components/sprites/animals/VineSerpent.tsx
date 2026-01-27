/**
 * VineSerpent Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function VineSerpent({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="vineSerpentBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#32AB32" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#186B18" />
        </linearGradient>
        {/* Leaf gradient */}
        <linearGradient id="vineSerpentLeafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ADFF2F" />
          <stop offset="50%" stopColor="#90EE90" />
          <stop offset="100%" stopColor="#7CCD7C" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="vineSerpentHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#32AB32" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#186B18" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="vineSerpentEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#A0724D" />
          <stop offset="70%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5D3210" />
        </radialGradient>
        {/* Flower center gradient */}
        <radialGradient id="vineSerpentFlowerCenterGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB030" />
          <stop offset="100%" stopColor="#FF8C00" />
        </radialGradient>
        {/* Flower petal gradient */}
        <radialGradient id="vineSerpentFlowerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFEE60" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="60" rx="20" ry="3" fill="#186B18" opacity="0.25" />

      {/* Body vine shape */}
      <path
        d="M8 56 Q16 48 24 52 Q32 56 40 48 Q48 40 52 44"
        stroke="url(#vineSerpentBodyGradient)"
        strokeWidth="11"
        fill="none"
        strokeLinecap="round"
      />

      {/* Body highlight */}
      <path
        d="M8 56 Q16 48 24 52 Q32 56 40 48 Q48 40 52 44"
        stroke="#42BB42"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Body vine pattern */}
      <path
        d="M10 54 Q18 48 24 50 Q30 54 38 48 Q46 42 50 44"
        stroke="#186B18"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3 5"
        opacity="0.4"
      />

      {/* Leaf 1 */}
      <ellipse cx="16" cy="48" rx="6" ry="3" fill="url(#vineSerpentLeafGradient)" transform="rotate(-30 16 48)" />
      <path d="M14 48 L18 48" stroke="#5A8B3A" strokeWidth="0.5" opacity="0.5" />

      {/* Leaf 2 */}
      <ellipse cx="32" cy="52" rx="6" ry="3" fill="url(#vineSerpentLeafGradient)" transform="rotate(20 32 52)" />
      <path d="M30 52 L34 52" stroke="#5A8B3A" strokeWidth="0.5" opacity="0.5" />

      {/* Leaf 3 */}
      <ellipse cx="44" cy="44" rx="6" ry="3" fill="url(#vineSerpentLeafGradient)" transform="rotate(-20 44 44)" />
      <path d="M42 44 L46 44" stroke="#5A8B3A" strokeWidth="0.5" opacity="0.5" />

      {/* Head */}
      <circle cx="56" cy="40" r="10" fill="url(#vineSerpentHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="52" cy="36" rx="4" ry="3" fill="#42BB42" opacity="0.5" />

      {/* Leaf headpiece - top */}
      <ellipse cx="56" cy="28" rx="8" ry="4" fill="url(#vineSerpentLeafGradient)" />
      <path d="M50 28 L62 28" stroke="#5A8B3A" strokeWidth="0.5" opacity="0.5" />

      {/* Leaf headpiece - left */}
      <ellipse cx="52" cy="30" rx="4" ry="6" fill="url(#vineSerpentLeafGradient)" transform="rotate(-30 52 30)" />
      <path d="M50 28 L54 32" stroke="#5A8B3A" strokeWidth="0.5" opacity="0.5" />

      {/* Leaf headpiece - right */}
      <ellipse cx="60" cy="30" rx="4" ry="6" fill="url(#vineSerpentLeafGradient)" transform="rotate(30 60 30)" />
      <path d="M58 28 L62 32" stroke="#5A8B3A" strokeWidth="0.5" opacity="0.5" />

      {/* Tiny leaves on head crown */}
      <ellipse cx="54" cy="26" rx="2" ry="1" fill="#ADFF2F" transform="rotate(-20 54 26)" />
      <ellipse cx="58" cy="26" rx="2" ry="1" fill="#ADFF2F" transform="rotate(20 58 26)" />

      {/* Eyes */}
      <circle cx="52" cy="38" r="4" fill="white" />
      <circle cx="60" cy="38" r="4" fill="white" />

      {/* Eye iris */}
      <circle cx="52" cy="38" r="2.5" fill="url(#vineSerpentEyeGradient)" />
      <circle cx="60" cy="38" r="2.5" fill="url(#vineSerpentEyeGradient)" />

      {/* Eye pupils */}
      <circle cx="52" cy="38" r="1" fill="#1a1a1a" />
      <circle cx="60" cy="38" r="1" fill="#1a1a1a" />

      {/* Eye shine */}
      <circle cx="53" cy="37" r="0.8" fill="white" />
      <circle cx="61" cy="37" r="0.8" fill="white" />
      <circle cx="51" cy="39" r="0.4" fill="white" opacity="0.5" />
      <circle cx="59" cy="39" r="0.4" fill="white" opacity="0.5" />

      {/* Tongue */}
      <path d="M62 44 L66 46 M62 44 L66 42" stroke="#FF69B4" strokeWidth="1.2" strokeLinecap="round" />

      {/* Nose bumps */}
      <circle cx="63" cy="40" r="0.8" fill="#186B18" opacity="0.5" />

      {/* Cheek blush */}
      <circle cx="50" cy="42" r="2" fill="#90EE90" opacity="0.4" />
      <circle cx="62" cy="42" r="2" fill="#90EE90" opacity="0.4" />

      {/* Flower at tail */}
      {/* Petals */}
      <circle cx="4" cy="56" r="3" fill="url(#vineSerpentFlowerGradient)" />
      <circle cx="8" cy="52" r="2.5" fill="url(#vineSerpentFlowerGradient)" />
      <circle cx="12" cy="56" r="2.5" fill="url(#vineSerpentFlowerGradient)" />
      <circle cx="8" cy="60" r="2.5" fill="url(#vineSerpentFlowerGradient)" />
      <circle cx="2" cy="52" r="2" fill="url(#vineSerpentFlowerGradient)" />

      {/* Flower center */}
      <circle cx="8" cy="56" r="2.5" fill="url(#vineSerpentFlowerCenterGradient)" />

      {/* Flower highlight */}
      <circle cx="7" cy="55" r="0.8" fill="#FFE080" opacity="0.6" />

      {/* Small buds/berries */}
      <circle cx="20" cy="46" r="1.5" fill="#FF6B6B" opacity="0.7" />
      <circle cx="36" cy="50" r="1.5" fill="#FF6B6B" opacity="0.7" />

      {/* Vine tendrils */}
      <path d="M12 54 Q10 52 12 50" stroke="#186B18" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M28 54 Q26 56 28 58" stroke="#186B18" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}
