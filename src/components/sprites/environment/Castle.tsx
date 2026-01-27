/**
 * Castle Sprite Component
 * Enhanced with stone textures, dramatic lighting, and medieval atmosphere
 */

import type { ElementProps } from '../types';

export function Castle({ x = 0, y = 0, size = 120, color = '#808080' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main stone wall gradient */}
        <linearGradient id="castleWallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#909090" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#606060" />
          <stop offset="100%" stopColor="#505050" />
        </linearGradient>
        {/* Tower gradient for cylindrical look */}
        <linearGradient id="castleTowerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#606060" />
          <stop offset="25%" stopColor={color} />
          <stop offset="75%" stopColor="#707070" />
          <stop offset="100%" stopColor="#505050" />
        </linearGradient>
        {/* Dark inner areas */}
        <linearGradient id="castleDarkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Gate wood gradient */}
        <linearGradient id="castleGateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5a3a20" />
          <stop offset="50%" stopColor="#4a3a2a" />
          <stop offset="100%" stopColor="#3a2a1a" />
        </linearGradient>
        {/* Flag gradient */}
        <linearGradient id="castleFlagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#cc0000" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#aa0000" />
        </linearGradient>
        {/* Stone texture pattern */}
        <pattern id="castleStonePattern" patternUnits="userSpaceOnUse" width="15" height="10">
          <rect width="15" height="10" fill="transparent" />
          <rect x="0" y="0" width="14" height="9" fill="none" stroke="#555" strokeWidth="0.5" opacity="0.3" />
          <rect x="7" y="5" width="8" height="5" fill="none" stroke="#555" strokeWidth="0.5" opacity="0.3" />
        </pattern>
        {/* Shadow filter */}
        <filter id="castleShadow">
          <feDropShadow dx="3" dy="4" stdDeviation="3" floodOpacity="0.35" />
        </filter>
        {/* Window glow */}
        <radialGradient id="castleWindowGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="60" cy="118" rx="55" ry="5" fill="#000" opacity="0.25" />

      <g filter="url(#castleShadow)">
        {/* Main building */}
        <rect x="20" y="50" width="80" height="70" fill="url(#castleWallGradient)" />
        <rect x="20" y="50" width="80" height="70" fill="url(#castleStonePattern)" />
        {/* Main building vertical shadow */}
        <rect x="90" y="50" width="10" height="70" fill="#000" opacity="0.15" />

        {/* Left tower */}
        <rect x="5" y="30" width="25" height="90" fill="url(#castleTowerGradient)" />
        <rect x="5" y="30" width="25" height="90" fill="url(#castleStonePattern)" />
        {/* Left tower highlight */}
        <rect x="8" y="32" width="4" height="86" fill="white" opacity="0.1" />

        {/* Right tower */}
        <rect x="90" y="30" width="25" height="90" fill="url(#castleTowerGradient)" />
        <rect x="90" y="30" width="25" height="90" fill="url(#castleStonePattern)" />
        {/* Right tower highlight */}
        <rect x="93" y="32" width="4" height="86" fill="white" opacity="0.1" />

        {/* Left tower battlements */}
        <rect x="3" y="22" width="9" height="12" fill={color} />
        <rect x="3" y="22" width="9" height="12" fill="url(#castleStonePattern)" />
        <rect x="18" y="22" width="9" height="12" fill={color} />
        <rect x="18" y="22" width="9" height="12" fill="url(#castleStonePattern)" />

        {/* Right tower battlements */}
        <rect x="88" y="22" width="9" height="12" fill={color} />
        <rect x="88" y="22" width="9" height="12" fill="url(#castleStonePattern)" />
        <rect x="103" y="22" width="9" height="12" fill={color} />
        <rect x="103" y="22" width="9" height="12" fill="url(#castleStonePattern)" />

        {/* Main building battlements */}
        <rect x="28" y="42" width="10" height="12" fill={color} />
        <rect x="28" y="42" width="10" height="12" fill="url(#castleStonePattern)" />
        <rect x="44" y="42" width="10" height="12" fill={color} />
        <rect x="44" y="42" width="10" height="12" fill="url(#castleStonePattern)" />
        <rect x="60" y="42" width="10" height="12" fill={color} />
        <rect x="60" y="42" width="10" height="12" fill="url(#castleStonePattern)" />
        <rect x="76" y="42" width="10" height="12" fill={color} />
        <rect x="76" y="42" width="10" height="12" fill="url(#castleStonePattern)" />

        {/* Gate with arch */}
        <path d="M45 120 L45 82 Q60 70 75 82 L75 120" fill="url(#castleGateGradient)" />
        {/* Gate arch shadow */}
        <path d="M47 118 L47 84 Q60 74 73 84 L73 118" fill="url(#castleDarkGradient)" />
        {/* Gate wood planks */}
        <line x1="52" y1="85" x2="52" y2="120" stroke="#2a1a10" strokeWidth="1" />
        <line x1="60" y1="82" x2="60" y2="120" stroke="#2a1a10" strokeWidth="1" />
        <line x1="68" y1="85" x2="68" y2="120" stroke="#2a1a10" strokeWidth="1" />
        {/* Gate metal bands */}
        <rect x="45" y="90" width="30" height="3" fill="#4a4a4a" rx="0.5" />
        <rect x="45" y="105" width="30" height="3" fill="#4a4a4a" rx="0.5" />
        {/* Portcullis hints */}
        <line x1="48" y1="72" x2="48" y2="82" stroke="#333" strokeWidth="1" />
        <line x1="56" y1="72" x2="56" y2="78" stroke="#333" strokeWidth="1" />
        <line x1="64" y1="72" x2="64" y2="78" stroke="#333" strokeWidth="1" />
        <line x1="72" y1="72" x2="72" y2="82" stroke="#333" strokeWidth="1" />

        {/* Left tower window */}
        <rect x="11" y="48" width="12" height="18" fill="url(#castleDarkGradient)" rx="1" />
        <rect x="11" y="48" width="12" height="18" fill="url(#castleWindowGlow)" rx="1" />
        {/* Window frame */}
        <rect x="11" y="48" width="12" height="18" fill="none" stroke="#505050" strokeWidth="1" rx="1" />
        <line x1="17" y1="48" x2="17" y2="66" stroke="#505050" strokeWidth="1" />

        {/* Right tower window */}
        <rect x="97" y="48" width="12" height="18" fill="url(#castleDarkGradient)" rx="1" />
        <rect x="97" y="48" width="12" height="18" fill="url(#castleWindowGlow)" rx="1" />
        {/* Window frame */}
        <rect x="97" y="48" width="12" height="18" fill="none" stroke="#505050" strokeWidth="1" rx="1" />
        <line x1="103" y1="48" x2="103" y2="66" stroke="#505050" strokeWidth="1" />

        {/* Flag pole */}
        <rect x="58" y="5" width="4" height="40" fill="#5a3a20" rx="1" />
        <rect x="59" y="6" width="1" height="38" fill="#7a5a40" opacity="0.5" />

        {/* Flag */}
        <polygon points="62,8 88,17 62,28" fill="url(#castleFlagGradient)" />
        {/* Flag wave effect */}
        <path d="M62 8 Q75 12 88 17 Q75 22 62 28" fill="none" stroke="#880000" strokeWidth="0.5" opacity="0.5" />
        {/* Flag emblem (simple lion shape) */}
        <ellipse cx="74" cy="18" rx="4" ry="3" fill="#FFD700" opacity="0.8" />

        {/* Arrow slits on towers */}
        <rect x="15" y="75" width="3" height="12" fill="#1a1a1a" rx="0.5" />
        <rect x="101" y="75" width="3" height="12" fill="#1a1a1a" rx="0.5" />

        {/* Wall torch sconces */}
        <ellipse cx="38" cy="80" rx="3" ry="2" fill="#FFD700" opacity="0.6" />
        <ellipse cx="82" cy="80" rx="3" ry="2" fill="#FFD700" opacity="0.6" />
      </g>
    </svg>
  );
}
