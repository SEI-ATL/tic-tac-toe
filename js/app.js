//constants

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//variables
let board;

let turn = 'X';

let winner;



// cached element references
const squares = Array.from(document.querySelectorAll('#board div'));




//event listeners

document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);

//functions

function getWinner() {
    // let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });
    
    
    if (winner) {
        return winner
    } else if (board.includes('')) {
        return null
    } else {
        return 'T'
    }
    
};
function handleTurn() {
    if (!winner) {
        let idx = squares.findIndex(function(square) {
            return square === event.target;
            });
            
            board[idx] = turn;
            if (turn === 'X') {
                turn = 'O'
            } else {
                turn = 'X'
            };
            winner = getWinner();
            render();

    } else {
        return
    };
};
function init() {
    board = [
        "", "", "",
        "" , "", "",
        "", "", ""
    ];
    winner = null;
    render();
};
    
function render() {
        board.forEach(function(mark, idx) {
            squares[idx].textContent = mark;
            
        });
        if (winner === 'T') {
            messages.textContent = "It's a tie"
        } else if (winner) {
            messages.textContent = `${winner} wins the game!`
        } else {
            messages.textContent = `It's ${turn}'s go`
        }
    };




init();


