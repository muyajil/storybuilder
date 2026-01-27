/**
 * HealthBar Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function HealthBar({ x = 0, y = 0, width = 100, health = 100, maxHealth = 100 }: EffectProps & { width?: number; health?: number; maxHealth?: number }) {
  const percentage = Math.max(0, Math.min(100, (health / maxHealth) * 100));
  const id = `healthbar-${Math.random().toString(36).substr(2, 9)}`;

  // Dynamic color based on health percentage
  const getColors = () => {
    if (percentage > 50) {
      return { start: '#90EE90', mid: '#00FF00', end: '#006400', glow: '#00FF00' };
    } else if (percentage > 25) {
      return { start: '#FFFF99', mid: '#FFFF00', end: '#B8860B', glow: '#FFD700' };
    } else {
      return { start: '#FF6B6B', mid: '#FF0000', end: '#8B0000', glow: '#FF0000' };
    }
  };

  const colors = getColors();

  return (
    <svg
      width={width}
      height={16}
      viewBox={`0 0 ${width} 16`}
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Background gradient */}
        <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Health bar gradient */}
        <linearGradient id={`${id}-bar`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.start} />
          <stop offset="50%" stopColor={colors.mid} />
          <stop offset="100%" stopColor={colors.end} />
        </linearGradient>
        {/* Shine gradient */}
        <linearGradient id={`${id}-shine`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.7" />
          <stop offset="50%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Glow effect */}
        <filter id={`${id}-glow`} x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Inner shadow */}
        <filter id={`${id}-inner`}>
          <feOffset dx="0" dy="1" />
          <feGaussianBlur stdDeviation="1" result="offset-blur" />
          <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
          <feFlood floodColor="black" floodOpacity="0.4" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
      </defs>

      {/* Outer frame shadow */}
      <rect x="1" y="1" width={width - 1} height="15" rx="4" fill="#000" opacity="0.3" />

      {/* Main background */}
      <rect x="0" y="0" width={width} height="16" rx="4" fill={`url(#${id}-bg)`} />

      {/* Inner border */}
      <rect x="1" y="1" width={width - 2} height="14" rx="3" fill="none" stroke="#555" strokeWidth="1" />

      {/* Health bar glow */}
      {percentage > 0 && (
        <rect
          x="2"
          y="2"
          width={Math.max(0, (width - 4) * percentage / 100)}
          height="12"
          rx="3"
          fill={colors.glow}
          opacity="0.3"
          filter={`url(#${id}-glow)`}
        />
      )}

      {/* Main health bar */}
      {percentage > 0 && (
        <rect
          x="2"
          y="2"
          width={Math.max(0, (width - 4) * percentage / 100)}
          height="12"
          rx="3"
          fill={`url(#${id}-bar)`}
        />
      )}

      {/* Health bar shine */}
      {percentage > 0 && (
        <rect
          x="2"
          y="2"
          width={Math.max(0, (width - 4) * percentage / 100)}
          height="6"
          rx="3"
          fill={`url(#${id}-shine)`}
        />
      )}

      {/* Segment lines for visual interest */}
      {[...Array(Math.floor(width / 20))].map((_, i) => (
        <line
          key={i}
          x1={(i + 1) * 20}
          y1="3"
          x2={(i + 1) * 20}
          y2="13"
          stroke="#000"
          strokeWidth="1"
          opacity="0.2"
        />
      ))}

      {/* Edge highlight */}
      <rect x="2" y="2" width={width - 4} height="1" rx="0.5" fill="white" opacity="0.1" />

      {/* Sparkle at health bar end */}
      {percentage > 5 && (
        <>
          <circle
            cx={2 + (width - 4) * percentage / 100 - 3}
            cy="8"
            r="1.5"
            fill="white"
            opacity="0.8"
          />
          <circle
            cx={2 + (width - 4) * percentage / 100 - 6}
            cy="5"
            r="0.8"
            fill="white"
            opacity="0.5"
          />
        </>
      )}
    </svg>
  );
}
