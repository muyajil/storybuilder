/**
 * Manta Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Manta({ size = 64, color = '#2F4F4F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body top gradient */}
        <radialGradient id="mantaBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4A6A6A" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1A2F2F" />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="mantaBellyGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="mantaWingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1A2F2F" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#1A2F2F" />
        </linearGradient>
        {/* Cephalic fin gradient */}
        <linearGradient id="mantaFinGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#1A2F2F" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="mantaTailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#1A2F2F" />
        </linearGradient>
        {/* Spot pattern gradient */}
        <radialGradient id="mantaSpotGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="54" rx="26" ry="6" fill="rgba(0,0,0,0.15)" />

      {/* Tail */}
      <path d="M32 48 L32 62" stroke="url(#mantaTailGradient)" strokeWidth="5" strokeLinecap="round" />
      {/* Tail detail */}
      <path d="M32 50 L32 60" stroke="#1A2F2F" strokeWidth="2" />

      {/* Main body/wings */}
      <ellipse cx="32" cy="32" rx="30" ry="17" fill="url(#mantaBodyGradient)" />

      {/* Wing tips with gradient */}
      <polygon points="2,30 8,22 18,32" fill="url(#mantaWingGradient)" />
      <polygon points="62,30 56,22 46,32" fill="url(#mantaWingGradient)" />

      {/* Body highlight */}
      <ellipse cx="32" cy="28" rx="18" ry="8" fill="rgba(255,255,255,0.1)" />

      {/* Pattern spots on top */}
      <circle cx="20" cy="28" r="3" fill="url(#mantaSpotGradient)" />
      <circle cx="44" cy="28" r="3" fill="url(#mantaSpotGradient)" />
      <circle cx="32" cy="24" r="2" fill="url(#mantaSpotGradient)" />
      <circle cx="26" cy="32" r="2" fill="url(#mantaSpotGradient)" />
      <circle cx="38" cy="32" r="2" fill="url(#mantaSpotGradient)" />

      {/* Gill slits on top */}
      <path d="M24 36 L20 40" stroke="#1A2F2F" strokeWidth="1" opacity="0.5" />
      <path d="M28 37 L25 41" stroke="#1A2F2F" strokeWidth="1" opacity="0.5" />
      <path d="M36 37 L39 41" stroke="#1A2F2F" strokeWidth="1" opacity="0.5" />
      <path d="M40 36 L44 40" stroke="#1A2F2F" strokeWidth="1" opacity="0.5" />

      {/* Belly (white underside) */}
      <ellipse cx="32" cy="38" rx="20" ry="10" fill="url(#mantaBellyGradient)" />
      {/* Belly gill markings */}
      <path d="M22 40 L18 44" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
      <path d="M26 41 L23 45" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
      <path d="M38 41 L41 45" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
      <path d="M42 40 L46 44" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />

      {/* Cephalic fins (horn-like) */}
      <polygon points="18,26 14,18 24,24" fill="url(#mantaFinGradient)" />
      <polygon points="46,26 50,18 40,24" fill="url(#mantaFinGradient)" />
      {/* Fin highlights */}
      <path d="M18 24 L16 20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <path d="M46 24 L48 20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

      {/* Eyes */}
      <ellipse cx="18" cy="28" rx="3" ry="2.5" fill="black" />
      <ellipse cx="46" cy="28" rx="3" ry="2.5" fill="black" />
      {/* Eye highlights */}
      <circle cx="17" cy="27" r="1" fill="white" opacity="0.7" />
      <circle cx="45" cy="27" r="1" fill="white" opacity="0.7" />

      {/* Mouth */}
      <path d="M26 34 Q32 38 38 34" stroke="#1A2F2F" strokeWidth="1.5" fill="none" />

      {/* Wing edge detail */}
      <path d="M4 30 Q10 34 18 34" stroke="#1A2F2F" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M60 30 Q54 34 46 34" stroke="#1A2F2F" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Subtle water shimmer effect */}
      <ellipse cx="10" cy="26" rx="2" ry="1" fill="rgba(255,255,255,0.2)" />
      <ellipse cx="54" cy="26" rx="2" ry="1" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}
