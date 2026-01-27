/**
 * Football Sprite Component
 * Enhanced with gradients, realistic leather texture, and detailed stitching
 */

import type { SpriteProps } from '../types';

export function Football({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Leather gradient */}
        <radialGradient id="footballLeatherGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#C4956A" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#5C3317" />
        </radialGradient>
        {/* Highlight gradient */}
        <linearGradient id="footballHighlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A574" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8B4513" stopOpacity="0" />
        </linearGradient>
        {/* Lace area gradient */}
        <linearGradient id="footballLaceAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5C3317" />
          <stop offset="50%" stopColor="#4A2912" />
          <stop offset="100%" stopColor="#5C3317" />
        </linearGradient>
        {/* White lace gradient */}
        <linearGradient id="footballLaceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        {/* Shadow gradient */}
        <radialGradient id="footballShadowGradient" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#3D2410" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8B4513" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Main ball shape */}
      <ellipse cx="32" cy="32" rx="28" ry="17" fill="url(#footballLeatherGradient)" />

      {/* Leather texture panels */}
      <path d="M8 28 Q32 20 56 28" stroke="#6B3A1F" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M8 36 Q32 44 56 36" stroke="#6B3A1F" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Highlight on ball */}
      <ellipse cx="24" cy="26" rx="12" ry="6" fill="url(#footballHighlightGradient)" />

      {/* Seam lines (piping) */}
      <ellipse cx="32" cy="32" rx="28" ry="17" fill="none" stroke="#4A2912" strokeWidth="2" />

      {/* End caps shading */}
      <ellipse cx="6" cy="32" rx="4" ry="10" fill="#5C3317" opacity="0.3" />
      <ellipse cx="58" cy="32" rx="4" ry="10" fill="#5C3317" opacity="0.3" />

      {/* Lace area (recessed) */}
      <rect x="22" y="28" width="20" height="8" fill="url(#footballLaceAreaGradient)" rx="2" />

      {/* Main lace stripe */}
      <rect x="24" y="31" width="16" height="3" fill="url(#footballLaceGradient)" rx="1" />

      {/* Cross laces with detail */}
      <g stroke="url(#footballLaceGradient)" strokeWidth="2.5" strokeLinecap="round">
        <line x1="26" y1="28" x2="26" y2="36" />
        <line x1="30" y1="28" x2="30" y2="36" />
        <line x1="34" y1="28" x2="34" y2="36" />
        <line x1="38" y1="28" x2="38" y2="36" />
      </g>

      {/* Lace shadows */}
      <g stroke="#C0C0C0" strokeWidth="0.5" opacity="0.5">
        <line x1="27" y1="28" x2="27" y2="36" />
        <line x1="31" y1="28" x2="31" y2="36" />
        <line x1="35" y1="28" x2="35" y2="36" />
        <line x1="39" y1="28" x2="39" y2="36" />
      </g>

      {/* Lace knots at ends */}
      <circle cx="24" cy="32" r="1.5" fill="url(#footballLaceGradient)" />
      <circle cx="40" cy="32" r="1.5" fill="url(#footballLaceGradient)" />

      {/* Bottom shadow/ground reflection */}
      <ellipse cx="32" cy="48" rx="20" ry="4" fill="url(#footballShadowGradient)" opacity="0.4" />

      {/* Additional leather detail - stitching */}
      <path d="M10 32 Q20 24 32 24 Q44 24 54 32" stroke="#5C3317" strokeWidth="0.5" fill="none" strokeDasharray="2,2" opacity="0.3" />
      <path d="M10 32 Q20 40 32 40 Q44 40 54 32" stroke="#5C3317" strokeWidth="0.5" fill="none" strokeDasharray="2,2" opacity="0.3" />
    </svg>
  );
}
