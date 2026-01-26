/**
 * GESCHICHTEN-SYSTEM / STORY SYSTEM
 * ==================================
 * Komponenten zum Erstellen von interaktiven Geschichten!
 * Components for creating interactive stories!
 *
 * Beispiel / Example:
 * ```tsx
 * import { StoryPlayer, createLinearStory, EnchantedForest } from './components';
 *
 * const myStory = createLinearStory('Mein Abenteuer', [
 *   {
 *     id: 'scene1',
 *     background: <EnchantedForest />,
 *     dialogue: ['Es war einmal...', 'Ein mutiger Held...'],
 *     transition: 'fade',
 *   },
 * ]);
 *
 * <StoryPlayer story={myStory} />
 * ```
 */

// Story Player & Types
export {
  StoryPlayer,
  createLinearStory,
  createBranchingStory,
  type Story,
  type StoryScene,
  type StoryChoice,
  type DialogLine,
  type MiniGameConfig,
  type MiniGameProps,
  type FindTargetConfig,
  // Game State / Spielstand
  type GameState,
  type StoryContext,
  type StateAction,
  // Interactive Story Building / Interaktives Story-Bauen
  type StoryBuildContext,
} from './StoryPlayer';

// Story Validation (JSON-based)
export {
  validateStoryJson,
  formatValidationResult,
  type ValidationResult,
  type ValidationError,
} from './StoryValidator';

// JSON Schema Types
export type {
  StoryJson,
  SceneJson,
  CharacterJson,
  ChoiceJson,
  FindTargetJson,
  StateActionJson,
  StorySchemaInfo,
  // Mini-game types
  MiniGameType,
  MiniGameJson,
  MiniGameBaseJson,
  CollectGameJson,
  DodgeGameJson,
  CatchGameJson,
  ClickGameJson,
  SnakeGameJson,
  RaceGameJson,
  FlappyGameJson,
} from './StorySchema';

// JSON Story Player
export { JsonStoryPlayer, useJsonStory } from './JsonStoryPlayer';

// Component Registry
export {
  getSprite,
  getBackground,
  getAvailableSprites,
  getAvailableBackgrounds,
  isValidSprite,
  isValidBackground,
  getSchemaInfo,
} from './ComponentRegistry';

// Transitions
export {
  Transition,
  MagicTransition,
  CinemaTransition,
  RetroTransition,
  CurtainTransition,
  IrisTransition,
  type TransitionType,
} from './Transitions';

// Scene Templates
export {
  // Wald / Forest
  EnchantedForest,
  DarkForest,
  // Wüste / Desert
  SandyDesert,
  // Ozean / Ocean
  DeepOcean,
  // Schloss / Castle
  CastleCourtyard,
  // Weltraum / Space
  OuterSpace,
  // Stadt / City
  CityStreet,
  // Bauernhof / Farm
  SunnyFarm,
  // Winter / Winter
  WinterWonderland,
  // Helfer / Helpers
  CharacterPosition,
} from './SceneTemplates';

// Mini-Game Templates
export {
  createCollectGame,
  createDodgeGame,
  createCatchGame,
  createClickGame,
  createSnakeGame,
  createFlappyGame,
  createRaceGame,
} from './MiniGameTemplates';
