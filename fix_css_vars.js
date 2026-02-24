const fs = require('fs');

let css = fs.readFileSync('css/variables.css', 'utf8');

// Update global primary green and dark gray to the new palette requested
css = css.replace(/--primary: #27AE60;/, '--primary: #88a72f;');
css = css.replace(/--primary-hover: #1e8449;/, '--primary-hover: #759226;');
css = css.replace(/rgba\(39, 174, 96, 0\.1\)/, 'rgba(136, 167, 47, 0.1)'); // light bg

css = css.replace(/--dark: #0F1419;/, '--dark: #3c4844;');
css = css.replace(/--dark-header: #1A1A1A;/, '--dark-header: #2f3835;');

fs.writeFileSync('css/variables.css', css);

// Ensure the new primary is also updated in animation effects (like the pulse-glow)
let animCss = fs.readFileSync('css/animations.css', 'utf8');
animCss = animCss.replace(/rgba\(39, 174, 96/g, 'rgba(136, 167, 47');
fs.writeFileSync('css/animations.css', animCss);

console.log('Cores Globais (CSS) atualizadas para a nova paleta (#88a72f e #3c4844)');
