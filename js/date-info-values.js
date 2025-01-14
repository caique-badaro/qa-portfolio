document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear(); // Obtém o ano atual
  document.getElementById("current-year").textContent = currentYear; // Insere o ano no elemento
});
