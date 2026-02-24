# Ê-Bot / Ê-Sistemas Website

Projeto premium, desenvolvido em HTML5, CSS3 e JavaScript puro com foco absoluto em performance, responsividade e layout "Glassmorphism" profissional.

## 🚀 Setup Inicial

Não é necessário nenhum processo de build (node, webpack, etc).
Para visualizar, basta abrir o `index.html` em qualquer navegador moderno.

### Se estiver usando o VSCode:
1. Instale a extensão **Live Server**.
2. Clique com o botão direito sobre o `index.html` e selecione **Open with Live Server**.

## 🏗 Estrutura do Projeto

- `/css/`: Design System Modular e global. Contém toda estilização com foco no Glassmorphism.
- `/js/`: Lógica separada por responsabilidades (scroll animations, navegação responsiva, animações em gráficos, envio para WhatsApp).
- `/assets/`: (Diretório pronto para receber imagens finais, ícones e PDF).
- `*.html`: Todas as 6 páginas desenvolvidas e traduzidas com o PDF base:
  - `index.html`: Landing Page / Home Premium.
  - `produtos.html`: Explicativo dos produtos da Ê-Sistemas (API, Painel, etc).
  - `e-clinical.html`: Landing Page focada na área da saúde.
  - `privacidade.html`: Termos, LGPD e acordeão completo.
  - `sobre.html`: História, Sebrae PR, Imersões e Timeline.
  - `contato.html`: Integração com API do WhatsApp e OpenStreetMap (Leaflet.js).

## ✨ Funcionalidades JavaScript

- **WhatsApp API:** O formulário de contato processa os dados nativamente no JS e gera o encoded URI string (`wa.me`) e abre em nova guia na hora do clique.
- **Scroll Observer:** `IntersectionObserver` utilizado para garantir performance em 60fps na contagem dos números (CounterUp) e nos carregamentos (fade-in).
- **Parallax Orbital:** A área de "Integrações" do Hub na Home gira via "Web Animations API", processada diretamente pela GPU (sem gargalo na main thread).
- **Mapas Sem Chave de API:** Utilizada a biblioteca Open Source Leaflet.js juntamente com CartoDB (Tiles), gratuito e sem limites.

## 🌐 Suporte e Compatibilidade
- Chrome 90+, Firefox 88+, Safari 14+
- 100% Responsivo (Mobile First e fluído para telas Ultra-wide).

Desenvolvido exclusivamente para a **Ê-Sistemas © 2024-2025**.