/**
 * Frog Sprite Component
 * Enhanced with gradients, moist skin texture, and expressive bulging eyes
 */

import type { SpriteProps } from '../types';

export function Frog({ size = 64, color = '#32CD32' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="frogBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#50E850" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="frogHeadGrad" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#50E850" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="frogBellyGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#E0FFE0" />
          <stop offset="70%" stopColor="#98FB98" />
          <stop offset="100%" stopColor="#90EE90" />
        </radialGradient>
        {/* Eye bulge gradient */}
        <radialGradient id="frogEyeBulgeGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#50E850" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="frogEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="50%" stopColor="#654321" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Leg gradient */}
        <linearGradient id="frogLegGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Moist skin highlight */}
        <linearGradient id="frogShineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Back legs with gradient */}
      <ellipse cx="12" cy="48" rx="11" ry="7" fill="url(#frogLegGrad)" />
      <ellipse cx="52" cy="48" rx="11" ry="7" fill="url(#frogLegGrad)" />
      {/* Back leg spots/texture */}
      <circle cx="8" cy="48" r="1.5" fill="#228B22" opacity="0.4" />
      <circle cx="56" cy="48" r="1.5" fill="#228B22" opacity="0.4" />
      {/* Back feet with webbing hint */}
      <ellipse cx="6" cy="52" rx="5" ry="3" fill="url(#frogLegGrad)" />
      <ellipse cx="58" cy="52" rx="5" ry="3" fill="url(#frogLegGrad)" />
      <path d="M2,52 L4,54 L6,52 L8,54 L10,52" stroke="#228B22" strokeWidth="0.5" fill="none" />
      <path d="M54,52 L56,54 L58,52 L60,54 L62,52" stroke="#228B22" strokeWidth="0.5" fill="none" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="42" rx="18" ry="14" fill="url(#frogBodyGrad)" />
      {/* Body highlight - moist skin */}
      <ellipse cx="28" cy="36" rx="10" ry="6" fill="url(#frogShineGrad)" />
      {/* Body shadow */}
      <ellipse cx="34" cy="52" rx="14" ry="4" fill="#006400" opacity="0.2" />
      {/* Belly area */}
      <ellipse cx="32" cy="46" rx="12" ry="8" fill="url(#frogBellyGrad)" opacity="0.6" />

      {/* Spots on body */}
      <circle cx="24" cy="40" r="2" fill="#228B22" opacity="0.4" />
      <circle cx="40" cy="38" r="1.5" fill="#228B22" opacity="0.3" />
      <circle cx="36" cy="44" r="1.8" fill="#228B22" opacity="0.35" />

      {/* Head with gradient */}
      <ellipse cx="32" cy="26" rx="20" ry="14" fill="url(#frogHeadGrad)" />
      {/* Head highlight */}
      <ellipse cx="28" cy="22" rx="10" ry="6" fill="url(#frogShineGrad)" />

      {/* Eye bulges */}
      <circle cx="20" cy="18" r="9" fill="url(#frogEyeBulgeGrad)" />
      <circle cx="44" cy="18" r="9" fill="url(#frogEyeBulgeGrad)" />
      {/* Eye bulge highlights */}
      <ellipse cx="18" cy="14" rx="4" ry="3" fill="url(#frogShineGrad)" />
      <ellipse cx="42" cy="14" rx="4" ry="3" fill="url(#frogShineGrad)" />

      {/* Eyes with depth */}
      <ellipse cx="20" cy="16" rx="5.5" ry="6" fill="white" />
      <ellipse cx="44" cy="16" rx="5.5" ry="6" fill="white" />
      {/* Eye shadow */}
      <ellipse cx="20" cy="17" rx="5" ry="5.5" fill="#f8f8f8" />
      <ellipse cx="44" cy="17" rx="5" ry="5.5" fill="#f8f8f8" />
      {/* Pupils with gradient */}
      <circle cx="20" cy="16" r="3.5" fill="url(#frogEyeGrad)" />
      <circle cx="44" cy="16" r="3.5" fill="url(#frogEyeGrad)" />
      {/* Eye sparkles */}
      <circle cx="19" cy="14" r="1.2" fill="white" />
      <circle cx="43" cy="14" r="1.2" fill="white" />
      <circle cx="21" cy="17" r="0.5" fill="white" />
      <circle cx="45" cy="17" r="0.5" fill="white" />

      {/* Nostrils */}
      <circle cx="28" cy="28" r="1" fill="#228B22" />
      <circle cx="36" cy="28" r="1" fill="#228B22" />

      {/* Wide smile */}
      <path d="M22 34 Q32 40 42 34" stroke="#228B22" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Inner mouth line */}
      <path d="M26 35 Q32 38 38 35" stroke="#006400" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Throat area */}
      <ellipse cx="32" cy="32" rx="6" ry="4" fill="url(#frogBellyGrad)" opacity="0.4" />

      {/* Front legs with gradient */}
      <ellipse cx="16" cy="50" rx="4.5" ry="7" fill="url(#frogLegGrad)" />
      <ellipse cx="48" cy="50" rx="4.5" ry="7" fill="url(#frogLegGrad)" />
      {/* Front feet */}
      <ellipse cx="16" cy="56" rx="4" ry="2" fill="url(#frogLegGrad)" />
      <ellipse cx="48" cy="56" rx="4" ry="2" fill="url(#frogLegGrad)" />
      {/* Front feet toes */}
      <path d="M13,56 L14,58 L16,56 L18,58 L19,56" stroke="#228B22" strokeWidth="0.5" fill="none" />
      <path d="M45,56 L46,58 L48,56 L50,58 L51,56" stroke="#228B22" strokeWidth="0.5" fill="none" />

      {/* Water droplets on skin */}
      <ellipse cx="38" cy="26" rx="1" ry="1.5" fill="white" opacity="0.4" />
      <circle cx="26" cy="32" r="0.8" fill="white" opacity="0.3" />
      <circle cx="42" cy="44" r="0.6" fill="white" opacity="0.3" />
    </svg>
  );
}
