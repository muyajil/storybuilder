import { useState, useCallback } from 'react';
import { GameCanvas, Sprite, GameText, GameButton } from '../../components';
import { useKeyboard, useGameLoop, clamp, randomIntBetween } from '../../hooks';

/**
 * POKEMON WELT
 * ============
 * Ein Pokemon-ähnliches Spiel wie auf dem Gameboy!
 * Laufe herum, finde wildes Gras, und triff Pokemon!
 */

// Spielfeld Größe
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;
const TILE_SIZE = 32;

// Spieler
const PLAYER_SPEED = 150;

// Karten-Elemente
type TileType = 'grass' | 'tall_grass' | 'tree' | 'water' | 'path' | 'house';

interface WorldTile {
  type: TileType;
  x: number;
  y: number;
}

// Einfache Welt generieren
function generateWorld(): WorldTile[] {
  const tiles: WorldTile[] = [];
  const cols = Math.floor(CANVAS_WIDTH / TILE_SIZE);
  const rows = Math.floor(CANVAS_HEIGHT / TILE_SIZE);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // Rand = Bäume
      if (x === 0 || y === 0 || x === cols - 1 || y === rows - 1) {
        tiles.push({ type: 'tree', x: x * TILE_SIZE, y: y * TILE_SIZE });
        continue;
      }

      // Zufällige Elemente
      const rand = Math.random();
      if (rand < 0.15) {
        tiles.push({ type: 'tall_grass', x: x * TILE_SIZE, y: y * TILE_SIZE });
      } else if (rand < 0.2) {
        tiles.push({ type: 'tree', x: x * TILE_SIZE, y: y * TILE_SIZE });
      } else if (rand < 0.22) {
        tiles.push({ type: 'water', x: x * TILE_SIZE, y: y * TILE_SIZE });
      } else {
        tiles.push({ type: 'grass', x: x * TILE_SIZE, y: y * TILE_SIZE });
      }
    }
  }

  // Haus in der Mitte oben
  const houseX = Math.floor(cols / 2) * TILE_SIZE;
  const houseY = 2 * TILE_SIZE;
  const houseIndex = tiles.findIndex(t => t.x === houseX && t.y === houseY);
  if (houseIndex >= 0) tiles[houseIndex] = { type: 'house', x: houseX, y: houseY };

  // Pfad vom Haus nach unten
  for (let py = 3; py < 6; py++) {
    const pathIndex = tiles.findIndex(t => t.x === houseX && t.y === py * TILE_SIZE);
    if (pathIndex >= 0) tiles[pathIndex] = { type: 'path', x: houseX, y: py * TILE_SIZE };
  }

  return tiles;
}

const tileEmojis: Record<TileType, string> = {
  grass: '🟩',
  tall_grass: '🌿',
  tree: '🌲',
  water: '🌊',
  path: '🟫',
  house: '🏠',
};

// Pokemon die man treffen kann
const wildPokemon = ['🐛', '🐦', '🐀', '🐱', '🦋', '🐝', '🐞', '🦎'];

type Direction = 'up' | 'down' | 'left' | 'right';

export function PokemonWelt() {
  const [world] = useState(() => generateWorld());
  const [playerX, setPlayerX] = useState(CANVAS_WIDTH / 2);
  const [playerY, setPlayerY] = useState(CANVAS_HEIGHT / 2);
  const [direction, setDirection] = useState<Direction>('down');
  const [pokemonCount, setPokemonCount] = useState(0);
  const [encounteredPokemon, setEncounteredPokemon] = useState<string | null>(null);
  const [caughtPokemon, setCaughtPokemon] = useState<string[]>([]);

  const keys = useKeyboard();

  // Prüfe ob Position blockiert ist (Baum, Wasser, Haus)
  const isBlocked = useCallback((x: number, y: number) => {
    const tile = world.find(t =>
      x >= t.x && x < t.x + TILE_SIZE &&
      y >= t.y && y < t.y + TILE_SIZE
    );
    return tile && (tile.type === 'tree' || tile.type === 'water' || tile.type === 'house');
  }, [world]);

  // Prüfe ob im hohen Gras
  const isInTallGrass = useCallback((x: number, y: number) => {
    const tile = world.find(t =>
      x >= t.x && x < t.x + TILE_SIZE &&
      y >= t.y && y < t.y + TILE_SIZE
    );
    return tile && tile.type === 'tall_grass';
  }, [world]);

  // Pokemon fangen
  const catchPokemon = () => {
    if (encounteredPokemon) {
      setCaughtPokemon(prev => [...prev, encounteredPokemon]);
      setPokemonCount(prev => prev + 1);
      setEncounteredPokemon(null);
    }
  };

  // Weglaufen
  const runAway = () => {
    setEncounteredPokemon(null);
  };

  // Spiel-Schleife
  useGameLoop((deltaTime) => {
    if (encounteredPokemon) return; // Pause wenn Pokemon getroffen

    let newX = playerX;
    let newY = playerY;
    let moved = false;

    if (keys.ArrowUp || keys.w || keys.W) {
      newY -= PLAYER_SPEED * deltaTime;
      setDirection('up');
      moved = true;
    }
    if (keys.ArrowDown || keys.s || keys.S) {
      newY += PLAYER_SPEED * deltaTime;
      setDirection('down');
      moved = true;
    }
    if (keys.ArrowLeft || keys.a || keys.A) {
      newX -= PLAYER_SPEED * deltaTime;
      setDirection('left');
      moved = true;
    }
    if (keys.ArrowRight || keys.d || keys.D) {
      newX += PLAYER_SPEED * deltaTime;
      setDirection('right');
      moved = true;
    }

    // Kollision prüfen
    if (!isBlocked(newX + 16, newY + 16)) {
      newX = clamp(newX, TILE_SIZE, CANVAS_WIDTH - TILE_SIZE * 2);
      newY = clamp(newY, TILE_SIZE, CANVAS_HEIGHT - TILE_SIZE * 2);
      setPlayerX(newX);
      setPlayerY(newY);

      // Pokemon Encounter im hohen Gras
      if (moved && isInTallGrass(newX + 16, newY + 16)) {
        if (Math.random() < 0.02) { // 2% Chance pro Frame
          const pokemon = wildPokemon[randomIntBetween(0, wildPokemon.length - 1)];
          setEncounteredPokemon(pokemon);
        }
      }
    }
  });

  const playerEmoji = {
    up: '🧑',
    down: '🧑',
    left: '🧑',
    right: '🧑',
  }[direction];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <h2 style={{ color: 'white', margin: 0 }}>Pokemon Welt</h2>

      <GameCanvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} backgroundColor="#3d8b40">
        {/* Welt zeichnen */}
        {world.map((tile, i) => (
          <Sprite key={i} x={tile.x} y={tile.y} emoji={tileEmojis[tile.type]} size={TILE_SIZE} />
        ))}

        {/* Spieler */}
        <Sprite x={playerX} y={playerY} emoji={playerEmoji} size={TILE_SIZE} />

        {/* UI */}
        <GameText x={10} y={10} size="medium">
          Pokemon gefangen: {pokemonCount}
        </GameText>

        {/* Gefangene Pokemon anzeigen */}
        <div style={{ position: 'absolute', top: 40, left: 10, display: 'flex', gap: 4 }}>
          {caughtPokemon.map((p, i) => (
            <span key={i} style={{ fontSize: 20 }}>{p}</span>
          ))}
        </div>

        <GameText x={10} y={CANVAS_HEIGHT - 30} size="small" color="#ccc">
          Pfeiltasten/WASD zum Bewegen • Laufe ins hohe Gras 🌿 um Pokemon zu finden!
        </GameText>

        {/* Pokemon Encounter Overlay */}
        {encounteredPokemon && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}>
            <GameText size="large" centered>
              Ein wildes Pokemon erscheint!
            </GameText>
            <span style={{ fontSize: 80 }}>{encounteredPokemon}</span>
            <div style={{ display: 'flex', gap: 16 }}>
              <GameButton onClick={catchPokemon} color="success">
                Fangen!
              </GameButton>
              <GameButton onClick={runAway} color="secondary">
                Weglaufen
              </GameButton>
            </div>
          </div>
        )}
      </GameCanvas>
    </div>
  );
}
