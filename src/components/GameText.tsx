import type { CSSProperties, ReactNode } from 'react';

interface GameTextProps {
  /** Der Text / The text */
  children: ReactNode;
  /** X-Position (optional, für absolute Positionierung) */
  x?: number;
  /** Y-Position (optional, für absolute Positionierung) */
  y?: number;
  /** Schriftgröße / Font size */
  size?: 'small' | 'medium' | 'large' | 'huge' | number;
  /** Farbe / Color */
  color?: string;
  /** Zentriert / Centered */
  centered?: boolean;
  /** Zusätzliche Styles / Additional styles */
  style?: CSSProperties;
}

const fontSizes = {
  small: 14,
  medium: 18,
  large: 24,
  huge: 48,
};

/**
 * SPIEL-TEXT / GAME TEXT
 * ======================
 * Text für Punkte, Nachrichten, etc.
 * Text for scores, messages, etc.
 *
 * Beispiel / Example:
 * ```tsx
 * // Punkte anzeigen / Show score
 * <GameText x={10} y={10} size="large" color="white">
 *   Punkte: {score}
 * </GameText>
 *
 * // Große zentrierte Nachricht / Large centered message
 * <GameText size="huge" centered color="gold">
 *   GEWONNEN!
 * </GameText>
 * ```
 */
export function GameText({
  children,
  x,
  y,
  size = 'medium',
  color = 'white',
  centered = false,
  style,
}: GameTextProps) {
  const fontSize = typeof size === 'number' ? size : fontSizes[size];
  const isPositioned = x !== undefined && y !== undefined;

  return (
    <div
      style={{
        position: isPositioned ? 'absolute' : 'relative',
        left: isPositioned ? x : undefined,
        top: isPositioned ? y : undefined,
        fontSize,
        color,
        fontFamily: 'system-ui, sans-serif',
        fontWeight: 'bold',
        textAlign: centered ? 'center' : 'left',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        userSelect: 'none',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
