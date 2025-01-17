document.addEventListener("DOMContentLoaded", function () {
  const buttons = [
    { id: "bottom-sheet-01", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_heatmap-move-mouse.html" },
    { id: "bottom-sheet-02", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_heatmap-click.html" },
    { id: "bottom-sheet-03", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_heatmap-scroll.html" },
    { id: "bottom-sheet-04", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_pesquisa-matriz-csd.html" },
    { id: "bottom-sheet-05", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_pesquisa-hipoteses.html" },
    { id: "bottom-sheet-06", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_pesquisa-pesquisa-formulario.html" },
    { id: "bottom-sheet-07", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_project-prototype-mobile.html"},
    { id: "bottom-sheet-08", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_project-prototype-desktop.html"}
  ];

  const popup = document.getElementById("cb_bottom-sheet--block-content");
  const overlay = document.getElementById("cb_overlay");
  const contentDiv = document.getElementById("content-bottom-sheet");
  const closeButton = document.getElementById("cb_btn-icon-close--bottom-sheet");

  // Função para carregar conteúdo HTML no popup
  function loadContent(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        contentDiv.innerHTML = html;
        contentDiv.scrollTop = 0;
      })
      .catch(error => console.error("Erro ao carregar o conteúdo:", error));
  }

  // Função para abrir o popup
  function openPopup(url) {
    loadContent(url);
    popup.style.display = "flex";
    overlay.style.display = "flex";
  }

  // Associa os eventos de clique aos botões
  buttons.forEach(({ id, content }) => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", () => openPopup(content));
    }
  });

  // Função para fechar o popup
  function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
  }

  // Fecha o popup ao clicar no botão de fechar
  if (closeButton) {
    closeButton.addEventListener("click", closePopup);
  }

  // Fecha o popup ao clicar no overlay
  if (overlay) {
    overlay.addEventListener("click", closePopup);
  }
});
