const sudokuSize = 9;
const board = Array.from({length: 9}, () => Array(9).fill(0));
var casillaActual;
let x=0;

function renderBoard() {
  let table = document.getElementById("sudoku");
  table.innerHTML = "";
  for (let i = 0; i < sudokuSize; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < sudokuSize; j++) {
      let cell = document.createElement("td");

      cell.id = `${i}${j}`;
      if (board[i][j] !== 0) {
        cell.innerText = board[i][j];
        cell.classList.add("initial");
      }
      if ((j + 1) % 3 === 0 && j !== 8) {
        cell.classList.add('borde-derecho');
      }
      if ((i + 1) % 3 === 0 && i !== 8) {
        cell.classList.add('borde-abajo');
      }
      cell.addEventListener('click',newNumber);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  if(document.getElementById('victory')!=null){
    document.getElementById('victory').remove();
  }
}

document.addEventListener('keydown',writeNumber);

function newNumber(event){
  if(x!=0)
    casillaActual.classList.remove('casilla-elegida');  
  x++;
  casillaActual = event.target;
  casillaActual.classList.add('casilla-elegida');
}

function writeNumber(event){
  if(!casillaActual.classList.contains("initial") && event.keyCode>48 && event.keyCode<58)
    casillaActual.innerHTML = event.key;
  if(!casillaActual.classList.contains("initial") && event.keyCode==8)
    casillaActual.innerHTML = "";
}

function isValid(board, row, col, num) {
  //Comprueba que no se repita el numero en la fila
  for (let i = 0; i < sudokuSize; i++) {
    if (board[row][i] === num && i !== col) {
      return false;
    }
  }  
  //Comprueba que no se repita el numero en la columna
  for (let i = 0; i < sudokuSize; i++) {
    if (board[i][col] === num && i !== row) {
      return false;
    }
  }  
  //Comprueba que no se repita el numero en las cajas
  let boxRow = Math.floor(row / 3) * 3;
  let boxCol = Math.floor(col / 3) * 3;
  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board[i][j] === num && i !== row && j !== col) {
        return false;
      }
    }
  }
  return true;
}

function checkSudoku() {
  for (let i = 0; i < sudokuSize; i++) {
    for (let j = 0; j < sudokuSize; j++) {
      if (board[i][j] === 0 || !isValid(board, i, j, board[i][j])) {
        alert("El sudoku es incorrecto :(");
        return;
      }
    }
  }
  let victory = document.createElement("h1");
  victory.id="victory";
  victory.innerHTML = "SUDOKU CORRECTO";
  document.querySelector("#center").before(victory);
}


function cargarTablero(fCallback){
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let xmlDoc = this.responseXML;
      let x = xmlDoc.getElementsByTagName("valor")
      for (let i=0;i<x.length;i++){
        board[Math.floor(i/9)][i%9] = Number(x[i].childNodes[0].nodeValue);
        
      }
      fCallback();
    }
  };
  
  xhttp.open("GET","../ajax/sudoku.xml",true);
  xhttp.send();
}

startGame= () =>  cargarTablero(renderBoard);