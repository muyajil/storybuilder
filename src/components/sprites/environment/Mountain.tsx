/**
 * Mountain Sprite Component
 * Enhanced with rocky textures, atmospheric depth, and detailed snow cap
 */

import type { ElementProps } from '../types';

export function Mountain({ x = 0, y = 0, size = 150, color = '#696969' }: ElementProps) {
  // Derive color variations from the base color
  const baseColor = color;

  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 150 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main mountain gradient (lit side) */}
        <linearGradient id="mountainLitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={baseColor} />
          <stop offset="50%" stopColor={baseColor} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4A4A4A" />
        </linearGradient>

        {/* Shadow side gradient */}
        <linearGradient id="mountainShadowGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D3D3D" />
          <stop offset="100%" stopColor="#2A2A2A" />
        </linearGradient>

        {/* Snow cap gradient */}
        <linearGradient id="mountainSnowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F8F8FF" />
          <stop offset="100%" stopColor="#E8E8F0" />
        </linearGradient>

        {/* Snow shadow gradient */}
        <linearGradient id="mountainSnowShadowGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D8D8E8" />
          <stop offset="100%" stopColor="#C0C0D0" />
        </linearGradient>

        {/* Atmospheric haze gradient */}
        <linearGradient id="mountainHazeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0A8B8" stopOpacity="0" />
          <stop offset="70%" stopColor="#8890A0" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#7880A0" stopOpacity="0.3" />
        </linearGradient>

        {/* Rock texture pattern */}
        <pattern id="mountainRockTexture" patternUnits="userSpaceOnUse" width="8" height="8">
          <rect width="8" height="8" fill="transparent" />
          <path d="M0,4 L2,2 L4,4 L2,6 Z" fill="#555" opacity="0.15" />
          <path d="M4,0 L6,2 L4,4 L2,2 Z" fill="#777" opacity="0.1" />
        </pattern>

        {/* Ridge highlight */}
        <linearGradient id="mountainRidgeHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id="mountainShadowFilter" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="3" dy="5" stdDeviation="3" floodColor="#1a1a2e" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Mountain shadow on ground */}
      <polygon points="75,0 150,120 170,120 100,60" fill="#1a1a2e" opacity="0.2" />

      {/* Berg / Mountain - shadow side */}
      <polygon points="75,0 75,120 150,120" fill="url(#mountainShadowGradient)" />

      {/* Berg / Mountain - lit side */}
      <polygon points="75,0 0,120 75,120" fill="url(#mountainLitGradient)" filter="url(#mountainShadowFilter)" />

      {/* Rock texture overlay */}
      <polygon points="75,0 0,120 150,120" fill="url(#mountainRockTexture)" opacity="0.5" />

      {/* Rock face details - left side */}
      <path d="M 30,80 L 40,70 L 45,85 L 35,90 Z" fill="#5A5A5A" opacity="0.4" />
      <path d="M 50,60 L 58,50 L 62,65 L 52,70 Z" fill="#5A5A5A" opacity="0.35" />
      <path d="M 20,100 L 30,90 L 35,105 L 22,108 Z" fill="#555" opacity="0.3" />

      {/* Rock face details - right side */}
      <path d="M 100,70 L 108,60 L 115,75 L 105,80 Z" fill="#3A3A3A" opacity="0.5" />
      <path d="M 85,90 L 95,80 L 100,95 L 88,98 Z" fill="#383838" opacity="0.45" />
      <path d="M 115,95 L 125,85 L 130,100 L 118,105 Z" fill="#353535" opacity="0.4" />

      {/* Ridge line highlight */}
      <line x1="75" y1="0" x2="75" y2="50" stroke="url(#mountainRidgeHighlight)" strokeWidth="2" />

      {/* Schneekappe / Snow cap - shadow side */}
      <polygon points="75,0 75,50 105,45 95,30" fill="url(#mountainSnowShadowGradient)" />

      {/* Schneekappe / Snow cap - main */}
      <polygon points="75,0 55,30 95,30" fill="url(#mountainSnowGradient)" />

      {/* Snow cap drip details */}
      <polygon points="75,0 45,45 60,40 75,50 90,40 105,45" fill="url(#mountainSnowGradient)" />

      {/* Snow drip extensions */}
      <path d="M 45,45 Q 43,55 48,52 L 50,45 Z" fill="#E8E8F0" />
      <path d="M 60,40 Q 58,50 62,48 L 63,42 Z" fill="#E8E8F0" />
      <path d="M 90,40 Q 92,50 88,48 L 87,42 Z" fill="#D8D8E8" />
      <path d="M 105,45 Q 108,55 103,52 L 102,46 Z" fill="#D0D0E0" />

      {/* Snow highlights */}
      <path d="M 68,15 Q 75,10 82,15" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
      <ellipse cx="65" cy="25" rx="4" ry="2" fill="white" opacity="0.4" />

      {/* Snow texture dots */}
      <circle cx="70" cy="20" r="0.8" fill="white" opacity="0.5" />
      <circle cx="80" cy="22" r="0.6" fill="white" opacity="0.4" />
      <circle cx="60" cy="35" r="0.7" fill="white" opacity="0.45" />
      <circle cx="85" cy="38" r="0.5" fill="#F0F0FF" opacity="0.4" />

      {/* Atmospheric haze overlay */}
      <polygon points="75,0 0,120 150,120" fill="url(#mountainHazeGradient)" />

      {/* Cliff edge details */}
      <path d="M 25,95 L 30,92 L 28,98" stroke="#4A4A4A" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M 120,90 L 125,88 L 123,94" stroke="#2A2A2A" strokeWidth="0.5" fill="none" opacity="0.5" />
    </svg>
  );
}
