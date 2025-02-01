// Scroll to top
  document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("cb_back-to-top");
    const firstFoldBanner = document.getElementById("cb_banner--first-fold");

    // Função para fazer o scroll suave para o topo
    function scrollToTop() {
      firstFoldBanner.scrollIntoView({ behavior: "smooth" });
    }

    // Função para verificar se o banner está visível
    function toggleBackToTopButton() {
      const bannerRect = firstFoldBanner.getBoundingClientRect();
      const isBannerVisible = bannerRect.bottom > 0 && bannerRect.top < window.innerHeight;

      if (isBannerVisible) {
        backToTopButton.style.display = "none"; // Oculta o botão
      } else {
        backToTopButton.style.display = "block"; // Exibe o botão
      }
    }

    // Adiciona o evento de clique ao botão
    if (backToTopButton) {
      backToTopButton.addEventListener("click", scrollToTop);
    }

    // Verifica a visibilidade do banner ao rolar a página
    window.addEventListener("scroll", toggleBackToTopButton);

    // Inicializa a verificação ao carregar a página
    toggleBackToTopButton();
  });
// End, scroll to top
// ********************************************

// Image effect heatmap
  document.addEventListener("DOMContentLoaded", function () {
    const heatmap = document.getElementById("cb_heatmap");
    const heatmapElements = {
      heatmap_01: document.querySelector("#revisao-apoio-home-site_heatmap_01"),
      heatmap_02: document.querySelector("#revisao-apoio-home-site_heatmap_02"),
      heatmap_03: document.querySelector("#revisao-apoio-home-site_heatmap_03"),
    };

    // Função para atualizar os estilos com base no breakpoint e visibilidade
    function updateHeatmapStyles() {
      const rect = heatmap.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Determina o conjunto de estilos baseado no breakpoint
      let stylesStart, stylesEnd;

      if (viewportWidth >= 1600) {
        stylesStart = {
          heatmap_01: { right: -531, marginBottom: -1, rotate: -16 },
          heatmap_02: { right: -374, marginBottom: -10, rotate: 3 },
          heatmap_03: { right: -111, marginBottom: -14, rotate: 19 },
        };
        stylesEnd = {
          heatmap_01: { right: -356, marginBottom: -8, rotate: -8 },
          heatmap_02: { right: -223, marginBottom: -15, rotate: 6 },
          heatmap_03: { right: -10, marginBottom: -20, rotate: 19 },
        };
      } else if (viewportWidth >= 1024 && viewportWidth <= 1599) {
        stylesStart = {
          heatmap_01: { right: -500, marginBottom: 10, rotate: -40 },
          heatmap_02: { right: -400, marginBottom: -6, rotate: -16 },
          heatmap_03: { right: -220, marginBottom: -10, rotate: -4 },
        };
        stylesEnd = {
          heatmap_01: { right: -290, marginBottom: -6, rotate: -25 },
          heatmap_02: { right: -120, marginBottom: -15, rotate: -3 },
          heatmap_03: { right: 0, marginBottom: -18, rotate: 12 },
        };
      } else if (viewportWidth >= 768 && viewportWidth <= 1023) {
        stylesStart = {
          heatmap_01: { right: -371, marginBottom: -18, rotate: -24 },
          heatmap_02: { right: -265, marginBottom: -33, rotate: -5 },
          heatmap_03: { right: -84, marginBottom: -48, rotate: 17 },
        };
        stylesEnd = {
          heatmap_01: { right: -143, marginBottom: -33, rotate: -9 },
          heatmap_02: { right: -1, marginBottom: -41, rotate: 13 },
          heatmap_03: { right: 171, marginBottom: -45, rotate: 33 },
        };
      } else if (viewportWidth >= 200 && viewportWidth <= 767) {
        stylesStart = {
          heatmap_01: { right: -310, marginBottom: -38, rotate: -24 },
          heatmap_02: { right: -245, marginBottom: -63, rotate: -9 },
          heatmap_03: { right: -123, marginBottom: -78, rotate: 12 },
        };
        stylesEnd = {
          heatmap_01: { right: -127, marginBottom: -64, rotate: -8 },
          heatmap_02: { right: -7, marginBottom: -77, rotate: 16 },
          heatmap_03: { right: 148, marginBottom: -73, rotate: 36 },
        };
      } else {
        return; // Não aplica estilos fora dos breakpoints definidos
      }

      // Define os estilos apenas se 30% do componente estiver visível
      const visibleHeight = Math.max(0, Math.min(viewportHeight, rect.bottom) - Math.max(0, rect.top));
      const visibilityPercentage = visibleHeight / rect.height;

      if (visibilityPercentage >= 0.3) {
        // Aplica os estilos interpolados
        Object.entries(heatmapElements).forEach(([key, element]) => {
          const start = stylesStart[key];
          const end = stylesEnd[key];

          const interpolate = (startVal, endVal) => startVal + (endVal - startVal) * visibilityPercentage;

          element.style.right = `${interpolate(start.right, end.right)}px`;
          element.style.marginBottom = `${interpolate(start.marginBottom, end.marginBottom)}vw`;
          element.style.transform = `rotate(${interpolate(start.rotate, end.rotate)}deg)`;
        });
      }
    }

    // Evento de rolagem para atualizar os estilos
    window.addEventListener("scroll", updateHeatmapStyles);
  });
// End, image effect heatmap
// ********************************************

// Bottom bar - Scroll e visibilidade
  document.addEventListener("DOMContentLoaded", function () {
    const bottomMenu = document.getElementById("cb_bottom-menu--mobile");
    const buttons = bottomMenu.querySelectorAll(".option-menu--default");
    const scrollTargets = {
      "cb--menu-mobile--option-2": document.getElementById("cb_heatmap"),
      "cb--menu-mobile--option-3": document.getElementById("cb_project-content"),
      "cb--menu-mobile--option-4": document.getElementById("cb_results-content"),
    };

    // Trocar classe ao clicar no botão
    buttons.forEach(button => {
      button.addEventListener("click", function () {
        // Resetar classe dos botões
        buttons.forEach(btn => btn.className = "option-menu--default");

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

        if (button) {
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

// Menu desktop - Scroll
  document.addEventListener("DOMContentLoaded", function () {
    // Referências aos botões do menu desktop
    const menuDesktop = document.getElementById("cb_header-menu--desktop");
    const btnHeatmap = document.getElementById("cb--menu-desktop--option-1");
    const btnResults = document.getElementById("cb--menu-desktop--option-2");
    const btnProject = document.getElementById("cb--menu-desktop--option-3");
    const btnFAQ = document.getElementById("cb--menu-desktop--option-4");
    const btnLogo = document.getElementById("cb--menu-desktop--logo");

    // Função de scroll suave
    function smoothScrollTo(elementId) {
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    // Event listeners para os botões
    if (btnHeatmap) {
      btnHeatmap.addEventListener("click", function () {
        smoothScrollTo("cb_heatmap");
      });
    }

    if (btnResults) {
      btnResults.addEventListener("click", function () {
        smoothScrollTo("cb_results-content");
      });
    }

    if (btnProject) {
      btnProject.addEventListener("click", function () {
        smoothScrollTo("cb_project-content");
      });
    }

    if (btnFAQ) {
      btnFAQ.addEventListener("click", function () {
        smoothScrollTo("cb_FAQ-content");
      });
    }

    if (btnLogo) {
      btnLogo.addEventListener("click", function () {
        // Redireciona para a página inicial
        window.location.href = "index.html";
      });
    }
  });
// End, menu desktop
// ********************************************