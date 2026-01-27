/**
 * Grasshopper Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Grasshopper({ size = 64, color = '#32CD32' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="grasshopperBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="grasshopperHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </radialGradient>
        {/* Leg gradient */}
        <linearGradient id="grasshopperLegGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Wing gradient */}
        <linearGradient id="grasshopperWingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9ACD32" />
          <stop offset="50%" stopColor="#7CFC00" />
          <stop offset="100%" stopColor="#6B8E23" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="grasshopperEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="58" rx="18" ry="3" fill="rgba(0,0,0,0.15)" />

      {/* Back jumping leg */}
      <path d="M38 44 Q50 34 54 48 Q56 56 50 54" stroke="url(#grasshopperLegGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Leg segments/joints */}
      <circle cx="46" cy="38" r="2" fill="#228B22" />
      <circle cx="54" cy="50" r="2" fill="#228B22" />
      {/* Leg spines */}
      <path d="M48 40 L50 38" stroke="#006400" strokeWidth="1" />
      <path d="M50 42 L52 40" stroke="#006400" strokeWidth="1" />
      <path d="M52 46 L54 44" stroke="#006400" strokeWidth="1" />

      {/* Front leg */}
      <path d="M26 44 Q20 48 18 56" stroke="url(#grasshopperLegGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="18" cy="56" r="1.5" fill="#228B22" />

      {/* Middle leg */}
      <path d="M30 44 Q28 50 26 56" stroke="url(#grasshopperLegGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="26" cy="56" r="1.5" fill="#228B22" />

      {/* Wings (folded) */}
      <ellipse cx="34" cy="34" rx="12" ry="4" fill="url(#grasshopperWingGradient)" opacity="0.6" />
      <path d="M24 34 L44 34" stroke="#6B8E23" strokeWidth="0.5" opacity="0.5" />
      <path d="M26 32 L42 32" stroke="#6B8E23" strokeWidth="0.5" opacity="0.3" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="36" rx="16" ry="10" fill="url(#grasshopperBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="32" rx="8" ry="4" fill="rgba(255,255,255,0.2)" />
      {/* Body segments */}
      <path d="M22 36 L22 40" stroke="#228B22" strokeWidth="0.5" opacity="0.5" />
      <path d="M28 36 L28 42" stroke="#228B22" strokeWidth="0.5" opacity="0.5" />
      <path d="M34 36 L34 42" stroke="#228B22" strokeWidth="0.5" opacity="0.5" />
      <path d="M40 36 L40 40" stroke="#228B22" strokeWidth="0.5" opacity="0.5" />

      {/* Head with gradient */}
      <circle cx="18" cy="32" r="9" fill="url(#grasshopperHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="15" cy="29" rx="4" ry="2" fill="rgba(255,255,255,0.2)" />

      {/* Compound eye with detail */}
      <circle cx="15" cy="30" r="4" fill="url(#grasshopperEyeGradient)" />
      {/* Eye facets */}
      <circle cx="14" cy="29" r="0.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="16" cy="29" r="0.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="15" cy="31" r="0.5" fill="rgba(255,255,255,0.3)" />
      {/* Eye highlight */}
      <circle cx="13" cy="28" r="1" fill="white" opacity="0.5" />

      {/* Antennae with detail */}
      <path d="M12 26 L8 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M14 24 L12 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Antenna tips */}
      <circle cx="8" cy="18" r="1" fill="#228B22" />
      <circle cx="12" cy="14" r="1" fill="#228B22" />

      {/* Mouth parts */}
      <path d="M10 34 L8 36" stroke="#228B22" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 35 L10 38" stroke="#228B22" strokeWidth="1" strokeLinecap="round" />

      {/* Thorax detail */}
      <ellipse cx="24" cy="34" rx="4" ry="6" fill={color} opacity="0.8" />
      <ellipse cx="24" cy="33" rx="2" ry="3" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}
