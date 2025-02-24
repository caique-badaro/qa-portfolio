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
    { id: "bottom-sheet-09", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_project-prototype-link-to-all.html" },
    { id: "bottom-sheet-10", content: "content/home/bottom-sheet_modal_graduation-01-pucrs.html" },
    { id: "bottom-sheet-11", content: "content/home/bottom-sheet_modal_graduation-02-hotjar-level-3.html" },
    { id: "bottom-sheet-12", content: "content/home/bottom-sheet_modal_graduation-03-hotjar-level-2.html" },
    { id: "bottom-sheet-13", content: "content/home/bottom-sheet_modal_graduation-04-hotjar-level-1.html" },
    { id: "bottom-sheet-14", content: "content/home/bottom-sheet_modal_graduation-05-unibh-ux.html" },
    { id: "bottom-sheet-15", content: "content/home/bottom-sheet_modal_graduation-06-unibh-design.html" },
    { id: "bottom-sheet-16", content: "content/home/bottom-sheet_modal_graduation-07-ebac-ui.html" },
    { id: "bottom-sheet-17", content: "content/home/bottom-sheet_modal_graduation-08-unibh-pp.html" },
    { id: "bottom-sheet-18", content: "content/home/bottom-sheet_modal_graduation-09-newton-adm.html" }
  ];

  const menuButtons = [
    { id: "cb--menu-mobile--option-5", content: "content/menu-mobile/bottom-sheet_modal_menu-mobile-5.html" }
  ];

  const popup = document.getElementById("cb_bottom-sheet--block-content");
  const menuPopup = document.getElementById("cb_bottom-sheet--block-content_menu-mobile");
  const overlay = document.getElementById("cb_overlay");
  const contentDiv = document.getElementById("content-bottom-sheet");
  const menuContentDiv = document.getElementById("menu-mobile--content--bottom-sheet");
  const closeButton = document.getElementById("cb_btn-icon-close--bottom-sheet");
  const menuCloseButton = document.getElementById("cb_btn-icon-close--bottom-sheet--menu-mobile");

  // Função para carregar conteúdo HTML no popup
  function loadContent(url, targetDiv) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        targetDiv.innerHTML = html;
        targetDiv.scrollTop = 0;
      })
      .catch(error => console.error("Erro ao carregar o conteúdo:", error));
  }

  // Função para abrir o popup
  function openPopup(url) {
    loadContent(url, contentDiv);
    popup.style.display = "flex";
    overlay.style.display = "flex";
  }

  // Função para abrir o popup do menu mobile
  function openMenuPopup(url) {
    loadContent(url, menuContentDiv);
    menuPopup.style.display = "flex";
    overlay.style.display = "flex";
  }

  // Associa os eventos de clique aos botões
  buttons.forEach(({ id, content }) => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", () => openPopup(content));
    }
  });

  // Associa os eventos de clique aos botões do menu mobile
  menuButtons.forEach(({ id, content }) => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", () => openMenuPopup(content));
    }
  });

  // Função para fechar o popup
  function closePopup() {
    popup.style.display = "none";
    menuPopup.style.display = "none";
    overlay.style.display = "none";
  }

  // Fecha o popup ao clicar no botão de fechar do conteúdo padrão
  if (closeButton) {
    closeButton.addEventListener("click", closePopup);
  }

  // Fecha o popup ao clicar no botão de fechar do menu mobile
  if (menuCloseButton) {
    menuCloseButton.addEventListener("click", closePopup);
  }

  // Fecha o popup ao clicar no overlay
  if (overlay) {
    overlay.addEventListener("click", closePopup);
  }

  // Captura todos os botões com a classe "button-menu-mobile-links"
  const menuLinks = document.querySelectorAll(".button-menu-mobile-links");

  menuLinks.forEach(link => {
    link.addEventListener("click", closePopup);
  });
});
