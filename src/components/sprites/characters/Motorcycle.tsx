/**
 * Motorcycle Sprite Component
 * Enhanced with gradients, chrome details, and realistic shading
 */

import type { SpriteProps } from '../types';

export function Motorcycle({ size = 64, color = '#1a1a1a' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Tire gradient */}
        <radialGradient id="motorcycleTireGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="70%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Rim gradient */}
        <radialGradient id="motorcycleRimGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#666666" />
        </radialGradient>
        {/* Tank gradient */}
        <linearGradient id="motorcycleTankGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#444444" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#0A0A0A" />
        </linearGradient>
        {/* Chrome gradient */}
        <linearGradient id="motorcycleChromeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#E8E8E8" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="75%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>
        {/* Engine gradient */}
        <linearGradient id="motorcycleEngineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
        {/* Headlight gradient */}
        <radialGradient id="motorcycleHeadlightGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FFFF88" />
          <stop offset="100%" stopColor="#FFDD00" />
        </radialGradient>
        {/* Seat gradient */}
        <linearGradient id="motorcycleSeatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
      </defs>

      {/* Back wheel / Hinterrad */}
      <circle cx="12" cy="48" r="11" fill="url(#motorcycleTireGradient)" />
      <circle cx="12" cy="48" r="9" fill="#2A2A2A" />
      <circle cx="12" cy="48" r="7" fill="url(#motorcycleRimGradient)" />
      <circle cx="12" cy="48" r="3" fill="#4A4A4A" />
      {/* Spokes */}
      <line x1="12" y1="41" x2="12" y2="55" stroke="#888888" strokeWidth="0.5" />
      <line x1="5" y1="48" x2="19" y2="48" stroke="#888888" strokeWidth="0.5" />
      <line x1="7" y1="43" x2="17" y2="53" stroke="#888888" strokeWidth="0.5" />
      <line x1="7" y1="53" x2="17" y2="43" stroke="#888888" strokeWidth="0.5" />

      {/* Front wheel / Vorderrad */}
      <circle cx="52" cy="48" r="11" fill="url(#motorcycleTireGradient)" />
      <circle cx="52" cy="48" r="9" fill="#2A2A2A" />
      <circle cx="52" cy="48" r="7" fill="url(#motorcycleRimGradient)" />
      <circle cx="52" cy="48" r="3" fill="#4A4A4A" />
      {/* Spokes */}
      <line x1="52" y1="41" x2="52" y2="55" stroke="#888888" strokeWidth="0.5" />
      <line x1="45" y1="48" x2="59" y2="48" stroke="#888888" strokeWidth="0.5" />
      <line x1="47" y1="43" x2="57" y2="53" stroke="#888888" strokeWidth="0.5" />
      <line x1="47" y1="53" x2="57" y2="43" stroke="#888888" strokeWidth="0.5" />

      {/* Frame */}
      <path d="M12 48 L24 36 L44 36 L52 48" stroke="#333333" strokeWidth="3" fill="none" />
      <path d="M24 36 L24 44" stroke="#333333" strokeWidth="2" fill="none" />

      {/* Swingarm */}
      <path d="M24 44 L12 48" stroke="url(#motorcycleChromeGradient)" strokeWidth="2" fill="none" />

      {/* Front fork */}
      <path d="M44 36 L52 48" stroke="url(#motorcycleChromeGradient)" strokeWidth="3" fill="none" />
      <path d="M46 34 L54 46" stroke="url(#motorcycleChromeGradient)" strokeWidth="2" fill="none" />

      {/* Tank / Tank */}
      <ellipse cx="32" cy="34" rx="14" ry="9" fill="url(#motorcycleTankGradient)" />
      {/* Tank highlight */}
      <ellipse cx="28" cy="30" rx="6" ry="3" fill="#FFFFFF" opacity="0.2" />
      {/* Tank stripe */}
      <path d="M20 34 L44 34" stroke="#FF0000" strokeWidth="2" />

      {/* Engine / Motor */}
      <rect x="20" y="40" width="22" height="12" fill="url(#motorcycleEngineGradient)" rx="2" />
      {/* Engine fins */}
      <line x1="22" y1="42" x2="22" y2="50" stroke="#909090" strokeWidth="1" />
      <line x1="26" y1="42" x2="26" y2="50" stroke="#909090" strokeWidth="1" />
      <line x1="30" y1="42" x2="30" y2="50" stroke="#909090" strokeWidth="1" />
      <line x1="34" y1="42" x2="34" y2="50" stroke="#909090" strokeWidth="1" />
      <line x1="38" y1="42" x2="38" y2="50" stroke="#909090" strokeWidth="1" />
      {/* Engine cylinder */}
      <ellipse cx="31" cy="46" rx="4" ry="3" fill="#A0A0A0" />

      {/* Seat / Sitz */}
      <ellipse cx="22" cy="30" rx="9" ry="5" fill="url(#motorcycleSeatGradient)" />
      <ellipse cx="22" cy="29" rx="7" ry="3" fill="#4A4A4A" opacity="0.3" />

      {/* Handlebar / Lenker */}
      <rect x="42" y="22" width="18" height="4" fill="url(#motorcycleChromeGradient)" rx="2" />
      {/* Grips */}
      <rect x="42" y="21" width="5" height="6" fill="#1A1A1A" rx="2" />
      <rect x="56" y="21" width="5" height="6" fill="#1A1A1A" rx="2" />

      {/* Headlight / Scheinwerfer */}
      <ellipse cx="56" cy="34" rx="5" ry="4" fill="#333333" />
      <ellipse cx="56" cy="34" rx="4" ry="3" fill="url(#motorcycleHeadlightGradient)" />
      {/* Light beam effect */}
      <ellipse cx="60" cy="34" rx="3" ry="2" fill="#FFFF88" opacity="0.3" />

      {/* Exhaust / Auspuff */}
      <rect x="2" y="43" width="14" height="4" fill="url(#motorcycleChromeGradient)" rx="2" />
      <ellipse cx="3" cy="45" rx="2" ry="2" fill="#333333" />
      {/* Exhaust tip */}
      <ellipse cx="2" cy="45" rx="1.5" ry="1.5" fill="#1A1A1A" />

      {/* Rear fender */}
      <path d="M4 42 Q12 36 20 42" fill="url(#motorcycleTankGradient)" />

      {/* Mirror */}
      <ellipse cx="48" cy="18" rx="3" ry="2" fill="url(#motorcycleChromeGradient)" />
      <line x1="48" y1="20" x2="46" y2="24" stroke="#333333" strokeWidth="1" />

      {/* Kickstand shadow hint */}
      <line x1="28" y1="52" x2="24" y2="58" stroke="#333333" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
