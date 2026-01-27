/**
 * Rocket Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Rocket({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="rocketBodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#C0C0C0" />
        </linearGradient>
        {/* Nose cone gradient */}
        <linearGradient id="rocketNoseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        {/* Window gradient */}
        <radialGradient id="rocketWindowGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4169E1" />
        </radialGradient>
        {/* Fin gradient */}
        <linearGradient id="rocketFinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6666" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#AA0000" />
        </linearGradient>
        {/* Flame gradient */}
        <linearGradient id="rocketFlameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="40%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FF4500" />
        </linearGradient>
        {/* Inner flame gradient */}
        <linearGradient id="rocketInnerFlameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#FFFF99" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        {/* Engine gradient */}
        <linearGradient id="rocketEngineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#555555" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>

      {/* Spitze / Nose cone */}
      <polygon points="32,0 24,20 40,20" fill="url(#rocketNoseGradient)" />
      <polygon points="32,2 26,18 32,16" fill="#FF6666" opacity="0.4" />

      {/* Rumpf / Body */}
      <rect x="24" y="20" width="16" height="32" fill="url(#rocketBodyGradient)" />
      {/* Body highlight */}
      <rect x="26" y="20" width="4" height="32" fill="white" opacity="0.3" />
      {/* Body shadow */}
      <rect x="36" y="20" width="4" height="32" fill="#666" opacity="0.2" />

      {/* Rivets/Details */}
      <circle cx="27" cy="24" r="1" fill="#AAA" />
      <circle cx="37" cy="24" r="1" fill="#AAA" />
      <circle cx="27" cy="48" r="1" fill="#AAA" />
      <circle cx="37" cy="48" r="1" fill="#AAA" />

      {/* Fenster / Window - outer ring */}
      <circle cx="32" cy="34" r="7" fill="#4169E1" />
      {/* Window glass */}
      <circle cx="32" cy="34" r="6" fill="url(#rocketWindowGradient)" />
      {/* Window highlight */}
      <circle cx="30" cy="32" r="2" fill="white" opacity="0.6" />
      {/* Window frame */}
      <circle cx="32" cy="34" r="6" fill="none" stroke="#666" strokeWidth="0.5" />

      {/* Flossen / Fins */}
      <polygon points="24,44 14,58 24,52" fill="url(#rocketFinGradient)" />
      <polygon points="40,44 50,58 40,52" fill="url(#rocketFinGradient)" />
      {/* Fin highlights */}
      <polygon points="24,45 18,54 24,51" fill="#FF8888" opacity="0.4" />

      {/* Triebwerk / Engine */}
      <rect x="26" y="52" width="12" height="5" fill="url(#rocketEngineGradient)" rx="1" />
      <rect x="28" y="52" width="2" height="5" fill="#666" opacity="0.3" />

      {/* Flamme / Flame - outer */}
      <polygon points="27,57 32,68 37,57" fill="url(#rocketFlameGradient)" />
      {/* Flame - middle */}
      <polygon points="29,57 32,65 35,57" fill="url(#rocketInnerFlameGradient)" />
      {/* Flame - inner core */}
      <polygon points="30.5,57 32,62 33.5,57" fill="white" opacity="0.8" />

      {/* Flame glow effect */}
      <ellipse cx="32" cy="58" rx="6" ry="3" fill="#FFA500" opacity="0.3" />
    </svg>
  );
}
