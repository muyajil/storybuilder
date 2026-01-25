# SPIELE-SPIELPLATZ / GAME PLAYGROUND

Dies ist ein Spiele-Spielplatz für Kinder. Die Kinder werden auf Deutsch prompten, um Spiele zu erstellen.
This is a game playground for kids. Kids will prompt in German to create games.

## PROMPT-MONITORING / PROMPT MONITORING

Die Kinder können Anfragen über die PromptBox im Browser senden. Diese werden in `prompts.log` gespeichert.
Kids can send requests via the PromptBox in the browser. These are saved to `prompts.log`.

### Workflow für Eltern / Workflow for Parents

1. **Spiele starten**: `npm run play`
2. **Prompts überwachen**: Sag Claude "watch prompts" oder "überwache prompts"
3. **Claude arbeitet**: Claude liest neue Anfragen und setzt sie um

### Befehle / Commands

- `watch prompts` / `überwache prompts` - Startet die Überwachung der prompts.log
- `check prompts` / `prüfe prompts` - Liest einmalig die neuen Prompts
- `clear prompts` / `lösche prompts` - Leert die prompts.log Datei

### So funktioniert es / How it Works

1. Kind tippt Wunsch in die Chat-Box (💬 Button unten rechts)
2. Wunsch wird in `prompts.log` gespeichert
3. Claude liest die Datei und führt die Änderungen durch
4. Vite lädt die Änderungen automatisch neu (Hot Reload)
5. Kind sieht das Ergebnis sofort im Browser!

## WICHTIGE REGELN / IMPORTANT RULES

### Sprache / Language
- **Antworte IMMER auf Deutsch** wenn das Kind auf Deutsch schreibt
- **Always respond in German** when the child writes in German
- Verwende einfache, kindgerechte Sprache / Use simple, child-friendly language
- Erkläre Konzepte mit Beispielen / Explain concepts with examples

### Schritt-für-Schritt / Step by Step
- Führe Kinder **Schritt für Schritt** durch den Prozess
- Frage nach, wenn du dir unsicher bist was das Kind möchte
- Zeige immer was du machst und erkläre warum
- Feiere kleine Erfolge mit dem Kind!

### Fragen stellen / Asking Questions
Stelle Fragen wie:
- "Welche Farbe soll der Spieler haben?"
- "Wie schnell soll sich das Objekt bewegen?"
- "Was soll passieren wenn man den Stern berührt?"
- "Möchtest du Punkte zählen?"

## SPIEL-ERSTELLUNG / GAME CREATION

### Neues Spiel erstellen / Creating a New Game

1. **Ordner erstellen** in `src/games/[spiel-name]/`
2. **Komponente erstellen** z.B. `MeinSpiel.tsx`
3. **Spiel registrieren** in `src/games/index.ts`

### Pflicht-Struktur für jedes Spiel / Required Structure for Each Game

```tsx
// src/games/mein-spiel/MeinSpiel.tsx
import { useState } from 'react';
import { GameCanvas, Sprite, GameText, GameButton } from '../../components';
import { useKeyboard, useGameLoop, clamp } from '../../hooks';

export function MeinSpiel() {
  // Spielzustand hier / Game state here
  const [score, setScore] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <h2 style={{ color: 'white', margin: 0 }}>Spieltitel</h2>

      <GameCanvas width={800} height={500}>
        {/* Spielinhalt hier / Game content here */}
      </GameCanvas>
    </div>
  );
}
```

### Spiel im Register eintragen / Register the Game

In `src/games/index.ts`:
```tsx
import { MeinSpiel } from './mein-spiel/MeinSpiel';

export const games: GameInfo[] = [
  // ... andere Spiele
  {
    id: 'mein-spiel',
    name: 'Mein Tolles Spiel',
    description: 'Beschreibung was man im Spiel macht',
    author: 'Name des Kindes',
    component: MeinSpiel,
  },
];
```

## VERFÜGBARE KOMPONENTEN / AVAILABLE COMPONENTS

### GameCanvas - Das Spielfeld
```tsx
<GameCanvas width={800} height={500} backgroundColor="#1a1a2e">
  {/* Spielinhalt */}
</GameCanvas>
```

### Sprite - Bewegliche Objekte
```tsx
// Mit SVG-Komponente (bevorzugt!)
<Sprite x={100} y={200} size={40}>
  <Player hairColor="#5D4037" skinColor="#D7A574" />
</Sprite>

// Mit Emoji (nur für schnelle Tests)
<Sprite x={200} y={100} emoji="⭐" size={30} />
```

### GameText - Text anzeigen
```tsx
<GameText x={10} y={10} size="large" color="white">
  Punkte: {score}
</GameText>
```

### GameButton - Buttons
```tsx
<GameButton onClick={() => resetGame()} color="primary">
  Neu Starten
</GameButton>
```

## VERFÜGBARE HOOKS / AVAILABLE HOOKS

### useKeyboard - Tastatureingaben
```tsx
const keys = useKeyboard();

// In useGameLoop:
if (keys.ArrowUp || keys.w) {
  // Nach oben bewegen
}
if (keys.ArrowDown || keys.s) {
  // Nach unten bewegen
}
if (keys.ArrowLeft || keys.a) {
  // Nach links bewegen
}
if (keys.ArrowRight || keys.d) {
  // Nach rechts bewegen
}
if (keys[' ']) {
  // Leertaste gedrückt
}
```

### useGameLoop - Spiel-Schleife
```tsx
useGameLoop((deltaTime) => {
  // Wird ~60x pro Sekunde aufgerufen
  // deltaTime = Zeit seit letztem Frame in Sekunden

  setX(prev => prev + speed * deltaTime);
});
```

### Hilfsfunktionen / Helper Functions
```tsx
// Kollision prüfen
if (checkCollision(spielerRect, gegnerRect)) {
  // Kollision!
}

// Wert in Grenzen halten
const x = clamp(playerX, 0, 800);

// Zufallszahl
const zufallX = randomBetween(0, 800);
const zufallInt = randomIntBetween(1, 10);

// Abstand zwischen Punkten
const abstand = distance(x1, y1, x2, y2);
```

## SPIEL-IDEEN FÜR ANFÄNGER / GAME IDEAS FOR BEGINNERS

1. **Fang-Spiel**: Bewege einen Charakter und fange fallende Objekte
2. **Ausweich-Spiel**: Weiche herankommenden Hindernissen aus
3. **Klick-Spiel**: Klicke auf Objekte bevor sie verschwinden
4. **Labyrinth**: Navigiere durch ein einfaches Labyrinth
5. **Reaktions-Spiel**: Drücke die richtige Taste wenn ein Objekt erscheint

## SICHERHEITSREGELN / SAFETY RULES

### ERLAUBT / ALLOWED
- Erstellen von Spielen in `src/games/`
- Verwenden der vorhandenen Komponenten und Hooks
- Hinzufügen von neuen Komponenten in `src/components/`
- Hinzufügen von neuen Hooks in `src/hooks/`
- Anpassen von Styles in `src/App.css`

### NICHT ERLAUBT / NOT ALLOWED
- Keine externen API-Aufrufe (fetch, axios, etc.)
- Keine Änderungen an Konfigurationsdateien (vite.config.ts, tsconfig.json, etc.)
- Keine Installation von neuen npm Paketen ohne Eltern-Genehmigung
- Keine Dateien außerhalb von `src/` ändern (außer für Spiel-Registration)
- Keine localStorage oder sessionStorage Verwendung
- Keine Netzwerk-Anfragen

## PROJEKT STARTEN / STARTING THE PROJECT

```bash
# Spiele im Browser öffnen
npm run play

# Oder manuell starten
npm run dev
```

Der Browser öffnet sich automatisch auf http://localhost:5173

## TYPISCHE ANFRAGEN UND ANTWORTEN / TYPICAL REQUESTS AND RESPONSES

### Kind: "Ich möchte ein Spiel machen"
Frage: "Super! Was für ein Spiel möchtest du machen? Hier sind ein paar Ideen:
1. Ein Fang-Spiel (fange fallende Sterne)
2. Ein Ausweich-Spiel (weiche Hindernissen aus)
3. Ein Klick-Spiel (klicke auf Ziele)
Was klingt am besten?"

### Kind: "Der Spieler soll sich bewegen können"
Antwort: "Klar! Ich füge Tastatursteuerung hinzu. Mit den Pfeiltasten oder WASD kann man sich dann bewegen."

### Kind: "Ich will mehr Punkte bekommen"
Frage: "Wann soll man Punkte bekommen? Wenn man etwas fängt, wenn man etwas trifft, oder wenn Zeit vergeht?"

### Kind: "Das Spiel ist zu einfach/schwer"
Frage: "Okay! Soll ich [das Objekt schneller/langsamer machen] oder [mehr/weniger Objekte hinzufügen]?"

## SVG SPRITES / CUSTOM GRAPHICS

**BEVORZUGE SVG SPRITES STATT EMOJIS!**
Emojis nur für schnelle Tests verwenden. Für richtige Spiele immer SVGs erstellen.

### Verfügbare Sprites / Available Sprites
```tsx
import { Player, Tree, Grass, Water, Ball } from '../../sprites';

<Player hairColor="#5D4037" skinColor="#D7A574" shirtColor="#2196F3" />
<Tree leafColor="#2E7D32" trunkColor="#5D4037" />
<Grass color="#4CAF50" tall={true} />
<Water color="#2196F3" />
<Ball type="soccer" />  // oder "basketball", "tennis"
```

### Neue Sprites erstellen / Creating New Sprites

Wenn ein Kind ein neues Sprite beschreibt:
1. Erstelle eine neue Datei in `src/sprites/`
2. Verwende einfache SVG-Formen (rect, circle, polygon, path)
3. Mache Farben anpassbar via Props
4. Exportiere in `src/sprites/index.ts`

Beispiel für ein neues Sprite:
```tsx
// src/sprites/Star.tsx
interface StarProps {
  size?: number;
  color?: string;
}

export function Star({ size = 32, color = '#FFD700' }: StarProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <polygon
        points="16,2 20,12 30,12 22,18 25,28 16,22 7,28 10,18 2,12 12,12"
        fill={color}
      />
    </svg>
  );
}
```

## BEI FEHLERN / WHEN ERRORS OCCUR

Wenn ein Fehler auftritt:
1. Lies die Fehlermeldung sorgfältig
2. Erkläre dem Kind auf einfache Weise was schief gelaufen ist
3. Schlage eine Lösung vor
4. Frage ob du den Fehler beheben sollst

Beispiel: "Hoppla! Da ist ein kleiner Fehler passiert. [Erklärung]. Soll ich das für dich reparieren?"
