/**
 * Lighthouse Sprite Component
 * Enhanced with beacon effects and architectural details
 */

import type { ElementProps } from '../types';

export function Lighthouse({ x = 0, y = 0, size = 120, color = 'white' }: ElementProps) {
  // Create color variations
  const wallLight = '#FAFAFA';
  const wallMid = '#E8E8E8';
  const wallShadow = '#D0D0D0';
  const redStripe = '#FF0000';
  const redDark = '#CC0000';
  const redLight = '#FF4444';
  const lanternDark = '#1a1a1a';
  const lanternMid = '#333333';
  const lanternLight = '#4a4a4a';
  const beaconYellow = '#FFFF00';
  const beaconGold = '#FFD700';
  const beaconOrange = '#FFA500';

  return (
    <svg
      width={size * 0.5}
      height={size}
      viewBox="0 0 60 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Tower wall gradient */}
        <linearGradient id="lighthouseTowerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={wallShadow} />
          <stop offset="20%" stopColor={color} />
          <stop offset="50%" stopColor={wallLight} />
          <stop offset="80%" stopColor={color} />
          <stop offset="100%" stopColor={wallShadow} />
        </linearGradient>

        {/* Red stripe gradient */}
        <linearGradient id="lighthouseStripeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={redDark} />
          <stop offset="20%" stopColor={redStripe} />
          <stop offset="50%" stopColor={redLight} />
          <stop offset="80%" stopColor={redStripe} />
          <stop offset="100%" stopColor={redDark} />
        </linearGradient>

        {/* Lantern room gradient */}
        <linearGradient id="lighthouseLanternGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={lanternDark} />
          <stop offset="30%" stopColor={lanternMid} />
          <stop offset="50%" stopColor={lanternLight} />
          <stop offset="70%" stopColor={lanternMid} />
          <stop offset="100%" stopColor={lanternDark} />
        </linearGradient>

        {/* Beacon light gradient */}
        <radialGradient id="lighthouseBeaconGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" />
          <stop offset="20%" stopColor={beaconYellow} />
          <stop offset="50%" stopColor={beaconGold} />
          <stop offset="100%" stopColor={beaconOrange} stopOpacity="0" />
        </radialGradient>

        {/* Light beam gradient */}
        <linearGradient id="lighthouseBeamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={beaconYellow} stopOpacity="0" />
          <stop offset="20%" stopColor={beaconYellow} stopOpacity="0.4" />
          <stop offset="50%" stopColor={beaconGold} stopOpacity="0.6" />
          <stop offset="80%" stopColor={beaconYellow} stopOpacity="0.4" />
          <stop offset="100%" stopColor={beaconYellow} stopOpacity="0" />
        </linearGradient>

        {/* Roof gradient */}
        <linearGradient id="lighthouseRoofGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={lanternMid} />
          <stop offset="50%" stopColor={lanternDark} />
          <stop offset="100%" stopColor={lanternDark} />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id="lighthouseShadow" x="-20%" y="-5%" width="140%" height="115%">
          <feDropShadow dx="3" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
        </filter>

        {/* Glow filter for beacon */}
        <filter id="lighthouseBeaconGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Stone texture pattern */}
        <pattern id="lighthouseStoneTexture" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill={color} />
          <rect x="0" y="0" width="3.5" height="3.5" fill={wallMid} opacity="0.15" rx="0.3" />
          <rect x="4" y="4" width="3.5" height="3.5" fill={wallShadow} opacity="0.1" rx="0.3" />
        </pattern>
      </defs>

      {/* Light beam rays */}
      <g opacity="0.4">
        <polygon points="30,30 60,5 70,15 30,32" fill="url(#lighthouseBeamGradient)" />
        <polygon points="30,30 -10,15 0,5 30,28" fill="url(#lighthouseBeamGradient)" />
      </g>

      {/* Outer beacon glow */}
      <ellipse cx="30" cy="30" rx="25" ry="20" fill="url(#lighthouseBeaconGradient)" opacity="0.3" filter="url(#lighthouseBeaconGlow)" />

      {/* Ground/Base shadow */}
      <ellipse cx="32" cy="118" rx="22" ry="4" fill="rgba(0,0,0,0.2)" />

      {/* Tower shadow */}
      <path d="M22 120 L17 42 L47 42 L42 120 Z" fill="rgba(0,0,0,0.15)" transform="translate(2, 0)" />

      {/* Main tower */}
      <path d="M20 120 L15 40 L45 40 L40 120 Z" fill="url(#lighthouseTowerGradient)" filter="url(#lighthouseShadow)" />

      {/* Stone texture overlay */}
      <path d="M20 120 L15 40 L45 40 L40 120 Z" fill="url(#lighthouseStoneTexture)" opacity="0.3" />

      {/* Red stripe 1 (top) */}
      <path d="M17 50 L16 42 L44 42 L43 50 Z" fill="url(#lighthouseStripeGradient)" />
      <path d="M17 50 L16 44 L30 44 L30 50 Z" fill={redLight} opacity="0.2" />

      {/* White section */}
      <path d="M18 62 L17 50 L43 50 L42 62 Z" fill="url(#lighthouseTowerGradient)" />
      <path d="M18 62 L17 50 L43 50 L42 62 Z" fill="url(#lighthouseStoneTexture)" opacity="0.2" />

      {/* Red stripe 2 (middle) */}
      <path d="M19 74 L18 62 L42 62 L41 74 Z" fill="url(#lighthouseStripeGradient)" />
      <path d="M19 74 L18 64 L30 64 L30 74 Z" fill={redLight} opacity="0.2" />

      {/* White section */}
      <path d="M20 86 L19 74 L41 74 L40 86 Z" fill="url(#lighthouseTowerGradient)" />
      <path d="M20 86 L19 74 L41 74 L40 86 Z" fill="url(#lighthouseStoneTexture)" opacity="0.2" />

      {/* Red stripe 3 (bottom) */}
      <path d="M21 98 L20 86 L40 86 L39 98 Z" fill="url(#lighthouseStripeGradient)" />
      <path d="M21 98 L20 88 L30 88 L30 98 Z" fill={redLight} opacity="0.2" />

      {/* Bottom white section */}
      <path d="M22 110 L21 98 L39 98 L38 110 Z" fill="url(#lighthouseTowerGradient)" />
      <path d="M22 110 L21 98 L39 98 L38 110 Z" fill="url(#lighthouseStoneTexture)" opacity="0.2" />

      {/* Base */}
      <rect x="18" y="110" width="24" height="10" fill={wallMid} />
      <rect x="18" y="110" width="24" height="3" fill={wallLight} opacity="0.5" />

      {/* Gallery/walkway railing */}
      <rect x="10" y="38" width="40" height="5" fill="url(#lighthouseLanternGradient)" />
      <rect x="10" y="38" width="40" height="1.5" fill={lanternLight} opacity="0.4" />

      {/* Railing posts */}
      <g fill={lanternMid}>
        <rect x="12" y="35" width="2" height="5" />
        <rect x="22" y="35" width="2" height="5" />
        <rect x="36" y="35" width="2" height="5" />
        <rect x="46" y="35" width="2" height="5" />
      </g>

      {/* Lantern room */}
      <rect x="16" y="25" width="28" height="16" fill="url(#lighthouseLanternGradient)" />

      {/* Lantern window (lit) */}
      <rect x="18" y="27" width="24" height="12" fill={beaconYellow} filter="url(#lighthouseBeaconGlow)" />

      {/* Window frame bars */}
      <g stroke={lanternMid} strokeWidth="1.5">
        <line x1="26" y1="27" x2="26" y2="39" />
        <line x1="34" y1="27" x2="34" y2="39" />
        <line x1="18" y1="33" x2="42" y2="33" />
      </g>

      {/* Lantern room top rim */}
      <rect x="14" y="23" width="32" height="3" fill={lanternDark} rx="1" />

      {/* Roof */}
      <polygon points="30,5 10,25 50,25" fill="url(#lighthouseRoofGradient)" />
      <polygon points="30,5 10,25 30,25" fill={lanternLight} opacity="0.15" />

      {/* Roof finial */}
      <rect x="28" y="2" width="4" height="5" fill={lanternDark} />
      <circle cx="30" cy="2" r="3" fill={lanternDark} />
      <circle cx="30" cy="2" r="2" fill={lanternMid} />
      <circle cx="29" cy="1" r="0.8" fill={lanternLight} opacity="0.5" />

      {/* Door */}
      <rect x="25" y="105" width="10" height="15" fill="#5D3A1A" rx="1" />
      <rect x="25" y="105" width="10" height="1" fill="#8B4513" opacity="0.5" />
      <circle cx="33" cy="113" r="1" fill="#FFD700" />

      {/* Window on tower */}
      <g>
        <rect x="26" y="75" width="8" height="8" fill={lanternDark} rx="1" />
        <rect x="27" y="76" width="6" height="6" fill="#87CEEB" rx="0.5" />
        <line x1="30" y1="76" x2="30" y2="82" stroke={lanternDark} strokeWidth="1" />
        <line x1="27" y1="79" x2="33" y2="79" stroke={lanternDark} strokeWidth="1" />
      </g>

      {/* Light sparkle in beacon */}
      <g fill="white" opacity="0.9">
        <circle cx="26" cy="31" r="1.5" />
        <circle cx="34" cy="35" r="1" />
        <circle cx="30" cy="30" r="2" />
      </g>
    </svg>
  );
}
