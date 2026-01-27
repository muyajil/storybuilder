/**
 * Bridge Sprite Component
 * Enhanced with wood textures, rope details, and atmospheric depth
 */

import type { ElementProps } from '../types';

export function Bridge({ x = 0, y = 0, width = 150, height = 60, color = '#8B4513' }: ElementProps & { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main wood plank gradient */}
        <linearGradient id="bridgeWoodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5a3515" />
          <stop offset="20%" stopColor={color} />
          <stop offset="50%" stopColor="#9a5a23" />
          <stop offset="80%" stopColor={color} />
          <stop offset="100%" stopColor="#5a3515" />
        </linearGradient>
        {/* Railing wood gradient */}
        <linearGradient id="bridgeRailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9a5a23" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#5a3515" />
        </linearGradient>
        {/* Arch shadow gradient */}
        <linearGradient id="bridgeArchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#4a2510" />
        </linearGradient>
        {/* Rope gradient */}
        <linearGradient id="bridgeRopeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="50%" stopColor="#C4A574" />
          <stop offset="100%" stopColor="#8B7355" />
        </linearGradient>
        {/* Shadow filter */}
        <filter id="bridgeShadow">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Water reflection shadow */}
      <ellipse cx={width / 2} cy={height - 2} rx={width * 0.4} ry={4} fill="#000" opacity="0.15" />

      <g filter="url(#bridgeShadow)">
        {/* Support arch underneath */}
        <path
          d={`M0 ${height} Q${width / 2} ${height * 0.2} ${width} ${height}`}
          stroke="url(#bridgeArchGradient)"
          strokeWidth="10"
          fill="none"
        />
        {/* Arch highlight */}
        <path
          d={`M2 ${height - 2} Q${width / 2} ${height * 0.25} ${width - 2} ${height - 2}`}
          stroke="#9a5a23"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />

        {/* Main deck */}
        <rect x="0" y={height * 0.4} width={width} height="10" fill="url(#bridgeWoodGradient)" />
        {/* Deck planks */}
        {[...Array(Math.floor(width / 10))].map((_, i) => (
          <g key={`plank-${i}`}>
            <line
              x1={i * 10}
              y1={height * 0.4}
              x2={i * 10}
              y2={height * 0.4 + 10}
              stroke="#4a2510"
              strokeWidth="0.5"
              opacity="0.4"
            />
          </g>
        ))}
        {/* Deck highlight */}
        <rect x="0" y={height * 0.4} width={width} height="2" fill="white" opacity="0.15" />
        {/* Deck shadow edge */}
        <rect x="0" y={height * 0.4 + 8} width={width} height="2" fill="#000" opacity="0.1" />

        {/* Top railing */}
        <rect x="0" y={height * 0.3 - 2} width={width} height="5" fill="url(#bridgeWoodGradient)" rx="2" />
        {/* Railing highlight */}
        <rect x="2" y={height * 0.3 - 1} width={width - 4} height="1.5" fill="white" opacity="0.15" rx="1" />

        {/* Railing posts */}
        {[...Array(Math.floor(width / 20))].map((_, i) => (
          <g key={`post-${i}`}>
            <rect
              x={i * 20 + 8}
              y={height * 0.3}
              width="5"
              height={height * 0.15}
              fill="url(#bridgeRailGradient)"
              rx="1"
            />
            {/* Post highlight */}
            <rect
              x={i * 20 + 9}
              y={height * 0.3 + 1}
              width="1.5"
              height={height * 0.13}
              fill="white"
              opacity="0.2"
            />
            {/* Post cap */}
            <ellipse
              cx={i * 20 + 10.5}
              cy={height * 0.3}
              rx="3.5"
              ry="1.5"
              fill="#9a5a23"
            />
          </g>
        ))}

        {/* Decorative rope between posts */}
        {[...Array(Math.floor(width / 20) - 1)].map((_, i) => (
          <path
            key={`rope-${i}`}
            d={`M${i * 20 + 13} ${height * 0.35} Q${i * 20 + 23} ${height * 0.42} ${i * 20 + 28} ${height * 0.35}`}
            stroke="url(#bridgeRopeGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        ))}

        {/* Support beams under deck */}
        <line x1="10" y1={height * 0.5} x2={width / 2} y2={height * 0.75} stroke={color} strokeWidth="4" />
        <line x1={width - 10} y1={height * 0.5} x2={width / 2} y2={height * 0.75} stroke={color} strokeWidth="4" />
      </g>
    </svg>
  );
}
