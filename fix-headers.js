const fs = require('fs');

const updateHeader = (filename, blackLogoSrc) => {
    if (!fs.existsSync(filename)) return;
    let content = fs.readFileSync(filename, 'utf8');
    
    // The structure is usually:
    // <a href="index.html" ...>
    //   <img src="..." alt="ebot Logo" ...>
    //   <span><span ...>ê</span><span ...>bot</span></span>
    // </a>
    // We want to replace the img and the span with just the black logo.
    
    content = content.replace(
        /(<a href="index\.html"[^>]*>)\s*<img src="[^"]+" alt="ebot Logo"[^>]*>\s*(<span><span[^>]*>ê<\/span><span[^>]*>bot<\/span><\/span>)?/gi,
        `$1\n          <img src="${blackLogoSrc}" alt="Logo" style="height: 48px; width: auto; object-fit: contain;">`
    );

    // Some files might not have the span êbot anymore, so replace just the img if inside the a tag.
    // Actually the regex above handles the span as optional.
    
    fs.writeFileSync(filename, content);
    console.log(`Updated header in ${filename}`);
};

updateHeader('ebot-api.html', './assets/images/logos_ebot/ebot_api/SVG/Logo_api_aplicação_1_black.svg');
updateHeader('ebot-clinical.html', './assets/images/logos_ebot/ebot_clinical/SVG/Logo_clinical_aplicação_1_black.svg');
updateHeader('ebot-explorer.html', './assets/images/logos_ebot/ebot_explorer/SVG/Logo_explore_aplicação_1_black.svg');
updateHeader('ebot-panel.html', './assets/images/logos_ebot/ebot_panel/SVG/Logo_panel_aplicação_1_black.svg');

// For index.html, user said: "No header deve sempre usar a logo aplicação_1 black"
// I will use ebot_api black logo? Wait, index is generic. Maybe use the esistemas logo? Or ebot generic.
// Let's use the old generic behavior for index, or if they mean all pages, what is the black logo for index?
// Let's leave index.html alone for now, or change it to the Esistemas logo.
// Wait, the user said "e quando estiver na pagina de um produto deve aparecer somente a logo do respectivo produto e não 2 logos". 
// This implies index is fine, but on product pages we need the specific logo.

