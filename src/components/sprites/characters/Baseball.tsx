/**
 * Baseball Sprite Component
 * Enhanced with gradients and detailed features
 */


export function Baseball({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Ball gradient */}
        <radialGradient id="baseballBallGradient" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </radialGradient>
        {/* Ball shadow gradient */}
        <radialGradient id="baseballShadowGradient" cx="70%" cy="70%" r="50%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="#CCCCCC" stopOpacity="0.4" />
        </radialGradient>
        {/* Stitch gradient */}
        <linearGradient id="baseballStitchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#CC0000" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
      </defs>

      {/* Main ball */}
      <circle cx="32" cy="32" r="28" fill="url(#baseballBallGradient)" />

      {/* Ball shadow overlay */}
      <circle cx="32" cy="32" r="28" fill="url(#baseballShadowGradient)" />

      {/* Ball outline */}
      <circle cx="32" cy="32" r="28" fill="none" stroke="#BBBBBB" strokeWidth="1.5" />

      {/* Highlight */}
      <ellipse cx="22" cy="20" rx="8" ry="6" fill="white" opacity="0.4" />
      <ellipse cx="20" cy="18" rx="4" ry="3" fill="white" opacity="0.6" />

      {/* Left seam curve */}
      <path d="M14 12 Q6 32 14 52" stroke="url(#baseballStitchGradient)" strokeWidth="2" fill="none" />

      {/* Left stitches */}
      <path d="M12 14 L16 16" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 20 L14 22" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 26 L12 28" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 32 L12 32" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 38 L12 36" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 44 L14 42" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 50 L16 48" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />

      {/* Right seam curve */}
      <path d="M50 12 Q58 32 50 52" stroke="url(#baseballStitchGradient)" strokeWidth="2" fill="none" />

      {/* Right stitches */}
      <path d="M52 14 L48 16" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M54 20 L50 22" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M56 26 L52 28" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M56 32 L52 32" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M56 38 L52 36" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M54 44 L50 42" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M52 50 L48 48" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" />

      {/* Subtle leather texture lines */}
      <path d="M24 16 Q28 20 26 26" stroke="#E8E8E8" strokeWidth="0.5" fill="none" />
      <path d="M40 46 Q36 42 38 38" stroke="#E8E8E8" strokeWidth="0.5" fill="none" />
    </svg>
  );
}
