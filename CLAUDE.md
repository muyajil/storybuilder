# SPIELE-SPIELPLATZ / GAME PLAYGROUND

Ein Geschichten-Spielplatz für Kinder. Kinder entwickeln interaktive Geschichten mit Mini-Spielen.
A story playground for kids. Children develop interactive stories with mini-games.

## ARCHITEKTUR / ARCHITECTURE

Alle Spiele sind **Geschichten** mit dem StoryPlayer-System:
- Szenen mit Hintergründen und Dialogen
- Verzweigungen (Entscheidungen)
- Mini-Spiele innerhalb von Szenen

## STARTEN / STARTING

```bash
npm run dev
```

Browser öffnet sich auf http://localhost:5173

## VERFÜGBARE KOMPONENTEN / AVAILABLE COMPONENTS

### Szenen-Hintergründe / Scene Backgrounds
```
EnchantedForest, DarkForest, SandyDesert, DeepOcean,
CastleCourtyard, OuterSpace, CityStreet, SunnyFarm, WinterWonderland
```

### Sprites
```
TIERE: Fox, Wolf, Bear, Rabbit, Lion, Elephant, Giraffe, Monkey, Tiger,
       Penguin, Dog, Cat, Mouse, Fish, Dolphin, Whale, Turtle, Frog,
       Snake, Unicorn, Dragon

MENSCHEN: Kid, Boy, Girl, Princess, Knight, Wizard, Pirate, Ninja,
          Robot, Astronaut

OBJEKTE: Star, Coin, Gem, Heart, Apple, Banana, Rock, Tree, Flower,
         Car, Rocket
```

### Mini-Spiel Templates
```
createCollectGame   - Spieler sammelt Items
createDodgeGame     - Spieler weicht Hindernissen aus
createCatchGame     - Spieler fängt fallende Items
createClickGame     - Spieler klickt auf Ziele
createSnakeGame     - Schlangen-Spiel
createFlappyGame    - Spring durch Lücken
createRaceGame      - Rennen mit Hindernissen
```

## SPIEL-STRUKTUR / GAME STRUCTURE

```tsx
import { StoryPlayer, createLinearStory, EnchantedForest, createCollectGame } from '../../components/story';
import { Fox, Star } from '../../components';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

// Mini-Spiel definieren
const SterneSammeln = createCollectGame({
  playerSprite: <Fox size={50} />,
  itemSprite: <Star size={30} color="#FFD700" />,
  itemsToWin: 5,
});

// Geschichte mit Szenen
const story = createLinearStory('Titel', [
  {
    id: 'start',
    background: <EnchantedForest width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />,
    dialogue: ['Dialog 1...', 'Dialog 2...'],
    choices: [
      { text: 'Option A', nextSceneId: 'szeneA' },
      { text: 'Option B', nextSceneId: 'szeneB' },
    ],
  },
  {
    id: 'spielszene',
    background: <EnchantedForest width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />,
    miniGame: { component: SterneSammeln, instructions: 'Sammle 5 Sterne!' },
  },
]);

export function MeinSpiel() {
  return <StoryPlayer story={story} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />;
}
```

## SPIEL REGISTRIEREN / REGISTER GAME

In `src/games/index.ts`:
```tsx
import { MeinSpiel } from './mein-spiel/MeinSpiel';

export const games: GameInfo[] = [
  {
    id: 'mein-spiel',
    name: 'Mein Spiel',
    description: 'Beschreibung',
    author: 'Kind',
    component: MeinSpiel,
  },
];
```
