interface TreeProps {
  size?: number;
  leafColor?: string;
  trunkColor?: string;
}

/**
 * BAUM SPRITE
 */
export function Tree({
  size = 32,
  leafColor = '#2E7D32',
  trunkColor = '#5D4037',
}: TreeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      {/* Stamm / Trunk */}
      <rect x="13" y="20" width="6" height="12" fill={trunkColor} />

      {/* Blätter / Leaves */}
      <polygon points="16,2 6,20 26,20" fill={leafColor} />
      <polygon points="16,8 8,22 24,22" fill={leafColor} opacity="0.8" />
    </svg>
  );
}
