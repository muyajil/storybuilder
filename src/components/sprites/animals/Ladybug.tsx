/**
 * Ladybug Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Ladybug({ size = 64, color = '#FF0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Shell gradient */}
        <radialGradient id="ladybugShellGradient" cx="30%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC0000" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="ladybugHeadGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Spot gradient */}
        <radialGradient id="ladybugSpotGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="ladybugEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </radialGradient>
        {/* Leg gradient */}
        <linearGradient id="ladybugLegGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="56" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />

      {/* Legs */}
      {/* Left legs */}
      <path d="M20 32 Q12 28 8 32 Q6 36 10 38" stroke="url(#ladybugLegGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M18 38 Q10 38 6 42 Q4 46 8 48" stroke="url(#ladybugLegGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M18 44 Q12 48 10 54 Q8 58 12 58" stroke="url(#ladybugLegGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Right legs */}
      <path d="M44 32 Q52 28 56 32 Q58 36 54 38" stroke="url(#ladybugLegGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M46 38 Q54 38 58 42 Q60 46 56 48" stroke="url(#ladybugLegGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M46 44 Q52 48 54 54 Q56 58 52 58" stroke="url(#ladybugLegGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Shell (elytra) with gradient */}
      <ellipse cx="32" cy="38" rx="18" ry="16" fill="url(#ladybugShellGradient)" />
      {/* Shell highlight */}
      <ellipse cx="26" cy="32" rx="8" ry="6" fill="rgba(255,255,255,0.2)" />
      {/* Shell secondary highlight */}
      <ellipse cx="38" cy="42" rx="4" ry="3" fill="rgba(255,255,255,0.1)" />

      {/* Center line (wing division) */}
      <line x1="32" y1="22" x2="32" y2="54" stroke="#1A1A1A" strokeWidth="2.5" />
      {/* Line highlight */}
      <line x1="31" y1="24" x2="31" y2="52" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />

      {/* Spots with gradient */}
      {/* Left wing spots */}
      <circle cx="24" cy="32" r="4.5" fill="url(#ladybugSpotGradient)" />
      <circle cx="22" cy="44" r="3.5" fill="url(#ladybugSpotGradient)" />
      <circle cx="28" cy="48" r="2.5" fill="url(#ladybugSpotGradient)" />

      {/* Right wing spots */}
      <circle cx="40" cy="32" r="4.5" fill="url(#ladybugSpotGradient)" />
      <circle cx="42" cy="44" r="3.5" fill="url(#ladybugSpotGradient)" />
      <circle cx="36" cy="48" r="2.5" fill="url(#ladybugSpotGradient)" />

      {/* Pronotum (shield behind head) */}
      <ellipse cx="32" cy="24" rx="10" ry="6" fill="#1A1A1A" />
      {/* Pronotum white markings */}
      <circle cx="28" cy="24" r="1.5" fill="white" opacity="0.8" />
      <circle cx="36" cy="24" r="1.5" fill="white" opacity="0.8" />
      {/* Pronotum highlight */}
      <ellipse cx="30" cy="22" rx="3" ry="2" fill="rgba(255,255,255,0.1)" />

      {/* Head with gradient */}
      <circle cx="32" cy="18" r="9" fill="url(#ladybugHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="29" cy="15" rx="3" ry="2" fill="rgba(255,255,255,0.15)" />

      {/* Eyes with gradient */}
      <ellipse cx="28" cy="17" rx="3" ry="3.5" fill="url(#ladybugEyeGradient)" />
      <ellipse cx="36" cy="17" rx="3" ry="3.5" fill="url(#ladybugEyeGradient)" />
      {/* Eye pupils */}
      <circle cx="28" cy="17" r="1.5" fill="black" />
      <circle cx="36" cy="17" r="1.5" fill="black" />
      {/* Eye highlights */}
      <circle cx="27" cy="16" r="0.8" fill="white" />
      <circle cx="35" cy="16" r="0.8" fill="white" />

      {/* Antennae */}
      <path d="M28 12 Q24 6 22 4" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M36 12 Q40 6 42 4" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Antenna tips */}
      <circle cx="22" cy="4" r="1.5" fill="#2A2A2A" />
      <circle cx="42" cy="4" r="1.5" fill="#2A2A2A" />

      {/* Mouthparts */}
      <ellipse cx="32" cy="22" rx="2" ry="1" fill="#2A2A2A" />

      {/* Tiny wing gap detail */}
      <path d="M32 22 L32 24" stroke="rgba(255,0,0,0.3)" strokeWidth="1" />
    </svg>
  );
}
