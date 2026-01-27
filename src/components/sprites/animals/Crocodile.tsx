/**
 * Crocodile Sprite Component
 * Enhanced with gradients, scales, and detailed features
 */

import type { SpriteProps } from '../types';

export function Crocodile({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="crocodileBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2E9E2E" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Belly gradient */}
        <linearGradient id="crocodileBellyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#90B860" />
          <stop offset="100%" stopColor="#6B8E23" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="crocodileHeadGradient" cx="60%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2E9E2E" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="crocodileEyeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Scale pattern */}
        <pattern id="crocodileScalePattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 3 Q3 0 6 3 Q3 6 0 3" fill="none" stroke="#1a6b1a" strokeWidth="0.4" opacity="0.4" />
        </pattern>
        {/* Shine gradient */}
        <linearGradient id="crocodileShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Spike gradient */}
        <linearGradient id="crocodileSpikeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#006400" />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
      </defs>

      {/* Tail */}
      <polygon points="-2,36 14,32 14,42" fill="url(#crocodileBodyGradient)" />
      {/* Tail tip detail */}
      <polygon points="-2,36 6,34 6,38" fill="#1a6b1a" opacity="0.3" />
      {/* Tail scales */}
      <g stroke="#1a6b1a" strokeWidth="0.5" opacity="0.4">
        <line x1="2" y1="34" x2="2" y2="38" />
        <line x1="6" y1="33" x2="6" y2="39" />
        <line x1="10" y1="33" x2="10" y2="40" />
      </g>
      {/* Tail spikes */}
      <g fill="url(#crocodileSpikeGradient)">
        <polygon points="4,32 6,28 8,32" />
        <polygon points="10,32 12,27 14,32" />
      </g>

      {/* Legs */}
      <ellipse cx="18" cy="46" rx="5" ry="7" fill="url(#crocodileBodyGradient)" />
      <ellipse cx="42" cy="46" rx="5" ry="7" fill="url(#crocodileBodyGradient)" />
      {/* Feet with claws */}
      <g fill="#1a6b1a">
        <ellipse cx="16" cy="52" rx="2" ry="3" />
        <ellipse cx="18" cy="53" rx="2" ry="3" />
        <ellipse cx="20" cy="52" rx="2" ry="3" />
        <ellipse cx="40" cy="52" rx="2" ry="3" />
        <ellipse cx="42" cy="53" rx="2" ry="3" />
        <ellipse cx="44" cy="52" rx="2" ry="3" />
      </g>

      {/* Body */}
      <ellipse cx="30" cy="36" rx="22" ry="12" fill="url(#crocodileBodyGradient)" />
      {/* Body scale texture */}
      <ellipse cx="30" cy="36" rx="22" ry="12" fill="url(#crocodileScalePattern)" />
      {/* Body shine */}
      <ellipse cx="24" cy="30" rx="10" ry="5" fill="url(#crocodileShineGradient)" />

      {/* Belly - lighter */}
      <ellipse cx="30" cy="40" rx="16" ry="6" fill="url(#crocodileBellyGradient)" opacity="0.4" />
      {/* Belly segments */}
      <g stroke="#6B8E23" strokeWidth="0.5" opacity="0.3">
        <line x1="18" y1="40" x2="42" y2="40" />
        <line x1="20" y1="43" x2="40" y2="43" />
      </g>

      {/* Back ridge/spikes */}
      <g fill="url(#crocodileSpikeGradient)">
        <polygon points="16,26 18,20 20,26" />
        <polygon points="22,24 25,17 28,24" />
        <polygon points="30,24 33,18 36,24" />
        <polygon points="38,26 40,21 42,26" />
      </g>

      {/* Head */}
      <ellipse cx="54" cy="36" rx="16" ry="10" fill="url(#crocodileHeadGradient)" />
      {/* Head scale texture */}
      <ellipse cx="54" cy="36" rx="16" ry="10" fill="url(#crocodileScalePattern)" />

      {/* Snout */}
      <ellipse cx="66" cy="38" rx="8" ry="5" fill="url(#crocodileHeadGradient)" />
      {/* Snout ridge */}
      <path d="M58 36 Q66 34 72 36" stroke="#1a6b1a" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Nostrils */}
      <ellipse cx="70" cy="36" rx="1.5" ry="1" fill="#1a6b1a" />
      <ellipse cx="72" cy="36" rx="1.5" ry="1" fill="#1a6b1a" />

      {/* Upper jaw bumps */}
      <g fill="#1a6b1a" opacity="0.3">
        <circle cx="62" cy="34" r="1.5" />
        <circle cx="66" cy="33" r="1.5" />
        <circle cx="70" cy="34" r="1" />
      </g>

      {/* Teeth */}
      <g fill="white">
        <polygon points="56,44 58,48 60,44" />
        <polygon points="62,44 64,49 66,44" />
        <polygon points="68,44 70,48 72,44" />
      </g>
      {/* Teeth shadows */}
      <g fill="#e0e0e0" opacity="0.5">
        <polygon points="57,44 58,47 59,44" />
        <polygon points="63,44 64,48 65,44" />
        <polygon points="69,44 70,47 71,44" />
      </g>

      {/* Lower jaw hint */}
      <path d="M52 44 Q62 48 72 44" stroke="#1a6b1a" strokeWidth="1.5" fill="none" />

      {/* Eye ridge */}
      <ellipse cx="50" cy="30" rx="5" ry="3" fill="#1a6b1a" opacity="0.3" />

      {/* Eye - reptilian */}
      <ellipse cx="50" cy="30" rx="4.5" ry="5" fill="url(#crocodileEyeGradient)" />
      {/* Vertical slit pupil */}
      <ellipse cx="50" cy="30" rx="1.5" ry="4" fill="#1a1a1a" />
      {/* Eye shine */}
      <circle cx="49" cy="28" r="1" fill="white" opacity="0.6" />
      <circle cx="51" cy="32" r="0.5" fill="white" opacity="0.3" />

      {/* Brow ridge */}
      <path d="M46 26 Q50 24 54 26" stroke="#1a6b1a" strokeWidth="2" fill="none" />

      {/* Scale details on head */}
      <g fill="#1a6b1a" opacity="0.25">
        <circle cx="46" cy="34" r="2" />
        <circle cx="56" cy="32" r="1.5" />
        <circle cx="52" cy="38" r="1.5" />
      </g>

      {/* Cute blush (to make it kid-friendly) */}
      <ellipse cx="58" cy="40" rx="3" ry="2" fill="#FFB6C1" opacity="0.3" />
    </svg>
  );
}
