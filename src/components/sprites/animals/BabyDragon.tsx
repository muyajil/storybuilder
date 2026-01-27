/**
 * BabyDragon Sprite Component
 * Enhanced with gradients, scales, and magical details
 */

import type { SpriteProps } from '../types';

export function BabyDragon({ size = 64, color = '#9400D3' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="babyDragonBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B44DE6" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="babyDragonBellyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F0D0F0" />
          <stop offset="100%" stopColor="#DDA0DD" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="babyDragonWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B44DE6" stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </linearGradient>
        {/* Wing membrane */}
        <linearGradient id="babyDragonWingMembraneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8B8E8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#DDA0DD" stopOpacity="0.4" />
        </linearGradient>
        {/* Horn gradient */}
        <linearGradient id="babyDragonHornGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#DDA0DD" />
          <stop offset="100%" stopColor="#FFE4FF" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="babyDragonEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF69B4" />
          <stop offset="50%" stopColor="#FF1493" />
          <stop offset="100%" stopColor="#C71585" />
        </radialGradient>
        {/* Shine */}
        <radialGradient id="babyDragonShineGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Sparkle */}
        <radialGradient id="babyDragonSparkleGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Wings with membrane detail */}
      <g>
        {/* Left wing */}
        <ellipse cx="14" cy="34" rx="12" ry="10" fill="url(#babyDragonWingGradient)" />
        <path d="M8 28 Q6 34 10 42" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M12 26 Q8 34 12 44" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
        <ellipse cx="12" cy="34" rx="8" ry="6" fill="url(#babyDragonWingMembraneGradient)" />

        {/* Right wing */}
        <ellipse cx="50" cy="34" rx="12" ry="10" fill="url(#babyDragonWingGradient)" />
        <path d="M56 28 Q58 34 54 42" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M52 26 Q56 34 52 44" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
        <ellipse cx="52" cy="34" rx="8" ry="6" fill="url(#babyDragonWingMembraneGradient)" />
      </g>

      {/* Tail */}
      <path d="M46 50 Q58 48 56 38 Q62 42 58 52" fill="url(#babyDragonBodyGradient)" />
      {/* Tail spade */}
      <polygon points="58,52 62,48 64,54 60,58 56,54" fill="url(#babyDragonHornGradient)" />

      {/* Body */}
      <ellipse cx="32" cy="46" rx="16" ry="12" fill="url(#babyDragonBodyGradient)" />
      {/* Body scales texture */}
      <g opacity="0.3">
        <circle cx="26" cy="42" r="2" fill={color} />
        <circle cx="32" cy="40" r="2" fill={color} />
        <circle cx="38" cy="42" r="2" fill={color} />
        <circle cx="29" cy="46" r="2" fill={color} />
        <circle cx="35" cy="46" r="2" fill={color} />
      </g>

      {/* Belly */}
      <ellipse cx="32" cy="48" rx="10" ry="7" fill="url(#babyDragonBellyGradient)" />
      {/* Belly segments */}
      <path d="M24 46 Q32 44 40 46" stroke="#C090C0" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M25 49 Q32 47 39 49" stroke="#C090C0" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M26 52 Q32 50 38 52" stroke="#C090C0" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Head */}
      <circle cx="32" cy="26" r="15" fill="url(#babyDragonBodyGradient)" />
      {/* Head shine */}
      <ellipse cx="28" cy="20" rx="6" ry="4" fill="url(#babyDragonShineGradient)" />

      {/* Horns */}
      <ellipse cx="20" cy="14" rx="4" ry="8" fill="url(#babyDragonHornGradient)" />
      <ellipse cx="44" cy="14" rx="4" ry="8" fill="url(#babyDragonHornGradient)" />
      {/* Horn highlights */}
      <ellipse cx="19" cy="12" rx="1" ry="4" fill="white" opacity="0.3" />
      <ellipse cx="43" cy="12" rx="1" ry="4" fill="white" opacity="0.3" />

      {/* Eyes - big and sparkly */}
      <ellipse cx="25" cy="24" rx="6" ry="6.5" fill="white" />
      <ellipse cx="39" cy="24" rx="6" ry="6.5" fill="white" />
      <ellipse cx="25" cy="24" rx="4" ry="4.5" fill="url(#babyDragonEyeGradient)" />
      <ellipse cx="39" cy="24" rx="4" ry="4.5" fill="url(#babyDragonEyeGradient)" />
      {/* Eye pupils */}
      <ellipse cx="26" cy="25" rx="2" ry="2.5" fill="#1a1a1a" />
      <ellipse cx="40" cy="25" rx="2" ry="2.5" fill="#1a1a1a" />
      {/* Eye sparkles */}
      <circle cx="23" cy="22" r="1.5" fill="white" />
      <circle cx="37" cy="22" r="1.5" fill="white" />
      <circle cx="27" cy="26" r="0.8" fill="white" opacity="0.7" />
      <circle cx="41" cy="26" r="0.8" fill="white" opacity="0.7" />

      {/* Cute blush */}
      <ellipse cx="18" cy="30" rx="3" ry="2" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="46" cy="30" rx="3" ry="2" fill="#FFB6C1" opacity="0.5" />

      {/* Nose */}
      <ellipse cx="32" cy="32" rx="4" ry="2.5" fill="#8B008B" />
      {/* Nostrils */}
      <ellipse cx="30" cy="32" rx="1.2" ry="1" fill="#4B004B" />
      <ellipse cx="34" cy="32" rx="1.2" ry="1" fill="#4B004B" />
      {/* Nose highlight */}
      <ellipse cx="32" cy="31" rx="2" ry="1" fill="white" opacity="0.2" />

      {/* Happy mouth */}
      <path d="M27 36 Q32 40 37 36" stroke="#8B008B" strokeWidth="1.5" fill="none" />

      {/* Feet */}
      <ellipse cx="24" cy="57" rx="6" ry="4" fill="url(#babyDragonBodyGradient)" />
      <ellipse cx="40" cy="57" rx="6" ry="4" fill="url(#babyDragonBodyGradient)" />
      {/* Claws */}
      <g fill="#DDA0DD">
        <ellipse cx="20" cy="59" rx="1.5" ry="2" />
        <ellipse cx="24" cy="60" rx="1.5" ry="2" />
        <ellipse cx="28" cy="59" rx="1.5" ry="2" />
        <ellipse cx="36" cy="59" rx="1.5" ry="2" />
        <ellipse cx="40" cy="60" rx="1.5" ry="2" />
        <ellipse cx="44" cy="59" rx="1.5" ry="2" />
      </g>

      {/* Magic sparkles */}
      <circle cx="8" cy="20" r="2" fill="url(#babyDragonSparkleGradient)" />
      <circle cx="56" cy="18" r="1.5" fill="url(#babyDragonSparkleGradient)" />
      <circle cx="4" cy="40" r="1" fill="url(#babyDragonSparkleGradient)" />
    </svg>
  );
}
