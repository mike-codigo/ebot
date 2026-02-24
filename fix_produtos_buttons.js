const fs = require('fs');

let prodHTML = fs.readFileSync('produtos.html', 'utf8');

// 1. Fix Ê-Bot API Button in produtos.html
if (!prodHTML.includes('Ver detalhes da API')) {
  prodHTML = prodHTML.replace(
    /<ul class="checklist text-small">[\s\S]*?<\/ul>/,
    match => match + '\n            <a href="ebot-api.html" class="btn btn-outline" style="margin-top: 2rem; border-color: #8e44ad; color: #8e44ad;">Ver detalhes da API</a>'
  );
}

// 2. Fix Ê-Bot Painel Button in produtos.html
// Since there's multiple <ul class="checklist text-small">, we need to be more precise for the Painel.
if (!prodHTML.includes('Ver detalhes do Painel')) {
  prodHTML = prodHTML.replace(
    /(<h2 class="h2">Ê-Bot Painel<\/h2>[\s\S]*?<ul class="checklist text-small">[\s\S]*?<\/ul>)/,
    match => match + '\n            <a href="ebot-painel.html" class="btn btn-primary" style="margin-top: 2rem;">Ver detalhes do Painel</a>'
  );
}

// 3. Ensure the Ê-Clinical button is still there and formatted correctly.
if (!prodHTML.includes('Ver detalhes do Clinical')) {
    prodHTML = prodHTML.replace(
        /(<h2 class="h2">Ê-Clinical<\/h2>[\s\S]*?<ul class="checklist text-small">[\s\S]*?<\/ul>)/,
        match => match + '\n            <a href="e-clinical.html" class="btn btn-primary" style="margin-top: 2rem; background: var(--secondary); border-color: var(--secondary);">Ver detalhes do Clinical</a>'
    );
}

// Ensure the explorer button exists (it should, based on previous step, but let's be certain)
if (!prodHTML.includes('Ver detalhes do Explorer')) {
   prodHTML = prodHTML.replace(
        /(<h2 class="h2" style="display: flex; align-items: center; gap: 0\.5rem; flex-wrap: wrap;">Ê-Bot Explorer[\s\S]*?<ul class="checklist text-small">[\s\S]*?<\/ul>)/,
        match => match + '\n            <a href="ebot-explorer.html" class="btn btn-outline" style="margin-top: 2rem; border-color: #f39c12; color: #f39c12;">Ver detalhes do Explorer</a>'
   );
}


fs.writeFileSync('produtos.html', prodHTML);
console.log("Botões corrigidos em produtos.html");
