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

const boxes = Array.from(document.querySelectorAll(".box_container .box"));
console.log(boxes);

const box0 = document.querySelector("#box0");

box0.addEventListener('click', function(){
    let index = 0;
    
});