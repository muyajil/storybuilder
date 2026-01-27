/**
 * Deer Sprite Component
 * Enhanced with gradients, realistic fur texture, and elegant details
 */

import type { SpriteProps } from '../types';

export function Deer({ size = 64, color = '#C19A6B' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="deerBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="deerHeadGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#9A7B4F" />
        </radialGradient>
        {/* Antler gradient */}
        <linearGradient id="deerAntlerGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="50%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#6B4226" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="deerEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#4a3728" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="deerNoseGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        {/* Leg gradient */}
        <linearGradient id="deerLegGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="80%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#4a3728" />
        </linearGradient>
      </defs>

      {/* Body with gradient */}
      <ellipse cx="32" cy="40" rx="16" ry="14" fill="url(#deerBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="36" rx="8" ry="6" fill="#E0C090" opacity="0.3" />
      {/* Belly lighter area */}
      <ellipse cx="32" cy="44" rx="10" ry="6" fill="#DEB887" opacity="0.4" />
      {/* Body shadow */}
      <ellipse cx="34" cy="48" rx="12" ry="4" fill="#6B4226" opacity="0.2" />

      {/* White spots on body */}
      <circle cx="26" cy="38" r="1.5" fill="#FFFAF0" opacity="0.6" />
      <circle cx="38" cy="36" r="1.2" fill="#FFFAF0" opacity="0.5" />
      <circle cx="30" cy="44" r="1" fill="#FFFAF0" opacity="0.4" />
      <circle cx="36" cy="42" r="1.3" fill="#FFFAF0" opacity="0.5" />

      {/* Head with gradient */}
      <circle cx="32" cy="22" r="12" fill="url(#deerHeadGrad)" />
      {/* Head highlight */}
      <ellipse cx="28" cy="18" rx="5" ry="4" fill="#E0C090" opacity="0.4" />

      {/* Ears */}
      <ellipse cx="20" cy="18" rx="4" ry="7" fill="url(#deerHeadGrad)" />
      <ellipse cx="44" cy="18" rx="4" ry="7" fill="url(#deerHeadGrad)" />
      {/* Inner ear */}
      <ellipse cx="20" cy="18" rx="2" ry="5" fill="#FFDAB9" opacity="0.6" />
      <ellipse cx="44" cy="18" rx="2" ry="5" fill="#FFDAB9" opacity="0.6" />

      {/* Antlers with gradient */}
      <path d="M24 14 L20 2 M20 2 L16 6 M20 2 L22 7 M20 6 L18 10"
            stroke="url(#deerAntlerGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M40 14 L44 2 M44 2 L48 6 M44 2 L42 7 M44 6 L46 10"
            stroke="url(#deerAntlerGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Eyes with depth */}
      <ellipse cx="26" cy="20" rx="3.5" ry="4.5" fill="white" />
      <ellipse cx="38" cy="20" rx="3.5" ry="4.5" fill="white" />
      {/* Eye shadow */}
      <ellipse cx="26" cy="21" rx="3" ry="4" fill="#f8f8f8" />
      <ellipse cx="38" cy="21" rx="3" ry="4" fill="#f8f8f8" />
      {/* Pupils */}
      <circle cx="26" cy="20" r="2" fill="url(#deerEyeGrad)" />
      <circle cx="38" cy="20" r="2" fill="url(#deerEyeGrad)" />
      {/* Eye sparkles */}
      <circle cx="25" cy="19" r="0.8" fill="white" />
      <circle cx="37" cy="19" r="0.8" fill="white" />

      {/* Snout area */}
      <ellipse cx="32" cy="26" rx="5" ry="4" fill="#DEB887" opacity="0.5" />

      {/* Nose with gradient */}
      <ellipse cx="32" cy="28" rx="3" ry="2.2" fill="url(#deerNoseGrad)" />
      {/* Nose highlight */}
      <ellipse cx="31" cy="27.5" rx="1" ry="0.6" fill="#555" opacity="0.4" />

      {/* Mouth hint */}
      <path d="M30 30 L32 31 L34 30" stroke="#8B6914" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Front legs with gradient */}
      <path d="M24 54 L24 62" stroke="url(#deerLegGrad)" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 54 L40 62" stroke="url(#deerLegGrad)" strokeWidth="4" strokeLinecap="round" />
      {/* Leg highlights */}
      <path d="M23 54 L23 60" stroke="#D4A574" strokeWidth="1" opacity="0.4" />
      <path d="M39 54 L39 60" stroke="#D4A574" strokeWidth="1" opacity="0.4" />

      {/* Hooves */}
      <ellipse cx="24" cy="62" rx="2.5" ry="1.5" fill="#2F2F2F" />
      <ellipse cx="40" cy="62" rx="2.5" ry="1.5" fill="#2F2F2F" />

      {/* Small tail */}
      <ellipse cx="48" cy="40" rx="3" ry="4" fill="url(#deerBodyGrad)" />
      <ellipse cx="49" cy="40" rx="2" ry="3" fill="#FFFAF0" opacity="0.6" />
    </svg>
  );
}
