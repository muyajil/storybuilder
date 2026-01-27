/**
 * ArcticScene Sprite Component
 * Enhanced with atmospheric depth, aurora borealis, ice effects, and layered mountains
 */

import type { SceneProps } from '../types';

export function ArcticScene({ width = 800, height = 500, children }: SceneProps) {
  const uniqueId = 'arctic';

  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* Sky gradient with aurora tints */}
          <linearGradient id={`${uniqueId}-sky`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a2a4a" />
            <stop offset="15%" stopColor="#2d4a6a" />
            <stop offset="35%" stopColor="#5a8aaa" />
            <stop offset="55%" stopColor="#8abace" />
            <stop offset="75%" stopColor="#b0d8e8" />
            <stop offset="100%" stopColor="#e0f4ff" />
          </linearGradient>

          {/* Aurora borealis gradient */}
          <linearGradient id={`${uniqueId}-aurora1`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0" />
            <stop offset="30%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
          </linearGradient>

          <linearGradient id={`${uniqueId}-aurora2`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
            <stop offset="40%" stopColor="#4ade80" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#2dd4bf" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>

          {/* Far mountain gradient */}
          <linearGradient id={`${uniqueId}-mountain-far`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c8d8e8" />
            <stop offset="40%" stopColor="#d8e8f4" />
            <stop offset="100%" stopColor="#e8f4fa" />
          </linearGradient>

          {/* Mid mountain gradient */}
          <linearGradient id={`${uniqueId}-mountain-mid`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d0e0ec" />
            <stop offset="30%" stopColor="#e0eef6" />
            <stop offset="100%" stopColor="#f0f8fc" />
          </linearGradient>

          {/* Near mountain gradient */}
          <linearGradient id={`${uniqueId}-mountain-near`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8f0f6" />
            <stop offset="50%" stopColor="#f4fafc" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          {/* Snow ground gradient */}
          <linearGradient id={`${uniqueId}-snow-ground`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0f8ff" />
            <stop offset="30%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f8fcff" />
            <stop offset="100%" stopColor="#e8f4fa" />
          </linearGradient>

          {/* Ice shimmer gradient */}
          <linearGradient id={`${uniqueId}-ice-shimmer`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#e0f8ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Pine tree gradient */}
          <linearGradient id={`${uniqueId}-pine`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d5a5a" />
            <stop offset="50%" stopColor="#2f4f4f" />
            <stop offset="100%" stopColor="#1a3030" />
          </linearGradient>

          {/* Snow-covered pine */}
          <linearGradient id={`${uniqueId}-pine-snow`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e8f4fa" />
          </linearGradient>

          {/* Rock gradient */}
          <linearGradient id={`${uniqueId}-rock`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c8d0d8" />
            <stop offset="50%" stopColor="#a8b8c8" />
            <stop offset="100%" stopColor="#8898a8" />
          </linearGradient>

          {/* Cloud gradient */}
          <radialGradient id={`${uniqueId}-cloud`} cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f0f8ff" />
            <stop offset="100%" stopColor="#d8e8f4" />
          </radialGradient>

          {/* Fog/mist filter */}
          <filter id={`${uniqueId}-fog`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>

          {/* Snow sparkle filter */}
          <filter id={`${uniqueId}-sparkle`}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Sky background */}
        <rect x="0" y="0" width={width} height={height} fill={`url(#${uniqueId}-sky)`} />

        {/* Aurora borealis effects */}
        <ellipse
          cx={width * 0.3}
          cy={height * 0.15}
          rx={width * 0.4}
          ry={height * 0.12}
          fill={`url(#${uniqueId}-aurora1)`}
          opacity="0.7"
        />
        <ellipse
          cx={width * 0.7}
          cy={height * 0.12}
          rx={width * 0.35}
          ry={height * 0.1}
          fill={`url(#${uniqueId}-aurora2)`}
          opacity="0.6"
        />

        {/* Distant stars */}
        {[...Array(15)].map((_, i) => (
          <circle
            key={`star-${i}`}
            cx={50 + (i * 53) % width}
            cy={20 + (i * 17) % (height * 0.3)}
            r={0.5 + (i % 3) * 0.5}
            fill="#ffffff"
            opacity={0.3 + (i % 5) * 0.1}
          />
        ))}

        {/* Clouds */}
        <g opacity="0.9">
          <ellipse cx={100} cy={50} rx={50} ry={25} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={130} cy={45} rx={40} ry={20} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={70} cy={55} rx={35} ry={18} fill={`url(#${uniqueId}-cloud)`} />
        </g>
        <g opacity="0.85">
          <ellipse cx={450} cy={70} rx={60} ry={30} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={490} cy={65} rx={45} ry={22} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={410} cy={75} rx={40} ry={20} fill={`url(#${uniqueId}-cloud)`} />
        </g>
        <g opacity="0.7">
          <ellipse cx={680} cy={40} rx={45} ry={22} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={710} cy={35} rx={35} ry={18} fill={`url(#${uniqueId}-cloud)`} />
        </g>

        {/* Far mountains (background layer) */}
        <g opacity="0.6">
          <polygon
            points={`${width * 0.6},${height * 0.35} ${width * 0.85},${height * 0.55} ${width * 0.35},${height * 0.55}`}
            fill={`url(#${uniqueId}-mountain-far)`}
          />
          <polygon
            points={`${width * 0.15},${height * 0.38} ${width * 0.35},${height * 0.55} ${-width * 0.05},${height * 0.55}`}
            fill={`url(#${uniqueId}-mountain-far)`}
          />
        </g>

        {/* Mid mountains */}
        <g opacity="0.8">
          <polygon
            points={`${width * 0.08},${height * 0.32} ${width * 0.28},${height * 0.58} ${-width * 0.12},${height * 0.58}`}
            fill={`url(#${uniqueId}-mountain-mid)`}
          />
          {/* Snow cap */}
          <polygon
            points={`${width * 0.08},${height * 0.32} ${width * 0.14},${height * 0.42} ${width * 0.02},${height * 0.42}`}
            fill="#ffffff"
          />

          <polygon
            points={`${width * 0.35},${height * 0.35} ${width * 0.55},${height * 0.58} ${width * 0.15},${height * 0.58}`}
            fill={`url(#${uniqueId}-mountain-mid)`}
          />
          {/* Snow cap */}
          <polygon
            points={`${width * 0.35},${height * 0.35} ${width * 0.41},${height * 0.44} ${width * 0.29},${height * 0.44}`}
            fill="#ffffff"
          />
        </g>

        {/* Near mountains */}
        <polygon
          points={`${width * 0.55},${height * 0.38} ${width * 0.8},${height * 0.6} ${width * 0.3},${height * 0.6}`}
          fill={`url(#${uniqueId}-mountain-near)`}
        />
        {/* Snow cap and detail */}
        <polygon
          points={`${width * 0.55},${height * 0.38} ${width * 0.62},${height * 0.48} ${width * 0.48},${height * 0.48}`}
          fill="#ffffff"
        />

        {/* Snow-covered pine trees (background) */}
        <g transform={`translate(${width * 0.12}, ${height * 0.45})`}>
          <polygon points="0,-60 -25,0 25,0" fill={`url(#${uniqueId}-pine)`} />
          <polygon points="0,-70 -20,-20 20,-20" fill={`url(#${uniqueId}-pine)`} />
          <polygon points="0,-40 -15,5 15,5" fill={`url(#${uniqueId}-pine-snow)`} opacity="0.7" />
          <rect x="-5" y="0" width="10" height="15" fill="#4a3a2a" />
        </g>

        <g transform={`translate(${width * 0.42}, ${height * 0.48})`}>
          <polygon points="0,-70 -30,0 30,0" fill={`url(#${uniqueId}-pine)`} />
          <polygon points="0,-80 -24,-20 24,-20" fill={`url(#${uniqueId}-pine)`} />
          <polygon points="0,-50 -18,5 18,5" fill={`url(#${uniqueId}-pine-snow)`} opacity="0.7" />
          <rect x="-6" y="0" width="12" height="18" fill="#4a3a2a" />
        </g>

        <g transform={`translate(${width * 0.68}, ${height * 0.5})`}>
          <polygon points="0,-55 -22,0 22,0" fill={`url(#${uniqueId}-pine)`} />
          <polygon points="0,-65 -18,-18 18,-18" fill={`url(#${uniqueId}-pine)`} />
          <polygon points="0,-38 -14,5 14,5" fill={`url(#${uniqueId}-pine-snow)`} opacity="0.7" />
          <rect x="-4" y="0" width="8" height="12" fill="#4a3a2a" />
        </g>

        {/* Main snow ground */}
        <path
          d={`M0,${height * 0.6}
              Q${width * 0.1},${height * 0.58} ${width * 0.2},${height * 0.6}
              Q${width * 0.35},${height * 0.62} ${width * 0.5},${height * 0.58}
              Q${width * 0.7},${height * 0.55} ${width * 0.85},${height * 0.6}
              Q${width * 0.95},${height * 0.62} ${width},${height * 0.6}
              L${width},${height} L0,${height} Z`}
          fill={`url(#${uniqueId}-snow-ground)`}
        />

        {/* Snow texture and undulation details */}
        <path
          d={`M0,${height * 0.7}
              Q${width * 0.15},${height * 0.68} ${width * 0.3},${height * 0.72}
              Q${width * 0.5},${height * 0.75} ${width * 0.7},${height * 0.7}
              Q${width * 0.9},${height * 0.68} ${width},${height * 0.72}`}
          stroke="#e8f4fa"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />

        {/* Ice patches with shimmer */}
        <ellipse
          cx={width * 0.25}
          cy={height * 0.75}
          rx={60}
          ry={15}
          fill="#d0f0ff"
          opacity="0.4"
        />
        <ellipse
          cx={width * 0.25}
          cy={height * 0.75}
          rx={60}
          ry={15}
          fill={`url(#${uniqueId}-ice-shimmer)`}
          opacity="0.6"
        />

        <ellipse
          cx={width * 0.7}
          cy={height * 0.8}
          rx={45}
          ry={12}
          fill="#d0f0ff"
          opacity="0.4"
        />
        <ellipse
          cx={width * 0.7}
          cy={height * 0.8}
          rx={45}
          ry={12}
          fill={`url(#${uniqueId}-ice-shimmer)`}
          opacity="0.5"
        />

        {/* Snow-covered rocks */}
        <g transform={`translate(${width * 0.12}, ${height * 0.78})`}>
          <ellipse cx="0" cy="8" rx="35" ry="12" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="-5" cy="0" rx="30" ry="18" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="-5" cy="-8" rx="22" ry="10" fill="#ffffff" opacity="0.8" />
        </g>

        <g transform={`translate(${width * 0.75}, ${height * 0.82})`}>
          <ellipse cx="0" cy="5" rx="25" ry="8" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="0" cy="0" rx="22" ry="14" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="0" cy="-6" rx="16" ry="7" fill="#ffffff" opacity="0.8" />
        </g>

        <g transform={`translate(${width * 0.5}, ${height * 0.85})`}>
          <ellipse cx="0" cy="4" rx="20" ry="6" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="0" cy="0" rx="18" ry="11" fill={`url(#${uniqueId}-rock)`} />
          <ellipse cx="0" cy="-5" rx="12" ry="5" fill="#ffffff" opacity="0.8" />
        </g>

        {/* Atmospheric mist/fog layer */}
        <rect
          x="0"
          y={height * 0.55}
          width={width}
          height={height * 0.15}
          fill="#e8f4fa"
          opacity="0.25"
          filter={`url(#${uniqueId}-fog)`}
        />

        {/* Falling snow particles */}
        {[...Array(60)].map((_, i) => (
          <circle
            key={`snow-${i}`}
            cx={(i * 47 + 20) % width}
            cy={(i * 31 + 10) % (height * 0.85)}
            r={1 + (i % 3)}
            fill="#ffffff"
            opacity={0.5 + (i % 4) * 0.15}
            filter={i % 5 === 0 ? `url(#${uniqueId}-sparkle)` : undefined}
          />
        ))}

        {/* Snow sparkles on ground */}
        {[...Array(20)].map((_, i) => (
          <circle
            key={`sparkle-${i}`}
            cx={30 + (i * 41) % (width - 60)}
            cy={height * 0.65 + (i * 13) % (height * 0.3)}
            r={1}
            fill="#ffffff"
            filter={`url(#${uniqueId}-sparkle)`}
            opacity={0.6 + (i % 3) * 0.2}
          />
        ))}
      </svg>
      {children}
    </div>
  );
}
