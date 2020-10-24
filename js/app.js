let gameboard = document.querySelector('.gameboard');
let squares = document.querySelectorAll('.square');
let promptPlayer1 = document.querySelector('.player1');
let promptPlayer2 = document.querySelector('.player2');
let outcomeMsg = document.querySelector('.outcome-msg')
let playAgain = document.querySelector('.play-again');

let player1 = true;
let turns = 0;
let gameOver = false;


// Handles the gameplay, i.e. what happens when a user clicks on a square

function displaySelection(event) {
  if (event.target.innerText !== '') {
    return;
  }
  if (player1 === true) {
    event.target.innerText = 'X';
    event.target.classList.add('1');
    promptPlayer1.style.visibility = 'hidden';
    promptPlayer2.style.visibility = 'visible';
    checkforWin('1');
    player1 = false;
  } else {
    event.target.innerText = 'O';
    event.target.classList.add('2');
    promptPlayer1.style.visibility = 'visible';
    promptPlayer2.style.visibility = 'hidden';
    checkforWin('2');
    player1 = true;
  }
  checkForTie();
}


// Handles a win

function checkforWin(player) {
  if (compareValues(0, 1, 2, player) === true ||
    compareValues(3, 4, 5, player) === true ||
    compareValues(6, 7, 8, player) === true ||
    compareValues(0, 3, 6, player) === true ||
    compareValues(1, 4, 7, player) === true ||
    compareValues(2, 5, 8, player) === true ||
    compareValues(0, 4, 8, player) === true ||
    compareValues(2, 4, 6, player) === true) {
    displayWinMsg(player);
  }
}

function compareValues(sq1, sq2, sq3, player) {
  if (squares[sq1].classList[1] === player &&
    squares[sq2].classList[1] === player &&
    squares[sq3].classList[1] === player) {
    return true;
  } else {
    return false;
  }
}

function displayWinMsg(player) {
  promptPlayer1.style.visibility = 'hidden';
  promptPlayer2.style.visibility = 'hidden';
  outcomeMsg.textContent = `Player ${player} wins!`;
  displayPlayAgain();
  gameOver = true;
}


// Handles a tie

function checkForTie() {
  if (turns < 8 || gameOver === true) {
    turns++;
  } else {
    displayTieMsg();
  }
}

function displayTieMsg() {
  promptPlayer1.style.visibility = 'hidden';
  promptPlayer2.style.visibility = 'hidden';
  outcomeMsg.textContent = `Damn, it's a tie.`;
  displayPlayAgain();
  gameOver = true;
}


// Handles the "Play again" prompt and resets the gameboard

function displayPlayAgain() {
  playAgain.textContent = `Play again`;
}

function resetGameboard() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    squares[i].className = 'square';
  }
  outcomeMsg.textContent = '';
  playAgain.textContent = '';
  promptPlayer1.style.visibility = 'visible';
  player1 = true;
  turns = 0;
  gameOver = false;
}


// Add event listeners

gameboard.addEventListener('click', displaySelection);
playAgain.addEventListener('click', resetGameboard);