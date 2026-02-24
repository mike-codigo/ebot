const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. Move the iphone-custom-cursor outside of iphone-interactive
const cursorHtmlRegex = /<div class="iphone-custom-cursor" id="iphone-custom-cursor">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
// Wait, the cursor is at:
/*
              <div class="iphone-custom-cursor" id="iphone-custom-cursor">
                <svg ...
                <span>...</span>
              </div>
            </div>
          </div>
*/

// Let's just find and extract it.
const match = indexHtml.match(/<div class="iphone-custom-cursor" id="iphone-custom-cursor">[\s\S]*?<\/div>/);
if (match) {
  const cursorBlock = match[0];
  indexHtml = indexHtml.replace(cursorBlock, '');
  // insert before </body>
  indexHtml = indexHtml.replace('</body>', `\n  ${cursorBlock}\n</body>`);
}

// 2. Change max-width of container from 1400px to 1600px
indexHtml = indexHtml.replace('<div class="container" style="max-width: 1400px;">', '<div class="container" style="max-width: 1650px;">');

// 3. Update the JS logic for custom cursor
indexHtml = indexHtml.replace(
  'customCursor.style.opacity = "1";',
  'customCursor.classList.add("visible");'
).replace(
  'customCursor.style.opacity = "0";',
  'customCursor.classList.remove("visible");'
);

fs.writeFileSync('index.html', indexHtml, 'utf8');

// 4. Update CSS 
let ecoCss = fs.readFileSync('css/ecosystem.css', 'utf8');

// Make the layout gap smaller to bring cards closer to phone
ecoCss = ecoCss.replace('.ecosystem-layout {', '.ecosystem-layout {\n  gap: 1rem; /* was 1.5rem */');

// Remove justify-content: space-between if it exists, replace with center
ecoCss = ecoCss.replace('justify-content: space-between;', 'justify-content: center; /* keep them closer */');

// Update .btn-neon background
ecoCss = ecoCss.replace(/background:\s*rgba\(136,\s*167,\s*47,\s*0\.15\);/g, 'background: rgba(136, 167, 47, 0.4);');

// Update .iphone-custom-cursor CSS
const cursorCssRegex = /\.iphone-custom-cursor\s*\{[\s\S]*?\}/;
ecoCss = ecoCss.replace(cursorCssRegex, (match) => {
  return match.replace('z-index: 100;', 'z-index: 100000;').replace('opacity: 0;', 'opacity: 0; visibility: hidden;');
});
// Add .visible class
if (!ecoCss.includes('.iphone-custom-cursor.visible')) {
  ecoCss += `\n.iphone-custom-cursor.visible {\n  opacity: 1;\n  visibility: visible;\n  transform: translate(-50%, -50%) scale(1);\n}\n`;
}

// 5. Update Modal iPhone to cover much more screen and maintain 9:16 aspect ratio
// We'll replace the fixed pixel values with viewport-based values
ecoCss = ecoCss.replace(/\.modal-iphone\s*\{[\s\S]*?\}/, `.modal-iphone {
  height: 90vh;
  width: calc(90vh * 9 / 16);
  max-width: 95vw; /* don't exceed screen width */
  transform: scale(0.8);
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: default;
  margin: 0 auto;
}`);

// Remove media queries that override modal-iphone size
ecoCss = ecoCss.replace(/@media \(min-width: 992px\)\s*\{\s*\.modal-iphone\s*\{[^}]+\}\s*\}/g, '');
ecoCss = ecoCss.replace(/@media \(min-width: 1400px\)\s*\{\s*\.modal-iphone\s*\{[^}]+\}\s*\}/g, '');

fs.writeFileSync('css/ecosystem.css', ecoCss, 'utf8');

console.log("Updated ecosystem files.");
