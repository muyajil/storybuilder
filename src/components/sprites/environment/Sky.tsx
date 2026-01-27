/**
 * Sky Sprite Component
 * Enhanced with layered gradients, atmospheric depth, and subtle cloud wisps
 */

import type { BackgroundProps } from '../types';

export function Sky({ width = 800, height = 300, children }: BackgroundProps) {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width,
      height,
      background: 'linear-gradient(to bottom, #4A90C2 0%, #6BB3E0 25%, #87CEEB 50%, #B0E0F0 75%, #E0F6FF 100%)',
      overflow: 'hidden',
    }}>
      {/* Atmospheric layers */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* High altitude haze */}
          <linearGradient id="skyUpperHaze" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6090B0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6090B0" stopOpacity="0" />
          </linearGradient>

          {/* Horizon glow */}
          <linearGradient id="skyHorizonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFAF0" stopOpacity="0" />
            <stop offset="70%" stopColor="#FFFAF0" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FFF8E8" stopOpacity="0.3" />
          </linearGradient>

          {/* Wisp cloud gradient */}
          <linearGradient id="skyWispGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="30%" stopColor="white" stopOpacity="0.3" />
            <stop offset="70%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          {/* Soft cirrus cloud */}
          <filter id="skyCirrusBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Upper atmosphere haze */}
        <rect width={width} height={height * 0.4} fill="url(#skyUpperHaze)" />

        {/* Horizon glow layer */}
        <rect y={height * 0.5} width={width} height={height * 0.5} fill="url(#skyHorizonGlow)" />

        {/* Cirrus cloud wisps */}
        <g filter="url(#skyCirrusBlur)" opacity="0.4">
          <path
            d={`M${width * 0.1} ${height * 0.15} Q${width * 0.2} ${height * 0.12} ${width * 0.35} ${height * 0.18}`}
            stroke="white"
            strokeWidth="8"
            fill="none"
          />
          <path
            d={`M${width * 0.5} ${height * 0.1} Q${width * 0.65} ${height * 0.08} ${width * 0.8} ${height * 0.12}`}
            stroke="white"
            strokeWidth="6"
            fill="none"
          />
          <path
            d={`M${width * 0.3} ${height * 0.25} Q${width * 0.45} ${height * 0.22} ${width * 0.55} ${height * 0.28}`}
            stroke="white"
            strokeWidth="5"
            fill="none"
          />
        </g>

        {/* Wispy streaks */}
        <ellipse
          cx={width * 0.2}
          cy={height * 0.2}
          rx={width * 0.15}
          ry={height * 0.02}
          fill="url(#skyWispGradient)"
          opacity="0.3"
        />
        <ellipse
          cx={width * 0.7}
          cy={height * 0.15}
          rx={width * 0.12}
          ry={height * 0.015}
          fill="url(#skyWispGradient)"
          opacity="0.25"
        />
        <ellipse
          cx={width * 0.5}
          cy={height * 0.3}
          rx={width * 0.1}
          ry={height * 0.012}
          fill="url(#skyWispGradient)"
          opacity="0.2"
        />

        {/* Subtle light rays from horizon */}
        <g opacity="0.08">
          {[...Array(5)].map((_, i) => (
            <polygon
              key={i}
              points={`${width * 0.3 + i * width * 0.1},${height} ${width * 0.32 + i * width * 0.1},${height} ${width * 0.35 + i * width * 0.08},${height * 0.5}`}
              fill="white"
            />
          ))}
        </g>
      </svg>

      {/* Atmospheric depth overlay at top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '20%',
          background: 'linear-gradient(to bottom, rgba(70, 120, 170, 0.15), transparent)',
          pointerEvents: 'none',
        }}
      />

      {children}
    </div>
  );
}
