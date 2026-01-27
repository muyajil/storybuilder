/**
 * SoccerBall Sprite Component
 * Enhanced with gradients and detailed shading
 */

export function SoccerBall({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Ball base gradient */}
        <radialGradient id="soccerBallGradient" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </radialGradient>
        {/* Pentagon gradient */}
        <linearGradient id="soccerPentagonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="50%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Shadow gradient */}
        <radialGradient id="soccerShadowGradient" cx="50%" cy="100%" r="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        {/* Highlight gradient */}
        <radialGradient id="soccerHighlightGradient" cx="30%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadow under ball */}
      <ellipse cx="32" cy="60" rx="20" ry="4" fill="url(#soccerShadowGradient)" />

      {/* Main ball */}
      <circle cx="32" cy="32" r="28" fill="url(#soccerBallGradient)" />

      {/* Ball outline */}
      <circle cx="32" cy="32" r="27" fill="none" stroke="#888" strokeWidth="1" />

      {/* Pentagons (black patches) */}
      {/* Top pentagon */}
      <polygon points="32,8 24,18 28,28 36,28 40,18" fill="url(#soccerPentagonGradient)" />
      <polygon points="32,10 26,18 29,26 35,26 38,18" fill="#444" opacity="0.3" />

      {/* Left pentagon */}
      <polygon points="10,26 8,38 18,44 26,38 22,26" fill="url(#soccerPentagonGradient)" />
      <polygon points="12,28 10,37 18,42 24,37 21,28" fill="#444" opacity="0.3" />

      {/* Right pentagon */}
      <polygon points="54,26 56,38 46,44 38,38 42,26" fill="url(#soccerPentagonGradient)" />
      <polygon points="52,28 54,37 46,42 40,37 43,28" fill="#444" opacity="0.3" />

      {/* Bottom left pentagon */}
      <polygon points="18,50 28,48 32,56 24,60 14,54" fill="url(#soccerPentagonGradient)" />
      <polygon points="19,51 27,49 30,55 24,58 16,53" fill="#444" opacity="0.3" />

      {/* Bottom right pentagon */}
      <polygon points="46,50 36,48 32,56 40,60 50,54" fill="url(#soccerPentagonGradient)" />
      <polygon points="45,51 37,49 34,55 40,58 48,53" fill="#444" opacity="0.3" />

      {/* White hexagon seams */}
      <line x1="32" y1="8" x2="24" y2="18" stroke="#DDD" strokeWidth="1.5" />
      <line x1="32" y1="8" x2="40" y2="18" stroke="#DDD" strokeWidth="1.5" />
      <line x1="24" y1="18" x2="10" y2="26" stroke="#DDD" strokeWidth="1.5" />
      <line x1="40" y1="18" x2="54" y2="26" stroke="#DDD" strokeWidth="1.5" />
      <line x1="28" y1="28" x2="26" y2="38" stroke="#DDD" strokeWidth="1.5" />
      <line x1="36" y1="28" x2="38" y2="38" stroke="#DDD" strokeWidth="1.5" />
      <line x1="18" y1="44" x2="18" y2="50" stroke="#DDD" strokeWidth="1.5" />
      <line x1="46" y1="44" x2="46" y2="50" stroke="#DDD" strokeWidth="1.5" />
      <line x1="28" y1="48" x2="36" y2="48" stroke="#DDD" strokeWidth="1.5" />

      {/* Highlight/shine */}
      <ellipse cx="24" cy="20" rx="8" ry="6" fill="url(#soccerHighlightGradient)" />

      {/* Additional subtle texture lines */}
      <circle cx="32" cy="32" r="28" fill="none" stroke="#CCC" strokeWidth="0.3" strokeDasharray="2,4" />
    </svg>
  );
}
