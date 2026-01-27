/**
 * Fern Sprite Component
 * Enhanced with layered foliage and natural gradients
 */

import type { ElementProps } from '../types';

export function Fern({ x = 0, y = 0, size = 50, color = '#228B22' }: ElementProps) {
  // Create color variations for depth
  const darkGreen = '#1a6b1a';
  const lightGreen = '#32CD32';
  const highlight = '#90EE90';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main frond gradient */}
        <linearGradient id="fernFrondGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={darkGreen} />
          <stop offset="40%" stopColor={color} />
          <stop offset="80%" stopColor={lightGreen} />
          <stop offset="100%" stopColor={highlight} />
        </linearGradient>

        {/* Leaf gradient */}
        <linearGradient id="fernLeafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={lightGreen} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={darkGreen} />
        </linearGradient>

        {/* Secondary frond gradient */}
        <linearGradient id="fernSecondaryGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={darkGreen} stopOpacity="0.9" />
          <stop offset="60%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor={lightGreen} />
        </linearGradient>

        {/* Highlight gradient for leaf tips */}
        <radialGradient id="fernTipGlow" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor={highlight} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>

        {/* Drop shadow filter */}
        <filter id="fernShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Background shadow layer for depth */}
      <g opacity="0.2" transform="translate(2, 2)">
        <path d="M25 50 Q20 30 10 15" stroke="#000" strokeWidth="3" fill="none" />
        <path d="M25 50 Q25 25 25 5" stroke="#000" strokeWidth="3" fill="none" />
        <path d="M25 50 Q30 30 40 15" stroke="#000" strokeWidth="3" fill="none" />
      </g>

      {/* Back layer fronds (darker, for depth) */}
      <g opacity="0.6">
        <path d="M25 50 Q18 32 5 18" stroke={darkGreen} strokeWidth="2.5" fill="none" />
        <path d="M25 50 Q32 32 45 18" stroke={darkGreen} strokeWidth="2.5" fill="none" />
      </g>

      {/* Main fronds with gradient */}
      <path d="M25 50 Q20 30 10 15" stroke="url(#fernFrondGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M25 50 Q25 25 25 5" stroke="url(#fernFrondGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M25 50 Q30 30 40 15" stroke="url(#fernFrondGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Left frond leaflets */}
      <g filter="url(#fernShadow)">
        <path d="M22 42 Q16 40 14 35" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
        <path d="M20 36 Q13 34 10 28" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
        <path d="M18 30 Q11 28 8 22" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
        <path d="M16 24 Q10 22 7 16" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
        <path d="M13 18 Q8 16 6 12" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
      </g>

      {/* Center frond leaflets */}
      <g filter="url(#fernShadow)">
        <path d="M23 38 Q18 35 17 30" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
        <path d="M27 38 Q32 35 33 30" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
        <path d="M24 28 Q19 25 18 20" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
        <path d="M26 28 Q31 25 32 20" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
        <path d="M24 18 Q20 15 19 10" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
        <path d="M26 18 Q30 15 31 10" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
      </g>

      {/* Right frond leaflets */}
      <g filter="url(#fernShadow)">
        <path d="M28 42 Q34 40 36 35" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
        <path d="M30 36 Q37 34 40 28" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
        <path d="M32 30 Q39 28 42 22" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
        <path d="M34 24 Q40 22 43 16" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
        <path d="M37 18 Q42 16 44 12" fill="url(#fernLeafGradient)" stroke={darkGreen} strokeWidth="0.5" />
      </g>

      {/* Highlight accents on tips */}
      <circle cx="10" cy="15" r="3" fill="url(#fernTipGlow)" />
      <circle cx="25" cy="5" r="3" fill="url(#fernTipGlow)" />
      <circle cx="40" cy="15" r="3" fill="url(#fernTipGlow)" />

      {/* Fine detail veins on central frond */}
      <g opacity="0.4">
        <line x1="25" y1="45" x2="24" y2="40" stroke={highlight} strokeWidth="0.3" />
        <line x1="25" y1="35" x2="24" y2="30" stroke={highlight} strokeWidth="0.3" />
        <line x1="25" y1="25" x2="25" y2="20" stroke={highlight} strokeWidth="0.3" />
        <line x1="25" y1="15" x2="25" y2="10" stroke={highlight} strokeWidth="0.3" />
      </g>

      {/* Tiny unfurling frond at center top */}
      <path d="M25 8 Q23 6 24 4 Q26 3 27 5 Q26 7 25 8" fill={lightGreen} stroke={color} strokeWidth="0.5" />
    </svg>
  );
}
