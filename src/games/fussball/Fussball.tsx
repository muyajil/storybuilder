import { useState, useCallback } from 'react';
import { GameCanvas, Sprite, GameText, GameButton } from '../../components';
import { useKeyboard, useGameLoop, clamp, checkCollision, distance } from '../../hooks';

/**
 * FUSSBALL SPIEL
 * ==============
 * Ein einfaches Fussball-Spiel!
 * Schieße den Ball ins Tor!
 */

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

// Spieler
const PLAYER_SIZE = 36;
const PLAYER_SPEED = 250;

// Ball
const BALL_SIZE = 24;
const BALL_FRICTION = 0.98;
const KICK_POWER = 400;

// Tor
const GOAL_WIDTH = 20;
const GOAL_HEIGHT = 120;

export function Fussball() {
  // Spieler Position
  const [playerX, setPlayerX] = useState(100);
  const [playerY, setPlayerY] = useState(CANVAS_HEIGHT / 2);

  // Ball Position und Geschwindigkeit
  const [ballX, setBallX] = useState(CANVAS_WIDTH / 2);
  const [ballY, setBallY] = useState(CANVAS_HEIGHT / 2);
  const [ballVelX, setBallVelX] = useState(0);
  const [ballVelY, setBallVelY] = useState(0);

  // Punkte
  const [score, setScore] = useState(0);
  const [goalAnimation, setGoalAnimation] = useState(false);

  const keys = useKeyboard();

  // Ball zurücksetzen
  const resetBall = useCallback(() => {
    setBallX(CANVAS_WIDTH / 2);
    setBallY(CANVAS_HEIGHT / 2);
    setBallVelX(0);
    setBallVelY(0);
  }, []);

  // Tor geschossen!
  const handleGoal = useCallback(() => {
    setScore(prev => prev + 1);
    setGoalAnimation(true);
    setTimeout(() => {
      setGoalAnimation(false);
      resetBall();
      setPlayerX(100);
      setPlayerY(CANVAS_HEIGHT / 2);
    }, 1500);
  }, [resetBall]);

  // Spiel-Schleife
  useGameLoop((deltaTime) => {
    if (goalAnimation) return;

    // Spieler bewegen
    let newPlayerX = playerX;
    let newPlayerY = playerY;

    if (keys.ArrowUp || keys.w || keys.W) {
      newPlayerY -= PLAYER_SPEED * deltaTime;
    }
    if (keys.ArrowDown || keys.s || keys.S) {
      newPlayerY += PLAYER_SPEED * deltaTime;
    }
    if (keys.ArrowLeft || keys.a || keys.A) {
      newPlayerX -= PLAYER_SPEED * deltaTime;
    }
    if (keys.ArrowRight || keys.d || keys.D) {
      newPlayerX += PLAYER_SPEED * deltaTime;
    }

    // Spieler im Feld halten
    newPlayerX = clamp(newPlayerX, 0, CANVAS_WIDTH - PLAYER_SIZE);
    newPlayerY = clamp(newPlayerY, 40, CANVAS_HEIGHT - PLAYER_SIZE - 40);
    setPlayerX(newPlayerX);
    setPlayerY(newPlayerY);

    // Ball Physik
    let newBallX = ballX + ballVelX * deltaTime;
    let newBallY = ballY + ballVelY * deltaTime;
    let newBallVelX = ballVelX * BALL_FRICTION;
    let newBallVelY = ballVelY * BALL_FRICTION;

    // Ball an Wänden abprallen (oben/unten)
    if (newBallY < 40 || newBallY > CANVAS_HEIGHT - BALL_SIZE - 40) {
      newBallVelY = -newBallVelY * 0.8;
      newBallY = clamp(newBallY, 40, CANVAS_HEIGHT - BALL_SIZE - 40);
    }

    // Ball an linker Wand abprallen
    if (newBallX < 0) {
      newBallVelX = -newBallVelX * 0.8;
      newBallX = 0;
    }

    // Tor-Check (rechte Seite)
    const goalTop = (CANVAS_HEIGHT - GOAL_HEIGHT) / 2;
    const goalBottom = goalTop + GOAL_HEIGHT;

    if (newBallX > CANVAS_WIDTH - GOAL_WIDTH) {
      if (newBallY + BALL_SIZE / 2 > goalTop && newBallY + BALL_SIZE / 2 < goalBottom) {
        // TOR!
        handleGoal();
        return;
      } else {
        // Am Pfosten abprallen
        newBallVelX = -newBallVelX * 0.8;
        newBallX = CANVAS_WIDTH - GOAL_WIDTH;
      }
    }

    // Spieler kickt Ball
    const playerRect = { x: newPlayerX, y: newPlayerY, width: PLAYER_SIZE, height: PLAYER_SIZE };
    const ballRect = { x: newBallX, y: newBallY, width: BALL_SIZE, height: BALL_SIZE };

    if (checkCollision(playerRect, ballRect)) {
      // Richtung vom Spieler zum Ball
      const playerCenterX = newPlayerX + PLAYER_SIZE / 2;
      const playerCenterY = newPlayerY + PLAYER_SIZE / 2;
      const ballCenterX = newBallX + BALL_SIZE / 2;
      const ballCenterY = newBallY + BALL_SIZE / 2;

      const dist = distance(playerCenterX, playerCenterY, ballCenterX, ballCenterY);
      if (dist > 0) {
        const dirX = (ballCenterX - playerCenterX) / dist;
        const dirY = (ballCenterY - playerCenterY) / dist;

        newBallVelX = dirX * KICK_POWER;
        newBallVelY = dirY * KICK_POWER;

        // Ball etwas vom Spieler wegschieben
        newBallX += dirX * 5;
        newBallY += dirY * 5;
      }
    }

    // Geschwindigkeit stoppen wenn sehr langsam
    if (Math.abs(newBallVelX) < 1) newBallVelX = 0;
    if (Math.abs(newBallVelY) < 1) newBallVelY = 0;

    setBallX(newBallX);
    setBallY(newBallY);
    setBallVelX(newBallVelX);
    setBallVelY(newBallVelY);
  });

  const goalTop = (CANVAS_HEIGHT - GOAL_HEIGHT) / 2;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <h2 style={{ color: 'white', margin: 0 }}>Fussball</h2>

      <GameCanvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} backgroundColor="#2d8a2d">
        {/* Spielfeld-Linien */}
        <div style={{
          position: 'absolute',
          top: 40,
          left: 0,
          right: 0,
          bottom: 40,
          border: '3px solid rgba(255,255,255,0.5)',
          pointerEvents: 'none',
        }} />

        {/* Mittellinie */}
        <div style={{
          position: 'absolute',
          top: 40,
          left: CANVAS_WIDTH / 2 - 1,
          width: 2,
          bottom: 40,
          backgroundColor: 'rgba(255,255,255,0.5)',
        }} />

        {/* Mittelkreis */}
        <div style={{
          position: 'absolute',
          top: CANVAS_HEIGHT / 2 - 60,
          left: CANVAS_WIDTH / 2 - 60,
          width: 120,
          height: 120,
          border: '2px solid rgba(255,255,255,0.5)',
          borderRadius: '50%',
        }} />

        {/* Tor */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: goalTop,
          width: GOAL_WIDTH,
          height: GOAL_HEIGHT,
          backgroundColor: 'rgba(255,255,255,0.3)',
          borderLeft: '4px solid white',
          borderTop: '4px solid white',
          borderBottom: '4px solid white',
        }} />

        {/* Spieler */}
        <Sprite x={playerX} y={playerY} emoji="🏃" size={PLAYER_SIZE} />

        {/* Ball */}
        <Sprite x={ballX} y={ballY} emoji="⚽" size={BALL_SIZE} />

        {/* Punkte */}
        <GameText x={10} y={8} size="large">
          Tore: {score}
        </GameText>

        {/* Steuerung */}
        <GameText x={10} y={CANVAS_HEIGHT - 32} size="small" color="#ccc">
          Pfeiltasten/WASD zum Bewegen • Laufe gegen den Ball zum Schießen!
        </GameText>

        {/* Tor-Animation */}
        {goalAnimation && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              fontSize: 64,
              color: 'gold',
              textShadow: '0 0 20px gold',
              animation: 'pulse 0.5s infinite',
            }}>
              ⚽ TOOOOR! ⚽
            </div>
          </div>
        )}
      </GameCanvas>

      <GameButton onClick={resetBall} color="secondary">
        Ball Zurücksetzen
      </GameButton>
    </div>
  );
}
