document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".selector-button");
  const carousel = document.getElementById("carousel-academic-graduation");

  if (!carousel || buttons.length === 0) return;

  const categoryClasses = {
    "academic-select-button_04": ["curso-pos"],
    "academic-select-button_03": ["curso-graduacao"],
    "academic-select-button_02": ["curso-geral"],
    "academic-select-button_01": ["curso-certificacao"],
    "academic-select-button_05": ["curso-geral", "curso-certificacao", "curso-pos", "curso-graduacao"],
  };

  function filterCards(selectedId) {
    const selectedCategories = categoryClasses[selectedId] || [];
    const allCards = carousel.querySelectorAll(".curso-geral, .curso-certificacao, .curso-pos, .curso-graduacao");

    allCards.forEach((card) => {
      if (selectedCategories.includes([...card.classList].find(c => categoryClasses["academic-select-button_05"].includes(c)))) {
        card.style.display = "block"; // Exibe o card
      } else {
        card.style.display = "none"; // Oculta o card
      }

      // Reseta as margens antes de definir as novas
      card.style.marginLeft = "0";
      card.style.marginRight = "0";
    });

    if (window.innerWidth < 1024) {
      // Obtém os cards visíveis após o filtro
      const visibleCards = [...allCards].filter(card => card.style.display === "block");

      if (visibleCards.length > 0) {
        visibleCards[0].style.marginLeft = "10%"; // Primeiro card visível
        visibleCards[visibleCards.length - 1].style.marginRight = "10%"; // Último card visível
      }
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("selector-button--selected")); // Remove a classe de todos
      this.classList.add("selector-button--selected"); // Adiciona ao botão clicado

      filterCards(this.id); // Aplica o filtro correspondente
    });
  });

  filterCards("academic-select-button_05"); // Exibe todos os cards no carregamento
});
