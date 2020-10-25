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
const clickToStart = document.getElementById("start-text");
const ticTacToe = document.getElementById("title");
const xScoreBoard = document.getElementById("x-score");
const oScoreBoard = document.getElementById("o-score");
const domArray = [
  zeroZero,
  zeroOne,
  zeroTwo,
  oneZero,
  oneOne,
  oneTwo,
  twoZero,
  twoOne,
  twoTwo,
];

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
var lastChoice = [];
var xScore = 0;
var oScore = 0;
var selections = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//functions
function addHtml() {
  clickToStart.style.color = "#16262E";
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
  checkForGameDecided(rows, cols, diag);
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

function checkForGameDecided(row, col, diag) {
  let arrays = row.concat(col, diag);
  if (lastChoice.length != 9) {
    arrays.forEach((i) => {
      if (i == 3 || i == -3) {
        gameOverWin(i);
        animateWinners(arrays);
      }
    });
  } else {
    arrays.forEach((i) => {
      if (i == 3 || i == -3) {
        gameOverWin(i);
        animateWinners(arrays);
      }
    });
    if (Math.max(...arrays) !== 3 && Math.min(...arrays) !== -3) {
      gameOverTie();
    }
  }
}

function gameOverWin(winner) {
  gameDecided = true;
  if (winner > 0) {
    xScore++;
    xScoreBoard.innerText = `${xScore}`;
    ticTacToe.style.letterSpacing = "7px";
    ticTacToe.innerText = "X's Win!";
  } else {
    oScore++;
    oScoreBoard.innerText = `${oScore}`;
    ticTacToe.style.letterSpacing = "7px";
    ticTacToe.innerText = "O's Win!";
  }
}

function gameOverTie() {
  gameDecided = true;
  ticTacToe.style.letterSpacing = "7px";
  ticTacToe.innerText = "It's a tie";
}

function clearDom(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].firstChild) {
      array[i].firstChild.remove();
    }
  }
}

function reset() {
  clearDom(domArray);
  lastChoice = [];
  selections = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  ticTacToe.style.letterSpacing = "0";
  ticTacToe.innerText = "Tic-Tac-Toe";
  clickToStart.style.color = "#E0FF4F";
  gameDecided = false;
}

function animateWinners(array) {
  console.log(array);
  if (array[0] == 3 || array[0] == -3) {
    zeroZero.firstChild.classList.add('blink_me');
    zeroOne.firstChild.classList.add('blink_me');
    zeroTwo.firstChild.classList.add('blink_me');
  }
  if (array[1] == 3 || array[1] == -3) {
    oneZero.firstChild.classList.add('blink_me');
    oneOne.firstChild.classList.add('blink_me');
    oneTwo.firstChild.classList.add('blink_me');
  }
  if (array[2] == 3 || array[2] == -3) {
    twoZero.firstChild.classList.add('blink_me');
    twoOne.firstChild.classList.add('blink_me');
    twoTwo.firstChild.classList.add('blink_me');
  }
  if (array[3] == 3 || array[3] == -3) {
    zeroZero.firstChild.classList.add('blink_me');
    oneZero.firstChild.classList.add('blink_me');
    twoZero.firstChild.classList.add('blink_me');
  }
  if (array[4] == 3 || array[4] == -3) {
    zeroOne.firstChild.classList.add('blink_me');
    oneOne.firstChild.classList.add('blink_me');
    twoOne.firstChild.classList.add('blink_me');
  }
  if (array[5] == 3 || array[5] == -3) {
    zeroTwo.firstChild.classList.add('blink_me');
    oneTwo.firstChild.classList.add('blink_me');
    twoTwo.firstChild.classList.add('blink_me');
  }
  if (array[6] == 3 || array[6] == -3) {
    zeroZero.firstChild.classList.add('blink_me');
    oneOne.firstChild.classList.add('blink_me');
    twoTwo.firstChild.classList.add('blink_me');
  }
  if (array[7] == 3 || array[7] == -3) {
    zeroTwo.firstChild.classList.add('blink_me');
    oneOne.firstChild.classList.add('blink_me');
    twoZero.firstChild.classList.add('blink_me');
  }
}

//TODO

//winner and tie display message
