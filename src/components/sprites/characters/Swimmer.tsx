/**
 * Swimmer Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Swimmer({ size = 64, color = '#00BFFF' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Swim cap gradient */}
        <radialGradient id="swimmerCapGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#33CFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0099CC" />
        </radialGradient>
        {/* Skin gradient */}
        <radialGradient id="swimmerSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="70%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Goggle lens gradient */}
        <radialGradient id="swimmerGogglesGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4682B4" />
        </radialGradient>
        {/* Swimsuit gradient */}
        <linearGradient id="swimmerSuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#33CFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0099CC" />
        </linearGradient>
        {/* Water effect gradient */}
        <linearGradient id="swimmerWaterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4169E1" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#87CEEB" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4169E1" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Water ripples around swimmer */}
      <ellipse cx="32" cy="32" rx="30" ry="8" fill="url(#swimmerWaterGradient)" />

      {/* Swim cap */}
      <ellipse cx="32" cy="13" rx="13" ry="11" fill="url(#swimmerCapGradient)" />
      {/* Cap texture lines */}
      <path d="M22 10 Q32 6 42 10" stroke="#0099CC" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M20 14 Q32 10 44 14" stroke="#0099CC" strokeWidth="0.5" fill="none" opacity="0.5" />
      {/* Cap highlight */}
      <ellipse cx="28" cy="10" rx="4" ry="3" fill="#66DFFF" opacity="0.4" />

      {/* Head visible below cap */}
      <circle cx="32" cy="18" r="7" fill="url(#swimmerSkinGradient)" />

      {/* Goggles frame */}
      <ellipse cx="26" cy="14" rx="6" ry="4" fill="#333" />
      <ellipse cx="38" cy="14" rx="6" ry="4" fill="#333" />
      {/* Goggle strap */}
      <line x1="20" y1="14" x2="16" y2="14" stroke="#333" strokeWidth="3" />
      <line x1="44" y1="14" x2="48" y2="14" stroke="#333" strokeWidth="3" />
      {/* Goggle bridge */}
      <line x1="31" y1="14" x2="33" y2="14" stroke="#333" strokeWidth="3" />
      {/* Goggle lenses */}
      <ellipse cx="26" cy="14" rx="4.5" ry="2.5" fill="url(#swimmerGogglesGradient)" />
      <ellipse cx="38" cy="14" rx="4.5" ry="2.5" fill="url(#swimmerGogglesGradient)" />
      {/* Lens shine */}
      <ellipse cx="24" cy="13" rx="1.5" ry="1" fill="white" opacity="0.5" />
      <ellipse cx="36" cy="13" rx="1.5" ry="1" fill="white" opacity="0.5" />

      {/* Mouth - breathing */}
      <ellipse cx="32" cy="21" rx="2" ry="1.5" fill="#8B4513" />

      {/* Swimsuit */}
      <rect x="24" y="24" width="16" height="16" fill="url(#swimmerSuitGradient)" rx="3" />
      {/* Suit seams */}
      <line x1="32" y1="24" x2="32" y2="40" stroke="#0099CC" strokeWidth="0.5" />
      {/* Suit logo area */}
      <rect x="28" y="28" width="8" height="4" fill="#0099CC" opacity="0.3" rx="1" />

      {/* Arms in swimming position */}
      <ellipse cx="10" cy="30" rx="14" ry="5" fill="url(#swimmerSkinGradient)" />
      <ellipse cx="54" cy="30" rx="14" ry="5" fill="url(#swimmerSkinGradient)" />
      {/* Arm highlights */}
      <ellipse cx="10" cy="28" rx="10" ry="3" fill="#FFE4C4" opacity="0.4" />
      <ellipse cx="54" cy="28" rx="10" ry="3" fill="#FFE4C4" opacity="0.4" />
      {/* Hands - cupped for swimming */}
      <ellipse cx="0" cy="30" rx="4" ry="3" fill="url(#swimmerSkinGradient)" />
      <ellipse cx="64" cy="30" rx="4" ry="3" fill="url(#swimmerSkinGradient)" />

      {/* Legs - kicking position */}
      <rect x="26" y="40" width="5" height="20" fill="url(#swimmerSkinGradient)" rx="2" />
      <rect x="33" y="40" width="5" height="20" fill="url(#swimmerSkinGradient)" rx="2" />
      {/* Leg highlights */}
      <rect x="27" y="40" width="2" height="18" fill="#FFE4C4" opacity="0.3" />
      <rect x="34" y="40" width="2" height="18" fill="#FFE4C4" opacity="0.3" />

      {/* Feet - pointed for swimming */}
      <ellipse cx="28.5" cy="61" rx="4" ry="2.5" fill="url(#swimmerSkinGradient)" />
      <ellipse cx="35.5" cy="61" rx="4" ry="2.5" fill="url(#swimmerSkinGradient)" />

      {/* Water splash effects */}
      <circle cx="4" cy="26" r="2" fill="#87CEEB" opacity="0.5" />
      <circle cx="60" cy="26" r="2" fill="#87CEEB" opacity="0.5" />
      <circle cx="8" cy="34" r="1.5" fill="#87CEEB" opacity="0.4" />
      <circle cx="56" cy="34" r="1.5" fill="#87CEEB" opacity="0.4" />
      <circle cx="24" cy="62" r="1" fill="#87CEEB" opacity="0.3" />
      <circle cx="40" cy="62" r="1" fill="#87CEEB" opacity="0.3" />
    </svg>
  );
}
