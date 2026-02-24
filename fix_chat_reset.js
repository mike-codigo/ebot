const fs = require('fs');

let cssContent = fs.readFileSync('css/components.css', 'utf8');

const newChatCSS = `
/* MODERN WHATSAPP CHAT LOGIC - LOOP REWRITE */

/* The actual screen area */
.wa-chat-body {
  flex: 1;
  background: #F4F6F5; 
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;
  position: relative;
}

/* The wrapper handles both the scroll and the GLOBAL fade-out at the end of the 42s loop */
.wa-message-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  transform-origin: top;
  animation: dynamicAutoScroll 42s cubic-bezier(0.2, 0.8, 0.2, 1) infinite, globalFadeReset 42s ease-in-out infinite;
}

/* 
   Total sequence is 42 seconds.
   0s -> 34s: Conversation happens.
   34s -> 39s: Freezes so user can read the final message.
   39s -> 40s: Entire wrapper fades to opacity 0.
   40s -> 41s: Wrapper instantly snaps back to translateY(0) while invisible.
   41s -> 42s: Wrapper fades back to opacity 1, ready for the first bubble to pop again.
*/
@keyframes dynamicAutoScroll {
  0%, 15% { transform: translateY(0); } /* Msgs 1, 2, 3 */
  20%, 35% { transform: translateY(-110px); } /* PDF sent */
  40%, 55% { transform: translateY(-300px); } /* Image & text received */
  60%, 75% { transform: translateY(-460px); } /* Map Location received */
  80%, 93% { transform: translateY(-700px); } /* Final interaction + End */
  95%, 100% { transform: translateY(-700px); } /* Hold at bottom while fading out */
}

@keyframes globalFadeReset {
  0%, 39% { opacity: 1; }
  40%, 41.5% { opacity: 0; } /* Disappears completely */
  42% { opacity: 1; } /* Comes back clean for loop */
}

/* Fluid Bubble Animation */
.wa-bubble {
  padding: 0.6rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  max-width: 85%;
  line-height: 1.4;
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  pointer-events: none;
}

/* The precise lifecycle of a bubble */
@keyframes bubblePopIn {
  0% { opacity: 0; transform: translateY(20px) scale(0.95); } 
  10%, 100% { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; } 
}

/* Delay Logic (+3s gap average for reading) */
/* 42s Loop */
.chat-b-1 { animation: bubblePopIn 42s both 0.5s; }
.chat-b-2 { animation: bubblePopIn 42s both 4.5s; }
.chat-b-3 { animation: bubblePopIn 42s both 8.5s; }
.chat-b-4 { animation: bubblePopIn 42s both 13.0s; } /* PDF */
.chat-b-5 { animation: bubblePopIn 42s both 18.0s; } /* Image */
.chat-b-6 { animation: bubblePopIn 42s both 23.0s; } /* Map */
.chat-b-7 { animation: bubblePopIn 42s both 27.5s; } /* Question */
.chat-b-8 { animation: bubblePopIn 42s both 30.5s; } /* User: Sim */
.chat-b-9 { animation: bubblePopIn 42s both 32.5s; } /* End Bot */

/* Button Flash */
@keyframes clickFlash {
  0%, 90% { background: transparent; color: #759226; }
  92% { background: rgba(117,146,38,0.2); transform: scale(0.95); }
  94%, 100% { background: transparent; color: #759226; transform: scale(1); }
}
.auto-click {
  animation: clickFlash 42s both;
  animation-delay: -11.5s; /* Syncs to hit exactly when btn is shown */
}
`;

// Purge the old chat logics safely
cssContent = cssContent.replace(/\/\* MODERN WHATSAPP CHAT LOGIC \*\/[\s\S]*?(?=\.typing-indicator \{)/m, newChatCSS + '\n');
fs.writeFileSync('css/components.css', cssContent);

// --- UPDATE INDEX.HTML TIMINGS ---
let html = fs.readFileSync('index.html', 'utf8');

// I need to update the showTyping and hideTyping animations inside index.html to match the 42s total loop and timing sequences
html = html.replace(/animation: showTyping 36s both 1\.5s, hideTyping 36s both 4\.5s;/g, 'animation: showTyping 42s both 1.5s, hideTyping 42s both 4.5s;');
html = html.replace(/animation: showTyping 36s both 5\.5s, hideTyping 36s both 8\.5s;/g, 'animation: showTyping 42s both 5.5s, hideTyping 42s both 8.5s;');
html = html.replace(/animation: showTyping 36s both 9\.5s, hideTyping 36s both 13\.0s;/g, 'animation: showTyping 42s both 9.5s, hideTyping 42s both 13.0s;');
html = html.replace(/animation: showTyping 36s both 14\.0s, hideTyping 36s both 18\.0s;/g, 'animation: showTyping 42s both 14.0s, hideTyping 42s both 18.0s;');
html = html.replace(/animation: showTyping 36s both 19\.5s, hideTyping 36s both 23\.0s;/g, 'animation: showTyping 42s both 19.5s, hideTyping 42s both 23.0s;');
html = html.replace(/animation: showTyping 36s both 24\.5s, hideTyping 36s both 27\.5s;/g, 'animation: showTyping 42s both 24.5s, hideTyping 42s both 27.5s;');
html = html.replace(/animation: showTyping 36s both 31\.0s, hideTyping 36s both 32\.5s;/g, 'animation: showTyping 42s both 31.0s, hideTyping 42s both 32.5s;');

fs.writeFileSync('index.html', html);

console.log('Scroll global de reset refeito (42 segundos).');
