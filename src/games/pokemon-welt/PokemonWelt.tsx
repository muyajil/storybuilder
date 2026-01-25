import { useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { GameCanvas, GameText, GameButton } from '../../components';
import { useKeyboard, useGameLoop, clamp, randomIntBetween } from '../../hooks';
import {
  PixelPlayer,
  PixelGrass,
  PixelTallGrass,
  PixelTree,
  PixelWater,
  PixelPath,
  PixelHouse,
  PixelDeepWater,
  PixelSeaweed,
  PixelCoral,
  PixelSand,
  PixelBug,
  PixelBird,
  PixelRat,
  PixelFish,
  PixelJelly,
  PixelCrab,
} from '../../sprites';

/**
 * POKEMON WELT - GAMEBOY STYLE
 * ============================
 * Ein Pokemon-ähnliches Spiel im Retro Gameboy Look!
 */

const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;
const TILE_SIZE = 32;
const PLAYER_SPEED = 150;

type TileType = 'grass' | 'tall_grass' | 'tree' | 'water' | 'path' | 'house' | 'seaweed' | 'coral' | 'deep_water' | 'sand';
type Direction = 'up' | 'down' | 'left' | 'right';
type WorldType = 'overworld' | 'waterworld';

interface WorldTile {
  type: TileType;
  x: number;
  y: number;
}

interface Pokemon {
  name: string;
  component: ReactNode;
}

// Pokemon lists
const landPokemon: Pokemon[] = [
  { name: 'Käfer', component: <PixelBug size={64} /> },
  { name: 'Vogel', component: <PixelBird size={64} /> },
  { name: 'Ratte', component: <PixelRat size={64} /> },
];

const waterPokemon: Pokemon[] = [
  { name: 'Fisch', component: <PixelFish size={64} /> },
  { name: 'Qualle', component: <PixelJelly size={64} /> },
  { name: 'Krabbe', component: <PixelCrab size={64} /> },
];

// Tile components
const TileComponents: Record<TileType, React.FC<{ size: number }>> = {
  grass: PixelGrass,
  tall_grass: PixelTallGrass,
  tree: PixelTree,
  water: PixelWater,
  path: PixelPath,
  house: PixelHouse,
  deep_water: PixelDeepWater,
  seaweed: PixelSeaweed,
  coral: PixelCoral,
  sand: PixelSand,
};

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

  const houseX = Math.floor(cols / 2) * TILE_SIZE;
  const houseY = 2 * TILE_SIZE;
  const houseIndex = tiles.findIndex(t => t.x === houseX && t.y === houseY);
  if (houseIndex >= 0) tiles[houseIndex] = { type: 'house', x: houseX, y: houseY };

  for (let py = 3; py < 6; py++) {
    const pathIndex = tiles.findIndex(t => t.x === houseX && t.y === py * TILE_SIZE);
    if (pathIndex >= 0) tiles[pathIndex] = { type: 'path', x: houseX, y: py * TILE_SIZE };
  }

  return tiles;
}

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

  const portalX = Math.floor(cols / 2) * TILE_SIZE;
  const portalY = 2 * TILE_SIZE;
  const portalIndex = tiles.findIndex(t => t.x === portalX && t.y === portalY);
  if (portalIndex >= 0) tiles[portalIndex] = { type: 'coral', x: portalX, y: portalY };

  return tiles;
}

export function PokemonWelt() {
  const [overworld] = useState(() => generateOverworld());
  const [waterWorld] = useState(() => generateWaterWorld());
  const [currentWorld, setCurrentWorld] = useState<WorldType>('overworld');

  const [playerX, setPlayerX] = useState(CANVAS_WIDTH / 2);
  const [playerY, setPlayerY] = useState(CANVAS_HEIGHT / 2);
  const [direction, setDirection] = useState<Direction>('down');
  const [pokemonCount, setPokemonCount] = useState(0);
  const [encounteredPokemon, setEncounteredPokemon] = useState<Pokemon | null>(null);
  const [caughtPokemon, setCaughtPokemon] = useState<Pokemon[]>([]);
  const [teleportAnimation, setTeleportAnimation] = useState(false);

  const keys = useKeyboard();

  const world = currentWorld === 'overworld' ? overworld : waterWorld;
  const currentPokemonList = currentWorld === 'overworld' ? landPokemon : waterPokemon;

  const teleportTo = useCallback((targetWorld: WorldType) => {
    setTeleportAnimation(true);
    setTimeout(() => {
      setCurrentWorld(targetWorld);
      setPlayerX(CANVAS_WIDTH / 2);
      setPlayerY(CANVAS_HEIGHT / 2);
      setTeleportAnimation(false);
    }, 1000);
  }, []);

  const getTileAt = useCallback((x: number, y: number) => {
    return world.find(t =>
      x >= t.x && x < t.x + TILE_SIZE &&
      y >= t.y && y < t.y + TILE_SIZE
    );
  }, [world]);

  const isBlocked = useCallback((x: number, y: number) => {
    const tile = getTileAt(x, y);
    if (currentWorld === 'overworld') {
      return tile && (tile.type === 'tree' || tile.type === 'house');
    }
    return false;
  }, [getTileAt, currentWorld]);

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

  useGameLoop((deltaTime) => {
    if (encounteredPokemon || teleportAnimation) return;

    let newX = playerX;
    let newY = playerY;
    let moved = false;
    let newDir = direction;

    if (keys.ArrowUp || keys.w || keys.W) {
      newY -= PLAYER_SPEED * deltaTime;
      newDir = 'up';
      moved = true;
    }
    if (keys.ArrowDown || keys.s || keys.S) {
      newY += PLAYER_SPEED * deltaTime;
      newDir = 'down';
      moved = true;
    }
    if (keys.ArrowLeft || keys.a || keys.A) {
      newX -= PLAYER_SPEED * deltaTime;
      newDir = 'left';
      moved = true;
    }
    if (keys.ArrowRight || keys.d || keys.D) {
      newX += PLAYER_SPEED * deltaTime;
      newDir = 'right';
      moved = true;
    }

    if (moved) setDirection(newDir);

    if (!isBlocked(newX + 16, newY + 16)) {
      newX = clamp(newX, TILE_SIZE, CANVAS_WIDTH - TILE_SIZE * 2);
      newY = clamp(newY, TILE_SIZE, CANVAS_HEIGHT - TILE_SIZE * 2);
      setPlayerX(newX);
      setPlayerY(newY);

      const tile = getTileAt(newX + 16, newY + 16);

      if (currentWorld === 'overworld' && tile?.type === 'water') {
        teleportTo('waterworld');
        return;
      }

      if (currentWorld === 'waterworld' && tile?.type === 'coral') {
        teleportTo('overworld');
        return;
      }

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

  const bgColor = currentWorld === 'overworld' ? '#9bbc0f' : '#0a3060';
  const worldName = currentWorld === 'overworld' ? 'Pokemon Welt' : 'Unterwasser';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <h2 style={{ color: 'white', margin: 0, fontFamily: 'monospace' }}>{worldName}</h2>

      <GameCanvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} backgroundColor={bgColor}>
        {/* Render tiles */}
        {world.map((tile, i) => {
          const TileComponent = TileComponents[tile.type];
          return (
            <div key={i} style={{ position: 'absolute', left: tile.x, top: tile.y }}>
              <TileComponent size={TILE_SIZE} />
            </div>
          );
        })}

        {/* Player */}
        <div style={{ position: 'absolute', left: playerX, top: playerY }}>
          <PixelPlayer size={TILE_SIZE} direction={direction} />
        </div>

        {/* UI */}
        <div style={{
          position: 'absolute',
          top: 8,
          left: 8,
          background: 'rgba(0,0,0,0.7)',
          padding: '4px 8px',
          borderRadius: 4,
        }}>
          <GameText size="medium">Pokemon: {pokemonCount}</GameText>
        </div>

        {/* Caught Pokemon */}
        <div style={{
          position: 'absolute',
          top: 40,
          left: 8,
          display: 'flex',
          gap: 4,
          flexWrap: 'wrap',
          maxWidth: 200,
        }}>
          {caughtPokemon.map((p, i) => (
            <div key={i} style={{ width: 24, height: 24 }}>
              {p.component}
            </div>
          ))}
        </div>

        <div style={{
          position: 'absolute',
          bottom: 8,
          left: 8,
          background: 'rgba(0,0,0,0.7)',
          padding: '4px 8px',
          borderRadius: 4,
        }}>
          <GameText size="small" color="#ccc">
            {currentWorld === 'overworld'
              ? 'Wasser = Tauchen | Hohes Gras = Pokemon'
              : 'Koralle = Auftauchen | Überall = Pokemon'}
          </GameText>
        </div>

        {/* Teleport Animation */}
        {teleportAnimation && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: currentWorld === 'overworld' ? '#0a3060' : '#9bbc0f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <GameText size="huge" centered color="white" style={{ fontFamily: 'monospace' }}>
              {currentWorld === 'overworld' ? '~ TAUCHE AB ~' : '~ AUFTAUCHEN ~'}
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
            backgroundColor: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}>
            <GameText size="large" centered style={{ fontFamily: 'monospace' }}>
              Ein wildes {encounteredPokemon.name} erscheint!
            </GameText>
            <div style={{ transform: 'scale(2)' }}>
              {encounteredPokemon.component}
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <GameButton onClick={catchPokemon} color="success">
                Fangen!
              </GameButton>
              <GameButton onClick={runAway} color="secondary">
                Flucht
              </GameButton>
            </div>
          </div>
        )}
      </GameCanvas>
    </div>
  );
}
