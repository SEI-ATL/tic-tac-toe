const boardElement = document.querySelector('.ttt-board')
const gameStatusElement = document.querySelector('.game-status')
const playerNum = gameStatusElement.querySelector('span')


let currentPlayer = 'X';

const boardStatus = Array(9).fill(null)
const winningChoices = [
  [0, 1, 2], [3, 4, 5],
  [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];


const updateCurrentPlayer = (player) => {
  player = player === 'X' ? 'O' : 'X'

  playerNum.textContent = player
  return player
}

const addPlayerChoice = (board, choice, player) => {
  board[choice] = player
  console.log(board)

  return player
}

const checkForWinner = (board) => {
  for (let i = 0; i < winningChoices.length; i++) {
    const [a, b, c] = winningChoices[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

const handleClick = (e) => {
  e.target.textContent = currentPlayer
  console.log(e.target.id)
  addPlayerChoice(boardStatus, e.target.id, currentPlayer)
  currentPlayer = updateCurrentPlayer(currentPlayer)
  if (!!checkForWinner(boardStatus)) {
    gameStatusElement.textContent = `${checkForWinner(boardStatus)} wins.`
    boardElement.removeEventListener('click', handleClick)
  }
}

boardElement.addEventListener('click', handleClick)
