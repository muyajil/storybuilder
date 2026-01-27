/**
 * Horse Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Horse({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="horseBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#5D3A1A" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="horseHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#5D3A1A" />
        </radialGradient>
        {/* Neck gradient */}
        <linearGradient id="horseNeckGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#5D3A1A" />
        </linearGradient>
        {/* Mane gradient */}
        <linearGradient id="horseManeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#2F2F2F" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="horseLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="80%" stopColor="#5D3A1A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Hoof gradient */}
        <linearGradient id="horseHoofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Blaze (face marking) gradient */}
        <linearGradient id="horseBlazeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="28" cy="62" rx="22" ry="3" fill="rgba(0,0,0,0.15)" />

      {/* Tail with gradient */}
      <path d="M8 38 Q4 44 8 52 Q4 48 6 58" stroke="url(#horseManeGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M10 40 Q6 46 10 54" stroke="#1A1A1A" strokeWidth="2" fill="none" opacity="0.5" />

      {/* Body with gradient */}
      <ellipse cx="28" cy="38" rx="20" ry="14" fill="url(#horseBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="24" cy="34" rx="10" ry="6" fill="rgba(255,255,255,0.1)" />
      {/* Body muscle definition */}
      <path d="M20 42 Q24 44 28 42" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />
      <path d="M32 40 Q36 42 40 40" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />

      {/* Legs with gradient */}
      <rect x="15" y="48" width="5" height="14" fill="url(#horseLegGradient)" rx="1" />
      <rect x="23" y="48" width="5" height="14" fill="url(#horseLegGradient)" rx="1" />
      <rect x="31" y="48" width="5" height="14" fill="url(#horseLegGradient)" rx="1" />
      <rect x="39" y="48" width="5" height="14" fill="url(#horseLegGradient)" rx="1" />
      {/* Leg highlights */}
      <rect x="16" y="49" width="2" height="10" fill="rgba(255,255,255,0.1)" rx="0.5" />
      <rect x="24" y="49" width="2" height="10" fill="rgba(255,255,255,0.1)" rx="0.5" />
      <rect x="32" y="49" width="2" height="10" fill="rgba(255,255,255,0.1)" rx="0.5" />
      <rect x="40" y="49" width="2" height="10" fill="rgba(255,255,255,0.1)" rx="0.5" />

      {/* Hooves with gradient */}
      <rect x="14" y="60" width="7" height="4" fill="url(#horseHoofGradient)" rx="1" />
      <rect x="22" y="60" width="7" height="4" fill="url(#horseHoofGradient)" rx="1" />
      <rect x="30" y="60" width="7" height="4" fill="url(#horseHoofGradient)" rx="1" />
      <rect x="38" y="60" width="7" height="4" fill="url(#horseHoofGradient)" rx="1" />
      {/* Hoof highlights */}
      <rect x="15" y="61" width="2" height="2" fill="rgba(255,255,255,0.1)" rx="0.5" />
      <rect x="23" y="61" width="2" height="2" fill="rgba(255,255,255,0.1)" rx="0.5" />
      <rect x="31" y="61" width="2" height="2" fill="rgba(255,255,255,0.1)" rx="0.5" />
      <rect x="39" y="61" width="2" height="2" fill="rgba(255,255,255,0.1)" rx="0.5" />

      {/* Neck with gradient */}
      <path d="M44 34 Q52 28 50 18" stroke="url(#horseNeckGradient)" strokeWidth="12" fill="none" strokeLinecap="round" />
      {/* Neck highlight */}
      <path d="M46 32 Q50 28 49 22" stroke="rgba(255,255,255,0.1)" strokeWidth="3" fill="none" />

      {/* Mane with gradient */}
      <path d="M48 18 Q44 24 48 28 Q44 32 48 36" stroke="url(#horseManeGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M46 20 Q42 26 46 30" stroke="#1A1A1A" strokeWidth="2" fill="none" opacity="0.5" />
      {/* Forelock */}
      <path d="M48 10 Q44 14 46 18" stroke="url(#horseManeGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Head with gradient */}
      <ellipse cx="52" cy="16" rx="10" ry="9" fill="url(#horseHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="49" cy="12" rx="4" ry="3" fill="rgba(255,255,255,0.15)" />

      {/* Blaze (white marking on face) */}
      <path d="M52 10 Q54 14 52 20" stroke="url(#horseBlazeGradient)" strokeWidth="2" fill="none" />

      {/* Ears with detail */}
      <polygon points="45,10 43,3 49,7" fill={color} />
      <polygon points="55,8 57,1 59,7" fill={color} />
      {/* Inner ear */}
      <polygon points="46,9 44,5 48,7" fill="#FFB6C1" opacity="0.4" />
      <polygon points="56,7 57,3 58,7" fill="#FFB6C1" opacity="0.4" />

      {/* Eye with detail */}
      <ellipse cx="56" cy="14" rx="3" ry="3.5" fill="white" />
      <circle cx="57" cy="14" r="2" fill="#4A3728" />
      <circle cx="57" cy="14" r="1" fill="black" />
      <circle cx="56" cy="13" r="0.8" fill="white" />
      {/* Eyelashes */}
      <path d="M53 12 L52 11" stroke="#2F2F2F" strokeWidth="0.5" />
      <path d="M54 11 L53 10" stroke="#2F2F2F" strokeWidth="0.5" />

      {/* Nostrils with detail */}
      <ellipse cx="60" cy="18" rx="1.5" ry="1" fill="#2F2F2F" />
      <ellipse cx="60" cy="18" rx="0.8" ry="0.5" fill="#1A1A1A" />

      {/* Muzzle highlight */}
      <ellipse cx="58" cy="20" rx="4" ry="2" fill="rgba(255,255,255,0.1)" />

      {/* Mouth */}
      <path d="M58 22 Q60 23 62 22" stroke="#5D3A1A" strokeWidth="0.5" fill="none" />
    </svg>
  );
}
