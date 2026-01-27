/**
 * PoliceCar Sprite Component
 * Enhanced with gradients, realistic details, and lighting effects
 */

import type { SpriteProps } from '../types';

export function PoliceCar({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="policeCarBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>
        {/* Window gradient */}
        <linearGradient id="policeCarWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0E0E6" />
          <stop offset="30%" stopColor="#87CEEB" />
          <stop offset="70%" stopColor="#5FB3D4" />
          <stop offset="100%" stopColor="#4A9CC4" />
        </linearGradient>
        {/* Police stripe gradient */}
        <linearGradient id="policeCarStripeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2E2E8B" />
          <stop offset="50%" stopColor="#191970" />
          <stop offset="100%" stopColor="#0F0F4A" />
        </linearGradient>
        {/* Tire gradient */}
        <radialGradient id="policeCarTireGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="70%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Hubcap gradient */}
        <radialGradient id="policeCarHubcapGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#909090" />
        </radialGradient>
        {/* Light bar red gradient */}
        <linearGradient id="policeCarRedLightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6666" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        {/* Light bar blue gradient */}
        <linearGradient id="policeCarBlueLightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6666FF" />
          <stop offset="50%" stopColor="#0000FF" />
          <stop offset="100%" stopColor="#0000CC" />
        </linearGradient>
        {/* Badge gradient */}
        <linearGradient id="policeCarBadgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Headlight gradient */}
        <radialGradient id="policeCarHeadlightGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FFFF88" />
          <stop offset="100%" stopColor="#FFDD00" />
        </radialGradient>
        {/* Light glow */}
        <radialGradient id="policeCarLightGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FF0000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="58" rx="26" ry="4" fill="#000000" opacity="0.15" />

      {/* Main body / Karosserie */}
      <rect x="6" y="28" width="52" height="21" fill="url(#policeCarBodyGradient)" rx="5" />

      {/* Body highlight */}
      <rect x="10" y="30" width="44" height="6" fill="#FFFFFF" opacity="0.3" rx="2" />

      {/* Roof / Dach */}
      <polygon points="12,28 20,15 46,15 52,28" fill="url(#policeCarBodyGradient)" />
      <polygon points="16,28 22,18 44,18 50,28" fill="#FFFFFF" opacity="0.2" />

      {/* Windshield / Frontscheibe */}
      <rect x="21" y="17" width="22" height="11" fill="url(#policeCarWindowGradient)" rx="2" />
      <rect x="23" y="18" width="8" height="9" fill="#FFFFFF" opacity="0.15" />

      {/* Windshield frame */}
      <line x1="32" y1="17" x2="32" y2="28" stroke="#666666" strokeWidth="1" />

      {/* Side windows */}
      <rect x="9" y="32" width="11" height="7" fill="url(#policeCarWindowGradient)" rx="2" />
      <rect x="44" y="32" width="11" height="7" fill="url(#policeCarWindowGradient)" rx="2" />

      {/* Window reflections */}
      <rect x="10" y="33" width="4" height="5" fill="#FFFFFF" opacity="0.15" rx="1" />
      <rect x="45" y="33" width="4" height="5" fill="#FFFFFF" opacity="0.15" rx="1" />

      {/* Police stripe / Polizeistreifen */}
      <rect x="6" y="44" width="52" height="5" fill="url(#policeCarStripeGradient)" />

      {/* POLICE text area */}
      <rect x="22" y="36" width="20" height="6" fill="url(#policeCarStripeGradient)" rx="1" />
      <rect x="24" y="37" width="16" height="4" fill="#FFFFFF" opacity="0.1" rx="0.5" />

      {/* Light bar base */}
      <rect x="24" y="9" width="16" height="6" fill="#333333" rx="2" />

      {/* Light bar lights - with glow effect */}
      <circle cx="30" cy="8" r="6" fill="url(#policeCarLightGlow)" />
      <circle cx="38" cy="8" r="6" fill="url(#policeCarLightGlow)" />

      {/* Red light */}
      <rect x="26" y="9" width="6" height="6" fill="url(#policeCarRedLightGradient)" rx="1" />
      <rect x="27" y="10" width="2" height="3" fill="#FF6666" opacity="0.5" />

      {/* Blue light */}
      <rect x="32" y="9" width="6" height="6" fill="url(#policeCarBlueLightGradient)" rx="1" />
      <rect x="33" y="10" width="2" height="3" fill="#6666FF" opacity="0.5" />

      {/* Light bar chrome trim */}
      <rect x="24" y="9" width="16" height="1" fill="#C0C0C0" />
      <rect x="24" y="14" width="16" height="1" fill="#909090" />

      {/* Front wheels / Vorderräder */}
      <circle cx="18" cy="52" r="7" fill="url(#policeCarTireGradient)" />
      <circle cx="18" cy="52" r="5" fill="#2A2A2A" />
      <circle cx="18" cy="52" r="3.5" fill="url(#policeCarHubcapGradient)" />
      <circle cx="18" cy="52" r="1.5" fill="#4A4A4A" />

      {/* Back wheels / Hinterräder */}
      <circle cx="46" cy="52" r="7" fill="url(#policeCarTireGradient)" />
      <circle cx="46" cy="52" r="5" fill="#2A2A2A" />
      <circle cx="46" cy="52" r="3.5" fill="url(#policeCarHubcapGradient)" />
      <circle cx="46" cy="52" r="1.5" fill="#4A4A4A" />

      {/* Wheel spokes */}
      <line x1="18" y1="49" x2="18" y2="55" stroke="#888888" strokeWidth="0.5" />
      <line x1="15" y1="52" x2="21" y2="52" stroke="#888888" strokeWidth="0.5" />
      <line x1="46" y1="49" x2="46" y2="55" stroke="#888888" strokeWidth="0.5" />
      <line x1="43" y1="52" x2="49" y2="52" stroke="#888888" strokeWidth="0.5" />

      {/* Door badge */}
      <polygon points="32,38 28,42 32,46 36,42" fill="url(#policeCarBadgeGradient)" />
      <polygon points="32,39 29,42 32,45 35,42" fill="#B8860B" opacity="0.3" />

      {/* Headlights */}
      <ellipse cx="8" cy="38" rx="3" ry="4" fill="#333333" />
      <ellipse cx="8" cy="38" rx="2" ry="3" fill="url(#policeCarHeadlightGradient)" />

      {/* Taillights */}
      <rect x="54" y="34" width="4" height="8" fill="#CC0000" rx="1" />
      <rect x="55" y="35" width="2" height="3" fill="#FF6666" opacity="0.5" />

      {/* Front bumper */}
      <rect x="4" y="46" width="8" height="3" fill="#333333" rx="1" />

      {/* Rear bumper */}
      <rect x="52" y="46" width="8" height="3" fill="#333333" rx="1" />

      {/* Push bar / Rammschutz */}
      <rect x="2" y="36" width="2" height="12" fill="#333333" rx="0.5" />
      <rect x="2" y="34" width="4" height="2" fill="#333333" rx="0.5" />
      <rect x="2" y="46" width="4" height="2" fill="#333333" rx="0.5" />

      {/* Side mirror */}
      <ellipse cx="12" cy="28" rx="2" ry="1.5" fill="#333333" />
      <ellipse cx="52" cy="28" rx="2" ry="1.5" fill="#333333" />

      {/* Antenna */}
      <line x1="40" y1="9" x2="42" y2="4" stroke="#333333" strokeWidth="1" />
      <circle cx="42" cy="4" r="1" fill="#333333" />
    </svg>
  );
}
