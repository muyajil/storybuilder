/**
 * Spaceship Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Spaceship({ size = 64, color = '#C0C0C0' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="spaceshipBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
        {/* Dome gradient */}
        <radialGradient id="spaceshipDomeGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4682B4" />
        </radialGradient>
        {/* Red light gradient */}
        <radialGradient id="spaceshipRedLightGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FF6666" />
          <stop offset="70%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </radialGradient>
        {/* Green light gradient */}
        <radialGradient id="spaceshipGreenLightGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#66FF66" />
          <stop offset="70%" stopColor="#00FF00" />
          <stop offset="100%" stopColor="#00CC00" />
        </radialGradient>
        {/* Blue light gradient */}
        <radialGradient id="spaceshipBlueLightGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#6666FF" />
          <stop offset="70%" stopColor="#0000FF" />
          <stop offset="100%" stopColor="#0000CC" />
        </radialGradient>
        {/* Leg gradient */}
        <linearGradient id="spaceshipLegGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#888" />
          <stop offset="50%" stopColor="#666" />
          <stop offset="100%" stopColor="#444" />
        </linearGradient>
        {/* Antenna light gradient */}
        <radialGradient id="spaceshipAntennaGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FF8888" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#AA0000" />
        </radialGradient>
      </defs>

      {/* Antenna */}
      <line x1="32" y1="16" x2="32" y2="6" stroke="#555" strokeWidth="2.5" />
      <line x1="32" y1="16" x2="32" y2="8" stroke="#777" strokeWidth="1" />
      {/* Antenna light with glow */}
      <circle cx="32" cy="5" r="4" fill="url(#spaceshipAntennaGradient)" />
      <circle cx="32" cy="5" r="6" fill="#FF0000" opacity="0.2" />
      <circle cx="31" cy="4" r="1" fill="#FFA0A0" />

      {/* Main body */}
      <ellipse cx="32" cy="32" rx="26" ry="13" fill="url(#spaceshipBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="32" cy="28" rx="20" ry="6" fill="white" opacity="0.2" />
      {/* Body rim */}
      <ellipse cx="32" cy="32" rx="26" ry="13" fill="none" stroke="#888" strokeWidth="1" />

      {/* Dome */}
      <ellipse cx="32" cy="26" rx="13" ry="11" fill="url(#spaceshipDomeGradient)" />
      {/* Dome highlight */}
      <ellipse cx="28" cy="22" rx="5" ry="4" fill="white" opacity="0.4" />
      {/* Dome frame */}
      <ellipse cx="32" cy="26" rx="13" ry="11" fill="none" stroke="#4682B4" strokeWidth="1" />

      {/* Alien silhouette inside */}
      <ellipse cx="32" cy="28" rx="5" ry="6" fill="#2F4F4F" opacity="0.4" />
      <circle cx="30" cy="26" r="1.5" fill="#1a1a1a" opacity="0.5" />
      <circle cx="34" cy="26" r="1.5" fill="#1a1a1a" opacity="0.5" />

      {/* Running lights */}
      <circle cx="14" cy="36" r="3.5" fill="url(#spaceshipRedLightGradient)" />
      <circle cx="14" cy="36" r="5" fill="#FF0000" opacity="0.2" />

      <circle cx="32" cy="40" r="3.5" fill="url(#spaceshipGreenLightGradient)" />
      <circle cx="32" cy="40" r="5" fill="#00FF00" opacity="0.2" />

      <circle cx="50" cy="36" r="3.5" fill="url(#spaceshipBlueLightGradient)" />
      <circle cx="50" cy="36" r="5" fill="#0000FF" opacity="0.2" />

      {/* Landing legs */}
      <line x1="16" y1="40" x2="6" y2="56" stroke="url(#spaceshipLegGradient)" strokeWidth="4" strokeLinecap="round" />
      <line x1="32" y1="44" x2="32" y2="58" stroke="url(#spaceshipLegGradient)" strokeWidth="4" strokeLinecap="round" />
      <line x1="48" y1="40" x2="58" y2="56" stroke="url(#spaceshipLegGradient)" strokeWidth="4" strokeLinecap="round" />

      {/* Landing feet */}
      <ellipse cx="6" cy="58" rx="5" ry="2.5" fill="#666" />
      <ellipse cx="6" cy="58" rx="3" ry="1.5" fill="#888" opacity="0.5" />

      <ellipse cx="32" cy="60" rx="5" ry="2.5" fill="#666" />
      <ellipse cx="32" cy="60" rx="3" ry="1.5" fill="#888" opacity="0.5" />

      <ellipse cx="58" cy="58" rx="5" ry="2.5" fill="#666" />
      <ellipse cx="58" cy="58" rx="3" ry="1.5" fill="#888" opacity="0.5" />

      {/* Panel details on body */}
      <line x1="20" y1="32" x2="20" y2="38" stroke="#888" strokeWidth="0.5" />
      <line x1="44" y1="32" x2="44" y2="38" stroke="#888" strokeWidth="0.5" />
      <rect x="22" y="34" width="4" height="2" fill="#555" rx="0.5" />
      <rect x="38" y="34" width="4" height="2" fill="#555" rx="0.5" />
    </svg>
  );
}
