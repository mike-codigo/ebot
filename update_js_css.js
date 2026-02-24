const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

// Ensure classes exist
if (!css.includes('.show-bubble')) {
    css += `
.show-bubble {
  animation: bubblePopIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards !important;
  pointer-events: auto !important;
}
.show-typing-anim {
  animation: showTypingAnim 0.3s forwards !important;
}
.hide-typing-anim {
  animation: hideTypingAnim 0.3s forwards !important;
}

@keyframes showTypingAnim { 
  0% { opacity: 0; transform: translateY(10px); } 
  100% { opacity: 1; transform: translateY(0); } 
}
@keyframes hideTypingAnim { 
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); display: none; margin: 0; padding: 0; height: 0; } 
}

/* Reset .wa-message-wrapper to just be a flex container */
.wa-message-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  transition: opacity 0.5s ease;
}
`;
}

// Clean any leftover animations on wa-message-wrapper
css = css.replace(/animation:\s*dynamicAutoScroll\s+[^;]+;\s*animation:\s*globalFadeReset\s+[^;]+;/, '');

fs.writeFileSync('css/components.css', css);

console.log("Updated CSS with dynamic classes");
