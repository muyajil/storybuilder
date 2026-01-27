/**
 * Path Sprite Component
 * Enhanced with dirt texture, scattered stones, grass edges, and depth
 */

import type { GroundProps } from '../types';

export function Path({ width = 800, height = 60, y = 440, color = '#8B4513' }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      top: y,
      left: 0,
      width,
      height,
      overflow: 'hidden',
    }}>
      {/* Base path with rich gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(to bottom, ${color} 0%, #7A3A10 30%, #654321 70%, #4A2A10 100%)`,
      }} />

      {/* Dirt texture overlay */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* Scattered dirt pattern */}
          <pattern id="pathDirtTexture" patternUnits="userSpaceOnUse" width="40" height="20">
            <circle cx="5" cy="8" r="1.5" fill="#5A3010" opacity="0.4" />
            <circle cx="18" cy="4" r="1" fill="#6A4020" opacity="0.3" />
            <circle cx="28" cy="12" r="2" fill="#4A2010" opacity="0.35" />
            <circle cx="35" cy="6" r="1" fill="#5A3515" opacity="0.3" />
            <ellipse cx="12" cy="15" rx="3" ry="1.5" fill="#5A3515" opacity="0.25" />
          </pattern>

          {/* Stone gradient */}
          <radialGradient id="pathStoneGrad" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#909090" />
            <stop offset="70%" stopColor="#707070" />
            <stop offset="100%" stopColor="#505050" />
          </radialGradient>
        </defs>

        {/* Texture overlay */}
        <rect width={width} height={height} fill="url(#pathDirtTexture)" />

        {/* Scattered small stones */}
        {[...Array(Math.floor(width / 50))].map((_, i) => (
          <g key={i}>
            <ellipse
              cx={20 + i * 50 + (i % 3) * 15}
              cy={15 + (i % 4) * 10}
              rx={3 + (i % 3)}
              ry={2 + (i % 2)}
              fill="url(#pathStoneGrad)"
              opacity={0.6}
            />
            <ellipse
              cx={35 + i * 50 + (i % 2) * 10}
              cy={40 + (i % 3) * 5}
              rx={2 + (i % 2)}
              ry={1.5 + (i % 2) * 0.5}
              fill="url(#pathStoneGrad)"
              opacity={0.5}
            />
          </g>
        ))}

        {/* Larger accent stones */}
        {[...Array(Math.floor(width / 150))].map((_, i) => (
          <ellipse
            key={`lg-${i}`}
            cx={80 + i * 150 + (i % 2) * 30}
            cy={25 + (i % 3) * 12}
            rx={6 + (i % 3) * 2}
            ry={4 + (i % 2) * 2}
            fill="url(#pathStoneGrad)"
            opacity={0.7}
          />
        ))}

        {/* Grass tufts at edges */}
        {[...Array(Math.floor(width / 30))].map((_, i) => (
          <g key={`grass-${i}`}>
            {/* Top edge grass */}
            <path
              d={`M${i * 30 + 5} 0 Q${i * 30 + 7} -5 ${i * 30 + 8} 0`}
              stroke="#3A7A3A"
              strokeWidth="2"
              fill="none"
            />
            <path
              d={`M${i * 30 + 10} 0 Q${i * 30 + 11} -7 ${i * 30 + 13} 0`}
              stroke="#2A6A2A"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Bottom edge grass */}
            <path
              d={`M${i * 30 + 15} ${height} Q${i * 30 + 17} ${height + 5} ${i * 30 + 18} ${height}`}
              stroke="#3A7A3A"
              strokeWidth="2"
              fill="none"
            />
          </g>
        ))}
      </svg>

      {/* Top edge shadow/depth */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '8px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)',
      }} />

      {/* Worn center line (subtle) */}
      <div style={{
        position: 'absolute',
        top: height * 0.4,
        left: 0,
        width: '100%',
        height: '10px',
        background: 'linear-gradient(to bottom, transparent, rgba(150,100,50,0.2), transparent)',
      }} />
    </div>
  );
}
