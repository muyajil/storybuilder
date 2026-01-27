/**
 * Seashell Sprite Component
 * Enhanced with pearlescent gradients, detailed ridges, and natural depth
 */

import type { ElementProps } from '../types';

export function Seashell({ x = 0, y = 0, size = 25, color = '#FFE4C4' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 25 20"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Pearlescent shell gradient */}
        <radialGradient id="seashellMainGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="30%" stopColor={color} />
          <stop offset="60%" stopColor="#F5D4B4" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>

        {/* Shell interior gradient */}
        <radialGradient id="seashellInteriorGradient" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#FFE8D8" />
          <stop offset="50%" stopColor="#FFDAC4" />
          <stop offset="100%" stopColor="#E8C4A4" />
        </radialGradient>

        {/* Ridge shadow gradient */}
        <linearGradient id="seashellRidgeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DEB887" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#DEB887" stopOpacity="0" />
        </linearGradient>

        {/* Iridescent highlight */}
        <linearGradient id="seashellIridescentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE0F0" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#E0F0FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#F0FFE0" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="12.5" cy="18" rx="10" ry="2" fill="rgba(0,0,0,0.15)" />

      {/* Shell base/lip */}
      <ellipse cx="12.5" cy="14" rx="11" ry="6" fill="url(#seashellInteriorGradient)" />

      {/* Main shell body */}
      <path d="M2 14 Q12.5 0 23 14" fill="url(#seashellMainGradient)" stroke="#DEB887" strokeWidth="0.5" />

      {/* Ridges - outer to inner */}
      <path d="M3 14 Q12.5 2 22 14" fill="none" stroke="url(#seashellRidgeGradient)" strokeWidth="1.2" />
      <path d="M5 14 Q12.5 4 20 14" fill="none" stroke="url(#seashellRidgeGradient)" strokeWidth="1" />
      <path d="M7 14 Q12.5 6 18 14" fill="none" stroke="url(#seashellRidgeGradient)" strokeWidth="0.8" />
      <path d="M9 14 Q12.5 8 16 14" fill="none" stroke="url(#seashellRidgeGradient)" strokeWidth="0.6" />
      <path d="M11 14 Q12.5 10 14 14" fill="none" stroke="url(#seashellRidgeGradient)" strokeWidth="0.4" />

      {/* Radial ridge lines */}
      <line x1="12.5" y1="14" x2="4" y2="8" stroke="#C9A875" strokeWidth="0.3" opacity="0.5" />
      <line x1="12.5" y1="14" x2="7" y2="5" stroke="#C9A875" strokeWidth="0.3" opacity="0.5" />
      <line x1="12.5" y1="14" x2="12.5" y2="2" stroke="#C9A875" strokeWidth="0.3" opacity="0.5" />
      <line x1="12.5" y1="14" x2="18" y2="5" stroke="#C9A875" strokeWidth="0.3" opacity="0.5" />
      <line x1="12.5" y1="14" x2="21" y2="8" stroke="#C9A875" strokeWidth="0.3" opacity="0.5" />

      {/* Additional fine ridges */}
      <line x1="12.5" y1="14" x2="5.5" y2="6.5" stroke="#C9A875" strokeWidth="0.2" opacity="0.4" />
      <line x1="12.5" y1="14" x2="9.5" y2="3.5" stroke="#C9A875" strokeWidth="0.2" opacity="0.4" />
      <line x1="12.5" y1="14" x2="15.5" y2="3.5" stroke="#C9A875" strokeWidth="0.2" opacity="0.4" />
      <line x1="12.5" y1="14" x2="19.5" y2="6.5" stroke="#C9A875" strokeWidth="0.2" opacity="0.4" />

      {/* Iridescent overlay */}
      <path d="M2 14 Q12.5 0 23 14" fill="url(#seashellIridescentGradient)" />

      {/* Highlight reflections */}
      <ellipse cx="8" cy="7" rx="2" ry="1.5" fill="white" opacity="0.35" />
      <ellipse cx="16" cy="6" rx="1.5" ry="1" fill="white" opacity="0.25" />
      <ellipse cx="12.5" cy="4" rx="1" ry="0.8" fill="white" opacity="0.3" />

      {/* Shell lip highlight */}
      <ellipse cx="12.5" cy="13" rx="8" ry="2" fill="white" opacity="0.15" />

      {/* Pearl-like spots */}
      <circle cx="6" cy="10" r="0.5" fill="white" opacity="0.4" />
      <circle cx="19" cy="10" r="0.4" fill="white" opacity="0.35" />
      <circle cx="12.5" cy="7" r="0.3" fill="white" opacity="0.3" />

      {/* Edge definition */}
      <path d="M2 14 Q12.5 0 23 14" fill="none" stroke="#B89865" strokeWidth="0.3" opacity="0.6" />
    </svg>
  );
}
