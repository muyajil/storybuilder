/**
 * Mini-Game Preview Renderer
 * ==========================
 * Creates static visual previews of mini-games for PDF export.
 * Shows a representative snapshot of each game type.
 */

import type { ReactNode } from 'react';
import type { MiniGameJson } from '../story/StorySchema';
import { getSprite } from '../story/ComponentRegistry';

/**
 * Renders a static preview for a collect game
 */
function CollectGamePreview({ game }: { game: MiniGameJson & { type: 'collect' } }) {
  const PlayerSprite = getSprite(game.playerSprite);
  const CollectSprite = getSprite(game.collectSprite);
  const ObstacleSprite = game.obstacleSprite ? getSprite(game.obstacleSprite) : null;

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {/* Player at bottom center */}
      {PlayerSprite && (
        <div style={{ position: 'absolute', bottom: '15%', left: '45%' }}>
          <PlayerSprite size={60} />
        </div>
      )}
      {/* Collectibles scattered */}
      {CollectSprite && (
        <>
          <div style={{ position: 'absolute', top: '20%', left: '20%' }}><CollectSprite size={35} /></div>
          <div style={{ position: 'absolute', top: '35%', left: '60%' }}><CollectSprite size={35} /></div>
          <div style={{ position: 'absolute', top: '15%', left: '75%' }}><CollectSprite size={35} /></div>
          <div style={{ position: 'absolute', top: '40%', left: '35%' }}><CollectSprite size={35} /></div>
        </>
      )}
      {/* Obstacles */}
      {ObstacleSprite && (
        <>
          <div style={{ position: 'absolute', top: '50%', left: '15%' }}><ObstacleSprite size={40} /></div>
          <div style={{ position: 'absolute', top: '45%', left: '80%' }}><ObstacleSprite size={40} /></div>
        </>
      )}
      {/* Score display */}
      <div style={{
        position: 'absolute', top: 10, right: 10,
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: '#FFD700', fontSize: 16, fontWeight: 'bold'
      }}>
        0 / {game.targetScore}
      </div>
      {/* Control hint */}
      <div style={{
        position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: 'white', fontSize: 12
      }}>
        [Pfeiltasten] Bewegen
      </div>
    </div>
  );
}

// Similar functions for: DodgeGamePreview, CatchGamePreview, ClickGamePreview, SnakeGamePreview, RaceGamePreview, FlappyGamePreview

function DodgeGamePreview({ game }: { game: MiniGameJson & { type: 'dodge' } }) {
  const PlayerSprite = getSprite(game.playerSprite);
  const ObstacleSprite = getSprite(game.obstacleSprite);

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {PlayerSprite && (
        <div style={{ position: 'absolute', bottom: '15%', left: '45%' }}>
          <PlayerSprite size={60} />
        </div>
      )}
      {ObstacleSprite && (
        <>
          <div style={{ position: 'absolute', top: '10%', left: '30%' }}><ObstacleSprite size={45} /></div>
          <div style={{ position: 'absolute', top: '25%', left: '60%' }}><ObstacleSprite size={45} /></div>
          <div style={{ position: 'absolute', top: '40%', left: '20%' }}><ObstacleSprite size={45} /></div>
        </>
      )}
      <div style={{
        position: 'absolute', top: 10, right: 10,
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: '#FFD700', fontSize: 16, fontWeight: 'bold'
      }}>
        {game.surviveTime}s
      </div>
      <div style={{
        position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: 'white', fontSize: 12
      }}>
        [Pfeiltasten] Ausweichen
      </div>
    </div>
  );
}

function CatchGamePreview({ game }: { game: MiniGameJson & { type: 'catch' } }) {
  const PlayerSprite = getSprite(game.playerSprite);
  const ItemSprite = getSprite(game.itemSprite);

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {PlayerSprite && (
        <div style={{ position: 'absolute', bottom: '10%', left: '45%' }}>
          <PlayerSprite size={70} />
        </div>
      )}
      {ItemSprite && (
        <>
          <div style={{ position: 'absolute', top: '15%', left: '25%' }}><ItemSprite size={35} /></div>
          <div style={{ position: 'absolute', top: '30%', left: '55%' }}><ItemSprite size={35} /></div>
          <div style={{ position: 'absolute', top: '45%', left: '70%' }}><ItemSprite size={35} /></div>
        </>
      )}
      <div style={{
        position: 'absolute', top: 10, right: 10,
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: '#FFD700', fontSize: 16, fontWeight: 'bold'
      }}>
        0 / {game.targetScore}
      </div>
      <div style={{
        position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: 'white', fontSize: 12
      }}>
        [Links/Rechts] Fangen
      </div>
    </div>
  );
}

function ClickGamePreview({ game }: { game: MiniGameJson & { type: 'click' } }) {
  const TargetSprite = getSprite(game.targetSprite);

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {TargetSprite && (
        <>
          <div style={{ position: 'absolute', top: '25%', left: '30%' }}><TargetSprite size={50} /></div>
          <div style={{ position: 'absolute', top: '45%', left: '60%' }}><TargetSprite size={50} /></div>
          <div style={{ position: 'absolute', top: '60%', left: '25%' }}><TargetSprite size={50} /></div>
        </>
      )}
      {/* Cursor indicator */}
      <div style={{
        position: 'absolute', top: '40%', left: '55%',
        fontSize: 30, color: 'white', textShadow: '2px 2px 4px black'
      }}>
        +
      </div>
      <div style={{
        position: 'absolute', top: 10, right: 10,
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: '#FFD700', fontSize: 16, fontWeight: 'bold'
      }}>
        0 / {game.targetScore}
      </div>
      <div style={{
        position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: 'white', fontSize: 12
      }}>
        [Klicken] Treffen
      </div>
    </div>
  );
}

function SnakeGamePreview({ game }: { game: MiniGameJson & { type: 'snake' } }) {
  const FoodSprite = getSprite(game.foodSprite);

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {/* Snake body segments */}
      <div style={{ position: 'absolute', top: '45%', left: '40%', width: 20, height: 20, backgroundColor: '#4CAF50', borderRadius: 4 }} />
      <div style={{ position: 'absolute', top: '45%', left: '35%', width: 20, height: 20, backgroundColor: '#66BB6A', borderRadius: 4 }} />
      <div style={{ position: 'absolute', top: '45%', left: '30%', width: 20, height: 20, backgroundColor: '#81C784', borderRadius: 4 }} />
      {FoodSprite && (
        <div style={{ position: 'absolute', top: '30%', left: '60%' }}><FoodSprite size={30} /></div>
      )}
      <div style={{
        position: 'absolute', top: 10, right: 10,
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: '#FFD700', fontSize: 16, fontWeight: 'bold'
      }}>
        3 / {game.targetLength}
      </div>
      <div style={{
        position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: 'white', fontSize: 12
      }}>
        [Pfeiltasten] Steuern
      </div>
    </div>
  );
}

function FlappyGamePreview({ game }: { game: MiniGameJson & { type: 'flappy' } }) {
  const PlayerSprite = getSprite(game.playerSprite);
  const CollectSprite = game.collectSprite ? getSprite(game.collectSprite) : null;

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {/* Pipe obstacles */}
      <div style={{ position: 'absolute', top: 0, left: '60%', width: 40, height: '35%', backgroundColor: '#4CAF50', borderRadius: '0 0 8px 8px' }} />
      <div style={{ position: 'absolute', bottom: 0, left: '60%', width: 40, height: '40%', backgroundColor: '#4CAF50', borderRadius: '8px 8px 0 0' }} />
      {PlayerSprite && (
        <div style={{ position: 'absolute', top: '40%', left: '25%' }}>
          <PlayerSprite size={50} />
        </div>
      )}
      {CollectSprite && (
        <div style={{ position: 'absolute', top: '45%', left: '75%' }}><CollectSprite size={25} /></div>
      )}
      <div style={{
        position: 'absolute', top: 10, right: 10,
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: '#FFD700', fontSize: 16, fontWeight: 'bold'
      }}>
        0 / {game.targetScore}
      </div>
      <div style={{
        position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: 'white', fontSize: 12
      }}>
        [Leertaste] Fliegen
      </div>
    </div>
  );
}

function RaceGamePreview({ game }: { game: MiniGameJson & { type: 'race' } }) {
  const PlayerSprite = getSprite(game.playerSprite);
  const ObstacleSprite = game.obstacleSprite ? getSprite(game.obstacleSprite) : null;

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {/* Road lanes */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: '20%', width: '60%', backgroundColor: 'rgba(100,100,100,0.3)' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '33%', width: 2, backgroundColor: 'rgba(255,255,255,0.3)' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '66%', width: 2, backgroundColor: 'rgba(255,255,255,0.3)' }} />
      </div>
      {PlayerSprite && (
        <div style={{ position: 'absolute', bottom: '20%', left: '45%' }}>
          <PlayerSprite size={50} />
        </div>
      )}
      {ObstacleSprite && (
        <>
          <div style={{ position: 'absolute', top: '30%', left: '30%' }}><ObstacleSprite size={40} /></div>
          <div style={{ position: 'absolute', top: '50%', left: '60%' }}><ObstacleSprite size={40} /></div>
        </>
      )}
      <div style={{
        position: 'absolute', top: 10, right: 10,
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: '#FFD700', fontSize: 16, fontWeight: 'bold'
      }}>
        START
      </div>
      <div style={{
        position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px',
        borderRadius: 8, color: 'white', fontSize: 12
      }}>
        [Links/Rechts] Spur wechseln
      </div>
    </div>
  );
}

/**
 * Main function to render a mini-game preview overlay
 */
export function renderMiniGamePreview(
  miniGame: MiniGameJson,
  _width: number,
  _height: number
): ReactNode {
  switch (miniGame.type) {
    case 'collect':
      return <CollectGamePreview game={miniGame as MiniGameJson & { type: 'collect' }} />;
    case 'dodge':
      return <DodgeGamePreview game={miniGame as MiniGameJson & { type: 'dodge' }} />;
    case 'catch':
      return <CatchGamePreview game={miniGame as MiniGameJson & { type: 'catch' }} />;
    case 'click':
      return <ClickGamePreview game={miniGame as MiniGameJson & { type: 'click' }} />;
    case 'snake':
      return <SnakeGamePreview game={miniGame as MiniGameJson & { type: 'snake' }} />;
    case 'flappy':
      return <FlappyGamePreview game={miniGame as MiniGameJson & { type: 'flappy' }} />;
    case 'race':
      return <RaceGamePreview game={miniGame as MiniGameJson & { type: 'race' }} />;
    default:
      return null;
  }
}

/**
 * Check if a mini-game has the required sprite data for preview rendering
 */
export function canRenderMiniGamePreview(miniGame: MiniGameJson): boolean {
  switch (miniGame.type) {
    case 'collect':
      return !!(miniGame as any).playerSprite && !!(miniGame as any).collectSprite;
    case 'dodge':
      return !!(miniGame as any).playerSprite && !!(miniGame as any).obstacleSprite;
    case 'catch':
      return !!(miniGame as any).playerSprite && !!(miniGame as any).itemSprite;
    case 'click':
      return !!(miniGame as any).targetSprite;
    case 'snake':
      return !!(miniGame as any).foodSprite;
    case 'flappy':
      return !!(miniGame as any).playerSprite;
    case 'race':
      return !!(miniGame as any).playerSprite;
    default:
      return false;
  }
}
