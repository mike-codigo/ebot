const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// For Clinical: Move the badge and overlay OUT of .card-content
html = html.replace(
  '<div class="card-content">\n                <div class="card-badge badge-clinical">POPULAR PARA CLÍNICAS</div>',
  '<div class="card-badge badge-clinical">POPULAR PARA CLÍNICAS</div>\n              <div class="card-content">'
);

// Move overlay out as well
html = html.replace(
  /<div class="card-content">[\s\S]*?<div class="tool-hover-overlay">([\s\S]*?)<\/div>\s*<\/div>\s*<div class="card-icon-wrapper">/,
  (match, innerOverlay) => {
    return `<div class="tool-hover-overlay">${innerOverlay}</div>\n              <div class="card-content">\n                <div class="card-icon-wrapper">`;
  }
);

// Explorer overlay: I injected it... where?
html = html.replace(
  /<div class="card-content">\s*<div class="tool-hover-overlay">([\s\S]*?)<\/div>\s*<\/div>\s*<div class="card-icon-wrapper">/,
  (match, innerOverlay) => {
    return `<div class="tool-hover-overlay">${innerOverlay}</div>\n              <div class="card-content">\n                <div class="card-icon-wrapper">`;
  }
);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Fixed HTML");
