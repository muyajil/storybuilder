/**
 * Astronaut Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Astronaut({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Helmet gradient */}
        <radialGradient id="astronautHelmetGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#D0D0D0" />
        </radialGradient>
        {/* Visor gradient */}
        <linearGradient id="astronautVisorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6495ED" />
          <stop offset="30%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        {/* Visor reflection */}
        <linearGradient id="astronautVisorReflect" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Skin gradient */}
        <radialGradient id="astronautSkinGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* Suit gradient */}
        <linearGradient id="astronautSuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        {/* Backpack gradient */}
        <linearGradient id="astronautBackpackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
        {/* Control panel gradient */}
        <linearGradient id="astronautPanelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#444" />
          <stop offset="100%" stopColor="#222" />
        </linearGradient>
      </defs>

      {/* Helm / Helmet */}
      <circle cx="32" cy="18" r="16" fill="url(#astronautHelmetGradient)" />
      {/* Helmet ring */}
      <circle cx="32" cy="18" r="16" fill="none" stroke="#C0C0C0" strokeWidth="1.5" />
      {/* Helmet highlight */}
      <ellipse cx="24" cy="10" rx="6" ry="4" fill="white" opacity="0.3" />

      {/* Visier / Visor */}
      <ellipse cx="32" cy="18" rx="10" ry="8" fill="url(#astronautVisorGradient)" />
      {/* Visor reflection */}
      <ellipse cx="28" cy="14" rx="5" ry="3" fill="url(#astronautVisorReflect)" />

      {/* Gesicht / Face behind visor */}
      <circle cx="32" cy="18" r="7" fill="url(#astronautSkinGradient)" />
      {/* Eyes */}
      <circle cx="29" cy="17" r="1.5" fill="#333" />
      <circle cx="35" cy="17" r="1.5" fill="#333" />
      {/* Eye shine */}
      <circle cx="28.5" cy="16.5" r="0.5" fill="white" />
      <circle cx="34.5" cy="16.5" r="0.5" fill="white" />
      {/* Smile */}
      <path d="M30 20 Q32 22 34 20" stroke="#333" strokeWidth="0.8" fill="none" />

      {/* Anzug / Suit */}
      <rect x="18" y="34" width="28" height="22" fill="url(#astronautSuitGradient)" rx="4" />
      {/* Suit lines/seams */}
      <line x1="32" y1="34" x2="32" y2="56" stroke="#D0D0D0" strokeWidth="1" />
      <line x1="18" y1="44" x2="46" y2="44" stroke="#D0D0D0" strokeWidth="1" />

      {/* Brust-Kontrollen / Chest controls */}
      <rect x="24" y="38" width="16" height="12" fill="url(#astronautPanelGradient)" rx="2" />
      {/* Panel border */}
      <rect x="24" y="38" width="16" height="12" fill="none" stroke="#555" strokeWidth="0.5" rx="2" />
      {/* Buttons */}
      <circle cx="28" cy="42" r="2.5" fill="#DC2626" />
      <circle cx="28" cy="42" r="1.5" fill="#EF4444" />
      <circle cx="36" cy="42" r="2.5" fill="#16A34A" />
      <circle cx="36" cy="42" r="1.5" fill="#22C55E" />
      {/* Display bar */}
      <rect x="26" y="46" width="12" height="2" fill="#0EA5E9" rx="1" />
      <rect x="26" y="46" width="6" height="2" fill="#38BDF8" rx="1" />

      {/* NASA-style logo area */}
      <circle cx="32" cy="54" r="3" fill="#1E3A8A" />
      <circle cx="32" cy="54" r="2" fill="#3B82F6" />

      {/* Arme / Arms */}
      <ellipse cx="12" cy="42" rx="6" ry="10" fill="url(#astronautSuitGradient)" />
      <ellipse cx="52" cy="42" rx="6" ry="10" fill="url(#astronautSuitGradient)" />
      {/* Arm rings/joints */}
      <ellipse cx="12" cy="36" rx="6" ry="2" fill="#C0C0C0" />
      <ellipse cx="52" cy="36" rx="6" ry="2" fill="#C0C0C0" />

      {/* Handschuhe / Gloves */}
      <circle cx="12" cy="52" r="5" fill="url(#astronautSuitGradient)" />
      <circle cx="52" cy="52" r="5" fill="url(#astronautSuitGradient)" />
      {/* Glove details */}
      <path d="M9 50 L15 50" stroke="#C0C0C0" strokeWidth="0.5" />
      <path d="M49 50 L55 50" stroke="#C0C0C0" strokeWidth="0.5" />

      {/* Beine / Legs */}
      <ellipse cx="26" cy="60" rx="6" ry="8" fill="url(#astronautSuitGradient)" />
      <ellipse cx="38" cy="60" rx="6" ry="8" fill="url(#astronautSuitGradient)" />
      {/* Leg rings/joints */}
      <ellipse cx="26" cy="54" rx="6" ry="2" fill="#C0C0C0" />
      <ellipse cx="38" cy="54" rx="6" ry="2" fill="#C0C0C0" />

      {/* Rucksack / Backpack */}
      <rect x="6" y="36" width="8" height="18" fill="url(#astronautBackpackGradient)" rx="2" />
      {/* Backpack details */}
      <rect x="7" y="38" width="6" height="3" fill="#888" rx="1" />
      <rect x="7" y="44" width="6" height="3" fill="#888" rx="1" />
      <rect x="7" y="50" width="6" height="2" fill="#666" rx="1" />
      {/* Oxygen tube */}
      <path d="M14 42 Q18 40 18 34" stroke="#888" strokeWidth="2" fill="none" />
    </svg>
  );
}
