'use strict';

// Variable Declarations
let board = ["", "", "", "", "", "", "", "", ""];
let activeBoard = board;

const boxes = Array.from(document.querySelectorAll('#boxes div')); // Can I use .box here? Need to test.

const winArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]; 

function render() {
    activeBoard.forEach((value, index) => {
        console.log(value, index);
        boxes[index].textContent = value;
    });
};

render();

