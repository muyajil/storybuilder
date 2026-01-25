import type { CSSProperties, ReactNode } from 'react';

interface SpriteProps {
  /** X-Position (von links) / X position (from left) */
  x: number;
  /** Y-Position (von oben) / Y position (from top) */
  y: number;
  /** Emoji oder Text zum Anzeigen / Emoji or text to display */
  emoji?: string;
  /** Größe des Sprites / Size of the sprite */
  size?: number;
  /** Rotation in Grad / Rotation in degrees */
  rotation?: number;
  /** Transparenz (0-1) / Opacity (0-1) */
  opacity?: number;
  /** Kinder-Elemente / Children elements */
  children?: ReactNode;
  /** Wird aufgerufen wenn geklickt / Called when clicked */
  onClick?: () => void;
  /** Zusätzliche Styles / Additional styles */
  style?: CSSProperties;
}

/**
 * SPRITE-KOMPONENTE / SPRITE COMPONENT
 * ====================================
 * Ein bewegliches Objekt im Spiel (Spieler, Feinde, Items, etc.)
 * A movable object in the game (player, enemies, items, etc.)
 *
 * Beispiel / Example:
 * ```tsx
 * // Einfacher Emoji-Sprite / Simple emoji sprite
 * <Sprite x={100} y={200} emoji="🚀" size={48} />
 *
 * // Mit Rotation / With rotation
 * <Sprite x={100} y={200} emoji="🚀" rotation={45} />
 *
 * // Mit Click-Handler / With click handler
 * <Sprite x={100} y={200} emoji="👾" onClick={() => console.log('Getroffen!')} />
 * ```
 */
export function Sprite({
  x,
  y,
  emoji,
  size = 32,
  rotation = 0,
  opacity = 1,
  children,
  onClick,
  style,
}: SpriteProps) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        fontSize: size,
        lineHeight: 1,
        transform: `rotate(${rotation}deg)`,
        opacity,
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        transition: 'none',
        ...style,
      }}
    >
      {emoji || children}
    </div>
  );
}
