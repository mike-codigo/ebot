const fs = require('fs');

let indexHTML = fs.readFileSync('index.html', 'utf8');

const productsSection = `
    <!-- PRODUCTS / PRICING -->
    <section class="section section-gray bg-grid-pattern">
      <div class="container">
        <div class="text-center reveal" style="margin-bottom: var(--space-xl);">
          <h2 class="h2" style="margin-bottom: 1rem;">Nosso Ecossistema</h2>
          <p class="body-large">Escolha a solução ideal para transformar seu negócio</p>
        </div>

        <div class="grid grid-2">
          <!-- Produto 1 (API) -->
          <div class="glass-card reveal stagger-1 float-hover" style="display: flex; flex-direction: column; border-color: rgba(142, 68, 173, 0.3);">
            <div style="font-size: 2rem; margin-bottom: 0.5rem; color: #8e44ad;">🔌</div>
            <h3 class="h3" style="margin-bottom: 0.5rem;">Ê-Bot API</h3>
            <p class="text-small" style="color: var(--text-body); margin-bottom: 1.5rem;">Mensageria e Disparos Transacionais</p>
            <ul class="checklist text-small" style="margin-bottom: 2rem; flex: 1;">
              <li>Disparos automáticos via WhatsApp</li>
              <li>Lembretes e cobranças automáticas</li>
              <li>Integração via Webhooks</li>
            </ul>
            <a href="ebot-api.html" class="btn btn-outline" style="width: 100%; border-color: #8e44ad; color: #8e44ad;">Ver detalhes da API</a>
          </div>
          
          <!-- Produto 2 (Painel) -->
          <div class="glass-card reveal stagger-2 float-hover" style="display: flex; flex-direction: column; border-color: rgba(39, 174, 96, 0.3);">
            <div style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--primary);">👥</div>
            <h3 class="h3" style="margin-bottom: 0.5rem;">Ê-Bot Painel</h3>
            <p class="text-small" style="color: var(--text-body); margin-bottom: 1.5rem;">Central operacional de atendimento, vendas e CRM</p>
            <ul class="checklist text-small" style="margin-bottom: 2rem; flex: 1;">
              <li>Multiusuários e múltiplas filas</li>
              <li>CRM e histórico completo</li>
              <li>Atendimento humano + automação IA</li>
            </ul>
            <a href="ebot-painel.html" class="btn btn-primary" style="width: 100%;">Ver detalhes do Painel</a>
          </div>

          <!-- Produto 3 (Clinical) -->
          <div class="glass-card reveal stagger-3 float-hover" style="display: flex; flex-direction: column; border-color: rgba(43, 159, 232, 0.4); position: relative;">
            <div style="position: absolute; top: -12px; right: 20px; background: var(--secondary); color: white; padding: 0.25rem 1rem; border-radius: 20px; font-size: 0.7rem; font-weight: 700;">MAIS POPULAR</div>
            <div style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--secondary);">🏥</div>
            <h3 class="h3 text-secondary" style="margin-bottom: 0.5rem;">Ê-Clinical</h3>
            <p class="text-small" style="color: var(--text-body); margin-bottom: 1.5rem;">Especializada para o setor de saúde</p>
            <ul class="checklist text-small" style="margin-bottom: 2rem; flex: 1;">
              <li>Agendamentos Inteligentes</li>
              <li>Redução de faltas (No-show)</li>
              <li>Pesquisa de Medicamentos por Foto</li>
            </ul>
            <a href="e-clinical.html" class="btn btn-primary" style="width: 100%; background: var(--secondary); border-color: var(--secondary);">Ver detalhes do Clinical</a>
          </div>

          <!-- Produto 4 (Explorer) -->
          <div class="glass-card reveal stagger-4 float-hover" style="display: flex; flex-direction: column; border-color: rgba(243, 156, 18, 0.3);">
            <div style="font-size: 2rem; margin-bottom: 0.5rem; color: #f39c12;">🌍</div>
            <h3 class="h3" style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">Ê-Bot Explorer <span style="font-size: 0.6rem; font-weight: 600; background: rgba(243,156,18,0.1); color: #f39c12; padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(243,156,18,0.3);">Em desenvolvimento</span></h3>
            <p class="text-small" style="color: var(--text-body); margin-bottom: 1.5rem;">Atendimento Inteligente ao Turista</p>
            <ul class="checklist text-small" style="margin-bottom: 2rem; flex: 1;">
              <li>IA especialista em turismo local</li>
              <li>Totem interativo por conversa</li>
              <li>Acesso rápido via QR Code</li>
            </ul>
            <a href="ebot-explorer.html" class="btn btn-outline" style="width: 100%; border-color: #f39c12; color: #f39c12;">Ver detalhes do Explorer</a>
          </div>
        </div>
      </div>
    </section>`;

// Replace the entire old products section
indexHTML = indexHTML.replace(/<!-- PRODUCTS \/ PRICING -->[\s\S]*?<!-- AWARDS -->/, productsSection + '\n\n    <!-- AWARDS -->');

fs.writeFileSync('index.html', indexHTML);
console.log("Seção de produtos da Home atualizada com sucesso!");
