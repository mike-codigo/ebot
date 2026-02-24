const fs = require('fs');

let cssContent = fs.readFileSync('css/components.css', 'utf8');

// The ultimate chat simulation CSS
const advancedChatCSS = `
/* MODERN WHATSAPP CHAT LOGIC */

/* The actual screen area */
.wa-chat-body {
  flex: 1;
  background: #F4F6F5; 
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden; /* Absolutely no real scrollbars */
  position: relative;
}

/* The wrapper that will be animated upwards */
/* Using a perfectly calculated translateY based on total height needed */
.wa-message-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  animation: dynamicAutoScroll 36s ease-in-out infinite;
  transform-origin: top;
}

/* 
   Total sequence is 36 seconds.
   Pushing happens AFTER the new element arrives to give a real "push up" feel.
*/
@keyframes dynamicAutoScroll {
  0%, 15% { transform: translateY(0); } /* Msgs 1, 2, 3 */
  20%, 35% { transform: translateY(-110px); } /* PDF sent */
  40%, 55% { transform: translateY(-290px); } /* Image & text received */
  60%, 75% { transform: translateY(-460px); } /* Map Location received */
  80%, 93% { transform: translateY(-680px); } /* Final interaction + End */
  97%, 100% { transform: translateY(0); } /* Reset cleanly */
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
@keyframes bubbleLifecycle {
  0% { opacity: 0; transform: translateY(20px) scale(0.95); } /* Hidden start */
  2%, 93% { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; } /* Popped up and visible */
  97%, 100% { opacity: 0; transform: translateY(-10px) scale(0.95); pointer-events: none; } /* Fade out before reset */
}

/* Delay Logic (+3s gap average for reading) */
/* 36s Loop */
.chat-b-1 { animation: bubbleLifecycle 36s both 0.5s; }
.chat-b-2 { animation: bubbleLifecycle 36s both 4.5s; }
.chat-b-3 { animation: bubbleLifecycle 36s both 8.5s; }
.chat-b-4 { animation: bubbleLifecycle 36s both 13.0s; } /* PDF */
.chat-b-5 { animation: bubbleLifecycle 36s both 18.0s; } /* Image */
.chat-b-6 { animation: bubbleLifecycle 36s both 23.0s; } /* Map */
.chat-b-7 { animation: bubbleLifecycle 36s both 27.5s; } /* Question */
.chat-b-8 { animation: bubbleLifecycle 36s both 30.5s; } /* User: Sim */
.chat-b-9 { animation: bubbleLifecycle 36s both 32.5s; } /* End Bot */

/* Button Flash */
@keyframes clickFlash {
  0%, 90% { background: transparent; color: #759226; }
  92% { background: rgba(117,146,38,0.2); transform: scale(0.95); }
  94%, 100% { background: transparent; color: #759226; transform: scale(1); }
}
.auto-click {
  animation: clickFlash 36s both;
  animation-delay: -7.5s; /* Syncs to 28.5s internally */
}
`;

// Purge the old broken logic
cssContent = cssContent.replace(/\/\* Chat Auto-Scroll Animation \(Perfected\) \*\/[\s\S]*?(?=\/\* DATA PARTICLES)/m, advancedChatCSS + '\n');
fs.writeFileSync('css/components.css', cssContent);

// Clear out iphone-styles.css just so there are no duplicates since we bundled everything cleanly into components.css
fs.writeFileSync('css/iphone-styles.css', '');

console.log("CSS animations wiped, rewritten with Lifecycle Opacity Drops, and long-timing reading gaps!");

