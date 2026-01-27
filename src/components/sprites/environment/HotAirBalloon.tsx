/**
 * HotAirBalloon Sprite Component
 * Enhanced with fabric textures and depth
 */

import type { ElementProps } from '../types';

export function HotAirBalloon({ x = 0, y = 0, size = 70, color = '#FF6347' }: ElementProps) {
  // Create color variations
  const darkColor = '#CC3D29';
  const lightColor = '#FF8C7A';
  const accentGold = '#FFD700';
  const accentDark = '#B8860B';
  const accentLight = '#FFEC8B';
  const basketBrown = '#8B4513';
  const basketDark = '#5D3A1A';
  const basketLight = '#A0522D';
  const ropeColor = '#4a4a4a';

  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 70 98"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main balloon gradient */}
        <radialGradient id="hotAirBalloonMainGradient" cx="30%" cy="20%" r="80%">
          <stop offset="0%" stopColor={lightColor} />
          <stop offset="40%" stopColor={color} />
          <stop offset="80%" stopColor={darkColor} />
          <stop offset="100%" stopColor="#8B2500" />
        </radialGradient>

        {/* Gold stripe gradient */}
        <linearGradient id="hotAirBalloonGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accentDark} />
          <stop offset="20%" stopColor={accentGold} />
          <stop offset="50%" stopColor={accentLight} />
          <stop offset="80%" stopColor={accentGold} />
          <stop offset="100%" stopColor={accentDark} />
        </linearGradient>

        {/* Balloon side shading */}
        <linearGradient id="hotAirBalloonSideShade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.2)" />
          <stop offset="30%" stopColor="transparent" />
          <stop offset="70%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
        </linearGradient>

        {/* Basket gradient */}
        <linearGradient id="hotAirBalloonBasketGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={basketDark} />
          <stop offset="20%" stopColor={basketBrown} />
          <stop offset="50%" stopColor={basketLight} />
          <stop offset="80%" stopColor={basketBrown} />
          <stop offset="100%" stopColor={basketDark} />
        </linearGradient>

        {/* Basket rim gradient */}
        <linearGradient id="hotAirBalloonRimGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={basketLight} />
          <stop offset="50%" stopColor={basketBrown} />
          <stop offset="100%" stopColor={basketDark} />
        </linearGradient>

        {/* Inner glow for balloon */}
        <radialGradient id="hotAirBalloonInnerGlow" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#FFAA00" stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>

        {/* Drop shadow filter */}
        <filter id="hotAirBalloonShadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="3" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.25" />
        </filter>

        {/* Fabric texture pattern */}
        <pattern id="hotAirBalloonFabricTexture" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <line x1="0" y1="3" x2="6" y2="3" stroke={darkColor} strokeWidth="0.3" opacity="0.2" />
          <line x1="3" y1="0" x2="3" y2="6" stroke={darkColor} strokeWidth="0.3" opacity="0.2" />
        </pattern>

        {/* Wicker basket pattern */}
        <pattern id="hotAirBalloonWickerPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill={basketBrown} />
          <line x1="0" y1="2" x2="4" y2="2" stroke={basketDark} strokeWidth="0.5" />
          <line x1="2" y1="0" x2="2" y2="4" stroke={basketDark} strokeWidth="0.3" />
        </pattern>
      </defs>

      {/* Balloon shadow on ground (if close) */}
      <ellipse cx="37" cy="96" rx="20" ry="3" fill="rgba(0,0,0,0.1)" />

      {/* Main balloon envelope */}
      <ellipse cx="35" cy="30" rx="30" ry="32" fill="url(#hotAirBalloonMainGradient)" filter="url(#hotAirBalloonShadow)" />

      {/* Fabric texture overlay */}
      <ellipse cx="35" cy="30" rx="30" ry="32" fill="url(#hotAirBalloonFabricTexture)" opacity="0.3" />

      {/* Side shading for 3D effect */}
      <ellipse cx="35" cy="30" rx="30" ry="32" fill="url(#hotAirBalloonSideShade)" />

      {/* Balloon panels/gores */}
      <g stroke={darkColor} strokeWidth="0.5" opacity="0.3" fill="none">
        <path d="M35 0 Q35 30 35 60" />
        <path d="M20 5 Q18 30 22 58" />
        <path d="M50 5 Q52 30 48 58" />
        <path d="M10 15 Q6 30 12 55" />
        <path d="M60 15 Q64 30 58 55" />
      </g>

      {/* Gold stripe band */}
      <path d="M8 25 Q35 15 62 25 L60 35 Q35 25 10 35 Z" fill="url(#hotAirBalloonGoldGradient)" />
      <path d="M8 25 Q35 15 62 25" stroke={accentLight} strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Red stripe sections */}
      <path d="M10 35 Q35 27 60 35 L58 48 Q35 40 12 48 Z" fill={color} opacity="0.9" />
      <path d="M10 35 Q35 27 60 35" stroke={lightColor} strokeWidth="0.3" fill="none" opacity="0.4" />

      {/* Second gold stripe */}
      <path d="M12 48 Q35 42 58 48 L55 55 Q35 50 15 55 Z" fill="url(#hotAirBalloonGoldGradient)" />

      {/* Inner glow (burner flame effect) */}
      <ellipse cx="35" cy="45" rx="15" ry="12" fill="url(#hotAirBalloonInnerGlow)" />

      {/* Balloon opening at bottom */}
      <ellipse cx="35" cy="58" rx="12" ry="4" fill={darkColor} opacity="0.6" />
      <ellipse cx="35" cy="58" rx="10" ry="3" fill="#1a1a1a" opacity="0.4" />

      {/* Highlight on balloon */}
      <ellipse cx="25" cy="20" rx="12" ry="15" fill="white" opacity="0.15" />
      <ellipse cx="22" cy="15" rx="6" ry="8" fill="white" opacity="0.1" />

      {/* Ropes/lines */}
      <g stroke={ropeColor} strokeWidth="1.2" fill="none">
        <path d="M20 56 Q22 65 25 75" />
        <path d="M35 59 L35 75" />
        <path d="M50 56 Q48 65 45 75" />
      </g>
      {/* Rope highlights */}
      <g stroke="#666" strokeWidth="0.3" fill="none" opacity="0.5">
        <path d="M20 56 Q22 65 25 75" />
        <path d="M35 59 L35 75" />
        <path d="M50 56 Q48 65 45 75" />
      </g>

      {/* Support ring */}
      <ellipse cx="35" cy="75" rx="12" ry="2" fill={ropeColor} />
      <ellipse cx="35" cy="74.5" rx="10" ry="1.5" fill="#555" />

      {/* Basket rim */}
      <rect x="20" y="73" width="30" height="5" fill="url(#hotAirBalloonRimGradient)" rx="2" />
      <rect x="20" y="73" width="30" height="1.5" fill={basketLight} opacity="0.5" rx="1" />

      {/* Basket body */}
      <rect x="22" y="77" width="26" height="18" fill="url(#hotAirBalloonBasketGradient)" rx="2" />
      <rect x="22" y="77" width="26" height="18" fill="url(#hotAirBalloonWickerPattern)" opacity="0.4" rx="2" />

      {/* Basket weave lines */}
      <g stroke={basketDark} strokeWidth="0.5" opacity="0.4">
        <line x1="22" y1="82" x2="48" y2="82" />
        <line x1="22" y1="87" x2="48" y2="87" />
        <line x1="22" y1="92" x2="48" y2="92" />
        <line x1="28" y1="77" x2="28" y2="95" />
        <line x1="35" y1="77" x2="35" y2="95" />
        <line x1="42" y1="77" x2="42" y2="95" />
      </g>

      {/* Basket highlight and shadow */}
      <rect x="22" y="77" width="6" height="18" fill={basketLight} opacity="0.2" rx="2" />
      <rect x="42" y="77" width="6" height="18" fill={basketDark} opacity="0.15" rx="2" />

      {/* Basket bottom edge */}
      <rect x="22" y="93" width="26" height="2" fill={basketDark} rx="1" />

      {/* Sandbags */}
      <g>
        <ellipse cx="26" cy="94" rx="3" ry="2" fill="#8B7355" />
        <ellipse cx="26" cy="93.5" rx="2" ry="1" fill="#A08060" opacity="0.5" />
        <ellipse cx="44" cy="94" rx="3" ry="2" fill="#8B7355" />
        <ellipse cx="44" cy="93.5" rx="2" ry="1" fill="#A08060" opacity="0.5" />
      </g>

      {/* Burner flame glow (visible at opening) */}
      <ellipse cx="35" cy="56" rx="4" ry="2" fill="#FF6600" opacity="0.4" />
      <ellipse cx="35" cy="55" rx="2" ry="1" fill="#FFCC00" opacity="0.5" />
    </svg>
  );
}
