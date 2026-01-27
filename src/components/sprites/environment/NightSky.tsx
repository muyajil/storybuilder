/**
 * NightSky Sprite Component
 * Enhanced with layered depth, twinkling stars, nebula effects, and atmospheric gradients
 */

import type { BackgroundProps } from '../types';

export function NightSky({ width = 800, height = 300, children }: BackgroundProps) {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width,
      height,
      background: 'linear-gradient(to bottom, #050510 0%, #0a0a2e 25%, #151545 50%, #1e1e5a 75%, #2a2a6e 100%)',
      overflow: 'hidden',
    }}>
      {/* Nebula/galaxy effect layer */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <radialGradient id="nightSkyNebula1" cx="30%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#4a2080" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#2a1060" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1a0a40" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nightSkyNebula2" cx="70%" cy="30%" r="40%">
            <stop offset="0%" stopColor="#204080" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#102050" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#0a1030" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nightSkyStarGlow">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <filter id="nightSkyBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
        </defs>

        {/* Nebula patches */}
        <ellipse cx={width * 0.3} cy={height * 0.4} rx={width * 0.25} ry={height * 0.35} fill="url(#nightSkyNebula1)" />
        <ellipse cx={width * 0.7} cy={height * 0.3} rx={width * 0.2} ry={height * 0.3} fill="url(#nightSkyNebula2)" />

        {/* Background dim stars layer */}
        {[...Array(50)].map((_, i) => (
          <circle
            key={`bg-${i}`}
            cx={(i * 67 + 11) % width}
            cy={(i * 41 + 7) % height}
            r={0.5 + (i % 2) * 0.5}
            fill="white"
            opacity={0.2 + (i % 4) * 0.05}
          />
        ))}

        {/* Medium brightness stars */}
        {[...Array(30)].map((_, i) => (
          <circle
            key={`med-${i}`}
            cx={(i * 89 + 23) % width}
            cy={(i * 53 + 13) % height}
            r={1 + (i % 3) * 0.5}
            fill="white"
            opacity={0.4 + (i % 5) * 0.1}
          />
        ))}

        {/* Bright stars with glow */}
        {[...Array(12)].map((_, i) => (
          <g key={`bright-${i}`}>
            <circle
              cx={(i * 127 + 37) % width}
              cy={(i * 71 + 19) % height}
              r={3 + (i % 2)}
              fill="url(#nightSkyStarGlow)"
              filter="url(#nightSkyBlur)"
            />
            <circle
              cx={(i * 127 + 37) % width}
              cy={(i * 71 + 19) % height}
              r={1.5 + (i % 2) * 0.5}
              fill="white"
            />
          </g>
        ))}

        {/* Twinkling star crosses */}
        {[...Array(6)].map((_, i) => {
          const cx = (i * 157 + 47) % width;
          const cy = (i * 83 + 29) % height;
          const size = 4 + (i % 3) * 2;
          return (
            <g key={`twinkle-${i}`} opacity={0.6 + (i % 4) * 0.1}>
              <line x1={cx - size} y1={cy} x2={cx + size} y2={cy} stroke="white" strokeWidth="0.5" />
              <line x1={cx} y1={cy - size} x2={cx} y2={cy + size} stroke="white" strokeWidth="0.5" />
              <circle cx={cx} cy={cy} r={1.5} fill="white" />
            </g>
          );
        })}
      </svg>

      {/* Atmospheric haze at horizon */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '30%',
          background: 'linear-gradient(to top, rgba(60, 60, 120, 0.15), transparent)',
          pointerEvents: 'none',
        }}
      />

      {children}
    </div>
  );
}
