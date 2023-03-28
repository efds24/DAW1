const celdas=document.getElementsByClassName('cell');

for(let i=0;i<celdas.length;i++){
    celdas[i].addEventListener('click',colocarBloque);
}

function colocarBloque(event){
    const celda = event.target;

    celda.innerHTML = "x";

    let
}

document.getElementById('center').addEventListener('click',clear);

function clear(){
    for(let i=0;i<celdas.length;i++){
        celdas[i].innerHTML="";
    }
}