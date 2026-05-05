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
