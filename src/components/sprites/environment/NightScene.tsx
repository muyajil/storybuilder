/**
 * NightScene Sprite Component
 * Enhanced with atmospheric depth, layered elements, and rich gradients
 */

import type { SceneProps } from '../types';
import { NightSky, Grass, PineTree, Moon } from './index';

export function NightScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      {/* Atmospheric night sky with enhanced depth */}
      <NightSky width={width} height={height * 0.7} />

      {/* Glowing moon with halo effect */}
      <Moon x={width - 100} y={40} />

      {/* Distant misty hills for depth */}
      <svg
        width={width}
        height={height * 0.3}
        viewBox={`0 0 ${width} ${height * 0.3}`}
        style={{ position: 'absolute', top: height * 0.45, left: 0 }}
      >
        <defs>
          <linearGradient id="nightSceneMistGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a2a4a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0a1a2a" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d={`M0 ${height * 0.15} Q${width * 0.2} ${height * 0.05} ${width * 0.4} ${height * 0.12} Q${width * 0.6} ${height * 0.08} ${width * 0.8} ${height * 0.15} Q${width * 0.9} ${height * 0.1} ${width} ${height * 0.18} L${width} ${height * 0.3} L0 ${height * 0.3} Z`}
          fill="url(#nightSceneMistGradient)"
        />
      </svg>

      {/* Rich grass with night tones */}
      <Grass width={width} height={height * 0.3} color="#1a4a1a" />

      {/* Atmospheric glow at ground level */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width,
          height: height * 0.15,
          background: 'linear-gradient(to top, rgba(10, 30, 50, 0.4), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Layered pine trees at different depths */}
      <PineTree x={50} y={height * 0.35} size={90} />
      <PineTree x={width - 120} y={height * 0.4} size={70} />

      {/* Fireflies / atmospheric particles */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
      >
        <defs>
          <radialGradient id="nightSceneFireflyGlow">
            <stop offset="0%" stopColor="#ffffaa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffaa" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={(i * 97 + 50) % width}
            cy={height * 0.5 + (i * 31) % (height * 0.3)}
            r={3 + (i % 2)}
            fill="url(#nightSceneFireflyGlow)"
          />
        ))}
      </svg>

      {children}
    </div>
  );
}
