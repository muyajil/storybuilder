/**
 * TennisBall Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function TennisBall({ size = 64, color = '#CCFF00' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Ball gradient */}
        <radialGradient id="tennisBallGradient" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#E6FF66" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#99CC00" />
        </radialGradient>
        {/* Fuzzy texture gradient */}
        <radialGradient id="tennisFuzzGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="80%" stopColor="#BBDD00" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#99AA00" stopOpacity="0.5" />
        </radialGradient>
        {/* Shadow gradient */}
        <radialGradient id="tennisShadowGradient" cx="50%" cy="100%" r="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        {/* Highlight gradient */}
        <radialGradient id="tennisHighlightGradient" cx="30%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        {/* Seam gradient */}
        <linearGradient id="tennisSeamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
      </defs>

      {/* Shadow under ball */}
      <ellipse cx="32" cy="60" rx="18" ry="4" fill="url(#tennisShadowGradient)" />

      {/* Main ball */}
      <circle cx="32" cy="32" r="28" fill="url(#tennisBallGradient)" />

      {/* Fuzzy texture overlay */}
      <circle cx="32" cy="32" r="28" fill="url(#tennisFuzzGradient)" />

      {/* Ball outline - subtle */}
      <circle cx="32" cy="32" r="27.5" fill="none" stroke="#99AA00" strokeWidth="1" />

      {/* Curved seam - left side */}
      <path
        d="M8 18 Q18 24 12 32 Q8 40 8 46"
        stroke="url(#tennisSeamGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {/* Seam inner line for depth */}
      <path
        d="M8 18 Q18 24 12 32 Q8 40 8 46"
        stroke="#E8E8E8"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Curved seam - right side */}
      <path
        d="M56 18 Q46 24 52 32 Q56 40 56 46"
        stroke="url(#tennisSeamGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {/* Seam inner line for depth */}
      <path
        d="M56 18 Q46 24 52 32 Q56 40 56 46"
        stroke="#E8E8E8"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Subtle fuzz texture lines */}
      <circle cx="32" cy="32" r="26" fill="none" stroke="#AACC00" strokeWidth="0.3" strokeDasharray="1,2" />
      <circle cx="32" cy="32" r="24" fill="none" stroke="#AACC00" strokeWidth="0.2" strokeDasharray="1,3" />
      <circle cx="32" cy="32" r="22" fill="none" stroke="#AACC00" strokeWidth="0.2" strokeDasharray="1,2" />

      {/* Highlight/shine */}
      <ellipse cx="24" cy="22" rx="10" ry="8" fill="url(#tennisHighlightGradient)" />

      {/* Small secondary highlight */}
      <ellipse cx="40" cy="40" rx="4" ry="3" fill="white" opacity="0.15" />
    </svg>
  );
}
