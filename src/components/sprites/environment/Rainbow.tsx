/**
 * Rainbow Sprite Component
 * Enhanced with smooth gradients, glow effects, and atmospheric blending
 */

import type { ElementProps } from '../types';

export function Rainbow({ x = 0, y = 0, size = 200 }: ElementProps) {
  const colors = [
    { color: '#FF0000', light: '#FF6666' }, // Red
    { color: '#FF7F00', light: '#FFAA55' }, // Orange
    { color: '#FFFF00', light: '#FFFF77' }, // Yellow
    { color: '#00FF00', light: '#77FF77' }, // Green
    { color: '#0000FF', light: '#6666FF' }, // Blue
    { color: '#4B0082', light: '#8844AA' }, // Indigo
    { color: '#9400D3', light: '#BB66EE' }, // Violet
  ];

  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 200 100"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Individual band gradients for smooth color transitions */}
        {colors.map((c, i) => (
          <linearGradient key={`grad-${i}`} id={`rainbowBand${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={c.color} stopOpacity="0.1" />
            <stop offset="15%" stopColor={c.color} stopOpacity="0.6" />
            <stop offset="50%" stopColor={c.light} stopOpacity="0.8" />
            <stop offset="85%" stopColor={c.color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={c.color} stopOpacity="0.1" />
          </linearGradient>
        ))}

        {/* Outer glow gradient */}
        <radialGradient id="rainbowOuterGlow" cx="50%" cy="100%" r="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="50%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        {/* Sparkle filter */}
        <filter id="rainbowGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Shimmer gradient */}
        <linearGradient id="rainbowShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="30%" stopColor="white" stopOpacity="0.2" />
          <stop offset="50%" stopColor="white" stopOpacity="0.4" />
          <stop offset="70%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Outer glow effect */}
      <path
        d="M5 100 Q100 -10 195 100"
        fill="none"
        stroke="url(#rainbowOuterGlow)"
        strokeWidth="70"
        opacity="0.5"
      />

      {/* Rainbow bands with gradients */}
      {colors.map((c, i) => (
        <g key={i}>
          {/* Main band */}
          <path
            d={`M${8 + i * 2} 100 Q100 ${8 + i * 10} ${192 - i * 2} 100`}
            fill="none"
            stroke={`url(#rainbowBand${i})`}
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Inner highlight */}
          <path
            d={`M${10 + i * 2} 100 Q100 ${10 + i * 10} ${190 - i * 2} 100`}
            fill="none"
            stroke={c.light}
            strokeWidth="2"
            opacity="0.3"
          />
        </g>
      ))}

      {/* Shimmer overlay */}
      <path
        d="M10 100 Q100 10 190 100"
        fill="none"
        stroke="url(#rainbowShimmer)"
        strokeWidth="50"
        opacity="0.4"
      />

      {/* Sparkle effects */}
      <g filter="url(#rainbowGlow)">
        <circle cx="50" cy="60" r="2" fill="white" opacity="0.8" />
        <circle cx="100" cy="35" r="2.5" fill="white" opacity="0.9" />
        <circle cx="150" cy="55" r="2" fill="white" opacity="0.8" />
        <circle cx="75" cy="48" r="1.5" fill="white" opacity="0.7" />
        <circle cx="125" cy="42" r="1.5" fill="white" opacity="0.7" />
      </g>

      {/* Star-like sparkles */}
      <g opacity="0.6">
        <path d="M80 52 L82 50 L84 52 L82 54 Z" fill="white" />
        <path d="M120 40 L122.5 37 L125 40 L122.5 43 Z" fill="white" />
        <path d="M160 58 L161.5 56 L163 58 L161.5 60 Z" fill="white" />
      </g>

      {/* Faint secondary rainbow (outer) */}
      <g opacity="0.15">
        {[...colors].reverse().map((c, i) => (
          <path
            key={`secondary-${i}`}
            d={`M0 100 Q100 ${-15 - i * 6} 200 100`}
            fill="none"
            stroke={c.color}
            strokeWidth="5"
          />
        ))}
      </g>
    </svg>
  );
}
