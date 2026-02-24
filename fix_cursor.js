const fs = require('fs');

// Fix ecosystem.css
let css = fs.readFileSync('css/ecosystem.css', 'utf8');
css = css.replace('position: fixed;', 'position: absolute;');
fs.writeFileSync('css/ecosystem.css', css);

// Fix index.html JS
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('customCursor.style.left = \`\${x}px\`;', 'customCursor.style.left = \`\${x - rect.left}px\`;');
html = html.replace('customCursor.style.top = \`\${y}px\`;', 'customCursor.style.top = \`\${y - rect.top}px\`;');
fs.writeFileSync('index.html', html);

console.log('Fixed cursor positioning');
