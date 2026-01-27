/**
 * Grass Sprite Component
 * Enhanced with layered depth and natural textures
 */

import type { GroundProps } from '../types';

export function Grass({ width = 800, height = 100, color = '#228B22' }: GroundProps) {
  // Create color variations
  const darkGreen = '#1a6b1a';
  const lighterGreen = '#2e8b2e';
  const lightGreen = '#32CD32';
  const highlight = '#90EE90';

  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      overflow: 'hidden',
    }}>
      {/* Base gradient layer */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(to bottom,
          ${color} 0%,
          ${lighterGreen} 20%,
          ${darkGreen} 60%,
          #155015 100%)`,
      }} />

      {/* Texture overlay - subtle variations */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(ellipse at 10% 30%, ${lightGreen}33 0%, transparent 30%),
          radial-gradient(ellipse at 30% 60%, ${darkGreen}44 0%, transparent 25%),
          radial-gradient(ellipse at 50% 20%, ${highlight}22 0%, transparent 35%),
          radial-gradient(ellipse at 70% 50%, ${lightGreen}33 0%, transparent 28%),
          radial-gradient(ellipse at 90% 40%, ${darkGreen}44 0%, transparent 30%)
        `,
        pointerEvents: 'none',
      }} />

      {/* SVG grass blade details */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Grass blade gradient */}
          <linearGradient id="grassBladeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={darkGreen} />
            <stop offset="50%" stopColor={color} />
            <stop offset="100%" stopColor={lightGreen} />
          </linearGradient>

          {/* Highlight blade gradient */}
          <linearGradient id="grassHighlightBlade" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={highlight} />
          </linearGradient>
        </defs>

        {/* Back layer of grass blades */}
        <g opacity="0.4">
          {[...Array(Math.floor(width / 15))].map((_, i) => (
            <path
              key={`back-${i}`}
              d={`M${i * 15 + 5} ${height} Q${i * 15 + 3} ${height * 0.5} ${i * 15 + 7} ${height * 0.15}`}
              stroke={darkGreen}
              strokeWidth="2"
              fill="none"
            />
          ))}
        </g>

        {/* Middle layer of grass blades */}
        <g opacity="0.6">
          {[...Array(Math.floor(width / 12))].map((_, i) => (
            <path
              key={`mid-${i}`}
              d={`M${i * 12 + 3} ${height} Q${i * 12 + 6} ${height * 0.4} ${i * 12 + 2} ${height * 0.1}`}
              stroke="url(#grassBladeGradient)"
              strokeWidth="1.5"
              fill="none"
            />
          ))}
        </g>

        {/* Front layer of grass blades */}
        <g opacity="0.8">
          {[...Array(Math.floor(width / 10))].map((_, i) => (
            <path
              key={`front-${i}`}
              d={`M${i * 10 + 2} ${height} Q${i * 10 + (i % 2 === 0 ? 4 : 0)} ${height * 0.35} ${i * 10 + (i % 2 === 0 ? 1 : 5)} ${height * 0.05}`}
              stroke="url(#grassBladeGradient)"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </g>

        {/* Highlight blades scattered */}
        <g opacity="0.5">
          {[...Array(Math.floor(width / 40))].map((_, i) => (
            <path
              key={`highlight-${i}`}
              d={`M${i * 40 + 20} ${height} Q${i * 40 + 22} ${height * 0.3} ${i * 40 + 18} ${height * 0.02}`}
              stroke="url(#grassHighlightBlade)"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </g>
      </svg>

      {/* Top edge highlight for grass line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: `linear-gradient(to right,
          ${lightGreen} 0%,
          ${color} 25%,
          ${lightGreen} 50%,
          ${color} 75%,
          ${lightGreen} 100%)`,
        opacity: 0.6,
      }} />

      {/* Subtle top shadow for depth */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '15%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Bottom darker gradient */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '30%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
