interface PlayerProps {
  size?: number;
  hairColor?: string;
  skinColor?: string;
  shirtColor?: string;
}

/**
 * SPIELER SPRITE
 * ==============
 * Ein anpassbarer Spieler-Charakter.
 */
export function Player({
  size = 32,
  hairColor = '#5D4037',
  skinColor = '#D7A574',
  shirtColor = '#2196F3',
}: PlayerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      {/* Körper / Body */}
      <rect x="10" y="18" width="12" height="12" rx="2" fill={shirtColor} />

      {/* Kopf / Head */}
      <circle cx="16" cy="12" r="8" fill={skinColor} />

      {/* Haare / Hair */}
      <ellipse cx="16" cy="7" rx="7" ry="4" fill={hairColor} />

      {/* Augen / Eyes */}
      <circle cx="13" cy="11" r="1.5" fill="#333" />
      <circle cx="19" cy="11" r="1.5" fill="#333" />

      {/* Mund / Mouth */}
      <path d="M14 15 Q16 17 18 15" stroke="#333" strokeWidth="1" fill="none" />
    </svg>
  );
}
