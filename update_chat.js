const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace typing indicators inline animations with just style="display: none;"
html = html.replace(/style="animation: showTyping 42s[^"]+"/g, 'style="display: none;"');

// Remove animation styles from chat bubbles (if any were there, but they are in classes)
// Remove the classes chat-b-* from the HTML, instead we will manage them from JS
for (let i = 1; i <= 9; i++) {
    html = html.replace(new RegExp(`chat-b-${i}`, 'g'), `chat-msg-${i}`);
}

fs.writeFileSync('index.html', html);

let css = fs.readFileSync('css/components.css', 'utf8');

// Remove dynamicAutoScroll from wa-message-wrapper
css = css.replace(/animation:\s*dynamicAutoScroll\s+42s[^;]+;/g, '');
css = css.replace(/animation:\s*autoScrollChat\s+20s[^;]+;/g, '');

// Allow scroll in wa-chat-body
css = css.replace(/\.wa-chat-body\s*\{[^}]+\}/, match => {
    return match.replace(/overflow-y:\s*hidden;/, 'overflow-y: auto; scroll-behavior: smooth;\n  scrollbar-width: none; /* Firefox */')
});
css = css.replace(/\.wa-chat-body\s*\{[^}]+\}/, match => {
    return match.replace(/overflow:\s*hidden;/, 'overflow: auto; scroll-behavior: smooth;\n  scrollbar-width: none; /* Firefox */')
});

// Hide scrollbar for wa-chat-body webkit
if (!css.includes('.wa-chat-body::-webkit-scrollbar')) {
    css += '\n.wa-chat-body::-webkit-scrollbar {\n  display: none;\n}\n';
}

// Remove the global fade reset
css = css.replace(/,\s*globalFadeReset\s*42s[^;]+/g, '');

fs.writeFileSync('css/components.css', css);

console.log("Updated HTML and CSS");
