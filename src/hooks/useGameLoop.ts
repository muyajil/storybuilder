import { useEffect, useRef, useCallback } from 'react';

/**
 * Hook für die Spiel-Schleife / Hook for the game loop
 *
 * Die callback-Funktion wird ~60x pro Sekunde aufgerufen.
 * The callback function is called ~60 times per second.
 *
 * @param callback - Funktion die jeden Frame aufgerufen wird / Function called every frame
 * @param isRunning - Ob das Spiel läuft / Whether the game is running
 *
 * Beispiel / Example:
 * ```tsx
 * const [position, setPosition] = useState({ x: 0, y: 0 });
 *
 * useGameLoop((deltaTime) => {
 *   setPosition(prev => ({
 *     x: prev.x + speed * deltaTime,
 *     y: prev.y
 *   }));
 * }, true);
 * ```
 */
export function useGameLoop(
  callback: (deltaTime: number) => void,
  isRunning: boolean = true
): void {
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);
  const callbackRef = useRef(callback);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const animate = useCallback((time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = (time - previousTimeRef.current) / 1000; // In Sekunden / In seconds
      callbackRef.current(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (isRunning) {
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isRunning, animate]);
}
