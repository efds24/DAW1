const nombreInput = document.getElementById("nombreFormulario");
const movilInput = document.getElementById('movil');
const boton = document.getElementById("submitBoton")

function isName(name){
    const regex = /^[a-záéíóúüñ]+([\s][a-záéíóúüñ]+)*[\s][a-záéíóúüñ]+$/i;
    return regex.test(nombre);
}

function isNumber(movil){
    const regex = /^[6789]\d{8}$/;
    return regex.test(movil);
}

function comprobarFormulario(){
  const esNombreValido = isName(nombreInput.value);
  nombreInput.setCustomValidity(esNombreValido ? '' : 'Por favor, ingrese un nombre completo válido');
  if(esNombreValido){
    nombreInput.style("color","red"); 
  }
  const esTelefonoValido = isName(movilInput.value);
  movilInput.setCustomValidity(esTelefonoValido ? '' : 'Por favor, ingrese un teléfono móvil español válido');
  if(esTelefonoValido){
    movilInput.style("color","red"); 
  }
}

boton.addEventListener('click', comprobarFormulario);
