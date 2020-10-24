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
var gameDecided = false;
const lastChoice = [];
const selections = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//functions
function addHtml() {
  if (gameDecided === false) {
    if (this.hasChildNodes()) {
      console.log("already selected");
    } else if (lastChoice[0] == "O" || lastChoice[0] == null) {
      xTurn(this);
    } else {
      oTurn(this);
    }
    gameTracker();
  }
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
  diagSum(diag);
  checkForgameDecided(rows, cols, diag);
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

function diagReducer1(diag) {
  let sum1 = 0;
  sum1 += selections[0][0];
  sum1 += selections[1][1];
  sum1 += selections[2][2];
  return sum1;
}

function diagReducer2(diag) {
  let sum2 = 0;
  sum2 += selections[0][2];
  sum2 += selections[1][1];
  sum2 += selections[2][0];
  return sum2;
}

function diagSum(array) {
  array[0] = diagReducer1(array);
  array[1] = diagReducer2(array);
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

function checkForgameDecided(row, col, diag) {
  let arrays = [row, col, diag];
  if (lastChoice.length < 9) {
    for (let i = 0; i < arrays.length; i++) {
      arrays[i].forEach((i) => {
        if (i === 3 || i === -3) {
          gameOverWin(i);
        }
      });
    }
  } else {
    gameOverTie();
  }
}

function gameOverWin(winner) {
  gameDecided = true;
  if (winner > 0) {
    console.log("X's win!!!!");
  } else {
    console.log("O's win!!!!!");
  }
}

function gameOverTie() {
  gameDecided = true;
  console.log("its a tie.");
}
//TODO
//count diagonal victory

