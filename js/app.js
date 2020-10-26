'use strict';

/* Variable Declarations*/
let turn = "X";
let turnNumber = 0;
let gameStatus;

// Variable declaration for all board boxes.
let box0 = document.querySelector("#box0");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let box6 = document.querySelector("#box6");
let box7 = document.querySelector("#box7");
let box8 = document.querySelector("#box8");
let resetButton = document.querySelector("#reset-button");

// List of winning combinations in the game. 
const winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Will be used on reset to update the board variable. I.e. board = emptyBoard. 
const emptyBoard = ["", "", "", "", "", "", "", "", ""];

// Holds the player's selection based on index.
let board = ["", "", "", "", "", "", "", "", ""];

let changeStatus = () => {
    gameStatus = "gameOver";
    return alert("Game Over")
};

function checkForWin() {
    let winner = null;
    if (turnNumber >= 5) {
    winningArray.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]])
            winner = board[combo[0]];
    });
    if (winner !== null) {
        changeStatus();
    } else  if (turnNumber === 9) {
        return alert("It's a tie!")
    } else {
        return null;
    }
}
};

const handleClick = (event) => {
    let index = Number.parseInt(event.target.id.replace('box',''));
    if(board[index] !== '' || gameStatus === "gameOver") {
        return;
    } else {
    board[index] = turn;
    if (turn === 'X') {
        document.querySelector(`#box${index}`).innerText = 'X';
        turn = 'O'  
    } else {
        document.querySelector(`#box${index}`).innerText = 'O';
        turn = "X"
    }  
    turnNumber++;
    checkForWin();
    }
}

const resetGame = () => {
    board = emptyBoard;
    turn = "X";
    turnNumber = 0;
    gameStatus = null;
    document.querySelector("#box0").innerText = '';
    document.querySelector("#box1").innerText = '';
    document.querySelector("#box2").innerText = '';
    document.querySelector("#box3").innerText = '';
    document.querySelector("#box4").innerText = '';
    document.querySelector("#box5").innerText = '';
    document.querySelector("#box6").innerText = '';
    document.querySelector("#box7").innerText = '';
    document.querySelector("#box8").innerText = '';
}

// Event listeners for all 9 boxes on the game board. 
box0.addEventListener("click", handleClick);
box1.addEventListener("click", handleClick);
box2.addEventListener("click", handleClick);
box3.addEventListener("click", handleClick);
box4.addEventListener("click", handleClick);
box5.addEventListener("click", handleClick);
box6.addEventListener("click", handleClick);
box7.addEventListener("click", handleClick);
box8.addEventListener("click", handleClick);
resetButton.addEventListener("click", resetGame);


//Event listener on the game board which grabs the id of the clicked element. 
//In order to get a number corresponding to the location ID, 
//parse the value and return number only(chopping off 'box')