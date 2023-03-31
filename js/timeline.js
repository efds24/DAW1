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
      bloque.childNodes[x].innerHTML = ordenados[x].Nombre;
    }
  });
}