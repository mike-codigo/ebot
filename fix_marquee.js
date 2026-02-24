const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// The CSS we want to inject
const marqueeCSS = `
  /* Infinite Marquee */
  .marquee-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 1rem 0;
    display: flex;
    background: transparent;
  }
  .marquee-container::before,
  .marquee-container::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 15vw;
    max-width: 200px;
    z-index: 2;
    pointer-events: none;
  }
  .marquee-container::before {
    left: 0;
    background: linear-gradient(to right, #F5F5F5 0%, rgba(245,245,245,0) 100%);
  }
  .marquee-container::after {
    right: 0;
    background: linear-gradient(to left, #F5F5F5 0%, rgba(245,245,245,0) 100%);
  }
  .marquee-track {
    display: flex;
    width: max-content;
    animation: scroll-marquee 40s linear infinite;
  }
  .marquee-track:hover {
    animation-play-state: paused;
  }
  .marquee-items {
    display: flex;
    gap: 5rem;
    padding-right: 5rem; /* Gap at the end to match */
    align-items: center;
  }
  .marquee-items img {
    height: 40px;
    max-width: 180px;
    object-fit: contain;
    filter: grayscale(100%) opacity(0.5);
    transition: filter 0.3s ease;
  }
  .marquee-items img:hover {
    filter: grayscale(0%) opacity(1);
  }
  @keyframes scroll-marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
`;

if (!html.includes('.marquee-container')) {
  html = html.replace('</style>', marqueeCSS + '\n</style>');
}

// The old section regex
const oldSectionRegex = /<section class="section section-gray" style="padding: 3rem 0; border-top: 1px solid var\(--border-subtle\); border-bottom: 1px solid var\(--border-subtle\);">\s*<div class="container text-center reveal">\s*<p class="text-micro"[^>]*>Empresas e Parceiros que confiam na Ê-Bot<\/p>\s*<div class="flex justify-center items-center gap-xl" style="flex-wrap: wrap; filter: grayscale\(100%\); opacity: 0\.6; transition: all 0\.3s;">\s*<h3[^>]*>SEBRAE<\/h3>\s*<h3[^>]*>AMBAR<span[^>]*>bank<\/span><\/h3>\s*<h3[^>]*>VORAZ<\/h3>\s*<h3[^>]*>Vaggou<\/h3>\s*<h3[^>]*>Si9<\/h3>\s*<h3[^>]*>Ellon<\/h3>\s*<\/div>\s*<\/div>\s*<\/section>/;

const newSection = `<section class="section section-gray" style="padding: 4rem 0; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); overflow: hidden; width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw;">
      <div class="text-center reveal" style="width: 100%;">
        <p class="text-micro" style="margin-bottom: 2.5rem; color: var(--text-body);">Empresas e Parceiros que confiam na Ê-Bot</p>
        
        <div class="marquee-container">
          <div class="marquee-track">
            
            <!-- First Set -->
            <div class="marquee-items">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_Sebrae.svg" alt="Sebrae">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Zendesk_logo.svg" alt="Zendesk">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Intercom_logo.svg" alt="Intercom">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" alt="HubSpot">
            </div>

            <!-- Second Set (Duplicate for Infinite Scroll) -->
            <div class="marquee-items" aria-hidden="true">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_Sebrae.svg" alt="Sebrae">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Zendesk_logo.svg" alt="Zendesk">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Intercom_logo.svg" alt="Intercom">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" alt="HubSpot">
            </div>

          </div>
        </div>
      </div>
    </section>`;

if (html.match(oldSectionRegex)) {
  html = html.replace(oldSectionRegex, newSection);
  console.log('Successfully replaced old section');
} else {
  console.log('Could not find old section matching regex');
  
  // Try simpler replacement
  const simplerRegex = /<section[^>]*>\s*<div[^>]*>\s*<p[^>]*>Empresas e Parceiros que confiam na Ê-Bot<\/p>[\s\S]*?<\/section>/;
  if(html.match(simplerRegex)) {
      html = html.replace(simplerRegex, newSection);
      console.log('Successfully replaced with simpler regex');
  } else {
      console.log('Failed even with simpler regex.');
  }
}

fs.writeFileSync('index.html', html);
