/**
 * Fish Sprite Component
 * Enhanced with gradients, shimmering scales, and aquatic details
 */

import type { SpriteProps } from '../types';

export function Fish({ size = 64, color = '#FF6347' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="fishBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF7F6B" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#CD4F39" />
        </linearGradient>
        {/* Belly gradient */}
        <linearGradient id="fishBellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4E1" />
          <stop offset="50%" stopColor="#FFC0B0" />
          <stop offset="100%" stopColor="#FFA090" />
        </linearGradient>
        {/* Fin gradient */}
        <linearGradient id="fishFinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#AA3020" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="fishEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#2F2F2F" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Scale shimmer gradient */}
        <linearGradient id="fishScaleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Body with gradient */}
      <ellipse cx="32" cy="32" rx="20" ry="12" fill="url(#fishBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="28" rx="12" ry="6" fill="url(#fishScaleGrad)" />
      {/* Belly lighter area */}
      <ellipse cx="32" cy="36" rx="14" ry="6" fill="url(#fishBellyGrad)" opacity="0.6" />

      {/* Scale pattern */}
      <g opacity="0.4">
        <path d="M22 28 Q26 32 22 36" stroke="#CD4F39" strokeWidth="0.8" fill="none" />
        <path d="M28 26 Q32 30 28 34" stroke="#CD4F39" strokeWidth="0.8" fill="none" />
        <path d="M34 26 Q38 30 34 34" stroke="#CD4F39" strokeWidth="0.8" fill="none" />
        <path d="M40 28 Q44 32 40 36" stroke="#CD4F39" strokeWidth="0.8" fill="none" />
      </g>
      {/* Scale shimmer */}
      <g opacity="0.3">
        <path d="M24 30 Q26 32 24 34" stroke="white" strokeWidth="0.5" fill="none" />
        <path d="M30 28 Q32 30 30 32" stroke="white" strokeWidth="0.5" fill="none" />
        <path d="M36 28 Q38 30 36 32" stroke="white" strokeWidth="0.5" fill="none" />
      </g>

      {/* Tail fin with gradient */}
      <polygon points="52,32 64,20 64,44" fill="url(#fishFinGrad)" />
      {/* Tail fin rays */}
      <path d="M54,28 L62,22" stroke="#AA3020" strokeWidth="0.5" opacity="0.5" />
      <path d="M54,32 L64,32" stroke="#AA3020" strokeWidth="0.5" opacity="0.5" />
      <path d="M54,36 L62,42" stroke="#AA3020" strokeWidth="0.5" opacity="0.5" />
      {/* Tail highlight */}
      <path d="M56,26 L60,24" stroke="#FF9090" strokeWidth="1" opacity="0.4" />

      {/* Dorsal fin (top) with gradient */}
      <polygon points="28,20 36,8 40,20" fill="url(#fishFinGrad)" />
      {/* Dorsal fin rays */}
      <path d="M30,18 L34,10" stroke="#AA3020" strokeWidth="0.5" opacity="0.5" />
      <path d="M34,18 L36,10" stroke="#AA3020" strokeWidth="0.5" opacity="0.5" />
      <path d="M38,18 L38,12" stroke="#AA3020" strokeWidth="0.5" opacity="0.5" />
      {/* Dorsal highlight */}
      <path d="M32,16 L35,10" stroke="#FF9090" strokeWidth="0.8" opacity="0.4" />

      {/* Ventral fin (bottom) with gradient */}
      <polygon points="28,44 36,56 40,44" fill="url(#fishFinGrad)" />
      {/* Ventral fin rays */}
      <path d="M30,46 L34,54" stroke="#AA3020" strokeWidth="0.5" opacity="0.5" />
      <path d="M34,46 L36,54" stroke="#AA3020" strokeWidth="0.5" opacity="0.5" />
      <path d="M38,46 L38,52" stroke="#AA3020" strokeWidth="0.5" opacity="0.5" />

      {/* Pectoral fins (side) */}
      <ellipse cx="26" cy="36" rx="6" ry="3" fill="url(#fishFinGrad)" transform="rotate(-20 26 36)" />
      <path d="M22,35 L28,38" stroke="#AA3020" strokeWidth="0.4" opacity="0.4" />

      {/* Eye with depth */}
      <ellipse cx="18" cy="30" rx="4.5" ry="5" fill="white" />
      {/* Eye shadow */}
      <ellipse cx="18" cy="31" rx="4" ry="4.5" fill="#f8f8f8" />
      {/* Pupil with gradient */}
      <circle cx="19" cy="30" r="2.5" fill="url(#fishEyeGrad)" />
      {/* Eye sparkle */}
      <circle cx="18" cy="29" r="1" fill="white" />
      <circle cx="20" cy="31" r="0.4" fill="white" />

      {/* Gill lines */}
      <path d="M24 28 Q26 32 24 36" stroke="#CD4F39" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M22 29 Q23 32 22 35" stroke="#CD4F39" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* Mouth */}
      <path d="M12 32 Q14 34 12 36" stroke="#AA3020" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Bubbles */}
      <circle cx="8" cy="28" r="1.2" fill="#87CEEB" opacity="0.5" />
      <circle cx="6" cy="32" r="0.8" fill="#87CEEB" opacity="0.4" />
      <circle cx="10" cy="24" r="0.6" fill="#B0E0E6" opacity="0.3" />

      {/* Shine effect */}
      <ellipse cx="28" cy="26" rx="8" ry="2" fill="white" opacity="0.15" />
    </svg>
  );
}
