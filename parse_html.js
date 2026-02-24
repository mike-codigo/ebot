const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Get everything from <section class="section section-light" id="features">
// to </section> before <section class="section section-gray bg-grid-pattern">

const startIndex = html.indexOf('<section class="section section-light" id="features">');
const endIndex = html.indexOf('<section class="section section-gray bg-grid-pattern">');

const segment = html.substring(startIndex, endIndex);

console.log(segment);
