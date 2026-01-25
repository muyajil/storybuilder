import { useState } from 'react';
import { games, getGameById } from './games';
import { GameButton, PromptBox } from './components';
import './App.css';

/**
 * HAUPT-APP / MAIN APP
 * ====================
 * Zeigt das Spielemenü oder das ausgewählte Spiel.
 * Shows the game menu or the selected game.
 */
function App() {
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);

  // Wenn ein Spiel ausgewählt ist, zeige es an / If a game is selected, show it
  if (selectedGameId) {
    const game = getGameById(selectedGameId);
    if (game) {
      const GameComponent = game.component;
      return (
        <div className="game-container">
          <div className="game-header">
            <GameButton onClick={() => setSelectedGameId(null)} color="secondary" size="small">
              Zurück zum Menü
            </GameButton>
            <span className="game-title">{game.name}</span>
          </div>
          <GameComponent />
          <PromptBox />
        </div>
      );
    }
  }

  // Spielemenü anzeigen / Show game menu
  return (
    <div className="menu-container">
      <h1 className="menu-title">Spiele-Spielplatz</h1>
      <p className="menu-subtitle">Wähle ein Spiel aus!</p>

      <div className="game-list">
        {games.map((game) => (
          <div key={game.id} className="game-card" onClick={() => setSelectedGameId(game.id)}>
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

      <PromptBox />
    </div>
  );
}

export default App;
