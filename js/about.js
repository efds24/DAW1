const boton = document.getElementById("submitBoton");

function isName(name) {
  //const regex = /[a-záéíóúüñ]+([\s][a-záéíóúüñ]+)*([\s][a-záéíóúüñ])+/i;
  const regex = /^[a-záéíóúüñ]+\s?[a-záéíóúüñ]*\s?[a-záéíóúüñ]*$/i;
  return regex.test(name);
}

function isNumber(movil) {
  const regex = /[6789]\d{8}/;
  return regex.test(movil);
}

function comprobarFormulario() {
  const nombreInput = document.getElementById("nombreFormulario");
  const movilInput = document.getElementById("movil");
  const esNombreValido = isName(nombreInput.value);
  nombreInput.setCustomValidity(esNombreValido ? '' : 'Por favor, ingrese un nombre completo válido');
  const esTelefonoValido = isNumber(movilInput.value);
  movilInput.setCustomValidity(esTelefonoValido ? '' : 'Por favor, ingrese un teléfono móvil español válido');
}

boton.addEventListener('submit', comprobarFormulario);
