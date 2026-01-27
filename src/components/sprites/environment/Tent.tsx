/**
 * Tent Sprite Component
 * High quality with canvas texture, realistic fabric folds, and detailed ropes
 */

import type { ElementProps } from '../types';

export function Tent({ x = 0, y = 0, size = 70, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 70 56"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main tent fabric gradient */}
        <linearGradient id="tentFabricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a9a2a" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#1a7a1a" />
          <stop offset="100%" stopColor="#156015" />
        </linearGradient>
        {/* Tent shadow side */}
        <linearGradient id="tentShadowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a6a1a" />
          <stop offset="50%" stopColor="#156515" />
          <stop offset="100%" stopColor="#104a10" />
        </linearGradient>
        {/* Entrance shadow */}
        <linearGradient id="tentEntranceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#333333" />
        </linearGradient>
        {/* Canvas texture pattern */}
        <pattern id="tentCanvasPattern" width="4" height="4" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="4" stroke="#1a6a1a" strokeWidth="0.3" opacity="0.2" />
          <line x1="2" y1="0" x2="2" y2="4" stroke="#2a8a2a" strokeWidth="0.2" opacity="0.15" />
          <line x1="0" y1="2" x2="4" y2="2" stroke="#1a6a1a" strokeWidth="0.2" opacity="0.1" />
        </pattern>
        {/* Pole wood gradient */}
        <linearGradient id="tentPoleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#6B4423" />
        </linearGradient>
        {/* Rope gradient */}
        <linearGradient id="tentRopeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A08060" />
          <stop offset="50%" stopColor="#C0A080" />
          <stop offset="100%" stopColor="#8B7355" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="35" cy="55" rx="30" ry="4" fill="#000000" opacity="0.2" />

      {/* Back tent panel (darker) */}
      <polygon points="35,5 5,55 35,55" fill="url(#tentShadowGradient)" />
      <polygon points="35,5 5,55 35,55" fill="url(#tentCanvasPattern)" />

      {/* Main tent body / Zelt */}
      <polygon points="35,5 35,55 65,55" fill="url(#tentFabricGradient)" />
      <polygon points="35,5 35,55 65,55" fill="url(#tentCanvasPattern)" />

      {/* Fabric fold lines */}
      <line x1="35" y1="8" x2="15" y2="50" stroke="#156015" strokeWidth="0.5" opacity="0.4" />
      <line x1="35" y1="8" x2="25" y2="50" stroke="#2a8a2a" strokeWidth="0.3" opacity="0.3" />
      <line x1="35" y1="8" x2="45" y2="50" stroke="#3aaa3a" strokeWidth="0.3" opacity="0.2" />
      <line x1="35" y1="8" x2="55" y2="50" stroke="#156015" strokeWidth="0.4" opacity="0.3" />

      {/* Ridge seam */}
      <line x1="35" y1="5" x2="35" y2="30" stroke="#1a5a1a" strokeWidth="1" opacity="0.5" />

      {/* Entrance / Eingang */}
      <polygon points="35,55 28,55 35,28 42,55" fill="url(#tentEntranceGradient)" />
      {/* Entrance opening effect */}
      <polygon points="35,52 30,55 35,32 40,55" fill="#1a1a1a" opacity="0.8" />
      {/* Rolled back flap - left */}
      <path d="M28 55 Q26 45 30 35" stroke={color} strokeWidth="2" fill="none" />
      <path d="M28 55 Q25 48 29 38" fill="#1a6a1a" opacity="0.5" />
      {/* Rolled back flap - right */}
      <path d="M42 55 Q44 45 40 35" stroke={color} strokeWidth="2" fill="none" />
      <path d="M42 55 Q45 48 41 38" fill="#1a6a1a" opacity="0.5" />

      {/* Top pole / Stange */}
      <rect x="33" y="0" width="4" height="8" fill="url(#tentPoleGradient)" rx="1" />
      <rect x="34" y="1" width="1" height="6" fill="#A0522D" opacity="0.4" />
      {/* Pole finial */}
      <circle cx="35" cy="1" r="2" fill="#6B4423" />

      {/* Guy ropes / Seile */}
      <line x1="5" y1="55" x2="0" y2="56" stroke="url(#tentRopeGradient)" strokeWidth="1.5" />
      <line x1="65" y1="55" x2="70" y2="56" stroke="url(#tentRopeGradient)" strokeWidth="1.5" />
      {/* Front guy ropes */}
      <line x1="20" y1="45" x2="10" y2="56" stroke="url(#tentRopeGradient)" strokeWidth="1" opacity="0.7" />
      <line x1="50" y1="45" x2="60" y2="56" stroke="url(#tentRopeGradient)" strokeWidth="1" opacity="0.7" />

      {/* Tent stakes / Heringe */}
      <rect x="-1" y="54" width="3" height="4" fill="#8B7355" transform="rotate(-15 0 56)" />
      <rect x="68" y="54" width="3" height="4" fill="#8B7355" transform="rotate(15 70 56)" />
      <rect x="8" y="54" width="2" height="3" fill="#8B7355" transform="rotate(-10 9 56)" />
      <rect x="59" y="54" width="2" height="3" fill="#8B7355" transform="rotate(10 60 56)" />

      {/* Highlights on fabric */}
      <path d="M40 15 Q50 25 55 45" stroke="#3aaa3a" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M38 20 Q32 30 20 48" stroke="#2a9a2a" strokeWidth="0.3" fill="none" opacity="0.2" />
    </svg>
  );
}
