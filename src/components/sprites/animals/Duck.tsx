/**
 * Duck Sprite Component
 * Enhanced with gradients, feather texture, and iridescent head
 */

import type { SpriteProps } from '../types';

export function Duck({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="duckBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Head gradient - iridescent green */}
        <radialGradient id="duckHeadGrad" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#32CD32" />
          <stop offset="40%" stopColor="#228B22" />
          <stop offset="80%" stopColor="#006400" />
          <stop offset="100%" stopColor="#004D00" />
        </radialGradient>
        {/* Beak gradient */}
        <linearGradient id="duckBeakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#E67300" />
        </linearGradient>
        {/* Wing gradient */}
        <radialGradient id="duckWingGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="70%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#8B7355" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="duckEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* White ring gradient */}
        <linearGradient id="duckRingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
      </defs>

      {/* Body with gradient */}
      <ellipse cx="32" cy="42" rx="20" ry="14" fill="url(#duckBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="38" rx="12" ry="7" fill="#FFEC80" opacity="0.4" />
      {/* Body shadow */}
      <ellipse cx="34" cy="50" rx="16" ry="4" fill="#B8860B" opacity="0.2" />

      {/* Tail feathers */}
      <polygon points="12,38 4,32 6,38 2,36 8,42" fill="url(#duckBodyGrad)" />
      {/* Tail curl feathers */}
      <path d="M10,36 Q4,32 6,40" stroke="#B8860B" strokeWidth="2" fill="none" />
      <path d="M8,38 Q2,36 5,42" stroke="#8B7355" strokeWidth="1.5" fill="none" />

      {/* Neck connection */}
      <ellipse cx="46" cy="36" rx="8" ry="10" fill="url(#duckHeadGrad)" />

      {/* White neck ring with gradient */}
      <path d="M42 36 Q48 40 44 44" fill="url(#duckRingGrad)" />
      <ellipse cx="44" cy="40" rx="4" ry="3" fill="url(#duckRingGrad)" />

      {/* Head with iridescent gradient */}
      <circle cx="50" cy="26" r="12" fill="url(#duckHeadGrad)" />
      {/* Head highlight for iridescence */}
      <ellipse cx="46" cy="22" rx="5" ry="4" fill="#32CD32" opacity="0.5" />
      <ellipse cx="52" cy="28" rx="4" ry="3" fill="#004D00" opacity="0.3" />

      {/* Beak with gradient */}
      <ellipse cx="61" cy="30" rx="7" ry="3.5" fill="url(#duckBeakGrad)" />
      {/* Beak upper ridge */}
      <path d="M55 28 Q60 27 66 29" stroke="#E67300" strokeWidth="0.8" fill="none" />
      {/* Beak nostril */}
      <circle cx="58" cy="29" r="0.8" fill="#8B4513" />
      {/* Beak tip */}
      <ellipse cx="65" cy="30" rx="2" ry="2" fill="#CC6600" />

      {/* Eye with depth */}
      <ellipse cx="52" cy="24" rx="2.5" ry="3" fill="white" />
      <circle cx="52" cy="24" r="1.8" fill="url(#duckEyeGrad)" />
      {/* Eye sparkle */}
      <circle cx="51.5" cy="23.5" r="0.6" fill="white" />

      {/* Wing with feather texture */}
      <ellipse cx="28" cy="40" rx="11" ry="9" fill="url(#duckWingGrad)" />
      {/* Wing feather lines */}
      <path d="M20,38 Q24,40 20,42" stroke="#8B7355" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M24,36 Q28,38 24,42" stroke="#8B7355" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M28,35 Q32,38 28,43" stroke="#8B7355" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M32,36 Q36,39 32,44" stroke="#8B7355" strokeWidth="0.8" fill="none" opacity="0.6" />
      {/* Wing highlight */}
      <ellipse cx="26" cy="38" rx="6" ry="4" fill="#E8D080" opacity="0.3" />

      {/* Breast feathers texture */}
      <path d="M38,44 Q40,46 38,48" stroke="#DAA520" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M42,42 Q44,44 42,46" stroke="#DAA520" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Feet (partially visible) */}
      <ellipse cx="28" cy="56" rx="5" ry="2" fill="#FFA500" />
      <ellipse cx="38" cy="56" rx="5" ry="2" fill="#FFA500" />
      {/* Webbed detail */}
      <path d="M24,56 L26,58 L28,56 L30,58 L32,56" stroke="#E67300" strokeWidth="0.5" fill="none" />
      <path d="M34,56 L36,58 L38,56 L40,58 L42,56" stroke="#E67300" strokeWidth="0.5" fill="none" />

      {/* Water ripple effect */}
      <ellipse cx="32" cy="58" rx="22" ry="3" fill="none" stroke="#87CEEB" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}
