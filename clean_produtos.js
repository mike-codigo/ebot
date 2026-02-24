const fs = require('fs');
let prodHTML = fs.readFileSync('produtos.html', 'utf8');

// Remove extra duplicate button from Ê-Clinical
prodHTML = prodHTML.replace(
    /<a href="e-clinical\.html" class="btn btn-primary"[^>]*>Ver detalhes do Clinical<\/a>\s*<a href="e-clinical\.html" class="btn btn-outline" style="margin-top: 2rem;">Ver detalhes do Ê-Clinical<\/a>/,
    '<a href="e-clinical.html" class="btn btn-primary" style="margin-top: 2rem; background: var(--secondary); border-color: var(--secondary);">Ver detalhes do Clinical</a>'
);

fs.writeFileSync('produtos.html', prodHTML);
console.log("Duplicatas removidas.");
