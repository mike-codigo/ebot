const fs = require('fs');

let mainJs = fs.readFileSync('js/main.js', 'utf8');

// Ensure the wa modal logic captures all buttons correctly. 
// We are using event delegation so this should already be flawless, but let's ensure the JS has no specific restrictions and handles all 'trigger-wa-modal' class clicks.
// Also update the target Whatsapp Link message to be a bit more dynamic

const newLogic = `  // Event Delegation for Opening Modal (Flawless 1-click execution across ALL pages)
  document.addEventListener('click', (e) => {
    // Check if clicked element or its parent is the trigger button
    const trigger = e.target.closest('.trigger-wa-modal');
    if (trigger) {
      e.preventDefault();
      
      // Opt: Dynamic message based on button text
      const btnText = trigger.innerText.trim();
      const continueBtn = document.getElementById('waModalContinue');
      if (continueBtn) {
         let message = "Olá, gostaria de falar com um especialista";
         if (btnText.includes('Suporte Técnico')) message = "Olá, preciso de suporte técnico/LGPD";
         if (btnText.includes('Demonstração')) message = "Olá, gostaria de agendar uma demonstração";
         if (btnText.includes('Integração')) message = "Olá, gostaria de solicitar integração via API";
         if (btnText.includes('Orçamento')) message = "Olá, gostaria de solicitar um orçamento";
         
         continueBtn.href = 'https://wa.me/5546991130554?text=' + encodeURIComponent(message);
      }
      
      openModal();
    }
    
    // Check if clicked element is close or continue button inside modal
    if (e.target.closest('#waModalClose') || e.target.closest('#waModalContinue')) {
      closeModal();
    }
    
    // Check if clicked outside the card
    if (e.target === modal) {
      closeModal();
    }
  });`;

// Replace the old event delegation block
mainJs = mainJs.replace(/\/\/ Event Delegation for Opening Modal[\s\S]*?\}\);/m, newLogic);

fs.writeFileSync('js/main.js', mainJs);
console.log("main.js script do Modal atualizado para mensagens dinâmicas!");
