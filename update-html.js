const fs = require('fs');

const updateFile = (filename, botClass, iconPath) => {
  let content = fs.readFileSync(filename, 'utf8');

  // Replace section style and add background divs
  content = content.replace(
    /<section class="section" style="position: relative; overflow: hidden; background: linear-gradient[^>]*>/,
    `<section class="section chat-section ${botClass}" style="position: relative; overflow: hidden; padding: 6rem 0; display: flex; align-items: center;">
      <div class="chat-bg-grid"></div>
      <div class="chat-flashlight"></div>`
  );

  // Replace EB text with icon in the header (48x48)
  content = content.replace(
    /<div style="width: 48px; height: 48px;[^>]*>\s*EB\s*<\/div>/g,
    `<div style="width: 48px; height: 48px; border-radius: 50%; background: var(--primary); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(136, 167, 47, 0.3); z-index: 2;">
      <img src="${iconPath}" alt="Icon" style="width: 28px; height: 28px; object-fit: contain;">
    </div>`
  );

  // Replace EB text with icon in the chat body (32x32)
  content = content.replace(
    /<div style="width: 32px; height: 32px;[^>]*>\s*EB\s*<\/div>/g,
    `<div style="width: 32px; height: 32px; border-radius: 50%; background: var(--primary); flex-shrink: 0; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <img src="${iconPath}" alt="Icon" style="width: 18px; height: 18px; object-fit: contain;">
    </div>`
  );

  fs.writeFileSync(filename, content);
  console.log(`Updated ${filename}`);
};

updateFile('ebot-api.html', 'chat-api', './assets/images/logos_ebot/ebot_api/SVG/icone_white.svg');
updateFile('ebot-clinical.html', 'chat-clinical', './assets/images/logos_ebot/ebot_clinical/SVG/Icone_clinical_aplicação_1.svg');
updateFile('ebot-explorer.html', 'chat-explorer', './assets/images/logos_ebot/ebot_explorer/SVG/Icone_explore_aplicação_1_white.svg');
