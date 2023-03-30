

isName=(name)=> (/^[a-záéíóúüñ]+\s?[a-záéíóúüñ]*\s?[a-záéíóúüñ]*$/i).test(name);
isNumber=(movil) => (/[6789]\d{8}/).test(movil);

function comprobarFormulario() {
  const nombreInput = document.getElementById("nombreFormulario");
  const movilInput = document.getElementById("movil");
  const esNombreValido = isName(nombreInput.value);
  nombreInput.setCustomValidity(esNombreValido ? '' : 'Por favor, ingrese un nombre completo válido');
  const esTelefonoValido = isNumber(movilInput.value);
  movilInput.setCustomValidity(esTelefonoValido ? '' : 'Por favor, ingrese un teléfono móvil español válido');
}

const boton = document.getElementById("submitBoton");
boton.addEventListener('click', comprobarFormulario);