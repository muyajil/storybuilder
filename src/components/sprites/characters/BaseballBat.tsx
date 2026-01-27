/**
 * BaseballBat Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function BaseballBat({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Wood grain gradient */}
        <linearGradient id="baseballBatWoodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="30%" stopColor={color} />
          <stop offset="60%" stopColor="#6B3510" />
          <stop offset="100%" stopColor="#8B4513" />
        </linearGradient>
        {/* Barrel end gradient */}
        <radialGradient id="baseballBatBarrelGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A67C52" />
          <stop offset="100%" stopColor="#6B3510" />
        </radialGradient>
        {/* Handle wrap gradient */}
        <linearGradient id="baseballBatHandleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#444" />
          <stop offset="50%" stopColor="#222" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>
        {/* Highlight gradient */}
        <linearGradient id="baseballBatHighlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Bat shadow */}
      <path d="M10 58 Q6 54 10 50 L50 10 Q58 6 62 10 Q66 14 62 18 L22 58 Q18 62 10 58"
            fill="#000" opacity="0.15" transform="translate(1, 1)" />

      {/* Main bat body */}
      <path d="M8 56 Q4 52 8 48 L48 8 Q56 4 60 8 Q64 12 60 16 L20 56 Q16 60 8 56"
            fill="url(#baseballBatWoodGradient)" />

      {/* Barrel end (thick part) */}
      <ellipse cx="54" cy="12" rx="8" ry="6" fill="url(#baseballBatBarrelGradient)"
               transform="rotate(-45 54 12)" />

      {/* Wood grain lines */}
      <path d="M18 46 L42 22" stroke="#6B3510" strokeWidth="0.5" opacity="0.4" />
      <path d="M16 42 L38 20" stroke="#A67C52" strokeWidth="0.3" opacity="0.3" />
      <path d="M20 50 L46 24" stroke="#6B3510" strokeWidth="0.5" opacity="0.3" />
      <path d="M14 40 L36 18" stroke="#A67C52" strokeWidth="0.3" opacity="0.3" />

      {/* Bat highlight */}
      <path d="M12 50 Q10 48 12 46 L44 14 Q48 12 50 14"
            stroke="url(#baseballBatHighlightGradient)" strokeWidth="3" fill="none" />

      {/* Handle grip area */}
      <rect x="6" y="48" width="14" height="10" fill="url(#baseballBatHandleGradient)"
            transform="rotate(-45 13 53)" rx="2" />

      {/* Grip texture lines */}
      <path d="M6 52 L10 48" stroke="#555" strokeWidth="1" />
      <path d="M8 54 L12 50" stroke="#555" strokeWidth="1" />
      <path d="M10 56 L14 52" stroke="#555" strokeWidth="1" />
      <path d="M12 58 L16 54" stroke="#555" strokeWidth="1" />

      {/* Handle knob */}
      <circle cx="8" cy="56" r="3" fill="#333" />
      <circle cx="8" cy="56" r="2" fill="#444" />
      <circle cx="7" cy="55" r="0.8" fill="#666" />

      {/* Brand mark area */}
      <ellipse cx="36" cy="28" rx="6" ry="3" fill="#6B3510" opacity="0.3"
               transform="rotate(-45 36 28)" />
    </svg>
  );
}
