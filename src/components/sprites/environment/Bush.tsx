/**
 * Bush Sprite Component
 * Enhanced with layered foliage, depth gradients, and natural textures
 */

import type { ElementProps } from '../types';

export function Bush({ x = 0, y = 0, size = 60, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 60 36"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main foliage gradient - left cluster */}
        <radialGradient id="bushLeftGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#32CD32" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1a6b1a" />
        </radialGradient>
        {/* Center cluster gradient */}
        <radialGradient id="bushCenterGradient" cx="40%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#3adc3a" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#156b15" />
        </radialGradient>
        {/* Right cluster gradient */}
        <radialGradient id="bushRightGradient" cx="60%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#2ebd2e" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1a5a1a" />
        </radialGradient>
        {/* Highlight layer gradient */}
        <radialGradient id="bushHighlightGradient" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#90EE90" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#228B22" stopOpacity="0" />
        </radialGradient>
        {/* Shadow base gradient */}
        <linearGradient id="bushShadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="70%" stopColor="#0a3a0a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0a3a0a" stopOpacity="0.5" />
        </linearGradient>
        {/* Leaf texture pattern */}
        <pattern id="bushLeafPattern" patternUnits="userSpaceOnUse" width="6" height="6">
          <circle cx="2" cy="2" r="1" fill="#1a6b1a" opacity="0.2" />
          <circle cx="5" cy="5" r="1" fill="#1a6b1a" opacity="0.15" />
        </pattern>
        {/* Shadow filter */}
        <filter id="bushShadow">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="30" cy="35" rx="28" ry="3" fill="#000" opacity="0.15" />

      <g filter="url(#bushShadow)">
        {/* Back layer - darker, creates depth */}
        <ellipse cx="12" cy="28" rx="14" ry="10" fill="#1a5a1a" />
        <ellipse cx="30" cy="26" rx="16" ry="12" fill="#1a6b1a" />
        <ellipse cx="48" cy="28" rx="14" ry="10" fill="#1a5a1a" />

        {/* Main bush clusters */}
        {/* Left cluster */}
        <ellipse cx="15" cy="24" rx="15" ry="12" fill="url(#bushLeftGradient)" />
        <ellipse cx="15" cy="24" rx="15" ry="12" fill="url(#bushLeafPattern)" />

        {/* Center cluster (tallest) */}
        <ellipse cx="30" cy="20" rx="18" ry="16" fill="url(#bushCenterGradient)" />
        <ellipse cx="30" cy="20" rx="18" ry="16" fill="url(#bushLeafPattern)" />

        {/* Right cluster */}
        <ellipse cx="45" cy="24" rx="15" ry="12" fill="url(#bushRightGradient)" />
        <ellipse cx="45" cy="24" rx="15" ry="12" fill="url(#bushLeafPattern)" />

        {/* Front detail clusters for layered effect */}
        <ellipse cx="22" cy="28" rx="10" ry="7" fill="#2a8a2a" />
        <ellipse cx="38" cy="27" rx="9" ry="6" fill="#2a8a2a" />

        {/* Highlight overlays */}
        <ellipse cx="12" cy="18" rx="8" ry="6" fill="url(#bushHighlightGradient)" />
        <ellipse cx="28" cy="14" rx="10" ry="7" fill="url(#bushHighlightGradient)" />
        <ellipse cx="44" cy="19" rx="7" ry="5" fill="url(#bushHighlightGradient)" />

        {/* Small detail highlights */}
        <ellipse cx="10" cy="20" rx="3" ry="2" fill="#90EE90" opacity="0.4" />
        <ellipse cx="26" cy="12" rx="4" ry="2.5" fill="#90EE90" opacity="0.4" />
        <ellipse cx="42" cy="18" rx="3" ry="2" fill="#90EE90" opacity="0.4" />

        {/* Shadow at bottom of bush */}
        <ellipse cx="30" cy="32" rx="26" ry="4" fill="url(#bushShadowGradient)" />

        {/* Small berries/flowers scattered */}
        <circle cx="8" cy="22" r="1.5" fill="#FF6B6B" opacity="0.8" />
        <circle cx="20" cy="16" r="1" fill="#FF6B6B" opacity="0.7" />
        <circle cx="35" cy="18" r="1.2" fill="#FF6B6B" opacity="0.8" />
        <circle cx="50" cy="22" r="1" fill="#FF6B6B" opacity="0.7" />
      </g>
    </svg>
  );
}
