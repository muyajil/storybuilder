/**
 * SpiderWeb Sprite Component
 * Enhanced with silk-like gradients, dew drops, and delicate strand details
 */

import type { ElementProps } from '../types';

export function SpiderWeb({ x = 0, y = 0, size = 60, color = 'white' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Silk strand gradient */}
        <linearGradient id="spiderWebSilkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="50%" stopColor="#E8E8E8" stopOpacity="0.7" />
          <stop offset="100%" stopColor={color} stopOpacity="0.5" />
        </linearGradient>

        {/* Dew drop gradient */}
        <radialGradient id="spiderWebDewDrop" cx="30%" cy="30%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#E0F0FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#B0D0F0" stopOpacity="0.3" />
        </radialGradient>

        {/* Anchor point gradient */}
        <radialGradient id="spiderWebAnchor" cx="50%" cy="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.4" />
        </radialGradient>

        {/* Glow filter for silk */}
        <filter id="spiderWebGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main radial strands */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * Math.PI) / 6;
        const endX = 30 + Math.cos(angle) * 28;
        const endY = 30 + Math.sin(angle) * 28;
        return (
          <line
            key={`radial-${i}`}
            x1="30"
            y1="30"
            x2={endX}
            y2={endY}
            stroke="url(#spiderWebSilkGradient)"
            strokeWidth={i % 3 === 0 ? "1.2" : "0.8"}
            opacity={0.6 + (i % 3) * 0.1}
            filter="url(#spiderWebGlow)"
          />
        );
      })}

      {/* Spiral/concentric web strands */}
      {[8, 13, 18, 23, 27].map((radius, ringIndex) => (
        <g key={`ring-${ringIndex}`}>
          {[...Array(12)].map((_, i) => {
            const angle1 = (i * Math.PI) / 6;
            const angle2 = ((i + 1) * Math.PI) / 6;
            const x1 = 30 + Math.cos(angle1) * radius;
            const y1 = 30 + Math.sin(angle1) * radius;
            const x2 = 30 + Math.cos(angle2) * radius;
            const y2 = 30 + Math.sin(angle2) * radius;
            // Add slight curve for natural look
            const midAngle = ((i + 0.5) * Math.PI) / 6;
            const midRadius = radius + (ringIndex % 2 === 0 ? 1 : -1);
            const mx = 30 + Math.cos(midAngle) * midRadius;
            const my = 30 + Math.sin(midAngle) * midRadius;
            return (
              <path
                key={`segment-${ringIndex}-${i}`}
                d={`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`}
                fill="none"
                stroke={color}
                strokeWidth={ringIndex < 2 ? "0.6" : "0.4"}
                opacity={0.5 + ringIndex * 0.05}
              />
            );
          })}
        </g>
      ))}

      {/* Additional fine spiral detail */}
      <path
        d="M30 30 Q35 28 38 25 Q42 28 44 32 Q42 36 38 38 Q34 36 32 40 Q28 38 25 42 Q22 38 18 36 Q20 32 18 28 Q22 26 25 22 Q28 25 30 22"
        fill="none"
        stroke={color}
        strokeWidth="0.3"
        opacity="0.4"
      />

      {/* Dew drops on web */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * Math.PI) / 4 + 0.2;
        const radius = 12 + (i % 3) * 6;
        const cx = 30 + Math.cos(angle) * radius;
        const cy = 30 + Math.sin(angle) * radius;
        const dropSize = 1 + (i % 3) * 0.5;
        return (
          <g key={`dew-${i}`}>
            <circle
              cx={cx}
              cy={cy}
              r={dropSize}
              fill="url(#spiderWebDewDrop)"
            />
            {/* Highlight on dew drop */}
            <circle
              cx={cx - dropSize * 0.3}
              cy={cy - dropSize * 0.3}
              r={dropSize * 0.3}
              fill="white"
              opacity="0.8"
            />
          </g>
        );
      })}

      {/* Center hub */}
      <circle cx="30" cy="30" r="3" fill="url(#spiderWebAnchor)" />
      <circle cx="30" cy="30" r="1.5" fill={color} opacity="0.8" />

      {/* Anchor points at edges */}
      {[0, 90, 180, 270].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 30 + Math.cos(rad) * 28;
        const cy = 30 + Math.sin(rad) * 28;
        return (
          <circle
            key={`anchor-${i}`}
            cx={cx}
            cy={cy}
            r="1.5"
            fill="url(#spiderWebAnchor)"
          />
        );
      })}

      {/* Broken strand detail (adds realism) */}
      <path
        d="M30 30 Q40 25 42 20"
        fill="none"
        stroke={color}
        strokeWidth="0.4"
        opacity="0.3"
        strokeDasharray="2,1"
      />

      {/* Subtle web sag effect on bottom */}
      <path
        d="M15 45 Q30 48 45 45"
        fill="none"
        stroke={color}
        strokeWidth="0.3"
        opacity="0.4"
      />
    </svg>
  );
}
