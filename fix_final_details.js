const fs = require('fs');

// --- 1. CLEAN UP INDEX.HTML (Chat, Checklist, Hub Center) ---
let html = fs.readFileSync('index.html', 'utf8');

// A) Remove typing indicators completely
html = html.replace(/<div class="typing-indicator[^>]*><span><\/span><span><\/span><span><\/span><\/div>/g, '');

// B) Fix duplicate checkmarks in "Antes / Depois"
html = html.replace(/<li><span style="color: #e74c3c;">✗<\/span>\s*/g, '<li>');
html = html.replace(/<li><span style="color: var\(--primary\);">✓<\/span>\s*/g, '<li>');

// C) Fix the Hub Center icon to be the actual E-Bot icon
html = html.replace(
  /<div class="hub-center">\s*<svg width="48" height="48" viewBox="0 0 24 24" fill="var\(--primary\)"><path[^>]*><\/svg>\s*<\/div>/g,
  `<div class="hub-center">
            <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Integrations" style="width: 64px; height: 64px; object-fit: contain;">
          </div>`
);

fs.writeFileSync('index.html', html);

// --- 2. REFINE IPHONE CSS TIMINGS (iphone-styles.css & components.css) ---
let css = fs.readFileSync('css/iphone-styles.css', 'utf8');

// Replace the timing sequence and autoscroll completely with the clean version
const cleanScrollCSS = `
/* Chat Auto-Scroll Animation (Step-by-step sync with messages) */
.wa-message-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  animation: autoScrollChat 26s ease-in-out infinite;
}

@keyframes autoScrollChat {
  0%, 35% { transform: translateY(0); } /* msg 1, 2, 3 fit */
  40%, 55% { transform: translateY(-130px); } /* msg 4 (pdf) enters */
  60%, 75% { transform: translateY(-300px); } /* msg 5 & 6 (image and map) enters */
  80%, 95% { transform: translateY(-460px); } /* last messages enter */
  100% { transform: translateY(0); }
}

/* Perfected and spaced message pop sequence (26s total loop) */
.chat-b-1 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.0s; }
.chat-b-2 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 3.5s; }
.chat-b-3 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 5.5s; }
.chat-b-4 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 9.0s; } /* PDF */
.chat-b-5 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 13.0s; } /* Remédio Info */
.chat-b-6 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 16.5s; } /* Mapa Info */
.chat-b-7 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 20.0s; } /* Pergunta de Agendamento */
.chat-b-8 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 22.5s; } /* User: Sim */
.chat-b-9 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 24.0s; } /* Bot Confirma */

/* User choice highlight animation (clicks Sim at 22.0s) */
@keyframes clickFlash {
  0%, 100% { background: transparent; color: #759226; }
  50% { background: rgba(117,146,38,0.2); transform: scale(0.95); }
}
.auto-click {
  animation: clickFlash 0.4s ease-in-out 22.0s forwards;
}
`;

css = css.replace(/\/\* Chat Auto-Scroll Animation \([\s\S]*?(?=\.wa-typing-user)/m, cleanScrollCSS + '\n');
fs.writeFileSync('css/iphone-styles.css', css);

let compCSS = fs.readFileSync('css/components.css', 'utf8');
compCSS = compCSS.replace(/\/\* Chat Auto-Scroll Animation \([\s\S]*?(?=\.wa-typing-user)/m, cleanScrollCSS + '\n');
fs.writeFileSync('css/components.css', compCSS);

console.log("Problemas corrigidos! (Ícone do hub, duplicidade de checks e limpeza das animações).");
