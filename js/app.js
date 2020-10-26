'use strict';

// List of winning combinations in the game. 
let turn = "X";
let turnNumber = 0;

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

// Holds the player's selection. Each selection has an index. 
let board = ["", "", "", "", "", "", "", "", ""];


function checkForWin() {
    let winner = null;
    if (turnNumber >= 5) {
    winningArray.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]])
            winner = board[combo[0]];
    });
    if (winner !== null) {
        return alert("Game Over")
    } else  if (turnNumber === 9) {
        return alert("It's a tie!")
    } else {
        return null;
    }
}
};

const handleClick = (event) => {
    let index = Number.parseInt(event.target.id.replace('box',''));
    board[index] = turn;
    if (turn === 'X') {
        turn = 'O'  
    } else {
        turn = "X"
    }  
    turnNumber++;
    checkForWin();
    console.log(checkForWin()); // REMOVE
    // console.log(board); // REMOVE
    // console.log(turnNumber);  // REMOVE
}



let box0 = document.querySelector("#box0");
box0.addEventListener("click", handleClick);

let box1 = document.querySelector("#box1");
box1.addEventListener("click", handleClick);

let box2 = document.querySelector("#box2");
box2.addEventListener("click", handleClick);

let box3 = document.querySelector("#box3");
box3.addEventListener("click", handleClick);

let box4 = document.querySelector("#box4");
box4.addEventListener("click", handleClick);

let box5 = document.querySelector("#box5");
box5.addEventListener("click", handleClick);

let box6 = document.querySelector("#box6");
box6.addEventListener("click", handleClick);

let box7 = document.querySelector("#box7");
box7.addEventListener("click", handleClick);

let box8 = document.querySelector("#box8");
box8.addEventListener("click", handleClick);


//Event listener on the game board which grabs the id of the clicked element. 
//In order to get a number corresponding to the location ID, parse the value and return number only(chopping off 'box')