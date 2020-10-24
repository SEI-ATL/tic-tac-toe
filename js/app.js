let gameboard = document.querySelector('.gameboard');
let squares = document.querySelectorAll('.square');
let outcome = document.querySelector('.outcome')

let player1 = true;
let turns = 0;
let gameOver = false;

function displaySelection(event) {
  if (event.target.innerText !== '') {
    return;
  }
  if (player1 === true) {
    event.target.innerText = 'X';
    event.target.classList.add('1');
    checkForWinner('1');
    checkForTie();
    player1 = false;
  } else {
    event.target.innerText = 'O';
    event.target.classList.add('2');
    checkForWinner('2');
    checkForTie();
    player1 = true;
  }
}

function checkForWinner(player) {
  if (checkForWin(0, 1, 2, player) === true ||
    checkForWin(3, 4, 5, player) === true ||
    checkForWin(6, 7, 8, player) === true ||
    checkForWin(0, 3, 6, player) === true ||
    checkForWin(1, 4, 7, player) === true ||
    checkForWin(2, 5, 8, player) === true ||
    checkForWin(0, 4, 8, player) === true ||
    checkForWin(2, 4, 6, player) === true) {
    playerWins(player);
  }
}

function checkForWin(sq1, sq2, sq3, player) {
  if (squares[sq1].classList[1] === player &&
    squares[sq2].classList[1] === player &&
    squares[sq3].classList[1] === player) {
    return true;
  } else {
    return false;
  }
}

function playerWins(player) {
  let winMsg = document.createElement('h2');
  winMsg.innerText = `Player ${player} wins!`;
  outcome.appendChild(winMsg);
  gameOver = true;
}

function checkForTie() {
  if (turns < 8 || gameOver === true) {
    turns++;
  } else {
    let tieMsg = document.createElement('h2');
    tieMsg.innerText = `Damn, it's a tie!`;
    outcome.appendChild(tieMsg);
    gameOver = true;
  }
}

function playAgain() {
  let playAgain = document.createElement('h3');
  winMsg.innerText = `Player ${player} wins!`;
  outcome.appendChild(winMsg);
  gameOver = true;
}

gameboard.addEventListener('click', displaySelection);






// function checkForWinner(squares) {
//  let combination = '';
//  for (let i = 0; i < squares.length; i++) {
//    if (squares[i].classList[1] === 'player1') {
//      combination = combination + '1';
//    } else if (squares[i].classList[1] === 'player2') {
//      combination = combination + '2';
//    } else {
//      combination = combination + '0';
//    }
//  }
//  return combination;
// }