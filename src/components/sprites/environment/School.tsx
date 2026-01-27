/**
 * School Sprite Component
 * Enhanced with brick texture, detailed windows, bell tower, and depth
 */

import type { ElementProps } from '../types';

export function School({ x = 0, y = 0, size = 120, color = '#B22222' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Brick gradient */}
        <linearGradient id="schoolBrickGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C43232" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#9A1A1A" />
          <stop offset="100%" stopColor="#801010" />
        </linearGradient>

        {/* Brick texture pattern */}
        <pattern id="schoolBrickPattern" patternUnits="userSpaceOnUse" width="20" height="12">
          <rect width="20" height="12" fill={color} />
          <rect x="0" y="0" width="9" height="5" fill="#AA2020" stroke="#801010" strokeWidth="0.3" />
          <rect x="10" y="0" width="10" height="5" fill="#AA2020" stroke="#801010" strokeWidth="0.3" />
          <rect x="-5" y="6" width="10" height="5" fill="#AA2020" stroke="#801010" strokeWidth="0.3" />
          <rect x="5" y="6" width="9" height="5" fill="#AA2020" stroke="#801010" strokeWidth="0.3" />
          <rect x="15" y="6" width="10" height="5" fill="#AA2020" stroke="#801010" strokeWidth="0.3" />
        </pattern>

        {/* Window glass gradient */}
        <linearGradient id="schoolWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0D4F1" />
          <stop offset="30%" stopColor="#87CEEB" />
          <stop offset="70%" stopColor="#6BB8E0" />
          <stop offset="100%" stopColor="#5AA8D0" />
        </linearGradient>

        {/* Door wood gradient */}
        <linearGradient id="schoolDoorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3A2A1A" />
          <stop offset="30%" stopColor="#4A3A2A" />
          <stop offset="50%" stopColor="#5A4A3A" />
          <stop offset="70%" stopColor="#4A3A2A" />
          <stop offset="100%" stopColor="#2A1A0A" />
        </linearGradient>

        {/* Bell gradient */}
        <radialGradient id="schoolBellGradient" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>

        {/* Roof gradient */}
        <linearGradient id="schoolRoofGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#C43232" />
          <stop offset="100%" stopColor="#801010" />
        </linearGradient>

        {/* Clock face gradient */}
        <radialGradient id="schoolClockGradient" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="80%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="60" cy="118" rx="50" ry="4" fill="rgba(0,0,0,0.2)" />

      {/* Main building */}
      <rect x="10" y="40" width="100" height="80" fill="url(#schoolBrickGradient)" />
      <rect x="10" y="40" width="100" height="80" fill="url(#schoolBrickPattern)" opacity="0.7" />

      {/* Building shadow overlay */}
      <rect x="90" y="40" width="20" height="80" fill="rgba(0,0,0,0.1)" />

      {/* Bell tower */}
      <rect x="45" y="15" width="30" height="30" fill="url(#schoolBrickGradient)" />
      <rect x="45" y="15" width="30" height="30" fill="url(#schoolBrickPattern)" opacity="0.7" />

      {/* Tower roof */}
      <polygon points="60,0 40,15 80,15" fill="url(#schoolRoofGradient)" />
      <line x1="60" y1="0" x2="60" y2="15" stroke="#601010" strokeWidth="1" opacity="0.5" />

      {/* Bell with detail */}
      <ellipse cx="60" cy="28" rx="7" ry="9" fill="url(#schoolBellGradient)" />
      <ellipse cx="60" cy="32" rx="8" ry="3" fill="#DAA520" />
      <circle cx="60" cy="35" r="1.5" fill="#8B6914" />
      {/* Bell shine */}
      <ellipse cx="57" cy="25" rx="2" ry="3" fill="white" opacity="0.3" />

      {/* Windows - Top row */}
      <g>
        <rect x="20" y="50" width="15" height="20" fill="url(#schoolWindowGradient)" rx="1" />
        <rect x="20" y="50" width="15" height="20" stroke="#4A3A2A" strokeWidth="1" fill="none" rx="1" />
        <line x1="27.5" y1="50" x2="27.5" y2="70" stroke="#4A3A2A" strokeWidth="0.5" />
        <line x1="20" y1="60" x2="35" y2="60" stroke="#4A3A2A" strokeWidth="0.5" />
        {/* Window reflection */}
        <rect x="21" y="51" width="5" height="8" fill="white" opacity="0.2" />
      </g>

      <g>
        <rect x="52.5" y="50" width="15" height="20" fill="url(#schoolWindowGradient)" rx="1" />
        <rect x="52.5" y="50" width="15" height="20" stroke="#4A3A2A" strokeWidth="1" fill="none" rx="1" />
        <line x1="60" y1="50" x2="60" y2="70" stroke="#4A3A2A" strokeWidth="0.5" />
        <line x1="52.5" y1="60" x2="67.5" y2="60" stroke="#4A3A2A" strokeWidth="0.5" />
        <rect x="53.5" y="51" width="5" height="8" fill="white" opacity="0.2" />
      </g>

      <g>
        <rect x="85" y="50" width="15" height="20" fill="url(#schoolWindowGradient)" rx="1" />
        <rect x="85" y="50" width="15" height="20" stroke="#4A3A2A" strokeWidth="1" fill="none" rx="1" />
        <line x1="92.5" y1="50" x2="92.5" y2="70" stroke="#4A3A2A" strokeWidth="0.5" />
        <line x1="85" y1="60" x2="100" y2="60" stroke="#4A3A2A" strokeWidth="0.5" />
        <rect x="86" y="51" width="5" height="8" fill="white" opacity="0.2" />
      </g>

      {/* Door with detail */}
      <rect x="45" y="85" width="30" height="35" fill="url(#schoolDoorGradient)" rx="2" />
      {/* Door panels */}
      <rect x="48" y="88" width="11" height="13" fill="#3A2A1A" rx="1" />
      <rect x="61" y="88" width="11" height="13" fill="#3A2A1A" rx="1" />
      <rect x="48" y="104" width="11" height="13" fill="#3A2A1A" rx="1" />
      <rect x="61" y="104" width="11" height="13" fill="#3A2A1A" rx="1" />
      {/* Door handle */}
      <circle cx="72" cy="105" r="3" fill="url(#schoolBellGradient)" />
      <circle cx="72" cy="105" r="1.5" fill="#8B6914" />

      {/* Door arch */}
      <path d="M45 85 Q60 75 75 85" fill="none" stroke="#801010" strokeWidth="3" />

      {/* Clock */}
      <circle cx="60" cy="58" r="9" fill="url(#schoolClockGradient)" />
      <circle cx="60" cy="58" r="9" fill="none" stroke="#4A4A4A" strokeWidth="1" />
      {/* Clock hands */}
      <line x1="60" y1="58" x2="60" y2="52" stroke="#333" strokeWidth="1.5" />
      <line x1="60" y1="58" x2="65" y2="58" stroke="#333" strokeWidth="1.5" />
      {/* Clock center */}
      <circle cx="60" cy="58" r="1" fill="#333" />
      {/* Hour markers */}
      <circle cx="60" cy="51" r="0.8" fill="#333" />
      <circle cx="67" cy="58" r="0.8" fill="#333" />
      <circle cx="60" cy="65" r="0.8" fill="#333" />
      <circle cx="53" cy="58" r="0.8" fill="#333" />

      {/* Foundation detail */}
      <rect x="10" y="115" width="100" height="5" fill="#606060" />
      <rect x="10" y="115" width="100" height="2" fill="#707070" />

      {/* Steps */}
      <rect x="40" y="118" width="40" height="2" fill="#707070" />
      <rect x="38" y="116" width="44" height="3" fill="#606060" />
    </svg>
  );
}
