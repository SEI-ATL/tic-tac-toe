const squares = document.querySelectorAll(".square");
const squareOne = document.querySelector("#squareOne");
const squareTwo = document.querySelector("#squareTwo");
const squareThree = document.querySelector("#squareThree");
const squareFour = document.querySelector("#squareFour");
const squareFive = document.querySelector("#squareFive");
const squareSix = document.querySelector("#squareSix");
const squareSeven = document.querySelector("#squareSeven");
const squareEight = document.querySelector("#squareEight");
const squareNine = document.querySelector("#squareNine");
const newGame = document.querySelector("#newGame");
let gameOver = false;
let userXWinner = false;
let userOWinner = false;

newGame.onclick = startNewGame;

function startNewGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.remove("userX");
  }
}
for (const div of squares) {
  div.addEventListener("click", function (event) {
    if ((event.target.innerHTML = "")) {
      event.target.innerHTML = "X";
      event.target.className += " userX";
    } else if (event.target.className.includes(" userX")) {
      alert("Cannot use the same square twice!");
    } else if ((event.target.innerHTML = "X")) {
      event.target.className += " userX";
      setTimeout(myFunc, 2000);
      function myFunc() {
        let randomlyPickedSquare 
          mySquares[Math.floor(Math.random() * mySquares.length)];
        if (
          randomlyPickedSquare.innerHTML != "X" &&
          randomlyPickedSquare.innerHTML != "O"
        ) {
          randomlyPickedSquare.innerHTML= "O";
          
        } else if (
          randomlyPickedSquare.innerHTML == "X" ||
          randomlyPickedSquare.innerHTML == "O"
        ) {
          myFunc();
        } else {
          document.write("Game Over");
        }
      }
    }
  });
}

const mySquares = [
  squareNine,
  squareEight,
  squareSeven,
  squareSix,
  squareFive,
  squareFour,
  squareThree,
  squareTwo,
  squareOne
];