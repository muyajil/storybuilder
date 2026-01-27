/**
 * WaterDrop Sprite Component
 * Enhanced with liquid effects, reflections, and shimmering highlights
 */

import type { EffectProps } from '../types';

export function WaterDrop({ x = 0, y = 0, size = 20}: EffectProps) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 20 26"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main water gradient */}
        <linearGradient id="waterDropMainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#87CEFA" />
          <stop offset="30%" stopColor="#4169E1" />
          <stop offset="70%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#0D1B4A" />
        </linearGradient>

        {/* Highlight gradient */}
        <linearGradient id="waterDropHighlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="50%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Inner shine gradient */}
        <radialGradient id="waterDropShineGrad" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#87CEFA" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4169E1" stopOpacity="0" />
        </radialGradient>

        {/* Bottom reflection gradient */}
        <radialGradient id="waterDropBottomGrad" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stopColor="#87CEFA" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#4169E1" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
        </radialGradient>

        {/* Outer glow */}
        <radialGradient id="waterDropGlow" cx="50%" cy="60%" r="50%">
          <stop offset="50%" stopColor="#4169E1" stopOpacity="0" />
          <stop offset="75%" stopColor="#4169E1" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#87CEFA" stopOpacity="0.3" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="waterDropGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner shadow filter */}
        <filter id="waterDropInnerShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Ripple filter */}
        <filter id="waterDropRipple" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow aura */}
      <path
        d="M10 -1 Q-1 15 -1 19 C-1 26 4 28 10 28 C16 28 21 26 21 19 Q21 15 10 -1"
        fill="url(#waterDropGlow)"
      />

      {/* Shadow */}
      <path
        d="M11 1 Q1 15 1 19 C1 25 5 27 11 27 C17 27 21 25 21 19 Q21 15 11 1"
        fill="#0A1A4A"
        opacity="0.2"
      />

      {/* Main water drop shape */}
      <path
        d="M10 0 Q0 14 0 18 C0 24 4 26 10 26 C16 26 20 24 20 18 Q20 14 10 0"
        fill="url(#waterDropMainGrad)"
        filter="url(#waterDropGlowFilter)"
      />

      {/* Inner edge highlight */}
      <path
        d="M10 2 Q2 14 2 18 C2 23 5 25 10 25 C15 25 18 23 18 18 Q18 14 10 2"
        fill="none"
        stroke="#87CEFA"
        strokeWidth="0.5"
        opacity="0.4"
      />

      {/* Main highlight ellipse */}
      <ellipse
        cx="6"
        cy="18"
        rx="3"
        ry="4"
        fill="url(#waterDropHighlightGrad)"
        filter="url(#waterDropInnerShadow)"
      />

      {/* Inner shine spot */}
      <circle cx="6" cy="16" r="2" fill="url(#waterDropShineGrad)" />

      {/* Bright highlight core */}
      <ellipse cx="5" cy="15" rx="1.5" ry="2" fill="white" opacity="0.7" />
      <ellipse cx="5" cy="14" rx="0.8" ry="1" fill="white" opacity="0.9" />

      {/* Secondary small highlight */}
      <circle cx="12" cy="20" r="1" fill="white" opacity="0.3" />

      {/* Top shine */}
      <ellipse cx="8" cy="8" rx="2" ry="1" fill="white" opacity="0.25" />

      {/* Bottom reflection */}
      <ellipse cx="10" cy="23" rx="4" ry="2" fill="url(#waterDropBottomGrad)" />

      {/* Edge reflection line */}
      <path
        d="M4 10 Q6 14 4 20"
        stroke="white"
        strokeWidth="0.5"
        fill="none"
        opacity="0.2"
        strokeLinecap="round"
      />

      {/* Surface tension ring hint */}
      <ellipse
        cx="10"
        cy="24"
        rx="6"
        ry="1.5"
        fill="none"
        stroke="#87CEFA"
        strokeWidth="0.3"
        opacity="0.3"
      />

      {/* Tiny sparkle accents */}
      <g filter="url(#waterDropRipple)">
        <circle cx="4" cy="12" r="0.5" fill="white" opacity="0.6" />
        <circle cx="14" cy="18" r="0.4" fill="white" opacity="0.4" />
        <circle cx="8" cy="22" r="0.3" fill="white" opacity="0.3" />
      </g>

      {/* Mini ripple at bottom */}
      <ellipse cx="10" cy="25.5" rx="3" ry="0.5" fill="#87CEFA" opacity="0.15" />
    </svg>
  );
}
