const fs = require('fs');
let css = fs.readFileSync('css/components.css', 'utf8');

css = css.replace(/\.auto-click\s*\{[^}]+\}/g, '.auto-click { /* Handled via JS */ }');

fs.writeFileSync('css/components.css', css);
console.log("Fixed autoclick");
