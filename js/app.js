console.log('Page loaded');

//vaiarbles
let turn = 'X';
let gameOver = false;
let playerWins = 0;
let opponentWins = 0;
let opponent = 'local';
let computerTrys = ['c00', 'c01', 'c02', 'c10', 'c11', 'c12', 'c20', 'c21', 'c22'];
//track player cells here rather than in js:
const gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];


//functions
function assignGamepiece(e) {
    if (opponent === 'local' || (opponent === 'computer' && turn === 'X')) {
        let cell = e.target.id;
        //do not try to assign a piece to the wrong html element
        if (cell === '') {
            return;
        }
        //do not play if game is over
        if (gameOver) {
            return;
        }
        //if x's turn, add x to game board and display in correct div, else if o's turn same for o
        //check if cell is occupied.
        let i = parseInt(cell[1]);
        let j = parseInt(cell[2]);
        if (gameBoard[i][j] === 0) {
            let index = computerTrys.indexOf(cell);
            computerTrys.splice(index, 1);
            //empty cell --> place piece, check win, change turn
            e.target.children[0].innerText = turn;
            gameBoard[i][j] = turn;
            checkEndConditions(i, j);
        }
    }

}

function checkEndConditions(i, j) {
    //check win and tie otherwise, change the turn and carry on
    if (checkWin(i, j)) {
        //display win screen
        console.log('win');
        gameOver = true;
        let screen = document.querySelector('.resetScreen');
        if (turn === 'X') {
            playerWins += 1;
            screen.children[0].innerText = `${turn} wins!\n ${turn} has won ${playerWins} time(s)`;
        } else {
            opponentWins += 1;
            if (opponent === 'local') {
                screen.children[0].innerText = `${turn} wins!\n ${turn} has won ${opponentWins} time(s)`;
            } else {
                screen.children[0].innerText = `The computer wins!\n Computer has won ${opponentWins} time(s)`
            }
        }
        screen.classList.toggle('show');
    } else if (checkTie()) {
        //display end screen
        console.log('tie')
        gameOver = true;
        let screen = document.querySelector('.resetScreen');
        screen.children[0].innerText = "It's a tie!"
        screen.classList.toggle('show');
    } else {
        //change turn and continue playing
        if (turn === 'X') {
            turn = 'O';
            if (opponent === 'computer') { //computer will always be o
                //take computer's turn if it's the computer's turn
                document.querySelector('.turn').innerText = "Computers's turn";
                setTimeout(computerChoose, 1000);
            } else {
                document.querySelector('.turn').innerText = `${turn}'s turn`;
            }
        } else if (turn === 'O' && opponent === 'local') {
            turn = 'X';
            document.querySelector('.turn').innerText = `${turn}'s turn`
        }
    }
}

function computerChoose() {
    //pick cell
    let index = Math.floor(Math.random() * computerTrys.length);
    let cell = computerTrys[index];
    computerTrys.splice(index, 1);
    document.getElementById(cell).children[0].innerText = turn;
    let i = parseInt(cell[1]);
    let j = parseInt(cell[2]);
    gameBoard[i][j] = turn;
    checkEndConditions(i, j);
    turn = 'X';
    document.querySelector('.turn').innerText = `${turn}'s turn`
}


function checkWin(i, j) {
    //check columns
    if (checkCols(j)) {
        return true;
    }
    //check rows
    else if (checkRows(i)) {
        return true
    }
    //if on a diagonal, check checkdiagonals
    else if (i === j || (i === 0 && j === 2) || (i === 2 && j === 0)) {
        return checkDiags(i, j);
    } else {
        return false;
    }

}

function checkCols(j) {
    if (gameBoard[0][j] === gameBoard[1][j] && gameBoard[1][j] === gameBoard[2][j]) {
        return true;
    }
    return false;
}

function checkRows(i) {
    if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
        return true;
    }
    return false;
}

function checkDiags(i, j) {
    if (i === j) {
        if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
            return true;
        }
    } else if ((i === 1 && j === 1) || (i === 0 && j === 2) || (i === 2 && j === 0)) {
        if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
            return true;
        }
    } else {
        return false;
    }

}

function checkTie() {
    for (i = 0; i < gameBoard.length; i++) {
        for (j = 0; j < gameBoard[i].length; j++) {
            if (gameBoard[i][j] === 0) {
                return false;
            }
        }
    }
    return true;
}

function resetBoard() {
    document.querySelector('.resetScreen').classList.toggle('show');
    for (i = 0; i < gameBoard.length; i++) {
        for (j = 0; j < gameBoard[i].length; j++) {
            //reset array
            gameBoard[i][j] = 0;
            //reset html
            let cell = `c${i}${j}`;
            document.getElementById(cell).children[0].innerText = '';
        }
    }
    turn = 'X';
    gameOver = false;
    computerTrys = ['c00', 'c01', 'c02', 'c10', 'c11', 'c12', 'c20', 'c21', 'c22'];
}

function startGame() {
    document.querySelector('.startScreen').classList.toggle('show');
    document.querySelector('.board').classList.toggle('show');
    //scroll board into full view
    window.scrollTo(0, document.body.scrollHeight);
    document.querySelector('.turn').innerText = "X's turn";
}

function setMode(e) {
    opponent = e.target.id;
    playerWins = 0;
    opponentWins = 0;
}

function changeMode() {
    resetBoard();
    document.querySelector('.turn').innerText = '';
    document.querySelector('.startScreen').classList.toggle('show');
    document.querySelector('.board').classList.toggle('show');
}

//actions
document.addEventListener('DOMContentLoaded', function() {
    //listen for start game
    document.querySelector('#start').addEventListener('click', startGame);
    //place gamepiece where selected
    document.querySelectorAll('.cell').forEach(function(e) {

        e.addEventListener('click', assignGamepiece);
    });
    //selectmode
    document.querySelectorAll('.mode').forEach(function(e) {
        e.addEventListener('click', setMode);
    });
    //clear button - use reset function
    document.querySelector('#reset').addEventListener('click', resetBoard);
    document.querySelector('#resetMode').addEventListener('click', changeMode);
});