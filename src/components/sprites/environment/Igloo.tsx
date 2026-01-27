/**
 * Igloo Sprite Component
 * Enhanced with ice/snow textures and depth
 */

import type { ElementProps } from '../types';

export function Igloo({ x = 0, y = 0, size = 70, color = 'white' }: ElementProps) {
  // Create color variations
  const snowWhite = '#FAFAFA';
  const snowLight = '#F0F8FF';
  const snowMid = '#E8E8E8';
  const snowShadow = '#C0C0C0';
  const iceBlueTint = '#E0F0FF';
  const iceBlueDeep = '#B0D0E8';
  const entranceDark = '#2a2a3a';

  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 70 49"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main dome gradient */}
        <radialGradient id="iglooMainGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={snowWhite} />
          <stop offset="30%" stopColor={color} />
          <stop offset="60%" stopColor={snowMid} />
          <stop offset="100%" stopColor={snowShadow} />
        </radialGradient>

        {/* Ice block highlight gradient */}
        <linearGradient id="iglooBlockHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={snowWhite} stopOpacity="0.8" />
          <stop offset="50%" stopColor={iceBlueTint} stopOpacity="0.3" />
          <stop offset="100%" stopColor={snowShadow} stopOpacity="0.2" />
        </linearGradient>

        {/* Entrance tunnel gradient */}
        <radialGradient id="iglooEntranceGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={entranceDark} />
          <stop offset="70%" stopColor="#1a1a2a" />
          <stop offset="100%" stopColor="#0a0a1a" />
        </radialGradient>

        {/* Snow sparkle gradient */}
        <radialGradient id="iglooSparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        {/* Side shadow gradient */}
        <linearGradient id="iglooSideShadow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(100,120,140,0.2)" />
          <stop offset="30%" stopColor="transparent" />
          <stop offset="70%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(100,120,140,0.15)" />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id="iglooShadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#666" floodOpacity="0.2" />
        </filter>

        {/* Snow texture filter */}
        <filter id="iglooSnowTexture" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
          <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="0.5" result="light">
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
          <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="0.8" k2="0.2" k3="0" k4="0" />
        </filter>

        {/* Ice block pattern */}
        <pattern id="iglooIceBlocks" x="0" y="0" width="14" height="8" patternUnits="userSpaceOnUse">
          <rect width="14" height="8" fill="transparent" />
          <rect x="0.5" y="0.5" width="6" height="3.5" fill="none" stroke={snowShadow} strokeWidth="0.5" rx="0.5" opacity="0.4" />
          <rect x="7" y="0.5" width="6" height="3.5" fill="none" stroke={snowShadow} strokeWidth="0.5" rx="0.5" opacity="0.4" />
          <rect x="3.5" y="4.5" width="6" height="3" fill="none" stroke={snowShadow} strokeWidth="0.5" rx="0.5" opacity="0.4" />
        </pattern>
      </defs>

      {/* Ground snow mound */}
      <ellipse cx="35" cy="47" rx="34" ry="4" fill={snowMid} />
      <ellipse cx="35" cy="46" rx="32" ry="3" fill={snowLight} />

      {/* Shadow under dome */}
      <ellipse cx="37" cy="38" rx="30" ry="10" fill="rgba(100,120,140,0.15)" />

      {/* Main dome */}
      <ellipse cx="35" cy="35" rx="32" ry="25" fill="url(#iglooMainGradient)" filter="url(#iglooShadow)" />

      {/* Ice block pattern overlay */}
      <ellipse cx="35" cy="35" rx="32" ry="25" fill="url(#iglooIceBlocks)" />

      {/* Side shadow for 3D effect */}
      <ellipse cx="35" cy="35" rx="32" ry="25" fill="url(#iglooSideShadow)" />

      {/* Ice block lines - horizontal */}
      <g stroke={snowShadow} fill="none" opacity="0.4">
        <path d="M8 25 Q35 22 62 25" strokeWidth="0.8" />
        <path d="M5 32 Q35 28 65 32" strokeWidth="0.8" />
        <path d="M6 40 Q35 36 64 40" strokeWidth="0.8" />
      </g>

      {/* Ice block vertical joints - staggered */}
      <g stroke={snowShadow} strokeWidth="0.5" opacity="0.3">
        <line x1="15" y1="15" x2="13" y2="25" />
        <line x1="28" y1="12" x2="27" y2="22" />
        <line x1="42" y1="12" x2="43" y2="22" />
        <line x1="55" y1="15" x2="57" y2="25" />
        <line x1="20" y1="26" x2="19" y2="35" />
        <line x1="35" y1="23" x2="35" y2="32" />
        <line x1="50" y1="26" x2="51" y2="35" />
        <line x1="12" y1="33" x2="10" y2="42" />
        <line x1="27" y1="30" x2="26" y2="40" />
        <line x1="43" y1="30" x2="44" y2="40" />
        <line x1="58" y1="33" x2="60" y2="42" />
      </g>

      {/* Top highlight */}
      <ellipse cx="30" cy="20" rx="18" ry="12" fill={snowWhite} opacity="0.5" />
      <ellipse cx="25" cy="16" rx="10" ry="7" fill="white" opacity="0.3" />

      {/* Ice blue tint areas */}
      <ellipse cx="50" cy="30" rx="8" ry="12" fill={iceBlueTint} opacity="0.2" />
      <ellipse cx="18" cy="32" rx="6" ry="10" fill={iceBlueDeep} opacity="0.15" />

      {/* Entrance tunnel base */}
      <ellipse cx="25" cy="46" rx="10" ry="5" fill={snowMid} />

      {/* Entrance tunnel */}
      <path d="M15 47 Q15 42 20 40 Q25 38 30 40 Q35 42 35 47" fill="url(#iglooMainGradient)" />
      <path d="M15 47 Q15 42 20 40 Q25 38 30 40 Q35 42 35 47" fill="url(#iglooIceBlocks)" opacity="0.5" />

      {/* Entrance tunnel highlight */}
      <path d="M17 46 Q17 43 21 41 Q25 40 29 41 Q33 43 33 46" fill="none" stroke={snowWhite} strokeWidth="1" opacity="0.5" />

      {/* Main entrance opening */}
      <ellipse cx="35" cy="44" rx="10" ry="8" fill="url(#iglooEntranceGradient)" />

      {/* Entrance depth ring */}
      <ellipse cx="35" cy="44" rx="8" ry="6" fill="none" stroke="#1a1a2a" strokeWidth="1" opacity="0.5" />

      {/* Entrance inner darkness */}
      <ellipse cx="35" cy="44" rx="6" ry="4" fill="#0a0a1a" opacity="0.8" />

      {/* Tunnel opening */}
      <ellipse cx="25" cy="46" rx="8" ry="6" fill="url(#iglooEntranceGradient)" />
      <ellipse cx="25" cy="46" rx="6" ry="4" fill="#0a0a1a" opacity="0.7" />

      {/* Snow sparkles */}
      <g>
        <circle cx="20" cy="18" r="1.5" fill="url(#iglooSparkle)" />
        <circle cx="45" cy="15" r="1" fill="url(#iglooSparkle)" />
        <circle cx="55" cy="25" r="1.2" fill="url(#iglooSparkle)" />
        <circle cx="12" cy="30" r="0.8" fill="url(#iglooSparkle)" />
        <circle cx="38" cy="20" r="1" fill="url(#iglooSparkle)" />
        <circle cx="28" cy="28" r="0.7" fill="url(#iglooSparkle)" />
      </g>

      {/* Icicles hanging from entrance */}
      <g fill={iceBlueTint} opacity="0.6">
        <path d="M18 40 L17 43 L18.5 40" />
        <path d="M22 39 L21 44 L23 39" />
        <path d="M32 40 L31 43 L33 40" />
      </g>

      {/* Snow pile near entrance */}
      <ellipse cx="40" cy="48" rx="5" ry="2" fill={snowLight} />
      <ellipse cx="15" cy="48" rx="4" ry="1.5" fill={snowWhite} />
    </svg>
  );
}
