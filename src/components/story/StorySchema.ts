/**
 * JSON Schema for Stories
 * =======================
 * Complete JSON structure for creating interactive stories.
 * The agent only works with JSON - no code knowledge needed!
 *
 * ALL possible configurations are exposed here.
 */

// ============================================
// TRANSITIONS
// ============================================

export type TransitionType = 'none' | 'fade' | 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down' | 'zoom' | 'magic' | 'cinema' | 'retro' | 'curtain' | 'iris';

// ============================================
// DIALOGUE
// ============================================

export type DialoguePosition = 'top' | 'center' | 'bottom';

export interface DialogueLineJson {
  text: string;                 // The spoken text
  speaker?: string;             // Who's speaking (shown as name)
  position?: DialoguePosition;  // Where to show (default: bottom)
  emotion?: string;             // Emotion indicator
  delay?: number;               // Delay before showing (ms)
}

// ============================================
// CHARACTERS & SPRITES
// ============================================

export interface CharacterJson {
  sprite: string;               // e.g. "Princess", "Parrot", "Shark"
  position: 'left' | 'center' | 'right';
  size: number;                 // 10-300
  bottom?: number;              // offset from bottom (default: 80)
  flipX?: boolean;              // Mirror horizontally
  animation?: 'idle' | 'bounce' | 'shake' | 'pulse';
}

// Environment object (decorations, items in scene)
export interface EnvironmentObjectJson {
  sprite: string;               // e.g. "Tree", "Rock", "Flower"
  x: number;                    // 0-100 (percentage from left)
  y: number;                    // 0-100 (percentage from top)
  size: number;
  layer?: 'background' | 'foreground';  // Behind or in front of characters
}

// ============================================
// CHOICES & NAVIGATION
// ============================================

export interface ChoiceJson {
  text: string;                 // Button text, can include emoji
  nextSceneId: string;          // Which scene to go to

  // Requirements (all must be met)
  requiresItems?: string[];     // Items player must have
  requiresFlags?: string[];     // Flags that must be set
  requiresTasks?: string[];     // Tasks that must be completed

  // Display when locked
  showWhenLocked?: boolean;     // Show greyed out if requirements not met
  lockedText?: string;          // Text to show when locked

  // Styling
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
}

// ============================================
// INTERACTIVE ELEMENTS
// ============================================

// Find target - click to find something hidden
export interface FindTargetJson {
  sprite: string;               // What to find, e.g. "Starfish"
  size: number;                 // Size of the target
  position: {
    x: number;                  // 0-100 (percentage from left)
    y: number;                  // 0-100 (percentage from top)
  };
  hint: string;                 // Help text shown
  foundText: string;            // Text when found
  nextSceneId: string;          // Where to go after finding

  // Optional
  glowColor?: string;           // Glow effect when hovering near
  maxAttempts?: number;         // Max wrong clicks allowed
}

// ============================================
// MINI-GAMES
// ============================================

export type MiniGameType = 'collect' | 'dodge' | 'catch' | 'click' | 'snake' | 'race' | 'flappy';

// Shared mini-game config
export interface MiniGameBaseJson {
  type: MiniGameType;
  successSceneId: string;       // Scene on win
  failSceneId?: string;         // Scene on lose (optional, can retry)

  // Display
  title?: string;               // Game title shown
  instructions?: string;        // How to play

  // Difficulty
  difficulty?: 'easy' | 'medium' | 'hard';
}

// Collect game - move around collecting items, avoid obstacles
export interface CollectGameJson extends MiniGameBaseJson {
  type: 'collect';
  playerSprite: string;         // e.g. "Princess"
  collectSprite: string;        // What to collect, e.g. "Star"
  obstacleSprite?: string;      // What to avoid, e.g. "Rock"
  targetScore: number;          // How many to collect to win
  timeLimit?: number;           // Seconds (default: 30)
  playerSpeed?: number;         // Movement speed multiplier
  spawnRate?: number;           // How fast items appear
}

// Dodge game - avoid falling/moving objects
export interface DodgeGameJson extends MiniGameBaseJson {
  type: 'dodge';
  playerSprite: string;
  obstacleSprite: string;       // What to dodge
  surviveTime: number;          // Seconds to survive
  obstacleSpeed?: number;       // How fast obstacles move
  spawnRate?: number;           // How often obstacles spawn
}

// Catch game - catch falling items
export interface CatchGameJson extends MiniGameBaseJson {
  type: 'catch';
  playerSprite: string;         // The catcher (moves at bottom)
  itemSprite: string;           // What to catch
  badItemSprite?: string;       // Items to avoid
  targetScore: number;          // How many to catch
  timeLimit?: number;
  fallSpeed?: number;           // How fast items fall
}

// Click game - click targets that appear
export interface ClickGameJson extends MiniGameBaseJson {
  type: 'click';
  targetSprite: string;         // What to click
  badTargetSprite?: string;     // What NOT to click
  targetScore: number;          // How many to click
  timeLimit?: number;
  targetDuration?: number;      // How long targets stay visible
}

// Snake game - classic snake
export interface SnakeGameJson extends MiniGameBaseJson {
  type: 'snake';
  foodSprite: string;           // What the snake eats
  targetLength: number;         // Snake length to win
  snakeSpeed?: number;          // Movement speed
  wallsKill?: boolean;          // Die when hitting walls
}

// Race game - reach the finish
export interface RaceGameJson extends MiniGameBaseJson {
  type: 'race';
  playerSprite: string;
  obstacleSprite?: string;
  collectSprite?: string;       // Optional items to collect for boost
  finishLine?: number;          // Position to reach (percentage)
  laneCount?: number;           // Number of lanes (default: 3)
}

// Flappy game - tap to fly, avoid obstacles
export interface FlappyGameJson extends MiniGameBaseJson {
  type: 'flappy';
  playerSprite: string;
  obstacleSprite?: string;      // Pipe-like obstacles
  collectSprite?: string;       // Optional coins
  targetScore: number;          // Points to win
  gravity?: number;             // How fast player falls
  flapStrength?: number;        // How high each tap goes
  gapSize?: number;             // Space between obstacles
}

// Union type for all mini-games
export type MiniGameJson =
  | CollectGameJson
  | DodgeGameJson
  | CatchGameJson
  | ClickGameJson
  | SnakeGameJson
  | RaceGameJson
  | FlappyGameJson;

// ============================================
// STATE ACTIONS
// ============================================

export type StateActionType = 'add_item' | 'remove_item' | 'set_flag' | 'clear_flag' | 'complete_task' | 'add_score';

export interface StateActionJson {
  type: StateActionType;

  // For item actions
  item?: string;

  // For flag actions
  flag?: string;

  // For task actions
  task?: string;

  // For score actions
  score?: number;

  // Feedback
  message?: string;             // Message to display
  sound?: string;               // Sound effect to play
}

// ============================================
// SCENES
// ============================================

export interface SceneJson {
  id: string;                   // Unique ID, e.g. "start", "forest_path"

  // Visual
  background: string;           // e.g. "DeepOcean", "EnchantedForest"
  characters: CharacterJson[];
  environmentObjects?: EnvironmentObjectJson[];  // Additional decorations

  // Dialogue
  dialogue: string[] | DialogueLineJson[];  // Simple strings or detailed objects

  // Transition
  transition?: TransitionType;
  transitionDuration?: number;  // Milliseconds

  // Audio
  music?: string;               // Background music URL
  ambientSound?: string;        // Ambient sound URL

  // Interactive elements (pick one per scene)
  choices?: ChoiceJson[];
  findTarget?: FindTargetJson;
  miniGame?: MiniGameJson;

  // Auto-advance (if no choices/interactive elements)
  autoAdvance?: {
    nextSceneId: string;
    delay?: number;             // Milliseconds before advancing
  };

  // State actions
  onEnterActions?: StateActionJson[];
  onFindTargetActions?: StateActionJson[];
  onMiniGameWinActions?: StateActionJson[];
  onMiniGameLoseActions?: StateActionJson[];

  // Conditions (simplified - evaluated as item/flag checks)
  showIf?: {
    hasItems?: string[];
    hasFlags?: string[];
    completedTasks?: string[];
  };
}

// ============================================
// STORY
// ============================================

export interface StoryJson {
  id: string;                   // Unique game ID
  title: string;                // Display title
  description: string;          // Short description
  author: string;               // Creator name

  // Metadata
  version?: string;
  language?: string;            // e.g. "de", "en"
  ageRating?: string;           // e.g. "3+", "6+"
  tags?: string[];              // e.g. ["adventure", "princess", "ocean"]

  // Settings
  settings?: {
    canvasWidth?: number;       // Default: 800
    canvasHeight?: number;      // Default: 500
    defaultTransition?: TransitionType;
    showInventory?: boolean;    // Show collected items
    allowRestart?: boolean;     // Show restart button
  };

  // Content
  scenes: SceneJson[];

  // Initial state
  initialState?: {
    items?: string[];           // Starting items
    flags?: string[];           // Starting flags
  };
}

// ============================================
// SCHEMA INFO (for agent)
// ============================================

export interface StorySchemaInfo {
  // Available assets
  sprites: {
    animals: string[];
    characters: string[];
    environment: string[];
    effects: string[];
  };
  backgrounds: string[];

  // Valid values
  positions: ('left' | 'center' | 'right')[];
  transitions: TransitionType[];
  miniGameTypes: MiniGameType[];
  stateActionTypes: StateActionType[];
  dialoguePositions: DialoguePosition[];

  // Templates
  templates: {
    story: Partial<StoryJson>;
    scene: Partial<SceneJson>;
    character: CharacterJson;
    choice: ChoiceJson;
    findTarget: FindTargetJson;
    dialogue: DialogueLineJson;
    miniGames: Record<MiniGameType, MiniGameJson>;
    stateActions: Record<StateActionType, StateActionJson>;
  };

  // Validation rules summary
  rules: {
    maxScenes: number;
    maxChoicesPerScene: number;
    maxCharactersPerScene: number;
    maxDialogueLines: number;
    sizeRange: { min: number; max: number };
    positionRange: { min: number; max: number };
  };
}
