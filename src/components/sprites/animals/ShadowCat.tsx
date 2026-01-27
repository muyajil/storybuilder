/**
 * ShadowCat Sprite Component
 * Enhanced with gradients, shadow effects, and mysterious glowing features
 */

import type { SpriteProps } from '../types';

export function ShadowCat({ size = 64, color = '#2F2F4F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient - deep shadow */}
        <radialGradient id="shadowCatBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3D3D5C" stopOpacity="0.95" />
          <stop offset="70%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1A1A2E" stopOpacity="0.85" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="shadowCatHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3D3D5C" stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </radialGradient>
        {/* Glowing eye gradient */}
        <radialGradient id="shadowCatEyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF00" stopOpacity="1" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFA500" stopOpacity="0.8" />
        </radialGradient>
        {/* Shadow aura */}
        <radialGradient id="shadowCatAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="70%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0.5" />
        </radialGradient>
        {/* Dark mist gradient */}
        <radialGradient id="shadowCatMist" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A1A2E" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1A1A2E" stopOpacity="0" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="shadowCatNoseGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#6B5B95" stopOpacity="1" />
          <stop offset="100%" stopColor="#4B0082" stopOpacity="1" />
        </radialGradient>
        {/* Subtle highlight */}
        <radialGradient id="shadowCatHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#6B6B8D" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#6B6B8D" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadow aura around the cat */}
      <ellipse cx="36" cy="42" rx="28" ry="20" fill="url(#shadowCatAura)" />

      {/* Shadow mist particles */}
      <circle cx="16" cy="36" r="4" fill="url(#shadowCatMist)" />
      <circle cx="8" cy="44" r="3" fill="url(#shadowCatMist)" />
      <circle cx="58" cy="50" r="3" fill="url(#shadowCatMist)" />

      {/* Shadow tail with wispy effect */}
      <path d="M8 32 Q2 22 10 18 Q6 26 14 26" fill="url(#shadowCatBodyGradient)" />
      <path d="M10 24 Q4 20 8 16" stroke={color} strokeWidth="2" fill="none" opacity="0.5" />

      {/* Legs */}
      <rect x="22" y="52" width="6" height="12" rx="3" fill="url(#shadowCatBodyGradient)" />
      <rect x="38" y="52" width="6" height="12" rx="3" fill="url(#shadowCatBodyGradient)" />

      {/* Paws with shadow wisps */}
      <ellipse cx="25" cy="62" rx="4" ry="2" fill="#1A1A2E" />
      <ellipse cx="41" cy="62" rx="4" ry="2" fill="#1A1A2E" />

      {/* Body */}
      <ellipse cx="32" cy="44" rx="16" ry="12" fill="url(#shadowCatBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="40" rx="8" ry="6" fill="url(#shadowCatHighlight)" />

      {/* Head */}
      <circle cx="48" cy="32" r="14" fill="url(#shadowCatHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="44" cy="26" rx="7" ry="5" fill="url(#shadowCatHighlight)" />

      {/* Pointed ears */}
      <polygon points="38,20 32,4 44,14" fill="url(#shadowCatHeadGradient)" />
      <polygon points="56,18 60,2 64,14" fill="url(#shadowCatHeadGradient)" />

      {/* Inner ears - slightly visible */}
      <polygon points="38,18 34,8 42,14" fill="#3D3D5C" opacity="0.4" />
      <polygon points="56,17 58,6 62,14" fill="#3D3D5C" opacity="0.4" />

      {/* Glowing eyes - main feature */}
      <ellipse cx="44" cy="30" rx="6" ry="5.5" fill="url(#shadowCatEyeGlow)" />
      <ellipse cx="54" cy="30" rx="6" ry="5.5" fill="url(#shadowCatEyeGlow)" />

      {/* Eye glow aura */}
      <ellipse cx="44" cy="30" rx="8" ry="7" fill="#FFD700" opacity="0.2" />
      <ellipse cx="54" cy="30" rx="8" ry="7" fill="#FFD700" opacity="0.2" />

      {/* Slit pupils */}
      <ellipse cx="44" cy="30" rx="2" ry="5" fill="#1A1A2E" />
      <ellipse cx="54" cy="30" rx="2" ry="5" fill="#1A1A2E" />

      {/* Eye shine */}
      <circle cx="42" cy="28" r="1.5" fill="white" opacity="0.7" />
      <circle cx="52" cy="28" r="1.5" fill="white" opacity="0.7" />

      {/* Nose */}
      <polygon points="49,36 46,40 52,40" fill="url(#shadowCatNoseGradient)" />

      {/* Whiskers - dark and ethereal */}
      <line x1="46" y1="38" x2="36" y2="36" stroke="#4B4B6B" strokeWidth="1" opacity="0.6" />
      <line x1="46" y1="40" x2="36" y2="42" stroke="#4B4B6B" strokeWidth="1" opacity="0.6" />
      <line x1="52" y1="38" x2="62" y2="36" stroke="#4B4B6B" strokeWidth="1" opacity="0.6" />
      <line x1="52" y1="40" x2="62" y2="42" stroke="#4B4B6B" strokeWidth="1" opacity="0.6" />

      {/* Mouth */}
      <path d="M47 40 Q49 42 51 40" stroke="#4B0082" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Floating shadow particles */}
      <circle cx="20" cy="28" r="2" fill={color} opacity="0.4" />
      <circle cx="14" cy="38" r="1.5" fill={color} opacity="0.3" />
      <circle cx="60" cy="46" r="2" fill={color} opacity="0.4" />
      <circle cx="54" cy="54" r="1.5" fill={color} opacity="0.3" />

      {/* Mysterious sparkles near eyes */}
      <circle cx="38" cy="24" r="1" fill="#FFD700" opacity="0.5" />
      <circle cx="60" cy="26" r="0.8" fill="#FFD700" opacity="0.4" />
    </svg>
  );
}
