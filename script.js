document.addEventListener('DOMContentLoaded', () => {
    // Menu Responsivo (Hamburger)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animação do ícone hamburger (opcional, pode ser melhorado)
        const spans = hamburger.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
      });
    }
  
    // Fechar menu ao clicar em um link (mobile)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
  
    // Intersection Observer para animações de fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
  
    const appearOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);
  
    fadeElements.forEach(element => {
      appearOnScroll.observe(element);
    });
  
    // Marcar link ativo na navegação baseado na URL atual
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath) {
            link.classList.add('active');
        }
    });
  });

// Função para expandir/recolher os cards interativos da seção "Como Funciona"
function toggleCard(element) {
    // Alterna a classe 'expanded' no card clicado
    element.classList.toggle('expanded');
    
    // Altera o texto do hint (dica)
    const hint = element.querySelector('.click-hint');
    if (element.classList.contains('expanded')) {
        hint.innerHTML = 'Clique para recolher <i class="ph-bold ph-caret-up"></i>';
    } else {
        hint.innerHTML = 'Clique para saber mais <i class="ph-bold ph-caret-down"></i>';
    }
}

// Chatbot Logic
document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatInput = document.getElementById('chat-input-field');
    const chatSendBtn = document.getElementById('chat-send-btn');
    const chatMessages = document.getElementById('chatbot-messages');

    if (chatbotToggle && chatbotWindow) {
        // Toggle chat window
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('active');
            if(chatbotWindow.classList.contains('active')) {
                // Focar no input quando abrir
                setTimeout(() => {
                    chatInput.focus();
                }, 400);
            }
        });

        chatbotClose.addEventListener('click', () => {
            chatbotWindow.classList.remove('active');
        });

        // Handle sending messages
        const sendMessage = () => {
            const text = chatInput.value.trim();
            if (text === '') return;

            // Remove options se existirem
            const options = document.querySelector('.chatbot-options');
            if (options) options.remove();

            // Add user message
            addMessage(text, 'user');
            chatInput.value = '';

            // Simulate bot thinking and responding
            simulateBotResponse(text);
        };

        chatSendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Função global para opções dos botões
    window.sendOption = function(text) {
        if (!chatMessages) return;
        
        // Remove options
        const options = document.querySelector('.chatbot-options');
        if (options) options.remove();

        // Add user message
        addMessage(text, 'user');

        // Simulate bot response
        simulateBotResponse(text);
    };

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        msgDiv.innerHTML = `<div class="message-content">${text}</div>`;
        chatMessages.appendChild(msgDiv);
        scrollToBottom();
    }

    function showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing-indicator-container';
        typingDiv.innerHTML = `
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        scrollToBottom();
        return typingDiv;
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function simulateBotResponse(userText) {
        const typingIndicator = showTyping();
        
        // Lógica simples de respostas
        let response = "Interessante! Se quiser saber mais detalhes, recomendo visitar nossa página de Contato ou criar uma conta grátis para explorar a plataforma.";
        
        const lowerText = userText.toLowerCase();
        if (lowerText.includes('como funciona')) {
            response = "A Progment funciona em 4 passos: 1) Diagnóstico de Nível via IA, 2) Criação de um Plano Personalizado, 3) Conexão com outros estudantes e 4) Modo Foco para evitar distrações. <br><br>Você quer criar sua conta?";
        } else if (lowerText.includes('plano') || lowerText.includes('preço') || lowerText.includes('valor')) {
            response = "Temos o Plano Básico (Grátis), o Plano Pro (R$ 29,90/mês) e o Premium. Você pode ver todos os detalhes na nossa página de Planos. Posso te ajudar com mais alguma coisa?";
        } else if (lowerText.includes('grátis') || lowerText.includes('graça') || lowerText.includes('testar')) {
            response = "Sim! Você pode testar nosso Plano Básico totalmente de graça. Ele inclui diagnóstico inicial e cronograma semanal. É uma ótima forma de conhecer a plataforma! 🚀";
        } else if (lowerText.includes('olá') || lowerText.includes('oi') || lowerText.includes('bom dia') || lowerText.includes('boa tarde') || lowerText.includes('boa noite')) {
            response = "Olá! Como vão os estudos? Estou aqui para tirar suas dúvidas sobre a Progment e te ajudar a alcançar seus objetivos.";
        } else if (lowerText.includes('obrigado') || lowerText.includes('valeu')) {
            response = "Por nada! Estou sempre aqui se precisar de algo. Bons estudos! 📚";
        } else if (lowerText.includes('não') && lowerText.includes('obrigado')) {
            response = "Entendido! Se mudar de ideia ou tiver alguma dúvida, basta me chamar.";
        } else if (lowerText.includes('ainda não')) {
            response = "Tudo bem, sem pressa! Fique à vontade para explorar nosso site. Temos muitos materiais sobre como funcionamos. Se precisar de ajuda, estou por aqui!";
        }

        setTimeout(() => {
            typingIndicator.remove();
            addMessage(response, 'bot');
            
            // Adicionar botões de opção condicionalmente
            if (response.includes("criar sua conta?")) {
                addOptions([
                    { text: 'Sim, quero criar!', action: "window.location.href='planos.html'" },
                    { text: 'Ainda não', action: "sendOption('Ainda não')" }
                ]);
            } else if (response.includes("Posso te ajudar com mais alguma coisa?")) {
                 addOptions([
                    { text: 'Como funciona?', action: "sendOption('Como funciona?')" },
                    { text: 'Não, obrigado.', action: "sendOption('Não, obrigado.')" }
                ]);
            }
        }, 1200 + Math.random() * 800); // Tempo aleatório entre 1.2s e 2s para parecer mais natural
    }

    function addOptions(optionsList) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'chatbot-options';
        
        optionsList.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'chat-option';
            btn.textContent = opt.text;
            btn.setAttribute('onclick', opt.action);
            optionsDiv.appendChild(btn);
        });
        
        chatMessages.appendChild(optionsDiv);
        scrollToBottom();
    }
});
