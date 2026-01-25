interface WaterProps {
  size?: number;
  color?: string;
  animated?: boolean;
}

/**
 * WASSER SPRITE
 */
export function Water({
  size = 32,
  color = '#2196F3',
}: WaterProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect x="0" y="0" width="32" height="32" fill={color} />
      {/* Wellen / Waves */}
      <path d="M0 12 Q8 8 16 12 Q24 16 32 12" stroke="#64B5F6" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M0 20 Q8 16 16 20 Q24 24 32 20" stroke="#64B5F6" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M0 28 Q8 24 16 28 Q24 32 32 28" stroke="#1976D2" strokeWidth="2" fill="none" opacity="0.4" />
    </svg>
  );
}
