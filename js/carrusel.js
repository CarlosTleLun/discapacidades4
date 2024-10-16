document.addEventListener("DOMContentLoaded", function () {
  var mainCarrusel = new Swiper(".main-carrusel", {
    slidesPerView: 3, // Número de diapositivas visibles
    centeredSlides: true,
    spaceBetween: 20,
    loop: true, // Habilitar el bucle para que pueda ir de la última a la primera
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 4000, // Velocidad de transición
    navigation: {
      nextEl: ".swiper-button-next", // Referencias correctas
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});
