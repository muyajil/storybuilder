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
} from './StoryPlayer';

// Story Validation
export {
  validateStory,
  printValidationSummary,
  assertValidStory,
  useStoryValidation,
  type ValidationResult,
  type ValidationError,
  type ValidationWarning,
  type StoryGraph,
} from './StoryValidator';

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
