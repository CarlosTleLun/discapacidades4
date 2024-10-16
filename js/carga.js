
$(window).on('load', function() {
    // Ocultar el loader
    $('#loader').fadeOut('slow', function() {
      // También puedes ocultar el overlay si es necesario
      $('#overlay').fadeOut('slow');
      // Mostrar el cuerpo de la página
      $('body').removeClass('hidden');
    });
  });
  