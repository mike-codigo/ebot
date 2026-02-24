const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// I will now rebuild the HTML part of the typing indicators so their timings sync perfectly with the newly established +3s/+4s gaps in the CSS sequence.

const newTypingLogic = `
                <!-- Msg 1 (Bot) -->
                <div class="wa-bubble wa-received chat-b-1">
                  Olá! Sou o Ê-Bot Clinical. Como posso te ajudar hoje?
                  <span class="wa-time">10:00</span>
                </div>
                
                <div class="typing-indicator wa-typing-user" style="animation: showTyping 36s both 1.5s, hideTyping 36s both 4.5s;"><span></span><span></span><span></span></div>

                <!-- Msg 2 (User) -->
                <div class="wa-bubble wa-sent chat-b-2">
                  Oi! Fui ao PS ontem e não estou entendendo a letra do médico nesta receita. Pode me ajudar?
                  <span class="wa-time">10:01</span>
                </div>
                
                <div class="typing-indicator wa-typing-bot" style="animation: showTyping 36s both 5.5s, hideTyping 36s both 8.5s;"><span></span><span></span><span></span></div>

                <!-- Msg 3 (Bot requests photo) -->
                <div class="wa-bubble wa-received chat-b-3">
                  Sem problemas. Me envie uma foto ou o arquivo da receita. Nossa IA fará a leitura e te ajudará na hora.
                  <span class="wa-time">10:01</span>
                </div>
                
                <div class="typing-indicator wa-typing-user" style="animation: showTyping 36s both 9.5s, hideTyping 36s both 13.0s;"><span></span><span></span><span></span></div>

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
                
                <div class="typing-indicator wa-typing-bot" style="animation: showTyping 36s both 14.0s, hideTyping 36s both 18.0s;"><span></span><span></span><span></span></div>
                
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

                <div class="typing-indicator wa-typing-bot" style="animation: showTyping 36s both 19.5s, hideTyping 36s both 23.0s;"><span></span><span></span><span></span></div>
                
                <!-- Msg 6 (Bot Location) -->
                <div class="wa-bubble wa-received chat-b-6">
                  Verifiquei no sistema e há estoque na <strong>Farmácia São João</strong> (a 400m de você).<br>
                  <div style="display: flex; align-items: center; gap: 6px; margin-top: 8px; color: #3c4844; font-weight: 700; background: rgba(0,0,0,0.05); padding: 8px; border-radius: 6px;">
                    📍 Abrir Rota no Mapa
                  </div>
                  <span class="wa-time">10:02</span>
                </div>

                <div class="typing-indicator wa-typing-bot" style="animation: showTyping 36s both 24.5s, hideTyping 36s both 27.5s;"><span></span><span></span><span></span></div>
                
                <!-- Msg 7 (Bot Reminder Upsell) -->
                <div class="wa-bubble wa-received chat-b-7" style="border: 1px solid rgba(117,146,38,0.3);">
                  Deseja que eu agende lembretes gratuitos via WhatsApp para você não esquecer de tomar o remédio nos horários corretos? ⏰
                  <div style="display: flex; gap: 0.5rem; margin-top: 0.75rem;">
                    <button class="auto-click" style="flex: 1; padding: 6px; border-radius: 6px; font-weight: 600; font-size: 0.75rem; border: 1px solid #759226; color: #759226; background: transparent;">Sim, agendar</button>
                    <button style="flex: 1; padding: 6px; background: #eee; color: #555; border-radius: 6px; font-weight: 600; font-size: 0.75rem; border: none;">Não</button>
                  </div>
                  <span class="wa-time">10:03</span>
                </div>

                <!-- Msg 8 (User clicks Yes - Simulated) -->
                <div class="wa-bubble wa-sent chat-b-8">
                  Sim, agendar
                  <span class="wa-time">10:03</span>
                </div>

                <div class="typing-indicator wa-typing-bot" style="animation: showTyping 36s both 31.0s, hideTyping 36s both 32.5s;"><span></span><span></span><span></span></div>

                <!-- Msg 9 (Bot Confirmation & End) -->
                <div class="wa-bubble wa-received chat-b-9" style="background: #E8F2D0; border: 1px solid rgba(117, 146, 38, 0.4);">
                  <strong>Tudo certo! 💚</strong><br>
                  Acabei de ativar seus alarmes. Te mandarei uma mensagem a cada 8h. Melhoras!
                  <span class="wa-time">10:03</span>
                </div>`;

const chatBodyRegex = /<!-- Msg 1 \(Bot\) -->[\s\S]*?<!-- Msg 9 \(Bot Confirmation & End\) -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<!-- Dynamic Floating Elements/m;

const replacement = newTypingLogic + `\n\n              </div>\n            </div>\n          </div>\n          \n          <!-- Dynamic Floating Elements`;

html = html.replace(chatBodyRegex, replacement);

fs.writeFileSync('index.html', html);
console.log('HTML index chat injeção limpa aplicada.');
