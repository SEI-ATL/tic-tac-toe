//DOM elements
const zeroZero = document.getElementById("zero-zero");
const zeroOne = document.getElementById("zero-one");
const zeroTwo = document.getElementById("zero-two");
const oneZero = document.getElementById("one-zero");
const oneOne = document.getElementById("one-one");
const oneTwo = document.getElementById("one-two");
const twoZero = document.getElementById("two-zero");
const twoOne = document.getElementById("two-one");
const twoTwo = document.getElementById("two-two");

//event listeners
zeroZero.addEventListener("click", addHtml);
zeroOne.addEventListener("click", addHtml);
zeroTwo.addEventListener("click", addHtml);
oneZero.addEventListener("click", addHtml);
oneOne.addEventListener("click", addHtml);
oneTwo.addEventListener("click", addHtml);
twoZero.addEventListener("click", addHtml);
twoOne.addEventListener("click", addHtml);
twoTwo.addEventListener("click", addHtml);

//variables
const winner = false;
const lastChoice = [];
const selections = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//functions
function addHtml() {
  if (this.hasChildNodes()) {
    console.log("already selected");
  } else if (lastChoice[0] == "O" || lastChoice[0] == null) {
    xTurn(this);
  } else {
    oTurn(this);
  }
  gameTracker();
}

function xTurn(ele) {
  lastChoice.unshift("X");
  let x = document.createElement("h2");
  x.innerHTML = "X";
  ele.appendChild(x);
  selections[ele.dataset.row][ele.dataset.col] = 1;
}

function oTurn(ele) {
  lastChoice.unshift("O");
  let o = document.createElement("h2");
  o.innerHTML = "O";
  ele.appendChild(o);
  selections[ele.dataset.row][ele.dataset.col] = -1;
}

function gameTracker() {
  let rows = [0, 0, 0];
  let cols = [0, 0, 0];
  let diag = [0, 0];
  rowSum(rows);
  colSum(cols);
  checkForWinner(rows);
  checkForWinner(cols);
  console.log(lastChoice.length);
}

function rowReducer(total, val) {
  return total + val;
}

function colReducer(col) {
  let sum = 0;
  for (let i = 0; i < selections.length; i++) {
    for (let j = col; j < col + 1; j++) {
      sum += selections[i][j];
    }
  }
  return sum;
}

function rowSum(array) {
  array[0] = selections[0].reduce(rowReducer);
  array[1] = selections[1].reduce(rowReducer);
  array[2] = selections[2].reduce(rowReducer);
}

function colSum(array) {
  array[0] = colReducer(0);
  array[1] = colReducer(1);
  array[2] = colReducer(2);
}

function checkForWinner(array) {
  if (lastChoice.length < 7) {
    array.forEach((i) => {
      if (i === 3 || i === -3) {
        gameOverWin();
      }
    });
  } else {
    gameOverTie();
  }
}

function gameOverWin() {
  console.log("Winner!!!!!");
}

function gameOverTie() {
  console.log("its a tie.");
}
//TODO
//count diagonal victory
console.log(lastChoice.length);
