/**
 * Butterfly Sprite Component
 * Enhanced with gradients, wing patterns, and detailed features
 */

import type { SpriteProps } from '../types';

export function Butterfly({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Wing gradient */}
        <radialGradient id="butterflyWingGradient" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#FF8DC7" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#C71585" />
        </radialGradient>
        {/* Wing inner gradient */}
        <radialGradient id="butterflyWingInnerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB6C1" stopOpacity="0.8" />
          <stop offset="100%" stopColor="white" stopOpacity="0.4" />
        </radialGradient>
        {/* Body gradient */}
        <linearGradient id="butterflyBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="50%" stopColor="#2F2F2F" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="butterflyHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#2F2F2F" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="butterflyEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#4a2500" />
        </radialGradient>
        {/* Shimmer gradient */}
        <linearGradient id="butterflyShimmerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Wing spot gradient */}
        <radialGradient id="butterflySpotGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#1E90FF" />
        </radialGradient>
      </defs>

      {/* Left upper wing */}
      <ellipse cx="18" cy="22" rx="16" ry="14" fill="url(#butterflyWingGradient)" />
      {/* Wing pattern */}
      <ellipse cx="16" cy="22" rx="6" ry="5" fill="url(#butterflyWingInnerGradient)" />
      <circle cx="10" cy="18" r="3" fill="url(#butterflySpotGradient)" />
      <circle cx="22" cy="16" r="2" fill="#FFD700" opacity="0.7" />
      {/* Wing shimmer */}
      <ellipse cx="14" cy="18" rx="8" ry="6" fill="url(#butterflyShimmerGradient)" />
      {/* Wing edge detail */}
      <ellipse cx="18" cy="22" rx="16" ry="14" fill="none" stroke="#C71585" strokeWidth="0.5" opacity="0.5" />

      {/* Left lower wing */}
      <ellipse cx="16" cy="42" rx="14" ry="12" fill="url(#butterflyWingGradient)" />
      <ellipse cx="14" cy="42" rx="5" ry="4" fill="url(#butterflyWingInnerGradient)" />
      <circle cx="10" cy="46" r="2.5" fill="url(#butterflySpotGradient)" />
      <ellipse cx="12" cy="38" rx="6" ry="5" fill="url(#butterflyShimmerGradient)" />

      {/* Right upper wing */}
      <ellipse cx="46" cy="22" rx="16" ry="14" fill="url(#butterflyWingGradient)" />
      <ellipse cx="48" cy="22" rx="6" ry="5" fill="url(#butterflyWingInnerGradient)" />
      <circle cx="54" cy="18" r="3" fill="url(#butterflySpotGradient)" />
      <circle cx="42" cy="16" r="2" fill="#FFD700" opacity="0.7" />
      <ellipse cx="50" cy="18" rx="8" ry="6" fill="url(#butterflyShimmerGradient)" />
      <ellipse cx="46" cy="22" rx="16" ry="14" fill="none" stroke="#C71585" strokeWidth="0.5" opacity="0.5" />

      {/* Right lower wing */}
      <ellipse cx="48" cy="42" rx="14" ry="12" fill="url(#butterflyWingGradient)" />
      <ellipse cx="50" cy="42" rx="5" ry="4" fill="url(#butterflyWingInnerGradient)" />
      <circle cx="54" cy="46" r="2.5" fill="url(#butterflySpotGradient)" />
      <ellipse cx="52" cy="38" rx="6" ry="5" fill="url(#butterflyShimmerGradient)" />

      {/* Body */}
      <ellipse cx="32" cy="34" rx="4" ry="18" fill="url(#butterflyBodyGradient)" />
      {/* Body segments */}
      <g stroke="#4a4a4a" strokeWidth="0.5" opacity="0.4">
        <line x1="28" y1="24" x2="36" y2="24" />
        <line x1="28" y1="30" x2="36" y2="30" />
        <line x1="28" y1="36" x2="36" y2="36" />
        <line x1="28" y1="42" x2="36" y2="42" />
      </g>
      {/* Body highlight */}
      <ellipse cx="30" cy="30" rx="1.5" ry="12" fill="white" opacity="0.15" />

      {/* Head */}
      <circle cx="32" cy="12" r="6" fill="url(#butterflyHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="30" cy="10" rx="2" ry="1.5" fill="white" opacity="0.2" />

      {/* Eyes - large and cute */}
      <ellipse cx="29" cy="11" rx="2.5" ry="3" fill="url(#butterflyEyeGradient)" />
      <ellipse cx="35" cy="11" rx="2.5" ry="3" fill="url(#butterflyEyeGradient)" />
      {/* Eye shine */}
      <circle cx="28" cy="10" r="0.8" fill="white" />
      <circle cx="34" cy="10" r="0.8" fill="white" />

      {/* Proboscis (curled tongue) */}
      <path d="M32 16 Q30 18 32 20 Q34 18 32 20" stroke="#2F2F2F" strokeWidth="0.8" fill="none" />

      {/* Antennae - elegant curves */}
      <path d="M29 8 Q24 4 22 2" stroke="#2F2F2F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M35 8 Q40 4 42 2" stroke="#2F2F2F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Antennae clubs */}
      <circle cx="22" cy="2" r="2.5" fill="#2F2F2F" />
      <circle cx="42" cy="2" r="2.5" fill="#2F2F2F" />
      {/* Antennae highlights */}
      <circle cx="21" cy="1" r="0.8" fill="white" opacity="0.3" />
      <circle cx="41" cy="1" r="0.8" fill="white" opacity="0.3" />

      {/* Sparkle effects */}
      <circle cx="8" cy="28" r="1" fill="white" opacity="0.6" />
      <circle cx="56" cy="28" r="1" fill="white" opacity="0.6" />
      <circle cx="32" cy="56" r="0.8" fill="white" opacity="0.4" />
    </svg>
  );
}
