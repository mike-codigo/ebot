const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<div class="ecosystem-layout">\s*<!-- Left Column -->\s*<div class="ecosystem-col ecosystem-left">\s*<!-- Produto 1 \(API\) -->\s*<div class="glass-liquid-card ecosystem-card float-hover reveal stagger-1">\s*<div class="flashlight-glow"><\/div>\s*<div class="card-badge badge-orange">MAIS POPULAR PARA DEVS<\/div>/, `<div class="ecosystem-layout">
          <!-- Left Column -->
          <div class="ecosystem-col ecosystem-left">
            <!-- Produto 1 (API) -->
            <div class="glass-liquid-card ecosystem-card float-hover reveal stagger-1">
              <div class="flashlight-glow"></div>
              <div class="card-badge badge-orange">MAIS POPULAR PARA DEVS</div>`);

// Double check if there are two nested <div class="ecosystem-layout"> because of the previous replacement
if (html.includes('<div class="ecosystem-layout">\n          <!-- Left Column -->\n          <div class="ecosystem-col ecosystem-left">') && html.includes('        <div class="ecosystem-layout">\n          <!-- Left Column -->\n          <div class="ecosystem-col ecosystem-left">')) {
  html = html.replace(/<div class="ecosystem-layout">\s*<div class="ecosystem-layout">/, '<div class="ecosystem-layout">');
}

fs.writeFileSync('index.html', html, 'utf8');
