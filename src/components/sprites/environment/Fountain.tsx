/**
 * Fountain Sprite Component
 * Enhanced with water effects and stone textures
 */

import type { ElementProps } from '../types';

export function Fountain({ x = 0, y = 0, size = 70, color = '#696969' }: ElementProps) {
  // Create color variations
  const stoneDark = '#4a4a4a';
  const stoneLight = '#888888';
  const stoneHighlight = '#a0a0a0';
  const waterBlue = '#4169E1';
  const waterLight = '#87CEEB';
  const waterFoam = '#E0FFFF';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 70 70"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Stone gradient for basin */}
        <linearGradient id="fountainStoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={stoneHighlight} />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={stoneDark} />
          <stop offset="100%" stopColor={stoneDark} />
        </linearGradient>

        {/* Column stone gradient */}
        <linearGradient id="fountainColumnGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={stoneDark} />
          <stop offset="20%" stopColor={color} />
          <stop offset="50%" stopColor={stoneLight} />
          <stop offset="80%" stopColor={color} />
          <stop offset="100%" stopColor={stoneDark} />
        </linearGradient>

        {/* Water gradient */}
        <linearGradient id="fountainWaterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={waterLight} stopOpacity="0.9" />
          <stop offset="50%" stopColor={waterBlue} stopOpacity="0.7" />
          <stop offset="100%" stopColor="#1E90FF" stopOpacity="0.8" />
        </linearGradient>

        {/* Water spout gradient */}
        <linearGradient id="fountainSpoutGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={waterBlue} stopOpacity="0.6" />
          <stop offset="50%" stopColor={waterLight} stopOpacity="0.8" />
          <stop offset="100%" stopColor={waterFoam} stopOpacity="0.9" />
        </linearGradient>

        {/* Water ripple gradient */}
        <radialGradient id="fountainRippleGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="70%" stopColor={waterLight} stopOpacity="0.2" />
          <stop offset="100%" stopColor={waterBlue} stopOpacity="0" />
        </radialGradient>

        {/* Stone texture pattern */}
        <pattern id="fountainStoneTexture" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill={color} />
          <circle cx="2" cy="2" r="1" fill={stoneDark} opacity="0.3" />
          <circle cx="6" cy="5" r="0.8" fill={stoneLight} opacity="0.2" />
          <circle cx="4" cy="7" r="0.5" fill={stoneDark} opacity="0.2" />
        </pattern>

        {/* Drop shadow filter */}
        <filter id="fountainShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.3" />
        </filter>

        {/* Water glow filter */}
        <filter id="fountainWaterGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Sparkle filter for water */}
        <filter id="fountainSparkle" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </defs>

      {/* Basin shadow */}
      <ellipse cx="37" cy="63" rx="30" ry="8" fill="rgba(0,0,0,0.2)" />

      {/* Basin outer rim */}
      <ellipse cx="35" cy="60" rx="32" ry="9" fill="url(#fountainStoneGradient)" filter="url(#fountainShadow)" />
      <ellipse cx="35" cy="60" rx="32" ry="9" fill="url(#fountainStoneTexture)" opacity="0.3" />

      {/* Basin wall */}
      <path d="M3 60 L3 52 Q35 48 67 52 L67 60 Q35 64 3 60" fill="url(#fountainStoneGradient)" />
      <path d="M3 60 L3 52 Q35 48 67 52 L67 60 Q35 64 3 60" fill="url(#fountainStoneTexture)" opacity="0.3" />

      {/* Basin inner rim highlight */}
      <ellipse cx="35" cy="56" rx="28" ry="7" fill={stoneDark} />

      {/* Water in basin */}
      <ellipse cx="35" cy="55" rx="26" ry="6" fill="url(#fountainWaterGradient)" />

      {/* Water ripples */}
      <ellipse cx="35" cy="55" rx="20" ry="4" fill="none" stroke={waterFoam} strokeWidth="0.5" opacity="0.5" />
      <ellipse cx="35" cy="55" rx="14" ry="3" fill="none" stroke={waterFoam} strokeWidth="0.5" opacity="0.6" />
      <ellipse cx="35" cy="55" rx="8" ry="2" fill="none" stroke={waterFoam} strokeWidth="0.5" opacity="0.7" />

      {/* Water surface highlights */}
      <ellipse cx="28" cy="53" rx="6" ry="2" fill="white" opacity="0.3" />
      <ellipse cx="42" cy="56" rx="4" ry="1.5" fill="white" opacity="0.2" />

      {/* Central column shadow */}
      <rect x="32" y="32" width="10" height="24" fill="rgba(0,0,0,0.15)" />

      {/* Central column */}
      <rect x="29" y="30" width="12" height="26" fill="url(#fountainColumnGradient)" />
      <rect x="29" y="30" width="12" height="26" fill="url(#fountainStoneTexture)" opacity="0.2" />

      {/* Column decorative rings */}
      <ellipse cx="35" cy="32" rx="7" ry="2" fill={stoneLight} />
      <ellipse cx="35" cy="45" rx="6" ry="1.5" fill={stoneLight} />

      {/* Column top cap */}
      <ellipse cx="35" cy="30" rx="9" ry="3" fill="url(#fountainStoneGradient)" />
      <ellipse cx="35" cy="29" rx="7" ry="2" fill={stoneHighlight} opacity="0.5" />

      {/* Water spouts */}
      <g filter="url(#fountainWaterGlow)">
        {/* Main central spout */}
        <path d="M35 30 Q35 15 35 5 Q36 8 37 15 Q37 25 35 30" fill="url(#fountainSpoutGradient)" />
        <path d="M35 30 Q34 15 33 8 Q34 12 35 30" fill={waterFoam} opacity="0.6" />

        {/* Left side spout */}
        <path d="M35 30 Q25 20 15 28 Q20 22 28 25 Q32 27 35 30" fill="url(#fountainSpoutGradient)" opacity="0.7" />
        <path d="M35 30 Q28 22 18 27" stroke={waterFoam} strokeWidth="1" fill="none" opacity="0.5" />

        {/* Right side spout */}
        <path d="M35 30 Q45 20 55 28 Q50 22 42 25 Q38 27 35 30" fill="url(#fountainSpoutGradient)" opacity="0.7" />
        <path d="M35 30 Q42 22 52 27" stroke={waterFoam} strokeWidth="1" fill="none" opacity="0.5" />
      </g>

      {/* Water drops */}
      <g filter="url(#fountainSparkle)">
        <circle cx="35" cy="6" r="3" fill={waterFoam} opacity="0.8" />
        <circle cx="35" cy="6" r="2" fill="white" opacity="0.6" />

        <circle cx="18" cy="26" r="2" fill={waterLight} opacity="0.6" />
        <circle cx="52" cy="26" r="2" fill={waterLight} opacity="0.6" />

        {/* Falling drops */}
        <ellipse cx="25" cy="35" rx="1" ry="2" fill={waterLight} opacity="0.5" />
        <ellipse cx="45" cy="38" rx="1" ry="2" fill={waterLight} opacity="0.5" />
        <ellipse cx="30" cy="42" rx="1" ry="1.5" fill={waterLight} opacity="0.4" />
        <ellipse cx="40" cy="44" rx="1" ry="1.5" fill={waterLight} opacity="0.4" />
      </g>

      {/* Water spray mist */}
      <g opacity="0.3">
        <circle cx="20" cy="32" r="2" fill={waterFoam} />
        <circle cx="50" cy="32" r="2" fill={waterFoam} />
        <circle cx="28" cy="28" r="1.5" fill={waterFoam} />
        <circle cx="42" cy="28" r="1.5" fill={waterFoam} />
      </g>

      {/* Sparkle highlights */}
      <g fill="white">
        <circle cx="35" cy="8" r="0.8" opacity="0.9" />
        <circle cx="33" cy="12" r="0.5" opacity="0.7" />
        <circle cx="37" cy="10" r="0.4" opacity="0.6" />
        <circle cx="22" cy="52" r="0.6" opacity="0.5" />
        <circle cx="48" cy="54" r="0.5" opacity="0.5" />
      </g>

      {/* Basin base decorative molding */}
      <path d="M5 62 Q35 68 65 62" stroke={stoneHighlight} strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  );
}
