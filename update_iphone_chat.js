const fs = require('fs');

// --- 1. UPDATE CSS FOR SCROLLING CHAT ---
let css = fs.readFileSync('css/iphone-styles.css', 'utf8');

// Adicionando a animação de scroll no container de mensagens
const scrollAnimCSS = `
/* Chat Auto-Scroll Animation */
.wa-message-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  animation: autoScrollChat 20s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes autoScrollChat {
  0%, 25% { transform: translateY(0); }
  40% { transform: translateY(-40px); }
  60% { transform: translateY(-160px); }
  80% { transform: translateY(-300px); }
  100% { transform: translateY(-380px); }
}

/* PDF Document Bubble */
.wa-pdf-doc {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(0,0,0,0.04);
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.05);
}
.wa-pdf-icon {
  width: 36px; height: 36px;
  background: #e74c3c;
  color: white;
  border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 0.7rem; letter-spacing: 0.5px;
}
.wa-pdf-details { flex: 1; }
.wa-pdf-name { font-weight: 600; font-size: 0.8rem; color: #111; }
.wa-pdf-size { font-size: 0.65rem; color: #777; }

/* Expanded Timing Sequence for 6+ messages */
.chat-b-1 { animation-delay: 1.0s; }
.chat-b-2 { animation-delay: 3.5s; }
.chat-b-3 { animation-delay: 5.0s; }
.chat-b-4 { animation-delay: 9.5s; }
.chat-b-5 { animation-delay: 13.5s; }
.chat-b-6 { animation-delay: 18.0s; }

.type-seq-2 { animation: showTyping 1.5s ease-in-out 1.5s forwards, hideTyping 0.1s linear 3.0s forwards; }
.type-seq-3 { animation: showTyping 2.0s ease-in-out 7.0s forwards, hideTyping 0.1s linear 9.0s forwards; }
.type-seq-4 { animation: showTyping 2.0s ease-in-out 11.0s forwards, hideTyping 0.1s linear 13.0s forwards; }
.type-seq-5 { animation: showTyping 2.5s ease-in-out 15.0s forwards, hideTyping 0.1s linear 17.5s forwards; }
`;

// Append directly without duplicating if already exists
if (!css.includes('autoScrollChat')) {
    css += '\n' + scrollAnimCSS;
    fs.writeFileSync('css/iphone-styles.css', css);
    
    // As components.css imports iphone-styles conceptually via the script earlier, we must patch components.css directly here too
    let compCSS = fs.readFileSync('css/components.css', 'utf8');
    compCSS += '\n' + scrollAnimCSS;
    fs.writeFileSync('css/components.css', compCSS);
}


// --- 2. UPDATE INDEX.HTML ---
let html = fs.readFileSync('index.html', 'utf8');

// Replace the old iphone markup with the new story
const oldIphoneMatch = /<div class="iphone-mockup animate-float">[\s\S]*?<!-- Dynamic Floating Elements/m;

const newIphoneContent = `<div class="iphone-mockup animate-float">
            
            <div class="wa-chat-header">
              <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Clinical" style="filter: brightness(0) invert(1);">
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
                
                <!-- Msg 2 (User) -->
                <div class="wa-bubble wa-sent chat-b-2">
                  Oi! Fui ao PS ontem e não estou entendendo a letra do médico nesta receita. Pode me ajudar?
                  <span class="wa-time">10:01</span>
                </div>
                
                <!-- Msg 3 (User PDF) -->
                <div class="wa-bubble wa-sent chat-b-3" style="padding: 0.4rem; background: #E8F2D0;">
                  <div class="wa-pdf-doc">
                    <div class="wa-pdf-icon">PDF</div>
                    <div class="wa-pdf-details">
                      <div class="wa-pdf-name">receita_medica.pdf</div>
                      <div class="wa-pdf-size">1.2 MB • Documento</div>
                    </div>
                  </div>
                  <span class="wa-time" style="padding-right: 0.4rem;">10:01</span>
                </div>
                
                <div class="typing-indicator wa-received type-seq-3" style="padding: 0.4rem 0.6rem; align-self: flex-start; border-top-left-radius: 2px;">
                  <span></span><span></span><span></span>
                </div>
                
                <!-- Msg 4 (Bot Image + Info) -->
                <div class="wa-bubble wa-received chat-b-4" style="padding: 0.4rem;">
                  <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80" style="width: 100%; height: 110px; object-fit: cover; border-radius: 8px; margin-bottom: 0.5rem;" alt="Caixa de Remédio">
                  <div style="padding: 0 0.4rem;">
                    <strong style="color: #759226;">Leitura concluída ✓</strong><br>
                    O medicamento receitado é a <strong>Amoxicilina 500mg</strong>.<br>
                    <strong>Posologia:</strong> Tomar 1 cápsula a cada 8h, durante 7 dias.
                    <span class="wa-time">10:02</span>
                  </div>
                </div>

                <div class="typing-indicator wa-received type-seq-4" style="padding: 0.4rem 0.6rem; align-self: flex-start; border-top-left-radius: 2px;">
                  <span></span><span></span><span></span>
                </div>
                
                <!-- Msg 5 (Bot Location) -->
                <div class="wa-bubble wa-received chat-b-5">
                  Verifiquei no sistema da cidade e há estoque na <strong>Farmácia São João</strong> (a 400m de você).<br>
                  <a href="#" style="display: flex; align-items: center; gap: 6px; margin-top: 8px; color: #3c4844; font-weight: 700; text-decoration: none; background: rgba(0,0,0,0.05); padding: 8px; border-radius: 6px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#759226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Abrir Rota no Mapa
                  </a>
                  <span class="wa-time">10:02</span>
                </div>

                <div class="typing-indicator wa-received type-seq-5" style="padding: 0.4rem 0.6rem; align-self: flex-start; border-top-left-radius: 2px;">
                  <span></span><span></span><span></span>
                </div>
                
                <!-- Msg 6 (Bot Reminder Upsell) -->
                <div class="wa-bubble wa-received chat-b-6" style="border: 1px solid rgba(117,146,38,0.3);">
                  Deseja que eu agende lembretes gratuitos para você não esquecer de tomar o remédio nos dias e horários corretos? ⏰
                  <div style="display: flex; gap: 0.5rem; margin-top: 0.75rem;">
                    <button style="flex: 1; padding: 6px; background: #759226; color: white; border-radius: 6px; font-weight: 600; font-size: 0.75rem;">Sim, agendar</button>
                    <button style="flex: 1; padding: 6px; background: #eee; color: #555; border-radius: 6px; font-weight: 600; font-size: 0.75rem;">Não, obrigado</button>
                  </div>
                  <span class="wa-time">10:03</span>
                </div>

              </div>
            </div>
          </div>
          
          <!-- Dynamic Floating Elements`;

// Remove the floating e-bot icon completely by string replacing it out first
html = html.replace(/<!-- Floating Ê-Bot Icon -->[\s\S]*?<\/div>/, '');

// Replace the mockup
html = html.replace(oldIphoneMatch, newIphoneContent);

fs.writeFileSync('index.html', html)
