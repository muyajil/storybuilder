/**
 * Emberpup Sprite Component
 * Enhanced with fiery gradients, glowing effects, and dynamic flame details
 */

import type { SpriteProps } from '../types';

export function Emberpup({ size = 64, color = '#FF4500' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="emberpupBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#FF6B3D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC3700" />
        </radialGradient>
        {/* Flame gradient */}
        <linearGradient id="emberpupFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF4500" />
          <stop offset="40%" stopColor="#FF8C00" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFFF00" />
        </linearGradient>
        {/* Inner flame gradient */}
        <linearGradient id="emberpupInnerFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF6347" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FFFACD" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="emberpupEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#CD5C5C" />
          <stop offset="50%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#4B0000" />
        </radialGradient>
        {/* Glow filter */}
        <filter id="emberpupGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Ember glow */}
        <radialGradient id="emberpupEmberGrad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFFF00" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FF8C00" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Flame tail - outer glow */}
      <g filter="url(#emberpupGlow)">
        <ellipse cx="10" cy="38" rx="9" ry="7" fill="#FFD700" opacity="0.6" />
      </g>
      {/* Flame tail - multiple layers */}
      <ellipse cx="10" cy="38" rx="8" ry="6" fill="url(#emberpupFlameGrad)" />
      <ellipse cx="8" cy="36" rx="6" ry="8" fill={color} />
      <ellipse cx="6" cy="32" rx="4" ry="7" fill="url(#emberpupInnerFlameGrad)" />
      {/* Flame flicker */}
      <ellipse cx="4" cy="28" rx="2" ry="4" fill="#FFFF80" opacity="0.8" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="40" rx="16" ry="12" fill="url(#emberpupBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="36" rx="8" ry="5" fill="#FF7F50" opacity="0.4" />
      {/* Body shadow */}
      <ellipse cx="34" cy="48" rx="12" ry="4" fill="#8B0000" opacity="0.2" />
      {/* Body glow effect */}
      <ellipse cx="32" cy="40" rx="14" ry="10" fill="url(#emberpupEmberGrad)" opacity="0.3" />

      {/* Head with gradient */}
      <circle cx="48" cy="30" r="14" fill="url(#emberpupBodyGrad)" />
      {/* Head highlight */}
      <ellipse cx="44" cy="24" rx="6" ry="5" fill="#FF7F50" opacity="0.4" />

      {/* Flame ears */}
      <polygon points="38,18 36,6 44,14" fill="url(#emberpupFlameGrad)" />
      <polygon points="56,16 62,6 58,18" fill="url(#emberpupFlameGrad)" />
      {/* Ear inner flames */}
      <polygon points="38,18 38,10 42,16" fill="url(#emberpupInnerFlameGrad)" />
      <polygon points="56,16 60,10 58,18" fill="url(#emberpupInnerFlameGrad)" />
      {/* Ear flame tips with glow */}
      <g filter="url(#emberpupGlow)">
        <ellipse cx="36" cy="6" rx="2" ry="3" fill="#FFFF00" opacity="0.8" />
        <ellipse cx="62" cy="6" rx="2" ry="3" fill="#FFFF00" opacity="0.8" />
      </g>

      {/* Eyes with depth */}
      <ellipse cx="44" cy="28" rx="5" ry="5.5" fill="white" />
      <ellipse cx="54" cy="28" rx="5" ry="5.5" fill="white" />
      {/* Eye glow */}
      <ellipse cx="44" cy="28" rx="5" ry="5.5" fill="url(#emberpupEmberGrad)" opacity="0.2" />
      <ellipse cx="54" cy="28" rx="5" ry="5.5" fill="url(#emberpupEmberGrad)" opacity="0.2" />
      {/* Pupils with gradient */}
      <circle cx="44" cy="28" r="3.5" fill="url(#emberpupEyeGrad)" />
      <circle cx="54" cy="28" r="3.5" fill="url(#emberpupEyeGrad)" />
      {/* Inner glow */}
      <circle cx="44" cy="28" r="2" fill="#FF4500" opacity="0.5" />
      <circle cx="54" cy="28" r="2" fill="#FF4500" opacity="0.5" />
      {/* Eye sparkles */}
      <circle cx="43" cy="27" r="1.2" fill="white" />
      <circle cx="53" cy="27" r="1.2" fill="white" />
      <circle cx="45" cy="29" r="0.5" fill="white" />
      <circle cx="55" cy="29" r="0.5" fill="white" />

      {/* Nose with gradient */}
      <ellipse cx="49" cy="36" rx="3" ry="2.2" fill="#2D0F0F" />
      <ellipse cx="48" cy="35.5" rx="1" ry="0.6" fill="#5A2A2A" opacity="0.5" />

      {/* Legs with gradient */}
      <rect x="22" y="48" width="6" height="10" fill="url(#emberpupBodyGrad)" rx="2" />
      <rect x="36" y="48" width="6" height="10" fill="url(#emberpupBodyGrad)" rx="2" />
      {/* Leg highlights */}
      <rect x="23" y="49" width="2" height="6" fill="#FF7F50" opacity="0.4" rx="1" />
      <rect x="37" y="49" width="2" height="6" fill="#FF7F50" opacity="0.4" rx="1" />

      {/* Flame feet with glow */}
      <g filter="url(#emberpupGlow)">
        <ellipse cx="25" cy="58" rx="5" ry="4" fill="#FFD700" opacity="0.6" />
        <ellipse cx="39" cy="58" rx="5" ry="4" fill="#FFD700" opacity="0.6" />
      </g>
      <ellipse cx="25" cy="58" rx="4" ry="3" fill="url(#emberpupFlameGrad)" />
      <ellipse cx="39" cy="58" rx="4" ry="3" fill="url(#emberpupFlameGrad)" />
      {/* Feet inner flames */}
      <ellipse cx="25" cy="58" rx="2" ry="2" fill="#FFFF80" opacity="0.7" />
      <ellipse cx="39" cy="58" rx="2" ry="2" fill="#FFFF80" opacity="0.7" />

      {/* Floating embers/sparks */}
      <g filter="url(#emberpupGlow)">
        <circle cx="16" cy="28" r="1" fill="#FFD700" opacity="0.8" />
        <circle cx="20" cy="24" r="0.8" fill="#FFA500" opacity="0.6" />
        <circle cx="12" cy="32" r="0.6" fill="#FFFF00" opacity="0.7" />
        <circle cx="52" cy="14" r="0.8" fill="#FFD700" opacity="0.6" />
        <circle cx="58" cy="12" r="0.6" fill="#FFA500" opacity="0.5" />
      </g>
    </svg>
  );
}
