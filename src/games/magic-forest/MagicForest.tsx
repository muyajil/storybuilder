import type { Story } from '../../components';
import {
  StoryPlayer,
  // Scene Templates
  EnchantedForest,
  DarkForest,
  CastleCourtyard,
  WinterWonderland,
  CharacterPosition,
  // Characters
  Kid,
  Princess,
  Knight,
  Wizard,
  Dragon,
  Unicorn,
  // Animals
  Wolf,
} from '../../components';

/**
 * MAGISCHER WALD / MAGIC FOREST
 * =============================
 * Eine interaktive Geschichte durch verschiedene Welten!
 * An interactive story through different worlds!
 */

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

// Die Geschichte / The story
const magicForestStory: Story = {
  title: '🌲 Der Magische Wald 🌲',
  startSceneId: 'intro',
  scenes: [
    // Szene 1: Einleitung im Wald / Scene 1: Introduction in the forest
    {
      id: 'intro',
      background: <EnchantedForest width={CANVAS_WIDTH} height={CANVAS_HEIGHT} timeOfDay="day" />,
      characters: (
        <CharacterPosition position="center" bottom={100}>
          <Kid size={80} color="#4169E1" />
        </CharacterPosition>
      ),
      dialogue: [
        { speaker: 'Erzähler', text: 'Es war einmal ein mutiges Kind, das in einem magischen Wald lebte...', position: 'bottom' },
        { speaker: 'Erzähler', text: 'Eines Tages hörte es ein seltsames Geräusch aus der Ferne.', position: 'bottom' },
        { speaker: 'Kind', text: 'Was war das? Ich sollte nachsehen!', position: 'bottom' },
      ],
      transition: 'fade',
      choices: [
        { text: '🌲 In den dunklen Wald gehen', nextSceneId: 'dark-forest' },
        { text: '🏰 Zum Schloss laufen', nextSceneId: 'castle' },
      ],
    },

    // Szene 2a: Dunkler Wald / Scene 2a: Dark forest
    {
      id: 'dark-forest',
      background: <DarkForest width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />,
      characters: (
        <>
          <CharacterPosition position="left" bottom={100}>
            <Kid size={70} color="#4169E1" />
          </CharacterPosition>
          <CharacterPosition position="right" bottom={100}>
            <Wolf size={80} />
          </CharacterPosition>
        </>
      ),
      dialogue: [
        { speaker: 'Erzähler', text: 'Im dunklen Wald trifft das Kind auf einen großen Wolf!', position: 'bottom' },
        { speaker: 'Wolf', text: 'Grrrr... Was machst du hier, kleines Kind?', position: 'bottom' },
        { speaker: 'Kind', text: 'Ich habe mich verirrt. Kannst du mir helfen?', position: 'bottom' },
        { speaker: 'Wolf', text: 'Hmm... Ich kenne einen Weg. Folge mir!', position: 'bottom' },
      ],
      transition: 'slide-left',
      transitionDuration: 600,
    },

    // Szene 2b: Schloss / Scene 2b: Castle
    {
      id: 'castle',
      background: <CastleCourtyard width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />,
      characters: (
        <>
          <CharacterPosition position="left" bottom={100}>
            <Kid size={70} color="#4169E1" />
          </CharacterPosition>
          <CharacterPosition position="center" bottom={100}>
            <Princess size={80} />
          </CharacterPosition>
          <CharacterPosition position="right" bottom={100}>
            <Knight size={85} />
          </CharacterPosition>
        </>
      ),
      dialogue: [
        { speaker: 'Erzähler', text: 'Am Schloss wird das Kind von einer Prinzessin begrüßt!', position: 'bottom' },
        { speaker: 'Prinzessin', text: 'Willkommen, tapferer Reisender! Was führt dich hierher?', position: 'bottom' },
        { speaker: 'Kind', text: 'Ich habe ein seltsames Geräusch gehört...', position: 'bottom' },
        { speaker: 'Ritter', text: 'Das war bestimmt der Drache auf dem Berg! Er braucht Hilfe!', position: 'bottom' },
        { speaker: 'Prinzessin', text: 'Nimm diesen magischen Kristall. Er wird dir Kraft geben!', position: 'bottom' },
      ],
      transition: 'curtain',
      transitionDuration: 700,
      choices: [
        { text: '🐉 Zum Drachen gehen', nextSceneId: 'dragon' },
        { text: '❄️ Den Winterberg besteigen', nextSceneId: 'winter' },
      ],
    },

    // Szene 3a: Drachen-Begegnung / Scene 3a: Dragon encounter
    {
      id: 'dragon',
      background: (
        <div style={{
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
          background: 'linear-gradient(to bottom, #FF6B35 0%, #8B0000 50%, #4a0000 100%)',
          position: 'relative',
        }}>
          {/* Vulkan-Hintergrund / Volcano background */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '200px solid transparent',
            borderRight: '200px solid transparent',
            borderBottom: '300px solid #4a4a4a',
          }} />
          {/* Lava */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 60,
            background: 'linear-gradient(to bottom, #FF4500, #FF0000)',
          }} />
        </div>
      ),
      characters: (
        <>
          <CharacterPosition position="left" bottom={80}>
            <Kid size={70} color="#4169E1" />
          </CharacterPosition>
          <CharacterPosition position="right" bottom={80}>
            <Dragon size={120} color="#FF4500" />
          </CharacterPosition>
        </>
      ),
      dialogue: [
        { speaker: 'Erzähler', text: 'Auf dem Vulkan trifft das Kind einen riesigen Drachen!', position: 'bottom' },
        { speaker: 'Drache', text: 'ROOOAAR! Wer wagt es, mich zu stören?', position: 'bottom' },
        { speaker: 'Kind', text: 'Ich bin hier um zu helfen! Was ist passiert?', position: 'bottom' },
        { speaker: 'Drache', text: '*seufz* Ich habe Zahnweh und kann nicht mehr richtig Feuer spucken...', position: 'bottom' },
        { speaker: 'Kind', text: 'Ich hole dir Hilfe! Mein magischer Kristall wird dir helfen!', position: 'bottom' },
        { speaker: 'Drache', text: 'Oh... das fühlt sich besser an! DANKE, kleiner Freund!', position: 'bottom' },
      ],
      transition: 'zoom-in',
      transitionDuration: 500,
    },

    // Szene 3b: Winterberg / Scene 3b: Winter mountain
    {
      id: 'winter',
      background: <WinterWonderland width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />,
      characters: (
        <>
          <CharacterPosition position="left" bottom={80}>
            <Kid size={70} color="#4169E1" />
          </CharacterPosition>
          <CharacterPosition position="center" bottom={80}>
            <Wizard size={90} />
          </CharacterPosition>
          <CharacterPosition position="right" bottom={80}>
            <Unicorn size={85} />
          </CharacterPosition>
        </>
      ),
      dialogue: [
        { speaker: 'Erzähler', text: 'Auf dem verschneiten Berg trifft das Kind einen weisen Zauberer!', position: 'bottom' },
        { speaker: 'Zauberer', text: 'Ah, ein junger Abenteurer! Du hast den Weg hierher gefunden!', position: 'bottom' },
        { speaker: 'Kind', text: 'Wer ist dieses wunderschöne Einhorn?', position: 'bottom' },
        { speaker: 'Zauberer', text: 'Das ist Stella, meine treue Freundin. Sie beschützt den Berg.', position: 'bottom' },
        { speaker: 'Einhorn', text: '*wiehert freundlich*', position: 'bottom' },
        { speaker: 'Zauberer', text: 'Du hast Mut bewiesen. Nimm diese Schneeflocke als Geschenk!', position: 'bottom' },
      ],
      transition: 'sparkle',
      transitionDuration: 800,
    },

    // Finale / Ending
    {
      id: 'ending',
      background: <EnchantedForest width={CANVAS_WIDTH} height={CANVAS_HEIGHT} timeOfDay="sunset" />,
      characters: (
        <CharacterPosition position="center" bottom={100}>
          <Kid size={80} color="#4169E1" />
        </CharacterPosition>
      ),
      dialogue: [
        { speaker: 'Erzähler', text: 'Nach dem großen Abenteuer kehrt das Kind nach Hause zurück.', position: 'bottom' },
        { speaker: 'Kind', text: 'Was für ein Tag! Ich habe so viele Freunde gefunden!', position: 'bottom' },
        { speaker: 'Erzähler', text: 'Und so lebten alle glücklich bis ans Ende ihrer Tage...', position: 'bottom' },
        { speaker: 'Erzähler', text: '✨ ENDE ✨', position: 'bottom' },
      ],
      transition: 'fade',
      transitionDuration: 1000,
    },
  ],
};

// Connect scenes that don't have choices to flow to ending
magicForestStory.scenes.find(s => s.id === 'dark-forest')!.choices = [
  { text: '➡️ Weiter zum Schloss', nextSceneId: 'castle' },
];
magicForestStory.scenes.find(s => s.id === 'dragon')!.choices = [
  { text: '🏠 Nach Hause gehen', nextSceneId: 'ending' },
];
magicForestStory.scenes.find(s => s.id === 'winter')!.choices = [
  { text: '🏠 Nach Hause gehen', nextSceneId: 'ending' },
];

export function MagicForest() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <h2 style={{ color: '#228B22', margin: 0 }}>
        🌲 Der Magische Wald 🌲
      </h2>

      <StoryPlayer
        story={magicForestStory}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        onComplete={() => console.log('Geschichte beendet!')}
      />

      <p style={{ color: '#666', fontSize: 14, margin: 0 }}>
        Klicke zum Weiterlesen • Triff Entscheidungen um die Geschichte zu ändern!
      </p>
    </div>
  );
}
