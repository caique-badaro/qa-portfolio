// document.addEventListener("DOMContentLoaded", function () {
//   const buttons = [
//     { id: "bottom-sheet-01", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_heatmap-move-mouse.html" },
//     { id: "bottom-sheet-02", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_heatmap-click.html" },
//     { id: "bottom-sheet-03", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_heatmap-scroll.html" },
//     { id: "bottom-sheet-04", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_pesquisa-matriz-csd.html" },
//     { id: "bottom-sheet-05", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_pesquisa-hipoteses.html" },
//     { id: "bottom-sheet-06", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_pesquisa-pesquisa-formulario.html" },
//     { id: "bottom-sheet-07", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_project-prototype-mobile.html" },
//     { id: "bottom-sheet-08", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_project-prototype-desktop.html" },
//     { id: "bottom-sheet-09", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_project-prototype-link-to-all.html" }
//   ];

//   const menuButtons = [
//     { id: "cb--menu-mobile--option-5", content: "content/menu-mobile/bottom-sheet_modal_menu-mobile-5.html" }
//   ];

//   const popup = document.getElementById("cb_bottom-sheet--block-content");
//   const menuPopup = document.getElementById("cb_bottom-sheet--block-content_menu-mobile");
//   const overlay = document.getElementById("cb_overlay");
//   const contentDiv = document.getElementById("content-bottom-sheet");
//   const menuContentDiv = document.getElementById("cb_bottom-sheet--block-content_menu-mobile");
//   const closeButton = document.getElementById("cb_btn-icon-close--bottom-sheet");
//   const menuCloseButton = document.getElementById("cb_btn-icon-close--bottom-sheet--menu-mobile");

//   // Função para carregar conteúdo HTML no popup
//   function loadContent(url, targetDiv) {
//     fetch(url)
//       .then(response => response.text())
//       .then(html => {
//         targetDiv.innerHTML = html;
//         targetDiv.scrollTop = 0;
//       })
//       .catch(error => console.error("Erro ao carregar o conteúdo:", error));
//   }

//   // Função para abrir o popup
//   function openPopup(url) {
//     loadContent(url, contentDiv);
//     popup.style.display = "flex";
//     overlay.style.display = "flex";
//   }

//   // Função para abrir o popup do menu mobile
//   function openMenuPopup(url) {
//     loadContent(url, menuContentDiv);
//     menuPopup.style.display = "flex";
//     overlay.style.display = "flex";
//   }

//   // Associa os eventos de clique aos botões
//   buttons.forEach(({ id, content }) => {
//     const button = document.getElementById(id);
//     if (button) {
//       button.addEventListener("click", () => openPopup(content));
//     }
//   });

//   // Associa os eventos de clique aos botões do menu mobile
//   menuButtons.forEach(({ id, content }) => {
//     const button = document.getElementById(id);
//     if (button) {
//       button.addEventListener("click", () => openMenuPopup(content));
//     }
//   });

//   // Função para fechar o popup
//   function closePopup() {
//     popup.style.display = "none";
//     menuPopup.style.display = "none";
//     overlay.style.display = "none";
//   }

//   // Fecha o popup ao clicar no botão de fechar do conteúdo padrão
//   if (closeButton) {
//     closeButton.addEventListener("click", closePopup);
//   }

//   // Fecha o popup ao clicar no botão de fechar do menu mobile
//   if (menuCloseButton) {
//     menuCloseButton.addEventListener("click", closePopup);
//   }

//   // Fecha o popup ao clicar no overlay
//   if (overlay) {
//     overlay.addEventListener("click", closePopup);
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const buttons = [
    { id: "bottom-sheet-01", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_heatmap-move-mouse.html" },
    { id: "bottom-sheet-02", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_heatmap-click.html" },
    { id: "bottom-sheet-03", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_heatmap-scroll.html" },
    { id: "bottom-sheet-04", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_pesquisa-matriz-csd.html" },
    { id: "bottom-sheet-05", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_pesquisa-hipoteses.html" },
    { id: "bottom-sheet-06", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_pesquisa-pesquisa-formulario.html" },
    { id: "bottom-sheet-07", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_project-prototype-mobile.html" },
    { id: "bottom-sheet-08", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_project-prototype-desktop.html" },
    { id: "bottom-sheet-09", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_project-prototype-link-to-all.html" }
  ];

  const menuButtons = [
    { id: "cb--menu-mobile--option-5", content: "content/menu-mobile/bottom-sheet_modal_menu-mobile-5.html" },
    { id: "cb--menu-mobile--option-4", content: "content/menu-mobile/bottom-sheet_modal_menu-mobile-4.html" },
    { id: "cb--menu-mobile--option-3", content: "content/menu-mobile/bottom-sheet_modal_menu-mobile-3.html" },
    { id: "cb--menu-mobile--option-2", content: "content/menu-mobile/bottom-sheet_modal_menu-mobile-2.html" },
    { id: "cb--menu-mobile--option-1", content: "content/menu-mobile/bottom-sheet_modal_menu-mobile-1.html" }
  ];

  const popupMenu = document.getElementById("cb_bottom-sheet--block-content_menu-mobile");
  const contentDivMenu = document.getElementById("content-bottom-sheet-menu-mobile");
  const overlayMenu = document.getElementById("cb_overlay_menu-mobile");

  // Função para carregar conteúdo HTML no popup
  function loadMenuContent(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        contentDivMenu.innerHTML = html;
        contentDivMenu.scrollTop = 0;

        // Adiciona evento ao botão de fechar do conteúdo carregado
        const menuCloseButton = document.getElementById("cb_btn-icon-close--bottom-sheet--menu-mobile");
        if (menuCloseButton) {
          menuCloseButton.addEventListener("click", closeMenuPopup);
        }
      })
      .catch(error => console.error("Erro ao carregar o conteúdo:", error));
  }

  // Função para abrir o popup do menu
  function openMenuPopup(url) {
    loadMenuContent(url);
    popupMenu.style.display = "flex";
    overlayMenu.style.display = "flex";
  }

  // Função para fechar o popup do menu
  function closeMenuPopup() {
    popupMenu.style.display = "none";
    overlayMenu.style.display = "none";
  }

  // Associa os eventos de clique aos botões de menu
  menuButtons.forEach(({ id, content }) => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", () => openMenuPopup(content));
    }
  });

  // Fecha o popup do menu ao clicar no overlay
  if (overlayMenu) {
    overlayMenu.addEventListener("click", closeMenuPopup);
  }
});

