// Scroll to top
  document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("cb_back-to-top");
    const firstFoldBanner = document.getElementById("cb_banner--first-fold");
    const firstFoldContent = document.getElementById("cb--content--first-fold-home");
    let lastScrollTop = window.scrollY;

    // Função para fazer o scroll suave para o topo
    function scrollToTop() {
      if (firstFoldBanner) {
        firstFoldBanner.scrollIntoView({ behavior: "smooth" });
      } else if (firstFoldContent) {
        firstFoldContent.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Função para verificar se algum dos elementos está visível
    function toggleBackToTopButton() {
      const bannerRect = firstFoldBanner ? firstFoldBanner.getBoundingClientRect() : null;
      const contentRect = firstFoldContent ? firstFoldContent.getBoundingClientRect() : null;

      const isBannerVisible = bannerRect && bannerRect.bottom > 0 && bannerRect.top < window.innerHeight;
      const isContentVisible = contentRect && contentRect.bottom > 0 && contentRect.top < window.innerHeight;

      if (isBannerVisible || isContentVisible) {
        backToTopButton.style.display = "none"; // Oculta o botão se estiver no topo
      } else {
        backToTopButton.style.display = "block"; // Exibe o botão se já passou do topo
      }
    }

    // Função para ocultar/exibir o botão ao rolar
    function handleScroll() {
      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        // Rolando para baixo -> Oculta o botão
        backToTopButton.style.opacity = "0";
        backToTopButton.style.pointerEvents = "none";
      } else {
        // Rolando para cima -> Exibe o botão
        backToTopButton.style.opacity = "1";
        backToTopButton.style.pointerEvents = "auto";
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }

    // Adiciona o evento de clique ao botão
    if (backToTopButton) {
      backToTopButton.addEventListener("click", scrollToTop);
    }

    // Verifica a visibilidade ao rolar a página
    window.addEventListener("scroll", () => {
      toggleBackToTopButton();
      handleScroll();
    });

    // Inicializa a verificação ao carregar a página
    toggleBackToTopButton();
  });
// End, scroll to top
// ********************************************


// Bottom bar - Scroll e visibilidade
  document.addEventListener("DOMContentLoaded", function () {
    const bottomMenu = document.getElementById("cb_bottom-menu--mobile");
    const buttons = bottomMenu.querySelectorAll(".option-menu--default");
    const scrollTargets = {
      // pula o 1 (atalho para a home)
      "cb--menu-mobile--option-2": document.getElementById("cb_heatmap"),
      "cb--menu-mobile--option-3": document.getElementById("cb_project-content"),
      "cb--menu-mobile--option-4": document.getElementById("cb_results-content"),
      // pula o 5 (menu mobile)
      "cb--menu-mobile--option-6": document.getElementById("first-fold--home"),
      "cb--menu-mobile--option-7": document.getElementById("cb_academic-graduation"),
      "cb--menu-mobile--option-8": document.getElementById("cb_grid-card-posts"),
      // project new cap
      "cb--menu-mobile--option-9": document.getElementById("cb_contexto--new-cap"),
      "cb--menu-mobile--option-10": document.getElementById("cb_project--new-cap"),
    };

    // Trocar classe ao clicar no botão
    buttons.forEach(button => {
      button.addEventListener("click", function () {
        // Se o botão clicado for "cb--menu-mobile--option-5", não alterar a classe
        if (this.id === "cb--menu-mobile--option-5") return;

        // Resetar classe dos botões (exceto o id="cb--menu-mobile--option-5")
        buttons.forEach(btn => {
          if (btn.id !== "cb--menu-mobile--option-5") {
            btn.className = "option-menu--default";
          }
        });

        // Adicionar classe selecionada ao botão clicado
        this.className = "option-menu--selected";

        // Comportamento específico para o botão id="cb--menu-mobile--option-1"
        if (this.id === "cb--menu-mobile--option-1") {
          window.location.href = "index.html"; // Redirecionar para a página inicial
          return; // Interromper o restante do comportamento
        }

        // Verificar se o botão clicado tem um target de scroll
        const target = scrollTargets[this.id];
        if (target) {
          // Scroll suave até o elemento
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Observar visibilidade dos elementos
    const observerConfig = {
      root: null,
      rootMargin: "0px",
      threshold: [0.5] // Visível 50% ou mais
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const buttonId = Object.keys(scrollTargets).find(key => scrollTargets[key] === entry.target);
        const button = buttonId ? document.getElementById(buttonId) : null;

        if (button && button.id !== "cb--menu-mobile--option-5") {
          if (entry.isIntersecting) {
            button.className = "option-menu--selected";
          } else {
            button.className = "option-menu--default";
          }
        }
      });
    }, observerConfig);

    // Observar os elementos de destino
    Object.values(scrollTargets).forEach(target => {
      if (target) {
        observer.observe(target);
      }
    });

    // Observação adicional para elementos que compartilham o mesmo botão
    const additionalTargets = [document.getElementById("cb_search"), document.getElementById("cb_benchmarking")];
    additionalTargets.forEach(target => {
      if (target) {
        observer.observe(target);
      }
    });
  });
// End, Bottom bar
// ********************************************


// Menu desktop e mobile - Scroll
  document.addEventListener("DOMContentLoaded", function () {
  // Mapeamento de botões e seções
  const menuLinks = {
    // Seções principais
    "cb--menu-desktop--home-1": "first-fold--home",
    "cb--menu-desktop--home-2": "cb_academic-graduation",
    "cb--menu-desktop--home-3": "cb_work-experiences",
    "cb--menu-desktop--home-4": "cb_grid-card-posts",

    // Home - Primeira dobra Home
    "cb--menu-desktop--home-1-fold-1": "cb_block-contact",
    "cb--menu-desktop--home-1-fold-2": "cb_academic-graduation",
    "cb--menu-desktop--home-1-fold-3": "cb_work-experiences",
    "cb--menu-desktop--home-1-fold-4": "cb_grid-card-posts",
    // new cap (page)
    "cb--menu-desktop--home-1-fold-5": "cb_contexto--new-cap",

    // Footer - Home
    "cb--menu-desktop--home-footer-1": "first-fold--home",
    "cb--menu-desktop--home-footer-2": "cb_grid-card-posts",
    "cb--menu-desktop--home-footer-3": "cb_work-experiences",
    "cb--menu-desktop--home-footer-4": "cb_academic-graduation",
    "cb--menu-desktop--home-footer-5": "cb_block-contact",

    // Footer - Revisão de AP
    "cb--menu-desktop--revAP-footer-1": "cb_heatmap",
    "cb--menu-desktop--revAP-footer-2": "cb_results-content",
    "cb--menu-desktop--revAP-footer-3": "cb_project-content",
    "cb--menu-desktop--revAP-footer-4": "cb_FAQ-content",

    // Footer - New CAP
    "cb--menu-desktop--newCAP-footer-1": "cb_contexto--new-cap",
    "cb--menu-desktop--newCAP-footer-2": "cb_project--new-cap",

    // Opções do menu desktop - page project
    "cb--menu-desktop--option-1": "cb_heatmap",
    "cb--menu-desktop--option-2": "cb_results-content",
    "cb--menu-desktop--option-3": "cb_project-content",
    "cb--menu-desktop--option-4": "cb_FAQ-content",
    "cb--menu-desktop--option-new-cap-1": "cb_contexto--new-cap",
    "cb--menu-desktop--option-new-cap-2": "cb_processo--new-cap",
    "cb--menu-desktop--option-new-cap-3": "cb_project--new-cap",

  };

  // Função de scroll suave
  function smoothScrollTo(elementId) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Adiciona eventos de clique para os botões do menu
  Object.keys(menuLinks).forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", () => smoothScrollTo(menuLinks[buttonId]));
    }
  });

  // Redireciona para a home ao clicar no logo
  const btnLogo = document.getElementById("cb--menu-desktop--logo");
  if (btnLogo) {
    btnLogo.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
  });
// End, menu desktop
// ********************************************


// Ocultar menu página home quando estiver na primeira dobra
  document.addEventListener("DOMContentLoaded", function () {
    const firstFoldContent = document.getElementById("cb--content--first-fold-home");
    const headerMenu = document.getElementById("cb_header-menu--desktop");

    if (!firstFoldContent || !headerMenu) return;

    function toggleHeaderVisibility() {
      const contentRect = firstFoldContent.getBoundingClientRect();
      const isContentVisible = contentRect.bottom > 0 && contentRect.top < window.innerHeight;

      if (isContentVisible) {
        headerMenu.style.transition = "transform 0.3s linear, opacity 0.1s linear";
        headerMenu.style.transform = "translateY(-100%)";
        headerMenu.style.opacity = "0";
      } else {
        headerMenu.style.transform = "translateY(0)";
        headerMenu.style.opacity = "1";
      }
    }

    // Executa a função ao rolar a página
    window.addEventListener("scroll", toggleHeaderVisibility);

    // Executa a função ao carregar a página
    toggleHeaderVisibility();
  });
// End
// ********************************************


// Oculta o menu mobile ao realizar scrool vertical para baixo, exibe quando o comportamento for contrário
  document.addEventListener("DOMContentLoaded", function () {
    const bottomMenu = document.getElementById("cb_bottom-menu--mobile");
    let lastScrollY = window.scrollY;

    if (!bottomMenu) return;

    function handleScroll() {
      if (window.scrollY > lastScrollY) {
        // Scroll para baixo: oculta o menu
        bottomMenu.style.transition = "transform 0.3s linear, opacity 0.3s linear";
        bottomMenu.style.transform = "translateY(100%)";
        bottomMenu.style.opacity = "0";
      } else {
        // Scroll para cima: exibe o menu
        bottomMenu.style.transform = "translateY(0)";
        bottomMenu.style.opacity = "1";
      }

      lastScrollY = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);
  });
// End
// ********************************************