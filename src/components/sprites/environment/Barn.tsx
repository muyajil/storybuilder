/**
 * Barn Sprite Component
 * Enhanced with wood grain textures, weathered appearance, and depth
 */

import type { ElementProps } from '../types';

export function Barn({ x = 0, y = 0, size = 100, color = '#8B0000' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Roof wood grain gradient */}
        <linearGradient id="barnRoofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5a3a2a" />
          <stop offset="30%" stopColor="#4a2a1a" />
          <stop offset="70%" stopColor="#3a2015" />
          <stop offset="100%" stopColor="#2a1510" />
        </linearGradient>
        {/* Main barn wall gradient */}
        <linearGradient id="barnWallGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6a0000" />
          <stop offset="15%" stopColor={color} />
          <stop offset="85%" stopColor={color} />
          <stop offset="100%" stopColor="#5a0000" />
        </linearGradient>
        {/* Vertical weathering gradient */}
        <linearGradient id="barnWeatherGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="70%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
        </linearGradient>
        {/* Door wood gradient */}
        <linearGradient id="barnDoorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3a2015" />
          <stop offset="50%" stopColor="#4a2a1a" />
          <stop offset="100%" stopColor="#3a2015" />
        </linearGradient>
        {/* Window glass gradient */}
        <linearGradient id="barnWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ADD8E6" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#6BA3C7" />
        </linearGradient>
        {/* Wood plank texture pattern */}
        <pattern id="barnWoodPattern" patternUnits="userSpaceOnUse" width="10" height="100">
          <rect width="10" height="100" fill="transparent" />
          <line x1="0" y1="0" x2="0" y2="100" stroke="#000" strokeWidth="0.5" opacity="0.15" />
          <line x1="5" y1="0" x2="5" y2="100" stroke="#000" strokeWidth="0.3" opacity="0.1" />
        </pattern>
      </defs>

      {/* Shadow under barn */}
      <ellipse cx="50" cy="98" rx="42" ry="4" fill="#000" opacity="0.2" />

      {/* Roof with gradient and texture */}
      <polygon points="50,5 5,40 95,40" fill="url(#barnRoofGradient)" />
      {/* Roof highlight */}
      <polygon points="50,5 50,12 85,40 95,40" fill="#3a2a1a" opacity="0.3" />
      {/* Roof edge detail */}
      <line x1="5" y1="40" x2="95" y2="40" stroke="#2a1510" strokeWidth="2" />

      {/* Main building with gradient */}
      <rect x="10" y="40" width="80" height="60" fill="url(#barnWallGradient)" />
      {/* Wood plank overlay */}
      <rect x="10" y="40" width="80" height="60" fill="url(#barnWoodPattern)" />
      {/* Weathering overlay */}
      <rect x="10" y="40" width="80" height="60" fill="url(#barnWeatherGradient)" />

      {/* Horizontal boards detail */}
      <line x1="10" y1="55" x2="90" y2="55" stroke="#5a0000" strokeWidth="1" opacity="0.3" />
      <line x1="10" y1="70" x2="90" y2="70" stroke="#5a0000" strokeWidth="1" opacity="0.3" />
      <line x1="10" y1="85" x2="90" y2="85" stroke="#5a0000" strokeWidth="1" opacity="0.3" />

      {/* White X decoration with shadow */}
      <line x1="20" y1="50" x2="80" y2="90" stroke="#ddd" strokeWidth="5" />
      <line x1="80" y1="50" x2="20" y2="90" stroke="#ddd" strokeWidth="5" />
      <line x1="21" y1="51" x2="81" y2="91" stroke="white" strokeWidth="3" />
      <line x1="79" y1="51" x2="19" y2="91" stroke="white" strokeWidth="3" />

      {/* Door with wood grain */}
      <rect x="35" y="60" width="30" height="40" fill="url(#barnDoorGradient)" />
      {/* Door center line */}
      <line x1="50" y1="60" x2="50" y2="100" stroke="#2a1510" strokeWidth="2" />
      {/* Door horizontal detail */}
      <line x1="35" y1="75" x2="65" y2="75" stroke="#2a1510" strokeWidth="1" opacity="0.5" />
      <line x1="35" y1="90" x2="65" y2="90" stroke="#2a1510" strokeWidth="1" opacity="0.5" />
      {/* Door handles */}
      <circle cx="45" cy="82" r="2" fill="#333" />
      <circle cx="55" cy="82" r="2" fill="#333" />

      {/* Loft window with glass effect */}
      <rect x="42" y="24" width="16" height="13" fill="url(#barnWindowGradient)" />
      {/* Window frame */}
      <rect x="42" y="24" width="16" height="13" fill="none" stroke="#4a2a1a" strokeWidth="2" />
      {/* Window cross frame */}
      <line x1="50" y1="24" x2="50" y2="37" stroke="#4a2a1a" strokeWidth="1.5" />
      <line x1="42" y1="30" x2="58" y2="30" stroke="#4a2a1a" strokeWidth="1.5" />
      {/* Window shine */}
      <rect x="43" y="25" width="6" height="4" fill="white" opacity="0.3" />
    </svg>
  );
}
