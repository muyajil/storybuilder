/**
 * Dragonfly Sprite Component
 * Enhanced with iridescent gradients, delicate wings, and detailed body segments
 */

import type { SpriteProps } from '../types';

export function Dragonfly({ size = 64, color = '#00CED1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient - iridescent */}
        <linearGradient id="dragonflyBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#40E0D0" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#008B8B" />
          <stop offset="100%" stopColor="#006666" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="dragonflyHeadGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#40E0D0" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#008B8B" />
        </radialGradient>
        {/* Wing gradient - iridescent */}
        <linearGradient id="dragonflyWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.7" />
          <stop offset="30%" stopColor="#87CEEB" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#DDA0DD" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#E0FFFF" stopOpacity="0.3" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="dragonflyEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="50%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        {/* Wing vein pattern */}
        <pattern id="dragonflyWingVeins" patternUnits="userSpaceOnUse" width="8" height="4">
          <path d="M0,2 L8,2 M4,0 L4,4" stroke={color} strokeWidth="0.3" opacity="0.4" />
        </pattern>
      </defs>

      {/* Abdomen (long tail) with gradient and segments */}
      <ellipse cx="32" cy="32" rx="4" ry="20" fill="url(#dragonflyBodyGrad)" />
      {/* Abdomen segments */}
      <path d="M28,22 L36,22" stroke="#006666" strokeWidth="0.5" opacity="0.5" />
      <path d="M28,28 L36,28" stroke="#006666" strokeWidth="0.5" opacity="0.5" />
      <path d="M28,34 L36,34" stroke="#006666" strokeWidth="0.5" opacity="0.5" />
      <path d="M28,40 L36,40" stroke="#006666" strokeWidth="0.5" opacity="0.5" />
      <path d="M29,46 L35,46" stroke="#006666" strokeWidth="0.5" opacity="0.5" />
      {/* Abdomen highlight */}
      <ellipse cx="30" cy="32" rx="1.5" ry="16" fill="#7FFFD4" opacity="0.3" />
      {/* Tail tip */}
      <ellipse cx="32" cy="52" rx="2" ry="3" fill="#006666" />

      {/* Thorax */}
      <ellipse cx="32" cy="16" rx="5" ry="4" fill="url(#dragonflyBodyGrad)" />

      {/* Head with compound eyes */}
      <circle cx="32" cy="10" r="6" fill="url(#dragonflyHeadGrad)" />
      {/* Head highlight */}
      <ellipse cx="30" cy="8" rx="3" ry="2" fill="#7FFFD4" opacity="0.4" />

      {/* Large compound eyes */}
      <ellipse cx="28" cy="9" rx="4" ry="4.5" fill="url(#dragonflyEyeGrad)" />
      <ellipse cx="36" cy="9" rx="4" ry="4.5" fill="url(#dragonflyEyeGrad)" />
      {/* Eye highlights - multiple for compound effect */}
      <circle cx="27" cy="7" r="1" fill="white" opacity="0.6" />
      <circle cx="35" cy="7" r="1" fill="white" opacity="0.6" />
      <circle cx="29" cy="10" r="0.5" fill="white" opacity="0.4" />
      <circle cx="37" cy="10" r="0.5" fill="white" opacity="0.4" />
      <circle cx="26" cy="9" r="0.3" fill="white" opacity="0.3" />
      <circle cx="38" cy="9" r="0.3" fill="white" opacity="0.3" />

      {/* Antennae */}
      <path d="M30 6 L28 2" stroke="#006666" strokeWidth="1" strokeLinecap="round" />
      <path d="M34 6 L36 2" stroke="#006666" strokeWidth="1" strokeLinecap="round" />
      {/* Antennae tips */}
      <circle cx="28" cy="2" r="0.8" fill={color} />
      <circle cx="36" cy="2" r="0.8" fill={color} />

      {/* Wings - Upper pair */}
      <ellipse cx="18" cy="24" rx="16" ry="5" fill="url(#dragonflyWingGrad)" />
      <ellipse cx="46" cy="24" rx="16" ry="5" fill="url(#dragonflyWingGrad)" />
      {/* Wing veins - upper */}
      <path d="M6,24 L28,24" stroke={color} strokeWidth="0.3" opacity="0.5" />
      <path d="M36,24 L58,24" stroke={color} strokeWidth="0.3" opacity="0.5" />
      <path d="M10,22 L10,26" stroke={color} strokeWidth="0.2" opacity="0.4" />
      <path d="M16,21 L16,27" stroke={color} strokeWidth="0.2" opacity="0.4" />
      <path d="M22,22 L22,26" stroke={color} strokeWidth="0.2" opacity="0.4" />
      <path d="M42,22 L42,26" stroke={color} strokeWidth="0.2" opacity="0.4" />
      <path d="M48,21 L48,27" stroke={color} strokeWidth="0.2" opacity="0.4" />
      <path d="M54,22 L54,26" stroke={color} strokeWidth="0.2" opacity="0.4" />

      {/* Wings - Lower pair */}
      <ellipse cx="18" cy="32" rx="16" ry="5" fill="url(#dragonflyWingGrad)" />
      <ellipse cx="46" cy="32" rx="16" ry="5" fill="url(#dragonflyWingGrad)" />
      {/* Wing veins - lower */}
      <path d="M6,32 L28,32" stroke={color} strokeWidth="0.3" opacity="0.5" />
      <path d="M36,32 L58,32" stroke={color} strokeWidth="0.3" opacity="0.5" />
      <path d="M10,30 L10,34" stroke={color} strokeWidth="0.2" opacity="0.4" />
      <path d="M16,29 L16,35" stroke={color} strokeWidth="0.2" opacity="0.4" />
      <path d="M22,30 L22,34" stroke={color} strokeWidth="0.2" opacity="0.4" />
      <path d="M42,30 L42,34" stroke={color} strokeWidth="0.2" opacity="0.4" />
      <path d="M48,29 L48,35" stroke={color} strokeWidth="0.2" opacity="0.4" />
      <path d="M54,30 L54,34" stroke={color} strokeWidth="0.2" opacity="0.4" />

      {/* Wing shimmer effect */}
      <ellipse cx="12" cy="24" rx="6" ry="2" fill="white" opacity="0.15" />
      <ellipse cx="52" cy="24" rx="6" ry="2" fill="white" opacity="0.15" />
      <ellipse cx="12" cy="32" rx="6" ry="2" fill="white" opacity="0.15" />
      <ellipse cx="52" cy="32" rx="6" ry="2" fill="white" opacity="0.15" />

      {/* Legs */}
      <path d="M30,16 L26,20 L24,18" stroke="#006666" strokeWidth="0.8" fill="none" />
      <path d="M34,16 L38,20 L40,18" stroke="#006666" strokeWidth="0.8" fill="none" />
      <path d="M30,18 L26,24" stroke="#006666" strokeWidth="0.8" fill="none" />
      <path d="M34,18 L38,24" stroke="#006666" strokeWidth="0.8" fill="none" />
    </svg>
  );
}
