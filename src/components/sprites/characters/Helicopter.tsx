/**
 * Helicopter Sprite Component
 * Enhanced with gradients, detailed metalwork, and realistic features
 */

import type { SpriteProps } from '../types';

export function Helicopter({ size = 64, color = '#FF6347' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="helicopterBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF8060" />
          <stop offset="30%" stopColor={color} />
          <stop offset="100%" stopColor="#B23020" />
        </linearGradient>
        {/* Metallic gradient */}
        <linearGradient id="helicopterMetalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#606060" />
          <stop offset="50%" stopColor="#404040" />
          <stop offset="100%" stopColor="#2A2A2A" />
        </linearGradient>
        {/* Cockpit glass gradient */}
        <linearGradient id="helicopterGlassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="30%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#5CACEE" />
        </linearGradient>
        {/* Rotor gradient */}
        <linearGradient id="helicopterRotorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#505050" />
          <stop offset="50%" stopColor="#303030" />
          <stop offset="100%" stopColor="#505050" />
        </linearGradient>
        {/* Skid gradient */}
        <linearGradient id="helicopterSkidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#2A2A2A" />
        </linearGradient>
        {/* Highlight gradient */}
        <linearGradient id="helicopterHighlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Main rotor assembly */}
      {/* Rotor mast */}
      <rect x="29" y="6" width="6" height="10" fill="url(#helicopterMetalGradient)" />
      {/* Rotor hub */}
      <ellipse cx="32" cy="8" rx="4" ry="2" fill="url(#helicopterMetalGradient)" />

      {/* Main rotor blades */}
      <rect x="4" y="6" width="56" height="5" fill="url(#helicopterRotorGradient)" rx="2" />
      {/* Blade details */}
      <rect x="4" y="7" width="56" height="1" fill="#505050" opacity="0.5" />
      {/* Rotor motion blur effect */}
      <ellipse cx="32" cy="8" rx="28" ry="4" fill="none" stroke="#808080" strokeWidth="0.5" strokeDasharray="4,2" opacity="0.3" />

      {/* Main fuselage */}
      <ellipse cx="32" cy="32" rx="22" ry="15" fill="url(#helicopterBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="26" rx="12" ry="6" fill="url(#helicopterHighlightGradient)" />

      {/* Cockpit bubble */}
      <ellipse cx="46" cy="30" rx="12" ry="10" fill="url(#helicopterGlassGradient)" />
      {/* Cockpit frame */}
      <ellipse cx="46" cy="30" rx="12" ry="10" fill="none" stroke="#404040" strokeWidth="1.5" />
      {/* Window reflection */}
      <ellipse cx="42" cy="26" rx="4" ry="3" fill="white" opacity="0.4" />
      {/* Window divider */}
      <line x1="46" y1="20" x2="46" y2="40" stroke="#404040" strokeWidth="1" />

      {/* Side window */}
      <rect x="28" y="26" width="8" height="6" fill="url(#helicopterGlassGradient)" rx="1" />
      <rect x="28" y="26" width="8" height="6" fill="none" stroke="#404040" strokeWidth="0.5" rx="1" />

      {/* Door outline */}
      <rect x="20" y="24" width="10" height="14" fill="none" stroke="#B23020" strokeWidth="1" rx="1" />
      {/* Door handle */}
      <rect x="22" y="30" width="3" height="1.5" fill="#404040" rx="0.5" />

      {/* Tail boom */}
      <rect x="4" y="28" width="18" height="8" fill="url(#helicopterBodyGradient)" />
      {/* Tail boom taper */}
      <polygon points="4,28 4,36 0,34 0,30" fill="url(#helicopterBodyGradient)" />
      {/* Tail stripes */}
      <rect x="6" y="30" width="14" height="1" fill="white" />
      <rect x="6" y="33" width="14" height="1" fill="white" />

      {/* Tail fin */}
      <polygon points="2,28 2,20 6,28" fill="url(#helicopterBodyGradient)" />
      <polygon points="2,36 2,44 6,36" fill="url(#helicopterBodyGradient)" />

      {/* Tail rotor */}
      <ellipse cx="2" cy="24" rx="3" ry="10" fill="url(#helicopterRotorGradient)" />
      <circle cx="2" cy="24" r="2" fill="url(#helicopterMetalGradient)" />
      {/* Tail rotor blur */}
      <ellipse cx="2" cy="24" rx="4" ry="10" fill="none" stroke="#606060" strokeWidth="0.5" strokeDasharray="2,1" opacity="0.4" />

      {/* Landing skids */}
      {/* Main skid bars */}
      <rect x="14" y="46" width="36" height="3" fill="url(#helicopterSkidGradient)" rx="1" />
      {/* Skid struts */}
      <rect x="18" y="40" width="3" height="8" fill="url(#helicopterSkidGradient)" rx="1" />
      <rect x="43" y="40" width="3" height="8" fill="url(#helicopterSkidGradient)" rx="1" />
      {/* Cross braces */}
      <line x1="20" y1="44" x2="44" y2="44" stroke="url(#helicopterSkidGradient)" strokeWidth="1.5" />
      {/* Skid feet */}
      <rect x="12" y="47" width="6" height="2" fill="url(#helicopterSkidGradient)" rx="1" />
      <rect x="46" y="47" width="6" height="2" fill="url(#helicopterSkidGradient)" rx="1" />

      {/* Engine exhaust */}
      <ellipse cx="16" cy="24" rx="3" ry="2" fill="#404040" />
      <ellipse cx="16" cy="24" rx="2" ry="1" fill="#202020" />

      {/* Navigation lights */}
      <circle cx="56" cy="32" r="2" fill="#00FF00" opacity="0.8" />
      <circle cx="8" cy="32" r="2" fill="#FF0000" opacity="0.8" />

      {/* Antenna */}
      <rect x="30" y="14" width="1" height="4" fill="url(#helicopterMetalGradient)" />
      <circle cx="30" cy="14" r="1" fill="#FF0000" />
    </svg>
  );
}
