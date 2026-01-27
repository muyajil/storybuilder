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
import { renderMiniGamePreview, canRenderMiniGamePreview } from './MiniGamePreviewRenderer';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

/**
 * Quality options for scene capture
 */
export interface QualityOptions {
  imageScale: number;
  imageFormat: 'png' | 'jpeg';
  jpegQuality: number;
  renderDelay: number;
}

const DEFAULT_QUALITY_OPTIONS: QualityOptions = {
  imageScale: 2,
  imageFormat: 'png',
  jpegQuality: 1,
  renderDelay: 400,
};

export interface SceneCaptureHandle {
  captureScene: (scene: SceneJson, qualityOptions?: QualityOptions) => Promise<string>;
  captureTitlePage: (title: string, author: string, qualityOptions?: QualityOptions) => Promise<string>;
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
      captureScene: async (scene: SceneJson, qualityOptions: QualityOptions = DEFAULT_QUALITY_OPTIONS): Promise<string> => {
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

            {/* Mini-game preview overlay */}
            {scene.miniGame && canRenderMiniGamePreview(scene.miniGame) && (
              <div style={{ position: 'absolute', inset: 0 }}>
                {renderMiniGamePreview(scene.miniGame, width, height)}
              </div>
            )}

            {/* Mini-game badge */}
            {scene.miniGame && (
              <div style={{
                position: 'absolute',
                top: 8,
                left: 8,
                backgroundColor: '#FFD700',
                color: '#1a1a2e',
                padding: '4px 12px',
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}>
                MINI-SPIEL
              </div>
            )}
          </div>
        );

        setCurrentScene(sceneElement);

        // Wait for render to ensure all SVG animations settle
        await new Promise(resolve => setTimeout(resolve, qualityOptions.renderDelay));

        // Capture with html2canvas
        if (!containerRef.current) {
          throw new Error('Container not available');
        }

        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(containerRef.current, {
          width,
          height,
          scale: qualityOptions.imageScale,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#1a1a2e',
          logging: false,
        });

        // Return image in the requested format
        if (qualityOptions.imageFormat === 'jpeg') {
          return canvas.toDataURL('image/jpeg', qualityOptions.jpegQuality);
        }
        return canvas.toDataURL('image/png');
      },

      captureTitlePage: async (title: string, author: string, qualityOptions: QualityOptions = DEFAULT_QUALITY_OPTIONS): Promise<string> => {
        // Deterministic star positions for consistent rendering
        const starPositions = [
          { left: 5, top: 10, size: 20, opacity: 0.4 },
          { left: 15, top: 30, size: 25, opacity: 0.5 },
          { left: 25, top: 5, size: 18, opacity: 0.35 },
          { left: 35, top: 45, size: 22, opacity: 0.45 },
          { left: 45, top: 15, size: 30, opacity: 0.55 },
          { left: 55, top: 60, size: 24, opacity: 0.4 },
          { left: 65, top: 25, size: 19, opacity: 0.5 },
          { left: 75, top: 50, size: 28, opacity: 0.45 },
          { left: 85, top: 8, size: 21, opacity: 0.55 },
          { left: 95, top: 35, size: 26, opacity: 0.4 },
          { left: 10, top: 75, size: 23, opacity: 0.5 },
          { left: 30, top: 85, size: 17, opacity: 0.35 },
          { left: 50, top: 90, size: 27, opacity: 0.45 },
          { left: 70, top: 80, size: 20, opacity: 0.5 },
          { left: 90, top: 70, size: 25, opacity: 0.4 },
        ];

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
            {/* Decorative stars with fixed positions */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              {starPositions.map((star, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `${star.left}%`,
                    top: `${star.top}%`,
                    fontSize: star.size,
                    opacity: star.opacity,
                    color: '#FFD700',
                  }}
                >
                  ✦
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

        // Wait for fonts and rendering
        await new Promise(resolve => setTimeout(resolve, qualityOptions.renderDelay));

        if (!containerRef.current) {
          throw new Error('Container not available');
        }

        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(containerRef.current, {
          width,
          height,
          scale: qualityOptions.imageScale,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#1a1a2e',
          logging: false,
        });

        // Return image in the requested format
        if (qualityOptions.imageFormat === 'jpeg') {
          return canvas.toDataURL('image/jpeg', qualityOptions.jpegQuality);
        }
        return canvas.toDataURL('image/png');
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
