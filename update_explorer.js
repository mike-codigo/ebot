const fs = require('fs');

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

  <!-- HEADER -->
  <header class="glass-header" style="position: fixed; top: 0; width: 100%; z-index: 1000;">
    <div class="container header-inner">
      <div class="logo">
        <a href="index.html" style="display: flex; align-items: center; gap: 0.75rem; font-weight: 900; font-size: 1.5rem; color: var(--primary);">
          <img src="assets/images/ebot_icon.avif" alt="Ê-Sistemas Logo" style="height: 36px; width: auto; object-fit: contain;">
          Ê-Sistemas
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
      <div class="desktop-cta">
        <button class="trigger-wa-modal btn btn-primary" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.28 14.3c-.22.61-1.28 1.15-1.78 1.22-.43.06-1.02.13-3.23-.79-2.66-1.11-4.38-3.83-4.52-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.68-1.95.92-2.22.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.79 1.9.06.13.1.28.01.47-.08.19-.13.31-.26.46-.13.15-.28.33-.39.46-.13.14-.27.29-.12.56.15.26.68 1.13 1.46 1.83.99.9 1.84 1.18 2.1 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.64-.16 1.25z"/></svg> Solicitar Demonstração</button>
      </div>
      <div class="hamburger"><span></span><span></span><span></span></div>
    </div>
  </header>

  <main>
    <!-- HERO -->
    <section class="section section-light bg-grid-pattern" style="padding-top: 150px;">
      <div class="container grid grid-2 items-center hero-split">
        <div class="reveal reveal-left">
          <span class="badge" style="background: var(--primary-light); color: var(--primary);">🌍 Turismo e Cidades</span>
          <h1 class="h1">O Guia Turístico Digital da sua Cidade <span style="font-size: 1rem; font-weight: 600; background: rgba(243,156,18,0.1); color: #f39c12; padding: 6px 12px; border-radius: 8px; border: 1px solid rgba(243,156,18,0.3); vertical-align: middle; margin-left: 1rem;">Em desenvolvimento</span></h1>
          <p class="body-large" style="margin: 2rem 0;">O Ê-Bot Explorer transforma a experiência do visitante integrando WhatsApp via QR Code e Totens Conversacionais interativos, conectando o turista à cultura, roteiros e negócios locais em tempo real.</p>
          <ul class="checklist text-small">
            <li>Redução de filas em centros de atendimento presenciais.</li>
            <li>Divulgação automática da agenda cultural.</li>
            <li>Incentivo direto à rede hoteleira e gastronômica (Iniciativa Privada).</li>
          </ul>
        </div>
        <div class="reveal reveal-right" style="display: flex; justify-content: center; gap: 1rem;">
          <!-- Totem Mockup -->
          <div class="glass-card float-hover" style="width: 260px; height: 500px; background: #1a1a1a; border-radius: 16px; border: 8px solid #333; position: relative; overflow: hidden; display: flex; flex-direction: column; padding: 0; box-shadow: 0 24px 64px rgba(0,0,0,0.4);">
            <div style="padding: 1.5rem; background: var(--primary); color: white; text-align: center; font-weight: 800; font-size: 1.25rem;">TOTEM IA DA CIDADE</div>
            <div style="flex: 1; padding: 2rem; background: url('https://www.transparenttextures.com/patterns/cubes.png') #f8f9fa; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 2rem; text-align: center;">
               <div class="animate-pulse" style="font-size: 4rem; background: white; width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(243, 156, 18, 0.2);">🎙️</div>
               <p style="font-weight: 700; font-size: 1.25rem; color: #2c3e50;">"Toque ou fale comigo para descobrir roteiros incríveis!"</p>
               <div style="font-size: 0.75rem; color: #7f8c8d; background: #ecf0f1; padding: 8px 16px; border-radius: 20px;">Português • English • Español</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- THE PROBLEM SECTION -->
    <section class="section section-gray">
      <div class="container reveal">
        <div class="text-center" style="margin-bottom: 4rem; max-width: 800px; margin-inline: auto;">
          <h2 class="h2" style="margin-bottom: 1rem;">O problema do turismo desconectado</h2>
          <p class="body-large" style="color: var(--text-body);">Muitas cidades perdem receita simplesmente porque o turista não sabe onde ir. Folhetos de papel estão ultrapassados e postos de informações físicas têm horários limitados.</p>
        </div>
        
        <div class="grid grid-3">
          <div class="glass-card float-hover" style="border-color: rgba(243, 156, 18, 0.2);">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">📍</div>
            <h3 class="h3" style="font-size: 1.25rem; margin-bottom: 0.5rem;">Falta de Informação</h3>
            <p class="text-small">O turista chega na rodoviária ou aeroporto e não encontra um roteiro de curto prazo adaptado para o perfil da família.</p>
          </div>
          <div class="glass-card float-hover" style="border-color: rgba(243, 156, 18, 0.2);">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏢</div>
            <h3 class="h3" style="font-size: 1.25rem; margin-bottom: 0.5rem;">Custo de Balcão</h3>
            <p class="text-small">Prefeituras gastam milhões mantendo centros de atendimento que só funcionam em horário comercial padrão.</p>
          </div>
          <div class="glass-card float-hover" style="border-color: rgba(243, 156, 18, 0.2);">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">📉</div>
            <h3 class="h3" style="font-size: 1.25rem; margin-bottom: 0.5rem;">Iniciativa Privada Oculta</h3>
            <p class="text-small">Restaurantes e eventos locais excepcionais ficam vazios porque o turista nunca fica sabendo da existência deles.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- BENTO GRID -->
    <section class="section section-light">
      <div class="container reveal">
        <h2 class="h2 text-center" style="margin-bottom: 1rem;">Jornada Completa do Turista</h2>
        <p class="body-large text-center" style="margin-bottom: 4rem;">Do acesso por QR Code nas praças até a reserva nos restaurantes.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem;">
          <div class="glass-card" style="padding: 2rem; border-color: rgba(243, 156, 18, 0.4);"><div style="font-size: 2.5rem; margin-bottom: 1rem;">📱</div><h4 style="font-weight: 7
