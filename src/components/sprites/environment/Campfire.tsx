/**
 * Campfire Sprite Component
 * Enhanced with dynamic fire gradients, glowing embers, and atmospheric effects
 */

import type { ElementProps } from '../types';

export function Campfire({ x = 0, y = 0, size = 50, color = '#FF4500' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Fire outer gradient */}
        <radialGradient id="campfireOuterGradient" cx="50%" cy="80%" r="70%">
          <stop offset="0%" stopColor="#FF6347" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#8B0000" stopOpacity="0" />
        </radialGradient>
        {/* Fire middle gradient */}
        <radialGradient id="campfireMiddleGradient" cx="50%" cy="75%" r="60%">
          <stop offset="0%" stopColor="#FFA500" />
          <stop offset="60%" stopColor="#FF6347" />
          <stop offset="100%" stopColor="#FF4500" stopOpacity="0.5" />
        </radialGradient>
        {/* Fire inner gradient (hottest) */}
        <radialGradient id="campfireInnerGradient" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="white" />
          <stop offset="30%" stopColor="#FFFF00" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" stopOpacity="0.8" />
        </radialGradient>
        {/* Wood log gradient */}
        <linearGradient id="campfireWoodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5a3010" />
          <stop offset="30%" stopColor="#8B4513" />
          <stop offset="70%" stopColor="#6a3a15" />
          <stop offset="100%" stopColor="#4a2510" />
        </linearGradient>
        {/* Burning wood gradient */}
        <linearGradient id="campfireBurningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="40%" stopColor="#4a2510" />
          <stop offset="70%" stopColor="#2a1505" />
          <stop offset="100%" stopColor="#1a0a00" />
        </linearGradient>
        {/* Stone gradient */}
        <radialGradient id="campfireStoneGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#808080" />
          <stop offset="100%" stopColor="#505050" />
        </radialGradient>
        {/* Glow filter for fire */}
        <filter id="campfireGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Spark glow */}
        <filter id="campfireSparkGlow">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Ground glow */}
        <radialGradient id="campfireGroundGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF4500" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground glow from fire */}
      <ellipse cx="25" cy="45" rx="22" ry="8" fill="url(#campfireGroundGlow)" />

      {/* Stone ring */}
      <ellipse cx="8" cy="45" rx="6" ry="4" fill="url(#campfireStoneGradient)" />
      <ellipse cx="8" cy="44" rx="5" ry="3" fill="#707070" opacity="0.5" />
      <ellipse cx="17" cy="47" rx="5" ry="3" fill="url(#campfireStoneGradient)" />
      <ellipse cx="25" cy="48" rx="6" ry="3" fill="url(#campfireStoneGradient)" />
      <ellipse cx="33" cy="47" rx="5" ry="3" fill="url(#campfireStoneGradient)" />
      <ellipse cx="42" cy="45" rx="6" ry="4" fill="url(#campfireStoneGradient)" />
      <ellipse cx="42" cy="44" rx="5" ry="3" fill="#707070" opacity="0.5" />

      {/* Logs */}
      {/* Back log */}
      <rect x="10" y="38" width="28" height="5" fill="url(#campfireBurningGradient)" rx="2" transform="rotate(-10 24 40)" />
      {/* Front log */}
      <rect x="12" y="40" width="28" height="5" fill="url(#campfireWoodGradient)" rx="2" transform="rotate(12 26 42)" />
      {/* Log ends glowing */}
      <ellipse cx="12" cy="40" rx="2.5" ry="2" fill="#8B0000" />
      <ellipse cx="38" cy="38" rx="2.5" ry="2" fill="#8B0000" />

      {/* Embers at base */}
      <ellipse cx="25" cy="40" rx="8" ry="3" fill="#FF4500" opacity="0.6" />
      <ellipse cx="25" cy="39" rx="5" ry="2" fill="#FF6347" opacity="0.8" />

      {/* Fire layers with glow */}
      <g filter="url(#campfireGlow)">
        {/* Outer fire */}
        <ellipse cx="25" cy="32" rx="12" ry="14" fill="url(#campfireOuterGradient)" />

        {/* Middle fire flames */}
        <path d="M25 38 Q18 30 22 20 Q25 25 25 18 Q25 25 28 20 Q32 30 25 38" fill="url(#campfireMiddleGradient)" />

        {/* Inner fire (hottest) */}
        <ellipse cx="25" cy="30" rx="6" ry="10" fill="url(#campfireInnerGradient)" />

        {/* Flame tips */}
        <path d="M25 35 Q22 28 24 18 Q25 22 26 18 Q28 28 25 35" fill="#FFFF00" opacity="0.9" />
        <path d="M20 36 Q18 32 19 26 Q20 28 20 26 Q22 32 20 36" fill="#FFA500" opacity="0.7" />
        <path d="M30 36 Q28 32 29 26 Q30 28 31 26 Q32 32 30 36" fill="#FFA500" opacity="0.7" />
      </g>

      {/* White hot center */}
      <ellipse cx="25" cy="32" rx="3" ry="5" fill="white" opacity="0.6" />

      {/* Sparks */}
      <g filter="url(#campfireSparkGlow)">
        <circle cx="18" cy="15" r="1.2" fill="#FFD700" />
        <circle cx="30" cy="12" r="1" fill="#FFD700" />
        <circle cx="25" cy="8" r="1.5" fill="#FFA500" />
        <circle cx="22" cy="5" r="0.8" fill="#FFD700" />
        <circle cx="32" cy="10" r="0.7" fill="#FF6347" />
        <circle cx="15" cy="18" r="0.6" fill="#FFD700" />
        <circle cx="35" cy="16" r="0.8" fill="#FFA500" />
      </g>

      {/* Rising smoke */}
      <ellipse cx="25" cy="3" rx="4" ry="2" fill="#888" opacity="0.2" />
      <ellipse cx="22" cy="6" rx="3" ry="1.5" fill="#999" opacity="0.15" />
    </svg>
  );
}
