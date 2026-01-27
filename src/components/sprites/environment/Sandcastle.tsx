/**
 * Sandcastle Sprite Component
 * Enhanced with sand texture, shell decorations, flag detail, and depth
 */

import type { ElementProps } from '../types';

export function Sandcastle({ x = 0, y = 0, size = 60, color = '#F4A460' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 60 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Sand gradient with depth */}
        <linearGradient id="sandcastleSandGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFCC8A" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#E8A050" />
          <stop offset="100%" stopColor="#D49040" />
        </linearGradient>

        {/* Tower side shadow */}
        <linearGradient id="sandcastleTowerShadow" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
        </linearGradient>

        {/* Sand texture pattern */}
        <pattern id="sandcastleTexture" patternUnits="userSpaceOnUse" width="8" height="8">
          <rect width="8" height="8" fill="transparent" />
          <circle cx="2" cy="2" r="0.5" fill="#D49040" opacity="0.4" />
          <circle cx="6" cy="5" r="0.4" fill="#E8A050" opacity="0.3" />
          <circle cx="4" cy="7" r="0.3" fill="#D49040" opacity="0.35" />
        </pattern>

        {/* Flag gradient */}
        <linearGradient id="sandcastleFlagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>

        {/* Wood pole gradient */}
        <linearGradient id="sandcastlePoleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="50%" stopColor="#8B5A33" />
          <stop offset="100%" stopColor="#5B3413" />
        </linearGradient>

        {/* Shell gradient */}
        <radialGradient id="sandcastleShellGradient" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="50%" stopColor="#FFE4D0" />
          <stop offset="100%" stopColor="#DDB8A0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="30" cy="47" rx="28" ry="3" fill="rgba(0,0,0,0.2)" />

      {/* Base / Foundation */}
      <rect x="5" y="35" width="50" height="13" fill="url(#sandcastleSandGradient)" rx="2" />
      <rect x="5" y="35" width="50" height="13" fill="url(#sandcastleTexture)" rx="2" />

      {/* Left Tower */}
      <rect x="8" y="20" width="12" height="20" fill="url(#sandcastleSandGradient)" />
      <rect x="8" y="20" width="12" height="20" fill="url(#sandcastleTexture)" />
      <rect x="8" y="20" width="12" height="20" fill="url(#sandcastleTowerShadow)" />

      {/* Right Tower */}
      <rect x="40" y="20" width="12" height="20" fill="url(#sandcastleSandGradient)" />
      <rect x="40" y="20" width="12" height="20" fill="url(#sandcastleTexture)" />
      <rect x="40" y="20" width="12" height="20" fill="url(#sandcastleTowerShadow)" />

      {/* Main Tower (center) */}
      <rect x="22" y="10" width="16" height="30" fill="url(#sandcastleSandGradient)" />
      <rect x="22" y="10" width="16" height="30" fill="url(#sandcastleTexture)" />
      <rect x="22" y="10" width="16" height="30" fill="url(#sandcastleTowerShadow)" />

      {/* Left Battlements */}
      <rect x="8" y="16" width="4" height="6" fill="url(#sandcastleSandGradient)" />
      <rect x="16" y="16" width="4" height="6" fill="url(#sandcastleSandGradient)" />

      {/* Right Battlements */}
      <rect x="40" y="16" width="4" height="6" fill="url(#sandcastleSandGradient)" />
      <rect x="48" y="16" width="4" height="6" fill="url(#sandcastleSandGradient)" />

      {/* Center Battlements */}
      <rect x="24" y="6" width="4" height="6" fill="url(#sandcastleSandGradient)" />
      <rect x="32" y="6" width="4" height="6" fill="url(#sandcastleSandGradient)" />

      {/* Flag pole with detail */}
      <rect x="29" y="0" width="2" height="10" fill="url(#sandcastlePoleGradient)" />

      {/* Flag with wave effect */}
      <path d="M31,0 Q35,1.5 31,3 Q35,4.5 31,6 L38,3 Z" fill="url(#sandcastleFlagGradient)" />
      <line x1="31" y1="0" x2="31" y2="6" stroke="#CC0000" strokeWidth="0.3" />

      {/* Door with arch */}
      <path d="M28 40 L28 30 Q30 26 32 30 L32 40 Z" fill="#6B4020" />
      <path d="M28.5 40 L28.5 31 Q30 27.5 31.5 31 L31.5 40" stroke="#5A3010" strokeWidth="0.5" fill="none" />

      {/* Door handle */}
      <circle cx="31" cy="35" r="0.8" fill="#8B6914" />

      {/* Windows */}
      <rect x="28" y="15" width="4" height="5" fill="#4A3020" rx="1" />
      <line x1="30" y1="15" x2="30" y2="20" stroke="#3A2010" strokeWidth="0.5" />
      <line x1="28" y1="17.5" x2="32" y2="17.5" stroke="#3A2010" strokeWidth="0.5" />

      {/* Small windows on side towers */}
      <rect x="12" y="25" width="3" height="4" fill="#4A3020" rx="0.5" />
      <rect x="45" y="25" width="3" height="4" fill="#4A3020" rx="0.5" />

      {/* Shell decorations */}
      <ellipse cx="15" cy="38" rx="2.5" ry="1.5" fill="url(#sandcastleShellGradient)" />
      <ellipse cx="45" cy="42" rx="2" ry="1.2" fill="url(#sandcastleShellGradient)" />
      <ellipse cx="52" cy="38" rx="1.8" ry="1" fill="url(#sandcastleShellGradient)" />

      {/* Sand texture details */}
      <circle cx="10" cy="44" r="0.8" fill="#D49040" opacity="0.5" />
      <circle cx="25" cy="43" r="0.6" fill="#E8A050" opacity="0.4" />
      <circle cx="50" cy="45" r="0.7" fill="#D49040" opacity="0.5" />

      {/* Highlight edges */}
      <line x1="8" y1="20" x2="8" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <line x1="22" y1="10" x2="22" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <line x1="40" y1="20" x2="40" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
    </svg>
  );
}
