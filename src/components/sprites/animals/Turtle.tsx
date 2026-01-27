/**
 * Turtle Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Turtle({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Shell outer gradient */}
        <radialGradient id="turtleShellOuterGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#A0724D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5D3210" />
        </radialGradient>
        {/* Shell top gradient */}
        <radialGradient id="turtleShellTopGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#32AB32" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#186B18" />
        </radialGradient>
        {/* Shell pattern gradient */}
        <linearGradient id="turtlePatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#186B18" />
          <stop offset="100%" stopColor="#006400" />
        </linearGradient>
        {/* Skin gradient */}
        <linearGradient id="turtleSkinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#32AB32" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#186B18" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="turtleEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="52" rx="24" ry="4" fill="#000" opacity="0.2" />

      {/* Shell base */}
      <ellipse cx="32" cy="36" rx="22" ry="16" fill="url(#turtleShellOuterGradient)" />

      {/* Shell base highlight */}
      <ellipse cx="28" cy="42" rx="14" ry="8" fill="#B08060" opacity="0.3" />

      {/* Shell top */}
      <ellipse cx="32" cy="34" rx="18" ry="12" fill="url(#turtleShellTopGradient)" />

      {/* Shell highlight */}
      <ellipse cx="26" cy="30" rx="8" ry="5" fill="#42BB42" opacity="0.5" />

      {/* Shell pattern - hexagonal scutes */}
      {/* Central scute */}
      <path d="M32 24 L38 28 L38 36 L32 40 L26 36 L26 28 Z" stroke="url(#turtlePatternGradient)" strokeWidth="1" fill="none" opacity="0.6" />

      {/* Pattern lines */}
      <path d="M32 22 L32 46" stroke="url(#turtlePatternGradient)" strokeWidth="1" opacity="0.4" />
      <path d="M20 28 L44 28" stroke="url(#turtlePatternGradient)" strokeWidth="1" opacity="0.4" />
      <path d="M18 38 L46 38" stroke="url(#turtlePatternGradient)" strokeWidth="1" opacity="0.4" />

      {/* Diagonal pattern lines */}
      <path d="M24 24 L20 32" stroke="url(#turtlePatternGradient)" strokeWidth="0.8" opacity="0.3" />
      <path d="M40 24 L44 32" stroke="url(#turtlePatternGradient)" strokeWidth="0.8" opacity="0.3" />
      <path d="M24 44 L20 36" stroke="url(#turtlePatternGradient)" strokeWidth="0.8" opacity="0.3" />
      <path d="M40 44 L44 36" stroke="url(#turtlePatternGradient)" strokeWidth="0.8" opacity="0.3" />

      {/* Shell edge pattern */}
      <ellipse cx="32" cy="34" rx="18" ry="12" stroke="#5D3210" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Head */}
      <ellipse cx="54" cy="36" rx="8" ry="6" fill="url(#turtleSkinGradient)" />

      {/* Head highlight */}
      <ellipse cx="52" cy="34" rx="4" ry="3" fill="#42BB42" opacity="0.5" />

      {/* Head scales */}
      <circle cx="50" cy="38" r="1" fill="#186B18" opacity="0.3" />
      <circle cx="52" cy="40" r="0.8" fill="#186B18" opacity="0.3" />

      {/* Eye */}
      <circle cx="58" cy="34" r="2.5" fill="white" />
      <circle cx="58" cy="34" r="1.5" fill="url(#turtleEyeGradient)" />
      <circle cx="58.5" cy="33.5" r="0.5" fill="white" opacity="0.8" />

      {/* Nostril */}
      <circle cx="60" cy="36" r="0.5" fill="#186B18" />

      {/* Mouth */}
      <path d="M56 40 Q58 41 60 40" stroke="#186B18" strokeWidth="0.8" fill="none" />

      {/* Cheek */}
      <circle cx="56" cy="38" r="1.5" fill="#42BB42" opacity="0.3" />

      {/* Front legs/flippers */}
      <ellipse cx="18" cy="28" rx="6" ry="4" fill="url(#turtleSkinGradient)" />
      <ellipse cx="18" cy="27" rx="4" ry="2.5" fill="#42BB42" opacity="0.4" />

      <ellipse cx="46" cy="28" rx="6" ry="4" fill="url(#turtleSkinGradient)" />
      <ellipse cx="46" cy="27" rx="4" ry="2.5" fill="#42BB42" opacity="0.4" />

      {/* Back legs/flippers */}
      <ellipse cx="18" cy="44" rx="6" ry="4" fill="url(#turtleSkinGradient)" />
      <ellipse cx="18" cy="43" rx="4" ry="2.5" fill="#42BB42" opacity="0.4" />

      <ellipse cx="46" cy="44" rx="6" ry="4" fill="url(#turtleSkinGradient)" />
      <ellipse cx="46" cy="43" rx="4" ry="2.5" fill="#42BB42" opacity="0.4" />

      {/* Flipper texture */}
      <path d="M14 28 L12 30" stroke="#186B18" strokeWidth="0.5" opacity="0.4" />
      <path d="M16 29 L14 31" stroke="#186B18" strokeWidth="0.5" opacity="0.4" />
      <path d="M50 28 L52 30" stroke="#186B18" strokeWidth="0.5" opacity="0.4" />
      <path d="M48 29 L50 31" stroke="#186B18" strokeWidth="0.5" opacity="0.4" />

      {/* Tail */}
      <polygon points="10,36 4,34 4,38" fill="url(#turtleSkinGradient)" />
      <polygon points="10,36 6,35 6,37" fill="#42BB42" opacity="0.4" />

      {/* Bubbles (aquatic feel) */}
      <circle cx="62" cy="28" r="1.5" fill="#E8F0FF" opacity="0.4" />
      <circle cx="60" cy="24" r="1" fill="#E8F0FF" opacity="0.3" />
      <circle cx="56" cy="26" r="0.8" fill="#E8F0FF" opacity="0.3" />
    </svg>
  );
}
