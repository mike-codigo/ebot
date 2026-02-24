const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

if (!html.includes('class="glass-play-btn"')) {
    // maybe need to manually inject if regex failed in some places
}

