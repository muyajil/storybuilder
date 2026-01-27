/**
 * SpaceScene Sprite Component
 * Enhanced with nebulae, detailed planets, star clusters, and cosmic depth
 */

import type { SceneProps } from '../types';

export function SpaceScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      position: 'relative',
      width,
      height,
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #000005 0%, #000011 30%, #000022 60%, #000033 100%)',
    }}>
      {/* Cosmic background layer */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* Nebula gradients */}
          <radialGradient id="spaceSceneNebula1" cx="30%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#4020A0" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#301080" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#200050" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="spaceSceneNebula2" cx="70%" cy="60%" r="40%">
            <stop offset="0%" stopColor="#A04040" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#802020" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#400010" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="spaceSceneNebula3" cx="50%" cy="20%" r="35%">
            <stop offset="0%" stopColor="#204080" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#102040" stopOpacity="0" />
          </radialGradient>

          {/* Star glow */}
          <radialGradient id="spaceSceneStarGlow">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* Blue star */}
          <radialGradient id="spaceSceneBlueStar">
            <stop offset="0%" stopColor="#AACCFF" stopOpacity="1" />
            <stop offset="50%" stopColor="#6699FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3366CC" stopOpacity="0" />
          </radialGradient>

          {/* Planet gradient */}
          <radialGradient id="spaceScenePlanetGrad" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#6AAA6A" />
            <stop offset="40%" stopColor="#4A8A4A" />
            <stop offset="70%" stopColor="#2A6A2A" />
            <stop offset="100%" stopColor="#1A4A1A" />
          </radialGradient>

          {/* Planet atmosphere */}
          <radialGradient id="spaceSceneAtmosphere" cx="50%" cy="50%" r="55%">
            <stop offset="80%" stopColor="#6AAA8A" stopOpacity="0" />
            <stop offset="95%" stopColor="#6ACCAA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8AEECA" stopOpacity="0.1" />
          </radialGradient>

          {/* Distant galaxy */}
          <radialGradient id="spaceSceneGalaxy" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FFFFEE" stopOpacity="0.4" />
            <stop offset="30%" stopColor="#EEEEDD" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#DDDDCC" stopOpacity="0" />
          </radialGradient>

          {/* Star filter */}
          <filter id="spaceSceneStarBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
        </defs>

        {/* Nebula patches */}
        <ellipse cx={width * 0.25} cy={height * 0.4} rx={width * 0.3} ry={height * 0.35} fill="url(#spaceSceneNebula1)" />
        <ellipse cx={width * 0.75} cy={height * 0.6} rx={width * 0.25} ry={height * 0.3} fill="url(#spaceSceneNebula2)" />
        <ellipse cx={width * 0.5} cy={height * 0.15} rx={width * 0.2} ry={height * 0.2} fill="url(#spaceSceneNebula3)" />

        {/* Distant galaxy */}
        <ellipse cx={width * 0.15} cy={height * 0.2} rx="40" ry="15" fill="url(#spaceSceneGalaxy)" transform={`rotate(-30, ${width * 0.15}, ${height * 0.2})`} />
      </svg>

      {/* Background dim stars */}
      {[...Array(150)].map((_, i) => (
        <div
          key={`dim-${i}`}
          style={{
            position: 'absolute',
            left: (i * 73 + 17) % width,
            top: (i * 47 + 23) % height,
            width: 1 + (i % 2),
            height: 1 + (i % 2),
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: 0.15 + (i % 5) * 0.05,
          }}
        />
      ))}

      {/* Medium stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`med-${i}`}
          style={{
            position: 'absolute',
            left: (i * 97 + 31) % width,
            top: (i * 61 + 13) % height,
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            backgroundColor: i % 3 === 0 ? '#AACCFF' : i % 3 === 1 ? '#FFEEAA' : 'white',
            borderRadius: '50%',
            opacity: 0.4 + (i % 4) * 0.1,
            boxShadow: `0 0 ${2 + (i % 2)}px ${i % 3 === 0 ? '#6699FF' : 'white'}`,
          }}
        />
      ))}

      {/* Bright stars with glow */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`bright-${i}`}
          style={{
            position: 'absolute',
            left: (i * 127 + 41) % width,
            top: (i * 83 + 29) % height,
            width: 3 + (i % 2),
            height: 3 + (i % 2),
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: 0.9,
            boxShadow: `0 0 ${4 + (i % 3) * 2}px white, 0 0 ${8 + (i % 3) * 3}px rgba(255,255,255,0.5)`,
          }}
        />
      ))}

      {/* Twinkling star crosses */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
      >
        {[...Array(8)].map((_, i) => {
          const cx = (i * 157 + 67) % width;
          const cy = (i * 103 + 47) % height;
          const size = 6 + (i % 3) * 2;
          return (
            <g key={`twinkle-${i}`} opacity={0.7 + (i % 3) * 0.1}>
              <line x1={cx - size} y1={cy} x2={cx + size} y2={cy} stroke="white" strokeWidth="1" />
              <line x1={cx} y1={cy - size} x2={cx} y2={cy + size} stroke="white" strokeWidth="1" />
              <circle cx={cx} cy={cy} r="2" fill="white" />
            </g>
          );
        })}
      </svg>

      {/* Main planet */}
      <div style={{
        position: 'absolute',
        right: 50,
        top: 50,
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #6AAA6A, #4A8A4A, #2A6A2A, #1A4A1A)',
        boxShadow: '0 0 30px rgba(100, 200, 100, 0.3), inset -10px -10px 20px rgba(0,0,0,0.4)',
      }}>
        {/* Planet surface details */}
        <svg width="80" height="80" viewBox="0 0 80 80" style={{ position: 'absolute' }}>
          <defs>
            <clipPath id="spaceScenePlanetClip">
              <circle cx="40" cy="40" r="39" />
            </clipPath>
          </defs>
          <g clipPath="url(#spaceScenePlanetClip)">
            {/* Continents/clouds */}
            <ellipse cx="25" cy="30" rx="15" ry="10" fill="rgba(100,180,100,0.3)" />
            <ellipse cx="55" cy="45" rx="12" ry="8" fill="rgba(100,180,100,0.25)" />
            <ellipse cx="35" cy="55" rx="10" ry="6" fill="rgba(100,180,100,0.2)" />
            {/* Cloud wisps */}
            <ellipse cx="30" cy="20" rx="20" ry="5" fill="rgba(255,255,255,0.15)" />
            <ellipse cx="50" cy="60" rx="15" ry="4" fill="rgba(255,255,255,0.1)" />
          </g>
          {/* Atmosphere glow */}
          <circle cx="40" cy="40" r="40" fill="url(#spaceSceneAtmosphere)" />
        </svg>
      </div>

      {/* Small moon */}
      <div style={{
        position: 'absolute',
        right: 140,
        top: 90,
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #AAAAAA, #888888, #666666)',
        boxShadow: '0 0 8px rgba(200, 200, 200, 0.2)',
      }} />

      {/* Distant planet */}
      <div style={{
        position: 'absolute',
        left: 80,
        top: height - 120,
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #AA6644, #885533, #663322)',
        boxShadow: '0 0 15px rgba(150, 100, 80, 0.2)',
      }} />

      {children}
    </div>
  );
}
