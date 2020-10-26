document.querySelector('#r1c1').addEventListener('click', function() {
    document.querySelector('#r1c1').innerText = 'X';
});

document.querySelector('#r1c2').addEventListener('click', function() {
    document.querySelector('#r1c2').innerText = 'X';
});

document.querySelector('#r1c3').addEventListener('click', function() {
    document.querySelector('#r1c3').innerText = 'X';
});

document.querySelector('#r2c1').addEventListener('click', function() {
    document.querySelector('#r2c1').innerText = 'X';
});

document.querySelector('#r2c2').addEventListener('click', function() {
    document.querySelector('#r2c2').innerText = 'X';
});

document.querySelector('#r2c3').addEventListener('click', function() {
    document.querySelector('#r2c3').innerText = 'X';
});

document.querySelector('#r3c1').addEventListener('click', function() {
    document.querySelector('#r3c1').innerText = 'X';
});

document.querySelector('#r3c2').addEventListener('click', function() {
    document.querySelector('#r3c2').innerText = 'X';
});

document.querySelector('#r3c3').addEventListener('click', function() {
    document.querySelector('#r3c3').innerText = 'X';
});

document.querySelectorAll('.cell').addEventListener('click', function() {
    setTimeout(function() {
        // Choose a cell that hasn't been marked at random and mark it with an 'O'
        Math.floor(Math.random()*9);
        if () {

        } else {
            continue;
        }
    }, 1000);
});

// I think I should have just used querySelectorAll('.cell) to change the cells to X's instead of doing them individually. I also think I could have used the fact that querySelectorAll returns an array to access each cell in the array using bracket notation. That way, the Math.floor(Math.random()*9) could have accessed each cell one at a time using its index. I was planning to have the Math.floor(Math.random()*9) play the computer's side of the game, which is why I initially built all the cells to change to just X's when clicked on them, since I wanted to have the cells only change to O's when the computer played its turn. I wanted to use the setTimeout to delay the computer's move by one second. I also wasn't sure how to use the grid property of CSS to make each of the cells the same size (I tried various grid-template options to no avail). Or to put borders around them. (After using grid-area, it wouldn't let me set a grid-gap, but even then, I don't think that would have helped with a border.)

// I honestly did not anticipate how long this assignment was going to take, but this failure is a good learning experience. I definitely need to manage my time better in the future!