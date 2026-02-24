const fs = require('fs');

// --- 1. UPDATE GLOBAL REFRENCES TO "EXPLORER" ---
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  
  // Footer updates (global)
  html = html.replace(/>Ê-Turismo<\/a>/g, '>Ê-Bot Explorer</a>');
  html = html.replace(/href="produtos\.html"[^>]*>Ê-Bot API/g, 'href="ebot-api.html" style="transition: color 0.2s;">Ê-Bot API');
  html = html.replace(/href="produtos\.html"[^>]*>Ê-Bot Painel/g, 'href="ebot-painel.html" style="transition: color 0.2s;">Ê-Bot Painel');
  html = html.replace(/href="produtos\.html"[^>]*>Ê-Bot Explorer/g, 'href="ebot-explorer.html" style="transition: color 0.2s;">Ê-Bot Explorer');
  
  if (file === 'index.html') {
    // Section Products
    html = html.replace(/<h3 class="h3" style="margin-bottom: 0\.5rem;">Ê-Turismo<\/h3>/g, '<h3 class="h3" style="margin-bottom: 0.5rem;">Ê-Bot Explorer</h3>');
    html = html.replace(/<a href="contato\.html" class="btn btn-outline" style="width: 100%;">Solicitar Orçamento<\/a>/g, '<a href="ebot-painel.html" class="btn btn-outline" style="width: 100%;">Ver detalhes do Painel</a>');
    // For specific matches because of multiple same buttons:
    html = html.replace(/<a href="ebot-painel\.html" class="btn btn-outline" style="width: 100%;">Ver detalhes do Painel<\/a>\s*<\/div>\s*<\/div>/g, '<a href="ebot-explorer.html" class="btn btn-outline" style="width: 100%;">Ver detalhes do Explorer</a>\n          </div>\n        </div>');
    html = html.replace(/<a href="contato\.html" class="btn btn-primary" style="width: 100%; background: var\(--secondary\);">Solicitar Demonstração<\/a>/g, '<a href="e-clinical.html" class="btn btn-primary" style="width: 100%; background: var(--secondary); border-color: var(--secondary);">Ver detalhes do Clinical</a>');
  }

  if (file === 'produtos.html') {
    // API
    html = html.replace(/<span class="badge">Mensageria e Disparos<\/span>\s*<h2 class="h2">Ê-Bot API<\/h2>[\s\S]*?<\/ul>/, (match) => {
      return match + `\n            <a href="ebot-api.html" class="btn btn-outline" style="margin-top: 2rem;">Ver detalhes da API</a>`;
    });
    // PAINEL
    html = html.replace(/<span class="badge" style="background: rgba\(43, 159, 232, 0\.1\); color: #2B9FE8;">Solução Principal<\/span>\s*<h2 class="h2">Ê-Bot Painel<\/h2>[\s\S]*?<\/ul>/, (match) => {
      return match + `\n            <a href="ebot-painel.html" class="btn btn-outline" style="margin-top: 2rem; border-color: #2B9FE8; color: #2B9FE8;">Ver detalhes do Painel</a>`;
    });
    // EXPLORER
    html = html.replace(/Ê-Turismo/g, 'Ê-Bot Explorer');
    html = html.replace(/Ver detalhes do Ê-Clinical<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<!-- FAQ -->/, `Ver detalhes do Ê-Clinical</a>
          </div>
        </div>
      </div>
    </section>

    <!-- PRODUTO 4: EXPLORER -->
    <section class="section section-light">
      <div class="container">
        <div class="grid grid-2 items-center reveal reveal-right">
          <div style="padding: 2rem; order: 2;">
            <span class="badge" style="background: rgba(243, 156, 18, 0.1); color: #f39c12;">Turismo e Cidades</span>
            <h2 class="h2">Ê-Bot Explorer</h2>
            <p class="body-large" style="margin-bottom: 1.5rem;">Atendimento Inteligente ao Turista via WhatsApp (QR Code) e Totem Conversacional para modernizar a cidade.</p>
            <ul class="checklist text-small">
              <li>IA especialista em turismo local</li>
              <li>Totem interativo por diálogo/voz na rodoviária e praças</li>
              <li>Campanhas segmentadas de divulgação</li>
              <li>Reduz demandas presenciais e mapeia interesse</li>
            </ul>
            <a href="ebot-explorer.html" class="btn btn-outline" style="margin-top: 2rem; border-color: #f39c12; color: #f39c12;">Ver detalhes do Explorer</a>
          </div>
          <div class="glass-card" style="order: 1; height: 400px; background: white; display: flex; align-items: center; justify-content: center; border-color: #f39c12;">
            <div style="font-size: 5rem;">🌍</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->`);
  }

  fs.writeFileSync(file, html);
});

// --- 2. GENERATE EBOT-EXPLORER.HTML ---
const ebotExplorerHTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ê-Bot Explorer | Inteligência para Turismo</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/typography.css">
  <link rel="stylesheet" href="css/glassmorphism.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body style="--primary: #f39c12; --primary-hover: #e67e22; --primary-light: rgba(243, 156, 18, 0.1);">
  <header class="glass-header" style="position: fixed; top: 0; width: 100%; z-index: 1000;">
    <div class="container header-inner">
      <div class="logo">
        <a href="index.html" style="display: flex; align-items: center; gap: 0.75rem; font-weight: 900; font-size: 1.5rem; color: var(--primary);">
          <img src="assets/images/ebot_icon.avif" alt="Ê-Sistemas Logo" style="height: 36px; width: auto; object-fit: contain;"> Ê-Sistemas
        </a>
      </div>
      <nav class="nav-menu flex">
        <ul class="flex gap-lg">
          <li><a href="index.html">Home</a></li>
          <li><a href="produtos.html" class="text-primary" style="font-weight: 600;">Produtos</a></li>
          <li><a href="sobre.html">Nossa História</a></li>
          <li><a href="privacidade.html">Privacidade</a></li>
          <li><a href="contato.html">Contato</a></li>
        </ul>
      </nav>
      <div class="desktop-cta"><button class="trigger-wa-modal btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem;"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.28 14.3c-.22.61-1.28 1.15-1.78 1.22-.43.06-1.02.13-3.23-.79-2.66-1.11-4.38-3.83-4.52-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.68-1.95.92-2.22.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.79 1.9.06.13.1.28.01.47-.08.19-.13.31-.26.46-.13.15-.28.33-.39.46-.13.14-.27.29-.12.56.15.26.68 1.13 1.46 1.83.99.9 1.84 1.18 2.1 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.64-.16 1.25z"/></svg> Solicitar Demonstração</button></div>
      <div class="hamburger"><span></span><span></span><span></span></div>
    </div>
  </header>
  <main>
    <section class="section section-light bg-grid-pattern" style="padding-top: 150px;">
      <div class="container grid grid-2 items-center hero-split">
        <div class="reveal reveal-left">
          <span class="badge" style="background: var(--primary-light); color: var(--primary);">🌍 Turismo e Cidades</span>
          <h1 class="h1">O Guia Turístico Digital da sua Cidade</h1>
          <p class="body-large" style="margin: 2rem 0;">O Ê-Bot Explorer transforma a experiência do visitante integrando WhatsApp via QR Code e Totens Conversacionais interativos, conectando o turista à cultura, roteiros e negócios locais.</p>
          <button class="trigger-wa-modal btn btn-primary">Falar com Consultor</button>
        </div>
        <div class="reveal reveal-right" style="display: flex; justify-content: center; gap: 1rem;">
          <div class="glass-card animate-float" style="width: 220px; height: 450px; background: #222; border-radius: 12px; border: 4px solid #333; position: relative; overflow: hidden; display: flex; flex-direction: column;
