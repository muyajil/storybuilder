/**
 * Crystal Sprite Component
 * Enhanced with gem-like facets, inner glow, and magical atmosphere
 */

import type { ElementProps } from '../types';

export function Crystal({ x = 0, y = 0, size = 40, color = '#00BFFF' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 40 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main crystal body gradient */}
        <linearGradient id="crystalMainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#80DFFF" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#0090CC" />
          <stop offset="100%" stopColor="#006699" />
        </linearGradient>
        {/* Crystal facet highlight */}
        <linearGradient id="crystalHighlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#80DFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </linearGradient>
        {/* Crystal shadow facet */}
        <linearGradient id="crystalShadowGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor="#003366" stopOpacity="0.8" />
        </linearGradient>
        {/* Small crystal gradient */}
        <linearGradient id="crystalSmallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#80DFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor={color} stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0080AA" stopOpacity="0.8" />
        </linearGradient>
        {/* Inner glow gradient */}
        <radialGradient id="crystalInnerGlow" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="50%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Base glow */}
        <radialGradient id="crystalBaseGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Glow filter */}
        <filter id="crystalGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Sparkle filter */}
        <filter id="crystalSparkle">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground glow reflection */}
      <ellipse cx="20" cy="47" rx="16" ry="3" fill="url(#crystalBaseGlow)" />

      <g filter="url(#crystalGlow)">
        {/* Main crystal - back facet (darkest) */}
        <polygon points="20,0 28,15 25,48 15,48 12,15" fill="url(#crystalShadowGradient)" />

        {/* Main crystal - front left facet */}
        <polygon points="20,0 12,15 15,48 20,40" fill="url(#crystalMainGradient)" />

        {/* Main crystal - front right facet (brightest) */}
        <polygon points="20,0 28,15 25,48 20,40" fill="url(#crystalHighlightGradient)" />

        {/* Inner glow overlay */}
        <polygon points="20,2 26,14 24,44 16,44 14,14" fill="url(#crystalInnerGlow)" />

        {/* Left small crystal */}
        <polygon points="8,30 12,22 14,48 6,48" fill="url(#crystalSmallGradient)" />
        <polygon points="8,30 6,48 4,48 5,35" fill="url(#crystalShadowGradient)" opacity="0.7" />
        {/* Left crystal highlight */}
        <line x1="9" y1="28" x2="10" y2="40" stroke="white" strokeWidth="1" opacity="0.4" />

        {/* Right small crystal */}
        <polygon points="32,28 36,20 38,48 30,48" fill="url(#crystalSmallGradient)" />
        <polygon points="32,28 38,48 40,48 37,30" fill="url(#crystalShadowGradient)" opacity="0.7" />
        {/* Right crystal highlight */}
        <line x1="34" y1="24" x2="35" y2="42" stroke="white" strokeWidth="1" opacity="0.4" />

        {/* Main crystal shine/highlight streaks */}
        <line x1="18" y1="5" x2="16" y2="25" stroke="white" strokeWidth="2.5" opacity="0.7" />
        <line x1="17" y1="8" x2="15" y2="18" stroke="white" strokeWidth="1.5" opacity="0.9" />

        {/* Facet edge lines for definition */}
        <line x1="20" y1="0" x2="20" y2="40" stroke="#003366" strokeWidth="0.3" opacity="0.3" />
        <line x1="12" y1="15" x2="15" y2="48" stroke="#003366" strokeWidth="0.3" opacity="0.4" />
        <line x1="28" y1="15" x2="25" y2="48" stroke="#006699" strokeWidth="0.3" opacity="0.3" />
      </g>

      {/* Sparkle points */}
      <g filter="url(#crystalSparkle)">
        <circle cx="17" cy="6" r="1.5" fill="white" opacity="0.9" />
        <circle cx="24" cy="12" r="1" fill="white" opacity="0.7" />
        <circle cx="15" cy="20" r="0.8" fill="white" opacity="0.6" />
        <circle cx="10" cy="28" r="0.7" fill="white" opacity="0.5" />
        <circle cx="35" cy="24" r="0.8" fill="white" opacity="0.6" />
      </g>

      {/* Floating magic particles */}
      <circle cx="5" cy="20" r="0.5" fill={color} opacity="0.6" />
      <circle cx="35" cy="15" r="0.4" fill={color} opacity="0.5" />
      <circle cx="28" cy="5" r="0.3" fill={color} opacity="0.4" />
    </svg>
  );
}
