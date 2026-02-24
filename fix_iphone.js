const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldHeroVisual = /<div class="hero-visual reveal reveal-right relative"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const newHeroVisual = `<div class="hero-visual reveal reveal-right relative" style="position: relative; height: 750px; display: flex; align-items: center; justify-content: center; padding-top: 40px;">
          
          <!-- NEW IPHONE MOCKUP -->
          <div class="iphone-mockup animate-float">
            
            <div class="wa-chat-header">
              <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Clinical">
              <div>
                <div style="font-weight: 600; font-size: 0.9rem;">Clínica Ê-Bot Saúde</div>
                <div style="font-size: 0.7rem; opacity: 0.8;">Online com IA</div>
              </div>
            </div>
            
            <div class="wa-chat-body">
              <div class="wa-bubble wa-received chat-b-1">
                Olá! Sou o assistente virtual da Clínica. Como posso te ajudar?
                <span class="wa-time">10:00</span>
              </div>
              
              <div class="wa-bubble wa-sent chat-b-2">
                Oi! Preciso agendar e também não entendi uma receita médica que me deram no PS.
                <span class="wa-time">10:01</span>
              </div>
              
              <div class="typing-indicator wa-received type-seq-2" style="padding: 0.4rem 0.6rem; align-self: flex-start; border-top-left-radius: 2px;">
                <span></span><span></span><span></span>
              </div>
              
              <div class="wa-bubble wa-received chat-b-3">
                Sem problemas. Me envie uma foto da receita que nossa IA analisará para você na hora.
                <span class="wa-time">10:01</span>
              </div>
              
              <div class="wa-bubble wa-sent chat-b-4" style="background: transparent; padding: 0; box-shadow: none;">
                <div class="wa-attachment" style="background: white; padding: 4px;">
                  <div style="width: 140px; height: 100px; background: #ddd; display: flex; align-items: center; justify-content: center; font-size: 2rem; border-radius: 4px;">📄</div>
                </div>
                <span class="wa-time" style="background: rgba(0,0,0,0.5); color: white; padding: 2px 6px; border-radius: 10px; display: inline-block;">10:02</span>
              </div>
              
              <div class="typing-indicator wa-received type-seq-3" style="padding: 0.4rem 0.6rem; align-self: flex-start; border-top-left-radius: 2px;">
                <span></span><span></span><span></span>
              </div>
              
              <div class="wa-bubble wa-received chat-b-5">
                <strong>Análise concluída! ✅</strong><br>
                Medicamento: Amoxicilina 500mg.<br>
                Uso: 1 caps a cada 8h por 7 dias.
                <span class="wa-time">10:02</span>
              </div>
              
              <div class="wa-bubble wa-received chat-b-6" style="padding: 0;">
                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=300&q=80" style="width: 100%; height: 100px; object-fit: cover; border-top-left-radius: 12px; border-top-right-radius: 12px;" alt="Farmácia">
                <div style="padding: 0.5rem 0.8rem;">
                  Há estoque na farmácia parceira a 500m de você. <br><a href="#" style="color: #00a8ff; text-decoration: underline; font-weight: 600;">Abrir no Mapa 📍</a>
                  <span class="wa-time">10:02</span>
                </div>
              </div>
              
              <div class="wa-bubble wa-sent chat-b-7">
                Nossa, que prático! Muito obrigado.
                <span class="wa-time">10:03</span>
              </div>

              <div class="typing-indicator wa-received type-seq-4" style="padding: 0.4rem 0.6rem; align-self: flex-start; border-top-left-radius: 2px;">
                <span></span><span></span><span></span>
              </div>
              
              <div class="wa-bubble wa-received chat-b-8">
                Disponha! Deseja seguir com o agendamento da próxima consulta de retorno?
                <span class="wa-time">10:03</span>
              </div>
            </div>
          </div>
          
          <!-- Dynamic Floating Elements -->
          <div class="glass-card float-hover" style="position: absolute; top: 15%; right: -50px; width: 180px; padding: 1rem; z-index: 3; animation: float 5s ease-in-out infinite 0.5s;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 32px; height: 32px; border-radius: 50%; background: #27ae60; display: flex; align-items: center; justify-content: center; color: white;">⚡</div>
              <div>
                <div style="font-weight: 700; font-size: 0.85rem;">IA Generativa</div>
                <div style="font-size: 0.7rem; color: var(--text-body);">Respostas em MS</div>
              </div>
            </div>
          </div>

          <div class="glass-card float-hover" style="position: absolute; bottom: 20%; left: -60px; width: 180px; padding: 1rem; z-index: 3; animation: float 6s ease-in-out infinite 1.2s;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 32px; height: 32px; border-radius: 50%; background: #e74c3c; display: flex; align-items: center; justify-content: center; color: white;">📸</div>
              <div>
                <div style="font-weight: 700; font-size: 0.85rem;">OCR Nativo</div>
                <div style="font-size: 0.7rem; color: var(--text-body);">Leitura de Imagens</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>`;

html = html.replace(oldHeroVisual, newHeroVisual);
fs.writeFileSync('index.html', html);
console.log("iPhone Mockup & interações WhatsApp injetadas na Home.");
