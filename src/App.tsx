import { useState, useRef } from 'react';
import { games, getGameById } from './games';
import { GameButton, SidePanel, StoryBuildProvider } from './components';
import { PdfExportButton } from './components/pdf';
import type { SidePanelHandle } from './components/SidePanel';
import type { StoryBuildContext } from './components/story';
import './App.css';

/**
 * HAUPT-APP / MAIN APP
 * ====================
 * Zeigt das Spielemenü oder das ausgewählte Spiel.
 * Shows the game menu or the selected game.
 */
function App() {
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const sidePanelRef = useRef<SidePanelHandle>(null);

  const selectedGame = selectedGameId ? getGameById(selectedGameId) : null;

  // Build context for SidePanel
  const sidePanelContext = selectedGame
    ? { screen: 'game' as const, gameId: selectedGame.id, gameName: selectedGame.name }
    : { screen: 'menu' as const };

  // Start new game creation process
  const handleCreateNewGame = () => {
    sidePanelRef.current?.sendMessage('Ich möchte eine Geschichte erfinden!');
  };

  // Load existing game and continue building
  const handleSelectGame = (gameId: string) => {
    const game = getGameById(gameId);
    setSelectedGameId(gameId);
    if (game) {
      // Send message to load game context and continue iterating
      setTimeout(() => {
        sidePanelRef.current?.sendMessage(`Ich möchte an "${game.name}" weiterarbeiten! Lies bitte die Datei und zeig mir was wir schon haben.`);
      }, 100);
    }
  };

  // Handle build requests from StoryPlayer
  const handleStoryBuildRequest = (context: StoryBuildContext) => {
    sidePanelRef.current?.sendMessage(context.message);
  };

  return (
    <div className="app-layout">
      {/* Main content area - centered in space left of chat */}
      <div className="main-content">
        {selectedGame ? (
          <StoryBuildProvider onBuildRequest={handleStoryBuildRequest}>
            <div className="game-container">
              <div className="game-header">
                <GameButton onClick={() => setSelectedGameId(null)} color="secondary" size="small">
                  Zurück zum Menü
                </GameButton>
                <span className="game-title">{selectedGame.name}</span>
                {selectedGame.storyJson && (
                  <PdfExportButton story={selectedGame.storyJson} />
                )}
              </div>
              <selectedGame.component />
            </div>
          </StoryBuildProvider>
        ) : (
          <div className="menu-container">
            <h1 className="menu-title">Storybuilder</h1>
            <p className="menu-subtitle">Build interactive stories with AI</p>

            {/* Create New Game Button */}
            <button
              onClick={handleCreateNewGame}
              className="create-game-button"
            >
              <span className="create-game-icon">✨</span>
              <span className="create-game-text">Neue Geschichte erfinden</span>
              <span className="create-game-hint">Wer ist dein Held?</span>
            </button>

            <div className="game-list">
              {games.map((game) => (
                <div key={game.id} className="game-card" onClick={() => handleSelectGame(game.id)}>
                  <h3 className="game-card-title">{game.name}</h3>
                  <p className="game-card-description">{game.description}</p>
                  <p className="game-card-author">von {game.author}</p>
                </div>
              ))}
            </div>

            {games.length === 0 && (
              <p className="no-games">
                Noch keine Spiele vorhanden. Lass uns eines erstellen!
              </p>
            )}
          </div>
        )}
      </div>

      {/* Chat panel - always visible on right side */}
      <SidePanel ref={sidePanelRef} context={sidePanelContext} />
    </div>
  );
}

export default App;
