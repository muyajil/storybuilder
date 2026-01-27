/**
 * Starfish Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Starfish({ size = 64, color = '#FF6347' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="starfishBodyGradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FF8060" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#D44030" />
        </radialGradient>
        {/* Center gradient */}
        <radialGradient id="starfishCenterGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFA080" />
          <stop offset="50%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#E07000" />
        </radialGradient>
        {/* Arm highlight gradient */}
        <linearGradient id="starfishArmHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFA080" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF6347" stopOpacity="0" />
        </linearGradient>
        {/* Texture dot gradient */}
        <radialGradient id="starfishDotGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB090" />
          <stop offset="100%" stopColor="#FF8060" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="starfishEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="56" rx="18" ry="4" fill="#A03020" opacity="0.25" />

      {/* Main star body */}
      <polygon
        points="32,8 38,24 56,24 42,36 48,54 32,44 16,54 22,36 8,24 26,24"
        fill="url(#starfishBodyGradient)"
      />

      {/* Arm highlights */}
      {/* Top arm */}
      <polygon points="32,10 34,20 30,20" fill="url(#starfishArmHighlight)" />
      {/* Top right arm */}
      <polygon points="52,26 42,28 44,24" fill="url(#starfishArmHighlight)" />
      {/* Bottom right arm */}
      <polygon points="46,50 40,38 44,36" fill="url(#starfishArmHighlight)" />
      {/* Bottom left arm */}
      <polygon points="18,50 24,38 20,36" fill="url(#starfishArmHighlight)" />
      {/* Top left arm */}
      <polygon points="12,26 22,28 20,24" fill="url(#starfishArmHighlight)" />

      {/* Arm texture - bumpy lines */}
      <path d="M32 12 L32 22" stroke="#D44030" strokeWidth="0.8" opacity="0.4" />
      <path d="M50 26 L40 30" stroke="#D44030" strokeWidth="0.8" opacity="0.4" />
      <path d="M44 48 L38 38" stroke="#D44030" strokeWidth="0.8" opacity="0.4" />
      <path d="M20 48 L26 38" stroke="#D44030" strokeWidth="0.8" opacity="0.4" />
      <path d="M14 26 L24 30" stroke="#D44030" strokeWidth="0.8" opacity="0.4" />

      {/* Texture dots on arms */}
      {/* Top arm */}
      <circle cx="32" cy="14" r="1.5" fill="url(#starfishDotGradient)" />
      <circle cx="31" cy="18" r="1" fill="url(#starfishDotGradient)" />
      <circle cx="33" cy="18" r="1" fill="url(#starfishDotGradient)" />

      {/* Top right arm */}
      <circle cx="48" cy="25" r="1.5" fill="url(#starfishDotGradient)" />
      <circle cx="44" cy="27" r="1" fill="url(#starfishDotGradient)" />

      {/* Bottom right arm */}
      <circle cx="44" cy="46" r="1.5" fill="url(#starfishDotGradient)" />
      <circle cx="42" cy="42" r="1" fill="url(#starfishDotGradient)" />

      {/* Bottom left arm */}
      <circle cx="20" cy="46" r="1.5" fill="url(#starfishDotGradient)" />
      <circle cx="22" cy="42" r="1" fill="url(#starfishDotGradient)" />

      {/* Top left arm */}
      <circle cx="16" cy="25" r="1.5" fill="url(#starfishDotGradient)" />
      <circle cx="20" cy="27" r="1" fill="url(#starfishDotGradient)" />

      {/* Center body */}
      <circle cx="32" cy="32" r="8" fill="url(#starfishCenterGradient)" />

      {/* Center highlight */}
      <ellipse cx="30" cy="30" rx="3" ry="2.5" fill="#FFB090" opacity="0.5" />

      {/* Inner center */}
      <circle cx="32" cy="32" r="4" fill={color} />
      <circle cx="32" cy="32" r="2" fill="#D44030" />

      {/* Center texture dots */}
      <circle cx="28" cy="30" r="0.8" fill="#FFB090" opacity="0.6" />
      <circle cx="36" cy="30" r="0.8" fill="#FFB090" opacity="0.6" />
      <circle cx="30" cy="36" r="0.8" fill="#FFB090" opacity="0.6" />
      <circle cx="34" cy="36" r="0.8" fill="#FFB090" opacity="0.6" />

      {/* Cute face */}
      {/* Eyes */}
      <circle cx="28" cy="30" r="2" fill="white" />
      <circle cx="36" cy="30" r="2" fill="white" />
      <circle cx="28" cy="30" r="1.2" fill="url(#starfishEyeGradient)" />
      <circle cx="36" cy="30" r="1.2" fill="url(#starfishEyeGradient)" />
      {/* Eye shine */}
      <circle cx="28.5" cy="29.5" r="0.4" fill="white" />
      <circle cx="36.5" cy="29.5" r="0.4" fill="white" />

      {/* Smile */}
      <path d="M30 34 Q32 36 34 34" stroke="#D44030" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Cheek blush */}
      <circle cx="26" cy="32" r="1.5" fill="#FF8080" opacity="0.4" />
      <circle cx="38" cy="32" r="1.5" fill="#FF8080" opacity="0.4" />

      {/* Bubbles */}
      <circle cx="50" cy="14" r="2" fill="#E8F0FF" opacity="0.4" />
      <circle cx="12" cy="18" r="1.5" fill="#E8F0FF" opacity="0.3" />
      <circle cx="54" cy="40" r="1" fill="#E8F0FF" opacity="0.3" />
    </svg>
  );
}
