const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldHeroVisualRegex = /<div class="hero-visual reveal reveal-right relative"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

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
                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=300&q=80" style="width: 100%; height: 100px; object-fit: cover; border-top-left-radius: 12px; border-top-right-radius: 12px;" alt="Farmácia">
                <div style="padding: 0.6rem 0.8rem;">
                  Há estoque na farmácia parceira a 500m de você.<br>
                  <div style="margin-top: 8px; font-weight: 600; display: flex; align-items: center; gap: 4px; color: #3c4844;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Abrir no Mapa
                  </div>
                  <span class="wa-time">10:02</span>
                </div>
              </div>
              
              <div class="wa-bubble wa-sent chat-b-7">
                Nossa, incrível! Muito obrigado.
                <span class="wa-time">10:03</span>
              </div>

              <div class="typing-indicator wa-received type-seq-4" style="padding: 0.4rem 0.6rem; align-self: flex-start; border-top-left-radius: 2px;">
                <span></span><span></span><span></span>
              </div>
              
              <div class="wa-bubble wa-received chat-b-8">
                Por nada! Deseja seguir com o agendamento do seu retorno?
                <span class="wa-time">10:03</span>
              </div>
            </div>
          </div>
          
          <!-- Dynamic Floating Elements (Minimalist / Solid SVGs) -->
          <div class="glass-card float-hover" style="position: absolute; top: 15%; left: -60px; width: auto; padding: 1rem 1.5rem; z-index: 3; animation: float 5s ease-in-out infinite 0.5s; border: 1px solid rgba(0,0,0,0.05); display: flex; gap: 1rem; align-items: center;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#759226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            <div>
              <div style="font-weight: 700; font-size: 0.85rem; color: #3c4844;">IA Generativa</div>
              <div style="font-size: 0.7rem; color: var(--text-body);">Respostas Autônomas</div>
            </div>
          </div>

          <div class="glass-card float-hover" style="position: absolute; bottom: 15%; right: -40px; width: auto; padding: 1rem 1.5rem; z-index: 3; animation: float 6s ease-in-out infinite 1.2s; border: 1px solid rgba(0,0,0,0.05); display: flex; gap: 1rem; align-items: center;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3c4844" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <div>
              <div style="font-weight: 700; font-size: 0.85rem; color: #3c4844;">Proteção LGPD</div>
              <div style="font-size: 0.7rem; color: var(--text-body);">Dados Criptografados</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>`;

html = html.replace(oldHeroVisualRegex, newHeroVisualHTML);
fs.writeFileSync('index.html', html);
console.log("Index atualizado via Javascript.");
