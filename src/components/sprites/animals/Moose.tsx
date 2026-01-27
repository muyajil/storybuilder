/**
 * Moose Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Moose({ size = 64, color = '#5D4037' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="mooseBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#7B5B4A" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#3E2723" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="mooseHeadGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#7B5B4A" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#3E2723" />
        </radialGradient>
        {/* Antler gradient */}
        <linearGradient id="mooseAntlerGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3E2723" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#A0522D" />
        </linearGradient>
        {/* Nose gradient */}
        <radialGradient id="mooseNoseGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Leg gradient */}
        <linearGradient id="mooseLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#3E2723" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="62" rx="18" ry="3" fill="rgba(0,0,0,0.2)" />

      {/* Antlers with gradient */}
      {/* Left antler */}
      <path d="M18 20 L8 8 L4 12 L10 10 L8 16 L14 12 L12 18 L18 14" fill="url(#mooseAntlerGradient)" />
      {/* Left antler palm */}
      <ellipse cx="8" cy="10" rx="4" ry="3" fill="#8B4513" opacity="0.8" />
      {/* Left antler highlights */}
      <path d="M16 18 L12 14" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <path d="M12 16 L10 12" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Right antler */}
      <path d="M46 20 L56 8 L60 12 L54 10 L56 16 L50 12 L52 18 L46 14" fill="url(#mooseAntlerGradient)" />
      {/* Right antler palm */}
      <ellipse cx="56" cy="10" rx="4" ry="3" fill="#8B4513" opacity="0.8" />
      {/* Right antler highlights */}
      <path d="M48 18 L52 14" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <path d="M52 16 L54 12" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Legs with gradient */}
      <path d="M24 56 L24 64" stroke="url(#mooseLegGradient)" strokeWidth="5" strokeLinecap="round" />
      <path d="M40 56 L40 64" stroke="url(#mooseLegGradient)" strokeWidth="5" strokeLinecap="round" />
      {/* Hooves */}
      <rect x="21" y="62" width="6" height="3" fill="#1A1A1A" rx="1" />
      <rect x="37" y="62" width="6" height="3" fill="#1A1A1A" rx="1" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="44" rx="18" ry="14" fill="url(#mooseBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="26" cy="40" rx="8" ry="6" fill="rgba(255,255,255,0.1)" />
      {/* Body fur texture */}
      <path d="M22 42 Q24 44 22 46" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />
      <path d="M30 44 Q32 46 30 48" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />
      <path d="M40 42 Q42 44 40 46" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />

      {/* Shoulder hump (characteristic of moose) */}
      <ellipse cx="26" cy="36" rx="8" ry="6" fill={color} />
      <ellipse cx="26" cy="35" rx="4" ry="3" fill="rgba(255,255,255,0.1)" />

      {/* Head with gradient */}
      <ellipse cx="32" cy="26" rx="11" ry="14" fill="url(#mooseHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="28" cy="20" rx="4" ry="5" fill="rgba(255,255,255,0.1)" />

      {/* Bell (dewlap - characteristic beard) */}
      <path d="M32 38 Q30 44 32 48 Q34 44 32 38" fill={color} />
      <path d="M31 40 L31 46" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />

      {/* Muzzle */}
      <ellipse cx="32" cy="34" rx="8" ry="6" fill="#7B5B4A" />
      {/* Muzzle highlight */}
      <ellipse cx="30" cy="32" rx="3" ry="2" fill="rgba(255,255,255,0.1)" />

      {/* Nose with gradient */}
      <ellipse cx="32" cy="34" rx="5" ry="4" fill="url(#mooseNoseGradient)" />
      {/* Nose highlight */}
      <ellipse cx="30" cy="33" rx="2" ry="1.5" fill="rgba(255,255,255,0.15)" />
      {/* Nostrils */}
      <ellipse cx="30" cy="35" rx="1.5" ry="1" fill="#0A0A0A" />
      <ellipse cx="34" cy="35" rx="1.5" ry="1" fill="#0A0A0A" />

      {/* Eyes with detail */}
      <ellipse cx="27" cy="24" rx="3" ry="3.5" fill="white" />
      <ellipse cx="37" cy="24" rx="3" ry="3.5" fill="white" />
      <circle cx="28" cy="24" r="2" fill="#4A3728" />
      <circle cx="38" cy="24" r="2" fill="#4A3728" />
      <circle cx="28" cy="24" r="1" fill="black" />
      <circle cx="38" cy="24" r="1" fill="black" />
      {/* Eye highlights */}
      <circle cx="27" cy="23" r="0.8" fill="white" />
      <circle cx="37" cy="23" r="0.8" fill="white" />

      {/* Ears */}
      <ellipse cx="22" cy="18" rx="4" ry="6" fill={color} />
      <ellipse cx="42" cy="18" rx="4" ry="6" fill={color} />
      {/* Inner ears */}
      <ellipse cx="22" cy="18" rx="2" ry="4" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="42" cy="18" rx="2" ry="4" fill="#FFB6C1" opacity="0.4" />

      {/* Mouth */}
      <path d="M30 38 Q32 40 34 38" stroke="#3E2723" strokeWidth="0.5" fill="none" />

      {/* Fur tufts on chin */}
      <path d="M30 40 L28 42" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 41 L32 44" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 40 L36 42" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
