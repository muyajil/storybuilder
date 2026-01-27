/**
 * Gorilla Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Gorilla({ size = 64, color = '#2F2F2F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="gorillaBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Chest gradient (silver back) */}
        <radialGradient id="gorillaChestGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#A9A9A9" />
          <stop offset="70%" stopColor="#808080" />
          <stop offset="100%" stopColor="#696969" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="gorillaHeadGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#3D3D3D" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Face gradient */}
        <radialGradient id="gorillaFaceGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#808080" />
          <stop offset="70%" stopColor="#5A5A5A" />
          <stop offset="100%" stopColor="#4A4A4A" />
        </radialGradient>
        {/* Arm gradient */}
        <linearGradient id="gorillaArmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3D3D3D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="60" rx="22" ry="4" fill="rgba(0,0,0,0.2)" />

      {/* Arms with gradient */}
      <path d="M10 36 Q5 42 8 52 Q10 60 17 56" stroke="url(#gorillaArmGradient)" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M54 36 Q59 42 56 52 Q54 60 47 56" stroke="url(#gorillaArmGradient)" strokeWidth="10" fill="none" strokeLinecap="round" />
      {/* Arm highlights */}
      <path d="M12 40 Q10 46 12 50" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
      <path d="M52 40 Q54 46 52 50" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />

      {/* Hands */}
      <ellipse cx="16" cy="56" rx="5" ry="4" fill="#4A4A4A" />
      <ellipse cx="48" cy="56" rx="5" ry="4" fill="#4A4A4A" />
      {/* Fingers */}
      <circle cx="13" cy="58" r="1.5" fill="#3D3D3D" />
      <circle cx="16" cy="59" r="1.5" fill="#3D3D3D" />
      <circle cx="19" cy="58" r="1.5" fill="#3D3D3D" />
      <circle cx="45" cy="58" r="1.5" fill="#3D3D3D" />
      <circle cx="48" cy="59" r="1.5" fill="#3D3D3D" />
      <circle cx="51" cy="58" r="1.5" fill="#3D3D3D" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="42" rx="18" ry="16" fill="url(#gorillaBodyGradient)" />
      {/* Silver back marking */}
      <ellipse cx="32" cy="40" rx="10" ry="8" fill="rgba(192,192,192,0.2)" />

      {/* Chest/belly with gradient */}
      <ellipse cx="32" cy="46" rx="12" ry="10" fill="url(#gorillaChestGradient)" />
      {/* Chest highlight */}
      <ellipse cx="30" cy="44" rx="6" ry="5" fill="rgba(255,255,255,0.1)" />

      {/* Head with gradient */}
      <circle cx="32" cy="24" r="15" fill="url(#gorillaHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="28" cy="18" rx="6" ry="4" fill="rgba(255,255,255,0.1)" />

      {/* Brow ridge */}
      <path d="M20 18 Q26 16 32 18 Q38 16 44 18" stroke="#1A1A1A" strokeWidth="3" fill="none" />

      {/* Eyes with detail */}
      <ellipse cx="26" cy="22" rx="4" ry="3.5" fill="white" />
      <ellipse cx="38" cy="22" rx="4" ry="3.5" fill="white" />
      <circle cx="26" cy="22" r="2.5" fill="#4A3728" />
      <circle cx="38" cy="22" r="2.5" fill="#4A3728" />
      <circle cx="26" cy="22" r="1.2" fill="black" />
      <circle cx="38" cy="22" r="1.2" fill="black" />
      {/* Eye highlights */}
      <circle cx="25" cy="21" r="0.8" fill="white" />
      <circle cx="37" cy="21" r="0.8" fill="white" />

      {/* Face/muzzle with gradient */}
      <ellipse cx="32" cy="30" rx="7" ry="6" fill="url(#gorillaFaceGradient)" />
      {/* Muzzle highlight */}
      <ellipse cx="30" cy="28" rx="3" ry="2" fill="rgba(255,255,255,0.1)" />

      {/* Nostrils with detail */}
      <ellipse cx="29" cy="30" rx="2.5" ry="2" fill="#1A1A1A" />
      <ellipse cx="35" cy="30" rx="2.5" ry="2" fill="#1A1A1A" />
      <ellipse cx="29" cy="30" rx="1.2" ry="1" fill="#0A0A0A" />
      <ellipse cx="35" cy="30" r="1.2" ry="1" fill="#0A0A0A" />

      {/* Mouth */}
      <path d="M28 34 Q32 36 36 34" stroke="#1A1A1A" strokeWidth="1" fill="none" />

      {/* Ears */}
      <circle cx="17" cy="24" r="3" fill={color} />
      <circle cx="47" cy="24" r="3" fill={color} />
      <circle cx="17" cy="24" r="1.5" fill="#4A4A4A" />
      <circle cx="47" cy="24" r="1.5" fill="#4A4A4A" />

      {/* Fur texture on head */}
      <path d="M22 12 L24 14" stroke="#1A1A1A" strokeWidth="0.5" />
      <path d="M26 10 L27 12" stroke="#1A1A1A" strokeWidth="0.5" />
      <path d="M36 10 L37 12" stroke="#1A1A1A" strokeWidth="0.5" />
      <path d="M40 12 L42 14" stroke="#1A1A1A" strokeWidth="0.5" />
    </svg>
  );
}
