/**
 * Basketball Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Basketball({ size = 64, color = '#FF7F00' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Ball gradient */}
        <radialGradient id="basketballBallGradient" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC5500" />
        </radialGradient>
        {/* Ball shadow gradient */}
        <radialGradient id="basketballShadowGradient" cx="70%" cy="70%" r="50%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="#8B4500" stopOpacity="0.4" />
        </radialGradient>
        {/* Line gradient */}
        <linearGradient id="basketballLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Texture gradient */}
        <radialGradient id="basketballTextureGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="#CC5500" stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* Main ball */}
      <circle cx="32" cy="32" r="28" fill="url(#basketballBallGradient)" />

      {/* Ball shadow overlay */}
      <circle cx="32" cy="32" r="28" fill="url(#basketballShadowGradient)" />

      {/* Texture overlay for leather effect */}
      <circle cx="32" cy="32" r="28" fill="url(#basketballTextureGradient)" />

      {/* Leather texture dots */}
      <circle cx="20" cy="24" r="0.8" fill="#CC5500" opacity="0.3" />
      <circle cx="44" cy="40" r="0.8" fill="#CC5500" opacity="0.3" />
      <circle cx="38" cy="20" r="0.8" fill="#CC5500" opacity="0.3" />
      <circle cx="26" cy="44" r="0.8" fill="#CC5500" opacity="0.3" />
      <circle cx="48" cy="28" r="0.8" fill="#CC5500" opacity="0.3" />
      <circle cx="16" cy="36" r="0.8" fill="#CC5500" opacity="0.3" />

      {/* Ball outline */}
      <circle cx="32" cy="32" r="28" fill="none" stroke="#8B4500" strokeWidth="1.5" />

      {/* Highlight */}
      <ellipse cx="22" cy="20" rx="8" ry="6" fill="#FFB366" opacity="0.4" />
      <ellipse cx="20" cy="18" rx="4" ry="3" fill="#FFD699" opacity="0.5" />

      {/* Vertical center line */}
      <line x1="32" y1="4" x2="32" y2="60" stroke="url(#basketballLineGradient)" strokeWidth="2.5" />

      {/* Horizontal center line */}
      <line x1="4" y1="32" x2="60" y2="32" stroke="url(#basketballLineGradient)" strokeWidth="2.5" />

      {/* Left curved line */}
      <path d="M14 8 Q4 32 14 56" stroke="url(#basketballLineGradient)" strokeWidth="2.5" fill="none" />

      {/* Right curved line */}
      <path d="M50 8 Q60 32 50 56" stroke="url(#basketballLineGradient)" strokeWidth="2.5" fill="none" />

      {/* Line channel depth effect */}
      <line x1="32" y1="4" x2="32" y2="60" stroke="#1a1a1a" strokeWidth="1" opacity="0.3" />
      <line x1="4" y1="32" x2="60" y2="32" stroke="#1a1a1a" strokeWidth="1" opacity="0.3" />
      <path d="M14 8 Q4 32 14 56" stroke="#1a1a1a" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M50 8 Q60 32 50 56" stroke="#1a1a1a" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}
