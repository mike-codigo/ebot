const fs = require('fs');

let css = fs.readFileSync('css/ecosystem.css', 'utf8');

// Add back white-space to iphone-custom-cursor since I accidentally removed all of them
css = css.replace('.iphone-custom-cursor {\n  position: fixed !important;\n\n\n  top: 0;', '.iphone-custom-cursor {\n  position: fixed !important;\n  white-space: nowrap;\n  width: max-content;\n  top: 0;');

fs.writeFileSync('css/ecosystem.css', css);
console.log('Fixed custom cursor whitespace');
