const fs = require('fs');

let css = fs.readFileSync('css/ecosystem.css', 'utf8');
css = css.replace('.video-modal-close {', '.video-modal-close {\n  position: fixed !important;');

fs.writeFileSync('css/ecosystem.css', css);
console.log('Fixed modal close button position');
