/**
 * Stork Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Stork({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="storkBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#E8E8E8" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="storkWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="storkBeakGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6347" />
          <stop offset="50%" stopColor="#E54030" />
          <stop offset="100%" stopColor="#CC3020" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="storkLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF7050" />
          <stop offset="50%" stopColor="#FF6347" />
          <stop offset="100%" stopColor="#E54030" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="storkEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="30" cy="60" rx="12" ry="3" fill="#000" opacity="0.15" />

      {/* Legs */}
      <path d="M32 44 L32 58" stroke="url(#storkLegGradient)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M28 44 L24 58" stroke="url(#storkLegGradient)" strokeWidth="3.5" strokeLinecap="round" />

      {/* Leg highlights */}
      <path d="M32 46 L32 54" stroke="#FF8060" strokeWidth="1" opacity="0.5" />
      <path d="M28 46 L25 54" stroke="#FF8060" strokeWidth="1" opacity="0.5" />

      {/* Feet */}
      <path d="M28 58 L22 60 M32 58 L28 60 M32 58 L36 60" stroke="#E54030" strokeWidth="2" strokeLinecap="round" />

      {/* Body */}
      <ellipse cx="32" cy="30" rx="12" ry="14" fill="url(#storkBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="26" rx="6" ry="7" fill="#FFFFFF" opacity="0.6" />

      {/* Belly texture */}
      <ellipse cx="32" cy="36" rx="8" ry="6" fill="#F0F0F0" opacity="0.4" />

      {/* Wings - black tips */}
      <path d="M20 26 Q10 28 14 38" fill="url(#storkWingGradient)" />
      <path d="M20 26 Q14 28 16 35" fill="#3a3a3a" opacity="0.5" />

      <path d="M44 26 Q54 28 50 38" fill="url(#storkWingGradient)" />
      <path d="M44 26 Q50 28 48 35" fill="#3a3a3a" opacity="0.5" />

      {/* Wing feather details */}
      <path d="M14 32 L12 36" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      <path d="M16 30 L14 35" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      <path d="M50 32 L52 36" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      <path d="M48 30 L50 35" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />

      {/* Tail feathers */}
      <path d="M32 44 Q28 48 26 52" stroke={color} strokeWidth="2" fill="none" />
      <path d="M32 44 Q34 48 36 52" stroke={color} strokeWidth="2" fill="none" />

      {/* Head */}
      <circle cx="32" cy="14" r="8" fill="url(#storkBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="30" cy="12" rx="4" ry="3" fill="#FFFFFF" opacity="0.6" />

      {/* Beak */}
      <polygon points="32,18 32,28 48,22" fill="url(#storkBeakGradient)" />
      <polygon points="32,18 34,24 44,22" fill="#FF7050" opacity="0.4" />

      {/* Beak detail line */}
      <path d="M34 22 L44 21" stroke="#CC3020" strokeWidth="0.5" opacity="0.5" />

      {/* Beak nostril */}
      <circle cx="38" cy="21" r="0.8" fill="#CC3020" />

      {/* Eye */}
      <circle cx="28" cy="12" r="2.5" fill="white" />
      <circle cx="28" cy="12" r="1.8" fill="url(#storkEyeGradient)" />
      <circle cx="28.5" cy="11.5" r="0.6" fill="white" />

      {/* Red eye ring */}
      <circle cx="28" cy="12" r="3" stroke="#FF6347" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Cheek blush */}
      <circle cx="26" cy="16" r="1.5" fill="#FFB0A0" opacity="0.4" />

      {/* Head feather tuft */}
      <path d="M36 10 Q38 8 40 10 Q38 9 36 10" fill="#E8E8E8" />
    </svg>
  );
}
