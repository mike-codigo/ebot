const fs = require('fs');

let css = fs.readFileSync('css/iphone-styles.css', 'utf8');

// OVERRIDE CSS FOR CHAT ANIMATIONS TO FIX VISIBILITY BUG & SCROLL
const newChatCSS = `
/* Chat Auto-Scroll Animation (Perfected to show all messages at the end) */
.wa-message-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  animation: autoScrollChat 32s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
}

@keyframes autoScrollChat {
  0%, 15% { transform: translateY(0); } /* msg 1, 2, 3 fit */
  20%, 35% { transform: translateY(-160px); } /* push for PDF (msg 4) */
  40%, 55% { transform: translateY(-340px); } /* push for Remédio Image (msg 5 & 6) */
  60%, 75% { transform: translateY(-480px); } /* push for Reminder question (msg 7) */
  80%, 90% { transform: translateY(-600px); } /* push for the End of interaction (msg 8 & 9) */
  95%, 100% { transform: translateY(0); } /* smooth reset to start */
}

/* Fluid Bubble Animation: using BOTH to ensure it stays invisible before the animation starts */
.wa-bubble {
  padding: 0.6rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  max-width: 85%;
  line-height: 1.4;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes smoothSlideUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Perfected spaced message pop sequence (32s total loop) */
.chat-b-1 { animation: smoothSlideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both 1.0s; }
.chat-b-2 { animation: smoothSlideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both 3.5s; }
.chat-b-3 { animation: smoothSlideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both 6.0s; }
.chat-b-4 { animation: smoothSlideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both 10.0s; } /* PDF */
.chat-b-5 { animation: smoothSlideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both 14.0s; } /* Remédio Info */
.chat-b-6 { animation: smoothSlideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both 17.5s; } /* Mapa Info */
.chat-b-7 { animation: smoothSlideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both 21.0s; } /* Pergunta de Agendamento */
.chat-b-8 { animation: smoothSlideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both 24.5s; } /* User: Sim */
.chat-b-9 { animation: smoothSlideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both 26.5s; } /* Bot Confirma */

/* User choice highlight animation (clicks Sim at 24.0s) */
@keyframes clickFlash {
  0%, 100% { background: transparent; color: #759226; }
  50% { background: rgba(117,146,38,0.2); transform: scale(0.95); }
}
.auto-click {
  animation: clickFlash 0.4s ease-in-out 24.0s both;
}

/* DATA PARTICLES FOR HUB */
.hub-center {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 60px rgba(136, 167, 47, 0.3);
  z-index: 10;
  position: relative;
  animation: pulse-glow 2.5s infinite;
}

.data-particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--primary);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--primary);
  z-index: 5;
  top: 50%;
  left: 50%;
  opacity: 0;
}

.particle-1 { animation: shootParticle 3s cubic-bezier(0.2, 1, 0.3, 1) infinite 0.1s; }
.particle-2 { animation: shootParticle 3s cubic-bezier(0.2, 1, 0.3, 1) infinite 0.6s; transform: rotate(72deg); }
.particle-3 { animation: shootParticle 3s cubic-bezier(0.2, 1, 0.3, 1) infinite 1.2s; transform: rotate(144deg); }
.particle-4 { animation: shootParticle 3s cubic-bezier(0.2, 1, 0.3, 1) infinite 1.8s; transform: rotate(216deg); }
.particle-5 { animation: shootParticle 3s cubic-bezier(0.2, 1, 0.3, 1) infinite 2.4s; transform: rotate(288deg); }

@keyframes shootParticle {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -300px) scale(0); opacity: 0; }
}

@media (max-width: 768px) {
  .orbit-container {
    transform: scale(0.6); /* Keep the orbit from bleeding out on mobile */
    margin: -4rem auto;
  }
}
`;

// Replace older chat animations in css logic
css = css.replace(/\/\* Chat Auto-Scroll Animation \([\s\S]*/, newChatCSS);
fs.writeFileSync('css/iphone-styles.css', css);

// We must also update components.css because we appended it there before
let compCSS = fs.readFileSync('css/components.css', 'utf8');
compCSS = compCSS.replace(/\/\* Chat Auto-Scroll Animation \([\s\S]*/, newChatCSS);
fs.writeFileSync('css/components.css', compCSS);


// --- 2. UPDATE INDEX.HTML ---
let html = fs.readFileSync('index.html', 'utf8');

// Replace the Hub Center to insert the larger logo and the particles
const oldHubCenter = /<div class="hub-center">[\s\S]*?<\/div>/;

const newHubCenter = `<div class="hub-center">
            <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Integrations" style="width: 100px; height: 100px; object-fit: contain;">
          </div>
          <!-- Data Particles shooting to integrations -->
          <div class="data-particle particle-1"></div>
          <div class="data-particle particle-2"></div>
          <div class="data-particle particle-3"></div>
          <div class="data-particle particle-4"></div>
          <div class="data-particle particle-5"></div>`;

html = html.replace(oldHubCenter, newHubCenter);

fs.writeFileSync('index.html', html);
console.log("Animação do chat fixada (fill-mode both) e Hub Center com partículas e responsividade aprimorada!");

