/**
 * MeadowScene Sprite Component
 * Enhanced with atmospheric depth and natural details
 */

import type { SceneProps } from '../types';
import { Sky, Grass, Tree, Flower, Bush, Cloud, Sun } from './index';

export function MeadowScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      {/* Sky with gradient */}
      <Sky width={width} height={height * 0.7} />

      {/* Atmospheric haze layer for depth */}
      <div style={{
        position: 'absolute',
        top: height * 0.3,
        left: 0,
        width,
        height: height * 0.4,
        background: 'linear-gradient(to bottom, rgba(200, 220, 255, 0.2) 0%, rgba(150, 200, 150, 0.1) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Distant hills/horizon */}
      <svg
        style={{
          position: 'absolute',
          top: height * 0.45,
          left: 0,
          width,
          height: height * 0.25,
          pointerEvents: 'none',
        }}
        viewBox={`0 0 ${width} ${height * 0.25}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="meadowSceneDistantHill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7CB77C" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#5A9A5A" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d={`M0 ${height * 0.25}
              Q${width * 0.15} ${height * 0.1} ${width * 0.3} ${height * 0.15}
              Q${width * 0.45} ${height * 0.05} ${width * 0.6} ${height * 0.12}
              Q${width * 0.8} ${height * 0.08} ${width} ${height * 0.18}
              L${width} ${height * 0.25} Z`}
          fill="url(#meadowSceneDistantHill)"
        />
      </svg>

      {/* Sun with glow */}
      <div style={{
        position: 'absolute',
        top: 20,
        right: 90,
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,200,0.4) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <Sun x={width - 100} y={30} size={60} />

      {/* Clouds at different depths */}
      <div style={{ opacity: 0.6 }}>
        <Cloud x={50} y={40} size={70} />
      </div>
      <Cloud x={200} y={60} size={80} />
      <div style={{ opacity: 0.8 }}>
        <Cloud x={400} y={35} size={100} />
      </div>
      <Cloud x={600} y={55} size={90} />
      <div style={{ opacity: 0.5 }}>
        <Cloud x={750} y={70} size={60} />
      </div>

      {/* Background trees (far, slightly faded) */}
      <div style={{ opacity: 0.6, filter: 'blur(0.5px)' }}>
        <Tree x={-20} y={height * 0.38} size={70} color="#3A7A3A" />
        <Tree x={width - 80} y={height * 0.4} size={65} color="#3A7A3A" />
      </div>

      {/* Ground layer */}
      <Grass width={width} height={height * 0.3} />

      {/* Ground texture variations */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width,
        height: height * 0.3,
        background: `
          radial-gradient(ellipse at 25% 60%, rgba(60, 140, 60, 0.3) 0%, transparent 40%),
          radial-gradient(ellipse at 55% 80%, rgba(40, 120, 40, 0.25) 0%, transparent 35%),
          radial-gradient(ellipse at 80% 50%, rgba(70, 150, 70, 0.2) 0%, transparent 45%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Mid-ground trees */}
      <Tree x={50} y={height * 0.4} size={90} />
      <Tree x={width - 130} y={height * 0.42} size={70} />

      {/* Bushes */}
      <Bush x={150} y={height * 0.73} size={45} />
      <Bush x={400} y={height * 0.76} size={40} />
      <Bush x={650} y={height * 0.74} size={50} />

      {/* Flowers with variety */}
      <Flower x={220} y={height * 0.72} size={28} />
      <Flower x={280} y={height * 0.74} size={32} color="#FF69B4" />
      <Flower x={350} y={height * 0.71} size={26} color="#FFD700" />
      <Flower x={450} y={height * 0.74} color="#FF0000" />
      <Flower x={520} y={height * 0.72} size={30} color="#9932CC" />
      <Flower x={580} y={height * 0.75} size={24} color="#FF69B4" />
      <Flower x={700} y={height * 0.73} size={28} color="#FFFFFF" />

      {/* Small flower patches (SVG for details) */}
      <svg
        style={{
          position: 'absolute',
          bottom: height * 0.18,
          left: 0,
          width,
          height: height * 0.12,
          pointerEvents: 'none',
        }}
        viewBox={`0 0 ${width} ${height * 0.12}`}
      >
        {/* Small daisies scattered */}
        {[...Array(20)].map((_, i) => (
          <g key={`daisy-${i}`} transform={`translate(${40 + i * 40}, ${10 + (i % 4) * 15})`}>
            <circle r="3" fill={i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF69B4' : 'white'} opacity="0.7" />
            <circle r="1.5" fill="#FFD700" opacity="0.9" />
          </g>
        ))}
      </svg>

      {/* Grass blade details in foreground */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width,
          height: height * 0.15,
          pointerEvents: 'none',
        }}
        viewBox={`0 0 ${width} ${height * 0.15}`}
      >
        <defs>
          <linearGradient id="meadowSceneGrassBlade" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1a6b1a" />
            <stop offset="100%" stopColor="#32CD32" />
          </linearGradient>
        </defs>
        {[...Array(Math.floor(width / 8))].map((_, i) => (
          <path
            key={`blade-${i}`}
            d={`M${i * 8 + 2} ${height * 0.15} Q${i * 8 + (i % 2 === 0 ? 4 : 0)} ${height * 0.08} ${i * 8 + (i % 2 === 0 ? 1 : 5)} ${height * 0.02}`}
            stroke="url(#meadowSceneGrassBlade)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
        ))}
      </svg>

      {/* Butterflies suggestion */}
      <svg
        style={{
          position: 'absolute',
          top: height * 0.5,
          left: 0,
          width,
          height: height * 0.3,
          pointerEvents: 'none',
          opacity: 0.6,
        }}
        viewBox={`0 0 ${width} ${height * 0.3}`}
      >
        {[200, 450, 650].map((bx, i) => (
          <g key={`butterfly-${i}`} transform={`translate(${bx}, ${30 + i * 20})`}>
            <ellipse cx="-4" cy="0" rx="4" ry="3" fill={i === 0 ? '#FF69B4' : i === 1 ? '#87CEEB' : '#FFD700'} />
            <ellipse cx="4" cy="0" rx="4" ry="3" fill={i === 0 ? '#FF69B4' : i === 1 ? '#87CEEB' : '#FFD700'} />
            <ellipse cx="0" cy="0" rx="1" ry="4" fill="#333" />
          </g>
        ))}
      </svg>

      {/* Sun rays effect */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: width * 0.4,
          height: height * 0.5,
          pointerEvents: 'none',
          opacity: 0.1,
        }}
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="meadowSceneSunRay" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="80,10 100,100 60,100" fill="url(#meadowSceneSunRay)" />
        <polygon points="90,5 100,60 70,80" fill="url(#meadowSceneSunRay)" />
      </svg>

      {/* Content layer */}
      {children}

      {/* Foreground atmospheric haze */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width,
        height: height * 0.08,
        background: 'linear-gradient(to top, rgba(200, 230, 200, 0.1) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
