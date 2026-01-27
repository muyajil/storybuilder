/**
 * Robot Sprite Component
 * Enhanced with gradients, metallic sheen, and glowing elements
 */

import type { SpriteProps } from '../types';

export function Robot({ size = 64, color = '#C0C0C0' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Metal body gradient */}
        <linearGradient id="robotMetalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>
        {/* Head gradient */}
        <linearGradient id="robotHeadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
        {/* Antenna light gradient */}
        <radialGradient id="robotAntennaGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6666" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </radialGradient>
        {/* Eye glow gradient */}
        <linearGradient id="robotEyeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#66FF66" />
          <stop offset="50%" stopColor="#00FF00" />
          <stop offset="100%" stopColor="#00CC00" />
        </linearGradient>
        {/* Red light gradient */}
        <radialGradient id="robotRedLightGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6666" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#AA0000" />
        </radialGradient>
        {/* Green light gradient */}
        <radialGradient id="robotGreenLightGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#66FF66" />
          <stop offset="50%" stopColor="#00FF00" />
          <stop offset="100%" stopColor="#00AA00" />
        </radialGradient>
        {/* Chest panel gradient */}
        <linearGradient id="robotPanelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Joint gradient */}
        <radialGradient id="robotJointGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#909090" />
          <stop offset="50%" stopColor="#666666" />
          <stop offset="100%" stopColor="#4A4A4A" />
        </radialGradient>
        {/* Eye screen glow */}
        <radialGradient id="robotScreenGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00FF00" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00FF00" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Antenna / Antenne */}
      <rect x="29" y="2" width="6" height="10" fill="url(#robotMetalGradient)" rx="1" />
      <rect x="30" y="3" width="2" height="8" fill="#E8E8E8" opacity="0.3" />

      {/* Antenna light with glow */}
      <circle cx="32" cy="2" r="5" fill="url(#robotScreenGlow)" />
      <circle cx="32" cy="2" r="4" fill="url(#robotAntennaGlow)" />
      <circle cx="31" cy="1" r="1" fill="#FFFFFF" opacity="0.6" />

      {/* Head / Kopf */}
      <rect x="16" y="10" width="32" height="22" fill="url(#robotHeadGradient)" rx="5" />

      {/* Head highlight */}
      <rect x="18" y="12" width="28" height="8" fill="#E8E8E8" opacity="0.3" rx="3" />

      {/* Head panel lines */}
      <line x1="18" y1="20" x2="46" y2="20" stroke="#909090" strokeWidth="0.5" />
      <line x1="32" y1="12" x2="32" y2="30" stroke="#909090" strokeWidth="0.5" opacity="0.5" />

      {/* Eye screens / Augen */}
      <rect x="20" y="15" width="10" height="8" fill="url(#robotPanelGradient)" rx="2" />
      <rect x="34" y="15" width="10" height="8" fill="url(#robotPanelGradient)" rx="2" />

      {/* Eye glow effect */}
      <circle cx="25" cy="19" r="6" fill="url(#robotScreenGlow)" />
      <circle cx="39" cy="19" r="6" fill="url(#robotScreenGlow)" />

      {/* Eye displays */}
      <rect x="21" y="16" width="8" height="6" fill="url(#robotEyeGradient)" rx="1" />
      <rect x="35" y="16" width="8" height="6" fill="url(#robotEyeGradient)" rx="1" />

      {/* Eye scan lines */}
      <line x1="22" y1="17" x2="28" y2="17" stroke="#00CC00" strokeWidth="0.5" opacity="0.5" />
      <line x1="22" y1="19" x2="28" y2="19" stroke="#00CC00" strokeWidth="0.5" opacity="0.5" />
      <line x1="22" y1="21" x2="28" y2="21" stroke="#00CC00" strokeWidth="0.5" opacity="0.5" />
      <line x1="36" y1="17" x2="42" y2="17" stroke="#00CC00" strokeWidth="0.5" opacity="0.5" />
      <line x1="36" y1="19" x2="42" y2="19" stroke="#00CC00" strokeWidth="0.5" opacity="0.5" />
      <line x1="36" y1="21" x2="42" y2="21" stroke="#00CC00" strokeWidth="0.5" opacity="0.5" />

      {/* Mouth / Mund - speaker grille */}
      <rect x="22" y="25" width="20" height="4" fill="url(#robotPanelGradient)" rx="1" />
      <line x1="24" y1="27" x2="40" y2="27" stroke="#4A4A4A" strokeWidth="0.5" />
      <line x1="26" y1="26" x2="26" y2="28" stroke="#4A4A4A" strokeWidth="0.5" />
      <line x1="30" y1="26" x2="30" y2="28" stroke="#4A4A4A" strokeWidth="0.5" />
      <line x1="34" y1="26" x2="34" y2="28" stroke="#4A4A4A" strokeWidth="0.5" />
      <line x1="38" y1="26" x2="38" y2="28" stroke="#4A4A4A" strokeWidth="0.5" />

      {/* Neck */}
      <rect x="26" y="30" width="12" height="4" fill="url(#robotJointGradient)" rx="1" />

      {/* Body / Körper */}
      <rect x="14" y="33" width="36" height="22" fill="url(#robotMetalGradient)" rx="3" />

      {/* Body highlight */}
      <rect x="16" y="35" width="32" height="6" fill="#E8E8E8" opacity="0.3" rx="2" />

      {/* Chest panel / Brust-Panel */}
      <rect x="20" y="37" width="24" height="14" fill="url(#robotPanelGradient)" rx="2" />
      <rect x="21" y="38" width="22" height="2" fill="#4A4A4A" opacity="0.5" rx="1" />

      {/* Control buttons */}
      <circle cx="26" cy="44" r="4" fill="url(#robotRedLightGradient)" />
      <circle cx="26" cy="44" r="2" fill="#FF6666" opacity="0.5" />
      <circle cx="38" cy="44" r="4" fill="url(#robotGreenLightGradient)" />
      <circle cx="38" cy="44" r="2" fill="#66FF66" opacity="0.5" />

      {/* Status lights */}
      <rect x="30" y="41" width="4" height="2" fill="#FFFF00" rx="0.5" />
      <rect x="30" y="45" width="4" height="2" fill="#00BFFF" rx="0.5" />

      {/* Ventilation grille */}
      <rect x="22" y="48" width="20" height="2" fill="#1A1A1A" rx="0.5" />
      <line x1="24" y1="49" x2="40" y2="49" stroke="#333333" strokeWidth="0.5" />

      {/* Arms / Arme */}
      <rect x="4" y="35" width="11" height="8" fill="url(#robotMetalGradient)" rx="2" />
      <rect x="49" y="35" width="11" height="8" fill="url(#robotMetalGradient)" rx="2" />

      {/* Arm highlights */}
      <rect x="5" y="36" width="9" height="3" fill="#E8E8E8" opacity="0.3" rx="1" />
      <rect x="50" y="36" width="9" height="3" fill="#E8E8E8" opacity="0.3" rx="1" />

      {/* Shoulder joints */}
      <circle cx="14" cy="37" r="3" fill="url(#robotJointGradient)" />
      <circle cx="50" cy="37" r="3" fill="url(#robotJointGradient)" />

      {/* Hands / Hände - claws */}
      <circle cx="4" cy="39" r="5" fill="url(#robotJointGradient)" />
      <circle cx="60" cy="39" r="5" fill="url(#robotJointGradient)" />

      {/* Hand details */}
      <rect x="1" y="36" width="2" height="6" fill="#666666" rx="0.5" />
      <rect x="4" y="34" width="2" height="6" fill="#666666" rx="0.5" />
      <rect x="61" y="36" width="2" height="6" fill="#666666" rx="0.5" />
      <rect x="58" y="34" width="2" height="6" fill="#666666" rx="0.5" />

      {/* Legs / Beine */}
      <rect x="18" y="54" width="10" height="14" fill="url(#robotMetalGradient)" rx="2" />
      <rect x="36" y="54" width="10" height="14" fill="url(#robotMetalGradient)" rx="2" />

      {/* Leg highlights */}
      <rect x="19" y="55" width="8" height="4" fill="#E8E8E8" opacity="0.3" rx="1" />
      <rect x="37" y="55" width="8" height="4" fill="#E8E8E8" opacity="0.3" rx="1" />

      {/* Knee joints */}
      <circle cx="23" cy="60" r="2" fill="url(#robotJointGradient)" />
      <circle cx="41" cy="60" r="2" fill="url(#robotJointGradient)" />

      {/* Feet / Füße */}
      <rect x="16" y="66" width="14" height="4" fill="url(#robotMetalGradient)" rx="1" />
      <rect x="34" y="66" width="14" height="4" fill="url(#robotMetalGradient)" rx="1" />

      {/* Foot details */}
      <line x1="18" y1="68" x2="28" y2="68" stroke="#909090" strokeWidth="0.5" />
      <line x1="36" y1="68" x2="46" y2="68" stroke="#909090" strokeWidth="0.5" />

      {/* Power core glow in chest */}
      <circle cx="32" cy="44" r="8" fill="url(#robotScreenGlow)" opacity="0.5" />
    </svg>
  );
}
