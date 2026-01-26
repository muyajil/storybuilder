/**
 * JSON Story Player
 * =================
 * Transforms JSON story data into a playable React game.
 * The agent only needs to provide JSON - this handles all the React stuff.
 */

import { useMemo } from 'react';
import { StoryPlayer, createLinearStory } from './StoryPlayer';
import { CharacterPosition } from './SceneTemplates';
import { getSprite, getBackground } from './ComponentRegistry';
import {
  createCollectGame,
  createDodgeGame,
  createCatchGame,
  createClickGame,
  createSnakeGame,
  createFlappyGame,
  createRaceGame,
} from './MiniGameTemplates';
import type { StoryJson, SceneJson, CharacterJson, StateActionJson, DialogueLineJson, MiniGameJson } from './StorySchema';
import type { SimpleScene, StoryChoice, FindTargetConfig, StateAction, MiniGameConfig } from './StoryPlayer';

// Normalize dialogue to string array (handles both string[] and DialogueLineJson[])
function normalizeDialogue(dialogue: string[] | DialogueLineJson[]): string[] {
  return dialogue.map(d => typeof d === 'string' ? d : d.text);
}

interface JsonStoryPlayerProps {
  story: StoryJson;
  width?: number;
  height?: number;
}

// Transform a character JSON to React elements
function renderCharacter(char: CharacterJson, index: number) {
  const SpriteComponent = getSprite(char.sprite);
  if (!SpriteComponent) {
    console.warn(`Unknown sprite: ${char.sprite}`);
    return null;
  }

  return (
    <CharacterPosition
      key={index}
      position={char.position}
      bottom={char.bottom ?? 80}
    >
      <SpriteComponent size={char.size} />
    </CharacterPosition>
  );
}

// Transform characters array to React elements
function renderCharacters(characters: CharacterJson[]) {
  if (!characters || characters.length === 0) return null;

  const rendered = characters.map((char, i) => renderCharacter(char, i));

  if (rendered.length === 1) {
    return rendered[0];
  }

  return <>{rendered}</>;
}

// Transform state action JSON to StateAction
function transformStateAction(action: StateActionJson): StateAction {
  if (action.type === 'add_item') {
    return {
      type: 'add_item',
      item: action.item || '',
      message: action.message,
    };
  } else {
    return {
      type: 'complete_task',
      task: action.task || '',
    };
  }
}

// Transform mini-game JSON to MiniGameConfig
function transformMiniGame(miniGame: MiniGameJson): MiniGameConfig | undefined {
  const { type } = miniGame;

  // Helper to get sprite element - use simple emoji fallback for mini-games
  const getSpriteElement = (spriteName: string, size: number = 40) => {
    // Use simple emoji/div for reliability in mini-games
    const emojiMap: Record<string, string> = {
      'Star': '⭐',
      'Coin': '🪙',
      'Gem': '💎',
      'Heart': '❤️',
      'Apple': '🍎',
      'Banana': '🍌',
      'Fish': '🐟',
      'Rock': '🪨',
      'Fox': '🦊',
      'Rabbit': '🐰',
      'Princess': '👸',
      'Knight': '🗡️',
      'Wizard': '🧙',
      'Dragon': '🐉',
      'Ninja': '🥷',
      'LightningNinja': '⚡',
      'RainbowNinja': '🌈',
    };

    const emoji = emojiMap[spriteName];
    if (emoji) {
      return (
        <div style={{
          fontSize: size * 0.8,
          lineHeight: 1,
          textAlign: 'center',
        }}>
          {emoji}
        </div>
      );
    }

    // Fallback to actual sprite component wrapped properly
    const SpriteComp = getSprite(spriteName);
    if (!SpriteComp) return null;
    return (
      <div style={{ position: 'relative', width: size, height: size, overflow: 'hidden' }}>
        <SpriteComp size={size} />
      </div>
    );
  };

  switch (type) {
    case 'collect': {
      const playerSprite = getSpriteElement(miniGame.playerSprite, 50);
      const itemSprite = getSpriteElement(miniGame.collectSprite, 30);
      if (!playerSprite || !itemSprite) return undefined;

      return {
        component: createCollectGame({
          playerSprite,
          itemSprite,
          itemsToWin: miniGame.targetScore || 5,
          playerSpeed: miniGame.playerSpeed ? miniGame.playerSpeed * 100 : 200,
          spawnRate: miniGame.spawnRate ? 1000 / miniGame.spawnRate : 1500,
        }),
        instructions: miniGame.instructions || `Sammle ${miniGame.targetScore || 5} Items!`,
      };
    }

    case 'dodge': {
      const playerSprite = getSpriteElement(miniGame.playerSprite, 50);
      const obstacleSprite = getSpriteElement(miniGame.obstacleSprite, 40);
      if (!playerSprite || !obstacleSprite) return undefined;

      return {
        component: createDodgeGame({
          playerSprite,
          obstacleSprite,
          survivalTime: (miniGame.surviveTime || 15) * 1000,
          obstacleSpeed: miniGame.obstacleSpeed ? miniGame.obstacleSpeed * 50 : 150,
        }),
        instructions: miniGame.instructions || `Überlebe ${miniGame.surviveTime || 15} Sekunden!`,
      };
    }

    case 'catch': {
      const playerSprite = getSpriteElement(miniGame.playerSprite, 60);
      const itemSprite = getSpriteElement(miniGame.itemSprite, 30);
      if (!playerSprite || !itemSprite) return undefined;

      return {
        component: createCatchGame({
          playerSprite,
          itemSprite,
          itemsToWin: miniGame.targetScore || 5,
          fallSpeed: miniGame.fallSpeed ? miniGame.fallSpeed * 50 : 100,
        }),
        instructions: miniGame.instructions || `Fange ${miniGame.targetScore || 5} Items!`,
      };
    }

    case 'click': {
      const targetSprite = getSpriteElement(miniGame.targetSprite, 40);
      if (!targetSprite) return undefined;

      // Handle both 'targetScore' (from schema) and 'targetCount' (from user JSON)
      const clicksToWin = miniGame.targetScore || (miniGame as unknown as { targetCount?: number }).targetCount || 5;

      return {
        component: createClickGame({
          targetSprite,
          clicksToWin,
          timePerTarget: miniGame.targetDuration || 2000,
        }),
        instructions: miniGame.instructions || `Klicke auf ${clicksToWin} Ziele!`,
      };
    }

    case 'snake': {
      // Snake game requires more sprites - use defaults
      const foodSprite = getSpriteElement(miniGame.foodSprite, 20);
      const headSprite = getSpriteElement('Snake', 20) || <div style={{ width: 20, height: 20, backgroundColor: '#4CAF50', borderRadius: 4 }} />;
      const bodySprite = <div style={{ width: 18, height: 18, backgroundColor: '#8BC34A', borderRadius: 2 }} />;

      return {
        component: createSnakeGame({
          headSprite,
          bodySprite,
          foodSprite: foodSprite || <div style={{ width: 16, height: 16, backgroundColor: '#FF5722', borderRadius: '50%' }} />,
        }),
        instructions: miniGame.instructions || `Werde ${miniGame.targetLength || 10} lang!`,
      };
    }

    case 'flappy': {
      const playerSprite = getSpriteElement(miniGame.playerSprite, 40);
      if (!playerSprite) return undefined;

      // Flappy requires top/bottom obstacle sprites - use defaults
      const obstacleTop = <div style={{ width: 60, height: '100%', backgroundColor: '#4CAF50', borderRadius: '0 0 8px 8px' }} />;
      const obstacleBottom = <div style={{ width: 60, height: '100%', backgroundColor: '#4CAF50', borderRadius: '8px 8px 0 0' }} />;

      return {
        component: createFlappyGame({
          playerSprite,
          obstacleTopSprite: obstacleTop,
          obstacleBottomSprite: obstacleBottom,
        }),
        instructions: miniGame.instructions || `Erreiche ${miniGame.targetScore || 5} Punkte!`,
      };
    }

    case 'race': {
      const playerSprite = getSpriteElement(miniGame.playerSprite, 50);
      const obstacleSprite = getSpriteElement(miniGame.obstacleSprite || 'Rock', 40);
      if (!playerSprite) return undefined;

      return {
        component: createRaceGame({
          playerSprite,
          obstacleSprite: obstacleSprite || <div style={{ width: 40, height: 40, backgroundColor: '#795548', borderRadius: 8 }} />,
        }),
        instructions: miniGame.instructions || 'Erreiche das Ziel!',
      };
    }

    default:
      console.warn(`Unknown mini-game type: ${type}`);
      return undefined;
  }
}

// Transform a scene JSON to SimpleScene
function transformScene(scene: SceneJson, width: number, height: number): SimpleScene {
  const BackgroundComponent = getBackground(scene.background);

  const result: SimpleScene = {
    id: scene.id,
    background: BackgroundComponent ? <BackgroundComponent width={width} height={height} /> : null,
    characters: renderCharacters(scene.characters),
    dialogue: normalizeDialogue(scene.dialogue),
  };

  // Transform choices
  if (scene.choices && scene.choices.length > 0) {
    result.choices = scene.choices.map((choice): StoryChoice => ({
      text: choice.text,
      nextSceneId: choice.nextSceneId,
      requiresItems: choice.requiresItems,
      showWhenLocked: choice.showWhenLocked,
      lockedText: choice.lockedText,
    }));
  }

  // Transform findTarget
  if (scene.findTarget) {
    const TargetSprite = getSprite(scene.findTarget.sprite);
    if (TargetSprite) {
      result.findTarget = {
        target: <TargetSprite size={scene.findTarget.size} />,
        position: scene.findTarget.position,
        hint: scene.findTarget.hint,
        foundText: scene.findTarget.foundText,
        nextSceneId: scene.findTarget.nextSceneId,
      } as FindTargetConfig;
    }
  }

  // Transform mini-game
  if (scene.miniGame) {
    const miniGameConfig = transformMiniGame(scene.miniGame);
    if (miniGameConfig) {
      result.miniGame = miniGameConfig;
      // Extract navigation scene IDs from mini-game to scene level
      if (scene.miniGame.successSceneId) {
        result.onGameWinSceneId = scene.miniGame.successSceneId;
      }
      if (scene.miniGame.failSceneId) {
        result.onGameLoseSceneId = scene.miniGame.failSceneId;
      }
    }
  }

  // Transform state actions
  if (scene.onEnterActions && scene.onEnterActions.length > 0) {
    result.onEnterActions = scene.onEnterActions.map(transformStateAction);
  }

  if (scene.onFindTargetActions && scene.onFindTargetActions.length > 0) {
    result.onFindTargetActions = scene.onFindTargetActions.map(transformStateAction);
  }

  return result;
}

// Transform entire story JSON to internal format
function transformStory(storyJson: StoryJson, width: number, height: number) {
  const scenes = storyJson.scenes.map(scene => transformScene(scene, width, height));
  return createLinearStory(storyJson.title, scenes);
}

/**
 * JsonStoryPlayer - renders a story from JSON data
 */
export function JsonStoryPlayer({ story, width = 800, height = 500 }: JsonStoryPlayerProps) {
  // Memoize the transformation
  const transformedStory = useMemo(
    () => transformStory(story, width, height),
    [story, width, height]
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <StoryPlayer story={transformedStory} width={width} height={height} />
    </div>
  );
}

// Export a hook to load stories from JSON files
export function useJsonStory(storyJson: StoryJson, width = 800, height = 500) {
  return useMemo(
    () => transformStory(storyJson, width, height),
    [storyJson, width, height]
  );
}
