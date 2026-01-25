import { useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { Transition } from './Transitions';
import type { TransitionType } from './Transitions';

/**
 * GESCHICHTEN-SPIELER / STORY PLAYER
 * ==================================
 * Spielt interaktive Geschichten mit Szenen, Dialogen und Übergängen!
 * Plays interactive stories with scenes, dialogues and transitions!
 */

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
  /** Szene bei Spielverlust / Scene on game loss */
  onGameLoseSceneId?: string;
  /** Klick-Suche: Finde etwas in der Szene / Click-to-find: Find something in scene */
  findTarget?: FindTargetConfig;
}

export interface StoryChoice {
  /** Anzeigetext / Display text */
  text: string;
  /** Nächste Szenen-ID / Next scene ID */
  nextSceneId: string;
  /** Bedingung zum Anzeigen / Condition to show */
  condition?: () => boolean;
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
}

// ----- HAUPT-KOMPONENTE / MAIN COMPONENT -----

export function StoryPlayer({
  story,
  width = 800,
  height = 500,
  onComplete,
  onSceneChange,
  autoStart = true,
}: StoryPlayerProps) {
  const [currentSceneId, setCurrentSceneId] = useState<string | null>(
    autoStart ? story.startSceneId : null
  );
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoStart);
  // Mini-game state
  const [isPlayingMiniGame, setIsPlayingMiniGame] = useState(false);
  const [showMiniGameIntro, setShowMiniGameIntro] = useState(false);
  const [miniGameProgress, setMiniGameProgress] = useState(0);
  // Find-target state
  const [isFindingTarget, setIsFindingTarget] = useState(false);
  const [targetFound, setTargetFound] = useState(false);

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
      setIsPlayingMiniGame(false);
      setShowMiniGameIntro(false);
      setMiniGameProgress(0);
      setIsFindingTarget(false);
      setTargetFound(false);
    }
  }, [currentSceneId]);

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
      // Find next scene in sequence
      const currentIndex = story.scenes.findIndex(s => s.id === currentSceneId);
      if (currentIndex < story.scenes.length - 1) {
        goToScene(story.scenes[currentIndex + 1].id);
      } else {
        onComplete?.();
      }
    }
  }, [currentScene, hasMoreDialogue, hasFindTarget, isFindingTarget, targetFound, hasMiniGame, isPlayingMiniGame, currentSceneId, story.scenes]);

  // Start mini-game
  const startMiniGame = useCallback(() => {
    setShowMiniGameIntro(false);
    setIsPlayingMiniGame(true);
    setMiniGameProgress(0);
  }, []);

  // Mini-game win handler
  const handleMiniGameWin = useCallback(() => {
    setIsPlayingMiniGame(false);
    // After winning, show choices or advance
    if (currentScene?.choices && currentScene.choices.length > 0) {
      setShowChoices(true);
    } else {
      const currentIndex = story.scenes.findIndex(s => s.id === currentSceneId);
      if (currentIndex < story.scenes.length - 1) {
        goToScene(story.scenes[currentIndex + 1].id);
      } else {
        onComplete?.();
      }
    }
  }, [currentScene, currentSceneId, story.scenes, onComplete]);

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
  }, [currentScene, hasMiniGame, isPlayingMiniGame, currentSceneId, story.scenes, onComplete]);

  const goToScene = useCallback((sceneId: string) => {
    const nextScene = story.scenes.find(s => s.id === sceneId);
    if (!nextScene) return;

    currentScene?.onExit?.();

    if (nextScene.transition && nextScene.transition !== 'none') {
      setIsTransitioning(true);
    } else {
      setCurrentSceneId(sceneId);
    }
  }, [story.scenes, currentScene]);

  const handleTransitionComplete = useCallback(() => {
    setIsTransitioning(false);
    // Find the scene we're transitioning to
    const currentIndex = story.scenes.findIndex(s => s.id === currentSceneId);
    const nextScene = story.scenes[currentIndex + 1];
    if (nextScene) {
      setCurrentSceneId(nextScene.id);
    }
  }, [currentSceneId, story.scenes]);

  const handleChoice = useCallback((choice: StoryChoice) => {
    setShowChoices(false);
    goToScene(choice.nextSceneId);
  }, [goToScene]);

  const handleClick = useCallback(() => {
    if (isTransitioning) return;
    if (showChoices) return; // Wait for choice
    if (isPlayingMiniGame) return; // Don't advance during mini-game
    if (showMiniGameIntro) return; // Wait for mini-game start
    if (isFindingTarget) return; // Wait for target to be found
    if (targetFound) return; // Wait for found animation
    advanceDialogue();
  }, [isTransitioning, showChoices, isPlayingMiniGame, showMiniGameIntro, isFindingTarget, targetFound, advanceDialogue]);

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
                {currentScene.miniGame.component({
                  width: width * 0.85,
                  height: height * 0.8 - 50,
                  onWin: handleMiniGameWin,
                  onLose: handleMiniGameLose,
                  onProgress: setMiniGameProgress,
                })}
              </div>
            </div>
          </>
        )}

        {/* Entscheidungen / Choices */}
        {showChoices && currentScene?.choices && (
          <ChoicesPanel
            choices={currentScene.choices}
            onChoice={handleChoice}
          />
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

function ChoicesPanel({ choices, onChoice }: { choices: StoryChoice[]; onChoice: (choice: StoryChoice) => void }) {
  const visibleChoices = choices.filter(c => !c.condition || c.condition());

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
      {visibleChoices.map((choice, index) => (
        <button
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            onChoice(choice);
          }}
          style={{
            padding: '12px 32px',
            fontSize: 16,
            backgroundColor: '#4a4a8a',
            color: 'white',
            border: '2px solid #FFD700',
            borderRadius: 8,
            cursor: 'pointer',
            minWidth: 200,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#6a6aaa';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4a4a8a';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
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
      `}</style>
    </div>
  );
}

// ----- STORY-BUILDER HELPERS / STORY-BUILDER HELPERS -----

/** Scene input for createLinearStory */
interface SimpleScene {
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
