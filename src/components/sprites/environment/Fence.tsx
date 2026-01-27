/**
 * Fence Sprite Component
 * Enhanced with wood grain textures and depth
 */

import type { ElementProps } from '../types';

export function Fence({ x = 0, y = 0, width = 100, height = 40, color = '#8B4513' }: ElementProps & { width?: number; height?: number }) {
  const posts = Math.floor(width / 20);

  // Create lighter and darker variants for wood grain effect
  const lightWood = '#A0522D';
  const darkWood = '#654321';
  const highlight = '#CD853F';

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Wood grain gradient for rails */}
        <linearGradient id="fenceRailGrain" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={darkWood} />
          <stop offset="15%" stopColor={color} />
          <stop offset="30%" stopColor={highlight} />
          <stop offset="45%" stopColor={color} />
          <stop offset="60%" stopColor={darkWood} />
          <stop offset="75%" stopColor={color} />
          <stop offset="90%" stopColor={highlight} />
          <stop offset="100%" stopColor={color} />
        </linearGradient>

        {/* Wood grain gradient for posts */}
        <linearGradient id="fencePostGrain" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={darkWood} />
          <stop offset="20%" stopColor={color} />
          <stop offset="50%" stopColor={lightWood} />
          <stop offset="80%" stopColor={color} />
          <stop offset="100%" stopColor={darkWood} />
        </linearGradient>

        {/* Vertical grain pattern for posts */}
        <linearGradient id="fencePostVertical" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={highlight} stopOpacity="0.3" />
          <stop offset="50%" stopColor={darkWood} stopOpacity="0.1" />
          <stop offset="100%" stopColor={darkWood} stopOpacity="0.4" />
        </linearGradient>

        {/* Shadow gradient */}
        <linearGradient id="fenceShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="black" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.3" />
        </linearGradient>

        {/* Wood texture filter */}
        <filter id="fenceWoodTexture" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
          <feDiffuseLighting in="noise" lightingColor={color} surfaceScale="1.5" result="light">
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
          <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="1" k2="0.3" k3="0.1" k4="0" />
        </filter>
      </defs>

      {/* Background shadow layer */}
      <rect x="2" y="10" width={width} height="4" fill="rgba(0,0,0,0.2)" rx="1" />
      <rect x="2" y="26" width={width} height="4" fill="rgba(0,0,0,0.2)" rx="1" />

      {/* Upper rail */}
      <rect x="0" y="8" width={width} height="5" fill="url(#fenceRailGrain)" rx="1" />
      <rect x="0" y="8" width={width} height="2" fill={highlight} opacity="0.3" rx="1" />
      <rect x="0" y="11" width={width} height="2" fill={darkWood} opacity="0.2" rx="1" />

      {/* Lower rail */}
      <rect x="0" y="24" width={width} height="5" fill="url(#fenceRailGrain)" rx="1" />
      <rect x="0" y="24" width={width} height="2" fill={highlight} opacity="0.3" rx="1" />
      <rect x="0" y="27" width={width} height="2" fill={darkWood} opacity="0.2" rx="1" />

      {/* Posts with wood grain and pointed tops */}
      {[...Array(posts)].map((_, i) => (
        <g key={i}>
          {/* Post shadow */}
          <rect x={i * 20 + 8} y="2" width="8" height={height} fill="rgba(0,0,0,0.15)" />

          {/* Main post body */}
          <rect x={i * 20 + 6} y="4" width="8" height={height - 4} fill="url(#fencePostGrain)" />

          {/* Pointed top */}
          <polygon
            points={`${i * 20 + 6},4 ${i * 20 + 10},0 ${i * 20 + 14},4`}
            fill={color}
          />
          <polygon
            points={`${i * 20 + 6},4 ${i * 20 + 10},1 ${i * 20 + 10},4`}
            fill={highlight}
            opacity="0.4"
          />

          {/* Vertical grain overlay */}
          <rect x={i * 20 + 6} y="4" width="8" height={height - 4} fill="url(#fencePostVertical)" />

          {/* Wood grain lines */}
          <line
            x1={i * 20 + 8} y1="6"
            x2={i * 20 + 8} y2={height - 2}
            stroke={darkWood}
            strokeWidth="0.5"
            opacity="0.3"
          />
          <line
            x1={i * 20 + 11} y1="5"
            x2={i * 20 + 11} y2={height - 1}
            stroke={highlight}
            strokeWidth="0.3"
            opacity="0.4"
          />

          {/* Edge highlights */}
          <line
            x1={i * 20 + 6} y1="4"
            x2={i * 20 + 6} y2={height}
            stroke={highlight}
            strokeWidth="0.5"
            opacity="0.5"
          />
          <line
            x1={i * 20 + 14} y1="4"
            x2={i * 20 + 14} y2={height}
            stroke={darkWood}
            strokeWidth="0.5"
            opacity="0.4"
          />
        </g>
      ))}

      {/* Nail details on rails */}
      {[...Array(posts)].map((_, i) => (
        <g key={`nails-${i}`}>
          <circle cx={i * 20 + 10} cy="10" r="1" fill={darkWood} />
          <circle cx={i * 20 + 10} cy="26" r="1" fill={darkWood} />
          <circle cx={i * 20 + 10} cy="9.5" r="0.5" fill={highlight} opacity="0.6" />
          <circle cx={i * 20 + 10} cy="25.5" r="0.5" fill={highlight} opacity="0.6" />
        </g>
      ))}
    </svg>
  );
}
