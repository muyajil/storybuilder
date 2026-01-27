/**
 * Sun Sprite Component
 * High quality with radiant gradients, corona effects, and atmospheric glow
 */

import type { ElementProps } from '../types';

export function Sun({ x = 0, y = 0, size = 60 }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main body gradient */}
        <radialGradient id="sunBodyGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFFEE" />
          <stop offset="30%" stopColor="#FFEE44" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </radialGradient>
        {/* Inner core gradient */}
        <radialGradient id="sunCoreGradient" cx="35%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FFFFCC" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
        {/* Corona outer glow */}
        <radialGradient id="sunCoronaGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FFA500" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF6600" stopOpacity="0" />
        </radialGradient>
        {/* Ray gradient */}
        <linearGradient id="sunRayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFEE44" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0.3" />
        </linearGradient>
        {/* Secondary ray gradient */}
        <linearGradient id="sunRaySecondaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFA500" />
          <stop offset="60%" stopColor="#FFD700" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFEE44" stopOpacity="0" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="sunGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Soft outer glow */}
        <filter id="sunOuterGlowFilter" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
        </filter>
      </defs>

      {/* Outer atmospheric glow */}
      <circle cx="30" cy="30" r="28" fill="url(#sunCoronaGradient)" filter="url(#sunOuterGlowFilter)" />

      {/* Main rays / Hauptstrahlen */}
      {[...Array(8)].map((_, i) => {
        const angle = i * Math.PI / 4;
        const x1 = 30 + Math.cos(angle) * 18;
        const y1 = 30 + Math.sin(angle) * 18;
        const x2 = 30 + Math.cos(angle) * 29;
        const y2 = 30 + Math.sin(angle) * 29;
        return (
          <line
            key={`main-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#sunRayGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#sunGlowFilter)"
          />
        );
      })}

      {/* Secondary rays / Nebenstrahlen */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * Math.PI / 4) + (Math.PI / 8);
        const x1 = 30 + Math.cos(angle) * 18;
        const y1 = 30 + Math.sin(angle) * 18;
        const x2 = 30 + Math.cos(angle) * 25;
        const y2 = 30 + Math.sin(angle) * 25;
        return (
          <line
            key={`secondary-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#sunRaySecondaryGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}

      {/* Corona ring */}
      <circle cx="30" cy="30" r="20" fill="url(#sunCoronaGradient)" />

      {/* Main body / Hauptkörper */}
      <circle cx="30" cy="30" r="18" fill="url(#sunBodyGradient)" filter="url(#sunGlowFilter)" />

      {/* Inner glow layer */}
      <circle cx="30" cy="30" r="15" fill="url(#sunCoreGradient)" />

      {/* Bright core */}
      <circle cx="28" cy="28" r="8" fill="#FFFFFF" opacity="0.5" />
      <circle cx="27" cy="27" r="4" fill="#FFFFFF" opacity="0.7" />

      {/* Surface texture - solar spots */}
      <circle cx="35" cy="32" r="2" fill="#FFA500" opacity="0.3" />
      <circle cx="25" cy="35" r="1.5" fill="#FFA500" opacity="0.25" />
      <circle cx="33" cy="26" r="1" fill="#FFA500" opacity="0.2" />
    </svg>
  );
}
