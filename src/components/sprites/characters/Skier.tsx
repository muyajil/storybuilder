/**
 * Skier Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Skier({ size = 64, color = '#FF0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Helmet gradient */}
        <radialGradient id="skierHelmetGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="70%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        {/* Skin gradient */}
        <radialGradient id="skierSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="70%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Goggles gradient */}
        <linearGradient id="skierGogglesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8866" />
          <stop offset="50%" stopColor="#FF6347" />
          <stop offset="100%" stopColor="#CC4433" />
        </linearGradient>
        {/* Jacket gradient */}
        <linearGradient id="skierJacketGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        {/* Pants gradient */}
        <linearGradient id="skierPantsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#404040" />
          <stop offset="50%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Ski gradient */}
        <linearGradient id="skierSkiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        {/* Pole gradient */}
        <linearGradient id="skierPoleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
      </defs>

      {/* Helmet */}
      <ellipse cx="32" cy="7" rx="11" ry="5" fill="url(#skierHelmetGradient)" />
      <rect x="23" y="7" width="18" height="5" fill="url(#skierHelmetGradient)" />
      {/* Helmet shine */}
      <ellipse cx="28" cy="6" rx="4" ry="2" fill="#444" opacity="0.5" />

      {/* Head */}
      <circle cx="32" cy="16" r="8" fill="url(#skierSkinGradient)" />

      {/* Goggles strap */}
      <rect x="20" y="12" width="24" height="2" fill="#333" />
      {/* Goggles */}
      <rect x="24" y="11" width="16" height="6" fill="url(#skierGogglesGradient)" rx="3" />
      {/* Goggle lens reflection */}
      <ellipse cx="30" cy="13" rx="3" ry="1.5" fill="white" opacity="0.3" />
      <ellipse cx="38" cy="13" rx="2" ry="1" fill="white" opacity="0.2" />
      {/* Eyes visible through goggles */}
      <circle cx="29" cy="14" r="1.5" fill="black" />
      <circle cx="35" cy="14" r="1.5" fill="black" />

      {/* Neck gaiter */}
      <rect x="28" y="22" width="8" height="4" fill={color} />

      {/* Ski jacket */}
      <rect x="22" y="24" width="20" height="18" fill="url(#skierJacketGradient)" rx="2" />
      {/* Jacket zipper */}
      <line x1="32" y1="24" x2="32" y2="42" stroke="#CC0000" strokeWidth="1.5" />
      {/* Jacket pocket */}
      <rect x="24" y="32" width="6" height="4" fill="#DD2222" stroke="#AA0000" strokeWidth="0.5" rx="1" />
      {/* Jacket logo */}
      <circle cx="38" cy="28" r="2" fill="white" />

      {/* Arms */}
      <rect x="6" y="26" width="16" height="5" fill="url(#skierJacketGradient)" rx="2" />
      <rect x="42" y="26" width="16" height="5" fill="url(#skierJacketGradient)" rx="2" />

      {/* Gloves */}
      <circle cx="7" cy="29" r="4" fill="url(#skierHelmetGradient)" />
      <circle cx="57" cy="29" r="4" fill="url(#skierHelmetGradient)" />
      {/* Glove cuffs */}
      <rect x="4" y="26" width="6" height="2" fill="#444" />
      <rect x="54" y="26" width="6" height="2" fill="#444" />

      {/* Ski pants */}
      <rect x="25" y="42" width="5" height="14" fill="url(#skierPantsGradient)" rx="1" />
      <rect x="34" y="42" width="5" height="14" fill="url(#skierPantsGradient)" rx="1" />

      {/* Ski boots */}
      <rect x="23" y="54" width="8" height="6" fill="#2a2a2a" rx="2" />
      <rect x="33" y="54" width="8" height="6" fill="#2a2a2a" rx="2" />
      {/* Boot buckles */}
      <rect x="24" y="55" width="6" height="1" fill="#C0C0C0" />
      <rect x="34" y="55" width="6" height="1" fill="#C0C0C0" />
      <rect x="24" y="57" width="6" height="1" fill="#C0C0C0" />
      <rect x="34" y="57" width="6" height="1" fill="#C0C0C0" />

      {/* Skis */}
      <rect x="14" y="58" width="36" height="4" rx="2" fill="url(#skierSkiGradient)" />
      {/* Ski graphics */}
      <rect x="20" y="59" width="24" height="2" fill={color} opacity="0.6" rx="1" />
      {/* Ski tip curve */}
      <ellipse cx="14" cy="60" rx="2" ry="2" fill="url(#skierSkiGradient)" />
      <ellipse cx="50" cy="60" rx="2" ry="2" fill="url(#skierSkiGradient)" />

      {/* Ski poles */}
      <rect x="9" y="26" width="3" height="36" fill="url(#skierPoleGradient)" />
      <rect x="52" y="26" width="3" height="36" fill="url(#skierPoleGradient)" />
      {/* Pole baskets */}
      <ellipse cx="10.5" cy="58" rx="4" ry="2" fill="#333" />
      <ellipse cx="53.5" cy="58" rx="4" ry="2" fill="#333" />
      {/* Pole grips */}
      <rect x="8" y="24" width="5" height="4" fill="#333" rx="1" />
      <rect x="51" y="24" width="5" height="4" fill="#333" rx="1" />
      {/* Pole straps */}
      <ellipse cx="10.5" cy="26" rx="3" ry="1.5" fill="#333" stroke="#555" strokeWidth="0.5" />
      <ellipse cx="53.5" cy="26" rx="3" ry="1.5" fill="#333" stroke="#555" strokeWidth="0.5" />

      {/* Snow spray effect */}
      <circle cx="6" cy="62" r="2" fill="white" opacity="0.6" />
      <circle cx="58" cy="62" r="1.5" fill="white" opacity="0.5" />
      <circle cx="4" cy="60" r="1" fill="white" opacity="0.4" />
    </svg>
  );
}
