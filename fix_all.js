const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

function fixCard(html, title, imgAlt, badgeClass, badgeText) {
  // We want to find the whole glass-liquid-card block and rebuild its start
  const regex = new RegExp(`(<div class="glass-liquid-card ecosystem-card float-hover reveal stagger-[\d]+">[\s\S]*?<div class="flashlight-glow"><\/div>)([\s\S]*?)(<div class="card-content">)?[\s\S]*?<h3 class="h3 card-title"[^>]*>${title}.*?<\/h3>`, 'i');
  
  html = html.replace(regex, (match, beforeGlow) => {
    // Find the original H3
    const h3Match = match.match(/<h3 class="h3 card-title"[^>]*>.*<\/h3>/i);
    const h3 = h3Match ? h3Match[0] : `<h3 class="h3 card-title">${title}</h3>`;
    
    // Build the new clean top half
    let replacement = `${beforeGlow}\n`;
    if (badgeText) {
      replacement += `              <div class="card-badge ${badgeClass}">${badgeText}</div>\n`;
    }
    replacement += `              <div class="tool-hover-overlay">
                <div class="tool-animation-container">
                  <div class="pulse-ring delay-0"></div>
                  <div class="pulse-ring delay-1"></div>
                  <div class="pulse-ring delay-2"></div>
                  <img src="assets/images/ebot_icon.avif" alt="${imgAlt}" class="tool-anim-icon">
                </div>
                <div class="tool-anim-name">${title}</div>
              </div>
              <div class="card-content">
                <div class="card-icon-wrapper">
                  <img src="assets/images/ebot_icon.avif" alt="${imgAlt}" class="card-logo">
                </div>
                ${h3}`;
    return replacement;
  });
  
  return html;
}

html = fixCard(html, 'Ê-Bot API', 'Ê-Bot API', 'badge-devs', 'MAIS POPULAR PARA DEVS');
html = fixCard(html, 'Ê-Bot Panel', 'Ê-Bot Panel', 'badge-panel', 'PARA TODOS OS NEGÓCIOS');
html = fixCard(html, 'Ê-Bot Clinical', 'Ê-Bot Clinical', 'badge-clinical', 'POPULAR PARA CLÍNICAS');
html = fixCard(html, 'Ê-Bot Explorer', 'Ê-Bot Explorer', '', ''); // No badge

fs.writeFileSync('index.html', html, 'utf8');
console.log('Cards fixed');
