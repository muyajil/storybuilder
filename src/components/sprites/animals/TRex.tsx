/**
 * TRex Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function TRex({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="trexBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#32AB32" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#186B18" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="trexHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#32AB32" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#186B18" />
        </radialGradient>
        {/* Belly gradient */}
        <linearGradient id="trexBellyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="100%" stopColor="#7CCD7C" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="trexEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#FFFF66" />
          <stop offset="70%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#CCCC00" />
        </radialGradient>
        {/* Leg gradient */}
        <linearGradient id="trexLegGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A9B2A" />
          <stop offset="100%" stopColor="#186B18" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="62" rx="24" ry="4" fill="#000" opacity="0.2" />

      {/* Tail */}
      <polygon points="0,40 14,36 14,44" fill="url(#trexBodyGradient)" />
      <polygon points="2,40 14,37 14,43" fill="#32AB32" opacity="0.4" />

      {/* Body */}
      <ellipse cx="28" cy="40" rx="18" ry="14" fill="url(#trexBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="24" cy="36" rx="10" ry="7" fill="#32AB32" opacity="0.4" />

      {/* Belly */}
      <ellipse cx="28" cy="46" rx="12" ry="6" fill="url(#trexBellyGradient)" opacity="0.5" />

      {/* Body texture/scales */}
      <circle cx="20" cy="38" r="1.5" fill="#186B18" opacity="0.3" />
      <circle cx="28" cy="36" r="1.5" fill="#186B18" opacity="0.3" />
      <circle cx="36" cy="40" r="1.5" fill="#186B18" opacity="0.3" />
      <circle cx="24" cy="44" r="1" fill="#186B18" opacity="0.3" />

      {/* Head */}
      <ellipse cx="52" cy="28" rx="14" ry="10" fill="url(#trexHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="48" cy="24" rx="6" ry="4" fill="#32AB32" opacity="0.5" />

      {/* Jaw */}
      <ellipse cx="58" cy="34" rx="10" ry="4" fill="url(#trexHeadGradient)" />

      {/* Jaw highlight */}
      <ellipse cx="56" cy="33" rx="6" ry="2" fill="#32AB32" opacity="0.4" />

      {/* Teeth - upper */}
      <path d="M50 32 L52 36 L54 32 L56 36 L58 32 L60 36 L62 32" fill="white" />

      {/* Teeth - lower */}
      <path d="M51 34 L53 31 L55 34 L57 31 L59 34 L61 31" fill="#F0F0F0" />

      {/* Nostril */}
      <circle cx="62" cy="26" r="1" fill="#186B18" />

      {/* Eye socket */}
      <ellipse cx="50" cy="26" rx="4" ry="4.5" fill="#186B18" opacity="0.3" />

      {/* Eye */}
      <circle cx="50" cy="26" r="3.5" fill="url(#trexEyeGradient)" />

      {/* Pupil */}
      <ellipse cx="50" cy="26" rx="1.2" ry="2" fill="#1a1a1a" />

      {/* Eye shine */}
      <circle cx="51" cy="25" r="0.8" fill="white" opacity="0.8" />

      {/* Brow ridge */}
      <path d="M46 22 Q50 20 54 22" stroke="#186B18" strokeWidth="2" fill="none" opacity="0.5" />

      {/* Small arms */}
      <path d="M36 38 L40 44 L38 46" stroke="url(#trexBodyGradient)" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 38 L40 44 L38 46" stroke="#32AB32" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />

      {/* Arm claws */}
      <path d="M40 44 L42 45 M38 46 L38 48" stroke="#E8E8D0" strokeWidth="1" strokeLinecap="round" />

      {/* Legs */}
      <rect x="20" y="50" width="8" height="14" rx="3" fill="url(#trexLegGradient)" />
      <rect x="20" y="50" width="4" height="12" rx="2" fill="#32AB32" opacity="0.3" />

      <rect x="34" y="50" width="8" height="14" rx="3" fill="url(#trexLegGradient)" />
      <rect x="34" y="50" width="4" height="12" rx="2" fill="#32AB32" opacity="0.3" />

      {/* Feet */}
      <ellipse cx="24" cy="64" rx="6" ry="2" fill="#186B18" />
      <ellipse cx="38" cy="64" rx="6" ry="2" fill="#186B18" />

      {/* Toe claws */}
      <circle cx="20" cy="64" r="1.5" fill="#E8E8D0" />
      <circle cx="24" cy="64" r="1.5" fill="#E8E8D0" />
      <circle cx="28" cy="64" r="1.5" fill="#E8E8D0" />
      <circle cx="34" cy="64" r="1.5" fill="#E8E8D0" />
      <circle cx="38" cy="64" r="1.5" fill="#E8E8D0" />
      <circle cx="42" cy="64" r="1.5" fill="#E8E8D0" />

      {/* Back spines */}
      <path d="M16 36 L14 32 L18 36" fill="#186B18" opacity="0.5" />
      <path d="M22 34 L20 30 L24 34" fill="#186B18" opacity="0.5" />
      <path d="M28 33 L26 29 L30 33" fill="#186B18" opacity="0.5" />
    </svg>
  );
}
