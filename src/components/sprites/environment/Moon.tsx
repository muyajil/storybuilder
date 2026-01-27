/**
 * Moon Sprite Component
 * Enhanced with crater textures, glow effects, and atmospheric depth
 */

import type { ElementProps } from '../types';

export function Moon({ x = 0, y = 0, size = 50 }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Moon surface gradient */}
        <radialGradient id="moonSurfaceGradient" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFF5" />
          <stop offset="40%" stopColor="#F5F5DC" />
          <stop offset="70%" stopColor="#E8E4C9" />
          <stop offset="100%" stopColor="#D4CEB0" />
        </radialGradient>

        {/* Moon glow gradient */}
        <radialGradient id="moonGlowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="#FFFFD4" stopOpacity="0.3" />
          <stop offset="85%" stopColor="#FFFFC8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFFFC0" stopOpacity="0" />
        </radialGradient>

        {/* Crater gradient */}
        <radialGradient id="moonCraterGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#C8C4A8" />
          <stop offset="100%" stopColor="#B0AC90" />
        </radialGradient>

        {/* Mare (dark region) gradient */}
        <radialGradient id="moonMareGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#A8A488" />
          <stop offset="100%" stopColor="#909078" />
        </radialGradient>

        {/* Highlight gradient */}
        <linearGradient id="moonHighlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="moonGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Crater shadow filter */}
        <filter id="moonCraterShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.3" floodColor="#8B8970" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Outer glow */}
      <circle cx="25" cy="25" r="24" fill="url(#moonGlowGradient)" />

      {/* Main moon body */}
      <circle cx="25" cy="25" r="20" fill="url(#moonSurfaceGradient)" filter="url(#moonGlowFilter)" />

      {/* Mare regions (darker patches) */}
      <ellipse cx="18" cy="20" rx="6" ry="5" fill="url(#moonMareGradient)" opacity="0.4" />
      <ellipse cx="30" cy="28" rx="5" ry="4" fill="url(#moonMareGradient)" opacity="0.35" />
      <ellipse cx="22" cy="32" rx="4" ry="3" fill="url(#moonMareGradient)" opacity="0.3" />

      {/* Large craters */}
      <circle cx="15" cy="18" r="3" fill="url(#moonCraterGradient)" filter="url(#moonCraterShadow)" opacity="0.5" />
      <circle cx="28" cy="15" r="2.5" fill="url(#moonCraterGradient)" filter="url(#moonCraterShadow)" opacity="0.45" />
      <circle cx="32" cy="26" r="2" fill="url(#moonCraterGradient)" filter="url(#moonCraterShadow)" opacity="0.4" />

      {/* Medium craters */}
      <circle cx="20" cy="28" r="1.5" fill="url(#moonCraterGradient)" opacity="0.35" />
      <circle cx="12" cy="26" r="1.2" fill="url(#moonCraterGradient)" opacity="0.35" />
      <circle cx="25" cy="35" r="1.3" fill="url(#moonCraterGradient)" opacity="0.3" />

      {/* Small craters */}
      <circle cx="22" cy="14" r="0.8" fill="#B8B498" opacity="0.4" />
      <circle cx="35" cy="20" r="0.7" fill="#B8B498" opacity="0.35" />
      <circle cx="18" cy="35" r="0.6" fill="#B8B498" opacity="0.3" />
      <circle cx="30" cy="32" r="0.5" fill="#B8B498" opacity="0.3" />

      {/* Highlight arc (lit edge) */}
      <path
        d="M 12 15 Q 8 25 12 35"
        stroke="url(#moonHighlightGradient)"
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />

      {/* Subtle texture spots */}
      <circle cx="24" cy="22" r="0.4" fill="#D8D4B8" opacity="0.5" />
      <circle cx="16" cy="30" r="0.3" fill="#D8D4B8" opacity="0.4" />
      <circle cx="28" cy="20" r="0.35" fill="#D8D4B8" opacity="0.45" />

      {/* Top highlight */}
      <ellipse cx="18" cy="12" rx="5" ry="3" fill="white" opacity="0.15" />
    </svg>
  );
}
