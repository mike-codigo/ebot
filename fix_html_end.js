const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
// remove anything after the FIRST </body>
const index = html.indexOf('</body>');
if (index !== -1) {
    html = html.substring(0, index);
}
// re-add the scripts properly
html += '  <script src="js/chat-animation.js"></script>\n</body>\n</html>';
fs.writeFileSync('index.html', html);
console.log("Fixed HTML");
