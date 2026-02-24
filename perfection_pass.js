const fs = require('fs');

// --- 1. CSS FILE UPDATES (components.css & iphone-styles.css) ---
let cssFiles = ['css/components.css', 'css/iphone-styles.css'];

const perfectIphoneCSS = `
/* Chat Auto-Scroll Animation (Perfected) */
.wa-message-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  /* Total 34 seconds loop. Keeps pushing up to reveal new content. */
  animation: autoScrollChat 34s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
}

@keyframes autoScrollChat {
  0%, 14% { transform: translateY(0); } /* msg 1, 2, 3 */
  18%, 32% { transform: translateY(-120px); } /* push for PDF (msg 4) */
  36%, 48% { transform: translateY(-300px); } /* push for Image (msg 5) */
  52%, 68% { transform: translateY(-440px); } /* push for Location (msg 6) */
  72%, 82% { transform: translateY(-600px); } /* push for Upsell (msg 7) */
  86%, 98% { transform: translateY(-750px); } /* push for Final confirmation (msg 8 & 9) */
  100% { transform: translateY(0); } /* smooth reset */
}

/* Fluid Bubble Animation - Hidden strictly BEFORE execution */
.wa-bubble {
  padding: 0.6rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  max-width: 85%;
  line-height: 1.4;
  /* Crucial fix to hide before animation plays */
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
}

@keyframes smoothSlideUp {
  0% { opacity: 0; transform: translateY(20px); }
  10% { opacity: 1; transform: translateY(0); pointer-events: auto; }
  100% { opacity: 1; transform: translateY(0); pointer-events: auto; }
}

/* Timings perfectly matched to scroll stages (34s loop) */
/* "both" fill-mode is essential to keep them opacity:0 at start */
.chat-b-1 { animation: smoothSlideUp 34s both 1.0s; }
.chat-b-2 { animation: smoothSlideUp 34s both 4.0s; }
.chat-b-3 { animation: smoothSlideUp 34s both 7.0s; }
.chat-b-4 { animation: smoothSlideUp 34s both 11.5s; } /* PDF */
.chat-b-5 { animation: smoothSlideUp 34s both 16.5s; } /* Remédio Image */
.chat-b-6 { animation: smoothSlideUp 34s both 20.0s; } /* Mapa */
.chat-b-7 { animation: smoothSlideUp 34s both 23.5s; } /* Upsell Lembrete */
.chat-b-8 { animation: smoothSlideUp 34s both 27.0s; } /* User Sim */
.chat-b-9 { animation: smoothSlideUp 34s both 29.5s; } /* Bot Final */

/* Pulse animation for the choice button */
@keyframes clickFlash {
  0%, 100% { background: transparent; color: #759226; }
  50% { background: rgba(117,146,38,0.3); transform: scale(0.95); }
}
.auto-click {
  animation: clickFlash 0.4s ease-in-out 26.5s both;
}

/* DATA PARTICLES AND MASSIVE HUB CENTER */
.orbit-container {
  position: relative;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.orbit-ring {
  position: absolute;
  width: 500px;
  height: 500px;
  border: 1px dashed var(--border-subtle);
  border-radius: 50%;
}
.hub-center {
  width: 180px;  /* Huge size (approx 3x default 60px) */
  height: 180px; /* Huge size */
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 60px rgba(136, 167, 47, 0.4);
  z-index: 10;
  position: relative;
  animation: pulse-glow 2s infinite ease-in-out;
}

/* Pulsing effect override */
@keyframes pulse-glow {
  0% { box-shadow: 0 0 0 0 rgba(136, 167, 47, 0.5); }
  70% { box-shadow: 0 0 0 30px rgba(136, 167, 47, 0); }
  100% { box-shadow: 0 0 0 0 rgba(136, 167, 47, 0); }
}

.data-particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
  box-shadow: 0 0 12px var(--primary);
  z-index: 5;
  top: 50%;
  left: 50%;
  opacity: 0;
  pointer-events: none;
}

/* Particle Trajectories radially outward */
.particle-1 { animation: shootParticle 2s cubic-bezier(0.2, 1, 0.3, 1) infinite 0.1s; transform-origin: top left; }
.particle-2 { animation: shootParticle 2s cubic-bezier(0.2, 1, 0.3, 1) infinite 0.5s; transform-origin: top left; transform: rotate(72deg); }
.particle-3 { animation: shootParticle 2.5s cubic-bezier(0.2, 1, 0.3, 1) infinite 0.9s; transform-origin: top left; transform: rotate(144deg); }
.particle-4 { animation: shootParticle 2s cubic-bezier(0.2, 1, 0.3, 1) infinite 1.3s; transform-origin: top left; transform: rotate(216deg); }
.particle-5 { animation: shootParticle 2.5s cubic-bezier(0.2, 1, 0.3, 1) infinite 1.7s; transform-origin: top left; transform: rotate(288deg); }

@keyframes shootParticle {
  0% { transform: rotate(var(--rot, 0deg)) translate(-50%, -50%) scale(1); opacity: 1; }
  100% { transform: rotate(var(--rot, 0deg)) translate(-50%, -320px) scale(0); opacity: 0; }
}
.particle-1 { --rot: 0deg; }
.particle-2 { --rot: 72deg; }
.particle-3 { --rot: 144deg; }
.particle-4 { --rot: 216deg; }
.particle-5 { --rot: 288deg; }

@media (max-width: 768px) {
  .orbit-container {
    transform: scale(0.5); /* Prevents horizontal scroll on small devices */
    margin: -6rem auto;
  }
}
`;

cssFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let cssContent = fs.readFileSync(file, 'utf8');
    
    // Purge old specific blocks cleanly
    cssContent = cssContent.replace(/\/\* Chat Auto-Scroll Animation[\s\S]*?(?=@media \(max-width: 768px\))/gm, '');
    cssContent = cssContent.replace(/@media \(max-width: 768px\) \{[\s\S]*?\}\n\}/gm, ''); // clean old mobile query

    fs.writeFileSync(file, cssContent + '\n' + perfectIphoneCSS);
  }
});


// --- 2. INDEX.HTML UPDATES (Hub Center Logo Size) ---
let html = fs.readFileSync('index.html', 'utf8');

// A) Fix Hub Center icon size to be 3x bigger inside the newly sized 180px bubble
html = html.replace(
  /<div class="hub-center">\s*<img src="assets\/images\/ebot_icon\.avif" alt="Ê-Bot Integrations" style="width: 100px; height: 100px; object-fit: contain;">\s*<\/div>/,
  `<div class="hub-center">
            <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Integrations" style="width: 120px; height: 120px; object-fit: contain;">
          </div>`
);

fs.writeFileSync('index.html', html);
console.log("CSS de Opacidade do celular e Hub Central triplicado com partículas implementados perfeitamente.");
