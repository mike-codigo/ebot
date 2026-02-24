const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const waIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.28 14.3c-.22.61-1.28 1.15-1.78 1.22-.43.06-1.02.13-3.23-.79-2.66-1.11-4.38-3.83-4.52-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.68-1.95.92-2.22.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.79 1.9.06.13.1.28.01.47-.08.19-.13.31-.26.46-.13.15-.28.33-.39.46-.13.14-.27.29-.12.56.15.26.68 1.13 1.46 1.83.99.9 1.84 1.18 2.1 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.64-.16 1.25z"/></svg>`;

files.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');

  // Search for any anchor tag that wants to go to WhatsApp but isn't using the trigger class
  // Let's replace 'Agendar Demonstração' links in specific pages
  if (file === 'ebot-clinical.html') {
    html = html.replace(/<a href="contato\.html" class="btn btn-primary">Agendar Demonstração Ê-Bot Clinical<\/a>/g, 
    `<button class="trigger-wa-modal btn btn-primary" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;">${waIcon} Agendar Demonstração</button>`);
  }
  
  if (file === 'ebot-panel.html') {
    html = html.replace(/<a href="contato\.html" class="btn btn-primary">Solicitar Orçamento<\/a>/g, 
    `<button class="trigger-wa-modal btn btn-primary" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;">${waIcon} Solicitar Orçamento</button>`);
  }

  // Ensure "Falar com Especialista" buttons across the site are buttons and not anchors
  html = html.replace(/<a href="contato\.html" class="btn btn-primary">Falar com Especialista<\/a>/g,
    `<button class="trigger-wa-modal btn btn-primary" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;">${waIcon} Falar com Especialista</button>`);

  fs.writeFileSync(file, html);
});

console.log('Botões secundários padronizados para botões com trigger do modal WA.');
