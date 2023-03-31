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
      let bloque = document.createElement("p");
      bloque.innerHTML = json.Evento[x].Nombre;
      document.querySelector("#bloques").append(bloque);
    }
  });
}

function orderBlocks(){
  fetch('../ajax/timeline.json')
  .then(response => response.json())
  .then(json => {
    let ordenados = json.Evento.sort(function(a, b) {return Number(a.Ano) - Number(b.Ano)});
    for(x in ordenados){
      let bloque = document.querySelector('#bloques');
      bloque.childNodes[x].innerHTML = ordenados.Evento[x].Nombre;
    }
  });
}