/**
 * Snowfall Sprite Component
 * Enhanced with varied snowflake sizes, depth layers, and gentle motion feel
 */

import type { ElementProps } from '../types';

export function Snowfall({ x = 0, y = 0, width = 200, height = 200 }: ElementProps & { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: 'absolute', left: x, top: y, pointerEvents: 'none' }}
    >
      <defs>
        {/* Snowflake gradient for depth */}
        <radialGradient id="snowfallFlakeGradient">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="0.8" />
          <stop offset="100%" stopColor="white" stopOpacity="0.5" />
        </radialGradient>

        {/* Blur filter for distant flakes */}
        <filter id="snowfallDistantBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
        </filter>

        {/* Subtle glow for close flakes */}
        <filter id="snowfallGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background layer - very small, distant snowflakes */}
      {[...Array(60)].map((_, i) => (
        <circle
          key={`bg-${i}`}
          cx={(i * 37 + 11) % width}
          cy={(i * 23 + 5) % height}
          r={0.8 + (i % 2) * 0.3}
          fill="white"
          opacity={0.2 + (i % 3) * 0.05}
          filter="url(#snowfallDistantBlur)"
        />
      ))}

      {/* Middle layer - medium snowflakes */}
      {[...Array(40)].map((_, i) => (
        <circle
          key={`mid-${i}`}
          cx={(i * 41 + 13) % width}
          cy={(i * 29 + 7) % height}
          r={1.5 + (i % 3) * 0.5}
          fill="url(#snowfallFlakeGradient)"
          opacity={0.4 + (i % 4) * 0.1}
        />
      ))}

      {/* Foreground layer - larger, detailed snowflakes */}
      {[...Array(20)].map((_, i) => {
        const cx = (i * 53 + 17) % width;
        const cy = (i * 37 + 11) % height;
        const size = 3 + (i % 3);
        return (
          <g key={`fg-${i}`} opacity={0.6 + (i % 3) * 0.1}>
            {/* Main flake body */}
            <circle
              cx={cx}
              cy={cy}
              r={size}
              fill="url(#snowfallFlakeGradient)"
              filter={i % 4 === 0 ? 'url(#snowfallGlow)' : undefined}
            />
            {/* Crystal arms for larger flakes */}
            {size > 3.5 && (
              <g stroke="white" strokeWidth="0.3" opacity="0.7">
                <line x1={cx} y1={cy - size * 0.8} x2={cx} y2={cy + size * 0.8} />
                <line x1={cx - size * 0.8} y1={cy} x2={cx + size * 0.8} y2={cy} />
                <line x1={cx - size * 0.5} y1={cy - size * 0.5} x2={cx + size * 0.5} y2={cy + size * 0.5} />
                <line x1={cx + size * 0.5} y1={cy - size * 0.5} x2={cx - size * 0.5} y2={cy + size * 0.5} />
              </g>
            )}
          </g>
        );
      })}

      {/* Extra detailed snowflakes (sparse) */}
      {[...Array(8)].map((_, i) => {
        const cx = (i * 97 + 31) % width;
        const cy = (i * 67 + 23) % height;
        return (
          <g key={`detail-${i}`} opacity="0.7">
            {/* Hexagonal snowflake pattern */}
            <circle cx={cx} cy={cy} r="2" fill="white" />
            {[...Array(6)].map((_, j) => {
              const angle = (j * Math.PI) / 3;
              const endX = cx + Math.cos(angle) * 5;
              const endY = cy + Math.sin(angle) * 5;
              const midX = cx + Math.cos(angle) * 3;
              const midY = cy + Math.sin(angle) * 3;
              return (
                <g key={`arm-${j}`}>
                  <line x1={cx} y1={cy} x2={endX} y2={endY} stroke="white" strokeWidth="0.5" />
                  {/* Branch details */}
                  <line
                    x1={midX}
                    y1={midY}
                    x2={midX + Math.cos(angle + 0.5) * 1.5}
                    y2={midY + Math.sin(angle + 0.5) * 1.5}
                    stroke="white"
                    strokeWidth="0.3"
                  />
                  <line
                    x1={midX}
                    y1={midY}
                    x2={midX + Math.cos(angle - 0.5) * 1.5}
                    y2={midY + Math.sin(angle - 0.5) * 1.5}
                    stroke="white"
                    strokeWidth="0.3"
                  />
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Sparkle highlights on some flakes */}
      {[...Array(10)].map((_, i) => (
        <circle
          key={`sparkle-${i}`}
          cx={(i * 71 + 19) % width}
          cy={(i * 43 + 13) % height}
          r="1"
          fill="white"
          opacity="0.9"
          filter="url(#snowfallGlow)"
        />
      ))}
    </svg>
  );
}
