const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  
  // Replace Header Logo
  html = html.replace(
    /<div class="logo">\s*<a href="index\.html"[^>]*>[\s\S]*?<\/a>\s*<\/div>/,
    `<div class="logo">
        <a href="index.html" style="display: flex; align-items: center; gap: 0.75rem; font-weight: 900; font-size: 1.5rem; color: var(--primary);">
          <img src="assets/images/ebot_icon.avif" alt="Ê-Sistemas Logo" style="height: 36px; width: auto; object-fit: contain;">
          Ê-Sistemas
        </a>
      </div>`
  );

  // Replace Footer Logo
  html = html.replace(
    /<div style="color: white; font-weight: 900; font-size: 1\.5rem; margin-bottom: 1\.5rem; display: flex; align-items: center; gap: 0\.5rem;">[\s\S]*?Ê-Sistemas\s*<\/div>/,
    `<div style="color: white; font-weight: 900; font-size: 1.5rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem;">
            <img src="assets/images/ebot_icon.avif" alt="Ê-Sistemas Logo" style="height: 40px; width: auto; object-fit: contain;">
            Ê-Sistemas
          </div>`
  );

  fs.writeFileSync(file, html);
});
console.log("Logos replaced!");
