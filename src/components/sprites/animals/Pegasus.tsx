/**
 * Pegasus Sprite Component
 * Enhanced with gradients, ethereal glow, and expressive features
 */

import type { SpriteProps } from '../types';

export function Pegasus({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="pegasusBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#F0F0FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#E6E6FA" stopOpacity="1" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="pegasusWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="50%" stopColor="#F0F0FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E6E6FA" stopOpacity="0.8" />
        </linearGradient>
        {/* Mane gradient */}
        <linearGradient id="pegasusManeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E6E6FA" stopOpacity="1" />
          <stop offset="50%" stopColor="#D8BFD8" stopOpacity="1" />
          <stop offset="100%" stopColor="#DDA0DD" stopOpacity="1" />
        </linearGradient>
        {/* Horn/ethereal glow */}
        <linearGradient id="pegasusGlowGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#E6E6FA" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="pegasusHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="pegasusEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#4169E1" stopOpacity="1" />
          <stop offset="100%" stopColor="#191970" stopOpacity="1" />
        </radialGradient>
      </defs>

      {/* Tail */}
      <path d="M52 42 Q62 38 58 48 Q56 56 52 52" fill="url(#pegasusManeGradient)" />
      <path d="M54 44 Q60 42 58 50" stroke="#D8BFD8" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Back legs */}
      <path d="M40 50 L44 60" stroke="url(#pegasusBodyGradient)" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="44" cy="61" rx="2" ry="1.5" fill="#D8BFD8" />

      {/* Front legs */}
      <path d="M28 50 L26 60" stroke="url(#pegasusBodyGradient)" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="26" cy="61" rx="2" ry="1.5" fill="#D8BFD8" />

      {/* Body */}
      <ellipse cx="34" cy="38" rx="18" ry="12" fill="url(#pegasusBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="30" cy="34" rx="10" ry="6" fill="url(#pegasusHighlight)" />

      {/* Wings - left */}
      <path d="M20 34 Q8 26 6 36 Q4 46 14 44" fill="url(#pegasusWingGradient)" />
      <path d="M18 36 Q10 30 8 38" stroke="#E6E6FA" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M16 38 Q8 34 6 42" stroke="#E6E6FA" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Wings - right */}
      <path d="M48 34 Q60 26 58 36 Q56 46 48 44" fill="url(#pegasusWingGradient)" />
      <path d="M50 36 Q56 30 56 38" stroke="#E6E6FA" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M52 38 Q58 34 58 42" stroke="#E6E6FA" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Wing feather tips - ethereal glow */}
      <circle cx="6" cy="38" r="2" fill="#FFD700" opacity="0.4" />
      <circle cx="58" cy="38" r="2" fill="#FFD700" opacity="0.4" />

      {/* Neck */}
      <path d="M16 36 Q12 28 18 20 Q22 16 26 20" stroke="url(#pegasusBodyGradient)" strokeWidth="7" fill="none" strokeLinecap="round" />

      {/* Head */}
      <circle cx="26" cy="20" r="9" fill="url(#pegasusBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="24" cy="16" rx="5" ry="4" fill="url(#pegasusHighlight)" />

      {/* Mane */}
      <path d="M20 12 L16 6 L22 10 L20 4 L26 12" fill="url(#pegasusManeGradient)" />
      <path d="M16 24 Q10 26 12 32" fill="url(#pegasusManeGradient)" />
      <path d="M14 28 Q8 30 10 36" fill="url(#pegasusManeGradient)" opacity="0.8" />

      {/* Ear */}
      <polygon points="22,12 20,6 26,10" fill="url(#pegasusBodyGradient)" />
      <polygon points="22,12 21,8 25,10" fill="#FFE4E1" opacity="0.5" />

      {/* Eye */}
      <ellipse cx="24" cy="18" rx="3" ry="2.5" fill="white" />
      <circle cx="24" cy="18" r="2" fill="url(#pegasusEyeGradient)" />
      <circle cx="23" cy="17" r="0.8" fill="white" />

      {/* Nostril */}
      <circle cx="20" cy="22" r="1" fill="#D8BFD8" />

      {/* Muzzle highlight */}
      <ellipse cx="22" cy="24" rx="4" ry="3" fill="white" opacity="0.3" />

      {/* Sparkles for magical effect */}
      <circle cx="8" cy="30" r="1" fill="#FFD700" opacity="0.6" />
      <circle cx="56" cy="32" r="1" fill="#FFD700" opacity="0.6" />
      <circle cx="32" cy="26" r="0.8" fill="#FFD700" opacity="0.5" />
      <circle cx="40" cy="46" r="0.8" fill="#FFD700" opacity="0.4" />
    </svg>
  );
}
