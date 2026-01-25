interface PixelPlayerProps {
  size?: number;
  direction?: 'down' | 'up' | 'left' | 'right';
}

/**
 * PIXEL SPIELER - Gameboy Style
 */
export function PixelPlayer({ size = 32, direction = 'down' }: PixelPlayerProps) {
  // Gameboy-ish colors
  const dark = '#1a3320';
  const mid = '#3b6b4b';
  const light = '#8bac7f';

  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      {/* Background */}
      <rect width="16" height="16" fill="transparent" />

      {direction === 'down' && (
        <>
          {/* Hair */}
          <rect x="5" y="1" width="6" height="3" fill={dark} />
          <rect x="4" y="2" width="1" height="2" fill={dark} />
          <rect x="11" y="2" width="1" height="2" fill={dark} />

          {/* Face */}
          <rect x="5" y="4" width="6" height="5" fill={light} />

          {/* Eyes */}
          <rect x="6" y="5" width="1" height="2" fill={dark} />
          <rect x="9" y="5" width="1" height="2" fill={dark} />

          {/* Body */}
          <rect x="4" y="9" width="8" height="5" fill={mid} />

          {/* Arms */}
          <rect x="3" y="9" width="1" height="4" fill={light} />
          <rect x="12" y="9" width="1" height="4" fill={light} />

          {/* Legs */}
          <rect x="5" y="14" width="2" height="2" fill={dark} />
          <rect x="9" y="14" width="2" height="2" fill={dark} />
        </>
      )}

      {direction === 'up' && (
        <>
          {/* Hair (back) */}
          <rect x="5" y="1" width="6" height="4" fill={dark} />
          <rect x="4" y="2" width="1" height="3" fill={dark} />
          <rect x="11" y="2" width="1" height="3" fill={dark} />

          {/* Head back */}
          <rect x="5" y="5" width="6" height="4" fill={dark} />

          {/* Body */}
          <rect x="4" y="9" width="8" height="5" fill={mid} />

          {/* Arms */}
          <rect x="3" y="9" width="1" height="4" fill={light} />
          <rect x="12" y="9" width="1" height="4" fill={light} />

          {/* Legs */}
          <rect x="5" y="14" width="2" height="2" fill={dark} />
          <rect x="9" y="14" width="2" height="2" fill={dark} />
        </>
      )}

      {direction === 'left' && (
        <>
          {/* Hair */}
          <rect x="6" y="1" width="5" height="3" fill={dark} />
          <rect x="5" y="2" width="1" height="3" fill={dark} />

          {/* Face */}
          <rect x="6" y="4" width="5" height="5" fill={light} />

          {/* Eye */}
          <rect x="7" y="5" width="1" height="2" fill={dark} />

          {/* Body */}
          <rect x="5" y="9" width="7" height="5" fill={mid} />

          {/* Arm */}
          <rect x="4" y="10" width="1" height="3" fill={light} />

          {/* Legs */}
          <rect x="6" y="14" width="2" height="2" fill={dark} />
          <rect x="9" y="14" width="2" height="2" fill={dark} />
        </>
      )}

      {direction === 'right' && (
        <>
          {/* Hair */}
          <rect x="5" y="1" width="5" height="3" fill={dark} />
          <rect x="10" y="2" width="1" height="3" fill={dark} />

          {/* Face */}
          <rect x="5" y="4" width="5" height="5" fill={light} />

          {/* Eye */}
          <rect x="8" y="5" width="1" height="2" fill={dark} />

          {/* Body */}
          <rect x="4" y="9" width="7" height="5" fill={mid} />

          {/* Arm */}
          <rect x="11" y="10" width="1" height="3" fill={light} />

          {/* Legs */}
          <rect x="5" y="14" width="2" height="2" fill={dark} />
          <rect x="8" y="14" width="2" height="2" fill={dark} />
        </>
      )}
    </svg>
  );
}
