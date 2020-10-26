let gameboard = document.querySelector('.gameboard');
let squares = document.querySelectorAll('.square');
let topMsg = document.querySelector('.top-msg');
let playAgain = document.querySelector('.play-again');
let xWinsTotal = document.querySelector('.wins.blue');
let oWinsTotal = document.querySelector('.wins.red');
let twoPlayerGame = document.querySelector('#two-player-game');
let onePlayerGame = document.querySelector('#one-player-game');

let player1 = true;
let turns = 0;
let gameOver = false;
let xWins = 0;
let oWins = 0;


// Resets the game when the number of players is changed

function changeNumPlayers() {
  resetGameboard();
  xWins = 0;
  oWins = 0;
  xWinsTotal.textContent = xWins;
  oWinsTotal.textContent = oWins;
}


// Handles the gameplay, i.e. what happens when a user clicks on a square

function handleClick(event) {
  if (event.target.textContent !== '' || gameOver === true) {
    return;
  } else if (twoPlayerGame.checked === false) {
    handleClickOnePlayer(event);
  } else if (player1 === true) {
    updateGameboard(event, 'x', '2', 'o');
  } else {
    updateGameboard(event, 'o', '1', 'x');
  }
}

function updateGameboard(event, marker, oppNumber, oppMarker) {
  event.target.textContent = marker.toUpperCase();
  event.target.classList.add(marker);
  if (twoPlayerGame.checked === true) {
    topMsg.innerHTML = `<h3>PLAYER ${oppNumber}, CAST YOUR VOTE<br>FOR THE ${oppMarker.toUpperCase()} PARTY</h3>`;
  } else {
    topMsg.innerHTML = `<h3>THE COMPUTER IS NOW<br>CASTING ITS VOTE</h3>`
  }
  checkforWin(marker);
  player1 = !player1;
}


// Handles the gameplay for a one-player game

function handleClickOnePlayer(event) {
  if (player1 === false || event.target.textContent !== '' || gameOver === true) {
    return;
  } else {
    updateGameboard(event, 'x', '2', 'o');
    if (gameOver === false) {
      setTimeout(computerMoves, 2000);
    }
  }
  console.log(turns);
}

function computerMoves() {
  let randomNum = Math.floor(Math.random() * 9);
  while (squares[randomNum].classList[1] === 'x' || squares[randomNum].classList[1] === 'o') {
    randomNum = Math.floor(Math.random() * 9);
  }
  squares[randomNum].textContent = 'O';
  squares[randomNum].classList.add('o');
  topMsg.innerHTML = `<h3>PLAYER 1, CAST YOUR VOTE<br>FOR THE X PARTY`;
  checkforWin('o');
  player1 = true;
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
  checkForTie();
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

onePlayerGame.addEventListener('change', changeNumPlayers);
twoPlayerGame.addEventListener('change', changeNumPlayers);
gameboard.addEventListener('click', handleClick);
playAgain.addEventListener('click', resetGameboard);