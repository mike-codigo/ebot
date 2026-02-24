const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove that extra </div> at the end of the features section
// We know it is right after `</div>\n  </div>\n</div>\n  </div>\n</div>\n\n      </div>\n    </section>`
// Let's replace the whole tail safely.
const badTail = `</div>
  </div>
</div>
  </div>
</div>

      </div>
    </section>`;
const goodTail = `</div>
  </div>
</div>
  </div>

      </div>
    </section>`;

if (html.includes(badTail)) {
    html = html.replace(badTail, goodTail);
}

// 2. Replace the background particles
const oldIntegration = `<div class="integration-bg">
    <div class="wpp-icon float-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#87a630"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.28 14.3c-.22.61-1.28 1.15-1.78 1.22-.43.06-1.02.13-3.23-.79-2.66-1.11-4.38-3.83-4.52-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.68-1.95.92-2.22.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.79 1.9.06.13.1.28.01.47-.08.19-.13.31-.26.46-.13.15-.28.33-.39.46-.13.14-.27.29-.12.56.15.26.68 1.13 1.46 1.83.99.9 1.84 1.18 2.1 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.64-.16 1.25z"/></svg>
    </div>
    <div class="ebot-icon float-icon">
      <img src="assets/images/ebot_icon.avif" alt="ebot" style="width: 24px; height: 24px; object-fit: contain;">
    </div>
    
    <svg class="connection-line" viewBox="0 0 200 100" preserveAspectRatio="none">
      <path id="conn-path" d="M 30,20 C 80,10 120,90 170,80" fill="none" stroke="rgba(135, 166, 48, 0.3)" stroke-width="2" stroke-dasharray="5,5" />
      <!-- Partículas de dados -->
      <circle class="data-particle" r="3" fill="#87a630">
        <animateMotion dur="2.5s" repeatCount="indefinite">
          <mpath href="#conn-path"/>
        </animateMotion>
      </circle>
      <circle class="data-particle" r="3" fill="#87a630">
        <animateMotion dur="2.5s" begin="1.2s" repeatCount="indefinite">
          <mpath href="#conn-path"/>
        </animateMotion>
      </circle>
    </svg>
  </div>`;

const newIntegration = `<div class="integration-bg">
    <div class="wpp-icon float-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#87a630"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.28 14.3c-.22.61-1.28 1.15-1.78 1.22-.43.06-1.02.13-3.23-.79-2.66-1.11-4.38-3.83-4.52-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.68-1.95.92-2.22.24-.26.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.79 1.9.06.13.1.28.01.47-.08.19-.13.31-.26.46-.13.15-.28.33-.39.46-.13.14-.27.29-.12.56.15.26.68 1.13 1.46 1.83.99.9 1.84 1.18 2.1 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.64-.16 1.25z"/></svg>
    </div>
    <div class="ebot-icon float-icon">
      <img src="assets/images/ebot_icon.avif" alt="ebot" style="width: 24px; height: 24px; object-fit: contain;">
    </div>
    
    <svg class="connection-line" viewBox="0 0 200 100" preserveAspectRatio="none">
      <path d="M 30,20 C 80,10 120,90 170,80" fill="none" stroke="rgba(135, 166, 48, 0.2)" stroke-width="2" />
      <path d="M 30,20 C 80,10 120,90 170,80" fill="none" stroke="#87a630" stroke-width="2" class="flowing-data" />
    </svg>
  </div>`;

if (html.includes(oldIntegration)) {
    html = html.replace(oldIntegration, newIntegration);
}

// 3. Add CSS for new flowing data line and remove old particle CSS
const oldCss = `.data-particle {
  filter: drop-shadow(0 0 5px #87a630) drop-shadow(0 0 10px #87a630);
}`;

const newCss = `.flowing-data {
  stroke-dasharray: 4, 12;
  animation: flowLine 1.5s linear infinite;
}
@keyframes flowLine {
  from { stroke-dashoffset: 16; }
  to { stroke-dashoffset: 0; }
}`;

if (html.includes(oldCss)) {
    html = html.replace(oldCss, newCss);
} else {
    // se não achar o exato bloco anterior, apenas injetamos
    html = html.replace('</style>', newCss + '\n</style>');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed container divs and connection line animation.');
