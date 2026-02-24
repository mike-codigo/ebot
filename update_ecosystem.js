const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// The new ecosystem block
const newEcosystem = `
      <div class="container">
        <div class="text-center reveal" style="margin-bottom: var(--space-xl);">
          <h2 class="h2" style="margin-bottom: 1rem;">Nosso <span class="highlight-text">Ecossistema</span></h2>
          <p class="body-large">Escolha a solução ideal para transformar seu negócio</p>
        </div>

        <div class="ecosystem-layout">
          <!-- Left Column -->
          <div class="ecosystem-col ecosystem-left">
            <!-- Produto 1 (API) -->
            <div class="glass-liquid-card ecosystem-card float-hover reveal stagger-1">
              <div class="flashlight-glow"></div>
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
              <!-- Custom Cursor Tooltip inside iPhone -->
              <div class="iphone-custom-cursor" id="iphone-custom-cursor">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" />
                </svg>
                <span>Ver vídeo sobre produtos</span>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="ecosystem-col ecosystem-right">
            <!-- Produto 3 (Clinical) -->
            <div class="glass-liquid-card ecosystem-card float-hover reveal stagger-4">
              <div class="flashlight-glow"></div>
              <div class="card-content">
                <div class="card-badge">MAIS POPULAR</div>
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
        </div>
      </div>
`;

// Extract old section
const startStr = '<div class="container">\n        <div class="text-center reveal" style="margin-bottom: var(--space-xl);">';
const endStr = '</div>\n    </section>\n\n    <!-- AWARDS -->';

// Actually, let's use regex or split to replace safely
const parts = html.split('<h2 class="h2" style="margin-bottom: 1rem;">Nosso <span class="highlight-text">Ecossistema</span></h2>');
if (parts.length === 2) {
  const prePart = parts[0].substring(0, parts[0].lastIndexOf('<div class="container">'));
  const postPart = parts[1].substring(parts[1].indexOf('</section>'));

  html = prePart + newEcosystem + '    ' + postPart;
  fs.writeFileSync('index.html', html);
  console.log('Replaced ecosystem section in index.html');
} else {
  console.log('Could not find ecosystem section');
}
