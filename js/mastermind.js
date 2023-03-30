const solucion = [
  Math.round(Math.random() * 5),
  Math.round(Math.random() * 5),
  Math.round(Math.random() * 5),
  Math.round(Math.random() * 5)
];
let actual = [6, 6, 6, 6];
console.log(solucion);
let round = 0;

function cambiarColor(event) {

  const pinElement = event.target;
  let number = actual[pinElement.id];

  if (number == 6) {
    pinElement.style.backgroundColor = "pink";
  } else if (number == 1) {
    pinElement.style.backgroundColor = "red";
  } else if (number == 2) {
    pinElement.style.backgroundColor = "purple";
  } else if (number == 3) {
    pinElement.style.backgroundColor = "blue";
  } else if (number == 4) {
    pinElement.style.backgroundColor = "yellow";
  } else if (number == 5) {
    pinElement.style.backgroundColor = "green";
  } else if (number == 0) {
    pinElement.style.backgroundColor = "pink";
  }
  actual[pinElement.id] = (actual[pinElement.id] + 1) % 6;
}

function comprobar() {
  let text = "";
  let aux = solucion.slice();
  let total=1;
  let negro=0;
  
  //Acierto total
  for (j = 0; j < 4; j++) {
    if (actual[j] == aux[j]) {
      document.getElementById("dot"+total.toString()).style.backgroundColor="black";
      actual[j] = -1;
      aux[j] = -1;
      total++;
      negro++;
    }
  }
  //Acierto parcial
  for (i = 0; i < 4; i++) {

    if (aux[i] > 0) {

      for (j = 0; j < 4; j++) {
        if (actual[j] == aux[i]) {
          document.getElementById("dot"+total.toString()).style.backgroundColor="grey";
          actual[j] = -1;
          total++;
        }
      }
    }
  }

  if(negro!=4)  nuevaRonda();
  else{
    let victoria = document.createElement('h1');
    victoria.textContent="HAS GANADO";
    document.getElementById('center').append(victoria);
    document.getElementById('boton').remove();
  }
}

function nuevaRonda(){
  round++;

  //Limpiamos lo anterior
  let pines = document.querySelectorAll('.pin');
  pines.forEach(pin => {
    pin.removeEventListener('click', cambiarColor);
    pin.removeAttribute('id');
    pin.classList.add('acabado')
  });

  let cubos = document.querySelectorAll('.dot');
  cubos.forEach(punto => {
    punto.removeAttribute('id');
  });

  //Empezamos a generar una nueva ronda
  let juego = document.getElementById('juego');
  let container = document.createElement('div');
  container.classList.add('container');
  for (i=0;i<4;i++){
    let pin = document.createElement('div');
    pin.classList.add('pin');
    pin.addEventListener('click',cambiarColor);
    pin.id=i;
    container.append(pin);
  }

  //Creamos el cuadrado para dar las soluciones
  let square = document.createElement('div');
  square.classList.add('square');
  for(i=0;i<2;i++){
    let column = document.createElement('div');
    column.classList.add("column");
    for(j=0;j<2;j++){
      let dot = document.createElement('span');
      dot.classList.add("dot");
      dot.id="dot"+(i+(j*2)+1).toString();
      column.append(dot);
    }
    square.append(column);
  }

  container.append(square);

  juego.append(container);
  actual=[6,6,6,6];
}


const pins = document.querySelectorAll('.pin');
const boton = document.getElementById('boton');

boton.addEventListener('click', comprobar);

pins.forEach(pin => {
  pin.addEventListener('click', cambiarColor);
});

/**
 * 1 - PINK
 * 2 - RED
 * 3 - PURPLE
 * 4 - BLUE
 * 5 - YELLOW
 * 0 - GREEN 
 */