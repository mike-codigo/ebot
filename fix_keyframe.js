const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

css = css.replace(/animation:\s*bubblePopIn\s+0\.5s/g, 'animation: smoothPopIn 0.4s');

if (!css.includes('@keyframes smoothPopIn')) {
    css += `
@keyframes smoothPopIn { 
  0% { opacity: 0; transform: translateY(15px) scale(0.95); } 
  100% { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; } 
}
`;
}

// Remove static classes animation
css = css.replace(/\.chat-b-\d+\s*\{[^}]+\}/g, '');

fs.writeFileSync('css/components.css', css);
console.log("Fixed keyframes");
