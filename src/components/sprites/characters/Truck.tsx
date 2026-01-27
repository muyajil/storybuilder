/**
 * Truck Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Truck({ size = 64, color = '#4169E1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Cargo gradient */}
        <linearGradient id="truckCargoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="50%" stopColor="#808080" />
          <stop offset="100%" stopColor="#606060" />
        </linearGradient>
        {/* Cabin gradient */}
        <linearGradient id="truckCabinGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5B8DEE" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#2E4A8E" />
        </linearGradient>
        {/* Window gradient */}
        <radialGradient id="truckWindowGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4682B4" />
        </radialGradient>
        {/* Wheel gradient */}
        <radialGradient id="truckWheelGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="70%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Hub gradient */}
        <radialGradient id="truckHubGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#888" />
          <stop offset="70%" stopColor="#666" />
          <stop offset="100%" stopColor="#444" />
        </radialGradient>
        {/* Headlight gradient */}
        <radialGradient id="truckHeadlightGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFF99" />
          <stop offset="70%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
      </defs>

      {/* Cargo container */}
      <rect x="2" y="14" width="38" height="34" fill="url(#truckCargoGradient)" rx="2" />
      {/* Cargo highlight */}
      <rect x="4" y="14" width="6" height="34" fill="#B0B0B0" opacity="0.3" />
      {/* Cargo shadow */}
      <rect x="34" y="14" width="4" height="34" fill="#505050" opacity="0.3" />
      {/* Cargo door lines */}
      <line x1="20" y1="16" x2="20" y2="46" stroke="#606060" strokeWidth="1" />
      <line x1="21" y1="16" x2="21" y2="46" stroke="#909090" strokeWidth="0.5" />
      {/* Door handles */}
      <rect x="18" y="28" width="1" height="6" fill="#505050" rx="0.5" />
      <rect x="22" y="28" width="1" height="6" fill="#505050" rx="0.5" />
      {/* Cargo rivets */}
      <circle cx="6" cy="18" r="1" fill="#606060" />
      <circle cx="36" cy="18" r="1" fill="#606060" />
      <circle cx="6" cy="44" r="1" fill="#606060" />
      <circle cx="36" cy="44" r="1" fill="#606060" />

      {/* Cabin */}
      <rect x="38" y="22" width="22" height="26" fill="url(#truckCabinGradient)" rx="3" />
      {/* Cabin highlight */}
      <rect x="40" y="22" width="4" height="24" fill="#6B9DFF" opacity="0.3" />

      {/* Window */}
      <rect x="42" y="26" width="14" height="12" fill="url(#truckWindowGradient)" rx="2" />
      {/* Window frame */}
      <rect x="42" y="26" width="14" height="12" fill="none" stroke="#2E4A8E" strokeWidth="1" rx="2" />
      {/* Window glare */}
      <rect x="43" y="27" width="4" height="6" fill="white" opacity="0.3" rx="1" />

      {/* Door */}
      <rect x="42" y="40" width="12" height="8" fill="#3A5BC7" stroke="#2E4A8E" strokeWidth="0.5" rx="1" />
      {/* Door handle */}
      <rect x="51" y="43" width="2" height="3" fill="#C0C0C0" rx="0.5" />

      {/* Grill */}
      <rect x="56" y="32" width="4" height="10" fill="#333" rx="1" />
      <line x1="58" y1="34" x2="58" y2="40" stroke="#555" strokeWidth="0.5" />

      {/* Headlight */}
      <rect x="56" y="36" width="4" height="4" fill="url(#truckHeadlightGradient)" rx="1" />
      <rect x="57" y="37" width="2" height="2" fill="#FFFF99" rx="0.5" />
      {/* Light glow */}
      <ellipse cx="58" cy="38" rx="4" ry="3" fill="#FFFF00" opacity="0.2" />

      {/* Side mirror */}
      <rect x="38" y="28" width="2" height="4" fill="#333" />
      <rect x="36" y="28" width="2" height="5" fill="#555" rx="1" />

      {/* Rear wheels (double) */}
      <circle cx="14" cy="52" r="9" fill="url(#truckWheelGradient)" />
      <circle cx="14" cy="52" r="6" fill="url(#truckHubGradient)" />
      <circle cx="14" cy="52" r="2" fill="#888" />
      {/* Tire tread */}
      <circle cx="14" cy="52" r="8" fill="none" stroke="#444" strokeWidth="1" strokeDasharray="3,2" />

      {/* Front wheel */}
      <circle cx="52" cy="52" r="9" fill="url(#truckWheelGradient)" />
      <circle cx="52" cy="52" r="6" fill="url(#truckHubGradient)" />
      <circle cx="52" cy="52" r="2" fill="#888" />
      {/* Tire tread */}
      <circle cx="52" cy="52" r="8" fill="none" stroke="#444" strokeWidth="1" strokeDasharray="3,2" />

      {/* Mud flaps */}
      <rect x="4" y="46" width="6" height="6" fill="#333" rx="1" />
      <rect x="54" y="46" width="4" height="4" fill="#333" rx="1" />

      {/* Exhaust */}
      <rect x="38" y="44" width="2" height="6" fill="#444" rx="0.5" />
      {/* Exhaust smoke */}
      <circle cx="39" cy="42" r="1.5" fill="#808080" opacity="0.3" />
      <circle cx="38" cy="40" r="1" fill="#808080" opacity="0.2" />
    </svg>
  );
}
