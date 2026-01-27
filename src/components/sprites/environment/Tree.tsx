/**
 * Tree Sprite Component
 * High quality with layered foliage, bark texture, and natural details
 */

import type { ElementProps } from '../types';

export function Tree({ x = 0, y = 0, size = 80, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 80 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Trunk bark gradient */}
        <linearGradient id="treeTrunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a3010" />
          <stop offset="25%" stopColor="#6B4423" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="75%" stopColor="#6B4423" />
          <stop offset="100%" stopColor="#4a3010" />
        </linearGradient>
        {/* Main foliage gradient */}
        <radialGradient id="treeFoliageGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3aaa3a" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#1a6a1a" />
        </radialGradient>
        {/* Secondary foliage gradient */}
        <radialGradient id="treeFoliageSecondary" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2a9a2a" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#156015" />
        </radialGradient>
        {/* Shadow foliage */}
        <radialGradient id="treeFoliageShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a6a1a" />
          <stop offset="100%" stopColor="#104a10" />
        </radialGradient>
        {/* Bark texture pattern */}
        <pattern id="treeBarkPattern" width="4" height="10" patternUnits="userSpaceOnUse">
          <line x1="1" y1="0" x2="1" y2="10" stroke="#3a2008" strokeWidth="0.8" opacity="0.4" />
          <line x1="3" y1="0" x2="3" y2="10" stroke="#5a4020" strokeWidth="0.5" opacity="0.3" />
          <path d="M0 3 Q2 4 4 3" stroke="#3a2008" strokeWidth="0.3" fill="none" opacity="0.3" />
          <path d="M0 7 Q2 6 4 7" stroke="#3a2008" strokeWidth="0.3" fill="none" opacity="0.3" />
        </pattern>
        {/* Leaf texture pattern */}
        <pattern id="treeLeafPattern" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#1a5a1a" opacity="0.15" />
          <circle cx="6" cy="6" r="1" fill="#3a9a3a" opacity="0.1" />
          <circle cx="6" cy="2" r="0.8" fill="#1a6a1a" opacity="0.1" />
        </pattern>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="40" cy="118" rx="25" ry="4" fill="#000000" opacity="0.2" />

      {/* Trunk / Stamm */}
      <path d="M32 70 L30 120 L50 120 L48 70 Z" fill="url(#treeTrunkGradient)" />
      <path d="M32 70 L30 120 L50 120 L48 70 Z" fill="url(#treeBarkPattern)" />

      {/* Trunk detail - bark lines */}
      <line x1="35" y1="72" x2="34" y2="118" stroke="#3a2008" strokeWidth="0.5" opacity="0.4" />
      <line x1="40" y1="70" x2="40" y2="120" stroke="#5a4020" strokeWidth="0.3" opacity="0.3" />
      <line x1="45" y1="72" x2="46" y2="118" stroke="#3a2008" strokeWidth="0.5" opacity="0.4" />

      {/* Trunk knots */}
      <ellipse cx="37" cy="85" rx="2" ry="3" fill="#3a2008" opacity="0.5" />
      <ellipse cx="43" cy="100" rx="1.5" ry="2" fill="#3a2008" opacity="0.4" />

      {/* Root bulges */}
      <ellipse cx="32" cy="118" rx="4" ry="3" fill="#6B4423" />
      <ellipse cx="48" cy="118" rx="4" ry="3" fill="#6B4423" />

      {/* Branch hints at trunk top */}
      <path d="M32 72 Q25 68 20 65" stroke="#6B4423" strokeWidth="3" fill="none" />
      <path d="M48 72 Q55 68 60 65" stroke="#6B4423" strokeWidth="3" fill="none" />

      {/* Back foliage layer (shadow) */}
      <ellipse cx="40" cy="50" rx="38" ry="42" fill="url(#treeFoliageShadow)" opacity="0.5" />

      {/* Main crown / Krone */}
      <ellipse cx="40" cy="45" rx="35" ry="40" fill="url(#treeFoliageGradient)" />
      <ellipse cx="40" cy="45" rx="35" ry="40" fill="url(#treeLeafPattern)" />

      {/* Left foliage cluster */}
      <ellipse cx="28" cy="55" rx="26" ry="30" fill="url(#treeFoliageSecondary)" opacity="0.9" />
      <ellipse cx="28" cy="55" rx="26" ry="30" fill="url(#treeLeafPattern)" />

      {/* Right foliage cluster */}
      <ellipse cx="52" cy="55" rx="26" ry="30" fill="url(#treeFoliageSecondary)" opacity="0.9" />
      <ellipse cx="52" cy="55" rx="26" ry="30" fill="url(#treeLeafPattern)" />

      {/* Top highlight cluster */}
      <ellipse cx="40" cy="30" rx="20" ry="18" fill="#3aaa3a" opacity="0.4" />

      {/* Foliage depth details - darker spots */}
      <ellipse cx="25" cy="45" rx="8" ry="10" fill="#1a5a1a" opacity="0.3" />
      <ellipse cx="55" cy="50" rx="6" ry="8" fill="#1a5a1a" opacity="0.25" />
      <ellipse cx="40" cy="65" rx="10" ry="8" fill="#156015" opacity="0.3" />

      {/* Highlight spots */}
      <ellipse cx="35" cy="25" rx="6" ry="5" fill="#4aba4a" opacity="0.3" />
      <ellipse cx="50" cy="35" rx="5" ry="4" fill="#3aaa3a" opacity="0.25" />
      <ellipse cx="20" cy="40" rx="4" ry="5" fill="#4aba4a" opacity="0.2" />

      {/* Individual leaf hints on edges */}
      <circle cx="10" cy="50" r="3" fill={color} opacity="0.7" />
      <circle cx="70" cy="55" r="3" fill={color} opacity="0.7" />
      <circle cx="15" cy="35" r="2.5" fill="#2a9a2a" opacity="0.6" />
      <circle cx="65" cy="40" r="2.5" fill="#2a9a2a" opacity="0.6" />
      <circle cx="40" cy="8" r="3" fill="#3aaa3a" opacity="0.5" />
    </svg>
  );
}
