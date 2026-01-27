/**
 * Car Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Car({ size = 64, color = '#FF0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="carBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF4D4D" />
          <stop offset="30%" stopColor={color} />
          <stop offset="100%" stopColor="#AA0000" />
        </linearGradient>
        {/* Roof gradient */}
        <linearGradient id="carRoofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6666" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        {/* Window gradient */}
        <linearGradient id="carWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#5CACEE" />
        </linearGradient>
        {/* Wheel gradient */}
        <radialGradient id="carWheelGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Hubcap gradient */}
        <radialGradient id="carHubcapGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#999" />
          <stop offset="100%" stopColor="#555" />
        </radialGradient>
        {/* Chrome gradient */}
        <linearGradient id="carChromeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="56" rx="26" ry="4" fill="#000" opacity="0.15" />

      {/* Karosserie / Body */}
      <rect x="4" y="28" width="56" height="20" fill="url(#carBodyGradient)" rx="4" />
      {/* Body highlight */}
      <rect x="6" y="30" width="52" height="3" fill="#FF8080" opacity="0.4" rx="1" />

      {/* Body line detail */}
      <line x1="4" y1="38" x2="60" y2="38" stroke="#AA0000" strokeWidth="0.5" />

      {/* Dach / Roof */}
      <path d="M16 28 L24 14 L44 14 L52 28" fill="url(#carRoofGradient)" />
      {/* Roof highlight */}
      <path d="M20 26 L26 16 L42 16 L48 26" fill="none" stroke="#FF8080" strokeWidth="0.5" opacity="0.5" />

      {/* Fenster / Windows */}
      <path d="M18 26 L24 16 L32 16 L32 26 Z" fill="url(#carWindowGradient)" />
      <path d="M34 26 L34 16 L44 16 L50 26 Z" fill="url(#carWindowGradient)" />
      {/* Window frames */}
      <path d="M18 26 L24 16 L32 16 L32 26" fill="none" stroke="#AA0000" strokeWidth="0.5" />
      <path d="M34 26 L34 16 L44 16 L50 26" fill="none" stroke="#AA0000" strokeWidth="0.5" />
      {/* Center pillar */}
      <rect x="31" y="16" width="4" height="10" fill="url(#carRoofGradient)" />

      {/* Window reflections */}
      <path d="M20 24 L25 17 L28 17 L28 20 Z" fill="white" opacity="0.3" />
      <path d="M36 24 L36 17 L40 17 L46 24 Z" fill="white" opacity="0.2" />

      {/* Räder / Wheels */}
      <circle cx="16" cy="48" r="8" fill="url(#carWheelGradient)" />
      <circle cx="16" cy="48" r="4.5" fill="url(#carHubcapGradient)" />
      <circle cx="16" cy="48" r="1.5" fill="#333" />
      <circle cx="48" cy="48" r="8" fill="url(#carWheelGradient)" />
      <circle cx="48" cy="48" r="4.5" fill="url(#carHubcapGradient)" />
      <circle cx="48" cy="48" r="1.5" fill="#333" />

      {/* Wheel spokes hint */}
      <line x1="12" y1="48" x2="20" y2="48" stroke="#666" strokeWidth="0.5" />
      <line x1="16" y1="44" x2="16" y2="52" stroke="#666" strokeWidth="0.5" />
      <line x1="44" y1="48" x2="52" y2="48" stroke="#666" strokeWidth="0.5" />
      <line x1="48" y1="44" x2="48" y2="52" stroke="#666" strokeWidth="0.5" />

      {/* Scheinwerfer / Headlights */}
      <rect x="4" y="32" width="4" height="5" fill="#FFFF66" rx="1" />
      <rect x="5" y="33" width="2" height="3" fill="#FFFFCC" rx="0.5" />

      {/* Rücklichter / Tail lights */}
      <rect x="56" y="32" width="4" height="5" fill="#FF4444" rx="1" />
      <rect x="57" y="33" width="2" height="3" fill="#FF6666" rx="0.5" />

      {/* Grill */}
      <rect x="4" y="38" width="6" height="6" fill="url(#carChromeGradient)" rx="1" />
      <line x1="5" y1="40" x2="9" y2="40" stroke="#666" strokeWidth="0.5" />
      <line x1="5" y1="42" x2="9" y2="42" stroke="#666" strokeWidth="0.5" />

      {/* Door handle */}
      <rect x="26" y="34" width="4" height="1.5" fill="url(#carChromeGradient)" rx="0.5" />
      <rect x="38" y="34" width="4" height="1.5" fill="url(#carChromeGradient)" rx="0.5" />

      {/* Side mirrors */}
      <ellipse cx="14" cy="26" rx="2" ry="3" fill="#333" />
      <ellipse cx="54" cy="26" rx="2" ry="3" fill="#333" />

      {/* Bumpers */}
      <rect x="4" y="46" width="8" height="2" fill="url(#carChromeGradient)" rx="0.5" />
      <rect x="52" y="46" width="8" height="2" fill="url(#carChromeGradient)" rx="0.5" />
    </svg>
  );
}
