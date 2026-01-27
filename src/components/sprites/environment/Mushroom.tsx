/**
 * Mushroom Sprite Component
 * Enhanced with organic textures, cap gradients, and natural details
 */

import type { ElementProps } from '../types';

export function Mushroom({ x = 0, y = 0, size = 40, color = '#FF0000' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Cap gradient */}
        <radialGradient id="mushroomCapGradient" cx="30%" cy="20%" r="80%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>

        {/* Cap highlight gradient */}
        <linearGradient id="mushroomCapHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="50%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Cap shadow gradient */}
        <linearGradient id="mushroomCapShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="70%" stopColor="#4A0000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3A0000" stopOpacity="0.5" />
        </linearGradient>

        {/* Stem gradient */}
        <linearGradient id="mushroomStemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8E4C9" />
          <stop offset="30%" stopColor="#F5F5DC" />
          <stop offset="70%" stopColor="#F8F8E8" />
          <stop offset="100%" stopColor="#DDD8B8" />
        </linearGradient>

        {/* Stem inner shadow */}
        <linearGradient id="mushroomStemShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B8970" stopOpacity="0.4" />
          <stop offset="30%" stopColor="#8B8970" stopOpacity="0" />
          <stop offset="100%" stopColor="#8B8970" stopOpacity="0.2" />
        </linearGradient>

        {/* Spot gradient */}
        <radialGradient id="mushroomSpotGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F8F8F0" />
          <stop offset="100%" stopColor="#E8E8E0" />
        </radialGradient>

        {/* Gill gradient */}
        <linearGradient id="mushroomGillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D8D4B8" />
          <stop offset="100%" stopColor="#C0BC98" />
        </linearGradient>

        {/* Cap glow filter */}
        <filter id="mushroomCapGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#600000" floodOpacity="0.3" />
        </filter>

        {/* Spot shadow filter */}
        <filter id="mushroomSpotShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0.3" dy="0.3" stdDeviation="0.2" floodColor="#AA0000" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="20" cy="39" rx="8" ry="2" fill="#2A2A2A" opacity="0.25" />

      {/* Stiel / Stem base */}
      <rect x="14" y="22" width="12" height="18" fill="url(#mushroomStemGradient)" rx="2" />

      {/* Stem shadow overlay */}
      <rect x="14" y="22" width="12" height="18" fill="url(#mushroomStemShadow)" rx="2" />

      {/* Stem texture lines */}
      <path d="M 16,24 L 16,38" stroke="#C8C4A8" strokeWidth="0.5" opacity="0.4" />
      <path d="M 19,23 L 19,39" stroke="#C8C4A8" strokeWidth="0.3" opacity="0.3" />
      <path d="M 22,24 L 22,38" stroke="#C8C4A8" strokeWidth="0.5" opacity="0.4" />
      <path d="M 24,25 L 24,37" stroke="#C8C4A8" strokeWidth="0.3" opacity="0.3" />

      {/* Stem ring detail */}
      <ellipse cx="20" cy="26" rx="6" ry="1.5" fill="#E0DCC0" opacity="0.5" />

      {/* Gills under cap */}
      <ellipse cx="20" cy="22" rx="10" ry="3" fill="url(#mushroomGillGradient)" />
      <path d="M 12,22 Q 20,25 28,22" stroke="#B0AC90" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Hut / Cap - main */}
      <ellipse cx="20" cy="18" rx="18" ry="14" fill="url(#mushroomCapGradient)" filter="url(#mushroomCapGlow)" />

      {/* Cap shadow overlay */}
      <ellipse cx="20" cy="18" rx="18" ry="14" fill="url(#mushroomCapShadow)" />

      {/* Cap highlight */}
      <ellipse cx="14" cy="12" rx="8" ry="5" fill="url(#mushroomCapHighlight)" />

      {/* Cap edge highlight */}
      <path d="M 5,20 Q 10,24 15,22" stroke="white" strokeWidth="0.8" fill="none" opacity="0.2" />

      {/* Punkte / Dots - with gradients and shadows */}
      <circle cx="12" cy="14" r="3.5" fill="url(#mushroomSpotGradient)" filter="url(#mushroomSpotShadow)" />
      <circle cx="24" cy="10" r="4.5" fill="url(#mushroomSpotGradient)" filter="url(#mushroomSpotShadow)" />
      <circle cx="28" cy="18" r="3" fill="url(#mushroomSpotGradient)" filter="url(#mushroomSpotShadow)" />
      <circle cx="16" cy="22" r="2.2" fill="url(#mushroomSpotGradient)" filter="url(#mushroomSpotShadow)" />

      {/* Additional smaller spots */}
      <circle cx="8" cy="20" r="1.8" fill="url(#mushroomSpotGradient)" opacity="0.9" />
      <circle cx="20" cy="6" r="2" fill="url(#mushroomSpotGradient)" opacity="0.85" />
      <circle cx="32" cy="14" r="1.5" fill="url(#mushroomSpotGradient)" opacity="0.8" />
      <circle cx="24" cy="22" r="1.2" fill="url(#mushroomSpotGradient)" opacity="0.75" />

      {/* Tiny spot details */}
      <circle cx="15" cy="8" r="0.8" fill="white" opacity="0.6" />
      <circle cx="30" cy="10" r="0.6" fill="white" opacity="0.5" />

      {/* Cap shine spots */}
      <circle cx="10" cy="10" r="1" fill="white" opacity="0.25" />
      <circle cx="18" cy="7" r="0.7" fill="white" opacity="0.2" />
    </svg>
  );
}
