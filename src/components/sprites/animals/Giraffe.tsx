/**
 * Giraffe Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Giraffe({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="giraffeBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFEC8B" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Neck gradient */}
        <linearGradient id="giraffeNeckGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#FFEC8B" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="giraffeHeadGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFEC8B" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Spot gradient */}
        <radialGradient id="giraffeSpotGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#5D3A1A" />
        </radialGradient>
        {/* Horn gradient */}
        <linearGradient id="giraffeHornGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D2691E" />
          <stop offset="100%" stopColor="#5D3A1A" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="giraffeLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="62" rx="14" ry="3" fill="rgba(0,0,0,0.15)" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="50" rx="16" ry="12" fill="url(#giraffeBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="46" rx="8" ry="5" fill="rgba(255,255,255,0.2)" />

      {/* Legs with gradient */}
      <rect x="20" y="56" width="5" height="8" fill="url(#giraffeLegGradient)" rx="1" />
      <rect x="39" y="56" width="5" height="8" fill="url(#giraffeLegGradient)" rx="1" />
      {/* Hooves */}
      <rect x="19" y="62" width="7" height="2" fill="#2F2F2F" rx="1" />
      <rect x="38" y="62" width="7" height="2" fill="#2F2F2F" rx="1" />

      {/* Neck with gradient */}
      <rect x="27" y="16" width="10" height="34" fill="url(#giraffeNeckGradient)" rx="2" />
      {/* Neck highlight */}
      <rect x="28" y="18" width="3" height="30" fill="rgba(255,255,255,0.15)" rx="1" />

      {/* Neck spots */}
      <ellipse cx="32" cy="24" rx="3" ry="2.5" fill="url(#giraffeSpotGradient)" />
      <ellipse cx="30" cy="32" rx="2.5" ry="3" fill="url(#giraffeSpotGradient)" />
      <ellipse cx="34" cy="40" rx="3" ry="2.5" fill="url(#giraffeSpotGradient)" />

      {/* Body spots */}
      <ellipse cx="26" cy="48" rx="3.5" ry="3" fill="url(#giraffeSpotGradient)" />
      <ellipse cx="38" cy="50" rx="3" ry="3.5" fill="url(#giraffeSpotGradient)" />
      <ellipse cx="32" cy="54" rx="2.5" ry="2" fill="url(#giraffeSpotGradient)" />

      {/* Head with gradient */}
      <ellipse cx="32" cy="12" rx="11" ry="9" fill="url(#giraffeHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="29" cy="9" rx="5" ry="3" fill="rgba(255,255,255,0.25)" />

      {/* Horns with gradient */}
      <line x1="27" y1="6" x2="27" y2="1" stroke="url(#giraffeHornGradient)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="37" y1="6" x2="37" y2="1" stroke="url(#giraffeHornGradient)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Horn tips */}
      <circle cx="27" cy="1" r="2.5" fill="#5D3A1A" />
      <circle cx="37" cy="1" r="2.5" fill="#5D3A1A" />
      <circle cx="27" cy="1" r="1" fill="#8B4513" />
      <circle cx="37" cy="1" r="1" fill="#8B4513" />

      {/* Ears */}
      <ellipse cx="22" cy="8" rx="4" ry="2" fill={color} transform="rotate(-30 22 8)" />
      <ellipse cx="42" cy="8" rx="4" ry="2" fill={color} transform="rotate(30 42 8)" />
      <ellipse cx="22" cy="8" rx="2" ry="1" fill="#FFB6C1" transform="rotate(-30 22 8)" />
      <ellipse cx="42" cy="8" rx="2" ry="1" fill="#FFB6C1" transform="rotate(30 42 8)" />

      {/* Eyes with detail */}
      <ellipse cx="27" cy="11" rx="3" ry="3.5" fill="white" />
      <ellipse cx="37" cy="11" rx="3" ry="3.5" fill="white" />
      <circle cx="28" cy="11" r="2" fill="#4A3728" />
      <circle cx="38" cy="11" r="2" fill="#4A3728" />
      <circle cx="27" cy="10" r="0.8" fill="white" />
      <circle cx="37" cy="10" r="0.8" fill="white" />

      {/* Eyelashes */}
      <path d="M24 8 L23 6" stroke="#4A3728" strokeWidth="0.5" />
      <path d="M26 7 L25 5" stroke="#4A3728" strokeWidth="0.5" />
      <path d="M38 7 L39 5" stroke="#4A3728" strokeWidth="0.5" />
      <path d="M40 8 L41 6" stroke="#4A3728" strokeWidth="0.5" />

      {/* Muzzle */}
      <ellipse cx="32" cy="16" rx="5" ry="3" fill="#FFDAB9" />

      {/* Nostrils */}
      <circle cx="30" cy="16" r="1" fill="#4A3728" />
      <circle cx="34" cy="16" r="1" fill="#4A3728" />

      {/* Mouth */}
      <path d="M30 18 Q32 19 34 18" stroke="#4A3728" strokeWidth="0.5" fill="none" />
    </svg>
  );
}
