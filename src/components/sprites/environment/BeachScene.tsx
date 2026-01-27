/**
 * BeachScene Sprite Component
 * Enhanced with sunset sky, layered waves, detailed sand textures, and tropical elements
 */

import type { SceneProps } from '../types';

export function BeachScene({ width = 800, height = 500, children }: SceneProps) {
  const uniqueId = 'beach';

  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* Sky gradient - warm tropical sunset */}
          <linearGradient id={`${uniqueId}-sky`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="20%" stopColor="#3d6a8a" />
            <stop offset="40%" stopColor="#5da3c4" />
            <stop offset="60%" stopColor="#87ceeb" />
            <stop offset="80%" stopColor="#b4e4f7" />
            <stop offset="100%" stopColor="#e8f8ff" />
          </linearGradient>

          {/* Sun gradient */}
          <radialGradient id={`${uniqueId}-sun`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffef0" />
            <stop offset="40%" stopColor="#fff59d" />
            <stop offset="70%" stopColor="#ffd54f" />
            <stop offset="100%" stopColor="#ffb300" />
          </radialGradient>

          {/* Sun glow */}
          <radialGradient id={`${uniqueId}-sun-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff8e1" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffecb3" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffe082" stopOpacity="0" />
          </radialGradient>

          {/* Cloud gradient */}
          <radialGradient id={`${uniqueId}-cloud`} cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f5f5f5" />
            <stop offset="100%" stopColor="#e8e8e8" />
          </radialGradient>

          {/* Ocean gradients - multiple layers */}
          <linearGradient id={`${uniqueId}-ocean-deep`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d47a1" />
            <stop offset="50%" stopColor="#1565c0" />
            <stop offset="100%" stopColor="#1976d2" />
          </linearGradient>

          <linearGradient id={`${uniqueId}-ocean-mid`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1976d2" />
            <stop offset="50%" stopColor="#2196f3" />
            <stop offset="100%" stopColor="#42a5f5" />
          </linearGradient>

          <linearGradient id={`${uniqueId}-ocean-shallow`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#42a5f5" />
            <stop offset="50%" stopColor="#64b5f6" />
            <stop offset="100%" stopColor="#90caf9" />
          </linearGradient>

          {/* Wave foam gradient */}
          <linearGradient id={`${uniqueId}-foam`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e3f2fd" />
            <stop offset="100%" stopColor="#bbdefb" stopOpacity="0.5" />
          </linearGradient>

          {/* Wet sand gradient */}
          <linearGradient id={`${uniqueId}-wet-sand`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a08060" />
            <stop offset="50%" stopColor="#b8956a" />
            <stop offset="100%" stopColor="#c4a070" />
          </linearGradient>

          {/* Dry sand gradient */}
          <linearGradient id={`${uniqueId}-dry-sand`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d4b896" />
            <stop offset="30%" stopColor="#e8d4b8" />
            <stop offset="60%" stopColor="#f5e6d3" />
            <stop offset="100%" stopColor="#faf0e4" />
          </linearGradient>

          {/* Palm tree trunk gradient */}
          <linearGradient id={`${uniqueId}-palm-trunk`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5d4037" />
            <stop offset="30%" stopColor="#8d6e63" />
            <stop offset="70%" stopColor="#6d4c41" />
            <stop offset="100%" stopColor="#4e342e" />
          </linearGradient>

          {/* Palm leaf gradient */}
          <linearGradient id={`${uniqueId}-palm-leaf`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e7d32" />
            <stop offset="50%" stopColor="#43a047" />
            <stop offset="100%" stopColor="#66bb6a" />
          </linearGradient>

          {/* Rock gradient */}
          <linearGradient id={`${uniqueId}-rock`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9e9e9e" />
            <stop offset="50%" stopColor="#757575" />
            <stop offset="100%" stopColor="#616161" />
          </linearGradient>

          {/* Seashell gradient */}
          <radialGradient id={`${uniqueId}-shell`} cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#fff8e1" />
            <stop offset="50%" stopColor="#ffe0b2" />
            <stop offset="100%" stopColor="#ffcc80" />
          </radialGradient>

          {/* Water shimmer pattern */}
          <pattern id={`${uniqueId}-water-shimmer`} x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
            <ellipse cx="30" cy="15" rx="25" ry="8" fill="#ffffff" opacity="0.15" />
          </pattern>

          {/* Sand texture pattern */}
          <pattern id={`${uniqueId}-sand-texture`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="0.5" fill="#c4a070" opacity="0.3" />
            <circle cx="15" cy="8" r="0.5" fill="#a08060" opacity="0.4" />
            <circle cx="10" cy="15" r="0.5" fill="#c4a070" opacity="0.3" />
            <circle cx="2" cy="18" r="0.4" fill="#b8956a" opacity="0.3" />
          </pattern>

          {/* Wave blur filter */}
          <filter id={`${uniqueId}-wave-blur`} x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>

          {/* Sun ray filter */}
          <filter id={`${uniqueId}-sun-blur`} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
        </defs>

        {/* Sky background */}
        <rect x="0" y="0" width={width} height={height * 0.55} fill={`url(#${uniqueId}-sky)`} />

        {/* Sun glow (behind sun) */}
        <circle
          cx={width - 100}
          cy={80}
          r={100}
          fill={`url(#${uniqueId}-sun-glow)`}
          filter={`url(#${uniqueId}-sun-blur)`}
        />

        {/* Sun */}
        <circle cx={width - 100} cy={80} r={45} fill={`url(#${uniqueId}-sun)`} />

        {/* Sun rays */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = width - 100 + Math.cos(angle) * 50;
          const y1 = 80 + Math.sin(angle) * 50;
          const x2 = width - 100 + Math.cos(angle) * 90;
          const y2 = 80 + Math.sin(angle) * 90;
          return (
            <line
              key={`ray-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#fff8e1"
              strokeWidth="2"
              opacity={0.3}
            />
          );
        })}

        {/* Clouds */}
        <g opacity="0.9">
          <ellipse cx={100} cy={50} rx={55} ry={28} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={135} cy={45} rx={45} ry={22} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={65} cy={55} rx={40} ry={20} fill={`url(#${uniqueId}-cloud)`} />
        </g>
        <g opacity="0.85">
          <ellipse cx={350} cy={75} rx={50} ry={25} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={385} cy={70} rx={40} ry={20} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={320} cy={80} rx={35} ry={18} fill={`url(#${uniqueId}-cloud)`} />
        </g>
        <g opacity="0.7">
          <ellipse cx={550} cy={55} rx={45} ry={22} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={580} cy={50} rx={35} ry={18} fill={`url(#${uniqueId}-cloud)`} />
        </g>

        {/* Distant island/horizon */}
        <ellipse
          cx={width * 0.15}
          cy={height * 0.48}
          rx={60}
          ry={15}
          fill="#4a7c59"
          opacity="0.5"
        />
        <ellipse
          cx={width * 0.15}
          cy={height * 0.47}
          rx={45}
          ry={25}
          fill="#5d8a66"
          opacity="0.5"
        />

        {/* Deep ocean */}
        <rect x="0" y={height * 0.45} width={width} height={height * 0.15} fill={`url(#${uniqueId}-ocean-deep)`} />

        {/* Mid ocean with wave pattern */}
        <path
          d={`M0,${height * 0.52}
              Q${width * 0.1},${height * 0.50} ${width * 0.2},${height * 0.52}
              Q${width * 0.3},${height * 0.54} ${width * 0.4},${height * 0.51}
              Q${width * 0.5},${height * 0.49} ${width * 0.6},${height * 0.52}
              Q${width * 0.75},${height * 0.55} ${width * 0.85},${height * 0.51}
              Q${width * 0.95},${height * 0.49} ${width},${height * 0.52}
              L${width},${height * 0.62} L0,${height * 0.62} Z`}
          fill={`url(#${uniqueId}-ocean-mid)`}
        />

        {/* Water shimmer overlay */}
        <rect
          x="0"
          y={height * 0.45}
          width={width}
          height={height * 0.2}
          fill={`url(#${uniqueId}-water-shimmer)`}
        />

        {/* Shallow water with waves */}
        <path
          d={`M0,${height * 0.58}
              Q${width * 0.08},${height * 0.56} ${width * 0.15},${height * 0.59}
              Q${width * 0.25},${height * 0.61} ${width * 0.35},${height * 0.57}
              Q${width * 0.45},${height * 0.55} ${width * 0.55},${height * 0.58}
              Q${width * 0.68},${height * 0.62} ${width * 0.8},${height * 0.57}
              Q${width * 0.9},${height * 0.55} ${width},${height * 0.58}
              L${width},${height * 0.68} L0,${height * 0.68} Z`}
          fill={`url(#${uniqueId}-ocean-shallow)`}
        />

        {/* Wave foam lines */}
        <path
          d={`M0,${height * 0.63}
              Q${width * 0.1},${height * 0.61} ${width * 0.2},${height * 0.64}
              Q${width * 0.35},${height * 0.67} ${width * 0.5},${height * 0.62}
              Q${width * 0.65},${height * 0.59} ${width * 0.8},${height * 0.64}
              Q${width * 0.9},${height * 0.67} ${width},${height * 0.63}`}
          stroke={`url(#${uniqueId}-foam)`}
          strokeWidth="8"
          fill="none"
          opacity="0.9"
        />

        <path
          d={`M0,${height * 0.66}
              Q${width * 0.12},${height * 0.64} ${width * 0.25},${height * 0.67}
              Q${width * 0.4},${height * 0.70} ${width * 0.55},${height * 0.65}
              Q${width * 0.7},${height * 0.62} ${width * 0.85},${height * 0.67}
              Q${width * 0.95},${height * 0.70} ${width},${height * 0.66}`}
          stroke="#ffffff"
          strokeWidth="4"
          fill="none"
          opacity="0.7"
        />

        {/* Wet sand area */}
        <path
          d={`M0,${height * 0.66}
              Q${width * 0.15},${height * 0.68} ${width * 0.3},${height * 0.66}
              Q${width * 0.5},${height * 0.64} ${width * 0.7},${height * 0.67}
              Q${width * 0.85},${height * 0.69} ${width},${height * 0.66}
              L${width},${height * 0.72} L0,${height * 0.72} Z`}
          fill={`url(#${uniqueId}-wet-sand)`}
        />

        {/* Dry sand main area */}
        <path
          d={`M0,${height * 0.70}
              Q${width * 0.2},${height * 0.72} ${width * 0.4},${height * 0.70}
              Q${width * 0.6},${height * 0.68} ${width * 0.8},${height * 0.71}
              Q${width * 0.9},${height * 0.73} ${width},${height * 0.70}
              L${width},${height} L0,${height} Z`}
          fill={`url(#${uniqueId}-dry-sand)`}
        />

        {/* Sand texture overlay */}
        <rect
          x="0"
          y={height * 0.68}
          width={width}
          height={height * 0.32}
          fill={`url(#${uniqueId}-sand-texture)`}
        />

        {/* Palm tree (left side) */}
        <g transform={`translate(${width * 0.08}, ${height * 0.72})`}>
          {/* Trunk */}
          <path
            d="M0,0 Q5,-30 -5,-60 Q0,-90 10,-120 Q15,-150 5,-180"
            stroke={`url(#${uniqueId}-palm-trunk)`}
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
          {/* Trunk segments */}
          {[...Array(8)].map((_, i) => (
            <ellipse
              key={`trunk-seg-${i}`}
              cx={i % 2 === 0 ? 2 : -2}
              cy={-20 - i * 22}
              rx={10}
              ry={4}
              fill="none"
              stroke="#4e342e"
              strokeWidth="1"
              opacity="0.4"
            />
          ))}
          {/* Palm fronds */}
          <g transform="translate(5, -180)">
            <path d="M0,0 Q-60,-20 -100,10" stroke={`url(#${uniqueId}-palm-leaf)`} strokeWidth="6" fill="none" />
            <path d="M0,0 Q-50,-40 -80,-20" stroke={`url(#${uniqueId}-palm-leaf)`} strokeWidth="6" fill="none" />
            <path d="M0,0 Q-30,-50 -40,-30" stroke={`url(#${uniqueId}-palm-leaf)`} strokeWidth="5" fill="none" />
            <path d="M0,0 Q60,-20 100,10" stroke={`url(#${uniqueId}-palm-leaf)`} strokeWidth="6" fill="none" />
            <path d="M0,0 Q50,-40 80,-20" stroke={`url(#${uniqueId}-palm-leaf)`} strokeWidth="6" fill="none" />
            <path d="M0,0 Q30,-50 40,-30" stroke={`url(#${uniqueId}-palm-leaf)`} strokeWidth="5" fill="none" />
            <path d="M0,0 Q0,-55 10,-70" stroke={`url(#${uniqueId}-palm-leaf)`} strokeWidth="5" fill="none" />
            {/* Coconuts */}
            <circle cx="-8" cy="8" r={6} fill="#5d4037" />
            <circle cx="8" cy="10" r={6} fill="#6d4c41" />
            <circle cx="0" cy="15" r={5} fill="#5d4037" />
          </g>
        </g>

        {/* Rocks with detail */}
        <g transform={`translate(${width * 0.12}, ${height * 0.8})`}>
          <ellipse cx="0" cy="15" rx="40" ry="12" fill="#5d5d5d" opacity="0.3" />
          <ellipse cx="5" cy="8" rx="35" ry="20" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="-5" cy="0" rx="28" ry="16" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="12" cy="-5" rx="18" ry="12" fill="#8e8e8e" opacity="0.6" />
        </g>

        <g transform={`translate(${width * 0.75}, ${height * 0.82})`}>
          <ellipse cx="0" cy="10" rx="30" ry="8" fill="#5d5d5d" opacity="0.3" />
          <ellipse cx="0" cy="5" rx="25" ry="15" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="5" cy="0" rx="20" ry="12" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="-5" cy="-3" rx="12" ry="8" fill="#8e8e8e" opacity="0.5" />
        </g>

        {/* Seashells scattered on sand */}
        <g transform={`translate(${width * 0.3}, ${height * 0.85})`}>
          <ellipse cx="0" cy="0" rx="8" ry="6" fill={`url(#${uniqueId}-shell)`} />
          <path d="M-6,0 Q0,-4 6,0" stroke="#d7ccc8" strokeWidth="1" fill="none" />
          <path d="M-4,2 Q0,-1 4,2" stroke="#d7ccc8" strokeWidth="1" fill="none" />
        </g>

        <g transform={`translate(${width * 0.55}, ${height * 0.78})`}>
          <ellipse cx="0" cy="0" rx="6" ry="5" fill={`url(#${uniqueId}-shell)`} />
          <path d="M-4,0 Q0,-3 4,0" stroke="#d7ccc8" strokeWidth="1" fill="none" />
        </g>

        <g transform={`translate(${width * 0.85}, ${height * 0.88})`}>
          <ellipse cx="0" cy="0" rx="7" ry="5" fill={`url(#${uniqueId}-shell)`} />
          <path d="M-5,0 Q0,-3 5,0" stroke="#d7ccc8" strokeWidth="1" fill="none" />
          <path d="M-3,1 Q0,-1 3,1" stroke="#d7ccc8" strokeWidth="1" fill="none" />
        </g>

        {/* Starfish */}
        <g transform={`translate(${width * 0.45}, ${height * 0.9})`}>
          <polygon
            points="0,-12 3,-4 12,-4 5,2 8,10 0,5 -8,10 -5,2 -12,-4 -3,-4"
            fill="#ff7043"
            opacity="0.8"
          />
          <circle cx="0" cy="-2" r="3" fill="#ff8a65" />
        </g>

        {/* Beach umbrella */}
        <g transform={`translate(${width * 0.65}, ${height * 0.72})`}>
          {/* Pole */}
          <line x1="0" y1="0" x2="0" y2="80" stroke="#8d6e63" strokeWidth="4" />
          {/* Umbrella top */}
          <path
            d="M-50,-5 Q0,-40 50,-5 Q0,0 -50,-5"
            fill="#e53935"
          />
          <path
            d="M-50,-5 Q-25,-25 0,-5"
            fill="#ef5350"
          />
          <path
            d="M0,-5 Q25,-25 50,-5"
            fill="#ef5350"
          />
          <path
            d="M-50,-5 Q0,-40 50,-5"
            stroke="#c62828"
            strokeWidth="2"
            fill="none"
          />
          {/* Stripes */}
          <path d="M-35,-15 Q-17,-30 0,-15" stroke="#ffffff" strokeWidth="8" fill="none" opacity="0.5" />
          <path d="M0,-15 Q17,-30 35,-15" stroke="#ffffff" strokeWidth="8" fill="none" opacity="0.5" />
        </g>

        {/* Beach towel */}
        <g transform={`translate(${width * 0.5}, ${height * 0.82})`}>
          <rect x="-35" y="-5" width="70" height="40" fill="#2196f3" rx="2" />
          <rect x="-35" y="5" width="70" height="8" fill="#1976d2" />
          <rect x="-35" y="20" width="70" height="8" fill="#1976d2" />
        </g>

        {/* Flying seagulls */}
        <g stroke="#37474f" strokeWidth="2" fill="none" opacity="0.7">
          <path d={`M${width * 0.3},${height * 0.15} Q${width * 0.32},${height * 0.12} ${width * 0.35},${height * 0.15}`} />
          <path d={`M${width * 0.35},${height * 0.15} Q${width * 0.38},${height * 0.12} ${width * 0.4},${height * 0.15}`} />
        </g>
        <g stroke="#37474f" strokeWidth="1.5" fill="none" opacity="0.5">
          <path d={`M${width * 0.5},${height * 0.2} Q${width * 0.52},${height * 0.17} ${width * 0.54},${height * 0.2}`} />
          <path d={`M${width * 0.54},${height * 0.2} Q${width * 0.56},${height * 0.17} ${width * 0.58},${height * 0.2}`} />
        </g>
        <g stroke="#37474f" strokeWidth="1" fill="none" opacity="0.4">
          <path d={`M${width * 0.2},${height * 0.25} Q${width * 0.21},${height * 0.23} ${width * 0.23},${height * 0.25}`} />
          <path d={`M${width * 0.23},${height * 0.25} Q${width * 0.25},${height * 0.23} ${width * 0.26},${height * 0.25}`} />
        </g>
      </svg>
      {children}
    </div>
  );
}
