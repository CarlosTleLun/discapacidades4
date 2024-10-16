document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var cards = document.querySelectorAll(".content-card");

    cards.forEach(function (card) {
      if (isElementInViewport(card)) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)"; // Desplazamiento hacia arriba a su posición original
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(350px)"; // Se desplaza hacia abajo fuera de la vista
      }
    });
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom > 0 // Detecta cuando el elemento está parcialmente visible
    );
  }
});
