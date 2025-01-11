// document.addEventListener("DOMContentLoaded", function () {
//     const button = document.getElementById("bottom-sheet-01");
//     const popup = document.getElementById("cb_bottom-sheet--block-content");
//     const overlay = document.getElementById("cb_overlay");

//     // Abre o popup e overlay
//     button.addEventListener("click", function () {
//       popup.style.display = "block";
//       overlay.style.display = "block";
//     });

//     // Fecha o popup ao clicar nele
//     popup.addEventListener("click", function () {
//       popup.style.display = "none";
//       overlay.style.display = "none";
//     });

//     // Adiciona a funcionalidade de fechamento ao overlay também, se necessário
//     overlay.addEventListener("click", function () {
//       popup.style.display = "none";
//       overlay.style.display = "none";
//     });
//   });


// document.addEventListener("DOMContentLoaded", function () {
//     const button1 = document.getElementById("bottom-sheet-01");
//     const button2 = document.getElementById("bottom-sheet-02");
//     const popup = document.getElementById("cb_bottom-sheet--block-content");
//     const overlay = document.getElementById("cb_overlay");

//     // Função para abrir o popup e overlay
//     function openPopup() {
//         popup.style.display = "block";
//         overlay.style.display = "block";
//     }

//     // Função para fechar o popup e overlay
//     function closePopup() {
//         popup.style.display = "none";
//         overlay.style.display = "none";
//     }

//     // Adiciona evento de clique para abrir o popup nos botões
//     button1.addEventListener("click", openPopup);
//     button2.addEventListener("click", openPopup);

//     // Fecha o popup ao clicar nele
//     popup.addEventListener("click", closePopup);

//     // Fecha o popup ao clicar no overlay
//     overlay.addEventListener("click", closePopup);
// });

document.addEventListener("DOMContentLoaded", function () {
  const button1 = document.getElementById("bottom-sheet-01");
  const button2 = document.getElementById("bottom-sheet-02");
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

  // Abre o popup e overlay e carrega o conteúdo do botão 1
  button1.addEventListener("click", function () {
    loadContent("content/bottom-sheet_modal-teste.html");
    popup.style.display = "block";
    overlay.style.display = "block";
  });

  // Abre o popup e overlay e carrega o conteúdo do botão 2
  button2.addEventListener("click", function () {
    loadContent("content/bottom-sheet_modal-reduced.html");
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
