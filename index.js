let turn = "X";
const winnerStatus = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];
let winner = null;
const buttons = document.querySelectorAll("button.btn-xo");
const buttonRestart = document.querySelector(".btn-restart");
buttons.forEach((item, i) => {
  item.addEventListener("click", () => handelClick(i));
});

buttonRestart.addEventListener("click", restartThGame);

function restartThGame() {
  winner = null;
  turn = "X";
  buttons.forEach((item, i) => {
    item.textContent = "";
    item.style.background = "transparent";
  });
}

function handelClick(index) {
  if (!winner && buttons[index].textContent === "") {
    fillSquare(buttons[index]);
    checkWinner();
    if (!winner) {
      changeTurn();
    }
  }
}

function fillSquare(square) {
  square.textContent = turn;
}

function changeTurn() {
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}

function checkWinner() {
  if (!winner) {
    winnerStatus.forEach(([a, b, c]) => {
      if (
        buttons[a].textContent !== "" &&
        buttons[a].textContent === buttons[b].textContent &&
        buttons[a].textContent === buttons[c].textContent
      ) {
        winner = buttons[a].textContent;
        buttons[a].style.backgroundColor = "white";
        buttons[b].style.backgroundColor = "white";
        buttons[c].style.backgroundColor = "white";
      }
    });
  }
}
