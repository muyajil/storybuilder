/**
 * Woodpecker Sprite Component
 */

import type { SpriteProps } from '../types';

export function Woodpecker({ size = 64, color = '#1a1a1a' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="woodpeckerBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#2d2d2d" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        {/* Red crest gradient */}
        <radialGradient id="woodpeckerCrestGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="60%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="woodpeckerWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3d3d3d" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="woodpeckerBeakGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#666666" />
          <stop offset="50%" stopColor="#888888" />
          <stop offset="100%" stopColor="#555555" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="woodpeckerEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#444444" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Belly gradient */}
        <linearGradient id="woodpeckerBellyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5F5DC" />
          <stop offset="100%" stopColor="#D4C4A8" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="woodpeckerTailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d2d2d" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="60" rx="14" ry="3" fill="#000" opacity="0.2" />

      {/* Tail feathers */}
      <path d="M28 50 L24 58 L28 56 Z" fill="url(#woodpeckerTailGradient)" />
      <path d="M32 52 L32 60 L36 56 Z" fill="url(#woodpeckerTailGradient)" />
      <path d="M36 50 L40 58 L36 56 Z" fill="url(#woodpeckerTailGradient)" />

      {/* Body */}
      <ellipse cx="32" cy="38" rx="10" ry="16" fill="url(#woodpeckerBodyGradient)" />

      {/* Belly patch */}
      <ellipse cx="32" cy="42" rx="6" ry="10" fill="url(#woodpeckerBellyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="34" rx="3" ry="6" fill="white" opacity="0.15" />

      {/* Wing */}
      <ellipse cx="36" cy="38" rx="6" ry="12" fill="url(#woodpeckerWingGradient)" />
      {/* Wing detail lines */}
      <path d="M34 30 L38 32" stroke="#4d4d4d" strokeWidth="0.5" opacity="0.5" />
      <path d="M34 34 L39 36" stroke="#4d4d4d" strokeWidth="0.5" opacity="0.5" />
      <path d="M34 38 L40 40" stroke="#4d4d4d" strokeWidth="0.5" opacity="0.5" />
      <path d="M34 42 L39 44" stroke="#4d4d4d" strokeWidth="0.5" opacity="0.5" />

      {/* Red crest */}
      <ellipse cx="32" cy="16" rx="10" ry="8" fill="url(#woodpeckerCrestGradient)" />
      {/* Crest highlight */}
      <ellipse cx="28" cy="13" rx="4" ry="3" fill="white" opacity="0.25" />

      {/* Head (black part) */}
      <ellipse cx="32" cy="22" rx="8" ry="7" fill="url(#woodpeckerBodyGradient)" />
      {/* Head highlight */}
      <ellipse cx="28" cy="20" rx="3" ry="2" fill="white" opacity="0.1" />

      {/* White cheek patch */}
      <ellipse cx="26" cy="24" rx="3" ry="2" fill="#F5F5F5" opacity="0.9" />
      <ellipse cx="38" cy="24" rx="3" ry="2" fill="#F5F5F5" opacity="0.9" />

      {/* Eyes - white */}
      <circle cx="28" cy="20" r="2.5" fill="white" />
      <circle cx="36" cy="20" r="2.5" fill="white" />

      {/* Eyes - iris */}
      <circle cx="28" cy="20" r="1.5" fill="url(#woodpeckerEyeGradient)" />
      <circle cx="36" cy="20" r="1.5" fill="url(#woodpeckerEyeGradient)" />

      {/* Eye shine */}
      <circle cx="28.5" cy="19.5" r="0.5" fill="white" />
      <circle cx="36.5" cy="19.5" r="0.5" fill="white" />

      {/* Beak - long and strong */}
      <polygon points="32,24 32,28 44,26" fill="url(#woodpeckerBeakGradient)" />
      {/* Beak highlight */}
      <polygon points="32,24 32,26 40,25.5" fill="white" opacity="0.2" />
      {/* Beak line */}
      <path d="M32 26 L44 26" stroke="#444" strokeWidth="0.5" />

      {/* Feet */}
      <path d="M28 52 L26 56 M28 52 L28 56 M28 52 L30 56" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 52 L34 56 M36 52 L36 56 M36 52 L38 56" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
