import { useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { Transition } from './Transitions';
import type { TransitionType } from './Transitions';
import { useStoryBuild } from '../StoryBuildProvider';

/**
 * GESCHICHTEN-SPIELER / STORY PLAYER
 * ==================================
 * Spielt interaktive Geschichten mit Szenen, Dialogen und Übergängen!
 * Plays interactive stories with scenes, dialogues and transitions!
 */

// ----- SPIELSTAND / GAME STATE -----

/** Spielstand der über Szenen hinweg persistiert / Game state that persists across scenes */
export interface GameState {
  /** Gesammelte Gegenstände / Collected items */
  items: Set<string>;
  /** Flags/Variablen für Fortschritt / Flags/variables for progress */
  flags: Record<string, boolean | number | string>;
  /** Erledigte Aufgaben / Completed tasks */
  completedTasks: Set<string>;
}

/** Kontext für Bedingungen und Aktionen / Context for conditions and actions */
export interface StoryContext {
  state: GameState;
  hasItem: (item: string) => boolean;
  hasFlag: (flag: string) => boolean;
  getFlag: <T = boolean | number | string>(flag: string) => T | undefined;
  isTaskCompleted: (task: string) => boolean;
}

/** Aktionen die den Spielstand ändern / Actions that modify game state */
export type StateAction =
  | { type: 'add_item'; item: string; message?: string }
  | { type: 'remove_item'; item: string }
  | { type: 'set_flag'; flag: string; value: boolean | number | string }
  | { type: 'complete_task'; task: string };

/** Erstellt einen leeren Spielstand / Creates an empty game state */
function createEmptyGameState(): GameState {
  return {
    items: new Set(),
    flags: {},
    completedTasks: new Set(),
  };
}

/** Erstellt den Story-Kontext / Creates the story context */
function createStoryContext(state: GameState): StoryContext {
  return {
    state,
    hasItem: (item) => state.items.has(item),
    hasFlag: (flag) => flag in state.flags,
    getFlag: (flag) => state.flags[flag] as any,
    isTaskCompleted: (task) => state.completedTasks.has(task),
  };
}

// ----- TYPEN / TYPES -----

export interface DialogLine {
  /** Wer spricht? / Who is speaking? */
  speaker?: string;
  /** Der Text / The text */
  text: string;
  /** Sprechblasen-Position / Speech bubble position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Automatisch weiter nach X ms / Auto-advance after X ms */
  autoAdvance?: number;
}

/** Mini-Spiel Konfiguration / Mini-game configuration */
export interface MiniGameConfig {
  /** Das Spiel-Element das gerendert wird / The game element to render */
  component: (props: MiniGameProps) => ReactNode;
  /** Anleitung vor dem Spiel / Instructions before the game */
  instructions?: string;
  /** Ziel-Beschreibung / Goal description */
  goal?: string;
  /** Timeout in ms (optional) / Timeout in ms (optional) */
  timeout?: number;
  /** Überspringbar? / Skippable? */
  skippable?: boolean;
}

/** Klick-Suche Konfiguration / Click-to-find configuration */
export interface FindTargetConfig {
  /** Das zu findende Element / The element to find */
  target: ReactNode;
  /** Position (x, y in %) / Position (x, y in %) */
  position: { x: number; y: number };
  /** Größe des Klickbereichs / Size of click area */
  size?: number;
  /** Hinweis-Text / Hint text */
  hint?: string;
  /** Text wenn gefunden / Text when found */
  foundText?: string;
  /** Nächste Szene wenn gefunden / Next scene when found */
  nextSceneId?: string;
}

/** Props die an Mini-Spiele übergeben werden / Props passed to mini-games */
export interface MiniGameProps {
  /** Breite des Spielbereichs / Width of game area */
  width: number;
  /** Höhe des Spielbereichs / Height of game area */
  height: number;
  /** Aufrufen wenn Spiel gewonnen / Call when game is won */
  onWin: () => void;
  /** Aufrufen wenn Spiel verloren / Call when game is lost */
  onLose: () => void;
  /** Aufrufen um Fortschritt zu melden (0-100) / Call to report progress (0-100) */
  onProgress?: (progress: number) => void;
}

export interface StoryScene {
  /** Eindeutige ID / Unique ID */
  id: string;
  /** Hintergrund/Umgebung als React-Element / Background/environment as React element */
  background: ReactNode;
  /** Charaktere/Sprites in der Szene / Characters/sprites in the scene */
  characters?: ReactNode;
  /** Dialog-Zeilen / Dialogue lines */
  dialogue?: DialogLine[];
  /** Übergang zu dieser Szene / Transition to this scene */
  transition?: TransitionType;
  /** Dauer des Übergangs / Transition duration */
  transitionDuration?: number;
  /** Musik/Sound (URL) / Music/sound (URL) */
  music?: string;
  /** Callback wenn Szene startet / Callback when scene starts */
  onEnter?: () => void;
  /** Callback wenn Szene endet / Callback when scene ends */
  onExit?: () => void;
  /** Entscheidungen am Ende / Choices at the end */
  choices?: StoryChoice[];
  /** Mini-Spiel in dieser Szene / Mini-game in this scene */
  miniGame?: MiniGameConfig;
  /** Szene bei Spielsieg / Scene on game win */
  onGameWinSceneId?: string;
  /** Szene bei Spielverlust / Scene on game loss */
  onGameLoseSceneId?: string;
  /** Klick-Suche: Finde etwas in der Szene / Click-to-find: Find something in scene */
  findTarget?: FindTargetConfig;
  // ----- SPIELSTAND-AKTIONEN / GAME STATE ACTIONS -----
  /** Aktionen beim Betreten der Szene / Actions on entering the scene */
  onEnterActions?: StateAction[];
  /** Aktionen beim Gewinnen des Mini-Spiels / Actions on mini-game win */
  onMiniGameWinActions?: StateAction[];
  /** Aktionen beim Finden des Ziels / Actions on finding the target */
  onFindTargetActions?: StateAction[];
  /** Bedingung um diese Szene zu zeigen / Condition to show this scene */
  sceneCondition?: (ctx: StoryContext) => boolean;
}

export interface StoryChoice {
  /** Anzeigetext / Display text */
  text: string;
  /** Nächste Szenen-ID / Next scene ID */
  nextSceneId: string;
  /** Bedingung zum Anzeigen (veraltet, nutze requires*) / Condition to show (deprecated, use requires*) */
  condition?: (ctx: StoryContext) => boolean;
  /** Benötigte Gegenstände / Required items */
  requiresItems?: string[];
  /** Benötigte Flags / Required flags */
  requiresFlags?: string[];
  /** Benötigte erledigte Aufgaben / Required completed tasks */
  requiresTasks?: string[];
  /** Aktionen bei Auswahl / Actions when selected */
  onSelect?: StateAction[];
  /** Gesperrt-Text (wenn Bedingung nicht erfüllt) / Locked text (when condition not met) */
  lockedText?: string;
  /** Zeige gesperrte Option ausgegraut / Show locked option grayed out */
  showWhenLocked?: boolean;
}

export interface Story {
  /** Titel der Geschichte / Story title */
  title: string;
  /** Alle Szenen / All scenes */
  scenes: StoryScene[];
  /** Start-Szene ID / Starting scene ID */
  startSceneId: string;
  /** Globaler Hintergrund-Sound / Global background sound */
  backgroundMusic?: string;
}

/** Context für interaktives Story-Building / Context for interactive story building */
export interface StoryBuildContext {
  /** Aktuelle Szenen-ID / Current scene ID */
  currentSceneId: string;
  /** Fehlende Szenen-ID (wenn Knopf zu nicht-existierender Szene führt) / Missing scene ID */
  missingSceneId?: string;
  /** Art der Anfrage / Type of request */
  requestType: 'add_scene';
  /** Zusätzlicher Kontext / Additional context */
  message: string;
}

interface StoryPlayerProps {
  /** Die Geschichte / The story */
  story: Story;
  /** Breite / Width */
  width?: number;
  /** Höhe / Height */
  height?: number;
  /** Callback wenn Geschichte endet / Callback when story ends */
  onComplete?: () => void;
  /** Callback bei Szenen-Wechsel / Callback on scene change */
  onSceneChange?: (sceneId: string) => void;
  /** Auto-Start / Auto-start */
  autoStart?: boolean;
  /** Callback für interaktives Story-Building / Callback for interactive story building */
  onStoryBuildRequest?: (context: StoryBuildContext) => void;
}

// ----- HAUPT-KOMPONENTE / MAIN COMPONENT -----

export function StoryPlayer({
  story,
  width = 800,
  height = 500,
  onComplete,
  onSceneChange,
  autoStart = true,
  onStoryBuildRequest: onStoryBuildRequestProp,
}: StoryPlayerProps) {
  // Use context if no prop provided
  const storyBuildContext = useStoryBuild();
  const onStoryBuildRequest = onStoryBuildRequestProp ?? storyBuildContext?.onStoryBuildRequest;

  const [currentSceneId, setCurrentSceneId] = useState<string | null>(
    autoStart ? story.startSceneId : null
  );
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingSceneId, setPendingSceneId] = useState<string | null>(null);
  const [showChoices, setShowChoices] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoStart);
  // Navigation history for back/forward
  const [sceneHistory, setSceneHistory] = useState<string[]>(autoStart && story.startSceneId ? [story.startSceneId] : []);
  const [historyIndex, setHistoryIndex] = useState(autoStart && story.startSceneId ? 0 : -1);
  // Mini-game state
  const [isPlayingMiniGame, setIsPlayingMiniGame] = useState(false);
  const [showMiniGameIntro, setShowMiniGameIntro] = useState(false);
  const [miniGameProgress, setMiniGameProgress] = useState(0);
  // Find-target state
  const [isFindingTarget, setIsFindingTarget] = useState(false);
  const [targetFound, setTargetFound] = useState(false);
  // Game state / Spielstand
  const [gameState, setGameState] = useState<GameState>(createEmptyGameState);
  const [itemNotification, setItemNotification] = useState<string | null>(null);
  // Selected item for using on locked choices
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [wrongItemFeedback, setWrongItemFeedback] = useState<string | null>(null);
  // Missing scene state - when a button leads to non-existent scene
  const [missingSceneId, setMissingSceneId] = useState<string | null>(null);

  // Erstelle Story-Kontext / Create story context
  const storyContext = createStoryContext(gameState);

  // Get items as array for rendering
  const collectedItems = Array.from(gameState.items);

  // Führe Spielstand-Aktionen aus / Execute game state actions
  const executeActions = useCallback((actions: StateAction[]) => {
    setGameState(prevState => {
      const newState: GameState = {
        items: new Set(prevState.items),
        flags: { ...prevState.flags },
        completedTasks: new Set(prevState.completedTasks),
      };

      for (const action of actions) {
        switch (action.type) {
          case 'add_item':
            newState.items.add(action.item);
            if (action.message) {
              setItemNotification(action.message);
              setTimeout(() => setItemNotification(null), 3000);
            }
            break;
          case 'remove_item':
            newState.items.delete(action.item);
            break;
          case 'set_flag':
            newState.flags[action.flag] = action.value;
            break;
          case 'complete_task':
            newState.completedTasks.add(action.task);
            break;
        }
      }

      return newState;
    });
  }, []);

  const currentScene = story.scenes.find(s => s.id === currentSceneId);
  const currentDialogue = currentScene?.dialogue?.[dialogueIndex];
  const hasMoreDialogue = currentScene?.dialogue && dialogueIndex < currentScene.dialogue.length - 1;
  const hasMiniGame = !!currentScene?.miniGame;
  const hasFindTarget = !!currentScene?.findTarget;

  // Handle scene entry
  useEffect(() => {
    if (currentScene) {
      currentScene.onEnter?.();
      onSceneChange?.(currentScene.id);
      setDialogueIndex(0);
      setShowChoices(false);
      setShowContinueButton(false);
      setIsPlayingMiniGame(false);
      setShowMiniGameIntro(false);
      setMiniGameProgress(0);
      setIsFindingTarget(false);
      setTargetFound(false);
      setMissingSceneId(null);
      // Execute state actions on scene entry
      if (currentScene.onEnterActions && currentScene.onEnterActions.length > 0) {
        executeActions(currentScene.onEnterActions);
      }
    }
  }, [currentSceneId, executeActions]);

  // Auto-advance dialogue
  useEffect(() => {
    if (currentDialogue?.autoAdvance && isPlaying) {
      const timer = setTimeout(() => {
        advanceDialogue();
      }, currentDialogue.autoAdvance);
      return () => clearTimeout(timer);
    }
  }, [currentDialogue, dialogueIndex, isPlaying]);

  const advanceDialogue = useCallback(() => {
    if (!currentScene) return;

    if (hasMoreDialogue) {
      setDialogueIndex(prev => prev + 1);
    } else if (hasFindTarget && !isFindingTarget && !targetFound) {
      // Enter find-target mode after dialogue
      setIsFindingTarget(true);
    } else if (hasMiniGame && !isPlayingMiniGame) {
      // Show mini-game intro after dialogue
      setShowMiniGameIntro(true);
    } else if (currentScene.choices && currentScene.choices.length > 0) {
      setShowChoices(true);
    } else {
      // Show continue button instead of auto-advancing
      // Player must click to proceed to next scene
      setShowContinueButton(true);
    }
  }, [currentScene, hasMoreDialogue, hasFindTarget, isFindingTarget, targetFound, hasMiniGame, isPlayingMiniGame]);

  // goToScene - defined early so other callbacks can use it
  const goToScene = useCallback((sceneId: string, addToHistory = true) => {
    const nextScene = story.scenes.find(s => s.id === sceneId);
    if (!nextScene) {
      // Scene doesn't exist - show missing scene message
      setMissingSceneId(sceneId);
      setShowChoices(false);
      setTargetFound(false); // Clear found overlay when navigating
      setIsFindingTarget(false);
      return;
    }

    currentScene?.onExit?.();
    setShowContinueButton(false);
    setMissingSceneId(null);
    setTargetFound(false); // Clear found overlay when navigating
    setIsFindingTarget(false);

    // Add to history if navigating forward (not using back/forward buttons)
    if (addToHistory) {
      setSceneHistory(prev => {
        // Truncate forward history if we're not at the end
        const newHistory = prev.slice(0, historyIndex + 1);
        newHistory.push(sceneId);
        return newHistory;
      });
      setHistoryIndex(prev => prev + 1);
    }

    if (nextScene.transition && nextScene.transition !== 'none') {
      setPendingSceneId(sceneId);
      setIsTransitioning(true);
    } else {
      setCurrentSceneId(sceneId);
    }
  }, [story.scenes, currentScene, historyIndex]);

  // Navigate back in history
  const goBack = useCallback(() => {
    if (historyIndex > 0) {
      const prevSceneId = sceneHistory[historyIndex - 1];
      setHistoryIndex(prev => prev - 1);
      setShowChoices(false);
      setShowContinueButton(false);
      setIsFindingTarget(false);
      setTargetFound(false);
      setIsPlayingMiniGame(false);
      setShowMiniGameIntro(false);
      setCurrentSceneId(prevSceneId);
    }
  }, [historyIndex, sceneHistory]);

  // Navigate forward in history
  const goForward = useCallback(() => {
    if (historyIndex < sceneHistory.length - 1) {
      const nextSceneId = sceneHistory[historyIndex + 1];
      setHistoryIndex(prev => prev + 1);
      setShowChoices(false);
      setShowContinueButton(false);
      setIsFindingTarget(false);
      setTargetFound(false);
      setIsPlayingMiniGame(false);
      setShowMiniGameIntro(false);
      setCurrentSceneId(nextSceneId);
    }
  }, [historyIndex, sceneHistory]);

  // Can navigate back/forward?
  const canGoBack = historyIndex > 0;
  const canGoForward = historyIndex < sceneHistory.length - 1;

  const handleTransitionComplete = useCallback(() => {
    setIsTransitioning(false);
    // Use the pending scene ID that was stored when the transition started
    if (pendingSceneId) {
      setCurrentSceneId(pendingSceneId);
      setPendingSceneId(null);
    }
  }, [pendingSceneId]);

  // Handle continue button click
  const handleContinue = useCallback(() => {
    setShowContinueButton(false);
    const currentIndex = story.scenes.findIndex(s => s.id === currentSceneId);
    if (currentIndex < story.scenes.length - 1) {
      goToScene(story.scenes[currentIndex + 1].id);
    } else {
      onComplete?.();
    }
  }, [currentSceneId, story.scenes, goToScene, onComplete]);

  // Handle missing scene - allow user to continue or go back
  const handleMissingSceneContinue = useCallback(() => {
    setMissingSceneId(null);
    // Go to next scene in array
    const currentIndex = story.scenes.findIndex(s => s.id === currentSceneId);
    if (currentIndex < story.scenes.length - 1) {
      goToScene(story.scenes[currentIndex + 1].id);
    } else {
      onComplete?.();
    }
  }, [currentSceneId, story.scenes, goToScene, onComplete]);

  const handleMissingSceneGoBack = useCallback(() => {
    setMissingSceneId(null);
    setShowChoices(true); // Show choices again
  }, []);

  // Start mini-game
  const startMiniGame = useCallback(() => {
    setShowMiniGameIntro(false);
    setIsPlayingMiniGame(true);
    setMiniGameProgress(0);
  }, []);

  // Mini-game win handler
  const handleMiniGameWin = useCallback(() => {
    setIsPlayingMiniGame(false);
    // Execute state actions on mini-game win
    if (currentScene?.onMiniGameWinActions && currentScene.onMiniGameWinActions.length > 0) {
      executeActions(currentScene.onMiniGameWinActions);
    }
    // Go to specific win scene if defined
    if (currentScene?.onGameWinSceneId) {
      goToScene(currentScene.onGameWinSceneId);
    } else if (currentScene?.choices && currentScene.choices.length > 0) {
      // Show choices if available
      setShowChoices(true);
    } else {
      // Otherwise advance to next scene
      const currentIndex = story.scenes.findIndex(s => s.id === currentSceneId);
      if (currentIndex < story.scenes.length - 1) {
        goToScene(story.scenes[currentIndex + 1].id);
      } else {
        onComplete?.();
      }
    }
  }, [currentScene, currentSceneId, story.scenes, onComplete, executeActions]);

  // Mini-game lose handler
  const handleMiniGameLose = useCallback(() => {
    setIsPlayingMiniGame(false);
    if (currentScene?.onGameLoseSceneId) {
      goToScene(currentScene.onGameLoseSceneId);
    } else {
      // Retry - show intro again
      setShowMiniGameIntro(true);
    }
  }, [currentScene]);

  // Skip mini-game (if allowed)
  const skipMiniGame = useCallback(() => {
    if (currentScene?.miniGame?.skippable) {
      handleMiniGameWin();
    }
  }, [currentScene, handleMiniGameWin]);

  // Handle finding the target
  const handleTargetFound = useCallback(() => {
    setTargetFound(true);
    setIsFindingTarget(false);

    // Execute state actions on finding target
    if (currentScene?.onFindTargetActions && currentScene.onFindTargetActions.length > 0) {
      executeActions(currentScene.onFindTargetActions);
    }

    // After brief delay, proceed
    setTimeout(() => {
      if (currentScene?.findTarget?.nextSceneId) {
        goToScene(currentScene.findTarget.nextSceneId);
      } else if (currentScene?.choices && currentScene.choices.length > 0) {
        setShowChoices(true);
      } else if (hasMiniGame && !isPlayingMiniGame) {
        setShowMiniGameIntro(true);
      } else {
        const currentIndex = story.scenes.findIndex(s => s.id === currentSceneId);
        if (currentIndex < story.scenes.length - 1) {
          goToScene(story.scenes[currentIndex + 1].id);
        } else {
          onComplete?.();
        }
      }
    }, 1500);
  }, [currentScene, hasMiniGame, isPlayingMiniGame, currentSceneId, story.scenes, onComplete, executeActions, goToScene]);

  const handleChoice = useCallback((choice: StoryChoice, usedItems?: string[]) => {
    // Consume used items
    if (usedItems && usedItems.length > 0) {
      const removeActions: StateAction[] = usedItems.map(item => ({
        type: 'remove_item' as const,
        item,
      }));
      executeActions(removeActions);
    }
    // Reset selected item
    setSelectedItem(null);
    // Execute state actions on choice selection
    if (choice.onSelect && choice.onSelect.length > 0) {
      executeActions(choice.onSelect);
    }
    setShowChoices(false);
    goToScene(choice.nextSceneId);
  }, [goToScene, executeActions]);

  const handleClick = useCallback(() => {
    if (isTransitioning) return;
    if (showChoices) return; // Wait for choice
    if (showContinueButton) return; // Wait for continue button click
    if (isPlayingMiniGame) return; // Don't advance during mini-game
    if (showMiniGameIntro) return; // Wait for mini-game start
    if (isFindingTarget) return; // Wait for target to be found
    if (targetFound) return; // Wait for found animation
    advanceDialogue();
  }, [isTransitioning, showChoices, showContinueButton, isPlayingMiniGame, showMiniGameIntro, isFindingTarget, targetFound, advanceDialogue]);

  // Start story
  const startStory = () => {
    setCurrentSceneId(story.startSceneId);
    setIsPlaying(true);
  };

  // ----- RENDER -----

  if (!isPlaying || !currentSceneId) {
    return (
      <div
        style={{
          width,
          height,
          backgroundColor: '#1a1a2e',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 12,
          cursor: 'pointer',
        }}
        onClick={startStory}
      >
        <h2 style={{ color: '#FFD700', fontSize: 32, marginBottom: 16 }}>
          {story.title}
        </h2>
        <div style={{
          padding: '12px 32px',
          backgroundColor: '#4CAF50',
          color: 'white',
          borderRadius: 8,
          fontSize: 18,
          fontWeight: 'bold',
        }}>
          ▶ Geschichte starten
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width,
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        userSelect: 'none',
      }}
    >
      {/* Scene Container - shows full scene */}
      <div
        style={{
          width,
          height,
          position: 'relative',
          overflow: 'hidden',
          borderRadius: currentDialogue && !showChoices && !isPlayingMiniGame && !showMiniGameIntro
            ? '12px 12px 0 0'
            : 12,
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        {/* Hintergrund / Background */}
        <div style={{ position: 'absolute', inset: 0 }}>
          {currentScene?.background}
        </div>

        {/* Charaktere / Characters */}
        <div style={{ position: 'absolute', inset: 0 }}>
          {currentScene?.characters}
        </div>

        {/* Mini-Game Intro */}
        {showMiniGameIntro && currentScene?.miniGame && (
          <MiniGameIntro
            instructions={currentScene.miniGame.instructions}
            goal={currentScene.miniGame.goal}
            skippable={currentScene.miniGame.skippable}
            onStart={startMiniGame}
            onSkip={skipMiniGame}
          />
        )}

        {/* Mini-Game - as windowed overlay */}
        {isPlayingMiniGame && currentScene?.miniGame && (
          <>
            {/* Dim the background */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.4)',
              pointerEvents: 'none',
            }} />
            {/* Mini-game window */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: width * 0.85,
              height: height * 0.8,
              backgroundColor: '#1a1a2e',
              borderRadius: 16,
              border: '4px solid #FFD700',
              boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Mini-game title bar */}
              <div style={{
                padding: '8px 16px',
                backgroundColor: '#4f46e5',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span>🎮 {currentScene.miniGame.instructions || 'Mini-Spiel!'}</span>
                {currentScene.miniGame.skippable && (
                  <button
                    onClick={(e) => { e.stopPropagation(); skipMiniGame(); }}
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      border: 'none',
                      borderRadius: 4,
                      padding: '4px 12px',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: 12,
                    }}
                  >
                    Überspringen
                  </button>
                )}
              </div>
              {/* Progress bar */}
              {miniGameProgress > 0 && (
                <div style={{
                  height: 6,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                }}>
                  <div style={{
                    width: `${miniGameProgress}%`,
                    height: '100%',
                    backgroundColor: '#4CAF50',
                    transition: 'width 0.3s',
                  }} />
                </div>
              )}
              {/* Mini-game content */}
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                {(() => {
                  const MiniGameComponent = currentScene.miniGame.component;
                  return (
                    <MiniGameComponent
                      width={width * 0.85}
                      height={height * 0.8 - 50}
                      onWin={handleMiniGameWin}
                      onLose={handleMiniGameLose}
                      onProgress={setMiniGameProgress}
                    />
                  );
                })()}
              </div>
            </div>
          </>
        )}

        {/* Entscheidungen / Choices */}
        {showChoices && currentScene?.choices && (
          <ChoicesPanel
            choices={currentScene.choices}
            onChoice={handleChoice}
            storyContext={storyContext}
            selectedItem={selectedItem}
            onNeedItem={(requiredItems) => {
              setWrongItemFeedback(`Wähle erst: ${requiredItems.map(i => formatItemName(i)).join(', ')}`);
              setTimeout(() => setWrongItemFeedback(null), 2000);
            }}
            onAddElement={onStoryBuildRequest ? () => {
              onStoryBuildRequest({
                currentSceneId: currentSceneId!,
                requestType: 'add_scene',
                message: `Das Kind ist bei "${currentSceneId}" und will die Geschichte erweitern! Frag das Kind was es hinzufügen möchte: Neue Szene, Such-Spiel, oder Mini-Spiel?`,
              });
              setShowChoices(false);
            } : undefined}
          />
        )}

        {/* Continue Button / Weiter-Button */}
        {showContinueButton && (
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
          }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleContinue();
              }}
              style={{
                padding: '16px 48px',
                fontSize: 20,
                backgroundColor: '#4CAF50',
                color: 'white',
                border: '3px solid #FFD700',
                borderRadius: 12,
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#66BB6A';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#4CAF50';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ➡️ Hier weiter
            </button>
            {/* Build option when callback provided */}
            {onStoryBuildRequest && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onStoryBuildRequest({
                    currentSceneId: currentSceneId!,
                    requestType: 'add_scene',
                    message: `Das Kind ist bei "${currentSceneId}" und will die Geschichte erweitern! Frag das Kind was es hinzufügen möchte: Neue Szene, Such-Spiel, oder Mini-Spiel?`,
                  });
                  setShowContinueButton(false);
                }}
                style={{
                  padding: '10px 24px',
                  fontSize: 14,
                  backgroundColor: '#9C27B0',
                  color: 'white',
                  border: '2px solid #E1BEE7',
                  borderRadius: 8,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#AB47BC';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#9C27B0';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                ➕ Neue Szene
              </button>
            )}
          </div>
        )}

        {/* Missing Scene Overlay - when a button leads to non-existent scene */}
        {missingSceneId && (
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            padding: 32,
          }}>
            <div style={{
              fontSize: 48,
            }}>
              🚧
            </div>
            <div style={{
              color: '#FFD700',
              fontSize: 22,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              Diese Szene fehlt noch!
            </div>
            <div style={{
              color: '#aaa',
              fontSize: 14,
              textAlign: 'center',
              marginBottom: 8,
            }}>
              Szene "{missingSceneId}" existiert noch nicht.
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleMissingSceneGoBack();
                }}
                style={{
                  padding: '12px 24px',
                  fontSize: 16,
                  backgroundColor: '#666',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#888';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#666';
                }}
              >
                ⬅️ Zurück
              </button>
              {onStoryBuildRequest && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onStoryBuildRequest({
                      currentSceneId: currentSceneId!,
                      missingSceneId: missingSceneId,
                      requestType: 'add_scene',
                      message: `Die Szene "${missingSceneId}" gibt's noch nicht! Frag das Kind: Was soll hier passieren? (KEINE Optionen vorschlagen - das Kind entscheidet!)`,
                    });
                    setMissingSceneId(null);
                  }}
                  style={{
                    padding: '12px 32px',
                    fontSize: 16,
                    backgroundColor: '#9C27B0',
                    color: 'white',
                    border: '2px solid #E1BEE7',
                    borderRadius: 8,
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#AB47BC';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#9C27B0';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  ✨ Hier bauen!
                </button>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleMissingSceneContinue();
                }}
                style={{
                  padding: '12px 32px',
                  fontSize: 16,
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: '2px solid #FFD700',
                  borderRadius: 8,
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#66BB6A';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#4CAF50';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                ➡️ Überspringen
              </button>
            </div>
          </div>
        )}

        {/* Wrong item feedback */}
        {wrongItemFeedback && (
          <div style={{
            position: 'absolute',
            bottom: 100,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(255, 152, 0, 0.95)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            zIndex: 100,
          }}>
            {wrongItemFeedback}
          </div>
        )}

        {/* Item/Gegenstand Benachrichtigung / Item Notification */}
        {itemNotification && (
          <div style={{
            position: 'absolute',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(76, 175, 80, 0.95)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 8,
            fontSize: 18,
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            animation: 'item-popup 0.5s ease-out',
            zIndex: 100,
          }}>
            {itemNotification}
          </div>
        )}

        {/* Find Target Mode */}
        {(isFindingTarget || targetFound) && currentScene?.findTarget && (
          <FindTargetOverlay
            config={currentScene.findTarget}
            width={width}
            height={height}
            found={targetFound}
            onFind={handleTargetFound}
          />
        )}

        {/* Übergang / Transition */}
        <Transition
          isActive={isTransitioning}
          type={currentScene?.transition || 'fade'}
          duration={currentScene?.transitionDuration || 500}
          onComplete={handleTransitionComplete}
        />

        {/* Klick-Hinweis / Click hint (inside scene when no dialogue) */}
        {!showChoices && !isTransitioning && !isPlayingMiniGame && !showMiniGameIntro && !currentDialogue && (
          <div style={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            color: 'rgba(255,255,255,0.5)',
            fontSize: 12,
          }}>
            Klicken zum Fortfahren ▶
          </div>
        )}

        {/* Navigation Buttons / Back-Forward */}
        {(canGoBack || canGoForward) && (
          <div style={{
            position: 'absolute',
            top: 8,
            left: 8,
            display: 'flex',
            gap: 4,
            zIndex: 50,
          }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goBack();
              }}
              disabled={!canGoBack}
              style={{
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: canGoBack ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.3)',
                color: canGoBack ? 'white' : 'rgba(255,255,255,0.3)',
                border: canGoBack ? '2px solid rgba(255, 215, 0, 0.5)' : '2px solid transparent',
                borderRadius: 8,
                cursor: canGoBack ? 'pointer' : 'not-allowed',
                fontSize: 18,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (canGoBack) {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                  e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.8)';
                }
              }}
              onMouseLeave={(e) => {
                if (canGoBack) {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                  e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.5)';
                }
              }}
              title="Zurück"
            >
              ◀
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goForward();
              }}
              disabled={!canGoForward}
              style={{
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: canGoForward ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.3)',
                color: canGoForward ? 'white' : 'rgba(255,255,255,0.3)',
                border: canGoForward ? '2px solid rgba(255, 215, 0, 0.5)' : '2px solid transparent',
                borderRadius: 8,
                cursor: canGoForward ? 'pointer' : 'not-allowed',
                fontSize: 18,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (canGoForward) {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                  e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.8)';
                }
              }}
              onMouseLeave={(e) => {
                if (canGoForward) {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                  e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.5)';
                }
              }}
              title="Vorwärts"
            >
              ▶
            </button>
          </div>
        )}

        {/* Inventar / Inventory Bar */}
        {collectedItems.length > 0 && (
          <div style={{
            position: 'absolute',
            bottom: 8,
            left: 8,
            display: 'flex',
            gap: 8,
            padding: '6px 10px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: 8,
            border: '1px solid rgba(255, 215, 0, 0.3)',
          }}>
            <span style={{ color: '#FFD700', fontSize: 12, marginRight: 4 }}>🎒</span>
            {collectedItems.map((item) => (
              <button
                key={item}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(selectedItem === item ? null : item);
                }}
                title={formatItemName(item)}
                style={{
                  width: 36,
                  height: 36,
                  padding: 4,
                  backgroundColor: selectedItem === item ? 'rgba(76, 175, 80, 0.4)' : 'rgba(255, 255, 255, 0.1)',
                  border: selectedItem === item ? '2px solid #4CAF50' : '2px solid transparent',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontSize: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  transform: selectedItem === item ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                {getItemEmoji(item)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Dialog-Box OUTSIDE scene - full scene stays visible */}
      {currentDialogue && !showChoices && !isPlayingMiniGame && !showMiniGameIntro && (
        <DialogueBox
          dialogue={currentDialogue}
          width={width}
          onClick={handleClick}
        />
      )}
    </div>
  );
}

// ----- DIALOG-BOX / DIALOGUE BOX -----

interface DialogueBoxProps {
  dialogue: DialogLine;
  width: number;
  onClick?: () => void;
}

function DialogueBox({ dialogue, width, onClick }: DialogueBoxProps) {
  return (
    <div
      style={{
        width,
        boxSizing: 'border-box',
        backgroundColor: '#1a1a2e',
        borderRadius: '0 0 12px 12px',
        padding: 16,
        borderTop: '3px solid #FFD700',
        cursor: 'pointer',
        minHeight: 80,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      onClick={onClick}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        {dialogue.speaker && (
          <div style={{
            color: '#FFD700',
            fontWeight: 'bold',
            fontSize: 16,
            whiteSpace: 'nowrap',
          }}>
            {dialogue.speaker}:
          </div>
        )}
        <div style={{
          color: 'white',
          fontSize: 18,
          lineHeight: 1.5,
          flex: 1,
        }}>
          {dialogue.text}
        </div>
      </div>
      <div style={{
        color: 'rgba(255,255,255,0.4)',
        fontSize: 12,
        textAlign: 'right',
        marginTop: 8,
      }}>
        Klicken zum Fortfahren ▶
      </div>
    </div>
  );
}

// ----- MINI-GAME INTRO / MINI-GAME INTRO -----

interface MiniGameIntroProps {
  instructions?: string;
  goal?: string;
  skippable?: boolean;
  onStart: () => void;
  onSkip: () => void;
}

function MiniGameIntro({ instructions, goal, skippable, onStart, onSkip }: MiniGameIntroProps) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 32,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div style={{
        fontSize: 32,
        color: '#FFD700',
        fontWeight: 'bold',
      }}>
        🎮 Mini-Spiel!
      </div>

      {instructions && (
        <div style={{
          fontSize: 18,
          color: 'white',
          textAlign: 'center',
          maxWidth: 500,
        }}>
          {instructions}
        </div>
      )}

      {goal && (
        <div style={{
          fontSize: 16,
          color: '#90EE90',
          textAlign: 'center',
          padding: '8px 16px',
          backgroundColor: 'rgba(0,100,0,0.3)',
          borderRadius: 8,
        }}>
          🎯 Ziel: {goal}
        </div>
      )}

      <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
        <button
          onClick={onStart}
          style={{
            padding: '16px 40px',
            fontSize: 20,
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          ▶ Spielen!
        </button>

        {skippable && (
          <button
            onClick={onSkip}
            style={{
              padding: '16px 24px',
              fontSize: 16,
              backgroundColor: '#666',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
            }}
          >
            Überspringen
          </button>
        )}
      </div>
    </div>
  );
}

// ----- ENTSCHEIDUNGS-PANEL / CHOICES PANEL -----

interface ChoicesPanelProps {
  choices: StoryChoice[];
  onChoice: (choice: StoryChoice, usedItems?: string[]) => void;
  storyContext: StoryContext;
  selectedItem: string | null;
  onNeedItem: (requiredItems: string[]) => void;
  /** Callback um neue Elemente hinzuzufügen / Callback to add new elements */
  onAddElement?: () => void;
}

/** Prüft ob eine Wahl verfügbar ist (ohne Items - die werden separat geprüft) */
function isChoiceAvailableWithoutItems(choice: StoryChoice, ctx: StoryContext): boolean {
  // Check custom condition first
  if (choice.condition && !choice.condition(ctx)) {
    return false;
  }
  // Check required flags
  if (choice.requiresFlags && choice.requiresFlags.length > 0) {
    if (!choice.requiresFlags.every(flag => ctx.hasFlag(flag))) {
      return false;
    }
  }
  // Check required tasks
  if (choice.requiresTasks && choice.requiresTasks.length > 0) {
    if (!choice.requiresTasks.every(task => ctx.isTaskCompleted(task))) {
      return false;
    }
  }
  return true;
}

/** Prüft ob der Spieler die benötigten Items hat */
function hasRequiredItems(choice: StoryChoice, ctx: StoryContext): boolean {
  if (!choice.requiresItems || choice.requiresItems.length === 0) {
    return true;
  }
  return choice.requiresItems.every(item => ctx.hasItem(item));
}

/** Prüft ob das ausgewählte Item zu den benötigten passt */
function isCorrectItemSelected(choice: StoryChoice, selectedItem: string | null): boolean {
  if (!choice.requiresItems || choice.requiresItems.length === 0) {
    return true; // No items required
  }
  if (!selectedItem) {
    return false; // Items required but none selected
  }
  return choice.requiresItems.includes(selectedItem);
}

function ChoicesPanel({ choices, onChoice, storyContext, selectedItem, onNeedItem, onAddElement }: ChoicesPanelProps) {
  // Process choices
  const processedChoices = choices.map(choice => {
    const baseAvailable = isChoiceAvailableWithoutItems(choice, storyContext);
    const hasItems = hasRequiredItems(choice, storyContext);
    const needsItems = choice.requiresItems && choice.requiresItems.length > 0;
    const correctItemSelected = isCorrectItemSelected(choice, selectedItem);

    return {
      choice,
      // Fully available if base conditions met AND (no items needed OR correct item selected)
      isAvailable: baseAvailable && (!needsItems || (hasItems && correctItemSelected)),
      // Locked by items specifically (has items but wrong/no selection)
      isLockedByItem: baseAvailable && needsItems && hasItems && !correctItemSelected,
      // Locked because missing items entirely
      isMissingItems: baseAvailable && needsItems && !hasItems,
      showLocked: choice.showWhenLocked ?? false,
      needsItems,
    };
  }).filter(c => c.isAvailable || c.isLockedByItem || (c.isMissingItems && c.showLocked));

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      padding: 32,
    }}>
      <div style={{
        color: '#FFD700',
        fontSize: 20,
        marginBottom: 8,
      }}>
        Was möchtest du tun?
      </div>
      {selectedItem && (
        <div style={{
          color: '#4CAF50',
          fontSize: 14,
          marginBottom: 8,
          padding: '4px 12px',
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          borderRadius: 4,
        }}>
          Ausgewählt: {getItemEmoji(selectedItem)} {formatItemName(selectedItem)}
        </div>
      )}
      {processedChoices.map(({ choice, isAvailable, isLockedByItem, isMissingItems }, index) => {
        const needsItemSelection = isLockedByItem;
        const isLocked = !isAvailable;

        return (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              if (isAvailable) {
                // Pass the items that will be consumed
                onChoice(choice, choice.requiresItems);
              } else if (isLockedByItem) {
                // Player has the items but hasn't selected the right one
                onNeedItem(choice.requiresItems!);
              }
            }}
            style={{
              padding: '12px 32px',
              fontSize: 16,
              backgroundColor: isAvailable ? '#4a4a8a' : needsItemSelection ? '#3d4a3a' : '#3a3a4a',
              color: isAvailable ? 'white' : needsItemSelection ? '#90EE90' : '#888',
              border: isAvailable ? '2px solid #FFD700' : needsItemSelection ? '2px solid #4CAF50' : '2px solid #555',
              borderRadius: 8,
              cursor: isLocked && !needsItemSelection ? 'not-allowed' : 'pointer',
              minWidth: 200,
              transition: 'all 0.2s',
              opacity: isMissingItems ? 0.6 : 1,
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              if (isAvailable || needsItemSelection) {
                e.currentTarget.style.backgroundColor = isAvailable ? '#6a6aaa' : '#4d5a4d';
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isAvailable ? '#4a4a8a' : needsItemSelection ? '#3d4a3a' : '#3a3a4a';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {isMissingItems && <span style={{ marginRight: 8 }}>🔒</span>}
            {needsItemSelection && <span style={{ marginRight: 8 }}>🔑</span>}
            {isAvailable ? choice.text : (choice.lockedText || choice.text)}
            {needsItemSelection && (
              <div style={{
                fontSize: 12,
                color: '#4CAF50',
                marginTop: 4,
              }}>
                Wähle: {choice.requiresItems!.map(i => `${getItemEmoji(i)} ${formatItemName(i)}`).join(', ')}
              </div>
            )}
            {isMissingItems && choice.requiresItems && (
              <div style={{
                fontSize: 12,
                color: '#ff9800',
                marginTop: 4,
              }}>
                Fehlt: {choice.requiresItems.map(i => `${getItemEmoji(i)} ${formatItemName(i)}`).join(', ')}
              </div>
            )}
          </button>
        );
      })}

      {/* Add new scene button */}
      {onAddElement && (
        <button
          onClick={(e) => { e.stopPropagation(); onAddElement(); }}
          style={{
            marginTop: 12,
            padding: '10px 24px',
            fontSize: 14,
            backgroundColor: 'rgba(156, 39, 176, 0.8)',
            color: 'white',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: 8,
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(156, 39, 176, 1)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(156, 39, 176, 0.8)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          ➕ Neue Szene
        </button>
      )}
    </div>
  );
}

/** Gibt ein Emoji für ein Item zurück */
function getItemEmoji(item: string): string {
  const emojiMap: Record<string, string> = {
    // === SKY & SPACE / HIMMEL & WELTRAUM ===
    'star': '⭐', 'stern': '⭐', 'sterne': '⭐', 'sternen': '⭐',
    'starlight': '🌟', 'sternenlicht': '🌟', 'stardust': '✨', 'sternenstaub': '✨',
    'starfeather': '🪶', 'sternenfeder': '🪶',
    'shootingstar': '🌠', 'sternschnuppe': '🌠', 'fallingstar': '🌠',
    'constellation': '✨', 'sternbild': '✨',
    'moon': '🌙', 'mond': '🌙', 'moonlight': '🌙', 'mondlicht': '🌙',
    'moonstone': '💎', 'mondstein': '💎', 'moonstone1': '💎', 'mondstein1': '💎',
    'moonstone2': '💎', 'mondstein2': '💎', 'moonstone3': '💎', 'mondstein3': '💎',
    'moondust': '🌟', 'mondstaub': '🌟', 'moonbeam': '🌙', 'mondstrahl': '🌙',
    'fullmoon': '🌕', 'vollmond': '🌕', 'halfmoon': '🌓', 'halbmond': '🌓',
    'newmoon': '🌑', 'neumond': '🌑', 'crescent': '🌙', 'mondsichel': '🌙',
    'sun': '☀️', 'sonne': '☀️', 'sunlight': '☀️', 'sonnenlicht': '☀️',
    'sunray': '🌞', 'sonnenstrahl': '🌞', 'sunshine': '🌞', 'sonnenschein': '🌞',
    'sunrise': '🌅', 'sonnenaufgang': '🌅', 'sunset': '🌇', 'sonnenuntergang': '🌇',
    'cloud': '☁️', 'wolke': '☁️', 'clouds': '☁️', 'wolken': '☁️',
    'rainbow': '🌈', 'regenbogen': '🌈', 'aurora': '🌌', 'nordlicht': '🌌',
    'lightning': '⚡', 'blitz': '⚡', 'thunder': '⚡', 'donner': '⚡',
    'bolt': '⚡', 'thunderbolt': '⚡', 'blitzschlag': '⚡',
    'planet': '🪐', 'planets': '🪐', 'planeten': '🪐',
    'comet': '☄️', 'komet': '☄️', 'asteroid': '☄️',
    'rocket': '🚀', 'rakete': '🚀', 'spaceship': '🚀', 'raumschiff': '🚀',
    'ufo': '🛸', 'alien': '👽', 'satellite': '🛰️', 'satellit': '🛰️',
    'galaxy': '🌌', 'galaxie': '🌌', 'milkyway': '🌌', 'milchstrasse': '🌌',
    'shadow': '👤', 'schatten': '👤', 'shadowspark': '🔮', 'schattenfunke': '🔮',
    'darkness': '🌑', 'dunkelheit': '🌑', 'dark': '🌑', 'dunkel': '🌑',
    'night': '🌙', 'nacht': '🌙', 'nightsky': '🌌', 'nachthimmel': '🌌',
    'sky': '🌤️', 'himmel': '🌤️', 'horizon': '🌅', 'horizont': '🌅',

    // === NATURE / NATUR ===
    'tree': '🌳', 'baum': '🌳', 'trees': '🌲', 'baeume': '🌲',
    'oak': '🌳', 'eiche': '🌳', 'pine': '🌲', 'kiefer': '🌲', 'fir': '🌲', 'tanne': '🌲',
    'palm': '🌴', 'palme': '🌴', 'bamboo': '🎋', 'bambus': '🎋',
    'leaf': '🍃', 'blatt': '🍃', 'leaves': '🍂', 'blaetter': '🍂',
    'mapleleaf': '🍁', 'ahornblatt': '🍁', 'fallenleaf': '🍂', 'herbstblatt': '🍂',
    'flower': '🌸', 'blume': '🌸', 'flowers': '💐', 'blumen': '💐',
    'rose': '🌹', 'roses': '🌹', 'rosen': '🌹',
    'sunflower': '🌻', 'sonnenblume': '🌻', 'tulip': '🌷', 'tulpe': '🌷',
    'cherryblossom': '🌸', 'kirschbluete': '🌸', 'blossom': '🌸', 'bluete': '🌸',
    'lotus': '🪷', 'hibiscus': '🌺', 'hibiskus': '🌺',
    'daisy': '🌼', 'gaensebluemchen': '🌼', 'bouquet': '💐', 'strauss': '💐',
    'grass': '🌿', 'gras': '🌿', 'herb': '🌿', 'kraut': '🌿', 'herbs': '🌿', 'kraeuter': '🌿',
    'clover': '🍀', 'klee': '🍀', 'fourleaf': '🍀', 'kleeblatt': '🍀', 'shamrock': '☘️',
    'mushroom': '🍄', 'pilz': '🍄', 'mushrooms': '🍄', 'pilze': '🍄',
    'cactus': '🌵', 'kaktus': '🌵', 'vine': '🌿', 'ranke': '🌿', 'ivy': '🌿', 'efeu': '🌿',
    'seed': '🌱', 'samen': '🌱', 'seeds': '🌱', 'saatgut': '🌱',
    'seedling': '🌱', 'saemling': '🌱', 'sprout': '🌱', 'spross': '🌱',
    'acorn': '🌰', 'eichel': '🌰', 'nut': '🌰', 'nuss': '🌰', 'nuts': '🥜', 'nuesse': '🥜',
    'chestnut': '🌰', 'kastanie': '🌰', 'peanut': '🥜', 'erdnuss': '🥜',
    'wood': '🪵', 'holz': '🪵', 'log': '🪵', 'baumstamm': '🪵',
    'stick': '🪵', 'stock': '🪵', 'branch': '🌳', 'ast': '🌳', 'twig': '🌿', 'zweig': '🌿',
    'root': '🌱', 'wurzel': '🌱', 'roots': '🌱', 'wurzeln': '🌱',
    'bark': '🪵', 'rinde': '🪵', 'moss': '🌿', 'moos': '🌿', 'lichen': '🌿', 'flechte': '🌿',
    'stone': '🪨', 'stein': '🪨', 'rock': '🪨', 'fels': '🪨', 'rocks': '🪨', 'felsen': '🪨',
    'boulder': '🪨', 'felsbrocken': '🪨', 'pebble': '⚪', 'kiesel': '⚪',
    'sand': '🏖️', 'dirt': '🟤', 'erde': '🟤', 'soil': '🟤', 'boden': '🟤',
    'clay': '🟤', 'lehm': '🟤', 'mud': '🟤', 'schlamm': '🟤',
    'mountain': '⛰️', 'berg': '⛰️', 'mountains': '🏔️', 'berge': '🏔️',
    'volcano': '🌋', 'vulkan': '🌋', 'hill': '🏔️', 'huegel': '🏔️',
    'valley': '🏞️', 'tal': '🏞️', 'canyon': '🏜️', 'schlucht': '🏜️',
    'river': '🌊', 'fluss': '🌊', 'stream': '💧', 'bach': '💧',
    'lake': '🏞️', 'see': '🏞️', 'pond': '🏞️', 'teich': '🏞️',
    'ocean': '🌊', 'ozean': '🌊', 'sea': '🌊', 'meer': '🌊',
    'wave': '🌊', 'welle': '🌊', 'waves': '🌊', 'wellen': '🌊',
    'waterfall': '🌊', 'wasserfall': '🌊', 'spring': '💧', 'quelle': '💧',
    'forest': '🌲', 'wald': '🌲', 'woods': '🌳', 'gehoelz': '🌳',
    'jungle': '🌴', 'dschungel': '🌴', 'rainforest': '🌴', 'regenwald': '🌴',
    'meadow': '🌿', 'wiese': '🌿', 'field': '🌾', 'feld': '🌾',
    'garden': '🌷', 'garten': '🌷', 'park': '🌳',
    'desert': '🏜️', 'wueste': '🏜️', 'oasis': '🏝️', 'oase': '🏝️',
    'island': '🏝️', 'insel': '🏝️', 'beach': '🏖️', 'strand': '🏖️',
    'cave': '🕳️', 'hoehle': '🕳️', 'grotto': '🕳️', 'grotte': '🕳️',
    'feather': '🪶', 'feder': '🪶', 'feathers': '🪶', 'federn': '🪶',
    'fur': '🐻', 'fell': '🐻', 'pelt': '🐻', 'pelz': '🐻',
    'wool': '🐑', 'wolle': '🐑', 'leather': '🦎', 'leder': '🦎',
    'shell': '🐚', 'muschel': '🐚', 'shells': '🐚', 'muscheln': '🐚',
    'pearl': '🫧', 'perle': '🫧', 'pearls': '🫧', 'perlen': '🫧',
    'coral': '🪸', 'koralle': '🪸', 'seaweed': '🌿', 'alge': '🌿',

    // === ANIMALS / TIERE ===
    'animal': '🐾', 'tier': '🐾', 'animals': '🐾', 'tiere': '🐾',
    'paw': '🐾', 'pfote': '🐾', 'paws': '🐾', 'pfoten': '🐾',
    'dog': '🐕', 'hund': '🐕', 'puppy': '🐶', 'welpe': '🐶',
    'cat': '🐈', 'katze': '🐈', 'kitten': '🐱', 'kaetzchen': '🐱',
    'mouse': '🐭', 'maus': '🐭', 'mice': '🐭', 'maeuse': '🐭',
    'rat': '🐀', 'ratte': '🐀', 'hamster': '🐹',
    'rabbit': '🐰', 'hase': '🐰', 'bunny': '🐰', 'kaninchen': '🐰',
    'squirrel': '🐿️', 'eichhoernchen': '🐿️',
    'bird': '🐦', 'vogel': '🐦', 'birds': '🐦', 'voegel': '🐦',
    'owl': '🦉', 'eule': '🦉', 'eagle': '🦅', 'adler': '🦅',
    'raven': '🐦‍⬛', 'rabe': '🐦‍⬛', 'crow': '🐦‍⬛', 'kraehe': '🐦‍⬛',
    'swan': '🦢', 'schwan': '🦢', 'duck': '🦆', 'ente': '🦆',
    'goose': '🦢', 'gans': '🦢', 'penguin': '🐧', 'pinguin': '🐧',
    'peacock': '🦚', 'pfau': '🦚', 'parrot': '🦜', 'papagei': '🦜',
    'dove': '🕊️', 'taube': '🕊️', 'seagull': '🐦', 'moewe': '🐦',
    'sparrow': '🐦', 'spatz': '🐦', 'robin': '🐦', 'rotkehlchen': '🐦',
    'fish': '🐟', 'fisch': '🐟', 'fishes': '🐠', 'fische': '🐠',
    'shark': '🦈', 'hai': '🦈', 'whale': '🐋', 'wal': '🐋',
    'dolphin': '🐬', 'delfin': '🐬', 'octopus': '🐙', 'krake': '🐙',
    'jellyfish': '🪼', 'qualle': '🪼', 'seahorse': '🐴', 'seepferdchen': '🐴',
    'starfish': '⭐', 'seestern': '⭐', 'crab': '🦀', 'krabbe': '🦀',
    'lobster': '🦞', 'hummer': '🦞', 'shrimp': '🦐', 'garnele': '🦐',
    'horse': '🐴', 'pferd': '🐴', 'pony': '🐴',
    'unicorn': '🦄', 'einhorn': '🦄',
    'donkey': '🫏', 'esel': '🫏', 'zebra': '🦓',
    'cow': '🐄', 'kuh': '🐄', 'ox': '🐂', 'ochse': '🐂', 'bull': '🐂', 'stier': '🐂',
    'sheep': '🐑', 'schaf': '🐑', 'lamb': '🐑', 'lamm': '🐑',
    'goat': '🐐', 'ziege': '🐐', 'pig': '🐷', 'schwein': '🐷',
    'chicken': '🐔', 'huhn': '🐔', 'hen': '🐔', 'henne': '🐔',
    'rooster': '🐓', 'hahn': '🐓', 'chick': '🐤', 'kueken': '🐤',
    'turkey': '🦃', 'truthahn': '🦃',
    'wolf': '🐺', 'fox': '🦊', 'fuchs': '🦊',
    'bear': '🐻', 'baer': '🐻', 'polarbear': '🐻‍❄️', 'eisbaer': '🐻‍❄️',
    'panda': '🐼', 'koala': '🐨',
    'lion': '🦁', 'loewe': '🦁', 'tiger': '🐯',
    'leopard': '🐆', 'cheetah': '🐆', 'gepard': '🐆',
    'elephant': '🐘', 'elefant': '🐘', 'giraffe': '🦒',
    'hippo': '🦛', 'nilpferd': '🦛', 'rhino': '🦏', 'nashorn': '🦏',
    'monkey': '🐵', 'affe': '🐵', 'gorilla': '🦍', 'chimp': '🐒', 'schimpanse': '🐒',
    'deer': '🦌', 'hirsch': '🦌', 'reh': '🦌', 'moose': '🫎', 'elch': '🫎',
    'camel': '🐫', 'kamel': '🐫', 'llama': '🦙', 'lama': '🦙',
    'kangaroo': '🦘', 'kaenguru': '🦘', 'sloth': '🦥', 'faultier': '🦥',
    'dragon': '🐉', 'drache': '🐉', 'dragons': '🐉', 'drachen': '🐉',
    'snake': '🐍', 'schlange': '🐍', 'serpent': '🐍',
    'lizard': '🦎', 'echse': '🦎', 'gecko': '🦎', 'iguana': '🦎',
    'frog': '🐸', 'frosch': '🐸', 'toad': '🐸', 'kroete': '🐸',
    'turtle': '🐢', 'schildkroete': '🐢', 'tortoise': '🐢',
    'crocodile': '🐊', 'krokodil': '🐊', 'alligator': '🐊',
    'dinosaur': '🦕', 'dinosaurier': '🦕', 'dino': '🦕', 'trex': '🦖',
    'spider': '🕷️', 'spinne': '🕷️', 'web': '🕸️', 'spinnennetz': '🕸️',
    'bee': '🐝', 'biene': '🐝', 'honeybee': '🐝', 'honigbiene': '🐝',
    'butterfly': '🦋', 'schmetterling': '🦋',
    'beetle': '🪲', 'kaefer': '🪲', 'ladybug': '🐞', 'marienkaefer': '🐞',
    'caterpillar': '🐛', 'raupe': '🐛', 'ant': '🐜', 'ameise': '🐜',
    'snail': '🐌', 'schnecke': '🐌', 'worm': '🪱', 'wurm': '🪱',
    'dragonfly': '🪰', 'libelle': '🪰', 'firefly': '✨', 'gluehwuermchen': '✨',
    'scorpion': '🦂', 'skorpion': '🦂',
    'bone': '🦴', 'knochen': '🦴', 'bones': '🦴',
    'skull': '💀', 'schaedel': '💀', 'skeleton': '💀', 'skelett': '💀',
    'tooth': '🦷', 'zahn': '🦷', 'teeth': '🦷', 'zaehne': '🦷', 'fang': '🦷',
    'claw': '🦎', 'kralle': '🦎', 'claws': '🦎', 'krallen': '🦎',
    'scale': '🐉', 'schuppe': '🐉', 'scales': '🐉', 'schuppen': '🐉',
    'wing': '🪽', 'fluegel': '🪽', 'wings': '🪽',
    'tail': '🦊', 'schwanz': '🦊', 'horn': '📯', 'horns': '📯', 'hoerner': '📯',
    'egg': '🥚', 'ei': '🥚', 'eggs': '🥚', 'eier': '🥚',
    'nest': '🪺', 'beak': '🐦', 'schnabel': '🐦',
    'hoof': '🐴', 'huf': '🐴', 'hooves': '🐴', 'hufe': '🐴',
    'mane': '🦁', 'maehne': '🦁', 'whisker': '🐱', 'schnurrhaare': '🐱',

    // === MAGIC & FANTASY / MAGIE & FANTASY ===
    'magic': '✨', 'magie': '✨', 'magical': '✨', 'magisch': '✨',
    'spell': '📜', 'zauber': '🪄', 'spells': '📜', 'zaubersprueche': '📜',
    'wand': '🪄', 'zauberstab': '🪄', 'staff': '🪄', 'stab': '🪄',
    'potion': '🧪', 'trank': '🧪', 'potions': '🧪', 'traenke': '🧪',
    'elixir': '🧪', 'elixier': '🧪',
    'spark': '✨', 'funke': '✨', 'sparks': '✨', 'funken': '✨',
    'sparkle': '✨', 'glitter': '✨', 'glitzer': '✨', 'shimmer': '✨', 'schimmer': '✨',
    'glow': '🌟', 'leuchten': '🌟', 'shine': '✨', 'schein': '✨',
    'dust': '✨', 'staub': '✨', 'powder': '✨', 'pulver': '✨',
    'witch': '🧙‍♀️', 'hexe': '🧙‍♀️', 'witches': '🧙‍♀️', 'hexen': '🧙‍♀️',
    'wizard': '🧙', 'zauberer': '🧙', 'mage': '🧙', 'magier': '🧙', 'sorcerer': '🧙',
    'fairy': '🧚', 'fee': '🧚', 'fairies': '🧚', 'feen': '🧚',
    'elf': '🧝', 'elfe': '🧝', 'elves': '🧝', 'elfen': '🧝',
    'dwarf': '🧔', 'zwerg': '🧔', 'dwarves': '🧔', 'zwerge': '🧔',
    'giant': '👹', 'riese': '👹', 'giants': '👹', 'riesen': '👹',
    'troll': '👹', 'ogre': '👹', 'oger': '👹',
    'goblin': '👺', 'kobold': '👺', 'goblins': '👺', 'kobolde': '👺',
    'ghost': '👻', 'geist': '👻', 'ghosts': '👻', 'geister': '👻',
    'spirit': '👻', 'specter': '👻', 'gespenst': '👻', 'phantom': '👻',
    'demon': '👿', 'daemon': '👿', 'devil': '😈', 'teufel': '😈',
    'angel': '👼', 'engel': '👼', 'angels': '👼', 'guardian': '👼', 'schutzengel': '👼',
    'vampire': '🧛', 'vampir': '🧛', 'werewolf': '🐺', 'werwolf': '🐺',
    'zombie': '🧟', 'mummy': '🧟', 'mumie': '🧟',
    'mermaid': '🧜‍♀️', 'meerjungfrau': '🧜‍♀️', 'merman': '🧜‍♂️', 'meermann': '🧜‍♂️',
    'orb': '🔮', 'kugel': '🔮', 'sphere': '🔮',
    'crystal': '🔮', 'kristall': '🔮', 'crystals': '🔮', 'kristalle': '🔮',
    'amulet': '📿', 'amulett': '📿', 'talisman': '🧿',
    'charm': '💝', 'rune': '🪬', 'runen': '🪬', 'runes': '🪬',
    'portal': '🌀', 'vortex': '🌀', 'wirbel': '🌀', 'spiral': '🌀', 'spirale': '🌀',
    'invisible': '👁️', 'unsichtbar': '👁️', 'secret': '🤫', 'geheim': '🤫',
    'hidden': '🔍', 'versteckt': '🔍', 'mystery': '❓', 'mysterium': '❓',
    'curse': '☠️', 'fluch': '☠️', 'blessing': '✝️', 'segen': '✝️',
    'wish': '🌠', 'wunsch': '🌠', 'wishes': '🌠', 'wuensche': '🌠',
    'dream': '💭', 'traum': '💭', 'dreams': '💭', 'traeume': '💭',
    'nightmare': '😱', 'albtraum': '😱',
    'enchanted': '✨', 'verzaubert': '✨', 'cursed': '☠️', 'verflucht': '☠️',
    'blessed': '✨', 'gesegnet': '✨',

    // === WEAPONS & TOOLS / WAFFEN & WERKZEUGE ===
    'sword': '⚔️', 'schwert': '⚔️', 'swords': '⚔️', 'schwerter': '⚔️',
    'blade': '🗡️', 'klinge': '🗡️', 'dagger': '🗡️', 'dolch': '🗡️',
    'knife': '🔪', 'messer': '🔪', 'knives': '🔪',
    'axe': '🪓', 'axt': '🪓', 'axes': '🪓', 'aexte': '🪓',
    'hammer': '🔨', 'mallet': '🔨', 'holzhammer': '🔨',
    'club': '🏏', 'keule': '🏏', 'mace': '🏏',
    'shield': '🛡️', 'schild': '🛡️', 'shields': '🛡️', 'schilde': '🛡️',
    'armor': '🛡️', 'ruestung': '🛡️', 'armour': '🛡️',
    'bow': '🏹', 'bogen': '🏹', 'crossbow': '🏹', 'armbrust': '🏹',
    'arrow': '➡️', 'pfeil': '➡️', 'arrows': '➡️', 'pfeile': '➡️',
    'quiver': '🏹', 'koecher': '🏹',
    'spear': '🔱', 'speer': '🔱', 'lance': '🔱', 'lanze': '🔱',
    'trident': '🔱', 'dreizack': '🔱', 'halberd': '⚔️', 'hellebarde': '⚔️',
    'key': '🔑', 'schluessel': '🔑', 'keys': '🔑',
    'goldenkey': '🔑', 'goldschluessel': '🔑', 'goldener_schluessel': '🔑',
    'silverkey': '🗝️', 'silberschluessel': '🗝️',
    'lock': '🔒', 'schloss': '🔒', 'padlock': '🔐', 'vorhangschloss': '🔐',
    'unlock': '🔓', 'unlocked': '🔓',
    'rope': '🪢', 'seil': '🪢', 'ropes': '🪢', 'seile': '🪢',
    'chain': '⛓️', 'kette': '⛓️', 'chains': '⛓️', 'ketten': '⛓️',
    'hook': '🪝', 'haken': '🪝', 'hooks': '🪝',
    'anchor': '⚓', 'anker': '⚓',
    'shovel': '🪴', 'schaufel': '🪴', 'spade': '♠️',
    'pickaxe': '⛏️', 'spitzhacke': '⛏️', 'pick': '⛏️',
    'saw': '🪚', 'saege': '🪚',
    'wrench': '🔧', 'schraubenschluessel': '🔧', 'screwdriver': '🪛', 'schraubenzieher': '🪛',
    'pliers': '🔧', 'zange': '🔧',
    'gear': '⚙️', 'zahnrad': '⚙️', 'gears': '⚙️',
    'nail': '🔩', 'nagel': '🔩', 'nails': '🔩', 'naegel': '🔩',
    'screw': '🔩', 'schraube': '🔩', 'screws': '🔩', 'schrauben': '🔩',
    'bolzen': '🔩',
    'fishingrod': '🎣', 'angelrute': '🎣', 'fishingpole': '🎣',
    'net': '🥅', 'netz': '🥅',
    'trap': '🪤', 'falle': '🪤', 'traps': '🪤', 'fallen': '🪤',
    'scissors': '✂️', 'schere': '✂️',
    'needle': '🪡', 'nadel': '🪡', 'thread': '🧵', 'faden': '🧵',

    // === CLOTHING & ACCESSORIES / KLEIDUNG ===
    'hat': '🎩', 'hut': '🎩', 'hats': '🎩', 'huete': '🎩',
    'cap': '🧢', 'muetze': '🧢', 'beanie': '🧢',
    'helmet': '⛑️', 'helm': '⛑️',
    'crown': '👑', 'krone': '👑', 'crowns': '👑', 'kronen': '👑',
    'tiara': '👸', 'diadem': '👸',
    'cloak': '🧥', 'umhang': '🧥', 'cape': '🧥',
    'coat': '🧥', 'mantel': '🧥', 'jacket': '🧥', 'jacke': '🧥',
    'robe': '👘', 'dress': '👗', 'kleid': '👗',
    'shirt': '👔', 'hemd': '👔', 'tunic': '👕',
    'pants': '👖', 'hose': '👖', 'trousers': '👖',
    'boot': '👢', 'stiefel': '👢', 'boots': '👢',
    'shoe': '👟', 'schuh': '👟', 'shoes': '👟', 'schuhe': '👟',
    'sandal': '🩴', 'sandale': '🩴', 'sandals': '🩴', 'sandalen': '🩴',
    'sock': '🧦', 'socke': '🧦', 'socks': '🧦', 'socken': '🧦',
    'glove': '🧤', 'handschuh': '🧤', 'gloves': '🧤', 'handschuhe': '🧤',
    'ring': '💍', 'rings': '💍', 'ringe': '💍',
    'bracelet': '📿', 'armband': '📿', 'bracelets': '📿', 'armbaender': '📿',
    'necklace': '📿', 'halskette': '📿',
    'pendant': '📿', 'anhaenger': '📿',
    'earring': '💎', 'ohrring': '💎', 'earrings': '💎', 'ohrringe': '💎',
    'belt': '🎗️', 'guertel': '🎗️',
    'bag': '👜', 'tasche': '👜', 'bags': '👜', 'taschen': '👜',
    'backpack': '🎒', 'rucksack': '🎒',
    'pouch': '💰', 'beutel': '💰', 'sack': '💰',
    'purse': '👛', 'geldboerse': '👛', 'wallet': '👛',
    'glasses': '👓', 'brille': '👓', 'spectacles': '👓',
    'sunglasses': '🕶️', 'sonnenbrille': '🕶️',
    'mask': '🎭', 'maske': '🎭', 'masks': '🎭', 'masken': '🎭',
    'scarf': '🧣', 'schal': '🧣',
    'hairbow': '🎀', 'schleife': '🎀',
    'button': '🔘', 'knopf': '🔘', 'buttons': '🔘', 'knoepfe': '🔘',

    // === TREASURES / SCHAETZE ===
    'gold': '🪙', 'silver': '🥈', 'silber': '🥈',
    'bronze': '🥉', 'copper': '🟤', 'kupfer': '🟤',
    'gem': '💎', 'gems': '💎', 'jewel': '💎', 'juwel': '💎', 'jewels': '💎', 'juwelen': '💎',
    'diamond': '💎', 'diamant': '💎', 'diamonds': '💎', 'diamanten': '💎',
    'ruby': '❤️', 'rubin': '❤️', 'rubies': '❤️', 'rubine': '❤️',
    'emerald': '💚', 'smaragd': '💚', 'emeralds': '💚', 'smaragde': '💚',
    'sapphire': '💙', 'saphir': '💙', 'sapphires': '💙', 'saphire': '💙',
    'amethyst': '💜', 'topaz': '💛', 'topas': '💛',
    'opal': '🤍', 'jade': '💚', 'amber': '🟠', 'bernstein': '🟠',
    'gemstone': '💎', 'edelstein': '💎', 'gemstones': '💎', 'edelsteine': '💎',
    'treasure': '💰', 'schatz': '💰', 'treasures': '💰', 'schaetze': '💰',
    'chest': '📦', 'truhe': '📦', 'treasurechest': '📦', 'schatztruhe': '📦',
    'coin': '🪙', 'muenze': '🪙', 'coins': '🪙', 'muenzen': '🪙',
    'goldcoin': '🪙', 'goldmuenze': '🪙',
    'money': '💵', 'geld': '💵', 'cash': '💵',
    'trophy': '🏆', 'pokal': '🏆', 'trophae': '🏆',
    'medal': '🏅', 'medaille': '🏅', 'medals': '🏅', 'medaillen': '🏅',
    'award': '🎖️', 'orden': '🎖️', 'badge': '📛', 'abzeichen': '📛',
    'prize': '🎁', 'preis': '🎁',
    'loot': '💰', 'beute': '💰', 'booty': '💰',

    // === FOOD & DRINKS / ESSEN & TRINKEN ===
    'apple': '🍎', 'apfel': '🍎', 'apples': '🍎', 'aepfel': '🍎',
    'greenapple': '🍏', 'gruenerapfel': '🍏',
    'pear': '🍐', 'birne': '🍐', 'orange': '🍊',
    'lemon': '🍋', 'zitrone': '🍋', 'lime': '🍋', 'limette': '🍋',
    'banana': '🍌', 'banane': '🍌', 'bananas': '🍌', 'bananen': '🍌',
    'strawberry': '🍓', 'erdbeere': '🍓', 'strawberries': '🍓', 'erdbeeren': '🍓',
    'cherry': '🍒', 'kirsche': '🍒', 'cherries': '🍒', 'kirschen': '🍒',
    'grape': '🍇', 'weintraube': '🍇', 'grapes': '🍇', 'weintrauben': '🍇',
    'watermelon': '🍉', 'wassermelone': '🍉', 'melon': '🍈', 'melone': '🍈',
    'peach': '🍑', 'pfirsich': '🍑', 'mango': '🥭',
    'pineapple': '🍍', 'ananas': '🍍', 'coconut': '🥥', 'kokosnuss': '🥥',
    'kiwi': '🥝', 'avocado': '🥑', 'tomato': '🍅', 'tomate': '🍅',
    'blueberry': '🫐', 'blaubeere': '🫐', 'berry': '🫐', 'beere': '🫐',
    'bread': '🍞', 'brot': '🍞', 'loaf': '🍞', 'laib': '🍞',
    'croissant': '🥐', 'baguette': '🥖', 'pretzel': '🥨', 'brezel': '🥨',
    'cake': '🎂', 'kuchen': '🎂', 'pie': '🥧', 'torte': '🥧',
    'cupcake': '🧁', 'cookie': '🍪', 'keks': '🍪', 'cookies': '🍪', 'kekse': '🍪',
    'donut': '🍩', 'candy': '🍬', 'suessigkeit': '🍬', 'candies': '🍬', 'suessigkeiten': '🍬',
    'bonbon': '🍬', 'lollipop': '🍭', 'lutscher': '🍭',
    'chocolate': '🍫', 'schokolade': '🍫', 'icecream': '🍦', 'eis': '🍦',
    'cheese': '🧀', 'kaese': '🧀',
    'meat': '🍖', 'fleisch': '🍖', 'steak': '🥩',
    'ham': '🥓', 'schinken': '🥓', 'bacon': '🥓',
    'chickenmeat': '🍗', 'haehnchen': '🍗', 'drumstick': '🍗',
    'hotdog': '🌭', 'wurst': '🌭', 'sausage': '🌭',
    'burger': '🍔', 'hamburger': '🍔', 'pizza': '🍕',
    'taco': '🌮', 'burrito': '🌯', 'fries': '🍟', 'pommes': '🍟',
    'soup': '🍲', 'suppe': '🍲', 'stew': '🍲', 'eintopf': '🍲',
    'salad': '🥗', 'salat': '🥗',
    'rice': '🍚', 'reis': '🍚', 'noodles': '🍜', 'nudeln': '🍜', 'pasta': '🍝',
    'sushi': '🍣', 'onigiri': '🍙', 'dumpling': '🥟',
    'carrot': '🥕', 'karotte': '🥕', 'moehre': '🥕',
    'corn': '🌽', 'mais': '🌽', 'pepper': '🌶️', 'paprika': '🌶️',
    'broccoli': '🥦', 'brokkoli': '🥦', 'garlic': '🧄', 'knoblauch': '🧄',
    'onion': '🧅', 'zwiebel': '🧅', 'potato': '🥔', 'kartoffel': '🥔',
    'eggplant': '🍆', 'aubergine': '🍆', 'cucumber': '🥒', 'gurke': '🥒',
    'water': '💧', 'wasser': '💧', 'milk': '🥛', 'milch': '🥛',
    'juice': '🧃', 'saft': '🧃', 'tea': '🍵', 'tee': '🍵',
    'coffee': '☕', 'kaffee': '☕', 'cocoa': '☕', 'kakao': '☕',
    'honey': '🍯', 'honig': '🍯', 'jam': '🍯', 'marmelade': '🍯',
    'butter': '🧈', 'oil': '🫒', 'oel': '🫒',
    'salt': '🧂', 'salz': '🧂', 'pfeffer': '🌶️',
    'wine': '🍷', 'wein': '🍷', 'beer': '🍺', 'bier': '🍺',
    'drink': '🍹', 'getraenk': '🍹', 'cocktail': '🍸',
    'bottle': '🍾', 'flasche': '🍾', 'flask': '⚗️',

    // === BOOKS & KNOWLEDGE / BUECHER & WISSEN ===
    'book': '📖', 'buch': '📖', 'books': '📚', 'buecher': '📚',
    'spellbook': '📖', 'zauberbuch': '📖', 'magicbook': '📖',
    'diary': '📔', 'tagebuch': '📔', 'journal': '📔',
    'notebook': '📓', 'notizbuch': '📓',
    'encyclopedia': '📚', 'lexikon': '📚', 'dictionary': '📚', 'woerterbuch': '📚',
    'letter': '✉️', 'brief': '✉️', 'letters': '✉️', 'briefe': '✉️',
    'message': '📝', 'nachricht': '📝',
    'note': '📝', 'notiz': '📝', 'notes': '📝', 'notizen': '📝',
    'paper': '📄', 'papier': '📄', 'zettel': '📄',
    'scroll': '📜', 'pergament': '📜', 'parchment': '📜', 'rolle': '📜',
    'page': '📄', 'seite': '📄', 'pages': '📄', 'seiten': '📄',
    'map': '🗺️', 'karte': '🗺️', 'maps': '🗺️', 'karten': '🗺️',
    'treasuremap': '🗺️', 'schatzkarte': '🗺️',
    'worldmap': '🗺️', 'weltkarte': '🗺️',
    'compass': '🧭', 'kompass': '🧭',
    'telescope': '🔭', 'fernglas': '🔭', 'binoculars': '🔭',
    'magnifyingglass': '🔍', 'lupe': '🔍', 'magnifier': '🔍',
    'microscope': '🔬', 'mikroskop': '🔬',
    'hourglass': '⏳', 'sanduhr': '⏳', 'timer': '⏱️',
    'clock': '⏰', 'uhr': '⏰', 'watch': '⌚', 'armbanduhr': '⌚',
    'sundial': '☀️', 'sonnenuhr': '☀️',
    'calendar': '📅', 'kalender': '📅', 'schedule': '📅',
    'newspaper': '📰', 'zeitung': '📰',
    'sign': '🪧', 'verkehrsschild': '🪧', 'signpost': '🪧', 'wegweiser': '🪧',

    // === LIGHT & FIRE / LICHT & FEUER ===
    'torch': '🔦', 'fackel': '🔦', 'torches': '🔦', 'fackeln': '🔦',
    'lantern': '🏮', 'laterne': '🏮', 'lanterns': '🏮', 'laternen': '🏮',
    'lamp': '🪔', 'lampe': '🪔', 'lamps': '🪔', 'lampen': '🪔',
    'candle': '🕯️', 'kerze': '🕯️', 'candles': '🕯️', 'kerzen': '🕯️',
    'chandelier': '🕯️', 'kronleuchter': '🕯️',
    'bulb': '💡', 'gluehbirne': '💡', 'lightbulb': '💡',
    'light': '💡', 'licht': '💡', 'lights': '💡', 'lichter': '💡',
    'fire': '🔥', 'feuer': '🔥', 'fires': '🔥',
    'flame': '🔥', 'flamme': '🔥', 'flames': '🔥', 'flammen': '🔥',
    'ember': '🔥', 'glut': '🔥', 'embers': '🔥',
    'ash': '⚫', 'asche': '⚫', 'ashes': '⚫',
    'smoke': '💨', 'rauch': '💨',
    'match': '🔥', 'streichholz': '🔥', 'matches': '🔥', 'streichhoelzer': '🔥',
    'firework': '🎆', 'feuerwerk': '🎆', 'fireworks': '🎆',
    'sparkler': '🎇', 'wunderkerze': '🎇',
    'bonfire': '🔥', 'lagerfeuer': '🔥', 'campfire': '🏕️',
    'ray': '☀️', 'strahl': '☀️', 'rays': '☀️', 'strahlen': '☀️',
    'beam': '💡', 'lichtstrahl': '💡',

    // === MUSIC & ART / MUSIK & KUNST ===
    'music': '🎵', 'musik': '🎵',
    'musicnote': '🎵', 'musicnotes': '🎵', 'noten': '🎵',
    'flute': '🎵', 'floete': '🎵',
    'drum': '🥁', 'trommel': '🥁', 'drums': '🥁', 'trommeln': '🥁',
    'bell': '🔔', 'glocke': '🔔', 'bells': '🔔', 'glocken': '🔔',
    'harp': '🎵', 'harfe': '🎵',
    'violin': '🎻', 'geige': '🎻', 'fiddle': '🎻',
    'guitar': '🎸', 'gitarre': '🎸',
    'piano': '🎹', 'klavier': '🎹', 'keyboard': '🎹',
    'trumpet': '🎺', 'trompete': '🎺', 'musikhorn': '📯',
    'saxophone': '🎷', 'saxophon': '🎷', 'sax': '🎷',
    'microphone': '🎤', 'mikrofon': '🎤', 'mic': '🎤',
    'headphones': '🎧', 'kopfhoerer': '🎧',
    'speaker': '🔊', 'lautsprecher': '🔊',
    'radio': '📻', 'cd': '💿', 'record': '💿', 'schallplatte': '💿',
    'paint': '🎨', 'farbe': '🎨', 'paints': '🎨', 'farben': '🎨',
    'brush': '🖌️', 'pinsel': '🖌️', 'brushes': '🖌️',
    'palette': '🎨', 'crayon': '🖍️', 'wachsmalstift': '🖍️',
    'pencil': '✏️', 'bleistift': '✏️', 'pen': '🖊️', 'kugelschreiber': '🖊️',
    'canvas': '🖼️', 'leinwand': '🖼️',
    'painting': '🖼️', 'gemaelde': '🖼️', 'picture': '🖼️', 'bild': '🖼️',
    'frame': '🖼️', 'rahmen': '🖼️',
    'statue': '🗿', 'skulptur': '🗿', 'sculpture': '🗿',
    'theater': '🎭', 'theatre': '🎭', 'stage': '🎭', 'buehne': '🎭',
    'curtain': '🎭', 'vorhang': '🎭',
    'ticket': '🎫', 'eintrittskarte': '🎟️', 'tickets': '🎟️',

    // === BUILDINGS & PLACES / GEBAEUDE & ORTE ===
    'house': '🏠', 'haus': '🏠', 'houses': '🏘️', 'haeuser': '🏘️',
    'home': '🏠', 'zuhause': '🏠', 'cottage': '🏡',
    'huette': '🛖', 'cabin': '🛖', 'blockhuette': '🛖',
    'castle': '🏰', 'burgschloss': '🏰', 'burg': '🏰', 'palace': '🏰', 'palast': '🏰',
    'fortress': '🏰', 'festung': '🏰',
    'tower': '🗼', 'turm': '🗼', 'towers': '🗼', 'tuerme': '🗼',
    'lighthouse': '🗼', 'leuchtturm': '🗼',
    'temple': '🛕', 'tempel': '🛕', 'shrine': '⛩️', 'schrein': '⛩️',
    'church': '⛪', 'kirche': '⛪', 'chapel': '⛪', 'kapelle': '⛪',
    'mosque': '🕌', 'moschee': '🕌', 'synagogue': '🕍',
    'pagoda': '🗼', 'pyramid': '🔺', 'pyramide': '🔺',
    'door': '🚪', 'tuer': '🚪', 'doors': '🚪', 'tueren': '🚪',
    'gate': '⛩️', 'tor': '⛩️', 'gates': '⛩️', 'tore': '⛩️',
    'window': '🪟', 'fenster': '🪟', 'windows': '🪟',
    'ladder': '🪜', 'leiter': '🪜',
    'stairs': '🪜', 'treppe': '🪜', 'staircase': '🪜',
    'bridge': '🌉', 'bruecke': '🌉', 'bridges': '🌉', 'bruecken': '🌉',
    'well': '⛲', 'brunnen': '⛲', 'fountain': '⛲',
    'mill': '🏭', 'muehle': '🏭', 'windmill': '🏭',
    'barn': '🏚️', 'scheune': '🏚️', 'farm': '🏡', 'bauernhof': '🏡',
    'tunnel': '🚇', 'passage': '🚇',
    'grave': '🪦', 'grab': '🪦', 'tombstone': '🪦', 'grabstein': '🪦',
    'cemetery': '🪦', 'friedhof': '🪦',
    'crypt': '⚰️', 'gruft': '⚰️', 'coffin': '⚰️', 'sarg': '⚰️',
    'dungeon': '🕳️', 'kerker': '🕳️', 'prison': '🏢', 'gefaengnis': '🏢',
    'school': '🏫', 'schule': '🏫', 'university': '🏛️', 'universitaet': '🏛️',
    'hospital': '🏥', 'krankenhaus': '🏥',
    'hotel': '🏨', 'inn': '🏨', 'gasthof': '🏨', 'tavern': '🍺', 'taverne': '🍺',
    'shop': '🏪', 'laden': '🏪', 'store': '🏬', 'geschaeft': '🏬',
    'market': '🏪', 'markt': '🏪',
    'bank': '🏦', 'museum': '🏛️',
    'library': '📚', 'bibliothek': '📚',
    'stadium': '🏟️', 'stadion': '🏟️', 'arena': '🏟️',
    'tent': '⛺', 'zelt': '⛺', 'camping': '🏕️',

    // === WEATHER / WETTER ===
    'weather': '🌤️', 'wetter': '🌤️',
    'sunny': '☀️', 'sonnig': '☀️', 'cloudy': '☁️', 'bewoelkt': '☁️',
    'rain': '🌧️', 'regen': '🌧️', 'rainy': '🌧️', 'regnerisch': '🌧️',
    'raindrop': '💧', 'regentropfen': '💧', 'raindrops': '💧',
    'storm': '🌪️', 'sturm': '🌪️', 'stormy': '⛈️', 'stuermisch': '⛈️',
    'thunderstorm': '⛈️', 'gewitter': '⛈️',
    'tornado': '🌪️', 'hurricane': '🌀', 'hurrikan': '🌀',
    'wind': '💨', 'windy': '💨', 'windig': '💨',
    'breeze': '🍃', 'brise': '🍃',
    'fog': '🌫️', 'nebel': '🌫️', 'foggy': '🌫️', 'neblig': '🌫️',
    'mist': '🌫️', 'dunst': '🌫️',
    'snow': '❄️', 'schnee': '❄️', 'snowy': '🌨️', 'schneeig': '🌨️',
    'snowflake': '❄️', 'schneeflocke': '❄️', 'snowflakes': '❄️', 'schneeflocken': '❄️',
    'blizzard': '🌨️', 'schneesturm': '🌨️',
    'ice': '🧊', 'eiskristall': '🧊', 'icy': '🧊', 'eisig': '🧊',
    'frost': '❄️', 'icicle': '🧊', 'eiszapfen': '🧊',
    'hail': '🌨️', 'hagel': '🌨️',
    'dew': '💧', 'tau': '💧',

    // === HEARTS & EMOTIONS / HERZEN & GEFUEHLE ===
    'heart': '❤️', 'herz': '❤️', 'hearts': '❤️', 'herzen': '❤️',
    'redheart': '❤️', 'blueheart': '💙', 'greenheart': '💚',
    'yellowheart': '💛', 'purpleheart': '💜', 'blackheart': '🖤',
    'whiteheart': '🤍', 'orangeheart': '🧡', 'pinkheart': '💗',
    'brokenheart': '💔', 'gebrochenes_herz': '💔',
    'sparklingheart': '💖', 'growingheart': '💗',
    'love': '💕', 'liebe': '💕', 'loving': '💕',
    'kiss': '💋', 'kuss': '💋',
    'friendship': '💛', 'freundschaft': '💛',
    'happiness': '😊', 'glueck': '🍀', 'lucky': '🍀',
    'joy': '😊', 'freude': '😊',
    'sadness': '😢', 'traurigkeit': '😢',
    'anger': '😠', 'wut': '😠', 'zorn': '😠',
    'fear': '😨', 'angst': '😨',
    'surprise': '😲', 'ueberraschung': '😲',
    'courage': '💪', 'mut': '💪', 'brave': '💪', 'mutig': '💪',
    'strength': '💪', 'kraft': '💪', 'staerke': '💪',
    'power': '⚡', 'macht': '⚡',
    'hope': '🌟', 'hoffnung': '🌟',
    'faith': '🙏', 'glaube': '🙏',
    'peace': '☮️', 'frieden': '☮️',
    'wisdom': '🦉', 'weisheit': '🦉',
    'memory': '💭', 'erinnerung': '💭', 'memories': '💭', 'erinnerungen': '💭',
    'thought': '💭', 'gedanke': '💭', 'thoughts': '💭', 'gedanken': '💭',
    'idea': '💡', 'idee': '💡',
    'soul': '👻', 'seele': '👻',

    // === SPECIAL ITEMS / BESONDERE ITEMS ===
    'token': '🎰', 'plaque': '🏷️', 'plakette': '🏷️',
    'dice': '🎲', 'wuerfel': '🎲',
    'card': '🃏', 'spielkarte': '🃏', 'cards': '🃏',
    'playingcard': '🃏', 'kartenspiel': '🃏',
    'joker': '🃏',
    'puzzle': '🧩', 'puzzlepiece': '🧩', 'puzzleteil': '🧩',
    'balloon': '🎈', 'ballon': '🎈', 'balloons': '🎈', 'ballons': '🎈',
    'gift': '🎁', 'geschenk': '🎁', 'gifts': '🎁', 'geschenke': '🎁',
    'present': '🎁',
    'partysurprise': '🎉',
    'party': '🎉', 'feier': '🎉',
    'confetti': '🎊', 'konfetti': '🎊',
    'streamer': '🎊', 'luftschlange': '🎊',
    'camera': '📷', 'kamera': '📷',
    'photo': '🖼️', 'foto': '🖼️', 'photograph': '📷',
    'mirror': '🪞', 'spiegel': '🪞',
    'umbrella': '☂️', 'regenschirm': '☂️', 'parasol': '⛱️', 'sonnenschirm': '⛱️',
    'fan': '🪭', 'faecher': '🪭',
    'broom': '🧹', 'besen': '🧹',
    'mop': '🧹', 'mopp': '🧹',
    'bucket': '🪣', 'eimer': '🪣',
    'magnet': '🧲',
    'battery': '🔋', 'batterie': '🔋',
    'plug': '🔌', 'stecker': '🔌',
    'flag': '🚩', 'flagge': '🚩', 'fahne': '🚩',
    'banner': '🏴',
    'ribbon': '🎀',
    'tag': '🏷️', 'etikett': '🏷️',
    'label': '🏷️',
    'stamp': '📮', 'briefmarke': '📮',
    'envelope': '✉️', 'umschlag': '✉️',
    'package': '📦', 'paket': '📦',
    'box': '📦', 'schachtel': '📦', 'kiste': '📦',
    'crate': '📦',
    'barrel': '🛢️', 'fass': '🛢️',
    'basket': '🧺', 'korb': '🧺',
    'jar': '🏺', 'glas': '🏺', 'vase': '🏺',
    'pot': '🍯', 'topf': '🍯',
    'cauldron': '🍯', 'kessel': '🍯',
    'bowl': '🥣', 'schuessel': '🥣',
    'cup': '☕', 'tasse': '☕', 'mug': '☕', 'becher': '☕',
    'plate': '🍽️', 'teller': '🍽️',
    'fork': '🍴', 'gabel': '🍴',
    'spoon': '🥄', 'loeffel': '🥄',
    'chopsticks': '🥢', 'staebchen': '🥢',
  };
  const lowerItem = item.toLowerCase();
  // Check for exact match first
  if (emojiMap[lowerItem]) {
    return emojiMap[lowerItem];
  }
  // Check for partial matches (longer keys first for better matching)
  const sortedKeys = Object.keys(emojiMap).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    if (lowerItem.includes(key) || key.includes(lowerItem)) {
      return emojiMap[key];
    }
  }
  return '📦'; // Default
}

/** Formatiert einen Item-Namen für die Anzeige */
function formatItemName(item: string): string {
  return item
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// ----- FIND TARGET OVERLAY / FIND TARGET OVERLAY -----

interface FindTargetOverlayProps {
  config: FindTargetConfig;
  width: number;
  height: number;
  found: boolean;
  onFind: () => void;
}

function FindTargetOverlay({ config, found, onFind }: FindTargetOverlayProps) {
  const [wrongClicks, setWrongClicks] = useState(0);
  const targetSize = config.size || 60;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (found) return;
    setWrongClicks(w => w + 1);
  };

  const handleTargetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (found) return;
    onFind();
  };

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        cursor: found ? 'default' : 'crosshair',
      }}
      onClick={handleBackgroundClick}
    >
      {/* Hint bar at top */}
      {!found && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '12px 20px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ color: '#FFD700', fontSize: 18, fontWeight: 'bold' }}>
            🔍 {config.hint || 'Finde das versteckte Objekt!'}
          </div>
          {wrongClicks > 2 && (
            <div style={{ color: '#ff6b6b', fontSize: 14 }}>
              💡 Schau genauer hin...
            </div>
          )}
        </div>
      )}

      {/* The hidden target - slightly visible */}
      <div
        style={{
          position: 'absolute',
          left: `${config.position.x}%`,
          top: `${config.position.y}%`,
          transform: 'translate(-50%, -50%)',
          width: targetSize,
          height: targetSize,
          cursor: found ? 'default' : 'pointer',
          opacity: found ? 1 : 0.7, // Slightly visible
          transition: 'all 0.3s',
          filter: found ? 'none' : 'brightness(0.8)',
          animation: found ? 'found-bounce 0.5s ease-out' : undefined,
        }}
        onClick={handleTargetClick}
      >
        {config.target}
      </div>

      {/* Found celebration */}
      {found && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
          pointerEvents: 'none',
        }}>
          <div style={{
            fontSize: 48,
            animation: 'found-bounce 0.5s ease-out',
          }}>
            🎉
          </div>
          <div style={{
            color: '#4CAF50',
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 16,
          }}>
            {config.foundText || 'Gefunden!'}
          </div>
        </div>
      )}

      <style>{`
        @keyframes found-bounce {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.3); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes item-popup {
          0% { transform: translateX(-50%) translateY(-20px); opacity: 0; }
          100% { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ----- STORY-BUILDER HELPERS / STORY-BUILDER HELPERS -----

/** Scene input for createLinearStory */
export interface SimpleScene {
  id: string;
  background: ReactNode;
  characters?: ReactNode;
  dialogue?: string[];
  speaker?: string;
  transition?: TransitionType;
  /** Choices for branching - if present, story branches here */
  choices?: StoryChoice[];
  /** Mini-game in this scene */
  miniGame?: MiniGameConfig;
  /** Find something hidden in the scene */
  findTarget?: FindTargetConfig;
  // ----- MINI-GAME NAVIGATION -----
  /** Szene bei Spielsieg / Scene on mini-game win */
  onGameWinSceneId?: string;
  /** Szene bei Spielverlust / Scene on mini-game loss */
  onGameLoseSceneId?: string;
  // ----- SPIELSTAND / GAME STATE -----
  /** Aktionen beim Betreten / Actions on enter */
  onEnterActions?: StateAction[];
  /** Aktionen beim Mini-Spiel Sieg / Actions on mini-game win */
  onMiniGameWinActions?: StateAction[];
  /** Aktionen beim Finden / Actions on finding target */
  onFindTargetActions?: StateAction[];
}

/**
 * Erstellt eine Geschichte / Creates a story
 * Supports both linear and branching stories!
 */
export function createLinearStory(
  title: string,
  scenes: SimpleScene[]
): Story {
  return {
    title,
    startSceneId: scenes[0]?.id || 'start',
    scenes: scenes.map((scene, index) => ({
      id: scene.id,
      background: scene.background,
      characters: scene.characters,
      transition: scene.transition || (index > 0 ? 'fade' : 'none'),
      dialogue: scene.dialogue?.map(text => ({
        text,
        speaker: scene.speaker,
        position: 'bottom' as const,
      })),
      choices: scene.choices,
      miniGame: scene.miniGame,
      findTarget: scene.findTarget,
      // Mini-game navigation
      onGameWinSceneId: scene.onGameWinSceneId,
      onGameLoseSceneId: scene.onGameLoseSceneId,
      // State actions
      onEnterActions: scene.onEnterActions,
      onMiniGameWinActions: scene.onMiniGameWinActions,
      onFindTargetActions: scene.onFindTargetActions,
    })),
  };
}

/**
 * Erstellt eine verzweigte Geschichte / Creates a branching story
 */
export function createBranchingStory(
  title: string,
  scenes: StoryScene[],
  startSceneId: string
): Story {
  return {
    title,
    scenes,
    startSceneId,
  };
}
