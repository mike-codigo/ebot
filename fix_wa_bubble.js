const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

css = css.replace(/animation:\s*bubblePop\s+[^;]+;/g, '');
css = css.replace(/animation:\s*smoothSlideUp\s+[^;]+;/g, '');

fs.writeFileSync('css/components.css', css);
console.log("Fixed wa-bubble animations");
