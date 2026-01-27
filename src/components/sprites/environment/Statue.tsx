/**
 * Statue Sprite Component
 * Enhanced with stone texture, weathering, and sculptural depth
 */

import type { ElementProps } from '../types';

export function Statue({ x = 0, y = 0, size = 60, color = '#808080' }: ElementProps) {
  return (
    <svg
      width={size * 0.6}
      height={size}
      viewBox="0 0 36 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Stone gradient */}
        <linearGradient id="statueStoneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#606060" />
          <stop offset="30%" stopColor={color} />
          <stop offset="50%" stopColor="#909090" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#505050" />
        </linearGradient>

        {/* Pedestal gradient */}
        <linearGradient id="statuePedestalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#909090" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#606060" />
          <stop offset="100%" stopColor="#505050" />
        </linearGradient>

        {/* Stone texture pattern */}
        <pattern id="statueTexturePattern" patternUnits="userSpaceOnUse" width="8" height="8">
          <rect width="8" height="8" fill="transparent" />
          <circle cx="2" cy="2" r="0.5" fill="#555" opacity="0.3" />
          <circle cx="6" cy="5" r="0.4" fill="#666" opacity="0.25" />
          <circle cx="4" cy="7" r="0.3" fill="#555" opacity="0.2" />
        </pattern>

        {/* Bronze/verdigris accent */}
        <linearGradient id="statueVerdigrisGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A8A6A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3A7A5A" stopOpacity="0.2" />
        </linearGradient>

        {/* Shadow gradient */}
        <linearGradient id="statueShadowGradient" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="18" cy="59" rx="14" ry="2" fill="rgba(0,0,0,0.25)" />

      {/* Lower pedestal */}
      <rect x="5" y="50" width="26" height="10" fill="url(#statuePedestalGradient)" />
      <rect x="5" y="50" width="26" height="10" fill="url(#statueTexturePattern)" />
      {/* Pedestal highlight */}
      <rect x="5" y="50" width="26" height="2" fill="rgba(255,255,255,0.15)" />
      {/* Pedestal edge */}
      <line x1="5" y1="50" x2="31" y2="50" stroke="#A0A0A0" strokeWidth="0.5" />

      {/* Upper pedestal */}
      <rect x="8" y="45" width="20" height="8" fill="url(#statuePedestalGradient)" />
      <rect x="8" y="45" width="20" height="8" fill="url(#statueTexturePattern)" />
      {/* Upper pedestal highlight */}
      <rect x="8" y="45" width="20" height="1.5" fill="rgba(255,255,255,0.12)" />

      {/* Body/torso */}
      <ellipse cx="18" cy="35" rx="8" ry="12" fill="url(#statueStoneGradient)" />
      <ellipse cx="18" cy="35" rx="8" ry="12" fill="url(#statueTexturePattern)" />
      <ellipse cx="18" cy="35" rx="8" ry="12" fill="url(#statueShadowGradient)" />

      {/* Body fold details */}
      <path d="M14 30 Q16 35 14 40" stroke="#606060" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M22 30 Q20 35 22 40" stroke="#606060" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M16 42 Q18 44 20 42" stroke="#606060" strokeWidth="0.4" fill="none" opacity="0.4" />

      {/* Head */}
      <ellipse cx="18" cy="18" rx="7" ry="8" fill="url(#statueStoneGradient)" />
      <ellipse cx="18" cy="18" rx="7" ry="8" fill="url(#statueTexturePattern)" />
      <ellipse cx="18" cy="18" rx="7" ry="8" fill="url(#statueShadowGradient)" />

      {/* Facial features (subtle) */}
      <ellipse cx="15" cy="16" rx="1" ry="0.8" fill="#505050" opacity="0.4" />
      <ellipse cx="21" cy="16" rx="1" ry="0.8" fill="#505050" opacity="0.4" />
      <path d="M16 20 Q18 21 20 20" stroke="#606060" strokeWidth="0.4" fill="none" opacity="0.4" />
      <line x1="18" y1="17" x2="18" y2="19" stroke="#606060" strokeWidth="0.3" opacity="0.3" />

      {/* Hair/head detail */}
      <path d="M12 14 Q14 10 18 10 Q22 10 24 14" stroke="#505050" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Left arm */}
      <ellipse cx="8" cy="32" rx="3" ry="9" fill="url(#statueStoneGradient)" transform="rotate(-15 8 32)" />
      <ellipse cx="8" cy="32" rx="3" ry="9" fill="url(#statueTexturePattern)" transform="rotate(-15 8 32)" />

      {/* Right arm */}
      <ellipse cx="28" cy="32" rx="3" ry="9" fill="url(#statueStoneGradient)" transform="rotate(15 28 32)" />
      <ellipse cx="28" cy="32" rx="3" ry="9" fill="url(#statueTexturePattern)" transform="rotate(15 28 32)" />

      {/* Weathering/age marks */}
      <circle cx="12" cy="38" r="1" fill="#707070" opacity="0.3" />
      <circle cx="24" cy="33" r="0.8" fill="#656565" opacity="0.25" />
      <ellipse cx="20" cy="45" rx="2" ry="0.8" fill="#606060" opacity="0.2" />

      {/* Verdigris stains (weathered copper look) */}
      <ellipse cx="10" cy="48" rx="2" ry="1.5" fill="url(#statueVerdigrisGradient)" />
      <ellipse cx="25" cy="52" rx="1.5" ry="1" fill="url(#statueVerdigrisGradient)" />

      {/* Highlights */}
      <ellipse cx="16" cy="15" rx="2" ry="1.5" fill="white" opacity="0.12" />
      <ellipse cx="15" cy="30" rx="2" ry="3" fill="white" opacity="0.08" />
      <ellipse cx="15" cy="47" rx="3" ry="1" fill="white" opacity="0.1" />

      {/* Pedestal inscription placeholder */}
      <rect x="11" y="52" width="14" height="4" fill="#707070" opacity="0.3" rx="0.5" />
      <line x1="13" y1="54" x2="23" y2="54" stroke="#606060" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}
