const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const footerHTML = `
  <footer style="background: var(--dark-header); color: #999; border-top: 1px solid rgba(255,255,255,0.05); padding: 4rem 0 2rem;">
    <div class="container">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 3rem;">
        
        <div style="flex: 1.5; min-width: 250px;">
          <div style="color: white; font-weight: 900; font-size: 1.5rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem;">
            <img src="assets/images/ebot_icon.avif" alt="Ê-Sistemas Logo" style="height: 40px; width: auto; object-fit: contain;">
            Ê-Sistemas
          </div>
          <p class="text-small" style="margin-bottom: 1.5rem; max-width: 300px; line-height: 1.6;">Transformando tecnologia em conexões reais através de inteligência artificial focada em eficiência, resultados e humanização.</p>
        </div>
        
        <div style="flex: 1; min-width: 150px;">
          <h4 style="color: white; margin-bottom: 1.5rem; font-weight: 600; font-size: 1.125rem;">Produtos</h4>
          <ul style="display: flex; flex-direction: column; gap: 0.75rem;" class="text-small">
            <li><a href="ebot-api.html" style="transition: color 0.2s;">Ê-Bot API</a></li>
            <li><a href="ebot-panel.html" style="transition: color 0.2s;">Ê-Bot Panel</a></li>
            <li><a href="ebot-clinical.html" style="transition: color 0.2s;">Ê-Bot Clinical</a></li>
            <li><a href="ebot-explorer.html" style="transition: color 0.2s;">Ê-Bot Explorer</a></li>
          </ul>
        </div>

        <div style="flex: 1; min-width: 150px;">
          <h4 style="color: white; margin-bottom: 1.5rem; font-weight: 600; font-size: 1.125rem;">A Empresa</h4>
          <ul style="display: flex; flex-direction: column; gap: 0.75rem;" class="text-small">
            <li><a href="sobre.html" style="transition: color 0.2s;">Nossa História</a></li>
            <li><a href="sobre.html#premios" style="transition: color 0.2s;">Premiações e Imersões</a></li>
            <li><a href="contato.html" style="transition: color 0.2s;">Fale Conosco</a></li>
          </ul>
        </div>

        <div style="flex: 1; min-width: 150px;">
          <h4 style="color: white; margin-bottom: 1.5rem; font-weight: 600; font-size: 1.125rem;">Legal e Privacidade</h4>
          <ul style="display: flex; flex-direction: column; gap: 0.75rem;" class="text-small">
            <li><a href="privacidade.html" style="transition: color 0.2s;">Aviso de Privacidade</a></li>
            <li><a href="privacidade.html" style="transition: color 0.2s;">Conformidade LGPD</a></li>
            <li><a href="privacidade.html" style="transition: color 0.2s;">Termos de Uso</a></li>
          </ul>
        </div>
      </div>
      
      <div style="border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4rem; padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div style="font-size: 0.875rem;">&copy; 2024-2025 Ê-Sistemas. Todos os direitos reservados.</div>
        <div style="font-size: 0.875rem; display: flex; gap: 1.5rem;">
          <span>(46) 9 9113-0554</span>
          <span>ebot@esistemas.dev.br</span>
        </div>
      </div>
    </div>
  </footer>
`;

const waIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.28 14.3c-.22.61-1.28 1.15-1.78 1.22-.43.06-1.02.13-3.23-.79-2.66-1.11-4.38-3.83-4.52-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.68-1.95.92-2.22.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.79 1.9.06.13.1.28.01.47-.08.19-.13.31-.26.46-.13.15-.28.33-.39.46-.13.14-.27.29-.12.56.15.26.68 1.13 1.46 1.83.99.9 1.84 1.18 2.1 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.64-.16 1.25z"/></svg>`;

files.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');

  // --- REPLACE NAMES AND HYPERLINKS GLOBALLY ---
  html = html.replace(/Ê-Bot Painel/g, 'Ê-Bot Panel');
  html = html.replace(/ebot-painel\.html/g, 'ebot-panel.html');
  html = html.replace(/Ver detalhes do Painel/g, 'Ver detalhes do Panel');
  
  html = html.replace(/Ê-Clinical/g, 'Ê-Bot Clinical');
  html = html.replace(/e-clinical\.html/g, 'ebot-clinical.html');
  html = html.replace(/Ver detalhes do Clinical/g, 'Ver detalhes do Ê-Bot Clinical');

  // Specific fix for the nav menu pointing to solutions
  html = html.replace(/<li><a href="ebot-clinical\.html"[^>]*>Soluções<\/a><\/li>/g, '');

  // Add footer to produtos.html if missing
  if (file === 'produtos.html') {
    if (!html.includes('<footer')) {
      html = html.replace(/<\/main>/, '</main>\n\n  ' + footerHTML);
    }
  }

  // Ensure title tags are correct in specific files
  if (file === 'ebot-panel.html') {
     html = html.replace(/<title>.*<\/title>/, '<title>Ê-Bot Panel | CRM e Atendimento</title>');
  }
  if (file === 'ebot-clinical.html') {
     html = html.replace(/<title>.*<\/title>/, '<title>Ê-Bot Clinical | O Futuro do Atendimento em Saúde</title>');
  }

  // --- REFACTOR ALL CTA BUTTONS FOR WHATSAPP MODAL ---
  
  // 1. Home "Agendar Demonstração"
  if (file === 'index.html') {
    html = html.replace(/<a href="contato\.html" class="btn btn-primary">Agendar Demonstração<\/a>/g, 
    `<button class="trigger-wa-modal btn btn-primary" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;">${waIcon} Agendar Demonstração</button>`);
  }

  // 2. Privacidade "Falar com Suporte Técnico"
  if (file === 'privacidade.html') {
    html = html.replace(/<a href="contato\.html" class="btn btn-primary">Falar com Suporte Técnico<\/a>/g, 
    `<button class="trigger-wa-modal btn btn-primary" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;">${waIcon} Falar com Suporte Técnico</button>`);
  }

  fs.writeFileSync(file, html);
});

console.log('Arquivos HTML processados e links atualizados!');
