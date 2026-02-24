const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// I will re-inject the exact structure for the Left Column with API and Panel, and Right Column with Clinical and Explorer
const layoutHtml = `        <div class="ecosystem-layout">
          <!-- Left Column -->
          <div class="ecosystem-col ecosystem-left">
            <!-- Produto 1 (API) -->
            <div class="glass-liquid-card ecosystem-card float-hover reveal stagger-1">
              <div class="flashlight-glow"></div>
              <div class="card-badge badge-orange">MAIS POPULAR PARA DEVS</div>
              <div class="tool-hover-overlay">
                <div class="tool-animation-container">
                  <div class="pulse-ring delay-0"></div>
                  <div class="pulse-ring delay-1"></div>
                  <div class="pulse-ring delay-2"></div>
                  <img src="assets/images/ebot_icon.avif" alt="Ê-Bot API" class="tool-anim-icon">
                </div>
                <div class="tool-anim-name">Ê-Bot API</div>
              </div>
              <div class="card-content">
                <div class="card-icon-wrapper">
                  <img src="assets/images/ebot_icon.avif" alt="Ê-Bot API" class="card-logo">
                </div>
                <h3 class="h3 card-title">Ê-Bot API</h3>
                <p class="text-small card-desc">Mensageria e Disparos Transacionais</p>
                <ul class="checklist text-small card-list">
                  <li>Disparos automáticos via WhatsApp</li>
                  <li>Lembretes e cobranças automáticas</li>
                  <li>Integração via Webhooks</li>
                </ul>
                <a href="ebot-api.html" class="btn btn-neon w-100">Ver detalhes da API</a>
              </div>
            </div>
            
            <!-- Produto 2 (Panel) -->
            <div class="glass-liquid-card ecosystem-card float-hover reveal stagger-2">
              <div class="flashlight-glow"></div>
              <div class="card-badge badge-orange">100% PERSONALIZÁVEL</div>
              <div class="tool-hover-overlay">
                <div class="tool-animation-container">
                  <div class="pulse-ring delay-0"></div>
                  <div class="pulse-ring delay-1"></div>
                  <div class="pulse-ring delay-2"></div>
                  <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Panel" class="tool-anim-icon">
                </div>
                <div class="tool-anim-name">Ê-Bot Panel</div>
              </div>
              <div class="card-content">
                <div class="card-icon-wrapper">
                  <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Panel" class="card-logo">
                </div>
                <h3 class="h3 card-title">Ê-Bot Panel</h3>
                <p class="text-small card-desc">Central operacional de atendimento, vendas e CRM</p>
                <ul class="checklist text-small card-list">
                  <li>Multiusuários e múltiplas filas</li>
                  <li>CRM e histórico completo</li>
                  <li>Atendimento humano + automação IA</li>
                </ul>
                <a href="ebot-panel.html" class="btn btn-neon w-100">Ver detalhes do Panel</a>
              </div>
            </div>
          </div>

          <!-- Center Column (iPhone) -->
          <div class="ecosystem-col ecosystem-center reveal stagger-3">
            <div class="iphone-interactive" id="interactive-iphone">
              <div class="iphone-device">
                <div class="iphone-notch"></div>
                <div class="iphone-screen">
                  <video src="assets/videos/video_produtos.mp4" autoplay loop muted playsinline class="iphone-video-content"></video>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="ecosystem-col ecosystem-right">
            <!-- Produto 3 (Clinical) -->
            <div class="glass-liquid-card ecosystem-card float-hover reveal stagger-4">
              <div class="flashlight-glow"></div>
              <div class="card-badge badge-orange">POPULAR PARA CLÍNICAS</div>
              <div class="tool-hover-overlay">
                <div class="tool-animation-container">
                  <div class="pulse-ring delay-0"></div>
                  <div class="pulse-ring delay-1"></div>
                  <div class="pulse-ring delay-2"></div>
                  <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Clinical" class="tool-anim-icon">
                </div>
                <div class="tool-anim-name">Ê-Bot Clinical</div>
              </div>
              <div class="card-content">
                <div class="card-icon-wrapper">
                  <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Clinical" class="card-logo">
                </div>
                <h3 class="h3 card-title">Ê-Bot Clinical</h3>
                <p class="text-small card-desc">Especializada para o setor de saúde</p>
                <ul class="checklist text-small card-list">
                  <li>Agendamentos Inteligentes</li>
                  <li>Redução de faltas (No-show)</li>
                  <li>Pesquisa de Medicamentos por Foto</li>
                </ul>
                <a href="ebot-clinical.html" class="btn btn-neon w-100">Ver detalhes do Clinical</a>
              </div>
            </div>

            <!-- Produto 4 (Explorer) -->
            <div class="glass-liquid-card ecosystem-card float-hover reveal stagger-5">
              <div class="flashlight-glow"></div>
              <div class="tool-hover-overlay">
                <div class="tool-animation-container">
                  <div class="pulse-ring delay-0"></div>
                  <div class="pulse-ring delay-1"></div>
                  <div class="pulse-ring delay-2"></div>
                  <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Explorer" class="tool-anim-icon">
                </div>
                <div class="tool-anim-name">Ê-Bot Explorer</div>
              </div>
              <div class="card-content">
                <div class="card-icon-wrapper">
                  <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Explorer" class="card-logo">
                </div>
                <h3 class="h3 card-title" style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">Ê-Bot Explorer <span class="dev-badge">Em desenvolvimento</span></h3>
                <p class="text-small card-desc">Atendimento Inteligente ao Turista</p>
                <ul class="checklist text-small card-list">
                  <li>IA especialista em turismo local</li>
                  <li>Totem interativo por conversa</li>
                  <li>Acesso rápido via QR Code</li>
                </ul>
                <a href="ebot-explorer.html" class="btn btn-neon w-100">Ver detalhes do Explorer</a>
              </div>
            </div>
          </div>
        </div>`;

// Replace the entire ecosystem-layout div
const regex = /<div class="ecosystem-layout">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
html = html.replace(regex, layoutHtml + '\n      </div>\n    </section>');

fs.writeFileSync('index.html', html, 'utf8');

// Update CSS for badge-orange
let css = fs.readFileSync('css/ecosystem.css', 'utf8');
css = css.replace('.badge-devs { background: #1a73e8; }', '');
css = css.replace('.badge-panel { background: #88a72f; }', '');
css = css.replace('.badge-clinical { background: #e81a5f; }', '');
if (!css.includes('.badge-orange')) {
  css += '\n/* Specific Badge Colors */\n.badge-orange { background: #E67E22; color: #fff; border: 1px solid rgba(255, 255, 255, 0.2); } /* Orange that matches the e-bot green well */\n';
}

fs.writeFileSync('css/ecosystem.css', css, 'utf8');
console.log('Fixed cards order and color');
