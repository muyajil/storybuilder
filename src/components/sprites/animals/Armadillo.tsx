/**
 * Armadillo Sprite Component
 * Enhanced with gradients, armor plates, and detailed features
 */

import type { SpriteProps } from '../types';

export function Armadillo({ size = 64, color = '#A0522D' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="armadilloBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#C4A484" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Shell band gradient */}
        <linearGradient id="armadilloBandGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#BDA07D" />
          <stop offset="30%" stopColor="#8B7355" />
          <stop offset="70%" stopColor="#6B5344" />
          <stop offset="100%" stopColor="#8B7355" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="armadilloHeadGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#C4A484" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Shine gradient */}
        <linearGradient id="armadilloShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="armadilloEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="armadilloNoseGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E8D4B8" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>
      </defs>

      {/* Legs */}
      <ellipse cx="18" cy="54" rx="4" ry="3" fill={color} />
      <ellipse cx="28" cy="55" rx="4" ry="3" fill={color} />
      <ellipse cx="40" cy="55" rx="4" ry="3" fill={color} />
      <ellipse cx="48" cy="54" rx="4" ry="3" fill={color} />

      {/* Tail */}
      <path d="M54 42 Q62 42 60 46 Q58 50 54 48" fill="url(#armadilloBodyGradient)" stroke={color} strokeWidth="0.5" />
      {/* Tail bands */}
      <path d="M56 43 L56 47" stroke="#8B7355" strokeWidth="1" opacity="0.6" />
      <path d="M58 44 L58 46" stroke="#8B7355" strokeWidth="1" opacity="0.6" />

      {/* Main shell body */}
      <ellipse cx="34" cy="40" rx="22" ry="14" fill="url(#armadilloBodyGradient)" />

      {/* Armor bands with 3D effect */}
      {[...Array(7)].map((_, i) => (
        <g key={i}>
          <ellipse
            cx={16 + i * 6}
            cy="40"
            rx="3"
            ry="13"
            fill="url(#armadilloBandGradient)"
            stroke="#6B5344"
            strokeWidth="0.5"
          />
          {/* Band highlight */}
          <ellipse
            cx={15 + i * 6}
            cy="36"
            rx="1"
            ry="6"
            fill="white"
            opacity="0.15"
          />
        </g>
      ))}

      {/* Shell top shine */}
      <ellipse cx="30" cy="32" rx="12" ry="4" fill="url(#armadilloShineGradient)" />

      {/* Head */}
      <ellipse cx="10" cy="42" rx="10" ry="8" fill="url(#armadilloHeadGradient)" />
      {/* Head armor plate */}
      <ellipse cx="12" cy="40" rx="6" ry="5" fill="#8B7355" opacity="0.4" />

      {/* Ear */}
      <ellipse cx="14" cy="34" rx="3" ry="4" fill={color} />
      <ellipse cx="14" cy="34" rx="1.5" ry="2.5" fill="#D2B48C" opacity="0.5" />

      {/* Eye - large and cute */}
      <ellipse cx="6" cy="40" rx="3.5" ry="4" fill="white" />
      <ellipse cx="5.5" cy="40" rx="2.5" ry="3" fill="url(#armadilloEyeGradient)" />
      <circle cx="5" cy="39" r="1" fill="white" />
      <circle cx="6" cy="41" r="0.5" fill="white" opacity="0.5" />

      {/* Snout */}
      <ellipse cx="2" cy="46" rx="4" ry="3" fill="url(#armadilloNoseGradient)" />
      {/* Nostrils */}
      <circle cx="1" cy="45" r="0.8" fill="#8B7355" />
      <circle cx="3" cy="45" r="0.8" fill="#8B7355" />

      {/* Cute smile */}
      <path d="M0 48 Q2 50 4 48" stroke="#8B7355" strokeWidth="0.8" fill="none" />

      {/* Claws on feet */}
      <g fill="#6B5344">
        <ellipse cx="16" cy="56" rx="1" ry="1.5" />
        <ellipse cx="18" cy="56" rx="1" ry="1.5" />
        <ellipse cx="20" cy="56" rx="1" ry="1.5" />
      </g>
    </svg>
  );
}
