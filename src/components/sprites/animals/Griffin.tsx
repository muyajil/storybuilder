/**
 * Griffin Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Griffin({ size = 64, color = '#DAA520' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Eagle head gradient */}
        <radialGradient id="griffinHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        {/* Lion body gradient */}
        <radialGradient id="griffinBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#CD853F" />
          <stop offset="70%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5D3A1A" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="griffinWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="griffinBeakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#D2691E" />
        </linearGradient>
        {/* Feather gradient */}
        <linearGradient id="griffinFeatherGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FAFAD2" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="griffinLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#3D2314" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="34" cy="60" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />

      {/* Tail feathers */}
      <path d="M52 42 Q58 40 56 48" fill="#8B4513" />
      <path d="M54 44 Q62 44 58 52" fill="#A0522D" />

      {/* Lion body with gradient */}
      <ellipse cx="36" cy="40" rx="16" ry="14" fill="url(#griffinBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="32" cy="36" rx="8" ry="6" fill="rgba(255,255,255,0.1)" />
      {/* Body fur texture */}
      <path d="M28 38 Q30 42 28 46" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />
      <path d="M34 40 Q36 44 34 48" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />
      <path d="M42 38 Q44 42 42 46" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />

      {/* Back wing */}
      <path d="M50 32 Q62 26 58 42 Q54 54 46 48" fill="url(#griffinWingGradient)" />
      {/* Back wing feather details */}
      <path d="M52 34 L56 30" stroke="#B8860B" strokeWidth="1" opacity="0.5" />
      <path d="M54 38 L58 36" stroke="#B8860B" strokeWidth="1" opacity="0.5" />
      <path d="M52 44 L56 44" stroke="#B8860B" strokeWidth="1" opacity="0.5" />

      {/* Front wing */}
      <path d="M18 32 Q6 26 12 42 Q16 54 24 48" fill="url(#griffinWingGradient)" />
      {/* Front wing feather details */}
      <path d="M16 34 L12 30" stroke="#B8860B" strokeWidth="1" opacity="0.5" />
      <path d="M14 38 L10 36" stroke="#B8860B" strokeWidth="1" opacity="0.5" />
      <path d="M16 44 L12 44" stroke="#B8860B" strokeWidth="1" opacity="0.5" />
      {/* Wing highlight */}
      <ellipse cx="16" cy="38" rx="4" ry="6" fill="rgba(255,255,255,0.15)" />

      {/* Eagle head with gradient */}
      <circle cx="24" cy="24" r="13" fill="url(#griffinHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="20" cy="18" rx="5" ry="3" fill="rgba(255,255,255,0.2)" />

      {/* Head feather texture */}
      <path d="M16 20 L14 18" stroke="#B8860B" strokeWidth="0.5" />
      <path d="M18 18 L16 15" stroke="#B8860B" strokeWidth="0.5" />
      <path d="M30 18 L32 15" stroke="#B8860B" strokeWidth="0.5" />

      {/* Ear tufts / Feather crests */}
      <polygon points="19,13 14,4 24,10" fill="url(#griffinFeatherGradient)" />
      <polygon points="29,13 34,4 24,10" fill="url(#griffinFeatherGradient)" />
      {/* Tuft highlights */}
      <path d="M18 10 L16 6" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
      <path d="M30 10 L32 6" stroke="#FFD700" strokeWidth="1" opacity="0.5" />

      {/* Eyes with detail */}
      <ellipse cx="20" cy="22" rx="4" ry="3.5" fill="white" />
      <ellipse cx="28" cy="22" rx="4" ry="3.5" fill="white" />
      <circle cx="20" cy="22" r="2.5" fill="#FF8C00" />
      <circle cx="28" cy="22" r="2.5" fill="#FF8C00" />
      <circle cx="20" cy="22" r="1.5" fill="black" />
      <circle cx="28" cy="22" r="1.5" fill="black" />
      {/* Eye highlights */}
      <circle cx="19" cy="21" r="0.8" fill="white" />
      <circle cx="27" cy="21" r="0.8" fill="white" />
      {/* Fierce eyebrow */}
      <path d="M16 19 L22 20" stroke="#B8860B" strokeWidth="1.5" />
      <path d="M32 19 L26 20" stroke="#B8860B" strokeWidth="1.5" />

      {/* Beak with gradient */}
      <polygon points="24,26 16,34 32,34" fill="url(#griffinBeakGradient)" />
      {/* Beak highlight */}
      <polygon points="24,27 20,32 24,32" fill="rgba(255,255,255,0.2)" />
      {/* Beak detail */}
      <path d="M20 30 L28 30" stroke="#D2691E" strokeWidth="0.5" />

      {/* Nostril */}
      <circle cx="22" cy="30" r="0.8" fill="#8B4513" />

      {/* Lion legs with talons */}
      <path d="M28 52 L24 60" stroke="url(#griffinLegGradient)" strokeWidth="5" strokeLinecap="round" />
      <path d="M44 52 L48 60" stroke="url(#griffinLegGradient)" strokeWidth="5" strokeLinecap="round" />

      {/* Talons */}
      <path d="M22 60 L20 64" stroke="#3D2314" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 61 L24 65" stroke="#3D2314" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 60 L28 64" stroke="#3D2314" strokeWidth="2" strokeLinecap="round" />
      <path d="M46 60 L44 64" stroke="#3D2314" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 61 L48 65" stroke="#3D2314" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 60 L52 64" stroke="#3D2314" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
