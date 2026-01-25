import { useState, useCallback } from 'react';
import { GameCanvas, Sprite, GameText, GameButton } from '../../components';
import { useKeyboard, useGameLoop, clamp, randomIntBetween } from '../../hooks';

/**
 * POKEMON WELT
 * ============
 * Ein Pokemon-ähnliches Spiel wie auf dem Gameboy!
 * Laufe herum, finde wildes Gras, und triff Pokemon!
 * Gehe ins Wasser um in die Wasserwelt zu tauchen!
 */

// Spielfeld Größe
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;
const TILE_SIZE = 32;

// Spieler
const PLAYER_SPEED = 150;

// Karten-Elemente
type TileType = 'grass' | 'tall_grass' | 'tree' | 'water' | 'path' | 'house' | 'seaweed' | 'coral' | 'deep_water' | 'sand';

interface WorldTile {
  type: TileType;
  x: number;
  y: number;
}

// Überwelt generieren
function generateOverworld(): WorldTile[] {
  const tiles: WorldTile[] = [];
  const cols = Math.floor(CANVAS_WIDTH / TILE_SIZE);
  const rows = Math.floor(CANVAS_HEIGHT / TILE_SIZE);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (x === 0 || y === 0 || x === cols - 1 || y === rows - 1) {
        tiles.push({ type: 'tree', x: x * TILE_SIZE, y: y * TILE_SIZE });
        continue;
      }

      const rand = Math.random();
      if (rand < 0.15) {
        tiles.push({ type: 'tall_grass', x: x * TILE_SIZE, y: y * TILE_SIZE });
      } else if (rand < 0.2) {
        tiles.push({ type: 'tree', x: x * TILE_SIZE, y: y * TILE_SIZE });
      } else if (rand < 0.25) {
        tiles.push({ type: 'water', x: x * TILE_SIZE, y: y * TILE_SIZE });
      } else {
        tiles.push({ type: 'grass', x: x * TILE_SIZE, y: y * TILE_SIZE });
      }
    }
  }

  // Haus
  const houseX = Math.floor(cols / 2) * TILE_SIZE;
  const houseY = 2 * TILE_SIZE;
  const houseIndex = tiles.findIndex(t => t.x === houseX && t.y === houseY);
  if (houseIndex >= 0) tiles[houseIndex] = { type: 'house', x: houseX, y: houseY };

  // Pfad
  for (let py = 3; py < 6; py++) {
    const pathIndex = tiles.findIndex(t => t.x === houseX && t.y === py * TILE_SIZE);
    if (pathIndex >= 0) tiles[pathIndex] = { type: 'path', x: houseX, y: py * TILE_SIZE };
  }

  return tiles;
}

// Wasserwelt generieren
function generateWaterWorld(): WorldTile[] {
  const tiles: WorldTile[] = [];
  const cols = Math.floor(CANVAS_WIDTH / TILE_SIZE);
  const rows = Math.floor(CANVAS_HEIGHT / TILE_SIZE);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const rand = Math.random();
      if (rand < 0.2) {
        tiles.push({ type: 'seaweed', x: x * TILE_SIZE, y: y * TILE_SIZE });
      } else if (rand < 0.25) {
        tiles.push({ type: 'coral', x: x * TILE_SIZE, y: y * TILE_SIZE });
      } else if (rand < 0.35) {
        tiles.push({ type: 'sand', x: x * TILE_SIZE, y: y * TILE_SIZE });
      } else {
        tiles.push({ type: 'deep_water', x: x * TILE_SIZE, y: y * TILE_SIZE });
      }
    }
  }

  // Portal zum Zurückkehren (in der Mitte oben)
  const portalX = Math.floor(cols / 2) * TILE_SIZE;
  const portalY = 2 * TILE_SIZE;
  const portalIndex = tiles.findIndex(t => t.x === portalX && t.y === portalY);
  if (portalIndex >= 0) tiles[portalIndex] = { type: 'coral', x: portalX, y: portalY };

  return tiles;
}

const overworldEmojis: Record<string, string> = {
  grass: '🟩',
  tall_grass: '🌿',
  tree: '🌲',
  water: '🌊',
  path: '🟫',
  house: '🏠',
};

const waterWorldEmojis: Record<string, string> = {
  deep_water: '🟦',
  seaweed: '🌿',
  coral: '🪸',
  sand: '🟨',
};

// Pokemon
const landPokemon = ['🐛', '🐦', '🐀', '🐱', '🦋', '🐝', '🐞', '🦎'];
const waterPokemon = ['🐟', '🐠', '🐡', '🦑', '🐙', '🦐', '🦞', '🐚', '🐳', '🐬'];

type Direction = 'up' | 'down' | 'left' | 'right';
type WorldType = 'overworld' | 'waterworld';

export function PokemonWelt() {
  const [overworld] = useState(() => generateOverworld());
  const [waterWorld] = useState(() => generateWaterWorld());
  const [currentWorld, setCurrentWorld] = useState<WorldType>('overworld');

  const [playerX, setPlayerX] = useState(CANVAS_WIDTH / 2);
  const [playerY, setPlayerY] = useState(CANVAS_HEIGHT / 2);
  const [, setDirection] = useState<Direction>('down');
  const [pokemonCount, setPokemonCount] = useState(0);
  const [encounteredPokemon, setEncounteredPokemon] = useState<string | null>(null);
  const [caughtPokemon, setCaughtPokemon] = useState<string[]>([]);
  const [teleportAnimation, setTeleportAnimation] = useState(false);

  const keys = useKeyboard();

  const world = currentWorld === 'overworld' ? overworld : waterWorld;
  const tileEmojis = currentWorld === 'overworld' ? overworldEmojis : waterWorldEmojis;
  const currentPokemonList = currentWorld === 'overworld' ? landPokemon : waterPokemon;

  // Teleport zur anderen Welt
  const teleportTo = useCallback((targetWorld: WorldType) => {
    setTeleportAnimation(true);
    setTimeout(() => {
      setCurrentWorld(targetWorld);
      setPlayerX(CANVAS_WIDTH / 2);
      setPlayerY(CANVAS_HEIGHT / 2);
      setTeleportAnimation(false);
    }, 1000);
  }, []);

  // Prüfe Tile-Typ an Position
  const getTileAt = useCallback((x: number, y: number) => {
    return world.find(t =>
      x >= t.x && x < t.x + TILE_SIZE &&
      y >= t.y && y < t.y + TILE_SIZE
    );
  }, [world]);

  // Prüfe ob Position blockiert ist
  const isBlocked = useCallback((x: number, y: number) => {
    const tile = getTileAt(x, y);
    if (currentWorld === 'overworld') {
      return tile && (tile.type === 'tree' || tile.type === 'house');
    }
    return false; // In der Wasserwelt kann man überall schwimmen
  }, [getTileAt, currentWorld]);

  // Pokemon fangen
  const catchPokemon = () => {
    if (encounteredPokemon) {
      setCaughtPokemon(prev => [...prev, encounteredPokemon]);
      setPokemonCount(prev => prev + 1);
      setEncounteredPokemon(null);
    }
  };

  const runAway = () => {
    setEncounteredPokemon(null);
  };

  // Spiel-Schleife
  useGameLoop((deltaTime) => {
    if (encounteredPokemon || teleportAnimation) return;

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

    if (!isBlocked(newX + 16, newY + 16)) {
      newX = clamp(newX, TILE_SIZE, CANVAS_WIDTH - TILE_SIZE * 2);
      newY = clamp(newY, TILE_SIZE, CANVAS_HEIGHT - TILE_SIZE * 2);
      setPlayerX(newX);
      setPlayerY(newY);

      const tile = getTileAt(newX + 16, newY + 16);

      // Teleport zur Wasserwelt wenn auf Wasser
      if (currentWorld === 'overworld' && tile?.type === 'water') {
        teleportTo('waterworld');
        return;
      }

      // Zurück zur Überwelt wenn auf Koralle
      if (currentWorld === 'waterworld' && tile?.type === 'coral') {
        teleportTo('overworld');
        return;
      }

      // Pokemon Encounter
      const encounterTiles = currentWorld === 'overworld'
        ? ['tall_grass']
        : ['seaweed', 'deep_water'];

      if (moved && tile && encounterTiles.includes(tile.type)) {
        if (Math.random() < 0.02) {
          const pokemon = currentPokemonList[randomIntBetween(0, currentPokemonList.length - 1)];
          setEncounteredPokemon(pokemon);
        }
      }
    }
  });

  const playerEmoji = currentWorld === 'overworld' ? '🧑🏽' : '🧑🏽‍🦱';
  const bgColor = currentWorld === 'overworld' ? '#3d8b40' : '#1a5276';
  const worldName = currentWorld === 'overworld' ? 'Pokemon Welt' : '🌊 Wasserwelt';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <h2 style={{ color: 'white', margin: 0 }}>{worldName}</h2>

      <GameCanvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} backgroundColor={bgColor}>
        {/* Welt zeichnen */}
        {world.map((tile, i) => (
          <Sprite key={i} x={tile.x} y={tile.y} emoji={tileEmojis[tile.type] || '❓'} size={TILE_SIZE} />
        ))}

        {/* Spieler */}
        <Sprite x={playerX} y={playerY} emoji={playerEmoji} size={TILE_SIZE} />

        {/* UI */}
        <GameText x={10} y={10} size="medium">
          Pokemon: {pokemonCount}
        </GameText>

        {/* Gefangene Pokemon */}
        <div style={{ position: 'absolute', top: 40, left: 10, display: 'flex', gap: 4, flexWrap: 'wrap', maxWidth: 200 }}>
          {caughtPokemon.map((p, i) => (
            <span key={i} style={{ fontSize: 18 }}>{p}</span>
          ))}
        </div>

        <GameText x={10} y={CANVAS_HEIGHT - 30} size="small" color="#ccc">
          {currentWorld === 'overworld'
            ? 'Gehe ins Wasser 🌊 für die Wasserwelt!'
            : 'Gehe zur Koralle 🪸 um zurückzukehren!'}
        </GameText>

        {/* Teleport Animation */}
        {teleportAnimation && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: currentWorld === 'overworld' ? '#1a5276' : '#3d8b40',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.5s',
          }}>
            <GameText size="huge" centered color="white">
              {currentWorld === 'overworld' ? '🌊 Tauche ab!' : '🌲 Auftauchen!'}
            </GameText>
          </div>
        )}

        {/* Pokemon Encounter */}
        {encounteredPokemon && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: currentWorld === 'overworld' ? 'rgba(0,0,0,0.8)' : 'rgba(0,50,100,0.9)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}>
            <GameText size="large" centered>
              {currentWorld === 'overworld'
                ? 'Ein wildes Pokemon erscheint!'
                : 'Ein Wasser-Pokemon schwimmt vorbei!'}
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
