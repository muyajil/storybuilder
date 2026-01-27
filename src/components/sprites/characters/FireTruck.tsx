/**
 * FireTruck Sprite Component
 * Enhanced with gradients, detailed metalwork, and realistic features
 */

import type { SpriteProps } from '../types';

export function FireTruck({ size = 64, color = '#FF0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Main body gradient */}
        <linearGradient id="fireTruckBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="30%" stopColor={color} />
          <stop offset="100%" stopColor="#B20000" />
        </linearGradient>
        {/* Metallic gradient */}
        <linearGradient id="fireTruckMetalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>
        {/* Chrome gradient */}
        <linearGradient id="fireTruckChromeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="50%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>
        {/* Window gradient */}
        <linearGradient id="fireTruckWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#5CACEE" />
        </linearGradient>
        {/* Tire gradient */}
        <radialGradient id="fireTruckTireGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="70%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Hubcap gradient */}
        <radialGradient id="fireTruckHubcapGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F0F0F0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#808080" />
        </radialGradient>
        {/* Light gradient - yellow */}
        <radialGradient id="fireTruckLightYellowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF80" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
        {/* Light gradient - red */}
        <radialGradient id="fireTruckLightRedGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF8080" />
          <stop offset="100%" stopColor="#FF0000" />
        </radialGradient>
        {/* Ladder gradient */}
        <linearGradient id="fireTruckLadderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="50%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#707070" />
        </linearGradient>
      </defs>

      {/* Main body */}
      <rect x="4" y="24" width="56" height="24" fill="url(#fireTruckBodyGradient)" rx="3" />

      {/* Cab section */}
      <rect x="4" y="22" width="22" height="26" fill="url(#fireTruckBodyGradient)" rx="3" />
      {/* Cab roof */}
      <rect x="4" y="18" width="22" height="6" fill="url(#fireTruckBodyGradient)" rx="2" />

      {/* Windshield */}
      <rect x="6" y="26" width="18" height="12" fill="url(#fireTruckWindowGradient)" rx="2" />
      {/* Window reflection */}
      <rect x="8" y="28" width="6" height="4" fill="white" opacity="0.3" rx="1" />
      {/* Window divider */}
      <line x1="15" y1="26" x2="15" y2="38" stroke="#333" strokeWidth="1" />

      {/* Side window */}
      <rect x="4" y="26" width="4" height="8" fill="url(#fireTruckWindowGradient)" rx="1" />

      {/* Emergency lights on roof */}
      <rect x="8" y="14" width="14" height="5" fill="url(#fireTruckMetalGradient)" rx="2" />
      <ellipse cx="11" cy="16" rx="2" ry="2" fill="url(#fireTruckLightRedGradient)" />
      <ellipse cx="19" cy="16" rx="2" ry="2" fill="url(#fireTruckLightRedGradient)" />
      <rect x="14" y="15" width="2" height="3" fill="url(#fireTruckLightYellowGradient)" />

      {/* Ladder rack */}
      <rect x="28" y="22" width="30" height="10" fill="url(#fireTruckMetalGradient)" rx="1" />
      {/* Ladder */}
      <rect x="30" y="24" width="26" height="2" fill="url(#fireTruckLadderGradient)" />
      <rect x="30" y="28" width="26" height="2" fill="url(#fireTruckLadderGradient)" />
      {/* Ladder rungs */}
      <rect x="34" y="24" width="1" height="6" fill="url(#fireTruckLadderGradient)" />
      <rect x="40" y="24" width="1" height="6" fill="url(#fireTruckLadderGradient)" />
      <rect x="46" y="24" width="1" height="6" fill="url(#fireTruckLadderGradient)" />
      <rect x="52" y="24" width="1" height="6" fill="url(#fireTruckLadderGradient)" />

      {/* Equipment compartments */}
      <rect x="28" y="34" width="28" height="12" fill="#990000" rx="1" />
      {/* Compartment doors */}
      <rect x="30" y="36" width="8" height="8" fill="url(#fireTruckMetalGradient)" rx="1" />
      <rect x="40" y="36" width="8" height="8" fill="url(#fireTruckMetalGradient)" rx="1" />
      <rect x="50" y="36" width="4" height="8" fill="url(#fireTruckMetalGradient)" rx="1" />
      {/* Door handles */}
      <circle cx="36" cy="40" r="1" fill="#333" />
      <circle cx="46" cy="40" r="1" fill="#333" />

      {/* Hose reel */}
      <circle cx="56" cy="40" r="4" fill="url(#fireTruckMetalGradient)" />
      <circle cx="56" cy="40" r="2" fill="#333" />

      {/* Chrome bumpers */}
      <rect x="2" y="46" width="6" height="3" fill="url(#fireTruckChromeGradient)" rx="1" />
      <rect x="56" y="46" width="6" height="3" fill="url(#fireTruckChromeGradient)" rx="1" />

      {/* Front wheel */}
      <circle cx="14" cy="52" r="7" fill="url(#fireTruckTireGradient)" />
      <circle cx="14" cy="52" r="4" fill="url(#fireTruckHubcapGradient)" />
      <circle cx="14" cy="52" r="1" fill="#333" />
      {/* Wheel details */}
      <line x1="14" y1="48" x2="14" y2="50" stroke="#808080" strokeWidth="1" />
      <line x1="14" y1="54" x2="14" y2="56" stroke="#808080" strokeWidth="1" />
      <line x1="10" y1="52" x2="12" y2="52" stroke="#808080" strokeWidth="1" />
      <line x1="16" y1="52" x2="18" y2="52" stroke="#808080" strokeWidth="1" />

      {/* Rear wheels */}
      <circle cx="40" cy="52" r="7" fill="url(#fireTruckTireGradient)" />
      <circle cx="40" cy="52" r="4" fill="url(#fireTruckHubcapGradient)" />
      <circle cx="40" cy="52" r="1" fill="#333" />

      <circle cx="54" cy="52" r="7" fill="url(#fireTruckTireGradient)" />
      <circle cx="54" cy="52" r="4" fill="url(#fireTruckHubcapGradient)" />
      <circle cx="54" cy="52" r="1" fill="#333" />

      {/* Headlights */}
      <ellipse cx="4" cy="38" rx="2" ry="3" fill="url(#fireTruckLightYellowGradient)" />

      {/* Side mirror */}
      <rect x="0" y="28" width="3" height="4" fill="url(#fireTruckMetalGradient)" rx="1" />

      {/* "FD" text on side */}
      <text x="34" cy="32" fontSize="6" fill="white" fontWeight="bold">FIRE</text>

      {/* Warning stripes */}
      <rect x="4" y="44" width="20" height="2" fill="#FFD700" />
    </svg>
  );
}
