/**
 * Kraken Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Kraken({ size = 64, color = '#4B0082' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="krakenBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#8B008B" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#2E0854" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="krakenEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        {/* Tentacle gradient */}
        <linearGradient id="krakenTentacleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#6B238E" />
          <stop offset="100%" stopColor="#2E0854" />
        </linearGradient>
        {/* Sucker gradient */}
        <radialGradient id="krakenSuckerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DDA0DD" />
          <stop offset="100%" stopColor="#9932CC" />
        </radialGradient>
        {/* Glow effect */}
        <radialGradient id="krakenGlowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(138,43,226,0.3)" />
          <stop offset="100%" stopColor="rgba(75,0,130,0)" />
        </radialGradient>
      </defs>

      {/* Ambient glow */}
      <ellipse cx="32" cy="32" rx="30" ry="28" fill="url(#krakenGlowGradient)" />

      {/* Tentacles with gradient */}
      {[...Array(8)].map((_, i) => {
        const startX = 20 + i * 3.5;
        const midX = 16 + i * 4;
        const endX = 14 + i * 5;
        return (
          <g key={i}>
            <path
              d={`M${startX} 38 Q${midX} 50 ${endX} 60 Q${midX - 2} 56 ${endX - 2} 64`}
              stroke="url(#krakenTentacleGradient)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Tentacle highlight */}
            <path
              d={`M${startX + 1} 40 Q${midX + 1} 48 ${endX + 1} 56`}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Suckers */}
            <circle cx={midX} cy={50} r="1.5" fill="url(#krakenSuckerGradient)" />
            <circle cx={endX - 1} cy={58} r="1.2" fill="url(#krakenSuckerGradient)" />
          </g>
        );
      })}

      {/* Body with gradient */}
      <ellipse cx="32" cy="24" rx="18" ry="16" fill="url(#krakenBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="26" cy="18" rx="8" ry="6" fill="rgba(255,255,255,0.1)" />
      {/* Body texture */}
      <ellipse cx="38" cy="26" rx="3" ry="2" fill="rgba(0,0,0,0.1)" />
      <ellipse cx="28" cy="28" rx="2" ry="1.5" fill="rgba(0,0,0,0.1)" />

      {/* Mantle ridges */}
      <path d="M18 20 Q22 16 26 20" stroke="rgba(0,0,0,0.15)" strokeWidth="1" fill="none" />
      <path d="M26 18 Q30 14 34 18" stroke="rgba(0,0,0,0.15)" strokeWidth="1" fill="none" />
      <path d="M34 18 Q38 14 42 18" stroke="rgba(0,0,0,0.15)" strokeWidth="1" fill="none" />

      {/* Fins/wings on sides */}
      <path d="M14 24 Q8 20 10 28 Q8 32 14 30" fill={color} opacity="0.8" />
      <path d="M50 24 Q56 20 54 28 Q56 32 50 30" fill={color} opacity="0.8" />
      {/* Fin highlights */}
      <path d="M12 24 Q10 22 11 26" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
      <path d="M52 24 Q54 22 53 26" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />

      {/* Eyes with gradient and menacing look */}
      <ellipse cx="24" cy="20" rx="6" ry="5.5" fill="url(#krakenEyeGradient)" />
      <ellipse cx="40" cy="20" rx="6" ry="5.5" fill="url(#krakenEyeGradient)" />

      {/* Slit pupils */}
      <ellipse cx="24" cy="20" rx="2" ry="4" fill="black" />
      <ellipse cx="40" cy="20" rx="2" ry="4" fill="black" />

      {/* Eye highlights */}
      <circle cx="22" cy="18" r="1.5" fill="white" opacity="0.7" />
      <circle cx="38" cy="18" r="1.5" fill="white" opacity="0.7" />
      <circle cx="25" cy="22" r="0.8" fill="white" opacity="0.4" />
      <circle cx="41" cy="22" r="0.8" fill="white" opacity="0.4" />

      {/* Angry brow ridges */}
      <path d="M18 16 Q22 14 28 18" stroke="#2E0854" strokeWidth="2" fill="none" />
      <path d="M46 16 Q42 14 36 18" stroke="#2E0854" strokeWidth="2" fill="none" />

      {/* Beak */}
      <path d="M32 28 L28 34 L32 32 L36 34 Z" fill="#2E0854" />
      <path d="M30 30 L32 31 L34 30" stroke="#1A0030" strokeWidth="0.5" fill="none" />

      {/* Spots/patterns on head */}
      <circle cx="20" cy="12" r="1.5" fill="rgba(139,0,139,0.5)" />
      <circle cx="44" cy="12" r="1.5" fill="rgba(139,0,139,0.5)" />
      <circle cx="32" cy="10" r="2" fill="rgba(139,0,139,0.5)" />

      {/* Bubbles around */}
      <circle cx="8" cy="14" r="1.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="56" cy="16" r="1" fill="rgba(255,255,255,0.3)" />
      <circle cx="10" cy="44" r="1.2" fill="rgba(255,255,255,0.2)" />
      <circle cx="54" cy="42" r="1" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}
