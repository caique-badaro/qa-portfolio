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




// Image effect heatmap
//   document.addEventListener("DOMContentLoaded", function () {
//   const heatmap = document.getElementById("cb_heatmap");
//   const heatmapElements = {
//     heatmap_01: document.querySelector("#revisao-apoio-home-site_heatmap_01"),
//     heatmap_02: document.querySelector("#revisao-apoio-home-site_heatmap_02"),
//     heatmap_03: document.querySelector("#revisao-apoio-home-site_heatmap_03"),
//   };

//   // Verifica a posição do componente em relação à janela
//   function updateHeatmapStyles() {
//     const rect = heatmap.getBoundingClientRect();
//     const viewportHeight = window.innerHeight;

//     // Define as propriedades com base na visibilidade e posição
//     if (rect.top <= viewportHeight && rect.bottom >= 0) {
//       // Porcentagem de visibilidade do componente
//       const visibilityPercentage = Math.min(1, Math.max(0, (viewportHeight - rect.top) / rect.height));

//       // Atualiza os estilos dinamicamente
//       heatmapElements.heatmap_01.style.right = `${-700 + (400 * visibilityPercentage)}px`;
//       heatmapElements.heatmap_01.style.marginBottom = `${5 - (14 * visibilityPercentage)}vw`;
//       heatmapElements.heatmap_01.style.transform = `rotate(${-25 + (18 * visibilityPercentage)}deg)`;

//       heatmapElements.heatmap_02.style.right = `${-520 + (300 * visibilityPercentage)}px`;
//       heatmapElements.heatmap_02.style.marginBottom = `${-6 - (6 * visibilityPercentage)}vw`;
//       heatmapElements.heatmap_02.style.transform = `rotate(${1 + (5 * visibilityPercentage)}deg)`;

//       heatmapElements.heatmap_03.style.right = `${-210 + (50 * visibilityPercentage)}px`;
//       heatmapElements.heatmap_03.style.marginBottom = `${-10 - (2 * visibilityPercentage)}vw`;
//       heatmapElements.heatmap_03.style.transform = `rotate(${20 - (6 * visibilityPercentage)}deg)`;
//     }
//   }

//   // Evento de rolagem para atualizar os estilos
//   window.addEventListener("scroll", updateHeatmapStyles);
// });


document.addEventListener("DOMContentLoaded", function () {
  const heatmap = document.getElementById("cb_heatmap");
  const heatmapElements = {
    heatmap_01: document.querySelector("#revisao-apoio-home-site_heatmap_01"),
    heatmap_02: document.querySelector("#revisao-apoio-home-site_heatmap_02"),
    heatmap_03: document.querySelector("#revisao-apoio-home-site_heatmap_03"),
  };

  // Função para atualizar os estilos com base no breakpoint
  function updateHeatmapStyles() {
    const rect = heatmap.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    // Determina o conjunto de estilos baseado no breakpoint
    let stylesStart, stylesEnd;

    if (viewportWidth >= 1600) {
      // Estilos para breakpoints >= 1600px
      stylesStart = {
        heatmap_01: { right: -700, marginBottom: 5, rotate: -25 },
        heatmap_02: { right: -520, marginBottom: -6, rotate: 1 },
        heatmap_03: { right: -210, marginBottom: -10, rotate: 20 },
      };
      stylesEnd = {
        heatmap_01: { right: -340, marginBottom: -8, rotate: -8 },
        heatmap_02: { right: -220, marginBottom: -12, rotate: 6 },
        heatmap_03: { right: -70, marginBottom: -14, rotate: 14 },
      };
    } else if (viewportWidth >= 1024 && viewportWidth <= 1599) {
      // Estilos para breakpoints entre 1024px e 1599px
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
    } else if (viewportWidth >= 768 && viewportWidth <= 1023){
      stylesStart = {
        heatmap_01: { right: -390, marginBottom: 15, rotate: -30 },
        heatmap_02: { right: -190, marginBottom: -4, rotate: -8 },
        heatmap_03: { right: -30, marginBottom: -10, rotate: -3 },
      };
      stylesEnd = {
        heatmap_01: { right: -140, marginBottom: -20, rotate: 2 },
        heatmap_02: { right: 10, marginBottom: -26, rotate: 11 },
        heatmap_03: { right: 160, marginBottom: -30, rotate: 23 },
      };
    } else {
      return; // Não aplica estilos fora dos breakpoints definidos
    }

    // Define os estilos baseados na visibilidade do componente
    if (rect.top <= viewportHeight && rect.bottom >= 0) {
      const visibilityPercentage = Math.min(1, Math.max(0, (viewportHeight - rect.top) / rect.height));

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

