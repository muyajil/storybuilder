/**
 * Snow Sprite Component
 * Enhanced with texture, sparkles, footprint impressions, and depth
 */

import type { GroundProps } from '../types';

export function Snow({ width = 800, height = 100 }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      overflow: 'hidden',
    }}>
      {/* Base snow gradient with subtle blue tones */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8FAFF 30%, #F0F5FF 60%, #E8F0FF 100%)',
      }} />

      {/* Snow texture and details */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* Snow drift shadow */}
          <linearGradient id="snowDriftGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D0E0F0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D0E0F0" stopOpacity="0" />
          </linearGradient>

          {/* Sparkle gradient */}
          <radialGradient id="snowSparkleGradient">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* Ice crystal pattern */}
          <pattern id="snowCrystalPattern" patternUnits="userSpaceOnUse" width="30" height="30">
            <rect width="30" height="30" fill="transparent" />
            <circle cx="8" cy="8" r="0.5" fill="#E0E8F0" opacity="0.5" />
            <circle cx="22" cy="12" r="0.4" fill="#D8E4F0" opacity="0.4" />
            <circle cx="15" cy="22" r="0.6" fill="#E0E8F0" opacity="0.5" />
            <circle cx="5" cy="25" r="0.3" fill="#D8E4F0" opacity="0.4" />
            <circle cx="28" cy="5" r="0.4" fill="#E0E8F0" opacity="0.5" />
          </pattern>

          {/* Blue shadow for depth */}
          <linearGradient id="snowShadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B8D0E8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#B8D0E8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Crystal texture overlay */}
        <rect width={width} height={height} fill="url(#snowCrystalPattern)" />

        {/* Snow drift waves */}
        {[...Array(4)].map((_, i) => (
          <path
            key={`drift-${i}`}
            d={`M${i * width / 4} ${height * 0.2} Q${width / 8 + i * width / 4} ${height * 0.05 + i * 3} ${width / 4 + i * width / 4} ${height * 0.25}`}
            fill="none"
            stroke="url(#snowDriftGradient)"
            strokeWidth="20"
          />
        ))}

        {/* Subtle shadows for depth */}
        {[...Array(Math.floor(width / 100))].map((_, i) => (
          <ellipse
            key={`shadow-${i}`}
            cx={50 + i * 100 + (i % 3) * 20}
            cy={height * 0.5 + (i % 4) * 10}
            rx={15 + (i % 3) * 5}
            ry={3 + (i % 2) * 2}
            fill="url(#snowShadowGradient)"
          />
        ))}

        {/* Sparkle highlights */}
        {[...Array(Math.floor(width / 50))].map((_, i) => (
          <g key={`sparkle-${i}`}>
            <circle
              cx={25 + i * 50 + (i % 5) * 10}
              cy={height * 0.3 + (i % 6) * 10}
              r={1.5 + (i % 2)}
              fill="url(#snowSparkleGradient)"
            />
            {/* Cross sparkle for bright spots */}
            {i % 3 === 0 && (
              <g opacity="0.8">
                <line
                  x1={25 + i * 50 + (i % 5) * 10 - 3}
                  y1={height * 0.3 + (i % 6) * 10}
                  x2={25 + i * 50 + (i % 5) * 10 + 3}
                  y2={height * 0.3 + (i % 6) * 10}
                  stroke="white"
                  strokeWidth="0.5"
                />
                <line
                  x1={25 + i * 50 + (i % 5) * 10}
                  y1={height * 0.3 + (i % 6) * 10 - 3}
                  x2={25 + i * 50 + (i % 5) * 10}
                  y2={height * 0.3 + (i % 6) * 10 + 3}
                  stroke="white"
                  strokeWidth="0.5"
                />
              </g>
            )}
          </g>
        ))}

        {/* Footprint impressions (subtle) */}
        <ellipse cx={width * 0.25} cy={height * 0.65} rx="6" ry="10" fill="#D8E4F0" opacity="0.2" />
        <ellipse cx={width * 0.25 + 15} cy={height * 0.6} rx="6" ry="10" fill="#D8E4F0" opacity="0.15" />
        <ellipse cx={width * 0.7} cy={height * 0.7} rx="6" ry="10" fill="#D8E4F0" opacity="0.2" />
        <ellipse cx={width * 0.7 + 15} cy={height * 0.65} rx="6" ry="10" fill="#D8E4F0" opacity="0.15" />

        {/* Small ice chunks/snow clumps */}
        {[...Array(Math.floor(width / 120))].map((_, i) => (
          <ellipse
            key={`clump-${i}`}
            cx={60 + i * 120 + (i % 3) * 30}
            cy={height * 0.8 + (i % 3) * 5}
            rx={4 + (i % 2) * 2}
            ry={2 + (i % 2)}
            fill="#F0F8FF"
            stroke="#E0E8F0"
            strokeWidth="0.5"
          />
        ))}
      </svg>

      {/* Top edge soft highlight */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '5px',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)',
      }} />

      {/* Subtle blue tint overlay for cold feeling */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(200, 220, 255, 0.1), rgba(180, 200, 240, 0.15))',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
