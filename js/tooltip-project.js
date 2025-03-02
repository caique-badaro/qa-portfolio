document.addEventListener("DOMContentLoaded", function () {
  const desktop = document.getElementById("desktop");
  const imageDetails = document.getElementById("cb_old-clube-ap--img-details");

  const tooltips = [
    { id: "tooltip-new-cap--01", newClass: "cb_tooptip-left--open", imgSrc: "imgs/revisao-app-clube-ap/old/design-interface-ux-ui_old-app-clube-ap_0.webp" },
    { id: "tooltip-new-cap--02", newClass: "cb_tooptip-left--open", imgSrc: "imgs/revisao-app-clube-ap/old/design-interface-ux-ui_old-app-clube-ap_1.webp" },
    { id: "tooltip-new-cap--03", newClass: "cb_tooptip-left--open", imgSrc: "imgs/revisao-app-clube-ap/old/design-interface-ux-ui_old-app-clube-ap_2.webp" },
    { id: "tooltip-new-cap--04", newClass: "cb_tooptip-right--open", imgSrc: "imgs/revisao-app-clube-ap/old/design-interface-ux-ui_old-app-clube-ap_3.webp" },
    { id: "tooltip-new-cap--05", newClass: "cb_tooptip-right--open", imgSrc: "imgs/revisao-app-clube-ap/old/design-interface-ux-ui_old-app-clube-ap_4.webp" }
  ];

  tooltips.forEach(tooltip => {
    const element = document.getElementById(tooltip.id);
    if (element) {
      element.addEventListener("click", function () {
        // Atualiza a classe do elemento clicado
        element.className = tooltip.newClass;

        // Atualiza as classes dos demais elementos
        tooltips.forEach(otherTooltip => {
          if (otherTooltip.id !== tooltip.id) {
            const otherElement = document.getElementById(otherTooltip.id);
            if (otherElement) {
              otherElement.className = otherTooltip.id.includes("04") || otherTooltip.id.includes("05")
                ? "cb_tooptip-right"
                : "cb_tooptip-left";
            }
          }
        });

        // Atualiza a imagem
        if (imageDetails) {
          imageDetails.src = tooltip.imgSrc;
        }
      });
    }
  });
});
