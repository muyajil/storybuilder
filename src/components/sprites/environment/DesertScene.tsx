/**
 * DesertScene Sprite Component
 * Enhanced with heat haze, layered dunes, detailed cacti, and atmospheric depth
 */

import type { SceneProps } from '../types';

export function DesertScene({ width = 800, height = 500, children }: SceneProps) {
  const uniqueId = 'desert';

  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* Sky gradient - hot desert sky */}
          <linearGradient id={`${uniqueId}-sky`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a237e" />
            <stop offset="10%" stopColor="#283593" />
            <stop offset="25%" stopColor="#5c6bc0" />
            <stop offset="45%" stopColor="#7986cb" />
            <stop offset="65%" stopColor="#9fa8da" />
            <stop offset="85%" stopColor="#e8d4a8" />
            <stop offset="100%" stopColor="#f5deb3" />
          </linearGradient>

          {/* Sun gradient - blazing hot */}
          <radialGradient id={`${uniqueId}-sun`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#fff9c4" />
            <stop offset="60%" stopColor="#ffee58" />
            <stop offset="100%" stopColor="#ffc107" />
          </radialGradient>

          {/* Sun glow/heat */}
          <radialGradient id={`${uniqueId}-sun-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#fff9c4" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#ffcc80" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ff8a65" stopOpacity="0" />
          </radialGradient>

          {/* Far mountain gradient */}
          <linearGradient id={`${uniqueId}-mountain-far`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c8a882" />
            <stop offset="50%" stopColor="#d4b896" />
            <stop offset="100%" stopColor="#dcc8a8" />
          </linearGradient>

          {/* Mid mountain gradient */}
          <linearGradient id={`${uniqueId}-mountain-mid`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c9a66b" />
            <stop offset="40%" stopColor="#d4b48a" />
            <stop offset="100%" stopColor="#deb887" />
          </linearGradient>

          {/* Near mesa gradient */}
          <linearGradient id={`${uniqueId}-mesa`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b8860b" />
            <stop offset="30%" stopColor="#cd853f" />
            <stop offset="70%" stopColor="#d2a05a" />
            <stop offset="100%" stopColor="#b8860b" />
          </linearGradient>

          {/* Far dune gradient */}
          <linearGradient id={`${uniqueId}-dune-far`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8d4a8" />
            <stop offset="50%" stopColor="#f0deb0" />
            <stop offset="100%" stopColor="#f5e6c0" />
          </linearGradient>

          {/* Mid dune gradient */}
          <linearGradient id={`${uniqueId}-dune-mid`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#deb887" />
            <stop offset="40%" stopColor="#e8c89c" />
            <stop offset="100%" stopColor="#f4d8b0" />
          </linearGradient>

          {/* Near dune gradient */}
          <linearGradient id={`${uniqueId}-dune-near`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d2a05a" />
            <stop offset="30%" stopColor="#deb887" />
            <stop offset="60%" stopColor="#e8c89c" />
            <stop offset="100%" stopColor="#f4d8b0" />
          </linearGradient>

          {/* Sand ground gradient */}
          <linearGradient id={`${uniqueId}-sand`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8c89c" />
            <stop offset="30%" stopColor="#f0d8a8" />
            <stop offset="60%" stopColor="#f5e0b5" />
            <stop offset="100%" stopColor="#f8e8c4" />
          </linearGradient>

          {/* Shadow gradient for dunes */}
          <linearGradient id={`${uniqueId}-dune-shadow`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b8860b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#b8860b" stopOpacity="0" />
          </linearGradient>

          {/* Cactus main gradient */}
          <linearGradient id={`${uniqueId}-cactus`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2e7d32" />
            <stop offset="30%" stopColor="#388e3c" />
            <stop offset="70%" stopColor="#43a047" />
            <stop offset="100%" stopColor="#2e7d32" />
          </linearGradient>

          {/* Cactus highlight */}
          <linearGradient id={`${uniqueId}-cactus-light`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4caf50" stopOpacity="0" />
            <stop offset="50%" stopColor="#66bb6a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4caf50" stopOpacity="0" />
          </linearGradient>

          {/* Rock gradient */}
          <linearGradient id={`${uniqueId}-rock`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d2a05a" />
            <stop offset="50%" stopColor="#c4935a" />
            <stop offset="100%" stopColor="#b8860b" />
          </linearGradient>

          {/* Tumbleweed gradient */}
          <radialGradient id={`${uniqueId}-tumbleweed`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a08060" />
            <stop offset="60%" stopColor="#8b7355" />
            <stop offset="100%" stopColor="#6b5344" />
          </radialGradient>

          {/* Heat haze pattern */}
          <filter id={`${uniqueId}-heat-haze`} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="3" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>

          {/* Sun blur filter */}
          <filter id={`${uniqueId}-sun-blur`} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
          </filter>

          {/* Atmospheric haze */}
          <linearGradient id={`${uniqueId}-haze`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5deb3" stopOpacity="0" />
            <stop offset="50%" stopColor="#f5e6c0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f8e8c4" stopOpacity="0.4" />
          </linearGradient>

          {/* Sand texture pattern */}
          <pattern id={`${uniqueId}-sand-texture`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="0.8" fill="#d2a05a" opacity="0.3" />
            <circle cx="15" cy="10" r="0.6" fill="#c4935a" opacity="0.4" />
            <circle cx="25" cy="3" r="0.5" fill="#deb887" opacity="0.3" />
            <circle cx="8" cy="20" r="0.7" fill="#c4935a" opacity="0.35" />
            <circle cx="22" cy="18" r="0.5" fill="#d2a05a" opacity="0.3" />
            <circle cx="12" cy="28" r="0.6" fill="#deb887" opacity="0.4" />
          </pattern>
        </defs>

        {/* Sky background */}
        <rect x="0" y="0" width={width} height={height} fill={`url(#${uniqueId}-sky)`} />

        {/* Sun glow (intense heat) */}
        <circle
          cx={width - 100}
          cy={70}
          r={120}
          fill={`url(#${uniqueId}-sun-glow)`}
          filter={`url(#${uniqueId}-sun-blur)`}
        />

        {/* Sun */}
        <circle cx={width - 100} cy={70} r={50} fill={`url(#${uniqueId}-sun)`} />

        {/* Sun rays */}
        {[...Array(16)].map((_, i) => {
          const angle = (i * 22.5 * Math.PI) / 180;
          const x1 = width - 100 + Math.cos(angle) * 55;
          const y1 = 70 + Math.sin(angle) * 55;
          const x2 = width - 100 + Math.cos(angle) * 100;
          const y2 = 70 + Math.sin(angle) * 100;
          return (
            <line
              key={`ray-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#fff9c4"
              strokeWidth="2"
              opacity={0.2 + (i % 3) * 0.1}
            />
          );
        })}

        {/* Far mountains (background) */}
        <g opacity="0.5">
          <polygon
            points={`${width * 0.6},${height * 0.38} ${width * 0.9},${height * 0.52} ${width * 0.3},${height * 0.52}`}
            fill={`url(#${uniqueId}-mountain-far)`}
          />
          <polygon
            points={`${width * 0.15},${height * 0.40} ${width * 0.4},${height * 0.52} ${-width * 0.1},${height * 0.52}`}
            fill={`url(#${uniqueId}-mountain-far)`}
          />
        </g>

        {/* Mid mountains/mesas */}
        <g opacity="0.7">
          <polygon
            points={`${width * 0.05},${height * 0.35} ${width * 0.28},${height * 0.55} ${-width * 0.18},${height * 0.55}`}
            fill={`url(#${uniqueId}-mountain-mid)`}
          />
          {/* Mesa with flat top */}
          <path
            d={`M${width * 0.35},${height * 0.42}
                L${width * 0.42},${height * 0.38}
                L${width * 0.58},${height * 0.38}
                L${width * 0.65},${height * 0.42}
                L${width * 0.7},${height * 0.55}
                L${width * 0.3},${height * 0.55} Z`}
            fill={`url(#${uniqueId}-mesa)`}
          />
          {/* Mesa layers/striations */}
          <path
            d={`M${width * 0.32},${height * 0.48} L${width * 0.68},${height * 0.48}`}
            stroke="#a67c42"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            d={`M${width * 0.33},${height * 0.52} L${width * 0.67},${height * 0.52}`}
            stroke="#8b6914"
            strokeWidth="1.5"
            opacity="0.4"
          />
        </g>

        {/* Far dunes */}
        <path
          d={`M0,${height * 0.52}
              Q${width * 0.15},${height * 0.48} ${width * 0.3},${height * 0.53}
              Q${width * 0.5},${height * 0.58} ${width * 0.7},${height * 0.50}
              Q${width * 0.85},${height * 0.46} ${width},${height * 0.52}
              L${width},${height * 0.6} L0,${height * 0.6} Z`}
          fill={`url(#${uniqueId}-dune-far)`}
        />

        {/* Mid dunes with shadow detail */}
        <path
          d={`M0,${height * 0.55}
              Q${width * 0.1},${height * 0.52} ${width * 0.2},${height * 0.58}
              Q${width * 0.35},${height * 0.65} ${width * 0.5},${height * 0.55}
              Q${width * 0.65},${height * 0.48} ${width * 0.8},${height * 0.58}
              Q${width * 0.92},${height * 0.65} ${width},${height * 0.55}
              L${width},${height * 0.68} L0,${height * 0.68} Z`}
          fill={`url(#${uniqueId}-dune-mid)`}
        />

        {/* Dune shadow overlay */}
        <path
          d={`M${width * 0.2},${height * 0.58}
              Q${width * 0.27},${height * 0.62} ${width * 0.35},${height * 0.65}
              L${width * 0.35},${height * 0.68} L${width * 0.2},${height * 0.68} Z`}
          fill={`url(#${uniqueId}-dune-shadow)`}
        />
        <path
          d={`M${width * 0.5},${height * 0.55}
              Q${width * 0.57},${height * 0.50} ${width * 0.65},${height * 0.48}
              L${width * 0.65},${height * 0.68} L${width * 0.5},${height * 0.68} Z`}
          fill={`url(#${uniqueId}-dune-shadow)`}
          opacity="0.6"
        />

        {/* Cacti (various sizes and positions) */}
        {/* Large saguaro cactus - left */}
        <g transform={`translate(${width * 0.15}, ${height * 0.55})`}>
          {/* Main trunk */}
          <rect x="-12" y="-100" width="24" height="100" fill={`url(#${uniqueId}-cactus)`} rx="12" />
          <rect x="-12" y="-100" width="24" height="100" fill={`url(#${uniqueId}-cactus-light)`} rx="12" />
          {/* Ridges */}
          {[...Array(5)].map((_, i) => (
            <line
              key={`ridge-l-${i}`}
              x1={-10 + i * 5}
              y1="-95"
              x2={-10 + i * 5}
              y2="-5"
              stroke="#2e7d32"
              strokeWidth="1"
              opacity="0.4"
            />
          ))}
          {/* Left arm */}
          <path
            d="M-12,-60 Q-40,-60 -40,-35 Q-40,-10 -35,-10"
            stroke={`url(#${uniqueId}-cactus)`}
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
          />
          {/* Right arm */}
          <path
            d="M12,-45 Q45,-45 45,-20 Q45,5 38,5"
            stroke={`url(#${uniqueId}-cactus)`}
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
          />
          {/* Spines suggestion */}
          {[...Array(8)].map((_, i) => (
            <g key={`spine-l-${i}`} opacity="0.5">
              <line x1="-12" y1={-90 + i * 12} x2="-16" y2={-92 + i * 12} stroke="#1b5e20" strokeWidth="1" />
              <line x1="12" y1={-85 + i * 12} x2="16" y2={-87 + i * 12} stroke="#1b5e20" strokeWidth="1" />
            </g>
          ))}
          {/* Shadow */}
          <ellipse cx="15" cy="5" rx="30" ry="8" fill="#8b6914" opacity="0.3" />
        </g>

        {/* Medium barrel cactus - center */}
        <g transform={`translate(${width * 0.48}, ${height * 0.62})`}>
          <ellipse cx="0" cy="-20" rx="25" ry="35" fill={`url(#${uniqueId}-cactus)`} />
          <ellipse cx="0" cy="-20" rx="25" ry="35" fill={`url(#${uniqueId}-cactus-light)`} />
          {/* Ridges */}
          {[...Array(7)].map((_, i) => (
            <ellipse
              key={`ridge-m-${i}`}
              cx={0}
              cy="-20"
              rx={8 + i * 2.5}
              ry={12 + i * 3.5}
              fill="none"
              stroke="#2e7d32"
              strokeWidth="1"
              opacity="0.4"
            />
          ))}
          {/* Flower on top */}
          <circle cx="0" cy="-55" r="8" fill="#ffeb3b" />
          <circle cx="0" cy="-55" r="4" fill="#ff9800" />
          {/* Shadow */}
          <ellipse cx="10" cy="5" rx="20" ry="6" fill="#8b6914" opacity="0.3" />
        </g>

        {/* Small saguaro - right */}
        <g transform={`translate(${width * 0.75}, ${height * 0.58})`}>
          <rect x="-8" y="-70" width="16" height="70" fill={`url(#${uniqueId}-cactus)`} rx="8" />
          <rect x="-8" y="-70" width="16" height="70" fill={`url(#${uniqueId}-cactus-light)`} rx="8" />
          {/* Single arm */}
          <path
            d="M-8,-40 Q-28,-40 -28,-20 Q-28,0 -24,0"
            stroke={`url(#${uniqueId}-cactus)`}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
          {/* Shadow */}
          <ellipse cx="10" cy="3" rx="18" ry="5" fill="#8b6914" opacity="0.3" />
        </g>

        {/* Prickly pear cactus - far right */}
        <g transform={`translate(${width * 0.88}, ${height * 0.65})`}>
          <ellipse cx="0" cy="-15" rx="18" ry="22" fill={`url(#${uniqueId}-cactus)`} />
          <ellipse cx="-15" cy="-35" rx="14" ry="18" fill={`url(#${uniqueId}-cactus)`} />
          <ellipse cx="12" cy="-38" rx="12" ry="15" fill={`url(#${uniqueId}-cactus)`} />
          <ellipse cx="-8" cy="-55" rx="10" ry="13" fill={`url(#${uniqueId}-cactus)`} />
          {/* Shadow */}
          <ellipse cx="8" cy="3" rx="22" ry="5" fill="#8b6914" opacity="0.3" />
        </g>

        {/* Near dunes (foreground) */}
        <path
          d={`M0,${height * 0.65}
              Q${width * 0.12},${height * 0.60} ${width * 0.25},${height * 0.68}
              Q${width * 0.4},${height * 0.75} ${width * 0.55},${height * 0.65}
              Q${width * 0.72},${height * 0.58} ${width * 0.88},${height * 0.68}
              Q${width * 0.95},${height * 0.72} ${width},${height * 0.65}
              L${width},${height} L0,${height} Z`}
          fill={`url(#${uniqueId}-dune-near)`}
        />

        {/* Sand ground */}
        <path
          d={`M0,${height * 0.72}
              Q${width * 0.2},${height * 0.70} ${width * 0.4},${height * 0.73}
              Q${width * 0.6},${height * 0.76} ${width * 0.8},${height * 0.72}
              Q${width * 0.9},${height * 0.70} ${width},${height * 0.73}
              L${width},${height} L0,${height} Z`}
          fill={`url(#${uniqueId}-sand)`}
        />

        {/* Sand texture overlay */}
        <rect
          x="0"
          y={height * 0.65}
          width={width}
          height={height * 0.35}
          fill={`url(#${uniqueId}-sand-texture)`}
        />

        {/* Wind-blown sand ripples */}
        <g opacity="0.4">
          <path
            d={`M${width * 0.1},${height * 0.78} Q${width * 0.2},${height * 0.77} ${width * 0.3},${height * 0.78}`}
            stroke="#d2a05a"
            strokeWidth="1"
            fill="none"
          />
          <path
            d={`M${width * 0.4},${height * 0.82} Q${width * 0.55},${height * 0.81} ${width * 0.7},${height * 0.82}`}
            stroke="#d2a05a"
            strokeWidth="1"
            fill="none"
          />
          <path
            d={`M${width * 0.2},${height * 0.88} Q${width * 0.35},${height * 0.87} ${width * 0.5},${height * 0.88}`}
            stroke="#d2a05a"
            strokeWidth="1"
            fill="none"
          />
          <path
            d={`M${width * 0.6},${height * 0.92} Q${width * 0.75},${height * 0.91} ${width * 0.9},${height * 0.92}`}
            stroke="#d2a05a"
            strokeWidth="1"
            fill="none"
          />
        </g>

        {/* Rocks */}
        <g transform={`translate(${width * 0.3}, ${height * 0.82})`}>
          <ellipse cx="5" cy="8" rx="30" ry="10" fill="#8b6914" opacity="0.3" />
          <ellipse cx="0" cy="5" rx="25" ry="12" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="-5" cy="0" rx="20" ry="10" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="8" cy="-3" rx="12" ry="7" fill="#deb887" opacity="0.6" />
        </g>

        <g transform={`translate(${width * 0.68}, ${height * 0.85})`}>
          <ellipse cx="3" cy="5" rx="20" ry="6" fill="#8b6914" opacity="0.3" />
          <ellipse cx="0" cy="3" rx="18" ry="10" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="5" cy="0" rx="12" ry="7" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="-3" cy="-2" rx="8" ry="5" fill="#deb887" opacity="0.5" />
        </g>

        {/* Tumbleweeds */}
        <g transform={`translate(${width * 0.55}, ${height * 0.9})`} opacity="0.7">
          <circle cx="0" cy="0" r="15" fill="none" stroke="#8b7355" strokeWidth="2" />
          <circle cx="0" cy="0" r="10" fill="none" stroke="#a08060" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="5" fill="none" stroke="#6b5344" strokeWidth="1" />
          <line x1="-12" y1="-8" x2="12" y2="8" stroke="#8b7355" strokeWidth="1" />
          <line x1="-10" y1="10" x2="10" y2="-10" stroke="#8b7355" strokeWidth="1" />
        </g>

        <g transform={`translate(${width * 0.08}, ${height * 0.88})`} opacity="0.6">
          <circle cx="0" cy="0" r="12" fill="none" stroke="#8b7355" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="7" fill="none" stroke="#a08060" strokeWidth="1" />
          <line x1="-9" y1="-6" x2="9" y2="6" stroke="#8b7355" strokeWidth="1" />
          <line x1="-7" y1="7" x2="7" y2="-7" stroke="#8b7355" strokeWidth="1" />
        </g>

        {/* Animal skull (atmospheric detail) */}
        <g transform={`translate(${width * 0.85}, ${height * 0.92})`} opacity="0.6">
          <ellipse cx="0" cy="0" rx="12" ry="8" fill="#f5f5dc" />
          <ellipse cx="-5" cy="-3" rx="3" ry="4" fill="#1a1a1a" opacity="0.8" />
          <ellipse cx="5" cy="-3" rx="3" ry="4" fill="#1a1a1a" opacity="0.8" />
          <ellipse cx="0" cy="3" rx="2" ry="3" fill="#1a1a1a" opacity="0.6" />
          {/* Horns */}
          <path d="M-10,-2 Q-18,-8 -15,-15" stroke="#e8e0d0" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M10,-2 Q18,-8 15,-15" stroke="#e8e0d0" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* Heat haze atmospheric layer */}
        <rect
          x="0"
          y={height * 0.35}
          width={width}
          height={height * 0.35}
          fill={`url(#${uniqueId}-haze)`}
        />

        {/* Dust particles floating in air */}
        {[...Array(25)].map((_, i) => (
          <circle
            key={`dust-${i}`}
            cx={(i * 71 + 30) % width}
            cy={height * 0.3 + (i * 23) % (height * 0.5)}
            r={0.5 + (i % 3) * 0.5}
            fill="#f5deb3"
            opacity={0.3 + (i % 4) * 0.1}
          />
        ))}

        {/* Vulture silhouettes in distance */}
        <g opacity="0.4">
          <path
            d={`M${width * 0.25},${height * 0.18}
                Q${width * 0.27},${height * 0.15} ${width * 0.3},${height * 0.18}
                Q${width * 0.32},${height * 0.15} ${width * 0.35},${height * 0.18}`}
            stroke="#2d2d2d"
            strokeWidth="2"
            fill="none"
          />
        </g>
        <g opacity="0.3">
          <path
            d={`M${width * 0.45},${height * 0.22}
                Q${width * 0.47},${height * 0.19} ${width * 0.49},${height * 0.22}
                Q${width * 0.51},${height * 0.19} ${width * 0.53},${height * 0.22}`}
            stroke="#2d2d2d"
            strokeWidth="1.5"
            fill="none"
          />
        </g>
      </svg>
      {children}
    </div>
  );
}
