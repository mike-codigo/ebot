const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The garbage leftover for DASHBOARD:
const dashGarbage = `      <div style="display: flex; gap: 1rem;">
        <div class="dash-skeleton" style="flex: 1; height: 80px; background: var(--primary-light); border-radius: 12px; border: 1px solid rgba(39,174,96,0.1);"></div>
        <div class="dash-skeleton" style="flex: 1; height: 80px; background: #f8fafc; border-radius: 12px;"></div>
        <div class="dash-skeleton" style="flex: 1; height: 80px; background: #f8fafc; border-radius: 12px;"></div>
      </div>
      <div class="dash-skeleton" style="width: 100%; flex: 1; background: #f8fafc; border-radius: 12px;"></div>
    </div>
  </div>`;

html = html.replace(dashGarbage, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed dash garbage.');
