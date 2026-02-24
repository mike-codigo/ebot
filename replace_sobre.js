const fs = require('fs');

const content = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nossa História | Ê-Sistemas</title>
  
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/typography.css">
  <link rel="stylesheet" href="css/glassmorphism.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/responsive.css">
  
  <style>
    .story-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; padding: 180px 0 80px; }
    .story-hero-images { display: flex; gap: 1.5rem; position: relative; align-items: center; }
    .story-img-main { width: 60%; border-radius: 20px; box-shadow: 0 32px 64px rgba(0,0,0,0.1); object-fit: cover; aspect-ratio: 3/4; z-index: 1;}
    .story-img-secondary { width: 45%; border-radius: 20px; box-shadow: 0 16px 32px rgba(0,0,0,0.08); object-fit: cover; aspect-ratio: 4/5; margin-top: 4rem; margin-left: -15%; z-index: 2; }
    .editorial-quote { font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; color: var(--dark); text-align: center; margin: 6rem auto; max-width: 900px; }
    .editorial-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
    .editorial-list { display: flex; flex-direction: column; gap: 2rem; }
    .editorial-item { display: flex; gap: 1.5rem; align-items: flex-start; background: rgba(255,255,255,0.6); padding: 1.5rem; border-radius: 16px; border: 1px solid rgba(0,0,0,0.04); transition: all 0.3s; }
    .editorial-item:hover { background: white; transform: translateY(-5px); box-shadow: 0 12px 24px rgba(0,0,0,0.06); }
    .editorial-icon { width: 48px; height: 48px; min-width: 48px; background: var(--primary-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); }
    .circle-seal { position: absolute; width: 120px; height: 120px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-align: center; font-weight: 700; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; top: -30px; right: 10%; z-index: 5; animation: spin-slow 20s linear infinite; }
    @keyframes spin-slow { 100% { transform: rotate(360deg); } }
    @media (max-width: 1024px) { .story-hero, .editorial-grid { grid-template-columns: 1fr; gap: 3rem; } .story-hero { padding: 140px 0 60px; text-align: center; } .story-hero-images { justify-content: center; } }
  </style>
</head>
<body style="background: #F8F9FA;">

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
          <li><a href="produtos.html">Produtos</a></li>
          <li><a href="sobre.html" class="text-primary" style="font-weight: 600;">Nossa História</a></li>
          <li><a href="privacidade.html">Privacidade</a></li>
          <li><a href="contato.html">Contato</a></li>
        </ul>
      </nav>
      <div class="desktop-cta">
        <button class="trigger-wa-modal btn btn-primary" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.28 14.3c-.22.61-1.28 1.15-1.78 1.22-.43.06-1.02.13-3.23-.79-2.66-1.11-4.38-3.83-4.52-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.68-1.95.92-2.22.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.79 1.9.06.13.1.28.01.47-.08.19-.13.31-.26.46-.13.15-.28.33-.39.46-.13.14-.27.29-.12.56.15.26.68 1.13 1.46 1.83.99.9 1.84 1.18 2.1 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.64-.16 1.25z"/></svg> Falar com Especialista
        </button>
      </div>
      <div class="hamburger"><span></span><span></span><span></span></div>
    </div>
  </header>

  <main>
    <!-- EDITORIAL HERO -->
    <section class="container story-hero reveal">
      <div class="story-hero-text">
        <h1 class="h1" style="margin-bottom: 2rem;">Inovação que nasce da prática.<br>Evolui com propósito.</h1>
        <p class="body-large" style="margin-bottom: 2rem; color: var(--text-body);">A Ê-Systems nasceu de um diagnóstico claro: empresas, clínicas, hospitais e órgãos públicos estavam sobrecarregados com atendimentos manuais, filas intermináveis e processos repetitivos — enquanto a tecnologia deveria estar facilitando tudo isso.</p>
        <div style="display: flex; gap: 1.5rem; flex-direction: column; opacity: 0.8; font-weight: 500;">
          <div style="display: flex; gap: 1rem;"><span style="color: var(--primary);">01</span> Mapeamos processos reais.</div>
          <div style="display: flex; gap: 1rem;"><span style="color: var(--primary);">02</span> Conversamos com equipes da linha de frente.</div>
          <div style="display: flex; gap: 1rem;"><span style="color: var(--primary);">03</span> Criamos soluções inteligentes e escaláveis.</div>
        </div>
      </div>
      
      <div class="story-hero-images">
        <div class="circle-seal">Ê-BOT<br>EST. 2020</div>
        <img src="referencia_1.webp" alt="Atendimento" class="story-img-main float-hover">
        <img src="referencia_2.webp" alt="Tecnologia" class="story-img-secondary float-hover">
      </div>
    </section>

    <!-- BIG QUOTE -->
    <section class="container reveal">
      <h2 class="editorial-quote">
        "Diariamente, nos dedicamos a melhorar a comunicação de nossos clientes, visando um futuro mais eficiente e conectado."
      </h2>
      <div class="text-center" style="margin-top: -3rem; margin-bottom: 8rem; color: var(--text-body); font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;">
        — Silveira P., CEO Ê-Sistemas
      </div>
    </section>

    <!-- EDITORIAL LIST & VISION -->
    <section class="section" style="background: rgba(39, 174, 96, 0.03); border-top: 1px solid rgba(0,0,0,0.05);">
      <div class="container editorial-grid reveal">
        <div style="padding-right: 2rem;">
          <h2 class="h1" style="margin-bottom: 2rem;">Tecnologia que<br>respeita pessoas.</h2>
          <p class="body-large" style="margin-bottom: 2rem;">O Ê-Bot provou que a automação pode ser humana, eficiente e escalável. Expandimos de um simples chatbot para um ecossistema completo que move milhares de pacientes, clientes e cidadãos diariamente.</p>
          <img src="assets/images/ebot_logo.avif" alt="Ê-Bot Platform" style="border-radius: 20px; box-shadow: 0 24px 48px rgba(0,0,0,0.08); width: 100%; aspect-ratio: 16/9; object-fit: cover;">
        </div>
        
        <div class="editorial-list">
          <div class="editorial-item stagger-1">
            <div class="editorial-icon">💡</div>
            <div>
              <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Simplicidade Inteligente</h4>
              <p class="text-small">A tecnologia deve facilitar a operação, não complicá-la. Desenvolvemos interfaces intuitivas que conversam com sistemas complexos nos bastidores.</p>
            </div>
     
