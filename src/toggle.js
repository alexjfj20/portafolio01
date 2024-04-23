// Selecciona el elemento del interruptor y agrega un listener de eventos.
const switchElement = document.getElementById("switch");

function toggleDarkMode() {
  // Obtiene el elemento body.
  const body = document.body;

  // Alterna la clase "dark-mode" en el elemento body.
  body.classList.toggle("dark-mode");

  // Guarda la preferencia del usuario en localStorage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode-preference", isDarkMode.toString());

  // Cambia el estado del interruptor visualmente.
  switchElement.classList.toggle("active");
}

switchElement.addEventListener("click", toggleDarkMode);

// Verifica la preferencia del usuario en localStorage (si la has guardado previamente) y aplica el modo oscuro si es necesario.
document.addEventListener("DOMContentLoaded", function () {
  const userPreference = localStorage.getItem("dark-mode-preference");
  if (userPreference === "true") {
    const body = document.body;
    body.classList.add("dark-mode");
    switchElement.classList.add("active");
  }
});

