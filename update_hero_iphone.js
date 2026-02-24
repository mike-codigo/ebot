const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

// --- OVERRIDE IPHONE CSS ---
const newIphoneCSS = `
/* MODERN IPHONE CSS MOCKUP (DARK/OLIVE THEME) */
.iphone-mockup {
  position: relative;
  width: 320px;
  height: 650px;
  background: #3d4945; /* Dark carcase */
  border-radius: 44px;
  border: 10px solid #2f3835;
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.1), 0 32px 64px rgba(0,0,0,0.25), 0 12px 24px rgba(0,0,0,0.15);
  overflow: hidden;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

/* Notch */
.iphone-mockup::before {
  content: "";
  position: absolute;
  top: 0; left: 50%;
  transform: translateX(-50%);
  width: 120px; height: 30px;
  background: #2f3835;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  z-index: 20;
}
.iphone-mockup::after {
  content: "";
  position: absolute;
  top: 8px; left: 50%;
  transform: translateX(-50%);
  width: 60px; height: 6px;
  background: #111;
  border-radius: 10px;
  z-index: 21;
}

/* Chat Header Custom */
.wa-chat-header {
  background: #3c4844; /* Dark gray match */
  color: #ffffff;
  padding: 40px 1rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 10;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

/* Chat Body area */
.wa-chat-body {
  flex: 1;
  background: #F4F6F5; /* Very subtle off-white for contrast */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: hidden;
}

/* Custom Olive Green Messages */
.wa-sent {
  background: #E8F2D0; /* Very light olive based on #759226 */
  align-self: flex-end;
  border-top-right-radius: 2px;
  border: 1px solid rgba(117, 146, 38, 0.2);
  color: #1a1a1a;
}

.wa-received {
  background: #ffffff;
  align-self: flex-start;
  border-top-left-radius: 2px;
  border: 1px solid rgba(0,0,0,0.05);
  color: #1a1a1a;
}

/* Fluid Bubble Animation */
.wa-bubble {
  padding: 0.6rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  max-width: 85%;
  line-height: 1.4;
  opacity: 0;
  transform: translateY(20px);
  animation: smoothSlideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes smoothSlideUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Cursor Animation */
.animated-cursor {
  position: absolute;
  width: 28px;
  height: 28px;
  z-index: 99;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  pointer-events: none;
  animation: cursorMove 8s infinite ease-in-out;
}

@keyframes cursorMove {
  0% { transform: translate(150px, 400px); opacity: 0; }
  10% { opacity: 1; transform: translate(150px, 400px); }
  30% { transform: translate(-30px, 200px) scale(0.9); }
  35% { transform: translate(-30px, 200px) scale(1); } /* Click effect */
  60% { transform: translate(100px, 100px); }
  80% { transform: translate(20px, 500px); opacity: 1; }
  100% { transform: translate(20px, 500px); opacity: 0; }
}

/* Floating Ê-Bot Icon */
.floating-ebot {
  position: absolute;
  width: 56px;
  height: 56px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 12px 32px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  animation: floatIcon 6s infinite ease-in-out;
}

@keyframes floatIcon {
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}
`;

// Replace old iPhone mockup styles
css = css.replace(/\/\* MODERN IPHONE CSS MOCKUP \*\/[\s\S]*?(?=\/\*)/g, ''); 
// Since we used regex, let's just append safely to the end
css = css.replace(/\/\* MODERN IPHONE CSS MOCKUP[\s\S]*?(?=\n\n)/g, ''); // brute force clean old

// Just append the new override at the end
fs.writeFileSync('css/components.css', css + '\n\n' + newIphoneCSS);

// --- OVERRIDE INDEX.HTML HERO ---
let html = fs.readFileSync('index.html', 'utf8');

const heroVisualRegex = /<div class="hero-visual reveal reveal-right relative"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const newHeroVisualHTML = `<div class="hero-visual reveal reveal-right relative" style="position: relative; height: 750px; display: flex; align-items: center; justify-content: center; padding-top: 40px;">
          
          <!-- Animated Mouse Cursor -->
          <svg class="animated-cursor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 2.85986L20.4418 10.3642C21.666 10.9224 21.6706 12.6565 20.4496 13.2223L13.7846 16.3117C13.4357 16.4735 13.1506 16.7441 12.9774 17.0864L9.62083 23.7143C9.01168 24.9171 7.27961 24.8727 6.74103 23.642L4 2.85986Z" fill="#1a1a1a" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>

          <!-- Floating Ê-Bot Icon -->
          <div class="floating-ebot" style="top: 10%; right: -20px;">
            <img src="assets/images/ebot_icon.avif" alt="Ê-Bot" style="width: 32px; height: auto;">
          </div>

          <!-- NEW IPHONE MOCKUP (DARK/OLIVE) -->
          <div class="iphone-mockup animate-float">
            
            <div class="wa-chat-header">
              <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Clinical" style="filter: brightness(0) invert(1);">
              <div>
                <div style="font-weight: 600; font-size: 0.9rem;">Clínica Ê-Bot Saúde</div>
                <div style="font-size: 0.7rem; opacity: 0.8; color: #88a72f;">Online agora</div>
              </div>
            </div>
            
            <div class="wa-chat-body">
              <div class="wa-bubble wa-received chat-b-1">
                Olá! Sou o assistente virtual da Clínica. Como posso te ajudar hoje?
                <span class="wa-time">10:00</span>
              </div>
              
              <div class="wa-bubble wa-sent chat-b-2">
                Oi! Preciso agendar retorno, e também não entendi uma receita do pronto-socorro.
                <span class="wa-time">10:01</span>
              </div>
              
              <div class="typing-indicator wa-received type-seq-2" style="padding: 0.4rem 0.6rem; align-self: flex-start; border-top-left-radius: 2px;">
                <span></span><span></span><span></span>
              </div>
              
              <div class="wa-bubble wa-received chat-b-3">
                Compreendi. Me envie uma foto da receita que nossa IA fará a leitura e te ajudará na hora.
                <span class="wa-time">10:01</span>
              </div>
              
              <!-- Image attachment simulation -->
              <div class="wa-bubble wa-sent chat-b-4" style="background: transparent; padding: 0; box-shadow: none; border: none;">
                <div class="wa-attachment" style="background: white; padding: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                  <!-- Placeholder image of a medical prescription -->
                  <img src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=200&q=80" style="width: 140px; height: 100px; object-fit: cover; border-radius: 4px;" alt="Receita Médica">
                </div>
                <span class="wa-time" style="background: rgba(0,0,0,0.5); color: white; padding: 2px 6px; border-radius: 10px; display: inline-block;">10:02</span>
              </div>
              
              <div class="typing-indicator wa-received type-seq-3" style="padding: 0.4rem 0.6rem; align-self: flex-start; border-top-left-radius: 2px;">
                <span></span><span></span><span></span>
              </div>
              
              <div class="wa-bubble wa-received chat-b-5">
                <strong style="color: #759226;">Análise concluída ✓</strong><br>
                Medicamento: Amoxicilina 500mg.<br>
                Uso: 1 caps a cada 8h por 7 dias.
                <span class="wa-time">10:02</span>
              </div>
              
              <div class="wa-bubble wa-received chat-b-6" style="padding: 0;">
                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=300&q=80" style="width:
