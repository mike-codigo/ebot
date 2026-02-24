const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

// 1. New Logo structures
const newHeaderLogo = `
      <div class="logo">
        <a href="index.html" style="display: flex; align-items: center; gap: 0.5rem; font-weight: 800; font-size: 1.75rem;">
          <img src="assets/images/ebot_icon.avif" alt="ebot Logo" style="height: 48px; width: auto; object-fit: contain;">
          <span><span style="color: #88a72f;">ê</span><span style="color: #adb4be;">bot</span></span>
        </a>
      </div>`;

const newFooterLogo = `
        <div style="flex: 1.5; min-width: 250px;">
          <div style="margin-bottom: 1.5rem; display: flex; align-items: center;">
            <img src="assets/images/esistemas_logo.avif" alt="Ê-Sistemas Corporativo" style="height: 48px; width: auto; object-fit: contain; filter: brightness(0) invert(1);">
          </div>
          <p class="text-small" style="margin-bottom: 1.5rem; max-width: 300px; line-height: 1.6;">Transformando tecnologia em conexões reais através de inteligência artificial focada em eficiência, resultados e humanização.</p>
        </div>`;

// Full Footer for Privacy injection
const fullFooterHTML = `  <footer style="background: var(--dark-header); color: #999; border-top: 1px solid rgba(255,255,255,0.05); padding: 4rem 0 2rem;">
    <div class="container">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 3rem;">
        
        <div style="flex: 1.5; min-width: 250px;">
          <div style="margin-bottom: 1.5rem; display: flex; align-items: center;">
            <img src="assets/images/esistemas_logo.avif" alt="Ê-Sistemas Corporativo" style="height: 48px; width: auto; object-fit: contain; filter: brightness(0) invert(1);">
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

  // --- REPLACE LOGOS ---
  // Replace Header Logo
  html = html.replace(/<div class="logo">[\s\S]*?<\/div>/, newHeaderLogo);
  
  // Replace Footer Logo (if footer exists and has the old structure)
  html = html.replace(/<div style="flex: 1\.5; min-width: 250px;">[\s\S]*?<p class="text-small"/, newFooterLogo.replace(/<p class="text-small"/, '<p class="text-small"'));

  // --- INJECT FOOTER IN PRIVACIDADE ---
  if (file === 'privacidade.html') {
    if (!html.includes('<footer')) {
      html = html.replace(/<\/main>/, '</main>\n\n' + fullFooterHTML);
    } else {
        // If it somehow had an old footer, let's update its logo anyway just in case the regex above missed
        html = html.replace(/<div style="color: white; font-weight: 900; font-size: 1\.5rem; margin-bottom: 1\.5rem; display: flex; align-items: center; gap: 0\.75rem;">[\s\S]*?Ê-Sistemas\s*<\/div>/, `<div style="margin-bottom: 1.5rem; display: flex; align-items: center;"><img src="assets/images/esistemas_logo.avif" alt="Ê-Sistemas Corporativo" style="height: 48px; width: auto; object-fit: contain; filter: brightness(0) invert(1);"></div>`);
    }
  }

  // --- STANDARDIZE THE BRAND COLORS ON SPECIFIC PAGES ---
  // API and Panel now use the new #88a72f and #3c4844 palette
  if (file === 'ebot-api.html' || file === 'ebot-panel.html') {
    // Override the inline body style
    html = html.replace(/<body style="--primary: [^>]*">/, '<body style="--primary: #88a72f; --primary-hover: #759226; --primary-light: rgba(136, 167, 47, 0.1); --dark: #3c4844; --dark-header: #2f3835;">');
    
    // Fix API specific inline colors (from purple #8e44ad to the new olive green #88a72f)
    if(file === 'ebot-api.html') {
       html = html.replace(/rgba\(142, 68, 173, 0\.4\)/g, 'rgba(136, 167, 47, 0.4)');
       html = html.replace(/rgba\(142, 68, 173, 0\.2\)/g, 'rgba(136, 167, 47, 0.2)');
    }
  }
  
  // Fix the Product Cards colors in index.html to match the new branding
  if (file === 'index.html') {
    // For the API card (stagger-1)
    html = html.replace(/border-color: rgba\(142, 68, 173, 0\.3\);"/, 'border-color: rgba(136, 167, 47, 0.3);"');
    html = html.replace(/color: #8e44ad;"/g, 'color: #88a72f;"');
    html = html.replace(/border-color: #8e44ad;/g, 'border-color: #88a72f;');
    
    // Ensure Panel Card uses the new olive green instead of the old bright green
    // The panel card uses var(--primary) which will be set globally, so we just need to ensure the variables file is updated.
  }

  // Fix the Product Cards colors in produtos.html
  if (file === 'produtos.html') {
    // Make the API product use the olive green inline
    html = html.replace(/stroke="var\(--primary\)"/g, 'stroke="currentColor"'); // allow inline color to take over SVG if needed
    // However, the cleanest way is just to rely on the global variables.css update which we'll do next.
  }

  fs.writeFileSync(file, html);
});

console.log('Logos e Footer em privacidade alterados com sucesso!');
