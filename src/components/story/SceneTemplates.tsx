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

// Shared CSS animations for all scene templates
const sceneAnimationStyles = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes floatSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes sway {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes swayGentle {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

@keyframes pulseSlow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

@keyframes drift {
  0% { transform: translateX(0); }
  100% { transform: translateX(50px); }
}

@keyframes driftSlow {
  0% { transform: translateX(0); }
  100% { transform: translateX(30px); }
}

@keyframes bob {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-3px) rotate(2deg); }
  75% { transform: translateY(3px) rotate(-2deg); }
}

@keyframes rise {
  0% { transform: translateY(0); opacity: 0.8; }
  100% { transform: translateY(-100px); opacity: 0; }
}

@keyframes shimmer {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
}

@keyframes swim {
  0%, 100% { transform: translateX(0) scaleX(1); }
  49% { transform: translateX(100px) scaleX(1); }
  50% { transform: translateX(100px) scaleX(-1); }
  99% { transform: translateX(0) scaleX(-1); }
  100% { transform: translateX(0) scaleX(1); }
}

@keyframes flutter {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(5deg); }
  50% { transform: translateY(0) rotate(0deg); }
  75% { transform: translateY(-3px) rotate(-5deg); }
}

@keyframes blink {
  0%, 90%, 100% { opacity: 1; }
  95% { opacity: 0; }
}

@keyframes flicker {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
  25%, 75% { opacity: 0.5; }
}

@keyframes wave {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes fogDrift {
  0% { transform: translateX(-10%); opacity: 0.3; }
  50% { opacity: 0.5; }
  100% { transform: translateX(10%); opacity: 0.3; }
}
`;

// Inject styles once when module loads
if (typeof document !== 'undefined') {
  const styleId = 'scene-template-animations';
  if (!document.getElementById(styleId)) {
    const styleEl = document.createElement('style');
    styleEl.id = styleId;
    styleEl.textContent = sceneAnimationStyles;
    document.head.appendChild(styleEl);
  }
}

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
        {timeOfDay === 'night' ? (
          <>
            <div style={{
              position: 'absolute',
              top: -15,
              left: -15,
              width: 90,
              height: 90,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(200,200,255,0.3) 0%, transparent 70%)',
            }} />
            <Moon size={60} />
          </>
        ) : <Sun size={60} />}
      </div>

      {/* Sterne bei Nacht / Stars at night */}
      {timeOfDay === 'night' && [...Array(40)].map((_, i) => (
        <div
          key={`star-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 40}%`,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: Math.random() * 0.5 + 0.3,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Animierte Wolken / Animated clouds */}
      {timeOfDay !== 'night' && (
        <>
          <div style={{ position: 'absolute', top: 30, left: 100, animation: 'driftSlow 40s linear infinite' }}><Cloud size={80} /></div>
          <div style={{ position: 'absolute', top: 60, left: 300, animation: 'driftSlow 35s linear infinite', animationDelay: '10s' }}><Cloud size={60} /></div>
          <div style={{ position: 'absolute', top: 45, right: 200, animation: 'driftSlow 45s linear infinite', animationDelay: '5s' }}><Cloud size={50} /></div>
        </>
      )}

      {/* Sonnenstrahlen / Sunbeams */}
      {timeOfDay === 'day' && [...Array(4)].map((_, i) => (
        <div
          key={`ray-${i}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 100 + i * 180,
            width: 30,
            height: '45%',
            background: 'linear-gradient(to bottom, rgba(255,255,200,0.3), transparent)',
            transform: `rotate(${-10 + i * 7}deg)`,
            transformOrigin: 'top center',
            animation: `shimmer ${4 + i}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Hintergrund-Hügel / Background hills */}
      <div style={{ position: 'absolute', bottom: 100, left: 0 }}><Hill size={180} color="#3cb371" /></div>
      <div style={{ position: 'absolute', bottom: 90, right: 50 }}><Hill size={150} color="#2E8B57" /></div>

      {/* Hintergrund-Bäume (kleiner = weiter weg) / Background trees */}
      <div style={{ position: 'absolute', bottom: 140, left: 80, animation: 'swayGentle 6s ease-in-out infinite' }}><PineTree size={50} color="#1a5a1a" /></div>
      <div style={{ position: 'absolute', bottom: 130, left: 200, animation: 'swayGentle 7s ease-in-out infinite', animationDelay: '1s' }}><Tree size={45} color="#1a6b1a" /></div>
      <div style={{ position: 'absolute', bottom: 135, right: 180, animation: 'swayGentle 5s ease-in-out infinite', animationDelay: '2s' }}><PineTree size={55} color="#1a5a1a" /></div>
      <div style={{ position: 'absolute', bottom: 140, right: 300, animation: 'swayGentle 6.5s ease-in-out infinite' }}><Tree size={40} color="#1a6b1a" /></div>

      {/* Vordergrund-Bäume mit Schwanken / Foreground trees with sway */}
      <div style={{ position: 'absolute', bottom: 60, left: 10, animation: 'swayGentle 8s ease-in-out infinite' }}><Tree size={140} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 65, left: 120, animation: 'swayGentle 7s ease-in-out infinite', animationDelay: '0.5s' }}><PineTree size={110} color="#006400" /></div>
      <div style={{ position: 'absolute', bottom: 60, left: 280, animation: 'swayGentle 6s ease-in-out infinite', animationDelay: '1s' }}><Tree size={90} color="#2E8B57" /></div>
      <div style={{ position: 'absolute', bottom: 60, right: 10, animation: 'swayGentle 8s ease-in-out infinite', animationDelay: '1.5s' }}><Tree size={150} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 65, right: 130, animation: 'swayGentle 7s ease-in-out infinite', animationDelay: '2s' }}><PineTree size={100} color="#006400" /></div>
      <div style={{ position: 'absolute', bottom: 60, right: 280, animation: 'swayGentle 6.5s ease-in-out infinite' }}><Tree size={85} color="#2E8B57" /></div>

      {/* Waldtiere / Woodland animals */}
      {/* Fuchs / Fox */}
      <svg style={{ position: 'absolute', bottom: 65, left: 350 }} width="35" height="25">
        <ellipse cx="20" cy="18" rx="14" ry="8" fill="#FF8C00" />
        <ellipse cx="8" cy="14" rx="7" ry="6" fill="#FF8C00" />
        <polygon points="3,10 0,4 6,8" fill="#FF8C00" />
        <polygon points="13,10 10,4 16,8" fill="#FF8C00" />
        <circle cx="5" cy="12" r="1.5" fill="#333" />
        <ellipse cx="8" cy="16" rx="3" ry="2" fill="white" />
        <path d="M34 18 Q40 15 34 12" stroke="#FF8C00" strokeWidth="3" fill="none" />
        <ellipse cx="37" cy="15" rx="4" ry="3" fill="white" />
      </svg>

      {/* Hase / Rabbit */}
      <svg style={{ position: 'absolute', bottom: 58, right: 350 }} width="22" height="22">
        <ellipse cx="11" cy="16" rx="9" ry="7" fill="#D2B48C" />
        <circle cx="9" cy="9" r="5" fill="#D2B48C" />
        <ellipse cx="5" cy="3" rx="2.5" ry="6" fill="#D2B48C" />
        <ellipse cx="13" cy="3" rx="2.5" ry="6" fill="#D2B48C" />
        <circle cx="7" cy="8" r="1" fill="#333" />
        <circle cx="11" cy="8" r="1" fill="#333" />
        <ellipse cx="9" cy="11" rx="2" ry="1" fill="#FFB6C1" />
      </svg>

      {/* Büsche / Bushes */}
      <div style={{ position: 'absolute', bottom: 50, left: 60 }}><Bush size={50} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 45, left: 180 }}><Bush size={40} color="#2E8B57" /></div>
      <div style={{ position: 'absolute', bottom: 50, right: 200 }}><Bush size={55} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 45, right: 60 }}><Bush size={45} color="#2E8B57" /></div>
      <div style={{ position: 'absolute', bottom: 55, left: '45%' }}><Bush size={35} color="#3cb371" /></div>

      {/* Steine / Rocks */}
      <div style={{ position: 'absolute', bottom: 40, left: 250 }}><Rock size={25} color="#696969" /></div>
      <div style={{ position: 'absolute', bottom: 35, right: 320 }}><Rock size={35} color="#808080" /></div>
      <div style={{ position: 'absolute', bottom: 38, left: 400 }}><Rock size={20} color="#5a5a5a" /></div>

      {/* Leuchtende Pilze / Glowing mushrooms */}
      <div style={{ position: 'absolute', bottom: 60, left: 90 }}>
        <Mushroom size={25} color="#FF6347" />
        {timeOfDay === 'night' && (
          <div style={{
            position: 'absolute',
            top: 0, left: -5, right: -5, bottom: -5,
            background: 'radial-gradient(circle, rgba(255,100,100,0.4) 0%, transparent 70%)',
            animation: 'pulse 3s ease-in-out infinite',
          }} />
        )}
      </div>
      <div style={{ position: 'absolute', bottom: 58, right: 250 }}>
        <Mushroom size={20} color="#9370DB" />
        {timeOfDay === 'night' && (
          <div style={{
            position: 'absolute',
            top: 0, left: -5, right: -5, bottom: -5,
            background: 'radial-gradient(circle, rgba(150,100,220,0.4) 0%, transparent 70%)',
            animation: 'pulse 2.5s ease-in-out infinite',
          }} />
        )}
      </div>
      <div style={{ position: 'absolute', bottom: 62, left: 320 }}>
        <Mushroom size={22} color="#32CD32" />
        {timeOfDay === 'night' && (
          <div style={{
            position: 'absolute',
            top: 0, left: -5, right: -5, bottom: -5,
            background: 'radial-gradient(circle, rgba(100,220,100,0.4) 0%, transparent 70%)',
            animation: 'pulse 3.5s ease-in-out infinite',
          }} />
        )}
      </div>

      {/* Blumen mit leichtem Schwanken / Flowers with gentle sway */}
      <div style={{ position: 'absolute', bottom: 55, left: 160, animation: 'swayGentle 4s ease-in-out infinite' }}><Flower size={20} color="#FF69B4" /></div>
      <div style={{ position: 'absolute', bottom: 52, left: 220, animation: 'swayGentle 3.5s ease-in-out infinite', animationDelay: '0.5s' }}><Flower size={18} color="#FFD700" /></div>
      <div style={{ position: 'absolute', bottom: 55, right: 160, animation: 'swayGentle 4.5s ease-in-out infinite', animationDelay: '1s' }}><Flower size={22} color="#FF1493" /></div>
      <div style={{ position: 'absolute', bottom: 50, right: 380, animation: 'swayGentle 3s ease-in-out infinite' }}><Flower size={16} color="#87CEEB" /></div>
      <div style={{ position: 'absolute', bottom: 58, left: '50%', animation: 'swayGentle 4s ease-in-out infinite', animationDelay: '1.5s' }}><Flower size={20} color="#DA70D6" /></div>

      {/* Schmetterlinge / Butterflies */}
      {timeOfDay !== 'night' && [...Array(5)].map((_, i) => (
        <svg
          key={`butterfly-${i}`}
          style={{
            position: 'absolute',
            top: 120 + i * 40,
            left: 100 + i * 140,
            animation: `flutter ${3 + i * 0.5}s ease-in-out infinite`,
          }}
          width="22"
          height="18"
        >
          <ellipse cx="11" cy="9" rx="2" ry="6" fill="#333" />
          <ellipse cx="5" cy="7" rx="5" ry="6" fill={['#FF69B4', '#FFD700', '#87CEEB', '#FF6347', '#9370DB'][i]} opacity="0.8" />
          <ellipse cx="17" cy="7" rx="5" ry="6" fill={['#FF69B4', '#FFD700', '#87CEEB', '#FF6347', '#9370DB'][i]} opacity="0.8" />
        </svg>
      ))}

      {/* Glühwürmchen / Fireflies */}
      {[...Array(timeOfDay === 'night' ? 20 : 8)].map((_, i) => (
        <div
          key={`firefly-${i}`}
          style={{
            position: 'absolute',
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 50}%`,
            width: timeOfDay === 'night' ? 5 + Math.random() * 4 : 3 + Math.random() * 2,
            height: timeOfDay === 'night' ? 5 + Math.random() * 4 : 3 + Math.random() * 2,
            borderRadius: '50%',
            backgroundColor: timeOfDay === 'night' ? '#FFFF44' : '#FFFF88',
            boxShadow: timeOfDay === 'night' ? '0 0 10px #FFFF44, 0 0 15px #FFFF00' : '0 0 5px #FFFF88',
            animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite, float ${4 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: timeOfDay === 'night' ? 1 : 0.6,
          }}
        />
      ))}

      {/* Feenlichter bei Nacht / Fairy lights at night */}
      {timeOfDay === 'night' && [...Array(10)].map((_, i) => (
        <div
          key={`fairy-${i}`}
          style={{
            position: 'absolute',
            left: `${5 + i * 10}%`,
            top: `${30 + Math.random() * 40}%`,
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: ['#FFD700', '#FF69B4', '#00FFFF', '#FF6347'][i % 4],
            boxShadow: `0 0 10px ${['#FFD700', '#FF69B4', '#00FFFF', '#FF6347'][i % 4]}`,
            animation: `float ${5 + Math.random() * 3}s ease-in-out infinite, twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

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
      {/* Mond mit Schein / Moon with glow */}
      <div style={{ position: 'absolute', top: 20, right: 60 }}>
        <div style={{
          position: 'absolute',
          top: -20,
          left: -20,
          width: 90,
          height: 90,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,200,255,0.3) 0%, transparent 70%)',
        }} />
        <Moon size={50} />
      </div>

      {/* Sterne / Stars */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`star-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 40}%`,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: Math.random() * 0.5 + 0.2,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Hintergrund-Bäume (weit weg, klein) / Background trees (far, small) */}
      <div style={{ position: 'absolute', bottom: 120, left: 50, opacity: 0.4 }}><PineTree size={60} color="#0a0a15" /></div>
      <div style={{ position: 'absolute', bottom: 115, left: 150, opacity: 0.5 }}><Tree size={50} color="#0a0a15" /></div>
      <div style={{ position: 'absolute', bottom: 110, left: 280, opacity: 0.4 }}><PineTree size={55} color="#0a0a15" /></div>
      <div style={{ position: 'absolute', bottom: 118, right: 200, opacity: 0.5 }}><Tree size={45} color="#0a0a15" /></div>
      <div style={{ position: 'absolute', bottom: 112, right: 350, opacity: 0.4 }}><PineTree size={50} color="#0a0a15" /></div>

      {/* Mittelgrund-Bäume / Mid-ground trees */}
      <div style={{ position: 'absolute', bottom: 70, left: 30, opacity: 0.7 }}><Tree size={100} color="#0f0f1a" /></div>
      <div style={{ position: 'absolute', bottom: 75, left: 200, opacity: 0.6 }}><PineTree size={90} color="#0f0f1a" /></div>
      <div style={{ position: 'absolute', bottom: 72, right: 220, opacity: 0.7 }}><Tree size={95} color="#0f0f1a" /></div>

      {/* Vordergrund-Bäume (nah, groß) / Foreground trees (close, large) */}
      <div style={{ position: 'absolute', bottom: 40, left: 0 }}><Tree size={160} color="#0a0a0a" /></div>
      <div style={{ position: 'absolute', bottom: 40, left: 120 }}><Tree size={140} color="#1a1a1a" /></div>
      <div style={{ position: 'absolute', bottom: 45, left: 300 }}><PineTree size={120} color="#0f0f15" /></div>
      <div style={{ position: 'absolute', bottom: 40, right: 0 }}><Tree size={170} color="#0a0a0a" /></div>
      <div style={{ position: 'absolute', bottom: 40, right: 130 }}><Tree size={130} color="#1a1a1a" /></div>
      <div style={{ position: 'absolute', bottom: 45, right: 300 }}><PineTree size={115} color="#0f0f15" /></div>

      {/* Glühende Augen im Wald / Glowing eyes in forest */}
      {[
        { x: 80, y: 180, size: 4 },
        { x: 250, y: 200, size: 3 },
        { x: 550, y: 190, size: 4 },
        { x: 680, y: 210, size: 3 },
      ].map((eye, i) => (
        <div key={`eyes-${i}`} style={{ position: 'absolute', left: eye.x, top: eye.y }}>
          <div style={{
            display: 'flex',
            gap: eye.size * 2,
            animation: `blink ${4 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}>
            <div style={{
              width: eye.size,
              height: eye.size,
              borderRadius: '50%',
              backgroundColor: '#FFFF00',
              boxShadow: `0 0 ${eye.size * 2}px #FFFF00`,
            }} />
            <div style={{
              width: eye.size,
              height: eye.size,
              borderRadius: '50%',
              backgroundColor: '#FFFF00',
              boxShadow: `0 0 ${eye.size * 2}px #FFFF00`,
            }} />
          </div>
        </div>
      ))}

      {/* Pilze / Mushrooms */}
      <div style={{ position: 'absolute', bottom: 55, left: 60 }}><Mushroom size={22} color="#4a1a4a" /></div>
      <div style={{ position: 'absolute', bottom: 50, left: 180 }}><Mushroom size={18} color="#3a2a3a" /></div>
      <div style={{ position: 'absolute', bottom: 52, left: 350, animation: 'pulseSlow 3s ease-in-out infinite' }}>
        <Mushroom size={25} color="#6a2a6a" />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, rgba(150,100,200,0.3) 0%, transparent 70%)',
        }} />
      </div>
      <div style={{ position: 'absolute', bottom: 48, right: 250 }}><Mushroom size={20} color="#4a2a4a" /></div>
      <div style={{ position: 'absolute', bottom: 53, right: 120 }}><Mushroom size={24} color="#3a1a3a" /></div>
      <div style={{ position: 'absolute', bottom: 50, right: 380, animation: 'pulseSlow 4s ease-in-out infinite', animationDelay: '1s' }}>
        <Mushroom size={22} color="#5a2a5a" />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, rgba(150,100,200,0.3) 0%, transparent 70%)',
        }} />
      </div>

      {/* Steine / Rocks */}
      <div style={{ position: 'absolute', bottom: 35, left: 140 }}><Rock size={25} color="#2a2a35" /></div>
      <div style={{ position: 'absolute', bottom: 38, left: 420 }}><Rock size={30} color="#252530" /></div>
      <div style={{ position: 'absolute', bottom: 32, right: 180 }}><Rock size={22} color="#2a2a35" /></div>

      {/* Glühwürmchen / Fireflies */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`firefly-${i}`}
          style={{
            position: 'absolute',
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 50}%`,
            width: 4 + Math.random() * 3,
            height: 4 + Math.random() * 3,
            borderRadius: '50%',
            backgroundColor: '#FFFF44',
            boxShadow: '0 0 8px #FFFF44, 0 0 12px #FFFF00',
            animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite, float ${4 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Animierter Nebel / Animated fog */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '-10%',
        right: '-10%',
        height: 120,
        background: 'linear-gradient(to top, rgba(80,80,100,0.6), rgba(60,60,80,0.3), transparent)',
        animation: 'fogDrift 15s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 20,
        left: '-10%',
        right: '-10%',
        height: 80,
        background: 'linear-gradient(to top, rgba(100,100,120,0.5), transparent)',
        animation: 'fogDrift 20s ease-in-out infinite reverse',
      }} />

      {/* Fallende Blätter / Falling leaves */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`leaf-${i}`}
          style={{
            position: 'absolute',
            left: `${10 + i * 12}%`,
            top: `${-5 + Math.random() * 20}%`,
            width: 8,
            height: 8,
            backgroundColor: '#3a2a1a',
            borderRadius: '50% 0 50% 0',
            animation: `flutter ${3 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: 0.6,
          }}
        />
      ))}

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
      {/* Hitzeflimmern / Heat shimmer effect */}
      <div style={{
        position: 'absolute',
        bottom: 80,
        left: 0,
        right: 0,
        height: 200,
        background: 'linear-gradient(to top, rgba(255,255,200,0.3), transparent)',
        animation: 'shimmer 3s ease-in-out infinite',
      }} />

      {/* Sonne mit Strahlen / Sun with rays */}
      <div style={{ position: 'absolute', top: 30, right: 80 }}>
        <div style={{
          position: 'absolute',
          top: -30,
          left: -30,
          width: 130,
          height: 130,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${timeOfDay === 'sunset' ? 'rgba(255,100,0,0.4)' : 'rgba(255,215,0,0.4)'} 0%, transparent 70%)`,
        }} />
        <Sun size={70} color={timeOfDay === 'sunset' ? '#FF4500' : '#FFD700'} />
      </div>

      {/* Geier am Himmel / Vultures in sky */}
      {[...Array(3)].map((_, i) => (
        <svg
          key={`vulture-${i}`}
          style={{
            position: 'absolute',
            top: 60 + i * 40,
            left: 100 + i * 200,
            animation: `drift ${20 + i * 5}s linear infinite`,
          }}
          width="30"
          height="15"
        >
          <path d="M15 8 Q5 0 0 8 Q8 6 15 8 Q22 6 30 8 Q25 0 15 8" fill="#2a2a2a" />
        </svg>
      ))}

      {/* Ferne Berge / Distant mountains */}
      <div style={{ position: 'absolute', bottom: 150, left: 0 }}><Mountain size={180} color="#C19A6B" /></div>
      <div style={{ position: 'absolute', bottom: 140, right: 50 }}><Mountain size={150} color="#D2B48C" /></div>

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
      <div style={{
        position: 'absolute',
        bottom: 70,
        left: 0,
        right: 0,
        height: 80,
        background: 'radial-gradient(ellipse 40% 100% at 50% 100%, #DEB887 0%, transparent 70%)',
      }} />

      {/* Kakteen / Cacti - more variety */}
      <div style={{ position: 'absolute', bottom: 60, left: 50 }}><Cactus size={50} /></div>
      <div style={{ position: 'absolute', bottom: 60, left: 100 }}><Cactus size={80} /></div>
      <div style={{ position: 'absolute', bottom: 65, left: 250 }}><Cactus size={45} /></div>
      <div style={{ position: 'absolute', bottom: 60, left: 400 }}><Cactus size={70} /></div>
      <div style={{ position: 'absolute', bottom: 62, right: 280 }}><Cactus size={55} /></div>
      <div style={{ position: 'absolute', bottom: 60, right: 150 }}><Cactus size={60} /></div>
      <div style={{ position: 'absolute', bottom: 65, right: 50 }}><Cactus size={40} /></div>

      {/* Steine und Felsen / Rocks and boulders */}
      <div style={{ position: 'absolute', bottom: 50, left: 180 }}><Rock size={35} color="#B8860B" /></div>
      <div style={{ position: 'absolute', bottom: 45, left: 320 }}><Rock size={25} color="#CD853F" /></div>
      <div style={{ position: 'absolute', bottom: 48, right: 380 }}><Rock size={30} color="#D2B48C" /></div>
      <div style={{ position: 'absolute', bottom: 42, right: 220 }}><Rock size={40} color="#C19A6B" /></div>

      {/* Knochen / Bones */}
      <svg style={{ position: 'absolute', bottom: 55, left: 350 }} width="40" height="15">
        <ellipse cx="5" cy="7" rx="5" ry="5" fill="#F5F5DC" />
        <rect x="8" y="5" width="24" height="4" rx="2" fill="#F5F5DC" />
        <ellipse cx="35" cy="7" rx="5" ry="5" fill="#F5F5DC" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 48, right: 320 }} width="30" height="12">
        <ellipse cx="4" cy="6" rx="4" ry="4" fill="#F5DEB3" />
        <rect x="6" y="4" width="18" height="3" rx="1.5" fill="#F5DEB3" />
        <ellipse cx="26" cy="6" rx="4" ry="4" fill="#F5DEB3" />
      </svg>

      {/* Schädel / Skull */}
      <svg style={{ position: 'absolute', bottom: 52, left: 520 }} width="25" height="25">
        <ellipse cx="12" cy="10" rx="10" ry="8" fill="#F5F5DC" />
        <ellipse cx="12" cy="18" rx="5" ry="6" fill="#F5F5DC" />
        <circle cx="8" cy="8" r="2" fill="#2a2a2a" />
        <circle cx="16" cy="8" r="2" fill="#2a2a2a" />
        <path d="M10 14 L14 14 M10 16 L14 16" stroke="#2a2a2a" strokeWidth="1" />
      </svg>

      {/* Rollende Tumbleweeds / Rolling tumbleweeds */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`tumbleweed-${i}`}
          style={{
            position: 'absolute',
            bottom: 60 + i * 5,
            left: `${-10 + i * 30}%`,
            width: 25 + i * 5,
            height: 25 + i * 5,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #8B7355 20%, #A0522D 50%, transparent 70%)',
            animation: `drift ${15 + i * 5}s linear infinite, spin ${3 + i}s linear infinite`,
            animationDelay: `${i * 4}s`,
          }}
        />
      ))}

      {/* Sandwirbel / Dust devils */}
      <div style={{
        position: 'absolute',
        bottom: 70,
        left: '60%',
        width: 20,
        height: 80,
        background: 'linear-gradient(to top, rgba(210,180,140,0.5), transparent)',
        borderRadius: '50%',
        animation: 'sway 4s ease-in-out infinite',
        opacity: 0.5,
      }} />

      {/* Eidechse / Lizard */}
      <svg style={{ position: 'absolute', bottom: 55, left: 450 }} width="30" height="12">
        <ellipse cx="10" cy="6" rx="8" ry="4" fill="#8B7355" />
        <circle cx="3" cy="5" r="3" fill="#8B7355" />
        <path d="M18 6 Q25 4 28 6" stroke="#8B7355" strokeWidth="2" fill="none" />
        <circle cx="2" cy="4" r="0.5" fill="black" />
      </svg>

      {/* Sand-Boden mit Textur / Sand ground with texture */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: '#DEB887',
        backgroundImage: 'radial-gradient(circle at 20% 80%, #D2B48C 0%, transparent 20%), radial-gradient(circle at 60% 60%, #C19A6B 0%, transparent 15%), radial-gradient(circle at 80% 90%, #D2B48C 0%, transparent 18%)',
      }} />

      {/* Sandkörner-Partikel / Sand particle effects */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`sand-${i}`}
          style={{
            position: 'absolute',
            bottom: 80 + Math.random() * 50,
            left: `${Math.random() * 100}%`,
            width: 2,
            height: 2,
            backgroundColor: '#D2B48C',
            borderRadius: '50%',
            animation: `driftSlow ${8 + Math.random() * 4}s linear infinite`,
            opacity: 0.6,
          }}
        />
      ))}

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
      {/* Entfernter Wal-Silhouette / Distant whale silhouette */}
      <svg style={{ position: 'absolute', top: 80, left: 50, opacity: 0.15, animation: 'driftSlow 30s linear infinite' }} width="120" height="50">
        <ellipse cx="60" cy="25" rx="55" ry="20" fill="#001a33" />
        <ellipse cx="110" cy="25" rx="15" ry="8" fill="#001a33" />
        <path d="M5 25 Q-10 10 5 5 L15 25 L5 45 Q-10 40 5 25" fill="#001a33" />
      </svg>

      {/* Animierte Licht-Strahlen / Animated light rays */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`ray-${i}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 80 + i * 130,
            width: 45,
            height: '65%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)',
            transform: `rotate(${-15 + i * 6}deg)`,
            transformOrigin: 'top center',
            animation: `shimmer ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Plankton-Partikel / Plankton particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`plankton-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${10 + Math.random() * 80}%`,
            width: 2 + Math.random() * 2,
            height: 2 + Math.random() * 2,
            borderRadius: '50%',
            backgroundColor: 'rgba(200,255,200,0.4)',
            animation: `floatSlow ${5 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Animierte Blasen / Animated bubbles */}
      {[...Array(25)].map((_, i) => {
        const size = 6 + Math.random() * 14;
        return (
          <div
            key={`bubble-${i}`}
            style={{
              position: 'absolute',
              left: `${5 + Math.random() * 90}%`,
              bottom: `${-5 + Math.random() * 30}%`,
              width: size,
              height: size,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              animation: `rise ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        );
      })}

      {/* Quallen / Jellyfish */}
      {[
        { x: 150, y: 100, size: 40, color: 'rgba(255,150,200,0.6)' },
        { x: 600, y: 150, size: 35, color: 'rgba(150,200,255,0.6)' },
        { x: 350, y: 80, size: 30, color: 'rgba(200,150,255,0.5)' },
      ].map((jelly, i) => (
        <svg
          key={`jelly-${i}`}
          style={{
            position: 'absolute',
            left: jelly.x,
            top: jelly.y,
            animation: `float ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
          width={jelly.size}
          height={jelly.size * 1.5}
        >
          <ellipse cx={jelly.size / 2} cy={jelly.size / 3} rx={jelly.size / 2.5} ry={jelly.size / 3} fill={jelly.color} />
          {[...Array(6)].map((_, j) => (
            <path
              key={j}
              d={`M${jelly.size / 6 + j * jelly.size / 7} ${jelly.size / 2.5} Q${jelly.size / 6 + j * jelly.size / 7 + 3} ${jelly.size} ${jelly.size / 6 + j * jelly.size / 7} ${jelly.size * 1.4}`}
              stroke={jelly.color}
              strokeWidth="2"
              fill="none"
              style={{ animation: `sway ${2 + j * 0.2}s ease-in-out infinite` }}
            />
          ))}
        </svg>
      ))}

      {/* Schwimmende Fische / Swimming fish */}
      {[
        { x: 100, y: 180, size: 25, color: '#FF6347', delay: 0 },
        { x: 300, y: 220, size: 20, color: '#FFD700', delay: 2 },
        { x: 500, y: 150, size: 22, color: '#00CED1', delay: 4 },
        { x: 650, y: 280, size: 18, color: '#FF69B4', delay: 1 },
        { x: 200, y: 300, size: 24, color: '#32CD32', delay: 3 },
      ].map((fish, i) => (
        <svg
          key={`fish-${i}`}
          style={{
            position: 'absolute',
            left: fish.x,
            top: fish.y,
            animation: `swim ${10 + i * 2}s ease-in-out infinite`,
            animationDelay: `${fish.delay}s`,
          }}
          width={fish.size}
          height={fish.size * 0.6}
        >
          <ellipse cx={fish.size * 0.4} cy={fish.size * 0.3} rx={fish.size * 0.35} ry={fish.size * 0.25} fill={fish.color} />
          <polygon points={`${fish.size * 0.7},${fish.size * 0.3} ${fish.size},${fish.size * 0.1} ${fish.size},${fish.size * 0.5}`} fill={fish.color} />
          <circle cx={fish.size * 0.2} cy={fish.size * 0.25} r={fish.size * 0.06} fill="white" />
          <circle cx={fish.size * 0.2} cy={fish.size * 0.25} r={fish.size * 0.03} fill="black" />
        </svg>
      ))}

      {/* Korallen / Corals */}
      <svg style={{ position: 'absolute', bottom: 35, left: 120 }} width="60" height="70">
        {[...Array(5)].map((_, i) => (
          <path key={i} d={`M${10 + i * 10} 70 Q${8 + i * 10} 40 ${15 + i * 12} ${15 + Math.random() * 15}`} stroke="#FF6347" strokeWidth="6" fill="none" strokeLinecap="round" style={{ animation: `swayGentle ${3 + i * 0.3}s ease-in-out infinite` }} />
        ))}
      </svg>
      <svg style={{ position: 'absolute', bottom: 35, left: 280 }} width="50" height="60">
        <ellipse cx="25" cy="45" rx="22" ry="15" fill="#9370DB" />
        <ellipse cx="18" cy="32" rx="15" ry="12" fill="#BA55D3" />
        <ellipse cx="32" cy="28" rx="12" ry="10" fill="#9370DB" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 35, right: 200 }} width="55" height="65">
        {[...Array(4)].map((_, i) => (
          <path key={i} d={`M${12 + i * 12} 65 Q${12 + i * 12} 35 ${8 + i * 14} ${18 + Math.random() * 12}`} stroke="#32CD32" strokeWidth="5" fill="none" strokeLinecap="round" style={{ animation: `swayGentle ${2.5 + i * 0.4}s ease-in-out infinite` }} />
        ))}
      </svg>

      {/* Animiertes Seegras / Animated seaweed */}
      {[
        { x: 40, h: 90, color: '#228B22' },
        { x: 65, h: 110, color: '#2E8B57' },
        { x: 85, h: 80, color: '#228B22' },
        { x: 350, h: 100, color: '#2E8B57' },
        { x: 380, h: 85, color: '#228B22' },
        { x: 550, h: 95, color: '#2E8B57' },
        { x: 720, h: 105, color: '#228B22' },
        { x: 745, h: 75, color: '#2E8B57' },
      ].map((seaweed, i) => (
        <div
          key={`seaweed-${i}`}
          style={{
            position: 'absolute',
            bottom: 35,
            left: seaweed.x,
            width: 12 + i * 2,
            height: seaweed.h,
            backgroundColor: seaweed.color,
            borderRadius: '50% 50% 0 0',
            transformOrigin: 'bottom center',
            animation: `sway ${3 + i * 0.3}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Schatzkiste / Treasure chest */}
      <svg style={{ position: 'absolute', bottom: 42, left: 450 }} width="45" height="35">
        <rect x="5" y="12" width="35" height="22" rx="2" fill="#8B4513" />
        <rect x="5" y="8" width="35" height="8" rx="2" fill="#A0522D" />
        <rect x="18" y="8" width="9" height="26" fill="#DAA520" />
        <circle cx="22.5" cy="22" r="4" fill="#FFD700" />
        {/* Glitzernde Münzen / Sparkling coins */}
        {[...Array(3)].map((_, i) => (
          <circle key={i} cx={12 + i * 10} cy={6} r="3" fill="#FFD700" style={{ animation: `twinkle ${1.5 + i * 0.5}s ease-in-out infinite` }} />
        ))}
      </svg>

      {/* Seesterne / Starfish */}
      <svg style={{ position: 'absolute', bottom: 38, left: 180 }} width="25" height="25">
        <polygon points="12.5,0 15,9 25,9 17,15 20,25 12.5,19 5,25 8,15 0,9 10,9" fill="#FF6347" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 40, right: 350 }} width="20" height="20">
        <polygon points="10,0 12,7 20,7 13.5,12 16,20 10,15 4,20 6.5,12 0,7 8,7" fill="#FFB6C1" />
      </svg>

      {/* Muscheln / Shells */}
      <svg style={{ position: 'absolute', bottom: 38, left: 320 }} width="20" height="18">
        <path d="M10 18 Q2 12 10 0 Q18 12 10 18" fill="#F5DEB3" stroke="#DEB887" strokeWidth="1" />
        <path d="M10 0 L10 18 M5 3 Q10 10 5 17 M15 3 Q10 10 15 17" stroke="#DEB887" strokeWidth="0.5" fill="none" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 40, right: 120 }} width="18" height="15">
        <ellipse cx="9" cy="10" rx="8" ry="5" fill="#FFE4C4" />
        <path d="M1 10 Q9 5 17 10" stroke="#DEB887" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Sand-Boden mit Textur / Sandy bottom with texture */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 45,
        backgroundColor: '#C19A6B',
        borderRadius: '50% 50% 0 0 / 20px 20px 0 0',
        backgroundImage: 'radial-gradient(circle at 20% 50%, #D2B48C 0%, transparent 30%), radial-gradient(circle at 70% 70%, #B8860B 0%, transparent 25%)',
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
      <div style={{ position: 'absolute', top: 40, right: 100, animation: 'driftSlow 25s linear infinite' }}><Cloud size={70} /></div>
      <div style={{ position: 'absolute', top: 60, left: 150, animation: 'driftSlow 30s linear infinite', animationDelay: '5s' }}><Cloud size={55} /></div>
      <div style={{ position: 'absolute', top: 30, right: 250, animation: 'driftSlow 28s linear infinite', animationDelay: '10s' }}><Cloud size={45} /></div>

      {/* Fliegende Vögel / Flying birds */}
      {[...Array(5)].map((_, i) => (
        <svg
          key={`bird-${i}`}
          style={{
            position: 'absolute',
            top: 50 + i * 25,
            left: 200 + i * 100,
            animation: `drift ${15 + i * 3}s linear infinite`,
            animationDelay: `${i * 2}s`,
          }}
          width="20"
          height="12"
        >
          <path d="M10 6 Q5 0 0 6 Q6 4 10 6 Q14 4 20 6 Q15 0 10 6" fill="#333" />
        </svg>
      ))}

      {/* Hintergrund-Mauer / Background wall */}
      <div style={{
        position: 'absolute',
        bottom: 200,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: '#a0a0a0',
        backgroundImage: 'repeating-linear-gradient(90deg, #909090 0px, #909090 2px, transparent 2px, transparent 50px)',
      }} />

      {/* Wehende Banner / Waving banners */}
      {[
        { x: 80, color: '#DC143C' },
        { x: 720, color: '#4169E1' },
      ].map((banner, i) => (
        <svg
          key={`banner-${i}`}
          style={{
            position: 'absolute',
            bottom: 220,
            left: banner.x,
            animation: `sway ${3 + i * 0.5}s ease-in-out infinite`,
            transformOrigin: 'top center',
          }}
          width="35"
          height="100"
        >
          <rect x="15" y="0" width="5" height="100" fill="#8B4513" />
          <path d={`M20 5 Q35 20 20 35 Q35 50 20 65 L20 5`} fill={banner.color} />
          <circle cx="17.5" cy="2" r="5" fill="#FFD700" />
        </svg>
      ))}

      {/* Wachen-Silhouetten / Guard silhouettes */}
      {[
        { x: 150, flip: false },
        { x: 620, flip: true },
      ].map((guard, i) => (
        <svg
          key={`guard-${i}`}
          style={{
            position: 'absolute',
            bottom: 65,
            left: guard.x,
            transform: guard.flip ? 'scaleX(-1)' : 'none',
          }}
          width="30"
          height="70"
        >
          {/* Körper / Body */}
          <rect x="8" y="25" width="14" height="40" fill="#4169E1" />
          {/* Kopf / Head */}
          <circle cx="15" cy="15" r="10" fill="#DEB887" />
          {/* Helm / Helmet */}
          <ellipse cx="15" cy="8" rx="10" ry="6" fill="#808080" />
          <rect x="5" y="8" width="20" height="3" fill="#808080" />
          {/* Speer / Spear */}
          <rect x="25" y="5" width="3" height="60" fill="#8B4513" />
          <polygon points="26.5,0 23,10 30,10" fill="#C0C0C0" />
        </svg>
      ))}

      {/* Schloss / Castle */}
      <div style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)' }}>
        <Castle size={250} />
      </div>

      {/* Wehende Flaggen auf Schloss / Waving flags on castle */}
      {[
        { x: '43%', color: '#DC143C' },
        { x: '57%', color: '#FFD700' },
      ].map((flag, i) => (
        <svg
          key={`flag-${i}`}
          style={{
            position: 'absolute',
            bottom: 290,
            left: flag.x,
            animation: `sway ${2.5 + i * 0.3}s ease-in-out infinite`,
            transformOrigin: 'bottom center',
          }}
          width="30"
          height="40"
        >
          <rect x="0" y="0" width="4" height="40" fill="#8B4513" />
          <path d="M4 5 Q20 10 4 20 Q20 25 4 30 L4 5" fill={flag.color} style={{ animation: `wave ${2}s ease-in-out infinite` }} />
        </svg>
      ))}

      {/* Brunnen / Fountain */}
      <svg style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)' }} width="80" height="70">
        {/* Becken / Basin */}
        <ellipse cx="40" cy="60" rx="38" ry="10" fill="#708090" />
        <ellipse cx="40" cy="55" rx="32" ry="8" fill="#4682B4" />
        {/* Säule / Pillar */}
        <rect x="35" y="25" width="10" height="35" fill="#808080" />
        {/* Wasserstrahlen / Water jets */}
        <path d="M40 25 Q35 10 30 20" stroke="#87CEEB" strokeWidth="3" fill="none" opacity="0.7" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
        <path d="M40 25 Q45 10 50 20" stroke="#87CEEB" strokeWidth="3" fill="none" opacity="0.7" style={{ animation: 'pulse 2s ease-in-out infinite', animationDelay: '0.5s' }} />
        <path d="M40 25 Q40 5 40 15" stroke="#87CEEB" strokeWidth="3" fill="none" opacity="0.7" style={{ animation: 'pulse 2s ease-in-out infinite', animationDelay: '0.25s' }} />
      </svg>

      {/* Blumenbeete / Flower beds */}
      <div style={{ position: 'absolute', bottom: 55, left: 30 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {[...Array(5)].map((_, i) => (
            <Flower key={i} size={18 + Math.random() * 8} color={['#FF69B4', '#FFD700', '#FF6347', '#9370DB', '#FF1493'][i]} />
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 55, right: 30 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {[...Array(5)].map((_, i) => (
            <Flower key={i} size={18 + Math.random() * 8} color={['#87CEEB', '#FFD700', '#32CD32', '#FF69B4', '#FFA500'][i]} />
          ))}
        </div>
      </div>

      {/* Büsche / Bushes */}
      <div style={{ position: 'absolute', bottom: 50, left: 200 }}><Bush size={45} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 48, right: 200 }}><Bush size={50} color="#2E8B57" /></div>

      {/* Schmetterlinge / Butterflies */}
      {[...Array(4)].map((_, i) => (
        <svg
          key={`butterfly-${i}`}
          style={{
            position: 'absolute',
            top: 150 + i * 50,
            left: 100 + i * 180,
            animation: `flutter ${3 + i * 0.5}s ease-in-out infinite`,
          }}
          width="20"
          height="15"
        >
          <ellipse cx="10" cy="7" rx="1.5" ry="5" fill="#333" />
          <ellipse cx="5" cy="6" rx="4" ry="5" fill={['#FF69B4', '#FFD700', '#87CEEB', '#FF6347'][i]} opacity="0.8" />
          <ellipse cx="15" cy="6" rx="4" ry="5" fill={['#FF69B4', '#FFD700', '#87CEEB', '#FF6347'][i]} opacity="0.8" />
        </svg>
      ))}

      {/* Steinboden mit Muster / Stone floor with pattern */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: '#808080',
        backgroundImage: `
          repeating-linear-gradient(90deg, #696969 0px, #696969 2px, transparent 2px, transparent 40px),
          repeating-linear-gradient(0deg, #707070 0px, #707070 1px, transparent 1px, transparent 40px)
        `,
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
      {/* Nebula-Hintergrund / Nebula background */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '40%',
        height: '50%',
        background: 'radial-gradient(ellipse, rgba(147,112,219,0.2) 0%, rgba(75,0,130,0.1) 40%, transparent 70%)',
        filter: 'blur(20px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '35%',
        height: '45%',
        background: 'radial-gradient(ellipse, rgba(255,105,180,0.15) 0%, rgba(220,20,60,0.1) 40%, transparent 70%)',
        filter: 'blur(25px)',
      }} />
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '30%',
        width: '25%',
        height: '30%',
        background: 'radial-gradient(ellipse, rgba(0,255,255,0.1) 0%, rgba(0,100,150,0.05) 50%, transparent 70%)',
        filter: 'blur(15px)',
      }} />

      {/* Sterne mit Twinkle / Stars with twinkle */}
      {[...Array(120)].map((_, i) => (
        <div
          key={`star-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            backgroundColor: i % 10 === 0 ? '#FFD700' : i % 7 === 0 ? '#87CEEB' : 'white',
            borderRadius: '50%',
            opacity: Math.random() * 0.5 + 0.5,
            animation: i % 3 === 0 ? `twinkle ${2 + Math.random() * 3}s ease-in-out infinite` : 'none',
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Sternschnuppen / Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          style={{
            position: 'absolute',
            top: `${10 + i * 30}%`,
            left: `${20 + i * 25}%`,
            width: 80,
            height: 2,
            background: 'linear-gradient(to right, white, transparent)',
            transform: 'rotate(-35deg)',
            opacity: 0,
            animation: `shimmer ${4 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 3}s`,
          }}
        />
      ))}

      {/* Weltraumstaub / Space dust particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`dust-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 1 + Math.random(),
            height: 1 + Math.random(),
            backgroundColor: 'rgba(200,200,255,0.3)',
            borderRadius: '50%',
            animation: `floatSlow ${10 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Asteroiden / Asteroids */}
      {[
        { x: 50, y: 150, size: 25, color: '#5a5a5a' },
        { x: 200, y: 350, size: 18, color: '#6a6a6a' },
        { x: 650, y: 100, size: 22, color: '#4a4a4a' },
        { x: 550, y: 400, size: 15, color: '#5a5a5a' },
      ].map((asteroid, i) => (
        <svg
          key={`asteroid-${i}`}
          style={{
            position: 'absolute',
            left: asteroid.x,
            top: asteroid.y,
            animation: `floatSlow ${8 + i * 2}s ease-in-out infinite, spin ${20 + i * 5}s linear infinite`,
          }}
          width={asteroid.size}
          height={asteroid.size}
        >
          <ellipse cx={asteroid.size / 2} cy={asteroid.size / 2} rx={asteroid.size / 2.2} ry={asteroid.size / 2.5} fill={asteroid.color} />
          <circle cx={asteroid.size * 0.3} cy={asteroid.size * 0.4} r={asteroid.size * 0.12} fill="#3a3a3a" />
          <circle cx={asteroid.size * 0.6} cy={asteroid.size * 0.6} r={asteroid.size * 0.08} fill="#4a4a4a" />
        </svg>
      ))}

      {/* Satellit / Satellite */}
      <svg
        style={{
          position: 'absolute',
          top: 80,
          right: 200,
          animation: 'floatSlow 12s ease-in-out infinite',
        }}
        width="50"
        height="30"
      >
        {/* Körper / Body */}
        <rect x="18" y="8" width="14" height="14" fill="#C0C0C0" />
        {/* Solar-Paneele / Solar panels */}
        <rect x="0" y="10" width="16" height="10" fill="#4169E1" />
        <rect x="34" y="10" width="16" height="10" fill="#4169E1" />
        {/* Antenne / Antenna */}
        <rect x="24" y="2" width="2" height="6" fill="#808080" />
        <circle cx="25" cy="2" r="2" fill="#FFD700" />
        {/* Blinkende Lichter / Blinking lights */}
        <circle cx="20" cy="22" r="1.5" fill="#FF0000" style={{ animation: 'blink 1s ease-in-out infinite' }} />
        <circle cx="30" cy="22" r="1.5" fill="#00FF00" style={{ animation: 'blink 1.5s ease-in-out infinite' }} />
      </svg>

      {/* Planet mit Ring / Planet with ring */}
      <div style={{
        position: 'absolute',
        bottom: 100,
        right: 100,
        width: 120,
        height: 120,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #4169E1, #1a1a8e)',
        boxShadow: 'inset -20px -20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(65,105,225,0.3)',
      }}>
        {/* Ring */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '-30%',
          width: '160%',
          height: '30px',
          borderRadius: '50%',
          border: '4px solid rgba(200,200,255,0.4)',
          transform: 'rotateX(70deg)',
        }} />
      </div>

      {/* Kleiner roter Planet / Small red planet */}
      <div style={{
        position: 'absolute',
        top: 200,
        left: 80,
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #CD5C5C, #8B0000)',
        boxShadow: 'inset -8px -8px 15px rgba(0,0,0,0.5)',
      }} />

      {/* Mond / Moon */}
      <div style={{ position: 'absolute', top: 50, left: 100 }}>
        <Moon size={40} />
      </div>

      {/* UFO */}
      <svg
        style={{
          position: 'absolute',
          top: 300,
          left: 400,
          animation: 'float 4s ease-in-out infinite',
        }}
        width="50"
        height="25"
      >
        <ellipse cx="25" cy="18" rx="24" ry="8" fill="#808080" />
        <ellipse cx="25" cy="12" rx="15" ry="10" fill="#C0C0C0" />
        <ellipse cx="25" cy="8" rx="10" ry="6" fill="rgba(135,206,250,0.5)" />
        {/* Lichter / Lights */}
        {[...Array(5)].map((_, i) => (
          <circle key={i} cx={8 + i * 9} cy="20" r="2" fill="#FFD700" style={{ animation: `pulse ${0.5 + i * 0.2}s ease-in-out infinite` }} />
        ))}
      </svg>

      {/* Entferne Galaxie / Distant galaxy */}
      <div style={{
        position: 'absolute',
        top: 60,
        right: 350,
        width: 60,
        height: 30,
        background: 'radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, rgba(200,200,255,0.1) 40%, transparent 70%)',
        borderRadius: '50%',
        transform: 'rotate(-20deg)',
      }} />

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

      {/* Wolken bei Tag / Clouds during day */}
      {!isNight && (
        <>
          <div style={{ position: 'absolute', top: 30, left: 80, animation: 'driftSlow 30s linear infinite' }}><Cloud size={55} /></div>
          <div style={{ position: 'absolute', top: 50, left: 350, animation: 'driftSlow 35s linear infinite', animationDelay: '5s' }}><Cloud size={45} /></div>
        </>
      )}

      {/* Sterne bei Nacht / Stars at night */}
      {isNight && [...Array(30)].map((_, i) => (
        <div
          key={`star-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 40}%`,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: Math.random() * 0.5 + 0.3,
            animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Hintergrund-Gebäude / Background buildings */}
      <div style={{
        position: 'absolute',
        bottom: 150,
        left: 0,
        right: 0,
        height: 120,
        display: 'flex',
        gap: 5,
      }}>
        {[...Array(12)].map((_, i) => (
          <div
            key={`bg-building-${i}`}
            style={{
              width: 50 + Math.random() * 30,
              height: 60 + Math.random() * 60,
              backgroundColor: isNight ? '#1a1a2a' : '#a0a0a0',
              marginTop: 'auto',
            }}
          >
            {/* Fenster / Windows */}
            {[...Array(Math.floor(2 + Math.random() * 3))].map((_, j) => (
              <div
                key={j}
                style={{
                  display: 'flex',
                  gap: 4,
                  padding: '4px',
                  justifyContent: 'center',
                }}
              >
                {[...Array(2)].map((_, k) => (
                  <div
                    key={k}
                    style={{
                      width: 8,
                      height: 10,
                      backgroundColor: isNight ? (Math.random() > 0.5 ? '#FFD700' : '#333') : '#87CEEB',
                      animation: isNight && Math.random() > 0.7 ? 'flicker 3s ease-in-out infinite' : 'none',
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Gebäude / Buildings */}
      <div style={{ position: 'absolute', bottom: 60, left: 30 }}><House size={100} /></div>
      <div style={{ position: 'absolute', bottom: 60, left: 180 }}><School size={120} /></div>
      <div style={{ position: 'absolute', bottom: 60, right: 30 }}><Hospital size={110} /></div>

      {/* Tauben / Pigeons */}
      {!isNight && [...Array(4)].map((_, i) => (
        <svg
          key={`pigeon-${i}`}
          style={{
            position: 'absolute',
            top: 100 + i * 30,
            left: 150 + i * 150,
            animation: `flutter ${3 + i * 0.5}s ease-in-out infinite`,
          }}
          width="20"
          height="15"
        >
          <ellipse cx="10" cy="10" rx="8" ry="5" fill="#808080" />
          <circle cx="15" cy="8" r="4" fill="#808080" />
          <circle cx="17" cy="7" r="1" fill="black" />
          <polygon points="18,8 22,7 18,9" fill="#FFA500" />
          <path d="M5 10 Q0 5 5 8" fill="#707070" />
        </svg>
      ))}

      {/* Straßenschilder / Street signs */}
      <svg style={{ position: 'absolute', bottom: 60, left: 320 }} width="30" height="80">
        <rect x="12" y="0" width="6" height="80" fill="#333" />
        <rect x="0" y="5" width="30" height="20" fill="#DC143C" rx="2" />
        <text x="15" y="18" fill="white" fontSize="8" textAnchor="middle">STOP</text>
      </svg>

      {/* Hydrant / Fire hydrant */}
      <svg style={{ position: 'absolute', bottom: 60, left: 450 }} width="20" height="35">
        <rect x="5" y="10" width="10" height="25" fill="#DC143C" rx="2" />
        <rect x="0" y="12" width="20" height="6" fill="#DC143C" rx="1" />
        <ellipse cx="10" cy="8" rx="6" ry="4" fill="#DC143C" />
        <circle cx="10" cy="8" r="3" fill="#8B0000" />
      </svg>

      {/* Mülleimer / Trash can */}
      <svg style={{ position: 'absolute', bottom: 60, right: 300 }} width="25" height="35">
        <rect x="3" y="5" width="19" height="30" fill="#228B22" rx="2" />
        <rect x="0" y="0" width="25" height="8" fill="#2E8B57" rx="2" />
      </svg>

      {/* Parkbank / Park bench */}
      <svg style={{ position: 'absolute', bottom: 60, right: 180 }} width="50" height="30">
        <rect x="5" y="15" width="40" height="4" fill="#8B4513" />
        <rect x="5" y="22" width="40" height="4" fill="#8B4513" />
        <rect x="8" y="20" width="4" height="10" fill="#5a3a1a" />
        <rect x="38" y="20" width="4" height="10" fill="#5a3a1a" />
      </svg>

      {/* Straßen-Lichter / Street lights */}
      {[140, 400, 650].map((x, i) => (
        <div key={`lamp-${i}`} style={{
          position: 'absolute',
          bottom: 60,
          left: x,
          width: 8,
          height: 100,
          backgroundColor: '#333',
        }}>
          <div style={{
            position: 'absolute',
            top: -15,
            left: -12,
            width: 35,
            height: 15,
            backgroundColor: '#444',
            borderRadius: '0 0 10px 10px',
          }} />
          {isNight && (
            <div style={{
              position: 'absolute',
              top: -5,
              left: -8,
              width: 25,
              height: 40,
              background: 'radial-gradient(ellipse at top, rgba(255,215,0,0.6), transparent 70%)',
              animation: 'flicker 4s ease-in-out infinite',
            }} />
          )}
        </div>
      ))}

      {/* Autos auf der Straße / Cars on the road */}
      {[
        { x: 100, color: '#DC143C', flip: false },
        { x: 500, color: '#4169E1', flip: true },
      ].map((car, i) => (
        <svg
          key={`car-${i}`}
          style={{
            position: 'absolute',
            bottom: 15,
            left: car.x,
            transform: car.flip ? 'scaleX(-1)' : 'none',
          }}
          width="70"
          height="35"
        >
          <rect x="5" y="15" width="60" height="15" rx="3" fill={car.color} />
          <rect x="15" y="5" width="35" height="15" rx="5" fill={car.color} />
          <rect x="20" y="8" width="12" height="10" fill="rgba(135,206,250,0.7)" rx="2" />
          <rect x="35" y="8" width="12" height="10" fill="rgba(135,206,250,0.7)" rx="2" />
          <circle cx="18" cy="30" r="7" fill="#333" />
          <circle cx="18" cy="30" r="4" fill="#666" />
          <circle cx="52" cy="30" r="7" fill="#333" />
          <circle cx="52" cy="30" r="4" fill="#666" />
          {/* Scheinwerfer / Headlights */}
          <rect x="62" y="18" width="5" height="4" fill={isNight ? '#FFD700' : '#FFF8DC'} rx="1" />
          {/* Rücklicht / Taillight */}
          <rect x="3" y="18" width="4" height="4" fill="#8B0000" rx="1" />
        </svg>
      ))}

      {/* Fußgänger / Pedestrians */}
      {[
        { x: 250, color: '#4169E1' },
        { x: 380, color: '#FF69B4' },
      ].map((ped, i) => (
        <svg
          key={`pedestrian-${i}`}
          style={{
            position: 'absolute',
            bottom: 60,
            left: ped.x,
          }}
          width="20"
          height="40"
        >
          <circle cx="10" cy="6" r="5" fill="#DEB887" />
          <rect x="6" y="11" width="8" height="18" fill={ped.color} rx="2" />
          <rect x="4" y="29" width="5" height="10" fill="#333" />
          <rect x="11" y="29" width="5" height="10" fill="#333" />
        </svg>
      ))}

      {/* Bürgersteig / Sidewalk */}
      <div style={{
        position: 'absolute',
        bottom: 55,
        left: 0,
        right: 0,
        height: 25,
        backgroundColor: '#a0a0a0',
        backgroundImage: 'repeating-linear-gradient(90deg, #909090 0px, #909090 1px, transparent 1px, transparent 40px)',
      }} />

      {/* Straße / Road */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
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
        {/* Seitenstreifen / Side lines */}
        <div style={{
          position: 'absolute',
          top: 5,
          left: 0,
          right: 0,
          height: 2,
          backgroundColor: 'white',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 5,
          left: 0,
          right: 0,
          height: 2,
          backgroundColor: 'white',
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
      {/* Sonne mit Strahlen / Sun with rays */}
      <div style={{ position: 'absolute', top: 20, right: 50 }}>
        <div style={{
          position: 'absolute',
          top: -15,
          left: -15,
          width: 90,
          height: 90,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)',
        }} />
        <Sun size={60} />
      </div>

      {/* Animierte Wolken / Animated clouds */}
      <div style={{ position: 'absolute', top: 30, left: 80, animation: 'driftSlow 40s linear infinite' }}><Cloud size={60} /></div>
      <div style={{ position: 'absolute', top: 50, left: 250, animation: 'driftSlow 45s linear infinite', animationDelay: '10s' }}><Cloud size={50} /></div>
      <div style={{ position: 'absolute', top: 35, right: 150, animation: 'driftSlow 35s linear infinite', animationDelay: '5s' }}><Cloud size={45} /></div>

      {/* Fliegende Vögel / Flying birds */}
      {[...Array(4)].map((_, i) => (
        <svg
          key={`bird-${i}`}
          style={{
            position: 'absolute',
            top: 60 + i * 25,
            left: 150 + i * 150,
            animation: `drift ${25 + i * 5}s linear infinite`,
          }}
          width="20"
          height="10"
        >
          <path d="M10 5 Q5 0 0 5 M10 5 Q15 0 20 5" stroke="#333" strokeWidth="1.5" fill="none" />
        </svg>
      ))}

      {/* Hintergrund-Hügel / Background hills */}
      <div style={{ position: 'absolute', bottom: 120, right: 0 }}><Hill size={200} color="#8fbc8f" /></div>
      <div style={{ position: 'absolute', bottom: 100, left: 200 }}><Hill size={150} color="#90EE90" /></div>
      <div style={{ position: 'absolute', bottom: 130, left: -50 }}><Hill size={180} color="#7CCD7C" /></div>

      {/* Windmühle / Windmill */}
      <svg style={{ position: 'absolute', bottom: 80, right: 500 }} width="80" height="140">
        {/* Turm / Tower */}
        <polygon points="30,140 50,140 45,50 35,50" fill="#8B4513" />
        <polygon points="32,140 48,140 44,60 36,60" fill="#A0522D" />
        {/* Dach / Roof */}
        <polygon points="30,50 50,50 40,30" fill="#654321" />
        {/* Fenster / Windows */}
        <rect x="37" y="80" width="6" height="8" fill="#FFD700" />
        <rect x="37" y="100" width="6" height="8" fill="#87CEEB" />
        {/* Rotierende Flügel / Rotating blades */}
        <g style={{ transformOrigin: '40px 50px', animation: 'spin 8s linear infinite' }}>
          <rect x="38" y="5" width="4" height="45" rx="2" fill="#DEB887" />
          <rect x="38" y="50" width="4" height="45" rx="2" fill="#DEB887" />
          <rect x="-5" y="48" width="45" height="4" rx="2" fill="#DEB887" />
          <rect x="40" y="48" width="45" height="4" rx="2" fill="#DEB887" />
          <circle cx="40" cy="50" r="6" fill="#8B4513" />
        </g>
      </svg>

      {/* Hintergrund-Bäume / Background trees */}
      <div style={{ position: 'absolute', bottom: 150, left: 300 }}><Tree size={50} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 145, right: 100 }}><Tree size={45} color="#2E8B57" /></div>
      <div style={{ position: 'absolute', bottom: 155, left: 450, opacity: 0.7 }}><Tree size={40} color="#228B22" /></div>

      {/* Scheune / Barn */}
      <div style={{ position: 'absolute', bottom: 60, left: 30 }}><Barn size={160} /></div>

      {/* Silo neben Scheune / Silo next to barn */}
      <svg style={{ position: 'absolute', bottom: 60, left: 180 }} width="40" height="100">
        <rect x="5" y="20" width="30" height="80" fill="#708090" />
        <ellipse cx="20" cy="20" rx="15" ry="8" fill="#778899" />
        <ellipse cx="20" cy="100" rx="15" ry="5" fill="#5F6A6A" />
        <rect x="12" y="60" width="6" height="8" fill="#4A5568" />
      </svg>

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

      {/* Kuh / Cow */}
      <svg style={{ position: 'absolute', bottom: 58, left: 350 }} width="50" height="40">
        <ellipse cx="25" cy="25" rx="18" ry="12" fill="#F5F5F5" />
        <ellipse cx="25" cy="25" rx="15" ry="10" fill="#F5F5F5" />
        {/* Flecken / Spots */}
        <ellipse cx="20" cy="22" rx="5" ry="4" fill="#333" />
        <ellipse cx="32" cy="28" rx="4" ry="3" fill="#333" />
        {/* Kopf / Head */}
        <ellipse cx="8" cy="20" rx="8" ry="7" fill="#F5F5F5" />
        <circle cx="4" cy="18" r="2" fill="#333" />
        <ellipse cx="8" cy="24" rx="4" ry="2" fill="#FFB6C1" />
        {/* Ohren / Ears */}
        <ellipse cx="2" cy="14" rx="3" ry="2" fill="#FFB6C1" />
        <ellipse cx="14" cy="14" rx="3" ry="2" fill="#FFB6C1" />
        {/* Beine / Legs */}
        <rect x="15" y="33" width="3" height="8" fill="#F5F5F5" />
        <rect x="22" y="33" width="3" height="8" fill="#F5F5F5" />
        <rect x="29" y="33" width="3" height="8" fill="#F5F5F5" />
        <rect x="36" y="33" width="3" height="8" fill="#F5F5F5" />
        {/* Schwanz / Tail */}
        <path d="M43 22 Q50 20 48 28" stroke="#333" strokeWidth="2" fill="none" />
      </svg>

      {/* Schafe / Sheep */}
      <svg style={{ position: 'absolute', bottom: 55, right: 130 }} width="35" height="30">
        <ellipse cx="17" cy="18" rx="14" ry="10" fill="#F8F8F8" />
        {/* Wollige Textur / Woolly texture */}
        <circle cx="10" cy="14" r="5" fill="#FAFAFA" />
        <circle cx="18" cy="12" r="5" fill="#FAFAFA" />
        <circle cx="25" cy="15" r="5" fill="#FAFAFA" />
        <circle cx="12" cy="22" r="4" fill="#FAFAFA" />
        <circle cx="22" cy="22" r="4" fill="#FAFAFA" />
        {/* Kopf / Head */}
        <ellipse cx="5" cy="15" rx="5" ry="4" fill="#333" />
        <circle cx="3" cy="14" r="1" fill="white" />
        {/* Beine / Legs */}
        <rect x="10" y="25" width="2" height="6" fill="#333" />
        <rect x="15" y="25" width="2" height="6" fill="#333" />
        <rect x="20" y="25" width="2" height="6" fill="#333" />
        <rect x="25" y="25" width="2" height="6" fill="#333" />
      </svg>

      {/* Schwein / Pig */}
      <svg style={{ position: 'absolute', bottom: 52, left: 450 }} width="40" height="30">
        <ellipse cx="20" cy="18" rx="15" ry="10" fill="#FFB6C1" />
        {/* Kopf / Head */}
        <ellipse cx="5" cy="15" rx="7" ry="6" fill="#FFB6C1" />
        <ellipse cx="3" cy="17" rx="4" ry="3" fill="#FF69B4" />
        <circle cx="2" cy="16" r="1" fill="#333" />
        <circle cx="4" cy="16" r="1" fill="#333" />
        <circle cx="5" cy="12" r="1.5" fill="#333" />
        {/* Ohren / Ears */}
        <polygon points="1,8 6,8 3,3" fill="#FFB6C1" />
        <polygon points="8,8 13,8 10,3" fill="#FFB6C1" />
        {/* Beine / Legs */}
        <rect x="10" y="25" width="3" height="5" fill="#FFB6C1" />
        <rect x="17" y="25" width="3" height="5" fill="#FFB6C1" />
        <rect x="24" y="25" width="3" height="5" fill="#FFB6C1" />
        <rect x="31" y="25" width="3" height="5" fill="#FFB6C1" />
        {/* Schwanz / Curly tail */}
        <path d="M35 15 Q40 12 38 18 Q42 15 40 20" stroke="#FFB6C1" strokeWidth="2" fill="none" />
      </svg>

      {/* Hühner / Chickens */}
      {[{ x: 280, y: 58 }, { x: 300, y: 55 }, { x: 320, y: 60 }].map((pos, i) => (
        <svg key={`chicken-${i}`} style={{ position: 'absolute', bottom: pos.y, left: pos.x, animation: `bob ${2 + i * 0.3}s ease-in-out infinite` }} width="18" height="18">
          <ellipse cx="9" cy="12" rx="7" ry="5" fill="#D2691E" />
          <circle cx="6" cy="8" r="4" fill="#D2691E" />
          <circle cx="4" cy="7" r="1" fill="#333" />
          <polygon points="2,9 -2,9 2,11" fill="#FF6347" />
          <polygon points="6,5 8,2 10,5" fill="#FF6347" />
          <path d="M12 14 L15 18" stroke="#FF6347" strokeWidth="1" />
          <path d="M7 14 L5 18" stroke="#FF6347" strokeWidth="1" />
        </svg>
      ))}

      {/* Pferd / Horse */}
      <svg style={{ position: 'absolute', bottom: 58, left: 550 }} width="55" height="50">
        <ellipse cx="28" cy="30" rx="20" ry="12" fill="#8B4513" />
        {/* Kopf und Hals / Head and neck */}
        <polygon points="8,35 5,15 15,20 18,30" fill="#8B4513" />
        <ellipse cx="6" cy="15" rx="6" ry="5" fill="#8B4513" />
        <circle cx="4" cy="13" r="1.5" fill="#333" />
        {/* Ohren / Ears */}
        <polygon points="3,8 6,8 4,3" fill="#8B4513" />
        <polygon points="8,8 11,8 9,3" fill="#8B4513" />
        {/* Mähne / Mane */}
        <path d="M8 10 Q12 15 10 20 Q14 18 12 25" stroke="#2F1810" strokeWidth="3" fill="none" />
        {/* Beine / Legs */}
        <rect x="15" y="38" width="4" height="12" fill="#8B4513" />
        <rect x="24" y="38" width="4" height="12" fill="#8B4513" />
        <rect x="33" y="38" width="4" height="12" fill="#8B4513" />
        <rect x="42" y="38" width="4" height="12" fill="#8B4513" />
        {/* Schwanz / Tail */}
        <path d="M48 28 Q58 25 55 35 Q60 30 58 40" stroke="#2F1810" strokeWidth="3" fill="none" />
      </svg>

      {/* Zaun / Fence */}
      <div style={{ position: 'absolute', bottom: 55, left: 230 }}><Fence width={100} height={35} color="#8B4513" /></div>
      <div style={{ position: 'absolute', bottom: 55, left: 500 }}><Fence width={80} height={30} color="#A0522D" /></div>

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
      <div style={{
        position: 'absolute',
        bottom: 55,
        right: 450,
        width: 38,
        height: 28,
        backgroundColor: '#DAA520',
        borderRadius: '50%',
      }} />

      {/* Wassertrog / Water trough */}
      <svg style={{ position: 'absolute', bottom: 48, left: 400 }} width="35" height="20">
        <rect x="2" y="5" width="30" height="15" rx="3" fill="#708090" />
        <rect x="5" y="8" width="24" height="10" rx="2" fill="#87CEEB" />
      </svg>

      {/* Büsche / Bushes */}
      <div style={{ position: 'absolute', bottom: 50, left: 180 }}><Bush size={35} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 48, right: 350 }}><Bush size={40} color="#2E8B57" /></div>
      <div style={{ position: 'absolute', bottom: 52, right: 80 }}><Bush size={30} color="#228B22" /></div>

      {/* Blumen mit Animation / Animated flowers */}
      <div style={{ position: 'absolute', bottom: 55, left: 220, animation: 'swayGentle 3s ease-in-out infinite' }}><Flower size={18} color="#FF69B4" /></div>
      <div style={{ position: 'absolute', bottom: 52, left: 330, animation: 'swayGentle 3.5s ease-in-out infinite', animationDelay: '0.5s' }}><Flower size={16} color="#FFD700" /></div>
      <div style={{ position: 'absolute', bottom: 58, right: 300, animation: 'swayGentle 4s ease-in-out infinite', animationDelay: '1s' }}><Flower size={20} color="#FF1493" /></div>
      <div style={{ position: 'absolute', bottom: 54, right: 450, animation: 'swayGentle 3s ease-in-out infinite' }}><Flower size={15} color="#87CEEB" /></div>

      {/* Schmetterlinge / Butterflies */}
      {[...Array(6)].map((_, i) => (
        <svg
          key={`butterfly-${i}`}
          style={{
            position: 'absolute',
            top: 150 + i * 30,
            left: 200 + i * 100,
            animation: `flutter ${3 + i * 0.4}s ease-in-out infinite`,
          }}
          width="20"
          height="16"
        >
          <ellipse cx="10" cy="8" rx="2" ry="5" fill="#333" />
          <ellipse cx="5" cy="6" rx="4" ry="5" fill={['#FF69B4', '#FFD700', '#87CEEB', '#FF6347', '#9370DB', '#32CD32'][i]} opacity="0.8" />
          <ellipse cx="15" cy="6" rx="4" ry="5" fill={['#FF69B4', '#FFD700', '#87CEEB', '#FF6347', '#9370DB', '#32CD32'][i]} opacity="0.8" />
        </svg>
      ))}

      {/* Bienen / Bees */}
      {[...Array(4)].map((_, i) => (
        <svg
          key={`bee-${i}`}
          style={{
            position: 'absolute',
            top: 180 + i * 40,
            left: 250 + i * 120,
            animation: `float ${2 + i * 0.3}s ease-in-out infinite`,
          }}
          width="14"
          height="10"
        >
          <ellipse cx="7" cy="5" rx="5" ry="4" fill="#FFD700" />
          <rect x="4" y="3" width="2" height="4" fill="#333" />
          <rect x="8" y="3" width="2" height="4" fill="#333" />
          <ellipse cx="4" cy="3" rx="3" ry="2" fill="rgba(255,255,255,0.6)" />
          <ellipse cx="10" cy="3" rx="3" ry="2" fill="rgba(255,255,255,0.6)" />
        </svg>
      ))}

      {/* Steine / Rocks */}
      <div style={{ position: 'absolute', bottom: 40, left: 350 }}><Rock size={20} color="#808080" /></div>
      <div style={{ position: 'absolute', bottom: 38, right: 500 }}><Rock size={15} color="#696969" /></div>
      <div style={{ position: 'absolute', bottom: 42, left: 600 }}><Rock size={18} color="#708090" /></div>

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

      {/* Sonne durch Wolken / Sun through clouds */}
      <div style={{ position: 'absolute', top: 30, right: 80 }}>
        <div style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,200,0.8) 0%, rgba(255,255,200,0.3) 50%, transparent 70%)',
        }} />
      </div>

      {/* Wolken / Clouds */}
      <div style={{ position: 'absolute', top: 40, left: 50, animation: 'driftSlow 35s linear infinite' }}><Cloud size={70} /></div>
      <div style={{ position: 'absolute', top: 60, left: 300, animation: 'driftSlow 40s linear infinite', animationDelay: '10s' }}><Cloud size={55} /></div>

      {/* Berge / Mountains - more layers */}
      <div style={{ position: 'absolute', bottom: 120, left: -50, opacity: 0.5 }}><Mountain size={250} color="#E0E8F0" /></div>
      <div style={{ position: 'absolute', bottom: 110, right: -30, opacity: 0.6 }}><Mountain size={220} color="#D8E4F0" /></div>
      <div style={{ position: 'absolute', bottom: 80, left: 0 }}><Mountain size={200} color="#F5F5F5" /></div>
      <div style={{ position: 'absolute', bottom: 80, right: 0 }}><Mountain size={180} color="#DCDCDC" /></div>
      <div style={{ position: 'absolute', bottom: 90, left: '40%' }}><Mountain size={160} color="#E8E8E8" /></div>

      {/* Hintergrund-Bäume / Background trees */}
      <div style={{ position: 'absolute', bottom: 100, left: 50, opacity: 0.5 }}><PineTree size={60} color="#E0E8F0" /></div>
      <div style={{ position: 'absolute', bottom: 95, left: 180, opacity: 0.6 }}><PineTree size={55} color="#E0E0E0" /></div>
      <div style={{ position: 'absolute', bottom: 100, right: 200, opacity: 0.5 }}><PineTree size={50} color="#D8D8D8" /></div>

      {/* Schnee-Bäume / Snow trees - more variety */}
      <div style={{ position: 'absolute', bottom: 40, left: 30 }}><PineTree size={110} color="#F5F5F5" /></div>
      <div style={{ position: 'absolute', bottom: 40, left: 100 }}><Tree size={100} color="#F5F5F5" /></div>
      <div style={{ position: 'absolute', bottom: 45, left: 220 }}><PineTree size={85} color="#E8E8E8" /></div>
      <div style={{ position: 'absolute', bottom: 40, right: 40 }}><PineTree size={105} color="#F0F0F0" /></div>
      <div style={{ position: 'absolute', bottom: 40, right: 120 }}><Tree size={90} color="#DCDCDC" /></div>
      <div style={{ position: 'absolute', bottom: 45, right: 250 }}><PineTree size={80} color="#E8E8E8" /></div>

      {/* Eiszapfen an Bäumen / Icicles on trees */}
      {[100, 220, 680].map((x, i) => (
        <svg key={`icicle-${i}`} style={{ position: 'absolute', bottom: 100 + i * 5, left: x }} width="30" height="40">
          {[...Array(5)].map((_, j) => (
            <polygon
              key={j}
              points={`${5 + j * 5},0 ${3 + j * 5},${15 + Math.random() * 20} ${7 + j * 5},0`}
              fill="rgba(200,230,255,0.8)"
              style={{ animation: `twinkle ${2 + j * 0.5}s ease-in-out infinite` }}
            />
          ))}
        </svg>
      ))}

      {/* Gefrorener Teich / Frozen pond */}
      <svg style={{ position: 'absolute', bottom: 35, left: '35%' }} width="120" height="50">
        <ellipse cx="60" cy="25" rx="58" ry="22" fill="rgba(135,206,250,0.6)" />
        <ellipse cx="60" cy="25" rx="48" ry="18" fill="rgba(200,230,255,0.4)" />
        {/* Risse im Eis / Cracks in ice */}
        <path d="M30 20 L50 30 L70 25 L90 28" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none" />
        <path d="M40 15 L55 22" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
      </svg>

      {/* Schneemann / Snowman */}
      <svg style={{ position: 'absolute', bottom: 45, left: 320 }} width="50" height="80">
        {/* Körper / Body */}
        <circle cx="25" cy="65" r="18" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1" />
        <circle cx="25" cy="40" r="14" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1" />
        <circle cx="25" cy="18" r="10" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1" />
        {/* Augen / Eyes */}
        <circle cx="22" cy="15" r="2" fill="#333" />
        <circle cx="28" cy="15" r="2" fill="#333" />
        {/* Nase / Nose */}
        <polygon points="25,18 35,20 25,22" fill="#FFA500" />
        {/* Knöpfe / Buttons */}
        <circle cx="25" cy="35" r="2" fill="#333" />
        <circle cx="25" cy="42" r="2" fill="#333" />
        <circle cx="25" cy="49" r="2" fill="#333" />
        {/* Hut / Hat */}
        <rect x="15" y="5" width="20" height="5" fill="#333" />
        <rect x="18" y="0" width="14" height="8" fill="#333" />
        {/* Arme / Arms */}
        <path d="M10 40 L-5 30" stroke="#8B4513" strokeWidth="3" />
        <path d="M40 40 L55 30" stroke="#8B4513" strokeWidth="3" />
        {/* Schal / Scarf */}
        <path d="M15 28 Q25 32 35 28" stroke="#DC143C" strokeWidth="4" fill="none" />
        <path d="M35 28 L38 45" stroke="#DC143C" strokeWidth="3" fill="none" />
      </svg>

      {/* Zweiter kleiner Schneemann / Second small snowman */}
      <svg style={{ position: 'absolute', bottom: 42, left: 380 }} width="30" height="50">
        <circle cx="15" cy="40" r="12" fill="#FAFAFA" />
        <circle cx="15" cy="22" r="9" fill="#FAFAFA" />
        <circle cx="12" cy="20" r="1.5" fill="#333" />
        <circle cx="18" cy="20" r="1.5" fill="#333" />
        <polygon points="15,23 22,24 15,25" fill="#FFA500" />
      </svg>

      {/* Tiere / Animals */}
      {/* Hase / Rabbit */}
      <svg style={{ position: 'absolute', bottom: 48, left: 500 }} width="25" height="25">
        <ellipse cx="12" cy="18" rx="10" ry="8" fill="#E8E8E8" />
        <circle cx="10" cy="10" r="6" fill="#E8E8E8" />
        <ellipse cx="6" cy="3" rx="3" ry="8" fill="#E8E8E8" />
        <ellipse cx="14" cy="3" rx="3" ry="8" fill="#E8E8E8" />
        <circle cx="8" cy="9" r="1" fill="#333" />
        <circle cx="12" cy="9" r="1" fill="#333" />
        <ellipse cx="10" cy="12" rx="2" ry="1" fill="#FFB6C1" />
      </svg>

      {/* Roter Vogel / Red bird */}
      <svg style={{ position: 'absolute', bottom: 120, left: 150, animation: 'bob 3s ease-in-out infinite' }} width="20" height="18">
        <ellipse cx="10" cy="10" rx="8" ry="6" fill="#DC143C" />
        <circle cx="14" cy="8" r="4" fill="#DC143C" />
        <circle cx="16" cy="7" r="1" fill="#333" />
        <polygon points="18,8 22,8 18,10" fill="#FFA500" />
        <path d="M6 12 L2 16" stroke="#333" strokeWidth="1" />
        <path d="M8 12 L6 16" stroke="#333" strokeWidth="1" />
      </svg>

      {/* Schneehügel / Snow mounds */}
      <div style={{
        position: 'absolute',
        bottom: 45,
        left: 60,
        width: 60,
        height: 25,
        backgroundColor: '#F8F8F8',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 48,
        right: 350,
        width: 50,
        height: 20,
        backgroundColor: '#F0F0F0',
        borderRadius: '50%',
      }} />

      {/* Steine unter Schnee / Rocks under snow */}
      <div style={{ position: 'absolute', bottom: 40, left: 280 }}><Rock size={25} color="#D8D8D8" /></div>
      <div style={{ position: 'absolute', bottom: 38, right: 180 }}><Rock size={20} color="#E0E0E0" /></div>

      {/* Schneeflocken-Partikel (zusätzlich) / Extra snowflake particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`flake-${i}`}
          style={{
            position: 'absolute',
            left: `${10 + i * 9}%`,
            top: `${Math.random() * 60}%`,
            width: 6,
            height: 6,
            opacity: 0.6,
            animation: `floatSlow ${5 + Math.random() * 5}s ease-in-out infinite`,
          }}
        >
          ❄
        </div>
      ))}

      {/* Schnee-Boden mit Textur / Snow ground with texture */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 65,
        backgroundColor: '#F5F5F5',
        borderRadius: '50% 50% 0 0 / 30px 30px 0 0',
        backgroundImage: 'radial-gradient(circle at 20% 60%, #FFFFFF 0%, transparent 30%), radial-gradient(circle at 70% 40%, #FAFAFA 0%, transparent 25%)',
      }} />

      {children}
    </div>
  );
}

// ----- STRAND-SZENEN / BEACH SCENES -----

export function SunnyBeach({ width = 800, height = 500, children, timeOfDay = 'day' }: SceneProps) {
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
      background: `linear-gradient(to bottom, ${skyColors[timeOfDay]} 0%, ${skyColors[timeOfDay]} 50%, #00CED1 55%, #006994 100%)`,
      overflow: 'hidden',
    }}>
      {/* Sonne/Mond mit Schein / Sun/Moon with glow */}
      <div style={{ position: 'absolute', top: 30, right: 80 }}>
        {timeOfDay === 'night' ? (
          <>
            <div style={{
              position: 'absolute', top: -15, left: -15, width: 80, height: 80,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(200,200,255,0.3) 0%, transparent 70%)',
            }} />
            <Moon size={50} />
          </>
        ) : (
          <>
            <div style={{
              position: 'absolute', top: -20, left: -20, width: 110, height: 110,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${timeOfDay === 'sunset' ? 'rgba(255,100,0,0.4)' : 'rgba(255,215,0,0.3)'} 0%, transparent 70%)`,
            }} />
            <Sun size={70} color={timeOfDay === 'sunset' ? '#FF4500' : '#FFD700'} />
          </>
        )}
      </div>

      {/* Sterne bei Nacht / Stars at night */}
      {timeOfDay === 'night' && [...Array(30)].map((_, i) => (
        <div
          key={`star-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 45}%`,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            backgroundColor: 'white',
            borderRadius: '50%',
            animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Animierte Wolken / Animated clouds */}
      {timeOfDay !== 'night' && (
        <>
          <div style={{ position: 'absolute', top: 40, left: 60, animation: 'driftSlow 40s linear infinite' }}><Cloud size={70} /></div>
          <div style={{ position: 'absolute', top: 60, left: 200, animation: 'driftSlow 45s linear infinite', animationDelay: '15s' }}><Cloud size={50} /></div>
          <div style={{ position: 'absolute', top: 35, right: 200, animation: 'driftSlow 35s linear infinite', animationDelay: '5s' }}><Cloud size={60} /></div>
        </>
      )}

      {/* Fliegende Möwen / Flying seagulls */}
      {[...Array(5)].map((_, i) => (
        <svg
          key={`seagull-${i}`}
          style={{
            position: 'absolute',
            top: 80 + i * 30,
            left: 100 + i * 140,
            animation: `drift ${20 + i * 4}s linear infinite, bob ${3 + i * 0.5}s ease-in-out infinite`,
          }}
          width="30"
          height="15"
        >
          <path d="M15 8 Q8 2 0 8" stroke={timeOfDay === 'night' ? '#666' : '#fff'} strokeWidth="2" fill="none" />
          <path d="M15 8 Q22 2 30 8" stroke={timeOfDay === 'night' ? '#666' : '#fff'} strokeWidth="2" fill="none" />
          <circle cx="15" cy="9" r="2" fill={timeOfDay === 'night' ? '#666' : '#fff'} />
        </svg>
      ))}

      {/* Entferntes Segelboot / Distant sailboat */}
      <svg style={{ position: 'absolute', top: '52%', left: 150, animation: 'bob 5s ease-in-out infinite' }} width="40" height="35">
        <polygon points="20,0 20,25 5,25" fill="#fff" />
        <polygon points="22,5 22,25 35,25" fill="#FFD700" />
        <rect x="10" y="25" width="20" height="8" rx="2" fill="#8B4513" />
      </svg>

      {/* Animiertes Meer mit Wellen / Animated ocean with waves */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-5%',
        right: '-5%',
        height: '12%',
        background: 'linear-gradient(to bottom, #00CED1, #20B2AA)',
        borderRadius: '100% 100% 0 0 / 50% 50% 0 0',
        animation: 'wave 4s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        top: '53%',
        left: '-5%',
        right: '-5%',
        height: '8%',
        background: 'linear-gradient(to bottom, #20B2AA, #008B8B)',
        borderRadius: '100% 100% 0 0 / 60% 60% 0 0',
        animation: 'wave 5s ease-in-out infinite',
        animationDelay: '0.5s',
      }} />

      {/* Schaumkronen / Wave foam */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`foam-${i}`}
          style={{
            position: 'absolute',
            top: '56%',
            left: `${5 + i * 15}%`,
            width: 40 + Math.random() * 30,
            height: 8,
            backgroundColor: 'rgba(255,255,255,0.6)',
            borderRadius: '50%',
            animation: `shimmer ${2 + Math.random()}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Palmen mit Animation / Palm trees with animation */}
      <svg style={{ position: 'absolute', bottom: 60, left: 30 }} width="80" height="140" viewBox="0 0 80 140">
        <path d="M40 140 L40 60" stroke="#8B4513" strokeWidth="8" />
        <g style={{ transformOrigin: '40px 60px', animation: 'swayGentle 5s ease-in-out infinite' }}>
          <path d="M40 60 Q20 40 5 50" stroke="#228B22" strokeWidth="6" fill="none" />
          <path d="M40 60 Q60 40 75 50" stroke="#228B22" strokeWidth="6" fill="none" />
          <path d="M40 60 Q35 30 20 35" stroke="#228B22" strokeWidth="6" fill="none" />
          <path d="M40 60 Q45 30 60 35" stroke="#228B22" strokeWidth="6" fill="none" />
          <path d="M40 60 Q40 25 40 20" stroke="#228B22" strokeWidth="6" fill="none" />
        </g>
        <ellipse cx="30" cy="55" rx="8" ry="10" fill="#8B4513" />
        <ellipse cx="50" cy="55" rx="8" ry="10" fill="#8B4513" />
      </svg>

      <svg style={{ position: 'absolute', bottom: 60, right: 50 }} width="60" height="100" viewBox="0 0 60 100">
        <path d="M30 100 L30 45" stroke="#A0522D" strokeWidth="6" />
        <g style={{ transformOrigin: '30px 45px', animation: 'swayGentle 6s ease-in-out infinite', animationDelay: '1s' }}>
          <path d="M30 45 Q15 30 5 38" stroke="#2E8B57" strokeWidth="5" fill="none" />
          <path d="M30 45 Q45 30 55 38" stroke="#2E8B57" strokeWidth="5" fill="none" />
          <path d="M30 45 Q30 20 30 15" stroke="#2E8B57" strokeWidth="5" fill="none" />
        </g>
      </svg>

      {/* Strandschirm / Beach umbrella */}
      <svg style={{ position: 'absolute', bottom: 55, left: 200 }} width="60" height="80" viewBox="0 0 60 80">
        <path d="M30 80 L30 35" stroke="#8B4513" strokeWidth="4" />
        <path d="M5 35 Q30 5 55 35 Z" fill="#FF6347" />
        <path d="M5 35 Q20 10 30 35" fill="#FFD700" />
        <path d="M30 35 Q40 10 55 35" fill="#FFD700" />
      </svg>

      {/* Liegestuhl mit Handtuch / Beach chair with towel */}
      <svg style={{ position: 'absolute', bottom: 45, left: 260 }} width="50" height="40" viewBox="0 0 50 40">
        <path d="M5 35 L15 10 L45 10 L35 35" fill="#4169E1" stroke="#333" strokeWidth="2" />
        <path d="M15 10 L5 35" stroke="#8B4513" strokeWidth="3" />
        <path d="M45 10 L35 35" stroke="#8B4513" strokeWidth="3" />
      </svg>

      {/* Handtuch auf Sand / Towel on sand */}
      <svg style={{ position: 'absolute', bottom: 42, left: 320 }} width="45" height="25">
        <rect x="5" y="5" width="35" height="18" rx="2" fill="#FF69B4" />
        <rect x="5" y="8" width="35" height="3" fill="#FFB6C1" />
        <rect x="5" y="14" width="35" height="3" fill="#FFB6C1" />
      </svg>

      {/* Strandball / Beach ball */}
      <svg style={{ position: 'absolute', bottom: 65, left: 380, animation: 'bounce 2s ease-in-out infinite' }} width="30" height="30">
        <circle cx="15" cy="15" r="14" fill="#FF6347" />
        <path d="M15 1 Q8 15 15 29" fill="#FFD700" />
        <path d="M15 1 Q22 15 15 29" fill="#4169E1" />
        <ellipse cx="15" cy="15" rx="14" ry="14" fill="none" stroke="#fff" strokeWidth="1" />
        <ellipse cx="10" cy="8" rx="3" ry="2" fill="rgba(255,255,255,0.5)" />
      </svg>

      {/* Zweiter Strandball / Second beach ball */}
      <svg style={{ position: 'absolute', bottom: 48, right: 320, animation: 'float 3s ease-in-out infinite' }} width="22" height="22">
        <circle cx="11" cy="11" r="10" fill="#32CD32" />
        <path d="M11 1 Q6 11 11 21" fill="#FF69B4" />
        <path d="M11 1 Q16 11 11 21" fill="#FFD700" />
      </svg>

      {/* Krabben / Crabs */}
      {[{ x: 450, y: 48 }, { x: 550, y: 52 }, { x: 180, y: 45 }].map((pos, i) => (
        <svg
          key={`crab-${i}`}
          style={{
            position: 'absolute',
            bottom: pos.y,
            left: pos.x,
            animation: `bob ${1.5 + i * 0.3}s ease-in-out infinite`,
          }}
          width="25"
          height="18"
        >
          <ellipse cx="12" cy="12" rx="10" ry="6" fill="#FF6347" />
          {/* Augen / Eyes */}
          <circle cx="8" cy="8" r="2" fill="#333" />
          <circle cx="16" cy="8" r="2" fill="#333" />
          <circle cx="8" cy="7" r="0.5" fill="white" />
          <circle cx="16" cy="7" r="0.5" fill="white" />
          {/* Scheren / Claws */}
          <ellipse cx="2" cy="10" rx="3" ry="4" fill="#FF6347" />
          <ellipse cx="22" cy="10" rx="3" ry="4" fill="#FF6347" />
          {/* Beine / Legs */}
          <path d="M5 14 L2 18" stroke="#FF6347" strokeWidth="1.5" />
          <path d="M8 15 L6 18" stroke="#FF6347" strokeWidth="1.5" />
          <path d="M16 15 L18 18" stroke="#FF6347" strokeWidth="1.5" />
          <path d="M19 14 L22 18" stroke="#FF6347" strokeWidth="1.5" />
        </svg>
      ))}

      {/* Muscheln / Shells - more variety */}
      <svg style={{ position: 'absolute', bottom: 35, left: 150 }} width="20" height="20" viewBox="0 0 20 20">
        <path d="M10 18 Q2 12 10 2 Q18 12 10 18" fill="#FFB6C1" stroke="#FF69B4" />
        <path d="M10 2 L10 18 M6 5 Q10 10 6 16 M14 5 Q10 10 14 16" stroke="#FF69B4" strokeWidth="0.5" fill="none" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 30, right: 250 }} width="15" height="15" viewBox="0 0 15 15">
        <ellipse cx="7.5" cy="10" rx="7" ry="5" fill="#F5DEB3" stroke="#DEB887" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 38, left: 500 }} width="18" height="16">
        <path d="M9 14 Q1 10 9 2 Q17 10 9 14" fill="#E6E6FA" stroke="#DDA0DD" />
      </svg>

      {/* Seesterne / Starfish */}
      <svg style={{ position: 'absolute', bottom: 32, left: 420 }} width="25" height="25" viewBox="0 0 25 25">
        <polygon points="12.5,0 15,9 25,9 17,15 20,25 12.5,19 5,25 8,15 0,9 10,9" fill="#FF6347" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 40, right: 400 }} width="18" height="18" viewBox="0 0 18 18">
        <polygon points="9,0 11,6.5 18,6.5 12.5,11 14.5,18 9,14 3.5,18 5.5,11 0,6.5 7,6.5" fill="#FFB6C1" />
      </svg>

      {/* Sandburg mit Flagge / Sand castle with flag */}
      <svg style={{ position: 'absolute', bottom: 45, right: 180 }} width="70" height="60" viewBox="0 0 70 60">
        <rect x="10" y="30" width="50" height="30" fill="#DEB887" />
        <rect x="5" y="40" width="18" height="20" fill="#D2B48C" />
        <rect x="47" y="40" width="18" height="20" fill="#D2B48C" />
        <polygon points="14,40 5,40 14,25" fill="#D2B48C" />
        <polygon points="56,40 65,40 56,25" fill="#D2B48C" />
        <rect x="25" y="12" width="20" height="30" fill="#DEB887" />
        <polygon points="25,12 35,0 45,12" fill="#DEB887" />
        <rect x="31" y="35" width="8" height="12" fill="#8B4513" />
        {/* Flagge / Flag */}
        <line x1="35" y1="0" x2="35" y2="-15" stroke="#8B4513" strokeWidth="2" />
        <polygon points="35,-15 50,-10 35,-5" fill="#FF6347" style={{ animation: 'sway 2s ease-in-out infinite' }} />
      </svg>

      {/* Eimer und Schaufel / Bucket and shovel */}
      <svg style={{ position: 'absolute', bottom: 45, left: 130 }} width="25" height="30">
        <path d="M5 10 L3 28 L22 28 L20 10 Z" fill="#FF69B4" />
        <ellipse cx="12.5" cy="10" rx="9" ry="4" fill="#FF69B4" />
        <ellipse cx="12.5" cy="10" rx="7" ry="3" fill="#FFB6C1" />
        <path d="M3 8 Q12.5 2 22 8" stroke="#333" strokeWidth="1.5" fill="none" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 42, left: 155, transform: 'rotate(-30deg)' }} width="20" height="35">
        <rect x="8" y="0" width="4" height="25" fill="#8B4513" />
        <rect x="2" y="23" width="16" height="10" rx="2" fill="#FF6347" />
      </svg>

      {/* Fußspuren im Sand / Footprints in sand */}
      {[...Array(4)].map((_, i) => (
        <div key={`footprint-${i}`} style={{ position: 'absolute', bottom: 25, left: 350 + i * 30 }}>
          <svg width="12" height="18" style={{ transform: i % 2 === 0 ? 'none' : 'scaleX(-1)', opacity: 0.4 }}>
            <ellipse cx="6" cy="12" rx="4" ry="6" fill="#C4A574" />
            <circle cx="3" cy="4" r="1.5" fill="#C4A574" />
            <circle cx="6" cy="3" r="1.5" fill="#C4A574" />
            <circle cx="9" cy="4" r="1.5" fill="#C4A574" />
          </svg>
        </div>
      ))}

      {/* Sand-Boden mit Textur / Sandy ground with texture */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        background: 'linear-gradient(to bottom, #F5DEB3 0%, #DEB887 100%)',
        backgroundImage: 'radial-gradient(circle at 20% 80%, #E6D5A8 0%, transparent 15%), radial-gradient(circle at 60% 60%, #D2C098 0%, transparent 10%), radial-gradient(circle at 85% 75%, #E6D5A8 0%, transparent 12%)',
      }} />

      {children}
    </div>
  );
}

// ----- HIMMEL-SZENEN / SKY SCENES -----

export function CloudySky({ width = 800, height = 500, children, timeOfDay = 'day' }: SceneProps) {
  const skyColors = {
    day: '#4A90D9',
    sunset: '#FF6B35',
    night: '#1a1a3e',
  };

  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: `linear-gradient(to bottom, ${timeOfDay === 'night' ? '#000022' : '#1E90FF'} 0%, ${skyColors[timeOfDay]} 100%)`,
      overflow: 'hidden',
    }}>
      {/* Sonne/Mond mit Schein / Sun/Moon with glow */}
      <div style={{ position: 'absolute', top: 40, right: 100 }}>
        {timeOfDay === 'night' ? (
          <>
            <div style={{
              position: 'absolute', top: -15, left: -15, width: 90, height: 90,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(200,200,255,0.3) 0%, transparent 70%)',
            }} />
            <Moon size={60} />
          </>
        ) : (
          <>
            <div style={{
              position: 'absolute', top: -25, left: -25, width: 130, height: 130,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${timeOfDay === 'sunset' ? 'rgba(255,100,0,0.4)' : 'rgba(255,215,0,0.3)'} 0%, transparent 70%)`,
            }} />
            <Sun size={80} color={timeOfDay === 'sunset' ? '#FF4500' : '#FFD700'} />
          </>
        )}
      </div>

      {/* Sterne bei Nacht / Stars at night */}
      {timeOfDay === 'night' && [...Array(50)].map((_, i) => (
        <div
          key={`star-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: Math.random() * 0.5 + 0.5,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Fliegende Vögel / Flying birds */}
      {timeOfDay !== 'night' && [...Array(8)].map((_, i) => (
        <svg
          key={`bird-${i}`}
          style={{
            position: 'absolute',
            top: 100 + Math.random() * 200,
            left: `${5 + i * 12}%`,
            animation: `drift ${25 + i * 3}s linear infinite, bob ${3 + Math.random()}s ease-in-out infinite`,
          }}
          width="25"
          height="12"
        >
          <path d="M12 6 Q6 0 0 6" stroke="#333" strokeWidth="2" fill="none" />
          <path d="M12 6 Q18 0 25 6" stroke="#333" strokeWidth="2" fill="none" />
        </svg>
      ))}

      {/* Heißluftballon / Hot air balloon */}
      {timeOfDay !== 'night' && (
        <svg style={{ position: 'absolute', top: 80, left: 100, animation: 'floatSlow 8s ease-in-out infinite' }} width="50" height="70">
          <ellipse cx="25" cy="25" rx="22" ry="28" fill="#FF6347" />
          <path d="M8 30 Q25 60 42 30" fill="#FFD700" />
          <path d="M3 25 L10 25 L25 55 L40 25 L47 25" stroke="#8B4513" strokeWidth="1" fill="none" />
          <rect x="18" y="55" width="14" height="12" rx="2" fill="#8B4513" />
          {/* Streifen / Stripes */}
          <path d="M15 10 L20 50" stroke="#FFD700" strokeWidth="3" />
          <path d="M35 10 L30 50" stroke="#FFD700" strokeWidth="3" />
        </svg>
      )}

      {/* Schwebende Inseln / Floating islands */}
      <svg style={{ position: 'absolute', top: 200, left: 50, animation: 'floatSlow 10s ease-in-out infinite' }} width="100" height="80">
        {/* Insel-Basis / Island base */}
        <ellipse cx="50" cy="50" rx="45" ry="20" fill="#8B4513" />
        <ellipse cx="50" cy="45" rx="40" ry="15" fill="#90EE90" />
        {/* Kleiner Baum / Small tree */}
        <rect x="45" y="20" width="6" height="25" fill="#8B4513" />
        <circle cx="48" cy="15" r="15" fill="#228B22" />
        {/* Kleine Wolke darunter / Small cloud underneath */}
        <ellipse cx="50" cy="70" rx="25" ry="8" fill="rgba(255,255,255,0.5)" />
      </svg>

      <svg style={{ position: 'absolute', top: 280, right: 100, animation: 'floatSlow 12s ease-in-out infinite', animationDelay: '3s' }} width="80" height="70">
        <ellipse cx="40" cy="45" rx="35" ry="15" fill="#8B4513" />
        <ellipse cx="40" cy="40" rx="32" ry="12" fill="#90EE90" />
        {/* Haus / House */}
        <rect x="28" y="20" width="20" height="18" fill="#FFD700" />
        <polygon points="28,20 38,8 48,20" fill="#FF6347" />
        <rect x="35" y="28" width="6" height="10" fill="#8B4513" />
        <ellipse cx="40" cy="60" rx="20" ry="6" fill="rgba(255,255,255,0.5)" />
      </svg>

      {/* Kleine schwebende Insel / Small floating island */}
      <svg style={{ position: 'absolute', top: 150, right: 350, animation: 'floatSlow 9s ease-in-out infinite', animationDelay: '5s' }} width="60" height="50">
        <ellipse cx="30" cy="35" rx="25" ry="10" fill="#8B4513" />
        <ellipse cx="30" cy="32" rx="22" ry="8" fill="#90EE90" />
        <circle cx="25" cy="25" r="8" fill="#228B22" />
        <circle cx="35" cy="25" r="6" fill="#2E8B57" />
        <ellipse cx="30" cy="45" rx="15" ry="4" fill="rgba(255,255,255,0.4)" />
      </svg>

      {/* Animierte Wolken / Animated clouds - varying sizes and positions */}
      <div style={{ position: 'absolute', top: 80, left: 20, animation: 'driftSlow 50s linear infinite' }}><Cloud size={120} /></div>
      <div style={{ position: 'absolute', top: 60, left: 180, animation: 'driftSlow 55s linear infinite', animationDelay: '10s' }}><Cloud size={100} /></div>
      <div style={{ position: 'absolute', top: 120, left: 350, animation: 'driftSlow 45s linear infinite', animationDelay: '5s' }}><Cloud size={150} /></div>
      <div style={{ position: 'absolute', top: 40, right: 250, animation: 'driftSlow 60s linear infinite' }}><Cloud size={90} /></div>
      <div style={{ position: 'absolute', top: 150, right: 50, animation: 'driftSlow 48s linear infinite', animationDelay: '15s' }}><Cloud size={110} /></div>
      <div style={{ position: 'absolute', top: 200, left: 100, animation: 'driftSlow 52s linear infinite', animationDelay: '8s' }}><Cloud size={130} /></div>
      <div style={{ position: 'absolute', top: 250, left: 400, animation: 'driftSlow 58s linear infinite' }}><Cloud size={80} /></div>
      <div style={{ position: 'absolute', top: 280, right: 180, animation: 'driftSlow 47s linear infinite', animationDelay: '12s' }}><Cloud size={140} /></div>

      {/* Hintergrund-Wolken (transparenter) / Background clouds */}
      <div style={{ position: 'absolute', top: 320, left: 50, opacity: 0.6, animation: 'driftSlow 70s linear infinite' }}><Cloud size={200} /></div>
      <div style={{ position: 'absolute', top: 350, right: 100, opacity: 0.5, animation: 'driftSlow 65s linear infinite', animationDelay: '20s' }}><Cloud size={180} /></div>
      <div style={{ position: 'absolute', bottom: 20, left: 250, opacity: 0.4, animation: 'driftSlow 75s linear infinite', animationDelay: '25s' }}><Cloud size={220} /></div>

      {/* Flugzeug / Airplane */}
      {timeOfDay !== 'night' && (
        <svg style={{ position: 'absolute', top: 50, left: 200, animation: 'drift 30s linear infinite' }} width="40" height="20">
          <ellipse cx="20" cy="10" rx="18" ry="5" fill="#E8E8E8" />
          <polygon points="5,10 0,5 5,8" fill="#4169E1" />
          <polygon points="15,8 20,2 25,8" fill="#E8E8E8" />
          <polygon points="32,10 40,6 40,14" fill="#E8E8E8" />
          <rect x="8" y="8" width="3" height="2" fill="#87CEEB" />
          <rect x="14" y="8" width="3" height="2" fill="#87CEEB" />
          <rect x="20" y="8" width="3" height="2" fill="#87CEEB" />
        </svg>
      )}

      {/* Regenbogen / Rainbow */}
      {timeOfDay === 'day' && (
        <div style={{
          position: 'absolute',
          top: 100,
          left: '10%',
          width: 300,
          height: 150,
          borderRadius: '150px 150px 0 0',
          border: '15px solid transparent',
          borderTopColor: 'red',
          boxShadow: `
            0 0 0 15px orange,
            0 0 0 30px yellow,
            0 0 0 45px green,
            0 0 0 60px blue,
            0 0 0 75px indigo,
            0 0 0 90px violet
          `,
          opacity: 0.4,
        }} />
      )}

      {/* Windpartikel / Wind particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`wind-${i}`}
          style={{
            position: 'absolute',
            top: 100 + i * 50,
            left: '-10%',
            width: 50 + Math.random() * 30,
            height: 2,
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: '50%',
            animation: `drift ${3 + Math.random() * 2}s linear infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {children}
    </div>
  );
}

// ----- DSCHUNGEL-SZENEN / JUNGLE SCENES -----

export function TropicalJungle({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #228B22 0%, #006400 50%, #004d00 100%)',
      overflow: 'hidden',
    }}>
      {/* Animierte Sonnenstrahlen durch Blätter / Animated sunlight through leaves */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`ray-${i}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 50 + i * 100,
            width: 30,
            height: '40%',
            background: 'linear-gradient(to bottom, rgba(255,255,100,0.3), transparent)',
            transform: `rotate(${-10 + i * 3}deg)`,
            transformOrigin: 'top center',
            animation: `shimmer ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Hintergrund-Bäume mit Animation / Background trees with animation */}
      <div style={{ position: 'absolute', bottom: 100, left: 0, animation: 'swayGentle 8s ease-in-out infinite' }}><Tree size={250} color="#003300" /></div>
      <div style={{ position: 'absolute', bottom: 100, right: 0, animation: 'swayGentle 9s ease-in-out infinite', animationDelay: '1s' }}><Tree size={270} color="#002200" /></div>
      <div style={{ position: 'absolute', bottom: 90, left: 200, animation: 'swayGentle 7s ease-in-out infinite', animationDelay: '2s' }}><Tree size={200} color="#004400" /></div>
      <div style={{ position: 'absolute', bottom: 95, right: 180, animation: 'swayGentle 8s ease-in-out infinite' }}><Tree size={220} color="#003300" /></div>

      {/* Papageien / Parrots */}
      {[
        { x: 120, y: 100, color: '#FF6347', delay: 0 },
        { x: 550, y: 80, color: '#00CED1', delay: 1 },
        { x: 350, y: 120, color: '#FFD700', delay: 2 },
      ].map((parrot, i) => (
        <svg
          key={`parrot-${i}`}
          style={{
            position: 'absolute',
            top: parrot.y,
            left: parrot.x,
            animation: `bob ${2 + i * 0.3}s ease-in-out infinite`,
            animationDelay: `${parrot.delay}s`,
          }}
          width="30"
          height="35"
        >
          <ellipse cx="15" cy="18" rx="10" ry="12" fill={parrot.color} />
          <circle cx="12" cy="10" r="7" fill={parrot.color} />
          <circle cx="10" cy="9" r="2" fill="#333" />
          <circle cx="10" cy="8" r="0.5" fill="white" />
          {/* Schnabel / Beak */}
          <path d="M5 12 L0 14 L5 16 Z" fill="#333" />
          {/* Flügel / Wing */}
          <ellipse cx="18" cy="18" rx="6" ry="8" fill={i === 1 ? '#008B8B' : parrot.color === '#FFD700' ? '#DAA520' : '#CD5C5C'} />
          {/* Schwanzfedern / Tail feathers */}
          <path d="M15 28 L12 45" stroke={parrot.color} strokeWidth="3" />
          <path d="M17 28 L17 43" stroke={parrot.color} strokeWidth="3" />
          <path d="M19 28 L22 45" stroke={parrot.color} strokeWidth="3" />
        </svg>
      ))}

      {/* Fliegender Papagei / Flying parrot */}
      <svg
        style={{
          position: 'absolute',
          top: 60,
          left: 200,
          animation: 'drift 15s linear infinite, bob 2s ease-in-out infinite',
        }}
        width="40"
        height="25"
      >
        <ellipse cx="20" cy="12" rx="12" ry="8" fill="#32CD32" />
        <circle cx="30" cy="10" r="6" fill="#32CD32" />
        <circle cx="32" cy="9" r="1.5" fill="#333" />
        <polygon points="36,10 42,10 36,13" fill="#FF6347" />
        <path d="M15 8 Q10 2 5 8" stroke="#228B22" strokeWidth="3" fill="none" />
        <path d="M15 16 Q10 22 5 16" stroke="#228B22" strokeWidth="3" fill="none" />
        <path d="M8 12 L0 12" stroke="#228B22" strokeWidth="2" />
      </svg>

      {/* Affen / Monkeys */}
      <svg style={{ position: 'absolute', top: 150, left: 80, animation: 'float 3s ease-in-out infinite' }} width="35" height="45">
        {/* Körper / Body */}
        <ellipse cx="17" cy="28" rx="12" ry="14" fill="#8B4513" />
        {/* Kopf / Head */}
        <circle cx="17" cy="12" r="10" fill="#8B4513" />
        {/* Gesicht / Face */}
        <ellipse cx="17" cy="14" rx="6" ry="5" fill="#DEB887" />
        <circle cx="14" cy="10" r="2" fill="#333" />
        <circle cx="20" cy="10" r="2" fill="#333" />
        <ellipse cx="17" cy="16" rx="2" ry="1.5" fill="#333" />
        {/* Ohren / Ears */}
        <circle cx="8" cy="10" r="4" fill="#8B4513" />
        <circle cx="26" cy="10" r="4" fill="#8B4513" />
        <circle cx="8" cy="10" r="2" fill="#DEB887" />
        <circle cx="26" cy="10" r="2" fill="#DEB887" />
        {/* Arme / Arms */}
        <path d="M5 25 Q0 20 5 15" stroke="#8B4513" strokeWidth="4" fill="none" />
        <path d="M29 25 Q34 20 29 15" stroke="#8B4513" strokeWidth="4" fill="none" />
        {/* Schwanz / Tail */}
        <path d="M25 35 Q35 40 30 50 Q40 45 35 55" stroke="#8B4513" strokeWidth="3" fill="none" />
      </svg>

      {/* Zweiter Affe am Baum / Second monkey on tree */}
      <svg style={{ position: 'absolute', top: 180, right: 120, animation: 'bob 2.5s ease-in-out infinite' }} width="30" height="35">
        <ellipse cx="15" cy="22" rx="10" ry="11" fill="#A0522D" />
        <circle cx="15" cy="8" r="8" fill="#A0522D" />
        <ellipse cx="15" cy="10" rx="5" ry="4" fill="#DEB887" />
        <circle cx="12" cy="7" r="1.5" fill="#333" />
        <circle cx="18" cy="7" r="1.5" fill="#333" />
        <ellipse cx="15" cy="12" rx="1.5" ry="1" fill="#333" />
        <circle cx="7" cy="7" r="3" fill="#A0522D" />
        <circle cx="23" cy="7" r="3" fill="#A0522D" />
        <path d="M5 20 L0 25" stroke="#A0522D" strokeWidth="3" fill="none" />
      </svg>

      {/* Schlange / Snake */}
      <svg style={{ position: 'absolute', bottom: 80, left: 300, animation: 'sway 4s ease-in-out infinite' }} width="80" height="50">
        <path d="M0 25 Q20 10 40 25 Q60 40 80 25" stroke="#228B22" strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="80" cy="25" r="6" fill="#228B22" />
        <circle cx="82" cy="23" r="2" fill="#FFD700" />
        <circle cx="82" cy="23" r="1" fill="#333" />
        <path d="M88 25 L95 22 L95 28 Z" fill="#FF6347" />
        {/* Muster / Pattern */}
        <ellipse cx="20" cy="22" rx="4" ry="3" fill="#32CD32" />
        <ellipse cx="40" cy="28" rx="4" ry="3" fill="#32CD32" />
        <ellipse cx="60" cy="22" rx="4" ry="3" fill="#32CD32" />
      </svg>

      {/* Animierte Lianen / Animated vines */}
      {[...Array(6)].map((_, i) => (
        <svg
          key={`vine-${i}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 80 + i * 130,
            animation: `swayGentle ${4 + i * 0.5}s ease-in-out infinite`,
            transformOrigin: 'top center',
          }}
          width="40"
          height="300"
        >
          <path
            d={`M20 0 Q${10 + i * 3} 100 ${5 + i * 4} 200 Q${i * 5} 300 20 ${250 + i * 10}`}
            stroke="#228B22"
            strokeWidth="4"
            fill="none"
          />
          {[...Array(5)].map((_, j) => (
            <ellipse key={j} cx={10 + (i % 3) * 8} cy={50 + j * 50} rx="8" ry="5" fill="#32CD32" />
          ))}
        </svg>
      ))}

      {/* Tukan / Toucan */}
      <svg style={{ position: 'absolute', top: 140, right: 300, animation: 'bob 3s ease-in-out infinite' }} width="40" height="35">
        <ellipse cx="20" cy="22" rx="12" ry="10" fill="#1a1a1a" />
        <circle cx="12" cy="15" r="8" fill="#1a1a1a" />
        <circle cx="10" cy="14" r="2" fill="white" />
        <circle cx="10" cy="14" r="1" fill="#333" />
        {/* Großer Schnabel / Large beak */}
        <path d="M4 17 L-15 20 L4 23 Z" fill="#FF6347" />
        <path d="M-5 19 L-15 20 L-5 21" fill="#FFD700" />
        {/* Brust / Chest */}
        <ellipse cx="22" cy="28" rx="6" ry="5" fill="#FFD700" />
      </svg>

      {/* Schmetterlinge / Butterflies */}
      {[...Array(6)].map((_, i) => (
        <svg
          key={`butterfly-${i}`}
          style={{
            position: 'absolute',
            top: 180 + i * 30,
            left: 150 + i * 100,
            animation: `flutter ${3 + i * 0.3}s ease-in-out infinite`,
          }}
          width="20"
          height="16"
        >
          <ellipse cx="10" cy="8" rx="2" ry="5" fill="#333" />
          <ellipse cx="5" cy="6" rx="4" ry="5" fill={['#00BFFF', '#FF69B4', '#FFD700', '#FF6347', '#9370DB', '#32CD32'][i]} opacity="0.8" />
          <ellipse cx="15" cy="6" rx="4" ry="5" fill={['#00BFFF', '#FF69B4', '#FFD700', '#FF6347', '#9370DB', '#32CD32'][i]} opacity="0.8" />
        </svg>
      ))}

      {/* Vordergrund-Büsche / Foreground bushes */}
      <div style={{ position: 'absolute', bottom: 40, left: 20 }}><Bush size={80} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 35, left: 150 }}><Bush size={60} color="#2E8B57" /></div>
      <div style={{ position: 'absolute', bottom: 40, right: 30 }}><Bush size={90} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 38, right: 200 }}><Bush size={70} color="#32CD32" /></div>
      <div style={{ position: 'absolute', bottom: 42, left: '40%' }}><Bush size={55} color="#006400" /></div>

      {/* Exotische Blumen mit Animation / Exotic flowers with animation */}
      <div style={{ position: 'absolute', bottom: 70, left: 100, animation: 'swayGentle 3s ease-in-out infinite' }}><Flower size={30} color="#FF1493" /></div>
      <div style={{ position: 'absolute', bottom: 65, left: 250, animation: 'swayGentle 3.5s ease-in-out infinite', animationDelay: '0.5s' }}><Flower size={25} color="#FF4500" /></div>
      <div style={{ position: 'absolute', bottom: 72, right: 150, animation: 'swayGentle 4s ease-in-out infinite', animationDelay: '1s' }}><Flower size={28} color="#FFD700" /></div>
      <div style={{ position: 'absolute', bottom: 68, right: 350, animation: 'swayGentle 3s ease-in-out infinite' }}><Flower size={32} color="#FF69B4" /></div>
      <div style={{ position: 'absolute', bottom: 75, left: '55%', animation: 'swayGentle 3.5s ease-in-out infinite' }}><Flower size={26} color="#9932CC" /></div>

      {/* Orchideen / Orchids */}
      <svg style={{ position: 'absolute', bottom: 120, left: 50 }} width="25" height="40">
        <path d="M12 40 L12 25" stroke="#228B22" strokeWidth="2" />
        <ellipse cx="12" cy="20" rx="8" ry="5" fill="#FF69B4" />
        <ellipse cx="12" cy="15" rx="6" ry="8" fill="#FFB6C1" />
        <circle cx="12" cy="18" r="3" fill="#FF1493" />
      </svg>

      {/* Leuchtende Pilze / Glowing mushrooms */}
      <div style={{ position: 'absolute', bottom: 50, left: 80 }}>
        <Mushroom size={20} color="#FF6347" />
        <div style={{
          position: 'absolute', top: -5, left: -5, right: -5, bottom: -5,
          background: 'radial-gradient(circle, rgba(255,100,100,0.3) 0%, transparent 70%)',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
      </div>
      <div style={{ position: 'absolute', bottom: 48, right: 280 }}>
        <Mushroom size={25} color="#9932CC" />
        <div style={{
          position: 'absolute', top: -5, left: -5, right: -5, bottom: -5,
          background: 'radial-gradient(circle, rgba(150,100,220,0.3) 0%, transparent 70%)',
          animation: 'pulse 2.5s ease-in-out infinite',
        }} />
      </div>
      <div style={{ position: 'absolute', bottom: 52, left: 400 }}>
        <Mushroom size={18} color="#32CD32" />
        <div style={{
          position: 'absolute', top: -5, left: -5, right: -5, bottom: -5,
          background: 'radial-gradient(circle, rgba(100,220,100,0.3) 0%, transparent 70%)',
          animation: 'pulse 3s ease-in-out infinite',
        }} />
      </div>

      {/* Fallende Blätter / Falling leaves */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`leaf-${i}`}
          style={{
            position: 'absolute',
            top: `${-5 + i * 5}%`,
            left: `${10 + i * 12}%`,
            width: 10,
            height: 10,
            backgroundColor: ['#228B22', '#32CD32', '#006400'][i % 3],
            borderRadius: '50% 0 50% 0',
            animation: `flutter ${4 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Boden / Ground */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Grass width={width} height={60} color="#006400" />
      </div>

      {children}
    </div>
  );
}

// ----- VULKAN-SZENEN / VOLCANO SCENES -----

export function VolcanicIsland({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #4a1c00 0%, #FF4500 30%, #FF6347 50%, #87CEEB 100%)',
      overflow: 'hidden',
    }}>
      {/* Glühender Himmel / Glowing sky */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '30%',
        width: '40%',
        height: '50%',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(255,100,0,0.4) 0%, transparent 70%)',
      }} />

      {/* Animierter Rauch / Animated smoke */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`smoke-${i}`}
          style={{
            position: 'absolute',
            top: 10 + i * 12,
            left: 340 + (i % 3) * 40,
            width: 50 + Math.random() * 50,
            height: 35 + Math.random() * 35,
            borderRadius: '50%',
            backgroundColor: `rgba(80,80,80,${0.2 + i * 0.08})`,
            animation: `rise ${6 + i * 2}s ease-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      {/* Asche-Partikel / Ash particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`ash-${i}`}
          style={{
            position: 'absolute',
            left: `${20 + Math.random() * 60}%`,
            top: `${-5 + Math.random() * 40}%`,
            width: 3 + Math.random() * 3,
            height: 3 + Math.random() * 3,
            backgroundColor: '#4a4a4a',
            borderRadius: '50%',
            animation: `floatSlow ${8 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Tote Bäume / Dead trees */}
      <svg style={{ position: 'absolute', bottom: 55, left: 60 }} width="50" height="100">
        <path d="M25 100 L25 40" stroke="#2d1807" strokeWidth="6" />
        <path d="M25 50 L10 30" stroke="#2d1807" strokeWidth="4" />
        <path d="M25 60 L40 35" stroke="#2d1807" strokeWidth="3" />
        <path d="M25 40 L20 20" stroke="#2d1807" strokeWidth="2" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 52, right: 80 }} width="40" height="80">
        <path d="M20 80 L20 30" stroke="#3d2817" strokeWidth="5" />
        <path d="M20 40 L35 20" stroke="#3d2817" strokeWidth="3" />
        <path d="M20 50 L5 30" stroke="#3d2817" strokeWidth="3" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 50, left: 600 }} width="35" height="70">
        <path d="M17 70 L17 25" stroke="#2d1807" strokeWidth="4" />
        <path d="M17 35 L8 15" stroke="#2d1807" strokeWidth="2" />
        <path d="M17 45 L28 25" stroke="#2d1807" strokeWidth="2" />
      </svg>

      {/* Vulkan mit mehr Details / Volcano with more details */}
      <svg style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)' }} width="400" height="300" viewBox="0 0 400 300">
        {/* Vulkan-Körper / Volcano body */}
        <polygon points="200,20 50,300 350,300" fill="#4a3728" />
        <polygon points="200,20 100,300 300,300" fill="#5a4738" />
        {/* Krater-Glühen / Crater glow */}
        <ellipse cx="200" cy="30" rx="45" ry="22" fill="#FF2200" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
        <ellipse cx="200" cy="30" rx="35" ry="18" fill="#FF4500" style={{ animation: 'pulse 2s ease-in-out infinite', animationDelay: '0.5s' }} />
        <ellipse cx="200" cy="30" rx="25" ry="12" fill="#FF6347" />
        <ellipse cx="200" cy="28" rx="15" ry="8" fill="#FFD700" opacity="0.7" style={{ animation: 'pulse 1.5s ease-in-out infinite' }} />
        {/* Animierte Lava-Ströme / Animated lava streams */}
        <path d="M180 30 Q170 100 160 200 Q150 280 130 300" stroke="#FF4500" strokeWidth="15" fill="none" style={{ animation: 'pulse 3s ease-in-out infinite' }} />
        <path d="M220 30 Q230 100 240 200 Q250 280 270 300" stroke="#FF4500" strokeWidth="12" fill="none" style={{ animation: 'pulse 3s ease-in-out infinite', animationDelay: '1s' }} />
        <path d="M200 35 Q200 150 200 300" stroke="#FF6347" strokeWidth="10" fill="none" style={{ animation: 'pulse 2.5s ease-in-out infinite', animationDelay: '0.5s' }} />
        {/* Risse mit Glühen / Cracks with glow */}
        <path d="M120 200 L140 250" stroke="#FF4500" strokeWidth="3" opacity="0.6" style={{ animation: 'flicker 2s ease-in-out infinite' }} />
        <path d="M280 180 L265 240" stroke="#FF4500" strokeWidth="2" opacity="0.5" style={{ animation: 'flicker 2.5s ease-in-out infinite' }} />
        <path d="M150 150 L165 180" stroke="#FF6347" strokeWidth="2" opacity="0.4" />
      </svg>

      {/* Lava-Spritzer / Lava splashes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`splash-${i}`}
          style={{
            position: 'absolute',
            top: 100 + Math.random() * 50,
            left: 360 + (Math.random() - 0.5) * 80,
            width: 8 + Math.random() * 8,
            height: 8 + Math.random() * 8,
            backgroundColor: '#FF4500',
            borderRadius: '50%',
            boxShadow: '0 0 10px #FF4500, 0 0 20px #FF6347',
            animation: `bounce ${2 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Glühende Risse im Boden / Glowing cracks in ground */}
      <svg style={{ position: 'absolute', bottom: 50, left: 150 }} width="100" height="30">
        <path d="M0 15 L30 10 L60 18 L100 12" stroke="#FF4500" strokeWidth="3" fill="none" style={{ animation: 'flicker 3s ease-in-out infinite' }} />
        <path d="M0 15 L30 10 L60 18 L100 12" stroke="#FFD700" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 45, right: 200 }} width="80" height="25">
        <path d="M0 12 L25 18 L55 10 L80 15" stroke="#FF4500" strokeWidth="2" fill="none" style={{ animation: 'flicker 4s ease-in-out infinite' }} />
      </svg>

      {/* Knochen / Bones */}
      <svg style={{ position: 'absolute', bottom: 52, left: 300 }} width="35" height="12">
        <ellipse cx="5" cy="6" rx="4" ry="4" fill="#E8E0D0" />
        <rect x="7" y="4" width="21" height="3" rx="1.5" fill="#E8E0D0" />
        <ellipse cx="30" cy="6" rx="4" ry="4" fill="#E8E0D0" />
      </svg>

      {/* Schädel / Skull */}
      <svg style={{ position: 'absolute', bottom: 55, right: 320 }} width="22" height="20">
        <ellipse cx="11" cy="8" rx="9" ry="7" fill="#E8E0D0" />
        <ellipse cx="11" cy="14" rx="4" ry="5" fill="#E8E0D0" />
        <circle cx="7" cy="7" r="2" fill="#2a2a2a" />
        <circle cx="15" cy="7" r="2" fill="#2a2a2a" />
      </svg>

      {/* Steine / Rocks - more variety */}
      <div style={{ position: 'absolute', bottom: 45, left: 80 }}><Rock size={40} color="#4a3728" /></div>
      <div style={{ position: 'absolute', bottom: 40, right: 100 }}><Rock size={50} color="#3d2817" /></div>
      <div style={{ position: 'absolute', bottom: 48, left: 200 }}><Rock size={30} color="#5a4738" /></div>
      <div style={{ position: 'absolute', bottom: 42, left: 500 }}><Rock size={35} color="#4a3728" /></div>
      <div style={{ position: 'absolute', bottom: 50, right: 250 }}><Rock size={25} color="#3d2817" /></div>

      {/* Vulkanischer Boden mit Glüheffekt / Volcanic ground with glow effect */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 75,
        background: 'linear-gradient(to bottom, #3d2817 0%, #2d1807 100%)',
        backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,100,0,0.2) 0%, transparent 30%), radial-gradient(circle at 70% 50%, rgba(255,70,0,0.15) 0%, transparent 25%)',
      }} />

      {/* Heiße Luft-Wellen / Hot air shimmer */}
      <div style={{
        position: 'absolute',
        bottom: 60,
        left: '30%',
        width: '40%',
        height: 100,
        background: 'linear-gradient(to top, rgba(255,200,100,0.2), transparent)',
        animation: 'shimmer 2s ease-in-out infinite',
      }} />

      {children}
    </div>
  );
}

// ----- HÖHLEN-SZENEN / CAVE SCENES -----

export function MysteriousCave({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
      overflow: 'hidden',
    }}>
      {/* Höhlendecke / Cave ceiling */}
      <svg style={{ position: 'absolute', top: 0, left: 0 }} width={width} height="150">
        <path
          d={`M0 0 L0 80 Q100 120 200 70 Q300 100 400 60 Q500 110 600 75 Q700 100 ${width} 70 L${width} 0 Z`}
          fill="#1a1a1a"
        />
        {/* Stalaktiten / Stalactites */}
        {[...Array(12)].map((_, i) => (
          <polygon
            key={`stalactite-${i}`}
            points={`${60 + i * 65},${60 + (i % 3) * 10} ${50 + i * 65},${100 + (i % 4) * 10} ${70 + i * 65},${100 + ((i + 1) % 4) * 10}`}
            fill="#3d3d3d"
          />
        ))}
      </svg>

      {/* Fliegende Fledermäuse / Flying bats */}
      {[...Array(6)].map((_, i) => (
        <svg
          key={`bat-${i}`}
          style={{
            position: 'absolute',
            top: 80 + i * 30,
            left: 100 + i * 120,
            animation: `flutter ${2 + i * 0.3}s ease-in-out infinite, drift ${15 + i * 3}s linear infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
          width="30"
          height="20"
        >
          <ellipse cx="15" cy="12" rx="5" ry="4" fill="#1a1a1a" />
          <circle cx="15" cy="8" r="4" fill="#1a1a1a" />
          <circle cx="13" cy="7" r="1" fill="#FFD700" />
          <circle cx="17" cy="7" r="1" fill="#FFD700" />
          {/* Flügel / Wings */}
          <path d="M10 12 Q5 8 0 12 Q3 15 10 12" fill="#2d2d2d" />
          <path d="M20 12 Q25 8 30 12 Q27 15 20 12" fill="#2d2d2d" />
          {/* Ohren / Ears */}
          <polygon points="12,5 11,1 14,4" fill="#1a1a1a" />
          <polygon points="18,5 19,1 16,4" fill="#1a1a1a" />
        </svg>
      ))}

      {/* Tropfendes Wasser / Dripping water */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`drip-${i}`}
          style={{
            position: 'absolute',
            top: 80 + (i % 3) * 20,
            left: 150 + i * 130,
          }}
        >
          {/* Tropfen / Drop */}
          <div
            style={{
              width: 4,
              height: 8,
              backgroundColor: '#87CEEB',
              borderRadius: '50% 50% 50% 50% / 30% 30% 70% 70%',
              animation: `rise ${2 + i * 0.5}s ease-in infinite reverse`,
              animationDelay: `${i * 0.8}s`,
              opacity: 0.8,
            }}
          />
        </div>
      ))}

      {/* Animierte leuchtende Kristalle / Animated glowing crystals */}
      {[...Array(10)].map((_, i) => (
        <svg
          key={`crystal-${i}`}
          style={{
            position: 'absolute',
            bottom: 50 + (i % 4) * 25,
            left: 30 + i * 78,
            animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
          width="30"
          height="50"
        >
          <polygon points="15,0 25,30 15,50 5,30" fill={['#00FFFF', '#FF00FF', '#00FF00', '#FFD700', '#FF69B4'][i % 5]} opacity="0.8" />
          <polygon points="15,5 22,28 15,45 8,28" fill={['#88FFFF', '#FF88FF', '#88FF88', '#FFE088', '#FFB6C1'][i % 5]} opacity="0.5" />
          <ellipse cx="15" cy="25" rx="20" ry="30" fill={['#00FFFF', '#FF00FF', '#00FF00', '#FFD700', '#FF69B4'][i % 5]} opacity="0.2" />
        </svg>
      ))}

      {/* Kristallgruppe / Crystal cluster */}
      <svg style={{ position: 'absolute', bottom: 60, left: '45%' }} width="60" height="80">
        <polygon points="20,0 28,50 12,50" fill="#9370DB" style={{ animation: 'pulse 3s ease-in-out infinite' }} />
        <polygon points="35,10 42,55 28,55" fill="#BA55D3" style={{ animation: 'pulse 2.5s ease-in-out infinite', animationDelay: '0.5s' }} />
        <polygon points="45,15 52,50 38,50" fill="#9370DB" style={{ animation: 'pulse 2.8s ease-in-out infinite', animationDelay: '1s' }} />
        <ellipse cx="35" cy="40" rx="35" ry="25" fill="rgba(150,100,220,0.2)" />
      </svg>

      {/* Spinnennetze / Spider webs */}
      <svg style={{ position: 'absolute', top: 60, left: 80, opacity: 0.3 }} width="60" height="60">
        <line x1="30" y1="0" x2="30" y2="60" stroke="#fff" strokeWidth="0.5" />
        <line x1="0" y1="30" x2="60" y2="30" stroke="#fff" strokeWidth="0.5" />
        <line x1="0" y1="0" x2="60" y2="60" stroke="#fff" strokeWidth="0.5" />
        <line x1="60" y1="0" x2="0" y2="60" stroke="#fff" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="10" stroke="#fff" strokeWidth="0.5" fill="none" />
        <circle cx="30" cy="30" r="20" stroke="#fff" strokeWidth="0.5" fill="none" />
        <circle cx="30" cy="30" r="28" stroke="#fff" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Glühende Pilze am Boden / Glowing mushrooms on ground */}
      {[{ x: 100, glow: '#00FFFF' }, { x: 350, glow: '#FF00FF' }, { x: 600, glow: '#00FF00' }].map((mush, i) => (
        <svg key={`glow-mush-${i}`} style={{ position: 'absolute', bottom: 45, left: mush.x }} width="25" height="30">
          <ellipse cx="12" cy="10" rx="10" ry="8" fill={mush.glow} style={{ animation: `pulse ${2 + i * 0.5}s ease-in-out infinite` }} />
          <rect x="10" y="15" width="4" height="12" fill="#E8E8E8" />
          <ellipse cx="12" cy="15" rx="15" ry="10" fill={mush.glow} opacity="0.2" />
        </svg>
      ))}

      {/* Höhlenboden mit Stalagmiten / Cave floor with stalagmites */}
      <svg style={{ position: 'absolute', bottom: 0, left: 0 }} width={width} height="120">
        <path
          d={`M0 120 L0 80 Q100 60 200 90 Q300 50 400 85 Q500 60 600 90 Q700 55 ${width} 80 L${width} 120 Z`}
          fill="#2d2d2d"
        />
        {/* Stalagmiten / Stalagmites */}
        {[...Array(10)].map((_, i) => (
          <polygon
            key={`stalagmite-${i}`}
            points={`${70 + i * 75},120 ${60 + i * 75},${70 - (i % 4) * 8} ${80 + i * 75},120`}
            fill="#3d3d3d"
          />
        ))}
      </svg>

      {/* Schatz / Treasure */}
      <svg style={{ position: 'absolute', bottom: 50, right: 150 }} width="40" height="30">
        <rect x="5" y="10" width="30" height="18" rx="2" fill="#8B4513" />
        <rect x="5" y="8" width="30" height="6" rx="2" fill="#A0522D" />
        <rect x="17" y="8" width="6" height="20" fill="#DAA520" />
        <circle cx="20" cy="18" r="3" fill="#FFD700" style={{ animation: 'twinkle 1.5s ease-in-out infinite' }} />
        {/* Münzen / Coins */}
        <circle cx="10" cy="8" r="3" fill="#FFD700" style={{ animation: 'twinkle 2s ease-in-out infinite' }} />
        <circle cx="30" cy="8" r="3" fill="#FFD700" style={{ animation: 'twinkle 1.8s ease-in-out infinite', animationDelay: '0.5s' }} />
      </svg>

      {/* Wasser-Pool mit Animation / Water pool with animation */}
      <div style={{
        position: 'absolute',
        bottom: 30,
        left: '30%',
        width: '40%',
        height: 40,
        backgroundColor: '#1a4a6e',
        borderRadius: '50%',
        opacity: 0.8,
        boxShadow: '0 0 30px rgba(0,200,255,0.3)',
        animation: 'shimmer 3s ease-in-out infinite',
      }}>
        {/* Wassertropfen-Ringe / Water ripples */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '40%',
          width: 20,
          height: 10,
          border: '1px solid rgba(200,255,255,0.3)',
          borderRadius: '50%',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
      </div>

      {/* Lichtpartikel / Light particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`particle-${i}`}
          style={{
            position: 'absolute',
            top: 100 + (i % 4) * 80,
            left: `${10 + i * 8}%`,
            width: 3,
            height: 3,
            backgroundColor: ['#00FFFF', '#FF00FF', '#00FF00', '#FFD700'][i % 4],
            borderRadius: '50%',
            animation: `floatSlow ${4 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
            opacity: 0.6,
          }}
        />
      ))}

      {children}
    </div>
  );
}

// ----- WIESEN-SZENEN / MEADOW SCENES -----

export function FlowerMeadow({ width = 800, height = 500, children, timeOfDay = 'day' }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: timeOfDay === 'sunset'
        ? 'linear-gradient(to bottom, #FF6B35 0%, #FFD700 50%, #90EE90 100%)'
        : 'linear-gradient(to bottom, #87CEEB 0%, #B0E0E6 50%, #90EE90 100%)',
      overflow: 'hidden',
    }}>
      {/* Sonne mit Schein / Sun with glow */}
      <div style={{ position: 'absolute', top: 20, right: 60 }}>
        <div style={{
          position: 'absolute', top: -15, left: -15, width: 90, height: 90,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${timeOfDay === 'sunset' ? 'rgba(255,100,0,0.3)' : 'rgba(255,215,0,0.3)'} 0%, transparent 70%)`,
        }} />
        <Sun size={60} color={timeOfDay === 'sunset' ? '#FF4500' : '#FFD700'} />
      </div>

      {/* Animierte Wolken / Animated clouds */}
      <div style={{ position: 'absolute', top: 30, left: 50, animation: 'driftSlow 40s linear infinite' }}><Cloud size={60} /></div>
      <div style={{ position: 'absolute', top: 50, left: 200, animation: 'driftSlow 45s linear infinite', animationDelay: '10s' }}><Cloud size={50} /></div>
      <div style={{ position: 'absolute', top: 40, right: 180, animation: 'driftSlow 35s linear infinite', animationDelay: '5s' }}><Cloud size={55} /></div>

      {/* Fliegende Vögel / Flying birds */}
      {[...Array(4)].map((_, i) => (
        <svg
          key={`bird-${i}`}
          style={{
            position: 'absolute',
            top: 70 + i * 30,
            left: 100 + i * 180,
            animation: `drift ${25 + i * 5}s linear infinite`,
          }}
          width="20"
          height="10"
        >
          <path d="M10 5 Q5 0 0 5 M10 5 Q15 0 20 5" stroke="#333" strokeWidth="1.5" fill="none" />
        </svg>
      ))}

      {/* Animierte Schmetterlinge / Animated butterflies */}
      {[...Array(10)].map((_, i) => (
        <svg
          key={`butterfly-${i}`}
          style={{
            position: 'absolute',
            top: 100 + (i % 5) * 50,
            left: 50 + i * 75,
            animation: `flutter ${3 + i * 0.3}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
          width="28"
          height="22"
        >
          <ellipse cx="14" cy="11" rx="2" ry="7" fill="#333" />
          <ellipse cx="7" cy="9" rx="6" ry="8" fill={['#FF69B4', '#FFD700', '#00CED1', '#FF6347', '#9370DB', '#32CD32', '#FF69B4', '#87CEEB', '#FF4500', '#DA70D6'][i]} opacity="0.85" />
          <ellipse cx="21" cy="9" rx="6" ry="8" fill={['#FF69B4', '#FFD700', '#00CED1', '#FF6347', '#9370DB', '#32CD32', '#FF69B4', '#87CEEB', '#FF4500', '#DA70D6'][i]} opacity="0.85" />
          {/* Muster / Patterns */}
          <circle cx="7" cy="8" r="2" fill="rgba(255,255,255,0.5)" />
          <circle cx="21" cy="8" r="2" fill="rgba(255,255,255,0.5)" />
        </svg>
      ))}

      {/* Bienen / Bees */}
      {[...Array(8)].map((_, i) => (
        <svg
          key={`bee-${i}`}
          style={{
            position: 'absolute',
            top: 150 + (i % 4) * 60,
            left: 80 + i * 90,
            animation: `float ${2 + i * 0.2}s ease-in-out infinite, drift ${20 + i * 3}s linear infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
          width="16"
          height="12"
        >
          <ellipse cx="8" cy="6" rx="6" ry="5" fill="#FFD700" />
          <rect x="5" y="3" width="2" height="6" fill="#333" />
          <rect x="9" y="3" width="2" height="6" fill="#333" />
          <ellipse cx="4" cy="4" rx="4" ry="3" fill="rgba(255,255,255,0.6)" />
          <ellipse cx="12" cy="4" rx="4" ry="3" fill="rgba(255,255,255,0.6)" />
          <circle cx="3" cy="5" r="0.5" fill="#333" />
        </svg>
      ))}

      {/* Hügel / Hills */}
      <div style={{ position: 'absolute', bottom: 100, left: 0 }}><Hill size={200} color="#90EE90" /></div>
      <div style={{ position: 'absolute', bottom: 90, right: 50 }}><Hill size={180} color="#98FB98" /></div>
      <div style={{ position: 'absolute', bottom: 110, left: '35%', opacity: 0.7 }}><Hill size={150} color="#7CCD7C" /></div>

      {/* Bäume am Rand mit Animation / Trees at edges with animation */}
      <div style={{ position: 'absolute', bottom: 60, left: 0, animation: 'swayGentle 8s ease-in-out infinite' }}><Tree size={120} color="#228B22" /></div>
      <div style={{ position: 'absolute', bottom: 60, right: 0, animation: 'swayGentle 7s ease-in-out infinite', animationDelay: '1s' }}><Tree size={100} color="#2E8B57" /></div>

      {/* Vogelhäuschen / Birdhouse */}
      <svg style={{ position: 'absolute', bottom: 150, left: 90 }} width="25" height="35">
        <rect x="5" y="12" width="15" height="18" fill="#8B4513" />
        <polygon points="0,15 12,0 25,15" fill="#A0522D" />
        <circle cx="12" cy="20" r="4" fill="#2d1807" />
      </svg>

      {/* Viele Blumen mit Animation / Many flowers with animation */}
      {[...Array(35)].map((_, i) => (
        <div
          key={`flower-${i}`}
          style={{
            position: 'absolute',
            bottom: 48 + (i % 6) * 10,
            left: `${3 + i * 2.8}%`,
            animation: `swayGentle ${3 + (i % 4) * 0.5}s ease-in-out infinite`,
            animationDelay: `${(i % 5) * 0.2}s`,
          }}
        >
          <Flower size={14 + (i % 5) * 3} color={['#FF69B4', '#FFD700', '#FF1493', '#87CEEB', '#FF6347', '#9370DB', '#00CED1', '#FF4500', '#DA70D6', '#32CD32'][i % 10]} />
        </div>
      ))}

      {/* Große Sonnenblume / Large sunflower */}
      <svg style={{ position: 'absolute', bottom: 70, left: 350, animation: 'swayGentle 5s ease-in-out infinite' }} width="40" height="80">
        <rect x="18" y="35" width="4" height="45" fill="#228B22" />
        {[...Array(12)].map((_, i) => (
          <ellipse
            key={i}
            cx={20 + Math.cos(i * 30 * Math.PI / 180) * 15}
            cy={20 + Math.sin(i * 30 * Math.PI / 180) * 15}
            rx="8"
            ry="4"
            fill="#FFD700"
            transform={`rotate(${i * 30} 20 20)`}
          />
        ))}
        <circle cx="20" cy="20" r="10" fill="#8B4513" />
        <circle cx="20" cy="20" r="7" fill="#654321" />
      </svg>

      {/* Marienkäfer / Ladybugs */}
      {[{ x: 200, y: 75 }, { x: 500, y: 65 }, { x: 650, y: 80 }].map((pos, i) => (
        <svg key={`ladybug-${i}`} style={{ position: 'absolute', bottom: pos.y, left: pos.x }} width="12" height="10">
          <ellipse cx="6" cy="5" rx="5" ry="4" fill="#FF0000" />
          <ellipse cx="6" cy="3" rx="2.5" ry="2" fill="#333" />
          <circle cx="4" cy="5" r="1" fill="#333" />
          <circle cx="8" cy="5" r="1" fill="#333" />
          <circle cx="6" cy="7" r="0.8" fill="#333" />
          <line x1="6" y1="2" x2="6" y2="8" stroke="#333" strokeWidth="0.5" />
        </svg>
      ))}

      {/* Gänseblümchen-Büschel / Daisy clusters */}
      {[150, 400, 600].map((x, i) => (
        <div key={`daisy-${i}`} style={{ position: 'absolute', bottom: 55, left: x }}>
          {[...Array(5)].map((_, j) => (
            <svg key={j} style={{ position: 'absolute', left: j * 8 - 15, bottom: j % 2 * 5 }} width="18" height="18">
              {[...Array(8)].map((_, k) => (
                <ellipse key={k} cx={9 + Math.cos(k * 45 * Math.PI / 180) * 6} cy={9 + Math.sin(k * 45 * Math.PI / 180) * 6} rx="3" ry="1.5" fill="white" transform={`rotate(${k * 45} 9 9)`} />
              ))}
              <circle cx="9" cy="9" r="3" fill="#FFD700" />
            </svg>
          ))}
        </div>
      ))}

      {/* Gras / Grass */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Grass width={width} height={80} color="#7CFC00" />
      </div>

      {children}
    </div>
  );
}

// ----- SUMPF-SZENEN / SWAMP SCENES -----

export function SpookySwamp({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #2F4F4F 0%, #3d5c5c 50%, #4a6b6b 100%)',
      overflow: 'hidden',
    }}>
      {/* Animierter Nebel Schicht 1 / Animated fog layer 1 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '-10%',
        right: '-10%',
        bottom: 0,
        background: 'radial-gradient(ellipse at 30% 100%, rgba(100,120,100,0.6), transparent 60%)',
        animation: 'fogDrift 20s ease-in-out infinite',
      }} />

      {/* Animierter Nebel Schicht 2 / Animated fog layer 2 */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        right: '-10%',
        height: '60%',
        background: 'radial-gradient(ellipse at 70% 50%, rgba(80,100,80,0.5), transparent 50%)',
        animation: 'fogDrift 25s ease-in-out infinite reverse',
        animationDelay: '5s',
      }} />

      {/* Mond mit Schein / Moon with glow */}
      <div style={{ position: 'absolute', top: 30, right: 80 }}>
        <div style={{
          position: 'absolute', top: -15, left: -15, width: 80, height: 80,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,200,255,0.3) 0%, transparent 70%)',
        }} />
        <Moon size={50} />
      </div>

      {/* Sterne / Stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`star-${i}`}
          style={{
            position: 'absolute',
            left: `${5 + i * 5}%`,
            top: `${5 + (i % 5) * 8}%`,
            width: 2,
            height: 2,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: 0.3 + (i % 3) * 0.2,
            animation: `twinkle ${2 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Fledermäuse / Bats */}
      {[...Array(4)].map((_, i) => (
        <svg
          key={`bat-${i}`}
          style={{
            position: 'absolute',
            top: 60 + i * 40,
            left: 100 + i * 180,
            animation: `flutter ${2 + i * 0.3}s ease-in-out infinite, drift ${18 + i * 4}s linear infinite`,
          }}
          width="25"
          height="15"
        >
          <ellipse cx="12" cy="8" rx="4" ry="3" fill="#1a1a1a" />
          <circle cx="12" cy="5" r="3" fill="#1a1a1a" />
          <path d="M8 8 Q4 4 0 8 Q3 10 8 8" fill="#2d2d2d" />
          <path d="M16 8 Q20 4 25 8 Q21 10 16 8" fill="#2d2d2d" />
        </svg>
      ))}

      {/* Tote Bäume mit mehr Details / Dead trees with more details */}
      <svg style={{ position: 'absolute', bottom: 50, left: 50 }} width="100" height="200">
        <path d="M50 200 L50 80" stroke="#3d2817" strokeWidth="10" />
        <path d="M50 100 L20 60" stroke="#3d2817" strokeWidth="6" />
        <path d="M50 120 L80 70" stroke="#3d2817" strokeWidth="6" />
        <path d="M50 80 L40 40" stroke="#3d2817" strokeWidth="4" />
        <path d="M20 60 L5 45" stroke="#3d2817" strokeWidth="3" />
        <path d="M80 70 L95 55" stroke="#3d2817" strokeWidth="3" />
        {/* Hängendes Moos / Hanging moss */}
        <path d="M30 65 Q25 80 30 95" stroke="#4a6b4a" strokeWidth="2" fill="none" />
        <path d="M75 75 Q80 90 75 105" stroke="#4a6b4a" strokeWidth="2" fill="none" />
      </svg>

      <svg style={{ position: 'absolute', bottom: 50, right: 80 }} width="80" height="180">
        <path d="M40 180 L40 60" stroke="#2d1807" strokeWidth="8" />
        <path d="M40 80 L15 40" stroke="#2d1807" strokeWidth="5" />
        <path d="M40 100 L65 50" stroke="#2d1807" strokeWidth="5" />
        <path d="M15 40 L5 25" stroke="#2d1807" strokeWidth="3" />
        {/* Hängendes Moos / Hanging moss */}
        <path d="M25 50 Q20 65 25 80" stroke="#4a6b4a" strokeWidth="2" fill="none" />
        <path d="M55 60 Q60 75 55 90" stroke="#4a6b4a" strokeWidth="2" fill="none" />
      </svg>

      {/* Zusätzlicher toter Baum / Additional dead tree */}
      <svg style={{ position: 'absolute', bottom: 55, left: 250 }} width="70" height="150">
        <path d="M35 150 L35 50" stroke="#2a1a0a" strokeWidth="7" />
        <path d="M35 70 L15 35" stroke="#2a1a0a" strokeWidth="4" />
        <path d="M35 85 L55 45" stroke="#2a1a0a" strokeWidth="4" />
        <path d="M25 45 Q20 60 25 75" stroke="#4a6b4a" strokeWidth="2" fill="none" />
      </svg>

      {/* Krokodilaugen im Wasser / Crocodile eyes in water */}
      {[
        { x: 200, delay: 0 },
        { x: 500, delay: 2 },
        { x: 350, delay: 4 },
      ].map((croc, i) => (
        <div key={`croc-${i}`} style={{ position: 'absolute', bottom: 55, left: croc.x }}>
          <div style={{
            display: 'flex',
            gap: 12,
            animation: `blink ${5 + i}s ease-in-out infinite`,
            animationDelay: `${croc.delay}s`,
          }}>
            <div style={{
              width: 6,
              height: 4,
              borderRadius: '50%',
              backgroundColor: '#FFFF00',
              boxShadow: '0 0 8px #FFFF00',
            }} />
            <div style={{
              width: 6,
              height: 4,
              borderRadius: '50%',
              backgroundColor: '#FFFF00',
              boxShadow: '0 0 8px #FFFF00',
            }} />
          </div>
          {/* Snout ripples */}
          <div style={{
            position: 'absolute',
            top: 8,
            left: -5,
            width: 30,
            height: 6,
            border: '1px solid rgba(100,150,100,0.3)',
            borderRadius: '50%',
            animation: 'pulse 3s ease-in-out infinite',
          }} />
        </div>
      ))}

      {/* Spinnen / Spiders */}
      <svg style={{ position: 'absolute', top: 100, left: 120 }} width="20" height="30">
        <ellipse cx="10" cy="20" rx="6" ry="8" fill="#1a1a1a" />
        <circle cx="10" cy="10" r="4" fill="#1a1a1a" />
        <circle cx="8" cy="9" r="1" fill="#FF0000" />
        <circle cx="12" cy="9" r="1" fill="#FF0000" />
        {/* Beine / Legs */}
        <path d="M5 18 L-5 10" stroke="#1a1a1a" strokeWidth="1" />
        <path d="M5 22 L-8 22" stroke="#1a1a1a" strokeWidth="1" />
        <path d="M15 18 L25 10" stroke="#1a1a1a" strokeWidth="1" />
        <path d="M15 22 L28 22" stroke="#1a1a1a" strokeWidth="1" />
        {/* Faden / Thread */}
        <path d="M10 0 L10 6" stroke="#666" strokeWidth="0.5" />
      </svg>

      {/* Sumpfwasser mit Animation / Swamp water with animation */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        background: 'linear-gradient(to bottom, #4a6b4a 0%, #3d5c3d 100%)',
      }}>
        {/* Wellen / Ripples */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`ripple-${i}`}
            style={{
              position: 'absolute',
              top: 10 + i * 10,
              left: `${10 + i * 18}%`,
              width: 40,
              height: 8,
              border: '1px solid rgba(100,150,100,0.3)',
              borderRadius: '50%',
              animation: `shimmer ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* Animierte Seerosen / Animated water lilies */}
        {[...Array(8)].map((_, i) => (
          <svg
            key={`lily-${i}`}
            style={{
              position: 'absolute',
              top: 15 + (i % 3) * 15,
              left: `${8 + i * 12}%`,
              animation: `bob ${3 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
            width="40"
            height="30"
          >
            <ellipse cx="20" cy="20" rx="18" ry="10" fill="#228B22" />
            <ellipse cx="20" cy="20" rx="15" ry="8" fill="#2E8B57" />
            <circle cx="20" cy="15" r="6" fill="#FF69B4" />
            <circle cx="20" cy="15" r="3" fill="#FFB6C1" />
          </svg>
        ))}

        {/* Blasen / Bubbles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            style={{
              position: 'absolute',
              bottom: 40,
              left: `${15 + i * 15}%`,
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: 'rgba(150,200,150,0.4)',
              animation: `rise ${4 + i}s ease-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Animierte Glühwürmchen / Animated fireflies */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`firefly-${i}`}
          style={{
            position: 'absolute',
            top: `${15 + (i % 8) * 10}%`,
            left: `${5 + i * 4}%`,
            width: 5 + (i % 3),
            height: 5 + (i % 3),
            borderRadius: '50%',
            backgroundColor: '#FFFF44',
            boxShadow: '0 0 10px #FFFF44, 0 0 15px #FFFF00',
            animation: `pulse ${2 + (i % 3)}s ease-in-out infinite, float ${4 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Mysteriöse Augen im Hintergrund / Mysterious eyes in background */}
      {[{ x: 600, y: 180 }, { x: 150, y: 150 }].map((eye, i) => (
        <div key={`eyes-${i}`} style={{ position: 'absolute', left: eye.x, top: eye.y }}>
          <div style={{
            display: 'flex',
            gap: 8,
            animation: `blink ${6 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 3}s`,
          }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#FFFF00', boxShadow: '0 0 6px #FFFF00' }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#FFFF00', boxShadow: '0 0 6px #FFFF00' }} />
          </div>
        </div>
      ))}

      {children}
    </div>
  );
}

// ----- KORALLENRIFF-SZENEN / CORAL REEF SCENES -----

export function CoralReef({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #00CED1 0%, #20B2AA 30%, #008B8B 70%, #006666 100%)',
      overflow: 'hidden',
    }}>
      {/* Animierte Licht-Strahlen / Animated light rays */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`ray-${i}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 80 + i * 130,
            width: 50,
            height: '50%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
            transform: `rotate(${-12 + i * 5}deg)`,
            transformOrigin: 'top center',
            animation: `shimmer ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Meeresschildkröte / Sea turtle */}
      <svg style={{ position: 'absolute', top: 80, left: 150, animation: 'swim 20s ease-in-out infinite' }} width="70" height="50">
        {/* Panzer / Shell */}
        <ellipse cx="35" cy="25" rx="28" ry="18" fill="#2E8B57" />
        <ellipse cx="35" cy="25" rx="24" ry="15" fill="#3CB371" />
        {/* Muster / Pattern */}
        <path d="M20 20 L35 10 L50 20 L35 30 Z" fill="#228B22" opacity="0.5" />
        <path d="M25 25 L35 30 L45 25" stroke="#228B22" strokeWidth="2" fill="none" />
        {/* Kopf / Head */}
        <ellipse cx="65" cy="25" rx="8" ry="6" fill="#2E8B57" />
        <circle cx="68" cy="23" r="2" fill="#333" />
        <circle cx="68" cy="22" r="0.5" fill="white" />
        {/* Flossen / Flippers */}
        <ellipse cx="18" cy="15" rx="12" ry="5" fill="#2E8B57" transform="rotate(-30 18 15)" />
        <ellipse cx="18" cy="35" rx="12" ry="5" fill="#2E8B57" transform="rotate(30 18 35)" />
        <ellipse cx="50" cy="15" rx="10" ry="4" fill="#2E8B57" transform="rotate(20 50 15)" />
        <ellipse cx="50" cy="35" rx="10" ry="4" fill="#2E8B57" transform="rotate(-20 50 35)" />
      </svg>

      {/* Tropische Fische / Tropical fish */}
      {[
        { x: 100, y: 120, color: '#FF6347', size: 25, delay: 0 },
        { x: 300, y: 180, color: '#FFD700', size: 22, delay: 1 },
        { x: 500, y: 140, color: '#00CED1', size: 28, delay: 2 },
        { x: 650, y: 200, color: '#FF69B4', size: 20, delay: 3 },
        { x: 200, y: 250, color: '#32CD32', size: 24, delay: 0.5 },
        { x: 450, y: 280, color: '#FF4500', size: 26, delay: 1.5 },
        { x: 550, y: 100, color: '#9370DB', size: 22, delay: 2.5 },
        { x: 350, y: 320, color: '#00FF7F', size: 20, delay: 0.8 },
      ].map((fish, i) => (
        <svg
          key={`fish-${i}`}
          style={{
            position: 'absolute',
            left: fish.x,
            top: fish.y,
            animation: `swim ${12 + i * 2}s ease-in-out infinite`,
            animationDelay: `${fish.delay}s`,
          }}
          width={fish.size}
          height={fish.size * 0.6}
        >
          <ellipse cx={fish.size * 0.4} cy={fish.size * 0.3} rx={fish.size * 0.35} ry={fish.size * 0.25} fill={fish.color} />
          <polygon points={`${fish.size * 0.7},${fish.size * 0.3} ${fish.size},${fish.size * 0.1} ${fish.size},${fish.size * 0.5}`} fill={fish.color} />
          <circle cx={fish.size * 0.2} cy={fish.size * 0.25} r={fish.size * 0.06} fill="white" />
          <circle cx={fish.size * 0.2} cy={fish.size * 0.25} r={fish.size * 0.03} fill="black" />
          {/* Streifen / Stripes */}
          <path d={`M${fish.size * 0.25} ${fish.size * 0.15} L${fish.size * 0.3} ${fish.size * 0.45}`} stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <path d={`M${fish.size * 0.4} ${fish.size * 0.1} L${fish.size * 0.45} ${fish.size * 0.5}`} stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        </svg>
      ))}

      {/* Clownfische / Clownfish */}
      {[{ x: 380, y: 150 }, { x: 400, y: 165 }].map((pos, i) => (
        <svg key={`clown-${i}`} style={{ position: 'absolute', left: pos.x, top: pos.y, animation: `bob ${2 + i * 0.3}s ease-in-out infinite` }} width="22" height="14">
          <ellipse cx="11" cy="7" rx="9" ry="5" fill="#FF6347" />
          <rect x="6" y="2" width="3" height="10" fill="white" />
          <rect x="12" y="2" width="3" height="10" fill="white" />
          <polygon points="18,7 22,4 22,10" fill="#FF6347" />
          <circle cx="4" cy="6" r="1.5" fill="white" />
          <circle cx="4" cy="6" r="0.8" fill="black" />
        </svg>
      ))}

      {/* Animierte Blasen / Animated bubbles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`bubble-${i}`}
          style={{
            position: 'absolute',
            left: `${5 + i * 4}%`,
            bottom: `${-5 + (i % 4) * 5}%`,
            width: 6 + (i % 5) * 3,
            height: 6 + (i % 5) * 3,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.4)',
            animation: `rise ${8 + (i % 5) * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Quallen / Jellyfish */}
      {[{ x: 100, y: 60, color: 'rgba(255,150,200,0.5)' }, { x: 600, y: 100, color: 'rgba(150,200,255,0.5)' }].map((jelly, i) => (
        <svg key={`jelly-${i}`} style={{ position: 'absolute', left: jelly.x, top: jelly.y, animation: `float ${4 + i}s ease-in-out infinite` }} width="35" height="50">
          <ellipse cx="17" cy="12" rx="14" ry="10" fill={jelly.color} />
          {[...Array(6)].map((_, j) => (
            <path key={j} d={`M${5 + j * 5} ${20} Q${5 + j * 5 + 2} ${35} ${5 + j * 5} ${48}`} stroke={jelly.color} strokeWidth="2" fill="none" style={{ animation: `sway ${2 + j * 0.2}s ease-in-out infinite` }} />
          ))}
        </svg>
      ))}

      {/* Animierte Korallen / Animated corals */}
      {/* Rote Korallen / Red corals */}
      <svg style={{ position: 'absolute', bottom: 30, left: 60, animation: 'swayGentle 4s ease-in-out infinite' }} width="80" height="100">
        {[...Array(5)].map((_, i) => (
          <path key={i} d={`M${15 + i * 12} 100 Q${10 + i * 12} 50 ${20 + i * 15} ${20 + i * 5}`} stroke="#FF6347" strokeWidth="8" fill="none" strokeLinecap="round" />
        ))}
      </svg>

      {/* Lila Korallen / Purple corals */}
      <svg style={{ position: 'absolute', bottom: 35, left: 200 }} width="60" height="80">
        <ellipse cx="30" cy="60" rx="25" ry="20" fill="#9370DB" />
        <ellipse cx="20" cy="45" rx="18" ry="15" fill="#BA55D3" />
        <ellipse cx="40" cy="40" rx="15" ry="12" fill="#9370DB" />
        <ellipse cx="30" cy="35" rx="10" ry="8" fill="#DDA0DD" />
      </svg>

      {/* Gelbe Fächer-Korallen / Yellow fan corals */}
      <svg style={{ position: 'absolute', bottom: 35, right: 150, animation: 'swayGentle 5s ease-in-out infinite', animationDelay: '1s' }} width="70" height="90">
        <path d="M35 90 L35 60 Q10 40 5 10 M35 60 Q60 40 65 10" stroke="#FFD700" strokeWidth="3" fill="none" />
        {[...Array(8)].map((_, i) => (
          <path key={`l-${i}`} d={`M35 ${75 - i * 8} Q${20 - i * 2} ${60 - i * 7} ${10 - i} ${45 - i * 6}`} stroke="#FFD700" strokeWidth="2" fill="none" />
        ))}
        {[...Array(8)].map((_, i) => (
          <path key={`r-${i}`} d={`M35 ${75 - i * 8} Q${50 + i * 2} ${60 - i * 7} ${60 + i} ${45 - i * 6}`} stroke="#FFD700" strokeWidth="2" fill="none" />
        ))}
      </svg>

      {/* Grüne Korallen / Green corals */}
      <svg style={{ position: 'absolute', bottom: 30, right: 60, animation: 'swayGentle 4.5s ease-in-out infinite', animationDelay: '0.5s' }} width="70" height="100">
        {[...Array(6)].map((_, i) => (
          <path key={i} d={`M${10 + i * 10} 100 Q${10 + i * 10} 60 ${5 + i * 12} ${30 + i * 3}`} stroke="#32CD32" strokeWidth="6" fill="none" strokeLinecap="round" />
        ))}
      </svg>

      {/* Seeanemonen mit Clownfisch-Bereich / Sea anemones with clownfish area */}
      <svg style={{ position: 'absolute', bottom: 35, left: 350, animation: 'swayGentle 3s ease-in-out infinite' }} width="60" height="70">
        <ellipse cx="30" cy="65" rx="25" ry="12" fill="#FF1493" />
        {[...Array(14)].map((_, i) => (
          <path key={i} d={`M30 50 Q${15 + (i % 5) * 8} ${30 + (i % 3) * 5} ${8 + i * 3} ${10 + (i % 4) * 5}`} stroke="#FF69B4" strokeWidth="3" fill="none" />
        ))}
      </svg>

      {/* Zusätzliche Korallen / Additional corals */}
      <svg style={{ position: 'absolute', bottom: 35, left: 500 }} width="50" height="70">
        <ellipse cx="25" cy="55" rx="20" ry="15" fill="#00CED1" />
        <ellipse cx="18" cy="42" rx="14" ry="12" fill="#20B2AA" />
        <ellipse cx="32" cy="38" rx="12" ry="10" fill="#00CED1" />
      </svg>

      {/* Seesterne / Starfish */}
      <svg style={{ position: 'absolute', bottom: 15, left: 180 }} width="30" height="30">
        <polygon points="15,0 18,11 30,11 20,18 24,30 15,22 6,30 10,18 0,11 12,11" fill="#FF6347" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 18, right: 280 }} width="25" height="25">
        <polygon points="12.5,0 15,9 25,9 17,15 20,25 12.5,19 5,25 8,15 0,9 10,9" fill="#FFB6C1" />
      </svg>

      {/* Muscheln / Shells */}
      <svg style={{ position: 'absolute', bottom: 15, left: 450 }} width="20" height="18">
        <path d="M10 18 Q2 12 10 0 Q18 12 10 18" fill="#F5DEB3" stroke="#DEB887" strokeWidth="1" />
        <path d="M10 0 L10 18 M5 3 Q10 10 5 16 M15 3 Q10 10 15 16" stroke="#DEB887" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Sandboden mit Textur / Sandy bottom with texture */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        background: 'linear-gradient(to bottom, #DEB887 0%, #C19A6B 100%)',
        borderRadius: '50% 50% 0 0 / 20px 20px 0 0',
        backgroundImage: 'radial-gradient(circle at 20% 70%, #D2B48C 0%, transparent 15%), radial-gradient(circle at 60% 50%, #C4A87C 0%, transparent 12%), radial-gradient(circle at 85% 80%, #D2B48C 0%, transparent 10%)',
      }} />

      {children}
    </div>
  );
}

// ----- BERGSPITZEN-SZENEN / MOUNTAIN PEAK SCENES -----

export function MountainPeak({ width = 800, height = 500, children, timeOfDay = 'day' }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: timeOfDay === 'sunset'
        ? 'linear-gradient(to bottom, #FF6B35 0%, #FFD93D 40%, #87CEEB 100%)'
        : timeOfDay === 'night'
        ? 'linear-gradient(to bottom, #1a1a3e 0%, #2a2a4e 100%)'
        : 'linear-gradient(to bottom, #4169E1 0%, #87CEEB 40%, #B0E0E6 100%)',
      overflow: 'hidden',
    }}>
      {/* Sonne/Mond / Sun/Moon */}
      <div style={{ position: 'absolute', top: 30, right: 80 }}>
        {timeOfDay === 'night' ? <Moon size={50} /> : <Sun size={60} color={timeOfDay === 'sunset' ? '#FF4500' : '#FFD700'} />}
      </div>

      {/* Sterne bei Nacht / Stars at night */}
      {timeOfDay === 'night' && [...Array(40)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: Math.random() * 0.5 + 0.5,
          }}
        />
      ))}

      {/* Distant mountains / Entfernte Berge */}
      <svg style={{ position: 'absolute', bottom: 180, left: 0 }} width={width} height="150" opacity={0.4}>
        <polygon points="0,150 50,60 100,150" fill="#8899aa" />
        <polygon points="80,150 140,40 200,150" fill="#7788aa" />
        <polygon points={`${width-150},150 ${width-100},50 ${width-50},150`} fill="#8899aa" />
      </svg>

      {/* Hintergrund-Berge / Background mountains */}
      <div style={{ position: 'absolute', bottom: 100, left: -50 }}><Mountain size={350} color="#6B8E9F" /></div>
      <div style={{ position: 'absolute', bottom: 100, right: -30 }}><Mountain size={300} color="#7B9EAF" /></div>

      {/* Hauptberg / Main mountain */}
      <svg style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)' }} width="500" height="350">
        <polygon points="250,20 50,350 450,350" fill="#5a6b7a" />
        <polygon points="250,20 100,350 400,350" fill="#6a7b8a" />
        {/* Schneekappe / Snow cap */}
        <polygon points="250,20 200,100 300,100" fill="white" />
        <polygon points="200,100 180,150 250,120 320,150 300,100" fill="#F5F5F5" />
        {/* Snow detail */}
        <polygon points="220,100 210,130 230,125" fill="white" opacity={0.8} />
        <polygon points="280,100 270,125 290,130" fill="white" opacity={0.8} />
      </svg>

      {/* Prayer flags / Gebetsfahnen */}
      <svg style={{ position: 'absolute', bottom: 210, left: '42%' }} width="140" height="60">
        <path d="M0 25 Q70 15 140 25" stroke="#333" strokeWidth="1" fill="none" />
        {[...Array(8)].map((_, i) => (
          <g key={i}>
            <rect
              x={10 + i * 16}
              y={18}
              width={12}
              height={18}
              fill={['#FF0000', '#FFD700', '#32CD32', '#4169E1', '#FF69B4', '#00CED1', '#FFA500', '#9370DB'][i]}
              style={{
                animation: `sway ${2 + i * 0.2}s ease-in-out infinite`,
                transformOrigin: `${16 + i * 16}px 18px`,
              }}
            />
          </g>
        ))}
      </svg>

      {/* Flying eagles / Fliegende Adler */}
      {[...Array(3)].map((_, i) => (
        <svg
          key={i}
          style={{
            position: 'absolute',
            top: 80 + i * 50,
            left: 100 + i * 250,
            animation: `drift ${15 + i * 3}s linear infinite`,
          }}
          width="50"
          height="25"
        >
          <path d="M25 12 Q15 5 0 10 Q10 12 25 12 Q40 12 50 10 Q35 5 25 12" fill="#4a3020" />
          <path d="M25 12 L25 15 L22 18 L28 18 L25 15" fill="#4a3020" />
          <circle cx="25" cy="11" r="3" fill="#4a3020" />
          <path d="M23 10 L20 9" stroke="#FFD700" strokeWidth="1.5" />
        </svg>
      ))}

      {/* Mountain goats / Bergziegen */}
      <svg style={{ position: 'absolute', bottom: 120, left: 150 }} width="45" height="35">
        <ellipse cx="22" cy="22" rx="15" ry="10" fill="#F5F5F5" />
        <circle cx="10" cy="15" r="8" fill="#F5F5F5" />
        <path d="M5 10 L0 2" stroke="#8B4513" strokeWidth="2" />
        <path d="M15 10 L18 2" stroke="#8B4513" strokeWidth="2" />
        <circle cx="7" cy="13" r="1.5" fill="#333" />
        <rect x="12" y="28" width="3" height="8" fill="#8B4513" />
        <rect x="20" y="28" width="3" height="8" fill="#8B4513" />
        <rect x="28" y="28" width="3" height="8" fill="#8B4513" />
        <rect x="35" y="28" width="3" height="8" fill="#8B4513" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 140, right: 180 }} width="35" height="28">
        <ellipse cx="17" cy="17" rx="12" ry="8" fill="#E8E8E8" />
        <circle cx="8" cy="12" r="6" fill="#E8E8E8" />
        <path d="M4 8 L0 2" stroke="#8B4513" strokeWidth="1.5" />
        <path d="M12 8 L14 2" stroke="#8B4513" strokeWidth="1.5" />
        <circle cx="5" cy="10" r="1" fill="#333" />
        <rect x="10" y="22" width="2" height="6" fill="#8B4513" />
        <rect x="16" y="22" width="2" height="6" fill="#8B4513" />
        <rect x="22" y="22" width="2" height="6" fill="#8B4513" />
      </svg>

      {/* Wolken unter dem Gipfel / Clouds below the peak */}
      <div style={{ position: 'absolute', bottom: 150, left: 50, animation: 'drift 20s linear infinite' }}><Cloud size={100} /></div>
      <div style={{ position: 'absolute', bottom: 140, right: 80, animation: 'drift 25s linear infinite reverse' }}><Cloud size={120} /></div>
      <div style={{ position: 'absolute', bottom: 160, left: 250, animation: 'drift 22s linear infinite' }}><Cloud size={90} /></div>

      {/* Wind particles / Windpartikel */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${20 + (i * 17) % 60}%`,
            left: `${(i * 23) % 100}%`,
            width: 30 + (i % 3) * 10,
            height: 2,
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: '50%',
            animation: `drift ${3 + i * 0.3}s linear infinite`,
          }}
        />
      ))}

      {/* Felsen / Rocks */}
      <div style={{ position: 'absolute', bottom: 50, left: 80 }}><Rock size={40} color="#5a6b7a" /></div>
      <div style={{ position: 'absolute', bottom: 45, right: 120 }}><Rock size={35} color="#6a7b8a" /></div>
      <div style={{ position: 'absolute', bottom: 55, left: 200 }}><Rock size={25} color="#5a6b7a" /></div>
      <div style={{ position: 'absolute', bottom: 48, right: 250 }}><Rock size={30} color="#6a7b8a" /></div>

      {/* Small alpine flowers / Kleine Alpenblumen */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: 55 + (i % 3) * 5,
            left: 300 + i * 40,
          }}
        >
          <Flower size={12 + (i % 3) * 3} color={['#FF69B4', '#9370DB', '#FFD700'][i % 3]} />
        </div>
      ))}

      {/* Steiniger Boden / Rocky ground */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        background: 'linear-gradient(to bottom, #696969 0%, #505050 100%)',
      }} />

      {children}
    </div>
  );
}

// ----- MAGISCHE BIBLIOTHEK / MAGIC LIBRARY -----

export function MagicLibrary({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #2c1810 0%, #3d2817 50%, #4a3020 100%)',
      overflow: 'hidden',
    }}>
      {/* Fenster mit Licht / Window with light */}
      <div style={{
        position: 'absolute',
        top: 40,
        right: 80,
        width: 100,
        height: 150,
        background: 'linear-gradient(to bottom, #87CEEB, #B0E0E6)',
        border: '8px solid #5a4030',
        borderRadius: 8,
      }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 4, backgroundColor: '#5a4030' }} />
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 4, backgroundColor: '#5a4030' }} />
      </div>

      {/* Bücherregale / Bookshelves */}
      {[0, 1, 2].map((shelf) => (
        <div key={shelf} style={{ position: 'absolute', bottom: 80 + shelf * 120, left: 20, right: 20 }}>
          {/* Regalbrett / Shelf board */}
          <div style={{ height: 15, backgroundColor: '#5a4030', borderRadius: 2 }} />
          {/* Bücher / Books */}
          <div style={{ display: 'flex', gap: 2, marginTop: -80, paddingLeft: 10 }}>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: 15 + Math.random() * 15,
                  height: 60 + Math.random() * 20,
                  backgroundColor: ['#8B0000', '#00008B', '#006400', '#4B0082', '#8B4513', '#2F4F4F', '#800080'][i % 7],
                  borderRadius: '2px 2px 0 0',
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Schwebende Bücher / Floating books */}
      {[...Array(6)].map((_, i) => (
        <svg
          key={i}
          style={{
            position: 'absolute',
            top: 40 + (i % 3) * 70,
            left: 100 + i * 110,
            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
          width="45"
          height="35"
        >
          <rect x="5" y="8" width="35" height="22" fill={['#FF6347', '#4169E1', '#32CD32', '#FFD700', '#9370DB', '#FF69B4'][i]} rx="2" />
          <rect x="0" y="3" width="6" height="32" fill="#8B4513" />
          {/* Magic glow */}
          <ellipse cx="22" cy="5" rx="18" ry="6" fill="rgba(255,255,200,0.4)" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
          {/* Page lines */}
          <line x1="10" y1="14" x2="36" y2="14" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="10" y1="19" x2="36" y2="19" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="10" y1="24" x2="30" y2="24" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        </svg>
      ))}

      {/* Candles with flickering flames / Kerzen mit flackernden Flammen */}
      {[{ x: 30, y: 320 }, { x: 720, y: 300 }, { x: 400, y: 280 }].map((pos, i) => (
        <svg key={i} style={{ position: 'absolute', left: pos.x, bottom: pos.y }} width="30" height="50">
          {/* Candle body */}
          <rect x="10" y="20" width="10" height="30" fill="#F5F5DC" />
          <rect x="8" y="48" width="14" height="4" fill="#8B4513" rx="1" />
          {/* Wick */}
          <rect x="14" y="15" width="2" height="8" fill="#333" />
          {/* Flame */}
          <ellipse cx="15" cy="12" rx="5" ry="8" fill="#FFA500" style={{ animation: `flicker ${0.3 + i * 0.1}s ease-in-out infinite` }} />
          <ellipse cx="15" cy="10" rx="3" ry="5" fill="#FFD700" style={{ animation: `flicker ${0.25 + i * 0.1}s ease-in-out infinite` }} />
          <ellipse cx="15" cy="8" rx="1.5" ry="3" fill="#FFFACD" />
          {/* Glow */}
          <circle cx="15" cy="12" r="15" fill="rgba(255,200,100,0.2)" style={{ animation: 'pulse 1s ease-in-out infinite' }} />
        </svg>
      ))}

      {/* Dust motes floating / Schwebende Staubpartikel */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${10 + (i * 13) % 70}%`,
            left: `${5 + (i * 17) % 90}%`,
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,200,0.6)',
            animation: `floatSlow ${5 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Magische Lichter / Magical lights */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${15 + (i * 23) % 55}%`,
            left: `${8 + (i * 19) % 85}%`,
            width: 8 + (i % 3) * 3,
            height: 8 + (i % 3) * 3,
            borderRadius: '50%',
            backgroundColor: ['#FFD700', '#00FFFF', '#FF69B4', '#7FFF00', '#9370DB'][i % 5],
            boxShadow: `0 0 ${15 + (i % 3) * 5}px ${['#FFD700', '#00FFFF', '#FF69B4', '#7FFF00', '#9370DB'][i % 5]}`,
            opacity: 0.7,
            animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Magic crystal ball / Magische Kristallkugel */}
      <svg style={{ position: 'absolute', bottom: 85, right: 150 }} width="60" height="70">
        {/* Stand */}
        <path d="M15 65 Q30 55 45 65" fill="#5a4030" />
        <ellipse cx="30" cy="67" rx="18" ry="5" fill="#4a3020" />
        {/* Crystal ball */}
        <circle cx="30" cy="35" r="25" fill="url(#crystalGradient)" />
        <defs>
          <radialGradient id="crystalGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#E0FFFF" />
            <stop offset="50%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#4169E1" />
          </radialGradient>
        </defs>
        {/* Swirling mist inside */}
        <ellipse cx="25" cy="30" rx="10" ry="6" fill="rgba(255,255,255,0.3)" style={{ animation: 'drift 4s linear infinite' }} />
        <ellipse cx="35" cy="40" rx="8" ry="5" fill="rgba(200,200,255,0.3)" style={{ animation: 'drift 5s linear infinite reverse' }} />
        {/* Highlight */}
        <ellipse cx="22" cy="25" rx="6" ry="4" fill="rgba(255,255,255,0.5)" />
      </svg>

      {/* Cobwebs in corners / Spinnweben in den Ecken */}
      <svg style={{ position: 'absolute', top: 0, left: 0 }} width="80" height="80" opacity={0.3}>
        <path d="M0 0 Q40 20 80 0 M0 0 Q20 40 0 80 M0 0 L40 40 M0 0 L20 60 M0 0 L60 20" stroke="white" strokeWidth="0.5" fill="none" />
      </svg>
      <svg style={{ position: 'absolute', top: 0, right: 0, transform: 'scaleX(-1)' }} width="80" height="80" opacity={0.3}>
        <path d="M0 0 Q40 20 80 0 M0 0 Q20 40 0 80 M0 0 L40 40 M0 0 L20 60 M0 0 L60 20" stroke="white" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Open book on stand / Offenes Buch auf Ständer */}
      <svg style={{ position: 'absolute', bottom: 82, left: 60 }} width="80" height="60">
        {/* Book stand */}
        <polygon points="40,55 20,60 60,60" fill="#5a4030" />
        {/* Open book */}
        <path d="M5 20 Q20 30 40 25 Q60 30 75 20 L75 50 Q60 45 40 50 Q20 45 5 50 Z" fill="#F5F5DC" />
        <line x1="40" y1="25" x2="40" y2="50" stroke="#DEB887" strokeWidth="1" />
        {/* Text lines */}
        <line x1="10" y1="30" x2="35" y2="32" stroke="#333" strokeWidth="0.5" opacity="0.5" />
        <line x1="10" y1="35" x2="35" y2="37" stroke="#333" strokeWidth="0.5" opacity="0.5" />
        <line x1="10" y1="40" x2="30" y2="42" stroke="#333" strokeWidth="0.5" opacity="0.5" />
        <line x1="45" y1="32" x2="70" y2="30" stroke="#333" strokeWidth="0.5" opacity="0.5" />
        <line x1="45" y1="37" x2="70" y2="35" stroke="#333" strokeWidth="0.5" opacity="0.5" />
        {/* Magic sparkle on book */}
        <circle cx="55" cy="35" r="3" fill="#FFD700" style={{ animation: 'twinkle 1.5s ease-in-out infinite' }} />
      </svg>

      {/* Holzboden / Wooden floor */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        background: 'linear-gradient(to bottom, #5a4030 0%, #4a3020 100%)',
        backgroundImage: 'repeating-linear-gradient(90deg, #4a3020 0px, #4a3020 2px, transparent 2px, transparent 50px)',
      }} />

      {children}
    </div>
  );
}

// ----- PIRATENSCHIFF / PIRATE SHIP -----

export function PirateShip({ width = 800, height = 500, children, timeOfDay = 'day' }: SceneProps) {
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
      background: `linear-gradient(to bottom, ${skyColors[timeOfDay]} 0%, ${skyColors[timeOfDay]} 50%, #006994 60%, #003366 100%)`,
      overflow: 'hidden',
    }}>
      {/* Sonne/Mond / Sun/Moon */}
      <div style={{ position: 'absolute', top: 30, right: 80 }}>
        {timeOfDay === 'night' ? <Moon size={50} /> : <Sun size={60} color={timeOfDay === 'sunset' ? '#FF4500' : '#FFD700'} />}
      </div>

      {/* Wolken / Clouds */}
      {timeOfDay !== 'night' && (
        <>
          <div style={{ position: 'absolute', top: 40, left: 50, animation: 'drift 30s linear infinite' }}><Cloud size={60} /></div>
          <div style={{ position: 'absolute', top: 60, right: 200, animation: 'drift 35s linear infinite reverse' }}><Cloud size={50} /></div>
          <div style={{ position: 'absolute', top: 30, left: 300, animation: 'drift 28s linear infinite' }}><Cloud size={45} /></div>
        </>
      )}

      {/* Sterne bei Nacht / Stars at night */}
      {timeOfDay === 'night' && [...Array(30)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${(i * 17) % 100}%`,
            top: `${5 + (i * 13) % 40}%`,
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: 0.5 + (i % 5) * 0.1,
            animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Distant island / Ferne Insel */}
      <svg style={{ position: 'absolute', bottom: 130, left: 30, opacity: 0.6 }} width="80" height="50">
        <ellipse cx="40" cy="45" rx="38" ry="8" fill="#DEB887" />
        <path d="M25 45 Q30 20 40 15 Q50 20 55 45" fill="#228B22" />
        <path d="M40 15 L40 5 M40 15 L50 20 M40 15 L30 22" stroke="#8B4513" strokeWidth="2" fill="none" />
      </svg>

      {/* Flying seagulls / Fliegende Möwen */}
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          style={{
            position: 'absolute',
            top: 60 + (i * 25) % 80,
            left: 50 + i * 150,
            animation: `drift ${12 + i * 3}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
          }}
          width="30"
          height="15"
        >
          <path d="M0 8 Q8 2 15 8 Q22 2 30 8" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      ))}

      {/* Animated waves layers / Animierte Wellenschichten */}
      <svg style={{ position: 'absolute', top: '46%', left: 0 }} width={width} height="40">
        <path
          d={`M0 20 Q40 5 80 20 Q120 35 160 20 Q200 5 240 20 Q280 35 320 20 Q360 5 400 20 Q440 35 480 20 Q520 5 560 20 Q600 35 640 20 Q680 5 720 20 Q760 35 ${width} 20`}
          fill="#3CB4B0"
          opacity={0.5}
          style={{ animation: 'wave 4s ease-in-out infinite' }}
        />
      </svg>
      <svg style={{ position: 'absolute', top: '48%', left: 0 }} width={width} height="30">
        <path
          d={`M0 15 Q50 0 100 15 Q150 30 200 15 Q250 0 300 15 Q350 30 400 15 Q450 0 500 15 Q550 30 600 15 Q650 0 700 15 Q750 30 ${width} 15`}
          fill="#20B2AA"
          style={{ animation: 'wave 3s ease-in-out infinite reverse' }}
        />
      </svg>

      {/* Piratenschiff / Pirate ship */}
      <svg style={{ position: 'absolute', bottom: 120, left: '50%', transform: 'translateX(-50%)', animation: 'bob 4s ease-in-out infinite' }} width="350" height="280" viewBox="0 0 350 280">
        {/* Rumpf / Hull */}
        <path d="M50 200 Q25 220 50 250 L300 250 Q325 220 300 200 L250 200 L250 180 L100 180 L100 200 Z" fill="#8B4513" />
        <path d="M70 200 L280 200 L260 180 L120 180 Z" fill="#A0522D" />
        {/* Hull details */}
        <path d="M60 220 L290 220" stroke="#5a3010" strokeWidth="2" />
        <path d="M55 235 L295 235" stroke="#5a3010" strokeWidth="2" />

        {/* Mast / Mast */}
        <rect x="170" y="50" width="10" height="180" fill="#5a4030" />
        {/* Secondary mast */}
        <rect x="270" y="100" width="8" height="100" fill="#5a4030" />

        {/* Segel / Sails */}
        <path d="M180 60 Q250 80 250 140 L180 140 Z" fill="#F5F5F5" stroke="#ddd" strokeWidth="2" style={{ animation: 'swayGentle 5s ease-in-out infinite' }} />
        <path d="M170 60 Q100 80 100 140 L170 140 Z" fill="#F5F5F5" stroke="#ddd" strokeWidth="2" style={{ animation: 'swayGentle 5s ease-in-out infinite', animationDelay: '0.5s' }} />
        {/* Secondary sail */}
        <path d="M278 110 Q310 120 310 160 L278 160 Z" fill="#F5F5F5" stroke="#ddd" strokeWidth="1" style={{ animation: 'swayGentle 4s ease-in-out infinite' }} />

        {/* Piratenflagge / Pirate flag - animated */}
        <g style={{ animation: 'sway 2s ease-in-out infinite', transformOrigin: '175px 30px' }}>
          <rect x="175" y="30" width="40" height="30" fill="black" />
          <circle cx="190" cy="40" r="6" fill="white" />
          <circle cx="200" cy="40" r="6" fill="white" />
          <path d="M188 52 L202 52 M195 52 L195 58 M188 58 L202 58" stroke="white" strokeWidth="2" />
        </g>

        {/* Crew silhouettes / Piraten-Silhouetten */}
        <circle cx="130" cy="168" r="8" fill="#2d1a1a" />
        <rect x="125" y="176" width="10" height="15" fill="#2d1a1a" />
        <circle cx="220" cy="168" r="8" fill="#2d1a1a" />
        <rect x="215" y="176" width="10" height="15" fill="#2d1a1a" />
        <circle cx="175" cy="165" r="9" fill="#2d1a1a" />
        <rect x="169" y="174" width="12" height="18" fill="#2d1a1a" />
        {/* Captain with hat */}
        <circle cx="290" cy="165" r="8" fill="#2d1a1a" />
        <path d="M280 158 L300 158 L290 148 Z" fill="#2d1a1a" />
        <rect x="285" y="173" width="10" height="15" fill="#2d1a1a" />

        {/* Kanonen / Cannons */}
        <circle cx="100" cy="210" r="8" fill="#333" />
        <circle cx="150" cy="210" r="8" fill="#333" />
        <circle cx="200" cy="210" r="8" fill="#333" />
        <circle cx="250" cy="210" r="8" fill="#333" />

        {/* Railing / Geländer */}
        <path d="M90 178 L260 178" stroke="#5a4030" strokeWidth="3" />
        {[...Array(6)].map((_, i) => (
          <rect key={i} x={95 + i * 30} y={168} width="3" height="12" fill="#5a4030" />
        ))}

        {/* Anchor / Anker */}
        <path d="M70 220 L70 240 M60 230 L80 230 M65 240 Q70 250 75 240" stroke="#333" strokeWidth="3" fill="none" />
      </svg>

      {/* Dolphins jumping / Springende Delfine */}
      <svg style={{ position: 'absolute', bottom: 90, left: 80, animation: 'float 3s ease-in-out infinite' }} width="50" height="30">
        <path d="M5 25 Q15 5 30 10 Q45 15 45 25 Q35 20 25 22 Q15 24 5 25" fill="#708090" />
        <path d="M30 10 L40 5 L38 12" fill="#708090" />
        <circle cx="12" cy="18" r="2" fill="#333" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 100, right: 100, animation: 'float 3.5s ease-in-out infinite', animationDelay: '1s' }} width="40" height="25">
        <path d="M5 20 Q12 5 25 8 Q35 12 35 20 Q28 16 20 18 Q12 20 5 20" fill="#708090" />
        <path d="M25 8 L32 4 L30 10" fill="#708090" />
        <circle cx="10" cy="15" r="1.5" fill="#333" />
      </svg>

      {/* Fish in water / Fische im Wasser */}
      {[...Array(6)].map((_, i) => (
        <svg
          key={i}
          style={{
            position: 'absolute',
            bottom: 20 + (i * 15) % 40,
            left: `${10 + (i * 25) % 80}%`,
            animation: `swim ${6 + i}s linear infinite`,
            opacity: 0.6,
          }}
          width="20"
          height="12"
        >
          <ellipse cx="10" cy="6" rx="8" ry="4" fill={['#FFD700', '#FF6347', '#4169E1'][i % 3]} />
          <polygon points="18,6 22,2 22,10" fill={['#FFD700', '#FF6347', '#4169E1'][i % 3]} />
        </svg>
      ))}

      {/* Water sparkles / Wasser-Glitzer */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: 40 + (i * 17) % 70,
            left: `${5 + (i * 19) % 90}%`,
            width: 3,
            height: 3,
            backgroundColor: 'rgba(255,255,255,0.6)',
            borderRadius: '50%',
            animation: `twinkle ${1.5 + (i % 3) * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}

      {/* Meer / Sea */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 120,
        background: 'linear-gradient(to bottom, #20B2AA 0%, #006994 50%, #003366 100%)',
      }} />

      {children}
    </div>
  );
}

// ----- DRACHENHÖHLE / DRAGON LAIR -----

export function DragonLair({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #1a0a0a 0%, #2d1a1a 50%, #3d2020 100%)',
      overflow: 'hidden',
    }}>
      {/* Animated fire glow / Animierter Feuerschein */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '30%',
        width: '40%',
        height: '60%',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(255,100,0,0.4), transparent 70%)',
        animation: 'pulse 3s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '35%',
        width: '30%',
        height: '50%',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(255,150,50,0.3), transparent 60%)',
        animation: 'pulse 2s ease-in-out infinite reverse',
      }} />

      {/* Dragon shadow on wall / Drachenschatten an der Wand */}
      <svg style={{ position: 'absolute', top: 80, right: 60, opacity: 0.3, animation: 'pulse 4s ease-in-out infinite' }} width="200" height="250">
        {/* Dragon body silhouette */}
        <ellipse cx="100" cy="180" rx="70" ry="40" fill="#0a0505" />
        {/* Neck */}
        <path d="M70 160 Q50 120 70 80 Q90 60 110 80" fill="#0a0505" />
        {/* Head */}
        <ellipse cx="115" cy="65" rx="35" ry="25" fill="#0a0505" />
        {/* Snout */}
        <path d="M140 60 L165 55 L160 70 L140 70" fill="#0a0505" />
        {/* Horns */}
        <path d="M95 45 L85 20" stroke="#0a0505" strokeWidth="8" />
        <path d="M120 42 L130 15" stroke="#0a0505" strokeWidth="8" />
        {/* Wing */}
        <path d="M100 150 Q50 100 30 130 Q60 110 80 130 Q90 100 100 150" fill="#0a0505" />
        {/* Tail */}
        <path d="M170 180 Q200 160 190 200 Q180 230 160 220" fill="#0a0505" />
        {/* Glowing eye */}
        <circle cx="130" cy="60" r="5" fill="#FF4500" style={{ animation: 'blink 4s ease-in-out infinite' }} />
      </svg>

      {/* Smoke wisps / Rauchschwaden */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: 80 + (i * 30) % 100,
            left: `${35 + (i * 17) % 30}%`,
            width: 30 + (i % 3) * 15,
            height: 60 + (i % 4) * 20,
            background: 'radial-gradient(ellipse at center, rgba(80,80,80,0.3), transparent 70%)',
            borderRadius: '50%',
            animation: `rise ${5 + i}s ease-out infinite`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      {/* Höhlendecke / Cave ceiling */}
      <svg style={{ position: 'absolute', top: 0, left: 0 }} width={width} height="120">
        <path
          d={`M0 0 L0 60 Q100 100 200 50 Q300 90 400 40 Q500 100 600 55 Q700 85 ${width} 50 L${width} 0 Z`}
          fill="#1a0a0a"
        />
        {[...Array(12)].map((_, i) => (
          <polygon
            key={i}
            points={`${60 + i * 65},${35 + (i * 7) % 20} ${50 + i * 65},${75 + (i * 11) % 30} ${70 + i * 65},${75 + (i * 13) % 30}`}
            fill="#2d1a1a"
          />
        ))}
      </svg>

      {/* Schätze / Treasures with sparkles */}
      <svg style={{ position: 'absolute', bottom: 40, left: '30%' }} width="300" height="100">
        {/* Goldhaufen / Gold pile */}
        <ellipse cx="150" cy="80" rx="140" ry="30" fill="#FFD700" />
        <ellipse cx="150" cy="70" rx="120" ry="25" fill="#FFA500" />
        <ellipse cx="150" cy="60" rx="100" ry="20" fill="#FFD700" />
        {/* Münzen / Coins */}
        {[...Array(35)].map((_, i) => (
          <circle key={i} cx={40 + (i * 17) % 220} cy={45 + (i * 13) % 45} r={3 + (i % 4)} fill={['#FFD700', '#FFA500', '#DAA520'][i % 3]} />
        ))}
        {/* Edelsteine / Glowing gems */}
        {[...Array(10)].map((_, i) => (
          <g key={i}>
            <polygon
              points={`${50 + i * 25},${35 + (i * 7) % 20} ${45 + i * 25},${48 + (i * 5) % 10} ${55 + i * 25},${48 + (i * 5) % 10}`}
              fill={['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#00FFFF'][i % 5]}
              style={{ animation: `twinkle ${1.5 + (i % 3) * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
            />
          </g>
        ))}
        {/* Krone / Crown */}
        <polygon points="140,25 145,5 150,20 155,0 160,20 165,5 170,25" fill="#FFD700" stroke="#DAA520" strokeWidth="2" />
        <rect x="140" y="25" width="30" height="10" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
        {/* Crown gems */}
        <circle cx="155" cy="8" r="4" fill="#FF0000" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
      </svg>

      {/* Treasure sparkles / Schatz-Funken */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: 50 + (i * 11) % 40,
            left: `${32 + (i * 13) % 35}%`,
            width: 4,
            height: 4,
            backgroundColor: '#FFD700',
            borderRadius: '50%',
            boxShadow: '0 0 6px #FFD700',
            animation: `twinkle ${1 + (i % 3) * 0.3}s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}

      {/* Floating embers / Fliegende Glut */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: 60 + (i * 23) % 150,
            left: `${25 + (i * 19) % 50}%`,
            width: 3 + (i % 2),
            height: 3 + (i % 2),
            backgroundColor: ['#FF4500', '#FFA500', '#FF6347'][i % 3],
            borderRadius: '50%',
            opacity: 0.7,
            animation: `rise ${4 + (i % 4)}s ease-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Felsen / Rocks with lava cracks */}
      <div style={{ position: 'absolute', bottom: 30, left: 50 }}><Rock size={60} color="#2d1a1a" /></div>
      <div style={{ position: 'absolute', bottom: 35, right: 80 }}><Rock size={70} color="#3d2020" /></div>
      <div style={{ position: 'absolute', bottom: 40, left: 150 }}><Rock size={45} color="#3d2020" /></div>
      <div style={{ position: 'absolute', bottom: 25, right: 200 }}><Rock size={50} color="#2d1a1a" /></div>

      {/* Lava cracks on floor / Lava-Risse im Boden */}
      <svg style={{ position: 'absolute', bottom: 10, left: 0 }} width={width} height="50">
        <path d="M50 40 Q70 20 100 35 Q120 10 150 30" stroke="#FF4500" strokeWidth="3" fill="none" opacity={0.6} style={{ animation: 'pulse 2s ease-in-out infinite' }} />
        <path d="M300 45 Q320 25 350 40 Q370 15 400 35" stroke="#FF4500" strokeWidth="2" fill="none" opacity={0.5} style={{ animation: 'pulse 2.5s ease-in-out infinite' }} />
        <path d="M550 40 Q580 20 620 38" stroke="#FF4500" strokeWidth="3" fill="none" opacity={0.6} style={{ animation: 'pulse 3s ease-in-out infinite' }} />
      </svg>

      {/* Bones / Knochen */}
      <svg style={{ position: 'absolute', bottom: 55, left: 20 }} width="40" height="20">
        <ellipse cx="8" cy="10" rx="6" ry="4" fill="#E8E8E8" />
        <rect x="8" y="8" width="24" height="4" fill="#E8E8E8" rx="2" />
        <ellipse cx="32" cy="10" rx="6" ry="4" fill="#E8E8E8" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 50, right: 30 }} width="30" height="15" opacity={0.8}>
        <ellipse cx="6" cy="7" rx="5" ry="3" fill="#E8E8E8" />
        <rect x="6" y="5" width="18" height="3" fill="#E8E8E8" rx="1" />
        <ellipse cx="24" cy="7" rx="5" ry="3" fill="#E8E8E8" />
      </svg>

      {/* Höhlenboden / Cave floor */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        background: 'linear-gradient(to bottom, #3d2020 0%, #2d1a1a 100%)',
      }} />

      {children}
    </div>
  );
}

// ----- SPIELPLATZ / PLAYGROUND -----

export function Playground({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #87CEEB 0%, #B0E0E6 100%)',
      overflow: 'hidden',
    }}>
      {/* Sonne / Sun */}
      <div style={{ position: 'absolute', top: 20, right: 60 }}><Sun size={60} /></div>

      {/* Wolken / Clouds */}
      <div style={{ position: 'absolute', top: 30, left: 60, animation: 'drift 25s linear infinite' }}><Cloud size={60} /></div>
      <div style={{ position: 'absolute', top: 50, left: 200, animation: 'drift 30s linear infinite reverse' }}><Cloud size={50} /></div>
      <div style={{ position: 'absolute', top: 40, right: 100, animation: 'drift 28s linear infinite' }}><Cloud size={45} /></div>

      {/* Flying birds / Fliegende Vögel */}
      {[...Array(4)].map((_, i) => (
        <svg
          key={i}
          style={{
            position: 'absolute',
            top: 50 + i * 30,
            left: 100 + i * 180,
            animation: `drift ${15 + i * 3}s linear infinite`,
          }}
          width="25"
          height="12"
        >
          <path d="M0 6 Q6 0 12 6 Q18 0 25 6" stroke="#333" strokeWidth="2" fill="none" />
        </svg>
      ))}

      {/* Butterflies / Schmetterlinge */}
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          style={{
            position: 'absolute',
            top: 80 + (i * 40) % 150,
            left: 50 + (i * 150) % 700,
            animation: `flutter ${3 + i * 0.5}s ease-in-out infinite`,
          }}
          width="20"
          height="15"
        >
          <ellipse cx="10" cy="7" rx="2" ry="6" fill={['#FF69B4', '#FFD700', '#87CEEB', '#FF6347', '#9370DB'][i]} />
          <ellipse cx="6" cy="7" rx="5" ry="4" fill={['#FF69B4', '#FFD700', '#87CEEB', '#FF6347', '#9370DB'][i]} opacity={0.8} />
          <ellipse cx="14" cy="7" rx="5" ry="4" fill={['#FF69B4', '#FFD700', '#87CEEB', '#FF6347', '#9370DB'][i]} opacity={0.8} />
        </svg>
      ))}

      {/* Rutsche / Slide with kid silhouette */}
      <svg style={{ position: 'absolute', bottom: 60, left: 80 }} width="120" height="150">
        <rect x="5" y="0" width="8" height="130" fill="#FF4500" />
        <rect x="107" y="50" width="8" height="80" fill="#FF4500" />
        <path d="M13 10 L107 60 L107 80 L13 30 Z" fill="#FFD700" />
        <rect x="0" y="125" width="120" height="10" fill="#8B4513" rx="2" />
        {/* Kid on slide */}
        <circle cx="60" cy="42" r="8" fill="#FFB6C1" />
        <rect x="55" y="48" width="10" height="15" fill="#4169E1" rx="2" />
      </svg>

      {/* Animated Swing / Animierte Schaukel */}
      <svg style={{ position: 'absolute', bottom: 60, right: 80 }} width="150" height="160">
        <rect x="10" y="0" width="8" height="140" fill="#8B4513" />
        <rect x="132" y="0" width="8" height="140" fill="#8B4513" />
        <rect x="0" y="0" width="150" height="10" fill="#8B4513" />
        {/* Left swing - animated */}
        <g style={{ animation: 'sway 2s ease-in-out infinite', transformOrigin: '45px 10px' }}>
          <path d="M45 10 L45 100" stroke="#333" strokeWidth="3" />
          <rect x="35" y="95" width="20" height="8" fill="#333" rx="2" />
          {/* Kid on swing */}
          <circle cx="45" cy="85" r="7" fill="#FFDAB9" />
          <rect x="40" y="90" width="10" height="12" fill="#FF69B4" rx="1" />
        </g>
        {/* Right swing - animated opposite */}
        <g style={{ animation: 'sway 2s ease-in-out infinite reverse', transformOrigin: '105px 10px' }}>
          <path d="M105 10 L105 100" stroke="#333" strokeWidth="3" />
          <rect x="95" y="95" width="20" height="8" fill="#333" rx="2" />
          {/* Kid on swing */}
          <circle cx="105" cy="85" r="7" fill="#DEB887" />
          <rect x="100" y="90" width="10" height="12" fill="#32CD32" rx="1" />
        </g>
      </svg>

      {/* Sandkasten / Sandbox with kid */}
      <svg style={{ position: 'absolute', bottom: 50, left: '40%', transform: 'translateX(-50%)' }} width="140" height="70">
        <rect x="0" y="30" width="140" height="40" fill="#8B4513" stroke="#5a3010" strokeWidth="4" />
        <rect x="5" y="35" width="130" height="30" fill="#DEB887" />
        {/* Kid playing in sandbox */}
        <circle cx="70" cy="25" r="10" fill="#FFDAB9" />
        <rect x="63" y="33" width="14" height="18" fill="#FFD700" rx="2" />
        {/* Sandcastles */}
        <path d="M30 50 L25 65 L35 65 Z" fill="#C19A6B" />
        <rect x="26" y="55" width="8" height="10" fill="#C19A6B" />
        <path d="M100 52 L95 65 L105 65 Z" fill="#C19A6B" />
        {/* Bucket and shovel */}
        <path d="M50 55 L45 65 L55 65 Z" fill="#FF6347" />
        <rect x="115" y="55" width="12" height="3" fill="#4169E1" />
        <rect x="124" y="52" width="3" height="13" fill="#8B4513" />
      </svg>

      {/* Animated Seesaw / Animierte Wippe */}
      <svg style={{ position: 'absolute', bottom: 55, left: 280 }} width="100" height="60">
        <polygon points="50,55 40,60 60,60" fill="#8B4513" />
        <g style={{ animation: 'sway 3s ease-in-out infinite', transformOrigin: '50px 50px' }}>
          <rect x="5" y="40" width="90" height="8" fill="#4169E1" rx="4" />
          {/* Kids on seesaw */}
          <circle cx="15" cy="32" r="8" fill="#FF69B4" />
          <rect x="10" y="38" width="10" height="8" fill="#9370DB" rx="1" />
          <circle cx="85" cy="38" r="8" fill="#32CD32" />
          <rect x="80" y="44" width="10" height="8" fill="#FFD700" rx="1" />
        </g>
      </svg>

      {/* Bouncing balls / Hüpfende Bälle */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: 70 + (i * 10),
            left: 400 + i * 80,
            width: 20 + i * 5,
            height: 20 + i * 5,
            borderRadius: '50%',
            backgroundColor: ['#FF6347', '#FFD700', '#4169E1'][i],
            animation: `bounce ${1 + i * 0.2}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Running dog / Laufender Hund */}
      <svg style={{ position: 'absolute', bottom: 60, left: 450, animation: 'drift 10s linear infinite reverse' }} width="40" height="30">
        <ellipse cx="20" cy="18" rx="15" ry="10" fill="#8B4513" />
        <circle cx="8" cy="12" r="8" fill="#8B4513" />
        <circle cx="5" cy="10" r="2" fill="#333" />
        <ellipse cx="3" cy="14" rx="3" ry="2" fill="#333" />
        <rect x="10" y="25" width="4" height="8" fill="#8B4513" />
        <rect x="20" y="25" width="4" height="8" fill="#8B4513" />
        <path d="M35 15 Q42 10 38 18" stroke="#8B4513" strokeWidth="3" fill="none" />
      </svg>

      {/* Bäume / Trees */}
      <div style={{ position: 'absolute', bottom: 50, left: 0 }}><Tree size={100} /></div>
      <div style={{ position: 'absolute', bottom: 50, right: 0 }}><Tree size={90} /></div>
      <div style={{ position: 'absolute', bottom: 55, left: 600 }}><Tree size={70} /></div>

      {/* Flowers / Blumen */}
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{ position: 'absolute', bottom: 55 + (i % 3) * 5, left: 30 + i * 90 }}>
          <Flower size={15 + (i % 3) * 5} color={['#FF69B4', '#FFD700', '#FF6347', '#9370DB'][i % 4]} />
        </div>
      ))}

      {/* Zaun / Fence */}
      <div style={{ position: 'absolute', bottom: 45, left: 200 }}><Fence width={80} height={30} color="#8B4513" /></div>

      {/* Gras / Grass */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Grass width={width} height={70} />
      </div>

      {children}
    </div>
  );
}

// ----- BONBON-LAND / CANDY LAND -----

export function CandyLand({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #FFB6C1 0%, #FFC0CB 50%, #FFE4E1 100%)',
      overflow: 'hidden',
    }}>
      {/* Rainbow / Regenbogen */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: 50,
        width: 200,
        height: 100,
        borderRadius: '100px 100px 0 0',
        border: '8px solid transparent',
        borderTopColor: 'red',
        boxShadow: '0 0 0 8px orange, 0 0 0 16px yellow, 0 0 0 24px green, 0 0 0 32px blue, 0 0 0 40px purple',
        opacity: 0.4,
      }} />

      {/* Sonne als Bonbon / Sun as candy - animated */}
      <svg style={{ position: 'absolute', top: 20, right: 60, animation: 'spin 20s linear infinite' }} width="70" height="70">
        <circle cx="35" cy="35" r="30" fill="#FFD700" />
        <path d="M35 5 L35 15 M35 55 L35 65 M5 35 L15 35 M55 35 L65 35 M12 12 L20 20 M50 50 L58 58 M12 58 L20 50 M50 20 L58 12" stroke="#FF6347" strokeWidth="4" />
        <circle cx="35" cy="35" r="20" fill="#FFA500" />
        <circle cx="28" cy="30" r="5" fill="rgba(255,255,255,0.5)" />
      </svg>

      {/* Falling candy / Fallende Bonbons */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: -20,
            left: `${5 + (i * 23) % 90}%`,
            width: 12 + (i % 4) * 3,
            height: 12 + (i % 4) * 3,
            borderRadius: '50%',
            backgroundColor: ['#FF69B4', '#00CED1', '#FFD700', '#9370DB', '#32CD32', '#FF6347'][i % 6],
            animation: `fall ${4 + (i % 3)}s linear infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* Wolken aus Zuckerwatte / Cotton candy clouds - pink tinted */}
      <div style={{ position: 'absolute', top: 40, left: 50, opacity: 0.9, filter: 'hue-rotate(320deg)', animation: 'drift 25s linear infinite' }}><Cloud size={80} /></div>
      <div style={{ position: 'absolute', top: 60, left: 180, opacity: 0.9, filter: 'hue-rotate(280deg)', animation: 'drift 30s linear infinite reverse' }}><Cloud size={60} /></div>
      <div style={{ position: 'absolute', top: 35, right: 180, opacity: 0.9, filter: 'hue-rotate(200deg)', animation: 'drift 28s linear infinite' }}><Cloud size={70} /></div>

      {/* Animated Lollipop-Bäume / Lollipop trees */}
      {[60, 200, 350, 500, 650].map((x, i) => (
        <svg key={i} style={{ position: 'absolute', bottom: 50, left: x }} width="60" height="140">
          <rect x="27" y="70" width="6" height="70" fill="#F5F5F5" />
          <g style={{ animation: `spin ${8 + i * 2}s linear infinite`, transformOrigin: '30px 50px' }}>
            <circle cx="30" cy="50" r="40" fill={['#FF69B4', '#00CED1', '#FFD700', '#9370DB', '#32CD32'][i]} />
            <path d={`M30 10 A20 20 0 0 1 30 90 A20 20 0 0 1 30 10`} fill="none" stroke="white" strokeWidth="8" strokeDasharray="15 15" />
          </g>
        </svg>
      ))}

      {/* Candy canes / Zuckerstangen */}
      {[100, 450, 580].map((x, i) => (
        <svg key={i} style={{ position: 'absolute', bottom: 55, left: x }} width="25" height="80">
          <path d="M12 80 L12 20 Q12 5 22 5" stroke="#FF0000" strokeWidth="8" fill="none" />
          <path d="M12 80 L12 20 Q12 5 22 5" stroke="white" strokeWidth="8" fill="none" strokeDasharray="10 10" strokeDashoffset={i * 5} />
        </svg>
      ))}

      {/* Gummy bears / Gummibärchen */}
      {[...Array(6)].map((_, i) => (
        <svg
          key={i}
          style={{
            position: 'absolute',
            bottom: 60 + (i % 3) * 10,
            left: 280 + i * 50,
            animation: `bounce ${1.5 + (i % 3) * 0.3}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
          width="20"
          height="25"
        >
          <ellipse cx="10" cy="18" rx="8" ry="6" fill={['#FF0000', '#FFD700', '#32CD32', '#FF69B4', '#FFA500', '#9370DB'][i]} />
          <circle cx="10" cy="8" r="6" fill={['#FF0000', '#FFD700', '#32CD32', '#FF69B4', '#FFA500', '#9370DB'][i]} />
          <circle cx="5" cy="5" r="3" fill={['#FF0000', '#FFD700', '#32CD32', '#FF69B4', '#FFA500', '#9370DB'][i]} />
          <circle cx="15" cy="5" r="3" fill={['#FF0000', '#FFD700', '#32CD32', '#FF69B4', '#FFA500', '#9370DB'][i]} />
          <circle cx="7" cy="7" r="1" fill="#333" />
          <circle cx="13" cy="7" r="1" fill="#333" />
        </svg>
      ))}

      {/* Bonbon-Steine / Candy rocks */}
      <svg style={{ position: 'absolute', bottom: 45, left: 130 }} width="40" height="30">
        <ellipse cx="20" cy="20" rx="18" ry="12" fill="#FF6347" />
        <path d="M5 20 Q20 10 35 20" stroke="white" strokeWidth="3" fill="none" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 42, right: 200 }} width="35" height="25">
        <ellipse cx="17" cy="15" rx="15" ry="10" fill="#9370DB" />
        <path d="M5 15 Q17 8 30 15" stroke="white" strokeWidth="2" fill="none" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 48, left: 400 }} width="30" height="22">
        <ellipse cx="15" cy="14" rx="13" ry="9" fill="#00CED1" />
        <path d="M4 14 Q15 7 26 14" stroke="white" strokeWidth="2" fill="none" />
      </svg>

      {/* Enhanced Lebkuchenhaus / Gingerbread house */}
      <svg style={{ position: 'absolute', bottom: 50, right: 60 }} width="100" height="130">
        <rect x="10" y="55" width="80" height="70" fill="#D2691E" />
        <polygon points="50,10 0,60 100,60" fill="#8B4513" />
        {/* Icing on roof */}
        <path d="M5 60 Q15 55 25 62 Q35 55 50 62 Q65 55 75 62 Q85 55 95 60" stroke="white" strokeWidth="5" fill="none" />
        {/* Door */}
        <rect x="35" y="85" width="30" height="40" fill="#A0522D" rx="15" />
        <circle cx="58" cy="105" r="3" fill="#FFD700" />
        {/* Windows */}
        <rect x="15" y="70" width="15" height="15" fill="#87CEEB" rx="2" />
        <rect x="70" y="70" width="15" height="15" fill="#87CEEB" rx="2" />
        {/* Candy decorations */}
        <circle cx="22" cy="95" r="6" fill="#FF69B4" />
        <circle cx="78" cy="95" r="6" fill="#32CD32" />
        <circle cx="20" cy="40" r="5" fill="#FFD700" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
        <circle cx="50" cy="25" r="6" fill="#FF6347" style={{ animation: 'pulse 2s ease-in-out infinite', animationDelay: '0.5s' }} />
        <circle cx="80" cy="40" r="5" fill="#00CED1" style={{ animation: 'pulse 2s ease-in-out infinite', animationDelay: '1s' }} />
        {/* Chimney with smoke */}
        <rect x="70" y="20" width="15" height="25" fill="#8B4513" />
      </svg>

      {/* Smoke from chimney */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: 155 + i * 20,
            right: 78,
            width: 15 + i * 5,
            height: 15 + i * 5,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.6)',
            animation: `rise ${3 + i}s ease-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Animated Schokoladen-Fluss / Chocolate river */}
      <svg style={{ position: 'absolute', bottom: 45, left: '20%', width: '35%', height: 40 }}>
        <ellipse cx="50%" cy="20" rx="48%" ry="18" fill="#5D3A1A" />
        <ellipse cx="50%" cy="18" rx="45%" ry="15" fill="#8B4513">
          <animate attributeName="rx" values="45%;47%;45%" dur="2s" repeatCount="indefinite" />
        </ellipse>
        {/* Chocolate ripples */}
        <ellipse cx="30%" cy="18" rx="8%" ry="4" fill="#6B4423" opacity="0.5" style={{ animation: 'drift 3s linear infinite' }} />
        <ellipse cx="70%" cy="18" rx="6%" ry="3" fill="#6B4423" opacity="0.5" style={{ animation: 'drift 4s linear infinite reverse' }} />
      </svg>

      {/* Sparkles / Funken */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${10 + (i * 19) % 70}%`,
            left: `${5 + (i * 23) % 90}%`,
            width: 4,
            height: 4,
            backgroundColor: ['#FFD700', '#FF69B4', '#00CED1', '#9370DB'][i % 4],
            borderRadius: '50%',
            animation: `twinkle ${1 + (i % 3) * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}

      {/* Bonbon-Boden / Candy ground */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        background: 'repeating-linear-gradient(90deg, #FFB6C1 0px, #FFB6C1 40px, #FFE4E1 40px, #FFE4E1 80px)',
      }} />

      {children}
    </div>
  );
}

// ----- BAUMKRONEN / TREETOP CANOPY -----

export function RainforestCanopy({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #87CEEB 0%, #32CD32 30%, #228B22 60%, #006400 100%)',
      overflow: 'hidden',
    }}>
      {/* Sonnenstrahlen / Sunbeams - animated shimmer */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: 0,
            left: 80 + i * 130,
            width: 45,
            height: '45%',
            background: 'linear-gradient(to bottom, rgba(255,255,100,0.5), transparent)',
            transform: `rotate(${-12 + i * 5}deg)`,
            transformOrigin: 'top center',
            animation: `shimmer ${2 + i * 0.3}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Obere Blätterschicht / Upper leaf layer - animated sway */}
      {[...Array(14)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: 15 + (i % 4) * 25,
          left: `${i * 7}%`,
          animation: `sway ${3 + (i % 3) * 0.5}s ease-in-out infinite`,
        }}>
          <Bush size={85 + (i % 4) * 15} color={['#228B22', '#32CD32', '#2E8B57', '#1e7b1e'][i % 4]} />
        </div>
      ))}

      {/* Äste / Branches */}
      <svg style={{ position: 'absolute', top: 150, left: 0 }} width={width} height="100">
        <path d={`M0 50 Q200 30 400 60 Q600 40 ${width} 50`} stroke="#8B4513" strokeWidth="20" fill="none" />
        <path d={`M100 50 Q150 20 200 50`} stroke="#8B4513" strokeWidth="12" fill="none" />
        <path d={`M500 50 Q550 80 620 45`} stroke="#8B4513" strokeWidth="10" fill="none" />
        <path d={`M300 60 Q350 40 380 70`} stroke="#6B3D0F" strokeWidth="8" fill="none" />
      </svg>

      {/* Hängende Lianen / Hanging vines - animated */}
      {[...Array(10)].map((_, i) => (
        <svg key={i} style={{
          position: 'absolute',
          top: 100,
          left: 30 + i * 80,
          animation: `sway ${4 + (i % 3)}s ease-in-out infinite`,
          transformOrigin: 'top center',
        }} width="35" height="280">
          <path
            d={`M17 0 Q${3 + (i % 4) * 7} 100 ${(i % 3) * 12} 200 Q${(i % 4) * 8} 250 17 280`}
            stroke="#228B22"
            strokeWidth="4"
            fill="none"
          />
          {[...Array(5)].map((_, j) => (
            <ellipse key={j} cx={6 + (j % 3) * 8} cy={50 + j * 50} rx="12" ry="7" fill={j % 2 === 0 ? '#32CD32' : '#2E8B57'} />
          ))}
        </svg>
      ))}

      {/* Tukane / Toucans - colorful birds */}
      {[0, 1].map((i) => (
        <svg key={`toucan-${i}`} style={{
          position: 'absolute',
          top: 120 + i * 80,
          left: 100 + i * 450,
          animation: `bob ${2 + i * 0.5}s ease-in-out infinite`,
        }} width="55" height="40" viewBox="0 0 55 40">
          {/* Body */}
          <ellipse cx="35" cy="20" rx="16" ry="13" fill="#1a1a1a" />
          <ellipse cx="35" cy="18" rx="14" ry="10" fill="#2a2a2a" />
          {/* White chest patch */}
          <ellipse cx="32" cy="24" rx="6" ry="5" fill="#FFFAF0" />
          {/* Head */}
          <circle cx="18" cy="18" r="9" fill="#1a1a1a" />
          {/* Beak - large colorful */}
          <path d="M2 15 Q-5 18 2 22 Q10 20 18 18 Q10 16 2 15" fill="#FF6B00" />
          <path d="M2 16 Q-3 18 2 21" fill="#FFD700" />
          <path d="M4 17 Q8 18 12 18" fill="#32CD32" />
          <path d="M2 15 Q-5 18 2 22" stroke="#CC5500" strokeWidth="0.5" fill="none" />
          {/* Beak tip */}
          <ellipse cx="0" cy="18.5" rx="2" ry="1.5" fill="#1a1a1a" />
          {/* Eye ring */}
          <circle cx="15" cy="16" r="4" fill="#00AA00" />
          <circle cx="15" cy="16" r="3" fill="white" />
          <circle cx="15.5" cy="15.5" r="1.5" fill="#1a1a1a" />
          <circle cx="16" cy="15" r="0.5" fill="white" />
          {/* Wing detail */}
          <path d="M30 15 Q40 12 48 18" stroke="#333" strokeWidth="1" fill="none" />
          <path d="M32 18 Q40 16 46 20" stroke="#333" strokeWidth="0.5" fill="none" />
          {/* Tail feathers */}
          <path d="M48 18 L54 14 L54 16 L52 20 L54 24 L54 26 L48 22" fill="#1a1a1a" />
          {/* Feet */}
          <path d="M30 32 L28 36 M30 32 L32 36 M32 32 L34 36" stroke="#666" strokeWidth="1.5" />
        </svg>
      ))}

      {/* Papageien / Parrots flying */}
      {[...Array(4)].map((_, i) => {
        const colors = [
          { main: '#E63939', light: '#FF6666', dark: '#B32D2D' },
          { main: '#00AA00', light: '#22DD22', dark: '#008800' },
          { main: '#3366FF', light: '#6699FF', dark: '#2244CC' },
          { main: '#FFAA00', light: '#FFCC44', dark: '#DD8800' }
        ][i];
        return (
          <svg key={`parrot-${i}`} style={{
            position: 'absolute',
            top: 50 + i * 50,
            left: 200 + i * 160,
            animation: `flutter ${1.5 + i * 0.2}s ease-in-out infinite`,
          }} width="40" height="30" viewBox="0 0 40 30">
            {/* Body */}
            <ellipse cx="20" cy="14" rx="11" ry="8" fill={colors.main} />
            <ellipse cx="20" cy="12" rx="9" ry="6" fill={colors.light} />
            {/* Head */}
            <circle cx="10" cy="11" r="6" fill={colors.main} />
            <circle cx="10" cy="10" r="5" fill={colors.light} />
            {/* Curved beak */}
            <path d="M4 11 Q2 10 3 8 Q5 9 6 11 Q5 12 4 11" fill="#444" />
            <path d="M4 11 Q3 12 4 13 L6 12" fill="#333" />
            {/* Eye with highlight */}
            <circle cx="8" cy="9" r="2" fill="white" />
            <circle cx="8.3" cy="8.7" r="1.2" fill="#1a1a1a" />
            <circle cx="8.8" cy="8.3" r="0.4" fill="white" />
            {/* Wing - raised */}
            <path d="M15 10 Q22 4 32 8 Q28 10 22 12 Q18 11 15 10" fill={colors.dark} />
            <path d="M17 11 Q22 6 30 9" stroke={colors.main} strokeWidth="0.5" fill="none" />
            {/* Wing feather details */}
            <path d="M26 8 L30 6 M24 9 L28 7 M22 10 L26 8" stroke={colors.light} strokeWidth="0.5" />
            {/* Tail feathers */}
            <path d="M28 14 Q34 12 38 14 Q36 16 32 16 Q30 15 28 14" fill={colors.main} />
            <path d="M28 16 Q33 18 36 20 Q33 19 28 17" fill={colors.dark} />
            {/* Feet tucked */}
            <path d="M18 20 L16 24 M20 20 L20 24" stroke="#666" strokeWidth="1" />
          </svg>
        );
      })}

      {/* Affen / Monkeys on branches */}
      {[0, 1, 2].map((i) => (
        <svg key={`monkey-${i}`} style={{
          position: 'absolute',
          top: 160 + i * 10,
          left: [150, 420, 650][i],
          animation: `sway ${3 + i * 0.5}s ease-in-out infinite`,
          transformOrigin: 'top center',
        }} width="50" height="65" viewBox="0 0 50 65">
          {/* Tail - curled */}
          <path d="M32 42 Q45 48 42 58 Q38 62 34 58 Q36 52 34 48" stroke="#7A3E0D" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Body */}
          <ellipse cx="24" cy="35" rx="13" ry="16" fill="#8B4513" />
          <ellipse cx="24" cy="33" rx="11" ry="13" fill="#9B5523" />
          {/* Belly */}
          <ellipse cx="24" cy="38" rx="7" ry="9" fill="#C4956A" />
          {/* Arms */}
          <path d="M12 28 Q4 32 6 42 Q8 44 10 42" stroke="#8B4513" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M36 28 Q44 30 42 40 Q40 42 38 40" stroke="#8B4513" strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* Hands */}
          <circle cx="8" cy="43" r="4" fill="#7A3E0D" />
          <circle cx="40" cy="41" r="4" fill="#7A3E0D" />
          {/* Head */}
          <circle cx="24" cy="14" r="11" fill="#A0522D" />
          <circle cx="24" cy="13" r="10" fill="#B5623D" />
          {/* Face */}
          <ellipse cx="24" cy="16" rx="7" ry="6" fill="#DEB887" />
          {/* Ears */}
          <circle cx="13" cy="11" r="5" fill="#A0522D" />
          <circle cx="35" cy="11" r="5" fill="#A0522D" />
          <circle cx="13" cy="11" r="3" fill="#D4A574" />
          <circle cx="35" cy="11" r="3" fill="#D4A574" />
          {/* Eyes */}
          <ellipse cx="20" cy="12" rx="2.5" ry="3" fill="white" />
          <ellipse cx="28" cy="12" rx="2.5" ry="3" fill="white" />
          <circle cx="20.5" cy="12.5" r="1.5" fill="#3D2314" />
          <circle cx="28.5" cy="12.5" r="1.5" fill="#3D2314" />
          <circle cx="21" cy="12" r="0.5" fill="white" />
          <circle cx="29" cy="12" r="0.5" fill="white" />
          {/* Nose */}
          <ellipse cx="24" cy="17" rx="2" ry="1.5" fill="#8B4513" />
          <circle cx="23" cy="17" r="0.8" fill="#5D2E0A" />
          <circle cx="25" cy="17" r="0.8" fill="#5D2E0A" />
          {/* Mouth */}
          <path d="M22 20 Q24 22 26 20" stroke="#5D2E0A" strokeWidth="0.8" fill="none" />
        </svg>
      ))}

      {/* Fallende Blätter / Falling leaves */}
      {[...Array(15)].map((_, i) => {
        const leafColors = [
          { fill: '#228B22', vein: '#1a5a1a', highlight: '#32CD32' },
          { fill: '#32CD32', vein: '#228B22', highlight: '#90EE90' },
          { fill: '#2E8B57', vein: '#1e5e3e', highlight: '#3CB371' },
          { fill: '#6B8E23', vein: '#4a6318', highlight: '#9ACD32' }
        ][i % 4];
        return (
          <div
            key={`leaf-${i}`}
            style={{
              position: 'absolute',
              left: `${(i * 67) % 100}%`,
              top: -20,
              animation: `fall ${6 + (i % 4) * 2}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <svg width="18" height="24" viewBox="0 0 18 24">
              {/* Leaf shape with point */}
              <path d={`M9 1 Q2 8 3 14 Q4 20 9 23 Q14 20 15 14 Q16 8 9 1`} fill={leafColors.fill} />
              {/* Highlight */}
              <path d={`M9 3 Q5 9 6 14 Q7 17 9 19`} fill={leafColors.highlight} opacity="0.4" />
              {/* Main vein */}
              <path d="M9 2 L9 22" stroke={leafColors.vein} strokeWidth="1" />
              {/* Side veins */}
              <path d="M9 6 L5 9 M9 10 L4 14 M9 14 L5 18" stroke={leafColors.vein} strokeWidth="0.5" opacity="0.7" />
              <path d="M9 6 L13 9 M9 10 L14 14 M9 14 L13 18" stroke={leafColors.vein} strokeWidth="0.5" opacity="0.7" />
            </svg>
          </div>
        );
      })}

      {/* Schmetterlinge / Butterflies */}
      {[...Array(6)].map((_, i) => {
        const butterflyColors = [
          { wing: '#FF69B4', inner: '#FFB6C1', spot: '#C71585' },
          { wing: '#00BFFF', inner: '#87CEEB', spot: '#0000CD' },
          { wing: '#FFD700', inner: '#FFEC8B', spot: '#FF8C00' },
          { wing: '#FF6347', inner: '#FFA07A', spot: '#8B0000' },
          { wing: '#9370DB', inner: '#DDA0DD', spot: '#4B0082' },
          { wing: '#00FA9A', inner: '#98FB98', spot: '#006400' }
        ][i];
        return (
          <svg key={`butterfly-${i}`} style={{
            position: 'absolute',
            top: 100 + i * 60,
            left: 50 + i * 130,
            animation: `flutter ${1 + i * 0.2}s ease-in-out infinite, drift ${8 + i * 2}s ease-in-out infinite alternate`,
          }} width="28" height="24" viewBox="0 0 28 24">
            {/* Upper wings */}
            <ellipse cx="8" cy="8" rx="7" ry="6" fill={butterflyColors.wing} />
            <ellipse cx="20" cy="8" rx="7" ry="6" fill={butterflyColors.wing} />
            {/* Lower wings */}
            <ellipse cx="7" cy="16" rx="5" ry="5" fill={butterflyColors.wing} />
            <ellipse cx="21" cy="16" rx="5" ry="5" fill={butterflyColors.wing} />
            {/* Wing patterns */}
            <ellipse cx="7" cy="7" rx="4" ry="3" fill={butterflyColors.inner} opacity="0.7" />
            <ellipse cx="21" cy="7" rx="4" ry="3" fill={butterflyColors.inner} opacity="0.7" />
            {/* Wing spots */}
            <circle cx="5" cy="9" r="1.5" fill={butterflyColors.spot} />
            <circle cx="23" cy="9" r="1.5" fill={butterflyColors.spot} />
            <circle cx="9" cy="6" r="1" fill="white" opacity="0.6" />
            <circle cx="19" cy="6" r="1" fill="white" opacity="0.6" />
            {/* Body */}
            <ellipse cx="14" cy="12" rx="2" ry="7" fill="#2F1810" />
            <ellipse cx="14" cy="12" rx="1.5" ry="6" fill="#3D2418" />
            {/* Head */}
            <circle cx="14" cy="4" r="2" fill="#2F1810" />
            {/* Antennae */}
            <path d="M13 3 Q11 0 10 1" stroke="#2F1810" strokeWidth="0.5" fill="none" />
            <path d="M15 3 Q17 0 18 1" stroke="#2F1810" strokeWidth="0.5" fill="none" />
            <circle cx="10" cy="1" r="0.8" fill="#2F1810" />
            <circle cx="18" cy="1" r="0.8" fill="#2F1810" />
          </svg>
        );
      })}

      {/* Faultier / Sloth hanging */}
      <svg style={{
        position: 'absolute',
        top: 170,
        left: 300,
        animation: `sway 6s ease-in-out infinite`,
        transformOrigin: 'top center',
      }} width="55" height="70" viewBox="0 0 55 70">
        {/* Arms reaching up */}
        <path d="M22 5 Q18 12 22 18" stroke="#A08050" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M33 5 Q37 12 33 18" stroke="#A08050" strokeWidth="7" fill="none" strokeLinecap="round" />
        {/* Claws */}
        <path d="M20 3 L18 0 M22 2 L22 0 M24 3 L26 0" stroke="#5D4E37" strokeWidth="2" strokeLinecap="round" />
        <path d="M31 3 L29 0 M33 2 L33 0 M35 3 L37 0" stroke="#5D4E37" strokeWidth="2" strokeLinecap="round" />
        {/* Body - furry */}
        <ellipse cx="27" cy="42" rx="16" ry="20" fill="#C4A76C" />
        <ellipse cx="27" cy="40" rx="14" ry="17" fill="#D4B77C" />
        {/* Fur texture */}
        <path d="M15 35 Q17 38 15 42 M40 35 Q38 38 40 42" stroke="#A08050" strokeWidth="1" opacity="0.5" />
        <path d="M20 50 Q22 48 24 50 M30 50 Q32 48 34 50" stroke="#A08050" strokeWidth="1" opacity="0.5" />
        {/* Head */}
        <circle cx="27" cy="24" r="11" fill="#C4A76C" />
        <circle cx="27" cy="23" r="10" fill="#D4B77C" />
        {/* Face mask */}
        <ellipse cx="27" cy="26" rx="8" ry="6" fill="#F5DEB3" />
        {/* Eye patches (dark) */}
        <ellipse cx="22" cy="22" rx="4" ry="3" fill="#5D4E37" />
        <ellipse cx="32" cy="22" rx="4" ry="3" fill="#5D4E37" />
        {/* Eyes */}
        <circle cx="22" cy="22" r="2.5" fill="#1a1a1a" />
        <circle cx="32" cy="22" r="2.5" fill="#1a1a1a" />
        <circle cx="22.5" cy="21.5" r="0.8" fill="white" />
        <circle cx="32.5" cy="21.5" r="0.8" fill="white" />
        {/* Nose */}
        <ellipse cx="27" cy="27" rx="2.5" ry="2" fill="#5D4E37" />
        <circle cx="26" cy="27" r="0.8" fill="#3D2E17" />
        <circle cx="28" cy="27" r="0.8" fill="#3D2E17" />
        {/* Smile */}
        <path d="M24 30 Q27 33 30 30" stroke="#5D4E37" strokeWidth="1" fill="none" />
        {/* Hind legs */}
        <ellipse cx="20" cy="58" rx="5" ry="4" fill="#A08050" />
        <ellipse cx="34" cy="58" rx="5" ry="4" fill="#A08050" />
      </svg>

      {/* Frosch auf Blatt / Frog on leaf - Poison Dart Frog */}
      <svg style={{ position: 'absolute', bottom: 150, left: 580 }} width="42" height="38" viewBox="0 0 42 38">
        {/* Leaf */}
        <ellipse cx="21" cy="30" rx="20" ry="7" fill="#32CD32" />
        <path d="M21 24 L21 36" stroke="#228B22" strokeWidth="1" />
        <path d="M10 30 L21 27 L32 30" stroke="#228B22" strokeWidth="0.5" fill="none" />
        {/* Body */}
        <ellipse cx="21" cy="18" rx="12" ry="10" fill="#0066FF" />
        <ellipse cx="21" cy="17" rx="10" ry="8" fill="#0088FF" />
        {/* Pattern spots */}
        <circle cx="15" cy="16" r="2.5" fill="#FFD700" />
        <circle cx="27" cy="16" r="2.5" fill="#FFD700" />
        <circle cx="21" cy="20" r="2" fill="#FFD700" />
        <circle cx="17" cy="22" r="1.5" fill="#FFD700" />
        <circle cx="25" cy="22" r="1.5" fill="#FFD700" />
        {/* Head */}
        <ellipse cx="21" cy="10" rx="8" ry="6" fill="#0066FF" />
        {/* Bulging eyes */}
        <circle cx="15" cy="6" r="4" fill="#0066FF" />
        <circle cx="27" cy="6" r="4" fill="#0066FF" />
        <circle cx="15" cy="5" r="3" fill="#FF4500" />
        <circle cx="27" cy="5" r="3" fill="#FF4500" />
        <circle cx="15" cy="5" r="1.5" fill="#1a1a1a" />
        <circle cx="27" cy="5" r="1.5" fill="#1a1a1a" />
        <circle cx="15.5" cy="4.5" r="0.5" fill="white" />
        <circle cx="27.5" cy="4.5" r="0.5" fill="white" />
        {/* Nostrils */}
        <circle cx="19" cy="10" r="0.8" fill="#004488" />
        <circle cx="23" cy="10" r="0.8" fill="#004488" />
        {/* Mouth line */}
        <path d="M16 13 Q21 15 26 13" stroke="#004488" strokeWidth="0.5" fill="none" />
        {/* Front legs */}
        <path d="M12 20 Q8 24 10 26 L12 25 L11 27 L14 25" fill="#0066FF" />
        <path d="M30 20 Q34 24 32 26 L30 25 L31 27 L28 25" fill="#0066FF" />
      </svg>

      {/* Untere Blätterschicht / Lower leaf layer */}
      {[...Array(16)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          bottom: 40 + (i % 5) * 25,
          left: `${i * 6.5}%`,
          animation: `sway ${3.5 + (i % 3) * 0.5}s ease-in-out infinite`,
        }}>
          <Bush size={65 + (i % 4) * 15} color={['#006400', '#228B22', '#2E8B57', '#1e5e1e'][i % 4]} />
        </div>
      ))}

      {/* Orchideen / Orchids */}
      {[0, 1, 2].map((i) => {
        const orchidColors = [
          { petal: '#FF69B4', inner: '#FFB6C1', center: '#FF1493', accent: '#C71585' },
          { petal: '#9370DB', inner: '#DDA0DD', center: '#8A2BE2', accent: '#4B0082' },
          { petal: '#FF6347', inner: '#FFA07A', center: '#DC143C', accent: '#8B0000' }
        ][i];
        return (
          <svg key={`orchid-${i}`} style={{ position: 'absolute', top: 200 + i * 50, left: [80, 350, 620][i] }} width="36" height="42" viewBox="0 0 36 42">
            {/* Stem */}
            <path d="M18 42 Q16 35 18 28" stroke="#228B22" strokeWidth="2" fill="none" />
            {/* Back petals */}
            <ellipse cx="10" cy="12" rx="8" ry="5" fill={orchidColors.petal} transform="rotate(-20 10 12)" />
            <ellipse cx="26" cy="12" rx="8" ry="5" fill={orchidColors.petal} transform="rotate(20 26 12)" />
            <ellipse cx="18" cy="6" rx="6" ry="8" fill={orchidColors.petal} />
            {/* Back petal highlights */}
            <ellipse cx="10" cy="11" rx="5" ry="3" fill={orchidColors.inner} opacity="0.6" transform="rotate(-20 10 11)" />
            <ellipse cx="26" cy="11" rx="5" ry="3" fill={orchidColors.inner} opacity="0.6" transform="rotate(20 26 11)" />
            {/* Side petals */}
            <ellipse cx="8" cy="20" rx="6" ry="4" fill={orchidColors.petal} transform="rotate(-30 8 20)" />
            <ellipse cx="28" cy="20" rx="6" ry="4" fill={orchidColors.petal} transform="rotate(30 28 20)" />
            {/* Lip (labellum) - the distinctive orchid petal */}
            <path d="M18 15 Q10 22 12 28 Q18 32 24 28 Q26 22 18 15" fill={orchidColors.center} />
            <path d="M18 17 Q12 22 14 26 Q18 29 22 26 Q24 22 18 17" fill={orchidColors.inner} opacity="0.5" />
            {/* Veins on lip */}
            <path d="M18 18 L18 26 M15 22 L18 20 L21 22" stroke={orchidColors.accent} strokeWidth="0.5" fill="none" opacity="0.6" />
            {/* Column (center) */}
            <ellipse cx="18" cy="16" rx="3" ry="4" fill="#FFFACD" />
            <ellipse cx="18" cy="15" rx="2" ry="2.5" fill="#FFD700" />
            {/* Spots on center */}
            <circle cx="17" cy="14" r="0.8" fill={orchidColors.accent} />
            <circle cx="19" cy="14" r="0.8" fill={orchidColors.accent} />
          </svg>
        );
      })}

      {children}
    </div>
  );
}

// ----- ARKTISCHES EISBERG / ARCTIC ICEBERG -----

export function ArcticIceberg({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #B0C4DE 0%, #87CEEB 40%, #4682B4 60%, #1E90FF 100%)',
      overflow: 'hidden',
    }}>
      {/* Nordlichter / Northern lights - animated */}
      <svg style={{ position: 'absolute', top: 0, left: 0 }} width={width} height="220">
        <defs>
          <linearGradient id="aurora" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FF00" stopOpacity="0.3" />
            <stop offset="25%" stopColor="#00FFFF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FF00FF" stopOpacity="0.3" />
            <stop offset="75%" stopColor="#00FF00" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="aurora2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF00FF" stopOpacity="0.3" />
            <stop offset="33%" stopColor="#00FF00" stopOpacity="0.4" />
            <stop offset="66%" stopColor="#00FFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF00FF" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path d={`M0 100 Q100 50 200 80 Q300 30 400 70 Q500 40 600 90 Q700 50 ${width} 60`} stroke="url(#aurora)" strokeWidth="45" fill="none" opacity="0.7" style={{ animation: 'shimmer 8s ease-in-out infinite' }} />
        <path d={`M0 60 Q150 30 300 50 Q450 20 600 60 Q750 30 ${width} 40`} stroke="url(#aurora2)" strokeWidth="30" fill="none" opacity="0.5" style={{ animation: 'shimmer 10s ease-in-out infinite reverse' }} />
        <path d={`M0 140 Q200 100 400 130 Q600 90 ${width} 110`} stroke="url(#aurora)" strokeWidth="20" fill="none" opacity="0.3" style={{ animation: 'shimmer 12s ease-in-out infinite' }} />
      </svg>

      {/* Twinkling stars */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`star-${i}`}
          style={{
            position: 'absolute',
            left: `${(i * 41) % 100}%`,
            top: `${(i * 23) % 35}%`,
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            backgroundColor: 'white',
            borderRadius: '50%',
            animation: `twinkle ${1 + (i % 4) * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}

      {/* Distant mountains */}
      <svg style={{ position: 'absolute', bottom: 100, left: 0 }} width={width} height="150">
        <polygon points="0,150 80,50 160,150" fill="#9EB0C8" opacity="0.4" />
        <polygon points="120,150 220,30 320,150" fill="#8BA0B8" opacity="0.5" />
        <polygon points="500,150 620,60 740,150" fill="#9EB0C8" opacity="0.4" />
        <polygon points="650,150 750,40 850,150" fill="#8BA0B8" opacity="0.45" />
      </svg>

      {/* Hintergrund-Eisberge / Background icebergs */}
      <svg style={{ position: 'absolute', bottom: 100, left: 50 }} width="150" height="130">
        <polygon points="75,0 15,130 135,130" fill="#E0FFFF" opacity="0.6" />
        <polygon points="75,10 35,100 115,100" fill="#F0FFFF" opacity="0.4" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 95, right: 80 }} width="130" height="110">
        <polygon points="65,0 5,110 125,110" fill="#E0FFFF" opacity="0.5" />
        <polygon points="65,15 25,90 105,90" fill="#F5FFFA" opacity="0.3" />
      </svg>

      {/* Haupteisberg mit Pinguinen / Main iceberg with penguins */}
      <svg style={{ position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)' }} width="320" height="220">
        <polygon points="160,0 50,110 25,220 295,220 270,110" fill="#F0FFFF" />
        <polygon points="160,0 85,90 105,220 215,220 235,90" fill="#E0FFFF" />
        <polygon points="160,15 110,80 125,170 195,170 210,80" fill="#F5FFFA" />
        {/* Ice cracks */}
        <path d="M100 120 L115 150 L105 180" stroke="#B0E0E6" strokeWidth="1" fill="none" />
        <path d="M220 100 L210 130 L225 160" stroke="#B0E0E6" strokeWidth="1" fill="none" />
      </svg>

      {/* Pinguine / Penguins on main iceberg - detailed */}
      {[0, 1, 2, 3].map((i) => {
        const poses = [
          { wingL: 'rotate(-25 6 24)', wingR: 'rotate(25 24 24)' },
          { wingL: 'rotate(-10 6 24)', wingR: 'rotate(10 24 24)' },
          { wingL: 'rotate(-40 6 24)', wingR: 'rotate(40 24 24)' },
          { wingL: 'rotate(-15 6 24)', wingR: 'rotate(15 24 24)' },
        ];
        return (
          <svg key={`penguin-${i}`} style={{
            position: 'absolute',
            bottom: [180, 200, 175, 190][i],
            left: `calc(50% + ${[-60, -20, 30, 70][i]}px)`,
            animation: i === 1 ? `bob 2s ease-in-out infinite` : undefined,
          }} width="30" height="45" viewBox="0 0 30 45">
            {/* Body */}
            <ellipse cx="15" cy="26" rx="12" ry="16" fill="#1a1a1a" />
            <ellipse cx="15" cy="24" rx="10" ry="14" fill="#2a2a2a" />
            {/* White belly */}
            <ellipse cx="15" cy="28" rx="7" ry="12" fill="white" />
            <ellipse cx="15" cy="26" rx="5" ry="9" fill="#F8F8FF" />
            {/* Head */}
            <circle cx="15" cy="10" r="8" fill="#1a1a1a" />
            <circle cx="15" cy="9" r="7" fill="#2a2a2a" />
            {/* White face patches */}
            <ellipse cx="15" cy="12" rx="5" ry="3" fill="white" />
            {/* Eyes */}
            <ellipse cx="11" cy="8" rx="2.5" ry="3" fill="white" />
            <ellipse cx="19" cy="8" rx="2.5" ry="3" fill="white" />
            <circle cx="11.5" cy="8.5" r="1.5" fill="#1a1a1a" />
            <circle cx="18.5" cy="8.5" r="1.5" fill="#1a1a1a" />
            <circle cx="11" cy="8" r="0.5" fill="white" />
            <circle cx="18" cy="8" r="0.5" fill="white" />
            {/* Beak */}
            <path d="M15 11 L12 15 L15 14 L18 15 Z" fill="#FF6600" />
            <path d="M15 11 L13 14 L15 13 L17 14 Z" fill="#FF8C00" />
            {/* Flippers/Wings */}
            <ellipse cx="4" cy="24" rx="4" ry="10" fill="#1a1a1a" transform={poses[i].wingL} />
            <ellipse cx="5" cy="24" rx="3" ry="8" fill="#2a2a2a" transform={poses[i].wingL} />
            <ellipse cx="26" cy="24" rx="4" ry="10" fill="#1a1a1a" transform={poses[i].wingR} />
            <ellipse cx="25" cy="24" rx="3" ry="8" fill="#2a2a2a" transform={poses[i].wingR} />
            {/* Feet */}
            <ellipse cx="11" cy="42" rx="4" ry="2.5" fill="#FF6600" />
            <ellipse cx="19" cy="42" rx="4" ry="2.5" fill="#FF6600" />
            <path d="M8 42 L7 44 M11 42 L11 44 M14 42 L15 44" stroke="#CC5500" strokeWidth="0.8" />
            <path d="M16 42 L15 44 M19 42 L19 44 M22 42 L23 44" stroke="#CC5500" strokeWidth="0.8" />
            {/* Tail bump */}
            <ellipse cx="15" cy="40" rx="3" ry="2" fill="#1a1a1a" />
          </svg>
        );
      })}

      {/* Baby penguin - detailed fluffy chick */}
      <svg style={{
        position: 'absolute',
        bottom: 185,
        left: 'calc(50% + 5px)',
        animation: `bob 1.5s ease-in-out infinite`,
      }} width="24" height="32" viewBox="0 0 24 32">
        {/* Fluffy body */}
        <ellipse cx="12" cy="19" rx="10" ry="12" fill="#808080" />
        <ellipse cx="12" cy="18" rx="9" ry="11" fill="#A9A9A9" />
        {/* Fluffy texture */}
        <ellipse cx="8" cy="16" rx="4" ry="3" fill="#B8B8B8" opacity="0.6" />
        <ellipse cx="16" cy="17" rx="3" ry="3" fill="#B8B8B8" opacity="0.5" />
        {/* White belly patch */}
        <ellipse cx="12" cy="22" rx="5" ry="7" fill="#D3D3D3" />
        <ellipse cx="12" cy="21" rx="4" ry="5" fill="#E8E8E8" />
        {/* Fluffy head */}
        <circle cx="12" cy="8" r="7" fill="#808080" />
        <circle cx="12" cy="7" r="6" fill="#A9A9A9" />
        {/* Head fluff */}
        <ellipse cx="10" cy="5" rx="3" ry="2" fill="#B8B8B8" opacity="0.5" />
        <ellipse cx="14" cy="4" rx="2" ry="2" fill="#B8B8B8" opacity="0.4" />
        {/* White face */}
        <ellipse cx="12" cy="9" rx="4" ry="3" fill="#D3D3D3" />
        {/* Eyes - big and cute */}
        <ellipse cx="9" cy="7" rx="2" ry="2.5" fill="white" />
        <ellipse cx="15" cy="7" rx="2" ry="2.5" fill="white" />
        <circle cx="9.5" cy="7.5" r="1.2" fill="#1a1a1a" />
        <circle cx="14.5" cy="7.5" r="1.2" fill="#1a1a1a" />
        <circle cx="9" cy="7" r="0.4" fill="white" />
        <circle cx="14" cy="7" r="0.4" fill="white" />
        {/* Small beak */}
        <path d="M12 9 L10 12 L12 11 L14 12 Z" fill="#FF6600" />
        <path d="M12 9 L11 11 L12 10.5 L13 11 Z" fill="#FF8C00" />
        {/* Tiny flippers */}
        <ellipse cx="3" cy="18" rx="3" ry="6" fill="#808080" transform="rotate(-20 3 18)" />
        <ellipse cx="21" cy="18" rx="3" ry="6" fill="#808080" transform="rotate(20 21 18)" />
        {/* Tiny feet */}
        <ellipse cx="9" cy="30" rx="3" ry="1.5" fill="#FF6600" />
        <ellipse cx="15" cy="30" rx="3" ry="1.5" fill="#FF6600" />
      </svg>

      {/* Eisschollen mit Robben / Ice floes with seals - detailed */}
      <svg style={{ position: 'absolute', bottom: 70, left: 30 }} width="130" height="60" viewBox="0 0 130 60">
        {/* Ice floe */}
        <ellipse cx="65" cy="42" rx="60" ry="18" fill="#F0FFFF" />
        <ellipse cx="65" cy="40" rx="55" ry="15" fill="#F8FFFF" />
        {/* Seal body - detailed */}
        <ellipse cx="65" cy="30" rx="28" ry="12" fill="#8B8682" />
        <ellipse cx="65" cy="28" rx="25" ry="10" fill="#9A9590" />
        {/* Belly highlight */}
        <ellipse cx="65" cy="32" rx="18" ry="6" fill="#A8A8A0" opacity="0.5" />
        {/* Head */}
        <ellipse cx="38" cy="24" rx="14" ry="11" fill="#8B8682" />
        <ellipse cx="36" cy="22" rx="12" ry="9" fill="#9A9590" />
        {/* Muzzle */}
        <ellipse cx="28" cy="26" rx="6" ry="5" fill="#7A7672" />
        <ellipse cx="27" cy="25" rx="5" ry="4" fill="#8B8682" />
        {/* Nose */}
        <ellipse cx="24" cy="24" rx="3" ry="2" fill="#1a1a1a" />
        <ellipse cx="24" cy="23" rx="2" ry="1" fill="#3a3a3a" />
        {/* Eyes */}
        <circle cx="35" cy="20" r="4" fill="#1a1a1a" />
        <circle cx="35" cy="19" r="3" fill="#2a2a2a" />
        <circle cx="34" cy="18" r="1" fill="white" />
        {/* Whiskers */}
        <path d="M26 26 L18 24 M26 27 L17 27 M26 28 L18 30" stroke="#5a5a5a" strokeWidth="0.5" />
        {/* Ear bump */}
        <ellipse cx="42" cy="16" rx="3" ry="2" fill="#8B8682" />
        {/* Front flipper */}
        <ellipse cx="48" cy="36" rx="8" ry="4" fill="#7A7672" transform="rotate(-30 48 36)" />
        <path d="M42 38 L40 42 M44 39 L43 43 M46 40 L46 44" stroke="#6A6662" strokeWidth="0.8" />
        {/* Back flipper/tail */}
        <ellipse cx="92" cy="32" rx="12" ry="5" fill="#8B8682" transform="rotate(15 92 32)" />
        <path d="M98 30 L104 28 M100 32 L106 32 M98 34 L104 36" stroke="#7A7672" strokeWidth="1" />
        {/* Spots on body */}
        <circle cx="55" cy="28" r="2" fill="#7A7672" opacity="0.5" />
        <circle cx="70" cy="26" r="1.5" fill="#7A7672" opacity="0.4" />
        <circle cx="78" cy="30" r="2" fill="#7A7672" opacity="0.5" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 75, right: 50 }} width="100" height="50" viewBox="0 0 100 50">
        <ellipse cx="50" cy="32" rx="48" ry="17" fill="#E0FFFF" />
        <ellipse cx="50" cy="30" rx="44" ry="14" fill="#F0FFFF" />
        {/* Ice crack detail */}
        <path d="M30 28 L35 35 L32 42" stroke="#B0E0E6" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Fish jumping out of water - detailed */}
      {[0, 1].map((i) => {
        const fishColor = ['#4682B4', '#708090'][i];
        const fishLight = ['#5A9BD4', '#8899AA'][i];
        return (
          <svg key={`fish-${i}`} style={{
            position: 'absolute',
            bottom: [90, 85][i],
            left: [200, 550][i],
            animation: `bob ${1.5 + i * 0.5}s ease-in-out infinite`,
            transform: i === 1 ? 'scaleX(-1)' : undefined,
          }} width="35" height="28" viewBox="0 0 35 28">
            {/* Body */}
            <ellipse cx="16" cy="14" rx="13" ry="8" fill={fishColor} />
            <ellipse cx="14" cy="12" rx="10" ry="6" fill={fishLight} opacity="0.5" />
            {/* Tail fin */}
            <path d="M27 14 L35 6 L33 14 L35 22 Z" fill={fishColor} />
            <path d="M29 14 L33 9 L32 14 L33 19 Z" fill={fishLight} opacity="0.4" />
            {/* Dorsal fin */}
            <path d="M12 6 Q16 2 20 6 L20 8 Q16 7 12 8 Z" fill={fishColor} />
            {/* Pectoral fin */}
            <ellipse cx="12" cy="17" rx="4" ry="2" fill={fishColor} transform="rotate(25 12 17)" />
            {/* Eye */}
            <circle cx="7" cy="12" r="3" fill="white" />
            <circle cx="6.5" cy="11.5" r="2" fill="#1a1a1a" />
            <circle cx="6" cy="11" r="0.7" fill="white" />
            {/* Mouth */}
            <path d="M3 14 Q4 15 3 16" stroke={fishColor} strokeWidth="1" fill="none" />
            {/* Scales hint */}
            <path d="M14 11 Q16 12 14 13 M18 10 Q20 11 18 12" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
            {/* Water splash */}
            <ellipse cx="16" cy="26" rx="10" ry="2" fill="rgba(255,255,255,0.4)" />
            <path d="M8 24 Q6 22 8 20 M24 24 Q26 22 24 20" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
          </svg>
        );
      })}

      {/* Whale tail in distance - detailed */}
      <svg style={{
        position: 'absolute',
        bottom: 60,
        left: 650,
        animation: `bob 6s ease-in-out infinite`,
      }} width="70" height="55" viewBox="0 0 70 55">
        {/* Tail stock */}
        <path d="M35 55 L35 35" stroke="#2F4F4F" strokeWidth="8" strokeLinecap="round" />
        <path d="M35 55 L35 35" stroke="#3F5F5F" strokeWidth="5" strokeLinecap="round" />
        {/* Left fluke */}
        <path d="M35 35 Q20 25 5 10 Q8 18 12 25 Q18 30 35 35" fill="#2F4F4F" />
        <path d="M35 35 Q22 27 10 15 Q12 20 15 25 Q20 30 35 35" fill="#3F5F5F" opacity="0.5" />
        {/* Right fluke */}
        <path d="M35 35 Q50 25 65 10 Q62 18 58 25 Q52 30 35 35" fill="#2F4F4F" />
        <path d="M35 35 Q48 27 60 15 Q58 20 55 25 Q50 30 35 35" fill="#3F5F5F" opacity="0.5" />
        {/* Notch in tail */}
        <path d="M32 35 L35 40 L38 35" fill="#4682B4" />
        {/* Water splash around tail */}
        <ellipse cx="35" cy="52" rx="20" ry="4" fill="rgba(255,255,255,0.3)" />
        <path d="M20 48 Q15 44 18 40 M50 48 Q55 44 52 40" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
        {/* Highlight on flukes */}
        <path d="M15 20 Q20 25 25 25" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
        <path d="M55 20 Q50 25 45 25" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
      </svg>

      {/* Ice crystals / sparkles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`crystal-${i}`}
          style={{
            position: 'absolute',
            left: `${10 + (i * 73) % 80}%`,
            top: `${30 + (i * 41) % 50}%`,
            animation: `twinkle ${1.5 + (i % 3) * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        >
          <svg width="12" height="12">
            <path d="M6 0 L6 12 M0 6 L12 6 M2 2 L10 10 M10 2 L2 10" stroke="#E0FFFF" strokeWidth="1" />
          </svg>
        </div>
      ))}

      {/* Schneefall / Snowfall */}
      <Snowfall />

      {/* Meer mit Wellen / Sea with waves */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        background: 'linear-gradient(to bottom, #4682B4 0%, #1E90FF 100%)',
      }}>
        {/* Animated wave line */}
        <svg style={{ position: 'absolute', top: 0, left: 0 }} width={width} height="20">
          <path
            d={`M0 10 Q50 0 100 10 Q150 20 200 10 Q250 0 300 10 Q350 20 400 10 Q450 0 500 10 Q550 20 600 10 Q650 0 700 10 Q750 20 ${width} 10`}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            fill="none"
            style={{ animation: 'wave 4s ease-in-out infinite' }}
          />
        </svg>
      </div>

      {/* Polar bear in far distance - detailed */}
      <svg style={{ position: 'absolute', bottom: 130, left: 30 }} width="55" height="42" viewBox="0 0 55 42">
        {/* Body */}
        <ellipse cx="32" cy="28" rx="18" ry="12" fill="#F5F5DC" opacity="0.85" />
        <ellipse cx="32" cy="26" rx="16" ry="10" fill="#FFFFF0" opacity="0.7" />
        {/* Hind legs */}
        <ellipse cx="42" cy="36" rx="5" ry="6" fill="#F5F5DC" opacity="0.8" />
        <ellipse cx="22" cy="36" rx="5" ry="6" fill="#F5F5DC" opacity="0.8" />
        {/* Head */}
        <ellipse cx="12" cy="20" rx="10" ry="9" fill="#F5F5DC" opacity="0.85" />
        <ellipse cx="11" cy="19" rx="9" ry="8" fill="#FFFFF0" opacity="0.7" />
        {/* Muzzle */}
        <ellipse cx="5" cy="22" rx="5" ry="4" fill="#F5F5DC" opacity="0.85" />
        <ellipse cx="4" cy="21" rx="4" ry="3" fill="#FFFFF0" opacity="0.7" />
        {/* Nose */}
        <ellipse cx="2" cy="21" rx="2" ry="1.5" fill="#1a1a1a" opacity="0.8" />
        {/* Ears */}
        <circle cx="7" cy="12" r="3" fill="#F5F5DC" opacity="0.85" />
        <circle cx="17" cy="12" r="3" fill="#F5F5DC" opacity="0.85" />
        <circle cx="7" cy="12" r="2" fill="#E8E8DC" opacity="0.6" />
        <circle cx="17" cy="12" r="2" fill="#E8E8DC" opacity="0.6" />
        {/* Eyes */}
        <circle cx="9" cy="18" r="1.5" fill="#1a1a1a" opacity="0.7" />
        <circle cx="9" cy="17.5" r="0.5" fill="#3a3a3a" opacity="0.5" />
        {/* Front legs */}
        <ellipse cx="18" cy="35" rx="4" ry="5" fill="#F5F5DC" opacity="0.8" />
        {/* Neck */}
        <ellipse cx="20" cy="24" rx="8" ry="7" fill="#F5F5DC" opacity="0.8" />
        {/* Tail bump */}
        <circle cx="48" cy="26" r="3" fill="#F5F5DC" opacity="0.75" />
      </svg>

      {children}
    </div>
  );
}

// ----- SPUKHAUS / HAUNTED MANSION -----

export function HauntedMansion({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #1a1a2e 0%, #2d2d4e 50%, #16213e 100%)',
      overflow: 'hidden',
    }}>
      {/* Mond mit Wolken / Moon with clouds */}
      <div style={{ position: 'absolute', top: 30, right: 100 }}><Moon size={70} /></div>
      {/* Passing clouds in front of moon */}
      <div style={{
        position: 'absolute',
        top: 35,
        right: 70,
        animation: `drift 20s linear infinite`,
      }}>
        <Cloud size={50} />
      </div>

      {/* Sterne - twinkling / Stars - twinkling */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${(i * 23) % 100}%`,
            top: `${(i * 17) % 40}%`,
            width: 1 + (i % 3),
            height: 1 + (i % 3),
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: 0.3 + (i % 4) * 0.15,
            animation: `twinkle ${1 + (i % 3) * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}

      {/* Animated fog layers */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 180,
        background: 'linear-gradient(to top, rgba(100,100,120,0.7), transparent)',
        animation: `drift 30s ease-in-out infinite alternate`,
      }} />
      <div style={{
        position: 'absolute',
        bottom: 30,
        left: -100,
        width: '150%',
        height: 100,
        background: 'radial-gradient(ellipse at center, rgba(150,150,170,0.4) 0%, transparent 70%)',
        animation: `drift 25s ease-in-out infinite alternate-reverse`,
      }} />

      {/* Spukhaus / Haunted house with flickering windows */}
      <svg style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)' }} width="300" height="280">
        {/* Hauptgebäude / Main building */}
        <rect x="50" y="100" width="200" height="180" fill="#2d2d2d" />
        {/* Dach / Roof */}
        <polygon points="150,20 30,110 270,110" fill="#1a1a1a" />
        {/* Turm / Tower */}
        <rect x="180" y="50" width="60" height="130" fill="#2d2d2d" />
        <polygon points="210,10 175,55 245,55" fill="#1a1a1a" />
        {/* Weathervane on tower */}
        <path d="M210 10 L210 -10" stroke="#444" strokeWidth="2" />
        <path d="M205 -5 L215 -8 L210 -10 L205 -5" fill="#333" />
        {/* Chimney with smoke */}
        <rect x="70" y="60" width="25" height="40" fill="#222" />
        {/* Fenster mit Flackern / Windows with flicker */}
        <rect x="80" y="130" width="40" height="50" fill="#4a4a00" opacity="0.6" style={{ animation: 'flicker 3s ease-in-out infinite' }} />
        <rect x="180" y="130" width="40" height="50" fill="#5a4a00" opacity="0.7" style={{ animation: 'flicker 2.5s ease-in-out infinite' }} />
        <rect x="195" y="70" width="30" height="40" fill="#4a4a00" opacity="0.5" style={{ animation: 'flicker 4s ease-in-out infinite' }} />
        {/* Window cross frames */}
        <path d="M100 130 L100 180" stroke="#1a1a1a" strokeWidth="2" />
        <path d="M80 155 L120 155" stroke="#1a1a1a" strokeWidth="2" />
        <path d="M200 130 L200 180" stroke="#1a1a1a" strokeWidth="2" />
        <path d="M180 155 L220 155" stroke="#1a1a1a" strokeWidth="2" />
        {/* Shadowy figure in window */}
        <ellipse cx="200" cy="145" rx="8" ry="12" fill="rgba(0,0,0,0.5)" />
        {/* Tür / Door with knocker */}
        <rect x="125" y="200" width="50" height="80" fill="#1a1a1a" />
        <rect x="125" y="200" width="50" height="10" rx="25" fill="#222" />
        <circle cx="150" cy="240" r="8" fill="#333" stroke="#4a3a2a" strokeWidth="2" />
        <circle cx="150" cy="240" r="4" fill="#1a1a1a" />
        {/* Risse / Cracks */}
        <path d="M100 150 L110 180 L105 200" stroke="#1a1a1a" strokeWidth="2" fill="none" />
        <path d="M200 120 L210 140 L205 160" stroke="#1a1a1a" strokeWidth="2" fill="none" />
        <path d="M240 150 L245 170 L238 190" stroke="#1a1a1a" strokeWidth="2" fill="none" />
        {/* Broken shutter */}
        <rect x="120" y="130" width="8" height="50" fill="#3a3a3a" transform="rotate(10 124 155)" />
        {/* Spider web in corner */}
        <path d="M50 100 Q60 115 50 130 M50 100 Q65 105 80 100 M50 100 Q62 110 65 115" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
      </svg>

      {/* Chimney smoke */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`smoke-${i}`}
          style={{
            position: 'absolute',
            bottom: 330 + i * 20,
            left: 'calc(50% - 68px)',
            width: 15 + i * 5,
            height: 15 + i * 5,
            borderRadius: '50%',
            backgroundColor: 'rgba(80,80,100,0.3)',
            animation: `rise ${4 + i}s ease-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Floating animated ghosts - detailed */}
      {[...Array(4)].map((_, i) => {
        const ghostExpressions = [
          { leftEye: { cx: 16, cy: 22, rx: 4, ry: 5 }, rightEye: { cx: 32, cy: 22, rx: 4, ry: 5 }, mouth: 'M18 34 Q24 42 30 34', mouthType: 'fill' },
          { leftEye: { cx: 14, cy: 20, rx: 5, ry: 3 }, rightEye: { cx: 30, cy: 20, rx: 5, ry: 3 }, mouth: 'M16 32 Q24 28 32 32', mouthType: 'stroke' },
          { leftEye: { cx: 15, cy: 22, rx: 3, ry: 4 }, rightEye: { cx: 29, cy: 22, rx: 3, ry: 4 }, mouth: 'M20 34 L28 34', mouthType: 'stroke' },
          { leftEye: { cx: 17, cy: 21, rx: 4, ry: 6 }, rightEye: { cx: 31, cy: 21, rx: 4, ry: 6 }, mouth: 'M15 33 Q24 40 33 33', mouthType: 'stroke' },
        ];
        const expr = ghostExpressions[i];
        return (
          <svg key={i} style={{
            position: 'absolute',
            top: 80 + i * 70,
            left: [50, 650, 120, 580][i],
            opacity: 0.6 + (i % 2) * 0.15,
            animation: `float ${3 + i * 0.5}s ease-in-out infinite, drift ${10 + i * 3}s ease-in-out infinite alternate`,
            filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))',
          }} width="50" height="65" viewBox="0 0 50 65">
            {/* Ghost body with shading */}
            <ellipse cx="24" cy="24" rx="19" ry="22" fill="white" />
            <ellipse cx="24" cy="22" rx="16" ry="18" fill="#f8f8ff" />
            {/* Wavy bottom */}
            <path d="M5 24 Q5 58 10 52 Q14 58 18 52 Q22 58 26 52 Q30 58 34 52 Q38 58 43 52 Q45 58 45 24" fill="white" />
            {/* Inner glow */}
            <ellipse cx="24" cy="30" rx="10" ry="12" fill="rgba(220,220,240,0.5)" />
            {/* Arms */}
            {i % 2 === 0 ? (
              <>
                <path d="M5 28 Q-2 26 0 34 Q3 37 7 33" fill="rgba(255,255,255,0.9)" />
                <path d="M43 28 Q50 26 48 34 Q45 37 41 33" fill="rgba(255,255,255,0.9)" />
              </>
            ) : (
              <>
                <path d="M5 30 Q1 28 3 36" fill="rgba(255,255,255,0.9)" />
                <path d="M43 30 Q47 28 45 36" fill="rgba(255,255,255,0.9)" />
              </>
            )}
            {/* Eyes */}
            <ellipse cx={expr.leftEye.cx} cy={expr.leftEye.cy} rx={expr.leftEye.rx} ry={expr.leftEye.ry} fill="#1a1a2e" />
            <ellipse cx={expr.rightEye.cx} cy={expr.rightEye.cy} rx={expr.rightEye.rx} ry={expr.rightEye.ry} fill="#1a1a2e" />
            {/* Eye highlights */}
            <circle cx={expr.leftEye.cx + 1} cy={expr.leftEye.cy - 1} r="1" fill="#3a3a5e" />
            <circle cx={expr.rightEye.cx + 1} cy={expr.rightEye.cy - 1} r="1" fill="#3a3a5e" />
            {/* Mouth */}
            <path d={expr.mouth} stroke="#1a1a2e" strokeWidth="2" fill={expr.mouthType === 'fill' ? '#1a1a2e' : 'none'} />
          </svg>
        );
      })}

      {/* Animated bats - detailed */}
      {[...Array(7)].map((_, i) => (
        <svg key={i} style={{
          position: 'absolute',
          top: 40 + (i * 37) % 120,
          left: 30 + i * 110,
          animation: `flutter ${0.3 + (i % 3) * 0.1}s ease-in-out infinite, drift ${15 + i * 3}s linear infinite`,
        }} width="45" height="28" viewBox="0 0 45 28">
          {/* Left wing with membrane details */}
          <path d="M22 14 Q12 4 3 8 Q6 12 4 16 Q8 14 10 18 Q14 14 16 17 Q18 13 22 14" fill="#1a1a1a" />
          <path d="M22 14 Q16 8 8 10" stroke="#0a0a0a" strokeWidth="0.5" fill="none" />
          <path d="M22 14 Q17 10 10 14" stroke="#0a0a0a" strokeWidth="0.5" fill="none" />
          <path d="M22 14 Q18 12 14 16" stroke="#0a0a0a" strokeWidth="0.5" fill="none" />
          {/* Right wing with membrane details */}
          <path d="M22 14 Q32 4 41 8 Q38 12 40 16 Q36 14 34 18 Q30 14 28 17 Q26 13 22 14" fill="#1a1a1a" />
          <path d="M22 14 Q28 8 36 10" stroke="#0a0a0a" strokeWidth="0.5" fill="none" />
          <path d="M22 14 Q27 10 34 14" stroke="#0a0a0a" strokeWidth="0.5" fill="none" />
          <path d="M22 14 Q26 12 30 16" stroke="#0a0a0a" strokeWidth="0.5" fill="none" />
          {/* Body - furry texture */}
          <ellipse cx="22" cy="14" rx="5" ry="6" fill="#2a2a2a" />
          <ellipse cx="22" cy="14" rx="4" ry="5" fill="#1a1a1a" />
          {/* Head */}
          <circle cx="22" cy="9" r="4" fill="#1a1a1a" />
          {/* Ears - pointed */}
          <path d="M18 6 L17 1 L19 5" fill="#1a1a1a" />
          <path d="M26 6 L27 1 L25 5" fill="#1a1a1a" />
          {/* Eyes - glowing red */}
          <circle cx="20" cy="8" r="1.2" fill="#FF0000" />
          <circle cx="24" cy="8" r="1.2" fill="#FF0000" />
          <circle cx="20.3" cy="7.7" r="0.4" fill="#FF6666" />
          <circle cx="24.3" cy="7.7" r="0.4" fill="#FF6666" />
          {/* Nose */}
          <ellipse cx="22" cy="10" rx="1" ry="0.5" fill="#333" />
          {/* Feet */}
          <path d="M20 19 L19 22 M22 20 L22 23 M24 19 L25 22" stroke="#1a1a1a" strokeWidth="1" />
        </svg>
      ))}

      {/* Glowing eyes in darkness */}
      {[0, 1, 2].map((i) => (
        <div key={`eyes-${i}`} style={{
          position: 'absolute',
          top: [180, 250, 350][i],
          left: [30, 720, 100][i],
          animation: `blink ${4 + i}s ease-in-out infinite`,
        }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 6, height: 4, backgroundColor: '#FFFF00', borderRadius: '50%', boxShadow: '0 0 8px #FFFF00' }} />
            <div style={{ width: 6, height: 4, backgroundColor: '#FFFF00', borderRadius: '50%', boxShadow: '0 0 8px #FFFF00' }} />
          </div>
        </div>
      ))}

      {/* Tote Bäume / Dead trees with crow */}
      <svg style={{ position: 'absolute', bottom: 50, left: 30 }} width="100" height="170">
        <path d="M50 170 L50 60" stroke="#1a1a1a" strokeWidth="10" />
        <path d="M50 80 L20 45" stroke="#1a1a1a" strokeWidth="6" />
        <path d="M50 100 L75 55" stroke="#1a1a1a" strokeWidth="5" />
        <path d="M50 120 L30 90" stroke="#1a1a1a" strokeWidth="4" />
        {/* Detailed Crow on branch */}
        {/* Body with feather texture */}
        <ellipse cx="24" cy="42" rx="12" ry="8" fill="#1a1a1a" />
        <ellipse cx="24" cy="41" rx="10" ry="6" fill="#2a2a2a" />
        {/* Feather lines on body */}
        <path d="M18 40 Q22 42 26 40" stroke="#0a0a0a" strokeWidth="0.5" fill="none" />
        <path d="M16 43 Q22 45 28 43" stroke="#0a0a0a" strokeWidth="0.5" fill="none" />
        {/* Wing folded */}
        <path d="M28 38 Q35 40 34 46 Q30 48 26 45" fill="#0a0a0a" />
        <path d="M29 40 L33 42 M28 42 L32 44 M27 44 L31 46" stroke="#1a1a1a" strokeWidth="0.5" fill="none" />
        {/* Tail feathers */}
        <path d="M34 44 L42 46 L40 44 L43 43 L39 42 L42 40 L34 42" fill="#0a0a0a" />
        {/* Head */}
        <circle cx="14" cy="38" r="6" fill="#1a1a1a" />
        <circle cx="14" cy="37" r="5" fill="#2a2a2a" />
        {/* Beak - detailed */}
        <path d="M8 38 L3 36 L4 38 L3 40 L8 38" fill="#3a3a3a" />
        <path d="M8 38 L4 37" stroke="#2a2a2a" strokeWidth="0.5" fill="none" />
        {/* Eye with glint */}
        <circle cx="12" cy="36" r="2" fill="#0a0a0a" />
        <circle cx="12" cy="36" r="1.2" fill="#222" />
        <circle cx="12.5" cy="35.5" r="0.5" fill="#444" />
        {/* Feet gripping branch */}
        <path d="M20 48 L18 52 M20 48 L21 52 M20 48 L23 51" stroke="#3a3a3a" strokeWidth="1.5" fill="none" />
        <path d="M28 48 L26 52 M28 48 L28 52 M28 48 L30 51" stroke="#3a3a3a" strokeWidth="1.5" fill="none" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 50, right: 40 }} width="90" height="150">
        <path d="M45 150 L45 55" stroke="#1a1a1a" strokeWidth="9" />
        <path d="M45 75 L70 40" stroke="#1a1a1a" strokeWidth="5" />
        <path d="M45 95 L20 60" stroke="#1a1a1a" strokeWidth="5" />
        {/* Hanging noose */}
        <path d="M68 42 L68 65 Q68 75 60 75 Q52 75 52 65 L52 60" stroke="#4a3a2a" strokeWidth="2" fill="none" />
      </svg>

      {/* Gravestones - detailed */}
      {[0, 1, 2].map((i) => {
        const graveStyles = [
          { shape: 'M5 55 L5 20 Q5 5 22 5 Q40 5 40 20 L40 55', width: 45, textY: 38 },
          { shape: 'M3 55 L3 18 L24 3 L45 18 L45 55', width: 48, textY: 40 },
          { shape: 'M5 55 L5 15 Q5 5 20 5 Q35 5 35 15 L35 55', width: 40, textY: 36 },
        ];
        const style = graveStyles[i];
        return (
          <svg key={`grave-${i}`} style={{ position: 'absolute', bottom: 60, left: [140, 580, 680][i] }} width={style.width} height="60" viewBox={`0 0 ${style.width} 60`}>
            {/* Main stone */}
            <path d={style.shape} fill="#5a5a6a" />
            {/* Lighter face */}
            <path d={style.shape} fill="#6a6a7a" transform="translate(2, 0) scale(0.9)" />
            {/* Weathering/moss at bottom */}
            <ellipse cx={style.width / 2} cy="52" rx={style.width / 2.5} ry="4" fill="#3a5a3a" opacity="0.5" />
            <ellipse cx={style.width / 2 - 8} cy="50" rx="5" ry="3" fill="#4a6a4a" opacity="0.4" />
            {/* Cross or RIP text */}
            {i === 0 && (
              <>
                <path d="M17 18 L28 18 M22 13 L22 30" stroke="#3a3a4a" strokeWidth="2.5" />
                <path d="M17 18 L28 18 M22 13 L22 30" stroke="#4a4a5a" strokeWidth="1.5" />
              </>
            )}
            {i === 1 && (
              <>
                <text x="24" y="22" fill="#3a3a4a" fontSize="8" fontFamily="serif" textAnchor="middle">R.I.P</text>
                <text x="24" y="32" fill="#3a3a4a" fontSize="6" fontFamily="serif" textAnchor="middle">1823</text>
                <path d="M10 42 L38 42" stroke="#3a3a4a" strokeWidth="1" />
              </>
            )}
            {i === 2 && (
              <>
                <path d="M13 16 L27 16 M20 11 L20 26" stroke="#3a3a4a" strokeWidth="2" />
                <ellipse cx="20" cy="35" rx="6" ry="4" stroke="#3a3a4a" strokeWidth="1" fill="none" />
              </>
            )}
            {/* Cracks */}
            <path d={`M${10 + i * 5} ${25 + i * 3} L${15 + i * 3} ${35 + i * 2} L${12 + i * 4} ${42}`} stroke="#2a2a3a" strokeWidth="0.8" fill="none" />
            <path d={`M${style.width - 12} 30 L${style.width - 8} 38`} stroke="#2a2a3a" strokeWidth="0.5" fill="none" />
            {/* Dirt mound at base */}
            <ellipse cx={style.width / 2} cy="57" rx={style.width / 2.2} ry="4" fill="#3a4a3a" />
          </svg>
        );
      })}

      {/* Jack-o-lantern - detailed */}
      <svg style={{
        position: 'absolute',
        bottom: 75,
        left: 200,
        animation: `pulse 2s ease-in-out infinite`,
        filter: 'drop-shadow(0 0 10px rgba(255,150,0,0.5))',
      }} width="50" height="48" viewBox="0 0 50 48">
        {/* Pumpkin segments */}
        <ellipse cx="25" cy="28" rx="22" ry="18" fill="#E65C00" />
        {/* Segment lines - create pumpkin ribbing */}
        <ellipse cx="25" cy="28" rx="22" ry="18" fill="#FF6600" />
        <path d="M10 28 Q10 15 25 10 Q40 15 40 28 Q40 40 25 44 Q10 40 10 28" fill="#FF7700" />
        <path d="M25 10 Q25 28 25 44" stroke="#CC5500" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M12 15 Q20 28 12 42" stroke="#CC5500" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M38 15 Q30 28 38 42" stroke="#CC5500" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M6 22 Q15 28 6 35" stroke="#CC5500" strokeWidth="0.8" fill="none" opacity="0.3" />
        <path d="M44 22 Q35 28 44 35" stroke="#CC5500" strokeWidth="0.8" fill="none" opacity="0.3" />
        {/* Stem */}
        <path d="M23 10 Q22 5 25 3 Q28 5 27 10" fill="#2E8B22" />
        <path d="M24 8 L24 4" stroke="#1E6B12" strokeWidth="1" />
        {/* Curly vine */}
        <path d="M27 5 Q32 3 35 6 Q33 8 30 6" stroke="#2E8B22" strokeWidth="1.5" fill="none" />
        {/* Carved eyes - glowing */}
        <path d="M13 24 L18 18 L23 24 Z" fill="#FFD700" />
        <path d="M27 24 L32 18 L37 24 Z" fill="#FFD700" />
        {/* Inner glow in eyes */}
        <path d="M15 23 L18 20 L21 23 Z" fill="#FFEE00" />
        <path d="M29 23 L32 20 L35 23 Z" fill="#FFEE00" />
        {/* Nose */}
        <path d="M23 27 L25 23 L27 27 Z" fill="#FFD700" />
        {/* Jagged mouth - glowing */}
        <path d="M12 33 L16 29 L20 33 L25 28 L30 33 L34 29 L38 33 L35 37 L30 34 L25 38 L20 34 L15 37 Z" fill="#FFD700" />
        <path d="M14 33 L17 30 L21 33 L25 29 L29 33 L33 30 L36 33" fill="#FFEE00" />
        {/* Highlight on pumpkin */}
        <ellipse cx="35" cy="22" rx="5" ry="8" fill="rgba(255,200,100,0.2)" />
      </svg>

      {/* Spider descending - detailed with 8 legs */}
      <svg style={{
        position: 'absolute',
        top: 100,
        left: 600,
        animation: `bob 4s ease-in-out infinite`,
      }} width="40" height="95" viewBox="0 0 40 95">
        {/* Silk thread */}
        <path d="M20 0 L20 50" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        {/* Spinneret attachment */}
        <circle cx="20" cy="50" r="2" fill="rgba(255,255,255,0.3)" />
        {/* Abdomen - large with pattern */}
        <ellipse cx="20" cy="68" rx="12" ry="10" fill="#2a2a2a" />
        <ellipse cx="20" cy="67" rx="10" ry="8" fill="#1a1a1a" />
        {/* Abdomen markings */}
        <path d="M15 64 L20 60 L25 64 L22 68 L20 72 L18 68 Z" fill="#3a3a3a" opacity="0.5" />
        <circle cx="17" cy="70" r="1.5" fill="#3a3a3a" />
        <circle cx="23" cy="70" r="1.5" fill="#3a3a3a" />
        {/* Cephalothorax (head) */}
        <ellipse cx="20" cy="55" rx="7" ry="6" fill="#2a2a2a" />
        <ellipse cx="20" cy="54" rx="6" ry="5" fill="#1a1a1a" />
        {/* Eyes - 8 eyes in two rows */}
        <circle cx="17" cy="52" r="1.5" fill="#333" />
        <circle cx="23" cy="52" r="1.5" fill="#333" />
        <circle cx="15" cy="54" r="1" fill="#333" />
        <circle cx="25" cy="54" r="1" fill="#333" />
        <circle cx="18" cy="55" r="0.8" fill="#333" />
        <circle cx="22" cy="55" r="0.8" fill="#333" />
        {/* Eye shine */}
        <circle cx="17.3" cy="51.7" r="0.5" fill="#555" />
        <circle cx="23.3" cy="51.7" r="0.5" fill="#555" />
        {/* Chelicerae (fangs) */}
        <path d="M18 58 L17 61" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M22 58 L23 61" stroke="#2a2a2a" strokeWidth="1.5" />
        {/* Pedipalps */}
        <path d="M15 55 Q12 54 11 56" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
        <path d="M25 55 Q28 54 29 56" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
        {/* 8 Legs - 4 pairs */}
        {/* Front pair */}
        <path d="M14 56 Q8 52 4 48 Q2 44 5 42" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
        <path d="M26 56 Q32 52 36 48 Q38 44 35 42" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
        {/* Second pair */}
        <path d="M13 58 Q6 56 2 54 Q-1 52 1 48" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
        <path d="M27 58 Q34 56 38 54 Q41 52 39 48" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
        {/* Third pair */}
        <path d="M13 62 Q6 64 2 68 Q-1 72 2 76" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
        <path d="M27 62 Q34 64 38 68 Q41 72 38 76" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
        {/* Back pair */}
        <path d="M15 66 Q10 72 6 78 Q4 84 8 88" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
        <path d="M25 66 Q30 72 34 78 Q36 84 32 88" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Boden / Ground */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        background: 'linear-gradient(to bottom, #2d4a2d 0%, #1a3a1a 100%)',
      }} />

      {children}
    </div>
  );
}

// ----- UNTERWASSER-RUINEN / UNDERWATER RUINS -----

export function UnderwaterRuins({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #006994 0%, #004466 50%, #002244 100%)',
      overflow: 'hidden',
    }}>
      {/* Licht-Strahlen / Light rays - animated shimmer */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: 0,
            left: 100 + i * 160,
            width: 55,
            height: '55%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)',
            transform: `rotate(${-12 + i * 6}deg)`,
            transformOrigin: 'top center',
            animation: `shimmer ${3 + i * 0.5}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Ruinen mit Glow-Runen / Ruins with glowing runes */}
      <svg style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }} width="420" height="320">
        {/* Säulen / Pillars */}
        <rect x="50" y="100" width="32" height="220" fill="#708090" />
        <rect x="48" y="88" width="44" height="17" fill="#778899" />
        <rect x="120" y="80" width="38" height="240" fill="#708090" />
        <rect x="115" y="68" width="48" height="17" fill="#778899" />
        <rect x="260" y="120" width="32" height="200" fill="#708090" />
        <rect x="255" y="108" width="42" height="17" fill="#778899" />
        <rect x="330" y="90" width="38" height="230" fill="#708090" />
        <rect x="325" y="78" width="48" height="17" fill="#778899" />
        {/* Glowing runes on pillars */}
        <text x="62" y="180" fill="#00FFFF" fontSize="16" opacity="0.8" style={{ animation: 'pulse 2s ease-in-out infinite' }}>᚛</text>
        <text x="130" y="160" fill="#00FFFF" fontSize="18" opacity="0.7" style={{ animation: 'pulse 2.5s ease-in-out infinite' }}>ᚠ</text>
        <text x="268" y="190" fill="#00FFFF" fontSize="16" opacity="0.8" style={{ animation: 'pulse 3s ease-in-out infinite' }}>ᚢ</text>
        <text x="340" y="170" fill="#00FFFF" fontSize="17" opacity="0.7" style={{ animation: 'pulse 2.2s ease-in-out infinite' }}>ᚦ</text>
        {/* Gebrochene Säule / Broken pillar */}
        <rect x="190" y="190" width="32" height="130" fill="#708090" />
        <polygon points="190,190 206,155 222,190" fill="#778899" />
        {/* Bogen / Arch with runes */}
        <path d="M88 90 Q210 15 332 90" stroke="#778899" strokeWidth="18" fill="none" />
        <text x="200" y="50" fill="#00FFFF" fontSize="14" opacity="0.6" style={{ animation: 'pulse 2.8s ease-in-out infinite' }}>ᛟᛗᛞ</text>
        {/* Fallen statue head */}
        <ellipse cx="380" cy="300" rx="28" ry="22" fill="#5a6a7a" />
        <circle cx="372" cy="295" r="5" fill="#4a5a6a" />
        <circle cx="388" cy="295" r="5" fill="#4a5a6a" />
        <path d="M375 305 L385 305" stroke="#4a5a6a" strokeWidth="2" />
        {/* Trümmer / Debris */}
        <ellipse cx="290" cy="310" rx="35" ry="18" fill="#696969" />
        <ellipse cx="100" cy="315" rx="28" ry="14" fill="#708090" />
        <ellipse cx="160" cy="308" rx="20" ry="10" fill="#5a6a7a" />
      </svg>

      {/* Treasure chest with gold - detailed */}
      <svg style={{ position: 'absolute', bottom: 55, left: 120 }} width="80" height="65" viewBox="0 0 80 65">
        {/* Chest body */}
        <rect x="8" y="28" width="64" height="35" fill="#6B3E0D" rx="3" />
        {/* Wood grain */}
        <path d="M12 32 L12 60 M24 32 L24 60 M36 32 L36 60 M48 32 L48 60 M60 32 L60 60" stroke="#5A3209" strokeWidth="1" opacity="0.5" />
        {/* Chest body highlight */}
        <rect x="10" y="30" width="60" height="30" fill="#8B4513" rx="2" />
        {/* Lid */}
        <rect x="6" y="18" width="68" height="14" fill="#A0522D" rx="4" />
        <rect x="8" y="20" width="64" height="10" fill="#B8652B" rx="3" />
        {/* Lid curve highlight */}
        <ellipse cx="40" cy="22" rx="30" ry="4" fill="#C4723A" opacity="0.5" />
        {/* Metal bands */}
        <rect x="4" y="26" width="72" height="4" fill="#4A4A4A" />
        <rect x="5" y="27" width="70" height="2" fill="#6A6A6A" />
        <rect x="4" y="45" width="72" height="3" fill="#4A4A4A" />
        <rect x="5" y="45.5" width="70" height="1.5" fill="#6A6A6A" />
        {/* Corner brackets */}
        <rect x="6" y="28" width="6" height="35" fill="#4A4A4A" />
        <rect x="68" y="28" width="6" height="35" fill="#4A4A4A" />
        <rect x="7" y="29" width="4" height="33" fill="#5A5A5A" />
        <rect x="69" y="29" width="4" height="33" fill="#5A5A5A" />
        {/* Lock plate */}
        <rect x="32" y="24" width="16" height="18" fill="#DAA520" rx="2" />
        <rect x="34" y="26" width="12" height="14" fill="#FFD700" rx="1" />
        {/* Keyhole */}
        <circle cx="40" cy="32" r="3" fill="#4A4A4A" />
        <rect x="38" y="32" width="4" height="6" fill="#4A4A4A" />
        {/* Gold coins spilling out */}
        <ellipse cx="12" cy="58" rx="6" ry="3" fill="#DAA520" style={{ animation: 'twinkle 1.5s ease-in-out infinite' }} />
        <ellipse cx="12" cy="57" rx="5" ry="2" fill="#FFD700" />
        <ellipse cx="68" cy="55" rx="5" ry="2.5" fill="#DAA520" style={{ animation: 'twinkle 2s ease-in-out infinite' }} />
        <ellipse cx="68" cy="54" rx="4" ry="1.5" fill="#FFD700" />
        <ellipse cx="-2" cy="52" rx="5" ry="2.5" fill="#DAA520" style={{ animation: 'twinkle 1.8s ease-in-out infinite' }} />
        <ellipse cx="-2" cy="51" rx="4" ry="1.5" fill="#FFD700" />
        <ellipse cx="45" cy="62" rx="4" ry="2" fill="#DAA520" style={{ animation: 'twinkle 2.2s ease-in-out infinite' }} />
        <ellipse cx="45" cy="61" rx="3" ry="1.5" fill="#FFD700" />
        <ellipse cx="25" cy="60" rx="4" ry="2" fill="#DAA520" style={{ animation: 'twinkle 1.9s ease-in-out infinite' }} />
        {/* Gems */}
        <circle cx="78" cy="58" r="4" fill="#FF0000" style={{ animation: 'twinkle 2.5s ease-in-out infinite' }} />
        <circle cx="78" cy="57" r="2" fill="#FF6666" />
        <polygon points="55,58 58,62 52,62" fill="#00FF00" style={{ animation: 'twinkle 2.3s ease-in-out infinite' }} />
      </svg>

      {/* Ancient amphora / vase */}
      <svg style={{ position: 'absolute', bottom: 50, right: 150 }} width="35" height="50">
        <path d="M17 5 Q5 15 8 30 Q5 45 17 48 Q30 45 27 30 Q30 15 17 5" fill="#B8860B" />
        <ellipse cx="17" cy="5" rx="8" ry="3" fill="#DAA520" />
        <path d="M5 18 Q0 15 5 12" stroke="#8B4513" strokeWidth="2" fill="none" />
        <path d="M30 18 Q35 15 30 12" stroke="#8B4513" strokeWidth="2" fill="none" />
      </svg>

      {/* Fish swimming - detailed */}
      {[...Array(8)].map((_, i) => {
        const fishColors = [
          { main: '#4169E1', light: '#6B8DD9', dark: '#2E4A9E', stripe: '#FFD700' },
          { main: '#20B2AA', light: '#4ECDC4', dark: '#158A84', stripe: '#FF6B6B' },
          { main: '#FFD700', light: '#FFEC8B', dark: '#DAA520', stripe: '#FF4500' },
          { main: '#FF6347', light: '#FF8C7A', dark: '#CC4F39', stripe: '#FFD700' },
          { main: '#9370DB', light: '#B19CD9', dark: '#7B5CB8', stripe: '#90EE90' },
          { main: '#00CED1', light: '#40E0D0', dark: '#00A5A8', stripe: '#FF69B4' },
          { main: '#F0E68C', light: '#F5F0B0', dark: '#C9C26A', stripe: '#FF6347' },
          { main: '#87CEEB', light: '#B0E0E6', dark: '#6BA3BC', stripe: '#FFB6C1' },
        ];
        const color = fishColors[i];
        return (
          <svg key={`fish-${i}`} style={{
            position: 'absolute',
            top: 60 + (i * 47) % 300,
            left: (i * 97) % 700,
            animation: `swim ${6 + (i % 4) * 2}s linear infinite${i % 2 === 0 ? '' : ' reverse'}`,
            transform: i % 2 === 0 ? 'scaleX(1)' : 'scaleX(-1)',
          }} width="40" height="26" viewBox="0 0 40 26">
            {/* Body */}
            <ellipse cx="18" cy="13" rx="14" ry="9" fill={color.main} />
            <ellipse cx="16" cy="11" rx="10" ry="6" fill={color.light} opacity="0.5" />
            {/* Stripe pattern */}
            <path d="M12 8 Q16 13 12 18" stroke={color.stripe} strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M18 6 Q22 13 18 20" stroke={color.stripe} strokeWidth="1.5" fill="none" opacity="0.4" />
            {/* Tail fin */}
            <path d="M30 13 L38 5 L36 13 L38 21 Z" fill={color.main} />
            <path d="M32 13 L36 8 L35 13 L36 18 Z" fill={color.light} opacity="0.5" />
            {/* Dorsal fin */}
            <path d="M14 4 Q18 0 22 4 L22 6 Q18 5 14 6 Z" fill={color.dark} />
            {/* Pectoral fin */}
            <ellipse cx="14" cy="16" rx="4" ry="2" fill={color.main} transform="rotate(30 14 16)" />
            {/* Anal fin */}
            <path d="M20 20 Q22 24 18 24 L16 20 Z" fill={color.dark} opacity="0.8" />
            {/* Eye */}
            <circle cx="8" cy="11" r="3" fill="white" />
            <circle cx="7.5" cy="10.5" r="2" fill="#1a1a1a" />
            <circle cx="7" cy="10" r="0.8" fill="white" />
            {/* Mouth */}
            <path d="M3 13 Q5 14 4 15" stroke={color.dark} strokeWidth="0.8" fill="none" />
            {/* Gill */}
            <path d="M10 10 Q11 13 10 16" stroke={color.dark} strokeWidth="0.5" fill="none" />
            {/* Scale hint */}
            <path d="M16 10 Q18 11 16 12 M20 9 Q22 10 20 11 M18 14 Q20 15 18 16" stroke={color.dark} strokeWidth="0.3" fill="none" opacity="0.4" />
          </svg>
        );
      })}

      {/* Sea turtle - detailed */}
      <svg style={{
        position: 'absolute',
        top: 100,
        left: 500,
        animation: `swim 20s linear infinite, bob 4s ease-in-out infinite`,
      }} width="75" height="55" viewBox="0 0 75 55">
        {/* Shell base */}
        <ellipse cx="38" cy="28" rx="26" ry="20" fill="#2E8B57" />
        {/* Shell dome */}
        <ellipse cx="38" cy="26" rx="22" ry="16" fill="#3CB371" />
        {/* Shell pattern - hexagonal scutes */}
        <path d="M38 14 L48 20 L48 32 L38 38 L28 32 L28 20 Z" fill="#228B22" stroke="#1E6B1E" strokeWidth="1" />
        <path d="M28 20 L22 16 L20 24 L22 32 L28 32" fill="#2E8B57" stroke="#1E6B1E" strokeWidth="0.5" />
        <path d="M48 20 L54 16 L56 24 L54 32 L48 32" fill="#2E8B57" stroke="#1E6B1E" strokeWidth="0.5" />
        <path d="M38 14 L38 8 M28 20 L22 16 M48 20 L54 16" stroke="#1E6B1E" strokeWidth="0.5" fill="none" />
        {/* Marginal scutes */}
        <path d="M16 22 Q14 28 18 34" stroke="#1E6B1E" strokeWidth="0.5" fill="none" />
        <path d="M60 22 Q62 28 58 34" stroke="#1E6B1E" strokeWidth="0.5" fill="none" />
        {/* Central scute highlight */}
        <ellipse cx="38" cy="26" rx="6" ry="4" fill="#3DD37A" opacity="0.5" />
        {/* Head */}
        <ellipse cx="8" cy="26" rx="10" ry="8" fill="#2E8B57" />
        <ellipse cx="6" cy="25" rx="8" ry="6" fill="#3CB371" />
        {/* Beak */}
        <path d="M0 26 L-2 24 L0 22 L2 24 Z" fill="#1E5631" />
        {/* Eye */}
        <circle cx="6" cy="22" r="3" fill="#1a1a1a" />
        <circle cx="5.5" cy="21.5" r="1.5" fill="#333" />
        <circle cx="5" cy="21" r="0.6" fill="white" />
        {/* Head pattern */}
        <path d="M10 22 Q12 26 10 30" stroke="#228B22" strokeWidth="0.5" fill="none" />
        {/* Front flippers - detailed */}
        <ellipse cx="20" cy="12" rx="12" ry="5" fill="#2E8B57" transform="rotate(-35 20 12)" />
        <ellipse cx="18" cy="11" rx="10" ry="4" fill="#3CB371" transform="rotate(-35 18 11)" />
        <path d="M12 8 L8 4 M14 6 L12 2 M16 5 L15 1" stroke="#228B22" strokeWidth="1" strokeLinecap="round" />
        <ellipse cx="56" cy="12" rx="12" ry="5" fill="#2E8B57" transform="rotate(35 56 12)" />
        <ellipse cx="58" cy="11" rx="10" ry="4" fill="#3CB371" transform="rotate(35 58 11)" />
        <path d="M62 8 L66 4 M60 6 L62 2 M58 5 L59 1" stroke="#228B22" strokeWidth="1" strokeLinecap="round" />
        {/* Back flippers */}
        <ellipse cx="22" cy="42" rx="8" ry="4" fill="#2E8B57" transform="rotate(25 22 42)" />
        <ellipse cx="54" cy="42" rx="8" ry="4" fill="#2E8B57" transform="rotate(-25 54 42)" />
        {/* Tail */}
        <path d="M38 44 L38 50 L36 48 L38 52 L40 48 L38 50" fill="#2E8B57" />
      </svg>

      {/* Jellyfish - detailed */}
      {[0, 1].map((i) => {
        const jellyColors = [
          { bell: 'rgba(255,182,193,0.6)', inner: 'rgba(255,105,180,0.4)', tentacle: 'rgba(255,182,193,0.5)' },
          { bell: 'rgba(147,112,219,0.6)', inner: 'rgba(186,85,211,0.4)', tentacle: 'rgba(147,112,219,0.5)' },
        ];
        const color = jellyColors[i];
        return (
          <svg key={`jelly-${i}`} style={{
            position: 'absolute',
            top: [80, 180][i],
            left: [50, 650][i],
            animation: `float ${5 + i * 2}s ease-in-out infinite`,
            filter: 'drop-shadow(0 0 8px rgba(255,182,193,0.3))',
          }} width="50" height="75" viewBox="0 0 50 75">
            {/* Bell - outer dome */}
            <ellipse cx="25" cy="18" rx="22" ry="17" fill={color.bell} />
            {/* Bell highlights */}
            <ellipse cx="20" cy="12" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
            {/* Bell inner structure */}
            <ellipse cx="25" cy="20" rx="16" ry="12" fill={color.inner} />
            {/* Radial canals */}
            <path d="M25 8 L25 30 M15 12 L35 28 M35 12 L15 28" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            {/* Bell margin - frilly edge */}
            <path d="M5 28 Q8 32 12 28 Q16 32 20 28 Q24 32 28 28 Q32 32 36 28 Q40 32 44 28" stroke={color.bell} strokeWidth="3" fill="none" />
            {/* Oral arms */}
            <path d="M20 30 Q18 40 22 50 Q20 55 24 60" stroke={color.inner} strokeWidth="3" fill="none" strokeLinecap="round" style={{ animation: 'sway 2s ease-in-out infinite' }} />
            <path d="M30 30 Q32 40 28 50 Q30 55 26 60" stroke={color.inner} strokeWidth="3" fill="none" strokeLinecap="round" style={{ animation: 'sway 2.3s ease-in-out infinite' }} />
            {/* Tentacles - multiple thin strands */}
            <path d="M8 28 Q4 42 9 55 Q6 62 10 72" stroke={color.tentacle} strokeWidth="1.5" fill="none" style={{ animation: 'sway 2s ease-in-out infinite' }} />
            <path d="M12 30 Q8 45 13 58 Q10 65 14 74" stroke={color.tentacle} strokeWidth="1.2" fill="none" style={{ animation: 'sway 2.2s ease-in-out infinite' }} />
            <path d="M16 32 Q14 48 17 62 Q15 68 18 75" stroke={color.tentacle} strokeWidth="1" fill="none" style={{ animation: 'sway 2.4s ease-in-out infinite' }} />
            <path d="M34 32 Q36 48 33 62 Q35 68 32 75" stroke={color.tentacle} strokeWidth="1" fill="none" style={{ animation: 'sway 2.1s ease-in-out infinite' }} />
            <path d="M38 30 Q42 45 37 58 Q40 65 36 74" stroke={color.tentacle} strokeWidth="1.2" fill="none" style={{ animation: 'sway 2.5s ease-in-out infinite' }} />
            <path d="M42 28 Q46 42 41 55 Q44 62 40 72" stroke={color.tentacle} strokeWidth="1.5" fill="none" style={{ animation: 'sway 2.3s ease-in-out infinite' }} />
            {/* Glowing spots */}
            <circle cx="18" cy="16" r="2" fill="rgba(255,255,255,0.5)" />
            <circle cx="32" cy="16" r="2" fill="rgba(255,255,255,0.5)" />
            <circle cx="25" cy="22" r="1.5" fill="rgba(255,255,255,0.4)" />
          </svg>
        );
      })}

      {/* Animated seaweed */}
      {[...Array(8)].map((_, i) => (
        <svg key={`seaweed-${i}`} style={{
          position: 'absolute',
          bottom: 45,
          left: 30 + i * 100,
          animation: `sway ${2.5 + (i % 3) * 0.5}s ease-in-out infinite`,
          transformOrigin: 'bottom center',
        }} width="25" height={70 + (i % 3) * 20}>
          <path
            d={`M12 ${70 + (i % 3) * 20} Q${5 + (i % 2) * 10} ${50 + (i % 3) * 15} 12 ${30 + (i % 3) * 10} Q${15 + (i % 2) * 5} ${15 + (i % 3) * 5} 12 0`}
            stroke={['#228B22', '#2E8B57', '#32CD32'][i % 3]}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      ))}

      {/* Rising bubbles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${(i * 53) % 100}%`,
            bottom: -20,
            width: 5 + (i % 4) * 3,
            height: 5 + (i % 4) * 3,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            animation: `rise ${4 + (i % 5) * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Starfish on sand */}
      {[0, 1].map((i) => (
        <svg key={`star-${i}`} style={{ position: 'absolute', bottom: 15, left: [80, 600][i] }} width="30" height="30">
          <polygon points="15,0 18,10 28,12 20,18 22,28 15,22 8,28 10,18 2,12 12,10" fill={['#FF6347', '#FF8C00'][i]} />
          <circle cx="15" cy="15" r="4" fill={['#FF4500', '#FFA500'][i]} />
        </svg>
      ))}

      {/* Shells */}
      <svg style={{ position: 'absolute', bottom: 12, left: 350 }} width="25" height="20">
        <path d="M12 18 Q0 10 5 2 Q12 5 20 2 Q25 10 12 18" fill="#FFF8DC" />
        <path d="M12 18 L8 5 M12 18 L12 3 M12 18 L16 5" stroke="#DEB887" strokeWidth="0.5" />
      </svg>

      {/* Octopus hiding - detailed */}
      <svg style={{ position: 'absolute', bottom: 60, right: 60 }} width="70" height="75" viewBox="0 0 70 75">
        {/* Head/Mantle */}
        <ellipse cx="35" cy="22" rx="22" ry="20" fill="#9932CC" />
        <ellipse cx="35" cy="20" rx="18" ry="16" fill="#BA55D3" />
        {/* Head texture */}
        <ellipse cx="30" cy="15" rx="6" ry="4" fill="#DDA0DD" opacity="0.4" />
        <ellipse cx="42" cy="18" rx="4" ry="3" fill="#DDA0DD" opacity="0.3" />
        {/* Eyes - large and expressive */}
        <ellipse cx="26" cy="20" rx="7" ry="8" fill="white" />
        <ellipse cx="44" cy="20" rx="7" ry="8" fill="white" />
        <circle cx="26" cy="21" r="4" fill="#1a1a1a" />
        <circle cx="44" cy="21" r="4" fill="#1a1a1a" />
        <circle cx="25" cy="20" r="1.5" fill="white" />
        <circle cx="43" cy="20" r="1.5" fill="white" />
        {/* Eyelids */}
        <path d="M19 16 Q26 14 33 16" stroke="#8B008B" strokeWidth="2" fill="none" />
        <path d="M37 16 Q44 14 51 16" stroke="#8B008B" strokeWidth="2" fill="none" />
        {/* Siphon/mouth */}
        <ellipse cx="35" cy="32" rx="4" ry="3" fill="#7B2D8E" />
        {/* 8 Tentacles with suckers */}
        <path d="M12 35 Q4 48 8 60 Q3 68 10 75" stroke="#9932CC" strokeWidth="5" fill="none" strokeLinecap="round" style={{ animation: 'sway 2s ease-in-out infinite' }} />
        <path d="M8 50 L10 50 M6 58 L9 58 M7 66 L10 66" stroke="#DDA0DD" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 38 Q12 52 16 65 Q12 72 18 78" stroke="#9932CC" strokeWidth="5" fill="none" strokeLinecap="round" style={{ animation: 'sway 2.15s ease-in-out infinite' }} />
        <path d="M14 52 L17 52 M13 60 L16 60 M14 68 L17 68" stroke="#DDA0DD" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 40 Q22 55 25 68 Q22 74 26 80" stroke="#9932CC" strokeWidth="5" fill="none" strokeLinecap="round" style={{ animation: 'sway 2.3s ease-in-out infinite' }} />
        <path d="M23 55 L26 55 M22 63 L25 63 M23 71 L26 71" stroke="#DDA0DD" strokeWidth="2" strokeLinecap="round" />
        <path d="M35 42 Q35 58 35 72 Q35 78 35 82" stroke="#9932CC" strokeWidth="5" fill="none" strokeLinecap="round" style={{ animation: 'sway 2.45s ease-in-out infinite' }} />
        <path d="M33 58 L37 58 M33 66 L37 66 M33 74 L37 74" stroke="#DDA0DD" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 40 Q48 55 45 68 Q48 74 44 80" stroke="#9932CC" strokeWidth="5" fill="none" strokeLinecap="round" style={{ animation: 'sway 2.6s ease-in-out infinite' }} />
        <path d="M44 55 L47 55 M45 63 L48 63 M44 71 L47 71" stroke="#DDA0DD" strokeWidth="2" strokeLinecap="round" />
        <path d="M52 38 Q58 52 54 65 Q58 72 52 78" stroke="#9932CC" strokeWidth="5" fill="none" strokeLinecap="round" style={{ animation: 'sway 2.2s ease-in-out infinite' }} />
        <path d="M53 52 L56 52 M54 60 L57 60 M53 68 L56 68" stroke="#DDA0DD" strokeWidth="2" strokeLinecap="round" />
        <path d="M58 35 Q66 48 62 60 Q67 68 60 75" stroke="#9932CC" strokeWidth="5" fill="none" strokeLinecap="round" style={{ animation: 'sway 2.35s ease-in-out infinite' }} />
        <path d="M60 50 L63 50 M61 58 L64 58 M60 66 L63 66" stroke="#DDA0DD" strokeWidth="2" strokeLinecap="round" />
        {/* Extra tentacle curling up */}
        <path d="M55 32 Q62 28 58 22 Q55 18 60 15" stroke="#9932CC" strokeWidth="4" fill="none" strokeLinecap="round" style={{ animation: 'sway 2.5s ease-in-out infinite' }} />
        <circle cx="60" cy="15" r="2" fill="#DDA0DD" />
      </svg>

      {/* Sandboden / Sandy bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 55,
        background: 'linear-gradient(to bottom, #C19A6B 0%, #A08060 100%)',
        borderRadius: '50% 50% 0 0 / 18px 18px 0 0',
      }} />

      {children}
    </div>
  );
}

// ----- WOLKEN-KÖNIGREICH / CLOUD KINGDOM -----

export function CloudKingdom({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #FFD700 0%, #87CEEB 30%, #B0E0E6 100%)',
      overflow: 'hidden',
    }}>
      {/* Animated sun rays */}
      <div style={{
        position: 'absolute',
        top: -50,
        right: 0,
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, transparent 60%)',
        animation: `pulse 4s ease-in-out infinite`,
      }} />
      <div style={{ position: 'absolute', top: 10, right: 80 }}><Sun size={90} /></div>

      {/* Main rainbow - larger */}
      <div style={{
        position: 'absolute',
        top: 50,
        left: '2%',
        width: 300,
        height: 150,
        borderRadius: '150px 150px 0 0',
        border: '15px solid transparent',
        borderTopColor: 'red',
        boxShadow: `
          0 0 0 15px orange,
          0 0 0 30px yellow,
          0 0 0 45px green,
          0 0 0 60px blue,
          0 0 0 75px indigo,
          0 0 0 90px violet
        `,
        opacity: 0.6,
      }} />

      {/* Secondary rainbow */}
      <div style={{
        position: 'absolute',
        top: 150,
        right: '5%',
        width: 180,
        height: 90,
        borderRadius: '90px 90px 0 0',
        border: '8px solid transparent',
        borderTopColor: 'violet',
        boxShadow: `
          0 0 0 8px indigo,
          0 0 0 16px blue,
          0 0 0 24px green,
          0 0 0 32px yellow,
          0 0 0 40px orange,
          0 0 0 48px red
        `,
        opacity: 0.4,
      }} />

      {/* Floating castle with animation */}
      <svg style={{
        position: 'absolute',
        top: 70,
        left: '50%',
        transform: 'translateX(-50%)',
        animation: `float 6s ease-in-out infinite`,
      }} width="220" height="200">
        {/* Cloud base - animated */}
        <ellipse cx="110" cy="185" rx="100" ry="22" fill="white" />
        <ellipse cx="65" cy="180" rx="55" ry="18" fill="#F5F5F5" />
        <ellipse cx="155" cy="180" rx="55" ry="18" fill="#F5F5F5" />
        {/* Castle */}
        <rect x="65" y="95" width="90" height="85" fill="#FFD700" />
        <rect x="42" y="105" width="35" height="75" fill="#FFA500" />
        <rect x="143" y="105" width="35" height="75" fill="#FFA500" />
        <polygon points="60,105 27,105 60,60" fill="#FFA500" />
        <polygon points="160,105 193,105 160,60" fill="#FFA500" />
        <polygon points="110,40 65,100 155,100" fill="#FFD700" />
        {/* Multiple flags */}
        <rect x="107" y="15" width="6" height="35" fill="#8B4513" />
        <polygon points="113,15 145,27 113,39" fill="#FF69B4" style={{ animation: 'wave 2s ease-in-out infinite' }} />
        <rect x="50" y="50" width="4" height="20" fill="#8B4513" />
        <polygon points="54,50 72,56 54,62" fill="#87CEEB" style={{ animation: 'wave 2.5s ease-in-out infinite' }} />
        <rect x="166" y="50" width="4" height="20" fill="#8B4513" />
        <polygon points="170,50 188,56 170,62" fill="#90EE90" style={{ animation: 'wave 2.2s ease-in-out infinite' }} />
        {/* Windows with sparkle */}
        <rect x="80" y="115" width="22" height="28" fill="#87CEEB" rx="11" />
        <rect x="118" y="115" width="22" height="28" fill="#87CEEB" rx="11" />
        <circle cx="86" cy="120" r="3" fill="white" opacity="0.7" />
        <circle cx="124" cy="120" r="3" fill="white" opacity="0.7" />
        {/* Door */}
        <rect x="92" y="155" width="36" height="28" fill="#8B4513" rx="18" />
        <circle cx="120" cy="168" r="3" fill="#FFD700" />
      </svg>

      {/* Animated clouds at different speeds */}
      <div style={{ position: 'absolute', top: 220, left: 20, animation: `drift 40s linear infinite` }}><Cloud size={150} /></div>
      <div style={{ position: 'absolute', top: 270, left: 200, animation: `drift 35s linear infinite` }}><Cloud size={120} /></div>
      <div style={{ position: 'absolute', top: 240, right: 30, animation: `drift 45s linear infinite reverse` }}><Cloud size={140} /></div>
      <div style={{ position: 'absolute', top: 320, left: 100, animation: `drift 50s linear infinite` }}><Cloud size={180} /></div>
      <div style={{ position: 'absolute', top: 340, right: 150, animation: `drift 38s linear infinite reverse` }}><Cloud size={160} /></div>
      <div style={{ position: 'absolute', bottom: 50, left: 50, animation: `drift 42s linear infinite` }}><Cloud size={200} /></div>
      <div style={{ position: 'absolute', bottom: 30, right: 80, animation: `drift 48s linear infinite reverse` }}><Cloud size={180} /></div>
      <div style={{ position: 'absolute', bottom: 0, left: '30%', animation: `drift 55s linear infinite` }}><Cloud size={220} /></div>

      {/* Floating islands with detailed trees and houses */}
      <svg style={{
        position: 'absolute',
        top: 280,
        left: 80,
        animation: `float ${5}s ease-in-out infinite`,
        filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))',
      }} width="100" height="85" viewBox="0 0 100 85">
        {/* Cloud base - fluffy layers */}
        <ellipse cx="50" cy="72" rx="45" ry="15" fill="white" />
        <ellipse cx="35" cy="70" rx="25" ry="12" fill="#F8F8FF" />
        <ellipse cx="65" cy="70" rx="25" ry="12" fill="#F8F8FF" />
        {/* Grass mound */}
        <ellipse cx="50" cy="45" rx="35" ry="30" fill="#7CCD7C" />
        <ellipse cx="50" cy="42" rx="32" ry="26" fill="#90EE90" />
        {/* Detailed tree */}
        <rect x="45" y="22" width="8" height="28" fill="#8B4513" />
        <rect x="46" y="24" width="3" height="24" fill="#A0522D" />
        <ellipse cx="49" cy="18" rx="20" ry="16" fill="#228B22" />
        <ellipse cx="49" cy="15" rx="16" ry="12" fill="#2E8B22" />
        <ellipse cx="45" cy="20" rx="10" ry="8" fill="#32CD32" />
        <ellipse cx="55" cy="18" rx="10" ry="8" fill="#32CD32" />
        {/* Apples on tree */}
        <circle cx="38" cy="18" r="3" fill="#FF6347" />
        <circle cx="58" cy="15" r="3" fill="#FF6347" />
        {/* Tiny cottage */}
        <rect x="62" y="38" width="22" height="18" fill="#FFE4C4" />
        <rect x="63" y="40" width="8" height="14" fill="#DEB887" />
        <polygon points="73,28 58,40 88,40" fill="#B22222" />
        <polygon points="73,30 60,40 86,40" fill="#CD5C5C" />
        <rect x="68" y="43" width="6" height="10" fill="#8B4513" />
        <rect x="77" y="42" width="5" height="6" fill="#87CEEB" />
        <circle cx="70" cy="47" r="1" fill="#FFD700" />
        {/* Chimney with smoke */}
        <rect x="80" y="32" width="4" height="8" fill="#8B4513" />
        {/* Flowers in grass */}
        <circle cx="30" cy="52" r="3" fill="#FF69B4" />
        <circle cx="25" cy="48" r="2" fill="#FFD700" />
      </svg>
      <svg style={{
        position: 'absolute',
        top: 300,
        left: 550,
        animation: `float ${6}s ease-in-out infinite`,
        animationDelay: '1s',
        filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))',
      }} width="110" height="90" viewBox="0 0 110 90">
        {/* Cloud base */}
        <ellipse cx="55" cy="78" rx="50" ry="16" fill="white" />
        <ellipse cx="40" cy="76" rx="28" ry="13" fill="#F8F8FF" />
        <ellipse cx="70" cy="76" rx="28" ry="13" fill="#F8F8FF" />
        {/* Grass mound */}
        <ellipse cx="55" cy="50" rx="42" ry="35" fill="#7CCD7C" />
        <ellipse cx="55" cy="47" rx="38" ry="30" fill="#90EE90" />
        {/* Two detailed trees */}
        <rect x="28" y="28" width="7" height="28" fill="#8B4513" />
        <rect x="29" y="30" width="3" height="24" fill="#A0522D" />
        <ellipse cx="32" cy="22" rx="15" ry="14" fill="#228B22" />
        <ellipse cx="32" cy="18" rx="12" ry="10" fill="#2E8B22" />
        <ellipse cx="28" cy="24" rx="8" ry="6" fill="#32CD32" />
        <rect x="70" y="33" width="6" height="22" fill="#8B4513" />
        <rect x="71" y="35" width="2" height="18" fill="#A0522D" />
        <ellipse cx="73" cy="28" rx="12" ry="11" fill="#228B22" />
        <ellipse cx="73" cy="25" rx="10" ry="8" fill="#32CD32" />
        {/* Bird nest in tree */}
        <ellipse cx="73" cy="32" rx="5" ry="3" fill="#8B4513" />
        <circle cx="71" cy="31" r="2" fill="#ADD8E6" />
        <circle cx="75" cy="31" r="2" fill="#ADD8E6" />
        {/* Mushrooms */}
        <ellipse cx="52" cy="58" rx="4" ry="2" fill="#FF6347" />
        <rect x="50" y="58" width="4" height="5" fill="#FFFAF0" />
        <circle cx="50" cy="57" r="1" fill="white" />
        <circle cx="54" cy="56" r="1" fill="white" />
      </svg>
      <svg style={{
        position: 'absolute',
        top: 350,
        left: 350,
        animation: `float ${7}s ease-in-out infinite`,
        animationDelay: '2s',
        filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.12))',
      }} width="80" height="65" viewBox="0 0 80 65">
        {/* Cloud base */}
        <ellipse cx="40" cy="56" rx="36" ry="12" fill="white" />
        <ellipse cx="30" cy="54" rx="20" ry="10" fill="#F8F8FF" />
        <ellipse cx="50" cy="54" rx="20" ry="10" fill="#F8F8FF" />
        {/* Grass mound */}
        <ellipse cx="40" cy="38" rx="28" ry="24" fill="#7CCD7C" />
        <ellipse cx="40" cy="35" rx="24" ry="20" fill="#90EE90" />
        {/* Detailed flowers */}
        <g>
          <circle cx="28" cy="30" r="5" fill="#FF69B4" />
          <circle cx="28" cy="30" r="3" fill="#FFB6C1" />
          <circle cx="28" cy="30" r="1.5" fill="#FFD700" />
          <path d="M28 35 L28 45" stroke="#228B22" strokeWidth="2" />
          <ellipse cx="24" cy="40" rx="4" ry="2" fill="#32CD32" transform="rotate(-30 24 40)" />
        </g>
        <g>
          <circle cx="48" cy="28" r="5" fill="#FFD700" />
          <circle cx="48" cy="28" r="3" fill="#FFEC8B" />
          <circle cx="48" cy="28" r="1.5" fill="#8B4513" />
          <path d="M48 33 L48 43" stroke="#228B22" strokeWidth="2" />
          <ellipse cx="52" cy="38" rx="4" ry="2" fill="#32CD32" transform="rotate(30 52 38)" />
        </g>
        <g>
          <circle cx="38" cy="38" r="4" fill="#9370DB" />
          <circle cx="38" cy="38" r="2.5" fill="#DDA0DD" />
          <circle cx="38" cy="38" r="1" fill="#FFD700" />
          <path d="M38 42 L38 50" stroke="#228B22" strokeWidth="2" />
        </g>
        {/* Butterfly near flowers */}
        <g style={{ animation: 'flutter 0.5s ease-in-out infinite' }}>
          <ellipse cx="55" cy="25" rx="4" ry="3" fill="#FF69B4" />
          <ellipse cx="61" cy="25" rx="4" ry="3" fill="#FF69B4" />
          <ellipse cx="58" cy="27" rx="1" ry="3" fill="#333" />
          <path d="M57 24 L55 21 M59 24 L61 21" stroke="#333" strokeWidth="0.5" />
        </g>
      </svg>

      {/* Flying birds - detailed */}
      {[...Array(6)].map((_, i) => {
        const birdColors = ['#4169E1', '#FF6B6B', '#FFD93D', '#6BCB77', '#9370DB', '#20B2AA'];
        const birdColor = birdColors[i];
        return (
          <svg key={`bird-${i}`} style={{
            position: 'absolute',
            top: 100 + i * 50,
            left: 50 + i * 130,
            animation: `flutter ${1 + i * 0.2}s ease-in-out infinite, drift ${20 + i * 5}s linear infinite`,
          }} width="35" height="22" viewBox="0 0 35 22">
            {/* Left wing with feather detail */}
            <path d="M17 11 Q8 3 2 6 Q4 8 3 10 Q6 9 8 11 Q10 9 12 11 Q14 10 17 11" fill={birdColor} />
            <path d="M17 11 Q12 7 6 8" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" fill="none" />
            <path d="M17 11 Q13 8 9 10" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" fill="none" />
            {/* Right wing with feather detail */}
            <path d="M17 11 Q26 3 32 6 Q30 8 31 10 Q28 9 26 11 Q24 9 22 11 Q20 10 17 11" fill={birdColor} />
            <path d="M17 11 Q22 7 28 8" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" fill="none" />
            <path d="M17 11 Q21 8 25 10" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" fill="none" />
            {/* Body */}
            <ellipse cx="17" cy="12" rx="5" ry="4" fill={birdColor} />
            <ellipse cx="17" cy="11" rx="4" ry="3" fill="white" opacity="0.3" />
            {/* Head */}
            <circle cx="17" cy="10" r="3" fill={birdColor} />
            {/* Beak */}
            <path d="M17 9 L17 7 L19 9" fill="#FF8C00" />
            {/* Eye */}
            <circle cx="18" cy="9" r="1" fill="white" />
            <circle cx="18.2" cy="8.8" r="0.5" fill="#1a1a1a" />
            {/* Tail feathers */}
            <path d="M17 15 L15 20 L17 18 L19 20 L17 15" fill={birdColor} />
          </svg>
        );
      })}

      {/* Cloud creatures - detailed cute faces */}
      {[0, 1, 2].map((i) => {
        const expressions = [
          { leftEye: 'happy', rightEye: 'happy', mouth: 'smile' },
          { leftEye: 'wink', rightEye: 'happy', mouth: 'open' },
          { leftEye: 'happy', rightEye: 'happy', mouth: 'big' },
        ];
        return (
          <div key={`creature-${i}`} style={{
            position: 'absolute',
            top: [200, 380, 290][i],
            left: [680, 30, 450][i],
            animation: `float ${4 + i}s ease-in-out infinite`,
            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
          }}>
            <svg width="70" height="55" viewBox="0 0 70 55">
              {/* Fluffy cloud body with multiple layers */}
              <ellipse cx="35" cy="32" rx="32" ry="20" fill="white" />
              <ellipse cx="22" cy="36" rx="18" ry="14" fill="#FAFAFA" />
              <ellipse cx="50" cy="34" rx="16" ry="12" fill="#FAFAFA" />
              <ellipse cx="35" cy="28" rx="24" ry="16" fill="white" />
              {/* Top fluff */}
              <ellipse cx="28" cy="22" rx="10" ry="8" fill="white" />
              <ellipse cx="42" cy="22" rx="10" ry="8" fill="white" />
              {/* Shading */}
              <ellipse cx="35" cy="40" rx="20" ry="8" fill="rgba(200,200,220,0.2)" />
              {/* Eyes */}
              {expressions[i].leftEye === 'wink' ? (
                <path d="M20 26 Q24 24 28 26" stroke="#333" strokeWidth="2" fill="none" />
              ) : (
                <>
                  <ellipse cx="24" cy="26" rx="5" ry="6" fill="#333" />
                  <ellipse cx="24" cy="25" rx="4" ry="5" fill="#444" />
                  <circle cx="25.5" cy="24" r="2" fill="white" />
                  <circle cx="22" cy="27" r="1" fill="white" opacity="0.5" />
                </>
              )}
              <ellipse cx="44" cy="26" rx="5" ry="6" fill="#333" />
              <ellipse cx="44" cy="25" rx="4" ry="5" fill="#444" />
              <circle cx="45.5" cy="24" r="2" fill="white" />
              <circle cx="42" cy="27" r="1" fill="white" opacity="0.5" />
              {/* Eyebrows */}
              <path d="M19 20 Q24 18 29 20" stroke="#666" strokeWidth="1" fill="none" />
              <path d="M39 20 Q44 18 49 20" stroke="#666" strokeWidth="1" fill="none" />
              {/* Mouth */}
              {expressions[i].mouth === 'smile' && (
                <path d="M28 36 Q34 42 40 36" stroke="#FF69B4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              )}
              {expressions[i].mouth === 'open' && (
                <ellipse cx="34" cy="38" rx="6" ry="4" fill="#FF69B4" />
              )}
              {expressions[i].mouth === 'big' && (
                <path d="M26 35 Q34 44 42 35" stroke="#FF69B4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              )}
              {/* Rosy cheeks */}
              <ellipse cx="16" cy="32" rx="5" ry="4" fill="#FFB6C1" opacity="0.6" />
              <ellipse cx="52" cy="32" rx="5" ry="4" fill="#FFB6C1" opacity="0.6" />
              {/* Tiny arms/wings */}
              <ellipse cx="6" cy="34" rx="6" ry="4" fill="white" />
              <ellipse cx="62" cy="34" rx="6" ry="4" fill="white" />
            </svg>
          </div>
        );
      })}

      {/* Sparkles / Stars */}
      {[...Array(20)].map((_, i) => {
        const size = 8 + (i % 3) * 4;
        return (
          <svg
            key={`sparkle-${i}`}
            style={{
              position: 'absolute',
              left: `${(i * 47) % 100}%`,
              top: `${(i * 31) % 80 + 10}%`,
              animation: `twinkle ${1 + (i % 4) * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
            }}
            width={size}
            height={size}
          >
            <polygon
              points={`${size/2},0 ${size*0.6},${size*0.4} ${size},${size*0.4} ${size*0.65},${size*0.6} ${size*0.8},${size} ${size/2},${size*0.75} ${size*0.2},${size} ${size*0.35},${size*0.6} 0,${size*0.4} ${size*0.4},${size*0.4}`}
              fill="#FFD700"
            />
          </svg>
        );
      })}

      {/* Hot air balloon - detailed */}
      <svg style={{
        position: 'absolute',
        top: 150,
        right: 100,
        animation: `float 8s ease-in-out infinite, drift 60s linear infinite alternate`,
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
      }} width="70" height="95" viewBox="0 0 70 95">
        {/* Balloon envelope */}
        <ellipse cx="35" cy="30" rx="30" ry="32" fill="#FF6347" />
        {/* Vertical stripes */}
        <path d="M35 0 Q35 30 35 58" stroke="#FFD700" strokeWidth="8" fill="none" />
        <path d="M20 5 Q15 30 22 58" stroke="#4169E1" strokeWidth="6" fill="none" />
        <path d="M50 5 Q55 30 48 58" stroke="#4169E1" strokeWidth="6" fill="none" />
        <path d="M10 15 Q5 35 15 55" stroke="#32CD32" strokeWidth="5" fill="none" />
        <path d="M60 15 Q65 35 55 55" stroke="#32CD32" strokeWidth="5" fill="none" />
        {/* Highlight on balloon */}
        <ellipse cx="25" cy="22" rx="10" ry="14" fill="rgba(255,255,255,0.3)" />
        {/* Balloon bottom gathering */}
        <ellipse cx="35" cy="58" rx="12" ry="4" fill="#CC5030" />
        {/* Ropes */}
        <path d="M25 60 L22 75" stroke="#8B4513" strokeWidth="1.5" />
        <path d="M35 62 L35 75" stroke="#8B4513" strokeWidth="1.5" />
        <path d="M45 60 L48 75" stroke="#8B4513" strokeWidth="1.5" />
        {/* Burner flame */}
        <ellipse cx="35" cy="65" rx="4" ry="3" fill="#FF4500" />
        <ellipse cx="35" cy="64" rx="2" ry="2" fill="#FFD700" />
        {/* Basket - wicker pattern */}
        <rect x="20" y="75" width="30" height="18" rx="2" fill="#8B4513" />
        <rect x="21" y="76" width="28" height="16" rx="2" fill="#A0522D" />
        {/* Wicker weave pattern */}
        <path d="M22 78 L48 78 M22 82 L48 82 M22 86 L48 86 M22 90 L48 90" stroke="#7A4510" strokeWidth="0.8" />
        <path d="M26 76 L26 92 M32 76 L32 92 M38 76 L38 92 M44 76 L44 92" stroke="#7A4510" strokeWidth="0.8" />
        {/* Basket rim */}
        <rect x="19" y="74" width="32" height="3" rx="1" fill="#6B3A0D" />
        {/* Passengers - tiny heads */}
        <circle cx="28" cy="80" r="3" fill="#FFE4C4" />
        <circle cx="28" cy="79" r="2" fill="#8B4513" />
        <circle cx="42" cy="80" r="3" fill="#FFE4C4" />
        <circle cx="42" cy="79" r="2" fill="#2F1810" />
        {/* Sandbags */}
        <ellipse cx="18" cy="88" rx="3" ry="4" fill="#C4A35A" />
        <ellipse cx="52" cy="88" rx="3" ry="4" fill="#C4A35A" />
      </svg>

      {children}
    </div>
  );
}

// ----- GARTEN-LABYRINTH / GARDEN MAZE -----

export function GardenMaze({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      width,
      height,
      position: 'relative',
      background: 'linear-gradient(to bottom, #87CEEB 0%, #B0E0E6 100%)',
      overflow: 'hidden',
    }}>
      {/* Sonne / Sun */}
      <div style={{ position: 'absolute', top: 20, right: 60 }}><Sun size={55} /></div>

      {/* Animated clouds */}
      <div style={{ position: 'absolute', top: 30, left: 50, animation: `drift 60s linear infinite` }}><Cloud size={65} /></div>
      <div style={{ position: 'absolute', top: 50, left: 200, animation: `drift 50s linear infinite` }}><Cloud size={50} /></div>
      <div style={{ position: 'absolute', top: 40, right: 150, animation: `drift 55s linear infinite reverse` }}><Cloud size={55} /></div>

      {/* Flying birds */}
      {[...Array(5)].map((_, i) => (
        <svg key={`bird-${i}`} style={{
          position: 'absolute',
          top: 60 + i * 30,
          left: 100 + i * 150,
          animation: `flutter ${1 + i * 0.2}s ease-in-out infinite, drift ${25 + i * 5}s linear infinite`,
        }} width="22" height="12">
          <path d="M0 6 Q11 1 22 6 Q11 4 0 6" fill="#333" />
        </svg>
      ))}

      {/* Hecken-Labyrinth / Hedge maze with details */}
      <svg style={{ position: 'absolute', bottom: 50, left: '50%', transform: 'translateX(-50%)' }} width="520" height="360">
        {/* Äußere Wand / Outer wall - with texture */}
        <rect x="50" y="50" width="420" height="290" fill="none" stroke="#228B22" strokeWidth="32" />
        {/* Leaf texture on outer walls */}
        {[...Array(20)].map((_, i) => (
          <circle key={`leaf-${i}`} cx={60 + (i * 22) % 400} cy={55 + Math.floor(i / 18) * 280} r="4" fill="#2E8B57" />
        ))}
        {/* Innere Wände / Inner walls */}
        <rect x="100" y="100" width="150" height="22" fill="#2E8B57" />
        <rect x="100" y="100" width="22" height="100" fill="#2E8B57" />
        <rect x="200" y="150" width="22" height="140" fill="#228B22" />
        <rect x="260" y="100" width="150" height="22" fill="#2E8B57" />
        <rect x="310" y="100" width="22" height="85" fill="#228B22" />
        <rect x="100" y="235" width="100" height="22" fill="#2E8B57" />
        <rect x="260" y="205" width="105" height="22" fill="#228B22" />
        <rect x="360" y="205" width="22" height="85" fill="#2E8B57" />
        <rect x="155" y="290" width="150" height="22" fill="#228B22" />

        {/* Zentrum mit animiertem Brunnen / Center with animated fountain */}
        <circle cx="285" cy="265" r="35" fill="#4169E1" />
        <circle cx="285" cy="265" r="25" fill="#87CEEB" />
        {/* Fountain base */}
        <circle cx="285" cy="265" r="12" fill="#708090" />
        {/* Animated water spouts */}
        <path d="M285 250 Q280 230 285 215 Q290 230 285 250" fill="#87CEEB" style={{ animation: 'bob 1.5s ease-in-out infinite' }} />
        <path d="M270 255 Q260 245 265 235" stroke="#87CEEB" strokeWidth="3" fill="none" style={{ animation: 'sway 2s ease-in-out infinite' }} />
        <path d="M300 255 Q310 245 305 235" stroke="#87CEEB" strokeWidth="3" fill="none" style={{ animation: 'sway 2s ease-in-out infinite reverse' }} />
        {/* Water droplets */}
        <circle cx="275" cy="225" r="2" fill="#B0E0E6" style={{ animation: 'fall 2s ease-in infinite' }} />
        <circle cx="295" cy="228" r="2" fill="#B0E0E6" style={{ animation: 'fall 2s ease-in infinite 0.5s' }} />

        {/* Entrance arch */}
        <path d="M50 340 Q65 320 80 340" stroke="#228B22" strokeWidth="8" fill="none" />
      </svg>

      {/* Garden statues - Bird bath detailed */}
      <svg style={{ position: 'absolute', bottom: 120, left: 80 }} width="45" height="65" viewBox="0 0 45 65">
        {/* Pedestal base */}
        <rect x="12" y="55" width="21" height="8" fill="#808080" rx="2" />
        <rect x="14" y="57" width="17" height="5" fill="#909090" rx="1" />
        {/* Pedestal column */}
        <rect x="17" y="35" width="11" height="22" fill="#A9A9A9" />
        <rect x="18" y="37" width="9" height="18" fill="#B8B8B8" />
        {/* Column detail */}
        <path d="M17 40 L28 40 M17 45 L28 45 M17 50 L28 50" stroke="#909090" strokeWidth="1" />
        {/* Bowl base */}
        <ellipse cx="22" cy="34" rx="14" ry="5" fill="#909090" />
        <ellipse cx="22" cy="33" rx="13" ry="4" fill="#A9A9A9" />
        {/* Water bowl */}
        <ellipse cx="22" cy="30" rx="16" ry="6" fill="#B0B0B0" />
        <ellipse cx="22" cy="29" rx="14" ry="5" fill="#87CEEB" />
        <ellipse cx="22" cy="28" rx="12" ry="4" fill="#ADD8E6" />
        {/* Water ripples */}
        <ellipse cx="18" cy="28" rx="3" ry="1" fill="rgba(255,255,255,0.4)" />
        {/* Bird on bath - detailed */}
        <ellipse cx="25" cy="22" rx="7" ry="5" fill="#CD853F" />
        <ellipse cx="25" cy="21" rx="6" ry="4" fill="#D2996A" />
        {/* Wing detail */}
        <path d="M22 20 Q28 18 30 22" stroke="#B87333" strokeWidth="1" fill="none" />
        {/* Head */}
        <circle cx="19" cy="18" r="4" fill="#CD853F" />
        <circle cx="18" cy="17" r="3" fill="#D2996A" />
        {/* Eye */}
        <circle cx="17" cy="16" r="1.2" fill="#1a1a1a" />
        <circle cx="17" cy="15.8" r="0.4" fill="#444" />
        {/* Beak */}
        <path d="M15 17 L11 16 L13 18 Z" fill="#FFD700" />
        <path d="M15 17 L12 16.5 L13 17.5 Z" fill="#FFA500" />
        {/* Tail */}
        <path d="M31 22 L36 20 L35 22 L37 24 L31 23 Z" fill="#CD853F" />
        {/* Feet */}
        <path d="M23 26 L22 28 M25 26 L25 28" stroke="#8B4513" strokeWidth="1" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 115, right: 90 }} width="35" height="60" viewBox="0 0 35 60">
        {/* Garden gnome - detailed */}
        {/* Body/coat */}
        <ellipse cx="17" cy="45" rx="11" ry="14" fill="#4169E1" />
        <ellipse cx="17" cy="43" rx="10" ry="12" fill="#5179F1" />
        {/* Coat buttons */}
        <circle cx="17" cy="38" r="1.5" fill="#FFD700" />
        <circle cx="17" cy="43" r="1.5" fill="#FFD700" />
        <circle cx="17" cy="48" r="1.5" fill="#FFD700" />
        {/* Belt */}
        <rect x="8" y="50" width="18" height="3" fill="#8B4513" />
        <rect x="15" y="49" width="4" height="5" fill="#FFD700" rx="1" />
        {/* Hands */}
        <circle cx="6" cy="44" r="3" fill="#FFE4C4" />
        <circle cx="28" cy="44" r="3" fill="#FFE4C4" />
        {/* Arms */}
        <ellipse cx="8" cy="40" rx="3" ry="6" fill="#4169E1" transform="rotate(-20 8 40)" />
        <ellipse cx="26" cy="40" rx="3" ry="6" fill="#4169E1" transform="rotate(20 26 40)" />
        {/* Head */}
        <circle cx="17" cy="24" r="9" fill="#FFE4C4" />
        <circle cx="17" cy="23" r="8" fill="#FFECD4" />
        {/* Cheeks */}
        <circle cx="11" cy="26" r="2" fill="#FFB6C1" opacity="0.5" />
        <circle cx="23" cy="26" r="2" fill="#FFB6C1" opacity="0.5" />
        {/* Beard */}
        <ellipse cx="17" cy="30" rx="7" ry="5" fill="white" />
        <ellipse cx="17" cy="32" rx="5" ry="4" fill="#F5F5F5" />
        <path d="M17 33 L17 38" stroke="white" strokeWidth="3" />
        {/* Eyes */}
        <ellipse cx="13" cy="22" rx="2" ry="2.5" fill="white" />
        <ellipse cx="21" cy="22" rx="2" ry="2.5" fill="white" />
        <circle cx="13" cy="22.5" r="1.2" fill="#1a1a1a" />
        <circle cx="21" cy="22.5" r="1.2" fill="#1a1a1a" />
        <circle cx="12.5" cy="22" r="0.4" fill="white" />
        <circle cx="20.5" cy="22" r="0.4" fill="white" />
        {/* Eyebrows */}
        <path d="M10 19 Q13 18 16 19" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M18 19 Q21 18 24 19" stroke="white" strokeWidth="1.5" fill="none" />
        {/* Nose */}
        <ellipse cx="17" cy="26" rx="2.5" ry="2" fill="#FF6B6B" />
        <ellipse cx="17" cy="25.5" rx="2" ry="1.5" fill="#FF8080" />
        {/* Pointed hat */}
        <path d="M17 3 L5 24 L29 24 Z" fill="#FF0000" />
        <path d="M17 5 L7 23 L27 23 Z" fill="#FF3333" />
        {/* Hat fold */}
        <ellipse cx="17" cy="24" rx="12" ry="3" fill="#CC0000" />
        {/* Feet */}
        <ellipse cx="12" cy="58" rx="4" ry="2" fill="#8B4513" />
        <ellipse cx="22" cy="58" rx="4" ry="2" fill="#8B4513" />
      </svg>

      {/* Garden bench */}
      <svg style={{ position: 'absolute', bottom: 75, left: 620 }} width="50" height="30">
        <rect x="5" y="10" width="40" height="5" fill="#8B4513" />
        <rect x="5" y="0" width="40" height="3" fill="#8B4513" />
        <rect x="8" y="15" width="4" height="15" fill="#654321" />
        <rect x="38" y="15" width="4" height="15" fill="#654321" />
      </svg>

      {/* Many flowers */}
      {[...Array(12)].map((_, i) => (
        <div key={`flower-${i}`} style={{
          position: 'absolute',
          bottom: [355, 360, 350, 85, 90, 80, 200, 250, 300, 150, 180, 220][i],
          left: [130, 160, 190, 130, 160, 640, 50, 730, 700, 30, 750, 60][i],
          animation: `sway ${2 + (i % 3) * 0.5}s ease-in-out infinite`,
        }}>
          <Flower size={22 + (i % 3) * 5} color={['#FF69B4', '#FFD700', '#FF1493', '#9370DB', '#FF6347', '#00CED1', '#FF69B4', '#FFD700', '#9370DB', '#FF1493', '#FF6347', '#00CED1'][i]} />
        </div>
      ))}

      {/* Butterflies - detailed */}
      {[...Array(8)].map((_, i) => {
        const butterflyColors = [
          { wing: '#FF69B4', inner: '#FFB6C1', spot: '#FF1493' },
          { wing: '#FFD700', inner: '#FFEC8B', spot: '#FF8C00' },
          { wing: '#9370DB', inner: '#DDA0DD', spot: '#8B008B' },
          { wing: '#FF6347', inner: '#FFA07A', spot: '#DC143C' },
          { wing: '#00BFFF', inner: '#87CEEB', spot: '#1E90FF' },
          { wing: '#32CD32', inner: '#90EE90', spot: '#228B22' },
          { wing: '#FF1493', inner: '#FFB6C1', spot: '#C71585' },
          { wing: '#FFA500', inner: '#FFD700', spot: '#FF4500' },
        ];
        const colors = butterflyColors[i];
        return (
          <svg key={`butterfly-${i}`} style={{
            position: 'absolute',
            top: 100 + (i * 43) % 250,
            left: 80 + (i * 97) % 650,
            animation: `flutter ${1 + (i % 3) * 0.3}s ease-in-out infinite, drift ${15 + i * 3}s ease-in-out infinite alternate`,
          }} width="32" height="28" viewBox="0 0 32 28">
            {/* Upper wings */}
            <ellipse cx="10" cy="10" rx="9" ry="8" fill={colors.wing} />
            <ellipse cx="22" cy="10" rx="9" ry="8" fill={colors.wing} />
            {/* Lower wings */}
            <ellipse cx="9" cy="18" rx="7" ry="6" fill={colors.wing} />
            <ellipse cx="23" cy="18" rx="7" ry="6" fill={colors.wing} />
            {/* Wing patterns - inner areas */}
            <ellipse cx="9" cy="9" rx="5" ry="5" fill={colors.inner} opacity="0.7" />
            <ellipse cx="23" cy="9" rx="5" ry="5" fill={colors.inner} opacity="0.7" />
            <ellipse cx="8" cy="17" rx="4" ry="3" fill={colors.inner} opacity="0.6" />
            <ellipse cx="24" cy="17" rx="4" ry="3" fill={colors.inner} opacity="0.6" />
            {/* Wing spots */}
            <circle cx="6" cy="11" r="2" fill={colors.spot} />
            <circle cx="26" cy="11" r="2" fill={colors.spot} />
            <circle cx="11" cy="7" r="1.5" fill={colors.spot} opacity="0.8" />
            <circle cx="21" cy="7" r="1.5" fill={colors.spot} opacity="0.8" />
            {/* Body */}
            <ellipse cx="16" cy="14" rx="2.5" ry="8" fill="#2F1810" />
            <ellipse cx="16" cy="13" rx="2" ry="6" fill="#3F2820" />
            {/* Head */}
            <circle cx="16" cy="5" r="2.5" fill="#2F1810" />
            {/* Eyes */}
            <circle cx="15" cy="4.5" r="1" fill="#1a1a1a" />
            <circle cx="17" cy="4.5" r="1" fill="#1a1a1a" />
            {/* Antennae */}
            <path d="M14 3 Q12 0 10 1" stroke="#2F1810" strokeWidth="0.8" fill="none" />
            <path d="M18 3 Q20 0 22 1" stroke="#2F1810" strokeWidth="0.8" fill="none" />
            <circle cx="10" cy="1" r="1" fill="#2F1810" />
            <circle cx="22" cy="1" r="1" fill="#2F1810" />
          </svg>
        );
      })}

      {/* Bees - detailed */}
      {[0, 1, 2].map((i) => (
        <svg key={`bee-${i}`} style={{
          position: 'absolute',
          top: [200, 280, 150][i],
          left: [180, 550, 380][i],
          animation: `bob ${1 + i * 0.3}s ease-in-out infinite, drift ${8 + i * 2}s ease-in-out infinite alternate`,
        }} width="28" height="22" viewBox="0 0 28 22">
          {/* Abdomen with stripes */}
          <ellipse cx="16" cy="11" rx="9" ry="7" fill="#FFD700" />
          <ellipse cx="16" cy="10" rx="8" ry="6" fill="#FFEC8B" />
          {/* Black stripes */}
          <path d="M10 7 Q16 5 22 7" stroke="#1a1a1a" strokeWidth="2.5" fill="none" />
          <path d="M9 11 Q16 9 23 11" stroke="#1a1a1a" strokeWidth="2.5" fill="none" />
          <path d="M10 15 Q16 13 22 15" stroke="#1a1a1a" strokeWidth="2.5" fill="none" />
          {/* Thorax */}
          <ellipse cx="8" cy="11" rx="5" ry="5" fill="#FFD700" />
          <ellipse cx="8" cy="10" rx="4" ry="4" fill="#FFEC8B" />
          {/* Fuzzy texture on thorax */}
          <circle cx="7" cy="9" r="1" fill="#FFE4B5" />
          <circle cx="9" cy="10" r="1" fill="#FFE4B5" />
          {/* Head */}
          <circle cx="4" cy="11" r="3.5" fill="#1a1a1a" />
          <circle cx="4" cy="10" r="3" fill="#2a2a2a" />
          {/* Eyes - compound eyes */}
          <ellipse cx="2.5" cy="9.5" rx="1.5" ry="2" fill="#333" />
          <ellipse cx="5.5" cy="9.5" rx="1.5" ry="2" fill="#333" />
          <circle cx="2" cy="9" r="0.5" fill="#555" />
          <circle cx="5" cy="9" r="0.5" fill="#555" />
          {/* Antennae */}
          <path d="M3 7 L2 4 L1 3" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
          <path d="M5 7 L6 4 L7 3" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
          {/* Wings - translucent with veins */}
          <ellipse cx="12" cy="5" rx="6" ry="3" fill="rgba(255,255,255,0.7)" />
          <ellipse cx="12" cy="17" rx="6" ry="3" fill="rgba(255,255,255,0.7)" />
          <path d="M8 5 L14 5 M9 4 L13 6" stroke="rgba(150,150,150,0.4)" strokeWidth="0.5" fill="none" />
          <path d="M8 17 L14 17 M9 16 L13 18" stroke="rgba(150,150,150,0.4)" strokeWidth="0.5" fill="none" />
          {/* Stinger */}
          <path d="M24 11 L27 11" stroke="#1a1a1a" strokeWidth="1" />
          {/* Legs */}
          <path d="M7 14 L6 17 M9 14 L9 18 M11 14 L12 17" stroke="#1a1a1a" strokeWidth="0.8" />
        </svg>
      ))}

      {/* Rose bushes - detailed */}
      {[0, 1].map((i) => (
        <svg key={`rose-${i}`} style={{ position: 'absolute', bottom: 50, left: [190, 560][i] }} width="55" height="60" viewBox="0 0 55 60">
          {/* Bush foliage */}
          <ellipse cx="27" cy="42" rx="24" ry="18" fill="#228B22" />
          <ellipse cx="27" cy="40" rx="22" ry="16" fill="#2E8B57" />
          {/* Leaf details */}
          <ellipse cx="15" cy="38" rx="6" ry="4" fill="#32CD32" opacity="0.7" transform="rotate(-20 15 38)" />
          <ellipse cx="40" cy="40" rx="6" ry="4" fill="#32CD32" opacity="0.7" transform="rotate(20 40 40)" />
          <ellipse cx="27" cy="48" rx="8" ry="4" fill="#32CD32" opacity="0.6" />
          {/* Rose 1 - detailed spiral */}
          <circle cx="15" cy="28" r="8" fill="#DC143C" />
          <circle cx="15" cy="28" r="6" fill="#FF0000" />
          <circle cx="15" cy="28" r="4" fill="#FF3333" />
          <circle cx="15" cy="28" r="2" fill="#FF6666" />
          <path d="M11 26 Q15 24 19 26" stroke="#CC0000" strokeWidth="1" fill="none" />
          <path d="M13 30 Q15 32 17 30" stroke="#CC0000" strokeWidth="1" fill="none" />
          {/* Rose 2 */}
          <circle cx="38" cy="32" r="7" fill="#DC143C" />
          <circle cx="38" cy="32" r="5" fill="#FF0000" />
          <circle cx="38" cy="32" r="3" fill="#FF3333" />
          <circle cx="38" cy="32" r="1.5" fill="#FF6666" />
          {/* Rose 3 */}
          <circle cx="27" cy="22" r="9" fill="#DC143C" />
          <circle cx="27" cy="22" r="7" fill="#FF0000" />
          <circle cx="27" cy="22" r="5" fill="#FF3333" />
          <circle cx="27" cy="22" r="3" fill="#FF6666" />
          <path d="M22 20 Q27 17 32 20" stroke="#CC0000" strokeWidth="1" fill="none" />
          {/* Rose 4 - smaller bud */}
          <circle cx="18" cy="42" r="5" fill="#DC143C" />
          <circle cx="18" cy="42" r="3" fill="#FF0000" />
          <circle cx="18" cy="42" r="1.5" fill="#FF3333" />
          {/* Rose 5 - bud */}
          <circle cx="42" cy="44" r="4" fill="#DC143C" />
          <circle cx="42" cy="44" r="2.5" fill="#FF0000" />
          {/* Thorny stems */}
          <path d="M15 36 L15 50" stroke="#228B22" strokeWidth="2" />
          <path d="M27 30 L27 52" stroke="#228B22" strokeWidth="2" />
          <path d="M38 40 L38 54" stroke="#228B22" strokeWidth="2" />
          {/* Thorns */}
          <path d="M15 40 L12 38 M15 45 L18 43" stroke="#1E5631" strokeWidth="1" />
          <path d="M27 38 L24 36 M27 45 L30 43" stroke="#1E5631" strokeWidth="1" />
        </svg>
      ))}

      {/* Bäume am Rand / Trees at edges - more variety */}
      <div style={{ position: 'absolute', bottom: 40, left: 10 }}><Tree size={110} /></div>
      <div style={{ position: 'absolute', bottom: 45, left: 680 }}><Tree size={95} /></div>
      <div style={{ position: 'absolute', bottom: 40, right: 10 }}><Tree size={100} /></div>

      {/* Topiary bushes (shaped hedges) */}
      <svg style={{ position: 'absolute', bottom: 55, left: 250 }} width="35" height="50">
        <circle cx="17" cy="15" r="14" fill="#228B22" />
        <rect x="14" y="28" width="6" height="22" fill="#8B4513" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 55, right: 260 }} width="35" height="50">
        <circle cx="17" cy="15" r="14" fill="#2E8B57" />
        <rect x="14" y="28" width="6" height="22" fill="#8B4513" />
      </svg>

      {/* Gras / Grass */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Grass width={width} height={60} />
      </div>

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
