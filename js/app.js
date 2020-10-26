var origBoard;
const currentPlayer = 'O';
const compPlayer = 'X';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

// let board_full = false;

const blocks = document.querySelectorAll('.block');

startGame();

function startGame() {
    document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(9).keys());
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].innerText = '';
        blocks[i].style.removeProperty('background-color');
        blocks[i].addEventListener('click', turnClick, false);
    }
}


function turnClick(square) {
    turn(square.target.id, currentPlayer)
    //=if (!checkTie()) turn(bestSpot(), compPlayer);
}


function turn(squareId, player) {
    origBoard[squareId] = player;
    // getElementById for an argument within a function?
    document.getElementById(squareId).innerText = player;
    //let gameWon = checkWin(origBoard, player)
    //if (gameWon) gameOver(gameWon);
}


function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem > -1))) {
            gameWon = {index: index, player: player};
            break;
        }
    }
    return gameWon;
}


function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor = 
            gameWon.player == currentPlayer ? "blue" : "red";
    }
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].removeEventListener('click', turnClick, false);
    }
}

