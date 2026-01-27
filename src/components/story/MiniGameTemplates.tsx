import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { MiniGameProps } from './StoryPlayer';
import { GameCanvas, Sprite, GameText } from '../';
import { useKeyboard, useGameLoop, checkCollision, randomBetween } from '../../hooks';

/**
 * MINI-SPIEL VORLAGEN / MINI-GAME TEMPLATES
 * =========================================
 * Fertige Vorlagen für Mini-Spiele mit richtiger Struktur!
 * Ready-made templates for mini-games with proper structure!
 */

// ----- TYPEN / TYPES -----

interface CollectGameConfig {
  /** Spieler-Sprite / Player sprite */
  playerSprite: ReactNode;
  /** Item-Sprite zum Sammeln / Item sprite to collect */
  itemSprite: ReactNode;
  /** Hintergrund-Farbe / Background color */
  backgroundColor?: string;
  /** Hintergrund-Elemente / Background elements */
  backgroundElements?: ReactNode;
  /** Anzahl Items zum Gewinnen / Number of items to win */
  itemsToWin?: number;
  /** Spieler-Geschwindigkeit / Player speed */
  playerSpeed?: number;
  /** Item-Spawn-Rate (ms) / Item spawn rate (ms) */
  spawnRate?: number;
}

interface DodgeGameConfig {
  /** Spieler-Sprite / Player sprite */
  playerSprite: ReactNode;
  /** Hindernis-Sprite / Obstacle sprite */
  obstacleSprite: ReactNode;
  /** Hintergrund-Farbe / Background color */
  backgroundColor?: string;
  /** Hintergrund-Elemente / Background elements */
  backgroundElements?: ReactNode;
  /** Überlebenszeit zum Gewinnen (ms) / Survival time to win (ms) */
  survivalTime?: number;
  /** Spieler-Geschwindigkeit / Player speed */
  playerSpeed?: number;
  /** Hindernis-Geschwindigkeit / Obstacle speed */
  obstacleSpeed?: number;
}

interface CatchGameConfig {
  /** Spieler-Sprite (Fänger unten) / Player sprite (catcher at bottom) */
  playerSprite: ReactNode;
  /** Fallende Items / Falling items */
  itemSprite: ReactNode;
  /** Hintergrund-Farbe / Background color */
  backgroundColor?: string;
  /** Hintergrund-Elemente / Background elements */
  backgroundElements?: ReactNode;
  /** Items zum Gewinnen / Items to win */
  itemsToWin?: number;
  /** Fall-Geschwindigkeit / Fall speed */
  fallSpeed?: number;
}

interface ClickGameConfig {
  /** Target-Sprite zum Klicken / Target sprite to click */
  targetSprite: ReactNode;
  /** Hintergrund-Farbe / Background color */
  backgroundColor?: string;
  /** Hintergrund-Elemente / Background elements */
  backgroundElements?: ReactNode;
  /** Klicks zum Gewinnen / Clicks to win */
  clicksToWin?: number;
  /** Zeit pro Target (ms) / Time per target (ms) */
  timePerTarget?: number;
}

// ----- SAMMEL-SPIEL / COLLECT GAME -----

/**
 * Sammel-Spiel: Bewege den Spieler und sammle Items!
 * Collect Game: Move player and collect items!
 */
export function createCollectGame(config: CollectGameConfig) {
  const {
    playerSprite,
    itemSprite,
    backgroundColor = '#1a1a4e',
    backgroundElements,
    itemsToWin = 5,
    playerSpeed = 200,
    spawnRate = 1500,
  } = config;

  return function CollectMiniGame({ width, height, onWin, onProgress }: MiniGameProps) {
    const [playerX, setPlayerX] = useState(width / 2 - 25);
    const playerY = height - 70;
    const [items, setItems] = useState<Array<{ id: number; x: number; y: number }>>([]);
    const [collected, setCollected] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
    const keys = useKeyboard();
    // Track collected item IDs to prevent double-counting
    const collectedIdsRef = useState(() => new Set<number>())[0];

    // Spawn items at top of screen
    useEffect(() => {
      if (gameEnded) return;
      const interval = setInterval(() => {
        setItems(prev => [...prev, {
          id: Date.now(),
          x: randomBetween(20, width - 50),
          y: -30, // Start above screen so they fall in
        }]);
      }, spawnRate);
      return () => clearInterval(interval);
    }, [width, height, gameEnded]);

    // Item fall speed
    const itemFallSpeed = 100;

    // Game loop
    useGameLoop((dt) => {
      if (gameEnded) return;

      // Move player
      let newX = playerX;
      if (keys.ArrowLeft || keys.a) newX -= playerSpeed * dt;
      if (keys.ArrowRight || keys.d) newX += playerSpeed * dt;
      newX = Math.max(0, Math.min(width - 50, newX));
      setPlayerX(newX);

      // Move items down and check collisions
      const playerRect = { x: newX, y: playerY, width: 50, height: 50 };

      setItems(prev => {
        const remaining: typeof prev = [];
        let newCollections = 0;

        for (const item of prev) {
          const newY = item.y + itemFallSpeed * dt;
          // Remove if off screen
          if (newY > height) continue;

          // Skip if already collected (prevents double-counting)
          if (collectedIdsRef.has(item.id)) continue;

          const itemRect = { x: item.x, y: newY, width: 30, height: 30 };
          if (checkCollision(playerRect, itemRect)) {
            collectedIdsRef.add(item.id);
            newCollections++;
          } else {
            remaining.push({ ...item, y: newY });
          }
        }

        // Update score for collected items
        if (newCollections > 0) {
          setCollected(c => {
            const newCount = c + newCollections;
            onProgress?.(Math.round((newCount / itemsToWin) * 100));
            if (newCount >= itemsToWin) {
              setGameEnded(true);
              setTimeout(onWin, 100);
            }
            return newCount;
          });
        }

        return remaining;
      });
    });

    return (
      <GameCanvas width={width} height={height} backgroundColor={backgroundColor}>
        {backgroundElements}
        <GameText x={10} y={10} size="large" color="#FFD700">
          {collected} / {itemsToWin}
        </GameText>
        {items.map(item => (
          <Sprite key={item.id} x={item.x} y={item.y} size={30}>
            {itemSprite}
          </Sprite>
        ))}
        <Sprite x={playerX} y={playerY} size={50}>
          {playerSprite}
        </Sprite>
        <GameText x={10} y={height - 25} size="small" color="#888">
          ← → zum Bewegen
        </GameText>
      </GameCanvas>
    );
  };
}

// ----- AUSWEICH-SPIEL / DODGE GAME -----

/**
 * Ausweich-Spiel: Weiche Hindernissen aus und überlebe!
 * Dodge Game: Avoid obstacles and survive!
 */
export function createDodgeGame(config: DodgeGameConfig) {
  const {
    playerSprite,
    obstacleSprite,
    backgroundColor = '#2d1b4e',
    backgroundElements,
    survivalTime = 10000,
    playerSpeed = 200,
    obstacleSpeed = 150,
  } = config;

  return function DodgeMiniGame({ width, height, onWin, onLose, onProgress }: MiniGameProps) {
    const [playerX, setPlayerX] = useState(width / 2 - 25);
    const [playerY, setPlayerY] = useState(height - 70);
    const [obstacles, setObstacles] = useState<Array<{ id: number; x: number; y: number }>>([]);
    const [timeLeft, setTimeLeft] = useState(survivalTime);
    const keys = useKeyboard();

    // Spawn obstacles
    useEffect(() => {
      const interval = setInterval(() => {
        setObstacles(prev => [...prev, {
          id: Date.now(),
          x: randomBetween(20, width - 60),
          y: -50,
        }]);
      }, 800);
      return () => clearInterval(interval);
    }, [width]);

    // Countdown
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(prev => {
          const newTime = prev - 100;
          onProgress?.(Math.round(((survivalTime - newTime) / survivalTime) * 100));
          if (newTime <= 0) {
            onWin();
          }
          return newTime;
        });
      }, 100);
      return () => clearInterval(interval);
    }, [onWin, onProgress]);

    // Game loop
    useGameLoop((dt) => {
      // Move player
      let newX = playerX;
      let newY = playerY;
      if (keys.ArrowLeft || keys.a) newX -= playerSpeed * dt;
      if (keys.ArrowRight || keys.d) newX += playerSpeed * dt;
      if (keys.ArrowUp || keys.w) newY -= playerSpeed * dt;
      if (keys.ArrowDown || keys.s) newY += playerSpeed * dt;
      newX = Math.max(0, Math.min(width - 50, newX));
      newY = Math.max(0, Math.min(height - 50, newY));
      setPlayerX(newX);
      setPlayerY(newY);

      // Move obstacles & check collision
      const playerRect = { x: newX, y: newY, width: 50, height: 50 };
      setObstacles(prev => {
        let hit = false;
        const updated = prev.map(obs => ({ ...obs, y: obs.y + obstacleSpeed * dt }))
          .filter(obs => {
            if (obs.y > height) return false;
            const obsRect = { x: obs.x, y: obs.y, width: 40, height: 40 };
            if (checkCollision(playerRect, obsRect)) {
              hit = true;
            }
            return true;
          });
        if (hit) setTimeout(onLose, 100);
        return updated;
      });
    });

    return (
      <GameCanvas width={width} height={height} backgroundColor={backgroundColor}>
        {backgroundElements}
        <GameText x={10} y={10} size="large" color="#FFD700">
          ⏱️ {Math.ceil(timeLeft / 1000)}s
        </GameText>
        {obstacles.map(obs => (
          <Sprite key={obs.id} x={obs.x} y={obs.y} size={40}>
            {obstacleSprite}
          </Sprite>
        ))}
        <Sprite x={playerX} y={playerY} size={50}>
          {playerSprite}
        </Sprite>
        <GameText x={10} y={height - 25} size="small" color="#888">
          Pfeiltasten zum Ausweichen
        </GameText>
      </GameCanvas>
    );
  };
}

// ----- FANG-SPIEL / CATCH GAME -----

/**
 * Fang-Spiel: Fange fallende Items mit dem Spieler unten!
 * Catch Game: Catch falling items with player at bottom!
 */
export function createCatchGame(config: CatchGameConfig) {
  const {
    playerSprite,
    itemSprite,
    backgroundColor = '#1a2a4e',
    backgroundElements,
    itemsToWin = 10,
    fallSpeed = 120,
  } = config;

  return function CatchMiniGame({ width, height, onWin, onLose, onProgress }: MiniGameProps) {
    const [playerX, setPlayerX] = useState(width / 2 - 40);
    const [items, setItems] = useState<Array<{ id: number; x: number; y: number }>>([]);
    const [caught, setCaught] = useState(0);
    const [missed, setMissed] = useState(0);
    const keys = useKeyboard();
    // Track processed item IDs to prevent double-counting
    const processedIdsRef = useState(() => new Set<number>())[0];

    // Spawn items
    useEffect(() => {
      const interval = setInterval(() => {
        setItems(prev => [...prev, {
          id: Date.now(),
          x: randomBetween(20, width - 50),
          y: -30,
        }]);
      }, 1000);
      return () => clearInterval(interval);
    }, [width]);

    // Track if game has ended to prevent multiple callbacks
    const [gameEnded, setGameEnded] = useState(false);

    // Game loop
    useGameLoop((dt) => {
      if (gameEnded) return;

      // Move player (only horizontal)
      let newX = playerX;
      if (keys.ArrowLeft || keys.a) newX -= 250 * dt;
      if (keys.ArrowRight || keys.d) newX += 250 * dt;
      newX = Math.max(0, Math.min(width - 80, newX));
      setPlayerX(newX);

      // Move items & check collision
      const playerRect = { x: newX, y: height - 60, width: 80, height: 40 };

      setItems(prev => {
        const updated: typeof prev = [];
        let caughtThisFrame = 0;
        let missedThisFrame = 0;

        for (const item of prev) {
          // Skip already processed items
          if (processedIdsRef.has(item.id)) continue;

          const newY = item.y + fallSpeed * dt;
          if (newY > height) {
            // Missed!
            processedIdsRef.add(item.id);
            missedThisFrame++;
          } else {
            const itemRect = { x: item.x, y: newY, width: 30, height: 30 };
            if (checkCollision(playerRect, itemRect)) {
              processedIdsRef.add(item.id);
              caughtThisFrame++;
            } else {
              updated.push({ ...item, y: newY });
            }
          }
        }

        // Update counters
        if (missedThisFrame > 0) {
          setMissed(m => {
            const newMissed = m + missedThisFrame;
            if (newMissed >= 3) {
              setGameEnded(true);
              setTimeout(onLose, 100);
            }
            return newMissed;
          });
        }

        if (caughtThisFrame > 0) {
          setCaught(c => {
            const newCount = c + caughtThisFrame;
            onProgress?.(Math.round((newCount / itemsToWin) * 100));
            if (newCount >= itemsToWin) {
              setGameEnded(true);
              setTimeout(onWin, 100);
            }
            return newCount;
          });
        }

        return updated;
      });
    });

    return (
      <GameCanvas width={width} height={height} backgroundColor={backgroundColor}>
        {backgroundElements}
        <GameText x={10} y={10} size="large" color="#FFD700">
          {caught} / {itemsToWin}
        </GameText>
        <GameText x={width - 80} y={10} size="medium" color="#ff6b6b">
          ❌ {missed}/3
        </GameText>
        {items.map(item => (
          <Sprite key={item.id} x={item.x} y={item.y} size={30}>
            {itemSprite}
          </Sprite>
        ))}
        <Sprite x={playerX} y={height - 60} size={80}>
          {playerSprite}
        </Sprite>
        <GameText x={10} y={height - 25} size="small" color="#888">
          ← → zum Fangen
        </GameText>
      </GameCanvas>
    );
  };
}

// ----- KLICK-SPIEL / CLICK GAME -----

/**
 * Klick-Spiel: Klicke auf Ziele die erscheinen!
 * Click Game: Click on targets that appear!
 */
export function createClickGame(config: ClickGameConfig) {
  const {
    targetSprite,
    backgroundColor = '#1a3a2e',
    backgroundElements,
    clicksToWin = 10,
    timePerTarget = 2000,
  } = config;

  return function ClickMiniGame({ width, height, onWin, onLose, onProgress }: MiniGameProps) {
    const [target, setTarget] = useState({ x: width / 2, y: height / 2 });
    const [clicked, setClicked] = useState(0);
    const [timeLeft, setTimeLeft] = useState(timePerTarget);
    const [gameEnded, setGameEnded] = useState(false);

    // Spawn new target position
    const spawnTarget = () => {
      setTarget({
        x: randomBetween(50, width - 100),
        y: randomBetween(50, height - 100),
      });
      setTimeLeft(timePerTarget);
    };

    // Countdown per target
    useEffect(() => {
      if (gameEnded) return;

      const interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 100) {
            setGameEnded(true);
            setTimeout(onLose, 100);
            return prev;
          }
          return prev - 100;
        });
      }, 100);
      return () => clearInterval(interval);
    }, [target, onLose, gameEnded]);

    const handleClick = (e: React.MouseEvent) => {
      if (gameEnded) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Check if clicked on target (with some tolerance)
      const dx = clickX - (target.x + 30);
      const dy = clickY - (target.y + 30);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 50) {
        const newCount = clicked + 1;
        setClicked(newCount);
        onProgress?.(Math.round((newCount / clicksToWin) * 100));
        if (newCount >= clicksToWin) {
          setGameEnded(true);
          setTimeout(onWin, 100);
        } else {
          spawnTarget();
        }
      }
    };

    return (
      <div
        style={{ width, height, backgroundColor, position: 'relative', cursor: 'crosshair' }}
        onClick={handleClick}
      >
        {backgroundElements}
        <div style={{ position: 'absolute', top: 10, left: 10 }}>
          <GameText x={0} y={0} size="large" color="#FFD700">
            {clicked} / {clicksToWin}
          </GameText>
        </div>
        <div style={{
          position: 'absolute',
          top: 10,
          right: 10,
          color: timeLeft < 1000 ? '#ff6b6b' : '#fff',
          fontSize: 18,
        }}>
          ⏱️ {(timeLeft / 1000).toFixed(1)}s
        </div>
        <div style={{
          position: 'absolute',
          left: target.x,
          top: target.y,
          width: 60,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {targetSprite}
        </div>
        <div style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          color: '#888',
          fontSize: 12,
        }}>
          Klicke auf das Ziel!
        </div>
      </div>
    );
  };
}

// ----- SNAKE-SPIEL CONFIG -----

interface SnakeGameConfig {
  /** Kopf-Sprite / Head sprite */
  headSprite: ReactNode;
  /** Körper-Sprite / Body sprite */
  bodySprite: ReactNode;
  /** Futter-Sprite / Food sprite */
  foodSprite: ReactNode;
  /** Hintergrund-Farbe / Background color */
  backgroundColor?: string;
  /** Hintergrund-Elemente / Background elements */
  backgroundElements?: ReactNode;
  /** Länge zum Gewinnen / Length to win */
  lengthToWin?: number;
  /** Geschwindigkeit (ms pro Schritt) / Speed (ms per step) */
  speed?: number;
}

// ----- SNAKE-SPIEL / SNAKE GAME -----

/**
 * Schlangen-Spiel: Friss Futter und werde länger!
 * Snake Game: Eat food and grow longer!
 */
export function createSnakeGame(config: SnakeGameConfig) {
  const {
    headSprite,
    bodySprite,
    foodSprite,
    backgroundColor = '#1a2a1a',
    backgroundElements,
    lengthToWin = 10,
    speed = 150,
  } = config;

  return function SnakeMiniGame({ width, height, onWin, onLose, onProgress }: MiniGameProps) {
    const gridSize = 20;
    const gridWidth = Math.floor(width / gridSize);
    const gridHeight = Math.floor(height / gridSize);

    const [snake, setSnake] = useState([{ x: Math.floor(gridWidth / 2), y: Math.floor(gridHeight / 2) }]);
    const [food, setFood] = useState({ x: Math.floor(gridWidth / 4), y: Math.floor(gridHeight / 2) });
    const [direction, setDirection] = useState<'up' | 'down' | 'left' | 'right'>('right');
    const [gameOver, setGameOver] = useState(false);

    const keys = useKeyboard();

    // Function to spawn food not on snake body
    const spawnFood = (snakeBody: Array<{ x: number; y: number }>) => {
      let newFood: { x: number; y: number } = {
        x: Math.floor(Math.random() * (gridWidth - 2)) + 1,
        y: Math.floor(Math.random() * (gridHeight - 2)) + 1,
      };
      let attempts = 0;
      while (
        snakeBody.some(seg => seg.x === newFood.x && seg.y === newFood.y) &&
        attempts < 100
      ) {
        newFood = {
          x: Math.floor(Math.random() * (gridWidth - 2)) + 1,
          y: Math.floor(Math.random() * (gridHeight - 2)) + 1,
        };
        attempts++;
      }
      return newFood;
    };

    // Handle direction changes
    useEffect(() => {
      if (gameOver) return;
      if (keys.ArrowUp || keys.w) setDirection(d => d !== 'down' ? 'up' : d);
      if (keys.ArrowDown || keys.s) setDirection(d => d !== 'up' ? 'down' : d);
      if (keys.ArrowLeft || keys.a) setDirection(d => d !== 'right' ? 'left' : d);
      if (keys.ArrowRight || keys.d) setDirection(d => d !== 'left' ? 'right' : d);
    }, [keys, gameOver]);

    // Game loop
    useEffect(() => {
      if (gameOver) return;

      const interval = setInterval(() => {
        setSnake(prev => {
          const head = prev[0];
          const newHead = { ...head };

          switch (direction) {
            case 'up': newHead.y -= 1; break;
            case 'down': newHead.y += 1; break;
            case 'left': newHead.x -= 1; break;
            case 'right': newHead.x += 1; break;
          }

          // Check wall collision
          if (newHead.x < 0 || newHead.x >= gridWidth || newHead.y < 0 || newHead.y >= gridHeight) {
            setGameOver(true);
            setTimeout(onLose, 100);
            return prev;
          }

          // Check self collision
          if (prev.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
            setGameOver(true);
            setTimeout(onLose, 100);
            return prev;
          }

          const newSnake = [newHead, ...prev];

          // Check food collision
          if (newHead.x === food.x && newHead.y === food.y) {
            // Spawn new food not on snake body
            setFood(spawnFood(newSnake));
            onProgress?.(Math.round((newSnake.length / lengthToWin) * 100));
            if (newSnake.length >= lengthToWin) {
              setGameOver(true);
              setTimeout(onWin, 100);
            }
          } else {
            newSnake.pop(); // Remove tail if no food eaten
          }

          return newSnake;
        });
      }, speed);

      return () => clearInterval(interval);
    }, [direction, food, gameOver, gridWidth, gridHeight, onWin, onLose, onProgress, lengthToWin, speed]);

    return (
      <GameCanvas width={width} height={height} backgroundColor={backgroundColor}>
        {backgroundElements}
        <GameText x={10} y={10} size="large" color="#FFD700">
          🐍 {snake.length} / {lengthToWin}
        </GameText>
        {/* Food */}
        <Sprite x={food.x * gridSize} y={food.y * gridSize} size={gridSize}>
          {foodSprite}
        </Sprite>
        {/* Snake */}
        {snake.map((segment, i) => (
          <Sprite key={i} x={segment.x * gridSize} y={segment.y * gridSize} size={gridSize}>
            {i === 0 ? headSprite : bodySprite}
          </Sprite>
        ))}
        <GameText x={10} y={height - 25} size="small" color="#888">
          Pfeiltasten zum Steuern
        </GameText>
      </GameCanvas>
    );
  };
}

// ----- RENNEN-SPIEL CONFIG -----

interface RaceGameConfig {
  /** Spieler-Sprite (Auto, Pferd, etc.) / Player sprite (car, horse, etc.) */
  playerSprite: ReactNode;
  /** Hindernis-Sprite / Obstacle sprite */
  obstacleSprite: ReactNode;
  /** Straßen-Farbe / Road color */
  roadColor?: string;
  /** Hintergrund-Farbe (neben Straße) / Background color (beside road) */
  backgroundColor?: string;
  /** Hintergrund-Elemente / Background elements */
  backgroundElements?: ReactNode;
  /** Distanz zum Gewinnen / Distance to win */
  distanceToWin?: number;
  /** Spieler-Geschwindigkeit / Player speed */
  playerSpeed?: number;
  /** Hindernis-Geschwindigkeit / Obstacle speed */
  obstacleSpeed?: number;
}

// ----- RENNEN-SPIEL / RACE GAME -----

/**
 * Rennen-Spiel: Fahre und weiche Hindernissen aus!
 * Race Game: Drive and dodge obstacles!
 */
export function createRaceGame(config: RaceGameConfig) {
  const {
    playerSprite,
    obstacleSprite,
    roadColor = '#444',
    backgroundColor = '#228B22',
    backgroundElements,
    distanceToWin = 1000,
    playerSpeed = 200,
    obstacleSpeed = 180,
  } = config;

  return function RaceMiniGame({ width, height, onWin, onLose, onProgress }: MiniGameProps) {
    const [playerX, setPlayerX] = useState(width / 2 - 25);
    const [distance, setDistance] = useState(0);
    const [obstacles, setObstacles] = useState<Array<{ id: number; x: number; y: number }>>([]);
    const [roadOffset, setRoadOffset] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
    const keys = useKeyboard();

    const roadWidth = width * 0.6;
    const roadLeft = (width - roadWidth) / 2;
    // Distance gained per second (independent of obstacle speed)
    const distancePerSecond = 100;

    // Spawn obstacles
    useEffect(() => {
      if (gameEnded) return;
      const interval = setInterval(() => {
        // Random position on the road
        const obstacleX = roadLeft + randomBetween(20, roadWidth - 70);
        setObstacles(prev => [...prev, {
          id: Date.now(),
          x: obstacleX,
          y: -50,
        }]);
      }, 1200);
      return () => clearInterval(interval);
    }, [roadLeft, roadWidth, gameEnded]);

    // Game loop
    useGameLoop((dt) => {
      if (gameEnded) return;

      // Move player left/right
      let newX = playerX;
      if (keys.ArrowLeft || keys.a) newX -= playerSpeed * dt;
      if (keys.ArrowRight || keys.d) newX += playerSpeed * dt;
      // Keep player on road
      newX = Math.max(roadLeft + 10, Math.min(roadLeft + roadWidth - 60, newX));
      setPlayerX(newX);

      // Update distance (based on time, not obstacle speed)
      setDistance(d => {
        const newDist = d + distancePerSecond * dt;
        onProgress?.(Math.round((newDist / distanceToWin) * 100));
        if (newDist >= distanceToWin) {
          setGameEnded(true);
          setTimeout(onWin, 100);
        }
        return newDist;
      });

      // Animate road
      setRoadOffset(o => (o + obstacleSpeed * dt) % 40);

      // Move obstacles & check collision
      const playerRect = { x: newX, y: height - 80, width: 50, height: 60 };
      setObstacles(prev => {
        let hit = false;
        const updated = prev.map(obs => ({ ...obs, y: obs.y + obstacleSpeed * dt }))
          .filter(obs => {
            if (obs.y > height) return false;
            const obsRect = { x: obs.x, y: obs.y, width: 50, height: 50 };
            if (checkCollision(playerRect, obsRect)) {
              hit = true;
            }
            return true;
          });
        if (hit) {
          setGameEnded(true);
          setTimeout(onLose, 100);
        }
        return updated;
      });
    });

    return (
      <GameCanvas width={width} height={height} backgroundColor={backgroundColor}>
        {backgroundElements}
        {/* Road */}
        <div style={{
          position: 'absolute',
          left: roadLeft,
          top: 0,
          width: roadWidth,
          height: height,
          backgroundColor: roadColor,
        }}>
          {/* Road lines */}
          {Array.from({ length: Math.ceil(height / 40) + 1 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: '50%',
                top: i * 40 + roadOffset - 40,
                transform: 'translateX(-50%)',
                width: 8,
                height: 20,
                backgroundColor: '#fff',
              }}
            />
          ))}
        </div>
        {/* Progress */}
        <GameText x={10} y={10} size="large" color="#FFD700">
          🏁 {Math.round(distance)}m / {distanceToWin}m
        </GameText>
        {/* Obstacles */}
        {obstacles.map(obs => (
          <Sprite key={obs.id} x={obs.x} y={obs.y} size={50}>
            {obstacleSprite}
          </Sprite>
        ))}
        {/* Player */}
        <Sprite x={playerX} y={height - 80} size={50}>
          {playerSprite}
        </Sprite>
        <GameText x={10} y={height - 25} size="small" color="#888">
          ← → zum Steuern
        </GameText>
      </GameCanvas>
    );
  };
}

// ----- FLAPPY SPIEL CONFIG -----

interface FlappyGameConfig {
  /** Spieler-Sprite / Player sprite */
  playerSprite: ReactNode;
  /** Hindernis-Sprite (oben) / Obstacle sprite (top) */
  obstacleTopSprite: ReactNode;
  /** Hindernis-Sprite (unten) / Obstacle sprite (bottom) */
  obstacleBottomSprite: ReactNode;
  /** Hintergrund-Farbe / Background color */
  backgroundColor?: string;
  /** Hintergrund-Elemente / Background elements */
  backgroundElements?: ReactNode;
  /** Punkte zum Gewinnen / Points to win */
  pointsToWin?: number;
  /** Schwerkraft / Gravity */
  gravity?: number;
  /** Sprungkraft / Jump force */
  jumpForce?: number;
}

// ----- FLAPPY-SPIEL / FLAPPY GAME -----

/**
 * Flappy-Spiel: Spring durch die Lücken!
 * Flappy Game: Jump through the gaps!
 */
export function createFlappyGame(config: FlappyGameConfig) {
  const {
    playerSprite,
    obstacleTopSprite,
    obstacleBottomSprite,
    backgroundColor = '#4a90d9',
    backgroundElements,
    pointsToWin = 5,
    gravity = 400, // Reduced from 600 for easier gameplay
    jumpForce = -250, // Slightly stronger jump for easier gameplay
  } = config;

  return function FlappyMiniGame({ width, height, onWin, onLose, onProgress }: MiniGameProps) {
    const [playerY, setPlayerY] = useState(height / 2);
    const [velocity, setVelocity] = useState(0);
    const [pipes, setPipes] = useState<Array<{ id: number; x: number; gapY: number; passed: boolean }>>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    // Track scored pipe IDs to prevent double-counting
    const scoredPipesRef = useState(() => new Set<number>())[0];

    const keys = useKeyboard();
    const pipeWidth = 60;
    const gapHeight = 160; // Larger gap = easier
    const playerSize = 40;
    const terminalVelocity = 300; // Max fall speed (slower = easier)

    // Jump on space or up
    useEffect(() => {
      if ((keys[' '] || keys.ArrowUp || keys.w) && !gameOver) {
        setVelocity(jumpForce);
      }
    }, [keys, gameOver]);

    // Spawn pipes
    useEffect(() => {
      if (gameOver) return;
      const interval = setInterval(() => {
        setPipes(prev => [...prev, {
          id: Date.now(),
          x: width,
          gapY: randomBetween(gapHeight, height - gapHeight),
          passed: false,
        }]);
      }, 2500); // Slower spawn rate = easier
      return () => clearInterval(interval);
    }, [width, height, gameOver]);

    // Game loop
    useGameLoop((dt) => {
      if (gameOver) return;

      // Apply gravity with terminal velocity
      setVelocity(v => Math.min(v + gravity * dt, terminalVelocity));
      setPlayerY(y => {
        const newY = y + velocity * dt;
        // Check floor/ceiling
        if (newY < 0 || newY > height - playerSize) {
          setGameOver(true);
          setTimeout(onLose, 100);
          return y;
        }
        return newY;
      });

      // Move pipes & check collision
      const playerRect = { x: 50, y: playerY, width: playerSize, height: playerSize };

      setPipes(prev => {
        const updated: typeof prev = [];
        let scoredThisFrame = 0;

        for (const pipe of prev) {
          const newX = pipe.x - 100 * dt; // Slower pipes = easier

          // Check if passed pipe (use Set to prevent double-counting across frames)
          const justPassed = !scoredPipesRef.has(pipe.id) && pipe.x > 50 + playerSize && newX <= 50 + playerSize;
          if (justPassed) {
            scoredPipesRef.add(pipe.id);
            scoredThisFrame++;
          }

          if (newX > -pipeWidth) {
            // Check collision with pipes
            const topPipe = { x: newX, y: 0, width: pipeWidth, height: pipe.gapY - gapHeight / 2 };
            const bottomPipe = { x: newX, y: pipe.gapY + gapHeight / 2, width: pipeWidth, height: height };

            if (checkCollision(playerRect, topPipe) || checkCollision(playerRect, bottomPipe)) {
              setGameOver(true);
              setTimeout(onLose, 100);
            }

            updated.push({ ...pipe, x: newX, passed: scoredPipesRef.has(pipe.id) });
          }
        }

        // Update score after processing all pipes
        if (scoredThisFrame > 0) {
          setScore(s => {
            const newScore = s + scoredThisFrame;
            onProgress?.(Math.round((newScore / pointsToWin) * 100));
            if (newScore >= pointsToWin) {
              setGameOver(true);
              setTimeout(onWin, 100);
            }
            return newScore;
          });
        }

        return updated;
      });
    });

    // Click/tap to jump
    const handleClick = () => {
      if (!gameOver) {
        setVelocity(jumpForce);
      }
    };

    return (
      <div
        style={{ width, height, backgroundColor, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
        onClick={handleClick}
      >
        {backgroundElements}
        <div style={{ position: 'absolute', top: 10, left: 10 }}>
          <GameText x={0} y={0} size="large" color="#FFD700">
            ⭐ {score} / {pointsToWin}
          </GameText>
        </div>
        {/* Pipes */}
        {pipes.map(pipe => (
          <div key={pipe.id}>
            {/* Top pipe */}
            <div style={{
              position: 'absolute',
              left: pipe.x,
              top: 0,
              width: pipeWidth,
              height: pipe.gapY - gapHeight / 2,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
              {obstacleTopSprite}
            </div>
            {/* Bottom pipe */}
            <div style={{
              position: 'absolute',
              left: pipe.x,
              top: pipe.gapY + gapHeight / 2,
              width: pipeWidth,
              height: height - pipe.gapY - gapHeight / 2,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
              {obstacleBottomSprite}
            </div>
          </div>
        ))}
        {/* Player */}
        <Sprite x={50} y={playerY} size={playerSize}>
          {playerSprite}
        </Sprite>
        <div style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          color: '#fff',
          fontSize: 12,
          textShadow: '1px 1px 2px black',
        }}>
          Klicken oder Leertaste zum Springen!
        </div>
      </div>
    );
  };
}
