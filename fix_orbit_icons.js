const fs = require('fs');

let css = fs.readFileSync('css/charts.css', 'utf8');
css = css.replace('.orbit-icon { position: absolute; width: 48px; height: 48px;', '.orbit-icon { position: absolute; width: 80px; height: 80px;');
css = css.replace('.orbit-icon img { width: 24px; height: 24px; }', '.orbit-icon img { width: 45px; height: 45px; object-fit: contain; }');
fs.writeFileSync('css/charts.css', css);

let html = fs.readFileSync('index.html', 'utf8');

const replacements = {
  'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg': 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg': 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hubspot.svg': 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg': 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg': 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zapier.svg': 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg': 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg'
};

for (const [oldSrc, newSrc] of Object.entries(replacements)) {
  html = html.replace(oldSrc, newSrc);
}

fs.writeFileSync('index.html', html);
console.log('Fixed orbit icons size and colors.');
