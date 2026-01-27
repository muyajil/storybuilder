/**
 * Pelican Sprite Component
 * Enhanced with gradients, feather texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Pelican({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="pelicanBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#F5F5F5" stopOpacity="1" />
          <stop offset="100%" stopColor="#E8E8E8" stopOpacity="1" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="pelicanWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#D0D0D0" stopOpacity="1" />
        </linearGradient>
        {/* Pouch gradient */}
        <radialGradient id="pelicanPouchGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE066" stopOpacity="1" />
          <stop offset="70%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="100%" stopColor="#CC9900" stopOpacity="1" />
        </radialGradient>
        {/* Beak gradient */}
        <linearGradient id="pelicanBeakGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFB347" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="pelicanHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Wings */}
      <path d="M18 32 Q6 28 10 44 Q14 50 20 44" fill="url(#pelicanWingGradient)" />
      <path d="M46 32 Q58 28 54 44 Q50 50 44 44" fill="url(#pelicanWingGradient)" />

      {/* Wing feather details */}
      <path d="M12 34 Q14 40 12 46" stroke="#C0C0C0" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M16 32 Q18 40 16 48" stroke="#C0C0C0" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M52 34 Q50 40 52 46" stroke="#C0C0C0" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M48 32 Q46 40 48 48" stroke="#C0C0C0" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Body */}
      <ellipse cx="32" cy="36" rx="14" ry="16" fill="url(#pelicanBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="30" rx="8" ry="10" fill="url(#pelicanHighlight)" />

      {/* Breast feather texture */}
      <path d="M26 38 Q28 44 26 50" stroke="#E0E0E0" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M32 36 Q34 44 32 52" stroke="#E0E0E0" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M38 38 Q36 44 38 50" stroke="#E0E0E0" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Head */}
      <circle cx="32" cy="18" r="10" fill="url(#pelicanBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="28" cy="14" rx="5" ry="4" fill="url(#pelicanHighlight)" />

      {/* Upper beak */}
      <path d="M32 20 L32 26 Q28 28 32 30 Q36 28 32 26" fill="url(#pelicanBeakGradient)" />

      {/* Pouch/throat sac */}
      <path d="M32 30 Q40 36 38 46 Q32 52 26 46 Q24 36 32 30" fill="url(#pelicanPouchGradient)" />

      {/* Pouch highlight */}
      <ellipse cx="30" cy="38" rx="4" ry="6" fill="white" opacity="0.2" />

      {/* Pouch texture lines */}
      <path d="M28 34 Q30 40 28 46" stroke="#CC9900" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M34 34 Q36 40 34 46" stroke="#CC9900" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Eye */}
      <circle cx="28" cy="16" r="3" fill="white" />
      <circle cx="28" cy="16" r="2" fill="#1a1a1a" />
      <circle cx="27" cy="15" r="0.8" fill="white" />

      {/* Eye ring */}
      <circle cx="28" cy="16" r="3.5" fill="none" stroke="#FF8C00" strokeWidth="0.5" />

      {/* Tail feathers */}
      <path d="M32 52 L28 58 M32 52 L32 60 M32 52 L36 58" stroke="#D0D0D0" strokeWidth="2" strokeLinecap="round" />

      {/* Feet */}
      <ellipse cx="26" cy="60" rx="4" ry="2" fill="#FF8C00" />
      <ellipse cx="38" cy="60" rx="4" ry="2" fill="#FF8C00" />
    </svg>
  );
}
