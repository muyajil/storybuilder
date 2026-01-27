/**
 * Water Sprite Component
 * High quality with wave patterns, reflections, and depth gradient
 */

import type { GroundProps } from '../types';

export function Water({ width = 800, height = 100, color = '#4169E1' }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      overflow: 'hidden',
    }}>
      {/* Main water gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(to bottom,
          ${color} 0%,
          #3158C0 20%,
          #2548A0 50%,
          #1a3a8a 80%,
          #0a2a6a 100%)`,
        opacity: 0.85,
      }} />

      {/* Wave pattern overlay */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          {/* Wave gradient */}
          <linearGradient id="waterWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5080E0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2050A0" stopOpacity="0" />
          </linearGradient>
          {/* Highlight gradient */}
          <linearGradient id="waterHighlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          {/* Ripple pattern */}
          <pattern id="waterRipplePattern" width="60" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10 Q15 5 30 10 Q45 15 60 10" stroke="#6090E0" strokeWidth="1" fill="none" opacity="0.2" />
            <path d="M0 15 Q15 10 30 15 Q45 20 60 15" stroke="#4070C0" strokeWidth="0.5" fill="none" opacity="0.15" />
          </pattern>
        </defs>

        {/* Surface wave layer 1 */}
        <path
          d="M0 5 Q50 0 100 5 Q150 10 200 5 Q250 0 300 5 Q350 10 400 5 Q450 0 500 5 Q550 10 600 5 Q650 0 700 5 Q750 10 800 5 L800 15 Q750 20 700 15 Q650 10 600 15 Q550 20 500 15 Q450 10 400 15 Q350 20 300 15 Q250 10 200 15 Q150 20 100 15 Q50 10 0 15 Z"
          fill="url(#waterHighlightGradient)"
        />

        {/* Surface wave layer 2 */}
        <path
          d="M0 12 Q40 8 80 12 Q120 16 160 12 Q200 8 240 12 Q280 16 320 12 Q360 8 400 12 Q440 16 480 12 Q520 8 560 12 Q600 16 640 12 Q680 8 720 12 Q760 16 800 12 L800 25 L0 25 Z"
          fill="url(#waterWaveGradient)"
        />

        {/* Ripple texture */}
        <rect x="0" y="20" width="100%" height="80%" fill="url(#waterRipplePattern)" />
      </svg>

      {/* Sparkle reflections */}
      <svg width="100%" height="40%" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <filter id="waterSparkleGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Light sparkles on surface */}
        {[...Array(12)].map((_, i) => {
          const sparkleX = (i * 71 + 23) % 100;
          const sparkleY = 10 + (i * 17) % 25;
          return (
            <g key={`sparkle-${i}`}>
              <ellipse
                cx={`${sparkleX}%`}
                cy={`${sparkleY}%`}
                rx={3 + (i % 3)}
                ry={1 + (i % 2) * 0.5}
                fill="#FFFFFF"
                opacity={0.3 + (i % 4) * 0.1}
                filter="url(#waterSparkleGlow)"
              />
            </g>
          );
        })}
      </svg>

      {/* Depth fade at bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40%',
        background: 'linear-gradient(to top, rgba(10,30,80,0.6), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Subtle foam line at surface */}
      <svg width="100%" height="15" style={{ position: 'absolute', top: 0, left: 0 }}>
        <path
          d="M0 8 Q25 5 50 8 Q75 11 100 8 Q125 5 150 8 Q175 11 200 8 Q225 5 250 8 Q275 11 300 8 Q325 5 350 8 Q375 11 400 8 Q425 5 450 8 Q475 11 500 8 Q525 5 550 8 Q575 11 600 8 Q625 5 650 8 Q675 11 700 8 Q725 5 750 8 Q775 11 800 8"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
}
