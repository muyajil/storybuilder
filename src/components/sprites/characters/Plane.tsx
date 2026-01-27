/**
 * Plane Sprite Component
 * Enhanced with gradients, realistic details, and shading
 */

import type { SpriteProps } from '../types';

export function Plane({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Fuselage gradient */}
        <linearGradient id="planeFuselageGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>
        {/* Cockpit gradient */}
        <linearGradient id="planeCockpitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0E0E6" />
          <stop offset="30%" stopColor="#87CEEB" />
          <stop offset="70%" stopColor="#5FB3D4" />
          <stop offset="100%" stopColor="#4A9CC4" />
        </linearGradient>
        {/* Wing gradient */}
        <linearGradient id="planeWingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5F5F5" />
          <stop offset="50%" stopColor="#E0E0E0" />
          <stop offset="100%" stopColor="#C8C8C8" />
        </linearGradient>
        {/* Engine gradient */}
        <radialGradient id="planeEngineGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#555555" />
          <stop offset="70%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Engine intake gradient */}
        <radialGradient id="planeIntakeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Window gradient */}
        <linearGradient id="planeWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0E0E6" />
          <stop offset="100%" stopColor="#6CB4D4" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="planeTailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        {/* Red stripe gradient */}
        <linearGradient id="planeStripeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="58" rx="24" ry="4" fill="#000000" opacity="0.1" />

      {/* Main fuselage / Rumpf */}
      <ellipse cx="32" cy="32" rx="29" ry="9" fill="url(#planeFuselageGradient)" />

      {/* Fuselage highlight */}
      <ellipse cx="32" cy="28" rx="24" ry="4" fill="#FFFFFF" opacity="0.3" />

      {/* Red stripe on fuselage */}
      <rect x="4" y="30" width="52" height="3" fill="url(#planeStripeGradient)" />

      {/* Nose / Nase */}
      <ellipse cx="59" cy="32" rx="7" ry="5" fill="url(#planeFuselageGradient)" />
      <ellipse cx="60" cy="30" rx="4" ry="2" fill="#FFFFFF" opacity="0.3" />

      {/* Cockpit / Cockpit */}
      <ellipse cx="52" cy="29" rx="9" ry="5" fill="url(#planeCockpitGradient)" />
      <ellipse cx="50" cy="28" rx="5" ry="2.5" fill="#FFFFFF" opacity="0.2" />

      {/* Cockpit frame */}
      <path d="M45 29 L48 29" stroke="#666666" strokeWidth="0.5" />
      <path d="M52 29 L55 29" stroke="#666666" strokeWidth="0.5" />

      {/* Top wing / Oberer Flügel */}
      <polygon points="22,32 34,6 42,32" fill="url(#planeWingGradient)" />
      <polygon points="24,32 34,10 40,32" fill="#FFFFFF" opacity="0.2" />

      {/* Wing detail lines */}
      <line x1="28" y1="20" x2="38" y2="20" stroke="#CCCCCC" strokeWidth="0.5" />
      <line x1="26" y1="26" x2="40" y2="26" stroke="#CCCCCC" strokeWidth="0.5" />

      {/* Bottom wing / Unterer Flügel */}
      <polygon points="22,32 34,58 42,32" fill="url(#planeWingGradient)" />
      <polygon points="24,32 34,54 40,32" fill="#D0D0D0" opacity="0.3" />

      {/* Wing detail lines bottom */}
      <line x1="28" y1="44" x2="38" y2="44" stroke="#CCCCCC" strokeWidth="0.5" />
      <line x1="26" y1="38" x2="40" y2="38" stroke="#CCCCCC" strokeWidth="0.5" />

      {/* Tail / Heck */}
      <polygon points="2,32 10,18 14,32" fill="url(#planeTailGradient)" />
      <polygon points="4,32 10,22 12,32" fill="#FFFFFF" opacity="0.2" />

      {/* Tail stripe */}
      <polygon points="6,28 10,20 12,28" fill="url(#planeStripeGradient)" />

      {/* Top engine / Oberes Triebwerk */}
      <ellipse cx="28" cy="18" rx="5" ry="7" fill="url(#planeEngineGradient)" />
      <ellipse cx="28" cy="18" rx="3" ry="5" fill="url(#planeIntakeGradient)" />
      <ellipse cx="28" cy="16" rx="2" ry="3" fill="#333333" opacity="0.5" />

      {/* Engine pylon top */}
      <rect x="30" y="22" width="4" height="4" fill="#666666" />

      {/* Bottom engine / Unteres Triebwerk */}
      <ellipse cx="28" cy="46" rx="5" ry="7" fill="url(#planeEngineGradient)" />
      <ellipse cx="28" cy="46" rx="3" ry="5" fill="url(#planeIntakeGradient)" />
      <ellipse cx="28" cy="44" rx="2" ry="3" fill="#333333" opacity="0.5" />

      {/* Engine pylon bottom */}
      <rect x="30" y="38" width="4" height="4" fill="#666666" />

      {/* Windows / Fenster */}
      <circle cx="46" cy="32" r="2.5" fill="url(#planeWindowGradient)" />
      <circle cx="40" cy="32" r="2.5" fill="url(#planeWindowGradient)" />
      <circle cx="34" cy="32" r="2.5" fill="url(#planeWindowGradient)" />
      <circle cx="28" cy="32" r="2.5" fill="url(#planeWindowGradient)" />
      <circle cx="22" cy="32" r="2.5" fill="url(#planeWindowGradient)" />

      {/* Window reflections */}
      <circle cx="45" cy="31" r="0.8" fill="#FFFFFF" opacity="0.5" />
      <circle cx="39" cy="31" r="0.8" fill="#FFFFFF" opacity="0.5" />
      <circle cx="33" cy="31" r="0.8" fill="#FFFFFF" opacity="0.5" />
      <circle cx="27" cy="31" r="0.8" fill="#FFFFFF" opacity="0.5" />
      <circle cx="21" cy="31" r="0.8" fill="#FFFFFF" opacity="0.5" />

      {/* Navigation lights */}
      <circle cx="34" cy="6" r="1" fill="#FF0000" opacity="0.8" />
      <circle cx="34" cy="58" r="1" fill="#00FF00" opacity="0.8" />
      <circle cx="2" cy="32" r="1" fill="#FFFFFF" opacity="0.8" />

      {/* Landing gear hint */}
      <ellipse cx="20" cy="42" rx="2" ry="1" fill="#333333" opacity="0.5" />
      <ellipse cx="44" cy="42" rx="2" ry="1" fill="#333333" opacity="0.5" />
    </svg>
  );
}
