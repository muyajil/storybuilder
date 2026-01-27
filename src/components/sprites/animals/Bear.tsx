/**
 * Bear Sprite Component
 * Enhanced with gradients, fur texture, and detailed features
 */

import type { SpriteProps } from '../types';

export function Bear({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="bearBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="bearHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Snout gradient */}
        <radialGradient id="bearSnoutGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Ear inner gradient */}
        <radialGradient id="bearEarInnerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8C8A8" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="bearNoseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="bearEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4a3520" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Fur shine */}
        <linearGradient id="bearShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Fur texture */}
        <pattern id="bearFurPattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 3 Q3 1 6 3" stroke={color} strokeWidth="0.5" fill="none" opacity="0.2" />
        </pattern>
      </defs>

      {/* Body */}
      <ellipse cx="32" cy="46" rx="22" ry="18" fill="url(#bearBodyGradient)" />
      {/* Body fur texture */}
      <ellipse cx="32" cy="46" rx="22" ry="18" fill="url(#bearFurPattern)" />
      {/* Body highlight */}
      <ellipse cx="26" cy="38" rx="10" ry="6" fill="url(#bearShineGradient)" />

      {/* Belly area - lighter */}
      <ellipse cx="32" cy="50" rx="12" ry="10" fill="#DEB887" opacity="0.3" />

      {/* Arms/Front legs */}
      <ellipse cx="14" cy="48" rx="6" ry="10" fill="url(#bearBodyGradient)" />
      <ellipse cx="50" cy="48" rx="6" ry="10" fill="url(#bearBodyGradient)" />

      {/* Paws */}
      <ellipse cx="14" cy="56" rx="5" ry="4" fill={color} />
      <ellipse cx="50" cy="56" rx="5" ry="4" fill={color} />
      {/* Paw pads */}
      <ellipse cx="14" cy="57" rx="3" ry="2" fill="#DEB887" opacity="0.6" />
      <ellipse cx="50" cy="57" rx="3" ry="2" fill="#DEB887" opacity="0.6" />

      {/* Head */}
      <circle cx="32" cy="22" r="18" fill="url(#bearHeadGradient)" />
      {/* Head fur texture */}
      <circle cx="32" cy="22" r="18" fill="url(#bearFurPattern)" />
      {/* Head highlight */}
      <ellipse cx="26" cy="16" rx="8" ry="6" fill="url(#bearShineGradient)" />

      {/* Ears */}
      <circle cx="16" cy="8" r="7" fill="url(#bearBodyGradient)" />
      <circle cx="48" cy="8" r="7" fill="url(#bearBodyGradient)" />
      {/* Ear inner */}
      <circle cx="16" cy="8" r="4" fill="url(#bearEarInnerGradient)" />
      <circle cx="48" cy="8" r="4" fill="url(#bearEarInnerGradient)" />

      {/* Snout */}
      <ellipse cx="32" cy="28" rx="10" ry="7" fill="url(#bearSnoutGradient)" />
      {/* Snout highlight */}
      <ellipse cx="30" cy="26" rx="4" ry="2" fill="white" opacity="0.2" />

      {/* Eyes */}
      <ellipse cx="23" cy="20" rx="4" ry="4.5" fill="white" />
      <ellipse cx="41" cy="20" rx="4" ry="4.5" fill="white" />
      <ellipse cx="23" cy="20" rx="3" ry="3.5" fill="url(#bearEyeGradient)" />
      <ellipse cx="41" cy="20" rx="3" ry="3.5" fill="url(#bearEyeGradient)" />
      {/* Eye shine */}
      <circle cx="22" cy="19" r="1.2" fill="white" />
      <circle cx="40" cy="19" r="1.2" fill="white" />
      <circle cx="24" cy="21" r="0.6" fill="white" opacity="0.5" />
      <circle cx="42" cy="21" r="0.6" fill="white" opacity="0.5" />

      {/* Eyebrows - friendly */}
      <path d="M19 15 Q23 13 27 15" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M37 15 Q41 13 45 15" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Nose */}
      <ellipse cx="32" cy="26" rx="5" ry="3.5" fill="url(#bearNoseGradient)" />
      {/* Nose highlight */}
      <ellipse cx="30" cy="25" rx="2" ry="1" fill="white" opacity="0.3" />

      {/* Mouth */}
      <path d="M32 29 L32 32" stroke="#5a3d1a" strokeWidth="1.5" />
      <path d="M27 33 Q32 37 37 33" stroke="#5a3d1a" strokeWidth="1.5" fill="none" />

      {/* Cheek fur tufts */}
      <path d="M12 24 Q8 26 10 30" stroke={color} strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M52 24 Q56 26 54 30" stroke={color} strokeWidth="2" fill="none" opacity="0.4" />
    </svg>
  );
}
