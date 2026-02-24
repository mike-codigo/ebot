const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

// I need to ensure the typing keyframes exist properly in the CSS 
// since we overwrote the typing-indicator before
const typingKeyframes = `
.typing-indicator {
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 0.5rem 0.75rem;
  background: white;
  border-radius: 12px;
  border-bottom-left-radius: 2px;
  width: fit-content;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  opacity: 0;
  pointer-events: none;
}

.typing-indicator span {
  width: 6px;
  height: 6px;
  background: #3d4945;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}
.typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
.typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

@keyframes showTyping { 
  0% { opacity: 0; transform: translateY(10px); } 
  2%, 98% { opacity: 1; transform: translateY(0); } 
  100% { opacity: 1; transform: translateY(0); } 
}
@keyframes hideTyping { 
  0% { opacity: 1; display: flex; }
  100% { opacity: 0; display: none; margin: 0; padding: 0; height: 0; } 
}
@keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }

.wa-typing-user {
  align-self: flex-end;
  background: transparent;
  padding: 0;
  margin-right: 0.5rem;
  box-shadow: none;
}
.wa-typing-bot {
  align-self: flex-start;
  background: transparent;
  padding: 0;
  margin-left: 0.5rem;
  box-shadow: none;
}
`;

if (!css.includes('keyframes showTyping')) {
    css += '\n' + typingKeyframes;
    fs.writeFileSync('css/components.css', css);
}

console.log("Typing keyframes added properly");
