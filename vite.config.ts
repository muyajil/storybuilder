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
                    type: { type: 'string', description: 'Art des Spiels: "story" (interaktive Geschichte mit JSON), "canvas" (für Action/Arcade), "cards" (Karten/Memory), "quiz" (Fragen), "simple" (Minimal)' }
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
              name: 'validate_code',
              description: '🚨 PFLICHT vor write_file/edit_file! Prüft deinen Code und zeigt ALLE Fehler. IMMER ZUERST aufrufen bevor du schreibst!',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    content: { type: 'string', description: 'Der Code den du validieren möchtest' }
                  },
                  required: ['content']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'get_story_schema',
              description: 'Zeigt das komplette JSON-Schema für Geschichten. IMMER AUFRUFEN bevor du eine Geschichte erstellst! Zeigt alle möglichen Felder und Werte.',
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
              name: 'validate_json',
              description: '🚨 PFLICHT vor write_file! Prüft dein Story-JSON und zeigt ALLE Fehler. IMMER ZUERST aufrufen bevor du schreibst!',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    content: { type: 'string', description: 'Das JSON das du validieren möchtest' }
                  },
                  required: ['content']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'get_story_system',
              description: 'Zeigt wie man JSON-Geschichten erstellt. IMMER AUFRUFEN bevor du eine Geschichte implementierst!',
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
          },
          {
            toolSpec: {
              name: 'list_scenes',
              description: 'Zeigt alle Szenen-IDs einer Geschichte mit kurzer Info. Gut um Überblick zu bekommen ohne alles zu laden.',
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
          },
          {
            toolSpec: {
              name: 'get_scene',
              description: 'Liest eine einzelne Szene aus der Geschichte. Spart Kontext wenn du nur eine Szene brauchst!',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID' },
                    sceneId: { type: 'string', description: 'Die Szenen-ID (z.B. "start", "strand")' }
                  },
                  required: ['gameId', 'sceneId']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'add_scene',
              description: 'Fügt eine neue Szene zur Geschichte hinzu. Validiert automatisch!',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID' },
                    scene: { type: 'string', description: 'Die neue Szene als JSON-String' }
                  },
                  required: ['gameId', 'scene']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'update_scene',
              description: 'Aktualisiert eine existierende Szene. Validiert automatisch!',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID' },
                    sceneId: { type: 'string', description: 'Die Szenen-ID die aktualisiert werden soll' },
                    scene: { type: 'string', description: 'Die aktualisierte Szene als JSON-String' }
                  },
                  required: ['gameId', 'sceneId', 'scene']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'delete_scene',
              description: 'Löscht eine Szene aus der Geschichte. Warnt wenn andere Szenen darauf verweisen!',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID' },
                    sceneId: { type: 'string', description: 'Die Szenen-ID die gelöscht werden soll' }
                  },
                  required: ['gameId', 'sceneId']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'add_choice',
              description: 'Fügt eine neue Auswahl-Option zu einer Szene hinzu.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID' },
                    sceneId: { type: 'string', description: 'Die Szenen-ID' },
                    text: { type: 'string', description: 'Button-Text (z.B. "🌊 Zum Strand")' },
                    nextSceneId: { type: 'string', description: 'Ziel-Szene' },
                    requiresItems: { type: 'string', description: 'Optional: Komma-getrennte Items (z.B. "key,map")' }
                  },
                  required: ['gameId', 'sceneId', 'text', 'nextSceneId']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'remove_choice',
              description: 'Entfernt eine Auswahl-Option aus einer Szene.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID' },
                    sceneId: { type: 'string', description: 'Die Szenen-ID' },
                    choiceIndex: { type: 'string', description: 'Index der Choice (0 = erste)' }
                  },
                  required: ['gameId', 'sceneId', 'choiceIndex']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'set_dialogue',
              description: 'Setzt die Dialoge einer Szene.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID' },
                    sceneId: { type: 'string', description: 'Die Szenen-ID' },
                    dialogue: { type: 'string', description: 'Dialog-Texte als JSON-Array (z.B. ["Hallo!", "Wie gehts?"])' }
                  },
                  required: ['gameId', 'sceneId', 'dialogue']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'add_character',
              description: 'Fügt einen Charakter zu einer Szene hinzu.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID' },
                    sceneId: { type: 'string', description: 'Die Szenen-ID' },
                    sprite: { type: 'string', description: 'Sprite-Name (z.B. "Princess", "Dolphin")' },
                    position: { type: 'string', description: 'Position: "left", "center", oder "right"' },
                    size: { type: 'string', description: 'Größe (10-300, Standard: 80)' }
                  },
                  required: ['gameId', 'sceneId', 'sprite', 'position']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'remove_character',
              description: 'Entfernt einen Charakter aus einer Szene.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID' },
                    sceneId: { type: 'string', description: 'Die Szenen-ID' },
                    characterIndex: { type: 'string', description: 'Index des Charakters (0 = erster)' }
                  },
                  required: ['gameId', 'sceneId', 'characterIndex']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'set_findTarget',
              description: 'Setzt oder aktualisiert das Suchspiel einer Szene.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID' },
                    sceneId: { type: 'string', description: 'Die Szenen-ID' },
                    sprite: { type: 'string', description: 'Was gefunden werden soll (z.B. "Starfish")' },
                    x: { type: 'string', description: 'X-Position in % (0-100)' },
                    y: { type: 'string', description: 'Y-Position in % (0-100)' },
                    hint: { type: 'string', description: 'Hinweis-Text' },
                    foundText: { type: 'string', description: 'Text wenn gefunden' },
                    nextSceneId: { type: 'string', description: 'Nächste Szene' }
                  },
                  required: ['gameId', 'sceneId', 'sprite', 'x', 'y', 'hint', 'nextSceneId']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'set_miniGame',
              description: 'Setzt oder aktualisiert das Mini-Spiel einer Szene.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID' },
                    sceneId: { type: 'string', description: 'Die Szenen-ID' },
                    miniGame: { type: 'string', description: 'Mini-Spiel als JSON-String' }
                  },
                  required: ['gameId', 'sceneId', 'miniGame']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'add_item_action',
              description: 'Fügt eine Item-Aktion zu einer Szene hinzu (gibt dem Spieler ein Item).',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID' },
                    sceneId: { type: 'string', description: 'Die Szenen-ID' },
                    item: { type: 'string', description: 'Item-Name (z.B. "key", "map")' },
                    message: { type: 'string', description: 'Nachricht wenn erhalten (z.B. "🔑 Schlüssel gefunden!")' },
                    trigger: { type: 'string', description: '"onEnter" oder "onFindTarget" (Standard: onEnter)' }
                  },
                  required: ['gameId', 'sceneId', 'item', 'message']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'set_background',
              description: 'Ändert den Hintergrund einer Szene.',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {
                    gameId: { type: 'string', description: 'Die Game-ID' },
                    sceneId: { type: 'string', description: 'Die Szenen-ID' },
                    background: { type: 'string', description: 'Hintergrund-Name (z.B. "DeepOcean", "EnchantedForest")' }
                  },
                  required: ['gameId', 'sceneId', 'background']
                }
              }
            }
          },
          {
            toolSpec: {
              name: 'get_state_system',
              description: 'Zeigt wie man Spielstand, Items und Hindernisse verwendet. Für: Schlüssel sammeln, gesperrte Optionen, Aufgaben-System. AUFRUFEN wenn das Kind ein Rätsel/Hindernis einbauen will!',
              inputSchema: {
                json: {
                  type: 'object',
                  properties: {},
                  required: []
                }
              }
            }
          }
        ]

        // System prompt for story-based game creation (JSON-based)
        const SYSTEM_PROMPT = `Du bist ein freundlicher Geschichten-Helfer für Kinder! 🎮✨

=== SO REDEST DU ===
• KURZ! Max 1-2 Sätze + eine Frage
• Freundlich & aufgeregt wie ein Freund
• Viele Emojis! 🎉🌟🎮
• Einfache Wörter

Beispiele:
✅ "Cool! 🎉 Was passiert dann?"
✅ "Ooh spannend! 🌟 Wohin geht sie?"
✅ "Super Idee! Was sagt sie?"
❌ NICHT: Lange Erklärungen oder mehrere Fragen

=== WICHTIG ===
🚨 Das KIND erfindet die Geschichte - du hilfst nur beim Bauen!
• Frag was passieren soll
• Warte auf Antwort
• Bau genau das
• Frag was als nächstes kommt

⚠️ KEINE VORAUSGEFÜLLTEN OPTIONEN!
• NIEMALS 2-3 Optionen vorschlagen ohne zu fragen!
• Frag IMMER erst: "Was soll passieren?" oder "Was für Optionen willst du?"
• Das Kind entscheidet was als nächstes kommt - nicht du!
• Eine Szene kann auch OHNE Optionen sein (nur Text/Dialog)

=== JSON-BASIERTES SYSTEM ===
Du arbeitest NUR mit JSON! Kein React-Code nötig!
• Geschichten werden als story.json Dateien gespeichert
• get_story_schema() → zeigt das komplette JSON-Format
• validate_json(content) → prüft ob JSON gültig ist

=== TOOLS (Kontext-sparend!) ===

📖 Schema & Info:
• get_story_schema() → JSON-Schema
• get_available_sprites() → Figuren-Namen
• get_available_scenes() → Hintergrund-Namen
• get_available_minigames() → Mini-Spiel-Typen

📋 Überblick:
• list_scenes(gameId) → Alle Szenen-IDs
• get_scene(gameId, sceneId) → Eine Szene lesen

📝 Szenen verwalten:
• add_scene(gameId, scene) → Neue Szene
• update_scene(gameId, sceneId, scene) → Szene ersetzen
• delete_scene(gameId, sceneId) → Szene löschen

✏️ Einzelne Teile ändern (BESTE OPTION!):
• set_background(gameId, sceneId, background)
• set_dialogue(gameId, sceneId, dialogue)
• add_character(gameId, sceneId, sprite, position, size)
• remove_character(gameId, sceneId, characterIndex)
• add_choice(gameId, sceneId, text, nextSceneId)
• remove_choice(gameId, sceneId, choiceIndex)
• set_findTarget(gameId, sceneId, sprite, x, y, hint, nextSceneId)
• set_miniGame(gameId, sceneId, miniGame)
• add_item_action(gameId, sceneId, item, message)

✅ validate_json(content) → Prüfen

=== COOLE FEATURES ===
Manchmal vorschlagen (nicht aufdrängen!):
• 🔍 "Soll man was suchen müssen?" → findTarget
• 🎮 "Ein kleines Spiel einbauen?" → miniGame
• 🔑 "Erst was finden bevor's weitergeht?" → requiresItems

=== WENN KIND KLICKT ===
Wenn das Kind im Spiel auf "Option/Suchen/Spiel" klickt:
• Es will GENAU DORT eine Interaktion
• Frag kurz was passieren soll
• Bau es dann ein!

=== 📋 JSON-STRUKTUR ===

SZENE ERSTELLEN:
{
  "id": "meine_szene",
  "background": "DeepOcean",
  "characters": [{ "sprite": "Princess", "position": "center", "size": 90 }],
  "dialogue": ["Text hier..."],
  "choices": [{ "text": "Weiter", "nextSceneId": "naechste_szene" }]
}

FINDTARGET (Suchspiel):
"findTarget": {
  "sprite": "Starfish",
  "size": 40,
  "position": { "x": 70, "y": 80 },
  "hint": "Wo ist es?",
  "foundText": "Gefunden!",
  "nextSceneId": "naechste_szene"
}

MINIGAME:
"miniGame": {
  "type": "collect",
  "playerSprite": "Princess",
  "collectSprite": "Star",
  "targetScore": 5,
  "successSceneId": "gewonnen"
}

ITEMS & BEDINGUNGEN:
"onEnterActions": [{ "type": "add_item", "item": "schluessel", "message": "🔑 Schlüssel!" }]
"choices": [{ "text": "Tür öffnen", "nextSceneId": "raum", "requiresItems": ["schluessel"] }]

=== REGELN ===
• Sprite-Namen: get_available_sprites() aufrufen!
• Hintergrund-Namen: get_available_scenes() aufrufen!
• Positionen: "left" | "center" | "right"
• IMMER validate_json() bevor du speicherst!`

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
}`,
          story: `import { JsonStoryPlayer } from '../../components/story';
import type { StoryJson } from '../../components/story/StorySchema';
import storyData from './story.json';

export function GAME_NAME() {
  return <JsonStoryPlayer story={storyData as StoryJson} width={800} height={500} />;
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

        // Extract exported function names from a file
        function extractExports(filePath: string): string[] {
          try {
            const content = fs.readFileSync(filePath, 'utf-8')
            const matches = content.match(/export function (\w+)/g) || []
            return matches.map(m => m.replace('export function ', ''))
          } catch { return [] }
        }

        // Get all available sprites (reused by tool and validation)
        function getAvailableSprites(): Record<string, string[]> {
          const spritesDir = path.join(projectDir, 'src', 'components', 'sprites')
          return {
            animals: extractExports(path.join(spritesDir, 'Animals.tsx')),
            characters: extractExports(path.join(spritesDir, 'Characters.tsx')),
            environment: extractExports(path.join(spritesDir, 'Environment.tsx')),
            effects: extractExports(path.join(spritesDir, 'Effects.tsx')),
          }
        }

        // Get all available scenes (reused by tool and validation)
        function getAvailableScenes(): string[] {
          const scenesFile = path.join(projectDir, 'src', 'components', 'story', 'SceneTemplates.tsx')
          try {
            const content = fs.readFileSync(scenesFile, 'utf-8')
            const matches = content.match(/export function (\w+)\([^)]*SceneProps/g) || []
            return matches.map(m => {
              const match = m.match(/export function (\w+)/)
              return match ? match[1] : ''
            }).filter(s => s && s !== 'CharacterPosition')
          } catch { return [] }
        }

        // Get all available components (sprites, scenes, etc.)
        function getAvailableComponents(): Set<string> {
          const components = new Set<string>()

          // Add all sprites
          const sprites = getAvailableSprites()
          Object.values(sprites).flat().forEach(s => components.add(s))

          // Add all scenes
          getAvailableScenes().forEach(s => components.add(s))

          // Add story system components
          components.add('StoryPlayer')
          components.add('createLinearStory')
          components.add('CharacterPosition')

          return components
        }

        // Validate that all JSX components used in the code exist
        function validateComponents(content: string): string | null {
          // Only validate game files that use our components
          if (!content.includes('createLinearStory') && !content.includes('StoryPlayer')) {
            return null // Not a story file, skip validation
          }

          const availableComponents = getAvailableComponents()

          // Validate imports from our components
          const importPattern = /import\s*\{([^}]+)\}\s*from\s*['"][^'"]*components[^'"]*['"]/g
          let importMatch
          const importedNames = new Set<string>()
          while ((importMatch = importPattern.exec(content)) !== null) {
            const imports = importMatch[1].split(',').map(s => s.trim().split(' ')[0].replace('type ', ''))
            imports.forEach(name => {
              if (name && !name.startsWith('type')) {
                importedNames.add(name)
              }
            })
          }

          // Collect ALL errors instead of returning early
          const allErrors: string[] = []

          // Find all JSX component usages: <ComponentName or <ComponentName>
          const usedComponents = new Set<string>()
          const jsxPattern = /<([A-Z][a-zA-Z0-9]*)/g
          let match
          while ((match = jsxPattern.exec(content)) !== null) {
            usedComponents.add(match[1])
          }

          // 1. Check imports against available components
          const badImports: string[] = []
          for (const name of importedNames) {
            if (!availableComponents.has(name)) {
              badImports.push(name)
            }
          }
          if (badImports.length > 0) {
            allErrors.push(`📦 UNGÜLTIGE IMPORTS:\n${badImports.map(name => `  • ${name} existiert nicht`).join('\n')}\n  💡 Nutze get_available_sprites() für verfügbare Komponenten!`)
          }

          // 2. Check for unknown JSX components
          const missingComponents: string[] = []
          for (const component of usedComponents) {
            if (component === 'Fragment') continue
            if (!availableComponents.has(component)) {
              missingComponents.push(component)
            }
          }
          if (missingComponents.length > 0) {
            allErrors.push(`🎭 UNBEKANNTE KOMPONENTEN:\n${missingComponents.map(c => `  • <${c}> existiert nicht`).join('\n')}\n  💡 Nutze get_available_sprites() für verfügbare Komponenten!`)
          }

          // 3. Check that used components are actually imported
          const notImported: string[] = []
          for (const component of usedComponents) {
            if (component === 'Fragment') continue
            if (['StoryPlayer', 'CharacterPosition'].includes(component)) continue
            if (component.includes('Ocean') || component.includes('Forest') || component.includes('Farm') ||
                component.includes('Castle') || component.includes('Cave') || component.includes('Village') ||
                component.includes('Beach') || component.includes('Sky') || component.includes('Underwater')) continue
            if (availableComponents.has(component) && !importedNames.has(component)) {
              notImported.push(component)
            }
          }
          if (notImported.length > 0) {
            allErrors.push(`📥 FEHLENDE IMPORTS:\n${notImported.map(c => `  • <${c}> wird benutzt aber nicht importiert`).join('\n')}\n  💡 Füge zu import { ${notImported.join(', ')} } from '../../components' hinzu!`)
          }

          // ============================================
          // STORY STRUCTURE VALIDATION
          // ============================================

          // Only validate story structure if this is a story file
          if (content.includes('createLinearStory')) {

            // 1. Extract all scene IDs
            const sceneIdPattern = /id:\s*['"]([^'"]+)['"]/g
            const sceneIds: string[] = []
            const sceneIdCounts = new Map<string, number>()
            let idMatch
            while ((idMatch = sceneIdPattern.exec(content)) !== null) {
              const id = idMatch[1]
              sceneIds.push(id)
              sceneIdCounts.set(id, (sceneIdCounts.get(id) || 0) + 1)
            }

            // 2. Check for duplicate scene IDs
            const duplicates = Array.from(sceneIdCounts.entries()).filter(([, count]) => count > 1)
            if (duplicates.length > 0) {
              allErrors.push(`🔄 DOPPELTE SZENEN-IDs:\n${duplicates.map(([id, count]) => `  • '${id}' kommt ${count}x vor`).join('\n')}`)
            }

            // 3. Check for missing 'start' scene
            if (!sceneIds.includes('start')) {
              allErrors.push(`🚫 KEINE START-SZENE:\n  • Es fehlt eine Szene mit id: 'start'\n  • Die erste Szene muss id: 'start' haben!`)
            }

            // 4. Extract all nextSceneId references
            const nextScenePattern = /nextSceneId:\s*['"]([^'"]+)['"]/g
            const referencedScenes = new Set<string>()
            let nextMatch
            while ((nextMatch = nextScenePattern.exec(content)) !== null) {
              referencedScenes.add(nextMatch[1])
            }

            // 5. Check for invalid nextSceneId references
            const sceneIdSet = new Set(sceneIds)
            const invalidRefs = Array.from(referencedScenes).filter(ref => !sceneIdSet.has(ref))
            if (invalidRefs.length > 0) {
              allErrors.push(`🔗 UNGÜLTIGE SZENEN-REFERENZEN:\n${invalidRefs.map(ref => `  • nextSceneId: '${ref}' - diese Szene existiert nicht!`).join('\n')}\n  💡 Verfügbare Szenen: ${sceneIds.join(', ')}`)
            }

            // 6. Check for empty dialogue arrays
            const emptyDialoguePattern = /dialogue:\s*\[\s*\]/g
            if (emptyDialoguePattern.test(content)) {
              allErrors.push(`💬 LEERE DIALOGE:\n  • Mindestens eine Szene hat dialogue: []\n  • Jede Szene braucht mindestens einen Dialog-Text!`)
            }

            // 7. Check for invalid CharacterPosition values
            const positionPattern = /position=["']([^"']+)["']/g
            const validPositions = new Set(['left', 'center', 'right'])
            const invalidPositions: string[] = []
            let posMatch
            while ((posMatch = positionPattern.exec(content)) !== null) {
              if (!validPositions.has(posMatch[1])) {
                invalidPositions.push(posMatch[1])
              }
            }
            if (invalidPositions.length > 0) {
              allErrors.push(`📍 UNGÜLTIGE POSITIONEN:\n${invalidPositions.map(pos => `  • position="${pos}" ist ungültig`).join('\n')}\n  💡 Erlaubte Werte: "left", "center", "right"`)
            }

            // 8. Check for orphan scenes (unreachable)
            if (sceneIds.length > 1) {
              const reachable = new Set<string>(['start'])
              // Add all scenes referenced by nextSceneId
              referencedScenes.forEach(id => reachable.add(id))
              // Find orphans (excluding 'start' which is the entry point)
              const orphans = sceneIds.filter(id => id !== 'start' && !reachable.has(id))
              if (orphans.length > 0) {
                allErrors.push(`🏝️ UNERREICHBARE SZENEN:\n${orphans.map(id => `  • '${id}' wird von keiner anderen Szene referenziert`).join('\n')}\n  💡 Füge eine Choice mit nextSceneId: '${orphans[0]}' hinzu!`)
              }
            }

            // 9. Check findTarget has required properties
            const findTargetPattern = /findTarget:\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/g
            let ftMatch
            while ((ftMatch = findTargetPattern.exec(content)) !== null) {
              const ftContent = ftMatch[1]
              if (!ftContent.includes('target:')) {
                allErrors.push(`🎯 FINDTARGET FEHLT 'target':\n  • findTarget braucht: target: <Komponente />`)
              }
              if (!ftContent.includes('position:')) {
                allErrors.push(`🎯 FINDTARGET FEHLT 'position':\n  • findTarget braucht: position: { x: 0-100, y: 0-100 }`)
              }
              if (!ftContent.includes('nextSceneId:')) {
                allErrors.push(`🎯 FINDTARGET FEHLT 'nextSceneId':\n  • findTarget braucht: nextSceneId: 'scene_name'`)
              }
            }

            // 10. Check findTarget position coordinates are 0-100
            const ftPositionPattern = /findTarget:[\s\S]*?position:\s*\{\s*x:\s*(\d+)\s*,\s*y:\s*(\d+)\s*\}/g
            let coordMatch
            while ((coordMatch = ftPositionPattern.exec(content)) !== null) {
              const x = parseInt(coordMatch[1])
              const y = parseInt(coordMatch[2])
              if (x < 0 || x > 100 || y < 0 || y > 100) {
                allErrors.push(`📐 UNGÜLTIGE KOORDINATEN:\n  • position: { x: ${x}, y: ${y} } - Werte müssen zwischen 0-100 sein!`)
              }
            }

            // 11. Check choices have text and nextSceneId
            const choicePattern = /\{\s*text:\s*['"][^'"]*['"]/g
            const choicesWithNext = /\{\s*text:\s*['"][^'"]*['"][\s\S]*?nextSceneId:\s*['"][^'"]*['"]/g
            const allChoices = content.match(choicePattern) || []
            const validChoices = content.match(choicesWithNext) || []
            if (allChoices.length > validChoices.length) {
              allErrors.push(`🔘 CHOICE FEHLT 'nextSceneId':\n  • Jede Choice braucht: { text: '...', nextSceneId: '...' }`)
            }

            // 12. Check for dead-end scenes (no choices, no findTarget, not last scene)
            // Extract each scene block
            const sceneBlockPattern = /\{\s*id:\s*['"]([^'"]+)['"][\s\S]*?(?=\{\s*id:\s*['"]|]\s*\)\s*;)/g
            let sceneBlock
            const deadEnds: string[] = []
            while ((sceneBlock = sceneBlockPattern.exec(content)) !== null) {
              const sceneId = sceneBlock[1]
              const block = sceneBlock[0]
              const hasChoices = block.includes('choices:')
              const hasFindTarget = block.includes('findTarget:')
              // If no exit mechanism, it's a dead end (unless it's intentionally the last scene)
              if (!hasChoices && !hasFindTarget) {
                // Check if dialogue contains "Fortsetzung" or "Ende" (intentional ending)
                if (!block.includes('Fortsetzung') && !block.includes('Ende') && !block.includes('THE END')) {
                  deadEnds.push(sceneId)
                }
              }
            }
            if (deadEnds.length > 0) {
              allErrors.push(`🚧 SACKGASSEN-SZENEN:\n${deadEnds.map(id => `  • '${id}' hat keine choices oder findTarget - Spieler bleibt stecken!`).join('\n')}\n  💡 Füge choices: [...] oder findTarget: {...} hinzu!`)
            }

            // 13. Check item consistency (requiresItems vs add_item)
            const requiresPattern = /requiresItems:\s*\[([^\]]+)\]/g
            const addItemPattern = /add_item['"]\s*,\s*item:\s*['"]([^'"]+)['"]/g
            const requiredItems = new Set<string>()
            const providedItems = new Set<string>()
            let reqMatch
            while ((reqMatch = requiresPattern.exec(content)) !== null) {
              const items = reqMatch[1].match(/['"]([^'"]+)['"]/g) || []
              items.forEach(item => requiredItems.add(item.replace(/['"]/g, '')))
            }
            let addMatch
            while ((addMatch = addItemPattern.exec(content)) !== null) {
              providedItems.add(addMatch[1])
            }
            const missingItems = Array.from(requiredItems).filter(item => !providedItems.has(item))
            if (missingItems.length > 0) {
              allErrors.push(`🔑 FEHLENDE ITEMS:\n${missingItems.map(item => `  • requiresItems: ['${item}'] - aber nirgends wird add_item: '${item}' gegeben!`).join('\n')}\n  💡 Füge onFindTargetActions: [{ type: 'add_item', item: '${missingItems[0]}', message: '...' }] hinzu!`)
            }

            // 14. Check for self-loop scenes (all choices lead back to same scene)
            const sceneChoicesPattern = /\{\s*id:\s*['"]([^'"]+)['"][\s\S]*?choices:\s*\[([\s\S]*?)\]/g
            let scMatch
            while ((scMatch = sceneChoicesPattern.exec(content)) !== null) {
              const sceneId = scMatch[1]
              const choicesBlock = scMatch[2]
              const nextIds = choicesBlock.match(/nextSceneId:\s*['"]([^'"]+)['"]/g) || []
              const uniqueNextIds = new Set(nextIds.map(n => n.match(/['"]([^'"]+)['"]/)?.[1]))
              if (uniqueNextIds.size === 1 && uniqueNextIds.has(sceneId)) {
                allErrors.push(`🔄 ENDLOS-SCHLEIFE:\n  • Szene '${sceneId}' - alle Choices führen zurück zur gleichen Szene!`)
              }
            }

            // 15. Check every scene has a background
            const scenesWithBg = (content.match(/background:\s*</g) || []).length
            if (scenesWithBg < sceneIds.length) {
              allErrors.push(`🖼️ FEHLENDE HINTERGRÜNDE:\n  • ${sceneIds.length - scenesWithBg} Szene(n) haben keinen background!\n  • Jede Szene braucht: background: <DeepOcean /> oder ähnlich`)
            }

            // 16. Check for duplicate choice text in same scene
            const sceneWithChoicesPattern = /\{\s*id:\s*['"]([^'"]+)['"][\s\S]*?choices:\s*\[([\s\S]*?)\]\s*,?\s*\}/g
            let dupMatch
            while ((dupMatch = sceneWithChoicesPattern.exec(content)) !== null) {
              const sceneId = dupMatch[1]
              const choicesBlock = dupMatch[2]
              const texts = choicesBlock.match(/text:\s*['"]([^'"]+)['"]/g) || []
              const textSet = new Set<string>()
              const duplicateTexts: string[] = []
              texts.forEach(t => {
                const text = t.match(/['"]([^'"]+)['"]/)?.[1] || ''
                if (textSet.has(text)) {
                  duplicateTexts.push(text)
                }
                textSet.add(text)
              })
              if (duplicateTexts.length > 0) {
                allErrors.push(`🔘 DOPPELTE CHOICE-TEXTE in '${sceneId}':\n${duplicateTexts.map(t => `  • "${t}" kommt mehrfach vor`).join('\n')}`)
              }
            }

          }

          // Return ALL collected errors
          if (allErrors.length > 0) {
            return `❌ VALIDIERUNG FEHLGESCHLAGEN - Datei wurde NICHT geschrieben!\n\n${allErrors.length} Fehler gefunden:\n\n${allErrors.join('\n\n')}`
          }

          return null
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
                // Validate components exist before writing
                const componentError = validateComponents(content)
                if (componentError) {
                  return componentError
                }
                // Validate syntax before writing
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
                // Validate components exist before writing
                const componentError = validateComponents(newContent)
                if (componentError) {
                  return componentError
                }
                // Validate syntax before writing
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
                const template = gameTemplates[type] || gameTemplates.story
                const componentName = gameName.replace(/[^a-zA-Z]/g, '')
                const gameCode = template
                  .replace(/GAME_NAME/g, componentName)
                  .replace(/GAME_DISPLAY_NAME/g, gameName)

                // Create game folder and file
                const gameDir = path.join(projectDir, 'src', 'games', id)
                fs.mkdirSync(gameDir, { recursive: true })
                fs.writeFileSync(path.join(gameDir, `${componentName}.tsx`), gameCode)

                // For story type, also create the story.json file
                if (type === 'story' || !type || !gameTemplates[type]) {
                  const storyJson = {
                    id: id,
                    title: gameName,
                    description: description,
                    author: 'Kind',
                    language: 'de',
                    ageRating: '6+',
                    tags: [],
                    scenes: [
                      {
                        id: 'start',
                        background: 'EnchantedForest',
                        characters: [],
                        dialogue: [
                          `Willkommen zu "${gameName}"!`,
                          'Dies ist der Anfang deiner Geschichte.',
                          'Was möchtest du tun?'
                        ],
                        choices: [
                          {
                            text: '🌟 Weiter',
                            nextSceneId: 'scene2'
                          }
                        ]
                      },
                      {
                        id: 'scene2',
                        background: 'SunnyFarm',
                        characters: [],
                        dialogue: [
                          'Du bist in der nächsten Szene angekommen!',
                          'Hier kannst du weitere Abenteuer erleben.'
                        ],
                        choices: [
                          {
                            text: '🔙 Zurück zum Start',
                            nextSceneId: 'start'
                          }
                        ]
                      }
                    ]
                  }
                  fs.writeFileSync(
                    path.join(gameDir, 'story.json'),
                    JSON.stringify(storyJson, null, 2)
                  )
                }

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

                const extraInfo = (type === 'story' || !type || !gameTemplates[type])
                  ? '\n📜 src/games/' + id + '/story.json\n\nDu kannst die Geschichte in der JSON-Datei bearbeiten!'
                  : ''

                return `✅ Spiel "${gameName}" wurde erstellt!\n\n📁 src/games/${id}/${componentName}.tsx${extraInfo}\n\nDas Spiel erscheint jetzt im Menü. Du kannst es jetzt anpassen!`
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
                const category = input.category?.toLowerCase()
                const sprites = getAvailableSprites()

                let result = '🎨 VERFÜGBARE SPRITES\n\nNutze diese Namen im JSON als "sprite": "Name"\n\n'

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

                result += '⚠️ NUR diese Namen verwenden! Keine anderen erfinden!'
                return result
              }
              case 'get_available_scenes': {
                const scenes = getAvailableScenes()

                let result = `🌄 VERFÜGBARE HINTERGRÜNDE (${scenes.length} gefunden)\n\n`
                result += 'Nutze diese Namen im JSON als "background": "Name"\n\n'
                result += 'HINTERGRÜNDE:\n'
                result += scenes.join(', ') + '\n\n'
                result += '⚠️ NUR diese Namen verwenden! Keine anderen erfinden!'
                return result
              }
              case 'get_available_minigames': {
                // JSON-based minigame documentation
                const sprites = getAvailableSprites()

                let result = '🎮 MINI-SPIEL TYPEN (JSON-Format)\n\n'
                result += 'Mini-Spiele werden direkt in der Szene als JSON definiert.\n\n'

                result += '=== TYPEN ===\n'
                result += '• collect - Sammle Items, weiche Hindernissen aus\n'
                result += '• dodge - Weiche fallenden Objekten aus\n'
                result += '• catch - Fange fallende Items auf\n'
                result += '• click - Klicke auf erscheinende Ziele\n'
                result += '• snake - Klassisches Snake-Spiel\n'
                result += '• race - Erreiche das Ziel\n'
                result += '• flappy - Tippe um zu fliegen\n\n'

                result += '=== COLLECT (Sammel-Spiel) ===\n'
                result += `"miniGame": {
  "type": "collect",
  "playerSprite": "Princess",      // Spieler-Figur
  "collectSprite": "Star",         // Was sammeln
  "obstacleSprite": "Rock",        // Optional: Hindernisse
  "targetScore": 5,                // Wie viele sammeln
  "timeLimit": 30,                 // Optional: Sekunden
  "successSceneId": "gewonnen",
  "failSceneId": "verloren",       // Optional
  "difficulty": "easy"             // Optional: easy/medium/hard
}\n\n`

                result += '=== DODGE (Ausweich-Spiel) ===\n'
                result += `"miniGame": {
  "type": "dodge",
  "playerSprite": "Princess",
  "obstacleSprite": "Rock",
  "surviveTime": 20,               // Sekunden überleben
  "successSceneId": "geschafft"
}\n\n`

                result += '=== CATCH (Fang-Spiel) ===\n'
                result += `"miniGame": {
  "type": "catch",
  "playerSprite": "Princess",
  "itemSprite": "Apple",
  "badItemSprite": "Bomb",         // Optional: Nicht fangen!
  "targetScore": 10,
  "successSceneId": "gewonnen"
}\n\n`

                result += '=== CLICK (Klick-Spiel) ===\n'
                result += `"miniGame": {
  "type": "click",
  "targetSprite": "Star",
  "badTargetSprite": "Rock",       // Optional: Nicht klicken!
  "targetScore": 10,
  "timeLimit": 15,
  "successSceneId": "gewonnen"
}\n\n`

                result += '=== SNAKE ===\n'
                result += `"miniGame": {
  "type": "snake",
  "foodSprite": "Apple",
  "targetLength": 10,              // Schlangenlänge zum Gewinnen
  "successSceneId": "gewonnen"
}\n\n`

                result += '=== FLAPPY ===\n'
                result += `"miniGame": {
  "type": "flappy",
  "playerSprite": "Bird",
  "obstacleSprite": "Pipe",        // Optional
  "collectSprite": "Coin",         // Optional
  "targetScore": 5,
  "successSceneId": "gewonnen"
}\n\n`

                result += '=== VERFÜGBARE SPRITES FÜR SPIELE ===\n'
                result += `Tiere: ${sprites.animals.slice(0, 8).join(', ')}...\n`
                result += `Charaktere: ${sprites.characters.join(', ')}\n`
                result += `Objekte: ${sprites.environment.slice(0, 8).join(', ')}...\n`

                return result
              }
              case 'validate_code': {
                const content = String(input.content || '')
                if (!content.trim()) {
                  return '❌ Kein Code zum Validieren angegeben!'
                }

                const error = validateComponents(content)
                if (error) {
                  return error
                }

                // Also run syntax validation
                const syntaxError = validateSyntax('test.tsx', content)
                if (syntaxError) {
                  return `❌ SYNTAX-FEHLER:\n${syntaxError}`
                }

                return '✅ Code ist valide! Du kannst ihn jetzt schreiben.'
              }
              case 'get_story_schema': {
                // Return JSON schema documentation
                const sprites = getAvailableSprites()
                const scenes = getAvailableScenes()

                let result = '📋 JSON-SCHEMA FÜR GESCHICHTEN\n\n'
                result += 'Geschichten werden als story.json Dateien gespeichert.\n'
                result += 'Dateistruktur: src/games/<game-id>/story.json\n\n'

                result += '=== STORY (Hauptstruktur) ===\n'
                result += `{
  "id": "mein-spiel",           // Eindeutige ID (Kleinbuchstaben, Bindestriche)
  "title": "Mein Abenteuer",    // Anzeige-Titel
  "description": "Kurze Beschreibung",
  "author": "Kind",
  "language": "de",
  "ageRating": "3+",
  "tags": ["abenteuer", "ozean"],
  "scenes": [ ... ]             // Array von Szenen
}\n\n`

                result += '=== SZENE ===\n'
                result += `{
  "id": "start",                // Eindeutige Szenen-ID (erste Szene MUSS "start" heißen!)
  "background": "DeepOcean",    // Hintergrund-Name (siehe get_available_scenes)
  "characters": [...],          // Array von Charakteren
  "dialogue": ["Text 1", "Text 2"],  // Dialog-Texte
  "choices": [...],             // ODER findTarget ODER miniGame ODER autoAdvance
  "findTarget": {...},
  "miniGame": {...},
  "autoAdvance": { "nextSceneId": "next", "delay": 2000 }
}\n\n`

                result += '=== CHARACTER ===\n'
                result += `{
  "sprite": "Princess",         // Sprite-Name (siehe get_available_sprites)
  "position": "center",         // "left" | "center" | "right"
  "size": 90,                   // 10-300
  "bottom": 80,                 // Optional: Abstand von unten
  "flipX": false,               // Optional: Horizontal spiegeln
  "animation": "idle"           // Optional: "idle" | "bounce" | "shake" | "pulse"
}\n\n`

                result += '=== CHOICE (Verzweigung) ===\n'
                result += `{
  "text": "🌊 Zum Strand",      // Button-Text (Emojis erlaubt!)
  "nextSceneId": "strand",      // Ziel-Szene
  "requiresItems": ["key"],     // Optional: Benötigte Items
  "showWhenLocked": true,       // Optional: Zeigen wenn gesperrt
  "lockedText": "Brauche Schlüssel"  // Optional: Text wenn gesperrt
}\n\n`

                result += '=== FINDTARGET (Suchspiel) ===\n'
                result += `{
  "sprite": "Starfish",         // Was gefunden werden soll
  "size": 40,
  "position": { "x": 70, "y": 80 },  // Position in % (0-100)
  "hint": "Findest du den Seestern?",
  "foundText": "🎉 Gefunden!",
  "nextSceneId": "nach_suche"
}\n\n`

                result += '=== MINIGAME ===\n'
                result += `Mini-Spiel-Typen: collect, dodge, catch, click, snake, race, flappy

Beispiel (Sammel-Spiel):
{
  "type": "collect",
  "playerSprite": "Princess",
  "collectSprite": "Star",
  "obstacleSprite": "Rock",     // Optional: Hindernisse
  "targetScore": 5,
  "timeLimit": 30,              // Optional: Sekunden
  "successSceneId": "gewonnen",
  "failSceneId": "verloren",    // Optional
  "difficulty": "easy"          // Optional: easy | medium | hard
}\n\n`

                result += '=== STATE ACTIONS (Items & Flags) ===\n'
                result += `"onEnterActions": [
  { "type": "add_item", "item": "key", "message": "🔑 Schlüssel erhalten!" },
  { "type": "set_flag", "flag": "door_opened" },
  { "type": "complete_task", "task": "find_key" },
  { "type": "add_score", "score": 10 }
]\n\n`

                result += '=== VERFÜGBARE SPRITES ===\n'
                result += `Tiere: ${sprites.animals.slice(0, 10).join(', ')}...\n`
                result += `Charaktere: ${sprites.characters.join(', ')}\n`
                result += `Umgebung: ${sprites.environment.slice(0, 10).join(', ')}...\n\n`

                result += '=== VERFÜGBARE HINTERGRÜNDE ===\n'
                result += scenes.join(', ') + '\n\n'

                result += '=== REGELN ===\n'
                result += '• Erste Szene MUSS id: "start" haben!\n'
                result += '• Jede nextSceneId muss auf existierende Szene zeigen!\n'
                result += '• Jede Szene braucht Ausgang: choices, findTarget, miniGame oder autoAdvance\n'
                result += '• Items mit requiresItems müssen vorher mit add_item gegeben werden!\n'

                return result
              }
              case 'validate_json': {
                const content = String(input.content || '')
                if (!content.trim()) {
                  return '❌ Kein JSON zum Validieren angegeben!'
                }

                // Try to parse JSON
                let storyJson
                try {
                  storyJson = JSON.parse(content)
                } catch (e) {
                  return `❌ UNGÜLTIGES JSON:\n${e}\n\nTipp: Prüfe Kommas, Anführungszeichen und Klammern!`
                }

                const errors: string[] = []
                const sprites = getAvailableSprites()
                const allSprites = new Set([...sprites.animals, ...sprites.characters, ...sprites.environment, ...sprites.effects])
                const scenes = new Set(getAvailableScenes())

                // Check story structure
                if (!storyJson.id) errors.push('• Story braucht "id"')
                if (!storyJson.title) errors.push('• Story braucht "title"')
                if (!storyJson.scenes || !Array.isArray(storyJson.scenes)) {
                  errors.push('• Story braucht "scenes" Array')
                  return `❌ ${errors.length} FEHLER:\n\n${errors.join('\n')}`
                }

                const sceneIds = new Set<string>()
                const referencedIds = new Set<string>()

                // Validate each scene
                for (const scene of storyJson.scenes) {
                  if (!scene.id) {
                    errors.push(`• Szene ohne "id" gefunden`)
                    continue
                  }
                  if (sceneIds.has(scene.id)) {
                    errors.push(`• Doppelte Szenen-ID: "${scene.id}"`)
                  }
                  sceneIds.add(scene.id)

                  if (!scene.background) {
                    errors.push(`• Szene "${scene.id}": braucht "background"`)
                  } else if (!scenes.has(scene.background)) {
                    errors.push(`• Szene "${scene.id}": Hintergrund "${scene.background}" existiert nicht`)
                  }

                  if (!scene.dialogue || scene.dialogue.length === 0) {
                    errors.push(`• Szene "${scene.id}": braucht mindestens einen Dialog`)
                  }

                  // Check characters
                  if (scene.characters) {
                    for (const char of scene.characters) {
                      if (!allSprites.has(char.sprite)) {
                        errors.push(`• Szene "${scene.id}": Sprite "${char.sprite}" existiert nicht`)
                      }
                      if (!['left', 'center', 'right'].includes(char.position)) {
                        errors.push(`• Szene "${scene.id}": Position "${char.position}" ungültig (nur left/center/right)`)
                      }
                    }
                  }

                  // Collect referenced scene IDs
                  if (scene.choices) {
                    for (const choice of scene.choices) {
                      if (choice.nextSceneId) referencedIds.add(choice.nextSceneId)
                    }
                  }
                  if (scene.findTarget?.nextSceneId) referencedIds.add(scene.findTarget.nextSceneId)
                  if (scene.miniGame?.successSceneId) referencedIds.add(scene.miniGame.successSceneId)
                  if (scene.miniGame?.failSceneId) referencedIds.add(scene.miniGame.failSceneId)
                  if (scene.autoAdvance?.nextSceneId) referencedIds.add(scene.autoAdvance.nextSceneId)

                  // Check for dead ends
                  const hasExit = scene.choices?.length > 0 || scene.findTarget || scene.miniGame || scene.autoAdvance
                  const isEnding = scene.dialogue?.some((d: string) =>
                    typeof d === 'string' && (d.includes('Ende') || d.includes('THE END'))
                  )
                  if (!hasExit && !isEnding) {
                    errors.push(`• Szene "${scene.id}": Hat keinen Ausgang (choices/findTarget/miniGame/autoAdvance fehlt)`)
                  }
                }

                // Check for 'start' scene
                if (!sceneIds.has('start')) {
                  errors.push('• Keine Szene mit id: "start" gefunden!')
                }

                // Check for invalid references
                for (const ref of referencedIds) {
                  if (!sceneIds.has(ref)) {
                    errors.push(`• nextSceneId "${ref}" zeigt auf nicht existierende Szene`)
                  }
                }

                if (errors.length > 0) {
                  return `❌ ${errors.length} FEHLER:\n\n${errors.join('\n')}\n\n💡 Behebe die Fehler und validiere erneut!`
                }

                return `✅ JSON ist valide! ${sceneIds.size} Szenen gefunden.\n\nDu kannst es jetzt speichern.`
              }
              case 'list_scenes': {
                const gameId = input.gameId
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')

                if (!fs.existsSync(storyPath)) {
                  return `❌ Geschichte "${gameId}" nicht gefunden. Datei: ${storyPath}`
                }

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))
                  let result = `📋 SZENEN IN "${storyJson.title}" (${storyJson.scenes.length} Szenen)\n\n`

                  for (const scene of storyJson.scenes) {
                    const hasChoices = scene.choices?.length > 0
                    const hasFindTarget = !!scene.findTarget
                    const hasMiniGame = !!scene.miniGame
                    const hasAuto = !!scene.autoAdvance

                    let type = '📖'
                    if (hasChoices) type = `🔀 (${scene.choices.length} choices)`
                    else if (hasFindTarget) type = '🔍 findTarget'
                    else if (hasMiniGame) type = `🎮 ${scene.miniGame.type}`
                    else if (hasAuto) type = '➡️ auto'

                    const chars = scene.characters?.map((c: {sprite: string}) => c.sprite).join(', ') || '-'
                    result += `• ${scene.id}: ${type}\n  BG: ${scene.background} | Chars: ${chars}\n`
                  }

                  return result
                } catch (e) {
                  return `❌ Fehler beim Lesen: ${e}`
                }
              }
              case 'get_scene': {
                const gameId = input.gameId
                const sceneId = input.sceneId
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')

                if (!fs.existsSync(storyPath)) {
                  return `❌ Geschichte "${gameId}" nicht gefunden.`
                }

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))
                  const scene = storyJson.scenes.find((s: {id: string}) => s.id === sceneId)

                  if (!scene) {
                    const ids = storyJson.scenes.map((s: {id: string}) => s.id).join(', ')
                    return `❌ Szene "${sceneId}" nicht gefunden.\n\nVerfügbare Szenen: ${ids}`
                  }

                  return `📄 SZENE "${sceneId}":\n\n\`\`\`json\n${JSON.stringify(scene, null, 2)}\n\`\`\``
                } catch (e) {
                  return `❌ Fehler: ${e}`
                }
              }
              case 'add_scene': {
                const gameId = input.gameId
                const sceneStr = input.scene
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')

                if (!fs.existsSync(storyPath)) {
                  return `❌ Geschichte "${gameId}" nicht gefunden.`
                }

                // Parse new scene
                let newScene
                try {
                  newScene = JSON.parse(sceneStr)
                } catch (e) {
                  return `❌ Ungültiges JSON für Szene:\n${e}`
                }

                if (!newScene.id) {
                  return `❌ Szene braucht eine "id"!`
                }

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))

                  // Check if scene already exists
                  if (storyJson.scenes.some((s: {id: string}) => s.id === newScene.id)) {
                    return `❌ Szene "${newScene.id}" existiert bereits! Nutze update_scene zum Aktualisieren.`
                  }

                  // Validate scene
                  const sprites = getAvailableSprites()
                  const allSprites = new Set([...sprites.animals, ...sprites.characters, ...sprites.environment, ...sprites.effects])
                  const backgrounds = new Set(getAvailableScenes())
                  const errors: string[] = []

                  if (!newScene.background) {
                    errors.push('• Szene braucht "background"')
                  } else if (!backgrounds.has(newScene.background)) {
                    errors.push(`• Hintergrund "${newScene.background}" existiert nicht`)
                  }

                  if (!newScene.dialogue || newScene.dialogue.length === 0) {
                    errors.push('• Szene braucht mindestens einen Dialog')
                  }

                  if (newScene.characters) {
                    for (const char of newScene.characters) {
                      if (!allSprites.has(char.sprite)) {
                        errors.push(`• Sprite "${char.sprite}" existiert nicht`)
                      }
                    }
                  }

                  if (errors.length > 0) {
                    return `❌ Szene ungültig:\n\n${errors.join('\n')}`
                  }

                  // Add scene
                  storyJson.scenes.push(newScene)
                  fs.writeFileSync(storyPath, JSON.stringify(storyJson, null, 2))

                  return `✅ Szene "${newScene.id}" hinzugefügt! (${storyJson.scenes.length} Szenen total)`
                } catch (e) {
                  return `❌ Fehler: ${e}`
                }
              }
              case 'update_scene': {
                const gameId = input.gameId
                const sceneId = input.sceneId
                const sceneStr = input.scene
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')

                if (!fs.existsSync(storyPath)) {
                  return `❌ Geschichte "${gameId}" nicht gefunden.`
                }

                // Parse updated scene
                let updatedScene
                try {
                  updatedScene = JSON.parse(sceneStr)
                } catch (e) {
                  return `❌ Ungültiges JSON:\n${e}`
                }

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))
                  const sceneIndex = storyJson.scenes.findIndex((s: {id: string}) => s.id === sceneId)

                  if (sceneIndex === -1) {
                    return `❌ Szene "${sceneId}" nicht gefunden.`
                  }

                  // Validate
                  const sprites = getAvailableSprites()
                  const allSprites = new Set([...sprites.animals, ...sprites.characters, ...sprites.environment, ...sprites.effects])
                  const backgrounds = new Set(getAvailableScenes())
                  const errors: string[] = []

                  if (updatedScene.background && !backgrounds.has(updatedScene.background)) {
                    errors.push(`• Hintergrund "${updatedScene.background}" existiert nicht`)
                  }

                  if (updatedScene.characters) {
                    for (const char of updatedScene.characters) {
                      if (!allSprites.has(char.sprite)) {
                        errors.push(`• Sprite "${char.sprite}" existiert nicht`)
                      }
                    }
                  }

                  if (errors.length > 0) {
                    return `❌ Szene ungültig:\n\n${errors.join('\n')}`
                  }

                  // Preserve ID
                  updatedScene.id = sceneId
                  storyJson.scenes[sceneIndex] = updatedScene
                  fs.writeFileSync(storyPath, JSON.stringify(storyJson, null, 2))

                  return `✅ Szene "${sceneId}" aktualisiert!`
                } catch (e) {
                  return `❌ Fehler: ${e}`
                }
              }
              case 'delete_scene': {
                const gameId = input.gameId
                const sceneId = input.sceneId
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')

                if (!fs.existsSync(storyPath)) {
                  return `❌ Geschichte "${gameId}" nicht gefunden.`
                }

                if (sceneId === 'start') {
                  return `❌ Die "start" Szene kann nicht gelöscht werden!`
                }

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))
                  const sceneIndex = storyJson.scenes.findIndex((s: {id: string}) => s.id === sceneId)

                  if (sceneIndex === -1) {
                    return `❌ Szene "${sceneId}" nicht gefunden.`
                  }

                  // Check for references
                  const references: string[] = []
                  for (const scene of storyJson.scenes) {
                    if (scene.id === sceneId) continue
                    if (scene.choices?.some((c: {nextSceneId: string}) => c.nextSceneId === sceneId)) {
                      references.push(`${scene.id} (choice)`)
                    }
                    if (scene.findTarget?.nextSceneId === sceneId) {
                      references.push(`${scene.id} (findTarget)`)
                    }
                    if (scene.miniGame?.successSceneId === sceneId || scene.miniGame?.failSceneId === sceneId) {
                      references.push(`${scene.id} (miniGame)`)
                    }
                    if (scene.autoAdvance?.nextSceneId === sceneId) {
                      references.push(`${scene.id} (autoAdvance)`)
                    }
                  }

                  if (references.length > 0) {
                    return `⚠️ Szene "${sceneId}" wird noch referenziert von:\n${references.map(r => `• ${r}`).join('\n')}\n\nAktualisiere diese Szenen zuerst!`
                  }

                  // Delete scene
                  storyJson.scenes.splice(sceneIndex, 1)
                  fs.writeFileSync(storyPath, JSON.stringify(storyJson, null, 2))

                  return `✅ Szene "${sceneId}" gelöscht! (${storyJson.scenes.length} Szenen übrig)`
                } catch (e) {
                  return `❌ Fehler: ${e}`
                }
              }
              case 'add_choice': {
                const { gameId, sceneId, text, nextSceneId, requiresItems } = input
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')

                if (!fs.existsSync(storyPath)) return `❌ Geschichte "${gameId}" nicht gefunden.`

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))
                  const scene = storyJson.scenes.find((s: {id: string}) => s.id === sceneId)
                  if (!scene) return `❌ Szene "${sceneId}" nicht gefunden.`

                  if (!scene.choices) scene.choices = []

                  const choice: Record<string, unknown> = { text, nextSceneId }
                  if (requiresItems) {
                    choice.requiresItems = requiresItems.split(',').map((s: string) => s.trim())
                  }

                  scene.choices.push(choice)
                  fs.writeFileSync(storyPath, JSON.stringify(storyJson, null, 2))

                  return `✅ Choice "${text}" → "${nextSceneId}" hinzugefügt! (${scene.choices.length} choices total)`
                } catch (e) {
                  return `❌ Fehler: ${e}`
                }
              }
              case 'remove_choice': {
                const { gameId, sceneId, choiceIndex } = input
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')
                const idx = parseInt(choiceIndex, 10)

                if (!fs.existsSync(storyPath)) return `❌ Geschichte "${gameId}" nicht gefunden.`

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))
                  const scene = storyJson.scenes.find((s: {id: string}) => s.id === sceneId)
                  if (!scene) return `❌ Szene "${sceneId}" nicht gefunden.`
                  if (!scene.choices || idx >= scene.choices.length) return `❌ Choice ${idx} existiert nicht.`

                  const removed = scene.choices.splice(idx, 1)[0]
                  fs.writeFileSync(storyPath, JSON.stringify(storyJson, null, 2))

                  return `✅ Choice "${removed.text}" entfernt! (${scene.choices.length} übrig)`
                } catch (e) {
                  return `❌ Fehler: ${e}`
                }
              }
              case 'set_dialogue': {
                const { gameId, sceneId, dialogue } = input
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')

                if (!fs.existsSync(storyPath)) return `❌ Geschichte "${gameId}" nicht gefunden.`

                let dialogueArray
                try {
                  dialogueArray = JSON.parse(dialogue)
                } catch {
                  return `❌ Ungültiges JSON für dialogue. Beispiel: ["Text 1", "Text 2"]`
                }

                if (!Array.isArray(dialogueArray)) return `❌ dialogue muss ein Array sein.`

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))
                  const scene = storyJson.scenes.find((s: {id: string}) => s.id === sceneId)
                  if (!scene) return `❌ Szene "${sceneId}" nicht gefunden.`

                  scene.dialogue = dialogueArray
                  fs.writeFileSync(storyPath, JSON.stringify(storyJson, null, 2))

                  return `✅ Dialogue aktualisiert! (${dialogueArray.length} Texte)`
                } catch (e) {
                  return `❌ Fehler: ${e}`
                }
              }
              case 'add_character': {
                const { gameId, sceneId, sprite, position, size } = input
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')

                if (!fs.existsSync(storyPath)) return `❌ Geschichte "${gameId}" nicht gefunden.`

                // Validate sprite
                const sprites = getAvailableSprites()
                const allSprites = new Set([...sprites.animals, ...sprites.characters, ...sprites.environment, ...sprites.effects])
                if (!allSprites.has(sprite)) {
                  return `❌ Sprite "${sprite}" existiert nicht. Nutze get_available_sprites()!`
                }

                if (!['left', 'center', 'right'].includes(position)) {
                  return `❌ Position muss "left", "center" oder "right" sein.`
                }

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))
                  const scene = storyJson.scenes.find((s: {id: string}) => s.id === sceneId)
                  if (!scene) return `❌ Szene "${sceneId}" nicht gefunden.`

                  if (!scene.characters) scene.characters = []

                  scene.characters.push({
                    sprite,
                    position,
                    size: size ? parseInt(size, 10) : 80
                  })
                  fs.writeFileSync(storyPath, JSON.stringify(storyJson, null, 2))

                  return `✅ ${sprite} (${position}) hinzugefügt! (${scene.characters.length} Charaktere)`
                } catch (e) {
                  return `❌ Fehler: ${e}`
                }
              }
              case 'remove_character': {
                const { gameId, sceneId, characterIndex } = input
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')
                const idx = parseInt(characterIndex, 10)

                if (!fs.existsSync(storyPath)) return `❌ Geschichte "${gameId}" nicht gefunden.`

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))
                  const scene = storyJson.scenes.find((s: {id: string}) => s.id === sceneId)
                  if (!scene) return `❌ Szene "${sceneId}" nicht gefunden.`
                  if (!scene.characters || idx >= scene.characters.length) return `❌ Charakter ${idx} existiert nicht.`

                  const removed = scene.characters.splice(idx, 1)[0]
                  fs.writeFileSync(storyPath, JSON.stringify(storyJson, null, 2))

                  return `✅ ${removed.sprite} entfernt! (${scene.characters.length} übrig)`
                } catch (e) {
                  return `❌ Fehler: ${e}`
                }
              }
              case 'set_findTarget': {
                const { gameId, sceneId, sprite, x, y, hint, foundText, nextSceneId } = input
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')

                if (!fs.existsSync(storyPath)) return `❌ Geschichte "${gameId}" nicht gefunden.`

                // Validate sprite
                const sprites = getAvailableSprites()
                const allSprites = new Set([...sprites.animals, ...sprites.characters, ...sprites.environment, ...sprites.effects])
                if (!allSprites.has(sprite)) {
                  return `❌ Sprite "${sprite}" existiert nicht.`
                }

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))
                  const scene = storyJson.scenes.find((s: {id: string}) => s.id === sceneId)
                  if (!scene) return `❌ Szene "${sceneId}" nicht gefunden.`

                  scene.findTarget = {
                    sprite,
                    size: 40,
                    position: { x: parseInt(x, 10), y: parseInt(y, 10) },
                    hint,
                    foundText: foundText || '🎉 Gefunden!',
                    nextSceneId
                  }

                  // Remove choices if findTarget is set (can only have one interaction type)
                  delete scene.choices
                  delete scene.miniGame

                  fs.writeFileSync(storyPath, JSON.stringify(storyJson, null, 2))

                  return `✅ FindTarget gesetzt! Suche ${sprite} bei (${x}%, ${y}%) → ${nextSceneId}`
                } catch (e) {
                  return `❌ Fehler: ${e}`
                }
              }
              case 'set_miniGame': {
                const { gameId, sceneId, miniGame } = input
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')

                if (!fs.existsSync(storyPath)) return `❌ Geschichte "${gameId}" nicht gefunden.`

                let miniGameObj
                try {
                  miniGameObj = JSON.parse(miniGame)
                } catch {
                  return `❌ Ungültiges JSON für miniGame.`
                }

                if (!miniGameObj.type) return `❌ miniGame braucht "type" (collect/dodge/catch/click/snake/race/flappy)`
                if (!miniGameObj.successSceneId) return `❌ miniGame braucht "successSceneId"`

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))
                  const scene = storyJson.scenes.find((s: {id: string}) => s.id === sceneId)
                  if (!scene) return `❌ Szene "${sceneId}" nicht gefunden.`

                  scene.miniGame = miniGameObj

                  // Remove other interaction types
                  delete scene.choices
                  delete scene.findTarget

                  fs.writeFileSync(storyPath, JSON.stringify(storyJson, null, 2))

                  return `✅ MiniGame (${miniGameObj.type}) gesetzt! → ${miniGameObj.successSceneId}`
                } catch (e) {
                  return `❌ Fehler: ${e}`
                }
              }
              case 'add_item_action': {
                const { gameId, sceneId, item, message, trigger } = input
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')
                const actionKey = trigger === 'onFindTarget' ? 'onFindTargetActions' : 'onEnterActions'

                if (!fs.existsSync(storyPath)) return `❌ Geschichte "${gameId}" nicht gefunden.`

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))
                  const scene = storyJson.scenes.find((s: {id: string}) => s.id === sceneId)
                  if (!scene) return `❌ Szene "${sceneId}" nicht gefunden.`

                  if (!scene[actionKey]) scene[actionKey] = []

                  scene[actionKey].push({
                    type: 'add_item',
                    item,
                    message
                  })

                  fs.writeFileSync(storyPath, JSON.stringify(storyJson, null, 2))

                  return `✅ Item "${item}" wird bei ${actionKey} gegeben!`
                } catch (e) {
                  return `❌ Fehler: ${e}`
                }
              }
              case 'set_background': {
                const { gameId, sceneId, background } = input
                const storyPath = path.join(projectDir, 'src', 'games', gameId, 'story.json')

                if (!fs.existsSync(storyPath)) return `❌ Geschichte "${gameId}" nicht gefunden.`

                // Validate background
                const backgrounds = new Set(getAvailableScenes())
                if (!backgrounds.has(background)) {
                  return `❌ Hintergrund "${background}" existiert nicht. Nutze get_available_scenes()!`
                }

                try {
                  const storyJson = JSON.parse(fs.readFileSync(storyPath, 'utf-8'))
                  const scene = storyJson.scenes.find((s: {id: string}) => s.id === sceneId)
                  if (!scene) return `❌ Szene "${sceneId}" nicht gefunden.`

                  scene.background = background
                  fs.writeFileSync(storyPath, JSON.stringify(storyJson, null, 2))

                  return `✅ Hintergrund auf "${background}" geändert!`
                } catch (e) {
                  return `❌ Fehler: ${e}`
                }
              }
              case 'get_story_system': {
                // JSON-based story system documentation
                const exampleJsonPath = path.join(projectDir, 'src', 'games', 'liana-abenteuer', 'story.json')

                let result = '📖 JSON STORY-SYSTEM\n\n'
                result += 'Geschichten werden als JSON-Dateien erstellt - kein Code nötig!\n\n'

                result += '=== DATEISTRUKTUR ===\n'
                result += 'src/games/<game-id>/\n'
                result += '  ├── story.json         ← Die Geschichte (JSON)\n'
                result += '  └── GameName.tsx       ← Lädt die JSON (Template)\n\n'

                result += '=== BEISPIEL story.json ===\n'
                try {
                  const exampleJson = fs.readFileSync(exampleJsonPath, 'utf-8')
                  const parsed = JSON.parse(exampleJson)
                  // Show first 2 scenes as example
                  const example = {
                    ...parsed,
                    scenes: parsed.scenes.slice(0, 2)
                  }
                  result += '```json\n' + JSON.stringify(example, null, 2) + '\n```\n\n'
                } catch {
                  result += '(Beispiel-Datei nicht gefunden)\n\n'
                }

                result += '=== TSX WRAPPER (Template) ===\n'
                result += `\`\`\`tsx
import { JsonStoryPlayer } from '../../components/story';
import storyData from './story.json';
import type { StoryJson } from '../../components/story';

export function MeinSpiel() {
  return <JsonStoryPlayer story={storyData as StoryJson} />;
}
\`\`\`\n\n`

                result += '=== WORKFLOW ===\n'
                result += '1. get_story_schema() aufrufen → Schema verstehen\n'
                result += '2. get_available_sprites() → Figuren-Namen\n'
                result += '3. get_available_scenes() → Hintergrund-Namen\n'
                result += '4. JSON schreiben\n'
                result += '5. validate_json() → Prüfen!\n'
                result += '6. write_file() → Speichern\n\n'

                result += '=== TOOLS ===\n'
                result += '• get_story_schema() → Komplettes JSON-Schema\n'
                result += '• get_available_sprites() → Alle Sprite-Namen\n'
                result += '• get_available_scenes() → Alle Hintergrund-Namen\n'
                result += '• get_available_minigames() → Mini-Spiel-Typen\n'
                result += '• validate_json(content) → JSON validieren\n'

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
              case 'get_state_system': {
                let result = '🎮 SPIELSTAND-SYSTEM (Items, Hindernisse, Aufgaben)\n\n'
                result += '=== WAS KANN MAN DAMIT MACHEN? ===\n\n'
                result += '🔑 GEGENSTÄNDE SAMMELN:\n'
                result += '   - Nach Mini-Spiel: Schlüssel bekommen\n'
                result += '   - Nach findTarget: Item finden\n'
                result += '   - Bei Szenen-Betreten: Automatisch erhalten\n\n'
                result += '🔒 GESPERRTE OPTIONEN:\n'
                result += '   - Option zeigen aber ausgegraut\n'
                result += '   - "Benötigt: Goldener Schlüssel" anzeigen\n'
                result += '   - Wird freigeschaltet wenn Item da\n\n'
                result += '✅ AUFGABEN/QUESTS:\n'
                result += '   - Aufgaben die erledigt werden müssen\n'
                result += '   - Fortschritt tracken\n\n'

                result += '=== CODE-BEISPIELE ===\n\n'
                result += '// 1. ITEM NACH MINI-SPIEL GEBEN:\n'
                result += `{
  id: 'minigame_szene',
  background: <EnchantedForest width={800} height={500} />,
  miniGame: { ... },
  onMiniGameWinActions: [
    { type: 'add_item', item: 'golden_key', message: '🔑 Du hast einen goldenen Schlüssel gefunden!' }
  ],
}\n\n`

                result += '// 2. ITEM NACH FINDTARGET GEBEN:\n'
                result += `{
  id: 'suche_szene',
  findTarget: { target: <Key />, position: { x: 50, y: 30 }, ... },
  onFindTargetActions: [
    { type: 'add_item', item: 'magic_gem', message: '💎 Ein magischer Edelstein!' }
  ],
}\n\n`

                result += '// 3. GESPERRTE OPTION (braucht Item):\n'
                result += `choices: [
  { text: '🚪 Durch die normale Tür', nextSceneId: 'normal_door' },
  {
    text: '🔐 Geheime Tür öffnen',
    nextSceneId: 'secret_room',
    requiresItems: ['golden_key'],
    lockedText: '🔒 Geheime Tür (verschlossen)',
    showWhenLocked: true,
  },
]\n\n`

                result += '// 4. AUFGABE ERLEDIGEN:\n'
                result += `{
  id: 'quest_complete',
  onEnterActions: [
    { type: 'complete_task', task: 'helped_wizard' }
  ],
}\n\n`

                result += '// 5. OPTION NUR WENN AUFGABE ERLEDIGT:\n'
                result += `choices: [
  {
    text: '🎁 Belohnung abholen',
    nextSceneId: 'reward',
    requiresTasks: ['helped_wizard'],
    showWhenLocked: true,
    lockedText: '🎁 Belohnung (hilf erst dem Zauberer)',
  },
]\n\n`

                result += '=== VERFÜGBARE AKTIONEN ===\n\n'
                result += '• { type: "add_item", item: "name", message?: "Text" }\n'
                result += '• { type: "remove_item", item: "name" }\n'
                result += '• { type: "set_flag", flag: "name", value: true/false/number/string }\n'
                result += '• { type: "complete_task", task: "name" }\n\n'

                result += '=== VERFÜGBARE BEDINGUNGEN ===\n\n'
                result += '• requiresItems: ["item1", "item2"] - braucht alle Items\n'
                result += '• requiresFlags: ["flag1"] - braucht gesetzte Flags\n'
                result += '• requiresTasks: ["task1"] - braucht erledigte Aufgaben\n'
                result += '• condition: (ctx) => ctx.hasItem("x") && ctx.getFlag("y") > 5\n\n'

                result += '=== WANN NUTZEN? ===\n\n'
                result += '✅ Kind will: "Man braucht einen Schlüssel für die Tür"\n'
                result += '✅ Kind will: "Erst muss man das Rätsel lösen"\n'
                result += '✅ Kind will: "Der Weg ist blockiert bis..."\n'
                result += '✅ Kind will: "Man muss zuerst X finden um Y zu machen"\n'

                return result
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
                const rawConfigFile = env.AWS_CONFIG_FILE || process.env.AWS_CONFIG_FILE || `${os.homedir()}/.aws/config`
                const awsConfigFile = rawConfigFile.replace(/^~/, os.homedir())

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
                const rawTestConfigFile = env.AWS_CONFIG_FILE || process.env.AWS_CONFIG_FILE || `${os.homedir()}/.aws/config`
                const awsConfigFile = rawTestConfigFile.replace(/^~/, os.homedir())

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
