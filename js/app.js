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
const lastChoice = [];
const selections = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//functions
function addHtml() {
  checkForWinner();
  if (this.hasChildNodes()) {
    console.log("already selected");
  } else if (lastChoice[0] == "O" || lastChoice[0] == null) {
    xTurn(this);
  } else {
    oTurn(this);
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

function checkForWinner() {
  for (let i = 0; i < selections.length; i++) {
    for (let j = 0; j < selections[i].length; j++) {
    }
  }
}


