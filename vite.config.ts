import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Load environment variables
const env = loadEnv('', process.cwd(), '')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'claude-api',
      configureServer(server) {
        const statusFile = path.resolve(__dirname, '.claude-status.json')
        const responsesFile = path.resolve(__dirname, '.claude-responses.json')
        const projectDir = __dirname

        // Conversation history
        let conversationHistory: Array<{
          role: 'user' | 'assistant';
          content: unknown[];
        }> = []
        const MAX_HISTORY = 20

        // Tools that Claude can use
        const tools = [
          {
            toolSpec: {
              name: 'read_file',
              description: 'Liest den Inhalt einer Datei. IMMER zuerst lesen bevor du Änderungen machst!',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    path: { type: 'string', description: 'Pfad zur Datei relativ zum Projekt (z.B. src/games/pokemon/Pokemon.tsx)' }
                  },
                  required: ['path']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'write_file',
              description: 'Schreibt oder überschreibt eine Datei komplett.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    path: { type: 'string', description: 'Pfad zur Datei relativ zum Projekt' },
                    content: { type: 'string', description: 'Der komplette neue Inhalt der Datei' }
                  },
                  required: ['path', 'content']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'edit_file',
              description: 'Ersetzt einen Teil einer Datei. Besser als write_file für kleine Änderungen.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    path: { type: 'string', description: 'Pfad zur Datei' },
                    old_text: { type: 'string', description: 'Der Text der ersetzt werden soll (muss exakt matchen!)' },
                    new_text: { type: 'string', description: 'Der neue Text' }
                  },
                  required: ['path', 'old_text', 'new_text']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'list_files',
              description: 'Listet alle Dateien in einem Verzeichnis auf.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    path: { type: 'string', description: 'Pfad zum Verzeichnis relativ zum Projekt (z.B. src/games)' }
                  },
                  required: ['path']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'search_code',
              description: 'Sucht nach einem Text-Pattern in allen Dateien. Gut um Code zu finden.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    pattern: { type: 'string', description: 'Der Suchbegriff oder Pattern' },
                    path: { type: 'string', description: 'Verzeichnis in dem gesucht wird (Standard: src)' }
                  },
                  required: ['pattern']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'create_game',
              description: 'Erstellt ein komplett neues Spiel mit Grundgerüst. Das Spiel erscheint sofort im Menü!',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    id: { type: 'string', description: 'Kurze ID für das Spiel (z.B. "racing", "puzzle"). Kleinbuchstaben, keine Leerzeichen!' },
                    name: { type: 'string', description: 'Anzeigename des Spiels (z.B. "Rennspiel", "Puzzle Welt")' },
                    description: { type: 'string', description: 'Kurze Beschreibung was das Spiel macht' },
                    type: { type: 'string', description: 'Art des Spiels: "canvas" (für Action/Arcade), "cards" (Karten/Memory), "quiz" (Fragen), "simple" (Minimal)' }
                  },
                  required: ['id', 'name', 'description', 'type']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'get_components',
              description: 'Zeigt alle verfügbaren Spiel-Komponenten und wie man sie benutzt.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {},
                  required: []
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'get_hooks',
              description: 'Zeigt alle verfügbaren React Hooks für Spiele (Tastatur, Maus, Game Loop, etc.)',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {},
                  required: []
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'get_project_tree',
              description: 'Zeigt die komplette Projektstruktur als Baum.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    path: { type: 'string', description: 'Startverzeichnis (Standard: src)' }
                  },
                  required: []
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'run_command',
              description: 'Führt einen Shell-Befehl aus. Nur für npm/git Befehle.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    command: { type: 'string', description: 'Der Befehl (npm oder git)' }
                  },
                  required: ['command']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'get_available_sprites',
              description: 'IMMER ZUERST AUFRUFEN bevor du Sprites verwendest! Zeigt alle verfügbaren Sprite-Namen (Tiere, Menschen, Objekte). Nur diese existieren!',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    category: { type: 'string', description: 'Optional: "animals", "characters", "objects" - oder leer für alle' }
                  },
                  required: []
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'get_available_scenes',
              description: 'IMMER ZUERST AUFRUFEN bevor du Szenen-Hintergründe verwendest! Zeigt alle verfügbaren Szenen-Templates.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {},
                  required: []
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'get_available_minigames',
              description: 'IMMER ZUERST AUFRUFEN bevor du Mini-Spiele erstellst! Zeigt alle verfügbaren Mini-Spiel-Templates und ihre Parameter.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {},
                  required: []
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'get_story_system',
              description: 'Zeigt wie man Geschichten mit StoryPlayer und createLinearStory erstellt. IMMER AUFRUFEN bevor du eine Geschichte implementierst!',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {},
                  required: []
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'get_patterns',
              description: 'Zeigt Best Practices und Muster für gute Geschichten. Hilft bei Entscheidungen wie: Wann choices? Wann findTarget? Wann miniGame?',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {},
                  required: []
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'analyze_story',
              description: 'Analysiert die Struktur einer Geschichte und gibt Empfehlungen. Zeigt: unvollständige Branches, wo erweitert werden sollte, wo Branches zusammengeführt werden können. IMMER AUFRUFEN wenn du an einer bestehenden Geschichte arbeitest!',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID (z.B. "liana-abenteuer")' }
                  },
                  required: ['gameId']
                }
              }
            }
          }
        ]

        // System prompt for story-based game creation
        const SYSTEM_PROMPT = `Du bist ein Geschichten-Regisseur für Kinder!

=== ZIEL: LANGE GESCHICHTEN! ===
🎯 Das Ziel ist VIELE Szenen zu bauen - 30+ Schritte bis zum Ende ist PERFEKT!
❌ NICHT zu schnell zum Ende kommen
✅ Immer weiter entwickeln, neue Abenteuer, neue Wege!
✅ Jede Session 2-3 neue Szenen hinzufügen

=== TOOLS IMMER ZUERST! ===
BEVOR du Code schreibst, rufe IMMER diese Tools auf:
• get_story_system() → wie man Geschichten baut
• get_available_sprites() → welche Figuren existieren
• get_available_scenes() → welche Hintergründe existieren
• get_available_minigames() → welche Spiel-Templates existieren
• get_patterns() → Best Practices, wann was verwenden

❌ NIEMALS Komponenten erfinden die nicht in den Tools stehen!

=== STIL ===
- Max 2 Sätze, EINE Frage auf einmal
- Viel Emoji! 🎮
- Direkt implementieren, dann fragen!

=== WEITERARBEITEN ===
Wenn "weiterarbeiten" oder "was haben wir":
1. analyze_story(gameId) → Struktur analysieren!
2. Zeige die Empfehlungen dem Kind
3. IMMER VON HINTEN NACH VORNE:
   - Erst tiefste unvollständige Szenen erweitern
   - Dann Sackgassen fortführen
   - Dann Branches zusammenführen
   - Erst zuletzt neue Wege vom Start öffnen!

=== NEUE GESCHICHTE ===
1. "Wer ist der Held? 🦊🐰👸🤖"
2. "Wo spielt es? 🌲🏰🌊"
3. get_story_system() aufrufen → Code-Vorlage holen
4. get_available_sprites/scenes() → verfügbare Komponenten
5. Szene implementieren!
6. Pro Szene fragen: "Was muss hier passieren?"
   - Nur Dialog? → choices für nächste Szenen
   - Suchen? → findTarget verwenden!
   - Spielen? → miniGame einbauen!
7. "Was passiert als nächstes?"
8. Wiederholen...

=== VERZWEIGUNGEN PFLEGEN ===
❌ SCHLECHT: Szenen mit nur EINER choice (→ warum dann eine Wahl?)
❌ SCHLECHT: Offene Enden ohne Ziel-Szene
✅ GUT: 2-3 echte Wahlmöglichkeiten
✅ GUT: findTarget für "Finde X" Aufgaben
✅ GUT: miniGame für aktive Herausforderungen
✅ GUT: Branches am Ende wieder zusammenführen!

Nutze analyze_story(gameId) um Probleme zu finden!
→ Tiefste Branches ZUERST erweitern (von hinten nach vorne!)
→ Branches zusammenführen zum gemeinsamen Finale

=== VERHALTEN ===
❌ NICHT: "Was möchtest du? Option 1, 2, 3..."
✅ STATTDESSEN: Bauen, dann EINE Frage!

Kind: "Der Fuchs sammelt Sterne"
Du: "⭐ Cool!" [get_available_minigames → implementieren] "✅ Was dann?"`

        // Initialize files
        if (!fs.existsSync(statusFile)) {
          fs.writeFileSync(statusFile, JSON.stringify({ status: 'idle', lastUpdate: Date.now() }))
        }
        if (!fs.existsSync(responsesFile)) {
          fs.writeFileSync(responsesFile, JSON.stringify({ responses: [] }))
        }

        function updateStatus(status: string, task?: string) {
          const data: Record<string, unknown> = { status, lastUpdate: Date.now() }
          if (task) data.currentTask = task
          fs.writeFileSync(statusFile, JSON.stringify(data))
        }

        function addResponse(text: string) {
          try {
            let data = { responses: [] as Array<{ id: number; text: string; timestamp: string }> }
            if (fs.existsSync(responsesFile)) {
              data = JSON.parse(fs.readFileSync(responsesFile, 'utf-8'))
            }
            const newId = data.responses.length > 0
              ? Math.max(...data.responses.map(r => r.id)) + 1
              : 1
            data.responses.push({
              id: newId,
              text,
              timestamp: new Date().toISOString()
            })
            fs.writeFileSync(responsesFile, JSON.stringify(data, null, 2))
          } catch (e) {
            console.error('Error adding response:', e)
          }
        }

        // Recursive search helper
        function searchInDir(dir: string, pattern: string, results: string[]): void {
          const entries = fs.readdirSync(dir, { withFileTypes: true })
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name)
            if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== 'dist') {
              searchInDir(fullPath, pattern, results)
            } else if (entry.isFile() && /\.(tsx?|jsx?|css|json)$/.test(entry.name)) {
              try {
                const content = fs.readFileSync(fullPath, 'utf-8')
                const lines = content.split('\n')
                lines.forEach((line, idx) => {
                  if (line.toLowerCase().includes(pattern.toLowerCase())) {
                    const relPath = path.relative(projectDir, fullPath)
                    results.push(`${relPath}:${idx + 1}: ${line.trim().substring(0, 100)}`)
                  }
                })
              } catch { /* ignore */ }
            }
          }
        }

        // Recursive tree helper
        function getTree(dir: string, prefix: string = '', depth: number = 0): string {
          if (depth > 4) return prefix + '...\n'
          const entries = fs.readdirSync(dir, { withFileTypes: true })
            .filter(e => !e.name.startsWith('.') && e.name !== 'node_modules' && e.name !== 'dist')
            .sort((a, b) => (a.isDirectory() === b.isDirectory() ? a.name.localeCompare(b.name) : a.isDirectory() ? -1 : 1))
          let result = ''
          entries.forEach((entry, idx) => {
            const isLast = idx === entries.length - 1
            const connector = isLast ? '└── ' : '├── '
            const icon = entry.isDirectory() ? '📁' : '📄'
            result += `${prefix}${connector}${icon} ${entry.name}\n`
            if (entry.isDirectory()) {
              const newPrefix = prefix + (isLast ? '    ' : '│   ')
              result += getTree(path.join(dir, entry.name), newPrefix, depth + 1)
            }
          })
          return result
        }

        // Game templates
        const gameTemplates: Record<string, string> = {
          canvas: `import { useState, useCallback } from 'react';
import { GameCanvas, Sprite, GameText, GameButton } from '../../components';
import { useKeyboard, useGameLoop, clamp } from '../../hooks';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

export function GAME_NAME() {
  const [playerX, setPlayerX] = useState(CANVAS_WIDTH / 2);
  const [playerY, setPlayerY] = useState(CANVAS_HEIGHT / 2);
  const [score, setScore] = useState(0);

  const keys = useKeyboard();

  useGameLoop((deltaTime) => {
    let newX = playerX;
    let newY = playerY;

    if (keys.ArrowLeft || keys.a) newX -= 200 * deltaTime;
    if (keys.ArrowRight || keys.d) newX += 200 * deltaTime;
    if (keys.ArrowUp || keys.w) newY -= 200 * deltaTime;
    if (keys.ArrowDown || keys.s) newY += 200 * deltaTime;

    setPlayerX(clamp(newX, 0, CANVAS_WIDTH - 40));
    setPlayerY(clamp(newY, 0, CANVAS_HEIGHT - 40));
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <h2 style={{ color: '#4f46e5', margin: 0 }}>GAME_DISPLAY_NAME</h2>

      <GameCanvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} backgroundColor="#1a1a2e">
        <GameText x={10} y={10} size="large" color="#fff">
          Punkte: {score}
        </GameText>

        {/* Spieler */}
        <Sprite x={playerX} y={playerY} size={40}>
          <div style={{
            width: 40,
            height: 40,
            backgroundColor: '#4f46e5',
            borderRadius: 8,
          }} />
        </Sprite>

        <GameText x={10} y={CANVAS_HEIGHT - 30} size="small" color="#888">
          Pfeiltasten oder WASD zum Bewegen
        </GameText>
      </GameCanvas>

      <GameButton onClick={() => setScore(0)} color="secondary">
        Neu Starten
      </GameButton>
    </div>
  );
}`,
          cards: `import { useState } from 'react';
import { GameButton } from '../../components';

interface Card {
  id: number;
  value: string;
  flipped: boolean;
  matched: boolean;
}

export function GAME_NAME() {
  const emojis = ['🎮', '🎲', '🎯', '🎪', '🎨', '🎭', '🎪', '🎯'];

  const [cards, setCards] = useState<Card[]>(() => {
    const deck = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((value, id) => ({ id, value, flipped: false, matched: false }));
    return deck;
  });

  const [selected, setSelected] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  const handleClick = (id: number) => {
    if (selected.length === 2) return;
    if (cards[id].flipped || cards[id].matched) return;

    const newCards = [...cards];
    newCards[id].flipped = true;
    setCards(newCards);

    const newSelected = [...selected, id];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      if (cards[first].value === cards[second].value) {
        setTimeout(() => {
          setCards(prev => prev.map(c =>
            c.id === first || c.id === second ? { ...c, matched: true } : c
          ));
          setScore(s => s + 10);
          setSelected([]);
        }, 500);
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(c =>
            c.id === first || c.id === second ? { ...c, flipped: false } : c
          ));
          setSelected([]);
        }, 1000);
      }
    }
  };

  const reset = () => {
    setCards([...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((value, id) => ({ id, value, flipped: false, matched: false })));
    setSelected([]);
    setScore(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <h2 style={{ color: '#4f46e5' }}>GAME_DISPLAY_NAME</h2>
      <p>Punkte: {score}</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 80px)', gap: 8 }}>
        {cards.map(card => (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            style={{
              width: 80,
              height: 80,
              backgroundColor: card.matched ? '#22c55e' : card.flipped ? '#4f46e5' : '#374151',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            {(card.flipped || card.matched) ? card.value : '?'}
          </div>
        ))}
      </div>

      <GameButton onClick={reset} color="secondary">Neu Starten</GameButton>
    </div>
  );
}`,
          quiz: `import { useState } from 'react';
import { GameButton } from '../../components';

interface Question {
  question: string;
  answers: string[];
  correct: number;
}

const questions: Question[] = [
  { question: 'Was ist 2 + 2?', answers: ['3', '4', '5', '6'], correct: 1 },
  { question: 'Welche Farbe hat der Himmel?', answers: ['Grün', 'Rot', 'Blau', 'Gelb'], correct: 2 },
  { question: 'Wie viele Beine hat eine Spinne?', answers: ['6', '8', '10', '4'], correct: 1 },
];

export function GAME_NAME() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);

    if (idx === questions[current].correct) {
      setScore(s => s + 10);
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(c => c + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  const reset = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setSelected(null);
  };

  if (finished) {
    return (
      <div style={{ textAlign: 'center', padding: 40 }}>
        <h2>Quiz Fertig!</h2>
        <p style={{ fontSize: 24 }}>Deine Punkte: {score} / {questions.length * 10}</p>
        <GameButton onClick={reset} color="primary">Nochmal!</GameButton>
      </div>
    );
  }

  const q = questions[current];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: 20 }}>
      <h2 style={{ color: '#4f46e5' }}>GAME_DISPLAY_NAME</h2>
      <p>Frage {current + 1} von {questions.length} | Punkte: {score}</p>

      <div style={{ fontSize: 24, textAlign: 'center', padding: 20 }}>{q.question}</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {q.answers.map((answer, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            style={{
              padding: '16px 32px',
              fontSize: 18,
              borderRadius: 8,
              border: 'none',
              cursor: selected === null ? 'pointer' : 'default',
              backgroundColor: selected === null ? '#4f46e5' :
                idx === q.correct ? '#22c55e' :
                idx === selected ? '#ef4444' : '#374151',
              color: 'white',
            }}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}`,
          simple: `import { useState } from 'react';
import { GameButton } from '../../components';

export function GAME_NAME() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: 40 }}>
      <h2 style={{ color: '#4f46e5' }}>GAME_DISPLAY_NAME</h2>

      <p style={{ fontSize: 48 }}>{count}</p>

      <div style={{ display: 'flex', gap: 12 }}>
        <GameButton onClick={() => setCount(c => c - 1)} color="secondary">-</GameButton>
        <GameButton onClick={() => setCount(0)} color="secondary">Reset</GameButton>
        <GameButton onClick={() => setCount(c => c + 1)} color="primary">+</GameButton>
      </div>
    </div>
  );
}`
        }

        // Components documentation
        const componentsDoc = `# Verfügbare Komponenten

## Layout-Komponenten

### GameCanvas
Container für Spiele (position: relative).
\`\`\`tsx
<GameCanvas width={800} height={500} backgroundColor="#1a1a2e">
  {/* Kinder werden absolut positioniert */}
</GameCanvas>
\`\`\`

### Sprite
Positioniert Kinder absolut.
\`\`\`tsx
<Sprite x={100} y={200} size={40}>
  <Lion size={40} />
</Sprite>
\`\`\`

### GameText & GameButton
\`\`\`tsx
<GameText x={10} y={10} size="large" color="#fff">Punkte: {score}</GameText>
<GameButton onClick={fn} color="primary">Klick!</GameButton>
\`\`\`

## SPRITE-BIBLIOTHEK (WICHTIG!)

### Fertige Szenen (enthalten Himmel, Boden, Bäume!)
\`\`\`tsx
import { MeadowScene, ZooScene, NightScene, BeachScene, SpaceScene } from '../../components';
<MeadowScene width={800} height={500}>{children}</MeadowScene>
\`\`\`

### Tiere
\`\`\`tsx
import { Lion, Elephant, Giraffe, Monkey, Penguin, Bear } from '../../components';
import { Cow, Pig, Chicken, Sheep } from '../../components';
import { Dog, Cat, Rabbit } from '../../components';
import { Fish, Dolphin, Butterfly, Bee, Snail } from '../../components';
<Lion size={64} color="#D2691E" />
\`\`\`

### Charaktere
\`\`\`tsx
import { Kid, Girl, Boy, Car, Truck, Rocket, Dragon, Robot } from '../../components';
<Kid size={50} color="#FF6B6B" hairColor="#8B4513" />
<Car size={64} color="#FF0000" />
\`\`\`

### Umgebung (einzeln nutzbar)
\`\`\`tsx
import { Sky, Grass, Tree, Cloud, Sun, House, Fence } from '../../components';
<Sky width={800} height={300} />
<Tree x={100} y={200} size={80} />
\`\`\`

### Effekte
\`\`\`tsx
import { Heart, Star, Explosion, Coin, SpeechBubble } from '../../components';
<Heart x={100} y={50} size={24} />
<Explosion x={200} y={150} size={50} />
\`\`\`

## WICHTIGE REGELN
1. IMMER fertige Sprites nutzen (Lion, Car, etc.) - KEINE eigenen SVGs!
2. KEINE Canvas 2D API (ctx.fillRect) - nur React-Komponenten!
3. Szenen (MeadowScene etc.) enthalten bereits komplette Hintergründe`

        // Hooks documentation
        const hooksDoc = `# Verfügbare Hooks

## useKeyboard
Tastatur-Eingaben abfragen.
\`\`\`tsx
const keys = useKeyboard();
if (keys.ArrowLeft || keys.a) { /* nach links */ }
if (keys.ArrowRight || keys.d) { /* nach rechts */ }
if (keys[' ']) { /* Leertaste */ }
\`\`\`

## useGameLoop
Spiel-Schleife mit Delta-Time.
\`\`\`tsx
useGameLoop((deltaTime) => {
  // deltaTime = Zeit seit letztem Frame in Sekunden
  setX(x => x + speed * deltaTime);
});
\`\`\`

## useMouse
Maus-Position und Klicks.
\`\`\`tsx
const { x, y, isDown } = useMouse(canvasRef);
\`\`\`

## Helper-Funktionen
\`\`\`tsx
import { clamp, randomBetween, checkCollision } from '../hooks';

clamp(value, min, max)  // Wert begrenzen
randomBetween(10, 100)  // Zufallszahl
checkCollision(rect1, rect2)  // Kollision prüfen
// rect = { x, y, width, height }
\`\`\``

        // Validate TypeScript/JavaScript syntax
        function validateSyntax(filePath: string, content: string): string | null {
          if (!/\.(tsx?|jsx?)$/.test(filePath)) return null // Only check TS/JS files

          try {
            const { execSync } = require('child_process')
            const tmpFile = path.join(projectDir, '.tmp-validate.tsx')
            fs.writeFileSync(tmpFile, content)

            try {
              // Use TypeScript compiler to check syntax
              execSync(`npx tsc --noEmit --skipLibCheck "${tmpFile}"`, {
                cwd: projectDir,
                timeout: 10000,
                encoding: 'utf-8',
                stdio: 'pipe'
              })
              return null // No errors
            } catch (e: unknown) {
              const error = e as { stdout?: string; stderr?: string }
              return error.stdout || error.stderr || 'Syntax-Fehler'
            } finally {
              if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile)
            }
          } catch {
            return null // If validation fails, allow the write
          }
        }

        // Execute a tool
        function executeTool(name: string, input: Record<string, string>): string {
          try {
            switch (name) {
              case 'read_file': {
                const filePath = path.join(projectDir, input.path)
                if (!fs.existsSync(filePath)) {
                  return `Fehler: Datei ${input.path} existiert nicht`
                }
                return fs.readFileSync(filePath, 'utf-8')
              }
              case 'write_file': {
                const filePath = path.join(projectDir, input.path)
                const content = String(input.content || '')
                if (!content.trim()) {
                  return 'Fehler: Kein Inhalt zum Schreiben angegeben'
                }
                const dir = path.dirname(filePath)
                if (!fs.existsSync(dir)) {
                  fs.mkdirSync(dir, { recursive: true })
                }
                // Validate before writing
                const syntaxError = validateSyntax(filePath, content)
                if (syntaxError) {
                  return `❌ SYNTAX-FEHLER - Datei wurde NICHT geschrieben:\n${syntaxError}\n\nBitte korrigiere den Code und versuche es erneut.`
                }
                fs.writeFileSync(filePath, content)
                return `✅ Datei ${input.path} wurde erfolgreich geschrieben!`
              }
              case 'edit_file': {
                const filePath = path.join(projectDir, input.path)
                if (!fs.existsSync(filePath)) {
                  return `Fehler: Datei ${input.path} existiert nicht`
                }
                const oldText = String(input.old_text || '')
                const newText = String(input.new_text ?? '')
                if (!oldText) {
                  return 'Fehler: old_text darf nicht leer sein'
                }
                const content = fs.readFileSync(filePath, 'utf-8')
                if (!content.includes(oldText)) {
                  return `Fehler: Der zu ersetzende Text wurde nicht gefunden. Stelle sicher dass er exakt übereinstimmt!\n\nGesucht (${oldText.length} Zeichen):\n${oldText.substring(0, 200)}${oldText.length > 200 ? '...' : ''}`
                }
                const newContent = content.replace(oldText, newText)
                // Validate before writing
                const syntaxError = validateSyntax(filePath, newContent)
                if (syntaxError) {
                  return `❌ SYNTAX-FEHLER - Datei wurde NICHT geändert:\n${syntaxError}\n\nBitte korrigiere den Code und versuche es erneut.`
                }
                fs.writeFileSync(filePath, newContent)
                return `✅ Datei ${input.path} wurde bearbeitet!`
              }
              case 'list_files': {
                const dirPath = path.join(projectDir, input.path || '.')
                if (!fs.existsSync(dirPath)) {
                  return `Fehler: Verzeichnis ${input.path} existiert nicht`
                }
                const files = fs.readdirSync(dirPath, { withFileTypes: true })
                return files.map(f => f.isDirectory() ? `📁 ${f.name}/` : `📄 ${f.name}`).join('\n')
              }
              case 'search_code': {
                const searchDir = path.join(projectDir, input.path || 'src')
                const results: string[] = []
                searchInDir(searchDir, input.pattern, results)
                if (results.length === 0) return `Keine Treffer für "${input.pattern}"`
                return results.slice(0, 50).join('\n') + (results.length > 50 ? `\n... und ${results.length - 50} weitere` : '')
              }
              case 'create_game': {
                const { id, name: gameName, description, type } = input
                const template = gameTemplates[type] || gameTemplates.simple
                const componentName = gameName.replace(/[^a-zA-Z]/g, '')
                const gameCode = template
                  .replace(/GAME_NAME/g, componentName)
                  .replace(/GAME_DISPLAY_NAME/g, gameName)

                // Create game folder and file
                const gameDir = path.join(projectDir, 'src', 'games', id)
                fs.mkdirSync(gameDir, { recursive: true })
                fs.writeFileSync(path.join(gameDir, `${componentName}.tsx`), gameCode)

                // Update games index
                const indexPath = path.join(projectDir, 'src', 'games', 'index.ts')
                let indexContent = fs.readFileSync(indexPath, 'utf-8')

                // Add import
                const importLine = `import { ${componentName} } from './${id}/${componentName}';\n`
                const lastImportIdx = indexContent.lastIndexOf('import')
                const lastImportEnd = indexContent.indexOf('\n', lastImportIdx) + 1
                indexContent = indexContent.slice(0, lastImportEnd) + importLine + indexContent.slice(lastImportEnd)

                // Add to games array
                const newGame = `  {
    id: '${id}',
    name: '${gameName}',
    description: '${description}',
    component: ${componentName},
    author: 'Kind',
  },\n`
                const gamesArrayEnd = indexContent.lastIndexOf('];')
                indexContent = indexContent.slice(0, gamesArrayEnd) + newGame + indexContent.slice(gamesArrayEnd)

                fs.writeFileSync(indexPath, indexContent)

                return `✅ Spiel "${gameName}" wurde erstellt!\n\n📁 src/games/${id}/${componentName}.tsx\n\nDas Spiel erscheint jetzt im Menü. Du kannst es jetzt anpassen!`
              }
              case 'get_components': {
                return componentsDoc
              }
              case 'get_hooks': {
                return hooksDoc
              }
              case 'get_project_tree': {
                const startDir = path.join(projectDir, input.path || 'src')
                return `📁 ${input.path || 'src'}\n` + getTree(startDir)
              }
              case 'run_command': {
                // Allow npm and git commands
                if (!input.command.startsWith('npm ') && !input.command.startsWith('git ')) {
                  return 'Fehler: Nur npm und git Befehle sind erlaubt'
                }
                const { execSync } = require('child_process')
                const output = execSync(input.command, { cwd: projectDir, timeout: 30000, encoding: 'utf-8' })
                return output.toString().substring(0, 5000)
              }
              case 'get_available_sprites': {
                // Dynamically read exports from sprite files
                const category = input.category?.toLowerCase()

                const extractExports = (filePath: string): string[] => {
                  try {
                    const content = fs.readFileSync(filePath, 'utf-8')
                    const matches = content.match(/export function (\w+)/g) || []
                    return matches.map(m => m.replace('export function ', ''))
                  } catch { return [] }
                }

                const spritesDir = path.join(projectDir, 'src', 'components', 'sprites')
                const sprites = {
                  animals: extractExports(path.join(spritesDir, 'Animals.tsx')),
                  characters: extractExports(path.join(spritesDir, 'Characters.tsx')),
                  environment: extractExports(path.join(spritesDir, 'Environment.tsx')),
                  effects: extractExports(path.join(spritesDir, 'Effects.tsx')),
                }

                let result = '🎨 VERFÜGBARE SPRITES (dynamisch gelesen)\n\nImport: import { SpriteName } from "../../components";\nUsage: <SpriteName size={50} />\n\n'

                if (!category || category === 'animals') {
                  result += `🐾 TIERE (${sprites.animals.length}):\n${sprites.animals.join(', ')}\n\n`
                }
                if (!category || category === 'characters') {
                  result += `👤 CHARAKTERE (${sprites.characters.length}):\n${sprites.characters.join(', ')}\n\n`
                }
                if (!category || category === 'environment') {
                  result += `🌳 UMGEBUNG (${sprites.environment.length}):\n${sprites.environment.join(', ')}\n\n`
                }
                if (!category || category === 'effects') {
                  result += `✨ EFFEKTE (${sprites.effects.length}):\n${sprites.effects.join(', ')}\n\n`
                }
                if (!category) {
                  const total = sprites.animals.length + sprites.characters.length + sprites.environment.length + sprites.effects.length
                  result += `📊 GESAMT: ${total} Sprites verfügbar\n\n`
                }

                result += '⚠️ NUR diese Sprites existieren! Keine anderen verwenden!'
                return result
              }
              case 'get_available_scenes': {
                // Dynamically read from SceneTemplates.tsx
                const scenesFile = path.join(projectDir, 'src', 'components', 'story', 'SceneTemplates.tsx')
                let scenes: string[] = []

                try {
                  const content = fs.readFileSync(scenesFile, 'utf-8')
                  // Match exported functions that take SceneProps
                  const matches = content.match(/export function (\w+)\([^)]*SceneProps/g) || []
                  scenes = matches.map(m => {
                    const match = m.match(/export function (\w+)/)
                    return match ? match[1] : ''
                  }).filter(s => s && s !== 'CharacterPosition')
                } catch { /* fallback to empty */ }

                let result = `🌄 VERFÜGBARE SZENEN-HINTERGRÜNDE (${scenes.length} gefunden)\n\n`
                result += 'Import: import { SceneName } from "../../components/story";\n'
                result += 'Usage: <SceneName width={800} height={500} />\n\n'
                result += 'SZENEN:\n'
                result += scenes.join(', ') + '\n\n'
                result += '⚠️ NUR diese Szenen existieren! Keine anderen verwenden!'
                return result
              }
              case 'get_available_minigames': {
                // Dynamically read from MiniGameTemplates.tsx
                const minigamesFile = path.join(projectDir, 'src', 'components', 'story', 'MiniGameTemplates.tsx')
                const minigames: Array<{ name: string; desc: string; params: string[] }> = []

                try {
                  const content = fs.readFileSync(minigamesFile, 'utf-8')

                  // Find all create*Game functions and their configs
                  const funcMatches = content.match(/export function (create\w+Game)/g) || []
                  const funcNames = funcMatches.map(m => m.replace('export function ', ''))

                  // Extract config interface for each
                  for (const funcName of funcNames) {
                    // Get the jsdoc comment before the function
                    const jsdocMatch = content.match(new RegExp(`/\\*\\*[\\s\\S]*?\\*/\\s*export function ${funcName}`))
                    let desc = funcName.replace('create', '').replace('Game', '-Spiel')

                    if (jsdocMatch) {
                      const descMatch = jsdocMatch[0].match(/\* ([^*\n]+)\n/)
                      if (descMatch) desc = descMatch[1].trim()
                    }

                    // Find config interface name
                    const configMatch = content.match(new RegExp(`${funcName}\\(config: (\\w+Config)\\)`))
                    let params: string[] = []

                    if (configMatch) {
                      const configName = configMatch[1]
                      // Find interface properties
                      const interfaceMatch = content.match(new RegExp(`interface ${configName}[\\s\\S]*?\\{([\\s\\S]*?)\\n\\}`))
                      if (interfaceMatch) {
                        // Extract property names
                        const propMatches = interfaceMatch[1].match(/(\w+)(\?)?:/g) || []
                        params = propMatches.map(p => p.replace(/\??:$/, ''))
                      }
                    }

                    minigames.push({ name: funcName, desc, params })
                  }
                } catch { /* fallback to empty */ }

                let result = `🎮 VERFÜGBARE MINI-SPIEL TEMPLATES (${minigames.length} gefunden)\n\n`
                result += 'Import: import { createCollectGame } from "../../components/story";\n\n'
                result += 'BEISPIEL:\n```tsx\nconst MeinSpiel = createCollectGame({\n  playerSprite: <Fox size={50} />,\n  itemSprite: <Star size={30} />,\n  itemsToWin: 5,\n});\n\n// In der Szene:\nminiGame: { component: MeinSpiel, instructions: "Sammle 5 Sterne!" }\n```\n\n'

                result += 'TEMPLATES:\n'
                for (const mg of minigames) {
                  result += `\n• ${mg.name}\n  ${mg.desc}\n  Parameter: ${mg.params.join(', ')}\n`
                }

                result += '\n⚠️ NUR diese Templates existieren! Keine anderen verwenden!'
                return result
              }
              case 'get_story_system': {
                // Dynamically read from StoryPlayer.tsx and example game
                const storyPlayerPath = path.join(projectDir, 'src', 'components', 'story', 'StoryPlayer.tsx')
                const exampleGamePath = path.join(projectDir, 'src', 'games', 'liana-abenteuer', 'LianasOzeanAbenteuer.tsx')

                let result = '📖 STORY-SYSTEM DOKUMENTATION (dynamisch generiert)\n\n'

                // Extract interfaces from StoryPlayer.tsx
                try {
                  const storyPlayerCode = fs.readFileSync(storyPlayerPath, 'utf-8')

                  // Extract SimpleScene interface
                  const simpleSceneMatch = storyPlayerCode.match(/interface SimpleScene \{([\s\S]*?)\n\}/)
                  if (simpleSceneMatch) {
                    result += '=== SZENEN-EIGENSCHAFTEN (SimpleScene) ===\n'
                    const props = simpleSceneMatch[1].match(/(\w+)(\?)?:\s*([^;]+)/g) || []
                    for (const prop of props) {
                      const [name, type] = prop.split(':').map(s => s.trim())
                      const isOptional = name.endsWith('?')
                      const cleanName = name.replace('?', '')
                      result += `• ${cleanName}${isOptional ? ' (optional)' : ''}: ${type}\n`
                    }
                    result += '\n'
                  }

                  // Extract FindTargetConfig interface
                  const findTargetMatch = storyPlayerCode.match(/export interface FindTargetConfig \{([\s\S]*?)\n\}/)
                  if (findTargetMatch) {
                    result += '=== SUCH-INTERAKTION (FindTargetConfig) ===\n'
                    result += 'Spieler muss etwas in der Szene finden und anklicken!\n\n'
                    const findTargetProps = findTargetMatch[1].match(/(\w+)(\?)?:\s*([^;]+)/g) || []
                    for (const prop of findTargetProps) {
                      const [name, type] = prop.split(':').map(s => s.trim())
                      const cleanName = name.replace('?', '')
                      result += `• ${cleanName}: ${type}\n`
                    }
                    result += '\nposition: { x: 0-100%, y: 0-100% } vom linken/oberen Rand\n\n'
                  }

                  // Extract MiniGameConfig interface
                  const miniGameMatch = storyPlayerCode.match(/export interface MiniGameConfig \{([\s\S]*?)\n\}/)
                  if (miniGameMatch) {
                    result += '=== MINI-SPIEL (MiniGameConfig) ===\n'
                    const props = miniGameMatch[1].match(/(\w+)(\?)?:\s*([^;]+)/g) || []
                    for (const prop of props) {
                      const [name, type] = prop.split(':').map(s => s.trim())
                      const cleanName = name.replace('?', '')
                      result += `• ${cleanName}: ${type}\n`
                    }
                    result += '\n'
                  }

                  // Extract StoryChoice interface
                  const choiceMatch = storyPlayerCode.match(/export interface StoryChoice \{([\s\S]*?)\n\}/)
                  if (choiceMatch) {
                    result += '=== VERZWEIGUNGEN (StoryChoice) ===\n'
                    const props = choiceMatch[1].match(/(\w+)(\?)?:\s*([^;]+)/g) || []
                    for (const prop of props) {
                      const [name, type] = prop.split(':').map(s => s.trim())
                      const cleanName = name.replace('?', '')
                      result += `• ${cleanName}: ${type}\n`
                    }
                    result += '\n'
                  }
                } catch (e) {
                  result += `⚠️ Konnte StoryPlayer.tsx nicht lesen: ${e}\n\n`
                }

                // Read example game as working code reference
                result += '=== BEISPIEL-CODE (aus echtem Spiel) ===\n\n'
                try {
                  const exampleCode = fs.readFileSync(exampleGamePath, 'utf-8')
                  result += '```tsx\n' + exampleCode + '\n```\n\n'
                } catch {
                  result += '⚠️ Beispiel-Datei nicht gefunden\n\n'
                }

                result += '=== WICHTIGE REGELN ===\n'
                result += '• CharacterPosition: position="left"|"center"|"right", bottom=Pixel\n'
                result += '• choices.nextSceneId MUSS auf existierende Szene-ID zeigen!\n'
                result += '• Szenen mit nur 1 choice vermeiden → lieber 2-3 Optionen\n'
                result += '• findTarget für "Finde X" Aufgaben statt choices\n'
                result += '• miniGame für aktive Spielelemente\n\n'
                result += '=== ANDERE TOOLS AUFRUFEN ===\n'
                result += '• get_available_sprites() → welche Figuren?\n'
                result += '• get_available_scenes() → welche Hintergründe?\n'
                result += '• get_available_minigames() → welche Spiel-Templates?\n'
                result += '• get_patterns() → Best Practices'

                return result
              }
              case 'get_patterns': {
                // Analyze existing games to find patterns dynamically
                const gamesDir = path.join(projectDir, 'src', 'games')
                let patterns = '🎯 BEST PRACTICES & MUSTER\n\n'

                // Analyze existing games for patterns
                let totalScenes = 0
                let scenesWithChoices = 0
                let scenesWithFindTarget = 0
                let scenesWithMiniGame = 0
                let singleChoiceScenes = 0

                try {
                  const gameFolders = fs.readdirSync(gamesDir).filter(f =>
                    fs.statSync(path.join(gamesDir, f)).isDirectory()
                  )

                  for (const folder of gameFolders) {
                    const files = fs.readdirSync(path.join(gamesDir, folder)).filter(f => f.endsWith('.tsx'))
                    for (const file of files) {
                      const code = fs.readFileSync(path.join(gamesDir, folder, file), 'utf-8')

                      // Count scenes
                      const sceneMatches = code.match(/id:\s*['"][^'"]+['"]/g) || []
                      totalScenes += sceneMatches.length

                      // Count interaction types
                      const choiceMatches = code.match(/choices:\s*\[/g) || []
                      scenesWithChoices += choiceMatches.length

                      const findTargetMatches = code.match(/findTarget:\s*\{/g) || []
                      scenesWithFindTarget += findTargetMatches.length

                      const miniGameMatches = code.match(/miniGame:\s*\{/g) || []
                      scenesWithMiniGame += miniGameMatches.length

                      // Check for single choice scenes (bad pattern)
                      const singleChoiceMatches = code.match(/choices:\s*\[\s*\{[^}]+\}\s*\]/g) || []
                      singleChoiceScenes += singleChoiceMatches.length
                    }
                  }
                } catch { /* ignore */ }

                patterns += `=== STATISTIK DEINER SPIELE ===
• ${totalScenes} Szenen insgesamt
• ${scenesWithChoices} mit Verzweigungen (choices)
• ${scenesWithFindTarget} mit Such-Aufgaben (findTarget)
• ${scenesWithMiniGame} mit Mini-Spielen
• ${singleChoiceScenes} mit nur 1 choice ⚠️ (sollte 0 sein!)

`

                patterns += `=== WANN WAS VERWENDEN? ===

📖 NUR DIALOG (keine Interaktion):
→ Szene OHNE choices/findTarget/miniGame
→ Geht automatisch zur nächsten Szene
→ Gut für: Einleitungen, Übergänge, Erzählung

🔀 VERZWEIGUNGEN (choices):
→ Spieler wählt aus 2-3 Optionen
→ NIEMALS nur 1 choice! (sinnlos)
→ Gut für: Entscheidungspunkte, verschiedene Wege

🔍 SUCH-AUFGABE (findTarget):
→ Spieler muss etwas im Bild finden und anklicken
→ Position in % (x: 0-100, y: 0-100)
→ Gut für: "Finde den Schlüssel!", "Wo ist das Tier?"

🎮 MINI-SPIEL (miniGame):
→ Aktives Gameplay (sammeln, ausweichen, fangen)
→ Nutze get_available_minigames() für Templates
→ Gut für: Herausforderungen, Action-Momente

=== GUTE MUSTER ===

✅ Abwechslung: Dialog → findTarget → choices → miniGame
✅ 2-3 choices pro Verzweigung
✅ Jede Szene hat einen Zweck
✅ findTarget in komplexen Szenen (viele Elemente)
✅ Alle Branches zu Ende führen

=== SCHLECHTE MUSTER ===

❌ Szene mit nur 1 choice (warum dann wählen?)
❌ 5+ choices (zu verwirrend)
❌ findTarget in leerer Szene (zu einfach)
❌ Offene Enden (nextSceneId zeigt ins Nichts)
❌ Nur Dialog ohne Interaktion (langweilig)

=== SZENEN-FLUSS BEISPIEL ===

1. start: Dialog + 2 choices → waldweg / bergpfad
2. waldweg: Dialog + findTarget (Schlüssel) → waldweg_gefunden
3. waldweg_gefunden: Dialog + miniGame (Sammeln) → finale
4. bergpfad: Dialog + 3 choices → höhle / fluss / zurück
5. höhle: Dialog + findTarget (Schatz) → finale
6. finale: Dialog (Ende)

Jede Szene hat Interaktion, alle Wege führen zum Ende!`

                return patterns
              }
              case 'analyze_story': {
                const gameId = input.gameId
                const gameDir = path.join(projectDir, 'src', 'games', gameId)

                if (!fs.existsSync(gameDir)) {
                  return `❌ Spiel "${gameId}" nicht gefunden in src/games/`
                }

                // Find main game file
                const files = fs.readdirSync(gameDir).filter(f => f.endsWith('.tsx'))
                if (files.length === 0) {
                  return `❌ Keine .tsx Datei in ${gameId} gefunden`
                }

                const gameCode = fs.readFileSync(path.join(gameDir, files[0]), 'utf-8')

                // Parse scenes
                interface SceneInfo {
                  id: string
                  hasDialogue: boolean
                  choiceCount: number
                  choiceTargets: string[]
                  hasFindTarget: boolean
                  findTargetNext: string | null
                  hasMiniGame: boolean
                  isDeadEnd: boolean
                  depth: number
                }

                const scenes: Map<string, SceneInfo> = new Map()

                // Extract scene blocks - find all { id: '...' ...} patterns
                const sceneRegex = /\{\s*id:\s*['"]([^'"]+)['"]([\s\S]*?)(?=\},\s*\{|\}\s*\])/g
                let match
                while ((match = sceneRegex.exec(gameCode)) !== null) {
                  const id = match[1]
                  const content = match[2]

                  // Count choices and extract targets
                  const choiceMatches = content.match(/nextSceneId:\s*['"]([^'"]+)['"]/g) || []
                  const choiceTargets = choiceMatches.map(m => {
                    const targetMatch = m.match(/['"]([^'"]+)['"]/)
                    return targetMatch ? targetMatch[1] : ''
                  }).filter(t => t)

                  // Check for findTarget
                  const hasFindTarget = /findTarget:\s*\{/.test(content)
                  const findTargetNextMatch = content.match(/findTarget:[\s\S]*?nextSceneId:\s*['"]([^'"]+)['"]/)
                  const findTargetNext = findTargetNextMatch ? findTargetNextMatch[1] : null

                  // Check for miniGame
                  const hasMiniGame = /miniGame:\s*\{/.test(content)

                  // Check for dialogue
                  const hasDialogue = /dialogue:\s*\[/.test(content)

                  scenes.set(id, {
                    id,
                    hasDialogue,
                    choiceCount: choiceTargets.length,
                    choiceTargets,
                    hasFindTarget,
                    findTargetNext,
                    hasMiniGame,
                    isDeadEnd: false,
                    depth: 0
                  })
                }

                // Calculate depths and find dead ends
                const startScene = scenes.keys().next().value
                const visited = new Set<string>()

                function calculateDepth(sceneId: string, depth: number) {
                  if (!scenes.has(sceneId) || visited.has(sceneId)) return
                  visited.add(sceneId)

                  const scene = scenes.get(sceneId)!
                  scene.depth = Math.max(scene.depth, depth)

                  // Follow all paths
                  for (const target of scene.choiceTargets) {
                    calculateDepth(target, depth + 1)
                  }
                  if (scene.findTargetNext) {
                    calculateDepth(scene.findTargetNext, depth + 1)
                  }
                }

                if (startScene) calculateDepth(startScene, 0)

                // Identify dead ends and issues
                const allTargets = new Set<string>()
                for (const scene of scenes.values()) {
                  scene.choiceTargets.forEach(t => allTargets.add(t))
                  if (scene.findTargetNext) allTargets.add(scene.findTargetNext)
                }

                // A scene is a dead end if it has no outgoing connections and isn't explicitly the last
                const sceneIds = Array.from(scenes.keys())
                for (const scene of scenes.values()) {
                  const hasOutgoing = scene.choiceCount > 0 || scene.findTargetNext || scene.hasMiniGame
                  const isLast = sceneIds.indexOf(scene.id) === sceneIds.length - 1
                  scene.isDeadEnd = !hasOutgoing && !isLast
                }

                // Build analysis report
                let report = `📊 STORY-ANALYSE: ${gameId}\n\n`

                // Overview
                report += `=== ÜBERSICHT ===\n`
                report += `• ${scenes.size} Szenen insgesamt\n`
                report += `• Start: "${startScene}"\n\n`

                // Scene graph
                report += `=== SZENEN-STRUKTUR ===\n`
                for (const scene of scenes.values()) {
                  const indent = '  '.repeat(scene.depth)
                  let status = ''
                  if (scene.choiceCount === 1) status = ' ⚠️ NUR 1 CHOICE'
                  if (scene.isDeadEnd) status = ' 🛑 SACKGASSE'
                  if (!scene.choiceCount && !scene.hasFindTarget && !scene.hasMiniGame) status = ' 📖 nur Dialog'

                  let interactions = []
                  if (scene.choiceCount > 0) interactions.push(`${scene.choiceCount} choices`)
                  if (scene.hasFindTarget) interactions.push('findTarget')
                  if (scene.hasMiniGame) interactions.push('miniGame')

                  report += `${indent}[${scene.depth}] ${scene.id}${status}\n`
                  if (interactions.length) {
                    report += `${indent}    → ${interactions.join(', ')}\n`
                  }
                  if (scene.choiceTargets.length) {
                    report += `${indent}    → führt zu: ${scene.choiceTargets.join(', ')}\n`
                  }
                  if (scene.findTargetNext) {
                    report += `${indent}    → nach Fund: ${scene.findTargetNext}\n`
                  }
                }

                // Recommendations
                report += `\n=== 🎯 EMPFEHLUNGEN ===\n\n`

                // Find single-choice scenes (priority 1)
                const singleChoiceScenes = Array.from(scenes.values())
                  .filter(s => s.choiceCount === 1)
                  .sort((a, b) => b.depth - a.depth) // Deepest first!

                if (singleChoiceScenes.length > 0) {
                  report += `🔴 ZUERST ERWEITERN (von hinten nach vorne!):\n`
                  for (const scene of singleChoiceScenes) {
                    report += `   • "${scene.id}" (Tiefe ${scene.depth}) - hat nur 1 choice\n`
                    report += `     → Füge 1-2 weitere Optionen hinzu!\n`
                  }
                  report += `\n`
                }

                // Find dead ends
                const deadEnds = Array.from(scenes.values()).filter(s => s.isDeadEnd)
                if (deadEnds.length > 0) {
                  report += `🟡 SACKGASSEN (brauchen Fortsetzung):\n`
                  for (const scene of deadEnds) {
                    report += `   • "${scene.id}" - keine Weiterführung\n`
                  }
                  report += `\n`
                }

                // Suggest merge points
                const deepScenes = Array.from(scenes.values())
                  .filter(s => s.depth >= 2 && !s.isDeadEnd)
                  .sort((a, b) => b.depth - a.depth)

                if (deepScenes.length > 1) {
                  report += `🟢 MÖGLICHE ZUSAMMENFÜHRUNGEN:\n`
                  report += `   Branches könnten hier wieder zusammenlaufen:\n`

                  // Find scenes at similar depths that could merge
                  const depthGroups = new Map<number, string[]>()
                  for (const scene of deepScenes) {
                    if (!depthGroups.has(scene.depth)) depthGroups.set(scene.depth, [])
                    depthGroups.get(scene.depth)!.push(scene.id)
                  }

                  for (const [depth, sceneIds] of depthGroups) {
                    if (sceneIds.length > 1) {
                      report += `   • Tiefe ${depth}: ${sceneIds.join(', ')} → können zu gemeinsamer Szene führen\n`
                    }
                  }

                  // Suggest a finale merge
                  const maxDepth = Math.max(...Array.from(scenes.values()).map(s => s.depth))
                  report += `   • Alle Wege sollten bei Tiefe ${maxDepth + 1} zum Finale führen!\n`
                }

                report += `\n=== WORKFLOW ===\n`
                report += `1. Zuerst tiefste unvollständige Szenen erweitern\n`
                report += `2. Dann Sackgassen fortführen\n`
                report += `3. Dann Branches zusammenführen\n`
                report += `4. Erst zuletzt neue Branches vom Start aus öffnen`

                return report
              }
              default:
                return `Unbekanntes Tool: ${name}`
            }
          } catch (e) {
            return `Fehler: ${e}`
          }
        }

        // POST /api/chat - Chat with Claude (with tool use)
        server.middlewares.use('/api/chat', async (req, res) => {
          if (req.method !== 'POST') {
            res.writeHead(405)
            res.end()
            return
          }

          let body = ''
          req.on('data', (chunk: Buffer) => { body += chunk.toString() })
          req.on('end', async () => {
            try {
              const { prompt, author, context, aiConfig } = JSON.parse(body)
              const provider = aiConfig?.provider || 'bedrock-sso'
              const modelId = aiConfig?.modelId || 'anthropic.claude-3-5-sonnet-20240620-v1:0'

              console.log(`\n📨 [${author}] [${provider}/${modelId}] ${prompt.substring(0, 50)}...`)
              updateStatus('working', 'Verarbeite Anfrage...')

              // Set up SSE
              res.writeHead(200, {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
              })

              // Build prompt with context - pre-load game code if in game
              let contextInfo = ''
              let gameCode = ''
              if (context?.screen === 'game' && context?.gameId) {
                // Try to find and load the game's main file
                const gameDir = path.join(projectDir, 'src', 'games', context.gameId)
                if (fs.existsSync(gameDir)) {
                  const files = fs.readdirSync(gameDir).filter(f => f.endsWith('.tsx'))
                  if (files.length > 0) {
                    const mainFile = files[0]
                    const filePath = path.join(gameDir, mainFile)
                    try {
                      gameCode = fs.readFileSync(filePath, 'utf-8')
                      contextInfo = `\n\n[KONTEXT: Das Kind spielt "${context.gameName}" (ID: ${context.gameId}).
Hauptdatei: src/games/${context.gameId}/${mainFile}

AKTUELLER CODE (${gameCode.split('\n').length} Zeilen):
\`\`\`tsx
${gameCode}
\`\`\`

Du hast den Code bereits - nutze edit_file mit EXAKTEM Text zum Ändern!]`
                    } catch {
                      contextInfo = `\n\n[KONTEXT: Das Kind spielt "${context.gameName}" (ID: ${context.gameId}). Hauptdatei: src/games/${context.gameId}/${mainFile}]`
                    }
                  }
                }
                if (!contextInfo) {
                  contextInfo = `\n\n[KONTEXT: Das Kind spielt "${context.gameName}" (ID: ${context.gameId}). Nutze read_file um den Code zu laden.]`
                }
              } else {
                contextInfo = '\n\n[KONTEXT: Das Kind ist im Hauptmenü.]'
              }

              const fullPrompt = prompt + contextInfo

              // Add user message
              conversationHistory.push({
                role: 'user',
                content: [{ text: fullPrompt }]
              })
              if (conversationHistory.length > MAX_HISTORY) {
                conversationHistory = conversationHistory.slice(-MAX_HISTORY)
              }

              let fullResponse = ''

              // Provider-specific API call
              if (provider === 'bedrock-sso') {
                // AWS Bedrock with SSO
                const { BedrockRuntimeClient, ConverseCommand } = await import('@aws-sdk/client-bedrock-runtime')
                const { fromIni } = await import('@aws-sdk/credential-provider-ini')
                const os = await import('os')

                // Use env vars for AWS config
                const awsRegion = env.AWS_REGION || process.env.AWS_REGION || 'eu-central-1'
                const awsProfile = env.AWS_PROFILE || process.env.AWS_PROFILE || 'default'
                const awsConfigFile = env.AWS_CONFIG_FILE || process.env.AWS_CONFIG_FILE || `${os.homedir()}/.aws/config`

                process.env.AWS_CONFIG_FILE = awsConfigFile

                const client = new BedrockRuntimeClient({
                  region: awsRegion,
                  credentials: fromIni({ profile: awsProfile }),
                })

                let continueLoop = true
                while (continueLoop) {
                  const command = new ConverseCommand({
                    modelId: modelId,
                    system: [{ text: SYSTEM_PROMPT }],
                    messages: conversationHistory as never,
                    toolConfig: { tools: tools as never },
                    inferenceConfig: { maxTokens: 4096, temperature: 0.7 }
                  })

                  const response = await client.send(command)
                  const assistantContent: unknown[] = []

                  for (const block of response.output?.message?.content || []) {
                    if ('text' in block && block.text) {
                      fullResponse += block.text + '\n'
                      assistantContent.push({ text: block.text })
                      res.write(`data: ${JSON.stringify({ type: 'token', text: block.text })}\n\n`)
                    }
                    if ('toolUse' in block && block.toolUse) {
                      const tool = block.toolUse
                      assistantContent.push({ toolUse: tool })
                      console.log(`🔧 Tool: ${tool.name}`)
                      res.write(`data: ${JSON.stringify({ type: 'tool', name: tool.name, input: tool.input })}\n\n`)

                      const result = executeTool(tool.name!, tool.input as Record<string, string>)
                      console.log(`   Result: ${result.substring(0, 100)}...`)
                      res.write(`data: ${JSON.stringify({ type: 'tool_result', name: tool.name, result: result.substring(0, 200) })}\n\n`)

                      conversationHistory.push({ role: 'assistant', content: assistantContent })
                      conversationHistory.push({
                        role: 'user',
                        content: [{ toolResult: { toolUseId: tool.toolUseId, content: [{ text: result }] } }]
                      })
                      continue
                    }
                  }

                  if (response.stopReason === 'end_turn' || response.stopReason === 'max_tokens') {
                    if (assistantContent.length > 0) {
                      conversationHistory.push({ role: 'assistant', content: assistantContent })
                    }
                    continueLoop = false
                  } else if (response.stopReason === 'tool_use') {
                    continue
                  } else {
                    continueLoop = false
                  }
                }
              } else if (provider === 'anthropic') {
                // Direct Anthropic API
                const apiKey = aiConfig?.apiKey
                if (!apiKey) throw new Error('Anthropic API key required')

                // Convert tools to Anthropic format
                const anthropicTools = tools.map(t => ({
                  name: t.toolSpec.name,
                  description: t.toolSpec.description,
                  input_schema: t.toolSpec.inputSchema.json
                }))

                // Convert conversation history to Anthropic format
                const anthropicMessages: Array<{ role: string; content: unknown }> = conversationHistory.map(m => ({
                  role: m.role,
                  content: Array.isArray(m.content) ? (m.content as Array<{ text?: string; toolUse?: { toolUseId: string; name: string; input: unknown }; toolResult?: { toolUseId: string; content: { text: string }[] } }>).map(c => {
                    if (c.text) return { type: 'text', text: c.text }
                    if (c.toolUse) return { type: 'tool_use', id: c.toolUse.toolUseId, name: c.toolUse.name, input: c.toolUse.input }
                    if (c.toolResult) return { type: 'tool_result', tool_use_id: c.toolResult.toolUseId, content: c.toolResult.content[0].text }
                    return c
                  }) : m.content
                }))

                let continueLoop = true
                while (continueLoop) {
                  const response = await fetch('https://api.anthropic.com/v1/messages', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'x-api-key': apiKey,
                      'anthropic-version': '2023-06-01'
                    },
                    body: JSON.stringify({
                      model: modelId,
                      max_tokens: 4096,
                      system: SYSTEM_PROMPT,
                      messages: anthropicMessages,
                      tools: anthropicTools
                    })
                  })

                  const data = await response.json() as { content: Array<{ type: string; text?: string; id?: string; name?: string; input?: Record<string, string> }>; stop_reason: string }
                  const assistantContent: unknown[] = []

                  for (const block of data.content || []) {
                    if (block.type === 'text' && block.text) {
                      fullResponse += block.text + '\n'
                      assistantContent.push({ text: block.text })
                      res.write(`data: ${JSON.stringify({ type: 'token', text: block.text })}\n\n`)
                    }
                    if (block.type === 'tool_use') {
                      assistantContent.push({ toolUse: { toolUseId: block.id, name: block.name, input: block.input } })
                      console.log(`🔧 Tool: ${block.name}`)
                      res.write(`data: ${JSON.stringify({ type: 'tool', name: block.name, input: block.input })}\n\n`)

                      const result = executeTool(block.name!, block.input as Record<string, string>)
                      console.log(`   Result: ${result.substring(0, 100)}...`)
                      res.write(`data: ${JSON.stringify({ type: 'tool_result', name: block.name, result: result.substring(0, 200) })}\n\n`)

                      conversationHistory.push({ role: 'assistant', content: assistantContent })
                      conversationHistory.push({
                        role: 'user',
                        content: [{ toolResult: { toolUseId: block.id, content: [{ text: result }] } }]
                      })
                      anthropicMessages.push({ role: 'assistant', content: data.content.map(c => {
                        if (c.type === 'text') return { type: 'text', text: c.text }
                        if (c.type === 'tool_use') return { type: 'tool_use', id: c.id, name: c.name, input: c.input }
                        return c
                      }) })
                      anthropicMessages.push({ role: 'user', content: [{ type: 'tool_result', tool_use_id: block.id!, content: result }] })
                      continue
                    }
                  }

                  if (data.stop_reason === 'end_turn' || data.stop_reason === 'max_tokens') {
                    if (assistantContent.length > 0) {
                      conversationHistory.push({ role: 'assistant', content: assistantContent })
                    }
                    continueLoop = false
                  } else if (data.stop_reason === 'tool_use') {
                    continue
                  } else {
                    continueLoop = false
                  }
                }
              } else if (provider === 'openai' || provider === 'custom') {
                // OpenAI or OpenAI-compatible API
                const apiKey = aiConfig?.apiKey
                if (!apiKey) throw new Error('API key required')

                const baseUrl = provider === 'custom' && aiConfig?.baseUrl
                  ? aiConfig.baseUrl
                  : 'https://api.openai.com/v1'

                // Convert tools to OpenAI format
                const openaiTools = tools.map(t => ({
                  type: 'function' as const,
                  function: {
                    name: t.toolSpec.name,
                    description: t.toolSpec.description,
                    parameters: t.toolSpec.inputSchema.json
                  }
                }))

                // Convert history to OpenAI format
                const openaiMessages: Array<{ role: string; content: string; tool_calls?: unknown[]; tool_call_id?: string }> = [
                  { role: 'system', content: SYSTEM_PROMPT }
                ]
                for (const m of conversationHistory) {
                  if (Array.isArray(m.content)) {
                    const contentArr = m.content as Array<{ text?: string }>
                    const textParts = contentArr.filter(c => c.text).map(c => c.text!).join('\n')
                    if (textParts) {
                      openaiMessages.push({ role: m.role, content: textParts })
                    }
                  }
                }
                openaiMessages.push({ role: 'user', content: fullPrompt })

                let continueLoop = true
                while (continueLoop) {
                  const response = await fetch(`${baseUrl}/chat/completions`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                      model: modelId,
                      messages: openaiMessages,
                      tools: openaiTools,
                      max_tokens: 4096
                    })
                  })

                  const data = await response.json() as { choices: Array<{ message: { content?: string; tool_calls?: Array<{ id: string; function: { name: string; arguments: string } }> }; finish_reason: string }> }
                  const choice = data.choices?.[0]
                  const message = choice?.message

                  if (message?.content) {
                    fullResponse += message.content + '\n'
                    res.write(`data: ${JSON.stringify({ type: 'token', text: message.content })}\n\n`)
                    conversationHistory.push({ role: 'assistant', content: [{ text: message.content }] })
                    openaiMessages.push({ role: 'assistant', content: message.content })
                  }

                  if (message?.tool_calls && message.tool_calls.length > 0) {
                    openaiMessages.push({ role: 'assistant', content: '', tool_calls: message.tool_calls })

                    for (const toolCall of message.tool_calls) {
                      console.log(`🔧 Tool: ${toolCall.function.name}`)
                      const toolInput = JSON.parse(toolCall.function.arguments || '{}')
                      res.write(`data: ${JSON.stringify({ type: 'tool', name: toolCall.function.name, input: toolInput })}\n\n`)

                      const result = executeTool(toolCall.function.name, toolInput)
                      console.log(`   Result: ${result.substring(0, 100)}...`)
                      res.write(`data: ${JSON.stringify({ type: 'tool_result', name: toolCall.function.name, result: result.substring(0, 200) })}\n\n`)

                      openaiMessages.push({ role: 'tool', content: result, tool_call_id: toolCall.id })
                    }
                    continue
                  }

                  if (choice?.finish_reason === 'stop' || choice?.finish_reason === 'length') {
                    continueLoop = false
                  } else if (choice?.finish_reason === 'tool_calls') {
                    continue
                  } else {
                    continueLoop = false
                  }
                }
              } else if (provider === 'google') {
                // Google Gemini API
                const apiKey = aiConfig?.apiKey
                if (!apiKey) throw new Error('Google API key required')

                // Convert tools to Gemini format
                const geminiTools = [{
                  function_declarations: tools.map(t => ({
                    name: t.toolSpec.name,
                    description: t.toolSpec.description,
                    parameters: t.toolSpec.inputSchema.json
                  }))
                }]

                // Build Gemini messages
                const geminiContents = [
                  { role: 'user', parts: [{ text: SYSTEM_PROMPT + '\n\n' + fullPrompt }] }
                ]

                let continueLoop = true
                while (continueLoop) {
                  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      contents: geminiContents,
                      tools: geminiTools,
                      generationConfig: { maxOutputTokens: 4096 }
                    })
                  })

                  const data = await response.json() as { candidates: Array<{ content: { parts: Array<{ text?: string; functionCall?: { name: string; args: Record<string, string> } }> }; finishReason: string }> }
                  const candidate = data.candidates?.[0]
                  const parts = candidate?.content?.parts || []

                  for (const part of parts) {
                    if (part.text) {
                      fullResponse += part.text + '\n'
                      res.write(`data: ${JSON.stringify({ type: 'token', text: part.text })}\n\n`)
                      conversationHistory.push({ role: 'assistant', content: [{ text: part.text }] })
                    }
                    if (part.functionCall) {
                      console.log(`🔧 Tool: ${part.functionCall.name}`)
                      res.write(`data: ${JSON.stringify({ type: 'tool', name: part.functionCall.name, input: part.functionCall.args })}\n\n`)

                      const result = executeTool(part.functionCall.name, part.functionCall.args)
                      console.log(`   Result: ${result.substring(0, 100)}...`)
                      res.write(`data: ${JSON.stringify({ type: 'tool_result', name: part.functionCall.name, result: result.substring(0, 200) })}\n\n`)

                      geminiContents.push({ role: 'model', parts: [{ functionCall: part.functionCall }] } as never)
                      geminiContents.push({ role: 'user', parts: [{ functionResponse: { name: part.functionCall.name, response: { result } } }] } as never)
                      continue
                    }
                  }

                  if (candidate?.finishReason === 'STOP' || candidate?.finishReason === 'MAX_TOKENS') {
                    continueLoop = false
                  } else {
                    continueLoop = false
                  }
                }
              } else {
                throw new Error(`Unknown provider: ${provider}`)
              }

              // Save response
              if (fullResponse.trim()) {
                addResponse(fullResponse.trim())
              }

              res.write(`data: ${JSON.stringify({ type: 'done', fullText: fullResponse })}\n\n`)
              res.end()

              updateStatus('idle')
              console.log('✅ Done!')

            } catch (error) {
              console.error('❌ Error:', error)
              res.write(`data: ${JSON.stringify({ type: 'error', message: String(error) })}\n\n`)
              res.end()
              updateStatus('idle')
            }
          })
        })

        // GET /api/status
        server.middlewares.use('/api/status', (req, res) => {
          if (req.method === 'GET') {
            try {
              const content = fs.existsSync(statusFile)
                ? fs.readFileSync(statusFile, 'utf-8')
                : JSON.stringify({ status: 'idle', lastUpdate: Date.now() })
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(content)
            } catch {
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ status: 'idle', lastUpdate: Date.now() }))
            }
          }
        })

        // GET /api/responses
        server.middlewares.use('/api/responses', (req, res) => {
          if (req.method === 'GET') {
            try {
              const content = fs.existsSync(responsesFile)
                ? fs.readFileSync(responsesFile, 'utf-8')
                : JSON.stringify({ responses: [] })
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(content)
            } catch {
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ responses: [] }))
            }
          }
        })

        // POST /api/clear
        server.middlewares.use('/api/clear', (req, res) => {
          if (req.method === 'POST') {
            conversationHistory = []
            fs.writeFileSync(responsesFile, JSON.stringify({ responses: [] }))
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ success: true }))
          }
        })

        // POST /api/test-config - Test AI provider connection
        server.middlewares.use('/api/test-config', async (req, res) => {
          if (req.method !== 'POST') {
            res.writeHead(405)
            res.end()
            return
          }

          let body = ''
          req.on('data', (chunk: Buffer) => { body += chunk.toString() })
          req.on('end', async () => {
            try {
              const { provider, apiKey, modelId, baseUrl } = JSON.parse(body)

              console.log(`🔌 Testing ${provider}/${modelId}...`)

              if (provider === 'bedrock-sso') {
                // Test AWS Bedrock SSO
                const { BedrockRuntimeClient, ConverseCommand } = await import('@aws-sdk/client-bedrock-runtime')
                const { fromIni } = await import('@aws-sdk/credential-provider-ini')
                const os = await import('os')

                const awsRegion = env.AWS_REGION || process.env.AWS_REGION || 'eu-central-1'
                const awsProfile = env.AWS_PROFILE || process.env.AWS_PROFILE || 'default'
                const awsConfigFile = env.AWS_CONFIG_FILE || process.env.AWS_CONFIG_FILE || `${os.homedir()}/.aws/config`

                process.env.AWS_CONFIG_FILE = awsConfigFile

                const client = new BedrockRuntimeClient({
                  region: awsRegion,
                  credentials: fromIni({ profile: awsProfile }),
                })

                const command = new ConverseCommand({
                  modelId: modelId,
                  messages: [{ role: 'user', content: [{ text: 'Say "OK" if you can hear me.' }] }],
                  inferenceConfig: { maxTokens: 10 }
                })

                await client.send(command)
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ success: true }))
              } else if (provider === 'anthropic') {
                const response = await fetch('https://api.anthropic.com/v1/messages', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey,
                    'anthropic-version': '2023-06-01'
                  },
                  body: JSON.stringify({
                    model: modelId,
                    max_tokens: 10,
                    messages: [{ role: 'user', content: 'Say OK' }]
                  })
                })
                const data = await response.json() as { error?: { message: string } }
                if (!response.ok) throw new Error(data.error?.message || 'API error')
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ success: true }))
              } else if (provider === 'openai' || provider === 'custom') {
                const url = provider === 'custom' && baseUrl ? baseUrl : 'https://api.openai.com/v1'
                const response = await fetch(`${url}/chat/completions`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                  },
                  body: JSON.stringify({
                    model: modelId,
                    max_tokens: 10,
                    messages: [{ role: 'user', content: 'Say OK' }]
                  })
                })
                const data = await response.json() as { error?: { message: string } }
                if (!response.ok) throw new Error(data.error?.message || 'API error')
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ success: true }))
              } else if (provider === 'google') {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    contents: [{ role: 'user', parts: [{ text: 'Say OK' }] }],
                    generationConfig: { maxOutputTokens: 10 }
                  })
                })
                const data = await response.json() as { error?: { message: string } }
                if (!response.ok) throw new Error(data.error?.message || 'API error')
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ success: true }))
              } else {
                throw new Error(`Unknown provider: ${provider}`)
              }
            } catch (error) {
              console.error('❌ Test failed:', error)
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ success: false, error: String(error) }))
            }
          })
        })
      }
    }
  ],
})
