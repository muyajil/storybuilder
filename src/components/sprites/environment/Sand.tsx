/**
 * Sand Sprite Component
 * Enhanced with natural texture, scattered particles, dunes, and depth
 */

import type { GroundProps } from '../types';

export function Sand({ width = 800, height = 100, color = '#F4A460' }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      overflow: 'hidden',
    }}>
      {/* Base sand gradient with warm tones */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(to bottom, ${color} 0%, #E8B87A 30%, #DEB887 60%, #D4A574 100%)`,
      }} />

      {/* Sand texture and details */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* Sand grain pattern */}
          <pattern id="sandGrainPattern" patternUnits="userSpaceOnUse" width="20" height="20">
            <rect width="20" height="20" fill="transparent" />
            <circle cx="3" cy="5" r="0.8" fill="#C49A6C" opacity="0.4" />
            <circle cx="10" cy="3" r="0.5" fill="#D4AA7C" opacity="0.3" />
            <circle cx="17" cy="8" r="0.6" fill="#B48A5C" opacity="0.35" />
            <circle cx="6" cy="12" r="0.7" fill="#C49A6C" opacity="0.3" />
            <circle cx="14" cy="15" r="0.5" fill="#D4AA7C" opacity="0.4" />
            <circle cx="2" cy="18" r="0.6" fill="#B48A5C" opacity="0.35" />
            <circle cx="18" cy="17" r="0.4" fill="#C49A6C" opacity="0.3" />
          </pattern>

          {/* Dune shadow gradient */}
          <linearGradient id="sandDuneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C49050" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C49050" stopOpacity="0" />
          </linearGradient>

          {/* Shell/pebble gradient */}
          <radialGradient id="sandPebbleGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#F5E6D3" />
            <stop offset="70%" stopColor="#E8D5C0" />
            <stop offset="100%" stopColor="#D4C4B0" />
          </radialGradient>
        </defs>

        {/* Sand grain texture overlay */}
        <rect width={width} height={height} fill="url(#sandGrainPattern)" />

        {/* Gentle dune waves */}
        {[...Array(3)].map((_, i) => (
          <path
            key={`dune-${i}`}
            d={`M${i * width / 3} ${height * 0.3} Q${width / 6 + i * width / 3} ${height * 0.15 + i * 5} ${width / 3 + i * width / 3} ${height * 0.35}`}
            fill="none"
            stroke="url(#sandDuneGradient)"
            strokeWidth="15"
          />
        ))}

        {/* Wind ripple lines */}
        {[...Array(Math.floor(width / 60))].map((_, i) => (
          <path
            key={`ripple-${i}`}
            d={`M${i * 60 + 10} ${height * 0.5 + (i % 3) * 8} Q${i * 60 + 30} ${height * 0.45 + (i % 3) * 8} ${i * 60 + 50} ${height * 0.5 + (i % 3) * 8}`}
            stroke="#C49050"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
          />
        ))}

        {/* Small shells and pebbles */}
        {[...Array(Math.floor(width / 100))].map((_, i) => (
          <g key={`shell-${i}`}>
            <ellipse
              cx={50 + i * 100 + (i % 3) * 20}
              cy={height * 0.6 + (i % 4) * 10}
              rx={3 + (i % 2)}
              ry={2 + (i % 2) * 0.5}
              fill="url(#sandPebbleGradient)"
              opacity="0.7"
            />
          </g>
        ))}

        {/* Tiny pebbles scattered */}
        {[...Array(Math.floor(width / 40))].map((_, i) => (
          <circle
            key={`pebble-${i}`}
            cx={20 + i * 40 + (i % 5) * 8}
            cy={height * 0.4 + (i % 6) * 10}
            r={1 + (i % 3) * 0.5}
            fill={i % 2 === 0 ? '#C9B89D' : '#B8A78C'}
            opacity={0.4 + (i % 3) * 0.1}
          />
        ))}

        {/* Sparkle highlights (wet sand or glittery minerals) */}
        {[...Array(Math.floor(width / 80))].map((_, i) => (
          <circle
            key={`sparkle-${i}`}
            cx={40 + i * 80 + (i % 4) * 15}
            cy={height * 0.3 + (i % 5) * 12}
            r={0.8}
            fill="white"
            opacity={0.3 + (i % 3) * 0.1}
          />
        ))}

        {/* Footprint impressions (subtle) */}
        <ellipse cx={width * 0.3} cy={height * 0.7} rx="8" ry="4" fill="#C49050" opacity="0.15" />
        <ellipse cx={width * 0.3 + 20} cy={height * 0.65} rx="8" ry="4" fill="#C49050" opacity="0.12" />

        {/* Edge gradient for blending */}
        <rect
          x="0"
          y="0"
          width={width}
          height="10"
          fill="url(#sandDuneGradient)"
          transform="rotate(180)"
          style={{ transformOrigin: `${width / 2}px 5px` }}
        />
      </svg>

      {/* Top edge highlight */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)',
      }} />
    </div>
  );
}
