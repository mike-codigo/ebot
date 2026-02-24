const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Include ecosystem.css before </head>
if (!html.includes('css/ecosystem.css')) {
  html = html.replace('</head>', '  <link rel="stylesheet" href="css/ecosystem.css">\n</head>');
}

// Add JS snippet before </body>
const jsSnippet = `
  <!-- ECOSYSTEM SCRIPTS -->
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      // Flashlight effect for ecosystem cards
      const cards = document.querySelectorAll(".glass-liquid-card");
      cards.forEach(card => {
        card.addEventListener("mousemove", function(e) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", \`\${x}px\`);
          card.style.setProperty("--mouse-y", \`\${y}px\`);
        });
      });

      // Interactive iPhone cursor
      const interactiveIphone = document.getElementById("interactive-iphone");
      const customCursor = document.getElementById("iphone-custom-cursor");

      if (interactiveIphone && customCursor) {
        interactiveIphone.addEventListener("mousemove", function(e) {
          const rect = interactiveIphone.getBoundingClientRect();
          const x = e.clientX;
          const y = e.clientY;
          // Apply to the global fixed cursor
          customCursor.style.left = \`\${x}px\`;
          customCursor.style.top = \`\${y}px\`;
          customCursor.style.opacity = "1";
        });

        interactiveIphone.addEventListener("mouseleave", function() {
          customCursor.style.opacity = "0";
        });
        
        // Disable default cursor
        interactiveIphone.style.cursor = "none";
      }
    });
  </script>
`;

if (!html.includes('ECOSYSTEM SCRIPTS')) {
  html = html.replace('</body>', jsSnippet + '\n</body>');
}

fs.writeFileSync('index.html', html);
console.log('Added CSS link and JS snippet to index.html');
