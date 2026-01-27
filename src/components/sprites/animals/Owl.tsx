/**
 * Owl Sprite Component
 * Enhanced with gradients, feather texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Owl({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="owlBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#6B3A0F" stopOpacity="1" />
          <stop offset="100%" stopColor="#4A2A08" stopOpacity="1" />
        </radialGradient>
        {/* Face gradient */}
        <radialGradient id="owlFaceGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#F5E6D3" stopOpacity="1" />
          <stop offset="100%" stopColor="#DEB887" stopOpacity="1" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="owlWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#4A2A08" stopOpacity="1" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="owlEyeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="60%" stopColor="#FF8C00" stopOpacity="1" />
          <stop offset="100%" stopColor="#B8860B" stopOpacity="1" />
        </radialGradient>
        {/* Beak gradient */}
        <linearGradient id="owlBeakGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFB347" stopOpacity="1" />
          <stop offset="100%" stopColor="#CC8800" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="owlHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Body */}
      <ellipse cx="32" cy="40" rx="18" ry="20" fill="url(#owlBodyGradient)" />

      {/* Body feather pattern */}
      <ellipse cx="32" cy="48" rx="12" ry="10" fill="#6B3A0F" opacity="0.4" />
      <path d="M24 42 Q26 46 24 50" stroke="#4A2A08" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M32 42 Q34 46 32 50" stroke="#4A2A08" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M40 42 Q38 46 40 50" stroke="#4A2A08" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Ear tufts */}
      <polygon points="16,24 22,14 28,24" fill="url(#owlBodyGradient)" />
      <polygon points="36,24 42,14 48,24" fill="url(#owlBodyGradient)" />
      <polygon points="18,24 22,16 26,24" fill="#6B3A0F" opacity="0.5" />
      <polygon points="38,24 42,16 46,24" fill="#6B3A0F" opacity="0.5" />

      {/* Face disk */}
      <circle cx="32" cy="34" r="16" fill="url(#owlFaceGradient)" />

      {/* Face disk pattern */}
      <circle cx="32" cy="34" r="14" fill="none" stroke="#D2B48C" strokeWidth="1" opacity="0.5" />
      <circle cx="32" cy="34" r="11" fill="none" stroke="#D2B48C" strokeWidth="0.5" opacity="0.3" />

      {/* Eyes - large and expressive */}
      <circle cx="24" cy="32" r="8" fill="white" />
      <circle cx="40" cy="32" r="8" fill="white" />
      <circle cx="24" cy="32" r="6" fill="url(#owlEyeGradient)" />
      <circle cx="40" cy="32" r="6" fill="url(#owlEyeGradient)" />
      <circle cx="24" cy="32" r="3.5" fill="black" />
      <circle cx="40" cy="32" r="3.5" fill="black" />

      {/* Eye highlights */}
      <circle cx="22" cy="30" r="2" fill="white" />
      <circle cx="38" cy="30" r="2" fill="white" />
      <circle cx="25" cy="33" r="1" fill="white" opacity="0.5" />
      <circle cx="41" cy="33" r="1" fill="white" opacity="0.5" />

      {/* Beak */}
      <polygon points="32,38 27,46 37,46" fill="url(#owlBeakGradient)" />
      <polygon points="32,38 29,44 35,44" fill="#FFD700" opacity="0.3" />

      {/* Wings */}
      <ellipse cx="14" cy="44" rx="7" ry="14" fill="url(#owlWingGradient)" />
      <ellipse cx="50" cy="44" rx="7" ry="14" fill="url(#owlWingGradient)" />

      {/* Wing feather details */}
      <path d="M10 38 Q12 44 10 50" stroke="#4A2A08" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M14 36 Q16 44 14 52" stroke="#4A2A08" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M54 38 Q52 44 54 50" stroke="#4A2A08" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M50 36 Q48 44 50 52" stroke="#4A2A08" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Feet */}
      <path d="M24 58 L20 64 M24 58 L24 64 M24 58 L28 64" stroke="url(#owlBeakGradient)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 58 L36 64 M40 58 L40 64 M40 58 L44 64" stroke="url(#owlBeakGradient)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
