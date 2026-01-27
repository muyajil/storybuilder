/**
 * Anchor Sprite Component
 * Enhanced with metallic gradients, weathered textures, and depth
 */

import type { ElementProps } from '../types';

export function Anchor({ x = 0, y = 0, size = 50, color = '#4a4a4a' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main metal gradient */}
        <linearGradient id="anchorMetalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6a6a6a" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>
        {/* Highlight gradient for shine */}
        <linearGradient id="anchorHighlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a8a8a" />
          <stop offset="50%" stopColor="#5a5a5a" />
          <stop offset="100%" stopColor="#3a3a3a" />
        </linearGradient>
        {/* Rust/weathering pattern */}
        <filter id="anchorWeathering">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
        {/* Shadow filter */}
        <filter id="anchorShadow">
          <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Background shadow */}
      <g filter="url(#anchorShadow)">
        {/* Ring with metallic shine */}
        <circle cx="25" cy="8" r="5" fill="none" stroke="url(#anchorMetalGradient)" strokeWidth="3" />
        <circle cx="25" cy="8" r="4" fill="none" stroke="url(#anchorHighlightGradient)" strokeWidth="1" opacity="0.5" />

        {/* Schaft / Shank with depth */}
        <rect x="22" y="12" width="6" height="30" fill="url(#anchorMetalGradient)" rx="1" />
        <rect x="23" y="12" width="2" height="30" fill="url(#anchorHighlightGradient)" opacity="0.3" />

        {/* Querbalken / Stock with rounded edges */}
        <rect x="8" y="14" width="34" height="5" fill="url(#anchorMetalGradient)" rx="2" />
        <rect x="9" y="15" width="32" height="2" fill="url(#anchorHighlightGradient)" opacity="0.3" rx="1" />

        {/* Left arm with curve */}
        <path d="M8 42 Q6 48 25 47" fill="none" stroke="url(#anchorMetalGradient)" strokeWidth="5" strokeLinecap="round" />
        <path d="M9 42 Q8 47 24 46" fill="none" stroke="url(#anchorHighlightGradient)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

        {/* Right arm with curve */}
        <path d="M42 42 Q44 48 25 47" fill="none" stroke="url(#anchorMetalGradient)" strokeWidth="5" strokeLinecap="round" />
        <path d="M41 42 Q43 47 26 46" fill="none" stroke="url(#anchorHighlightGradient)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

        {/* Left fluke with detail */}
        <polygon points="3,41 10,41 10,49 1,45" fill="url(#anchorMetalGradient)" />
        <polygon points="4,42 9,42 9,47 3,44" fill="url(#anchorHighlightGradient)" opacity="0.3" />

        {/* Right fluke with detail */}
        <polygon points="47,41 40,41 40,49 49,45" fill="url(#anchorMetalGradient)" />
        <polygon points="46,42 41,42 41,47 47,44" fill="url(#anchorHighlightGradient)" opacity="0.3" />
      </g>

      {/* Subtle highlight on ring */}
      <ellipse cx="23" cy="6" rx="1.5" ry="1" fill="white" opacity="0.3" />
    </svg>
  );
}
