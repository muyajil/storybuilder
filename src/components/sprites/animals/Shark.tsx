/**
 * Shark Sprite Component
 * Enhanced with gradients, sleek texture, and powerful features
 */

import type { SpriteProps } from '../types';

export function Shark({ size = 64, color = '#4682B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="sharkBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5C9DCC" stopOpacity="1" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#36648B" stopOpacity="1" />
        </linearGradient>
        {/* Belly gradient */}
        <radialGradient id="sharkBellyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E8E8E8" stopOpacity="1" />
          <stop offset="100%" stopColor="#B0C4DE" stopOpacity="1" />
        </radialGradient>
        {/* Fin gradient */}
        <linearGradient id="sharkFinGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#36648B" stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <linearGradient id="sharkHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="sharkTailGradient" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#36648B" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Tail fin */}
      <polygon points="6,32 -2,22 4,32 -2,42" fill="url(#sharkTailGradient)" />
      <line x1="2" y1="28" x2="6" y2="32" stroke="#36648B" strokeWidth="0.5" opacity="0.5" />
      <line x1="2" y1="36" x2="6" y2="32" stroke="#36648B" strokeWidth="0.5" opacity="0.5" />

      {/* Body */}
      <ellipse cx="32" cy="32" rx="26" ry="12" fill="url(#sharkBodyGradient)" />

      {/* Body highlight streak */}
      <ellipse cx="32" cy="28" rx="22" ry="6" fill="url(#sharkHighlight)" />

      {/* Body texture lines */}
      <path d="M12 30 Q22 28 32 30" stroke="#36648B" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M32 30 Q42 28 52 30" stroke="#36648B" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Head - pointed snout */}
      <polygon points="58,32 66,28 66,36" fill="url(#sharkBodyGradient)" />

      {/* Snout highlight */}
      <polygon points="58,32 64,29 64,32" fill="white" opacity="0.1" />

      {/* Dorsal fin - iconic */}
      <polygon points="32,20 26,8 40,20" fill="url(#sharkFinGradient)" />
      <line x1="32" y1="20" x2="30" y2="10" stroke="#5C9DCC" strokeWidth="0.5" opacity="0.3" />

      {/* Pectoral fins */}
      <polygon points="40,40 34,54 48,46" fill="url(#sharkFinGradient)" />
      <polygon points="24,40 18,54 30,46" fill="url(#sharkFinGradient)" />

      {/* Fin texture */}
      <line x1="40" y1="42" x2="38" y2="50" stroke="#36648B" strokeWidth="0.5" opacity="0.3" />
      <line x1="24" y1="42" x2="22" y2="50" stroke="#36648B" strokeWidth="0.5" opacity="0.3" />

      {/* Belly */}
      <ellipse cx="40" cy="36" rx="16" ry="7" fill="url(#sharkBellyGradient)" />

      {/* Belly highlight */}
      <ellipse cx="38" cy="34" rx="8" ry="4" fill="white" opacity="0.2" />

      {/* Eye */}
      <circle cx="56" cy="30" r="3" fill="white" />
      <circle cx="56" cy="30" r="2" fill="#1a1a1a" />
      <circle cx="55" cy="29" r="0.8" fill="white" />

      {/* Gill slits */}
      <line x1="46" y1="28" x2="46" y2="36" stroke="#2F4F4F" strokeWidth="1.5" />
      <line x1="50" y1="28" x2="50" y2="36" stroke="#2F4F4F" strokeWidth="1.5" />
      <line x1="54" y1="28" x2="54" y2="34" stroke="#2F4F4F" strokeWidth="1.5" />

      {/* Mouth line */}
      <path d="M58 36 Q62 38 66 36" stroke="#2F4F4F" strokeWidth="1" fill="none" />

      {/* Teeth hint */}
      <path d="M60 36 L61 38 L62 36 L63 38 L64 36" stroke="white" strokeWidth="0.5" fill="none" opacity="0.6" />

      {/* Secondary dorsal fin (smaller) */}
      <polygon points="16,22 14,16 20,22" fill="url(#sharkFinGradient)" />

      {/* Anal fin */}
      <polygon points="16,42 14,48 20,42" fill="url(#sharkFinGradient)" />

      {/* Lateral line */}
      <path d="M10 32 Q32 30 54 32" stroke="#5C9DCC" strokeWidth="0.5" fill="none" opacity="0.4" />
    </svg>
  );
}
