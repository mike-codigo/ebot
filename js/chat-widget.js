document.addEventListener('DOMContentLoaded', () => {
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');
  const chatCountEl = document.getElementById('chat-count');
  const chatContainer = document.querySelector('.chat-container');
  
  if (!chatInput || !chatSend || !chatMessages || !chatContainer) return;
  
  let interactions = 10;
  let chatHistory = "";
  const systemPrompt = chatContainer.getAttribute('data-system-prompt') || "Você é um assistente útil e amigável. Responda sempre no idioma Português Brasileiro, nunca em outro idioma!";
  const botName = chatContainer.getAttribute('data-bot-name') || "Assistente";

  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function appendMessage(role, text) {
    const msgDiv = document.createElement('div');
    msgDiv.style.display = 'flex';
    msgDiv.style.gap = '0.75rem';
    msgDiv.style.maxWidth = '80%';
    msgDiv.style.marginBottom = '1rem';
    msgDiv.style.animation = 'fadeIn 0.3s ease forwards';
    
    if (role === 'user') {
      msgDiv.style.marginLeft = 'auto';
      msgDiv.style.flexDirection = 'row-reverse';
      msgDiv.innerHTML = `
        <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--dark-header, #2f3835); flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; font-weight: bold;">VC</div>
        <div style="background: var(--primary, #88a72f); color: white; padding: 1rem 1.25rem; border-radius: 16px 0 16px 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); font-size: 0.95rem; line-height: 1.5; word-wrap: break-word;">
          ${escapeHtml(text)}
        </div>
      `;
    } else {
      const botImgSrc = chatContainer.querySelector('img') ? chatContainer.querySelector('img').src : '';
      msgDiv.innerHTML = `
        <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--primary, #88a72f); flex-shrink: 0; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <img src="${botImgSrc}" alt="Icon" style="width: 18px; height: 18px; object-fit: contain;">
        </div>
        <div class="bot-msg-content" style="background: white; padding: 1rem 1.25rem; border-radius: 0 16px 16px 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); font-size: 0.95rem; color: var(--dark, #333); line-height: 1.5; word-wrap: break-word;">
          ${text === 'Pensando...' ? '<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>' : escapeHtml(text)}
        </div>
      `;
    }
    chatMessages.appendChild(msgDiv);
    scrollToBottom();
    return msgDiv;
  }

  function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;")
         .replace(/\n/g, "<br>");
  }

  async function sendMessage() {
    const text = chatInput.value.trim();
    if (!text || interactions <= 0) return;
    
    chatInput.value = '';
    chatInput.disabled = true;
    chatSend.disabled = true;
    
    interactions--;
    chatCountEl.textContent = interactions;
    
    appendMessage('user', text);
    chatHistory += `\nUsuário: ${text}\nAssistente:`;
    
    const botMsgDiv = appendMessage('bot', 'Pensando...');
    const botContentEl = botMsgDiv.querySelector('.bot-msg-content');
    
    try {
      const apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
      const apiKey = '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';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-120b',
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: `Aqui está o histórico da nossa conversa e minha nova mensagem.\n\n${chatHistory}`
            }
          ],
          temperature: 1,
          max_completion_tokens: 8192,
          top_p: 1,
          stream: true,
          reasoning_effort: 'medium',
          stop: null
        })
      });
      
      if (!response.ok) throw new Error('Falha na API: ' + response.statusText);

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      
      let botFullText = "";
      let renderedText = "";
      let streamFinished = false;
      
      // Animação fluida de digitação ("typed")
      const typeInterval = setInterval(() => {
        const targetText = botFullText.replace(/<think>[\s\S]*?(<\/think>|$)/g, '').trimStart();
        
        if (renderedText.length < targetText.length) {
          const diff = targetText.length - renderedText.length;
          let charsToAdd = 1;
          if (diff > 10) charsToAdd = 2;
          if (diff > 30) charsToAdd = 4;
          if (diff > 60) charsToAdd = 8;
          if (diff > 100) charsToAdd = 15;
          
          renderedText = targetText.slice(0, renderedText.length + charsToAdd);
          botContentEl.innerHTML = escapeHtml(renderedText) + '<span class="typing-cursor"></span>';
          scrollToBottom();
        } else if (renderedText.length > targetText.length) {
          // Ajusta caso o texto encolha (ex: tag <think> finalizada e removida)
          renderedText = targetText;
          botContentEl.innerHTML = escapeHtml(renderedText) + '<span class="typing-cursor"></span>';
          scrollToBottom();
        } else if (streamFinished) {
          clearInterval(typeInterval);
          if(!renderedText) renderedText = "Desculpe, não consegui formular uma resposta no momento.";
          botContentEl.innerHTML = escapeHtml(renderedText);
          scrollToBottom();
        }
      }, 16); // ~60fps para fluidez máxima
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          streamFinished = true;
          break;
        }
        
        const chunkStr = decoder.decode(value, { stream: true });
        const lines = chunkStr.split('\n');
        
        for (const line of lines) {
          if (line.trim() && line.startsWith('data: ')) {
            try {
              const jsonStr = line.slice(6);
              if (jsonStr === '[DONE]') continue;
              
              const data = JSON.parse(jsonStr);
              if (data.choices && data.choices[0] && data.choices[0].delta && data.choices[0].delta.content) {
                botFullText += data.choices[0].delta.content;
              }
            } catch (e) { }
          }
        }
      }
      
      streamFinished = true;
      let finalBotText = botFullText.replace(/<think>[\s\S]*?(<\/think>|$)/g, '').trim();
      chatHistory += ` ${finalBotText}\n`;
      
    } catch (error) {
      console.error(error);
      botContentEl.innerHTML = '<span style="color:red; font-size: 0.85rem;"><strong>Erro de Conexão.</strong> A chamada para a API falhou. Verifique o console para mais detalhes.</span>';
    } finally {
      if (interactions > 0) {
        chatInput.disabled = false;
        chatSend.disabled = false;
        chatInput.focus();
      } else {
        chatInput.placeholder = 'Limite de interações atingido.';
      }
      scrollToBottom();
    }
  }

  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
  
  const style = document.createElement('style');
  style.innerHTML = `
    .chat-section {
      position: relative;
    }
    .chat-bg-grid {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
      z-index: 0;
      pointer-events: none;
    }
    .chat-flashlight {
      position: absolute;
      top: -50%; left: -50%; width: 200%; height: 200%;
      background: radial-gradient(circle at center, rgba(136, 167, 47, 0.12) 0%, transparent 40%),
                  radial-gradient(circle at 80% 80%, rgba(43, 159, 232, 0.08) 0%, transparent 35%);
      animation: flashlightWave 12s ease-in-out infinite alternate;
      z-index: 1;
      opacity: 0.8;
      pointer-events: none;
      mix-blend-mode: multiply;
    }
    
    .chat-panel .chat-flashlight {
      background: radial-gradient(circle at center, rgba(138, 43, 226, 0.12) 0%, transparent 40%),
                  radial-gradient(circle at 80% 80%, rgba(136, 167, 47, 0.08) 0%, transparent 35%);
    }
    .chat-clinical .chat-flashlight {
      background: radial-gradient(circle at center, rgba(43, 159, 232, 0.12) 0%, transparent 40%),
                  radial-gradient(circle at 80% 80%, rgba(136, 167, 47, 0.08) 0%, transparent 35%);
    }
    .chat-explorer .chat-flashlight {
      background: radial-gradient(circle at center, rgba(255, 187, 0, 0.1) 0%, transparent 40%),
                  radial-gradient(circle at 80% 80%, rgba(136, 167, 47, 0.08) 0%, transparent 35%);
    }

    @keyframes flashlightWave {
      0% { transform: translate(0%, 0%) scale(1); }
      50% { transform: translate(15%, 20%) scale(1.2); }
      100% { transform: translate(-10%, -5%) scale(0.9); }
    }
    .chat-container {
      position: relative;
      z-index: 2;
    }
    .typing-dots span {
      animation: blink 1.4s infinite both;
      font-size: 1.5rem;
      line-height: 0.5;
    }
    .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
    .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes blink { 0% { opacity: 0.2; } 20% { opacity: 1; } 100% { opacity: 0.2; } }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); }
 to { opacity: 1; transform: translateY(0); } }
    #chat-input:disabled { opacity: 0.7; cursor: not-allowed; }
    #chat-send:disabled { opacity: 0.7; cursor: not-allowed; }
    .bot-msg-content a { color: var(--primary); text-decoration: underline; }
    .typing-cursor {
      display: inline-block;
      width: 6px;
      height: 1.1em;
      background-color: var(--primary, #88a72f);
      vertical-align: text-bottom;
      margin-left: 4px;
      animation: cursorBlink 0.8s infinite;
      border-radius: 2px;
    }
    @keyframes cursorBlink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
});
