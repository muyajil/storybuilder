/**
 * Lava Sprite Component
 * Enhanced with molten flow effects
 */

import type { GroundProps } from '../types';

export function Lava({ width = 800, height = 100, color = '#FF4500' }: GroundProps) {
  // Create color variations
  const lavaRed = '#FF0000';
  const lavaDarkRed = '#8B0000';
  const lavaOrange = '#FF6600';
  const lavaYellow = '#FFD700';
  const lavaBright = '#FFFF00';
  const crustDark = '#1a0000';
  const crustMid = '#330000';

  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      overflow: 'hidden',
    }}>
      {/* Base dark crust layer */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(to bottom,
          ${crustMid} 0%,
          ${crustDark} 100%)`,
      }} />

      {/* Main lava gradient */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(to bottom,
          ${color} 0%,
          ${lavaOrange} 30%,
          ${lavaRed} 60%,
          ${lavaDarkRed} 100%)`,
        opacity: 0.9,
      }} />

      {/* Hot spots / bright areas */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(ellipse at 15% 40%, ${lavaYellow} 0%, transparent 25%),
          radial-gradient(ellipse at 40% 60%, ${lavaBright} 0%, transparent 15%),
          radial-gradient(ellipse at 65% 35%, ${lavaYellow} 0%, transparent 20%),
          radial-gradient(ellipse at 85% 55%, ${lavaBright} 0%, transparent 18%),
          radial-gradient(ellipse at 30% 80%, ${lavaOrange} 0%, transparent 30%),
          radial-gradient(ellipse at 70% 75%, ${lavaOrange} 0%, transparent 25%)
        `,
        opacity: 0.7,
        pointerEvents: 'none',
      }} />

      {/* SVG details for cracks and bubbles */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Lava glow gradient */}
          <radialGradient id="lavaGlowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={lavaBright} />
            <stop offset="40%" stopColor={lavaYellow} />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>

          {/* Bubble gradient */}
          <radialGradient id="lavaBubbleGradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor={lavaBright} />
            <stop offset="50%" stopColor={lavaYellow} />
            <stop offset="100%" stopColor={lavaOrange} />
          </radialGradient>

          {/* Crust crack gradient */}
          <linearGradient id="lavaCrackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={lavaYellow} />
            <stop offset="50%" stopColor={lavaOrange} />
            <stop offset="100%" stopColor={lavaRed} />
          </linearGradient>

          {/* Glow filter */}
          <filter id="lavaGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dark crust patches */}
        <g fill={crustDark} opacity="0.6">
          {[...Array(8)].map((_, i) => (
            <ellipse
              key={`crust-${i}`}
              cx={50 + i * 100}
              cy={height * 0.3 + (i % 3) * 20}
              rx={30 + (i % 4) * 10}
              ry={15 + (i % 3) * 5}
            />
          ))}
        </g>

        {/* Crust cracks with glowing lava */}
        <g stroke="url(#lavaCrackGradient)" strokeWidth="3" fill="none" opacity="0.8">
          <path d={`M0 ${height * 0.4} Q${width * 0.1} ${height * 0.3} ${width * 0.2} ${height * 0.45}`} />
          <path d={`M${width * 0.25} ${height * 0.2} Q${width * 0.35} ${height * 0.4} ${width * 0.45} ${height * 0.25}`} />
          <path d={`M${width * 0.5} ${height * 0.5} Q${width * 0.6} ${height * 0.3} ${width * 0.7} ${height * 0.55}`} />
          <path d={`M${width * 0.75} ${height * 0.35} Q${width * 0.85} ${height * 0.5} ${width} ${height * 0.4}`} />
        </g>

        {/* Smaller crack details */}
        <g stroke={lavaOrange} strokeWidth="1.5" fill="none" opacity="0.6">
          <path d={`M${width * 0.15} ${height * 0.6} L${width * 0.18} ${height * 0.5} L${width * 0.22} ${height * 0.65}`} />
          <path d={`M${width * 0.4} ${height * 0.7} L${width * 0.42} ${height * 0.55} L${width * 0.38} ${height * 0.45}`} />
          <path d={`M${width * 0.65} ${height * 0.6} L${width * 0.68} ${height * 0.45}`} />
          <path d={`M${width * 0.85} ${height * 0.7} L${width * 0.88} ${height * 0.55} L${width * 0.92} ${height * 0.65}`} />
        </g>

        {/* Lava bubbles */}
        {[...Array(12)].map((_, i) => (
          <g key={`bubble-${i}`}>
            <circle
              cx={30 + i * 70 + (i % 3) * 20}
              cy={height * 0.3 + (i % 4) * 15}
              r={4 + (i % 3) * 2}
              fill="url(#lavaBubbleGradient)"
              filter="url(#lavaGlowFilter)"
              opacity={0.6 + (i % 3) * 0.1}
            />
            <circle
              cx={28 + i * 70 + (i % 3) * 20}
              cy={height * 0.28 + (i % 4) * 15}
              r={1.5 + (i % 2)}
              fill={lavaBright}
              opacity="0.8"
            />
          </g>
        ))}

        {/* Rising heat bubbles (smaller) */}
        {[...Array(15)].map((_, i) => (
          <circle
            key={`heat-${i}`}
            cx={20 + i * 55}
            cy={height * 0.15 + (i % 5) * 12}
            r={2 + (i % 2)}
            fill={lavaYellow}
            opacity={0.4 + (i % 3) * 0.15}
          />
        ))}
      </svg>

      {/* Top surface glow/heat haze */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '40%',
        background: `linear-gradient(to bottom,
          ${lavaOrange}66 0%,
          ${color}33 50%,
          transparent 100%)`,
        pointerEvents: 'none',
      }} />

      {/* Bright edge at top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '5px',
        background: `linear-gradient(to right,
          ${lavaYellow} 0%,
          ${lavaOrange} 20%,
          ${lavaYellow} 40%,
          ${lavaOrange} 60%,
          ${lavaYellow} 80%,
          ${lavaOrange} 100%)`,
        opacity: 0.8,
      }} />

      {/* Bottom darker area */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '30%',
        background: `linear-gradient(to top,
          ${crustDark} 0%,
          transparent 100%)`,
        opacity: 0.5,
        pointerEvents: 'none',
      }} />
    </div>
  );
}
