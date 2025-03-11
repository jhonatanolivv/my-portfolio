document.addEventListener('DOMContentLoaded', function() {
    // Selecionando os links do menu
    const homeLink = document.getElementById('homeLink');
    const projectsLink = document.getElementById('projectsLink');
    const contactLink = document.getElementById('contactLink');
  
    // Adicionando evento de clique para cada link
    homeLink.addEventListener('click', function(event) {
      event.preventDefault(); // Evita o comportamento padrão de navegação
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });
  
    projectsLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
  
    contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const contactSection = document.getElementById("contact");
  
    function checkSectionVisibility() {
      const contactPosition = contactSection.getBoundingClientRect();
      
      // Verifica se a seção está pelo menos 50% visível
      if (contactPosition.top < window.innerHeight / 2 && contactPosition.bottom > window.innerHeight / 2) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    }
  
    // Escuta o evento de scroll para detectar quando a seção contact estiver visível
    window.addEventListener("scroll", checkSectionVisibility);
  
    // Evento de clique para rolar suavemente ao topo
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  
    // Checa se a seção já está visível ao carregar a página
    checkSectionVisibility();
  });
  
  
  