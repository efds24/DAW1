const nombreInput = document.getElementById('nombre');
const movilInput = document.getElementById('movil');

function isName(name){
    const regex = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/;
    return regex.test(nombre);
}

function isNumber(movil){
    const regex = /^(?:(?:(?:\+|00)34\D?))?(?:6(?:[ -]?\d){8}|7[1234](?:[ -]?\d){7})$/;
    return regex.test(movil);
}

nombreInput.addEventListener('input', function() {
  const esValido = isName(nombreInput.value);
  nombreInput.setCustomValidity(esValido ? '' : 'Por favor, ingrese un nombre completo válido');
});

nombreInput.addEventListener('invalid', function() {
  nombreInput.setCustomValidity('Por favor, ingrese un nombre completo válido');
});

nombreInput.addEventListener('change', function() {
  nombreInput.reportValidity();
});

movilInput.addEventListener('input', function() {
    const esValido = isName(movilInput.value);
    movilInput.setCustomValidity(esValido ? '' : 'Por favor, ingrese un teléfono móvil español válido');
});
  
movilInput.addEventListener('invalid', function() {
movilInput.setCustomValidity('Por favor, ingrese un teléfono móvil español válido');
});

movilInput.addEventListener('change', function() {
movilInput.reportValidity();
});
