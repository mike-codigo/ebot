const fs = require('fs');

try {
  let html = fs.readFileSync('index.html', 'utf8');

  // 1. ADD CSS FOR EVERYTHING
  const newCSS = `
  <style>
  /* 1. Checklist Negative */
  .checklist-negative li::before {
    content: "✕" !important;
    color: #e53935 !important;
    font-weight: bold;
    margin-right: 0.5rem;
    display: inline-block;
    width: 1.2rem;
  }

  /* 2. Dotted neon lines for orbit container */
  .neon-dotted-line {
    fill: none;
    stroke: #87a630;
    stroke-width: 2.5;
    stroke-dasharray: 6 8;
    filter: drop-shadow(0 0 6px rgba(135, 166, 48, 0.8));
    animation: march-ants 1.5s linear infinite;
  }
  @keyframes march-ants {
    to { stroke-dashoffset: -28; }
  }

  /* 3. Testimonials Popover with 2s delay */
  .solution-popover {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: white;
    border: 1px solid var(--border-subtle);
    border-radius: 12px;
    padding: 1rem;
    width: 220px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    transition-delay: 2s, 2s, 0s;
    z-index: 100;
    text-align: center;
  }
  .solution-popover::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -8px;
    border-width: 8px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
  .testimonial-badge-container:hover .solution-popover,
  .solution-popover:hover {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
    transition-delay: 0s, 0s, 0s;
  }

  /* Fix orbit container for the SVG */
  .orbit-container {
    position: relative;
  }
  </style>
  `;
  if (!html.includes('/* 1. Checklist Negative */')) {
    html = html.replace('</head>', newCSS + '\n</head>');
  }

  // 2. Antes da Ê-Bot
  html = html.replace(
    /<ul class="checklist" style="opacity: 0\.7;">\s*<li>Tempo de resposta: 15\+ minutos<\/li>/,
    `<ul class="checklist checklist-negative" style="opacity: 0.7;">
                <li>Tempo de resposta: 15+ minutos</li>`
  );

  // 3. Orbit Particles
  const oldParticlesRegex = /<!-- Data Particles shooting to integrations -->[\s\S]*?(?=<!-- Orbit Icons Placeholders -->)/;
  const newParticles = `<!-- Data Particles shooting to integrations -->
          <svg width="600" height="600" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); z-index:4; pointer-events:none;">
            <!-- Lines from ring (R=250) to bottom of the logo (center is 300,300, bottom of logo is ~300, 350) -->
            <!-- Top -->
            <line x1="300" y1="50" x2="300" y2="350" class="neon-dotted-line" />
            <!-- Top Right -->
            <line x1="537" y1="123" x2="300" y2="350" class="neon-dotted-line" style="animation-delay: -0.3s" />
            <!-- Bottom Right -->
            <line x1="446" y1="402" x2="300" y2="350" class="neon-dotted-line" style="animation-delay: -0.6s" />
            <!-- Bottom Left -->
            <line x1="154" y1="402" x2="300" y2="350" class="neon-dotted-line" style="animation-delay: -0.9s" />
            <!-- Top Left -->
            <line x1="63" y1="123" x2="300" y2="350" class="neon-dotted-line" style="animation-delay: -1.2s" />
          </svg>
          `;
  html = html.replace(oldParticlesRegex, newParticles);

  // 4. Testimonials Section
  const testimonialsSection = `
    <!-- TESTIMONIALS -->
    <section class="section section-gray">
      <div class="container">
        <div class="text-center reveal" style="margin-bottom: var(--space-xl);">
          <h2 class="h2" style="margin-bottom: 1rem;">O Que Dizem <span class="highlight-text">Nossos Clientes</span></h2>
          <p class="body-large">Histórias reais de transformação com a Ê-Bot</p>
        </div>
        
        <div class="grid grid-4 text-left reveal">
          <!-- Testimonial 1 -->
          <div class="glass-card" style="padding: 2rem; position: relative; display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
              <div>
                <div style="font-weight: 700;">Marcos T.</div>
                <div class="text-small" style="opacity: 0.7;">Gestor Hospitalar</div>
              </div>
            </div>
            <p class="body-large" style="font-style: italic; margin-bottom: 2rem; font-size: 1rem; flex-grow: 1;">"A automatização dos agendamentos reduziu nossas faltas pela metade. A satisfação dos pacientes disparou."</p>
            
            <div class="testimonial-badge-container" style="position: relative; display: inline-block;">
              <div class="card-badge badge-green" style="position: static; cursor: pointer; display: inline-block; margin: 0;">Ê-Bot Clinical</div>
              <div class="solution-popover">
                <img src="assets/images/ebot_icon.avif" alt="Ê-Bot" style="width: 32px; height: 32px; margin-bottom: 0.5rem; display: inline-block; object-fit: contain;">
                <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 0.8rem; color: var(--text-body);">Quer conhecer essa mesma solução?</div>
                <a href="ebot-clinical.html" class="btn btn-neon text-small" style="padding: 0.5rem 1rem; width: 100%;">Ver Solução</a>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="glass-card" style="padding: 2rem; position: relative; display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
              <div>
                <div style="font-weight: 700;">Júlia R.</div>
                <div class="text-small" style="opacity: 0.7;">CTO</div>
              </div>
            </div>
            <p class="body-large" style="font-style: italic; margin-bottom: 2rem; font-size: 1rem; flex-grow: 1;">"A documentação da API Aberta é fantástica. Integramos nosso ERP legado em poucos dias sem fricção."</p>
            
            <div class="testimonial-badge-container" style="position: relative; display: inline-block;">
              <div class="card-badge badge-purple" style="position: static; cursor: pointer; display: inline-block; margin: 0;">Ê-Bot API</div>
              <div class="solution-popover">
                <img src="assets/images/ebot_icon.avif" alt="Ê-Bot" style="width: 32px; height: 32px; margin-bottom: 0.5rem; display: inline-block; object-fit: contain;">
                <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 0.8rem; color: var(--text-body);">Quer conhecer essa mesma solução?</div>
                <a href="ebot-api.html" class="btn btn-neon text-small" style="padding: 0.5rem 1rem; width: 100%;">Ver Solução</a>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="glass-card" style="padding: 2rem; position: relative; display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
              <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Client" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
              <div>
                <div style="font-weight: 700;">Roberto M.</div>
                <div class="text-small" style="opacity: 0.7;">Coordenador de CX</div>
              </div>
            </div>
            <p class="body-large" style="font-style: italic; margin-bottom: 2rem; font-size: 1rem; flex-grow: 1;">"Temos visão em tempo real da equipe. Misturamos atendimento humano e IA de forma incrivelmente fluida."</p>
            
            <div class="testimonial-badge-container" style="position: relative; display: inline-block;">
              <div class="card-badge badge-orange" style="position: static; cursor: pointer; display: inline-block; margin: 0;">Ê-Bot Panel</div>
              <div class="solution-popover">
                <img src="assets/images/ebot_icon.avif" alt="Ê-Bot" style="width: 32px; height: 32px; margin-bottom: 0.5rem; display: inline-block; object-fit: contain;">
                <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 0.8rem; color: var(--text-body);">Quer conhecer essa mesma solução?</div>
                <a href="ebot-panel.html" class="btn btn-neon text-small" style="padding: 0.5rem 1rem; width: 100%;">Ver Solução</a>
              </div>
            </div>
          </div>

          <!-- Testimonial 4 -->
          <div class="glass-card" style="padding: 2rem; position: relative; display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
              <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="Client" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
              <div>
                <div style="font-weight: 700;">Carlos E.</div>
                <div class="text-small" style="opacity: 0.7;">Diretor de Inovação</div>
              </div>
            </div>
            <p class="body-large" style="font-style: italic; margin-bottom: 2rem; font-size: 1rem; flex-grow: 1;">"Precisávamos de fluxos totalmente únicos. A Solução Personalizada revolucionou nossa operação."</p>
            
            <div class="testimonial-badge-container" style="position: relative; display: inline-block;">
              <div class="card-badge" style="position: static; cursor: pointer; display: inline-block; margin: 0; background: rgba(135, 166, 48, 0.1); color: var(--primary); border: 1px solid rgba(135, 166, 48, 0.2);">Personalizada</div>
              <div class="solution-popover">
                <img src="assets/images/ebot_icon.avif" alt="Ê-Bot" style="width: 32px; height: 32px; margin-bottom: 0.5rem; display: inline-block; object-fit: contain;">
                <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 0.8rem; color: var(--text-body);">Quer conhecer essa mesma solução?</div>
                <a href="produtos.html" class="btn btn-neon text-small" style="padding: 0.5rem 1rem; width: 100%;">Ver Produtos</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;

  if (!html.includes('O Que Dizem <span class="highlight-text">Nossos Clientes</span>')) {
    html = html.replace('<!-- AWARDS -->', testimonialsSection + '\n    <!-- AWARDS -->');
  }

  // 5. Awards Images
  html = html.replace(
    /<div class="glass-card" style="padding: 1\.5rem;">\s*<div style="font-weight: 700; margin-bottom: 0\.5rem;">Plug and Play<\/div>/,
    `<div class="glass-card" style="padding: 1.5rem;">
            <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=400&fit=crop" alt="Silicon Valley" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <div style="font-weight: 700; margin-bottom: 0.5rem;">Plug and Play</div>`
  );

  html = html.replace(
    /<div class="glass-card" style="padding: 1\.5rem;">\s*<div style="font-weight: 700; margin-bottom: 0\.5rem;">Stanford University<\/div>/,
    `<div class="glass-card" style="padding: 1.5rem;">
            <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=400&fit=crop" alt="Stanford University" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <div style="font-weight: 700; margin-bottom: 0.5rem;">Stanford University</div>`
  );

  html = html.replace(
    /<div class="glass-card" style="padding: 1\.5rem;">\s*<div style="font-weight: 700; margin-bottom: 0\.5rem;">Google & LinkedIn<\/div>/,
    `<div class="glass-card" style="padding: 1.5rem;">
            <img src="https://images.unsplash.com/photo-1541887089898-0111d5e31db5?w=400&h=400&fit=crop" alt="Mountain View" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <div style="font-weight: 700; margin-bottom: 0.5rem;">Google & LinkedIn</div>`
  );

  html = html.replace(
    /<div class="glass-card" style="padding: 1\.5rem;">\s*<div style="font-weight: 700; margin-bottom: 0\.5rem;">Campus Mobile<\/div>/,
    `<div class="glass-card" style="padding: 1.5rem;">
            <img src="https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=400&h=400&fit=crop" alt="São Paulo" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <div style="font-weight: 700; margin-bottom: 0.5rem;">Campus Mobile</div>`
  );

  fs.writeFileSync('index.html', html);
  console.log('Done modifying index.html');
} catch (err) {
  console.error(err);
}
