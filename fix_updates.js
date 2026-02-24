const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Particle Size Update + Glassmorphism Animation
const oldParticleCSS = /width: 6px;\s*height: 6px;\s*background: #87a630;\s*border-radius: 50%;\s*box-shadow: 0 0 10px #87a630, 0 0 20px #87a630;/;
const newParticleCSS = `width: 8px;
    height: 8px;
    background: #87a630;
    border-radius: 50%;
    box-shadow: 0 0 12px #87a630, 0 0 24px #87a630, 0 0 36px #87a630;`;

if (html.match(oldParticleCSS)) {
    html = html.replace(oldParticleCSS, newParticleCSS);
}

// 2. CSS for Orbit Responsiveness & Glass Play Button
const extraCSS = `
  /* Responsive Orbit */
  .orbit-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    aspect-ratio: 1/1;
    height: auto;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .orbit-ring {
    width: 83.33%; /* 500 / 600 */
    height: 83.33%;
  }

  /* Glass Play Button for iPhone */
  .glass-play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    width: 56px;
    height: 56px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    animation: pulse-glass 2s infinite;
    transition: all 0.3s ease;
  }
  .glass-play-btn:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translate(-50%, -50%) scale(1.1);
  }
  .glass-play-btn svg {
    margin-left: 4px; /* visually center the triangle */
  }
  @keyframes pulse-glass {
    0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
    70% { box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
  }
`;

html = html.replace('</style>', extraCSS + '\n</style>');

// 3. Add Glass Play Button to Ecosystem Center iPhone
// Look for the main iPhone interactive screen
const iphoneScreenRegex = /(<div class="iphone-screen">\s*<video src="assets\/videos\/video_produtos.mp4" autoplay loop muted playsinline class="iphone-video-content"><\/video>\s*)<\/div>/;

if (html.match(iphoneScreenRegex)) {
  const newScreenContent = `$1<div class="glass-play-btn trigger-video-modal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>`;
  html = html.replace(iphoneScreenRegex, newScreenContent);
}

// 4. Update the spawnParticle logic to account for responsive scaling
const oldSpawnLogicRegex = /const startX = iconRect\.left - containerRect\.left \+ \(iconRect\.width \/ 2\);\s*const startY = iconRect\.top - containerRect\.top \+ \(iconRect\.height \/ 2\);/;
const newSpawnLogic = `const scale = containerRect.width / orbitContainer.offsetWidth;
      const startX = (iconRect.left - containerRect.left) / scale + (icon.offsetWidth / 2);
      const startY = (iconRect.top - containerRect.top) / scale + (icon.offsetHeight / 2);`;

if (html.match(oldSpawnLogicRegex)) {
  html = html.replace(oldSpawnLogicRegex, newSpawnLogic);
}

// 5. Tie the play button click to the video modal
const oldEventRegex = /interactiveIphone\.addEventListener\("click", function\(\) {/;
const newEventRegex = `
      // Attach click event to interactiveIphone and play button if exists
      const playBtn = document.querySelector('.glass-play-btn.trigger-video-modal');
      const clickTarget = playBtn ? playBtn : interactiveIphone;
      if (clickTarget) {
        clickTarget.addEventListener("click", function(e) {
          e.stopPropagation();`;

// Wait, the existing code:
// interactiveIphone.addEventListener("click", function() {
// We can just replace that specific line, but be careful with closure.
html = html.replace(/if \(interactiveIphone && videoModal\) {\s*interactiveIphone\.addEventListener\("click", function\(\) {/g, 
  `if (interactiveIphone && videoModal) {
        interactiveIphone.addEventListener("click", function() {`);

// Actually, the easiest way since the video modal already opens when clicking the iPhone container: 
// It works automatically because the play button is INSIDE interactiveIphone!
// Wait, interactiveIphone is the wrapper, so clicking ANYWHERE inside it triggers the modal.
// We don't need to change the JS for the modal, the button just being there is enough.

fs.writeFileSync('index.html', html);
console.log('Update finished.');
