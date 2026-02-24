const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const newFooter = `
  <footer style="background: var(--dark-header); color: #999; border-top: 1px solid rgba(255,255,255,0.05); padding: 4rem 0 2rem;">
    <div class="container">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 3rem;">
        
        <div style="flex: 1.5; min-width: 250px;">
          <div style="color: white; font-weight: 900; font-size: 1.5rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            Ê-Sistemas
          </div>
          <p class="text-small" style="margin-bottom: 1.5rem; max-width: 300px; line-height: 1.6;">Transformando tecnologia em conexões reais através de inteligência artificial focada em eficiência, resultados e humanização.</p>
        </div>
        
        <div style="flex: 1; min-width: 150px;">
          <h4 style="color: white; margin-bottom: 1.5rem; font-weight: 600; font-size: 1.125rem;">Produtos</h4>
          <ul style="display: flex; flex-direction: column; gap: 0.75rem;" class="text-small">
            <li><a href="produtos.html" style="transition: color 0.2s;">Ê-Bot API</a></li>
            <li><a href="produtos.html" style="transition: color 0.2s;">Ê-Bot Painel</a></li>
            <li><a href="e-clinical.html" style="transition: color 0.2s;">Ê-Clinical</a></li>
            <li><a href="produtos.html" style="transition: color 0.2s;">Ê-Turismo</a></li>
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

files.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  
  // 1. Atualizar Navbar
  html = html.replace(/<ul class="flex gap-lg">[\s\S]*?<\/ul>/g, () => {
    const isHome = file === 'index.html' ? 'class="text-primary" style="font-weight: 600;"' : '';
    const isProd = file === 'produtos.html' ? 'class="text-primary" style="font-weight: 600;"' : '';
    const isSobre = file === 'sobre.html' ? 'class="text-primary" style="font-weight: 600;"' : '';
    const isPriv = file === 'privacidade.html' ? 'class="text-primary" style="font-weight: 600;"' : '';
    const isCont = file === 'contato.html' ? 'class="text-primary" style="font-weight: 600;"' : '';
    
    return `<ul class="flex gap-lg">
          <li><a href="index.html" ${isHome}>Home</a></li>
          <li><a href="produtos.html" ${isProd}>Produtos</a></li>
          <li><a href="sobre.html" ${isSobre}>Nossa História</a></li>
          <li><a href="privacidade.html" ${isPriv}>Privacidade</a></li>
          <li><a href="contato.html" ${isCont}>Contato</a></li>
        </ul>`;
  });

  // 2. Transformar Botões "Falar com Especialista" em Botões de Acionamento do Modal + Ícone WA
  html = html.replace(/<a([^>]*)>([^<]*?)Falar com Especialista(?: Agora)?([^<]*?)<\/a>/gi, (match, attrs, before, after) => {
    
    // Remove href
    attrs = attrs.replace(/href="[^"]*"/, '');
    
    // Insere a classe 'trigger-wa-modal'
    if (attrs.includes('class="')) {
       attrs = attrs.replace(/class="/, 'class="trigger-wa-modal ');
    } else {
       attrs += ' class="trigger-wa-modal"';
    }
    
    // Garante layout flex no botão para o ícone alinhar certinho
    if (attrs.includes('style="')) {
       if (!attrs.includes('display: flex') && !attrs.includes('display: inline-flex')) {
           attrs = attrs.replace(/style="/, 'style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; ');
       }
    } else {
       attrs += ' style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;"';
    }

    const icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.28 14.3c-.22.61-1.28 1.15-1.78 1.22-.43.06-1.02.13-3.23-.79-2.66-1.11-4.38-3.83-4.52-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.68-1.95.92-2.22.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.79 1.9.06.13.1.28.01.47-.08.19-.13.31-.26.46-.13.15-.28.33-.39.46-.13.14-.27.29-.12.56.15.26.68 1.13 1.46 1.83.99.9 1.84 1.18 2.1 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.64-.16 1.25z"/></svg>`;
    
    return `<button ${attrs}>${icon} ${before.trim()} Falar com Especialista ${after.trim()}</button>`;
  });

  // 3. Atualiza o Footer
  html = html.replace(/<footer[\s\S]*?<\/footer>/, newFooter);
  
  // 4. Injeta classes do background grid no index.html (Hero, Integrações, Final CTA)
  if (file === 'index.html') {
      html = html.replace(/<section class="section" style="background: white; position: relative; overflow: hidden;">/, '<section class="section bg-grid-pattern" style="background: white; position: relative; overflow: hidden;">');
      html = html.replace(/<section class="section section-gray" style="overflow: hidden;">/, '<section class="section section-gray bg-grid-pattern" style="overflow: hidden;">');
      html = html.replace(/<section class="section section-dark text-center" style="background: linear-gradient\(135deg, var\(--dark\) 0%, #1a252f 100%\);">/, '<section class="section section-dark text-center bg-grid-pattern-dark" style="background: linear-gradient(135deg, var(--dark) 0%, #1a252f 100%);">');
  }

  fs.writeFileSync(file, html);
});
console.log("HTML files updated!");
