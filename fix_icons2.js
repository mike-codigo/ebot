const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Ah, the regex replacement failed slightly because there were nested divs or SVG that it didn't fully match, causing a duplicate chunk to be left behind.
// Let's do a hard clean-up.

const startIndex = html.indexOf('<div class="integration-bg">');
const endIndex = html.indexOf('<div class="chat-ui">');

const chunkToRemove = html.substring(startIndex, endIndex);

const newBg = `<div class="integration-bg">
    <!-- Linha de conexão com z-index menor passa por BAIXO dos ícones -->
    <svg class="connection-line" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M 13,18 C 40,18 60,82 87,82" fill="none" stroke="rgba(135, 166, 48, 0.2)" stroke-width="1.5" />
      <path d="M 13,18 C 40,18 60,82 87,82" fill="none" stroke="#87a630" stroke-width="1.5" class="flowing-data" />
    </svg>

    <div class="wpp-icon float-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="#87a630"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.28 14.3c-.22.61-1.28 1.15-1.78 1.22-.43.06-1.02.13-3.23-.79-2.66-1.11-4.38-3.83-4.52-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.68-1.95.92-2.22.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.79 1.9.06.13.1.28.01.47-.08.19-.13.31-.26.46-.13.15-.28.33-.39.46-.13.14-.27.29-.12.56.15.26.68 1.13 1.46 1.83.99.9 1.84 1.18 2.1 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.64-.16 1.25z"/></svg>
    </div>
    <div class="ebot-icon float-icon">
      <img src="assets/images/ebot_icon.avif" alt="ebot" style="width: 48px; height: 48px; object-fit: contain;">
    </div>
  </div>\n\n  `;

html = html.replace(chunkToRemove, newBg);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed overlapping html chunk');
