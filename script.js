let currentPlayer = "X";

let moves = 0;

const board = document.getElementById("board");

const result = document.getElementById("result");

function makeMove(cell) {
  if (cell.textContent === "") {
    cell.textContent = currentPlayer;

    moves++;

    checkWinner();

    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  const cells = document.querySelectorAll(".cell");

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns

    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;

    if (
      cells[a].textContent !== "" &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      result.textContent = `${currentPlayer} wins!`;

      disableBoard();

      return;
    }
  }

  if (moves === 9) {
    result.textContent = "It's a draw!";
  }
}

function disableBoard() {
  const cells = document.querySelectorAll(".cell");

  for (const cell of cells) {
    cell.onclick = null;
  }
}
