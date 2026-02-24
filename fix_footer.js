const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const correctFooterHTML = `  <footer style="background: var(--dark-header); color: #999; border-top: 1px solid rgba(255,255,255,0.05); padding: 4rem 0 2rem;">
    <div class="container">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 3rem;">
        
        <div style="flex: 1.5; min-width: 250px;">
          <div style="margin-bottom: 1.5rem; display: flex; align-items: center;">
            <img src="assets/images/esistemas_logo.avif" alt="Ê-Sistemas Corporativo" style="height: 48px; width: auto; object-fit: contain;">
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
  </footer>`;

files.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');

  // Strip out any existing footer tags and everything inside them to prevent duplicates or broken HTML
  html = html.replace(/<footer[\s\S]*?<\/footer>/g, '');

  // Insert exactly one valid footer right before the first script tag
  html = html.replace(/<script src="js\/utils\.js"><\/script>/, correctFooterHTML + '\n\n  <script src="js/utils.js"></script>');
  
  // Just in case there was no script tag matched
  if(!html.includes(correctFooterHTML)) {
      html = html.replace(/<\/body>/, correctFooterHTML + '\n</body>');
  }

  // Also fix the Hero Copy text requested in index.html during this run
  if (file === 'index.html') {
    html = html.replace(/<span>✓ Sem cartão de crédito<\/span>/, '<span>✓ Automação Ultra Personalizada</span>');
    html = html.replace(/<span>✓ Setup em 48h<\/span>/, '<span>✓ Setup em 1 a 7 dias</span>');
  }

  fs.writeFileSync(file, html);
});

console.log('Footer regenerado e corrigido com sucesso! Copy ajustada no index.');
