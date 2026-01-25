import type { ReactNode, CSSProperties } from 'react';

interface GameButtonProps {
  /** Button-Text / Button text */
  children: ReactNode;
  /** Wird aufgerufen wenn geklickt / Called when clicked */
  onClick: () => void;
  /** Farbe des Buttons / Button color */
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  /** Größe / Size */
  size?: 'small' | 'medium' | 'large';
  /** Deaktiviert / Disabled */
  disabled?: boolean;
  /** Zusätzliche Styles / Additional styles */
  style?: CSSProperties;
}

const colors = {
  primary: { bg: '#4f46e5', hover: '#4338ca' },
  secondary: { bg: '#6b7280', hover: '#4b5563' },
  danger: { bg: '#dc2626', hover: '#b91c1c' },
  success: { bg: '#16a34a', hover: '#15803d' },
};

const sizes = {
  small: { padding: '8px 16px', fontSize: '14px' },
  medium: { padding: '12px 24px', fontSize: '16px' },
  large: { padding: '16px 32px', fontSize: '20px' },
};

/**
 * SPIEL-BUTTON / GAME BUTTON
 * ==========================
 * Ein schöner Button für Spielmenüs.
 * A nice button for game menus.
 *
 * Beispiel / Example:
 * ```tsx
 * <GameButton onClick={() => startGame()} color="primary" size="large">
 *   Spiel Starten
 * </GameButton>
 * ```
 */
export function GameButton({
  children,
  onClick,
  color = 'primary',
  size = 'medium',
  disabled = false,
  style,
}: GameButtonProps) {
  const colorStyle = colors[color];
  const sizeStyle = sizes[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: colorStyle.bg,
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: sizeStyle.padding,
        fontSize: sizeStyle.fontSize,
        fontWeight: 'bold',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background-color 0.2s',
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = colorStyle.hover;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = colorStyle.bg;
      }}
    >
      {children}
    </button>
  );
}
