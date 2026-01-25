interface GrassProps {
  size?: number;
  color?: string;
  tall?: boolean;
}

/**
 * GRAS SPRITE
 */
export function Grass({
  size = 32,
  color = '#4CAF50',
  tall = false,
}: GrassProps) {
  if (tall) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32">
        <rect x="0" y="0" width="32" height="32" fill="#81C784" />
        {/* Hohes Gras / Tall grass blades */}
        <path d="M4 32 Q6 16 8 32" stroke={color} strokeWidth="2" fill="none" />
        <path d="M10 32 Q12 12 14 32" stroke={color} strokeWidth="2" fill="none" />
        <path d="M18 32 Q20 14 22 32" stroke={color} strokeWidth="2" fill="none" />
        <path d="M24 32 Q26 18 28 32" stroke={color} strokeWidth="2" fill="none" />
        <path d="M6 32 Q8 20 10 32" stroke="#388E3C" strokeWidth="2" fill="none" />
        <path d="M20 32 Q22 16 24 32" stroke="#388E3C" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect x="0" y="0" width="32" height="32" fill={color} />
      {/* Kleine Grasdetails / Small grass details */}
      <circle cx="8" cy="24" r="2" fill="#388E3C" opacity="0.5" />
      <circle cx="24" cy="12" r="2" fill="#388E3C" opacity="0.5" />
      <circle cx="16" cy="20" r="1.5" fill="#388E3C" opacity="0.3" />
    </svg>
  );
}
