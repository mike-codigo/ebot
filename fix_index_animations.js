const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace the Hero Phone Mockup
html = html.replace(
  /<div style="width: 100%; height: 100%; background: #f8f9fa; border-radius: 24px; overflow: hidden; display: flex; flex-direction: column;">([\s\S]*?)<\/div>/,
  `<div style="width: 100%; height: 100%; background: #f8f9fa; border-radius: 24px; overflow: hidden; display: flex; flex-direction: column;">
      <div style="padding: 1rem; background: var(--primary); color: white; text-align: center; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 0.5rem; box-shadow: 0 4px 12px rgba(39,174,96,0.3); z-index: 10;">
        <img src="assets/images/ebot_icon.avif" alt="Ê-Bot" style="height: 24px; width: auto; filter: brightness(0) invert(1);"> Ê-Bot Atendimento
      </div>
      <div style="flex: 1; padding: 1rem; display: flex; flex-direction: column; gap: 0.75rem; overflow: hidden;">
        <div class="chat-bubble chat-bubble-1" style="background: white; padding: 0.75rem; border-radius: 16px; border-bottom-left-radius: 4px; align-self: flex-start; max-width: 85%; box-shadow: 0 4px 12px rgba(0,0,0,0.06); font-size: 0.875rem;">Olá! Como posso ajudar você hoje?</div>
        
        <div class="chat-bubble chat-bubble-2" style="background: var(--primary-light); padding: 0.75rem; border-radius: 16px; border-bottom-right-radius: 4px; align-self: flex-end; max-width: 85%; font-size: 0.875rem; border: 1px solid rgba(39, 174, 96, 0.2);">Gostaria de agendar uma consulta.</div>
        
        <div class="typing-indicator" style="align-self: flex-start;">
          <span></span><span></span><span></span>
        </div>
        
        <div class="chat-bubble chat-bubble-3" style="background: white; padding: 0.75rem; border-radius: 16px; border-bottom-left-radius: 4px; align-self: flex-start; max-width: 85%; box-shadow: 0 4px 12px rgba(0,0,0,0.06); font-size: 0.875rem;">Claro! Para qual especialidade você deseja agendar?</div>
      </div>
    </div>`
);

// Replace the Feature 1 Mockup (Dashboard skeleton)
html = html.replace(
  /<div class="glass-card" style="height: 400px; background: #f0f4f8; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">[\s\S]*?<\/div>/,
  `<div class="glass-card float-hover" style="height: 400px; background: linear-gradient(135deg, #f0f4f8, #e2e8f0); display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; border-color: rgba(39, 174, 96, 0.2);">
    <div style="width: 80%; height: 75%; background: white; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.08); padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 0.5rem;">
        <div class="dash-skeleton" style="width: 48px; height: 48px; border-radius: 50%; background: #e2e8f0;"></div>
        <div style="flex: 1;">
          <div class="dash-skeleton" style="width: 40%; height: 16px; background: #e2e8f0; border-radius: 4px; margin-bottom: 6px;"></div>
          <div class="dash-skeleton" style="width: 25%; height: 12px; background: #f1f5f9; border-radius: 4px;"></div>
        </div>
      </div>
      <div style="display: flex; gap: 1rem;">
        <div class="dash-skeleton" style="flex: 1; height: 80px; background: var(--primary-light); border-radius: 12px; border: 1px solid rgba(39,174,96,0.1);"></div>
        <div class="dash-skeleton" style="flex: 1; height: 80px; background: #f8fafc; border-radius: 12px;"></div>
        <div class="dash-skeleton" style="flex: 1; height: 80px; background: #f8fafc; border-radius: 12px;"></div>
      </div>
      <div class="dash-skeleton" style="width: 100%; flex: 1; background: #f8fafc; border-radius: 12px;"></div>
    </div>
  </div>`
);

// Replace the Feature 2 Mockup (Chat system)
html = html.replace(
  /<div class="glass-card" style="order: 1; height: 400px; background: #f0f4f8; display: flex; align-items: center; justify-content: center; position: relative;">[\s\S]*?<\/div>\s*<\/div>/,
  `<div class="glass-card float-hover" style="order: 1; height: 400px; background: linear-gradient(135deg, #f0f4f8, #e2e8f0); display: flex; align-items: center; justify-content: center; position: relative; border-color: rgba(39, 174, 96, 0.2);">
    <div style="width: 65%; height: 85%; background: white; border-radius: 20px; box-shadow: 0 24px 48px rgba(0,0,0,0.1); display: flex; flex-direction: column; overflow: hidden;">
      <div style="background: var(--dark-header); color: white; padding: 1rem; font-size: 0.875rem; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
        <span>Atendimento AI</span>
        <span style="width: 8px; height: 8px; border-radius: 50%; background: #2ecc71; box-shadow: 0 0 8px #2ecc71;"></span>
      </div>
      <div style="flex: 1; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; background: #fafafa;">
        <div class="chat-bubble chat-bubble-1" style="background: var(--primary-light); padding: 0.875rem; border-radius: 16px; border-bottom-right-radius: 4px; align-self: flex-end; width: 85%; font-size: 0.875rem; color: var(--dark); border: 1px solid rgba(39, 174, 96, 0.2);">Quero um orçamento de automação.</div>
        <div class="typing-indicator" style="align-self: flex-start;"><span></span><span></span><span></span></div>
        <div class="chat-bubble chat-bubble-2" style="background: white; padding: 0.875rem; border-radius: 16px; border-bottom-left-radius: 4px; align-self: flex-start; width: 85%; font-size: 0.875rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">Ótimo! Para passarmos os valores com precisão, qual é o seu volume atual de atendimentos por mês?</div>
        <div class="chat-bubble chat-bubble-3" style="background: var(--primary-light); padding: 0.875rem; border-radius: 16px; border-bottom-right-radius: 4px; align-self: flex-end; width: 85%; font-size: 0.875rem; color: var(--dark); border: 1px solid rgba(39, 174, 96, 0.2);">Cerca de 5.000 chats.</div>
      </div>
    </div>
  </div>
</div>`
);

fs.writeFileSync('index.html', html);
console.log("Index mockups updated!");
