/**
 * Cabin Sprite Component
 * Enhanced with log textures, wood grain, and atmospheric depth
 */

import type { ElementProps } from '../types';

export function Cabin({ x = 0, y = 0, size = 90, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 90 90"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Log gradient for cylindrical effect */}
        <linearGradient id="cabinLogGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9a5a23" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#6a3a13" />
          <stop offset="100%" stopColor="#5a3010" />
        </linearGradient>
        {/* Roof gradient */}
        <linearGradient id="cabinRoofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5a4a3a" />
          <stop offset="50%" stopColor="#4a3a2a" />
          <stop offset="100%" stopColor="#3a2a1a" />
        </linearGradient>
        {/* Door gradient */}
        <linearGradient id="cabinDoorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a3015" />
          <stop offset="50%" stopColor="#654321" />
          <stop offset="100%" stopColor="#4a3015" />
        </linearGradient>
        {/* Window glass gradient */}
        <linearGradient id="cabinWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ADD8E6" />
          <stop offset="30%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#5a9aba" />
        </linearGradient>
        {/* Chimney stone gradient */}
        <linearGradient id="cabinChimneyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#505050" />
          <stop offset="50%" stopColor="#696969" />
          <stop offset="100%" stopColor="#4a4a4a" />
        </linearGradient>
        {/* Door handle gradient */}
        <radialGradient id="cabinHandleGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="100%" stopColor="#B8960B" />
        </radialGradient>
        {/* Shadow filter */}
        <filter id="cabinShadow">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="45" cy="89" rx="38" ry="4" fill="#000" opacity="0.2" />

      <g filter="url(#cabinShadow)">
        {/* Log wall base */}
        <rect x="10" y="40" width="70" height="50" fill="#5a3515" />

        {/* Individual logs with 3D effect */}
        {[...Array(5)].map((_, i) => (
          <g key={`log-${i}`}>
            <rect
              x="10"
              y={40 + i * 10}
              width="70"
              height="10"
              fill="url(#cabinLogGradient)"
            />
            {/* Log end circles (left) */}
            <ellipse
              cx="10"
              cy={45 + i * 10}
              rx="3"
              ry="5"
              fill="#7a4518"
            />
            <ellipse
              cx="10"
              cy={45 + i * 10}
              rx="2"
              ry="3.5"
              fill="#5a3515"
            />
            {/* Log end circles (right) */}
            <ellipse
              cx="80"
              cy={45 + i * 10}
              rx="3"
              ry="5"
              fill="#7a4518"
            />
            <ellipse
              cx="80"
              cy={45 + i * 10}
              rx="2"
              ry="3.5"
              fill="#5a3515"
            />
            {/* Log highlight */}
            <rect
              x="12"
              y={41 + i * 10}
              width="66"
              height="2"
              fill="white"
              opacity="0.1"
            />
            {/* Log shadow line */}
            <line
              x1="10"
              y1={50 + i * 10}
              x2="80"
              y2={50 + i * 10}
              stroke="#4a2510"
              strokeWidth="1"
              opacity="0.4"
            />
          </g>
        ))}

        {/* Roof with texture */}
        <polygon points="45,10 5,45 85,45" fill="url(#cabinRoofGradient)" />
        {/* Roof highlight edge */}
        <line x1="45" y1="10" x2="85" y2="45" stroke="#6a5a4a" strokeWidth="2" />
        {/* Roof shadow edge */}
        <line x1="45" y1="10" x2="5" y2="45" stroke="#3a2a1a" strokeWidth="2" />
        {/* Roof texture lines */}
        <line x1="30" y1="25" x2="15" y2="45" stroke="#3a2a1a" strokeWidth="0.5" opacity="0.3" />
        <line x1="45" y1="20" x2="30" y2="45" stroke="#3a2a1a" strokeWidth="0.5" opacity="0.3" />
        <line x1="60" y1="25" x2="50" y2="45" stroke="#3a2a1a" strokeWidth="0.5" opacity="0.3" />
        <line x1="70" y1="35" x2="65" y2="45" stroke="#3a2a1a" strokeWidth="0.5" opacity="0.3" />

        {/* Door with wood grain */}
        <rect x="35" y="55" width="20" height="35" fill="url(#cabinDoorGradient)" rx="1" />
        {/* Door frame */}
        <rect x="35" y="55" width="20" height="35" fill="none" stroke="#3a2010" strokeWidth="2" rx="1" />
        {/* Door planks */}
        <line x1="40" y1="55" x2="40" y2="90" stroke="#3a2010" strokeWidth="0.5" opacity="0.5" />
        <line x1="50" y1="55" x2="50" y2="90" stroke="#3a2010" strokeWidth="0.5" opacity="0.5" />
        {/* Door crossbar */}
        <rect x="36" y="70" width="18" height="3" fill="#4a3015" rx="0.5" />
        {/* Door handle */}
        <circle cx="50" cy="75" r="2.5" fill="url(#cabinHandleGradient)" />
        <circle cx="49.5" cy="74.5" r="1" fill="white" opacity="0.4" />

        {/* Window with glass effect */}
        <rect x="15" y="55" width="15" height="15" fill="url(#cabinWindowGradient)" />
        {/* Window frame */}
        <rect x="15" y="55" width="15" height="15" fill="none" stroke={color} strokeWidth="2" />
        {/* Window cross frame */}
        <line x1="22.5" y1="55" x2="22.5" y2="70" stroke={color} strokeWidth="2" />
        <line x1="15" y1="62.5" x2="30" y2="62.5" stroke={color} strokeWidth="2" />
        {/* Window shine */}
        <rect x="16" y="56" width="5" height="5" fill="white" opacity="0.3" />
        {/* Window glow from inside */}
        <rect x="16" y="56" width="13" height="13" fill="#FFFACD" opacity="0.2" />

        {/* Chimney with stone texture */}
        <rect x="60" y="15" width="12" height="25" fill="url(#cabinChimneyGradient)" />
        {/* Chimney stone lines */}
        <line x1="60" y1="20" x2="72" y2="20" stroke="#3a3a3a" strokeWidth="0.5" />
        <line x1="60" y1="25" x2="72" y2="25" stroke="#3a3a3a" strokeWidth="0.5" />
        <line x1="60" y1="30" x2="72" y2="30" stroke="#3a3a3a" strokeWidth="0.5" />
        <line x1="60" y1="35" x2="72" y2="35" stroke="#3a3a3a" strokeWidth="0.5" />
        <line x1="66" y1="15" x2="66" y2="40" stroke="#3a3a3a" strokeWidth="0.5" />
        {/* Chimney top */}
        <rect x="58" y="13" width="16" height="4" fill="#505050" />
        {/* Smoke */}
        <ellipse cx="66" cy="8" rx="4" ry="3" fill="#ddd" opacity="0.5" />
        <ellipse cx="68" cy="4" rx="3" ry="2" fill="#eee" opacity="0.3" />
      </g>
    </svg>
  );
}
