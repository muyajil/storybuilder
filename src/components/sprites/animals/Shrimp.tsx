/**
 * Shrimp Sprite Component
 * Enhanced with gradients, shell texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Shrimp({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="shrimpBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF85A2" stopOpacity="1" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#FF4081" stopOpacity="1" />
        </linearGradient>
        {/* Shell segment gradient */}
        <linearGradient id="shrimpSegmentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF85A2" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF4081" stopOpacity="1" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="shrimpHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF85A2" stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </radialGradient>
        {/* Tail gradient */}
        <linearGradient id="shrimpTailGradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#FF4081" stopOpacity="0.8" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="shrimpHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Antenna gradient */}
        <linearGradient id="shrimpAntennaGradient" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#FF85A2" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Tail fan */}
      <path d="M44 48 Q52 52 50 60 Q46 56 44 48" fill="url(#shrimpTailGradient)" />
      <path d="M46 50 Q56 50 54 58 Q50 54 46 50" fill="url(#shrimpTailGradient)" />
      <path d="M44 50 Q48 56 44 62 Q42 56 44 50" fill="url(#shrimpTailGradient)" />

      {/* Tail fan detail lines */}
      <path d="M46 50 Q50 54 50 58" stroke="#FF4081" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M44 52 Q46 56 44 60" stroke="#FF4081" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Body segments - curved shape */}
      <path d="M20 32 Q34 18 46 32 Q50 42 46 50 Q32 58 20 50 Q16 42 20 32" fill="url(#shrimpBodyGradient)" />

      {/* Body segment lines */}
      <path d="M26 28 Q32 26 38 28" stroke="#FF4081" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M24 34 Q32 32 40 34" stroke="#FF4081" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M24 40 Q32 38 40 40" stroke="#FF4081" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M26 46 Q32 44 38 46" stroke="#FF4081" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Body highlight */}
      <ellipse cx="30" cy="34" rx="10" ry="8" fill="url(#shrimpHighlight)" />

      {/* Head */}
      <ellipse cx="18" cy="30" rx="8" ry="7" fill="url(#shrimpHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="16" cy="26" rx="4" ry="3" fill="url(#shrimpHighlight)" />

      {/* Rostrum (head spike) */}
      <polygon points="18,24 12,20 20,22" fill="url(#shrimpHeadGradient)" />

      {/* Eye */}
      <circle cx="16" cy="28" r="3" fill="white" />
      <circle cx="16" cy="28" r="2" fill="#1a1a1a" />
      <circle cx="15" cy="27" r="0.8" fill="white" />

      {/* Eye stalk */}
      <ellipse cx="16" cy="26" rx="2" ry="3" fill={color} />

      {/* Antennae - long and elegant */}
      <path d="M14 26 L6 16" stroke="url(#shrimpAntennaGradient)" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 24 L8 12" stroke="url(#shrimpAntennaGradient)" strokeWidth="2" strokeLinecap="round" />

      {/* Shorter antennules */}
      <path d="M12 28 L6 26" stroke="url(#shrimpAntennaGradient)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 30 L6 32" stroke="url(#shrimpAntennaGradient)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Legs (walking legs) */}
      <path d="M22 38 L18 44" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 40 L22 48" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 42 L28 50" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 42 L36 50" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

      {/* Swimmerets (small swimming legs) */}
      <path d="M36 44 L34 50" stroke="#FF85A2" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M38 44 L38 50" stroke="#FF85A2" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M40 44 L42 50" stroke="#FF85A2" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

      {/* Belly texture */}
      <ellipse cx="32" cy="46" rx="10" ry="4" fill="#FF85A2" opacity="0.3" />

      {/* Shell shine spots */}
      <circle cx="28" cy="30" r="1.5" fill="white" opacity="0.4" />
      <circle cx="36" cy="36" r="1" fill="white" opacity="0.3" />
      <circle cx="24" cy="42" r="1" fill="white" opacity="0.3" />
    </svg>
  );
}
