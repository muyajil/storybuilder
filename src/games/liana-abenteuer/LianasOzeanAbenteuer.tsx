import { StoryPlayer, createLinearStory, DeepOcean, EnchantedForest, CharacterPosition } from '../../components/story';
import { Princess, Parrot } from '../../components';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

const story = createLinearStory('Lianas Ozean-Abenteuer', [
  {
    id: 'start',
    background: <DeepOcean width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />,
    characters: (
      <CharacterPosition position="center" bottom={80}>
        <Princess size={100} />
      </CharacterPosition>
    ),
    dialogue: [
      'Prinzessin Liana steht am Ufer eines weiten Ozeans.',
      'Die Wellen rauschen sanft und die Sonne glitzert auf dem Wasser.',
      'Plötzlich bemerkt sie, dass etwas nicht stimmt...',
    ],
    choices: [
      { text: '🔍 Was ist los?', nextSceneId: 'amulett_verloren' }
    ],
  },
  {
    id: 'amulett_verloren',
    background: <EnchantedForest width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />,
    characters: (
      <CharacterPosition position="center" bottom={80}>
        <Princess size={90} />
      </CharacterPosition>
    ),
    dialogue: [
      'Oh nein! Liana bemerkt, dass ihr Amulett der Unsichtbarkeit verschwunden ist!',
      'Sie erfährt, dass die Meerjungfrauen aus der Unterwasserwelt es gestohlen haben.',
      'Um es zurückzuholen, muss sie zuerst einen Papagei finden, der ihr einen Schlüssel gibt.',
    ],
    choices: [
      { text: '🦜 Papagei im Wald suchen', nextSceneId: 'papagei_suche' }
    ],
  },
  {
    id: 'papagei_suche',
    background: <EnchantedForest width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />,
    characters: (
      <CharacterPosition position="left" bottom={80}>
        <Princess size={80} />
      </CharacterPosition>
    ),
    dialogue: [
      'Liana betritt den verzauberten Wald.',
      'Irgendwo zwischen den Bäumen versteckt sich der Papagei...',
    ],
    // Find the hidden parrot!
    findTarget: {
      target: <Parrot size={45} />,
      position: { x: 78, y: 35 }, // Hidden near a tree
      hint: 'Wo versteckt sich der Papagei?',
      foundText: 'Da ist er!',
      nextSceneId: 'papagei_gefunden',
    },
  },
  {
    id: 'papagei_gefunden',
    background: <EnchantedForest width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />,
    characters: (
      <>
        <CharacterPosition position="left" bottom={80}>
          <Princess size={80} />
        </CharacterPosition>
        <CharacterPosition position="right" bottom={100}>
          <Parrot size={70} />
        </CharacterPosition>
      </>
    ),
    dialogue: [
      '🦜 "Krraa! Du hast mich gefunden!"',
      '"Hier ist der Schlüssel zur Unterwasserwelt!"',
      'Der Papagei gibt Liana einen goldenen Schlüssel.',
      '"Aber sei vorsichtig! Der Ozean ist voller Gefahren!"',
    ],
    choices: [
      { text: '🏊‍♀️ Direkt in den Ozean tauchen', nextSceneId: 'tauchen' },
      { text: '🚣‍♀️ Nach einem magischen Boot suchen', nextSceneId: 'boot_suchen' },
      { text: '🔑 Vorsichtig zum Ozean gehen', nextSceneId: 'zum_ozean' },
    ],
  },
  {
    id: 'zum_ozean',
    background: <DeepOcean width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />,
    characters: (
      <CharacterPosition position="center" bottom={80}>
        <Princess size={90} />
      </CharacterPosition>
    ),
    dialogue: [
      'Mit dem goldenen Schlüssel macht sich Liana auf den Weg zum Ozean.',
      'Das Abenteuer geht weiter...',
      '(Fortsetzung folgt!)',
    ],
  },
]);

export function LianasOzeanAbenteuer() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <StoryPlayer story={story} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
    </div>
  );
}