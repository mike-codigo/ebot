const fs = require('fs');

// 1. UPDATE INDEX.HTML
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace specific badges and add overlays
const products = [
  {
    title: 'Ê-Bot API',
    badgeText: 'MAIS POPULAR PARA DEVS',
    badgeColor: '#00d2ff' // Maybe a blue badge? Or use primary.
  },
  {
    title: 'Ê-Bot Panel',
    badgeText: 'PARA TODOS OS NEGÓCIOS'
  },
  {
    title: 'Ê-Bot Clinical',
    badgeText: 'POPULAR PARA CLÍNICAS'
  },
  {
    title: 'Ê-Bot Explorer',
    badgeText: 'EM BREVE',
    // Currently badge is an inline span inside the title
  }
];

function injectOverlayAndBadge(html, title, badgeText) {
  const regex = new RegExp(`(<h3 class="h3 card-title"[^>]*>${title}.*?<\/h3>)`, 'i');
  
  // Find the exact block for this product
  // A bit risky with regex, let's locate the card block by looking for the title
  
  let result = html;
  
  // Find the card-content block that contains this title
  const parts = result.split('<div class="card-content">');
  for (let i = 1; i < parts.length; i++) {
    if (parts[i].includes(title)) {
      // It's this card.
      
      // Remove any existing badge in this block
      parts[i] = parts[i].replace(/<div class="card-badge">.*?<\/div>/, '');
      
      // Inject new badge at the very beginning of the card, OUTSIDE card-content!
      // Wait, we need it outside card-content, but inside glass-liquid-card.
      // Let's modify the split to split by `class="flashlight-glow"></div>`
      break; // Let's use a different strategy
    }
  }
  return result;
}

// Safer approach: string replace for each specific block
// Produto 1
indexHtml = indexHtml.replace(
  '<div class="card-content">\n                <div class="card-icon-wrapper">',
  `<div class="card-badge badge-devs">MAIS POPULAR PARA DEVS</div>
              <div class="tool-hover-overlay">
                <div class="tool-animation-container">
                  <div class="pulse-ring delay-0"></div>
                  <div class="pulse-ring delay-1"></div>
                  <div class="pulse-ring delay-2"></div>
                  <img src="assets/images/ebot_icon.avif" alt="Ê-Bot API" class="tool-anim-icon">
                </div>
                <div class="tool-anim-name">Ê-Bot API</div>
              </div>
              <div class="card-content">
                <div class="card-icon-wrapper">`
);

// Produto 2
indexHtml = indexHtml.replace(
  /<!-- Produto 2 \(Panel\) -->[\s\S]*?<div class="card-content">\s*<div class="card-icon-wrapper">/,
  `<!-- Produto 2 (Panel) -->
            <div class="glass-liquid-card ecosystem-card float-hover reveal stagger-2">
              <div class="flashlight-glow"></div>
              <div class="card-badge badge-panel">PARA TODOS OS NEGÓCIOS</div>
              <div class="tool-hover-overlay">
                <div class="tool-animation-container">
                  <div class="pulse-ring delay-0"></div>
                  <div class="pulse-ring delay-1"></div>
                  <div class="pulse-ring delay-2"></div>
                  <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Panel" class="tool-anim-icon">
                </div>
                <div class="tool-anim-name">Ê-Bot Panel</div>
              </div>
              <div class="card-content">
                <div class="card-icon-wrapper">`
);

// Produto 3
indexHtml = indexHtml.replace(
  /<div class="card-badge">MAIS POPULAR<\/div>\s*<div class="card-icon-wrapper">/,
  `<div class="card-badge badge-clinical">POPULAR PARA CLÍNICAS</div>
              <div class="tool-hover-overlay">
                <div class="tool-animation-container">
                  <div class="pulse-ring delay-0"></div>
                  <div class="pulse-ring delay-1"></div>
                  <div class="pulse-ring delay-2"></div>
                  <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Clinical" class="tool-anim-icon">
                </div>
                <div class="tool-anim-name">Ê-Bot Clinical</div>
              </div>
              <div class="card-icon-wrapper">`
);

// Produto 4
indexHtml = indexHtml.replace(
  /<!-- Produto 4 \(Explorer\) -->[\s\S]*?<div class="card-content">\s*<div class="card-icon-wrapper">/,
  `<!-- Produto 4 (Explorer) -->
            <div class="glass-liquid-card ecosystem-card float-hover reveal stagger-5">
              <div class="flashlight-glow"></div>
              <div class="tool-hover-overlay">
                <div class="tool-animation-container">
                  <div class="pulse-ring delay-0"></div>
                  <div class="pulse-ring delay-1"></div>
                  <div class="pulse-ring delay-2"></div>
                  <img src="assets/images/ebot_icon.avif" alt="Ê-Bot Explorer" class="tool-anim-icon">
                </div>
                <div class="tool-anim-name">Ê-Bot Explorer</div>
              </div>
              <div class="card-content">
                <div class="card-icon-wrapper">`
);

fs.writeFileSync('index.html', indexHtml, 'utf8');

// 2. UPDATE CSS
let css = fs.readFileSync('css/ecosystem.css', 'utf8');

// Fix buggy position fixed !important
css = css.replace(/\.iphone-notch\s*\{[\s\S]*?position:\s*fixed\s*!important;[\s\S]*?\n\s*\n\s*/g, `.iphone-notch {\n  position: absolute;\n  `);
css = css.replace(/\.glass-liquid-card::before\s*\{[\s\S]*?position:\s*fixed\s*!important;[\s\S]*?\n\s*\n\s*/g, `.glass-liquid-card::before {\n  content: '';\n  position: absolute;\n  `);
css = css.replace(/\.flashlight-glow\s*\{[\s\S]*?position:\s*fixed\s*!important;[\s\S]*?\n\s*\n\s*/g, `.flashlight-glow {\n  position: absolute;\n  `);
css = css.replace(/\.card-badge\s*\{[\s\S]*?position:\s*fixed\s*!important;[\s\S]*?\n\s*\n\s*/g, `.card-badge {\n  position: absolute;\n  `);
css = css.replace(/\.btn-neon::before\s*\{[\s\S]*?position:\s*fixed\s*!important;[\s\S]*?\n\s*\n\s*/g, `.btn-neon::before {\n  content: '';\n  position: absolute;\n  `);
// Do it twice for the second btn-neon definition
css = css.replace(/\.btn-neon::before\s*\{[\s\S]*?position:\s*fixed\s*!important;[\s\S]*?\n\s*\n\s*/g, `.btn-neon::before {\n  content: '';\n  position: absolute;\n  `);

// Make sure center column uses auto width
css = css.replace('.ecosystem-center {\n  flex: 0 0 auto;', '.ecosystem-center {\n  flex: 0 0 auto;\n  width: auto !important;');

// Allow overflow visible for badges, but keep backgrounds bounded
css = css.replace('overflow: hidden;', '/* overflow: visible; -> Wait, I need to remove it from glass-liquid-card */');
css = css.replace(/\.glass-liquid-card\s*\{([\s\S]*?)overflow:\s*hidden;([\s\S]*?)\}/, `.glass-liquid-card {$1overflow: visible;$2}`);

// Add missing overlay styles
const overlayStyles = `
/* --- HOVER ANIMATION OVERLAY --- */
.tool-hover-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(136, 167, 47, 0.95);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: scale(0.95);
  pointer-events: none;
  border-radius: 24px;
}

.glass-liquid-card:has(.btn-neon:hover) .tool-hover-overlay {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}

.glass-liquid-card:has(.btn-neon:hover) .card-content > *:not(.btn-neon) {
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.glass-liquid-card .card-content > *:not(.btn-neon) {
  transition: all 0.3s ease;
}

.glass-liquid-card .btn-neon {
  position: relative;
  z-index: 20; /* Keep the button clickable and visible above the overlay */
}

/* Hover Animation Elements */
.tool-animation-container {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.pulse-ring {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  o
