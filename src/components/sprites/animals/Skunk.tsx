/**
 * Skunk Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Skunk({ size = 64, color = '#1a1a1a' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="skunkBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2d2d2d" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>
        {/* Stripe gradient */}
        <linearGradient id="skunkStripeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f5f5f5" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </linearGradient>
        {/* Fur texture */}
        <linearGradient id="skunkFurHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3d3d3d" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="skunkTailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Eye shine */}
        <radialGradient id="skunkEyeShine" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="56" rx="18" ry="4" fill="#000" opacity="0.2" />

      {/* Body base */}
      <ellipse cx="32" cy="40" rx="16" ry="12" fill="url(#skunkBodyGradient)" />

      {/* Body top/back */}
      <path d="M20 40 L20 28 Q32 20 44 28 L44 40" fill="url(#skunkFurHighlight)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="36" rx="6" ry="4" fill="#3d3d3d" opacity="0.4" />

      {/* White stripe on body */}
      <path d="M32 28 L32 52" stroke="url(#skunkStripeGradient)" strokeWidth="7" strokeLinecap="round" />
      <path d="M32 28 L32 52" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.8" />

      {/* Head */}
      <circle cx="32" cy="26" r="10" fill="url(#skunkBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="30" cy="22" rx="4" ry="3" fill="#3d3d3d" opacity="0.5" />

      {/* White face patch */}
      <ellipse cx="32" cy="28" rx="6" ry="4" fill="url(#skunkEyeShine)" />

      {/* Eyes - white part */}
      <circle cx="28" cy="24" r="2.5" fill="url(#skunkEyeShine)" />
      <circle cx="36" cy="24" r="2.5" fill="url(#skunkEyeShine)" />

      {/* Eyes - pupils */}
      <circle cx="28" cy="24" r="1.2" fill="#1a1a1a" />
      <circle cx="36" cy="24" r="1.2" fill="#1a1a1a" />

      {/* Eye shine */}
      <circle cx="28.5" cy="23.5" r="0.5" fill="white" />
      <circle cx="36.5" cy="23.5" r="0.5" fill="white" />

      {/* Nose */}
      <ellipse cx="32" cy="30" rx="2.5" ry="2" fill="#2d2d2d" />
      <ellipse cx="32" cy="29.5" rx="1.5" ry="1" fill="#1a1a1a" />
      {/* Nose highlight */}
      <ellipse cx="31" cy="29" rx="0.7" ry="0.5" fill="#4d4d4d" opacity="0.6" />

      {/* Whiskers */}
      <path d="M26 29 L20 27" stroke="#555" strokeWidth="0.5" opacity="0.5" />
      <path d="M26 30 L20 31" stroke="#555" strokeWidth="0.5" opacity="0.5" />
      <path d="M38 29 L44 27" stroke="#555" strokeWidth="0.5" opacity="0.5" />
      <path d="M38 30 L44 31" stroke="#555" strokeWidth="0.5" opacity="0.5" />

      {/* Tail base */}
      <path d="M48 34 Q58 28 56 40 Q54 52 48 48" fill="url(#skunkTailGradient)" />

      {/* Tail white stripe */}
      <path d="M52 32 Q56 34 54 44 Q52 50 50 46" fill="url(#skunkStripeGradient)" />

      {/* Tail fur texture lines */}
      <path d="M50 36 Q54 38 53 44" stroke="#e8e8e8" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M52 34 Q55 36 54 42" stroke="#e8e8e8" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Ears */}
      <ellipse cx="25" cy="18" rx="3" ry="4" fill="url(#skunkBodyGradient)" />
      <ellipse cx="39" cy="18" rx="3" ry="4" fill="url(#skunkBodyGradient)" />
      <ellipse cx="25" cy="18" rx="1.5" ry="2" fill="#3d3d3d" />
      <ellipse cx="39" cy="18" rx="1.5" ry="2" fill="#3d3d3d" />

      {/* Feet */}
      <ellipse cx="24" cy="50" rx="4" ry="2" fill="#1a1a1a" />
      <ellipse cx="40" cy="50" rx="4" ry="2" fill="#1a1a1a" />
    </svg>
  );
}
