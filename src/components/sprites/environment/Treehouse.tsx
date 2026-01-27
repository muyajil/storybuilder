/**
 * Treehouse Sprite Component
 * High quality with wood details, layered foliage, and cozy cabin features
 */

import type { ElementProps } from '../types';

export function Treehouse({ x = 0, y = 0, size = 100, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Tree trunk gradient */}
        <linearGradient id="treehouseTrunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a3010" />
          <stop offset="25%" stopColor="#6B4423" />
          <stop offset="50%" stopColor={color} />
          <stop offset="75%" stopColor="#6B4423" />
          <stop offset="100%" stopColor="#4a3010" />
        </linearGradient>
        {/* Tree foliage gradient */}
        <radialGradient id="treehouseFoliageGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3aaa3a" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#156015" />
        </radialGradient>
        {/* House wall gradient */}
        <linearGradient id="treehouseWallGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C9A86C" />
          <stop offset="30%" stopColor="#DEB887" />
          <stop offset="70%" stopColor="#D4A86A" />
          <stop offset="100%" stopColor="#B89850" />
        </linearGradient>
        {/* Roof gradient */}
        <linearGradient id="treehouseRoofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B2020" />
          <stop offset="50%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#6B0000" />
        </linearGradient>
        {/* Window gradient */}
        <linearGradient id="treehouseWindowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ADD8E6" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#6BB3D9" />
        </linearGradient>
        {/* Ladder wood gradient */}
        <linearGradient id="treehouseLadderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#6B4423" />
        </linearGradient>
        {/* Bark texture */}
        <pattern id="treehouseBarkPattern" width="4" height="8" patternUnits="userSpaceOnUse">
          <line x1="1" y1="0" x2="1" y2="8" stroke="#3a2008" strokeWidth="0.6" opacity="0.3" />
          <line x1="3" y1="0" x2="3" y2="8" stroke="#5a4020" strokeWidth="0.4" opacity="0.2" />
        </pattern>
        {/* Wood plank pattern */}
        <pattern id="treehousePlankPattern" width="12" height="35" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="35" stroke="#A08050" strokeWidth="0.5" opacity="0.3" />
          <line x1="6" y1="0" x2="6" y2="35" stroke="#B89860" strokeWidth="0.3" opacity="0.2" />
          <line x1="0" y1="10" x2="12" y2="10" stroke="#A08050" strokeWidth="0.3" opacity="0.15" />
          <line x1="0" y1="25" x2="12" y2="25" stroke="#A08050" strokeWidth="0.3" opacity="0.15" />
        </pattern>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="50" cy="118" rx="30" ry="4" fill="#000000" opacity="0.2" />

      {/* Tree trunk / Baum */}
      <rect x="42" y="50" width="16" height="70" fill="url(#treehouseTrunkGradient)" />
      <rect x="42" y="50" width="16" height="70" fill="url(#treehouseBarkPattern)" />

      {/* Trunk detail lines */}
      <line x1="45" y1="52" x2="45" y2="118" stroke="#3a2008" strokeWidth="0.5" opacity="0.4" />
      <line x1="55" y1="52" x2="55" y2="118" stroke="#3a2008" strokeWidth="0.5" opacity="0.4" />

      {/* Root bulges */}
      <ellipse cx="44" cy="118" rx="4" ry="3" fill="#6B4423" />
      <ellipse cx="56" cy="118" rx="4" ry="3" fill="#6B4423" />

      {/* Back foliage layer */}
      <ellipse cx="50" cy="38" rx="42" ry="36" fill="#156015" opacity="0.6" />

      {/* Tree crown / Baumkrone */}
      <ellipse cx="50" cy="35" rx="40" ry="35" fill="url(#treehouseFoliageGradient)" />

      {/* Left foliage cluster */}
      <ellipse cx="28" cy="45" rx="26" ry="26" fill="url(#treehouseFoliageGradient)" opacity="0.9" />

      {/* Right foliage cluster */}
      <ellipse cx="72" cy="45" rx="26" ry="26" fill="url(#treehouseFoliageGradient)" opacity="0.9" />

      {/* House platform */}
      <rect x="22" y="73" width="56" height="4" fill={color} />
      <rect x="20" y="72" width="60" height="2" fill="#A0522D" />

      {/* House / Haus */}
      <rect x="25" y="40" width="50" height="35" fill="url(#treehouseWallGradient)" />
      <rect x="25" y="40" width="50" height="35" fill="url(#treehousePlankPattern)" />

      {/* House shadow side */}
      <rect x="25" y="40" width="8" height="35" fill="#B89850" opacity="0.5" />

      {/* Roof / Dach */}
      <polygon points="50,18 18,45 82,45" fill="url(#treehouseRoofGradient)" />
      {/* Roof edge highlight */}
      <line x1="18" y1="45" x2="82" y2="45" stroke="#9B1010" strokeWidth="1" />
      {/* Roof shingle lines */}
      <line x1="50" y1="22" x2="25" y2="42" stroke="#5B0000" strokeWidth="0.5" opacity="0.4" />
      <line x1="50" y1="22" x2="75" y2="42" stroke="#AB2020" strokeWidth="0.3" opacity="0.3" />
      <line x1="50" y1="30" x2="32" y2="42" stroke="#5B0000" strokeWidth="0.3" opacity="0.3" />
      <line x1="50" y1="30" x2="68" y2="42" stroke="#AB2020" strokeWidth="0.3" opacity="0.3" />

      {/* Window / Fenster */}
      <rect x="38" y="48" width="14" height="12" fill="#4a3a2a" rx="1" />
      <rect x="40" y="50" width="10" height="8" fill="url(#treehouseWindowGradient)" rx="1" />
      {/* Window frame */}
      <line x1="45" y1="50" x2="45" y2="58" stroke="#6B4423" strokeWidth="1" />
      <line x1="40" y1="54" x2="50" y2="54" stroke="#6B4423" strokeWidth="1" />
      {/* Window reflection */}
      <rect x="41" y="51" width="3" height="2" fill="#FFFFFF" opacity="0.4" rx="0.5" />

      {/* Door / Tür */}
      <rect x="55" y="52" width="12" height="23" fill="#5D3A1A" rx="1" />
      <rect x="56" y="53" width="10" height="21" fill="#4a2a0a" rx="1" />
      {/* Door frame */}
      <rect x="55" y="52" width="12" height="2" fill="#6B4423" />
      {/* Door handle */}
      <circle cx="64" cy="65" r="1.5" fill="#C0A080" />

      {/* Railing */}
      <rect x="22" y="70" width="2" height="6" fill={color} />
      <rect x="76" y="70" width="2" height="6" fill={color} />
      <rect x="22" y="70" width="56" height="2" fill="#A0522D" />

      {/* Ladder / Leiter */}
      <rect x="30" y="75" width="3" height="43" fill="url(#treehouseLadderGradient)" />
      <rect x="42" y="75" width="3" height="43" fill="url(#treehouseLadderGradient)" />
      {/* Ladder rungs */}
      {[...Array(5)].map((_, i) => (
        <g key={i}>
          <rect x="33" y={80 + i * 9} width="9" height="3" fill="url(#treehouseLadderGradient)" rx="0.5" />
          <line x1="33" y1={81 + i * 9} x2="42" y2={81 + i * 9} stroke="#A0522D" strokeWidth="0.5" />
        </g>
      ))}

      {/* Front foliage overlapping house */}
      <ellipse cx="15" cy="50" rx="12" ry="15" fill="#228B22" opacity="0.7" />
      <ellipse cx="85" cy="48" rx="10" ry="12" fill="#228B22" opacity="0.7" />
      <ellipse cx="50" cy="15" rx="15" ry="12" fill="#3aaa3a" opacity="0.5" />

      {/* Foliage highlights */}
      <ellipse cx="30" cy="28" rx="8" ry="6" fill="#3aaa3a" opacity="0.4" />
      <ellipse cx="70" cy="32" rx="7" ry="5" fill="#3aaa3a" opacity="0.35" />
    </svg>
  );
}
