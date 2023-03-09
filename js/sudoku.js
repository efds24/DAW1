const sudokuSize = 9;
    let board = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    // Render the Sudoku board
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
          if ((j+1) % 3 === 0 && j !== 8) {
            cell.classList.add('borde-derecho');
          }
          if ((i+1) % 3 === 0 && i !== 8) {
            cell.classList.add('borde-abajo');
          }
          //CAMBIAR ESTO PARA HACERLO RECHULON
          cell.onclick = function() {
            if (!cell.classList.contains("initial")) {
              let num = prompt("Enter a number (1-9)");
              if (num !== null) {
                num = parseInt(num);
                if (num >= 1 && num <= 9) {
                  board[i][j] = num;
                  renderBoard();
                }
              }
            }
          };
          row.appendChild(cell);
        }
        table.appendChild(row);
      }
    }

    function isValid(board, row, col, num) {
        // Check row
        for (let i = 0; i < sudokuSize; i++) {
          if (board[row][i] === num && i !== col) {
            return false;
          }
        }
        // Check column
        for (let i = 0; i < sudokuSize; i++) {
          if (board[i][col] === num && i !== row) {
            return false;
          }
        }
        // Check 3x3 box
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
            alert("Invalid Sudoku!");
            return;
          }
        }
      }
      alert("Valid Sudoku!");
    }

    function clearSudoku() {
        board = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
          ];
          renderBoard();
        }
  
  

    function startGame() {
        renderBoard();
    }