
document.addEventListener("DOMContentLoaded", function () {
  // Filtro seletores acadêmico
  const academicButtons = document.querySelectorAll(".selector-button");
  const academicCarousel = document.getElementById("carousel-academic-graduation");

  if (academicCarousel && academicButtons.length > 0) {
    const academicCategoryClasses = {
      "academic-select-button_04": ["curso-pos"],
      "academic-select-button_03": ["curso-graduacao"],
      "academic-select-button_02": ["curso-geral"],
      "academic-select-button_01": ["curso-certificacao"],
      "academic-select-button_05": ["curso-geral", "curso-certificacao", "curso-pos", "curso-graduacao"],
    };

    function filterAcademicCards(selectedId) {
      const selectedCategories = academicCategoryClasses[selectedId] || [];
      const allCards = academicCarousel.querySelectorAll(".curso-geral, .curso-certificacao, .curso-pos, .curso-graduacao");

      allCards.forEach((card) => {
        if (selectedCategories.includes([...card.classList].find(c => academicCategoryClasses["academic-select-button_05"].includes(c)))) {
          card.style.display = "block"; // Exibe o card
        } else {
          card.style.display = "none"; // Oculta o card
        }

        // Reseta margens
        card.style.marginLeft = "0";
        card.style.marginRight = "0";
      });

      if (window.innerWidth < 1024) {
        const visibleCards = [...allCards].filter(card => card.style.display === "block");

        if (visibleCards.length > 0) {
          visibleCards[0].style.marginLeft = "10%"; // Primeiro card visível
          visibleCards[visibleCards.length - 1].style.marginRight = "10%"; // Último card visível
        }
      }
    }

    academicButtons.forEach((button) => {
      button.addEventListener("click", function () {
        academicButtons.forEach((btn) => btn.classList.remove("selector-button--selected"));
        this.classList.add("selector-button--selected");

        filterAcademicCards(this.id);
      });
    });

    filterAcademicCards("academic-select-button_05");
  }

  // Filtro seletores de experiência profissional (Agora usando ID correto: cb_work-experiences)
  const workButtons = document.querySelectorAll(".selector-button-work");
  const workCarousel = document.getElementById("cb_work-experiences");

  if (workCarousel && workButtons.length > 0) {
    const workCategoryClasses = {
      "work-select-button_08": ["xp-gsn"],
      "work-select-button_07": ["xp-bits"],
      "work-select-button_06": ["xp-cdr-3"],
      "work-select-button_05": ["xp-cdr-2"],
      "work-select-button_04": ["xp-cdr-1"],
      "work-select-button_03": ["xp-naturivida"],
      "work-select-button_02": ["xp-eb-br"],
      "work-select-button_01": ["xp-suggar"],
    };

    function filterWorkCards(selectedId) {
      const selectedCategories = workCategoryClasses[selectedId] || [];
      const allCards = workCarousel.querySelectorAll(".xp-gsn, .xp-bits, .xp-cdr-3, .xp-cdr-2, .xp-cdr-1, .xp-naturivida, .xp-eb-br, .xp-suggar");

      allCards.forEach((card) => {
        if (selectedCategories.includes([...card.classList].find(c => workCategoryClasses[selectedId].includes(c)))) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      // Atualiza a classe selecionada nos botões
      workButtons.forEach((btn) => btn.classList.remove("selector-button-work--selected"));
      document.getElementById(selectedId)?.classList.add("selector-button-work--selected");
    }

    workButtons.forEach((button) => {
      button.addEventListener("click", function () {
        filterWorkCards(this.id);
      });
    });

    filterWorkCards("work-select-button_08");
  }
});


