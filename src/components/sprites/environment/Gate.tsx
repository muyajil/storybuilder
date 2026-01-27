/**
 * Gate Sprite Component
 * Enhanced with iron textures and ornate details
 */

import type { ElementProps } from '../types';

export function Gate({ x = 0, y = 0, size = 100, color = '#FFD700' }: ElementProps) {
  // Create color variations
  const woodColor = '#8B4513';
  const woodDark = '#5D3A1A';
  const woodLight = '#A0522D';
  const ironDark = '#1a1a1a';
  const ironMid = '#333333';
  const ironLight = '#4a4a4a';
  const goldDark = '#B8860B';
  const goldLight = '#FFEC8B';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Wood grain gradient for posts */}
        <linearGradient id="gateWoodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={woodDark} />
          <stop offset="20%" stopColor={woodColor} />
          <stop offset="50%" stopColor={woodLight} />
          <stop offset="80%" stopColor={woodColor} />
          <stop offset="100%" stopColor={woodDark} />
        </linearGradient>

        {/* Wood vertical grain */}
        <linearGradient id="gateWoodVertical" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={woodLight} stopOpacity="0.3" />
          <stop offset="50%" stopColor={woodDark} stopOpacity="0.1" />
          <stop offset="100%" stopColor={woodDark} stopOpacity="0.2" />
        </linearGradient>

        {/* Iron gradient for bars */}
        <linearGradient id="gateIronGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={ironDark} />
          <stop offset="30%" stopColor={ironMid} />
          <stop offset="50%" stopColor={ironLight} />
          <stop offset="70%" stopColor={ironMid} />
          <stop offset="100%" stopColor={ironDark} />
        </linearGradient>

        {/* Gold ornament gradient */}
        <radialGradient id="gateGoldGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor={goldLight} />
          <stop offset="40%" stopColor={color} />
          <stop offset="80%" stopColor={goldDark} />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>

        {/* Arch gradient */}
        <linearGradient id="gateArchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={goldLight} />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={goldDark} />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id="gateShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.35" />
        </filter>

        {/* Metal shine filter */}
        <filter id="gateShine" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Iron texture pattern */}
        <pattern id="gateIronTexture" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill={ironMid} />
          <circle cx="1" cy="1" r="0.5" fill={ironDark} opacity="0.3" />
          <circle cx="3" cy="3" r="0.3" fill={ironLight} opacity="0.2" />
        </pattern>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="50" cy="98" rx="45" ry="4" fill="rgba(0,0,0,0.2)" />

      {/* Left post shadow */}
      <rect x="7" y="12" width="15" height="88" fill="rgba(0,0,0,0.2)" />

      {/* Left post */}
      <rect x="5" y="10" width="15" height="90" fill="url(#gateWoodGradient)" filter="url(#gateShadow)" />
      <rect x="5" y="10" width="15" height="90" fill="url(#gateWoodVertical)" />

      {/* Left post wood grain lines */}
      <g stroke={woodDark} strokeWidth="0.3" opacity="0.4">
        <line x1="8" y1="10" x2="8" y2="100" />
        <line x1="12" y1="10" x2="12" y2="100" />
        <line x1="16" y1="10" x2="16" y2="100" />
      </g>
      <g stroke={woodLight} strokeWidth="0.2" opacity="0.3">
        <line x1="10" y1="10" x2="10" y2="100" />
        <line x1="14" y1="10" x2="14" y2="100" />
      </g>

      {/* Left post cap */}
      <rect x="3" y="6" width="19" height="6" fill="url(#gateWoodGradient)" rx="1" />
      <polygon points="12.5,2 3,6 22,6" fill={woodColor} />
      <polygon points="12.5,2 6,6 12.5,6" fill={woodLight} opacity="0.4" />

      {/* Right post shadow */}
      <rect x="82" y="12" width="15" height="88" fill="rgba(0,0,0,0.2)" />

      {/* Right post */}
      <rect x="80" y="10" width="15" height="90" fill="url(#gateWoodGradient)" filter="url(#gateShadow)" />
      <rect x="80" y="10" width="15" height="90" fill="url(#gateWoodVertical)" />

      {/* Right post wood grain lines */}
      <g stroke={woodDark} strokeWidth="0.3" opacity="0.4">
        <line x1="83" y1="10" x2="83" y2="100" />
        <line x1="87" y1="10" x2="87" y2="100" />
        <line x1="91" y1="10" x2="91" y2="100" />
      </g>
      <g stroke={woodLight} strokeWidth="0.2" opacity="0.3">
        <line x1="85" y1="10" x2="85" y2="100" />
        <line x1="89" y1="10" x2="89" y2="100" />
      </g>

      {/* Right post cap */}
      <rect x="78" y="6" width="19" height="6" fill="url(#gateWoodGradient)" rx="1" />
      <polygon points="87.5,2 78,6 97,6" fill={woodColor} />
      <polygon points="87.5,2 81,6 87.5,6" fill={woodLight} opacity="0.4" />

      {/* Decorative arch */}
      <path d="M5 10 Q50 -25 95 10" stroke="url(#gateArchGradient)" strokeWidth="10" fill="none" filter="url(#gateShadow)" />
      <path d="M5 10 Q50 -25 95 10" stroke={goldLight} strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M8 12 Q50 -20 92 12" stroke={goldDark} strokeWidth="1" fill="none" opacity="0.4" />

      {/* Arch decorative patterns */}
      <g fill={goldDark} opacity="0.3">
        <circle cx="30" cy="2" r="2" />
        <circle cx="50" cy="-5" r="2" />
        <circle cx="70" cy="2" r="2" />
      </g>

      {/* Iron bars */}
      {[25, 40, 55, 70].map((xPos, i) => (
        <g key={i}>
          {/* Bar shadow */}
          <rect x={xPos + 2} y="12" width="5" height="88" fill="rgba(0,0,0,0.15)" />

          {/* Main bar */}
          <rect x={xPos} y="10" width="5" height="90" fill="url(#gateIronGradient)" />
          <rect x={xPos} y="10" width="5" height="90" fill="url(#gateIronTexture)" opacity="0.3" />

          {/* Bar highlight */}
          <line x1={xPos + 1} y1="10" x2={xPos + 1} y2="100" stroke={ironLight} strokeWidth="0.5" opacity="0.4" />

          {/* Decorative spear point at top */}
          <polygon
            points={`${xPos + 2.5},5 ${xPos},12 ${xPos + 5},12`}
            fill="url(#gateIronGradient)"
          />
          <polygon
            points={`${xPos + 2.5},6 ${xPos + 1},12 ${xPos + 2.5},12`}
            fill={ironLight}
            opacity="0.3"
          />
        </g>
      ))}

      {/* Horizontal cross bars */}
      <g filter="url(#gateShine)">
        {/* Upper cross bar */}
        <rect x="20" y="28" width="60" height="6" fill="url(#gateIronGradient)" rx="1" />
        <rect x="20" y="28" width="60" height="2" fill={ironLight} opacity="0.3" rx="1" />

        {/* Lower cross bar */}
        <rect x="20" y="58" width="60" height="6" fill="url(#gateIronGradient)" rx="1" />
        <rect x="20" y="58" width="60" height="2" fill={ironLight} opacity="0.3" rx="1" />
      </g>

      {/* Decorative scrollwork at intersections */}
      {[25, 40, 55, 70].map((xPos, i) => (
        <g key={`scroll-${i}`}>
          <circle cx={xPos + 2.5} cy="31" r="2" fill={ironMid} />
          <circle cx={xPos + 2.5} cy="31" r="1" fill={ironLight} opacity="0.5" />
          <circle cx={xPos + 2.5} cy="61" r="2" fill={ironMid} />
          <circle cx={xPos + 2.5} cy="61" r="1" fill={ironLight} opacity="0.5" />
        </g>
      ))}

      {/* Center top ornament */}
      <circle cx="50" cy="-2" r="10" fill="url(#gateGoldGradient)" filter="url(#gateShadow)" />
      <circle cx="50" cy="-2" r="7" fill="url(#gateGoldGradient)" />
      <ellipse cx="47" cy="-5" rx="3" ry="2" fill={goldLight} opacity="0.5" />

      {/* Inner ornament detail */}
      <circle cx="50" cy="-2" r="4" fill={goldDark} opacity="0.3" />
      <path d="M46 -2 L50 -6 L54 -2 L50 2 Z" fill={color} />
      <path d="M47 -2 L50 -5 L50 -2 Z" fill={goldLight} opacity="0.4" />

      {/* Side ornaments on arch */}
      <circle cx="25" cy="5" r="5" fill="url(#gateGoldGradient)" />
      <ellipse cx="24" cy="4" rx="1.5" ry="1" fill={goldLight} opacity="0.5" />
      <circle cx="75" cy="5" r="5" fill="url(#gateGoldGradient)" />
      <ellipse cx="74" cy="4" rx="1.5" ry="1" fill={goldLight} opacity="0.5" />

      {/* Bolt details on posts */}
      {[20, 50, 80].map((yPos, i) => (
        <g key={`bolts-${i}`}>
          <circle cx="12.5" cy={yPos} r="2" fill={ironMid} />
          <circle cx="12.5" cy={yPos} r="1" fill={ironLight} opacity="0.6" />
          <circle cx="87.5" cy={yPos} r="2" fill={ironMid} />
          <circle cx="87.5" cy={yPos} r="1" fill={ironLight} opacity="0.6" />
        </g>
      ))}
    </svg>
  );
}
