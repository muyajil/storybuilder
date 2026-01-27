/**
 * Dirt Sprite Component
 * Enhanced with natural textures, depth layers, and earth tones
 */

import type { GroundProps } from '../types';

export function Dirt({ width = 800, height = 100, color = '#8B4513' }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      overflow: 'hidden',
    }}>
      <svg width={width} height={height} style={{ display: 'block' }}>
        <defs>
          {/* Main dirt gradient with depth */}
          <linearGradient id="dirtMainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} />
            <stop offset="30%" stopColor="#7a3a10" />
            <stop offset="70%" stopColor="#5D3A1A" />
            <stop offset="100%" stopColor="#3a2010" />
          </linearGradient>
          {/* Top soil layer gradient */}
          <linearGradient id="dirtTopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9a5a23" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
          {/* Texture pattern for soil granules */}
          <pattern id="dirtTexturePattern" patternUnits="userSpaceOnUse" width="20" height="20">
            <circle cx="3" cy="5" r="1.5" fill="#5a3010" opacity="0.3" />
            <circle cx="12" cy="3" r="1" fill="#4a2510" opacity="0.25" />
            <circle cx="18" cy="8" r="1.2" fill="#5a3010" opacity="0.2" />
            <circle cx="7" cy="12" r="0.8" fill="#3a2010" opacity="0.3" />
            <circle cx="15" cy="15" r="1.3" fill="#5a3010" opacity="0.25" />
            <circle cx="4" cy="18" r="1" fill="#4a2510" opacity="0.2" />
          </pattern>
          {/* Pebble pattern */}
          <pattern id="dirtPebblePattern" patternUnits="userSpaceOnUse" width="60" height="40">
            <ellipse cx="10" cy="8" rx="4" ry="3" fill="#6a4a30" opacity="0.4" />
            <ellipse cx="45" cy="12" rx="3" ry="2" fill="#5a3a20" opacity="0.3" />
            <ellipse cx="25" cy="25" rx="5" ry="3" fill="#7a5a40" opacity="0.35" />
            <ellipse cx="55" cy="30" rx="3" ry="2.5" fill="#6a4a30" opacity="0.3" />
            <ellipse cx="8" cy="35" rx="4" ry="2.5" fill="#5a3a20" opacity="0.25" />
          </pattern>
          {/* Root/organic matter pattern */}
          <pattern id="dirtRootPattern" patternUnits="userSpaceOnUse" width="80" height="50">
            <path d="M5 10 Q15 15 10 25" fill="none" stroke="#3a2510" strokeWidth="0.5" opacity="0.2" />
            <path d="M60 5 Q70 12 65 20" fill="none" stroke="#3a2510" strokeWidth="0.4" opacity="0.15" />
            <path d="M30 30 Q40 35 35 45" fill="none" stroke="#3a2510" strokeWidth="0.5" opacity="0.2" />
          </pattern>
        </defs>

        {/* Base dirt layer */}
        <rect x="0" y="0" width={width} height={height} fill="url(#dirtMainGradient)" />

        {/* Texture overlay */}
        <rect x="0" y="0" width={width} height={height} fill="url(#dirtTexturePattern)" />

        {/* Pebble layer */}
        <rect x="0" y="0" width={width} height={height} fill="url(#dirtPebblePattern)" />

        {/* Root/organic layer */}
        <rect x="0" y={height * 0.3} width={width} height={height * 0.7} fill="url(#dirtRootPattern)" />

        {/* Top soil line with slight variation */}
        <path
          d={`M0 0 Q${width * 0.1} 3 ${width * 0.2} 1 Q${width * 0.3} 4 ${width * 0.4} 2 Q${width * 0.5} 5 ${width * 0.6} 1 Q${width * 0.7} 4 ${width * 0.8} 2 Q${width * 0.9} 3 ${width} 0`}
          fill="url(#dirtTopGradient)"
          opacity="0.6"
        />

        {/* Scattered surface pebbles/rocks */}
        <ellipse cx={width * 0.1} cy="8" rx="6" ry="4" fill="#7a5a40" opacity="0.5" />
        <ellipse cx={width * 0.25} cy="5" rx="4" ry="3" fill="#6a4a30" opacity="0.4" />
        <ellipse cx={width * 0.45} cy="7" rx="5" ry="3.5" fill="#8a6a50" opacity="0.45" />
        <ellipse cx={width * 0.6} cy="4" rx="3" ry="2" fill="#5a3a20" opacity="0.35" />
        <ellipse cx={width * 0.75} cy="6" rx="5" ry="3" fill="#7a5a40" opacity="0.4" />
        <ellipse cx={width * 0.9} cy="5" rx="4" ry="2.5" fill="#6a4a30" opacity="0.45" />

        {/* Subtle grass/plant hints at top edge */}
        <g opacity="0.3">
          <path d={`M${width * 0.05} 0 L${width * 0.05} -4 L${width * 0.055} 0`} fill="#4a6a20" />
          <path d={`M${width * 0.15} 0 L${width * 0.15} -6 L${width * 0.155} 0`} fill="#3a5a15" />
          <path d={`M${width * 0.35} 0 L${width * 0.35} -5 L${width * 0.355} 0`} fill="#4a6a20" />
          <path d={`M${width * 0.55} 0 L${width * 0.55} -4 L${width * 0.555} 0`} fill="#3a5a15" />
          <path d={`M${width * 0.7} 0 L${width * 0.7} -7 L${width * 0.705} 0`} fill="#4a6a20" />
          <path d={`M${width * 0.85} 0 L${width * 0.85} -5 L${width * 0.855} 0`} fill="#3a5a15" />
        </g>

        {/* Depth shadow at bottom */}
        <rect x="0" y={height * 0.85} width={width} height={height * 0.15} fill="#000" opacity="0.15" />
      </svg>
    </div>
  );
}
