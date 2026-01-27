/**
 * PolicePup Sprite Component
 * Enhanced with gradients, detailed fur, and expressive features
 */

import type { SpriteProps } from '../types';

export function PolicePup({ size = 64, color = '#191970' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Fur gradient - main body */}
        <linearGradient id="policePupFurGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E08040" />
          <stop offset="50%" stopColor="#D2691E" />
          <stop offset="100%" stopColor="#A0522D" />
        </linearGradient>
        {/* Fur gradient - darker patches */}
        <linearGradient id="policePupDarkFurGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5C3317" />
        </linearGradient>
        {/* Snout gradient */}
        <linearGradient id="policePupSnoutGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="50%" stopColor="#DEB887" />
          <stop offset="100%" stopColor="#C9A86C" />
        </linearGradient>
        {/* Uniform gradient */}
        <linearGradient id="policePupUniformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E2E8B" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0F0F4A" />
        </linearGradient>
        {/* Cap gradient */}
        <linearGradient id="policePupCapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E2E8B" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0F0F4A" />
        </linearGradient>
        {/* Badge gradient */}
        <linearGradient id="policePupBadgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Nose gradient */}
        <radialGradient id="policePupNoseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
      </defs>

      {/* Cap brim / Mützenschirm */}
      <ellipse cx="32" cy="11" rx="15" ry="6" fill="url(#policePupCapGradient)" />
      <ellipse cx="32" cy="10" rx="13" ry="4" fill="#2E2E8B" opacity="0.3" />

      {/* Cap top / Mütze */}
      <rect x="17" y="6" width="30" height="7" fill="url(#policePupCapGradient)" rx="3" />
      <rect x="19" y="7" width="26" height="3" fill="#2E2E8B" opacity="0.3" />

      {/* Cap badge */}
      <circle cx="32" cy="8" r="5" fill="url(#policePupBadgeGradient)" />
      <circle cx="32" cy="8" r="3" fill="#0F0F4A" />
      <polygon points="32,6 31,8 32,10 33,8" fill="url(#policePupBadgeGradient)" />

      {/* Head / Kopf */}
      <ellipse cx="32" cy="26" rx="17" ry="15" fill="url(#policePupFurGradient)" />

      {/* Head highlight */}
      <ellipse cx="30" cy="22" rx="8" ry="6" fill="#E08040" opacity="0.4" />

      {/* Ears / Ohren - pointed like German Shepherd */}
      <polygon points="12,8 6,26 22,22" fill="url(#policePupDarkFurGradient)" />
      <polygon points="52,8 58,26 42,22" fill="url(#policePupDarkFurGradient)" />

      {/* Inner ear */}
      <polygon points="13,12 9,22 19,20" fill="#FFB6C1" opacity="0.5" />
      <polygon points="51,12 55,22 45,20" fill="#FFB6C1" opacity="0.5" />

      {/* Snout / Schnauze */}
      <ellipse cx="32" cy="32" rx="9" ry="7" fill="url(#policePupSnoutGradient)" />

      {/* Nose / Nase */}
      <ellipse cx="32" cy="29" rx="5" ry="3.5" fill="url(#policePupNoseGradient)" />
      <ellipse cx="31" cy="28" rx="1.5" ry="1" fill="#666666" opacity="0.4" />

      {/* Mouth */}
      <path d="M32 32 L32 35" stroke="#333" strokeWidth="1" strokeLinecap="round" />
      <path d="M28 35 Q32 38 36 35" stroke="#333" strokeWidth="1" fill="none" />

      {/* Tongue */}
      <ellipse cx="32" cy="37" rx="3" ry="2" fill="#FF91A4" />

      {/* Eyes / Augen */}
      <ellipse cx="24" cy="24" rx="5" ry="4" fill="white" />
      <ellipse cx="40" cy="24" rx="5" ry="4" fill="white" />
      <circle cx="24" cy="24" r="3" fill="#3D2314" />
      <circle cx="40" cy="24" r="3" fill="#3D2314" />
      <circle cx="24" cy="24" r="1.5" fill="black" />
      <circle cx="40" cy="24" r="1.5" fill="black" />
      <circle cx="25" cy="23" r="1" fill="white" />
      <circle cx="41" cy="23" r="1" fill="white" />

      {/* Eyebrows - alert expression */}
      <path d="M19 20 Q24 18 28 21" stroke="#8B4513" strokeWidth="1.5" fill="none" />
      <path d="M36 21 Q40 18 45 20" stroke="#8B4513" strokeWidth="1.5" fill="none" />

      {/* Darker fur patches around eyes */}
      <ellipse cx="24" cy="22" rx="6" ry="4" fill="#8B4513" opacity="0.3" />
      <ellipse cx="40" cy="22" rx="6" ry="4" fill="#8B4513" opacity="0.3" />

      {/* Body / Körper - Uniform vest */}
      <rect x="19" y="40" width="26" height="18" fill="url(#policePupUniformGradient)" rx="5" />

      {/* Uniform shading */}
      <rect x="19" y="40" width="9" height="18" fill="#0F0F4A" opacity="0.2" rx="5" />

      {/* Collar */}
      <rect x="24" y="40" width="16" height="4" fill="#2E2E8B" />

      {/* Badge / Abzeichen */}
      <polygon points="32,44 27,51 32,56 37,51" fill="url(#policePupBadgeGradient)" />
      <polygon points="32,46 29,51 32,54 35,51" fill="#B8860B" opacity="0.3" />

      {/* Utility pockets */}
      <rect x="20" y="50" width="5" height="4" fill="#0F0F4A" rx="1" />
      <rect x="39" y="50" width="5" height="4" fill="#0F0F4A" rx="1" />

      {/* Legs / Beine */}
      <rect x="21" y="56" width="9" height="10" fill="url(#policePupFurGradient)" rx="4" />
      <rect x="34" y="56" width="9" height="10" fill="url(#policePupFurGradient)" rx="4" />

      {/* Paw pads */}
      <ellipse cx="25" cy="66" rx="5" ry="2" fill="#A0522D" />
      <ellipse cx="39" cy="66" rx="5" ry="2" fill="#A0522D" />

      {/* Paw toes */}
      <circle cx="23" cy="65" r="1" fill="#5C3317" />
      <circle cx="27" cy="65" r="1" fill="#5C3317" />
      <circle cx="37" cy="65" r="1" fill="#5C3317" />
      <circle cx="41" cy="65" r="1" fill="#5C3317" />

      {/* Tail */}
      <ellipse cx="48" cy="46" rx="4" ry="6" fill="url(#policePupFurGradient)" transform="rotate(20 48 46)" />

      {/* Radio on vest */}
      <rect x="16" y="44" width="3" height="6" fill="#333333" rx="0.5" />
      <rect x="16" y="42" width="1" height="3" fill="#333333" />
    </svg>
  );
}
