/**
 * FirePup Sprite Component
 * Enhanced with gradients, detailed fur, and expressive features
 */

import type { SpriteProps } from '../types';

export function FirePup({ size = 64, color = '#FF0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Fur gradient - golden */}
        <radialGradient id="firePupFurGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        {/* Snout gradient */}
        <radialGradient id="firePupSnoutGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="100%" stopColor="#F5DEB3" />
        </radialGradient>
        {/* Helmet gradient */}
        <linearGradient id="firePupHelmetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#B20000" />
        </linearGradient>
        {/* Badge gradient */}
        <radialGradient id="firePupBadgeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="80%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        {/* Vest gradient */}
        <linearGradient id="firePupVestGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF3333" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#990000" />
        </linearGradient>
        {/* Ear gradient */}
        <linearGradient id="firePupEarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#6B3A1F" />
        </linearGradient>
        {/* Nose gradient */}
        <radialGradient id="firePupNoseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
      </defs>

      {/* Floppy Ears */}
      <ellipse cx="14" cy="18" rx="7" ry="12" fill="url(#firePupEarGradient)" />
      <ellipse cx="50" cy="18" rx="7" ry="12" fill="url(#firePupEarGradient)" />
      {/* Inner ear */}
      <ellipse cx="14" cy="20" rx="4" ry="8" fill="#E8B89D" opacity="0.5" />
      <ellipse cx="50" cy="20" rx="4" ry="8" fill="#E8B89D" opacity="0.5" />

      {/* Fire Helmet */}
      <ellipse cx="32" cy="12" rx="15" ry="9" fill="url(#firePupHelmetGradient)" />
      {/* Helmet brim */}
      <ellipse cx="32" cy="18" rx="16" ry="4" fill="url(#firePupHelmetGradient)" />
      {/* Helmet shine */}
      <ellipse cx="26" cy="10" rx="5" ry="2" fill="white" opacity="0.3" />
      {/* Badge on helmet */}
      <rect x="28" y="6" width="8" height="5" fill="url(#firePupBadgeGradient)" rx="1" />
      <text x="32" y="10" fontSize="4" fill="#8B0000" textAnchor="middle" fontWeight="bold">FD</text>

      {/* Head */}
      <ellipse cx="32" cy="26" rx="17" ry="15" fill="url(#firePupFurGradient)" />

      {/* Furry cheeks */}
      <ellipse cx="20" cy="28" rx="5" ry="4" fill="#F5DEB3" />
      <ellipse cx="44" cy="28" rx="5" ry="4" fill="#F5DEB3" />

      {/* Snout */}
      <ellipse cx="32" cy="32" rx="9" ry="7" fill="url(#firePupSnoutGradient)" />

      {/* Shiny nose */}
      <ellipse cx="32" cy="29" rx="5" ry="4" fill="url(#firePupNoseGradient)" />
      <ellipse cx="30" cy="27" rx="1.5" ry="1" fill="white" opacity="0.6" />

      {/* Big expressive eyes */}
      <ellipse cx="24" cy="22" rx="5" ry="5" fill="white" />
      <ellipse cx="40" cy="22" rx="5" ry="5" fill="white" />
      {/* Pupils */}
      <circle cx="25" cy="23" r="3" fill="#4A3728" />
      <circle cx="41" cy="23" r="3" fill="#4A3728" />
      {/* Eye highlights */}
      <circle cx="23" cy="21" r="1.5" fill="white" />
      <circle cx="39" cy="21" r="1.5" fill="white" />
      {/* Cute eyebrows */}
      <path d="M20 17 Q24 15 28 18" stroke="#8B4513" strokeWidth="1.5" fill="none" />
      <path d="M36 18 Q40 15 44 17" stroke="#8B4513" strokeWidth="1.5" fill="none" />

      {/* Happy tongue */}
      <ellipse cx="32" cy="36" rx="3" ry="2" fill="#FF6B6B" />

      {/* Fire Vest Body */}
      <rect x="18" y="40" width="28" height="18" fill="url(#firePupVestGradient)" rx="5" />
      {/* Vest details */}
      <rect x="20" y="42" width="24" height="2" fill="#FFD700" />
      {/* Reflective stripe */}
      <rect x="18" y="48" width="28" height="3" fill="#FFD700" />
      {/* Badge on vest */}
      <circle cx="32" cy="54" r="3" fill="url(#firePupBadgeGradient)" />

      {/* Front legs */}
      <rect x="20" y="56" width="10" height="8" fill="url(#firePupFurGradient)" rx="4" />
      <rect x="34" y="56" width="10" height="8" fill="url(#firePupFurGradient)" rx="4" />

      {/* Paws */}
      <ellipse cx="25" cy="64" rx="6" ry="2" fill="#C4A574" />
      <ellipse cx="39" cy="64" rx="6" ry="2" fill="#C4A574" />
      {/* Paw pads */}
      <circle cx="23" cy="64" r="1" fill="#8B4513" />
      <circle cx="25" cy="64" r="1" fill="#8B4513" />
      <circle cx="27" cy="64" r="1" fill="#8B4513" />
      <circle cx="37" cy="64" r="1" fill="#8B4513" />
      <circle cx="39" cy="64" r="1" fill="#8B4513" />
      <circle cx="41" cy="64" r="1" fill="#8B4513" />

      {/* Wagging tail (implied by position) */}
      <ellipse cx="52" cy="48" rx="6" ry="3" fill="url(#firePupFurGradient)" transform="rotate(-30 52 48)" />
    </svg>
  );
}
