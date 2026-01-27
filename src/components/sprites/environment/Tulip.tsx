/**
 * Tulip Sprite Component
 * High quality with petal gradients, stem details, and natural form
 */

import type { ElementProps } from '../types';

export function Tulip({ x = 0, y = 0, size = 35, color = '#FF69B4' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 35 52"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Stem gradient */}
        <linearGradient id="tulipStemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a6a1a" />
          <stop offset="30%" stopColor="#228B22" />
          <stop offset="70%" stopColor="#2a8a2a" />
          <stop offset="100%" stopColor="#1a7a1a" />
        </linearGradient>
        {/* Leaf gradient */}
        <linearGradient id="tulipLeafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a9a2a" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#1a6a1a" />
        </linearGradient>
        {/* Petal outer gradient */}
        <linearGradient id="tulipPetalGradient" x1="0%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FF8DC7" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#E05A9F" />
          <stop offset="100%" stopColor="#C74B8A" />
        </linearGradient>
        {/* Petal inner gradient */}
        <radialGradient id="tulipPetalInnerGradient" cx="50%" cy="80%" r="60%">
          <stop offset="0%" stopColor="#FFB0D8" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#D85A95" />
        </radialGradient>
        {/* Center petal gradient */}
        <linearGradient id="tulipCenterPetalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFA0D0" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#E05A9F" />
        </linearGradient>
        {/* Petal shadow */}
        <linearGradient id="tulipPetalShadow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B04080" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="17.5" cy="51" rx="8" ry="2" fill="#000000" opacity="0.15" />

      {/* Stem / Stiel */}
      <rect x="15" y="22" width="5" height="30" fill="url(#tulipStemGradient)" />
      {/* Stem detail line */}
      <line x1="16.5" y1="22" x2="16.5" y2="52" stroke="#1a5a1a" strokeWidth="0.5" opacity="0.4" />
      <line x1="18.5" y1="22" x2="18.5" y2="52" stroke="#2a9a2a" strokeWidth="0.3" opacity="0.3" />

      {/* Leaves / Blätter */}
      <path d="M15 35 Q5 38 6 50 Q8 48 10 45 Q12 42 15 38" fill="url(#tulipLeafGradient)" />
      {/* Left leaf vein */}
      <path d="M14 36 Q8 42 7 48" stroke="#1a6a1a" strokeWidth="0.5" fill="none" opacity="0.4" />

      <path d="M20 35 Q30 38 29 50 Q27 48 25 45 Q23 42 20 38" fill="url(#tulipLeafGradient)" />
      {/* Right leaf vein */}
      <path d="M21 36 Q27 42 28 48" stroke="#1a6a1a" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Back petals (shadow layer) */}
      <ellipse cx="10" cy="14" rx="7" ry="13" fill="url(#tulipPetalShadow)" opacity="0.6" />
      <ellipse cx="25" cy="14" rx="7" ry="13" fill="url(#tulipPetalShadow)" opacity="0.6" />

      {/* Left petal / Linkes Blütenblatt */}
      <ellipse cx="12" cy="14" rx="8" ry="14" fill="url(#tulipPetalGradient)" />
      {/* Petal highlight */}
      <ellipse cx="10" cy="10" rx="3" ry="6" fill="#FFB8D8" opacity="0.4" />
      {/* Petal edge detail */}
      <path d="M6 5 Q12 2 18 8" stroke="#D05090" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Right petal / Rechtes Blütenblatt */}
      <ellipse cx="23" cy="14" rx="8" ry="14" fill="url(#tulipPetalGradient)" />
      {/* Petal highlight */}
      <ellipse cx="25" cy="10" rx="3" ry="6" fill="#FFB8D8" opacity="0.4" />
      {/* Petal edge detail */}
      <path d="M17 8 Q23 2 29 5" stroke="#D05090" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Center petal / Mittleres Blütenblatt */}
      <ellipse cx="17.5" cy="10" rx="6" ry="10" fill="url(#tulipCenterPetalGradient)" opacity="0.9" />
      {/* Center highlight */}
      <ellipse cx="17.5" cy="7" rx="3" ry="4" fill="#FFD0E8" opacity="0.5" />

      {/* Petal overlap shadows */}
      <path d="M14 18 Q17 20 20 18" stroke="#C04080" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Inner detail - stamen hint */}
      <ellipse cx="17.5" cy="18" rx="2" ry="1" fill="#8B4513" opacity="0.3" />
    </svg>
  );
}
