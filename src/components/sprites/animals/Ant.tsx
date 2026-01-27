/**
 * Ant Sprite Component
 * Enhanced with gradients, shading, and detailed features
 */

import type { SpriteProps } from '../types';

export function Ant({ size = 64, color = '#2F2F2F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradients */}
        <radialGradient id="antHeadGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        <radialGradient id="antThoraxGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3d3d3d" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        <radialGradient id="antAbdomenGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#454545" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Shine gradient */}
        <linearGradient id="antShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="antEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e0e0e0" />
          <stop offset="100%" stopColor="#cccccc" />
        </radialGradient>
      </defs>

      {/* Legs with segments */}
      <g stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round">
        {/* Back legs */}
        <path d="M38 38 L42 44 L46 50" />
        <path d="M40 38 L46 42 L54 46" />
        {/* Middle legs */}
        <path d="M32 38 L32 46 L32 54" />
        <path d="M30 38 L26 46 L22 52" />
        {/* Front legs */}
        <path d="M24 38 L20 44 L16 48" />
        <path d="M22 36 L16 38 L10 42" />
      </g>

      {/* Abdomen (back segment) */}
      <ellipse cx="50" cy="32" rx="10" ry="8" fill="url(#antAbdomenGradient)" />
      <ellipse cx="48" cy="30" rx="5" ry="3" fill="url(#antShineGradient)" />
      {/* Abdomen stripes */}
      <path d="M44 32 Q50 28 56 32" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M45 34 Q50 30 55 34" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Thorax (middle segment) */}
      <ellipse cx="34" cy="32" rx="10" ry="7" fill="url(#antThoraxGradient)" />
      <ellipse cx="32" cy="30" rx="4" ry="2.5" fill="url(#antShineGradient)" />

      {/* Head */}
      <circle cx="18" cy="30" r="9" fill="url(#antHeadGradient)" />
      <ellipse cx="16" cy="28" rx="4" ry="3" fill="url(#antShineGradient)" />

      {/* Eyes - large and expressive */}
      <ellipse cx="14" cy="28" rx="4" ry="4.5" fill="url(#antEyeGradient)" />
      <ellipse cx="14" cy="28" rx="2.5" ry="3" fill="#1a1a1a" />
      <circle cx="13" cy="27" r="1" fill="white" />
      <circle cx="15" cy="29" r="0.5" fill="white" opacity="0.5" />

      {/* Mandibles */}
      <path d="M10 34 Q6 36 8 38" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <path d="M10 34 Q8 38 10 40" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />

      {/* Antennae with detail */}
      <path d="M14 24 Q10 20 8 14" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M18 22 Q16 16 14 10" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Antennae tips */}
      <circle cx="8" cy="14" r="1.5" fill={color} />
      <circle cx="14" cy="10" r="1.5" fill={color} />

      {/* Texture details on body */}
      <circle cx="52" cy="30" r="0.5" fill="#1a1a1a" opacity="0.2" />
      <circle cx="48" cy="34" r="0.5" fill="#1a1a1a" opacity="0.2" />
      <circle cx="54" cy="33" r="0.5" fill="#1a1a1a" opacity="0.2" />
    </svg>
  );
}
