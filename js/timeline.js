/*
$(document).ready(function() {
    $(window).scroll(function() {
      var sectionTop = $('.container').offset().top;
      var scrollTop = $(window).scrollTop();
  
      if (scrollTop >= sectionTop) {
        var delay = 0;
        $('.fade-in').each(function() {
          var el = $(this);
          setTimeout(function() {
            el.parent().addClass('active');
          }, delay);
          delay += 1000;
        });
      } else {
        $('.container').removeClass('active');
        $('.container').css('height', 'auto');
      }
    });
  });
  */

function leerJSON() {
  fetch('../ajax/timeline.json')
  .then(response => response.json())
  .then(json => {
    for(x in json.Evento){
      console.log(json.Evento[x].Nombre);
    }
  });
}