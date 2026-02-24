const fs = require('fs');

// --- 1. REFINING CSS ANIMATIONS (iphone-styles.css) ---
let css = fs.readFileSync('css/iphone-styles.css', 'utf8');

// Update autoScroll to pause and snap, and loop infinitely
const newScrollCSS = `
/* Chat Auto-Scroll Animation (Step-by-step) */
.wa-message-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  animation: autoScrollChat 28s cubic-bezier(0.3, 0, 0.2, 1) infinite;
}

/* Waits until message 4 (PDF) to start pushing up, then pushes for the long info cards */
@keyframes autoScrollChat {
  0%, 30% { transform: translateY(0); } /* Initial messages */
  35%, 45% { transform: translateY(-80px); } /* PDF sent */
  50%, 62% { transform: translateY(-260px); } /* Info + Image received */
  65%, 85% { transform: translateY(-440px); } /* Location + Upsell Buttons */
  88%, 95% { transform: translateY(-560px); } /* Final confirmation */
  100% { transform: translateY(0); } /* Reset to top for loop */
}

/* Re-timed Sequence for 8 Messages Loop (28s total) */
.chat-b-1 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.0s; }
.chat-b-2 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 4.0s; }
.chat-b-3 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 5.5s; }
.chat-b-4 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 10.0s; } /* PDF */
.chat-b-5 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 14.5s; } /* Remédio */
.chat-b-6 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 18.0s; } /* Mapa */
.chat-b-7 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 20.0s; } /* Upsell Lembrete */
.chat-b-8 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 22.5s; } /* User clicks Sim */
.chat-b-9 { animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 24.5s; } /* Bot Confirma */

/* Adjusted typing indicators (they will appear exactly where the bubble will spawn) */
.type-seq-user-1 { animation: showTyping 1.5s ease-in-out 2.2s forwards, hideTyping 0.1s linear 3.7s forwards; }
.type-seq-bot-1  { animation: showTyping 1.5s ease-in-out 4.2s forwards, hideTyping 0.1s linear 5.3s forwards; }
.type-seq-user-2 { animation: showTyping 2.0s ease-in-out 7.5s forwards, hideTyping 0.1s linear 9.5s forwards; }
.type-seq-bot-2  { animation: showTyping 2.0s ease-in-out 12.0s forwards, hideTyping 0.1s linear 14.0s forwards; }
.type-seq-bot-3  { animation: showTyping 1.0s ease-in-out 16.5s forwards, hideTyping 0.1s linear 17.5s forwards; }
.type-seq-bot-4  { animation: showTyping 1.0s ease-in-out 18.5s forwards, hideTyping 0.1s linear 19.5s forwards; }
.type-seq-bot-5  { animation: showTyping 1.0s ease-in-out 23.0s forwards, hideTyping 0.1s linear 24.0s forwards; }

.wa-typing-user {
  align-self: flex-end;
  background: transparent;
  padding: 0;
  margin-right: 0.5rem;
}
.wa-typing-bot {
  align-self: flex-start;
  background: transparent;
  padding: 0;
  margin-left: 0.5rem;
}

.typing-indicator span {
  background: #3d4945; /* Darker typing dots */
}

/* User choice highlight animation */
@keyframes clickFlash {
  0%, 100% { background: #759226; color: white; }
  50% { background: #5a701d; color: white; transform: scale(0.95); }
}
.auto-click {
  animation: clickFlash 0.4s ease-in-out 22.0s forwards;
}
`;

// Replace the old scroll blocks safely
css = css.replace(/\/\* Chat Auto-Scroll Animation \*\/[\s\S]*?(?=\.wa-pdf-doc)/m, '');
css = css.replace(/\/\* Expanded Timing Sequence for 6\+ messages \*\/[\s\S]*?$/m, '');

fs.writeFileSync('css/iphone-styles.css', css + '\n' + newScrollCSS);


// Update components.css as well to guarantee it loads
let compCSS = fs.readFileSync('css/components.css', 'utf8');
compCSS = compCSS.replace(/\/\* Chat Auto-Scroll Animation \*\/[\s\S]*?(?=\.wa-pdf-doc)/m, '');
compCSS = compCSS.replace(/\/\* Expanded Timing Sequence for 6\+ messages \*\/[\s\S]*?$/m, '');
fs.writeFileSync('css/components.css', compCSS + '\n' + newScrollCSS);


// --- 2. UPDATE INDEX.HTML ---
let html = fs.readFileSync('index.html', 'utf8');

// Fix profile picture and update the entire chat flow
const oldChatMatch = /<div class="wa-chat-header">[\s\S]*?<!-- Dynamic Floating Elements/m;

const newChatHTML = `<div class="wa-chat-header">
              <!-- FIX: Correcting the path and styling for the logo -->
              <div style="width: 36px; height: 36px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 4px; flex-shrink: 0;">
                <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Clinical" style="width: 100%; height: 100%; object-fit: contain;">
              </div>
              <div>
                <div style="font-weight: 600; font-size: 0.9rem;">Clínica Ê-Bot Saúde</div>
                <div style="font-size: 0.7rem; opacity: 0.8; color: #88a72f;">Online agora</div>
              </div>
            </div>
            
            <div class="wa-chat-body" style="position: relative;">
              <!-- Wrapper moves up as conversation gets longer -->
              <div class="wa-message-wrapper">
                
                <!-- Msg 1 (Bot) -->
                <div class="wa-bubble wa-received chat-b-1">
                  Olá! Sou o Ê-Bot Clinical. Como posso te ajudar hoje?
                  <span class="wa-time">10:00</span>
                </div>
                
                <div class="typing-indicator wa-typing-user type-seq-user-1"><span></span><span></span><span></span></div>

                <!-- Msg 2 (User) -->
                <div class="wa-bubble wa-sent chat-b-2">
                  Oi! Fui ao PS ontem e não estou entendendo a letra do médico nesta receita. Pode me ajudar?
                  <span class="wa-time">10:01</span>
                </div>
                
                <div class="typing-indicator wa-typing-bot type-seq-bot-1"><span></span><span></span><span></span></div>

                <!-- Msg 3 (Bot requests photo) -->
                <div class="wa-bubble wa-received chat-b-3">
                  Sem problemas. Me envie uma foto ou o arquivo da receita. Nossa IA fará a leitura e te ajudará na hora.
                  <span class="wa-time">10:01</span>
                </div>
                
                <div class="typing-indicator wa-typing-user type-seq-user-2"><span></span><span></span><span></span></div>

                <!-- Msg 4 (User PDF) -->
                <div class="wa-bubble wa-sent chat-b-4" style="padding: 0.4rem; background: #E8F2D0;">
                  <div class="wa-pdf-doc">
                    <div class="wa-pdf-icon">PDF</div>
                    <div class="wa-pdf-details">
                      <div class="wa-pdf-name">receita_medica.pdf</div>
                      <div class="wa-pdf-size">1.2 MB • Documento</div>
                    </div>
                  </div>
                  <span class="wa-time" style="padding-right: 0.4rem;">10:02</span>
                </div>
                
                <div class="typing-indicator wa-typing-bot type-seq-bot-2"><span></span><span></span><span></span></div>
                
                <!-- Msg 5 (Bot Image + Info) -->
                <div class="wa-bubble wa-received chat-b-5" style="padding: 0.4rem;">
                  <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80" style="width: 100%; height: 110px; object-fit: cover; border-radius: 8px; margin-bottom: 0.5rem;" alt="Caixa de Remédio">
                  <div style="padding: 0 0.4rem;">
                    <strong style="color: #759226;">Leitura concluída ✓</strong><br>
                    O medicamento receitado é a <strong>Amoxicilina 500mg</strong>.<br>
                    <strong>Posologia:</strong> Tomar 1 cápsula a cada 8h, durante 7 dias.
                    <span class="wa-time">10:02</span>
                  </div>
                </div>

                <div class="typing-indicator wa-typing-bot type-seq-bot-3"><span></span><span></span><span></span></div>
