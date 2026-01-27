/**
 * Bus Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Bus({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="busBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC9900" />
        </linearGradient>
        {/* Window gradient */}
        <linearGradient id="busWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#5CACEE" />
        </linearGradient>
        {/* Wheel gradient */}
        <radialGradient id="busWheelGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Hubcap gradient */}
        <radialGradient id="busHubcapGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#999" />
          <stop offset="100%" stopColor="#555" />
        </radialGradient>
        {/* Sign gradient */}
        <linearGradient id="busSignGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#444" />
          <stop offset="100%" stopColor="#222" />
        </linearGradient>
      </defs>

      {/* Destination sign */}
      <rect x="18" y="8" width="28" height="8" fill="url(#busSignGradient)" rx="1" />
      {/* Sign border */}
      <rect x="18" y="8" width="28" height="8" fill="none" stroke="#555" strokeWidth="0.5" rx="1" />
      <text x="32" y="15" fill="#FFFF00" fontSize="5" textAnchor="middle" fontFamily="sans-serif">SCHULE</text>

      {/* Karosserie / Body */}
      <rect x="4" y="16" width="56" height="32" fill="url(#busBodyGradient)" rx="4" />
      {/* Body highlight */}
      <rect x="6" y="18" width="52" height="4" fill="#FFE980" opacity="0.4" rx="2" />

      {/* Body panels/lines */}
      <line x1="4" y1="36" x2="60" y2="36" stroke="#CC9900" strokeWidth="0.5" />

      {/* Fenster / Windows */}
      <rect x="8" y="20" width="10" height="12" fill="url(#busWindowGradient)" rx="2" />
      <rect x="22" y="20" width="10" height="12" fill="url(#busWindowGradient)" rx="2" />
      <rect x="36" y="20" width="10" height="12" fill="url(#busWindowGradient)" rx="2" />
      <rect x="50" y="20" width="8" height="12" fill="url(#busWindowGradient)" rx="2" />

      {/* Window reflections */}
      <path d="M9 21 L16 21 L15 24 L9 24 Z" fill="white" opacity="0.3" />
      <path d="M23 21 L30 21 L29 24 L23 24 Z" fill="white" opacity="0.3" />
      <path d="M37 21 L44 21 L43 24 L37 24 Z" fill="white" opacity="0.3" />
      <path d="M51 21 L56 21 L55 24 L51 24 Z" fill="white" opacity="0.3" />

      {/* Window frames */}
      <rect x="8" y="20" width="10" height="12" fill="none" stroke="#CC9900" strokeWidth="0.5" rx="2" />
      <rect x="22" y="20" width="10" height="12" fill="none" stroke="#CC9900" strokeWidth="0.5" rx="2" />
      <rect x="36" y="20" width="10" height="12" fill="none" stroke="#CC9900" strokeWidth="0.5" rx="2" />
      <rect x="50" y="20" width="8" height="12" fill="none" stroke="#CC9900" strokeWidth="0.5" rx="2" />

      {/* Tür / Door */}
      <rect x="14" y="32" width="8" height="16" fill="#2a2a2a" rx="1" />
      <rect x="15" y="33" width="6" height="8" fill="url(#busWindowGradient)" rx="1" />
      {/* Door handle */}
      <rect x="20" y="42" width="1.5" height="3" fill="#888" rx="0.5" />
      {/* Door steps */}
      <rect x="14" y="46" width="8" height="2" fill="#555" />

      {/* Räder / Wheels */}
      <circle cx="16" cy="52" r="6" fill="url(#busWheelGradient)" />
      <circle cx="16" cy="52" r="3.5" fill="url(#busHubcapGradient)" />
      <circle cx="16" cy="52" r="1" fill="#333" />
      <circle cx="48" cy="52" r="6" fill="url(#busWheelGradient)" />
      <circle cx="48" cy="52" r="3.5" fill="url(#busHubcapGradient)" />
      <circle cx="48" cy="52" r="1" fill="#333" />

      {/* Wheel details */}
      <line x1="13" y1="52" x2="19" y2="52" stroke="#444" strokeWidth="0.5" />
      <line x1="16" y1="49" x2="16" y2="55" stroke="#444" strokeWidth="0.5" />
      <line x1="45" y1="52" x2="51" y2="52" stroke="#444" strokeWidth="0.5" />
      <line x1="48" y1="49" x2="48" y2="55" stroke="#444" strokeWidth="0.5" />

      {/* Scheinwerfer / Headlights */}
      <rect x="56" y="28" width="4" height="6" fill="#FFFF66" rx="1" />
      <rect x="57" y="29" width="2" height="4" fill="#FFFFCC" rx="0.5" />

      {/* Rücklichter / Tail lights */}
      <rect x="4" y="28" width="4" height="6" fill="#FF4444" rx="1" />
      <rect x="5" y="29" width="2" height="4" fill="#FF6666" rx="0.5" />

      {/* Side mirrors */}
      <rect x="2" y="22" width="3" height="4" fill="#888" rx="1" />
      <rect x="59" y="22" width="3" height="4" fill="#888" rx="1" />

      {/* Bumpers */}
      <rect x="4" y="46" width="56" height="2" fill="#888" rx="1" />

      {/* Stop sign arm (folded) */}
      <rect x="2" y="30" width="2" height="6" fill="#FF0000" rx="0.5" />
    </svg>
  );
}
