// ----- Menú desplegable -----
document.querySelector('.dropdown-toggle').addEventListener('click', () => {
  document.querySelector('.dropdown').classList.toggle('open');
});

// Cerrar menú al hacer clic fuera
window.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelector('.dropdown').classList.remove('open');
  }
});

// ----- Modo oscuro / claro -----
const modoBtn = document.getElementById("modo-btn");
const logoHeader = document.getElementById("logo-header");

modoBtn.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
  if (document.body.classList.contains("modo-oscuro")) {
    logoHeader.src = "Imagenes/logo_claro.png";
    modoBtn.textContent = "☀ Modo claro";
  } else {
    logoHeader.src = "Imagenes/logo_oscuro.png";
    modoBtn.textContent = "🌙 Modo oscuro";
  }
});

// ----- Ajuste de tamaño de fuente -----
let currentFontSize = 16;

document.getElementById("increase-font").addEventListener("click", () => {
  currentFontSize += 1;
  document.documentElement.style.fontSize = currentFontSize + "px";
});

document.getElementById("decrease-font").addEventListener("click", () => {
  if (currentFontSize > 10) {
    currentFontSize -= 1;
    document.documentElement.style.fontSize = currentFontSize + "px";
  }
});

const searchBox = document.querySelector('.search-box');
const searchToggle = document.querySelector('.search-toggle');

searchToggle.addEventListener('click', () => {
  searchBox.classList.toggle('active');
});

