const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Correção 1: Celular do Hero vazando mensagens.
// Garantir que a área de scroll (display flex) tenha overflow oculto e scrolavel se necessário.
html = html.replace(
  /<div style="flex: 1; padding: 1rem; display: flex; flex-direction: column; gap: 0\.75rem; overflow: hidden;">/g,
  `<div style="flex: 1; padding: 1rem; display: flex; flex-direction: column; gap: 0.75rem; overflow-y: hidden; overflow-x: hidden; scrollbar-width: none;">`
);

// Correção do tamanho da fonte e paddings para caber perfeitamente
html = html.replace(/<div class="chat-bubble chat-bubble-1"([^>]*)>Olá! Como posso ajudar você hoje\?<\/div>/g, 
  `<div class="chat-bubble chat-bubble-1"$1 style="background: white; padding: 0.6rem; border-radius: 12px; border-bottom-left-radius: 4px; align-self: flex-start; max-width: 90%; box-shadow: 0 4px 12px rgba(0,0,0,0.06); font-size: 0.8rem;">Olá! Como posso ajudar você hoje?</div>`
);
html = html.replace(/<div class="chat-bubble chat-bubble-2"([^>]*)>Gostaria de agendar uma consulta\.<\/div>/g, 
  `<div class="chat-bubble chat-bubble-2"$1 style="background: var(--primary-light); padding: 0.6rem; border-radius: 12px; border-bottom-right-radius: 4px; align-self: flex-end; max-width: 90%; font-size: 0.8rem; border: 1px solid rgba(39, 174, 96, 0.2);">Gostaria de agendar uma consulta.</div>`
);
html = html.replace(/<div class="chat-bubble chat-bubble-3"([^>]*)>Claro! Para qual especialidade você deseja agendar\?<\/div>/g, 
  `<div class="chat-bubble chat-bubble-3"$1 style="background: white; padding: 0.6rem; border-radius: 12px; border-bottom-left-radius: 4px; align-self: flex-start; max-width: 90%; box-shadow: 0 4px 12px rgba(0,0,0,0.06); font-size: 0.8rem;">Para qual especialidade seria?</div>`
);

// Correção 2: Feature 2 quebrou as divs (Tinha divs sobrando)
const brokenFeatureString = `<div class="chat-bubble chat-bubble-3" style="background: var(--primary-light); padding: 0.875rem; border-radius: 16px; border-bottom-right-radius: 4px; align-self: flex-end; width: 85%; font-size: 0.875rem; color: var(--dark); border: 1px solid rgba(39, 174, 96, 0.2);">Cerca de 5.000 chats.</div>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>

      </div>
    </section>`;

const fixedFeatureString = `<div class="chat-bubble chat-bubble-3" style="background: var(--primary-light); padding: 0.875rem; border-radius: 16px; border-bottom-right-radius: 4px; align-self: flex-end; width: 85%; font-size: 0.875rem; color: var(--dark); border: 1px solid rgba(39, 174, 96, 0.2);">Cerca de 5.000 chats.</div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>`;

html = html.replace(brokenFeatureString, fixedFeatureString);

fs.writeFileSync('index.html', html);
console.log("Index.html corrigido");
