/**
 * StoneFloor Sprite Component
 * Enhanced with flagstone texture, mortar lines, and weathered details
 */

import type { GroundProps } from '../types';

export function StoneFloor({ width = 800, height = 100, color = '#808080' }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      overflow: 'hidden',
    }}>
      {/* Base stone gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(to bottom, ${color} 0%, #707070 30%, #606060 70%, #505050 100%)`,
      }} />

      {/* Stone pattern and texture */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* Individual stone gradient */}
          <linearGradient id="stoneFloorStoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#909090" />
            <stop offset="30%" stopColor={color} />
            <stop offset="70%" stopColor="#707070" />
            <stop offset="100%" stopColor="#606060" />
          </linearGradient>

          {/* Mortar gradient */}
          <linearGradient id="stoneFloorMortarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#505050" />
            <stop offset="50%" stopColor="#404040" />
            <stop offset="100%" stopColor="#303030" />
          </linearGradient>

          {/* Stone texture pattern */}
          <pattern id="stoneFloorTexturePattern" patternUnits="userSpaceOnUse" width="20" height="20">
            <rect width="20" height="20" fill="transparent" />
            <circle cx="5" cy="5" r="1" fill="#555" opacity="0.3" />
            <circle cx="15" cy="8" r="0.8" fill="#666" opacity="0.25" />
            <circle cx="8" cy="15" r="1.2" fill="#555" opacity="0.3" />
            <circle cx="18" cy="18" r="0.6" fill="#666" opacity="0.2" />
          </pattern>

          {/* Highlight gradient */}
          <linearGradient id="stoneFloorHighlightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.15" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Mortar base */}
        <rect width={width} height={height} fill="url(#stoneFloorMortarGrad)" />

        {/* Stone tiles - alternating pattern */}
        {[...Array(Math.ceil(width / 60))].map((_, col) => (
          [...Array(Math.ceil(height / 40))].map((_, row) => {
            const stoneWidth = 55 + (col % 3) * 5 - (row % 2) * 10;
            const stoneHeight = 35 + (row % 2) * 5;
            const xOffset = (row % 2) * 30;
            const x = col * 60 + xOffset + 2;
            const y = row * 40 + 2;

            return (
              <g key={`stone-${col}-${row}`}>
                {/* Stone shadow */}
                <rect
                  x={x + 2}
                  y={y + 2}
                  width={stoneWidth}
                  height={stoneHeight}
                  fill="rgba(0,0,0,0.2)"
                  rx="2"
                />
                {/* Main stone */}
                <rect
                  x={x}
                  y={y}
                  width={stoneWidth}
                  height={stoneHeight}
                  fill="url(#stoneFloorStoneGrad)"
                  rx="2"
                />
                {/* Stone texture */}
                <rect
                  x={x}
                  y={y}
                  width={stoneWidth}
                  height={stoneHeight}
                  fill="url(#stoneFloorTexturePattern)"
                  rx="2"
                />
                {/* Stone highlight */}
                <rect
                  x={x}
                  y={y}
                  width={stoneWidth}
                  height={stoneHeight * 0.3}
                  fill="url(#stoneFloorHighlightGrad)"
                  rx="2"
                />
                {/* Crack details */}
                {(col + row) % 4 === 0 && (
                  <path
                    d={`M${x + stoneWidth * 0.3} ${y + 2} Q${x + stoneWidth * 0.4} ${y + stoneHeight * 0.5} ${x + stoneWidth * 0.35} ${y + stoneHeight - 2}`}
                    stroke="#505050"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.5"
                  />
                )}
              </g>
            );
          })
        ))}

        {/* Moss/lichen patches */}
        {[...Array(Math.floor(width / 150))].map((_, i) => (
          <ellipse
            key={`moss-${i}`}
            cx={75 + i * 150 + (i % 3) * 30}
            cy={height * 0.6 + (i % 4) * 10}
            rx={4 + (i % 2) * 2}
            ry={2 + (i % 2)}
            fill="#4A6A4A"
            opacity={0.2 + (i % 3) * 0.05}
          />
        ))}

        {/* Scattered pebbles */}
        {[...Array(Math.floor(width / 80))].map((_, i) => (
          <circle
            key={`pebble-${i}`}
            cx={40 + i * 80 + (i % 5) * 15}
            cy={height * 0.4 + (i % 6) * 10}
            r={1 + (i % 3) * 0.5}
            fill={i % 2 === 0 ? '#606060' : '#505050'}
            opacity={0.5}
          />
        ))}

        {/* Wear marks */}
        {[...Array(Math.floor(width / 200))].map((_, i) => (
          <ellipse
            key={`wear-${i}`}
            cx={100 + i * 200}
            cy={height * 0.5}
            rx={15 + (i % 2) * 10}
            ry={3 + (i % 2) * 2}
            fill="#555555"
            opacity="0.15"
          />
        ))}
      </svg>

      {/* Top edge shadow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '8px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)',
      }} />
    </div>
  );
}
