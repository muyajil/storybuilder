/**
 * Confetti Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Confetti({ x = 0, y = 0, width = 100, height = 100 }: EffectProps & { width?: number; height?: number }) {
  const id = `confetti-${Math.random().toString(36).substr(2, 9)}`;
  const colors = [
    { main: '#FF0000', light: '#FF6B6B', dark: '#8B0000' },
    { main: '#00FF00', light: '#90EE90', dark: '#006400' },
    { main: '#0000FF', light: '#6495ED', dark: '#00008B' },
    { main: '#FFFF00', light: '#FFFFE0', dark: '#B8860B' },
    { main: '#FF00FF', light: '#FF69B4', dark: '#8B008B' },
    { main: '#00FFFF', light: '#E0FFFF', dark: '#008B8B' },
    { main: '#FFA500', light: '#FFD700', dark: '#D2691E' },
    { main: '#FF69B4', light: '#FFB6C1', dark: '#C71585' },
  ];

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: 'absolute', left: x, top: y, pointerEvents: 'none' }}
    >
      <defs>
        {colors.map((c, i) => (
          <linearGradient key={`grad-${i}`} id={`${id}-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c.light} />
            <stop offset="50%" stopColor={c.main} />
            <stop offset="100%" stopColor={c.dark} />
          </linearGradient>
        ))}
        {/* Glow filter */}
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main confetti pieces */}
      {[...Array(30)].map((_, i) => {
        const xPos = (i * 37 + 11) % width;
        const yPos = (i * 23 + 7) % height;
        const w = 5 + (i % 4);
        const h = 10 + (i % 5);
        const colorIdx = i % colors.length;
        const rotation = (i * 45) % 360;

        return (
          <g key={i} transform={`rotate(${rotation} ${xPos + w/2} ${yPos + h/2})`}>
            {/* Shadow */}
            <rect
              x={xPos + 1}
              y={yPos + 1}
              width={w}
              height={h}
              rx={1}
              fill="black"
              opacity={0.2}
            />
            {/* Main piece */}
            <rect
              x={xPos}
              y={yPos}
              width={w}
              height={h}
              rx={1}
              fill={`url(#${id}-grad-${colorIdx})`}
              opacity={0.85 + (i % 2) * 0.1}
            />
            {/* Highlight */}
            <rect
              x={xPos + 1}
              y={yPos + 1}
              width={w - 2}
              height={h / 3}
              rx={0.5}
              fill="white"
              opacity={0.4}
            />
          </g>
        );
      })}

      {/* Sparkle dots scattered around */}
      {[...Array(15)].map((_, i) => {
        const sparkleX = (i * 53 + 17) % width;
        const sparkleY = (i * 41 + 13) % height;
        return (
          <circle
            key={`sparkle-${i}`}
            cx={sparkleX}
            cy={sparkleY}
            r={1 + (i % 2)}
            fill="white"
            opacity={0.6 + (i % 3) * 0.15}
            filter={`url(#${id}-glow)`}
          />
        );
      })}

      {/* Star-shaped confetti pieces */}
      {[...Array(8)].map((_, i) => {
        const starX = (i * 67 + 23) % width;
        const starY = (i * 47 + 19) % height;
        const colorIdx = (i + 3) % colors.length;
        return (
          <polygon
            key={`star-${i}`}
            points={`${starX},${starY-4} ${starX+1.5},${starY-1.5} ${starX+4},${starY} ${starX+1.5},${starY+1.5} ${starX},${starY+4} ${starX-1.5},${starY+1.5} ${starX-4},${starY} ${starX-1.5},${starY-1.5}`}
            fill={colors[colorIdx].main}
            opacity={0.9}
            filter={`url(#${id}-glow)`}
          />
        );
      })}
    </svg>
  );
}
