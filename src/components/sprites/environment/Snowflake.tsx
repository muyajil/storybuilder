/**
 * Snowflake Sprite Component
 * Enhanced with crystal branches, intricate patterns, and ice-like gradients
 */

import type { ElementProps } from '../types';

export function Snowflake({ x = 0, y = 0, size = 20, color = 'white' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Ice crystal gradient */}
        <linearGradient id="snowflakeCrystalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="50%" stopColor="#E8F4FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0.8" />
        </linearGradient>

        {/* Center glow gradient */}
        <radialGradient id="snowflakeCenterGlow">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="50%" stopColor="#E8F4FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </radialGradient>

        {/* Sparkle filter */}
        <filter id="snowflakeSparkle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <circle cx="10" cy="10" r="9" fill="none" stroke={color} strokeWidth="0.5" opacity="0.2" filter="url(#snowflakeSparkle)" />

      {/* Main arms */}
      <g stroke="url(#snowflakeCrystalGradient)" strokeWidth="1.5" strokeLinecap="round">
        {/* Vertical */}
        <line x1="10" y1="0" x2="10" y2="20" />
        {/* Horizontal */}
        <line x1="0" y1="10" x2="20" y2="10" />
        {/* Diagonal */}
        <line x1="3" y1="3" x2="17" y2="17" />
        <line x1="17" y1="3" x2="3" y2="17" />
      </g>

      {/* Branch details on vertical arm */}
      <g stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.9">
        {/* Top branches */}
        <line x1="10" y1="3" x2="7" y2="5" />
        <line x1="10" y1="3" x2="13" y2="5" />
        <line x1="10" y1="6" x2="8" y2="7.5" />
        <line x1="10" y1="6" x2="12" y2="7.5" />

        {/* Bottom branches */}
        <line x1="10" y1="17" x2="7" y2="15" />
        <line x1="10" y1="17" x2="13" y2="15" />
        <line x1="10" y1="14" x2="8" y2="12.5" />
        <line x1="10" y1="14" x2="12" y2="12.5" />
      </g>

      {/* Branch details on horizontal arm */}
      <g stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.9">
        {/* Left branches */}
        <line x1="3" y1="10" x2="5" y2="7" />
        <line x1="3" y1="10" x2="5" y2="13" />
        <line x1="6" y1="10" x2="7.5" y2="8" />
        <line x1="6" y1="10" x2="7.5" y2="12" />

        {/* Right branches */}
        <line x1="17" y1="10" x2="15" y2="7" />
        <line x1="17" y1="10" x2="15" y2="13" />
        <line x1="14" y1="10" x2="12.5" y2="8" />
        <line x1="14" y1="10" x2="12.5" y2="12" />
      </g>

      {/* Branch details on diagonal arms */}
      <g stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.8">
        {/* Top-left diagonal */}
        <line x1="5" y1="5" x2="4" y2="7" />
        <line x1="5" y1="5" x2="7" y2="4" />

        {/* Top-right diagonal */}
        <line x1="15" y1="5" x2="16" y2="7" />
        <line x1="15" y1="5" x2="13" y2="4" />

        {/* Bottom-left diagonal */}
        <line x1="5" y1="15" x2="4" y2="13" />
        <line x1="5" y1="15" x2="7" y2="16" />

        {/* Bottom-right diagonal */}
        <line x1="15" y1="15" x2="16" y2="13" />
        <line x1="15" y1="15" x2="13" y2="16" />
      </g>

      {/* Center crystal */}
      <circle cx="10" cy="10" r="3.5" fill="url(#snowflakeCenterGlow)" />
      <circle cx="10" cy="10" r="2" fill={color} />

      {/* Inner hexagon pattern */}
      <polygon
        points="10,7 12.6,8.5 12.6,11.5 10,13 7.4,11.5 7.4,8.5"
        fill="none"
        stroke={color}
        strokeWidth="0.5"
        opacity="0.6"
      />

      {/* Tip crystals */}
      <g fill={color} opacity="0.9">
        <circle cx="10" cy="1" r="1" />
        <circle cx="10" cy="19" r="1" />
        <circle cx="1" cy="10" r="1" />
        <circle cx="19" cy="10" r="1" />
        <circle cx="3.5" cy="3.5" r="0.8" />
        <circle cx="16.5" cy="3.5" r="0.8" />
        <circle cx="3.5" cy="16.5" r="0.8" />
        <circle cx="16.5" cy="16.5" r="0.8" />
      </g>

      {/* Sparkle highlights */}
      <g fill={color} opacity="0.8" filter="url(#snowflakeSparkle)">
        <circle cx="10" cy="2" r="0.5" />
        <circle cx="18" cy="10" r="0.5" />
        <circle cx="9" cy="9" r="0.4" />
      </g>
    </svg>
  );
}
