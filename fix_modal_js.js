const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const modalHtml = `
  <!-- ECOSYSTEM VIDEO MODAL -->
  <div class="video-modal-overlay" id="ecosystemVideoModal">
    <button class="video-modal-close" id="closeEcosystemModal">&times;</button>
    <div class="iphone-interactive modal-iphone" style="transform: perspective(1000px) rotateY(0deg); cursor: default;">
      <div class="iphone-device">
        <div class="iphone-notch"></div>
        <div class="iphone-screen">
          <video src="assets/videos/video_produtos.mp4" loop muted playsinline class="iphone-video-content" id="modalVideoPlayer"></video>
        </div>
      </div>
    </div>
  </div>
`;

// Make sure we have the modal in the HTML
if (!html.includes('id="ecosystemVideoModal"')) {
    html = html.replace('</body>', modalHtml + '\n</body>');
} else {
    // If it exists, replace it to ensure it's up to date
    html = html.replace(/<!-- ECOSYSTEM VIDEO MODAL -->[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/, modalHtml);
}

// Ensure the interactive-iphone gets pointer events properly and the cursor doesn't interfere
html = html.replace('customCursor.style.opacity = "1";', 'customCursor.style.opacity = "1";\n          document.body.style.cursor = "none";');
html = html.replace('customCursor.style.opacity = "0";', 'customCursor.style.opacity = "0";\n          document.body.style.cursor = "default";');

fs.writeFileSync('index.html', html);
console.log('Fixed modal JS');
