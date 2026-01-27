/**
 * BubbleFish Sprite Component
 * Enhanced with gradients, shimmer, and cute features
 */

import type { SpriteProps } from '../types';

export function BubbleFish({ size = 64, color = '#00CED1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="bubbleFishBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#40E0D0" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="bubbleFishBellyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0FFFF" />
        </radialGradient>
        {/* Tail gradient */}
        <linearGradient id="bubbleFishTailGradient" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#40E0D0" stopOpacity="0.7" />
        </linearGradient>
        {/* Fin gradient */}
        <linearGradient id="bubbleFishFinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#40E0D0" stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="bubbleFishEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#6495ED" />
          <stop offset="50%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#1E90FF" />
        </radialGradient>
        {/* Shimmer gradient */}
        <linearGradient id="bubbleFishShimmerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="50%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Scale pattern */}
        <pattern id="bubbleFishScalePattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 3 Q3 0 6 3 Q3 6 0 3" fill="none" stroke="#009999" strokeWidth="0.3" opacity="0.3" />
        </pattern>
        {/* Bubble gradient */}
        <radialGradient id="bubbleFishBubbleGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E0FFFF" stopOpacity="0.3" />
        </radialGradient>
      </defs>

      {/* Tail fin */}
      <ellipse cx="6" cy="32" rx="10" ry="14" fill="url(#bubbleFishTailGradient)" />
      {/* Tail inner detail */}
      <ellipse cx="4" cy="32" rx="5" ry="10" fill="url(#bubbleFishBellyGradient)" opacity="0.5" />
      {/* Tail rays */}
      <g stroke={color} strokeWidth="0.5" opacity="0.4">
        <line x1="2" y1="22" x2="10" y2="28" />
        <line x1="0" y1="28" x2="10" y2="32" />
        <line x1="0" y1="36" x2="10" y2="32" />
        <line x1="2" y1="42" x2="10" y2="36" />
      </g>

      {/* Body */}
      <ellipse cx="32" cy="32" rx="22" ry="18" fill="url(#bubbleFishBodyGradient)" />
      {/* Scale texture */}
      <ellipse cx="32" cy="32" rx="22" ry="18" fill="url(#bubbleFishScalePattern)" />
      {/* Body shimmer */}
      <ellipse cx="26" cy="24" rx="12" ry="8" fill="url(#bubbleFishShimmerGradient)" />

      {/* Belly - cute round */}
      <ellipse cx="34" cy="38" rx="14" ry="10" fill="url(#bubbleFishBellyGradient)" />

      {/* Dorsal fin */}
      <path d="M24 14 Q32 4 40 14 Q32 18 24 14" fill="url(#bubbleFishFinGradient)" />
      {/* Fin rays */}
      <g stroke={color} strokeWidth="0.5" opacity="0.3">
        <line x1="28" y1="12" x2="30" y2="16" />
        <line x1="32" y1="10" x2="32" y2="16" />
        <line x1="36" y1="12" x2="34" y2="16" />
      </g>

      {/* Bottom fin */}
      <ellipse cx="32" cy="50" rx="8" ry="5" fill="url(#bubbleFishFinGradient)" />

      {/* Side fin */}
      <ellipse cx="22" cy="36" rx="6" ry="4" fill="url(#bubbleFishFinGradient)" transform="rotate(-20 22 36)" />

      {/* Eye - very large and cute */}
      <ellipse cx="42" cy="26" rx="11" ry="12" fill="white" />
      <ellipse cx="42" cy="26" rx="8" ry="9" fill="url(#bubbleFishEyeGradient)" />
      {/* Eye pupil */}
      <ellipse cx="44" cy="28" rx="4" ry="5" fill="#1a1a1a" />
      {/* Eye sparkles */}
      <circle cx="40" cy="22" r="2.5" fill="white" />
      <circle cx="46" cy="30" r="1.5" fill="white" opacity="0.7" />
      <circle cx="38" cy="28" r="1" fill="white" opacity="0.5" />

      {/* Cute mouth - kissy */}
      <ellipse cx="54" cy="34" rx="4" ry="3" fill="#FF69B4" />
      <ellipse cx="54" cy="33" rx="2" ry="1.5" fill="#FFB6C1" opacity="0.5" />

      {/* Rosy cheeks */}
      <ellipse cx="48" cy="38" rx="5" ry="3" fill="#FFB6C1" opacity="0.5" />

      {/* Bubbles - magical */}
      <circle cx="58" cy="18" r="4" fill="url(#bubbleFishBubbleGradient)" />
      <circle cx="57" cy="16" r="1" fill="white" />
      <circle cx="62" cy="24" r="2.5" fill="url(#bubbleFishBubbleGradient)" />
      <circle cx="61" cy="23" r="0.8" fill="white" />
      <circle cx="60" cy="12" r="2" fill="url(#bubbleFishBubbleGradient)" />
      <circle cx="59" cy="11" r="0.6" fill="white" />

      {/* Extra shimmer spots */}
      <circle cx="20" cy="30" r="1" fill="white" opacity="0.6" />
      <circle cx="28" cy="26" r="0.8" fill="white" opacity="0.5" />
      <circle cx="36" cy="34" r="0.8" fill="white" opacity="0.4" />
    </svg>
  );
}
