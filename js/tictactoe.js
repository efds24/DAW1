const celdas = document.getElementsByClassName('cell');
var ronda=0;

for (let i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click', colocarBloque);
}

function colocarBloque(event) {
    const celda = event.target;
    if (celda.innerHTML == "") {
        celda.innerHTML = "x";
        ronda++;
        
        let vic = gano();
        if (vic != "x" && vic != "o" && ronda!=5) {
            let o = Math.round(Math.random() * 8);
            while (celdas[o].innerHTML!=""){ 
                o = (o + 1) % 8;
            }
            celdas[o].innerHTML = "o";
            celdas[o].classList.add('blue');
        }
        vic = gano();
        if (vic == "x") {
            document.getElementById('victory').innerHTML = "HAS GANADO";
            acabo();
        } else if (vic == "o") {
            document.getElementById('victory').innerHTML = "HAS PERDIDO";
            acabo();
        }else if(ronda==5){
            document.getElementById('victory').innerHTML = "EMPATE";
            acabo();
        }
    }
}

function acabo() {
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].removeEventListener('click', colocarBloque);
    }
}

document.getElementById('center').addEventListener('click', clear);

function clear() {
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].innerHTML = "";
    }
    let a = document.getElementById('victory');
    a.innerHTML = "";
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].addEventListener('click', colocarBloque);
        celdas[i].classList.remove('blue');
    }
    ronda=0;
}

function gano() {
    // Comprobar si hay una fila con tres elementos iguales
    for (let fila = 0; fila < 9; fila += 3) {
        if (celdas[fila].innerHTML == celdas[fila + 1].innerHTML && celdas[fila + 1].innerHTML == celdas[fila + 2].innerHTML && celdas[fila].innerHTML != '') {
            return celdas[fila].innerHTML;
        }
    }
    // Comprobar si hay una columna con tres elementos iguales
    for (let columna = 0; columna < 3; columna++) {
        if (celdas[columna].innerHTML == celdas[columna + 3].innerHTML && celdas[columna + 3].innerHTML == celdas[columna + 6].innerHTML && celdas[columna].innerHTML != '') {
            return celdas[columna].innerHTML;
        }
    }
    // Comprobar las diagonales
    if (celdas[0].innerHTML == celdas[4].innerHTML && celdas[4].innerHTML == celdas[8].innerHTML && celdas[0].innerHTML != '') {
        return celdas[0].innerHTML;
    }
    if (celdas[2].innerHTML === celdas[4].innerHTML && celdas[4].innerHTML === celdas[6].innerHTML && celdas[2].innerHTML != '') {
        return celdas[2].innerHTML;
    }
    // Si no se cumplió ninguna de las condiciones anteriores, no hay victoria
    return "";
}