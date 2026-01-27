/**
 * Cloud Sprite Component
 * Enhanced with soft gradients, atmospheric depth, and fluffy texture
 */

import type { ElementProps } from '../types';

export function Cloud({ x = 0, y = 0, size = 80, color = 'white' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 80 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main cloud gradient for fluffy 3D look */}
        <radialGradient id="cloudMainGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} />
          <stop offset="70%" stopColor="#f5f5f5" />
          <stop offset="100%" stopColor="#e8e8e8" />
        </radialGradient>
        {/* Left puff gradient */}
        <radialGradient id="cloudLeftGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor={color} />
          <stop offset="80%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </radialGradient>
        {/* Right puff gradient */}
        <radialGradient id="cloudRightGradient" cx="60%" cy="35%" r="65%">
          <stop offset="0%" stopColor={color} />
          <stop offset="75%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#e5e5e5" />
        </radialGradient>
        {/* Center top puff (brightest) */}
        <radialGradient id="cloudTopGradient" cx="45%" cy="25%" r="55%">
          <stop offset="0%" stopColor={color} />
          <stop offset="60%" stopColor="#fafafa" />
          <stop offset="100%" stopColor="#f0f0f0" />
        </radialGradient>
        {/* Bottom shadow gradient */}
        <linearGradient id="cloudShadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="60%" stopColor="#d0d0d0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#b0b0b0" stopOpacity="0.4" />
        </linearGradient>
        {/* Soft edge filter */}
        <filter id="cloudSoftEdge">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </defs>

      {/* Back layer - creates depth */}
      <ellipse cx="25" cy="30" rx="18" ry="12" fill="#e8e8e8" opacity="0.6" />
      <ellipse cx="55" cy="28" rx="16" ry="10" fill="#e8e8e8" opacity="0.6" />

      {/* Main cloud body */}
      {/* Left puff */}
      <ellipse cx="20" cy="26" rx="17" ry="13" fill="url(#cloudLeftGradient)" />

      {/* Center-left puff */}
      <ellipse cx="32" cy="22" rx="16" ry="14" fill="url(#cloudMainGradient)" />

      {/* Center top puff (highest, brightest) */}
      <ellipse cx="40" cy="18" rx="18" ry="15" fill="url(#cloudTopGradient)" />

      {/* Center-right puff */}
      <ellipse cx="52" cy="22" rx="15" ry="13" fill="url(#cloudMainGradient)" />

      {/* Right puff */}
      <ellipse cx="62" cy="26" rx="16" ry="12" fill="url(#cloudRightGradient)" />

      {/* Bottom fill to create solid cloud base */}
      <ellipse cx="40" cy="30" rx="30" ry="10" fill="url(#cloudMainGradient)" />
      <ellipse cx="25" cy="32" rx="18" ry="8" fill="url(#cloudLeftGradient)" />
      <ellipse cx="55" cy="31" rx="16" ry="8" fill="url(#cloudRightGradient)" />

      {/* Highlight puffs on top */}
      <ellipse cx="30" cy="16" rx="8" ry="6" fill={color} opacity="0.7" />
      <ellipse cx="45" cy="12" rx="10" ry="7" fill={color} opacity="0.8" />
      <ellipse cx="58" cy="17" rx="7" ry="5" fill={color} opacity="0.6" />

      {/* Soft shadows on bottom */}
      <ellipse cx="40" cy="34" rx="28" ry="6" fill="url(#cloudShadowGradient)" />

      {/* Small highlight details */}
      <ellipse cx="25" cy="20" rx="4" ry="3" fill="white" opacity="0.5" />
      <ellipse cx="42" cy="14" rx="5" ry="3" fill="white" opacity="0.6" />
      <ellipse cx="60" cy="22" rx="3" ry="2" fill="white" opacity="0.4" />
    </svg>
  );
}
