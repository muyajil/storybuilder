/**
 * Ghost Sprite Component
 * Enhanced with gradients, ethereal glow, and expressive features
 */

import type { SpriteProps } from '../types';

export function Ghost({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Main body gradient */}
        <radialGradient id="ghostBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor={color === 'white' ? '#F0F0F8' : color} />
          <stop offset="100%" stopColor={color === 'white' ? '#D8D8E8' : color} stopOpacity="0.8" />
        </radialGradient>
        {/* Ethereal glow */}
        <radialGradient id="ghostGlowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        {/* Inner shadow */}
        <linearGradient id="ghostShadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E8F0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#C0C0D0" stopOpacity="0.3" />
        </linearGradient>
        {/* Eye socket gradient */}
        <radialGradient id="ghostEyeSocketGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1A1A2E" />
          <stop offset="80%" stopColor="#0A0A14" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Eye highlight gradient */}
        <radialGradient id="ghostEyeHighlightGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0E0F0" />
        </radialGradient>
        {/* Mouth gradient */}
        <radialGradient id="ghostMouthGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A2A3E" />
          <stop offset="100%" stopColor="#0A0A14" />
        </radialGradient>
      </defs>

      {/* Outer glow effect */}
      <ellipse cx="32" cy="34" rx="22" ry="28" fill="url(#ghostGlowGradient)" />

      {/* Main ghost body */}
      <path
        d="M16 32 Q16 6 32 6 Q48 6 48 32 L48 56 L43 49 L38 56 L32 49 L26 56 L21 49 L16 56 Z"
        fill="url(#ghostBodyGradient)"
      />

      {/* Body shading */}
      <path
        d="M20 32 Q20 14 32 14 Q40 14 42 24"
        fill="none"
        stroke="url(#ghostShadowGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Floating wisps */}
      <path d="M18 48 Q14 52 16 56" stroke={color === 'white' ? '#E8E8F0' : color} strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M46 48 Q50 52 48 56" stroke={color === 'white' ? '#E8E8F0' : color} strokeWidth="2" fill="none" opacity="0.5" />

      {/* Eye sockets */}
      <ellipse cx="24" cy="28" rx="7" ry="9" fill="url(#ghostEyeSocketGradient)" />
      <ellipse cx="40" cy="28" rx="7" ry="9" fill="url(#ghostEyeSocketGradient)" />

      {/* Eye socket depth */}
      <ellipse cx="24" cy="30" rx="5" ry="6" fill="#000000" opacity="0.5" />
      <ellipse cx="40" cy="30" rx="5" ry="6" fill="#000000" opacity="0.5" />

      {/* Eye highlights (ghost eyes) */}
      <ellipse cx="24" cy="26" rx="3.5" ry="4.5" fill="url(#ghostEyeHighlightGradient)" />
      <ellipse cx="40" cy="26" rx="3.5" ry="4.5" fill="url(#ghostEyeHighlightGradient)" />

      {/* Pupil dots (for cute/scary balance) */}
      <circle cx="24" cy="27" r="1" fill="#1A1A2E" opacity="0.5" />
      <circle cx="40" cy="27" r="1" fill="#1A1A2E" opacity="0.5" />

      {/* Extra eye shine */}
      <circle cx="22" cy="24" r="1" fill="white" />
      <circle cx="38" cy="24" r="1" fill="white" />

      {/* Spooky mouth */}
      <ellipse cx="32" cy="42" rx="7" ry="5" fill="url(#ghostMouthGradient)" />
      {/* Mouth depth */}
      <ellipse cx="32" cy="43" rx="5" ry="3" fill="#000000" opacity="0.5" />
      {/* Tongue hint */}
      <ellipse cx="32" cy="44" rx="3" ry="1.5" fill="#8B4060" opacity="0.4" />

      {/* Rosy cheek blush (for friendly ghost) */}
      <ellipse cx="18" cy="34" rx="3" ry="2" fill="#FFB6C1" opacity="0.3" />
      <ellipse cx="46" cy="34" rx="3" ry="2" fill="#FFB6C1" opacity="0.3" />

      {/* Sparkle effects */}
      <circle cx="12" cy="20" r="1" fill="white" opacity="0.7" />
      <circle cx="52" cy="18" r="0.8" fill="white" opacity="0.7" />
      <circle cx="28" cy="10" r="0.6" fill="white" opacity="0.7" />

      {/* Bottom trail wisps */}
      <ellipse cx="21" cy="54" rx="3" ry="4" fill={color === 'white' ? '#F0F0F8' : color} opacity="0.5" />
      <ellipse cx="32" cy="52" rx="3" ry="4" fill={color === 'white' ? '#F0F0F8' : color} opacity="0.4" />
      <ellipse cx="43" cy="54" rx="3" ry="4" fill={color === 'white' ? '#F0F0F8' : color} opacity="0.5" />
    </svg>
  );
}
