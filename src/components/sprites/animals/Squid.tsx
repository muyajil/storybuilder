/**
 * Squid Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Squid({ size = 64, color = '#9932CC' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="squidBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#C060E8" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#6B1A8C" />
        </radialGradient>
        {/* Tentacle gradient */}
        <linearGradient id="squidTentacleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#7828A0" />
          <stop offset="100%" stopColor="#5A1878" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="squidEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E0F0" />
        </radialGradient>
        {/* Sucker gradient */}
        <radialGradient id="squidSuckerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8D0F8" />
          <stop offset="100%" stopColor="#C8A0E0" />
        </radialGradient>
        {/* Highlight gradient */}
        <radialGradient id="squidHighlightGradient" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#D080F0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#9932CC" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="60" rx="16" ry="3" fill="#4B0082" opacity="0.2" />

      {/* Tentacles - rendered first so body overlaps */}
      {/* Tentacle 1 */}
      <path d="M20 42 Q14 52 12 60" stroke="url(#squidTentacleGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="14" cy="50" r="1.5" fill="url(#squidSuckerGradient)" />
      <circle cx="13" cy="56" r="1.5" fill="url(#squidSuckerGradient)" />

      {/* Tentacle 2 */}
      <path d="M24 42 Q20 54 18 62" stroke="url(#squidTentacleGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="21" cy="52" r="1.5" fill="url(#squidSuckerGradient)" />
      <circle cx="19" cy="58" r="1.5" fill="url(#squidSuckerGradient)" />

      {/* Tentacle 3 */}
      <path d="M28 42 Q28 54 26 62" stroke="url(#squidTentacleGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="28" cy="52" r="1.5" fill="url(#squidSuckerGradient)" />
      <circle cx="27" cy="58" r="1.5" fill="url(#squidSuckerGradient)" />

      {/* Tentacle 4 */}
      <path d="M32 42 Q34 54 34 62" stroke="url(#squidTentacleGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="33" cy="52" r="1.5" fill="url(#squidSuckerGradient)" />
      <circle cx="34" cy="58" r="1.5" fill="url(#squidSuckerGradient)" />

      {/* Tentacle 5 */}
      <path d="M36 42 Q40 54 42 62" stroke="url(#squidTentacleGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="39" cy="52" r="1.5" fill="url(#squidSuckerGradient)" />
      <circle cx="41" cy="58" r="1.5" fill="url(#squidSuckerGradient)" />

      {/* Tentacle 6 */}
      <path d="M40 42 Q46 54 48 62" stroke="url(#squidTentacleGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="44" cy="52" r="1.5" fill="url(#squidSuckerGradient)" />
      <circle cx="47" cy="58" r="1.5" fill="url(#squidSuckerGradient)" />

      {/* Tentacle 7 */}
      <path d="M44 42 Q52 52 54 60" stroke="url(#squidTentacleGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="50" r="1.5" fill="url(#squidSuckerGradient)" />
      <circle cx="53" cy="56" r="1.5" fill="url(#squidSuckerGradient)" />

      {/* Tentacle 8 (longer feeding tentacle) */}
      <path d="M32 42 Q32 50 30 58 Q28 64 32 62 Q36 64 34 58 Q32 50 32 42" stroke="url(#squidTentacleGradient)" strokeWidth="2" fill="none" />

      {/* Body / Mantle */}
      <ellipse cx="32" cy="24" rx="14" ry="18" fill="url(#squidBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="32" cy="24" rx="14" ry="18" fill="url(#squidHighlightGradient)" />

      {/* Body texture spots */}
      <circle cx="24" cy="18" r="2" fill="#6B1A8C" opacity="0.3" />
      <circle cx="40" cy="20" r="1.5" fill="#6B1A8C" opacity="0.3" />
      <circle cx="28" cy="30" r="1.5" fill="#6B1A8C" opacity="0.3" />
      <circle cx="38" cy="28" r="2" fill="#6B1A8C" opacity="0.3" />

      {/* Mantle fin */}
      <path d="M18 18 Q12 24 18 30" fill="#A050C8" opacity="0.7" />
      <path d="M46 18 Q52 24 46 30" fill="#A050C8" opacity="0.7" />

      {/* Eyes */}
      <ellipse cx="26" cy="20" rx="4.5" ry="5" fill="url(#squidEyeGradient)" />
      <ellipse cx="38" cy="20" rx="4.5" ry="5" fill="url(#squidEyeGradient)" />

      {/* Eye pupils */}
      <ellipse cx="26" cy="20" rx="2.5" ry="3" fill="#1a1a1a" />
      <ellipse cx="38" cy="20" rx="2.5" ry="3" fill="#1a1a1a" />

      {/* Eye shine */}
      <circle cx="27" cy="19" r="1" fill="white" />
      <circle cx="39" cy="19" r="1" fill="white" />
      <circle cx="25" cy="21" r="0.5" fill="white" opacity="0.6" />
      <circle cx="37" cy="21" r="0.5" fill="white" opacity="0.6" />

      {/* Siphon */}
      <ellipse cx="32" cy="38" rx="4" ry="3" fill="#7828A0" />
      <ellipse cx="32" cy="38" rx="2" ry="1.5" fill="#5A1878" />

      {/* Bubbles */}
      <circle cx="12" cy="14" r="2" fill="#E8D8F8" opacity="0.5" />
      <circle cx="52" cy="10" r="1.5" fill="#E8D8F8" opacity="0.4" />
      <circle cx="8" cy="22" r="1" fill="#E8D8F8" opacity="0.3" />
    </svg>
  );
}
