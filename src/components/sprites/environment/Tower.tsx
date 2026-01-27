/**
 * Tower Sprite Component
 * High quality with stone texture, battlements, and architectural details
 */

import type { ElementProps } from '../types';

export function Tower({ x = 0, y = 0, size = 100, color = '#808080' }: ElementProps) {
  return (
    <svg
      width={size * 0.5}
      height={size}
      viewBox="0 0 50 100"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main tower stone gradient */}
        <linearGradient id="towerStoneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5a5a5a" />
          <stop offset="25%" stopColor="#707070" />
          <stop offset="50%" stopColor={color} />
          <stop offset="75%" stopColor="#707070" />
          <stop offset="100%" stopColor="#5a5a5a" />
        </linearGradient>
        {/* Tower vertical shading */}
        <linearGradient id="towerVerticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#909090" />
          <stop offset="30%" stopColor={color} />
          <stop offset="100%" stopColor="#606060" />
        </linearGradient>
        {/* Roof gradient */}
        <linearGradient id="towerRoofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5a4a3a" />
          <stop offset="30%" stopColor="#4a3a2a" />
          <stop offset="100%" stopColor="#3a2a1a" />
        </linearGradient>
        {/* Window shadow */}
        <linearGradient id="towerWindowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#333333" />
        </linearGradient>
        {/* Flag gradient */}
        <linearGradient id="towerFlagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF3333" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        {/* Stone texture pattern */}
        <pattern id="towerStonePattern" width="10" height="8" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="10" height="8" fill="none" />
          <line x1="0" y1="4" x2="10" y2="4" stroke="#5a5a5a" strokeWidth="0.5" opacity="0.3" />
          <line x1="5" y1="0" x2="5" y2="4" stroke="#5a5a5a" strokeWidth="0.5" opacity="0.3" />
          <line x1="0" y1="0" x2="0" y2="8" stroke="#5a5a5a" strokeWidth="0.3" opacity="0.2" />
        </pattern>
        {/* Battlement gradient */}
        <linearGradient id="towerBattlementGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#909090" />
          <stop offset="100%" stopColor="#606060" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="25" cy="99" rx="20" ry="3" fill="#000000" opacity="0.25" />

      {/* Main tower body / Hauptturm */}
      <rect x="10" y="20" width="30" height="80" fill="url(#towerStoneGradient)" />
      <rect x="10" y="20" width="30" height="80" fill="url(#towerVerticalGradient)" opacity="0.5" />
      <rect x="10" y="20" width="30" height="80" fill="url(#towerStonePattern)" />

      {/* Stone block details */}
      <line x1="10" y1="35" x2="40" y2="35" stroke="#5a5a5a" strokeWidth="0.5" opacity="0.4" />
      <line x1="10" y1="50" x2="40" y2="50" stroke="#5a5a5a" strokeWidth="0.5" opacity="0.4" />
      <line x1="10" y1="65" x2="40" y2="65" stroke="#5a5a5a" strokeWidth="0.5" opacity="0.4" />
      <line x1="10" y1="80" x2="40" y2="80" stroke="#5a5a5a" strokeWidth="0.5" opacity="0.4" />
      <line x1="25" y1="20" x2="25" y2="35" stroke="#6a6a6a" strokeWidth="0.3" opacity="0.3" />
      <line x1="25" y1="50" x2="25" y2="65" stroke="#6a6a6a" strokeWidth="0.3" opacity="0.3" />

      {/* Battlements / Zinnen */}
      <rect x="5" y="15" width="10" height="10" fill="url(#towerBattlementGradient)" />
      <rect x="5" y="15" width="10" height="10" fill="url(#towerStonePattern)" />
      <rect x="20" y="15" width="10" height="10" fill="url(#towerBattlementGradient)" />
      <rect x="20" y="15" width="10" height="10" fill="url(#towerStonePattern)" />
      <rect x="35" y="15" width="10" height="10" fill="url(#towerBattlementGradient)" />
      <rect x="35" y="15" width="10" height="10" fill="url(#towerStonePattern)" />

      {/* Battlement shadows */}
      <rect x="15" y="20" width="5" height="5" fill="#4a4a4a" opacity="0.4" />
      <rect x="30" y="20" width="5" height="5" fill="#4a4a4a" opacity="0.4" />

      {/* Pointed roof / Spitzdach */}
      <polygon points="25,0 0,20 50,20" fill="url(#towerRoofGradient)" />
      {/* Roof shingle lines */}
      <line x1="25" y1="2" x2="5" y2="18" stroke="#2a1a0a" strokeWidth="0.5" opacity="0.3" />
      <line x1="25" y1="2" x2="45" y2="18" stroke="#5a4a3a" strokeWidth="0.3" opacity="0.2" />
      <line x1="25" y1="8" x2="10" y2="18" stroke="#2a1a0a" strokeWidth="0.3" opacity="0.25" />
      <line x1="25" y1="8" x2="40" y2="18" stroke="#5a4a3a" strokeWidth="0.3" opacity="0.2" />

      {/* Upper window / Oberes Fenster */}
      <rect x="18" y="35" width="14" height="20" fill="url(#towerWindowGradient)" rx="7" ry="3" />
      <rect x="20" y="37" width="10" height="16" fill="#1a1a2a" rx="5" ry="2" />
      {/* Window frame */}
      <line x1="25" y1="37" x2="25" y2="53" stroke="#5a5a5a" strokeWidth="1" />
      <line x1="20" y1="45" x2="30" y2="45" stroke="#5a5a5a" strokeWidth="1" />
      {/* Window sill */}
      <rect x="17" y="54" width="16" height="2" fill="#707070" />

      {/* Lower window / Unteres Fenster */}
      <rect x="18" y="65" width="14" height="15" fill="url(#towerWindowGradient)" rx="2" />
      <rect x="20" y="67" width="10" height="11" fill="#1a1a2a" rx="1" />
      {/* Window frame */}
      <line x1="25" y1="67" x2="25" y2="78" stroke="#5a5a5a" strokeWidth="1" />
      {/* Window sill */}
      <rect x="17" y="79" width="16" height="2" fill="#707070" />

      {/* Door at base */}
      <rect x="19" y="85" width="12" height="15" fill="#4a3a2a" rx="6" ry="2" />
      <rect x="20" y="86" width="10" height="14" fill="#3a2a1a" rx="5" ry="1" />
      {/* Door handle */}
      <circle cx="27" cy="93" r="1" fill="#8B7355" />

      {/* Flag pole / Fahnenstange */}
      <rect x="23" y="0" width="3" height="12" fill="url(#towerRoofGradient)" />
      <line x1="24.5" y1="0" x2="24.5" y2="12" stroke="#5a4a3a" strokeWidth="0.5" />

      {/* Flag / Fahne */}
      <polygon points="26,0 42,5 26,10" fill="url(#towerFlagGradient)" />
      {/* Flag wave detail */}
      <path d="M26 2 Q34 3 38 5 Q34 7 26 8" fill="#CC0000" opacity="0.5" />
      {/* Flag highlight */}
      <path d="M28 2 Q32 3 35 4" stroke="#FF6666" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Moss/weathering details */}
      <ellipse cx="12" cy="70" rx="2" ry="3" fill="#4a6a4a" opacity="0.3" />
      <ellipse cx="38" cy="85" rx="1.5" ry="2" fill="#4a6a4a" opacity="0.25" />
      <circle cx="15" cy="90" r="1.5" fill="#5a7a5a" opacity="0.2" />
    </svg>
  );
}
