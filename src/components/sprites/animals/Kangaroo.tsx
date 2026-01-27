/**
 * Kangaroo Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Kangaroo({ size = 64, color = '#C19A6B' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="kangarooBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#D2A679" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#8B7355" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="kangarooHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#D2A679" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#8B7355" />
        </radialGradient>
        {/* Pouch gradient */}
        <radialGradient id="kangarooPouchGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="70%" stopColor="#DEB887" />
          <stop offset="100%" stopColor="#C9A96E" />
        </radialGradient>
        {/* Ear gradient */}
        <linearGradient id="kangarooEarGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#D2A679" />
        </linearGradient>
        {/* Ear inner gradient */}
        <linearGradient id="kangarooEarInnerGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#DEB887" />
          <stop offset="100%" stopColor="#FFB6C1" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="kangarooTailGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#8B7355" />
        </linearGradient>
        {/* Foot gradient */}
        <radialGradient id="kangarooFootGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#D2A679" />
          <stop offset="100%" stopColor="#8B7355" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="62" rx="20" ry="3" fill="rgba(0,0,0,0.15)" />

      {/* Tail with gradient */}
      <path d="M16 50 Q4 56 8 44 Q12 36 20 42" fill="url(#kangarooTailGradient)" />
      {/* Tail highlight */}
      <path d="M14 48 Q8 52 10 44" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />

      {/* Back foot */}
      <ellipse cx="40" cy="58" rx="9" ry="4.5" fill="url(#kangarooFootGradient)" />
      <ellipse cx="40" cy="59" rx="6" ry="2" fill="rgba(0,0,0,0.1)" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="40" rx="14" ry="18" fill="url(#kangarooBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="34" rx="6" ry="8" fill="rgba(255,255,255,0.1)" />

      {/* Pouch with gradient */}
      <ellipse cx="34" cy="44" rx="9" ry="11" fill="url(#kangarooPouchGradient)" />
      {/* Pouch shading */}
      <ellipse cx="34" cy="48" rx="6" ry="6" fill="rgba(0,0,0,0.05)" />
      {/* Pouch opening */}
      <path d="M28 42 Q34 38 40 42" stroke="#C9A96E" strokeWidth="1" fill="none" />

      {/* Baby joey */}
      <circle cx="34" cy="42" r="6" fill={color} />
      {/* Joey highlight */}
      <ellipse cx="32" cy="40" rx="2" ry="2" fill="rgba(255,255,255,0.15)" />
      {/* Joey eye */}
      <circle cx="36" cy="40" r="1.5" fill="black" />
      <circle cx="36" cy="40" r="0.5" fill="white" />
      {/* Joey ear */}
      <ellipse cx="32" cy="37" rx="1.5" ry="2.5" fill={color} />
      <ellipse cx="32" cy="37" rx="0.8" ry="1.5" fill="#DEB887" />

      {/* Front foot */}
      <ellipse cx="28" cy="58" rx="9" ry="4.5" fill="url(#kangarooFootGradient)" />
      <ellipse cx="28" cy="59" rx="6" ry="2" fill="rgba(0,0,0,0.1)" />
      {/* Toe claws */}
      <ellipse cx="22" cy="58" rx="1.5" ry="3" fill="#8B7355" />
      <ellipse cx="26" cy="59" rx="1.5" ry="3" fill="#8B7355" />
      <ellipse cx="30" cy="59" rx="1.5" ry="3" fill="#8B7355" />
      <ellipse cx="36" cy="59" rx="1.5" ry="3" fill="#8B7355" />
      <ellipse cx="40" cy="59" rx="1.5" ry="3" fill="#8B7355" />
      <ellipse cx="44" cy="58" rx="1.5" ry="3" fill="#8B7355" />

      {/* Head with gradient */}
      <ellipse cx="40" cy="18" rx="10" ry="13" fill="url(#kangarooHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="37" cy="14" rx="4" ry="5" fill="rgba(255,255,255,0.15)" />

      {/* Ears with gradient */}
      <ellipse cx="34" cy="6" rx="4" ry="9" fill="url(#kangarooEarGradient)" />
      <ellipse cx="46" cy="6" rx="4" ry="9" fill="url(#kangarooEarGradient)" />
      {/* Inner ears */}
      <ellipse cx="34" cy="6" rx="2" ry="6" fill="url(#kangarooEarInnerGradient)" />
      <ellipse cx="46" cy="6" rx="2" ry="6" fill="url(#kangarooEarInnerGradient)" />
      {/* Ear highlights */}
      <ellipse cx="33" cy="4" rx="1" ry="3" fill="rgba(255,255,255,0.2)" />
      <ellipse cx="45" cy="4" rx="1" ry="3" fill="rgba(255,255,255,0.2)" />

      {/* Eyes with detail */}
      <ellipse cx="36" cy="16" rx="3" ry="3.5" fill="white" />
      <ellipse cx="44" cy="16" rx="3" ry="3.5" fill="white" />
      <circle cx="36" cy="16" r="2" fill="#4A3728" />
      <circle cx="44" cy="16" r="2" fill="#4A3728" />
      <circle cx="36" cy="16" r="1" fill="black" />
      <circle cx="44" cy="16" r="1" fill="black" />
      {/* Eye highlights */}
      <circle cx="35" cy="15" r="0.8" fill="white" />
      <circle cx="43" cy="15" r="0.8" fill="white" />

      {/* Eyebrows */}
      <path d="M33 13 Q36 12 39 13" stroke="#8B7355" strokeWidth="0.5" fill="none" />
      <path d="M41 13 Q44 12 47 13" stroke="#8B7355" strokeWidth="0.5" fill="none" />

      {/* Nose with detail */}
      <ellipse cx="48" cy="22" rx="4" ry="2.5" fill="#2F2F2F" />
      <ellipse cx="47" cy="21" rx="1.5" ry="1" fill="rgba(255,255,255,0.2)" />

      {/* Mouth/muzzle */}
      <ellipse cx="46" cy="26" rx="5" ry="3" fill="#DEB887" opacity="0.5" />
      <path d="M44 26 Q46 28 48 26" stroke="#8B7355" strokeWidth="0.5" fill="none" />

      {/* Whisker dots */}
      <circle cx="42" cy="24" r="0.5" fill="#8B7355" />
      <circle cx="44" cy="25" r="0.5" fill="#8B7355" />
      <circle cx="48" cy="25" r="0.5" fill="#8B7355" />
      <circle cx="50" cy="24" r="0.5" fill="#8B7355" />

      {/* Arms */}
      <path d="M24 32 Q20 36 22 42" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M40 32 Q44 36 42 42" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Paws */}
      <circle cx="22" cy="43" r="2.5" fill="#D2A679" />
      <circle cx="42" cy="43" r="2.5" fill="#D2A679" />
    </svg>
  );
}
