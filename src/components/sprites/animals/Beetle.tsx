/**
 * Beetle Sprite Component
 * Enhanced with gradients, shell shine, and detailed features
 */

import type { SpriteProps } from '../types';

export function Beetle({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Shell gradient */}
        <radialGradient id="beetleShellGradient" cx="30%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#3CB371" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1a6b1a" />
        </radialGradient>
        {/* Shell shine */}
        <linearGradient id="beetleShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="50%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="beetleHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="beetleEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e0e0e0" />
          <stop offset="100%" stopColor="#c0c0c0" />
        </radialGradient>
        {/* Iridescent effect */}
        <linearGradient id="beetleIridescentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4169E1" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#9400D3" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00CED1" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Legs - segmented */}
      <g stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Left legs */}
        <path d="M16 28 L10 22 L6 24" />
        <path d="M16 36 L8 36 L4 38" />
        <path d="M16 44 L10 50 L6 48" />
        {/* Right legs */}
        <path d="M48 28 L54 22 L58 24" />
        <path d="M48 36 L56 36 L60 38" />
        <path d="M48 44 L54 50 L58 48" />
      </g>
      {/* Leg joints */}
      <g fill="#2a2a2a">
        <circle cx="10" cy="22" r="1.5" />
        <circle cx="8" cy="36" r="1.5" />
        <circle cx="10" cy="50" r="1.5" />
        <circle cx="54" cy="22" r="1.5" />
        <circle cx="56" cy="36" r="1.5" />
        <circle cx="54" cy="50" r="1.5" />
      </g>

      {/* Shell/Elytra */}
      <ellipse cx="32" cy="38" rx="18" ry="20" fill="url(#beetleShellGradient)" />

      {/* Shell center line */}
      <line x1="32" y1="18" x2="32" y2="56" stroke="#1a5a1a" strokeWidth="1.5" />

      {/* Shell texture - subtle spots */}
      <g opacity="0.3">
        <circle cx="24" cy="32" r="2" fill="#1a5a1a" />
        <circle cx="40" cy="32" r="2" fill="#1a5a1a" />
        <circle cx="26" cy="44" r="1.5" fill="#1a5a1a" />
        <circle cx="38" cy="44" r="1.5" fill="#1a5a1a" />
        <circle cx="32" cy="50" r="1.5" fill="#1a5a1a" />
      </g>

      {/* Iridescent overlay */}
      <ellipse cx="32" cy="38" rx="18" ry="20" fill="url(#beetleIridescentGradient)" />

      {/* Shell shine */}
      <ellipse cx="26" cy="30" rx="8" ry="10" fill="url(#beetleShineGradient)" />
      <ellipse cx="38" cy="30" rx="6" ry="8" fill="url(#beetleShineGradient)" opacity="0.5" />

      {/* Head */}
      <circle cx="32" cy="16" r="10" fill="url(#beetleHeadGradient)" />
      {/* Head shine */}
      <ellipse cx="28" cy="12" rx="4" ry="3" fill="white" opacity="0.15" />

      {/* Eyes - large and cute */}
      <ellipse cx="27" cy="14" rx="3.5" ry="4" fill="url(#beetleEyeGradient)" />
      <ellipse cx="37" cy="14" rx="3.5" ry="4" fill="url(#beetleEyeGradient)" />
      {/* Eye pupils */}
      <ellipse cx="27" cy="15" rx="2" ry="2.5" fill="#1a1a1a" />
      <ellipse cx="37" cy="15" rx="2" ry="2.5" fill="#1a1a1a" />
      {/* Eye shine */}
      <circle cx="26" cy="13" r="1" fill="white" />
      <circle cx="36" cy="13" r="1" fill="white" />
      <circle cx="28" cy="16" r="0.5" fill="white" opacity="0.5" />
      <circle cx="38" cy="16" r="0.5" fill="white" opacity="0.5" />

      {/* Mandibles */}
      <path d="M28 22 Q26 26 28 28" stroke="#1a1a1a" strokeWidth="2" fill="none" />
      <path d="M36 22 Q38 26 36 28" stroke="#1a1a1a" strokeWidth="2" fill="none" />

      {/* Antennae - curved with segments */}
      <g stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M24 10 Q18 6 14 4 Q12 2 14 6" />
        <path d="M40 10 Q46 6 50 4 Q52 2 50 6" />
      </g>
      {/* Antennae knobs */}
      <circle cx="14" cy="4" r="2" fill="#1a1a1a" />
      <circle cx="50" cy="4" r="2" fill="#1a1a1a" />

      {/* Pronotum (neck shield) */}
      <ellipse cx="32" cy="22" rx="10" ry="5" fill="url(#beetleHeadGradient)" />
      <ellipse cx="30" cy="20" rx="4" ry="2" fill="white" opacity="0.1" />
    </svg>
  );
}
