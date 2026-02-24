const fs = require('fs');

const ctaHtml = `
    <!-- FINAL CTA -->
    <section class="section section-dark bg-grid-pattern-dark" style="background: linear-gradient(135deg, var(--dark) 0%, #1a252f 100%); overflow: hidden;">
      <div class="container reveal">
        <div class="final-cta-container" style="display: flex; align-items: center; justify-content: space-between; gap: 4rem; flex-wrap: wrap;">
          
          <div class="final-cta-content" style="flex: 1; min-width: 300px; text-align: left;">
            <h2 class="h1" style="color: white; margin-bottom: 1.5rem;">Pronto para Transformar Seu Atendimento?</h2>
            <p class="body-large" style="margin-bottom: 2.5rem; opacity: 0.9;">Junte-se a milhares de empresas, clínicas e prefeituras que já automatizaram e humanizaram seus processos com Ê-Sistemas.</p>
            <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 1rem;" class="cta-button-wrapper">
              <button class="trigger-wa-modal btn btn-primary float-hover" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 1.25rem; padding: 1rem 2.5rem;"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.28 14.3c-.22.61-1.28 1.15-1.78 1.22-.43.06-1.02.13-3.23-.79-2.66-1.11-4.38-3.83-4.52-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.68-1.95.92-2.22.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.79 1.9.06.13.1.28.01.47-.08.19-.13.31-.26.46-.13.15-.28.33-.39.46-.13.14-.27.29-.12.56.15.26.68 1.13 1.46 1.83.99.9 1.84 1.18 2.1 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.64-.16 1.25z"/></svg>  Falar com Especialista </button>
              <div class="text-small" style="opacity: 0.7;">Orçamento personalizado • Setup em 48h • Suporte dedicado</div>
            </div>
          </div>
          
          <div class="final-cta-robot" style="flex: 1; min-width: 300px; display: flex; flex-direction: column; align-items: center; position: relative;">
            
            <div class="robot-avatar-wrapper float-hover" style="position: relative; width: 150px; height: 150px; border-radius: 50%; background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%); border: 1px solid rgba(135, 166, 48, 0.4); display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; box-shadow: 0 0 40px rgba(135, 166, 48, 0.15); backdrop-filter: blur(10px); z-index: 2;">
              <svg class="robot-svg-icon" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Base / Head - rounded like a modern bot -->
                <rect x="20" y="25" width="60" height="55" rx="20" fill="#ffffff" />
                <rect x="25" y="30" width="50" height="40" rx="15" fill="#1e293b" />
                <!-- Antenna -->
                <path d="M50 25 L50 10" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
                <circle cx="50" cy="8" r="5" fill="var(--primary)">
                  <animate attributeName="fill" values="#87a630;#a4c83a;#87a630" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="5; 6; 5" dur="2s" repeatCount="indefinite"/>
                </circle>
                <!-- Eyes (Animated) -->
                <g fill="var(--primary)">
                   <!-- Left eye -->
                   <path d="M 33 45 Q 38 45 43 45 Q 43 50 38 50 Q 33 50 33 45 Z">
                      <animate attributeName="d" values="M 33 45 Q 38 45 43 45 Q 43 50 38 50 Q 33 50 33 45 Z; M 33 47 Q 38 47 43 47 Q 43 48 38 48 Q 33 48 33 47 Z; M 33 45 Q 38 45 43 45 Q 43 50 38 50 Q 33 50 33 45 Z" dur="4s" keyTimes="0; 0.05; 0.1" repeatCount="indefinite" />
                   </path>
                   <!-- Right eye -->
                   <path d="M 57 45 Q 62 45 67 45 Q 67 50 62 50 Q 57 50 57 45 Z">
                      <animate attributeName="d" values="M 57 45 Q 62 45 67 45 Q 67 50 62 50 Q 57 50 57 45 Z; M 57 47 Q 62 47 67 47 Q 67 48 62 48 Q 57 48 57 47 Z; M 57 45 Q 62 45 67 45 Q 67 50 62 50 Q 57 50 57 45 Z" dur="4s" keyTimes="0; 0.05; 0.1" repeatCount="indefinite" />
                   </path>
                </g>
                <!-- Mouth (Animated talking) -->
                <path class="robot-mouth" d="M 40 60 Q 50 60 60 60" stroke="var(--primary)" stroke-width="3.5" stroke-linecap="round" fill="none">
                  <animate attributeName="d" values="M 40 60 Q 50 60 60 60; M 42 58 Q 50 64 58 58; M 43 59 Q 50 56 57 59; M 40 60 Q 50 60 60 60" dur="0.5s" repeatCount="indefinite" />
                </path>
                <!-- Cheeks -->
                <circle cx="28" cy="55" r="4" fill="#ef4444" opacity="0.6"/>
                <circle cx="72" cy="55" r="4" fill="#ef4444" opacity="0.6"/>
              </svg>
              <!-- Halo effect -->
              <div style="position: absolute; inset: -15px; border-radius: 50%; border: 1px dashed rgba(135, 166, 48, 0.5); animation: rotate 15s linear infinite;"></div>
              <div style="position: absolute; inset: -35px; border-radius: 50%; border: 1px dashed rgba(135, 166, 48, 0.2); animation: rotate-reverse 20s linear infinite;"></div>
            </div>

            <div class="glass-card cta-robot-message" style="position: relative; padding: 1.5rem; border-radius: 1rem; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.2); max-width: 450px; z-index: 2; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
               <div class="message-triangle" style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 12px solid transparent; border-right: 12px solid transparent; border-bottom: 12px solid rgba(255, 255, 255, 0.2);"></div>
               <div class="message-triangle-inner" style="position: absolute; top: -8px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 10px solid #2a343e;"></div>
               <p id="typed-cta-message" style="margin: 0; color: white; font-weight: 500; font-size: 1.1rem; line-height: 1.5; min-height: 5rem; text-align: center;"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA SCRIPTS & STYLES -->
    <style>
      @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes rotate-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
      .cta-robot-message {
        transition: opacity 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .cta-robot-message.msg-hide {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      .cta-robot-message.msg-show {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      .typed-cursor {
        opacity: 1;
        animation: blink 0.7s infinite;
        color: var(--primary);
        font-weight: bold;
      }
      @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
      }
      @media (max-width: 992px) {
        .final-cta-container { flex-direction: column; text-align: center; gap: 3rem !important; }
        .final-cta-content { text-align: center !important; display: flex; flex-direction: column; align-items: center; }
        .cta-button-wrapper { align-items: center !important; }
      }
    </style>
    <script>
      (function() {
        if(window.finalCtaInitialized) return;
        window.finalCtaInitialized = true;
        
        document.addEventListener("DOMContentLoaded", () => {
          const messages = [
            "Sabia que 80% dos clientes preferem respostas imediatas? Clique ao lado e transforme seu atendimento!",
      
