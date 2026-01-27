/**
 * FlameChick Sprite Component
 * Enhanced with fiery gradients, fluffy feathers, and adorable flame effects
 */

import type { SpriteProps } from '../types';

export function FlameChick({ size = 64, color = '#FF6347' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="flameChickBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#FF8060" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CD4F39" />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="flameChickBellyGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Flame gradient */}
        <linearGradient id="flameChickFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="40%" stopColor="#FF8C00" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFFF80" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="flameChickBeakGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#E67300" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="flameChickEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Glow filter */}
        <filter id="flameChickGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Flame head tuft - outer glow */}
      <g filter="url(#flameChickGlow)">
        <ellipse cx="32" cy="8" rx="10" ry="8" fill="#FFD700" opacity="0.5" />
      </g>
      {/* Flame head - multiple layers */}
      <ellipse cx="32" cy="8" rx="8" ry="6" fill="url(#flameChickFlameGrad)" />
      <ellipse cx="28" cy="10" rx="6" ry="9" fill={color} />
      <ellipse cx="36" cy="10" rx="6" ry="9" fill={color} />
      <ellipse cx="32" cy="6" rx="4" ry="7" fill="url(#flameChickFlameGrad)" />
      {/* Flame tips */}
      <ellipse cx="32" cy="2" rx="2" ry="3" fill="#FFFF80" opacity="0.9" />
      <ellipse cx="26" cy="6" rx="1.5" ry="2.5" fill="#FFD700" opacity="0.7" />
      <ellipse cx="38" cy="6" rx="1.5" ry="2.5" fill="#FFD700" opacity="0.7" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="38" rx="18" ry="16" fill="url(#flameChickBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="32" rx="10" ry="8" fill="#FF8080" opacity="0.4" />
      {/* Body shadow */}
      <ellipse cx="34" cy="48" rx="14" ry="5" fill="#8B0000" opacity="0.2" />

      {/* Belly with gradient */}
      <ellipse cx="32" cy="42" rx="14" ry="10" fill="url(#flameChickBellyGrad)" />
      {/* Belly fluff texture */}
      <path d="M24,40 Q26,42 24,44" stroke="#DAA520" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M32,38 Q34,40 32,42" stroke="#DAA520" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M40,40 Q38,42 40,44" stroke="#DAA520" strokeWidth="0.8" fill="none" opacity="0.5" />

      {/* Eyes with depth */}
      <ellipse cx="26" cy="32" rx="5" ry="5.5" fill="white" />
      <ellipse cx="38" cy="32" rx="5" ry="5.5" fill="white" />
      {/* Eye shadow */}
      <ellipse cx="26" cy="33" rx="4.5" ry="5" fill="#f8f8f8" />
      <ellipse cx="38" cy="33" rx="4.5" ry="5" fill="#f8f8f8" />
      {/* Pupils with gradient */}
      <circle cx="26" cy="32" r="3.5" fill="url(#flameChickEyeGrad)" />
      <circle cx="38" cy="32" r="3.5" fill="url(#flameChickEyeGrad)" />
      {/* Eye sparkles */}
      <circle cx="25" cy="31" r="1.2" fill="white" />
      <circle cx="37" cy="31" r="1.2" fill="white" />
      <circle cx="27" cy="33" r="0.5" fill="white" />
      <circle cx="39" cy="33" r="0.5" fill="white" />

      {/* Rosy cheeks */}
      <ellipse cx="20" cy="36" rx="3" ry="2" fill="#FF6B6B" opacity="0.4" />
      <ellipse cx="44" cy="36" rx="3" ry="2" fill="#FF6B6B" opacity="0.4" />

      {/* Beak with gradient */}
      <polygon points="32,38 26,46 38,46" fill="url(#flameChickBeakGrad)" />
      {/* Beak highlight */}
      <path d="M30,40 L32,38 L34,40" stroke="#FFD080" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* Beak nostril hints */}
      <circle cx="30" cy="42" r="0.5" fill="#CC6600" opacity="0.5" />
      <circle cx="34" cy="42" r="0.5" fill="#CC6600" opacity="0.5" />

      {/* Flame feet with glow */}
      <g filter="url(#flameChickGlow)">
        <ellipse cx="24" cy="58" rx="6" ry="4" fill="#FFD700" opacity="0.4" />
        <ellipse cx="40" cy="58" rx="6" ry="4" fill="#FFD700" opacity="0.4" />
      </g>
      {/* Feet with gradient */}
      <path d="M24 54 L20 60 L24 58 L28 60 L24 54" fill="url(#flameChickBeakGrad)" />
      <path d="M40 54 L36 60 L40 58 L44 60 L40 54" fill="url(#flameChickBeakGrad)" />
      {/* Feet detail */}
      <path d="M22,59 L24,57 L26,59" stroke="#E67300" strokeWidth="0.5" fill="none" />
      <path d="M38,59 L40,57 L42,59" stroke="#E67300" strokeWidth="0.5" fill="none" />

      {/* Wings with gradient */}
      <ellipse cx="14" cy="40" rx="6" ry="11" fill="url(#flameChickBodyGrad)" />
      <ellipse cx="50" cy="40" rx="6" ry="11" fill="url(#flameChickBodyGrad)" />
      {/* Wing feather texture */}
      <path d="M12,36 Q14,38 12,40" stroke="#CD4F39" strokeWidth="0.6" fill="none" opacity="0.4" />
      <path d="M52,36 Q50,38 52,40" stroke="#CD4F39" strokeWidth="0.6" fill="none" opacity="0.4" />
      {/* Wing highlights */}
      <ellipse cx="12" cy="38" rx="3" ry="6" fill="#FF8080" opacity="0.3" />
      <ellipse cx="52" cy="38" rx="3" ry="6" fill="#FF8080" opacity="0.3" />

      {/* Floating embers */}
      <g filter="url(#flameChickGlow)">
        <circle cx="20" cy="8" r="1" fill="#FFD700" opacity="0.6" />
        <circle cx="44" cy="8" r="0.8" fill="#FFA500" opacity="0.5" />
        <circle cx="32" cy="0" r="0.6" fill="#FFFF00" opacity="0.7" />
      </g>
    </svg>
  );
}
