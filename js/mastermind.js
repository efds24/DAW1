const solucion = [
  Math.round(Math.random() * 5),
  Math.round(Math.random() * 5),
  Math.round(Math.random() * 5),
  Math.round(Math.random() * 5)
];
let actual = [6, 6, 6, 6];

const white = "rgb(255, 255, 255)";
const pink = "rgb(255, 192, 203)";
const red = "rgb(255, 0, 0)";
const purple = "rgb(128, 0, 128)";
const blue = "rgb(0, 0, 255)";
const yellow = "rgb(255, 255, 0)";
const green = "rgb(0, 128, 0)";

let round = 0;

function cambiarColor(event) {

  const pinElement = event.target;
  const pinStyles = window.getComputedStyle(pinElement);

  const currentColor = pinStyles.getPropertyValue("background-color");

  if (currentColor == white) {
    pinElement.style.backgroundColor = "pink";
  } else if (currentColor == pink) {
    pinElement.style.backgroundColor = "red";
  } else if (currentColor == red) {
    pinElement.style.backgroundColor = "purple";
  } else if (currentColor == purple) {
    pinElement.style.backgroundColor = "blue";
  } else if (currentColor == blue) {
    pinElement.style.backgroundColor = "yellow";
  } else if (currentColor == yellow) {
    pinElement.style.backgroundColor = "green";
  } else if (currentColor == green) {
    pinElement.style.backgroundColor = "pink";
  }
  actual[pinElement.id] = (actual[pinElement.id] + 1) % 6;
  console.log(actual);
}

function comprobar() {
  let text = "";
  //FALTA ESTO
  for (j = 0; j < 4; j++) {
    for (i = 0; i < 4; i++) {
      if (actual[j] === solucion[i]) text = text + "1 ";
    }
  }
  document.getElementById('acierto').textContent = text;
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