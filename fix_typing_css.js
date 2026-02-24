const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

css = css.replace(/@keyframes hideTypingAnim \{[\s\S]*?\}/, `@keyframes hideTypingAnim { 
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); } 
}`);

fs.writeFileSync('css/components.css', css);
console.log("Fixed hide typing animation");
