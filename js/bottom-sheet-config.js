document.addEventListener("DOMContentLoaded", function () {
  const buttons = [
    { id: "bottom-sheet-01", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_heatmap-move-mouse.html" },
    { id: "bottom-sheet-02", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_heatmap-click.html" },
    { id: "bottom-sheet-03", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_heatmap-scroll.html" },
    { id: "bottom-sheet-04", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_pesquisa-matriz-csd.html" },
    { id: "bottom-sheet-05", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_pesquisa-hipoteses.html" },
    { id: "bottom-sheet-06", content: "content/revisao-ux-ui-apoio-entrega/bottom-sheet_modal_pesquisa-pesquisa-formulario.html" }
  ];

  const popup = document.getElementById("cb_bottom-sheet--block-content");
  const overlay = document.getElementById("cb_overlay");
  const contentDiv = document.getElementById("content-bottom-sheet");

  // Função para carregar conteúdo HTML no popup
  function loadContent(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        contentDiv.innerHTML = html; // Insere o conteúdo na div
        contentDiv.scrollTop = 0;   // Reinicia o scroll para o topo
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

  // Fecha o popup ao clicar nele
  popup.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });

  // Fecha o popup ao clicar no overlay
  overlay.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });
});

