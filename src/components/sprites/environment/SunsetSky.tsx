/**
 * SunsetSky Sprite Component
 * High quality with layered gradients, clouds, and atmospheric effects
 */

import type { BackgroundProps } from '../types';

export function SunsetSky({ width = 800, height = 300, children }: BackgroundProps) {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width,
      height,
      background: 'linear-gradient(to bottom, #0d0d1a 0%, #1a1a2e 10%, #2d1f3d 25%, #4a2a5e 40%, #8b3a62 55%, #d45a5a 70%, #ff8c5a 85%, #ffd93d 100%)',
      overflow: 'hidden',
    }}>
      {/* Stars in upper sky */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          {/* Star glow filter */}
          <filter id="sunsetSkyStarGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Scattered stars */}
        {[...Array(30)].map((_, i) => {
          const starX = (i * 73 + 17) % 100;
          const starY = (i * 23 + 11) % 30;
          const starSize = 0.5 + (i % 3) * 0.3;
          const starOpacity = 0.3 + (i % 5) * 0.1;
          return (
            <circle
              key={`star-${i}`}
              cx={`${starX}%`}
              cy={`${starY}%`}
              r={starSize}
              fill="#FFFFFF"
              opacity={starOpacity}
              filter="url(#sunsetSkyStarGlow)"
            />
          );
        })}
      </svg>

      {/* High altitude cirrus clouds */}
      <svg width="100%" height="40%" style={{ position: 'absolute', top: '15%', left: 0 }}>
        <defs>
          <linearGradient id="sunsetSkyCirrusGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b4a7a" stopOpacity="0" />
            <stop offset="30%" stopColor="#7a5a8a" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#8a6a9a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9a7aaa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse cx="20%" cy="30%" rx="15%" ry="3%" fill="url(#sunsetSkyCirrusGradient)" />
        <ellipse cx="60%" cy="40%" rx="20%" ry="4%" fill="url(#sunsetSkyCirrusGradient)" />
        <ellipse cx="85%" cy="25%" rx="12%" ry="2.5%" fill="url(#sunsetSkyCirrusGradient)" />
      </svg>

      {/* Main sunset clouds */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          {/* Cloud gradient - warm tones */}
          <linearGradient id="sunsetSkyCloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff9966" />
            <stop offset="50%" stopColor="#cc6666" />
            <stop offset="100%" stopColor="#994466" />
          </linearGradient>
          {/* Cloud highlight */}
          <linearGradient id="sunsetSkyCloudHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffcc99" />
            <stop offset="100%" stopColor="#ff9966" />
          </linearGradient>
          {/* Cloud shadow */}
          <linearGradient id="sunsetSkyCloudShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#884455" />
            <stop offset="100%" stopColor="#663344" />
          </linearGradient>
        </defs>

        {/* Cloud layer 1 - back */}
        <ellipse cx="15%" cy="50%" rx="12%" ry="5%" fill="url(#sunsetSkyCloudShadow)" opacity="0.6" />
        <ellipse cx="75%" cy="45%" rx="15%" ry="6%" fill="url(#sunsetSkyCloudShadow)" opacity="0.5" />

        {/* Cloud layer 2 - middle */}
        <ellipse cx="25%" cy="55%" rx="10%" ry="4%" fill="url(#sunsetSkyCloudGradient)" opacity="0.7" />
        <ellipse cx="60%" cy="52%" rx="12%" ry="5%" fill="url(#sunsetSkyCloudGradient)" opacity="0.6" />
        <ellipse cx="90%" cy="58%" rx="8%" ry="3.5%" fill="url(#sunsetSkyCloudGradient)" opacity="0.5" />

        {/* Cloud layer 3 - front with highlights */}
        <ellipse cx="40%" cy="60%" rx="14%" ry="5.5%" fill="url(#sunsetSkyCloudGradient)" />
        <ellipse cx="40%" cy="58%" rx="10%" ry="3%" fill="url(#sunsetSkyCloudHighlight)" opacity="0.6" />
      </svg>

      {/* Horizon glow */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '30%',
        background: 'linear-gradient(to top, rgba(255,217,61,0.4), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Sun glow near horizon */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '40%',
        height: '30%',
        background: 'radial-gradient(ellipse at center bottom, rgba(255,200,100,0.5) 0%, rgba(255,150,80,0.3) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Atmospheric haze bands */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="sunsetSkyHazeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff8866" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff9977" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffaa88" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y="65%" width="100%" height="5%" fill="url(#sunsetSkyHazeGradient)" />
        <rect x="0" y="75%" width="100%" height="3%" fill="url(#sunsetSkyHazeGradient)" opacity="0.7" />
      </svg>

      {children}
    </div>
  );
}
