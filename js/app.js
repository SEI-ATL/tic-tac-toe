'use strict';

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

let turn = "X";

// Will be used on reset to update the board variable. I.e. board = emptyBoard. 
const emptyBoard = ["", "", "", "", "", "", "", "", ""];

// Holds the player's selection. Each selection has an index. 
let board = ["", "", "", "", "", "", "", "", ""];

// Creates an array from the on-screen board. The user's click is registered and the index will be used to update the board. 
const boxes = Array.from(document.querySelectorAll(".box_container div"));
console.log(boxes);


// Change the player's turn (ternary operator)
const playerTurn = () => {
    turn = turn === 'X' ? 'O' : 'X';
}
