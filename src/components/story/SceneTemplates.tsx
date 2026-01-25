import type { ReactNode } from 'react';
import {
  // Environment Components
  Grass,
  Tree,
  PineTree,
  Bush,
  Rock,
  Flower,
  Mushroom,
  Cactus,
  Mountain,
  Hill,
  House,
  Castle,
  Barn,
  School,
  Hospital,
  Sun,
  Moon,
  Cloud,
  Snowfall,
  Fence,
} from '../sprites/Environment';

/**
 * SZENEN-VORLAGEN / SCENE TEMPLATES
 * =================================
 * Fertige Szenen-Hintergründe für Geschichten!
 * Ready-made scene backgrounds for stories!
 */

interface SceneProps {
  width?: number;
  height?: number;
  children?: ReactNode;
  timeOfDay?: 'day' | 'sunset' | 'night';
}

// ----- WALD-SZENEN / FOREST SCENES -----

export function EnchantedForest({ width = 800, height = 500, children, timeOfDay = 'day' }: SceneProps) {
  const skyColors = {
    day: '#87CEEB',
    sunset: '#FF6B35',
    night: '#1a1a3e',
  };

  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: `linear-gradient(to bottom, ${skyColors[timeOfDay]} 0%, ${timeOfDay === 'night' ? '#2a2a4e' : '#98FB98'} 100%)`,
      overflow: 'hidden',
    }}>
      {/* Himmel-Objekte / Sky objects */}
      <div style={{ position: 'absolute', top: 20, right: 40 }}>
        {timeOfDay === 'night' ? <Moon size={60} /> : <Sun size={60} />}
      </div>
      {timeOfDay !== 'night' && (
        <>
          <div style={{ position: 'absolute', top: 30, left: 100 }}><Cloud size={80} /></div>
          <div style={{ position: 'absolute', top: 60, left: 300 }}><Cloud size={60} /></div>
          <div style={{ position: 'absolute', top: 45, right: 200 }}><Cloud size={50} /></div>
        </>
      )}

      {/* Hintergrund-Hügel / Background hills */}
      <div style={{ position: 'absolute', bottom: 100, left: 0 }}><Hill size={180} color="#3cb371" /></div>
      <div style={{ position: 'absolute', bottom: 90, right: 50 }}><Hill size={150} color="#2E8B57" /></div>

      {/* Hintergrund-Bäume (kleiner = weiter weg) / Background trees */}
      <div style={{ position: 'absolute', bottom: 140, left: 80 }}><PineTree size={50} color="#1a5a1a" /></div>
      <div style={{ position: 'absolute', bottom: 130, left: 200 }}><Tree size={45} color="#1a6b1a" /></div>
      <div style={{ position: 'absolute', bottom: 135, right: 180 }}><PineTree size={55} color="#1a5a1a" /></div>
      <div style={{ position: 'absolute', bottom: 140, right: 300 }}><Tree size={40} color="#1a6b1a" /></div>

      {/* Vordergrund-Bäume (größer) / Foreground trees */}
      <div style={{ position: 'absolute', bottom: 60, left: 10 }}><Tree size={140} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 65, left: 120 }}><PineTree size={110} color="#006400" /></div>
      <div style={{ position: 'absolute', bottom: 60, left: 280 }}><Tree size={90} color="#2E8B57" /></div>
      <div style={{ position: 'absolute', bottom: 60, right: 10 }}><Tree size={150} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 65, right: 130 }}><PineTree size={100} color="#006400" /></div>
      <div style={{ position: 'absolute', bottom: 60, right: 280 }}><Tree size={85} color="#2E8B57" /></div>

      {/* Büsche zum Verstecken / Bushes for hiding */}
      <div style={{ position: 'absolute', bottom: 50, left: 60 }}><Bush size={50} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 45, left: 180 }}><Bush size={40} color="#2E8B57" /></div>
      <div style={{ position: 'absolute', bottom: 50, right: 200 }}><Bush size={55} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 45, right: 60 }}><Bush size={45} color="#2E8B57" /></div>
      <div style={{ position: 'absolute', bottom: 55, left: '45%' }}><Bush size={35} color="#3cb371" /></div>

      {/* Steine / Rocks */}
      <div style={{ position: 'absolute', bottom: 40, left: 250 }}><Rock size={25} color="#696969" /></div>
      <div style={{ position: 'absolute', bottom: 35, right: 320 }}><Rock size={35} color="#808080" /></div>
      <div style={{ position: 'absolute', bottom: 38, left: 400 }}><Rock size={20} color="#5a5a5a" /></div>

      {/* Pilze / Mushrooms */}
      <div style={{ position: 'absolute', bottom: 60, left: 90 }}><Mushroom size={25} color="#FF6347" /></div>
      <div style={{ position: 'absolute', bottom: 58, right: 250 }}><Mushroom size={20} color="#FF4500" /></div>
      <div style={{ position: 'absolute', bottom: 62, left: 320 }}><Mushroom size={22} color="#FF6347" /></div>

      {/* Blumen / Flowers */}
      <div style={{ position: 'absolute', bottom: 55, left: 160 }}><Flower size={20} color="#FF69B4" /></div>
      <div style={{ position: 'absolute', bottom: 52, left: 220 }}><Flower size={18} color="#FFD700" /></div>
      <div style={{ position: 'absolute', bottom: 55, right: 160 }}><Flower size={22} color="#FF1493" /></div>
      <div style={{ position: 'absolute', bottom: 50, right: 380 }}><Flower size={16} color="#87CEEB" /></div>
      <div style={{ position: 'absolute', bottom: 58, left: '50%' }}><Flower size={20} color="#DA70D6" /></div>

      {/* Boden / Ground */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Grass width={width} height={80} />
      </div>

      {/* Kinder / Children */}
      {children}
    </div>
  );
}

export function DarkForest({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #1a1a2e 0%, #16213e 50%, #0f0f1a 100%)',
      overflow: 'hidden',
    }}>
      {/* Mond / Moon */}
      <div style={{ position: 'absolute', top: 20, right: 60 }}>
        <Moon size={50} />
      </div>

      {/* Dunkle Bäume / Dark trees */}
      <div style={{ position: 'absolute', bottom: 40, left: 0 }}><Tree size={160} color="#0a0a0a" /></div>
      <div style={{ position: 'absolute', bottom: 40, left: 120 }}><Tree size={140} color="#1a1a1a" /></div>
      <div style={{ position: 'absolute', bottom: 40, right: 0 }}><Tree size={170} color="#0a0a0a" /></div>
      <div style={{ position: 'absolute', bottom: 40, right: 130 }}><Tree size={130} color="#1a1a1a" /></div>

      {/* Nebel / Fog */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        background: 'linear-gradient(to top, rgba(100,100,120,0.5), transparent)',
      }} />

      {children}
    </div>
  );
}

// ----- WÜSTEN-SZENEN / DESERT SCENES -----

export function SandyDesert({ width = 800, height = 500, children, timeOfDay = 'day' }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: timeOfDay === 'sunset'
        ? 'linear-gradient(to bottom, #FF6B35 0%, #FFD93D 50%, #DEB887 100%)'
        : 'linear-gradient(to bottom, #87CEEB 0%, #FFD93D 50%, #DEB887 100%)',
      overflow: 'hidden',
    }}>
      {/* Sonne / Sun */}
      <div style={{ position: 'absolute', top: 30, right: 80 }}>
        <Sun size={70} color={timeOfDay === 'sunset' ? '#FF4500' : '#FFD700'} />
      </div>

      {/* Dünen / Dunes */}
      <div style={{
        position: 'absolute',
        bottom: 80,
        left: 0,
        right: 0,
        height: 100,
        background: 'radial-gradient(ellipse 80% 100% at 30% 100%, #C19A6B 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
        height: 120,
        background: 'radial-gradient(ellipse 60% 100% at 70% 100%, #D2B48C 0%, transparent 70%)',
      }} />

      {/* Kakteen / Cacti */}
      <div style={{ position: 'absolute', bottom: 60, left: 100 }}><Cactus size={80} /></div>
      <div style={{ position: 'absolute', bottom: 60, right: 150 }}><Cactus size={60} /></div>

      {/* Sand-Boden / Sand ground */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: '#DEB887',
      }} />

      {children}
    </div>
  );
}

// ----- OZEAN-SZENEN / OCEAN SCENES -----

export function DeepOcean({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #006994 0%, #003366 50%, #001a33 100%)',
      overflow: 'hidden',
    }}>
      {/* Licht-Strahlen / Light rays */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: 0,
            left: 100 + i * 150,
            width: 40,
            height: '60%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)',
            transform: `rotate(${-15 + i * 8}deg)`,
            transformOrigin: 'top center',
          }}
        />
      ))}

      {/* Blasen / Bubbles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${30 + Math.random() * 60}%`,
            width: 8 + Math.random() * 12,
            height: 8 + Math.random() * 12,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
          }}
        />
      ))}

      {/* Seegras / Seaweed */}
      <div style={{ position: 'absolute', bottom: 0, left: 50, width: 20, height: 80, backgroundColor: '#228B22', borderRadius: '50% 50% 0 0' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 70, width: 15, height: 100, backgroundColor: '#2E8B57', borderRadius: '50% 50% 0 0' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 80, width: 18, height: 90, backgroundColor: '#228B22', borderRadius: '50% 50% 0 0' }} />

      {/* Sand-Boden / Sandy bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        backgroundColor: '#C19A6B',
        borderRadius: '50% 50% 0 0 / 20px 20px 0 0',
      }} />

      {children}
    </div>
  );
}

// ----- SCHLOSS-SZENEN / CASTLE SCENES -----

export function CastleCourtyard({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #87CEEB 0%, #B0E0E6 100%)',
      overflow: 'hidden',
    }}>
      {/* Sonne / Sun */}
      <div style={{ position: 'absolute', top: 20, left: 60 }}><Sun size={50} /></div>

      {/* Wolken / Clouds */}
      <div style={{ position: 'absolute', top: 40, right: 100 }}><Cloud size={70} /></div>

      {/* Schloss / Castle */}
      <div style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)' }}>
        <Castle size={250} />
      </div>

      {/* Steinboden / Stone floor */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: '#808080',
        backgroundImage: 'repeating-linear-gradient(90deg, #696969 0px, #696969 2px, transparent 2px, transparent 40px)',
      }} />

      {children}
    </div>
  );
}

// ----- WELTRAUM-SZENEN / SPACE SCENES -----

export function OuterSpace({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #000011 0%, #0a0a2e 50%, #1a1a3e 100%)',
      overflow: 'hidden',
    }}>
      {/* Sterne / Stars */}
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: Math.random() * 0.5 + 0.5,
          }}
        />
      ))}

      {/* Planet */}
      <div style={{
        position: 'absolute',
        bottom: 100,
        right: 100,
        width: 120,
        height: 120,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #4169E1, #1a1a8e)',
        boxShadow: 'inset -20px -20px 40px rgba(0,0,0,0.5)',
      }} />

      {/* Mond / Moon */}
      <div style={{ position: 'absolute', top: 50, left: 100 }}>
        <Moon size={40} />
      </div>

      {children}
    </div>
  );
}

// ----- STADT-SZENEN / CITY SCENES -----

export function CityStreet({ width = 800, height = 500, children, timeOfDay = 'day' }: SceneProps) {
  const isNight = timeOfDay === 'night';

  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: isNight
        ? 'linear-gradient(to bottom, #1a1a2e 0%, #2a2a4e 100%)'
        : 'linear-gradient(to bottom, #87CEEB 0%, #B0E0E6 100%)',
      overflow: 'hidden',
    }}>
      {/* Himmel / Sky */}
      <div style={{ position: 'absolute', top: 20, right: 50 }}>
        {isNight ? <Moon size={40} /> : <Sun size={50} />}
      </div>

      {/* Gebäude / Buildings */}
      <div style={{ position: 'absolute', bottom: 60, left: 30 }}><House size={100} /></div>
      <div style={{ position: 'absolute', bottom: 60, left: 180 }}><School size={120} /></div>
      <div style={{ position: 'absolute', bottom: 60, right: 30 }}><Hospital size={110} /></div>

      {/* Straßen-Lichter bei Nacht / Street lights at night */}
      {isNight && (
        <>
          <div style={{
            position: 'absolute',
            bottom: 60,
            left: 140,
            width: 8,
            height: 80,
            backgroundColor: '#333',
          }}>
            <div style={{
              position: 'absolute',
              top: -10,
              left: -10,
              width: 30,
              height: 20,
              backgroundColor: '#FFD700',
              borderRadius: '50%',
              boxShadow: '0 0 30px #FFD700',
            }} />
          </div>
        </>
      )}

      {/* Straße / Road */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: '#333',
      }}>
        {/* Mittelstreifen / Center line */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: 4,
          backgroundImage: 'repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 30px, transparent 30px, transparent 60px)',
        }} />
      </div>

      {children}
    </div>
  );
}

// ----- BAUERNHOF-SZENEN / FARM SCENES -----

export function SunnyFarm({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #87CEEB 0%, #98FB98 100%)',
      overflow: 'hidden',
    }}>
      {/* Sonne / Sun */}
      <div style={{ position: 'absolute', top: 20, right: 50 }}><Sun size={60} /></div>

      {/* Wolken / Clouds */}
      <div style={{ position: 'absolute', top: 30, left: 80 }}><Cloud size={60} /></div>
      <div style={{ position: 'absolute', top: 50, left: 250 }}><Cloud size={50} /></div>
      <div style={{ position: 'absolute', top: 35, right: 150 }}><Cloud size={45} /></div>

      {/* Hintergrund-Hügel / Background hills */}
      <div style={{ position: 'absolute', bottom: 120, right: 0 }}><Hill size={200} color="#8fbc8f" /></div>
      <div style={{ position: 'absolute', bottom: 100, left: 200 }}><Hill size={150} color="#90EE90" /></div>

      {/* Hintergrund-Bäume / Background trees */}
      <div style={{ position: 'absolute', bottom: 150, left: 300 }}><Tree size={50} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 145, right: 100 }}><Tree size={45} color="#2E8B57" /></div>

      {/* Scheune / Barn */}
      <div style={{ position: 'absolute', bottom: 60, left: 30 }}><Barn size={160} /></div>

      {/* Felder / Fields - mehrere Reihen */}
      <div style={{
        position: 'absolute',
        bottom: 85,
        right: 40,
        width: 180,
        height: 60,
        backgroundColor: '#DAA520',
        borderRadius: 4,
        backgroundImage: 'repeating-linear-gradient(90deg, #DAA520 0px, #DAA520 15px, #CD853F 15px, #CD853F 18px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 60,
        right: 250,
        width: 120,
        height: 50,
        backgroundColor: '#9ACD32',
        borderRadius: 4,
        backgroundImage: 'repeating-linear-gradient(90deg, #9ACD32 0px, #9ACD32 12px, #6B8E23 12px, #6B8E23 14px)',
      }} />

      {/* Zaun / Fence */}
      <div style={{ position: 'absolute', bottom: 55, left: 200 }}><Fence width={120} height={35} color="#8B4513" /></div>

      {/* Heuballen / Hay bales */}
      <div style={{
        position: 'absolute',
        bottom: 55,
        right: 400,
        width: 40,
        height: 30,
        backgroundColor: '#DAA520',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 70,
        right: 420,
        width: 35,
        height: 25,
        backgroundColor: '#D2B48C',
        borderRadius: '50%',
      }} />

      {/* Büsche / Bushes */}
      <div style={{ position: 'absolute', bottom: 50, left: 180 }}><Bush size={35} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 48, right: 350 }}><Bush size={40} color="#2E8B57" /></div>

      {/* Blumen / Flowers */}
      <div style={{ position: 'absolute', bottom: 55, left: 220 }}><Flower size={18} color="#FF69B4" /></div>
      <div style={{ position: 'absolute', bottom: 52, left: 300 }}><Flower size={16} color="#FFD700" /></div>
      <div style={{ position: 'absolute', bottom: 58, right: 300 }}><Flower size={20} color="#FF1493" /></div>

      {/* Steine / Rocks */}
      <div style={{ position: 'absolute', bottom: 40, left: 350 }}><Rock size={20} color="#808080" /></div>
      <div style={{ position: 'absolute', bottom: 38, right: 500 }}><Rock size={15} color="#696969" /></div>

      {/* Gras / Grass */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Grass width={width} height={80} />
      </div>

      {children}
    </div>
  );
}

// ----- SCHNEE-SZENEN / SNOW SCENES -----

export function WinterWonderland({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #B0C4DE 0%, #E0FFFF 100%)',
      overflow: 'hidden',
    }}>
      {/* Schneefall / Snowfall */}
      <Snowfall />

      {/* Berge / Mountains */}
      <div style={{ position: 'absolute', bottom: 80, left: 0 }}><Mountain size={200} color="#F5F5F5" /></div>
      <div style={{ position: 'absolute', bottom: 80, right: 0 }}><Mountain size={180} color="#DCDCDC" /></div>

      {/* Schnee-Bäume / Snow trees */}
      <div style={{ position: 'absolute', bottom: 40, left: 100 }}><Tree size={100} color="#F5F5F5" /></div>
      <div style={{ position: 'absolute', bottom: 40, right: 120 }}><Tree size={90} color="#DCDCDC" /></div>

      {/* Schnee-Boden / Snow ground */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#F5F5F5',
        borderRadius: '50% 50% 0 0 / 30px 30px 0 0',
      }} />

      {children}
    </div>
  );
}

// ----- CHARAKTER-POSITIONEN / CHARACTER POSITIONS -----

interface CharacterPositionProps {
  children: ReactNode;
  position: 'left' | 'center' | 'right';
  bottom?: number;
}

export function CharacterPosition({ children, position, bottom = 80 }: CharacterPositionProps) {
  const getLeft = () => {
    switch (position) {
      case 'left': return '15%';
      case 'center': return '50%';
      case 'right': return '85%';
    }
  };

  return (
    <div style={{
      position: 'absolute',
      bottom,
      left: getLeft(),
      transform: 'translateX(-50%)',
    }}>
      {children}
    </div>
  );
}
