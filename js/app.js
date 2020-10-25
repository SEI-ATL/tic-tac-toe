let gameboard = document.querySelector('.gameboard');
let squares = document.querySelectorAll('.square');
let topMsg = document.querySelector('.top-msg');
let promptPlayer1 = document.querySelector('.player1');
let promptPlayer2 = document.querySelector('.player2');
let outcomeMsg = document.querySelector('.outcome-msg')
let playAgain = document.querySelector('.play-again');
let xWinsTotal = document.querySelector('.wins.blue')
let oWinsTotal = document.querySelector('.wins.red')

let player1 = true;
let turns = 0;
let gameOver = false;
let xWins = 0;
let oWins = 0;


// Handles the gameplay, i.e. what happens when a user clicks on a square

function displaySelection(event) {
  if (event.target.textContent !== '') {
    return;
  } else if (gameOver === true) {
    return;
  }
  if (player1 === true) {
    event.target.textContent = 'X';
    event.target.classList.add('x');
    topMsg.innerHTML = '<h3>PLAYER 2, CAST YOUR VOTE<br>FOR THE O PARTY</h3>';
    checkforWin('x');
    player1 = false;
  } else {
    event.target.textContent = 'O';
    event.target.classList.add('o');
    topMsg.innerHTML = '<h3>PLAYER 1, CAST YOUR VOTE<br>FOR THE X PARTY</h3>';
    checkforWin('o');
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
  topMsg.innerHTML = `<h2>THE ${player.toUpperCase()} PARTY WINS!</h2>`;
  displayPlayAgain();
  if (player === 'x') {
    xWins++;
  } else {
    oWins++;
  }
  xWinsTotal.textContent = xWins;
  oWinsTotal.textContent = oWins;
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
  topMsg.innerHTML = `<h2>A TIE? WE DEMAND A RECOUNT!</h2>`;
  displayPlayAgain();
  gameOver = true;
}


// Handles the "Play again" prompt and resets the gameboard

function displayPlayAgain() {
  playAgain.textContent = `PLAY AGAIN`;
}

function resetGameboard() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    squares[i].className = 'square';
  }
  topMsg.innerHTML = '<h3>PLAYER 1, CAST YOUR VOTE<br>FOR THE X PARTY</h3>';
  playAgain.textContent = '';
  player1 = true;
  turns = 0;
  gameOver = false;
}


// Add event listeners

gameboard.addEventListener('click', displaySelection);
playAgain.addEventListener('click', resetGameboard);