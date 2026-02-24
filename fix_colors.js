const fs = require('fs');
let css = fs.readFileSync('css/ecosystem.css', 'utf8');

// Replace card backgrounds with dark grey from palette
css = css.replace(/rgba\(60, 72, 68, 0\.6\)/g, 'rgba(47, 56, 53, 0.85)');
// Update border color
css = css.replace(/rgba\(255, 255, 255, 0\.05\)/g, 'rgba(255, 255, 255, 0.1)');

// The neon border color to a slightly more vibrant green 
css = css.replace(/rgba\(136, 167, 47, 0\.4\)/g, 'rgba(136, 167, 47, 0.8)');

fs.writeFileSync('css/ecosystem.css', css);
console.log('Fixed card colors to match ebot palette perfectly.');
