/**
 * Train Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Train({ size = 64, color = '#B22222' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="trainBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DC3545" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
        {/* Boiler gradient */}
        <linearGradient id="trainBoilerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#DC3545" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
        {/* Chimney gradient */}
        <linearGradient id="trainChimneyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="50%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Wheel gradient */}
        <radialGradient id="trainWheelGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="70%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Wheel hub gradient */}
        <radialGradient id="trainHubGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#888" />
          <stop offset="70%" stopColor="#666" />
          <stop offset="100%" stopColor="#444" />
        </radialGradient>
        {/* Window gradient */}
        <radialGradient id="trainWindowGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4682B4" />
        </radialGradient>
        {/* Lamp gradient */}
        <radialGradient id="trainLampGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFF99" />
          <stop offset="70%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Smoke gradient */}
        <radialGradient id="trainSmokeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#808080" />
        </radialGradient>
      </defs>

      {/* Smoke puffs */}
      <circle cx="17" cy="4" r="5" fill="url(#trainSmokeGradient)" opacity="0.5" />
      <circle cx="12" cy="0" r="4" fill="url(#trainSmokeGradient)" opacity="0.4" />
      <circle cx="22" cy="0" r="3" fill="url(#trainSmokeGradient)" opacity="0.3" />
      <circle cx="8" cy="4" r="3" fill="url(#trainSmokeGradient)" opacity="0.3" />

      {/* Chimney */}
      <rect x="11" y="10" width="12" height="14" fill="url(#trainChimneyGradient)" rx="1" />
      <rect x="13" y="10" width="3" height="14" fill="#555" opacity="0.3" />
      {/* Chimney top */}
      <rect x="9" y="6" width="16" height="6" fill="url(#trainChimneyGradient)" rx="2" />
      <rect x="9" y="6" width="16" height="2" fill="#555" opacity="0.3" />

      {/* Boiler */}
      <rect x="6" y="24" width="42" height="24" fill="url(#trainBoilerGradient)" rx="4" />
      {/* Boiler highlight */}
      <rect x="8" y="24" width="6" height="24" fill="#DC3545" opacity="0.3" />
      {/* Boiler bands */}
      <rect x="20" y="24" width="3" height="24" fill="#8B0000" opacity="0.4" />
      <rect x="32" y="24" width="3" height="24" fill="#8B0000" opacity="0.4" />
      {/* Boiler dome */}
      <ellipse cx="26" cy="24" rx="6" ry="4" fill={color} />
      <ellipse cx="24" cy="23" rx="2" ry="1.5" fill="#DC3545" opacity="0.5" />

      {/* Cabin */}
      <rect x="46" y="14" width="16" height="34" fill="url(#trainBodyGradient)" rx="2" />
      {/* Cabin highlight */}
      <rect x="48" y="14" width="3" height="32" fill="#DC3545" opacity="0.3" />
      {/* Cabin roof */}
      <rect x="44" y="10" width="20" height="6" fill="#8B0000" rx="2" />

      {/* Cabin window */}
      <rect x="49" y="18" width="10" height="12" fill="url(#trainWindowGradient)" rx="1" />
      <rect x="49" y="18" width="10" height="12" fill="none" stroke="#8B0000" strokeWidth="1" rx="1" />
      {/* Window glare */}
      <rect x="50" y="19" width="3" height="6" fill="white" opacity="0.3" />

      {/* Main drive wheels */}
      <circle cx="20" cy="52" r="9" fill="url(#trainWheelGradient)" />
      <circle cx="20" cy="52" r="6" fill="url(#trainHubGradient)" />
      <circle cx="20" cy="52" r="2" fill="#888" />
      {/* Wheel spokes */}
      <line x1="20" y1="44" x2="20" y2="60" stroke="#555" strokeWidth="1" />
      <line x1="12" y1="52" x2="28" y2="52" stroke="#555" strokeWidth="1" />

      <circle cx="40" cy="52" r="9" fill="url(#trainWheelGradient)" />
      <circle cx="40" cy="52" r="6" fill="url(#trainHubGradient)" />
      <circle cx="40" cy="52" r="2" fill="#888" />
      {/* Wheel spokes */}
      <line x1="40" y1="44" x2="40" y2="60" stroke="#555" strokeWidth="1" />
      <line x1="32" y1="52" x2="48" y2="52" stroke="#555" strokeWidth="1" />

      {/* Cabin wheel */}
      <circle cx="56" cy="52" r="7" fill="url(#trainWheelGradient)" />
      <circle cx="56" cy="52" r="4" fill="url(#trainHubGradient)" />

      {/* Connecting rod */}
      <rect x="18" y="50" width="24" height="3" fill="#888" rx="1" />
      <circle cx="20" cy="51.5" r="2" fill="#666" />
      <circle cx="40" cy="51.5" r="2" fill="#666" />

      {/* Cowcatcher */}
      <polygon points="-2,52 8,42 8,52" fill="url(#trainChimneyGradient)" />
      <line x1="0" y1="52" x2="6" y2="46" stroke="#555" strokeWidth="1" />
      <line x1="0" y1="50" x2="6" y2="44" stroke="#555" strokeWidth="1" />

      {/* Headlamp */}
      <circle cx="4" cy="36" r="5" fill="url(#trainLampGradient)" />
      <circle cx="4" cy="36" r="3" fill="#FFFF99" />
      {/* Lamp glow */}
      <circle cx="4" cy="36" r="7" fill="#FFFF00" opacity="0.2" />
      {/* Lamp bracket */}
      <rect x="6" y="34" width="4" height="4" fill="#333" />

      {/* Rails (implied ground) */}
      <rect x="0" y="60" width="64" height="2" fill="#8B4513" />
      <rect x="0" y="62" width="64" height="2" fill="#696969" />
    </svg>
  );
}
