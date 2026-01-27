/**
 * Hospital Sprite Component
 * Enhanced with architectural details and depth
 */

import type { ElementProps } from '../types';

export function Hospital({ x = 0, y = 0, size = 120, color = 'white' }: ElementProps) {
  // Create color variations
  const wallLight = '#FAFAFA';
  const wallMid = '#E8E8E8';
  const wallShadow = '#D0D0D0';
  const redCross = '#FF0000';
  const redDark = '#CC0000';
  const windowBlue = '#87CEEB';
  const windowDark = '#5BA3C7';
  const doorBlue = '#4169E1';
  const doorDark = '#2E4A9E';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Wall gradient */}
        <linearGradient id="hospitalWallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={wallLight} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={wallShadow} />
        </linearGradient>

        {/* Wall side shadow */}
        <linearGradient id="hospitalSideShadow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
          <stop offset="20%" stopColor="transparent" />
          <stop offset="80%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.05)" />
        </linearGradient>

        {/* Red cross gradient */}
        <linearGradient id="hospitalCrossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="50%" stopColor={redCross} />
          <stop offset="100%" stopColor={redDark} />
        </linearGradient>

        {/* Window gradient */}
        <linearGradient id="hospitalWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="30%" stopColor={windowBlue} />
          <stop offset="100%" stopColor={windowDark} />
        </linearGradient>

        {/* Window reflection */}
        <linearGradient id="hospitalWindowReflection" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="50%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {/* Door gradient */}
        <linearGradient id="hospitalDoorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={doorDark} />
          <stop offset="50%" stopColor={doorBlue} />
          <stop offset="100%" stopColor={doorDark} />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id="hospitalShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="3" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.25" />
        </filter>

        {/* Cross glow filter */}
        <filter id="hospitalCrossGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Building shadow */}
      <rect x="14" y="34" width="100" height="88" fill="rgba(0,0,0,0.15)" rx="2" />

      {/* Main building */}
      <rect x="10" y="30" width="100" height="90" fill="url(#hospitalWallGradient)" filter="url(#hospitalShadow)" rx="2" />

      {/* Building side shadow overlay */}
      <rect x="10" y="30" width="100" height="90" fill="url(#hospitalSideShadow)" rx="2" />

      {/* Horizontal building lines (floors) */}
      <g stroke={wallShadow} strokeWidth="0.5" opacity="0.5">
        <line x1="10" y1="65" x2="110" y2="65" />
        <line x1="10" y1="90" x2="110" y2="90" />
      </g>

      {/* Roof edge detail */}
      <rect x="8" y="28" width="104" height="4" fill={wallMid} rx="1" />
      <rect x="8" y="28" width="104" height="1.5" fill={wallLight} opacity="0.8" rx="1" />

      {/* Red cross background glow */}
      <ellipse cx="60" cy="20" rx="25" ry="20" fill={redCross} opacity="0.1" filter="url(#hospitalCrossGlow)" />

      {/* Red cross vertical part */}
      <rect x="50" y="8" width="20" height="44" fill="url(#hospitalCrossGradient)" rx="2" filter="url(#hospitalCrossGlow)" />
      <rect x="52" y="10" width="4" height="40" fill="#FF6666" opacity="0.3" rx="1" />

      {/* Red cross horizontal part */}
      <rect x="38" y="18" width="44" height="22" fill="url(#hospitalCrossGradient)" rx="2" />
      <rect x="40" y="20" width="40" height="4" fill="#FF6666" opacity="0.3" rx="1" />

      {/* Cross highlight */}
      <rect x="50" y="8" width="6" height="44" fill="white" opacity="0.15" rx="1" />
      <rect x="38" y="18" width="44" height="6" fill="white" opacity="0.15" rx="1" />

      {/* Windows - Top row */}
      {[20, 50, 80].map((wx, i) => (
        <g key={`top-window-${i}`}>
          {/* Window frame */}
          <rect x={wx - 2} y="43" width="24" height="19" fill="#555" rx="1" />
          {/* Window glass */}
          <rect x={wx} y="45" width="20" height="15" fill="url(#hospitalWindowGradient)" rx="1" />
          {/* Window reflection */}
          <rect x={wx} y="45" width="20" height="15" fill="url(#hospitalWindowReflection)" rx="1" />
          {/* Window frame cross */}
          <line x1={wx + 10} y1="45" x2={wx + 10} y2="60" stroke="#666" strokeWidth="1.5" />
          <line x1={wx} y1="52.5" x2={wx + 20} y2="52.5" stroke="#666" strokeWidth="1.5" />
          {/* Window sill */}
          <rect x={wx - 1} y="60" width="22" height="2" fill={wallShadow} />
        </g>
      ))}

      {/* Windows - Bottom row */}
      {[20, 80].map((wx, i) => (
        <g key={`bottom-window-${i}`}>
          {/* Window frame */}
          <rect x={wx - 2} y="68" width="24" height="19" fill="#555" rx="1" />
          {/* Window glass */}
          <rect x={wx} y="70" width="20" height="15" fill="url(#hospitalWindowGradient)" rx="1" />
          {/* Window reflection */}
          <rect x={wx} y="70" width="20" height="15" fill="url(#hospitalWindowReflection)" rx="1" />
          {/* Window frame cross */}
          <line x1={wx + 10} y1="70" x2={wx + 10} y2="85" stroke="#666" strokeWidth="1.5" />
          <line x1={wx} y1="77.5" x2={wx + 20} y2="77.5" stroke="#666" strokeWidth="1.5" />
          {/* Window sill */}
          <rect x={wx - 1} y="85" width="22" height="2" fill={wallShadow} />
        </g>
      ))}

      {/* Main entrance door */}
      <g>
        {/* Door frame */}
        <rect x="43" y="92" width="34" height="30" fill="#333" rx="2" />
        {/* Door header */}
        <rect x="42" y="90" width="36" height="5" fill="#444" rx="1" />
        <rect x="42" y="90" width="36" height="2" fill="#555" opacity="0.8" rx="1" />

        {/* Double door left */}
        <rect x="45" y="94" width="14" height="26" fill="url(#hospitalDoorGradient)" rx="1" />
        <rect x="45" y="94" width="4" height="26" fill="white" opacity="0.1" rx="1" />

        {/* Double door right */}
        <rect x="61" y="94" width="14" height="26" fill="url(#hospitalDoorGradient)" rx="1" />
        <rect x="61" y="94" width="4" height="26" fill="white" opacity="0.1" rx="1" />

        {/* Door window panels */}
        <rect x="48" y="97" width="8" height="12" fill={windowBlue} opacity="0.7" rx="1" />
        <rect x="64" y="97" width="8" height="12" fill={windowBlue} opacity="0.7" rx="1" />

        {/* Door handles */}
        <circle cx="57" cy="108" r="1.5" fill="#FFD700" />
        <circle cx="63" cy="108" r="1.5" fill="#FFD700" />
      </g>

      {/* Entry canopy */}
      <rect x="38" y="88" width="44" height="4" fill={wallMid} />
      <rect x="38" y="88" width="44" height="1.5" fill={wallLight} />

      {/* Building base/foundation */}
      <rect x="8" y="118" width="104" height="4" fill="#666" rx="1" />

      {/* Side pillars */}
      <rect x="10" y="30" width="4" height="90" fill={wallShadow} opacity="0.5" />
      <rect x="106" y="30" width="4" height="90" fill={wallShadow} opacity="0.3" />

      {/* Emergency sign glow */}
      <rect x="46" y="82" width="28" height="6" fill="#FF0000" opacity="0.8" rx="1" />
      <text x="60" y="87" textAnchor="middle" fill="white" fontSize="4" fontFamily="sans-serif" fontWeight="bold">EMERGENCY</text>

      {/* Ambulance bay indicators */}
      <g opacity="0.6">
        <rect x="15" y="115" width="3" height="3" fill="#FFD700" rx="0.5" />
        <rect x="102" y="115" width="3" height="3" fill="#FFD700" rx="0.5" />
      </g>
    </svg>
  );
}
