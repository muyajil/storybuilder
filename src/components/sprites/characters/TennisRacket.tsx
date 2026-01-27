/**
 * TennisRacket Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function TennisRacket({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Handle gradient */}
        <linearGradient id="racketHandleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        {/* Handle grip gradient */}
        <linearGradient id="racketGripGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        {/* Frame gradient */}
        <linearGradient id="racketFrameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        {/* Frame highlight */}
        <linearGradient id="racketHighlightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C4A67C" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#C4A67C" stopOpacity="0" />
          <stop offset="100%" stopColor="#654321" stopOpacity="0.3" />
        </linearGradient>
        {/* String gradient */}
        <linearGradient id="racketStringGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#CCCCCC" />
        </linearGradient>
      </defs>

      {/* Handle base */}
      <rect x="27" y="44" width="10" height="20" fill="url(#racketHandleGradient)" rx="2" />

      {/* Handle grip wrap */}
      <rect x="27" y="48" width="10" height="16" fill="url(#racketGripGradient)" rx="1" />
      {/* Grip texture lines */}
      <line x1="27" y1="50" x2="37" y2="50" stroke="#333" strokeWidth="0.5" />
      <line x1="27" y1="53" x2="37" y2="53" stroke="#333" strokeWidth="0.5" />
      <line x1="27" y1="56" x2="37" y2="56" stroke="#333" strokeWidth="0.5" />
      <line x1="27" y1="59" x2="37" y2="59" stroke="#333" strokeWidth="0.5" />
      <line x1="27" y1="62" x2="37" y2="62" stroke="#333" strokeWidth="0.5" />

      {/* Handle butt cap */}
      <rect x="28" y="62" width="8" height="2" fill="#654321" rx="1" />

      {/* Frame */}
      <ellipse cx="32" cy="24" rx="22" ry="24" fill="none" stroke="url(#racketFrameGradient)" strokeWidth="5" />
      {/* Frame highlight */}
      <ellipse cx="32" cy="24" rx="20" ry="22" fill="none" stroke="url(#racketHighlightGradient)" strokeWidth="2" />
      {/* Frame inner edge */}
      <ellipse cx="32" cy="24" rx="18" ry="20" fill="none" stroke="#654321" strokeWidth="1" />

      {/* Throat piece */}
      <path d="M27 42 L27 38 Q27 34 30 32 L34 32 Q37 34 37 38 L37 42" fill="url(#racketHandleGradient)" />

      {/* Strings - vertical */}
      <line x1="32" y1="4" x2="32" y2="44" stroke="url(#racketStringGradient)" strokeWidth="1.2" />
      <line x1="24" y1="6" x2="24" y2="42" stroke="url(#racketStringGradient)" strokeWidth="1" />
      <line x1="40" y1="6" x2="40" y2="42" stroke="url(#racketStringGradient)" strokeWidth="1" />
      <line x1="16" y1="12" x2="16" y2="36" stroke="url(#racketStringGradient)" strokeWidth="0.8" />
      <line x1="48" y1="12" x2="48" y2="36" stroke="url(#racketStringGradient)" strokeWidth="0.8" />
      <line x1="28" y1="5" x2="28" y2="43" stroke="url(#racketStringGradient)" strokeWidth="0.8" />
      <line x1="36" y1="5" x2="36" y2="43" stroke="url(#racketStringGradient)" strokeWidth="0.8" />
      <line x1="20" y1="8" x2="20" y2="40" stroke="url(#racketStringGradient)" strokeWidth="0.8" />
      <line x1="44" y1="8" x2="44" y2="40" stroke="url(#racketStringGradient)" strokeWidth="0.8" />

      {/* Strings - horizontal */}
      <line x1="12" y1="16" x2="52" y2="16" stroke="url(#racketStringGradient)" strokeWidth="1" />
      <line x1="10" y1="24" x2="54" y2="24" stroke="url(#racketStringGradient)" strokeWidth="1.2" />
      <line x1="12" y1="32" x2="52" y2="32" stroke="url(#racketStringGradient)" strokeWidth="1" />
      <line x1="14" y1="10" x2="50" y2="10" stroke="url(#racketStringGradient)" strokeWidth="0.8" />
      <line x1="14" y1="38" x2="50" y2="38" stroke="url(#racketStringGradient)" strokeWidth="0.8" />
      <line x1="11" y1="20" x2="53" y2="20" stroke="url(#racketStringGradient)" strokeWidth="0.8" />
      <line x1="11" y1="28" x2="53" y2="28" stroke="url(#racketStringGradient)" strokeWidth="0.8" />

      {/* Brand logo area on throat */}
      <ellipse cx="32" cy="38" rx="4" ry="2" fill="#654321" />
      <ellipse cx="32" cy="38" rx="2" ry="1" fill="#A0522D" />
    </svg>
  );
}
