/**
 * ScubaDiver Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function ScubaDiver({ size = 64, color = '#1a1a1a' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Wetsuit gradient */}
        <linearGradient id="scubaWetsuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        {/* Mask gradient */}
        <radialGradient id="scubaMaskGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4682B4" />
        </radialGradient>
        {/* Tank gradient */}
        <linearGradient id="scubaTankGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="30%" stopColor="#E8E8E8" />
          <stop offset="70%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
        {/* Fin gradient */}
        <linearGradient id="scubaFinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* BCD gradient */}
        <linearGradient id="scubaBCDGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Hood gradient */}
        <radialGradient id="scubaHoodGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="70%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Air tank */}
      <ellipse cx="50" cy="12" rx="7" ry="10" fill="url(#scubaTankGradient)" />
      <ellipse cx="50" cy="12" rx="5" ry="8" fill="#E8E8E8" opacity="0.3" />
      <rect x="48" y="2" width="4" height="4" fill="#666" rx="1" />
      {/* Tank valve */}
      <circle cx="50" cy="3" r="2" fill="#888" />

      {/* Air hose */}
      <path d="M44 10 Q42 12 40 14 Q38 16 36 16" stroke="#333" strokeWidth="3" fill="none" />
      <path d="M44 10 Q42 12 40 14 Q38 16 36 16" stroke="#555" strokeWidth="1.5" fill="none" />

      {/* Hood/Head */}
      <circle cx="32" cy="16" r="13" fill="url(#scubaHoodGradient)" />

      {/* Mask frame */}
      <ellipse cx="32" cy="14" rx="11" ry="9" fill="#333" />
      {/* Mask strap */}
      <path d="M20 14 Q16 14 14 16" stroke="#FFD700" strokeWidth="2.5" fill="none" />
      <path d="M44 14 Q48 14 50 16" stroke="#FFD700" strokeWidth="2.5" fill="none" />
      {/* Mask lens */}
      <ellipse cx="32" cy="14" rx="9" ry="7" fill="url(#scubaMaskGradient)" />
      {/* Mask reflection */}
      <ellipse cx="28" cy="12" rx="3" ry="2" fill="white" opacity="0.4" />

      {/* Eyes visible through mask */}
      <circle cx="28" cy="14" r="2.5" fill="black" />
      <circle cx="36" cy="14" r="2.5" fill="black" />
      <circle cx="27" cy="13" r="0.8" fill="white" />
      <circle cx="35" cy="13" r="0.8" fill="white" />

      {/* Regulator/Mouthpiece */}
      <ellipse cx="32" cy="22" rx="5" ry="3" fill="#333" />
      <rect x="30" y="20" width="4" height="4" fill="#444" rx="1" />

      {/* Wetsuit body */}
      <rect x="20" y="28" width="24" height="22" fill="url(#scubaWetsuitGradient)" rx="3" />

      {/* BCD (Buoyancy Control Device) */}
      <ellipse cx="32" cy="42" rx="7" ry="5" fill="url(#scubaBCDGradient)" />
      <ellipse cx="32" cy="42" rx="5" ry="3" fill="#FFE44D" opacity="0.4" />

      {/* Chest gauges */}
      <rect x="25" y="30" width="5" height="5" fill="#C0C0C0" stroke="#666" strokeWidth="0.5" rx="1" />
      <circle cx="27.5" cy="32.5" r="1.5" fill="#333" />
      <rect x="34" y="30" width="5" height="5" fill="#C0C0C0" stroke="#666" strokeWidth="0.5" rx="1" />
      <circle cx="36.5" cy="32.5" r="1.5" fill="#00FF00" />

      {/* Arms */}
      <rect x="8" y="30" width="12" height="7" fill="url(#scubaWetsuitGradient)" rx="2" />
      <rect x="44" y="30" width="12" height="7" fill="url(#scubaWetsuitGradient)" rx="2" />

      {/* Gloves */}
      <ellipse cx="8" cy="35" rx="5" ry="4" fill="url(#scubaFinGradient)" />
      <ellipse cx="56" cy="35" rx="5" ry="4" fill="url(#scubaFinGradient)" />

      {/* Legs */}
      <rect x="24" y="50" width="6" height="12" fill="url(#scubaWetsuitGradient)" rx="2" />
      <rect x="34" y="50" width="6" height="12" fill="url(#scubaWetsuitGradient)" rx="2" />

      {/* Fins */}
      <ellipse cx="27" cy="63" rx="8" ry="4" fill="url(#scubaFinGradient)" />
      <ellipse cx="37" cy="63" rx="8" ry="4" fill="url(#scubaFinGradient)" />
      {/* Fin ridges */}
      <line x1="21" y1="63" x2="33" y2="63" stroke="#B8860B" strokeWidth="0.5" />
      <line x1="31" y1="63" x2="43" y2="63" stroke="#B8860B" strokeWidth="0.5" />

      {/* Bubbles */}
      <circle cx="40" cy="6" r="2" fill="#87CEEB" opacity="0.6" />
      <circle cx="44" cy="2" r="1.5" fill="#87CEEB" opacity="0.5" />
      <circle cx="38" cy="0" r="1" fill="#87CEEB" opacity="0.4" />
    </svg>
  );
}
