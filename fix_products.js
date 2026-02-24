const fs = require('fs');

// --- 1. UPDATE INDEX.HTML ---
let indexHTML = fs.readFileSync('index.html', 'utf8');

// Change Ê-Turismo to Ê-Bot Explorer (Em desenvolvimento)
indexHTML = indexHTML.replace(
  /<h3 class="h3" style="margin-bottom: 0\.5rem;">Ê-Bot Explorer<\/h3>/g, 
  '<h3 class="h3" style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">Ê-Bot Explorer <span style="font-size: 0.6rem; font-weight: 600; background: rgba(243,156,18,0.1); color: #f39c12; padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(243,156,18,0.3);">Em desenvolvimento</span></h3>'
);

fs.writeFileSync('index.html', indexHTML);

// --- 2. UPDATE PRODUTOS.HTML ---
let prodHTML = fs.readFileSync('produtos.html', 'utf8');

// Ensure API button is pointing to API
prodHTML = prodHTML.replace(
  /Ver detalhes da API<\/a>/,
  'Ver detalhes da API</a>'
);

// Add the 4th Section for Ê-Bot Explorer right before the FAQ
const explorerSection = `
    <!-- PRODUTO 4: EXPLORER -->
    <section class="section section-light bg-grid-pattern">
      <div class="container">
        <div class="grid grid-2 items-center reveal reveal-right">
          <div style="padding: 2rem; order: 2;">
            <span class="badge" style="background: rgba(243, 156, 18, 0.1); color: #f39c12;">Turismo e Cidades</span>
            <h2 class="h2" style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">Ê-Bot Explorer <span style="font-size: 0.75rem; font-weight: 600; background: rgba(243,156,18,0.1); color: #f39c12; padding: 4px 8px; border-radius: 6px; border: 1px solid rgba(243,156,18,0.3); white-space: nowrap;">Em desenvolvimento</span></h2>
            <p class="body-large" style="margin-bottom: 1.5rem;">Atendimento Inteligente ao Turista via WhatsApp (QR Code) e Totem Conversacional para modernizar a cidade.</p>
            <ul class="checklist text-small">
              <li>IA especialista em turismo local</li>
              <li>Totem interativo por diálogo/voz na rodoviária e praças</li>
              <li>Campanhas segmentadas de divulgação</li>
              <li>Reduz demandas presenciais e mapeia interesse</li>
            </ul>
            <a href="ebot-explorer.html" class="btn btn-outline" style="margin-top: 2rem; border-color: #f39c12; color: #f39c12;">Ver detalhes do Explorer</a>
          </div>
          <div class="glass-card float-hover" style="order: 1; height: 400px; background: white; display: flex; align-items: center; justify-content: center; border-color: rgba(243, 156, 18, 0.3);">
            <div style="font-size: 5rem;">🌍</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->`;

if (!prodHTML.includes('PRODUTO 4: EXPLORER')) {
  prodHTML = prodHTML.replace(/<!-- FAQ -->/, explorerSection);
}

fs.writeFileSync('produtos.html', prodHTML);

// --- 3. UPDATE EBOT-EXPLORER.HTML HERO ---
let expHTML = fs.readFileSync('ebot-explorer.html', 'utf8');
expHTML = expHTML.replace(
  /<h1 class="h1">O Guia Turístico Digital da sua Cidade<\/h1>/,
  '<h1 class="h1">O Guia Turístico Digital da sua Cidade <span style="font-size: 1rem; font-weight: 600; background: rgba(243,156,18,0.1); color: #f39c12; padding: 6px 12px; border-radius: 8px; border: 1px solid rgba(243,156,18,0.3); vertical-align: middle; margin-left: 1rem;">Em desenvolvimento</span></h1>'
);
fs.writeFileSync('ebot-explorer.html', expHTML);

console.log("Produtos atualizados com selos de desenvolvimento!");
