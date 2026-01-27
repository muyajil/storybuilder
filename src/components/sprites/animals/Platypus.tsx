/**
 * Platypus Sprite Component
 * Enhanced with gradients, texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Platypus({ size = 64, color = '#8B6914' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="platypusBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#6B4F0F" stopOpacity="1" />
          <stop offset="100%" stopColor="#4A3A0A" stopOpacity="1" />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="platypusBellyGradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#D2B48C" stopOpacity="1" />
          <stop offset="100%" stopColor="#A0826D" stopOpacity="1" />
        </radialGradient>
        {/* Bill gradient */}
        <radialGradient id="platypusBillGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF9933" stopOpacity="1" />
          <stop offset="100%" stopColor="#CC6600" stopOpacity="1" />
        </radialGradient>
        {/* Tail gradient */}
        <linearGradient id="platypusTailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#4A3A0A" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="platypusHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Feet gradient */}
        <radialGradient id="platypusFeetGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF8C00" stopOpacity="1" />
          <stop offset="100%" stopColor="#CC6600" stopOpacity="1" />
        </radialGradient>
      </defs>

      {/* Tail */}
      <path d="M50 40 Q60 36 58 44 Q56 52 52 48" fill="url(#platypusTailGradient)" />
      <path d="M52 42 Q58 40 56 46" stroke="#4A3A0A" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Webbed feet */}
      <ellipse cx="18" cy="48" rx="10" ry="5" fill="url(#platypusFeetGradient)" />
      <ellipse cx="42" cy="48" rx="8" ry="4" fill="url(#platypusFeetGradient)" />

      {/* Feet webbing details */}
      <line x1="12" y1="48" x2="10" y2="52" stroke="#CC6600" strokeWidth="1" opacity="0.5" />
      <line x1="18" y1="48" x2="18" y2="53" stroke="#CC6600" strokeWidth="1" opacity="0.5" />
      <line x1="24" y1="48" x2="26" y2="52" stroke="#CC6600" strokeWidth="1" opacity="0.5" />
      <line x1="36" y1="48" x2="34" y2="51" stroke="#CC6600" strokeWidth="1" opacity="0.5" />
      <line x1="42" y1="48" x2="42" y2="52" stroke="#CC6600" strokeWidth="1" opacity="0.5" />
      <line x1="48" y1="48" x2="50" y2="51" stroke="#CC6600" strokeWidth="1" opacity="0.5" />

      {/* Body */}
      <ellipse cx="32" cy="38" rx="18" ry="13" fill="url(#platypusBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="26" cy="32" rx="10" ry="7" fill="url(#platypusHighlight)" />

      {/* Belly */}
      <ellipse cx="32" cy="42" rx="12" ry="8" fill="url(#platypusBellyGradient)" opacity="0.7" />

      {/* Fur texture */}
      <path d="M22 34 Q20 38 22 42" stroke="#4A3A0A" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M42 34 Q44 38 42 42" stroke="#4A3A0A" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Head */}
      <circle cx="32" cy="26" r="11" fill="url(#platypusBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="28" cy="20" rx="6" ry="5" fill="url(#platypusHighlight)" />

      {/* Bill */}
      <ellipse cx="32" cy="32" rx="10" ry="5" fill="url(#platypusBillGradient)" />

      {/* Bill detail - nostrils */}
      <circle cx="30" cy="31" r="1" fill="#8B4513" />
      <circle cx="34" cy="31" r="1" fill="#8B4513" />

      {/* Bill texture */}
      <path d="M24 32 Q28 30 32 32 Q36 30 40 32" stroke="#CC6600" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Bill highlight */}
      <ellipse cx="30" cy="30" rx="5" ry="2" fill="white" opacity="0.15" />

      {/* Eyes */}
      <circle cx="28" cy="24" r="3" fill="#1a1a1a" />
      <circle cx="36" cy="24" r="3" fill="#1a1a1a" />

      {/* Eye highlights */}
      <circle cx="27" cy="23" r="1" fill="white" />
      <circle cx="35" cy="23" r="1" fill="white" />

      {/* Ears (small bumps) */}
      <ellipse cx="24" cy="18" rx="3" ry="2" fill={color} />
      <ellipse cx="40" cy="18" rx="3" ry="2" fill={color} />

      {/* Cheek marks */}
      <ellipse cx="22" cy="28" rx="2" ry="1.5" fill="#A0826D" opacity="0.4" />
      <ellipse cx="42" cy="28" rx="2" ry="1.5" fill="#A0826D" opacity="0.4" />
    </svg>
  );
}
