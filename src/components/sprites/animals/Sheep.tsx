/**
 * Sheep Sprite Component
 * Enhanced with gradients, wool texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Sheep({ size = 64, color = '#F5F5F5' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Wool gradient */}
        <radialGradient id="sheepWoolGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#E8E8E8" stopOpacity="1" />
          <stop offset="100%" stopColor="#D8D8D8" stopOpacity="1" />
        </radialGradient>
        {/* Face gradient */}
        <radialGradient id="sheepFaceGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4A4A4A" stopOpacity="1" />
          <stop offset="100%" stopColor="#2F2F2F" stopOpacity="1" />
        </radialGradient>
        {/* Leg gradient */}
        <linearGradient id="sheepLegGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#3D3D3D" stopOpacity="1" />
          <stop offset="100%" stopColor="#2F2F2F" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="sheepHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Wool shadow */}
        <radialGradient id="sheepWoolShadow" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#C8C8C8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C8C8C8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Legs */}
      <rect x="18" y="48" width="5" height="16" rx="2" fill="url(#sheepLegGradient)" />
      <rect x="40" y="48" width="5" height="16" rx="2" fill="url(#sheepLegGradient)" />

      {/* Hooves */}
      <rect x="18" y="60" width="5" height="4" rx="1" fill="#1a1a1a" />
      <rect x="40" y="60" width="5" height="4" rx="1" fill="#1a1a1a" />

      {/* Wool body - fluffy cloud shapes */}
      <circle cx="22" cy="40" r="11" fill="url(#sheepWoolGradient)" />
      <circle cx="42" cy="40" r="11" fill="url(#sheepWoolGradient)" />
      <circle cx="32" cy="36" r="13" fill="url(#sheepWoolGradient)" />
      <circle cx="26" cy="32" r="9" fill="url(#sheepWoolGradient)" />
      <circle cx="38" cy="32" r="9" fill="url(#sheepWoolGradient)" />

      {/* Wool highlight puffs */}
      <circle cx="28" cy="30" r="5" fill="url(#sheepHighlight)" />
      <circle cx="38" cy="28" r="4" fill="url(#sheepHighlight)" />
      <circle cx="22" cy="36" r="4" fill="url(#sheepHighlight)" />

      {/* Wool shadow */}
      <ellipse cx="32" cy="48" rx="16" ry="4" fill="url(#sheepWoolShadow)" />

      {/* Wool texture bumps */}
      <circle cx="20" cy="44" r="3" fill="#E8E8E8" opacity="0.5" />
      <circle cx="44" cy="44" r="3" fill="#E8E8E8" opacity="0.5" />
      <circle cx="32" cy="42" r="3.5" fill="#E8E8E8" opacity="0.5" />
      <circle cx="26" cy="38" r="2.5" fill="#EFEFEF" opacity="0.4" />
      <circle cx="40" cy="36" r="2.5" fill="#EFEFEF" opacity="0.4" />

      {/* Head */}
      <ellipse cx="32" cy="20" rx="10" ry="12" fill="url(#sheepFaceGradient)" />

      {/* Head highlight */}
      <ellipse cx="28" cy="14" rx="5" ry="6" fill="white" opacity="0.1" />

      {/* Ears */}
      <ellipse cx="18" cy="18" rx="7" ry="4" fill="url(#sheepFaceGradient)" transform="rotate(-15 18 18)" />
      <ellipse cx="46" cy="18" rx="7" ry="4" fill="url(#sheepFaceGradient)" transform="rotate(15 46 18)" />

      {/* Inner ears */}
      <ellipse cx="18" cy="18" rx="4" ry="2" fill="#4A4A4A" opacity="0.5" transform="rotate(-15 18 18)" />
      <ellipse cx="46" cy="18" rx="4" ry="2" fill="#4A4A4A" opacity="0.5" transform="rotate(15 46 18)" />

      {/* Wool tuft on head */}
      <circle cx="28" cy="10" r="5" fill="url(#sheepWoolGradient)" />
      <circle cx="36" cy="10" r="5" fill="url(#sheepWoolGradient)" />
      <circle cx="32" cy="8" r="4" fill="url(#sheepWoolGradient)" />

      {/* Eyes */}
      <circle cx="28" cy="18" r="3" fill="white" />
      <circle cx="36" cy="18" r="3" fill="white" />
      <circle cx="28.5" cy="18" r="1.8" fill="#1a1a1a" />
      <circle cx="36.5" cy="18" r="1.8" fill="#1a1a1a" />

      {/* Eye highlights */}
      <circle cx="27.5" cy="17" r="0.8" fill="white" />
      <circle cx="35.5" cy="17" r="0.8" fill="white" />

      {/* Nose */}
      <ellipse cx="32" cy="26" rx="3" ry="2" fill="#1a1a1a" />
      <ellipse cx="32" cy="25" rx="1.2" ry="0.6" fill="white" opacity="0.2" />

      {/* Nostrils */}
      <circle cx="30" cy="26" r="0.8" fill="#3D3D3D" />
      <circle cx="34" cy="26" r="0.8" fill="#3D3D3D" />

      {/* Mouth */}
      <path d="M30 28 Q32 30 34 28" stroke="#1a1a1a" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Cheek blush */}
      <ellipse cx="24" cy="22" rx="3" ry="2" fill="#FFB6C1" opacity="0.3" />
      <ellipse cx="40" cy="22" rx="3" ry="2" fill="#FFB6C1" opacity="0.3" />
    </svg>
  );
}
