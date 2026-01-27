/**
 * Ambulance Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Ambulance({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="ambulanceBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
        {/* Window gradient */}
        <linearGradient id="ambulanceWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#5CACEE" />
        </linearGradient>
        {/* Red cross gradient */}
        <linearGradient id="ambulanceCrossGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        {/* Wheel gradient */}
        <radialGradient id="ambulanceWheelGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Hubcap gradient */}
        <radialGradient id="ambulanceHubcapGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="100%" stopColor="#909090" />
        </radialGradient>
        {/* Light gradient */}
        <radialGradient id="ambulanceLightGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FF6666" />
          <stop offset="100%" stopColor="#FF0000" />
        </radialGradient>
      </defs>

      {/* Main body */}
      <rect x="4" y="20" width="56" height="28" fill="url(#ambulanceBodyGradient)" rx="4" />
      {/* Body shadow */}
      <rect x="4" y="42" width="56" height="6" fill="#D0D0D0" rx="2" />

      {/* Cabin */}
      <rect x="4" y="20" width="20" height="28" fill="url(#ambulanceBodyGradient)" rx="4" />
      {/* Windshield */}
      <rect x="6" y="24" width="16" height="12" fill="url(#ambulanceWindowGradient)" rx="2" />
      {/* Windshield reflection */}
      <path d="M8 26 L18 26 L16 28 L8 28 Z" fill="white" opacity="0.4" />

      {/* Red cross symbol */}
      <rect x="28" y="24" width="8" height="12" fill="url(#ambulanceCrossGradient)" />
      <rect x="26" y="28" width="12" height="4" fill="url(#ambulanceCrossGradient)" />
      {/* Cross highlight */}
      <rect x="28" y="24" width="2" height="12" fill="white" opacity="0.2" />

      {/* Side window */}
      <rect x="44" y="26" width="12" height="8" fill="url(#ambulanceWindowGradient)" rx="2" />
      {/* Window reflection */}
      <path d="M46 27 L54 27 L53 29 L46 29 Z" fill="white" opacity="0.3" />

      {/* Wheels */}
      <circle cx="14" cy="52" r="7" fill="url(#ambulanceWheelGradient)" />
      <circle cx="14" cy="52" r="3.5" fill="url(#ambulanceHubcapGradient)" />
      <circle cx="14" cy="52" r="1" fill="#666" />
      <circle cx="50" cy="52" r="7" fill="url(#ambulanceWheelGradient)" />
      <circle cx="50" cy="52" r="3.5" fill="url(#ambulanceHubcapGradient)" />
      <circle cx="50" cy="52" r="1" fill="#666" />

      {/* Red stripe */}
      <rect x="4" y="44" width="56" height="4" fill="url(#ambulanceCrossGradient)" />

      {/* Emergency light */}
      <ellipse cx="58" cy="16" rx="4" ry="6" fill="url(#ambulanceLightGradient)" />
      {/* Light glow */}
      <ellipse cx="58" cy="16" rx="5" ry="7" fill="#FF0000" opacity="0.3" />
      {/* Light highlight */}
      <ellipse cx="57" cy="14" rx="1.5" ry="2" fill="white" opacity="0.5" />

      {/* Door handle */}
      <rect x="10" y="36" width="4" height="1.5" fill="#888" rx="0.5" />

      {/* Side mirror */}
      <rect x="2" y="26" width="3" height="4" fill="#666" rx="1" />
    </svg>
  );
}
