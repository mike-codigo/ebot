const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// --- 1. DASHBOARD REPLACEMENT ---
const oldDashRegex = /<div class="glass-card float-hover"[^>]*>\s*<div style="width: 80%; height: 75%; background: white;[\s\S]*?<div class="dash-skeleton"[^>]*><\/div>\s*<\/div>\s*<\/div>/m;

const newDashHTML = `<div class="glass-card float-hover dash-wrapper">
  <div class="dash-ui">
    <div class="dash-sidebar">
      <div class="dash-logo"></div>
      <div class="dash-menu-item active"></div>
      <div class="dash-menu-item"></div>
      <div class="dash-menu-item"></div>
    </div>
    <div class="dash-main">
      <div class="dash-header">
        <div class="dash-title"></div>
        <div class="dash-user"></div>
      </div>
      <div class="dash-cards">
        <div class="dash-card">
          <div class="dash-card-icon"></div>
          <div class="dash-card-value"></div>
        </div>
        <div class="dash-card">
          <div class="dash-card-icon"></div>
          <div class="dash-card-value"></div>
        </div>
        <div class="dash-card">
          <div class="dash-card-icon"></div>
          <div class="dash-card-value"></div>
        </div>
      </div>
      <div class="dash-chart-area">
        <div class="dash-chart-bars">
          <div class="dash-bar b1"></div>
          <div class="dash-bar b2"></div>
          <div class="dash-bar b3"></div>
          <div class="dash-bar b4"></div>
          <div class="dash-bar b5"></div>
        </div>
        <svg class="dash-line-chart" viewBox="0 0 100 40" preserveAspectRatio="none">
          <path d="M0 30 Q 20 10, 40 25 T 80 15 T 100 5" fill="none" stroke="#87a630" stroke-width="2" class="dash-path"></path>
          <path d="M0 30 Q 20 10, 40 25 T 80 15 T 100 5 L 100 40 L 0 40 Z" fill="rgba(135, 166, 48, 0.2)" class="dash-path-fill"></path>
        </svg>
      </div>
    </div>
    <!-- Cursor do Mac -->
    <svg class="mac-cursor" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 2.5L19.5 10.5L12.5 12.5L16.5 20.5L13.5 22.5L9.5 14.5L3.5 18.5V2.5Z" fill="#3d4945" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"/>
    </svg>
  </div>
</div>`;

html = html.replace(oldDashRegex, newDashHTML);

// --- 2. CHAT REPLACEMENT ---
const oldChatRegex = /<div class="glass-card float-hover"[^>]*>\s*<div style="width: 65%; height: 85%; background: white;[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/m;

const newChatHTML = `<div class="glass-card float-hover chat-wrapper">
  <!-- Integração WhatsApp e Ebot (Background) -->
  <div class="integration-bg">
    <div class="wpp-icon float-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#87a630"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.28 14.3c-.22.61-1.28 1.15-1.78 1.22-.43.06-1.02.13-3.23-.79-2.66-1.11-4.38-3.83-4.52-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.68-1.95.92-2.22.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.79 1.9.06.13.1.28.01.47-.08.19-.13.31-.26.46-.13.15-.28.33-.39.46-.13.14-.27.29-.12.56.15.26.68 1.13 1.46 1.83.99.9 1.84 1.18 2.1 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.64-.16 1.25z"/></svg>
    </div>
    <div class="ebot-icon float-icon">
      <img src="assets/images/ebot_icon.avif" alt="ebot" style="width: 24px; height: 24px; object-fit: contain;">
    </div>
    
    <svg class="connection-line" viewBox="0 0 200 100" preserveAspectRatio="none">
      <path id="conn-path" d="M 30,20 C 80,10 120,90 170,80" fill="none" stroke="rgba(135, 166, 48, 0.3)" stroke-width="2" stroke-dasharray="5,5" />
      <!-- Partículas de dados -->
      <circle class="data-particle" r="3" fill="#87a630">
        <animateMotion dur="2.5s" repeatCount="indefinite">
          <mpath href="#conn-path"/>
        </animateMotion>
      </circle>
      <circle class="data-particle" r="3" fill="#87a630">
        <animateMotion dur="2.5s" begin="1.2s" repeatCount="indefinite">
          <mpath href="#conn-path"/>
        </animateMotion>
      </circle>
    </svg>
  </div>

  <div class="chat-ui">
    <div class="chat-header">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span class="status-dot"></span> Atendimento AI
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
    </div>
    <div class="chat-body">
      <div class="msg-bubble user m1">Quero um orçamento de automação.</div>
      <div class="msg-bubble ai m2">Ótimo! Para passarmos os valores com precisão, qual é o seu volume atual de atendimentos por mês?</div>
      
      <!-- Mensagem de Áudio -->
      <div class="msg-bubble user m3 audio-msg">
        <button class="play-btn">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <div class="audio-wave">
          <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
          <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
        </div>
        <span class="audio-time">0:04</span>
      </div>
      
      <div class="msg-bubble ai m4 typing">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
      </div>
      <div class="msg-bubble ai m5">Perfeito! Cerca de 5.000 chats se encaixa no nosso plano Pro. Vou te enviar os detalhes.</div>
    </div>
  </div>
</div>`;

html = html.replace(oldChatRegex, newChatHTML);

// ADD NEW CSS AT THE END OF <style> OR BEFORE </head>
const customCSS = `
<style id="custom-dash-chat-animations">
/* --- CONFIGURAÇÕES DASHBOARD --- */
.dash-wrapper {
  height: 400px;
  background: linear-gradient(135deg, #f0f4f8, #e2e8f0);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border-color: rgba(135, 166, 48, 0.2);
  border-radius: 24px;
}
.dash-ui {
  width: 85%;
  height: 80%;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  display: flex;
  overflow: hidden;
  position: relative;
}
.dash-sidebar {
  width: 25%;
  background: #3d4945; /* Dark color */
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.dash-logo {
  height: 20px;
  width: 60%;
  background: rgba(255,255,255,0.2);
  border-radius: 4px;
  margin-bottom: 1rem;
}
.dash-menu-item {
  height: 12px;
  width: 80%;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
}
.dash-menu-item.active {
  background: #87a630; /* Green color */
  width: 90%;
}
.dash-main {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background: #f8fafc;
}
.dash-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dash-title {
  height: 16px;
  width: 40%;
  background: #e2e8f0;
  border-radius: 4px;
}
.dash-user {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #87a630;
}
.dash-cards {
  display: flex;
  gap: 1rem;
}
.dash-card {
  flex: 1;
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  border: 1px solid rgba(135,166,48,0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  transform: translateY(10px);
  opacity: 0;
  animation: cardIn 4s infinite;
}
.dash-card:nth-child(2) { animation-delay: 0.2s; }
.dash-card:nth-child(3) { animation-delay: 0.4s; }

.dash-card-icon {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: rgba(135,166,48,0.2);
}
.dash-card-value {
  width: 60%;
  height: 12px;
  background: #3d4945;
  border-radius: 4px;
}
.dash-chart-area {
  flex: 1;
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  position: relative;
  border: 1px solid rgba(135,166,48,0.1);
  overflow: hidden;
}
.dash-chart-bars {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  height: 60%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 10%;
  gap: 10px;
}
.dash-bar {
  width: 15%;
  background: #3d4945;
  border-radius: 4px 4px 0 0;
  transform-origin: bottom;
  animation: barGrow 4s infinite;
}
.dash-bar.b1 { height: 40%; animation-delay: 0.1s; }
.dash-bar.b2 { height: 70%; animation-delay: 0.2s; }
.dash-bar.b3 { height: 50%; background: #87a630; animation-delay: 0.3s; }
.dash-bar.b4 { height: 90%; animation-delay: 0.4s; }
.dash-bar.b5 { height: 60%; animation-delay: 0.5s; }

.dash-line-chart {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  width: calc(100% - 2rem);
  height: 80%;
}
.dash-path {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawLine 4s infinite;
}
.dash-path-fill {
  opacity: 0;
  animation: fadeInFill 4s infinite;
}

/* Mac Cursor */
.mac-cursor {
  position: absolute;
  z-index: 10;
  top: 80%;
  left: 80%;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  animation: cursorMove 4s infinite ease-in-out;
}

@keyframes cardIn {
  0% { transform: translateY(10px); opacity: 0; }
  10%, 90% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(10px); opacity: 0; }
}
@keyframes barGrow {
  0% { transform: scaleY(0); }
  15%, 85% { transform: scaleY(1); }
  100% { transform: scaleY(0); }
}
@keyframes drawLine {
  0% { stroke-dashoffset: 200; }
  25%, 85% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 200; }
}
@keyframes fadeInFill {
  0%, 25% { opacity: 0; }
  35%, 85% { opacity: 1; }
  100% { opacity: 0; }
}
@keyframes cursorMove {
  0% { top: 80%; left: 80%; transform: scale(1); }
  20% { top: 35%; left: 45%; transform: scale(1); }
  25% { top: 35%; left: 45%; transform: scale(0.8); }
  30% { top: 35%; left: 45%; transform: scale(1); }
  50% { top: 70%; left: 60%; transform: scale(1); }
  55% { top: 70%; left: 60%; transform: scale(0.8); }
  60% { top: 70%; left: 60%; transform: scale(1); }
  100% { top: 80%; left: 80%; transform: scale(1); }
}


/* --- CONFIGURAÇÕES CHAT --- */
.chat-wrapper {
  height: 400px;
  background: linear-gradient(135deg, #f0f4f8, #e2e8f0);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-color: rgba(135, 166, 48, 0.2);
  border-radius: 24px;
}

/* Integração Background */
.integration-bg {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  z-index: 1;
}
.float-icon {
  position: absolute;
  width: 40px; height: 40px;
  background: white;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  animation: floatIcon 3s infinite ease-in-out alternate;
}
.wpp-icon { top: 15%; left: 15%; }
.ebot-icon { bottom: 15%; right: 15%; animation-delay: -1.5s; }
@keyframes floatIcon {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-15px); }
}

.connection-line {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: -1;
}
.data-particle {
  filter: drop-shadow(0 0 5px #87a630) drop-shadow(0 0 10px #87a630);
}

/* Chat UI */
.chat-ui {
  width: 65%;
  height: 85%;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 24px 48px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 2;
}
.chat-header {
  background: #3d4945;
  color: white;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.status-dot {
  display: inline-block;
  width: 8px; height: 8px; border-radius: 50%;
  background: #87a630; box-shadow: 0 0 8px #87a630;
  animation: pulseDot 2s infinite;
}
@keyframes pulseDot {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.chat-body {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: #fafafa;
  overflow: hidden;
}

.msg-bubble {
  padding: 0.75rem;
  border-radius: 16px;
  font-size: 0.8rem;
  max-width: 85%;
  opacity: 0;
  position: absolute; /* Usado para fazer a animação sequencial sem esticar o container logo de cara */
  display: none;
}
.msg-bubble.user {
  background: rgba(135,166,48,0.15); /* #87a630 tinted */
  color: #3d4945;
  border-bottom-right-radius: 4px;
  align-self: flex-end;
  border: 1px solid rgba(135,166,48,0.3);
}
.msg-bubble.ai {
  background: white;
  border-bottom-left-radius: 4px;
  align-self: flex-start;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  color: #3d4945;
}

/* Timeline Animation - Full Sequence is 12s */
.m1 { 
  display: block; position: relative; 
  animation: appearStatic 12s infinite; 
}
.m2 { 
  display: block; position: relative; 
  animation: appearStatic2 12s infinite; 
}
.m3 { 
  display: flex; position: relative; 
  animation: appearStatic3 12s infinite; 
}
.m4 { 
  display: block; position: relative; 
  animation: appearStatic4 12s infinite; 
}
.m5 { 
  display: block; position: relative; 
  animation: appearStatic5 12s infinite; 
}

@keyframes appearStatic {
  0%, 100% { opacity: 0; transform: translateY(10px) scale(0.95); }
  2%, 98% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes appearStatic2 {
  0%, 15%, 100% { opacity: 0; transform: translateY(10px) scale(0.95); }
  18%, 98% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes appearStatic3 {
  0%, 35%, 100% { opacity: 0; transform: translateY(10px) scale(0.95); }
  38%, 98% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes appearStatic4 {
  0%, 50%, 75%, 100% { opacity: 0; transform: translateY(10px) scale(0.95); display: none; }
  52%, 73% { opacity: 1; transform: translateY(0) scale(1); display: block; }
}
@keyframes appearStatic5 {
  0%, 75%, 100% { opacity: 0; transform: translateY(10px) scale(0.95); }
  78%, 98% { opacity: 1; transform: translateY(0) scale(1); }
}

/* Audio Message */
.audio-msg {
  display: flex;
  align-items: center;
  gap: 10px;
}
.play-btn {
  background: #87a630;
  border: none;
  width: 24px; height: 24px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
}
.audio-wave {
  display: flex;
  align-items: center;
  gap: 3px;
  height: 20px;
}
.audio-wave .bar {
  width: 3px;
  background: #3d4945;
  border-radius: 3px;
  height: 4px;
  animation: waveAnim 1s infinite alternate;
}
.audio-wave .bar:nth-child(1) { height: 8px; animation-delay: 0.1s; }
.audio-wave .bar:nth-child(2) { height: 16px; animation-delay: 0.2s; }
.audio-wave .bar:nth-child(3) { height: 10px; animation-delay: 0.3s; }
.audio-wave .bar:nth-child(4) { height: 18px; animation-delay: 0.4s; }
.audio-wave .bar:nth-child(5) { height: 6px; animation-delay: 0.5s; }
.audio-wave .bar:nth-child(6) { height: 14px; animation-delay: 0.6s; }
.audio-wave .bar:nth-child(7) { height: 10px; animation-delay: 0.7s; }
.audio-wave .bar:nth-child(8) { height: 8px; animation-delay: 0.8s; }

@keyframes waveAnim {
  0% { transform: scaleY(0.5); }
  100% { transform: scaleY(1); }
}

.audio-time {
  font-size: 0.7rem;
  color: #3d4945;
  font-weight: 500;
}

/* Typing Indicator */
.typing .dot {
  display: inline-block;
  width: 5px; height: 5px;
  background: #87a630;
  border-radius: 50%;
  margin: 0 2px;
  animation: bounceDot 1.4s infinite ease-in-out both;
}
.typing .dot:nth-child(1) { animation-delay: -0.32s; }
.typing .dot:nth-child(2) { animation-delay: -0.16s; }
@keyframes bounceDot {
  0%, 80%, 100% { transform: scale(0.5); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}
</style>
`;

if (!html.includes('<style id="custom-dash-chat-animations">')) {
  html = html.replace('</head>', customCSS + '\n</head>');
} else {
  html = html.replace(/<style id="custom-dash-chat-animations">[\s\S]*?<\/style>/, customCSS);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Update complete.');
