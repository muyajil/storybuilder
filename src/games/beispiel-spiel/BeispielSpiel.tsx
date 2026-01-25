import { useState, useCallback } from 'react';
import { GameCanvas, Sprite, GameButton, GameText } from '../../components';
import { useKeyboard, useGameLoop, clamp, checkCollision, randomBetween } from '../../hooks';

/**
 * BEISPIEL-SPIEL / EXAMPLE GAME
 * =============================
 * Ein einfaches Fangspiel zum Lernen.
 * A simple catching game for learning.
 *
 * Steuerung / Controls:
 * - Pfeiltasten oder WASD zum Bewegen / Arrow keys or WASD to move
 * - Fange die Sterne! / Catch the stars!
 */

// Spielfeld-Größe / Game canvas size
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

// Spieler-Einstellungen / Player settings
const PLAYER_SIZE = 40;
const PLAYER_SPEED = 300; // Pixel pro Sekunde / Pixels per second

// Stern-Einstellungen / Star settings
const STAR_SIZE = 30;

export function BeispielSpiel() {
  // Spieler-Position / Player position
  const [playerX, setPlayerX] = useState(CANVAS_WIDTH / 2);
  const [playerY, setPlayerY] = useState(CANVAS_HEIGHT / 2);

  // Stern-Position / Star position
  const [starX, setStarX] = useState(100);
  const [starY, setStarY] = useState(100);

  // Punkte / Score
  const [score, setScore] = useState(0);

  // Tastatureingaben / Keyboard input
  const keys = useKeyboard();

  // Neuen Stern an zufälliger Position erstellen / Create new star at random position
  const spawnNewStar = useCallback(() => {
    setStarX(randomBetween(50, CANVAS_WIDTH - 50));
    setStarY(randomBetween(50, CANVAS_HEIGHT - 50));
  }, []);

  // Spiel-Schleife / Game loop
  useGameLoop((deltaTime) => {
    // Spieler bewegen / Move player
    let newX = playerX;
    let newY = playerY;

    if (keys.ArrowLeft || keys.a || keys.A) {
      newX -= PLAYER_SPEED * deltaTime;
    }
    if (keys.ArrowRight || keys.d || keys.D) {
      newX += PLAYER_SPEED * deltaTime;
    }
    if (keys.ArrowUp || keys.w || keys.W) {
      newY -= PLAYER_SPEED * deltaTime;
    }
    if (keys.ArrowDown || keys.s || keys.S) {
      newY += PLAYER_SPEED * deltaTime;
    }

    // Spieler im Spielfeld halten / Keep player in bounds
    newX = clamp(newX, 0, CANVAS_WIDTH - PLAYER_SIZE);
    newY = clamp(newY, 0, CANVAS_HEIGHT - PLAYER_SIZE);

    setPlayerX(newX);
    setPlayerY(newY);

    // Kollision mit Stern prüfen / Check collision with star
    const playerRect = { x: newX, y: newY, width: PLAYER_SIZE, height: PLAYER_SIZE };
    const starRect = { x: starX, y: starY, width: STAR_SIZE, height: STAR_SIZE };

    if (checkCollision(playerRect, starRect)) {
      setScore(prev => prev + 1);
      spawnNewStar();
    }
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <h2 style={{ color: 'white', margin: 0 }}>Fange die Sterne!</h2>

      <GameCanvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} backgroundColor="#1a1a3e">
        {/* Punkte-Anzeige / Score display */}
        <GameText x={10} y={10} size="large">
          Punkte: {score}
        </GameText>

        {/* Spieler / Player */}
        <Sprite x={playerX} y={playerY} emoji="🚀" size={PLAYER_SIZE} />

        {/* Stern zum Fangen / Star to catch */}
        <Sprite x={starX} y={starY} emoji="⭐" size={STAR_SIZE} />

        {/* Steuerungs-Hinweis / Controls hint */}
        <GameText x={10} y={CANVAS_HEIGHT - 30} size="small" color="#888">
          Steuerung: Pfeiltasten oder WASD
        </GameText>
      </GameCanvas>

      <GameButton onClick={() => { setScore(0); spawnNewStar(); }} color="secondary">
        Neu Starten
      </GameButton>
    </div>
  );
}
