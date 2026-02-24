const fs = require('fs');

let css = fs.readFileSync('css/ecosystem.css', 'utf8');

// The e-bot green is var(--primary) which is usually #88a72f
// Let's use a nice bright orange that complements it perfectly: #FF6B00 or #FF8C00
css = css.replace('.badge-orange { background: #E67E22; color: #fff; border: 1px solid rgba(255, 255, 255, 0.2); } /* Orange that matches the e-bot green well */', 
'.badge-orange { background: #FF7B00; color: #fff; border: 1px solid rgba(255, 123, 0, 0.5); font-weight: 800; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(255, 123, 0, 0.3); }');

fs.writeFileSync('css/ecosystem.css', css, 'utf8');
