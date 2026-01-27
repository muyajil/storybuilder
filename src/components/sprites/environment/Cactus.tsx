/**
 * Cactus Sprite Component
 * Enhanced with natural gradients, textures, and desert atmosphere
 */

import type { ElementProps } from '../types';

export function Cactus({ x = 0, y = 0, size = 60, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 60 90"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main stem gradient for cylindrical effect */}
        <linearGradient id="cactusMainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a6b1a" />
          <stop offset="25%" stopColor={color} />
          <stop offset="50%" stopColor="#2ebd2e" />
          <stop offset="75%" stopColor={color} />
          <stop offset="100%" stopColor="#1a6b1a" />
        </linearGradient>
        {/* Left arm gradient */}
        <linearGradient id="cactusLeftArmGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a5a1a" />
          <stop offset="40%" stopColor="#1f7f1f" />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Right arm gradient */}
        <linearGradient id="cactusRightArmGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="60%" stopColor="#1f7f1f" />
          <stop offset="100%" stopColor="#1a5a1a" />
        </linearGradient>
        {/* Flower gradient */}
        <radialGradient id="cactusFlowerGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="50%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#DB7093" />
        </radialGradient>
        {/* Flower center gradient */}
        <radialGradient id="cactusFlowerCenterGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
        {/* Shadow filter */}
        <filter id="cactusShadow">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodOpacity="0.25" />
        </filter>
        {/* Rib pattern for texture */}
        <pattern id="cactusRibPattern" patternUnits="userSpaceOnUse" width="4" height="90">
          <line x1="2" y1="0" x2="2" y2="90" stroke="#1a5a1a" strokeWidth="1" opacity="0.3" />
        </pattern>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="30" cy="88" rx="18" ry="3" fill="#000" opacity="0.2" />

      <g filter="url(#cactusShadow)">
        {/* Main stem */}
        <rect x="20" y="20" width="20" height="70" fill="url(#cactusMainGradient)" rx="10" />
        {/* Main stem rib texture */}
        <rect x="22" y="22" width="16" height="66" fill="url(#cactusRibPattern)" rx="8" />
        {/* Main stem highlight */}
        <rect x="26" y="22" width="4" height="66" fill="white" opacity="0.15" rx="2" />

        {/* Left arm */}
        <path d="M20 52 L8 52 Q4 52 4 48 L4 32 Q4 28 8 28 L12 28 Q16 28 16 32 L16 46 Q16 48 20 48" fill="url(#cactusLeftArmGradient)" />
        {/* Left arm highlight */}
        <path d="M18 50 L10 50 Q7 50 7 47 L7 34 Q7 31 10 31 L11 31" fill="white" opacity="0.1" />
        {/* Left arm vertical rib */}
        <line x1="10" y1="30" x2="10" y2="50" stroke="#1a5a1a" strokeWidth="0.5" opacity="0.4" />

        {/* Right arm */}
        <path d="M40 42 L52 42 Q56 42 56 38 L56 22 Q56 18 52 18 L48 18 Q44 18 44 22 L44 36 Q44 38 40 38" fill="url(#cactusRightArmGradient)" />
        {/* Right arm highlight */}
        <path d="M42 40 L50 40 Q53 40 53 37 L53 24 Q53 21 50 21 L49 21" fill="white" opacity="0.1" />
        {/* Right arm vertical rib */}
        <line x1="50" y1="20" x2="50" y2="40" stroke="#1a5a1a" strokeWidth="0.5" opacity="0.4" />

        {/* Spines on main stem */}
        <g stroke="#2a2a2a" strokeWidth="0.8" strokeLinecap="round">
          <line x1="30" y1="25" x2="30" y2="20" />
          <line x1="24" y1="35" x2="20" y2="33" />
          <line x1="36" y1="35" x2="40" y2="33" />
          <line x1="30" y1="45" x2="30" y2="40" />
          <line x1="24" y1="55" x2="20" y2="53" />
          <line x1="36" y1="55" x2="40" y2="53" />
          <line x1="30" y1="65" x2="30" y2="60" />
          <line x1="24" y1="75" x2="20" y2="73" />
          <line x1="36" y1="75" x2="40" y2="73" />
        </g>

        {/* Spines on left arm */}
        <g stroke="#2a2a2a" strokeWidth="0.6" strokeLinecap="round">
          <line x1="10" y1="32" x2="10" y2="28" />
          <line x1="6" y1="40" x2="2" y2="40" />
          <line x1="10" y1="48" x2="10" y2="52" />
        </g>

        {/* Spines on right arm */}
        <g stroke="#2a2a2a" strokeWidth="0.6" strokeLinecap="round">
          <line x1="50" y1="22" x2="50" y2="18" />
          <line x1="54" y1="30" x2="58" y2="30" />
          <line x1="50" y1="38" x2="50" y2="42" />
        </g>

        {/* Flower on top */}
        <g transform="translate(30, 18)">
          {/* Flower petals */}
          <ellipse cx="0" cy="-3" rx="4" ry="6" fill="url(#cactusFlowerGradient)" transform="rotate(-30)" />
          <ellipse cx="0" cy="-3" rx="4" ry="6" fill="url(#cactusFlowerGradient)" transform="rotate(30)" />
          <ellipse cx="0" cy="-3" rx="4" ry="6" fill="url(#cactusFlowerGradient)" transform="rotate(90)" />
          <ellipse cx="0" cy="-3" rx="4" ry="6" fill="url(#cactusFlowerGradient)" transform="rotate(-90)" />
          <ellipse cx="0" cy="-3" rx="4" ry="5" fill="url(#cactusFlowerGradient)" />
          {/* Flower center */}
          <circle cx="0" cy="-2" r="3" fill="url(#cactusFlowerCenterGradient)" />
          {/* Center highlight */}
          <circle cx="-1" cy="-3" r="1" fill="white" opacity="0.5" />
        </g>

        {/* Small buds */}
        <circle cx="8" cy="28" r="2" fill="#FF69B4" opacity="0.7" />
        <circle cx="52" cy="18" r="1.5" fill="#FF69B4" opacity="0.6" />
      </g>
    </svg>
  );
}
