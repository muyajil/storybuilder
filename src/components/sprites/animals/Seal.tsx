/**
 * Seal Sprite Component
 * Enhanced with gradients, sleek texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Seal({ size = 64, color = '#696969' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="sealBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#808080" stopOpacity="1" />
          <stop offset="70%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#4A4A4A" stopOpacity="1" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="sealHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#808080" stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="sealBellyGradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#A0A0A0" stopOpacity="1" />
          <stop offset="100%" stopColor="#808080" stopOpacity="1" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="sealNoseGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#3D3D3D" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="1" />
        </radialGradient>
        {/* Flipper gradient */}
        <linearGradient id="sealFlipperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#4A4A4A" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="sealHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Tail flippers */}
      <path d="M6 40 Q0 34 4 30 Q8 34 4 40 Q0 46 4 50 Q8 46 4 40" fill="url(#sealFlipperGradient)" />

      {/* Tail flipper texture */}
      <path d="M4 34 Q6 38 4 42" stroke="#4A4A4A" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Body */}
      <ellipse cx="28" cy="40" rx="22" ry="12" fill="url(#sealBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="22" cy="34" rx="12" ry="6" fill="url(#sealHighlight)" />

      {/* Belly area */}
      <ellipse cx="28" cy="44" rx="16" ry="6" fill="url(#sealBellyGradient)" opacity="0.5" />

      {/* Body spots/markings */}
      <circle cx="20" cy="38" r="1.5" fill="#5A5A5A" opacity="0.3" />
      <circle cx="30" cy="42" r="1" fill="#5A5A5A" opacity="0.3" />
      <circle cx="36" cy="36" r="1.2" fill="#5A5A5A" opacity="0.3" />

      {/* Front flipper */}
      <ellipse cx="40" cy="48" rx="10" ry="5" fill="url(#sealFlipperGradient)" transform="rotate(-15 40 48)" />
      <path d="M36 48 Q40 50 44 48" stroke="#4A4A4A" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Head */}
      <circle cx="52" cy="36" r="12" fill="url(#sealHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="48" cy="30" rx="6" ry="5" fill="url(#sealHighlight)" />

      {/* Snout */}
      <ellipse cx="60" cy="40" rx="5" ry="4" fill="url(#sealHeadGradient)" />

      {/* Nose */}
      <ellipse cx="62" cy="38" rx="2.5" ry="2" fill="url(#sealNoseGradient)" />
      <ellipse cx="62" cy="37" rx="1" ry="0.5" fill="white" opacity="0.3" />

      {/* Eye */}
      <circle cx="54" cy="34" r="4.5" fill="white" />
      <circle cx="55" cy="34" r="3" fill="#1a1a1a" />

      {/* Eye highlight */}
      <circle cx="53.5" cy="32.5" r="1.5" fill="white" />
      <circle cx="56" cy="35" r="0.7" fill="white" opacity="0.5" />

      {/* Eyebrow area - slight shading */}
      <path d="M50 30 Q54 28 58 30" stroke="#5A5A5A" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Whisker dots */}
      <circle cx="58" cy="42" r="0.8" fill="#4A4A4A" />
      <circle cx="60" cy="40" r="0.8" fill="#4A4A4A" />
      <circle cx="60" cy="44" r="0.8" fill="#4A4A4A" />

      {/* Whiskers */}
      <line x1="60" y1="40" x2="66" y2="38" stroke="#505050" strokeWidth="0.8" opacity="0.6" />
      <line x1="60" y1="42" x2="66" y2="42" stroke="#505050" strokeWidth="0.8" opacity="0.6" />
      <line x1="60" y1="44" x2="66" y2="46" stroke="#505050" strokeWidth="0.8" opacity="0.6" />

      {/* Mouth - cute smile */}
      <path d="M58 46 Q62 48 64 46" stroke="#4A4A4A" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Ear */}
      <ellipse cx="48" cy="28" rx="2" ry="3" fill={color} />
    </svg>
  );
}
