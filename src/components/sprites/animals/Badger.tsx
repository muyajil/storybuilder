/**
 * Badger Sprite Component
 * Enhanced with gradients, fur texture, and detailed features
 */

import type { SpriteProps } from '../types';

export function Badger({ size = 64, color = '#696969' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="badgerBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#808080" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="badgerHeadGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#7a7a7a" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* White stripe gradient */}
        <linearGradient id="badgerStripeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f5f5f5" />
          <stop offset="100%" stopColor="#e8e8e8" />
        </linearGradient>
        {/* Nose gradient */}
        <radialGradient id="badgerNoseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="badgerEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4a3a2a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Fur texture pattern */}
        <pattern id="badgerFurPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="2" y2="2" stroke={color} strokeWidth="0.3" opacity="0.3" />
        </pattern>
        {/* Shine gradient */}
        <linearGradient id="badgerShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Back legs */}
      <ellipse cx="22" cy="54" rx="5" ry="4" fill={color} />
      <ellipse cx="42" cy="54" rx="5" ry="4" fill={color} />

      {/* Body */}
      <ellipse cx="32" cy="42" rx="22" ry="14" fill="url(#badgerBodyGradient)" />
      {/* Body fur texture */}
      <ellipse cx="32" cy="42" rx="22" ry="14" fill="url(#badgerFurPattern)" />
      {/* Body shine */}
      <ellipse cx="26" cy="36" rx="10" ry="5" fill="url(#badgerShineGradient)" />

      {/* Body stripe */}
      <ellipse cx="32" cy="42" rx="6" ry="12" fill="url(#badgerStripeGradient)" opacity="0.4" />

      {/* Head */}
      <ellipse cx="32" cy="28" rx="16" ry="14" fill="url(#badgerHeadGradient)" />

      {/* White face stripe - main */}
      <path d="M32 14 L32 40" stroke="url(#badgerStripeGradient)" strokeWidth="10" strokeLinecap="round" />

      {/* Dark side stripes */}
      <path d="M18 22 Q22 28 20 36" fill={color} />
      <path d="M46 22 Q42 28 44 36" fill={color} />

      {/* Black eye patches */}
      <ellipse cx="24" cy="26" rx="6" ry="5" fill="#1a1a1a" />
      <ellipse cx="40" cy="26" rx="6" ry="5" fill="#1a1a1a" />

      {/* Ears */}
      <ellipse cx="18" cy="16" rx="4" ry="5" fill={color} />
      <ellipse cx="46" cy="16" rx="4" ry="5" fill={color} />
      <ellipse cx="18" cy="16" rx="2" ry="3" fill="#404040" />
      <ellipse cx="46" cy="16" rx="2" ry="3" fill="#404040" />

      {/* Eyes - expressive */}
      <ellipse cx="24" cy="26" rx="3.5" ry="4" fill="white" />
      <ellipse cx="40" cy="26" rx="3.5" ry="4" fill="white" />
      <ellipse cx="24" cy="26" rx="2.5" ry="3" fill="url(#badgerEyeGradient)" />
      <ellipse cx="40" cy="26" rx="2.5" ry="3" fill="url(#badgerEyeGradient)" />
      {/* Eye shine */}
      <circle cx="23" cy="25" r="1" fill="white" />
      <circle cx="39" cy="25" r="1" fill="white" />
      <circle cx="25" cy="27" r="0.5" fill="white" opacity="0.5" />
      <circle cx="41" cy="27" r="0.5" fill="white" opacity="0.5" />

      {/* Snout */}
      <ellipse cx="32" cy="34" rx="6" ry="4" fill="#505050" />

      {/* Nose */}
      <ellipse cx="32" cy="32" rx="4" ry="3" fill="url(#badgerNoseGradient)" />
      {/* Nose highlight */}
      <ellipse cx="31" cy="31" rx="1.5" ry="1" fill="white" opacity="0.3" />

      {/* Mouth */}
      <path d="M28 36 Q32 39 36 36" stroke="#1a1a1a" strokeWidth="1" fill="none" />

      {/* Whisker dots */}
      <circle cx="24" cy="34" r="0.8" fill="#1a1a1a" />
      <circle cx="26" cy="36" r="0.8" fill="#1a1a1a" />
      <circle cx="40" cy="34" r="0.8" fill="#1a1a1a" />
      <circle cx="38" cy="36" r="0.8" fill="#1a1a1a" />

      {/* Front legs */}
      <ellipse cx="22" cy="50" rx="4" ry="5" fill={color} />
      <ellipse cx="42" cy="50" rx="4" ry="5" fill={color} />

      {/* Claws */}
      <g fill="#1a1a1a">
        <ellipse cx="20" cy="56" rx="1" ry="2" />
        <ellipse cx="23" cy="57" rx="1" ry="2" />
        <ellipse cx="41" cy="57" rx="1" ry="2" />
        <ellipse cx="44" cy="56" rx="1" ry="2" />
      </g>
    </svg>
  );
}
