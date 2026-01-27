/**
 * Raccoon Sprite Component
 * Enhanced with gradients, fur texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Raccoon({ size = 64, color = '#808080' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="raccoonBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#606060" stopOpacity="1" />
          <stop offset="100%" stopColor="#404040" stopOpacity="1" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="raccoonHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#606060" stopOpacity="1" />
        </radialGradient>
        {/* Face mask gradient */}
        <radialGradient id="raccoonMaskGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2D2D2D" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="1" />
        </radialGradient>
        {/* White face gradient */}
        <radialGradient id="raccoonFaceGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="#E8E8E8" stopOpacity="1" />
        </radialGradient>
        {/* Tail stripe gradient */}
        <linearGradient id="raccoonTailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#505050" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="raccoonHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Tail with stripes */}
      <path d="M48 40 Q58 38 56 50 Q54 58 50 54" stroke="url(#raccoonTailGradient)" strokeWidth="8" fill="none" strokeLinecap="round" />

      {/* Tail stripes */}
      <path d="M50 42 L56 46" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <path d="M51 48 L56 52" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <path d="M52 54 L54 56" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />

      {/* Back feet */}
      <ellipse cx="24" cy="52" rx="6" ry="4" fill="#2D2D2D" />
      <ellipse cx="40" cy="52" rx="6" ry="4" fill="#2D2D2D" />

      {/* Body */}
      <ellipse cx="32" cy="38" rx="16" ry="14" fill="url(#raccoonBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="26" cy="32" rx="8" ry="7" fill="url(#raccoonHighlight)" />

      {/* Body fur texture */}
      <path d="M24 34 Q22 38 24 42" stroke="#505050" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M40 34 Q42 38 40 42" stroke="#505050" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* Head */}
      <circle cx="32" cy="24" r="14" fill="url(#raccoonHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="26" cy="18" rx="8" ry="6" fill="url(#raccoonHighlight)" />

      {/* Ears */}
      <polygon points="24,10 20,2 28,10" fill="url(#raccoonHeadGradient)" />
      <polygon points="40,10 44,2 36,10" fill="url(#raccoonHeadGradient)" />

      {/* Inner ears */}
      <polygon points="24,10 22,4 27,10" fill="#505050" opacity="0.5" />
      <polygon points="40,10 42,4 37,10" fill="#505050" opacity="0.5" />

      {/* White face area */}
      <circle cx="32" cy="26" r="10" fill="url(#raccoonFaceGradient)" />

      {/* Face mask - eye patches */}
      <ellipse cx="24" cy="24" rx="7" ry="6" fill="url(#raccoonMaskGradient)" />
      <ellipse cx="40" cy="24" rx="7" ry="6" fill="url(#raccoonMaskGradient)" />

      {/* Eyes */}
      <circle cx="24" cy="24" r="4" fill="white" />
      <circle cx="40" cy="24" r="4" fill="white" />
      <circle cx="25" cy="24" r="2.5" fill="#2F1F1F" />
      <circle cx="41" cy="24" r="2.5" fill="#2F1F1F" />

      {/* Eye highlights */}
      <circle cx="23.5" cy="23" r="1" fill="white" />
      <circle cx="39.5" cy="23" r="1" fill="white" />
      <circle cx="26" cy="25" r="0.5" fill="white" opacity="0.5" />
      <circle cx="42" cy="25" r="0.5" fill="white" opacity="0.5" />

      {/* Nose */}
      <ellipse cx="32" cy="30" rx="3.5" ry="2.5" fill="#2D2D2D" />
      <ellipse cx="32" cy="29" rx="1.5" ry="0.8" fill="white" opacity="0.3" />

      {/* Mouth */}
      <path d="M32 32 L32 34" stroke="#404040" strokeWidth="1" />
      <path d="M30 35 Q32 34 34 35" stroke="#404040" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* White snout stripe */}
      <path d="M32 20 L32 28" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

      {/* Whiskers */}
      <line x1="28" y1="30" x2="20" y2="28" stroke="#505050" strokeWidth="0.5" opacity="0.5" />
      <line x1="28" y1="32" x2="20" y2="34" stroke="#505050" strokeWidth="0.5" opacity="0.5" />
      <line x1="36" y1="30" x2="44" y2="28" stroke="#505050" strokeWidth="0.5" opacity="0.5" />
      <line x1="36" y1="32" x2="44" y2="34" stroke="#505050" strokeWidth="0.5" opacity="0.5" />

      {/* Front paws */}
      <ellipse cx="24" cy="46" rx="5" ry="3" fill="#2D2D2D" />
      <ellipse cx="40" cy="46" rx="5" ry="3" fill="#2D2D2D" />
    </svg>
  );
}
