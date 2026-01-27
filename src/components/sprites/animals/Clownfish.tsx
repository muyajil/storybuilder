/**
 * Clownfish Sprite Component
 * Enhanced with gradients, scale shimmer, and cute features
 */

import type { SpriteProps } from '../types';

export function Clownfish({ size = 64, color = '#FF6347' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="clownfishBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF8C69" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* White stripe gradient */}
        <linearGradient id="clownfishStripeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F8F8F8" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
        {/* Stripe border - black outline */}
        <linearGradient id="clownfishStripeBorderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="clownfishTailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#FF8C69" />
        </linearGradient>
        {/* Fin gradient */}
        <linearGradient id="clownfishFinGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#FF8C69" stopOpacity="0.8" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="clownfishEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Shimmer gradient */}
        <linearGradient id="clownfishShimmerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Scale pattern */}
        <pattern id="clownfishScalePattern" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M0 2.5 Q2.5 0 5 2.5 Q2.5 5 0 2.5" fill="none" stroke="#CC4030" strokeWidth="0.3" opacity="0.3" />
        </pattern>
      </defs>

      {/* Tail fin */}
      <polygon points="52,32 64,22 64,42" fill="url(#clownfishTailGradient)" />
      {/* Tail fin rays */}
      <g stroke="#CC4030" strokeWidth="0.5" opacity="0.4">
        <line x1="54" y1="32" x2="62" y2="24" />
        <line x1="54" y1="32" x2="64" y2="32" />
        <line x1="54" y1="32" x2="62" y2="40" />
      </g>
      {/* Tail black edge */}
      <path d="M64 22 L64 42" stroke="#1a1a1a" strokeWidth="1.5" />

      {/* Dorsal fin (top) */}
      <path d="M20 18 Q32 8 44 18" fill="url(#clownfishFinGradient)" />
      {/* Dorsal fin rays */}
      <g stroke="#CC4030" strokeWidth="0.5" opacity="0.3">
        <line x1="24" y1="16" x2="26" y2="20" />
        <line x1="32" y1="12" x2="32" y2="18" />
        <line x1="40" y1="16" x2="38" y2="20" />
      </g>
      {/* Dorsal fin black edge */}
      <path d="M20 18 Q32 8 44 18" fill="none" stroke="#1a1a1a" strokeWidth="1" />

      {/* Anal fin (bottom) */}
      <path d="M24 46 Q32 54 40 46" fill="url(#clownfishFinGradient)" />
      <path d="M24 46 Q32 54 40 46" fill="none" stroke="#1a1a1a" strokeWidth="1" />

      {/* Body */}
      <ellipse cx="32" cy="32" rx="22" ry="16" fill="url(#clownfishBodyGradient)" />
      {/* Scale texture */}
      <ellipse cx="32" cy="32" rx="22" ry="16" fill="url(#clownfishScalePattern)" />
      {/* Body shimmer */}
      <ellipse cx="26" cy="26" rx="12" ry="8" fill="url(#clownfishShimmerGradient)" />

      {/* White stripes with black borders */}
      {/* Front stripe */}
      <ellipse cx="16" cy="32" rx="5" ry="14" fill="url(#clownfishStripeBorderGradient)" />
      <ellipse cx="16" cy="32" rx="3.5" ry="12" fill="url(#clownfishStripeGradient)" />

      {/* Middle stripe */}
      <ellipse cx="32" cy="32" rx="5" ry="14" fill="url(#clownfishStripeBorderGradient)" />
      <ellipse cx="32" cy="32" rx="3.5" ry="12" fill="url(#clownfishStripeGradient)" />

      {/* Back stripe */}
      <ellipse cx="48" cy="32" rx="5" ry="12" fill="url(#clownfishStripeBorderGradient)" />
      <ellipse cx="48" cy="32" rx="3.5" ry="10" fill="url(#clownfishStripeGradient)" />

      {/* Pectoral fin (side) */}
      <ellipse cx="22" cy="36" rx="6" ry="4" fill="url(#clownfishFinGradient)" transform="rotate(-20 22 36)" />
      <ellipse cx="22" cy="36" rx="6" ry="4" fill="none" stroke="#1a1a1a" strokeWidth="0.5" transform="rotate(-20 22 36)" />

      {/* Eye - large and cute */}
      <ellipse cx="10" cy="28" rx="5" ry="5.5" fill="white" />
      <ellipse cx="10" cy="28" rx="3.5" ry="4" fill="url(#clownfishEyeGradient)" />
      {/* Eye pupil highlight */}
      <circle cx="9" cy="27" r="1.2" fill="white" />
      <circle cx="11" cy="29" r="0.6" fill="white" opacity="0.5" />

      {/* Cute mouth */}
      <path d="M4 34 Q6 36 8 34" stroke="#CC4030" strokeWidth="1" fill="none" />

      {/* Rosy cheek */}
      <ellipse cx="8" cy="32" rx="2" ry="1.5" fill="#FFB6C1" opacity="0.4" />

      {/* Gill detail */}
      <path d="M14 30 Q12 32 14 34" stroke="#CC4030" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Extra scale shimmer spots */}
      <g fill="white" opacity="0.3">
        <circle cx="24" cy="30" r="1" />
        <circle cx="40" cy="28" r="0.8" />
        <circle cx="36" cy="34" r="0.6" />
      </g>

      {/* Nemo-style small fin details */}
      <ellipse cx="6" cy="32" rx="3" ry="2" fill={color} opacity="0.6" />
    </svg>
  );
}
