/**
 * Windmill Sprite Component
 * High quality with stucco texture, detailed blades, and architectural features
 */

import type { ElementProps } from '../types';

export function Windmill({ x = 0, y = 0, size = 100, color = '#DEB887' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Building wall gradient */}
        <linearGradient id="windmillWallGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C9A86C" />
          <stop offset="20%" stopColor="#D4B87A" />
          <stop offset="50%" stopColor={color} />
          <stop offset="80%" stopColor="#D4B87A" />
          <stop offset="100%" stopColor="#C0A060" />
        </linearGradient>
        {/* Wall texture pattern */}
        <pattern id="windmillStuccoPattern" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="8" height="8" fill="none" />
          <circle cx="2" cy="2" r="0.5" fill="#B09860" opacity="0.2" />
          <circle cx="6" cy="5" r="0.6" fill="#C0A870" opacity="0.15" />
          <circle cx="4" cy="7" r="0.4" fill="#B09860" opacity="0.1" />
        </pattern>
        {/* Roof gradient */}
        <linearGradient id="windmillRoofGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#5D3000" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#A05520" />
        </linearGradient>
        {/* Door gradient */}
        <linearGradient id="windmillDoorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5D3000" />
        </linearGradient>
        {/* Window gradient */}
        <linearGradient id="windmillWindowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ADD8E6" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#6BB3D9" />
        </linearGradient>
        {/* Blade wood gradient */}
        <linearGradient id="windmillBladeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5D3000" />
          <stop offset="30%" stopColor="#8B4513" />
          <stop offset="70%" stopColor="#7A4010" />
          <stop offset="100%" stopColor="#5D3000" />
        </linearGradient>
        {/* Hub gradient */}
        <radialGradient id="windmillHubGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#5a5a5a" />
          <stop offset="50%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#333333" />
        </radialGradient>
        {/* Sail canvas gradient */}
        <linearGradient id="windmillSailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F5DC" />
          <stop offset="50%" stopColor="#E8E0C8" />
          <stop offset="100%" stopColor="#D4CDB8" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="50" cy="119" rx="25" ry="4" fill="#000000" opacity="0.2" />

      {/* Building body / Gebäude */}
      <path d="M35 120 L40 50 L60 50 L65 120 Z" fill="url(#windmillWallGradient)" />
      <path d="M35 120 L40 50 L60 50 L65 120 Z" fill="url(#windmillStuccoPattern)" />

      {/* Wall detail lines */}
      <line x1="42" y1="55" x2="38" y2="115" stroke="#B09860" strokeWidth="0.5" opacity="0.3" />
      <line x1="58" y1="55" x2="62" y2="115" stroke="#C0A870" strokeWidth="0.3" opacity="0.2" />

      {/* Building shadow side */}
      <path d="M35 120 L40 50 L45 50 L40 120 Z" fill="#B09860" opacity="0.4" />

      {/* Roof / Dach */}
      <polygon points="50,28 33,52 67,52" fill="url(#windmillRoofGradient)" />
      {/* Roof edge */}
      <line x1="33" y1="52" x2="67" y2="52" stroke="#4a2a0a" strokeWidth="1" />
      {/* Roof shingle lines */}
      <line x1="50" y1="32" x2="38" y2="50" stroke="#4a2a0a" strokeWidth="0.5" opacity="0.3" />
      <line x1="50" y1="32" x2="62" y2="50" stroke="#A06030" strokeWidth="0.3" opacity="0.2" />
      <line x1="50" y1="40" x2="42" y2="50" stroke="#4a2a0a" strokeWidth="0.3" opacity="0.25" />

      {/* Door / Tür */}
      <rect x="42" y="88" width="16" height="32" fill="url(#windmillDoorGradient)" rx="8" ry="2" />
      <rect x="43" y="89" width="14" height="30" fill="#5D3000" rx="7" ry="1" />
      {/* Door frame */}
      <line x1="50" y1="90" x2="50" y2="118" stroke="#4a2a0a" strokeWidth="1" />
      {/* Door handle */}
      <circle cx="54" cy="105" r="1.5" fill="#8B7355" />

      {/* Window / Fenster */}
      <rect x="43" y="58" width="14" height="12" fill="#4a3a2a" rx="1" />
      <rect x="44" y="59" width="12" height="10" fill="url(#windmillWindowGradient)" rx="1" />
      {/* Window frame */}
      <line x1="50" y1="59" x2="50" y2="69" stroke="#6B4423" strokeWidth="1" />
      <line x1="44" y1="64" x2="56" y2="64" stroke="#6B4423" strokeWidth="1" />
      {/* Window reflection */}
      <rect x="45" y="60" width="3" height="3" fill="#FFFFFF" opacity="0.4" rx="0.5" />

      {/* Second window */}
      <rect x="44" y="74" width="12" height="10" fill="#4a3a2a" rx="1" />
      <rect x="45" y="75" width="10" height="8" fill="url(#windmillWindowGradient)" rx="1" />
      <line x1="50" y1="75" x2="50" y2="83" stroke="#6B4423" strokeWidth="0.8" />

      {/* Blade hub / Flügelnabe */}
      <circle cx="50" cy="37" r="5" fill="url(#windmillHubGradient)" />
      <circle cx="50" cy="37" r="3" fill="#3a3a3a" />
      <circle cx="50" cy="37" r="1.5" fill="#2a2a2a" />
      {/* Hub bolts */}
      <circle cx="48" cy="35" r="0.8" fill="#5a5a5a" />
      <circle cx="52" cy="35" r="0.8" fill="#5a5a5a" />
      <circle cx="48" cy="39" r="0.8" fill="#5a5a5a" />
      <circle cx="52" cy="39" r="0.8" fill="#5a5a5a" />

      {/* Blades / Flügel */}
      {/* Top blade */}
      <rect x="48" y="3" width="4" height="32" fill="url(#windmillBladeGradient)" rx="1" />
      <polygon points="52,5 68,8 68,15 52,20" fill="url(#windmillSailGradient)" opacity="0.9" />
      <line x1="52" y1="8" x2="66" y2="10" stroke="#C0B8A0" strokeWidth="0.3" opacity="0.5" />
      <line x1="52" y1="15" x2="66" y2="13" stroke="#C0B8A0" strokeWidth="0.3" opacity="0.5" />

      {/* Bottom blade */}
      <rect x="48" y="39" width="4" height="32" fill="url(#windmillBladeGradient)" rx="1" />
      <polygon points="48,55 32,58 32,65 48,60" fill="url(#windmillSailGradient)" opacity="0.9" />
      <line x1="48" y1="57" x2="34" y2="60" stroke="#C0B8A0" strokeWidth="0.3" opacity="0.5" />

      {/* Left blade */}
      <rect x="18" y="35" width="30" height="4" fill="url(#windmillBladeGradient)" rx="1" />
      <polygon points="20,35 23,20 30,20 33,35" fill="url(#windmillSailGradient)" opacity="0.9" />
      <line x1="22" y1="35" x2="25" y2="22" stroke="#C0B8A0" strokeWidth="0.3" opacity="0.5" />

      {/* Right blade */}
      <rect x="52" y="35" width="30" height="4" fill="url(#windmillBladeGradient)" rx="1" />
      <polygon points="67,39 70,54 77,54 80,39" fill="url(#windmillSailGradient)" opacity="0.9" />
      <line x1="69" y1="39" x2="72" y2="52" stroke="#C0B8A0" strokeWidth="0.3" opacity="0.5" />

      {/* Blade wood grain details */}
      <line x1="49" y1="5" x2="49" y2="35" stroke="#4a2a0a" strokeWidth="0.3" opacity="0.3" />
      <line x1="51" y1="5" x2="51" y2="35" stroke="#6B4423" strokeWidth="0.2" opacity="0.2" />
      <line x1="49" y1="41" x2="49" y2="70" stroke="#4a2a0a" strokeWidth="0.3" opacity="0.3" />
      <line x1="20" y1="36" x2="46" y2="36" stroke="#4a2a0a" strokeWidth="0.3" opacity="0.3" />
      <line x1="54" y1="38" x2="80" y2="38" stroke="#4a2a0a" strokeWidth="0.3" opacity="0.3" />
    </svg>
  );
}
