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
  const isBoardFull = board.reduce((iterator, cell) => {
    if (cell) iterator++;
    return iterator;
  }, 0)

  if (isBoardFull === 9) return 'draw'

  for (let i = 0; i < winningChoices.length; i++) {
    const [a, b, c] = winningChoices[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

const handleClick = (e) => {
  if (!boardStatus[e.target.id]) {
    e.target.textContent = currentPlayer
    addPlayerChoice(boardStatus, e.target.id, currentPlayer)
    currentPlayer = updateCurrentPlayer(currentPlayer)
    e.target.classList.add(currentPlayer === 'X' ? 'player1' : 'player2')
  }

  if (!!checkForWinner(boardStatus) && checkForWinner(boardStatus) !== 'draw') {
    gameStatusElement.textContent = `${checkForWinner(boardStatus)} wins.`
    boardElement.removeEventListener('click', handleClick)
  } else if (checkForWinner(boardStatus) === 'draw') {
    gameStatusElement.textContent = `Draw.`
    boardElement.removeEventListener('click', handleClick)
  }
}


boardElement.addEventListener('click', handleClick)
