// Función para verificar si el elemento está en el viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para agregar la clase visible cuando el contenido esté en el viewport
function checkVisibility() {
  const scrollTexts = document.querySelectorAll(".scroll-text");
  const contentCards = document.querySelectorAll(".content-card");

  // Verificación para los textos
  scrollTexts.forEach((text) => {
    if (isInViewport(text)) {
      text.classList.add("visible");
    } else {
      text.classList.remove("visible");
    }
  });

  // Verificación para las tarjetas
  contentCards.forEach((card) => {
    if (isInViewport(card)) {
      card.classList.add("visible");
    } else {
      card.classList.remove("visible");
    }
  });
}

// Escuchar el evento de scroll
window.addEventListener("scroll", checkVisibility);

// Ejecutar al cargar la página
window.addEventListener("load", checkVisibility);
