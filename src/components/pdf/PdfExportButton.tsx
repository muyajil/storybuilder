/**
 * PDF Export Button Component
 * ===========================
 * Button with progress modal for exporting stories as PDF books.
 */

import { useState, useRef, useCallback } from 'react';
import type { StoryJson } from '../story/StorySchema';
import { SceneCapture } from './SceneCapture';
import type { SceneCaptureHandle } from './SceneCapture';
import { generatePdf, downloadPdf, QUALITY_PRESETS } from './pdfGenerator';
import type { PdfProgress, QualityPreset } from './pdfGenerator';

interface PdfExportButtonProps {
  story: StoryJson;
  llmApiEndpoint?: string;
  llmApiKey?: string;
}

export function PdfExportButton({ story, llmApiEndpoint, llmApiKey }: PdfExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState<PdfProgress | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedQuality, setSelectedQuality] = useState<QualityPreset>('balanced');
  const sceneCaptureRef = useRef<SceneCaptureHandle>(null);

  const handleExport = useCallback(async () => {
    if (!sceneCaptureRef.current) {
      setError('Scene capture not ready');
      return;
    }

    setIsExporting(true);
    setProgress({ current: 0, total: 100, status: 'Starte Export...' });
    setError(null);

    try {
      const pdfBlob = await generatePdf(
        story,
        sceneCaptureRef.current,
        setProgress,
        llmApiEndpoint,
        llmApiKey,
        QUALITY_PRESETS[selectedQuality]
      );

      // Generate filename from story title
      const safeTitle = story.title
        .toLowerCase()
        .replace(/[^a-z0-9äöüß]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      downloadPdf(pdfBlob, `${safeTitle}.pdf`);

      // Brief delay to show completion
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (err) {
      console.error('PDF export error:', err);
      setError(err instanceof Error ? err.message : 'Export fehlgeschlagen');
    } finally {
      setIsExporting(false);
      setProgress(null);
    }
  }, [story, llmApiEndpoint, llmApiKey, selectedQuality]);

  const progressPercent = progress
    ? Math.round((progress.current / progress.total) * 100)
    : 0;

  return (
    <>
      {/* Hidden scene capture component */}
      <SceneCapture ref={sceneCaptureRef} />

      {/* Quality selector and export button container */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {/* Quality selector */}
        <select
          value={selectedQuality}
          onChange={(e) => setSelectedQuality(e.target.value as QualityPreset)}
          disabled={isExporting}
          style={{
            padding: '8px 12px',
            fontSize: 14,
            backgroundColor: '#2d2d5a',
            color: 'white',
            border: '1px solid #4f46e5',
            borderRadius: 8,
            cursor: 'pointer',
            marginRight: 8,
          }}
        >
          <option value="print">Hoch (Druck)</option>
          <option value="balanced">Normal</option>
          <option value="fast">Schnell (Vorschau)</option>
        </select>

        {/* Export button */}
        <button
          onClick={handleExport}
          disabled={isExporting}
          style={{
            padding: '8px 16px',
            fontSize: 14,
            backgroundColor: isExporting ? '#666' : '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            cursor: isExporting ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            transition: 'all 0.2s',
            fontWeight: 500,
          }}
          onMouseEnter={(e) => {
            if (!isExporting) {
              e.currentTarget.style.backgroundColor = '#6366f1';
              e.currentTarget.style.transform = 'scale(1.02)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isExporting) {
              e.currentTarget.style.backgroundColor = '#4f46e5';
              e.currentTarget.style.transform = 'scale(1)';
            }
          }}
          title="Geschichte als PDF-Buch exportieren"
        >
          <span style={{ fontSize: 16 }}>📖</span>
          <span>{isExporting ? 'Exportiere...' : 'PDF Buch'}</span>
        </button>
      </div>

      {/* Progress Modal */}
      {isExporting && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: '#1a1a2e',
              borderRadius: 16,
              padding: 32,
              minWidth: 320,
              maxWidth: 400,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              border: '2px solid #FFD700',
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 24,
            }}>
              <span style={{ fontSize: 32 }}>📖</span>
              <div>
                <h3 style={{
                  color: '#FFD700',
                  fontSize: 20,
                  fontWeight: 'bold',
                  margin: 0,
                }}>
                  Erstelle Kinderbuch
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: 14,
                  margin: 0,
                  marginTop: 4,
                }}>
                  {story.title}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 8,
              height: 12,
              overflow: 'hidden',
              marginBottom: 16,
            }}>
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  backgroundColor: '#4CAF50',
                  borderRadius: 8,
                  transition: 'width 0.3s ease-out',
                }}
              />
            </div>

            {/* Status text */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <p style={{
                color: 'white',
                fontSize: 14,
                margin: 0,
              }}>
                {progress?.status || 'Vorbereitung...'}
              </p>
              <span style={{
                color: '#FFD700',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
                {progressPercent}%
              </span>
            </div>

            {/* Animation indicator */}
            <div style={{
              marginTop: 20,
              display: 'flex',
              justifyContent: 'center',
              gap: 8,
            }}>
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#FFD700',
                    animation: `bounce 0.6s ease-in-out ${i * 0.15}s infinite alternate`,
                  }}
                />
              ))}
            </div>

            <style>{`
              @keyframes bounce {
                from { transform: translateY(0); opacity: 0.4; }
                to { transform: translateY(-8px); opacity: 1; }
              }
            `}</style>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {error && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
          onClick={() => setError(null)}
        >
          <div
            style={{
              backgroundColor: '#1a1a2e',
              borderRadius: 16,
              padding: 32,
              minWidth: 300,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              border: '2px solid #f44336',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16,
            }}>
              <span style={{ fontSize: 32 }}>😕</span>
              <h3 style={{
                color: '#f44336',
                fontSize: 20,
                fontWeight: 'bold',
                margin: 0,
              }}>
                Export fehlgeschlagen
              </h3>
            </div>

            <p style={{
              color: 'white',
              fontSize: 14,
              margin: 0,
              marginBottom: 20,
            }}>
              {error}
            </p>

            <button
              onClick={() => setError(null)}
              style={{
                padding: '10px 24px',
                fontSize: 14,
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                width: '100%',
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
