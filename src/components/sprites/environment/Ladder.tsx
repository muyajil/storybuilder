/**
 * Ladder Sprite Component
 * Enhanced with wood grain textures
 */

import type { ElementProps } from '../types';

export function Ladder({ x = 0, y = 0, size = 80, color = '#8B4513' }: ElementProps) {
  // Create color variations
  const woodDark = '#5D3A1A';
  const woodLight = '#A0522D';
  const woodHighlight = '#CD853F';

  return (
    <svg
      width={size * 0.4}
      height={size}
      viewBox="0 0 32 80"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Rail wood grain gradient */}
        <linearGradient id="ladderRailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={woodDark} />
          <stop offset="20%" stopColor={color} />
          <stop offset="50%" stopColor={woodLight} />
          <stop offset="80%" stopColor={color} />
          <stop offset="100%" stopColor={woodDark} />
        </linearGradient>

        {/* Vertical grain overlay */}
        <linearGradient id="ladderVerticalGrain" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={woodHighlight} stopOpacity="0.2" />
          <stop offset="25%" stopColor={woodDark} stopOpacity="0.05" />
          <stop offset="50%" stopColor={woodHighlight} stopOpacity="0.15" />
          <stop offset="75%" stopColor={woodDark} stopOpacity="0.05" />
          <stop offset="100%" stopColor={woodHighlight} stopOpacity="0.1" />
        </linearGradient>

        {/* Rung wood grain gradient */}
        <linearGradient id="ladderRungGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={woodDark} />
          <stop offset="20%" stopColor={color} />
          <stop offset="50%" stopColor={woodLight} />
          <stop offset="80%" stopColor={color} />
          <stop offset="100%" stopColor={woodDark} />
        </linearGradient>

        {/* Horizontal grain for rungs */}
        <linearGradient id="ladderHorizontalGrain" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={woodHighlight} stopOpacity="0.2" />
          <stop offset="30%" stopColor={woodDark} stopOpacity="0.1" />
          <stop offset="50%" stopColor={woodHighlight} stopOpacity="0.15" />
          <stop offset="70%" stopColor={woodDark} stopOpacity="0.1" />
          <stop offset="100%" stopColor={woodHighlight} stopOpacity="0.2" />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id="ladderShadow" x="-20%" y="-5%" width="150%" height="110%">
          <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.25" />
        </filter>

        {/* Wood texture pattern */}
        <pattern id="ladderWoodTexture" x="0" y="0" width="5" height="10" patternUnits="userSpaceOnUse">
          <rect width="5" height="10" fill={color} />
          <line x1="1" y1="0" x2="1" y2="10" stroke={woodDark} strokeWidth="0.3" opacity="0.2" />
          <line x1="3" y1="0" x2="3" y2="10" stroke={woodLight} strokeWidth="0.2" opacity="0.15" />
        </pattern>
      </defs>

      {/* Shadow */}
      <g opacity="0.2" transform="translate(3, 2)">
        <rect x="2" y="0" width="5" height="80" fill="#000" rx="1" />
        <rect x="25" y="0" width="5" height="80" fill="#000" rx="1" />
      </g>

      {/* Left rail */}
      <rect x="2" y="0" width="5" height="80" fill="url(#ladderRailGradient)" rx="1" filter="url(#ladderShadow)" />
      <rect x="2" y="0" width="5" height="80" fill="url(#ladderVerticalGrain)" rx="1" />

      {/* Left rail wood grain lines */}
      <g stroke={woodDark} strokeWidth="0.3" opacity="0.3">
        <line x1="3.5" y1="0" x2="3.5" y2="80" />
        <line x1="5.5" y1="0" x2="5.5" y2="80" />
      </g>
      <line x1="4.5" y1="0" x2="4.5" y2="80" stroke={woodHighlight} strokeWidth="0.2" opacity="0.4" />

      {/* Left rail edge highlights */}
      <line x1="2" y1="0" x2="2" y2="80" stroke={woodHighlight} strokeWidth="0.5" opacity="0.4" />
      <line x1="7" y1="0" x2="7" y2="80" stroke={woodDark} strokeWidth="0.5" opacity="0.3" />

      {/* Right rail */}
      <rect x="25" y="0" width="5" height="80" fill="url(#ladderRailGradient)" rx="1" filter="url(#ladderShadow)" />
      <rect x="25" y="0" width="5" height="80" fill="url(#ladderVerticalGrain)" rx="1" />

      {/* Right rail wood grain lines */}
      <g stroke={woodDark} strokeWidth="0.3" opacity="0.3">
        <line x1="26.5" y1="0" x2="26.5" y2="80" />
        <line x1="28.5" y1="0" x2="28.5" y2="80" />
      </g>
      <line x1="27.5" y1="0" x2="27.5" y2="80" stroke={woodHighlight} strokeWidth="0.2" opacity="0.4" />

      {/* Right rail edge highlights */}
      <line x1="25" y1="0" x2="25" y2="80" stroke={woodHighlight} strokeWidth="0.5" opacity="0.4" />
      <line x1="30" y1="0" x2="30" y2="80" stroke={woodDark} strokeWidth="0.5" opacity="0.3" />

      {/* Rungs */}
      {[...Array(7)].map((_, i) => {
        const yPos = 5 + i * 11;
        return (
          <g key={i}>
            {/* Rung shadow */}
            <rect x="8" y={yPos + 1} width="18" height="4" fill="rgba(0,0,0,0.15)" rx="1" />

            {/* Main rung */}
            <rect x="7" y={yPos} width="18" height="4" fill="url(#ladderRungGradient)" rx="1" />
            <rect x="7" y={yPos} width="18" height="4" fill="url(#ladderHorizontalGrain)" rx="1" />

            {/* Rung wood grain lines */}
            <g stroke={woodDark} strokeWidth="0.2" opacity="0.3">
              <line x1="7" y1={yPos + 1} x2="25" y2={yPos + 1} />
              <line x1="7" y1={yPos + 2.5} x2="25" y2={yPos + 2.5} />
            </g>

            {/* Rung top highlight */}
            <rect x="7" y={yPos} width="18" height="1" fill={woodHighlight} opacity="0.3" rx="1" />

            {/* Rung bottom shadow */}
            <rect x="7" y={yPos + 3} width="18" height="1" fill={woodDark} opacity="0.2" rx="1" />

            {/* End grain effect on visible rung ends */}
            <ellipse cx="7.5" cy={yPos + 2} rx="0.8" ry="1.5" fill={woodDark} opacity="0.3" />
            <ellipse cx="24.5" cy={yPos + 2} rx="0.8" ry="1.5" fill={woodDark} opacity="0.3" />

            {/* Nail/peg detail at joints */}
            <circle cx="8" cy={yPos + 2} r="1" fill={woodDark} opacity="0.4" />
            <circle cx="8" cy={yPos + 1.8} r="0.4" fill={woodHighlight} opacity="0.5" />
            <circle cx="24" cy={yPos + 2} r="1" fill={woodDark} opacity="0.4" />
            <circle cx="24" cy={yPos + 1.8} r="0.4" fill={woodHighlight} opacity="0.5" />
          </g>
        );
      })}

      {/* Rail top caps */}
      <ellipse cx="4.5" cy="1" rx="2.5" ry="1" fill={color} />
      <ellipse cx="4.5" cy="0.5" rx="1.5" ry="0.5" fill={woodHighlight} opacity="0.4" />
      <ellipse cx="27.5" cy="1" rx="2.5" ry="1" fill={color} />
      <ellipse cx="27.5" cy="0.5" rx="1.5" ry="0.5" fill={woodHighlight} opacity="0.4" />

      {/* Worn/weathered marks */}
      <g opacity="0.15">
        <rect x="7" y="27" width="2" height="1" fill={woodDark} />
        <rect x="20" y="49" width="3" height="1" fill={woodDark} />
        <rect x="10" y="60" width="2" height="1" fill={woodDark} />
      </g>
    </svg>
  );
}
