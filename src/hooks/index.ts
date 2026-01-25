/**
 * SPIEL-HELFER / GAME HELPERS
 * ===========================
 * Nützliche Funktionen für die Spieleentwicklung.
 * Useful functions for game development.
 */

export { useKeyboard, useKeyPress } from './useKeyboard';
export { useGameLoop } from './useGameLoop';
export {
  checkCollision,
  pointInRect,
  distance,
  clamp,
  randomBetween,
  randomIntBetween,
} from './useCollision';

// Sound System
export {
  useSound,
  playSound,
  playCustomSound,
  playMelody,
  playVictoryFanfare,
  playGameOver,
  playCoinCollect,
  playCountdownBeep,
  type SoundEffect,
} from './useSound';
