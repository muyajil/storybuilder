/**
 * Cow Sprite Component
 * Enhanced with gradients, fur texture, and cute features
 */

import type { SpriteProps } from '../types';

export function Cow({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="cowBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5F5F5" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="cowHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </radialGradient>
        {/* Spot gradient */}
        <radialGradient id="cowSpotGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Horn gradient */}
        <linearGradient id="cowHornGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#DEB887" />
          <stop offset="50%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#FFEFD5" />
        </linearGradient>
        {/* Snout gradient */}
        <radialGradient id="cowSnoutGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFD0D0" />
          <stop offset="100%" stopColor="#FFB6C1" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="cowEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#5a4a30" />
          <stop offset="100%" stopColor="#2a2a1a" />
        </radialGradient>
        {/* Ear gradient */}
        <radialGradient id="cowEarGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD0D0" />
          <stop offset="100%" stopColor="#F5F5F5" />
        </radialGradient>
        {/* Shine gradient */}
        <linearGradient id="cowShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Tail */}
      <path d="M52 44 Q58 42 56 50 Q54 56 52 54" stroke="#F5F5F5" strokeWidth="3" fill="none" />
      {/* Tail tuft */}
      <ellipse cx="52" cy="56" rx="3" ry="4" fill="#2a2a2a" />

      {/* Legs */}
      <rect x="14" y="50" width="8" height="14" rx="3" fill="url(#cowBodyGradient)" />
      <rect x="42" y="50" width="8" height="14" rx="3" fill="url(#cowBodyGradient)" />
      {/* Hooves */}
      <rect x="14" y="60" width="8" height="4" rx="1" fill="#4a4a4a" />
      <rect x="42" y="60" width="8" height="4" rx="1" fill="#4a4a4a" />

      {/* Body */}
      <ellipse cx="32" cy="42" rx="24" ry="18" fill="url(#cowBodyGradient)" />
      {/* Body shine */}
      <ellipse cx="24" cy="34" rx="12" ry="8" fill="url(#cowShineGradient)" />

      {/* Spots on body */}
      <ellipse cx="22" cy="38" rx="7" ry="5" fill="url(#cowSpotGradient)" transform="rotate(-15 22 38)" />
      <ellipse cx="42" cy="46" rx="6" ry="4" fill="url(#cowSpotGradient)" transform="rotate(10 42 46)" />
      <ellipse cx="36" cy="36" rx="4" ry="3" fill="url(#cowSpotGradient)" />

      {/* Udder (cute detail) */}
      <ellipse cx="32" cy="56" rx="6" ry="4" fill="#FFB6C1" opacity="0.6" />

      {/* Head */}
      <ellipse cx="32" cy="18" rx="16" ry="14" fill="url(#cowHeadGradient)" />
      {/* Head shine */}
      <ellipse cx="26" cy="12" rx="8" ry="5" fill="url(#cowShineGradient)" />

      {/* Ears */}
      <ellipse cx="12" cy="12" rx="7" ry="5" fill={color} transform="rotate(-30 12 12)" />
      <ellipse cx="52" cy="12" rx="7" ry="5" fill={color} transform="rotate(30 52 12)" />
      {/* Ear inner */}
      <ellipse cx="13" cy="12" rx="4" ry="3" fill="url(#cowEarGradient)" transform="rotate(-30 13 12)" />
      <ellipse cx="51" cy="12" rx="4" ry="3" fill="url(#cowEarGradient)" transform="rotate(30 51 12)" />

      {/* Horns */}
      <path d="M16 6 Q12 0 8 4" stroke="url(#cowHornGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M48 6 Q52 0 56 4" stroke="url(#cowHornGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Horn tips */}
      <circle cx="8" cy="4" r="2" fill="#FFEFD5" />
      <circle cx="56" cy="4" r="2" fill="#FFEFD5" />

      {/* Spots on head */}
      <ellipse cx="22" cy="12" rx="5" ry="4" fill="url(#cowSpotGradient)" transform="rotate(-10 22 12)" />
      <ellipse cx="42" cy="14" rx="4" ry="3" fill="url(#cowSpotGradient)" transform="rotate(15 42 14)" />

      {/* Eyes */}
      <ellipse cx="25" cy="16" rx="4" ry="4.5" fill="white" />
      <ellipse cx="39" cy="16" rx="4" ry="4.5" fill="white" />
      <ellipse cx="25" cy="16" rx="2.5" ry="3" fill="url(#cowEyeGradient)" />
      <ellipse cx="39" cy="16" rx="2.5" ry="3" fill="url(#cowEyeGradient)" />
      {/* Eye shine */}
      <circle cx="24" cy="15" r="1" fill="white" />
      <circle cx="38" cy="15" r="1" fill="white" />
      <circle cx="26" cy="17" r="0.5" fill="white" opacity="0.5" />
      <circle cx="40" cy="17" r="0.5" fill="white" opacity="0.5" />

      {/* Eyelashes */}
      <g stroke="#1a1a1a" strokeWidth="0.5">
        <line x1="21" y1="12" x2="20" y2="10" />
        <line x1="23" y1="11" x2="22" y2="9" />
        <line x1="43" y1="12" x2="44" y2="10" />
        <line x1="41" y1="11" x2="42" y2="9" />
      </g>

      {/* Snout */}
      <ellipse cx="32" cy="26" rx="10" ry="6" fill="url(#cowSnoutGradient)" />
      {/* Snout highlight */}
      <ellipse cx="30" cy="24" rx="4" ry="2" fill="white" opacity="0.3" />
      {/* Nostrils */}
      <ellipse cx="28" cy="26" rx="2" ry="1.5" fill="#D4A4A4" />
      <ellipse cx="36" cy="26" rx="2" ry="1.5" fill="#D4A4A4" />

      {/* Cute smile */}
      <path d="M28 30 Q32 33 36 30" stroke="#D4A4A4" strokeWidth="1.5" fill="none" />

      {/* Bell (cute accessory) */}
      <ellipse cx="32" cy="34" rx="3" ry="3.5" fill="#FFD700" />
      <ellipse cx="32" cy="33" rx="1.5" ry="1" fill="#FFF8DC" opacity="0.5" />
      <circle cx="32" cy="36" r="1" fill="#DAA520" />
    </svg>
  );
}
