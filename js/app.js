console.log('Hello frontend');
let playerTwo = 'O';
let playerOne = 'X';
let zero = null;
let one = null;
let two = null;
let three = null;
let four = null;
let five = null;
let six = null;
let seven = null;
let eight = null;

const clicked = document.querySelectorAll('p');

var clicks = 0;

function turn() {
    if (clicks % 2 !== 0) {
        document.querySelector('.message').innerHTML = "Player Two's Turn"
    } else {
        document.querySelector('.message').innerHTML = "Player One's Turn"

    }
}

turn();

function assignPlayerOne(id){
    var assignment = id;
    assignment.classList.add('playerOne')
}

function assignPlayerTwo(id){
    var assignment = id;
    assignment.classList.add('playerTwo')
}

function winner () {
    if (zero === 'X' && one === "X" && two === "X") {
        document.querySelector('.message').innerHTML = "Player One Wins!"   
    } else if ( three === "X" && four === "X" && five === "X") {
        document.querySelector('.message').innerHTML = "Player One Wins!"
    } else if ( six === "X" && seven === "X" && eight === "X") {
        document.querySelector('.message').innerHTML = "Player One Wins!"
    } else if ( zero === "X" && three === "X" && six === "X") {
        document.querySelector('.message').innerHTML = "Player One Wins!"
    } else if (one === "X" && four === "X" && seven === "X") {
        document.querySelector('.message').innerHTML = "Player One Wins!"
    } else if (two === "X" && five === "X" && eight === "X") {
        document.querySelector('.message').innerHTML = "Player One Wins!"
    } else if ( zero === "X" && four === "X" && eight === "X") {
        document.querySelector('.message').innerHTML = "Player One Wins!"
    } else if (two === "X" && four === "X" && six === "X") {
        document.querySelector('.message').innerHTML = "Player One Wins!"
    } else if (zero === "O" && one === "O" === two === 'O') {
        document.querySelector('.message').innerHTML = "Player Two Wins!"   
    } else if ( three === "O" && four === "O" && five === "O") {
        document.querySelector('.message').innerHTML = "Player Two Wins!"
    } else if ( six === "O" && seven === "O" && eight === "O") {
        document.querySelector('.message').innerHTML = "Player Two Wins!"
    } else if ( zero === "O" && three ==="O" && six === "O") {
        document.querySelector('.message').innerHTML = "Player Two Wins!"
    } else if (one === "O" && four === "O" && seven === "O") {
        document.querySelector('.message').innerHTML = "Player Two Wins!"
    } else if (two === "O" && five === "O" && eight === "O") {
        document.querySelector('.message').innerHTML = "Player Two Wins!"
    } else if ( zero === "O" && four === "O" && eight === "O") {
        document.querySelector('.message').innerHTML = "Player Two Wins!"
    } else if (two === "O" && four === "O" && six === "O") {
        document.querySelector('.message').innerHTML = "Player Two Wins!"
    }
}

function draw() {
    if (clicks === 9) {
        document.querySelector('.message').innerHTML = "Game is a draw!"
    }
}


clicked[0].addEventListener('click', function() { 
    if (clicks % 2 === 0) {
        clicked[0].innerHTML = playerOne;
        zero = 'X';
        clicks++;
        assignPlayerOne(clicked[0]);
    } else if (clicks % 2 !== 0) {
        clicked[0].innerHTML = playerTwo;
        zero = "O";
        clicks++;
        assignPlayerTwo(clicked[0]);
        
    }
    setTimeout(winner, 100);
    setTimeout(draw, 100);
    setTimeout(turn, 50);
})
clicked[1].addEventListener('click', function() { 
    if (clicks % 2 === 0) {
        clicked[1].innerHTML = playerOne;
        one = 'X';
        clicks++;
        assignPlayerOne(clicked[1]);
    } else if (clicks % 2 !== 0) {
        clicked[1].innerHTML = playerTwo;
        one = "O";
        clicks++;
        assignPlayerTwo(clicked[1]);
    }
    setTimeout(winner, 100);
    setTimeout(draw, 100);
    setTimeout(turn, 50);
})
clicked[2].addEventListener('click', function() { 
    if (clicks % 2 === 0) {
        clicked[2].innerHTML = playerOne;
        two = 'X';
        clicks++;
        assignPlayerOne(clicked[2]);
    } else if (clicks % 2 !== 0) {
        clicked[2].innerHTML = playerTwo;
        two = "O";
        clicks++;
        assignPlayerTwo(clicked[2]);
    }
    setTimeout(winner, 100);
    setTimeout(draw, 100);
    setTimeout(turn, 50);
})
clicked[3].addEventListener('click', function() { 
    if (clicks % 2 === 0) {
        clicked[3].innerHTML = playerOne;
        three = "X";
        clicks++;
        assignPlayerOne(clicked[3]);
    } else if (clicks % 2 !== 0) {
        clicked[3].innerHTML = playerTwo;
        three = "O";
        clicks++;
        assignPlayerTwo(clicked[3]);
    }
    setTimeout(winner, 100);
    setTimeout(draw, 100);
    setTimeout(turn, 50);
})
clicked[4].addEventListener('click', function() { 
    if (clicks % 2 === 0) {
        clicked[4].innerHTML = playerOne;
        four = "X";
        clicks++;
        assignPlayerOne(clicked[4]);
    } else if (clicks % 2 !== 0) {
        clicked[4].innerHTML = playerTwo;
        four = "O";
        clicks++;
        assignPlayerTwo(clicked[4]);
    }
    setTimeout(winner, 100);
    setTimeout(draw, 100);
    setTimeout(turn, 50);
})
clicked[5].addEventListener('click', function() { 
    if (clicks % 2 === 0) {
        clicked[5].innerHTML = playerOne;
        five = "X";
        clicks++;
        assignPlayerOne(clicked[5]);
    } else if (clicks % 2 !== 0) {
        clicked[5].innerHTML = playerTwo;
        five = "O";
        clicks++;
        assignPlayerTwo(clicked[5]);
    }
    setTimeout(winner, 100);
    setTimeout(draw, 100);
    setTimeout(turn, 50);
})
clicked[6].addEventListener('click', function() { 
    if (clicks % 2 === 0) {
        clicked[6].innerHTML = playerOne;
        six = "X";
        clicks++;
        assignPlayerOne(clicked[6]);
    } else if (clicks % 2 !== 0) {
        clicked[6].innerHTML = playerTwo;
        six = "O";
        clicks++;
        assignPlayerTwo(clicked[6]);
    }
    setTimeout(winner, 100);
    setTimeout(draw, 100);
    setTimeout(turn, 50);
})
clicked[7].addEventListener('click', function() { 
    if (clicks % 2 === 0) {
        clicked[7].innerHTML = playerOne;
        seven = "X";
        clicks++;
        assignPlayerOne(clicked[7]);
    } else if (clicks % 2 !== 0) {
        clicked[7].innerHTML = playerTwo;
        seven = "O";
        clicks++;
        assignPlayerTwo(clicked[7]);
    }
    setTimeout(winner, 100);
    setTimeout(draw, 100);
    setTimeout(turn, 50);
})
clicked[8].addEventListener('click', function() { 
    if (clicks % 2 === 0) {
        clicked[8].innerHTML = playerOne;
        eight = "X";
        clicks++;
        assignPlayerOne(clicked[8]);
    } else if (clicks % 2 !== 0) {
        clicked[8].innerHTML = playerTwo;
        eight = "O";
        clicks++;
        assignPlayerOne(clicked[8]);
    }
    setTimeout(winner, 100);
    setTimeout(draw, 100);
    setTimeout(turn, 50);
})


document.querySelector('#restart').onclick = function() {
    clicks = 0;
    zero = null;
    one = null;
    two = null;
    three = null;
    four = null;
    five = null;
    six = null;
    seven = null;
    eight = null;
    document.querySelectorAll('p').forEach(p => p.innerHTML = '');
    document.querySelector('.message').innerHTML = "Player One's Turn";
    
}

