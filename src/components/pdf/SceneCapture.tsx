/**
 * Scene Capture Component
 * =======================
 * Renders scenes off-screen for PDF capture.
 * Uses html2canvas to convert React scenes to images.
 */

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { CharacterPosition } from '../story/SceneTemplates';
import { getSprite, getBackground } from '../story/ComponentRegistry';
import type { SceneJson, CharacterJson } from '../story/StorySchema';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

export interface SceneCaptureHandle {
  captureScene: (scene: SceneJson) => Promise<string>;
  captureTitlePage: (title: string, author: string) => Promise<string>;
}

interface SceneCaptureProps {
  width?: number;
  height?: number;
}

function renderCharacter(char: CharacterJson, index: number) {
  const SpriteComponent = getSprite(char.sprite);
  if (!SpriteComponent) {
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

function renderCharacters(characters: CharacterJson[]) {
  if (!characters || characters.length === 0) return null;
  const rendered = characters.map((char, i) => renderCharacter(char, i));
  if (rendered.length === 1) {
    return rendered[0];
  }
  return <>{rendered}</>;
}

export const SceneCapture = forwardRef<SceneCaptureHandle, SceneCaptureProps>(
  function SceneCapture({ width = CANVAS_WIDTH, height = CANVAS_HEIGHT }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentScene, setCurrentScene] = useState<ReactNode>(null);

    useImperativeHandle(ref, () => ({
      captureScene: async (scene: SceneJson): Promise<string> => {
        // Get background component
        const BackgroundComponent = getBackground(scene.background);

        // Build scene element
        const sceneElement = (
          <div
            style={{
              width,
              height,
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#1a1a2e',
            }}
          >
            {/* Background */}
            <div style={{ position: 'absolute', inset: 0 }}>
              {BackgroundComponent && <BackgroundComponent width={width} height={height} />}
            </div>

            {/* Characters */}
            <div style={{ position: 'absolute', inset: 0 }}>
              {renderCharacters(scene.characters)}
            </div>
          </div>
        );

        setCurrentScene(sceneElement);

        // Wait for render
        await new Promise(resolve => setTimeout(resolve, 100));

        // Capture with html2canvas
        if (!containerRef.current) {
          throw new Error('Container not available');
        }

        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(containerRef.current, {
          width,
          height,
          scale: 2, // Higher resolution
          useCORS: true,
          backgroundColor: '#1a1a2e',
          logging: false,
        });

        return canvas.toDataURL('image/jpeg', 0.9);
      },

      captureTitlePage: async (title: string, author: string): Promise<string> => {
        const titleElement = (
          <div
            style={{
              width,
              height,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1a1a2e',
              backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d5a 50%, #1a1a2e 100%)',
            }}
          >
            {/* Decorative stars */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    fontSize: 16 + Math.random() * 20,
                    opacity: 0.3 + Math.random() * 0.4,
                  }}
                >
                  *
                </div>
              ))}
            </div>

            {/* Title */}
            <h1 style={{
              color: '#FFD700',
              fontSize: 48,
              fontWeight: 'bold',
              textAlign: 'center',
              margin: 0,
              marginBottom: 24,
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              maxWidth: '80%',
            }}>
              {title}
            </h1>

            {/* Author */}
            <p style={{
              color: 'white',
              fontSize: 24,
              margin: 0,
              opacity: 0.9,
            }}>
              von {author}
            </p>

            {/* Decorative line */}
            <div style={{
              width: 200,
              height: 3,
              backgroundColor: '#FFD700',
              margin: '24px 0',
              borderRadius: 2,
            }} />

            {/* Subtitle */}
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: 16,
              margin: 0,
            }}>
              Eine interaktive Geschichte
            </p>
          </div>
        );

        setCurrentScene(titleElement);

        await new Promise(resolve => setTimeout(resolve, 100));

        if (!containerRef.current) {
          throw new Error('Container not available');
        }

        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(containerRef.current, {
          width,
          height,
          scale: 2,
          useCORS: true,
          backgroundColor: '#1a1a2e',
          logging: false,
        });

        return canvas.toDataURL('image/jpeg', 0.9);
      },
    }));

    return (
      <div
        ref={containerRef}
        style={{
          position: 'fixed',
          left: -9999,
          top: 0,
          width,
          height,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {currentScene}
      </div>
    );
  }
);
