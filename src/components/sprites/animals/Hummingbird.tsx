/**
 * Hummingbird Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Hummingbird({ size = 64, color = '#00CED1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient - iridescent effect */}
        <linearGradient id="hummingbirdBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FFFF" />
          <stop offset="30%" stopColor={color} />
          <stop offset="60%" stopColor="#008B8B" />
          <stop offset="100%" stopColor="#006666" />
        </linearGradient>
        {/* Head gradient with iridescent sheen */}
        <radialGradient id="hummingbirdHeadGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#7FFFD4" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#008B8B" />
        </radialGradient>
        {/* Throat gorget gradient (ruby) */}
        <radialGradient id="hummingbirdGorgetGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="50%" stopColor="#FF1493" />
          <stop offset="100%" stopColor="#C71585" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="hummingbirdWingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#40E0D0" />
          <stop offset="100%" stopColor="rgba(0,206,209,0.3)" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="hummingbirdBeakGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2F2F2F" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="hummingbirdTailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#006666" />
        </linearGradient>
      </defs>

      {/* Motion blur lines for wings */}
      <ellipse cx="20" cy="30" rx="12" ry="5" fill="rgba(0,206,209,0.2)" />
      <ellipse cx="44" cy="30" rx="12" ry="5" fill="rgba(0,206,209,0.2)" />

      {/* Tail feathers */}
      <path d="M32 44 L28 56" stroke="url(#hummingbirdTailGradient)" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 44 L32 58" stroke="url(#hummingbirdTailGradient)" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 44 L36 56" stroke="url(#hummingbirdTailGradient)" strokeWidth="3" strokeLinecap="round" />
      {/* Tail feather tips */}
      <circle cx="28" cy="56" r="1.5" fill="#008B8B" />
      <circle cx="32" cy="58" r="1.5" fill="#008B8B" />
      <circle cx="36" cy="56" r="1.5" fill="#008B8B" />

      {/* Wings with gradient and motion effect */}
      <ellipse cx="18" cy="30" rx="12" ry="5" fill="url(#hummingbirdWingGradient)" opacity="0.8">
        <animate attributeName="ry" values="5;3;5" dur="0.1s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="46" cy="30" rx="12" ry="5" fill="url(#hummingbirdWingGradient)" opacity="0.8">
        <animate attributeName="ry" values="5;3;5" dur="0.1s" repeatCount="indefinite" />
      </ellipse>
      {/* Wing detail lines */}
      <path d="M12 30 L24 30" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
      <path d="M40 30 L52 30" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="34" rx="10" ry="13" fill="url(#hummingbirdBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="29" cy="30" rx="4" ry="6" fill="rgba(255,255,255,0.15)" />
      {/* Body iridescent shimmer */}
      <ellipse cx="34" cy="36" rx="3" ry="4" fill="rgba(127,255,212,0.2)" />

      {/* Throat gorget (colored throat patch) */}
      <ellipse cx="32" cy="28" rx="6" ry="4" fill="url(#hummingbirdGorgetGradient)" />
      <ellipse cx="31" cy="27" rx="2" ry="1.5" fill="rgba(255,255,255,0.3)" />

      {/* Head with gradient */}
      <circle cx="32" cy="18" r="9" fill="url(#hummingbirdHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="29" cy="14" rx="4" ry="3" fill="rgba(255,255,255,0.2)" />
      {/* Head iridescent patch */}
      <ellipse cx="35" cy="16" rx="3" ry="2" fill="rgba(0,255,255,0.2)" />

      {/* Beak with gradient */}
      <path d="M32 22 L32 40" stroke="url(#hummingbirdBeakGradient)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Beak highlight */}
      <path d="M31 24 L31 36" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />

      {/* Eyes with detail */}
      <circle cx="28" cy="16" r="3" fill="black" />
      <circle cx="36" cy="16" r="3" fill="black" />
      {/* Eye highlights */}
      <circle cx="27" cy="15" r="1" fill="white" />
      <circle cx="35" cy="15" r="1" fill="white" />
      {/* Secondary highlights */}
      <circle cx="29" cy="17" r="0.5" fill="white" opacity="0.5" />
      <circle cx="37" cy="17" r="0.5" fill="white" opacity="0.5" />

      {/* Crown feathers */}
      <circle cx="28" cy="10" r="1" fill="#00CED1" />
      <circle cx="32" cy="9" r="1.2" fill="#40E0D0" />
      <circle cx="36" cy="10" r="1" fill="#00CED1" />

      {/* Tiny feet */}
      <path d="M30 46 L28 50 L30 49 L32 50 L30 46" fill="#2F2F2F" />
      <path d="M34 46 L32 50 L34 49 L36 50 L34 46" fill="#2F2F2F" />
    </svg>
  );
}
