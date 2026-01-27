/**
 * Jellyfish Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Jellyfish({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Bell outer gradient */}
        <radialGradient id="jellyfishBellGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255,182,193,0.9)" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="rgba(199,21,133,0.7)" />
        </radialGradient>
        {/* Bell inner gradient */}
        <radialGradient id="jellyfishInnerGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="50%" stopColor="rgba(255,182,193,0.4)" />
          <stop offset="100%" stopColor="rgba(255,105,180,0.3)" />
        </radialGradient>
        {/* Tentacle gradient */}
        <linearGradient id="jellyfishTentacleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="rgba(255,105,180,0.6)" />
          <stop offset="100%" stopColor="rgba(255,105,180,0.2)" />
        </linearGradient>
        {/* Oral arms gradient */}
        <linearGradient id="jellyfishOralGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,182,193,0.8)" />
          <stop offset="100%" stopColor="rgba(255,105,180,0.4)" />
        </linearGradient>
        {/* Glow effect */}
        <radialGradient id="jellyfishGlowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="100%" stopColor="rgba(255,105,180,0)" />
        </radialGradient>
        {/* Bioluminescent spots */}
        <radialGradient id="jellyfishSpotGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(255,182,193,0.5)" />
        </radialGradient>
      </defs>

      {/* Ambient glow effect */}
      <ellipse cx="32" cy="24" rx="24" ry="20" fill="url(#jellyfishGlowGradient)" />

      {/* Bell (dome) with gradient */}
      <ellipse cx="32" cy="20" rx="20" ry="16" fill="url(#jellyfishBellGradient)" opacity="0.85" />
      {/* Bell highlight */}
      <ellipse cx="26" cy="14" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />

      {/* Inner bell structure */}
      <ellipse cx="32" cy="24" rx="16" ry="10" fill="url(#jellyfishInnerGradient)" />

      {/* Radial canals */}
      <path d="M32 12 L32 30" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <path d="M22 18 L42 26" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <path d="M42 18 L22 26" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />

      {/* Bioluminescent spots */}
      <circle cx="26" cy="18" r="2" fill="url(#jellyfishSpotGradient)" />
      <circle cx="38" cy="18" r="2" fill="url(#jellyfishSpotGradient)" />
      <circle cx="32" cy="24" r="1.5" fill="url(#jellyfishSpotGradient)" />
      <circle cx="28" cy="22" r="1" fill="url(#jellyfishSpotGradient)" />
      <circle cx="36" cy="22" r="1" fill="url(#jellyfishSpotGradient)" />

      {/* Bell edge frills */}
      <path d="M12 28 Q16 32 20 28 Q24 32 28 28 Q32 32 36 28 Q40 32 44 28 Q48 32 52 28"
            stroke={color} strokeWidth="2" fill="none" opacity="0.7" />

      {/* Oral arms (thick central tentacles) */}
      <path d="M28 32 Q24 42 28 52 Q24 48 26 58"
            stroke="url(#jellyfishOralGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M36 32 Q40 42 36 52 Q40 48 38 58"
            stroke="url(#jellyfishOralGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Oral arm highlights */}
      <path d="M27 34 Q24 42 27 50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
      <path d="M37 34 Q40 42 37 50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />

      {/* Tentacles with gradient and flowing motion */}
      <path d="M14 32 Q10 44 14 56 Q18 64 16 56"
            stroke="url(#jellyfishTentacleGradient)" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="d"
                 values="M14 32 Q10 44 14 56 Q18 64 16 56;M14 32 Q8 44 16 56 Q14 64 18 56;M14 32 Q10 44 14 56 Q18 64 16 56"
                 dur="3s" repeatCount="indefinite" />
      </path>

      <path d="M20 34 Q16 48 20 60"
            stroke="url(#jellyfishTentacleGradient)" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="d"
                 values="M20 34 Q16 48 20 60;M20 34 Q18 48 22 60;M20 34 Q16 48 20 60"
                 dur="2.5s" repeatCount="indefinite" />
      </path>

      <path d="M32 36 Q32 52 28 64"
            stroke="url(#jellyfishTentacleGradient)" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="d"
                 values="M32 36 Q32 52 28 64;M32 36 Q30 52 34 64;M32 36 Q32 52 28 64"
                 dur="2.8s" repeatCount="indefinite" />
      </path>

      <path d="M32 36 Q32 52 36 64"
            stroke="url(#jellyfishTentacleGradient)" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="d"
                 values="M32 36 Q32 52 36 64;M32 36 Q34 52 30 64;M32 36 Q32 52 36 64"
                 dur="2.6s" repeatCount="indefinite" />
      </path>

      <path d="M44 34 Q48 48 44 60"
            stroke="url(#jellyfishTentacleGradient)" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="d"
                 values="M44 34 Q48 48 44 60;M44 34 Q46 48 42 60;M44 34 Q48 48 44 60"
                 dur="2.7s" repeatCount="indefinite" />
      </path>

      <path d="M50 32 Q54 44 50 56 Q46 64 48 56"
            stroke="url(#jellyfishTentacleGradient)" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="d"
                 values="M50 32 Q54 44 50 56 Q46 64 48 56;M50 32 Q56 44 48 56 Q50 64 46 56;M50 32 Q54 44 50 56 Q46 64 48 56"
                 dur="3.2s" repeatCount="indefinite" />
      </path>

      {/* Small sparkle effects */}
      <circle cx="20" cy="12" r="1" fill="white" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="44" cy="14" r="0.8" fill="white" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
