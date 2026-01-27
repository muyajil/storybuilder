/**
 * Barrel Sprite Component
 * Enhanced with wood grain, metal bands, and 3D depth
 */

import type { ElementProps } from '../types';

export function Barrel({ x = 0, y = 0, size = 40, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 40 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Wood grain gradient for barrel body */}
        <linearGradient id="barrelWoodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5a3515" />
          <stop offset="20%" stopColor={color} />
          <stop offset="40%" stopColor="#9a5a23" />
          <stop offset="60%" stopColor={color} />
          <stop offset="80%" stopColor="#7a4518" />
          <stop offset="100%" stopColor="#5a3515" />
        </linearGradient>
        {/* Top lid gradient */}
        <radialGradient id="barrelTopGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#C4773a" />
          <stop offset="60%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#8B4513" />
        </radialGradient>
        {/* Bottom shadow gradient */}
        <radialGradient id="barrelBottomGradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#654321" />
          <stop offset="100%" stopColor="#4a3010" />
        </radialGradient>
        {/* Metal band gradient */}
        <linearGradient id="barrelMetalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#909090" />
          <stop offset="30%" stopColor="#696969" />
          <stop offset="70%" stopColor="#505050" />
          <stop offset="100%" stopColor="#404040" />
        </linearGradient>
        {/* Metal shine */}
        <linearGradient id="barrelMetalShine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#b0b0b0" />
          <stop offset="50%" stopColor="#808080" />
          <stop offset="100%" stopColor="#606060" />
        </linearGradient>
        {/* Wood plank pattern */}
        <pattern id="barrelPlankPattern" patternUnits="userSpaceOnUse" width="5" height="48">
          <line x1="0" y1="0" x2="0" y2="48" stroke="#000" strokeWidth="0.5" opacity="0.15" />
        </pattern>
      </defs>

      {/* Bottom shadow ellipse */}
      <ellipse cx="20" cy="46" rx="17" ry="3" fill="#000" opacity="0.25" />

      {/* Barrel bottom (visible rim) */}
      <ellipse cx="20" cy="44" rx="16" ry="4" fill="url(#barrelBottomGradient)" />

      {/* Barrel body with bulge effect */}
      <path d="M4 8 Q2 24 4 44 Q20 48 36 44 Q38 24 36 8 Q20 4 4 8" fill="url(#barrelWoodGradient)" />

      {/* Wood plank lines overlay */}
      <path d="M4 8 Q2 24 4 44 Q20 48 36 44 Q38 24 36 8 Q20 4 4 8" fill="url(#barrelPlankPattern)" />

      {/* Individual stave lines */}
      <path d="M8 8 Q6 26 8 44" stroke="#5a3010" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M14 7 Q12 26 14 45" stroke="#5a3010" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M20 6 Q20 26 20 46" stroke="#5a3010" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M26 7 Q28 26 26 45" stroke="#5a3010" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M32 8 Q34 26 32 44" stroke="#5a3010" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Top lid with depth */}
      <ellipse cx="20" cy="8" rx="16" ry="5" fill="url(#barrelTopGradient)" />
      {/* Top lid inner ring */}
      <ellipse cx="20" cy="8" rx="12" ry="3.5" fill="none" stroke="#7a4518" strokeWidth="0.5" opacity="0.5" />
      {/* Top lid highlight */}
      <ellipse cx="16" cy="6" rx="6" ry="2" fill="white" opacity="0.2" />

      {/* Upper metal band */}
      <ellipse cx="20" cy="14" rx="17" ry="4" fill="none" stroke="url(#barrelMetalGradient)" strokeWidth="3" />
      <ellipse cx="20" cy="13" rx="17" ry="4" fill="none" stroke="url(#barrelMetalShine)" strokeWidth="1" opacity="0.5" />
      {/* Band rivets */}
      <circle cx="8" cy="14" r="1" fill="#505050" />
      <circle cx="32" cy="14" r="1" fill="#505050" />

      {/* Middle metal band */}
      <ellipse cx="20" cy="26" rx="18" ry="4" fill="none" stroke="url(#barrelMetalGradient)" strokeWidth="3" />
      <ellipse cx="20" cy="25" rx="18" ry="4" fill="none" stroke="url(#barrelMetalShine)" strokeWidth="1" opacity="0.5" />
      {/* Band rivets */}
      <circle cx="6" cy="26" r="1" fill="#505050" />
      <circle cx="34" cy="26" r="1" fill="#505050" />

      {/* Lower metal band */}
      <ellipse cx="20" cy="38" rx="17" ry="4" fill="none" stroke="url(#barrelMetalGradient)" strokeWidth="3" />
      <ellipse cx="20" cy="37" rx="17" ry="4" fill="none" stroke="url(#barrelMetalShine)" strokeWidth="1" opacity="0.5" />
      {/* Band rivets */}
      <circle cx="8" cy="38" r="1" fill="#505050" />
      <circle cx="32" cy="38" r="1" fill="#505050" />

      {/* Highlight on barrel body */}
      <path d="M10 10 Q8 26 10 42" stroke="white" strokeWidth="2" fill="none" opacity="0.15" />
    </svg>
  );
}
