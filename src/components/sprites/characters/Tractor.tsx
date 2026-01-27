/**
 * Tractor Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Tractor({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="tractorBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#32CD32" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#006400" />
        </linearGradient>
        {/* Hood gradient */}
        <linearGradient id="tractorHoodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#32CD32" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1a6f1a" />
        </linearGradient>
        {/* Window gradient */}
        <radialGradient id="tractorWindowGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4682B4" />
        </radialGradient>
        {/* Big wheel gradient */}
        <radialGradient id="tractorBigWheelGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="70%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Wheel hub gradient */}
        <radialGradient id="tractorHubGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#888" />
          <stop offset="70%" stopColor="#666" />
          <stop offset="100%" stopColor="#444" />
        </radialGradient>
        {/* Exhaust gradient */}
        <linearGradient id="tractorExhaustGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="50%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Headlight gradient */}
        <radialGradient id="tractorHeadlightGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFF99" />
          <stop offset="70%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
      </defs>

      {/* Exhaust smoke */}
      <circle cx="54" cy="10" r="3" fill="#808080" opacity="0.4" />
      <circle cx="58" cy="6" r="2" fill="#808080" opacity="0.3" />
      <circle cx="52" cy="4" r="1.5" fill="#808080" opacity="0.2" />

      {/* Exhaust pipe */}
      <rect x="51" y="14" width="6" height="12" fill="url(#tractorExhaustGradient)" rx="1" />
      <ellipse cx="54" cy="14" rx="3" ry="1" fill="#555" />

      {/* Engine hood */}
      <rect x="38" y="22" width="22" height="18" fill="url(#tractorHoodGradient)" rx="2" />
      {/* Hood vents */}
      <rect x="42" y="26" width="14" height="2" fill="#006400" rx="1" />
      <rect x="42" y="30" width="14" height="2" fill="#006400" rx="1" />
      <rect x="42" y="34" width="14" height="2" fill="#006400" rx="1" />
      {/* Hood highlight */}
      <rect x="40" y="22" width="4" height="18" fill="#32CD32" opacity="0.3" />

      {/* Cabin */}
      <rect x="16" y="12" width="26" height="28" fill="url(#tractorBodyGradient)" rx="3" />
      {/* Cabin highlight */}
      <rect x="18" y="12" width="4" height="26" fill="#32CD32" opacity="0.3" />

      {/* Window */}
      <rect x="20" y="16" width="18" height="16" fill="url(#tractorWindowGradient)" rx="2" />
      {/* Window frame */}
      <rect x="20" y="16" width="18" height="16" fill="none" stroke="#006400" strokeWidth="1" rx="2" />
      {/* Window glare */}
      <rect x="21" y="17" width="6" height="8" fill="white" opacity="0.3" rx="1" />
      {/* Window divider */}
      <line x1="29" y1="16" x2="29" y2="32" stroke="#006400" strokeWidth="1" />

      {/* Roof */}
      <rect x="14" y="8" width="30" height="6" fill="url(#tractorBodyGradient)" rx="2" />

      {/* Headlight */}
      <circle cx="58" cy="32" r="4" fill="url(#tractorHeadlightGradient)" />
      <circle cx="58" cy="32" r="2" fill="#FFFF99" />
      {/* Light glow */}
      <circle cx="58" cy="32" r="6" fill="#FFFF00" opacity="0.2" />

      {/* Big rear wheel */}
      <circle cx="24" cy="50" r="14" fill="url(#tractorBigWheelGradient)" />
      {/* Tire tread pattern */}
      <circle cx="24" cy="50" r="12" fill="none" stroke="#444" strokeWidth="2" strokeDasharray="4,2" />
      {/* Inner wheel */}
      <circle cx="24" cy="50" r="10" fill="url(#tractorHubGradient)" />
      {/* Wheel hub */}
      <circle cx="24" cy="50" r="5" fill="#333" />
      <circle cx="24" cy="50" r="2" fill="#666" />
      {/* Hub bolts */}
      <circle cx="24" cy="46" r="1" fill="#888" />
      <circle cx="24" cy="54" r="1" fill="#888" />
      <circle cx="20" cy="50" r="1" fill="#888" />
      <circle cx="28" cy="50" r="1" fill="#888" />

      {/* Small front wheel */}
      <circle cx="52" cy="52" r="9" fill="url(#tractorBigWheelGradient)" />
      <circle cx="52" cy="52" r="7" fill="none" stroke="#444" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="52" cy="52" r="5" fill="url(#tractorHubGradient)" />
      <circle cx="52" cy="52" r="2" fill="#666" />

      {/* Fender over big wheel */}
      <path d="M10 40 Q24 30 38 40" fill="url(#tractorBodyGradient)" />

      {/* Step */}
      <rect x="38" y="38" width="6" height="4" fill="#444" />
      <rect x="38" y="38" width="6" height="1" fill="#666" />
    </svg>
  );
}
