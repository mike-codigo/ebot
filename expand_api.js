const fs = require('fs');

let apiHTML = fs.readFileSync('ebot-api.html', 'utf8');

const newContentAPI = `
    <!-- THE PROBLEM SECTION -->
    <section class="section section-gray">
      <div class="container reveal">
        <div class="text-center" style="margin-bottom: 4rem; max-width: 800px; margin-inline: auto;">
          <h2 class="h2" style="margin-bottom: 1rem;">O desafio da comunicação manual</h2>
          <p class="body-large" style="color: var(--text-body);">Processos manuais geram atrasos, erros e limitam a escala da sua empresa. Ligar para cada cliente, enviar mensagens um a um ou lidar com planilhas não é mais sustentável.</p>
        </div>
        
        <div class="grid grid-3">
          <div class="glass-card float-hover" style="border-top: 4px solid #e74c3c;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">📉</div>
            <h3 class="h3" style="font-size: 1.25rem; margin-bottom: 0.5rem;">Limitação de Escala</h3>
            <p class="text-small">Equipes sobrecarregadas não conseguem acompanhar o crescimento no volume de atendimento e cobranças.</p>
          </div>
          <div class="glass-card float-hover" style="border-top: 4px solid #f1c40f;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">⏳</div>
            <h3 class="h3" style="font-size: 1.25rem; margin-bottom: 0.5rem;">Tempo de Resposta Alto</h3>
            <p class="text-small">Falta de automação significa que o cliente espera muito tempo por uma resposta transacional simples.</p>
          </div>
          <div class="glass-card float-hover" style="border-top: 4px solid #3498db;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">🧩</div>
            <h3 class="h3" style="font-size: 1.25rem; margin-bottom: 0.5rem;">Sistemas Desconectados</h3>
            <p class="text-small">O ERP e o CRM não conversam com o WhatsApp, gerando retrabalho na atualização de status e históricos.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES & BENEFITS -->
    <section class="section section-light">
      <div class="container reveal">
        <div class="grid grid-2 items-center" style="gap: 4rem;">
          <div style="order: 2;">
            <h2 class="h2" style="margin-bottom: 1.5rem;">Infraestrutura robusta para o seu sistema</h2>
            <p class="body-large" style="margin-bottom: 2rem; color: var(--text-body);">Nossa API RESTful foi desenhada para desenvolvedores. Conecte seu sistema legado em poucas horas e passe a disparar mensagens, boletos e notificações automaticamente.</p>
            
            <div class="flex flex-col gap-md">
              <div class="glass-card" style="padding: 1.5rem; display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 40px; height: 40px; background: var(--primary-light); color: var(--primary); border-radius: 8px; display: flex; justify-content: center; align-items: center; font-weight: bold; flex-shrink: 0;">✓</div>
                <div>
                  <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Alta Entregabilidade</h4>
                  <p class="text-small text-body">Garantia de entrega em massa para campanhas e mensagens transacionais urgentes.</p>
                </div>
              </div>
              <div class="glass-card" style="padding: 1.5rem; display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 40px; height: 40px; background: var(--primary-light); color: var(--primary); border-radius: 8px; display: flex; justify-content: center; align-items: center; font-weight: bold; flex-shrink: 0;">⚡</div>
                <div>
                  <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Webhooks em Tempo Real</h4>
                  <p class="text-small text-body">Receba eventos de entrega, leitura e respostas no seu servidor instantaneamente.</p>
                </div>
              </div>
              <div class="glass-card" style="padding: 1.5rem; display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 40px; height: 40px; background: var(--primary-light); color: var(--primary); border-radius: 8px; display: flex; justify-content: center; align-items: center; font-weight: bold; flex-shrink: 0;">🛡️</div>
                <div>
                  <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Meta Oficial e API Proprietária</h4>
                  <p class="text-small text-body">Opere tanto na modalidade oficial da Meta (para máxima segurança) quanto na não oficial, dependendo da sua estratégia.</p>
                </div>
              </div>
            </div>
          </div>

          <div style="order: 1; position: relative;">
            <div class="glass-card float-hover" style="background: #0F1419; color: #fff; border-radius: 16px; overflow: hidden; padding: 0;">
              <!-- Window Controls -->
              <div style="background: #1A1A1A; padding: 0.75rem 1rem; display: flex; gap: 6px; align-items: center;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background: #FF5F56;"></div>
                <div style="width: 12px; height: 12px; border-radius: 50%; background: #FFBD2E;"></div>
                <div style="width: 12px; height: 12px; border-radius: 50%; background: #27C93F;"></div>
                <div style="margin-left: 1rem; font-family: monospace; font-size: 0.8rem; color: #888;">webhook_listener.js</div>
              </div>
              <!-- Code Body -->
              <div style="padding: 2rem; font-family: monospace; font-size: 0.85rem; line-height: 1.6; overflow-x: auto;">
                <span style="color: #F92672;">app</span>.<span style="color: #A6E22E;">post</span>(<span style="color: #E6DB74;">'/webhook/whatsapp'</span>, (<span style="color: #FD971F;">req</span>, <span style="color: #FD971F;">res</span>) <span style="color: #F92672;">=></span> {<br>
                &nbsp;&nbsp;<span style="color: #66D9EF;">const</span> event = req.<span style="color: #FD971F;">body</span>;<br><br>
                &nbsp;&nbsp;<span style="color: #66D9EF;">if</span> (event.type === <span style="color: #E6DB74;">'message.received'</span>) {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;console.<span style="color: #A6E22E;">log</span>(<span style="color: #E6DB74;">\`Nova msg de: \${event.sender}\`</span>);<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #75715E;">// Roteamento inteligente para o ERP...</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #A6E22E;">processMessage</span>(event.payload);<br>
                &nbsp;&nbsp;}<br><br>
                &nbsp;&nbsp;res.<span style="color: #A6E22E;">status</span>(<span style="color: #AE81FF;">200</span>).<span style="color: #A6E22E;">send</span>(<span style="color: #E6DB74;">'Webhook Recebido'</span>);<br>
                });
              </div>
            </div>
            
            <div class="glass-card animate-float" style="position: absolute; bottom: -20px; right: -20px; padding: 1rem; display: flex; align-items: center; gap: 1rem; z-index: 5;">
              <div style="font-size: 2rem; color: #27AE60;">📈</div>
              <div>
                <div style="font-weight: 800; font-size: 1.25rem;">+99.9%</div>
                <div style="font-size: 0.75rem; color: var(--text-body);">Uptime da API</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CALL TO ACTION FINAL -->
    <section class="section section-dark text-center bg-grid-pattern-dark" style="background: linear-gradient(135deg, var(--dark) 0%, #2c3e50 100%);">
      <div class="container reveal">
        <h2 class="h1" style="color: white; margin-bottom: 1rem;">Pronto para plugar e usar?</h2>
        <p class="body-large" style="margin-bottom: 2.5rem; opacity: 0.9; max-width: 600px; margin-inline: auto;">Tenha acesso às credenciais e à documentação completa para integrar a melhor plataforma de envios do mercado ao seu negócio hoje mesmo.</p>
        <button class="trigger-wa-modal btn btn-primary" style="display: in
