/**
 * Rain Sprite Component
 * Enhanced with varied raindrop sizes, splash effects, and atmospheric depth
 */

import type { ElementProps } from '../types';

export function Rain({ x = 0, y = 0, width = 200, height = 200 }: ElementProps & { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: 'absolute', left: x, top: y, pointerEvents: 'none' }}
    >
      <defs>
        {/* Rain drop gradient */}
        <linearGradient id="rainDropGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B0D4F1" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#4169E1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.8" />
        </linearGradient>

        {/* Heavy rain drop */}
        <linearGradient id="rainDropHeavy" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#4169E1" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.9" />
        </linearGradient>

        {/* Splash ripple gradient */}
        <radialGradient id="rainSplashGradient">
          <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4169E1" stopOpacity="0" />
        </radialGradient>

        {/* Mist effect */}
        <linearGradient id="rainMistGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" stopOpacity="0" />
          <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Atmospheric mist layer */}
      <rect width={width} height={height} fill="url(#rainMistGradient)" />

      {/* Background fine rain (distant) */}
      {[...Array(40)].map((_, i) => (
        <line
          key={`fine-${i}`}
          x1={(i * 29 + 7) % width}
          y1={(i * 17 + 3) % height}
          x2={(i * 29 + 7) % width + 1}
          y2={(i * 17 + 3) % height + 8}
          stroke="#87CEEB"
          strokeWidth="0.5"
          opacity={0.2 + (i % 3) * 0.05}
        />
      ))}

      {/* Medium rain drops */}
      {[...Array(30)].map((_, i) => (
        <line
          key={`med-${i}`}
          x1={(i * 37) % width}
          y1={(i * 23) % height}
          x2={(i * 37) % width + 2}
          y2={(i * 23) % height + 15}
          stroke="url(#rainDropGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity={0.5 + (i % 4) * 0.1}
        />
      ))}

      {/* Heavy rain drops (foreground) */}
      {[...Array(15)].map((_, i) => (
        <line
          key={`heavy-${i}`}
          x1={(i * 53 + 13) % width}
          y1={(i * 31 + 11) % height}
          x2={(i * 53 + 13) % width + 3}
          y2={(i * 31 + 11) % height + 22}
          stroke="url(#rainDropHeavy)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity={0.6 + (i % 3) * 0.1}
        />
      ))}

      {/* Splash effects at bottom */}
      {[...Array(8)].map((_, i) => (
        <g key={`splash-${i}`}>
          {/* Splash ring */}
          <ellipse
            cx={(i * 47 + 23) % width}
            cy={height - 5 - (i % 3) * 3}
            rx={4 + (i % 2) * 2}
            ry={1.5 + (i % 2)}
            fill="none"
            stroke="#87CEEB"
            strokeWidth="0.5"
            opacity={0.4}
          />
          {/* Inner splash */}
          <ellipse
            cx={(i * 47 + 23) % width}
            cy={height - 5 - (i % 3) * 3}
            rx={2 + (i % 2)}
            ry={0.8}
            fill="url(#rainSplashGradient)"
          />
          {/* Splash droplets */}
          <circle
            cx={(i * 47 + 20) % width}
            cy={height - 8 - (i % 3) * 3}
            r={0.8}
            fill="#87CEEB"
            opacity={0.5}
          />
          <circle
            cx={(i * 47 + 26) % width}
            cy={height - 7 - (i % 3) * 3}
            r={0.6}
            fill="#87CEEB"
            opacity={0.4}
          />
        </g>
      ))}

      {/* Diagonal streaks for wind effect */}
      {[...Array(10)].map((_, i) => (
        <line
          key={`streak-${i}`}
          x1={(i * 61 + 17) % width}
          y1={(i * 41 + 7) % height}
          x2={(i * 61 + 17) % width + 5}
          y2={(i * 41 + 7) % height + 30}
          stroke="#B0D4F1"
          strokeWidth="1"
          opacity={0.15}
        />
      ))}

      {/* Mist particles */}
      {[...Array(20)].map((_, i) => (
        <circle
          key={`mist-${i}`}
          cx={(i * 43 + 19) % width}
          cy={height - 20 + (i % 5) * 4}
          r={1 + (i % 3)}
          fill="#B0D4F1"
          opacity={0.1 + (i % 4) * 0.03}
        />
      ))}
    </svg>
  );
}
