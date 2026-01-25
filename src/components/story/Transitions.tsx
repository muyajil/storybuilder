import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

/**
 * ÜBERGÄNGE / TRANSITIONS
 * =======================
 * Animierte Übergänge zwischen Szenen für Geschichten!
 * Animated transitions between scenes for stories!
 */

export type TransitionType =
  | 'fade'
  | 'slide-left'
  | 'slide-right'
  | 'slide-up'
  | 'slide-down'
  | 'zoom-in'
  | 'zoom-out'
  | 'wipe-left'
  | 'wipe-right'
  | 'circle'
  | 'pixel'
  | 'sparkle'
  | 'curtain'
  | 'flip'
  | 'none';

interface TransitionProps {
  /** Ist der Übergang aktiv? / Is the transition active? */
  isActive: boolean;
  /** Art des Übergangs / Type of transition */
  type: TransitionType;
  /** Dauer in ms / Duration in ms */
  duration?: number;
  /** Callback wenn fertig / Callback when done */
  onComplete?: () => void;
  /** Kinder-Elemente / Children elements */
  children?: ReactNode;
}

/**
 * Transition-Wrapper - Wickelt Inhalt in einen animierten Übergang
 * Wraps content in an animated transition
 */
export function Transition({
  isActive,
  type,
  duration = 500,
  onComplete,
  children
}: TransitionProps) {
  const [phase, setPhase] = useState<'idle' | 'entering' | 'active' | 'exiting'>('idle');

  useEffect(() => {
    if (isActive && phase === 'idle') {
      setPhase('entering');
      setTimeout(() => {
        setPhase('active');
        setTimeout(() => {
          setPhase('exiting');
          setTimeout(() => {
            setPhase('idle');
            onComplete?.();
          }, duration / 2);
        }, 100);
      }, duration / 2);
    }
  }, [isActive, phase, duration, onComplete]);

  if (phase === 'idle' && !isActive) return null;

  const getStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      pointerEvents: 'none',
    };

    switch (type) {
      case 'fade':
        return {
          ...base,
          backgroundColor: 'black',
          opacity: phase === 'active' ? 1 : 0,
          transition: `opacity ${duration / 2}ms ease-in-out`,
        };

      case 'slide-left':
        return {
          ...base,
          backgroundColor: 'black',
          transform: `translateX(${phase === 'entering' ? '100%' : phase === 'active' ? '0%' : '-100%'})`,
          transition: `transform ${duration / 2}ms ease-in-out`,
        };

      case 'slide-right':
        return {
          ...base,
          backgroundColor: 'black',
          transform: `translateX(${phase === 'entering' ? '-100%' : phase === 'active' ? '0%' : '100%'})`,
          transition: `transform ${duration / 2}ms ease-in-out`,
        };

      case 'slide-up':
        return {
          ...base,
          backgroundColor: 'black',
          transform: `translateY(${phase === 'entering' ? '100%' : phase === 'active' ? '0%' : '-100%'})`,
          transition: `transform ${duration / 2}ms ease-in-out`,
        };

      case 'slide-down':
        return {
          ...base,
          backgroundColor: 'black',
          transform: `translateY(${phase === 'entering' ? '-100%' : phase === 'active' ? '0%' : '100%'})`,
          transition: `transform ${duration / 2}ms ease-in-out`,
        };

      case 'zoom-in':
        return {
          ...base,
          backgroundColor: 'black',
          transform: `scale(${phase === 'entering' ? 0 : phase === 'active' ? 1 : 3})`,
          opacity: phase === 'exiting' ? 0 : 1,
          transition: `transform ${duration / 2}ms ease-in-out, opacity ${duration / 2}ms ease-in-out`,
        };

      case 'zoom-out':
        return {
          ...base,
          backgroundColor: 'black',
          transform: `scale(${phase === 'entering' ? 3 : phase === 'active' ? 1 : 0})`,
          opacity: phase === 'exiting' ? 0 : 1,
          transition: `transform ${duration / 2}ms ease-in-out, opacity ${duration / 2}ms ease-in-out`,
        };

      case 'circle':
        const circleSize = phase === 'entering' ? 0 : phase === 'active' ? 0 : 150;
        return {
          ...base,
          backgroundColor: 'black',
          clipPath: `circle(${circleSize}% at 50% 50%)`,
          transition: `clip-path ${duration / 2}ms ease-in-out`,
        };

      case 'curtain':
        return {
          ...base,
          background: 'linear-gradient(to right, #8B0000 0%, #DC143C 50%, #8B0000 100%)',
          transform: `scaleX(${phase === 'active' ? 1 : 0})`,
          transformOrigin: phase === 'entering' ? 'left' : 'right',
          transition: `transform ${duration / 2}ms ease-in-out`,
        };

      case 'flip':
        return {
          ...base,
          backgroundColor: 'black',
          transform: `rotateY(${phase === 'entering' ? '0deg' : phase === 'active' ? '90deg' : '180deg'})`,
          transition: `transform ${duration / 2}ms ease-in-out`,
        };

      default:
        return base;
    }
  };

  return (
    <div style={getStyle()}>
      {type === 'sparkle' && <SparkleOverlay phase={phase} duration={duration} />}
      {type === 'pixel' && <PixelOverlay phase={phase} duration={duration} />}
      {type === 'wipe-left' && <WipeOverlay phase={phase} duration={duration} direction="left" />}
      {type === 'wipe-right' && <WipeOverlay phase={phase} duration={duration} direction="right" />}
      {children}
    </div>
  );
}

// ----- SPEZIAL-OVERLAYS / SPECIAL OVERLAYS -----

function SparkleOverlay({ phase, duration }: { phase: string; duration: number }) {
  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10,
    delay: Math.random() * 200,
  }));

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: phase === 'active' ? 'rgba(255,215,0,0.8)' : 'transparent',
      transition: `background-color ${duration / 2}ms`,
      overflow: 'hidden',
    }}>
      {sparkles.map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            backgroundColor: '#FFD700',
            borderRadius: '50%',
            boxShadow: '0 0 10px #FFD700, 0 0 20px #FFA500',
            opacity: phase === 'active' ? 1 : 0,
            transform: `scale(${phase === 'active' ? 1 : 0})`,
            transition: `all ${duration / 2}ms ease-out ${s.delay}ms`,
          }}
        />
      ))}
    </div>
  );
}

function PixelOverlay({ phase, duration }: { phase: string; duration: number }) {
  const gridSize = 8;
  const pixels = Array.from({ length: gridSize * gridSize }, (_, i) => ({
    id: i,
    x: (i % gridSize) * (100 / gridSize),
    y: Math.floor(i / gridSize) * (100 / gridSize),
    delay: Math.random() * 300,
  }));

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
    }}>
      {pixels.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${100 / gridSize}%`,
            height: `${100 / gridSize}%`,
            backgroundColor: 'black',
            opacity: phase === 'active' ? 1 : 0,
            transform: `scale(${phase === 'active' ? 1 : 0})`,
            transition: `all ${duration / 3}ms ease-out ${p.delay}ms`,
          }}
        />
      ))}
    </div>
  );
}

function WipeOverlay({ phase, duration, direction }: { phase: string; duration: number; direction: 'left' | 'right' }) {
  const getTransform = () => {
    if (direction === 'left') {
      return phase === 'entering' ? 'translateX(100%)' : phase === 'active' ? 'translateX(0%)' : 'translateX(-100%)';
    }
    return phase === 'entering' ? 'translateX(-100%)' : phase === 'active' ? 'translateX(0%)' : 'translateX(100%)';
  };

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: 'black',
      transform: getTransform(),
      transition: `transform ${duration / 2}ms ease-in-out`,
    }}>
      {/* Decorative edge */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        [direction === 'left' ? 'left' : 'right']: -20,
        width: 40,
        background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)',
      }} />
    </div>
  );
}

// ----- VORGEFERTIGTE ÜBERGÄNGE / PRESET TRANSITIONS -----

interface PresetTransitionProps {
  isActive: boolean;
  onComplete?: () => void;
  children?: ReactNode;
}

/** Magischer Übergang mit Glitzer / Magical transition with sparkles */
export function MagicTransition(props: PresetTransitionProps) {
  return <Transition {...props} type="sparkle" duration={800} />;
}

/** Kino-Übergang / Cinema transition */
export function CinemaTransition(props: PresetTransitionProps) {
  return <Transition {...props} type="fade" duration={600} />;
}

/** Retro Pixel-Übergang / Retro pixel transition */
export function RetroTransition(props: PresetTransitionProps) {
  return <Transition {...props} type="pixel" duration={600} />;
}

/** Vorhang-Übergang / Curtain transition */
export function CurtainTransition(props: PresetTransitionProps) {
  return <Transition {...props} type="curtain" duration={700} />;
}

/** Kreis-Übergang wie alte Filme / Circle transition like old movies */
export function IrisTransition(props: PresetTransitionProps) {
  return <Transition {...props} type="circle" duration={500} />;
}
