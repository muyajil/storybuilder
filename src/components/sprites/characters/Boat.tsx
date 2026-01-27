/**
 * Boat Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Boat({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hull gradient */}
        <linearGradient id="boatHullGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#5D3A1A" />
        </linearGradient>
        {/* Deck gradient */}
        <linearGradient id="boatDeckGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>
        {/* Cabin gradient */}
        <linearGradient id="boatCabinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        {/* Window gradient */}
        <linearGradient id="boatWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#5CACEE" />
        </linearGradient>
        {/* Mast gradient */}
        <linearGradient id="boatMastGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#6B3510" />
        </linearGradient>
        {/* Flag gradient */}
        <linearGradient id="boatFlagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        {/* Water reflection */}
        <linearGradient id="boatWaterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4DA6FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0066CC" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Water reflection under boat */}
      <ellipse cx="32" cy="58" rx="24" ry="4" fill="url(#boatWaterGradient)" />

      {/* Rumpf / Hull */}
      <path d="M8 40 L16 56 L48 56 L56 40 Z" fill="url(#boatHullGradient)" />
      {/* Hull detail lines */}
      <path d="M12 44 L18 54" stroke="#5D3A1A" strokeWidth="0.5" />
      <path d="M52 44 L46 54" stroke="#5D3A1A" strokeWidth="0.5" />
      {/* Hull waterline */}
      <path d="M14 52 L50 52" stroke="#6B3510" strokeWidth="1" />
      {/* Hull highlight */}
      <path d="M10 42 L17 54" stroke="#B8784E" strokeWidth="1" opacity="0.4" />

      {/* Deck */}
      <rect x="12" y="36" width="40" height="6" fill="url(#boatDeckGradient)" />
      {/* Deck planks */}
      <line x1="16" y1="36" x2="16" y2="42" stroke="#C4A67C" strokeWidth="0.5" />
      <line x1="24" y1="36" x2="24" y2="42" stroke="#C4A67C" strokeWidth="0.5" />
      <line x1="32" y1="36" x2="32" y2="42" stroke="#C4A67C" strokeWidth="0.5" />
      <line x1="40" y1="36" x2="40" y2="42" stroke="#C4A67C" strokeWidth="0.5" />
      <line x1="48" y1="36" x2="48" y2="42" stroke="#C4A67C" strokeWidth="0.5" />

      {/* Railing */}
      <line x1="14" y1="36" x2="50" y2="36" stroke="#8B4513" strokeWidth="1" />
      <line x1="16" y1="34" x2="16" y2="36" stroke="#8B4513" strokeWidth="1" />
      <line x1="26" y1="34" x2="26" y2="36" stroke="#8B4513" strokeWidth="1" />
      <line x1="38" y1="34" x2="38" y2="36" stroke="#8B4513" strokeWidth="1" />
      <line x1="48" y1="34" x2="48" y2="36" stroke="#8B4513" strokeWidth="1" />

      {/* Kabine / Cabin */}
      <rect x="20" y="24" width="20" height="12" fill="url(#boatCabinGradient)" rx="1" />
      {/* Cabin roof */}
      <rect x="18" y="22" width="24" height="3" fill="#E8E8E8" rx="1" />
      {/* Cabin shadow */}
      <rect x="20" y="34" width="20" height="2" fill="#C0C0C0" />

      {/* Windows */}
      <rect x="22" y="27" width="6" height="6" fill="url(#boatWindowGradient)" rx="1" />
      <rect x="32" y="27" width="6" height="6" fill="url(#boatWindowGradient)" rx="1" />
      {/* Window reflections */}
      <path d="M23 28 L26 28 L25 30 L23 30 Z" fill="white" opacity="0.4" />
      <path d="M33 28 L36 28 L35 30 L33 30 Z" fill="white" opacity="0.4" />
      {/* Window frames */}
      <line x1="25" y1="27" x2="25" y2="33" stroke="#888" strokeWidth="0.5" />
      <line x1="22" y1="30" x2="28" y2="30" stroke="#888" strokeWidth="0.5" />
      <line x1="35" y1="27" x2="35" y2="33" stroke="#888" strokeWidth="0.5" />
      <line x1="32" y1="30" x2="38" y2="30" stroke="#888" strokeWidth="0.5" />

      {/* Mast */}
      <rect x="30" y="6" width="4" height="18" fill="url(#boatMastGradient)" />
      {/* Mast top */}
      <circle cx="32" cy="6" r="2" fill="#6B3510" />
      {/* Crow's nest hint */}
      <rect x="28" y="10" width="8" height="2" fill="#8B4513" />

      {/* Flagge / Flag */}
      <polygon points="34,6 48,12 34,18" fill="url(#boatFlagGradient)" />
      {/* Flag wave effect */}
      <path d="M36 8 Q42 10 40 12 Q44 14 36 16" fill="#FF6666" opacity="0.3" />
      {/* Flag pole connection */}
      <circle cx="34" cy="6" r="1" fill="#8B4513" />

      {/* Anchor detail on hull */}
      <circle cx="12" cy="46" r="2" fill="#666" />
      <path d="M12 44 L12 48 M10 47 L14 47" stroke="#666" strokeWidth="1" />

      {/* Porthole */}
      <circle cx="44" cy="46" r="2.5" fill="#87CEEB" stroke="#8B4513" strokeWidth="1" />
      <circle cx="44" cy="46" r="1.5" fill="#B0E0FF" />
    </svg>
  );
}
