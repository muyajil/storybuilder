/**
 * Submarine Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Submarine({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hull gradient */}
        <linearGradient id="submarineHullGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Tower gradient */}
        <linearGradient id="submarineTowerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Window gradient */}
        <radialGradient id="submarineWindowGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4682B4" />
        </radialGradient>
        {/* Periscope gradient */}
        <linearGradient id="submarinePeriscopeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="50%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Propeller gradient */}
        <linearGradient id="submarinePropGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
      </defs>

      {/* Bubbles */}
      <circle cx="8" cy="20" r="2" fill="#87CEEB" opacity="0.5" />
      <circle cx="12" cy="14" r="1.5" fill="#87CEEB" opacity="0.4" />
      <circle cx="6" cy="10" r="1" fill="#87CEEB" opacity="0.3" />
      <circle cx="56" cy="24" r="1.5" fill="#87CEEB" opacity="0.4" />

      {/* Periscope */}
      <rect x="29" y="6" width="6" height="14" fill="url(#submarinePeriscopeGradient)" rx="1" />
      <rect x="30" y="6" width="2" height="14" fill="#555" opacity="0.3" />
      <rect x="26" y="4" width="12" height="5" fill="url(#submarinePeriscopeGradient)" rx="2" />
      {/* Periscope lens */}
      <rect x="27" y="5" width="3" height="3" fill="#87CEEB" rx="1" />
      <rect x="27.5" y="5.5" width="1" height="1" fill="white" opacity="0.6" />

      {/* Tower/Conning tower */}
      <rect x="24" y="18" width="16" height="14" fill="url(#submarineTowerGradient)" rx="3" />
      {/* Tower window */}
      <circle cx="32" cy="24" r="4" fill="url(#submarineWindowGradient)" stroke="#B8860B" strokeWidth="1" />
      <circle cx="30" cy="22" r="1.2" fill="white" opacity="0.5" />
      {/* Tower details */}
      <rect x="26" y="28" width="12" height="1" fill="#B8860B" opacity="0.5" />

      {/* Main hull */}
      <ellipse cx="32" cy="40" rx="30" ry="15" fill="url(#submarineHullGradient)" />
      {/* Hull highlight */}
      <ellipse cx="32" cy="36" rx="24" ry="8" fill="#FFE44D" opacity="0.3" />
      {/* Hull seam */}
      <ellipse cx="32" cy="40" rx="28" ry="13" fill="none" stroke="#B8860B" strokeWidth="1" strokeDasharray="4,2" />

      {/* Port windows */}
      <circle cx="16" cy="40" r="5" fill="url(#submarineWindowGradient)" stroke="#B8860B" strokeWidth="1.5" />
      <circle cx="14" cy="38" r="1.5" fill="white" opacity="0.5" />

      <circle cx="32" cy="40" r="5" fill="url(#submarineWindowGradient)" stroke="#B8860B" strokeWidth="1.5" />
      <circle cx="30" cy="38" r="1.5" fill="white" opacity="0.5" />

      <circle cx="48" cy="40" r="5" fill="url(#submarineWindowGradient)" stroke="#B8860B" strokeWidth="1.5" />
      <circle cx="46" cy="38" r="1.5" fill="white" opacity="0.5" />

      {/* Rivets */}
      <circle cx="8" cy="40" r="1" fill="#B8860B" />
      <circle cx="56" cy="40" r="1" fill="#B8860B" />
      <circle cx="24" cy="48" r="1" fill="#B8860B" />
      <circle cx="40" cy="48" r="1" fill="#B8860B" />

      {/* Diving planes (front) */}
      <rect x="2" y="36" width="10" height="8" fill="url(#submarineHullGradient)" rx="2" />
      <rect x="3" y="38" width="8" height="4" fill="#FFE44D" opacity="0.3" />

      {/* Propeller hub */}
      <circle cx="62" cy="40" r="4" fill="#888" />
      <circle cx="62" cy="40" r="2" fill="#666" />
      {/* Propeller blades */}
      <ellipse cx="64" cy="40" rx="3" ry="10" fill="url(#submarinePropGradient)" />
      <ellipse cx="64" cy="40" rx="2" ry="8" fill="#D0D0D0" opacity="0.4" />

      {/* Depth markers */}
      <line x1="20" y1="50" x2="20" y2="54" stroke="#B8860B" strokeWidth="1" />
      <line x1="32" y1="52" x2="32" y2="56" stroke="#B8860B" strokeWidth="1" />
      <line x1="44" y1="50" x2="44" y2="54" stroke="#B8860B" strokeWidth="1" />
    </svg>
  );
}
