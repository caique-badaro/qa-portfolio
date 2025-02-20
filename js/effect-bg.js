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
