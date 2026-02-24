const fs = require('fs');
let css = fs.readFileSync('css/components.css', 'utf8');

// Append the new file's content
let newCSS = fs.readFileSync('css/iphone-styles.css', 'utf8');

fs.writeFileSync('css/components.css', css + '\n' + newCSS);
console.log("CSS iPhone styles added securely!");
