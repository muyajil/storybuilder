/**
 * Dandelion Sprite Component
 * Enhanced with natural gradients, petal details, and soft textures
 */

import type { ElementProps } from '../types';

export function Dandelion({ x = 0, y = 0, size = 30, color = '#FFD700' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 30 45"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Stem gradient */}
        <linearGradient id="dandelionStemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B8E23" />
          <stop offset="30%" stopColor="#90EE90" />
          <stop offset="70%" stopColor="#7CCD7C" />
          <stop offset="100%" stopColor="#6B8E23" />
        </linearGradient>
        {/* Leaf gradient */}
        <linearGradient id="dandelionLeafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#228B22" />
          <stop offset="50%" stopColor="#32CD32" />
          <stop offset="100%" stopColor="#1a6b1a" />
        </linearGradient>
        {/* Outer petal gradient */}
        <radialGradient id="dandelionOuterGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFA500" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#CC9900" />
        </radialGradient>
        {/* Inner petal gradient (brighter) */}
        <radialGradient id="dandelionInnerGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFF66" />
          <stop offset="50%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
        {/* Center gradient */}
        <radialGradient id="dandelionCenterGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFF99" />
          <stop offset="100%" stopColor="#E6B800" />
        </radialGradient>
        {/* Shadow filter */}
        <filter id="dandelionShadow">
          <feDropShadow dx="0.5" dy="1" stdDeviation="0.5" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="15" cy="44" rx="8" ry="2" fill="#000" opacity="0.15" />

      <g filter="url(#dandelionShadow)">
        {/* Stem */}
        <rect x="13" y="18" width="4" height="27" fill="url(#dandelionStemGradient)" rx="1" />
        {/* Stem highlight */}
        <rect x="14" y="19" width="1.5" height="25" fill="white" opacity="0.2" />

        {/* Left leaf */}
        <path d="M13 30 Q2 26 4 42 Q8 40 10 36 Q12 34 13 32" fill="url(#dandelionLeafGradient)" />
        {/* Left leaf vein */}
        <path d="M13 31 Q6 30 5 40" fill="none" stroke="#1a5a1a" strokeWidth="0.4" opacity="0.5" />
        {/* Left leaf serrations */}
        <path d="M6 32 L4 34 M8 35 L6 37 M10 38 L8 40" fill="none" stroke="#1a6b1a" strokeWidth="0.3" opacity="0.4" />

        {/* Right leaf */}
        <path d="M17 30 Q28 26 26 42 Q22 40 20 36 Q18 34 17 32" fill="url(#dandelionLeafGradient)" />
        {/* Right leaf vein */}
        <path d="M17 31 Q24 30 25 40" fill="none" stroke="#1a5a1a" strokeWidth="0.4" opacity="0.5" />
        {/* Right leaf serrations */}
        <path d="M24 32 L26 34 M22 35 L24 37 M20 38 L22 40" fill="none" stroke="#1a6b1a" strokeWidth="0.3" opacity="0.4" />

        {/* Flower base/sepal */}
        <ellipse cx="15" cy="17" rx="4" ry="2" fill="#6B8E23" />

        {/* Outer petal ring */}
        <circle cx="15" cy="12" r="11" fill="url(#dandelionOuterGradient)" />

        {/* Petal texture - outer rays */}
        {[...Array(16)].map((_, i) => (
          <line
            key={`outer-${i}`}
            x1="15"
            y1="12"
            x2={15 + Math.cos(i * Math.PI / 8) * 10}
            y2={12 + Math.sin(i * Math.PI / 8) * 10}
            stroke="#CC9900"
            strokeWidth="0.4"
            opacity="0.3"
          />
        ))}

        {/* Inner petal ring (brighter yellow) */}
        <circle cx="15" cy="12" r="7" fill="url(#dandelionInnerGradient)" />

        {/* Inner petal texture */}
        {[...Array(12)].map((_, i) => (
          <line
            key={`inner-${i}`}
            x1="15"
            y1="12"
            x2={15 + Math.cos(i * Math.PI / 6) * 6}
            y2={12 + Math.sin(i * Math.PI / 6) * 6}
            stroke="#E6B800"
            strokeWidth="0.3"
            opacity="0.4"
          />
        ))}

        {/* Center disc */}
        <circle cx="15" cy="12" r="4" fill="url(#dandelionCenterGradient)" />

        {/* Center texture dots */}
        <circle cx="13" cy="11" r="0.5" fill="#CC9900" opacity="0.5" />
        <circle cx="16" cy="10" r="0.4" fill="#CC9900" opacity="0.5" />
        <circle cx="15" cy="13" r="0.5" fill="#CC9900" opacity="0.5" />
        <circle cx="17" cy="12" r="0.4" fill="#CC9900" opacity="0.4" />
        <circle cx="14" cy="14" r="0.3" fill="#CC9900" opacity="0.4" />

        {/* Highlight on flower */}
        <ellipse cx="12" cy="9" rx="2" ry="1.5" fill="white" opacity="0.3" />
      </g>
    </svg>
  );
}
