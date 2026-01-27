/**
 * Otter Sprite Component
 * Enhanced with gradients, fur texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Otter({ size = 64, color = '#8B6914' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="otterBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#6B4F0F" stopOpacity="1" />
          <stop offset="100%" stopColor="#4A3A0A" stopOpacity="1" />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="otterBellyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E8DCC8" stopOpacity="1" />
          <stop offset="100%" stopColor="#D2B48C" stopOpacity="1" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="otterHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#6B4F0F" stopOpacity="1" />
        </radialGradient>
        {/* Highlight */}
        <radialGradient id="otterHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Eye shine */}
        <radialGradient id="otterEyeShine" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3D2B1F" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="1" />
        </radialGradient>
      </defs>

      {/* Tail */}
      <path d="M32 54 Q40 58 48 56 Q52 54 50 50" stroke="url(#otterBodyGradient)" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* Body */}
      <ellipse cx="32" cy="36" rx="14" ry="18" fill="url(#otterBodyGradient)" />

      {/* Belly */}
      <ellipse cx="32" cy="44" rx="10" ry="10" fill="url(#otterBellyGradient)" />

      {/* Belly highlight */}
      <ellipse cx="30" cy="40" rx="6" ry="5" fill="white" opacity="0.2" />

      {/* Front paws */}
      <ellipse cx="22" cy="48" rx="5" ry="3" fill="#5D4E37" />
      <ellipse cx="42" cy="48" rx="5" ry="3" fill="#5D4E37" />

      {/* Head */}
      <circle cx="32" cy="20" r="12" fill="url(#otterHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="28" cy="14" rx="6" ry="5" fill="url(#otterHighlight)" />

      {/* Face patch */}
      <ellipse cx="32" cy="24" rx="8" ry="6" fill="url(#otterBellyGradient)" />

      {/* Ears */}
      <circle cx="22" cy="12" r="4" fill={color} />
      <circle cx="42" cy="12" r="4" fill={color} />
      <circle cx="22" cy="12" r="2" fill="#D2B48C" opacity="0.6" />
      <circle cx="42" cy="12" r="2" fill="#D2B48C" opacity="0.6" />

      {/* Eyes */}
      <ellipse cx="27" cy="18" rx="3" ry="2.5" fill="#1a1a1a" />
      <ellipse cx="37" cy="18" rx="3" ry="2.5" fill="#1a1a1a" />
      <circle cx="26" cy="17" r="1" fill="white" />
      <circle cx="36" cy="17" r="1" fill="white" />

      {/* Nose */}
      <ellipse cx="32" cy="24" rx="2.5" ry="2" fill="#2F2F2F" />
      <ellipse cx="32" cy="23.5" rx="1" ry="0.5" fill="white" opacity="0.3" />

      {/* Whisker dots */}
      <circle cx="26" cy="26" r="0.8" fill="#5D4E37" />
      <circle cx="28" cy="27" r="0.8" fill="#5D4E37" />
      <circle cx="38" cy="26" r="0.8" fill="#5D4E37" />
      <circle cx="36" cy="27" r="0.8" fill="#5D4E37" />

      {/* Whiskers */}
      <line x1="24" y1="24" x2="16" y2="22" stroke="#8B7355" strokeWidth="0.8" opacity="0.6" />
      <line x1="24" y1="26" x2="16" y2="28" stroke="#8B7355" strokeWidth="0.8" opacity="0.6" />
      <line x1="40" y1="24" x2="48" y2="22" stroke="#8B7355" strokeWidth="0.8" opacity="0.6" />
      <line x1="40" y1="26" x2="48" y2="28" stroke="#8B7355" strokeWidth="0.8" opacity="0.6" />

      {/* Cute smile */}
      <path d="M30 27 Q32 29 34 27" stroke="#5D4E37" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}
