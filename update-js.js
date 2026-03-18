const fs = require('fs');
let content = fs.readFileSync('js/chat-widget.js', 'utf8');

// Replace bot initials with actual icon dynamically
content = content.replace(
  /let botInitials = botName.substring\(0, 2\).toUpperCase\(\);\s*msgDiv\.innerHTML = `\s*<div style="width: 32px; height: 32px;[^>]*>\$\{botInitials\}<\/div>/,
  `const botImgSrc = chatContainer.querySelector('img') ? chatContainer.querySelector('img').src : '';
      msgDiv.innerHTML = \`
        <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--primary, #88a72f); flex-shrink: 0; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <img src="\${botImgSrc}" alt="Icon" style="width: 18px; height: 18px; object-fit: contain;">
        </div>`
);

fs.writeFileSync('js/chat-widget.js', content);
