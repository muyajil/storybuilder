/**
 * Orangutan Sprite Component
 * Enhanced with gradients, fur texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Orangutan({ size = 64, color = '#FF6600' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body fur gradient */}
        <radialGradient id="orangutanBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#CC5500" stopOpacity="1" />
          <stop offset="100%" stopColor="#993D00" stopOpacity="1" />
        </radialGradient>
        {/* Face gradient */}
        <radialGradient id="orangutanFaceGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#F5DEB3" stopOpacity="1" />
          <stop offset="100%" stopColor="#D2B48C" stopOpacity="1" />
        </radialGradient>
        {/* Arm gradient */}
        <linearGradient id="orangutanArmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#993D00" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="orangutanHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Long arms */}
      <path d="M8 30 Q4 40 8 52 Q12 60 18 54" stroke="url(#orangutanArmGradient)" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M56 30 Q60 40 56 52 Q52 60 46 54" stroke="url(#orangutanArmGradient)" strokeWidth="9" fill="none" strokeLinecap="round" />

      {/* Hands */}
      <ellipse cx="16" cy="56" rx="5" ry="4" fill="#2F2F2F" />
      <ellipse cx="48" cy="56" rx="5" ry="4" fill="#2F2F2F" />

      {/* Body */}
      <ellipse cx="32" cy="40" rx="16" ry="16" fill="url(#orangutanBodyGradient)" />

      {/* Body fur texture */}
      <path d="M20 36 Q18 38 20 40" stroke="#993D00" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M44 36 Q46 38 44 40" stroke="#993D00" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M26 46 Q24 48 26 50" stroke="#993D00" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M38 46 Q40 48 38 50" stroke="#993D00" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Head */}
      <circle cx="32" cy="24" r="14" fill="url(#orangutanBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="28" cy="18" rx="8" ry="6" fill="url(#orangutanHighlight)" />

      {/* Face disk */}
      <ellipse cx="32" cy="28" rx="12" ry="10" fill="url(#orangutanFaceGradient)" />

      {/* Eyes */}
      <ellipse cx="26" cy="22" rx="3.5" ry="3" fill="white" />
      <ellipse cx="38" cy="22" rx="3.5" ry="3" fill="white" />
      <circle cx="26" cy="22" r="2" fill="#2F1F1F" />
      <circle cx="38" cy="22" r="2" fill="#2F1F1F" />
      <circle cx="25" cy="21" r="0.8" fill="white" />
      <circle cx="37" cy="21" r="0.8" fill="white" />

      {/* Brow ridge */}
      <path d="M22 18 Q26 16 30 18" stroke="#993D00" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M34 18 Q38 16 42 18" stroke="#993D00" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <ellipse cx="32" cy="28" rx="3" ry="2.5" fill="#A0826D" />
      <circle cx="30" cy="28" r="1" fill="#5D4E4E" />
      <circle cx="34" cy="28" r="1" fill="#5D4E4E" />

      {/* Mouth area */}
      <ellipse cx="32" cy="33" rx="5" ry="3" fill="#D2B48C" />
      <path d="M29 33 Q32 36 35 33" stroke="#8B7355" strokeWidth="1" fill="none" />

      {/* Cheek padding */}
      <ellipse cx="20" cy="28" rx="4" ry="6" fill={color} opacity="0.7" />
      <ellipse cx="44" cy="28" rx="4" ry="6" fill={color} opacity="0.7" />
    </svg>
  );
}
