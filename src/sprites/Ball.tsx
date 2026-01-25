interface BallProps {
  size?: number;
  type?: 'soccer' | 'basketball' | 'tennis';
}

/**
 * BALL SPRITE
 */
export function Ball({ size = 24, type = 'soccer' }: BallProps) {
  if (type === 'soccer') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="white" stroke="#333" strokeWidth="1" />
        {/* Pentagon patterns */}
        <polygon points="12,4 8,8 9,13 15,13 16,8" fill="#333" />
        <polygon points="4,10 6,15 3,18" fill="#333" opacity="0.8" />
        <polygon points="20,10 18,15 21,18" fill="#333" opacity="0.8" />
        <polygon points="8,18 12,22 16,18 14,15 10,15" fill="#333" opacity="0.8" />
      </svg>
    );
  }

  if (type === 'basketball') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#E65100" stroke="#BF360C" strokeWidth="1" />
        <path d="M12 1 V23" stroke="#333" strokeWidth="1" />
        <path d="M1 12 H23" stroke="#333" strokeWidth="1" />
        <path d="M3 6 Q12 12 3 18" stroke="#333" strokeWidth="1" fill="none" />
        <path d="M21 6 Q12 12 21 18" stroke="#333" strokeWidth="1" fill="none" />
      </svg>
    );
  }

  // Tennis
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" fill="#C0E218" stroke="#9ACD32" strokeWidth="1" />
      <path d="M4 8 Q12 4 20 8" stroke="white" strokeWidth="2" fill="none" />
      <path d="M4 16 Q12 20 20 16" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  );
}
