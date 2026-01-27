/**
 * Church Sprite Component
 * Enhanced with stone textures, stained glass, and sacred atmosphere
 */

import type { ElementProps } from '../types';

export function Church({ x = 0, y = 0, size = 100, color = 'white' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Stone wall gradient */}
        <linearGradient id="churchWallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5f5f5" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#e8e8e8" />
          <stop offset="100%" stopColor="#dcdcdc" />
        </linearGradient>
        {/* Tower wall gradient */}
        <linearGradient id="churchTowerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e0e0e0" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#d8d8d8" />
        </linearGradient>
        {/* Roof gradient */}
        <linearGradient id="churchRoofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9a1010" />
          <stop offset="50%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#6a0000" />
        </linearGradient>
        {/* Gold cross gradient */}
        <linearGradient id="churchCrossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="30%" stopColor="#FFD700" />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Clock face gradient */}
        <radialGradient id="churchClockGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFACD" />
          <stop offset="70%" stopColor="#F5F5DC" />
          <stop offset="100%" stopColor="#E8DCC8" />
        </radialGradient>
        {/* Stained glass gradient */}
        <linearGradient id="churchGlassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ADD8E6" />
          <stop offset="30%" stopColor="#87CEEB" />
          <stop offset="60%" stopColor="#4682B4" />
          <stop offset="100%" stopColor="#6495ED" />
        </linearGradient>
        {/* Door wood gradient */}
        <linearGradient id="churchDoorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5a3515" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5a3515" />
        </linearGradient>
        {/* Stone pattern */}
        <pattern id="churchStonePattern" patternUnits="userSpaceOnUse" width="12" height="8">
          <rect width="12" height="8" fill="transparent" />
          <rect x="0" y="0" width="11" height="7" fill="none" stroke="#ccc" strokeWidth="0.3" opacity="0.5" />
          <rect x="6" y="4" width="6" height="4" fill="none" stroke="#ccc" strokeWidth="0.3" opacity="0.5" />
        </pattern>
        {/* Shadow filter */}
        <filter id="churchShadow">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodOpacity="0.25" />
        </filter>
        {/* Inner glow for windows */}
        <filter id="churchWindowGlow">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="50" cy="118" rx="40" ry="4" fill="#000" opacity="0.2" />

      <g filter="url(#churchShadow)">
        {/* Bell tower */}
        <rect x="35" y="20" width="30" height="60" fill="url(#churchTowerGradient)" />
        <rect x="35" y="20" width="30" height="60" fill="url(#churchStonePattern)" />
        {/* Tower highlight */}
        <rect x="37" y="22" width="4" height="56" fill="white" opacity="0.15" />
        {/* Tower shadow */}
        <rect x="61" y="22" width="3" height="56" fill="#000" opacity="0.1" />

        {/* Steeple roof */}
        <polygon points="50,0 28,25 72,25" fill="url(#churchRoofGradient)" />
        {/* Roof highlight */}
        <polygon points="50,2 50,10 68,25 72,25" fill="#5a0000" opacity="0.3" />
        {/* Roof edge */}
        <line x1="28" y1="25" x2="72" y2="25" stroke="#4a0000" strokeWidth="2" />

        {/* Cross */}
        <rect x="46" y="0" width="8" height="18" fill="url(#churchCrossGradient)" rx="1" />
        <rect x="41" y="4" width="18" height="6" fill="url(#churchCrossGradient)" rx="1" />
        {/* Cross shine */}
        <rect x="47" y="1" width="2" height="16" fill="white" opacity="0.4" />
        <rect x="42" y="5" width="16" height="2" fill="white" opacity="0.3" />

        {/* Clock */}
        <circle cx="50" cy="40" r="11" fill="url(#churchClockGradient)" />
        <circle cx="50" cy="40" r="11" fill="none" stroke="#8B4513" strokeWidth="2" />
        {/* Clock numbers (simplified) */}
        <text x="50" y="33" fontSize="4" textAnchor="middle" fill="#333">12</text>
        <text x="50" y="51" fontSize="4" textAnchor="middle" fill="#333">6</text>
        <text x="41" y="42" fontSize="4" textAnchor="middle" fill="#333">9</text>
        <text x="59" y="42" fontSize="4" textAnchor="middle" fill="#333">3</text>
        {/* Clock hands */}
        <line x1="50" y1="40" x2="50" y2="32" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        <line x1="50" y1="40" x2="56" y2="40" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
        {/* Clock center */}
        <circle cx="50" cy="40" r="1.5" fill="#333" />

        {/* Main building */}
        <rect x="15" y="60" width="70" height="60" fill="url(#churchWallGradient)" />
        <rect x="15" y="60" width="70" height="60" fill="url(#churchStonePattern)" />
        {/* Building highlight */}
        <rect x="17" y="62" width="4" height="56" fill="white" opacity="0.1" />

        {/* Main door with arch */}
        <path d="M40 120 L40 88 Q50 76 60 88 L60 120" fill="url(#churchDoorGradient)" />
        {/* Door arch detail */}
        <path d="M40 120 L40 88 Q50 76 60 88 L60 120" fill="none" stroke="#3a2010" strokeWidth="2" />
        {/* Door panels */}
        <line x1="50" y1="88" x2="50" y2="120" stroke="#3a2010" strokeWidth="1" />
        {/* Door arch stone trim */}
        <path d="M38 90 Q50 74 62 90" fill="none" stroke="#ccc" strokeWidth="3" />
        {/* Door handle */}
        <circle cx="55" cy="105" r="2" fill="#B8860B" />

        {/* Left stained glass window */}
        <g filter="url(#churchWindowGlow)">
          <path d="M22 75 L22 98 Q27 104 32 98 L32 75" fill="url(#churchGlassGradient)" />
          {/* Window frame */}
          <path d="M22 75 L22 98 Q27 104 32 98 L32 75" fill="none" stroke="#8B4513" strokeWidth="2" />
          {/* Window cross */}
          <line x1="27" y1="75" x2="27" y2="100" stroke="#8B4513" strokeWidth="1" />
          <line x1="22" y1="86" x2="32" y2="86" stroke="#8B4513" strokeWidth="1" />
          {/* Glass shine */}
          <rect x="23" y="76" width="3" height="8" fill="white" opacity="0.3" />
        </g>

        {/* Right stained glass window */}
        <g filter="url(#churchWindowGlow)">
          <path d="M68 75 L68 98 Q73 104 78 98 L78 75" fill="url(#churchGlassGradient)" />
          {/* Window frame */}
          <path d="M68 75 L68 98 Q73 104 78 98 L78 75" fill="none" stroke="#8B4513" strokeWidth="2" />
          {/* Window cross */}
          <line x1="73" y1="75" x2="73" y2="100" stroke="#8B4513" strokeWidth="1" />
          <line x1="68" y1="86" x2="78" y2="86" stroke="#8B4513" strokeWidth="1" />
          {/* Glass shine */}
          <rect x="69" y="76" width="3" height="8" fill="white" opacity="0.3" />
        </g>

        {/* Bell opening in tower */}
        <rect x="42" y="55" width="16" height="12" fill="#2a2a2a" rx="1" />
        {/* Bell */}
        <path d="M47 58 Q50 56 53 58 L54 65 Q50 67 46 65 Z" fill="#B8860B" />
        <rect x="49" y="54" width="2" height="4" fill="#8B4513" />

        {/* Decorative cross on front */}
        <rect x="48" y="62" width="4" height="10" fill="#ddd" rx="0.5" />
        <rect x="46" y="65" width="8" height="3" fill="#ddd" rx="0.5" />
      </g>
    </svg>
  );
}
