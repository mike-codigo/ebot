const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Testimonial 1
html = html.replace(
  '<div class="text-small" style="opacity: 0.7;">Gestor Hospitalar</div>',
  '<div class="text-small" style="opacity: 0.7;">Gestor Hospitalar</div><div class="text-small" style="color: var(--primary); font-weight: 600; font-size: 0.8rem; margin-top: 0.2rem;">Hospital São Lucas • Saúde</div>'
);

// Testimonial 2
html = html.replace(
  '<div class="text-small" style="opacity: 0.7;">CTO</div>',
  '<div class="text-small" style="opacity: 0.7;">CTO</div><div class="text-small" style="color: var(--primary); font-weight: 600; font-size: 0.8rem; margin-top: 0.2rem;">TechSolutions • Tecnologia</div>'
);

// Testimonial 3
html = html.replace(
  '<div class="text-small" style="opacity: 0.7;">Coordenador de CX</div>',
  '<div class="text-small" style="opacity: 0.7;">Coordenador de CX</div><div class="text-small" style="color: var(--primary); font-weight: 600; font-size: 0.8rem; margin-top: 0.2rem;">Varejo Rápido • E-commerce</div>'
);

// Testimonial 4
html = html.replace(
  '<div class="text-small" style="opacity: 0.7;">Diretor de Inovação</div>',
  '<div class="text-small" style="opacity: 0.7;">Diretor de Inovação</div><div class="text-small" style="color: var(--primary); font-weight: 600; font-size: 0.8rem; margin-top: 0.2rem;">Grupo Inova • Logística</div>'
);

fs.writeFileSync('index.html', html);
console.log('Testimonials updated in index.html');
