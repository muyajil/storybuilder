/**
 * FlagPole Sprite Component
 * Enhanced with metallic textures and fabric gradients
 */

import type { ElementProps } from '../types';

export function FlagPole({ x = 0, y = 0, size = 60, color = '#FF0000' }: ElementProps) {
  // Create color variations
  const darkColor = '#8B0000';
  const lightColor = '#FF6347';
  const poleColor = '#8B4513';
  const poleDark = '#5D3A1A';
  const poleLight = '#A0522D';
  const metalGold = '#FFD700';
  const metalDark = '#B8860B';

  return (
    <svg
      width={size * 0.6}
      height={size}
      viewBox="0 0 36 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Pole wood grain gradient */}
        <linearGradient id="flagPolePoleGrain" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={poleDark} />
          <stop offset="20%" stopColor={poleColor} />
          <stop offset="50%" stopColor={poleLight} />
          <stop offset="80%" stopColor={poleColor} />
          <stop offset="100%" stopColor={poleDark} />
        </linearGradient>

        {/* Vertical wood texture */}
        <linearGradient id="flagPolePoleVertical" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={poleLight} stopOpacity="0.3" />
          <stop offset="50%" stopColor={poleDark} stopOpacity="0.1" />
          <stop offset="100%" stopColor={poleDark} stopOpacity="0.2" />
        </linearGradient>

        {/* Flag fabric gradient */}
        <linearGradient id="flagPoleFlagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={lightColor} />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={darkColor} />
          <stop offset="100%" stopColor={darkColor} />
        </linearGradient>

        {/* Flag wave shadow */}
        <linearGradient id="flagPoleFlagWave" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={darkColor} stopOpacity="0.3" />
          <stop offset="25%" stopColor={color} stopOpacity="0" />
          <stop offset="50%" stopColor={darkColor} stopOpacity="0.2" />
          <stop offset="75%" stopColor={color} stopOpacity="0" />
          <stop offset="100%" stopColor={darkColor} stopOpacity="0.3" />
        </linearGradient>

        {/* Gold ornament gradient */}
        <radialGradient id="flagPoleGoldOrnament" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="30%" stopColor={metalGold} />
          <stop offset="70%" stopColor={metalDark} />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>

        {/* Ribbon highlight */}
        <linearGradient id="flagPoleRibbonHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="50%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id="flagPoleShadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.3" />
        </filter>

        {/* Flag wave filter */}
        <filter id="flagPoleWaveFilter" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="2" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* Pole shadow */}
      <rect x="4" y="2" width="4" height="58" fill="rgba(0,0,0,0.2)" />

      {/* Main pole */}
      <rect x="2" y="4" width="4" height="56" fill="url(#flagPolePoleGrain)" />
      <rect x="2" y="4" width="4" height="56" fill="url(#flagPolePoleVertical)" />

      {/* Pole wood grain lines */}
      <line x1="3" y1="4" x2="3" y2="60" stroke={poleDark} strokeWidth="0.3" opacity="0.4" />
      <line x1="4.5" y1="4" x2="4.5" y2="60" stroke={poleLight} strokeWidth="0.2" opacity="0.5" />

      {/* Gold finial ball at top */}
      <circle cx="4" cy="3" r="3" fill="url(#flagPoleGoldOrnament)" filter="url(#flagPoleShadow)" />
      <ellipse cx="3.5" cy="2.5" rx="1" ry="0.8" fill="white" opacity="0.4" />

      {/* Flag shadow */}
      <polygon points="7,6 36,14 7,27" fill="rgba(0,0,0,0.2)" transform="translate(1, 1)" />

      {/* Flag background layer */}
      <polygon points="6,5 36,12 6,25" fill="url(#flagPoleFlagGradient)" filter="url(#flagPoleShadow)" />

      {/* Flag wave overlay */}
      <polygon points="6,5 36,12 6,25" fill="url(#flagPoleFlagWave)" />

      {/* Flag fabric folds */}
      <path d="M6,8 Q15,6 24,9 Q30,10 36,12" stroke={lightColor} strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M6,15 Q14,13 22,15 Q28,16 36,12" stroke={darkColor} strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M6,20 Q12,19 18,21 Q24,22 30,20" stroke={darkColor} strokeWidth="0.3" fill="none" opacity="0.3" />

      {/* Decorative stripe */}
      <path d="M7,14 Q18,11 29,14" stroke="white" strokeWidth="2.5" fill="none" opacity="0.9" />
      <path d="M7,14 Q18,11 29,14" stroke="url(#flagPoleRibbonHighlight)" strokeWidth="2.5" fill="none" />

      {/* Flag edge highlight */}
      <line x1="6" y1="5" x2="6" y2="25" stroke={lightColor} strokeWidth="0.5" opacity="0.6" />

      {/* Small decorative stars on stripe */}
      <circle cx="12" cy="13" r="1" fill={metalGold} opacity="0.7" />
      <circle cx="18" cy="12" r="1" fill={metalGold} opacity="0.7" />
      <circle cx="24" cy="13" r="1" fill={metalGold} opacity="0.7" />

      {/* Flag attachment rings */}
      <circle cx="6" cy="7" r="1" fill={metalDark} />
      <circle cx="6" cy="7" r="0.5" fill={metalGold} />
      <circle cx="6" cy="23" r="1" fill={metalDark} />
      <circle cx="6" cy="23" r="0.5" fill={metalGold} />

      {/* Pole base detail */}
      <rect x="1" y="56" width="6" height="4" fill={poleDark} rx="1" />
      <rect x="1" y="56" width="6" height="1.5" fill={poleLight} opacity="0.4" rx="1" />
    </svg>
  );
}
