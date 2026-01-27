/**
 * Firefly Sprite Component
 * Enhanced with bioluminescent glow, detailed wings, and magical lighting effects
 */

import type { SpriteProps } from '../types';

export function Firefly({ size = 64, color = '#2F2F2F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="fireflyBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Glow gradient - bioluminescence */}
        <radialGradient id="fireflyGlowGrad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFFF80" stopOpacity="1" />
          <stop offset="30%" stopColor="#FFFF00" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#90EE90" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#00FF00" stopOpacity="0" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="fireflyHeadGrad" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="fireflyEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFFF80" />
          <stop offset="50%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="fireflyWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="50%" stopColor="#4A4A4A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2A2A2A" stopOpacity="0.2" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="fireflyGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Soft glow filter */}
        <filter id="fireflySoftGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Body thorax with gradient */}
      <ellipse cx="32" cy="32" rx="10" ry="14" fill="url(#fireflyBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="30" cy="28" rx="5" ry="7" fill="#4A4A4A" opacity="0.4" />
      {/* Body segments */}
      <path d="M24,28 L40,28" stroke="#1A1A1A" strokeWidth="0.8" opacity="0.5" />
      <path d="M24,34 L40,34" stroke="#1A1A1A" strokeWidth="0.8" opacity="0.5" />

      {/* Glowing abdomen - outer glow */}
      <g filter="url(#fireflyGlow)">
        <ellipse cx="32" cy="46" rx="8" ry="10" fill="url(#fireflyGlowGrad)" />
      </g>
      {/* Glowing abdomen - main shape */}
      <ellipse cx="32" cy="44" rx="6" ry="8" fill="#FFFF00" opacity="0.9" />
      {/* Glowing abdomen - bright center */}
      <ellipse cx="32" cy="44" rx="4" ry="6" fill="#FFFFA0" opacity="0.95" />
      {/* Glowing abdomen - hot spot */}
      <ellipse cx="32" cy="42" rx="2" ry="3" fill="#FFFFF0" />
      {/* Abdomen segments in glow */}
      <path d="M28,42 Q32,40 36,42" stroke="#DAA520" strokeWidth="0.5" opacity="0.4" />
      <path d="M27,46 Q32,44 37,46" stroke="#DAA520" strokeWidth="0.5" opacity="0.4" />

      {/* Head with gradient */}
      <circle cx="32" cy="18" r="8" fill="url(#fireflyHeadGrad)" />
      {/* Head highlight */}
      <ellipse cx="30" cy="14" rx="4" ry="3" fill="#4A4A4A" opacity="0.4" />

      {/* Glowing eyes */}
      <g filter="url(#fireflySoftGlow)">
        <circle cx="28" cy="16" r="3" fill="url(#fireflyEyeGrad)" />
        <circle cx="36" cy="16" r="3" fill="url(#fireflyEyeGrad)" />
      </g>
      {/* Eye bright centers */}
      <circle cx="28" cy="16" r="1.5" fill="#FFFFF0" />
      <circle cx="36" cy="16" r="1.5" fill="#FFFFF0" />
      {/* Eye sparkles */}
      <circle cx="27" cy="15" r="0.5" fill="white" />
      <circle cx="35" cy="15" r="0.5" fill="white" />

      {/* Antennae */}
      <path d="M28 12 L24 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 12 L40 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Antennae tips with subtle glow */}
      <g filter="url(#fireflySoftGlow)">
        <circle cx="24" cy="6" r="1.5" fill="#FFFF00" opacity="0.6" />
        <circle cx="40" cy="6" r="1.5" fill="#FFFF00" opacity="0.6" />
      </g>

      {/* Wings with gradient and veins */}
      <ellipse cx="20" cy="28" rx="14" ry="5" fill="url(#fireflyWingGrad)" />
      <ellipse cx="44" cy="28" rx="14" ry="5" fill="url(#fireflyWingGrad)" />
      {/* Wing veins */}
      <path d="M10,28 L28,28" stroke={color} strokeWidth="0.3" opacity="0.5" />
      <path d="M36,28 L54,28" stroke={color} strokeWidth="0.3" opacity="0.5" />
      <path d="M14,26 L14,30" stroke={color} strokeWidth="0.2" opacity="0.4" />
      <path d="M20,25 L20,31" stroke={color} strokeWidth="0.2" opacity="0.4" />
      <path d="M44,25 L44,31" stroke={color} strokeWidth="0.2" opacity="0.4" />
      <path d="M50,26 L50,30" stroke={color} strokeWidth="0.2" opacity="0.4" />
      {/* Wing shimmer */}
      <ellipse cx="16" cy="27" rx="4" ry="1.5" fill="white" opacity="0.1" />
      <ellipse cx="48" cy="27" rx="4" ry="1.5" fill="white" opacity="0.1" />

      {/* Legs */}
      <path d="M28,32 L24,38 L22,36" stroke={color} strokeWidth="1" fill="none" />
      <path d="M36,32 L40,38 L42,36" stroke={color} strokeWidth="1" fill="none" />
      <path d="M28,26 L22,24" stroke={color} strokeWidth="1" fill="none" />
      <path d="M36,26 L42,24" stroke={color} strokeWidth="1" fill="none" />

      {/* Ambient light particles */}
      <g filter="url(#fireflySoftGlow)">
        <circle cx="18" cy="40" r="1" fill="#FFFF00" opacity="0.5" />
        <circle cx="46" cy="42" r="0.8" fill="#90EE90" opacity="0.4" />
        <circle cx="24" cy="52" r="0.6" fill="#FFFF80" opacity="0.5" />
        <circle cx="40" cy="50" r="0.7" fill="#FFFF00" opacity="0.4" />
        <circle cx="32" cy="56" r="0.5" fill="#90EE90" opacity="0.3" />
      </g>
    </svg>
  );
}
