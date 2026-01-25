import { useCallback, useRef } from 'react';

/**
 * SOUND-SYSTEM / SOUND SYSTEM
 * ===========================
 * Einfaches Sound-System für Spiele mit Web Audio API!
 * Simple sound system for games using Web Audio API!
 */

// ----- TYPEN / TYPES -----

export type SoundEffect =
  // UI Sounds
  | 'click'
  | 'hover'
  | 'select'
  | 'back'
  // Game Sounds
  | 'success'
  | 'failure'
  | 'collect'
  | 'jump'
  | 'hit'
  | 'explosion'
  | 'powerup'
  | 'levelup'
  // Story Sounds
  | 'transition'
  | 'dialogue'
  | 'choice'
  | 'magic'
  | 'whoosh'
  // Nature Sounds
  | 'water'
  | 'wind'
  | 'thunder'
  | 'birds'
  // Character Sounds
  | 'footstep'
  | 'laugh'
  | 'gasp'
  | 'cheer';

interface SoundConfig {
  frequency?: number;
  duration?: number;
  type?: OscillatorType;
  volume?: number;
  attack?: number;
  decay?: number;
  // For complex sounds
  notes?: number[];
  pattern?: Array<{ freq: number; dur: number; delay?: number }>;
}

// ----- SOUND-DEFINITIONEN / SOUND DEFINITIONS -----

const SOUND_CONFIGS: Record<SoundEffect, SoundConfig> = {
  // UI Sounds
  click: { frequency: 800, duration: 0.05, type: 'square', volume: 0.2 },
  hover: { frequency: 600, duration: 0.03, type: 'sine', volume: 0.1 },
  select: { frequency: 1000, duration: 0.08, type: 'square', volume: 0.2 },
  back: { frequency: 400, duration: 0.1, type: 'square', volume: 0.2 },

  // Game Sounds
  success: {
    pattern: [
      { freq: 523, dur: 0.1 },
      { freq: 659, dur: 0.1, delay: 0.1 },
      { freq: 784, dur: 0.2, delay: 0.2 },
    ],
  },
  failure: {
    pattern: [
      { freq: 400, dur: 0.15 },
      { freq: 300, dur: 0.15, delay: 0.15 },
      { freq: 200, dur: 0.3, delay: 0.3 },
    ],
  },
  collect: { frequency: 880, duration: 0.1, type: 'square', volume: 0.3 },
  jump: {
    pattern: [
      { freq: 200, dur: 0.05 },
      { freq: 400, dur: 0.05, delay: 0.05 },
      { freq: 600, dur: 0.05, delay: 0.1 },
    ],
  },
  hit: { frequency: 150, duration: 0.15, type: 'sawtooth', volume: 0.4 },
  explosion: {
    pattern: [
      { freq: 100, dur: 0.2 },
      { freq: 80, dur: 0.15, delay: 0.1 },
      { freq: 60, dur: 0.1, delay: 0.2 },
    ],
  },
  powerup: {
    pattern: [
      { freq: 400, dur: 0.08 },
      { freq: 500, dur: 0.08, delay: 0.08 },
      { freq: 600, dur: 0.08, delay: 0.16 },
      { freq: 800, dur: 0.15, delay: 0.24 },
    ],
  },
  levelup: {
    pattern: [
      { freq: 523, dur: 0.1 },
      { freq: 659, dur: 0.1, delay: 0.1 },
      { freq: 784, dur: 0.1, delay: 0.2 },
      { freq: 1047, dur: 0.3, delay: 0.3 },
    ],
  },

  // Story Sounds
  transition: {
    pattern: [
      { freq: 300, dur: 0.2 },
      { freq: 400, dur: 0.2, delay: 0.15 },
      { freq: 350, dur: 0.3, delay: 0.3 },
    ],
  },
  dialogue: { frequency: 600, duration: 0.03, type: 'square', volume: 0.15 },
  choice: { frequency: 700, duration: 0.08, type: 'sine', volume: 0.25 },
  magic: {
    pattern: [
      { freq: 800, dur: 0.1 },
      { freq: 1200, dur: 0.1, delay: 0.05 },
      { freq: 1000, dur: 0.1, delay: 0.1 },
      { freq: 1400, dur: 0.15, delay: 0.15 },
    ],
  },
  whoosh: {
    pattern: [
      { freq: 400, dur: 0.1 },
      { freq: 200, dur: 0.15, delay: 0.05 },
      { freq: 100, dur: 0.1, delay: 0.15 },
    ],
  },

  // Nature Sounds
  water: {
    pattern: [
      { freq: 200, dur: 0.3 },
      { freq: 250, dur: 0.2, delay: 0.1 },
      { freq: 180, dur: 0.25, delay: 0.25 },
    ],
  },
  wind: { frequency: 150, duration: 0.5, type: 'sine', volume: 0.1 },
  thunder: {
    pattern: [
      { freq: 80, dur: 0.3 },
      { freq: 60, dur: 0.4, delay: 0.2 },
      { freq: 40, dur: 0.3, delay: 0.5 },
    ],
  },
  birds: {
    pattern: [
      { freq: 1200, dur: 0.05 },
      { freq: 1400, dur: 0.05, delay: 0.08 },
      { freq: 1100, dur: 0.08, delay: 0.15 },
    ],
  },

  // Character Sounds
  footstep: { frequency: 100, duration: 0.05, type: 'square', volume: 0.2 },
  laugh: {
    pattern: [
      { freq: 400, dur: 0.05 },
      { freq: 500, dur: 0.05, delay: 0.08 },
      { freq: 450, dur: 0.05, delay: 0.16 },
      { freq: 550, dur: 0.05, delay: 0.24 },
    ],
  },
  gasp: {
    pattern: [
      { freq: 300, dur: 0.1 },
      { freq: 500, dur: 0.15, delay: 0.05 },
    ],
  },
  cheer: {
    pattern: [
      { freq: 600, dur: 0.1 },
      { freq: 800, dur: 0.1, delay: 0.1 },
      { freq: 1000, dur: 0.15, delay: 0.2 },
    ],
  },
};

// ----- AUDIO CONTEXT -----

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  }
  return audioContext;
}

// ----- SOUND PLAYER -----

/**
 * Spielt einen einzelnen Ton / Plays a single tone
 */
function playTone(
  frequency: number,
  duration: number,
  type: OscillatorType = 'sine',
  volume: number = 0.3,
  delay: number = 0
): void {
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime + delay);

    // Envelope
    gainNode.gain.setValueAtTime(0, ctx.currentTime + delay);
    gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + delay + 0.01);
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + delay + duration);

    oscillator.start(ctx.currentTime + delay);
    oscillator.stop(ctx.currentTime + delay + duration + 0.1);
  } catch {
    // Audio not supported or blocked
  }
}

/**
 * Spielt einen Sound-Effekt / Plays a sound effect
 */
export function playSound(effect: SoundEffect): void {
  const config = SOUND_CONFIGS[effect];
  if (!config) return;

  if (config.pattern) {
    // Complex sound with multiple notes
    for (const note of config.pattern) {
      playTone(
        note.freq,
        note.dur,
        config.type || 'sine',
        config.volume || 0.3,
        note.delay || 0
      );
    }
  } else if (config.frequency && config.duration) {
    // Simple single tone
    playTone(
      config.frequency,
      config.duration,
      config.type || 'sine',
      config.volume || 0.3
    );
  }
}

/**
 * Spielt einen benutzerdefinierten Ton / Plays a custom tone
 */
export function playCustomSound(
  frequency: number,
  duration: number = 0.1,
  type: OscillatorType = 'sine',
  volume: number = 0.3
): void {
  playTone(frequency, duration, type, volume);
}

/**
 * Spielt eine Melodie / Plays a melody
 */
export function playMelody(
  notes: Array<{ frequency: number; duration: number }>,
  volume: number = 0.3
): void {
  let time = 0;
  for (const note of notes) {
    playTone(note.frequency, note.duration, 'sine', volume, time);
    time += note.duration;
  }
}

// ----- REACT HOOK -----

interface UseSoundOptions {
  enabled?: boolean;
  volume?: number;
}

interface UseSoundReturn {
  play: (effect: SoundEffect) => void;
  playCustom: (frequency: number, duration?: number) => void;
  playMelody: (notes: Array<{ frequency: number; duration: number }>) => void;
  setEnabled: (enabled: boolean) => void;
  isEnabled: boolean;
}

/**
 * React Hook für Sound-Effekte / React hook for sound effects
 *
 * @example
 * const { play } = useSound();
 * play('success');
 * play('jump');
 */
export function useSound(options: UseSoundOptions = {}): UseSoundReturn {
  const { enabled: initialEnabled = true, volume = 0.3 } = options;
  const enabledRef = useRef(initialEnabled);

  const play = useCallback((effect: SoundEffect) => {
    if (enabledRef.current) {
      playSound(effect);
    }
  }, []);

  const playCustom = useCallback((frequency: number, duration: number = 0.1) => {
    if (enabledRef.current) {
      playCustomSound(frequency, duration, 'sine', volume);
    }
  }, [volume]);

  const playMelodyFn = useCallback((notes: Array<{ frequency: number; duration: number }>) => {
    if (enabledRef.current) {
      playMelody(notes, volume);
    }
  }, [volume]);

  const setEnabled = useCallback((enabled: boolean) => {
    enabledRef.current = enabled;
  }, []);

  return {
    play,
    playCustom,
    playMelody: playMelodyFn,
    setEnabled,
    isEnabled: enabledRef.current,
  };
}

// ----- SPEZIELLE MELODIEN / SPECIAL MELODIES -----

/** Sieges-Fanfare / Victory fanfare */
export function playVictoryFanfare(): void {
  playMelody([
    { frequency: 523, duration: 0.15 }, // C
    { frequency: 659, duration: 0.15 }, // E
    { frequency: 784, duration: 0.15 }, // G
    { frequency: 1047, duration: 0.4 }, // High C
  ]);
}

/** Game Over Melodie / Game over melody */
export function playGameOver(): void {
  playMelody([
    { frequency: 392, duration: 0.2 }, // G
    { frequency: 349, duration: 0.2 }, // F
    { frequency: 330, duration: 0.2 }, // E
    { frequency: 262, duration: 0.5 }, // C
  ]);
}

/** Münz-Sammel-Sound / Coin collect sound */
export function playCoinCollect(): void {
  playTone(988, 0.05, 'square', 0.2);
  playTone(1319, 0.1, 'square', 0.2, 0.05);
}

/** Countdown-Beep / Countdown beep */
export function playCountdownBeep(isLast: boolean = false): void {
  if (isLast) {
    playTone(880, 0.3, 'sine', 0.3);
  } else {
    playTone(440, 0.1, 'sine', 0.2);
  }
}

// ----- EXPORT SOUND CONFIG FOR EXTENSION -----

export { SOUND_CONFIGS };
export type { SoundConfig };
