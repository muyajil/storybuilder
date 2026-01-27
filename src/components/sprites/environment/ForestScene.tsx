/**
 * ForestScene Sprite Component
 * Enhanced with atmospheric depth and layered vegetation
 */

import type { SceneProps } from '../types';
import { Sky, Tree, PineTree, Bush, Mushroom } from './index';

export function ForestScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      {/* Sky layer */}
      <Sky width={width} height={height * 0.5} />

      {/* Atmospheric mist layers for depth */}
      <div style={{
        position: 'absolute',
        top: height * 0.15,
        left: 0,
        width,
        height: height * 0.35,
        background: 'linear-gradient(to bottom, rgba(200, 220, 255, 0.3) 0%, rgba(100, 150, 100, 0.2) 50%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Far background forest silhouette */}
      <div style={{
        position: 'absolute',
        top: height * 0.2,
        left: 0,
        width,
        height: height * 0.3,
        background: 'linear-gradient(to bottom, transparent 0%, rgba(20, 60, 20, 0.4) 60%, rgba(15, 50, 15, 0.6) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Mid-distance forest layer */}
      <div style={{
        position: 'absolute',
        top: height * 0.25,
        left: 0,
        width,
        height: height * 0.4,
        background: 'linear-gradient(to bottom, transparent 0%, rgba(26, 74, 26, 0.5) 70%, rgba(20, 60, 20, 0.7) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Light rays through canopy */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width,
          height: height * 0.7,
          pointerEvents: 'none',
          opacity: 0.15,
        }}
        viewBox={`0 0 ${width} ${height * 0.7}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="forestSceneLightRay" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`${width * 0.3},0 ${width * 0.35},${height * 0.6} ${width * 0.25},${height * 0.6}`} fill="url(#forestSceneLightRay)" />
        <polygon points={`${width * 0.6},0 ${width * 0.68},${height * 0.5} ${width * 0.55},${height * 0.5}`} fill="url(#forestSceneLightRay)" />
      </svg>

      {/* Background trees (far, faded) */}
      <div style={{ opacity: 0.5, filter: 'blur(1px)' }}>
        <PineTree x={-20} y={height * 0.18} size={90} color="#0f3f0f" />
        <PineTree x={80} y={height * 0.15} size={100} color="#0f3f0f" />
        <Tree x={180} y={height * 0.2} size={85} color="#1a4a1a" />
        <PineTree x={320} y={height * 0.16} size={95} color="#0f3f0f" />
        <Tree x={450} y={height * 0.19} size={80} color="#1a4a1a" />
        <PineTree x={580} y={height * 0.17} size={92} color="#0f3f0f" />
        <PineTree x={720} y={height * 0.18} size={88} color="#0f3f0f" />
      </div>

      {/* Mid-ground trees */}
      <div style={{ opacity: 0.75 }}>
        <PineTree x={30} y={height * 0.15} size={120} color="#1a5a1a" />
        <PineTree x={150} y={height * 0.2} size={100} color="#1a5a1a" />
        <Tree x={280} y={height * 0.25} size={90} color="#2a6a2a" />
        <PineTree x={400} y={height * 0.18} size={110} color="#1a5a1a" />
        <Tree x={520} y={height * 0.22} size={95} color="#2a6a2a" />
        <PineTree x={650} y={height * 0.2} size={105} color="#1a5a1a" />
      </div>

      {/* Ground layer with gradient */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width,
        height: height * 0.32,
        background: 'linear-gradient(to bottom, #1a5a1a 0%, #155015 40%, #0f400f 100%)',
      }} />

      {/* Ground texture overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width,
        height: height * 0.32,
        background: `
          radial-gradient(ellipse at 20% 80%, rgba(40, 100, 40, 0.4) 0%, transparent 50%),
          radial-gradient(ellipse at 60% 90%, rgba(30, 80, 30, 0.5) 0%, transparent 40%),
          radial-gradient(ellipse at 85% 85%, rgba(45, 110, 45, 0.3) 0%, transparent 45%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Foreground bushes and vegetation */}
      <Bush x={80} y={height * 0.71} size={55} />
      <Bush x={250} y={height * 0.73} size={45} />
      <Bush x={380} y={height * 0.72} size={50} />
      <Bush x={520} y={height * 0.74} size={42} />
      <Bush x={680} y={height * 0.71} size={58} />

      {/* Mushrooms with variety */}
      <Mushroom x={150} y={height * 0.78} size={28} />
      <Mushroom x={320} y={height * 0.8} size={22} color="#FFD700" />
      <Mushroom x={480} y={height * 0.77} size={32} />
      <Mushroom x={620} y={height * 0.79} size={25} color="#FF6347" />

      {/* Forest floor details - fallen leaves suggestion */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width,
          height: height * 0.15,
          pointerEvents: 'none',
          opacity: 0.3,
        }}
        viewBox={`0 0 ${width} ${height * 0.15}`}
        preserveAspectRatio="none"
      >
        {[...Array(15)].map((_, i) => (
          <ellipse
            key={i}
            cx={50 + i * 55 + Math.random() * 30}
            cy={height * 0.1 + Math.random() * 20}
            rx={8 + Math.random() * 6}
            ry={4 + Math.random() * 3}
            fill={i % 3 === 0 ? '#8B4513' : i % 3 === 1 ? '#DAA520' : '#556B2F'}
            transform={`rotate(${Math.random() * 360} ${50 + i * 55} ${height * 0.1})`}
          />
        ))}
      </svg>

      {/* Ambient particles / dust motes in light */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width,
          height,
          pointerEvents: 'none',
          opacity: 0.4,
        }}
        viewBox={`0 0 ${width} ${height}`}
      >
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            cx={100 + i * 40 + Math.random() * 20}
            cy={50 + i * 20 + Math.random() * 100}
            r={1 + Math.random() * 1.5}
            fill="#FFD700"
            opacity={0.3 + Math.random() * 0.4}
          />
        ))}
      </svg>

      {/* Content layer */}
      {children}

      {/* Foreground atmospheric haze */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width,
        height: height * 0.1,
        background: 'linear-gradient(to top, rgba(200, 220, 200, 0.15) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
