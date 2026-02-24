const fs = require('fs');

const clinicalHTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ê-Clinical | O Futuro do Atendimento em Saúde</title>
  
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/typography.css">
  <link rel="stylesheet" href="css/glassmorphism.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/charts.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body style="--primary: #2B9FE8; --primary-hover: #1a7ebc; --primary-light: rgba(43, 159, 232, 0.1);">

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
        <button class="trigger-wa-modal btn btn-primary" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.28 14.3c-.22.61-1.28 1.15-1.78 1.22-.43.06-1.02.13-3.23-.79-2.66-1.11-4.38-3.83-4.52-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.68-1.95.92-2.22.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.79 1.9.06.13.1.28.01.47-.08.19-.13.31-.26.46-.13.15-.28.33-.39.46-.13.14-.27.29-.12.56.15.26.68 1.13 1.46 1.83.99.9 1.84 1.18 2.1 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.64-.16 1.25z"/></svg> Agendar Demonstração</button>
      </div>
      <div class="hamburger"><span></span><span></span><span></span></div>
    </div>
  </header>

  <main>
    <!-- HERO CLINICAL -->
    <section class="section section-light bg-grid-pattern" style="padding-top: 150px; background: rgba(43, 159, 232, 0.03);">
      <div class="container grid grid-2 items-center hero-split">
        <div class="reveal reveal-left">
          <span class="badge" style="background: white;">🏥 Para Clínicas e Hospitais</span>
          <h1 class="h1">Seja bem-vindo ao futuro do atendimento em Saúde</h1>
          <p class="body-large" style="margin: 2rem 0;">A secretária virtual que trabalha 24 horas por dia, unificando médicos, financeiro e atendimento de pacientes em hospitais e clínicas públicas e privadas.</p>
          <button class="trigger-wa-modal btn btn-primary" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.28 14.3c-.22.61-1.28 1.15-1.78 1.22-.43.06-1.02.13-3.23-.79-2.66-1.11-4.38-3.83-4.52-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.68-1.95.92-2.22.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.79 1.9.06.13.1.28.01.47-.08.19-.13.31-.26.46-.13.15-.28.33-.39.46-.13.14-.27.29-.12.56.15.26.68 1.13 1.46 1.83.99.9 1.84 1.18 2.1 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.64-.16 1.25z"/></svg> Falar com Especialista de Saúde</button>
        </div>
        <div class="reveal reveal-right" style="text-align: right; position: relative;">
          <!-- Simple Hospital + App Mockup -->
          <div class="glass-card float-hover" style="width: 320px; height: 500px; display: inline-block; background: white; border-radius: 40px; border: 8px solid #f0f0f0; overflow: hidden; position: relative; z-index: 2; padding: 0;">
            <div style="background: #2B9FE8; color: white; padding: 1.25rem 1rem; text-align: center; font-weight: 700;">Agendamentos Ativos</div>
            <div style="padding: 1.5rem 1rem; text-align: left; display: flex; flex-direction: column; gap: 1rem; background: #fafafa; height: 100%;">
              <div style="background: white; padding: 1rem; border-radius: 12px; font-size: 0.85rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-bottom-left-radius: 4px;">Olá! Lembrete da sua consulta amanhã às 14h com o Dr. Eduardo Felicio. Confirma?</div>
              <div style="background: rgba(43,159,232,0.1); padding: 1rem; border-radius: 12px; font-size: 0.85rem; text-align: right; margin-left: auto; max-width: 80%; border-bottom-right-radius: 4px; border: 1px solid rgba(43,159,232,0.2);">Sim, confirmo!</div>
              <div style="background: white; padding: 1rem; border-radius: 12px; font-size: 0.85rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-bottom-left-radius: 4px;">Perfeito! Sua consulta está garantida. Nos vemos lá.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- THE PROBLEM SECTION -->
    <section class="section section-gray">
      <div class="container reveal">
        <div class="text-center" style="margin-bottom: 4rem; max-width: 800px; margin-inline: auto;">
          <h2 class="h2" style="margin-bottom: 1rem;">Onde a saúde estava perdendo tempo?</h2>
          <p class="body-large" style="color: var(--text-body);">Recepções lotadas, telefones tocando o dia inteiro e pacientes que agendam mas não comparecem. O Ê-Clinical ataca as maiores dores administrativas dos hospitais.</p>
        </div>
        
        <div class="grid grid-2" style="gap: 3rem;">
          <div class="glass-card float-hover" style="border-left: 4px solid #e74c3c;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
              <h3 class="h3" style="font-size: 1.25rem;">Alto Absenteísmo (No-Show)</h3>
              <div style="font-size: 2rem;">📉</div>
            </div>
            <p class="text-small">Sem um lembrete no WhatsApp, o paciente esquece da consulta. O médico perde o horário e a clínica perde receita. É uma bola de neve financeira.</p>
          </div>
          
          <div class="glass-card float-hover" style="border-left: 4px solid #3498db;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
              <h3 class="h3" style="font-size: 1.25rem;">Recepção Engarrafada</h3>
              <div style="font-size: 2rem;">📞</div>
            </div>
            <p class="text-small">Tirar dúvidas sobre preparo de exames por telefone exige tempo humano. A inteligência artificial responde essas dúvidas instantaneamente.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- METRICS CLINICAL -->
    <section class="section section-light chart-container">
      <div class="container reveal text-center">
        <h2 class="h2" style="margin-bottom: 4rem;">Benefícios Comprovados na Saúde</h2>
        <div class="grid grid-4">
          <div class="glass-card stagger-1" style="border-top: 4px solid var(--primary);">
            <h3 class="h1 text-prim
