/**
 * Penguin Sprite Component
 * Enhanced with gradients, feather texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Penguin({ size = 64, color = '#1C1C1C' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="penguinBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2D2D2D" stopOpacity="1" />
          <stop offset="70%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#0D0D0D" stopOpacity="1" />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="penguinBellyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="80%" stopColor="#F5F5F5" stopOpacity="1" />
          <stop offset="100%" stopColor="#E8E8E8" stopOpacity="1" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="penguinWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2D2D2D" stopOpacity="1" />
          <stop offset="100%" stopColor="#0D0D0D" stopOpacity="1" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="penguinBeakGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFB347" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="1" />
        </linearGradient>
        {/* Feet gradient */}
        <radialGradient id="penguinFeetGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB347" stopOpacity="1" />
          <stop offset="100%" stopColor="#CC7000" stopOpacity="1" />
        </radialGradient>
        {/* Highlight */}
        <radialGradient id="penguinHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Belly highlight */}
        <radialGradient id="penguinBellyHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Body */}
      <ellipse cx="32" cy="40" rx="18" ry="22" fill="url(#penguinBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="26" cy="32" rx="10" ry="12" fill="url(#penguinHighlight)" />

      {/* Belly */}
      <ellipse cx="32" cy="44" rx="12" ry="16" fill="url(#penguinBellyGradient)" />

      {/* Belly highlight */}
      <ellipse cx="28" cy="38" rx="6" ry="10" fill="url(#penguinBellyHighlight)" />

      {/* Head */}
      <circle cx="32" cy="18" r="14" fill="url(#penguinBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="26" cy="12" rx="8" ry="6" fill="url(#penguinHighlight)" />

      {/* White face patches */}
      <ellipse cx="26" cy="18" rx="6" ry="5" fill="white" opacity="0.9" />
      <ellipse cx="38" cy="18" rx="6" ry="5" fill="white" opacity="0.9" />

      {/* Eyes */}
      <circle cx="26" cy="16" r="4" fill="white" />
      <circle cx="38" cy="16" r="4" fill="white" />
      <circle cx="27" cy="16" r="2.5" fill="#1a1a1a" />
      <circle cx="39" cy="16" r="2.5" fill="#1a1a1a" />

      {/* Eye highlights */}
      <circle cx="25.5" cy="15" r="1" fill="white" />
      <circle cx="37.5" cy="15" r="1" fill="white" />
      <circle cx="28" cy="17" r="0.5" fill="white" opacity="0.5" />
      <circle cx="40" cy="17" r="0.5" fill="white" opacity="0.5" />

      {/* Beak */}
      <polygon points="32,22 27,29 37,29" fill="url(#penguinBeakGradient)" />
      <polygon points="32,22 29,27 35,27" fill="#FFD700" opacity="0.3" />

      {/* Wings */}
      <ellipse cx="12" cy="40" rx="7" ry="15" fill="url(#penguinWingGradient)" />
      <ellipse cx="52" cy="40" rx="7" ry="15" fill="url(#penguinWingGradient)" />

      {/* Wing highlights */}
      <ellipse cx="10" cy="36" rx="3" ry="8" fill="url(#penguinHighlight)" />
      <ellipse cx="50" cy="36" rx="3" ry="8" fill="url(#penguinHighlight)" />

      {/* Wing tips (white underside showing) */}
      <ellipse cx="10" cy="50" rx="4" ry="3" fill="white" opacity="0.3" />
      <ellipse cx="54" cy="50" rx="4" ry="3" fill="white" opacity="0.3" />

      {/* Feet */}
      <ellipse cx="24" cy="60" rx="7" ry="3.5" fill="url(#penguinFeetGradient)" />
      <ellipse cx="40" cy="60" rx="7" ry="3.5" fill="url(#penguinFeetGradient)" />

      {/* Feet webbing details */}
      <line x1="20" y1="60" x2="18" y2="62" stroke="#CC7000" strokeWidth="1" />
      <line x1="24" y1="60" x2="24" y2="63" stroke="#CC7000" strokeWidth="1" />
      <line x1="28" y1="60" x2="30" y2="62" stroke="#CC7000" strokeWidth="1" />
      <line x1="36" y1="60" x2="34" y2="62" stroke="#CC7000" strokeWidth="1" />
      <line x1="40" y1="60" x2="40" y2="63" stroke="#CC7000" strokeWidth="1" />
      <line x1="44" y1="60" x2="46" y2="62" stroke="#CC7000" strokeWidth="1" />

      {/* Cheek blush */}
      <ellipse cx="20" cy="22" rx="3" ry="2" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="44" cy="22" rx="3" ry="2" fill="#FFB6C1" opacity="0.4" />
    </svg>
  );
}
