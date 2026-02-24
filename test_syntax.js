const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

console.log("Found e-bot icon floating?", html.includes('floating-ebot'));
