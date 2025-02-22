// // Filtro seletores acadêmico
//   document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll(".selector-button");
//     const carousel = document.getElementById("carousel-academic-graduation");

//     if (!carousel || buttons.length === 0) return;

//     const categoryClasses = {
//       "academic-select-button_04": ["curso-pos"],
//       "academic-select-button_03": ["curso-graduacao"],
//       "academic-select-button_02": ["curso-geral"],
//       "academic-select-button_01": ["curso-certificacao"],
//       "academic-select-button_05": ["curso-geral", "curso-certificacao", "curso-pos", "curso-graduacao"],
//     };

//     function filterCards(selectedId) {
//       const selectedCategories = categoryClasses[selectedId] || [];
//       const allCards = carousel.querySelectorAll(".curso-geral, .curso-certificacao, .curso-pos, .curso-graduacao");

//       allCards.forEach((card) => {
//         if (selectedCategories.includes([...card.classList].find(c => categoryClasses["academic-select-button_05"].includes(c)))) {
//           card.style.display = "block"; // Exibe o card
//         } else {
//           card.style.display = "none"; // Oculta o card
//         }

//         // Reseta as margens antes de definir as novas
//         card.style.marginLeft = "0";
//         card.style.marginRight = "0";
//       });

//       if (window.innerWidth < 1024) {
//         // Obtém os cards visíveis após o filtro
//         const visibleCards = [...allCards].filter(card => card.style.display === "block");

//         if (visibleCards.length > 0) {
//           visibleCards[0].style.marginLeft = "10%"; // Primeiro card visível
//           visibleCards[visibleCards.length - 1].style.marginRight = "10%"; // Último card visível
//         }
//       }
//     }

//     buttons.forEach((button) => {
//       button.addEventListener("click", function () {
//         buttons.forEach((btn) => btn.classList.remove("selector-button--selected")); // Remove a classe de todos
//         this.classList.add("selector-button--selected"); // Adiciona ao botão clicado

//         filterCards(this.id); // Aplica o filtro correspondente
//       });
//     });

//     filterCards("academic-select-button_05"); // Exibe todos os cards no carregamento
//   });
// // End, filtro seletores acadêmico

// // Filtro seletores de experiência profissional
// document.addEventListener("DOMContentLoaded", function () {
//   const buttons = document.querySelectorAll(".selector-button-work");
//   const carousel = document.getElementById("carousel-work-experience");

//   if (!carousel || buttons.length === 0) return;

//   const categoryClasses = {
//     "work-select-button_08": ["xp-gsn"],
//     "work-select-button_07": ["xp-bits"],
//     "work-select-button_06": ["xp-cdr-3"],
//     "work-select-button_05": ["xp-cdr-2"],
//     "work-select-button_04": ["xp-cdr-1"],
//     "work-select-button_03": ["xp-naturivida"],
//     "work-select-button_02": ["xp-eb-br"],
//     "work-select-button_01": ["xp-suggar"],
//   };

//   function filterCards(selectedId) {
//     const selectedCategories = categoryClasses[selectedId] || [];
//     const allCards = carousel.querySelectorAll(".xp-gsn, .xp-bits, .xp-cdr-3, .xp-cdr-2, .xp-cdr-1, .xp-naturivida, .xp-eb-br, .xp-suggar");

//     allCards.forEach((card) => {
//       if (selectedCategories.includes([...card.classList].find(c => categoryClasses[selectedId].includes(c)))) {
//         card.style.display = "block"; // Exibe o card correspondente
//       } else {
//         card.style.display = "none"; // Oculta os demais
//       }
//     });
//   }

//   buttons.forEach((button) => {
//     button.addEventListener("click", function () {
//       buttons.forEach((btn) => btn.classList.remove("selector-button-work--selected")); // Remove a classe de todos
//       this.classList.add("selector-button-work--selected"); // Adiciona ao botão clicado

//       filterCards(this.id); // Aplica o filtro correspondente
//     });
//   });

//   filterCards("work-select-button_08"); // Exibe o primeiro item por padrão ao carregar a página
// });
// // End, filtro seletores de experiência profissional
document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    {
      buttonsSelector: ".selector-button",
      carouselId: "carousel-academic-graduation",
      defaultSelection: "academic-select-button_05",
      categoryClasses: {
        "academic-select-button_04": ["curso-pos"],
        "academic-select-button_03": ["curso-graduacao"],
        "academic-select-button_02": ["curso-geral"],
        "academic-select-button_01": ["curso-certificacao"],
        "academic-select-button_05": ["curso-geral", "curso-certificacao", "curso-pos", "curso-graduacao"],
      },
      selectedClass: "selector-button--selected"
    },
    {
      buttonsSelector: ".selector-button-work",
      carouselId: "cb_work-experiences",
      defaultSelection: "work-select-button_08",
      categoryClasses: {
        "work-select-button_08": ["xp-gsn"],
        "work-select-button_07": ["xp-bits"],
        "work-select-button_06": ["xp-cdr-3"],
        "work-select-button_05": ["xp-cdr-2"],
        "work-select-button_04": ["xp-cdr-1"],
        "work-select-button_03": ["xp-naturivida"],
        "work-select-button_02": ["xp-eb-br"],
        "work-select-button_01": ["xp-suggar"],
      },
      selectedClass: "selector-button-work--selected"
    }
  ];

  sections.forEach(({ buttonsSelector, carouselId, defaultSelection, categoryClasses, selectedClass }) => {
    const buttons = document.querySelectorAll(buttonsSelector);
    const carousel = document.getElementById(carouselId);

    if (!carousel || buttons.length === 0) return;

    function filterCards(selectedId) {
      const selectedCategories = categoryClasses[selectedId] || [];
      const allCards = carousel.querySelectorAll(Object.values(categoryClasses).flat().map(cls => `.${cls}`).join(", "));

      allCards.forEach((card) => {
        if (selectedCategories.some(c => card.classList.contains(c))) {
          card.style.display = "block"; // Exibe o card correspondente
        } else {
          card.style.display = "none"; // Oculta os demais
        }
      });
    }

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove a classe de todos os botões da seção
        buttons.forEach((btn) => btn.classList.remove(selectedClass));
        this.classList.add(selectedClass); // Adiciona ao botão clicado

        filterCards(this.id); // Aplica o filtro correspondente
      });
    });

    filterCards(defaultSelection); // Exibe o item padrão ao carregar a página
  });
});


