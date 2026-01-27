/**
 * Wolf Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Wolf({ size = 64, color = '#696969' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="wolfBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#808080" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#4A4A4A" />
        </linearGradient>
        {/* Chest gradient */}
        <radialGradient id="wolfChestGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#C8C8C8" />
          <stop offset="70%" stopColor="#A9A9A9" />
          <stop offset="100%" stopColor="#909090" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="wolfHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#808080" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#4A4A4A" />
        </radialGradient>
        {/* Snout gradient */}
        <radialGradient id="wolfSnoutGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#C8C8C8" />
          <stop offset="100%" stopColor="#A9A9A9" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="wolfEyeGradient" cx="40%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Ear inner gradient */}
        <linearGradient id="wolfEarInnerGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C8C8C8" />
          <stop offset="100%" stopColor="#A9A9A9" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="wolfLegGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#707070" />
          <stop offset="100%" stopColor="#4A4A4A" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="34" cy="62" rx="22" ry="4" fill="#000" opacity="0.2" />

      {/* Tail */}
      <path d="M8 38 Q4 32 10 28 Q6 36 14 34" fill="url(#wolfBodyGradient)" />
      <path d="M10 34 Q8 30 12 30" fill="#808080" opacity="0.5" />

      {/* Tail fur texture */}
      <path d="M8 32 Q6 30 8 28" stroke="#4A4A4A" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* Body */}
      <ellipse cx="32" cy="42" rx="18" ry="12" fill="url(#wolfBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="38" rx="10" ry="6" fill="#808080" opacity="0.4" />

      {/* Chest fur */}
      <ellipse cx="42" cy="44" rx="8" ry="8" fill="url(#wolfChestGradient)" />

      {/* Body fur texture */}
      <path d="M26 40 Q28 44 26 48" stroke="#4A4A4A" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M34 38 Q36 44 34 50" stroke="#4A4A4A" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Head */}
      <ellipse cx="52" cy="30" rx="12" ry="10" fill="url(#wolfHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="48" cy="26" rx="5" ry="4" fill="#808080" opacity="0.5" />

      {/* Ears - pointed wolf ears */}
      <polygon points="44,22 40,10 48,18" fill="url(#wolfBodyGradient)" />
      <polygon points="56,20 60,8 62,18" fill="url(#wolfBodyGradient)" />

      {/* Ear inner */}
      <polygon points="44,22 42,14 46,20" fill="url(#wolfEarInnerGradient)" />
      <polygon points="56,20 60,12 60,18" fill="url(#wolfEarInnerGradient)" />

      {/* Ear fur tufts */}
      <path d="M40 10 L38 8 M40 10 L42 8" stroke="#4A4A4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M60 8 L58 6 M60 8 L62 6" stroke="#4A4A4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* Snout */}
      <ellipse cx="60" cy="34" rx="6" ry="4" fill="url(#wolfSnoutGradient)" />

      {/* Snout highlight */}
      <ellipse cx="58" cy="32" rx="3" ry="2" fill="#D8D8D8" opacity="0.4" />

      {/* Nose */}
      <ellipse cx="64" cy="32" rx="2.5" ry="2" fill="#1a1a1a" />
      <ellipse cx="64" cy="31.5" rx="1.5" ry="1" fill="#2a2a2a" />
      <ellipse cx="63" cy="31" rx="0.5" ry="0.3" fill="#4a4a4a" opacity="0.5" />

      {/* Eyes - intense wolf eyes */}
      <ellipse cx="50" cy="28" rx="3.5" ry="4" fill="url(#wolfEyeGradient)" />
      <ellipse cx="56" cy="28" rx="3.5" ry="4" fill="url(#wolfEyeGradient)" />

      {/* Pupils - vertical slit */}
      <ellipse cx="50" cy="28" rx="1.2" ry="2.5" fill="#1a1a1a" />
      <ellipse cx="56" cy="28" rx="1.2" ry="2.5" fill="#1a1a1a" />

      {/* Eye shine */}
      <circle cx="51" cy="27" r="0.8" fill="white" opacity="0.8" />
      <circle cx="57" cy="27" r="0.8" fill="white" opacity="0.8" />

      {/* Eye outline */}
      <ellipse cx="50" cy="28" rx="3.5" ry="4" stroke="#4A4A4A" strokeWidth="0.5" fill="none" opacity="0.4" />
      <ellipse cx="56" cy="28" rx="3.5" ry="4" stroke="#4A4A4A" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Brow markings */}
      <path d="M46 24 Q50 22 52 24" stroke="#4A4A4A" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M54 24 Q56 22 60 24" stroke="#4A4A4A" strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Mouth */}
      <path d="M58 38 Q60 39 62 38" stroke="#4A4A4A" strokeWidth="0.8" fill="none" />

      {/* Whisker marks */}
      <circle cx="56" cy="34" r="0.5" fill="#4A4A4A" opacity="0.4" />
      <circle cx="58" cy="36" r="0.5" fill="#4A4A4A" opacity="0.4" />
      <circle cx="62" cy="36" r="0.5" fill="#4A4A4A" opacity="0.4" />

      {/* Legs */}
      <rect x="20" y="50" width="5" height="12" rx="2" fill="url(#wolfLegGradient)" />
      <rect x="28" y="50" width="5" height="12" rx="2" fill="url(#wolfLegGradient)" />
      <rect x="36" y="50" width="5" height="12" rx="2" fill="url(#wolfLegGradient)" />
      <rect x="44" y="50" width="5" height="12" rx="2" fill="url(#wolfLegGradient)" />

      {/* Leg highlights */}
      <rect x="20" y="50" width="2.5" height="10" rx="1" fill="#808080" opacity="0.3" />
      <rect x="28" y="50" width="2.5" height="10" rx="1" fill="#808080" opacity="0.3" />
      <rect x="36" y="50" width="2.5" height="10" rx="1" fill="#808080" opacity="0.3" />
      <rect x="44" y="50" width="2.5" height="10" rx="1" fill="#808080" opacity="0.3" />

      {/* Paws */}
      <ellipse cx="22.5" cy="62" rx="3" ry="1.5" fill="#4A4A4A" />
      <ellipse cx="30.5" cy="62" rx="3" ry="1.5" fill="#4A4A4A" />
      <ellipse cx="38.5" cy="62" rx="3" ry="1.5" fill="#4A4A4A" />
      <ellipse cx="46.5" cy="62" rx="3" ry="1.5" fill="#4A4A4A" />

      {/* Face markings */}
      <path d="M48 32 Q52 36 56 32" stroke="#C8C8C8" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}
