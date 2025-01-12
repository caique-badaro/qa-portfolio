document.addEventListener("DOMContentLoaded", function () {
  // card heatmap mouse move
  const button1 = document.getElementById("bottom-sheet-01");
  // card heatmap clicks
  const button2 = document.getElementById("bottom-sheet-02");
  // card heatmap scroll
  const button3 = document.getElementById("bottom-sheet-03");

  const popup = document.getElementById("cb_bottom-sheet--block-content");
  const overlay = document.getElementById("cb_overlay");
  const contentDiv = document.getElementById("content-bottom-sheet");

  // Função para carregar conteúdo HTML no popup
  function loadContent(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        contentDiv.innerHTML = html; // Insere o conteúdo dentro da div
      })
      .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
      });
  }

  // Abre o popup e overlay e carrega o conteúdo do botão 1 = heatmap mouse move
  button1.addEventListener("click", function () {
    loadContent("content/bottom-sheet_modal_heatmap-move-mouse.html");
    popup.style.display = "block";
    overlay.style.display = "block";
  });

  // Abre o popup e overlay e carrega o conteúdo do botão 2 = heatmap clicks
  button2.addEventListener("click", function () {
    loadContent("content/bottom-sheet_modal_heatmap-move-mouse.html");
    popup.style.display = "block";
    overlay.style.display = "block";
  });

  // Abre o popup e overlay e carrega o conteúdo do botão 3 = heatmap scroll
  button3.addEventListener("click", function () {
    loadContent("content/bottom-sheet_modal_heatmap-scroll.html");
    popup.style.display = "block";
    overlay.style.display = "block";
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
