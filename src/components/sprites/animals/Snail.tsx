/**
 * Snail Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Snail({ size = 64, color = '#DEB887' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="snailBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#C4A575" />
        </linearGradient>
        {/* Shell outer gradient */}
        <radialGradient id="snailShellOuter" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5D3A1A" />
        </radialGradient>
        {/* Shell inner gradient */}
        <radialGradient id="snailShellInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#CD853F" />
          <stop offset="100%" stopColor="#A0522D" />
        </radialGradient>
        {/* Shell spiral gradient */}
        <linearGradient id="snailSpiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#6B3503" />
        </linearGradient>
        {/* Shell highlight */}
        <radialGradient id="snailShellHighlight" cx="30%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#D4A574" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4A574" stopOpacity="0" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="snailEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Body slime effect */}
        <linearGradient id="snailSlimeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8D8C8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#DEB887" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="28" cy="56" rx="22" ry="4" fill="#000" opacity="0.15" />

      {/* Slime trail */}
      <ellipse cx="20" cy="54" rx="16" ry="2" fill="#E8E0D0" opacity="0.4" />

      {/* Body base */}
      <ellipse cx="24" cy="48" rx="20" ry="8" fill="url(#snailBodyGradient)" />

      {/* Body texture/moisture */}
      <ellipse cx="24" cy="46" rx="16" ry="5" fill="url(#snailSlimeGradient)" />

      {/* Shell - outer */}
      <circle cx="40" cy="36" r="18" fill="url(#snailShellOuter)" />

      {/* Shell rings */}
      <circle cx="40" cy="36" r="14" fill="url(#snailShellInner)" />
      <circle cx="40" cy="36" r="10" fill="url(#snailSpiralGradient)" />
      <circle cx="40" cy="36" r="6" fill="url(#snailShellInner)" />
      <circle cx="40" cy="36" r="3" fill="url(#snailSpiralGradient)" />

      {/* Shell highlight */}
      <circle cx="40" cy="36" r="18" fill="url(#snailShellHighlight)" />

      {/* Shell spiral lines for texture */}
      <path d="M40 18 Q52 22 54 36 Q54 48 40 54" stroke="#5D3A1A" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M40 22 Q48 26 50 36 Q50 46 40 50" stroke="#5D3A1A" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Shell shine */}
      <ellipse cx="34" cy="28" rx="4" ry="6" fill="white" opacity="0.2" />

      {/* Head */}
      <ellipse cx="10" cy="42" rx="8" ry="10" fill="url(#snailBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="8" cy="38" rx="4" ry="5" fill="#F5E6D3" opacity="0.4" />

      {/* Left antenna stalk */}
      <path d="M6 36 Q4 30 2 26" stroke="url(#snailBodyGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Left antenna bulb */}
      <circle cx="2" cy="26" r="3" fill="url(#snailBodyGradient)" />
      <circle cx="2" cy="26" r="2" fill="#E8D8C8" opacity="0.5" />
      {/* Left eye */}
      <circle cx="2" cy="26" r="1.5" fill="url(#snailEyeGradient)" />
      <circle cx="1.5" cy="25.5" r="0.5" fill="white" opacity="0.8" />

      {/* Right antenna stalk */}
      <path d="M14 36 Q16 30 18 26" stroke="url(#snailBodyGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Right antenna bulb */}
      <circle cx="18" cy="26" r="3" fill="url(#snailBodyGradient)" />
      <circle cx="18" cy="26" r="2" fill="#E8D8C8" opacity="0.5" />
      {/* Right eye */}
      <circle cx="18" cy="26" r="1.5" fill="url(#snailEyeGradient)" />
      <circle cx="17.5" cy="25.5" r="0.5" fill="white" opacity="0.8" />

      {/* Mouth */}
      <path d="M8 46 Q10 48 12 46" stroke="#B08060" strokeWidth="1" fill="none" />

      {/* Cheek blush */}
      <circle cx="6" cy="44" r="2" fill="#E8B4A0" opacity="0.4" />
      <circle cx="14" cy="44" r="2" fill="#E8B4A0" opacity="0.4" />
    </svg>
  );
}
