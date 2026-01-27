/**
 * Waterfall Sprite Component
 * High quality with flowing water, mist effects, and rocky cliffs
 */

import type { ElementProps } from '../types';

export function Waterfall({ x = 0, y = 0, size = 80, color = '#4169E1' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 80 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Rock gradient */}
        <linearGradient id="waterfallRockGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="30%" stopColor="#696969" />
          <stop offset="70%" stopColor="#5a5a5a" />
          <stop offset="100%" stopColor="#3a3a3a" />
        </linearGradient>
        {/* Rock texture pattern */}
        <pattern id="waterfallRockPattern" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="8" height="8" fill="none" />
          <circle cx="2" cy="2" r="1" fill="#3a3a3a" opacity="0.3" />
          <circle cx="6" cy="5" r="0.8" fill="#5a5a5a" opacity="0.2" />
          <line x1="0" y1="4" x2="8" y2="4" stroke="#4a4a4a" strokeWidth="0.3" opacity="0.2" />
        </pattern>
        {/* Water flow gradient */}
        <linearGradient id="waterfallWaterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6090E0" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#3060C0" />
          <stop offset="100%" stopColor="#2050A0" />
        </linearGradient>
        {/* Water highlight */}
        <linearGradient id="waterfallWaterHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="50%" stopColor="#80B0F0" stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.5" />
        </linearGradient>
        {/* Splash gradient */}
        <radialGradient id="waterfallSplashGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#ADD8E6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.1" />
        </radialGradient>
        {/* Mist gradient */}
        <radialGradient id="waterfallMistGradient" cx="50%" cy="100%" r="80%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#E0F0FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C0E0FF" stopOpacity="0" />
        </radialGradient>
        {/* Foam pattern */}
        <pattern id="waterfallFoamPattern" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#FFFFFF" opacity="0.3" />
          <circle cx="5" cy="4" r="1" fill="#FFFFFF" opacity="0.2" />
        </pattern>
        {/* Flow lines filter */}
        <filter id="waterfallFlowBlur" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </defs>

      {/* Left rock formation / Felsen links */}
      <path d="M0 0 L0 55 L28 50 L30 0 Z" fill="url(#waterfallRockGradient)" />
      <path d="M0 0 L0 55 L28 50 L30 0 Z" fill="url(#waterfallRockPattern)" />
      {/* Rock detail */}
      <line x1="8" y1="5" x2="5" y2="48" stroke="#3a3a3a" strokeWidth="1" opacity="0.3" />
      <line x1="20" y1="3" x2="22" y2="45" stroke="#5a5a5a" strokeWidth="0.5" opacity="0.2" />
      {/* Moss on rocks */}
      <ellipse cx="5" cy="30" rx="4" ry="6" fill="#4a6a4a" opacity="0.4" />
      <ellipse cx="15" cy="40" rx="3" ry="4" fill="#5a7a5a" opacity="0.3" />

      {/* Right rock formation / Felsen rechts */}
      <path d="M50 0 L52 50 L80 55 L80 0 Z" fill="url(#waterfallRockGradient)" />
      <path d="M50 0 L52 50 L80 55 L80 0 Z" fill="url(#waterfallRockPattern)" />
      {/* Rock detail */}
      <line x1="60" y1="5" x2="58" y2="48" stroke="#3a3a3a" strokeWidth="1" opacity="0.3" />
      <line x1="72" y1="3" x2="75" y2="50" stroke="#5a5a5a" strokeWidth="0.5" opacity="0.2" />
      {/* Moss on rocks */}
      <ellipse cx="75" cy="35" rx="4" ry="5" fill="#4a6a4a" opacity="0.4" />
      <ellipse cx="65" cy="25" rx="3" ry="4" fill="#5a7a5a" opacity="0.3" />

      {/* Mist behind water */}
      <ellipse cx="40" cy="95" rx="35" ry="20" fill="url(#waterfallMistGradient)" />

      {/* Main water flow / Wasser */}
      <rect x="28" y="0" width="24" height="95" fill="url(#waterfallWaterGradient)" opacity="0.85" />

      {/* Water flow texture lines */}
      {[...Array(6)].map((_, i) => (
        <line
          key={`flow-${i}`}
          x1={31 + i * 4}
          y1="0"
          x2={31 + i * 4 + (i % 2 === 0 ? 1 : -1)}
          y2="95"
          stroke="#80B0F0"
          strokeWidth={0.8 + (i % 3) * 0.3}
          opacity={0.3 + (i % 3) * 0.1}
          filter="url(#waterfallFlowBlur)"
        />
      ))}

      {/* Water highlights */}
      <rect x="33" y="0" width="4" height="95" fill="url(#waterfallWaterHighlight)" opacity="0.4" />
      <rect x="43" y="0" width="3" height="95" fill="url(#waterfallWaterHighlight)" opacity="0.3" />

      {/* Cascading water edge detail */}
      <path d="M28 0 Q26 25 28 50 Q30 75 28 95" stroke="#6090E0" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M52 0 Q54 25 52 50 Q50 75 52 95" stroke="#6090E0" strokeWidth="2" fill="none" opacity="0.5" />

      {/* Splash pool / Spritzer */}
      <ellipse cx="40" cy="108" rx="35" ry="12" fill="url(#waterfallSplashGradient)" />

      {/* Foam / Schaum */}
      <ellipse cx="40" cy="100" rx="20" ry="8" fill="url(#waterfallFoamPattern)" />
      <circle cx="28" cy="102" r="9" fill="#FFFFFF" opacity="0.6" />
      <circle cx="52" cy="104" r="9" fill="#FFFFFF" opacity="0.6" />
      <circle cx="40" cy="108" r="7" fill="#FFFFFF" opacity="0.5" />

      {/* Foam bubbles */}
      <circle cx="35" cy="98" r="3" fill="#FFFFFF" opacity="0.7" />
      <circle cx="45" cy="100" r="2.5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="30" cy="105" r="2" fill="#FFFFFF" opacity="0.5" />
      <circle cx="50" cy="107" r="2" fill="#FFFFFF" opacity="0.5" />

      {/* Spray droplets */}
      {[...Array(8)].map((_, i) => {
        const dropX = 25 + (i * 7) % 30;
        const dropY = 90 + (i * 3) % 15;
        return (
          <circle
            key={`drop-${i}`}
            cx={dropX}
            cy={dropY}
            r={1 + (i % 2)}
            fill="#ADD8E6"
            opacity={0.4 + (i % 3) * 0.1}
          />
        );
      })}

      {/* Water entry at top */}
      <ellipse cx="40" cy="3" rx="12" ry="4" fill="#80B0F0" opacity="0.5" />
    </svg>
  );
}
