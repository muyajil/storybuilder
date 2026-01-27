/**
 * Eagle Sprite Component
 * Enhanced with gradients, majestic feathers, and powerful presence
 */

import type { SpriteProps } from '../types';

export function Eagle({ size = 64, color = '#4a3728' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="eagleBodyGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#6B4D35" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#2D1F14" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="eagleWingGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#5C4030" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#1F1610" />
        </linearGradient>
        {/* Head gradient - white */}
        <radialGradient id="eagleHeadGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </radialGradient>
        {/* Beak gradient */}
        <linearGradient id="eagleBeakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#CC9900" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="eagleEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="50%" stopColor="#4a3728" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Tail gradient */}
        <linearGradient id="eagleTailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#1F1610" />
        </linearGradient>
      </defs>

      {/* Left wing with feathers */}
      <path d="M32 32 L4 18 L8 26 L0 22 L6 30 L2 28 L10 34 L32 32" fill="url(#eagleWingGrad)" />
      {/* Left wing feather details */}
      <path d="M8,24 L14,28" stroke="#2D1F14" strokeWidth="0.8" opacity="0.5" />
      <path d="M4,26 L10,30" stroke="#2D1F14" strokeWidth="0.8" opacity="0.5" />
      <path d="M6,22 L12,26" stroke="#2D1F14" strokeWidth="0.8" opacity="0.5" />
      {/* Wing highlight */}
      <path d="M16 28 L24 30 L16 32" fill="#6B4D35" opacity="0.4" />

      {/* Right wing with feathers */}
      <path d="M32 32 L60 18 L56 26 L64 22 L58 30 L62 28 L54 34 L32 32" fill="url(#eagleWingGrad)" />
      {/* Right wing feather details */}
      <path d="M56,24 L50,28" stroke="#2D1F14" strokeWidth="0.8" opacity="0.5" />
      <path d="M60,26 L54,30" stroke="#2D1F14" strokeWidth="0.8" opacity="0.5" />
      <path d="M58,22 L52,26" stroke="#2D1F14" strokeWidth="0.8" opacity="0.5" />
      {/* Wing highlight */}
      <path d="M48 28 L40 30 L48 32" fill="#6B4D35" opacity="0.4" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="40" rx="12" ry="16" fill="url(#eagleBodyGrad)" />
      {/* Body feather texture */}
      <path d="M26,36 Q28,38 26,40" stroke="#5C4030" strokeWidth="0.6" fill="none" opacity="0.4" />
      <path d="M30,34 Q32,36 30,38" stroke="#5C4030" strokeWidth="0.6" fill="none" opacity="0.4" />
      <path d="M34,34 Q32,36 34,38" stroke="#5C4030" strokeWidth="0.6" fill="none" opacity="0.4" />
      <path d="M38,36 Q36,38 38,40" stroke="#5C4030" strokeWidth="0.6" fill="none" opacity="0.4" />
      {/* Body highlight */}
      <ellipse cx="30" cy="36" rx="6" ry="8" fill="#6B4D35" opacity="0.3" />
      {/* Body shadow */}
      <ellipse cx="34" cy="50" rx="8" ry="4" fill="#1F1610" opacity="0.3" />

      {/* Head with white gradient */}
      <circle cx="32" cy="22" r="10" fill="url(#eagleHeadGrad)" />
      {/* Head feather texture */}
      <path d="M26,18 Q28,20 26,22" stroke="#D0D0D0" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M38,18 Q36,20 38,22" stroke="#D0D0D0" strokeWidth="0.5" fill="none" opacity="0.5" />
      {/* Brow ridge */}
      <path d="M26 18 Q32 16 38 18" stroke="#C0C0C0" strokeWidth="1" fill="none" />

      {/* Fierce eye */}
      <ellipse cx="35" cy="20" rx="2.5" ry="3" fill="white" />
      <ellipse cx="35" cy="20" rx="2" ry="2.5" fill="#FFFAF0" />
      <circle cx="35" cy="20" r="1.5" fill="url(#eagleEyeGrad)" />
      {/* Eye sparkle */}
      <circle cx="34.5" cy="19.5" r="0.5" fill="white" />
      {/* Brow for fierce look */}
      <path d="M32 18 Q35 17 38 18" stroke="#8B7355" strokeWidth="1.2" fill="none" />

      {/* Hooked beak with gradient */}
      <polygon points="38,22 50,26 48,30 38,28" fill="url(#eagleBeakGrad)" />
      {/* Beak hook */}
      <path d="M48,26 Q52,28 50,30 Q48,32 46,30" fill="#CC9900" />
      {/* Beak nostril */}
      <circle cx="42" cy="25" r="0.8" fill="#8B4513" />
      {/* Beak highlight */}
      <path d="M40,23 L46,25" stroke="#FFF5CC" strokeWidth="0.8" opacity="0.5" />
      {/* Lower beak */}
      <path d="M38,28 L46,30 L44,32 L38,29" fill="#DAA520" />

      {/* Tail feathers with gradient */}
      <polygon points="26,54 32,64 38,54" fill="url(#eagleTailGrad)" />
      {/* Tail feather details */}
      <path d="M28,56 L32,64" stroke="#1F1610" strokeWidth="0.5" opacity="0.5" />
      <path d="M32,54 L32,64" stroke="#1F1610" strokeWidth="0.5" opacity="0.5" />
      <path d="M36,56 L32,64" stroke="#1F1610" strokeWidth="0.5" opacity="0.5" />

      {/* Talons */}
      <path d="M28,52 L26,56 L24,54 L26,58 L28,56 L30,58 L28,52" fill="#FFD700" />
      <path d="M36,52 L38,56 L40,54 L38,58 L36,56 L34,58 L36,52" fill="#FFD700" />
      {/* Talon detail */}
      <path d="M24,54 L22,56" stroke="#CC9900" strokeWidth="1" />
      <path d="M40,54 L42,56" stroke="#CC9900" strokeWidth="1" />
    </svg>
  );
}
