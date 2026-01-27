/**
 * GrassTuft Sprite Component
 * Enhanced with natural gradients and layered blades
 */

import type { ElementProps } from '../types';

export function GrassTuft({ x = 0, y = 0, size = 30, color = '#228B22' }: ElementProps) {
  // Create color variations
  const darkGreen = '#1a6b1a';
  const lightGreen = '#32CD32';
  const highlight = '#90EE90';
  const tipColor = '#7CFC00';

  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 30 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main blade gradient */}
        <linearGradient id="grassTuftBladeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={darkGreen} />
          <stop offset="40%" stopColor={color} />
          <stop offset="80%" stopColor={lightGreen} />
          <stop offset="100%" stopColor={tipColor} />
        </linearGradient>

        {/* Dark blade gradient */}
        <linearGradient id="grassTuftDarkBlade" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0f4f0f" />
          <stop offset="50%" stopColor={darkGreen} />
          <stop offset="100%" stopColor={color} />
        </linearGradient>

        {/* Highlight blade gradient */}
        <linearGradient id="grassTuftHighlightBlade" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="60%" stopColor={lightGreen} />
          <stop offset="100%" stopColor={highlight} />
        </linearGradient>

        {/* Tip glow effect */}
        <radialGradient id="grassTuftTipGlow" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor={highlight} stopOpacity="0.6" />
          <stop offset="100%" stopColor={lightGreen} stopOpacity="0" />
        </radialGradient>

        {/* Drop shadow filter */}
        <filter id="grassTuftShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0.5" dy="1" stdDeviation="0.5" floodColor="#000" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="15" cy="23" rx="10" ry="2" fill="rgba(0,0,0,0.15)" />

      {/* Base/root area */}
      <ellipse cx="15" cy="22" rx="6" ry="3" fill={darkGreen} opacity="0.5" />

      {/* Back layer blades (darker, for depth) */}
      <g opacity="0.5" filter="url(#grassTuftShadow)">
        <path d="M3 24 Q1 18 4 8" stroke="url(#grassTuftDarkBlade)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M27 24 Q29 18 26 8" stroke="url(#grassTuftDarkBlade)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M8 24 Q5 14 9 3" stroke="url(#grassTuftDarkBlade)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M22 24 Q25 14 21 3" stroke="url(#grassTuftDarkBlade)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>

      {/* Main blades */}
      <g filter="url(#grassTuftShadow)">
        {/* Leftmost blade - curved left */}
        <path d="M5 24 Q2 16 6 5" stroke="url(#grassTuftBladeGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M5 24 Q3 16 6 6" stroke={lightGreen} strokeWidth="0.5" fill="none" opacity="0.4" strokeLinecap="round" />

        {/* Second blade */}
        <path d="M10 24 Q7 13 11 2" stroke="url(#grassTuftBladeGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M10 24 Q8 13 11 3" stroke={highlight} strokeWidth="0.3" fill="none" opacity="0.5" strokeLinecap="round" />

        {/* Center blade - tallest, straight */}
        <path d="M15 24 Q15 12 15 0" stroke="url(#grassTuftHighlightBlade)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M15 24 Q15 12 15 1" stroke={highlight} strokeWidth="0.5" fill="none" opacity="0.6" strokeLinecap="round" />

        {/* Fourth blade */}
        <path d="M20 24 Q23 13 19 2" stroke="url(#grassTuftBladeGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M20 24 Q22 13 19 3" stroke={highlight} strokeWidth="0.3" fill="none" opacity="0.5" strokeLinecap="round" />

        {/* Rightmost blade - curved right */}
        <path d="M25 24 Q28 16 24 5" stroke="url(#grassTuftBladeGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M25 24 Q27 16 24 6" stroke={lightGreen} strokeWidth="0.5" fill="none" opacity="0.4" strokeLinecap="round" />
      </g>

      {/* Small accent blades in between */}
      <g opacity="0.7">
        <path d="M7 24 Q4 17 8 8" stroke="url(#grassTuftBladeGradient)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M12 24 Q10 15 13 5" stroke="url(#grassTuftBladeGradient)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M18 24 Q20 15 17 5" stroke="url(#grassTuftBladeGradient)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M23 24 Q26 17 22 8" stroke="url(#grassTuftBladeGradient)" strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>

      {/* Tip glows */}
      <g>
        <circle cx="6" cy="5" r="2" fill="url(#grassTuftTipGlow)" />
        <circle cx="11" cy="2" r="2" fill="url(#grassTuftTipGlow)" />
        <circle cx="15" cy="0" r="2.5" fill="url(#grassTuftTipGlow)" />
        <circle cx="19" cy="2" r="2" fill="url(#grassTuftTipGlow)" />
        <circle cx="24" cy="5" r="2" fill="url(#grassTuftTipGlow)" />
      </g>

      {/* Dew drops */}
      <g opacity="0.7">
        <ellipse cx="8" cy="12" rx="1" ry="0.8" fill="white" opacity="0.5" />
        <ellipse cx="8" cy="11.8" rx="0.4" ry="0.3" fill="white" opacity="0.8" />
        <ellipse cx="22" cy="10" rx="0.8" ry="0.6" fill="white" opacity="0.4" />
        <ellipse cx="21.9" cy="9.8" rx="0.3" ry="0.2" fill="white" opacity="0.7" />
      </g>
    </svg>
  );
}
