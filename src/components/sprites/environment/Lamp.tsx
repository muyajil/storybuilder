/**
 * Lamp Sprite Component
 * Enhanced with light glow effects
 */

import type { ElementProps } from '../types';

export function Lamp({ x = 0, y = 0, size = 60, color = '#FFD700' }: ElementProps) {
  // Create color variations
  const shadeDark = '#B8860B';
  const shadeLight = '#FFEC8B';
  const poleDark = '#1a1a1a';
  const poleMid = '#333333';
  const poleLight = '#4a4a4a';
  const glowWarm = '#FFFACD';
  const glowOrange = '#FFE4B5';

  return (
    <svg
      width={size * 0.5}
      height={size}
      viewBox="0 0 30 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Shade gradient */}
        <linearGradient id="lampShadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={shadeLight} />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={shadeDark} />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Shade inner glow */}
        <radialGradient id="lampInnerGlow" cx="50%" cy="80%" r="60%">
          <stop offset="0%" stopColor={glowWarm} stopOpacity="0.9" />
          <stop offset="50%" stopColor={glowOrange} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </radialGradient>

        {/* Light glow effect */}
        <radialGradient id="lampLightGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={glowWarm} stopOpacity="0.8" />
          <stop offset="40%" stopColor={glowOrange} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>

        {/* Outer light aura */}
        <radialGradient id="lampOuterAura" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor={glowWarm} stopOpacity="0.3" />
          <stop offset="60%" stopColor={glowOrange} stopOpacity="0.1" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        {/* Pole gradient */}
        <linearGradient id="lampPoleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={poleDark} />
          <stop offset="30%" stopColor={poleMid} />
          <stop offset="50%" stopColor={poleLight} />
          <stop offset="70%" stopColor={poleMid} />
          <stop offset="100%" stopColor={poleDark} />
        </linearGradient>

        {/* Base gradient */}
        <radialGradient id="lampBaseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor={poleLight} />
          <stop offset="50%" stopColor={poleMid} />
          <stop offset="100%" stopColor={poleDark} />
        </radialGradient>

        {/* Drop shadow filter */}
        <filter id="lampShadow" x="-30%" y="-10%" width="160%" height="130%">
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.3" />
        </filter>

        {/* Glow filter */}
        <filter id="lampGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Fabric texture for shade */}
        <pattern id="lampFabricTexture" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill={color} />
          <line x1="0" y1="2" x2="4" y2="2" stroke={shadeDark} strokeWidth="0.2" opacity="0.2" />
          <line x1="2" y1="0" x2="2" y2="4" stroke={shadeDark} strokeWidth="0.2" opacity="0.2" />
        </pattern>
      </defs>

      {/* Outer light aura - largest glow */}
      <ellipse cx="15" cy="18" rx="20" ry="18" fill="url(#lampOuterAura)" />

      {/* Medium light glow */}
      <ellipse cx="15" cy="18" rx="14" ry="12" fill="url(#lampLightGlow)" filter="url(#lampGlowFilter)" />

      {/* Light cone downward */}
      <path d="M5 25 L15 18 L25 25 L22 40 L8 40 Z" fill="url(#lampLightGlow)" opacity="0.3" />

      {/* Shade shadow */}
      <polygon points="16,6 1,26 31,26" fill="rgba(0,0,0,0.2)" transform="translate(1, 1)" />

      {/* Shade outer shape */}
      <polygon points="15,5 0,25 30,25" fill="url(#lampShadeGradient)" filter="url(#lampShadow)" />

      {/* Shade fabric texture */}
      <polygon points="15,5 0,25 30,25" fill="url(#lampFabricTexture)" opacity="0.3" />

      {/* Shade panels/pleats */}
      <g stroke={shadeDark} strokeWidth="0.5" opacity="0.3" fill="none">
        <line x1="15" y1="5" x2="15" y2="25" />
        <line x1="7.5" y1="15" x2="3.75" y2="25" />
        <line x1="22.5" y1="15" x2="26.25" y2="25" />
      </g>

      {/* Shade trim */}
      <line x1="0" y1="25" x2="30" y2="25" stroke={shadeDark} strokeWidth="1.5" />
      <line x1="0" y1="25" x2="30" y2="25" stroke={shadeLight} strokeWidth="0.5" opacity="0.5" />

      {/* Shade top trim */}
      <circle cx="15" cy="5" r="2" fill={shadeDark} />
      <circle cx="15" cy="5" r="1.5" fill={color} />
      <circle cx="14.5" cy="4.5" r="0.5" fill={shadeLight} opacity="0.6" />

      {/* Inner light glow (visible under shade) */}
      <ellipse cx="15" cy="20" rx="10" ry="6" fill="url(#lampInnerGlow)" />

      {/* Light bulb suggestion */}
      <ellipse cx="15" cy="22" rx="4" ry="3" fill={glowWarm} opacity="0.7" />
      <ellipse cx="15" cy="21" rx="2" ry="1.5" fill="white" opacity="0.5" />

      {/* Pole shadow */}
      <rect x="14" y="26" width="4" height="30" fill="rgba(0,0,0,0.15)" />

      {/* Pole neck */}
      <rect x="12" y="24" width="6" height="4" fill="url(#lampPoleGradient)" rx="1" />

      {/* Main pole */}
      <rect x="13" y="27" width="4" height="28" fill="url(#lampPoleGradient)" />

      {/* Pole detail rings */}
      <rect x="12.5" y="30" width="5" height="1.5" fill={poleLight} rx="0.5" />
      <rect x="12.5" y="45" width="5" height="1.5" fill={poleLight} rx="0.5" />

      {/* Pole highlights */}
      <line x1="14" y1="27" x2="14" y2="55" stroke={poleLight} strokeWidth="0.5" opacity="0.5" />
      <line x1="16" y1="27" x2="16" y2="55" stroke={poleDark} strokeWidth="0.3" opacity="0.3" />

      {/* Base shadow */}
      <ellipse cx="16" cy="58" rx="12" ry="3" fill="rgba(0,0,0,0.15)" />

      {/* Base */}
      <ellipse cx="15" cy="57" rx="12" ry="4" fill="url(#lampBaseGradient)" filter="url(#lampShadow)" />

      {/* Base rim */}
      <ellipse cx="15" cy="56" rx="10" ry="3" fill={poleMid} />
      <ellipse cx="15" cy="55.5" rx="8" ry="2" fill={poleLight} opacity="0.4" />

      {/* Base highlight */}
      <ellipse cx="12" cy="55" rx="3" ry="1.5" fill="white" opacity="0.15" />

      {/* Light sparkle effects */}
      <g fill="white" opacity="0.7">
        <circle cx="12" cy="19" r="0.8" />
        <circle cx="18" cy="17" r="0.5" />
        <circle cx="15" cy="21" r="0.6" />
      </g>

      {/* Decorative detail on shade */}
      <path d="M8 18 Q15 15 22 18" stroke={shadeLight} strokeWidth="0.5" fill="none" opacity="0.4" />
    </svg>
  );
}
