// Scroll to top
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("cb_back-to-top");
  const firstFoldBanner = document.getElementById("cb_banner--first-fold");
  const firstFoldContent = document.getElementById("cb--content--first-fold-home");

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
      backToTopButton.style.display = "none"; // Oculta o botão
    } else {
      backToTopButton.style.display = "block"; // Exibe o botão
    }
  }

  // Adiciona o evento de clique ao botão
  if (backToTopButton) {
    backToTopButton.addEventListener("click", scrollToTop);
  }

  // Verifica a visibilidade ao rolar a página
  window.addEventListener("scroll", toggleBackToTopButton);

  // Inicializa a verificação ao carregar a página
  toggleBackToTopButton();
});
// End, scroll to top


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
// End, ------------------------------------------------

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
// End, -----------------------------------------------
