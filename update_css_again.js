const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

css = css.replace(/\.wa-chat-body\s*\{[^}]+\}/g, match => {
    let replaced = match.replace(/overflow-y:\s*hidden;/g, 'overflow-y: auto; scroll-behavior: smooth;\n  scrollbar-width: none;');
    replaced = replaced.replace(/overflow:\s*hidden;/g, 'overflow: auto; scroll-behavior: smooth;\n  scrollbar-width: none;');
    return replaced;
});

// Remove leftover animations
css = css.replace(/animation:\s*dynamicAutoScroll\s+42s[^;]+;/g, '');
css = css.replace(/animation:\s*globalFadeReset\s+42s[^;]+;/g, '');
// For some reason the previous regex might have left animation: , globalFadeReset ...
css = css.replace(/animation:\s*[^;]*globalFadeReset[^;]*;/g, '');
// Also remove `animation: autoScrollChat ...`
css = css.replace(/animation:\s*autoScrollChat[^;]*;/g, '');

fs.writeFileSync('css/components.css', css);
console.log("Updated CSS again");
