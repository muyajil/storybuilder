/**
 * Pig Sprite Component
 * Enhanced with gradients, texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Pig({ size = 64, color = '#FFB6C1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="pigBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#F8A0A8" stopOpacity="1" />
          <stop offset="100%" stopColor="#E890A0" stopOpacity="1" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="pigHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#F8A0A8" stopOpacity="1" />
        </radialGradient>
        {/* Snout gradient */}
        <radialGradient id="pigSnoutGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FF85A1" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF69B4" stopOpacity="1" />
        </radialGradient>
        {/* Ear gradient */}
        <linearGradient id="pigEarGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#E890A0" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="pigHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Hoof gradient */}
        <linearGradient id="pigHoofGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#F8A0A8" stopOpacity="1" />
          <stop offset="100%" stopColor="#E07090" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Tail */}
      <path d="M54 40 Q62 34 60 44 Q58 52 62 50" stroke="url(#pigEarGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Back legs */}
      <rect x="42" y="52" width="7" height="11" rx="2" fill="url(#pigHoofGradient)" />

      {/* Front legs */}
      <rect x="15" y="52" width="7" height="11" rx="2" fill="url(#pigHoofGradient)" />

      {/* Hooves */}
      <rect x="42" y="60" width="7" height="4" rx="1" fill="#5D4E37" />
      <rect x="15" y="60" width="7" height="4" rx="1" fill="#5D4E37" />

      {/* Body */}
      <ellipse cx="32" cy="40" rx="22" ry="16" fill="url(#pigBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="26" cy="34" rx="12" ry="8" fill="url(#pigHighlight)" />

      {/* Belly lighter area */}
      <ellipse cx="32" cy="46" rx="14" ry="8" fill={color} opacity="0.5" />

      {/* Head */}
      <circle cx="32" cy="24" r="16" fill="url(#pigHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="26" cy="18" rx="8" ry="6" fill="url(#pigHighlight)" />

      {/* Ears */}
      <ellipse cx="18" cy="12" rx="6" ry="9" fill="url(#pigEarGradient)" transform="rotate(-25 18 12)" />
      <ellipse cx="46" cy="12" rx="6" ry="9" fill="url(#pigEarGradient)" transform="rotate(25 46 12)" />

      {/* Inner ears */}
      <ellipse cx="18" cy="13" rx="3" ry="5" fill="#FF85A1" opacity="0.6" transform="rotate(-25 18 13)" />
      <ellipse cx="46" cy="13" rx="3" ry="5" fill="#FF85A1" opacity="0.6" transform="rotate(25 46 13)" />

      {/* Snout */}
      <ellipse cx="32" cy="28" rx="9" ry="7" fill="url(#pigSnoutGradient)" />

      {/* Snout highlight */}
      <ellipse cx="30" cy="26" rx="4" ry="3" fill="white" opacity="0.2" />

      {/* Nostrils */}
      <ellipse cx="29" cy="28" rx="2" ry="2.5" fill="#D35D7A" />
      <ellipse cx="35" cy="28" rx="2" ry="2.5" fill="#D35D7A" />

      {/* Eyes */}
      <circle cx="24" cy="20" r="4" fill="white" />
      <circle cx="40" cy="20" r="4" fill="white" />
      <circle cx="25" cy="20" r="2.5" fill="#2F2F2F" />
      <circle cx="41" cy="20" r="2.5" fill="#2F2F2F" />

      {/* Eye highlights */}
      <circle cx="23.5" cy="19" r="1" fill="white" />
      <circle cx="39.5" cy="19" r="1" fill="white" />
      <circle cx="26" cy="21" r="0.5" fill="white" opacity="0.5" />
      <circle cx="42" cy="21" r="0.5" fill="white" opacity="0.5" />

      {/* Cheek blush */}
      <ellipse cx="18" cy="26" rx="4" ry="3" fill="#FF85A1" opacity="0.4" />
      <ellipse cx="46" cy="26" rx="4" ry="3" fill="#FF85A1" opacity="0.4" />

      {/* Cute smile under snout */}
      <path d="M28 34 Q32 37 36 34" stroke="#D35D7A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
