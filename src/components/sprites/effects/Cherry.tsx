/**
 * Cherry Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Cherry({ x = 0, y = 0, size = 24, color = '#DC143C' }: EffectProps) {
  const id = `cherry-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Cherry gradient */}
        <radialGradient id={`${id}-cherry`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>
        {/* Glow effect */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Stem gradient */}
        <linearGradient id={`${id}-stem`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#32CD32" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#006400" />
        </linearGradient>
        {/* Leaf gradient */}
        <linearGradient id={`${id}-leaf`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#006400" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id={`${id}-highlight`} cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Stems with curve */}
      <path d="M12 3 Q8 7 6 14" stroke={`url(#${id}-stem)`} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M12 3 Q16 7 18 14" stroke={`url(#${id}-stem)`} strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Stem highlights */}
      <path d="M11.5 4 Q8 7 6.5 12" stroke="#90EE90" strokeWidth="0.8" fill="none" opacity="0.5" strokeLinecap="round" />
      <path d="M12.5 4 Q16 7 17.5 12" stroke="#90EE90" strokeWidth="0.8" fill="none" opacity="0.5" strokeLinecap="round" />

      {/* Left cherry glow */}
      <circle cx="6" cy="18" r="6.5" fill={`url(#${id}-glow)`} />
      {/* Right cherry glow */}
      <circle cx="18" cy="18" r="6.5" fill={`url(#${id}-glow)`} />

      {/* Left cherry */}
      <circle cx="6" cy="18" r="5" fill={`url(#${id}-cherry)`} />
      {/* Right cherry */}
      <circle cx="18" cy="18" r="5" fill={`url(#${id}-cherry)`} />

      {/* Left cherry highlight */}
      <ellipse cx="4" cy="16" rx="2" ry="1.5" fill={`url(#${id}-highlight)`} />
      <circle cx="3.5" cy="15.5" r="1" fill="white" opacity="0.9" />

      {/* Right cherry highlight */}
      <ellipse cx="16" cy="16" rx="2" ry="1.5" fill={`url(#${id}-highlight)`} />
      <circle cx="15.5" cy="15.5" r="1" fill="white" opacity="0.9" />

      {/* Bottom reflections */}
      <ellipse cx="7" cy="20" rx="1.5" ry="0.8" fill="white" opacity="0.2" />
      <ellipse cx="19" cy="20" rx="1.5" ry="0.8" fill="white" opacity="0.2" />

      {/* Leaf */}
      <ellipse cx="12" cy="3" rx="3.5" ry="2.5" fill={`url(#${id}-leaf)`} />
      <ellipse cx="11" cy="2.5" rx="1.5" ry="1" fill="#90EE90" opacity="0.6" />

      {/* Leaf vein */}
      <path d="M10 3 L14 3" stroke="#006400" strokeWidth="0.5" opacity="0.4" />

      {/* Sparkle effects */}
      <circle cx="3" cy="15" r="0.6" fill="white" opacity="0.8" />
      <circle cx="15" cy="15" r="0.6" fill="white" opacity="0.8" />
      <circle cx="12" cy="1" r="0.5" fill="white" opacity="0.7" />
    </svg>
  );
}
