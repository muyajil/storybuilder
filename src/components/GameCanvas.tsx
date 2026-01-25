import type { ReactNode, CSSProperties } from 'react';

interface GameCanvasProps {
  /** Breite des Spielfelds / Width of the game canvas */
  width?: number;
  /** Höhe des Spielfelds / Height of the game canvas */
  height?: number;
  /** Hintergrundfarbe / Background color */
  backgroundColor?: string;
  /** Spielinhalt / Game content */
  children: ReactNode;
  /** Zusätzliche Styles / Additional styles */
  style?: CSSProperties;
}

/**
 * SPIELFELD / GAME CANVAS
 * =======================
 * Das Hauptspielfeld wo alles passiert.
 * The main game area where everything happens.
 *
 * Beispiel / Example:
 * ```tsx
 * <GameCanvas width={800} height={600} backgroundColor="#1a1a2e">
 *   <Sprite x={100} y={100} emoji="🚀" />
 *   <Sprite x={200} y={200} emoji="👾" />
 * </GameCanvas>
 * ```
 */
export function GameCanvas({
  width = 800,
  height = 600,
  backgroundColor = '#1a1a2e',
  children,
  style,
}: GameCanvasProps) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
