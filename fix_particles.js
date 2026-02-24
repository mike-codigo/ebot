const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove the old static SVG dotted lines
const oldLinesRegex = /<svg width="600" height="600"[^>]*>[\s\S]*?<\/svg>/;
html = html.replace(oldLinesRegex, '');

// 2. Add the new CSS animation for the dynamic particles
const newCSS = `
  /* Dynamic Particles from Icons */
  .dynamic-particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #87a630;
    border-radius: 50%;
    box-shadow: 0 0 10px #87a630, 0 0 20px #87a630;
    z-index: 15;
    pointer-events: none;
    animation: pulse-particle 1s infinite alternate, move-to-center var(--duration, 2s) cubic-bezier(0.25, 1, 0.5, 1) forwards;
  }
  @keyframes pulse-particle {
    0% { transform: scale(0.8); opacity: 0.8; }
    100% { transform: scale(1.5); opacity: 1; }
  }
  @keyframes move-to-center {
    0% { 
      left: var(--start-x); 
      top: var(--start-y); 
      opacity: 0;
    }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { 
      left: 50%; 
      top: 50%; 
      opacity: 0; 
      transform: scale(0);
    }
  }
`;

// Insert the new CSS into the <head>
if (html.includes('/* 2. Dotted neon lines for orbit container */')) {
  html = html.replace('/* 2. Dotted neon lines for orbit container */', newCSS + '\n  /* 2. Dotted neon lines for orbit container */');
} else {
  html = html.replace('</style>', newCSS + '\n</style>');
}

// 3. Add the JS logic to spawn particles dynamically at the end of the <body>
const jsScript = `
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const orbitContainer = document.querySelector('.orbit-container');
    if (!orbitContainer) return;

    const icons = orbitContainer.querySelectorAll('.orbit-icon');
    if (icons.length === 0) return;

    function spawnParticle() {
      // Pick a random icon
      const randomIconIndex = Math.floor(Math.random() * icons.length);
      const icon = icons[randomIconIndex];
      
      // Get the current computed style (specifically transform) to find its position
      // The icons are rotated using CSS animation, but we can also get their bounding rect
      const iconRect = icon.getBoundingClientRect();
      const containerRect = orbitContainer.getBoundingClientRect();
      
      // Calculate position relative to the container
      const startX = iconRect.left - containerRect.left + (iconRect.width / 2);
      const startY = iconRect.top - containerRect.top + (iconRect.height / 2);

      const particle = document.createElement('div');
      particle.className = 'dynamic-particle';
      
      // Pass the start coordinates to CSS variables
      particle.style.setProperty('--start-x', \`\${startX}px\`);
      particle.style.setProperty('--start-y', \`\${startY}px\`);
      
      // Randomize the duration slightly
      const duration = 1.5 + Math.random() * 1.5;
      particle.style.setProperty('--duration', \`\${duration}s\`);

      orbitContainer.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode === orbitContainer) {
          orbitContainer.removeChild(particle);
        }
      }, duration * 1000);

      // Schedule next particle (random delay between 400ms and 1500ms)
      setTimeout(spawnParticle, 400 + Math.random() * 1100);
    }

    // Start the spawning process
    setTimeout(spawnParticle, 1000);
  });
</script>
`;

if (!html.includes('function spawnParticle()')) {
  html = html.replace('</body>', jsScript + '\n</body>');
}

fs.writeFileSync('index.html', html);
console.log('Dynamic particles logic added.');
