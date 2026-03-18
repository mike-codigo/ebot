const fs = require('fs');
let content = fs.readFileSync('js/chat-widget.js', 'utf8');

const additionalStyles = `
    .chat-section {
      position: relative;
    }
    .chat-bg-grid {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
      z-index: 0;
      pointer-events: none;
    }
    .chat-flashlight {
      position: absolute;
      top: -50%; left: -50%; width: 200%; height: 200%;
      background: radial-gradient(circle at center, rgba(136, 167, 47, 0.12) 0%, transparent 40%),
                  radial-gradient(circle at 80% 80%, rgba(43, 159, 232, 0.08) 0%, transparent 35%);
      animation: flashlightWave 12s ease-in-out infinite alternate;
      z-index: 1;
      opacity: 0.8;
      pointer-events: none;
      mix-blend-mode: multiply;
    }
    
    /* Cores específicas baseadas na classe .chat-api, .chat-clinical, .chat-explorer */
    .chat-clinical .chat-flashlight {
      background: radial-gradient(circle at center, rgba(43, 159, 232, 0.12) 0%, transparent 40%),
                  radial-gradient(circle at 80% 80%, rgba(136, 167, 47, 0.08) 0%, transparent 35%);
    }
    .chat-explorer .chat-flashlight {
      background: radial-gradient(circle at center, rgba(255, 187, 0, 0.1) 0%, transparent 40%),
                  radial-gradient(circle at 80% 80%, rgba(136, 167, 47, 0.08) 0%, transparent 35%);
    }

    @keyframes flashlightWave {
      0% { transform: translate(0%, 0%) scale(1); }
      50% { transform: translate(15%, 20%) scale(1.2); }
      100% { transform: translate(-10%, -5%) scale(0.9); }
    }
    .chat-container {
      position: relative;
      z-index: 2;
    }
`;

content = content.replace('document.head.appendChild(style);', additionalStyles + '\n    document.head.appendChild(style);');
fs.writeFileSync('js/chat-widget.js', content);
