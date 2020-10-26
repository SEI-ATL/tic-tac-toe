var count = 0;

var topLeft = null;
var topMid = null;
var topRight = null;
var midLeft = null;
var midMid = null;
var midRight = null;
var botLeft = null;
var botMid = null;
var botRight = null;

function draw() {
    if (count === 9){
        document.querySelector('h2').innerHTML = 'The game is a draw! Click Play Again to start over'
    }
}

function playerTurn() {
    if (count % 2 !== 0) {
        document.querySelector('h2').innerHTML = "It is now Player 2's turn;"
    } else {
        document.querySelector('h2').innerHTML = "It is now Player 1's turn;"
    }
    
}
playerTurn();

function winner() {
    if (botLeft === 'X' && botMid === 'X' && botRight ==='X') {
        document.querySelector('h2').innerHTML = "Player 1 is the winner!";
    } else if (midLeft === 'X' && midMid === 'X' && midRight ==='X') {
        document.querySelector('h2').innerHTML = "Player 1 is the winner!";
    } else if (topLeft === 'X' && topMid === 'X' && topRight ==='X') {
        document.querySelector('h2').innerHTML = "Player 1 is the winner!";
    } else if (topLeft === 'X' && midLeft === 'X' && botLeft ==='X') {
        document.querySelector('h2').innerHTML = "Player 1 is the winner!";
    } else if (topMid === 'X' && midMid === 'X' && botMid ==='X') {
        document.querySelector('h2').innerHTML = "Player 1 is the winner!";
    } else if (topRight === 'X' && midRight === 'X' && botRight ==='X') {
        document.querySelector('h2').innerHTML = "Player 1 is the winner!";
    } else if (topLeft === 'X' && midMid === 'X' && botRight ==='X') {
        document.querySelector('h2').innerHTML = "Player 1 is the winner!";
    } else if (topRight === 'X' && midMid === 'X' && botLeft ==='X') {
        document.querySelector('h2').innerHTML = "Player 1 is the winner!";
    } else if (botLeft === 'O' && botMid === 'O' && botRight ==='O') {
        document.querySelector('h2').innerHTML = "Player 2 is the winner!";
    } else if (midLeft === 'O' && midMid === 'O' && midRight ==='O') {
        document.querySelector('h2').innerHTML = "Player 2 is the winner!";
    } else if (topLeft === 'O' && topMid === 'O' && topRight ==='O') {
        document.querySelector('h2').innerHTML = "Player 2 is the winner!";
    } else if (topLeft === 'O' && midLeft === 'O' && botLeft ==='O') {
        document.querySelector('h2').innerHTML = "Player 2 is the winner!";
    } else if (topMid === 'O' && midMid === 'O' && botMid ==='O') {
        document.querySelector('h2').innerHTML = "Player 2 is the winner!";
    } else if (topRight === 'O' && midRight === 'O' && botRight ==='O') {
        document.querySelector('h2').innerHTML = "Player 2 is the winner!";
    } else if (topLeft === 'O' && midMid === 'O' && botRight ==='O') {
        document.querySelector('h2').innerHTML = "Player 2 is the winner!";
    } else if (topRight === 'O' && midMid === 'O' && botLeft ==='O') {
        document.querySelector('h2').innerHTML = "Player 2 is the winner!";
    }
}

function assignPlayerOne(id){
    var assignment = id;
    assignment.classList.add('player-one')
}

function assignPlayerTwo(id){
    var assignment = id;
    assignment.classList.add('player-two')
}

document.querySelector('#top-left').addEventListener('click', function(e){
    if (count % 2 === 0 && topLeft !== 'O'){
        document.querySelector('#top-left').innerHTML ='X';
        topLeft = 'X';
        count++;
        assignPlayerOne(document.querySelector('#top-left'));
    } else if (count % 2 !== 0 && topLeft !== 'X') {
        document.querySelector('#top-left').innerHTML ='O';
        topLeft = 'O';
        count++;
        assignPlayerTwo(document.querySelector('#top-left'));
    }
    setTimeout(winner, 500);
    setTimeout(draw, 500);
    setTimeout(playerTurn, 250);
})

document.querySelector('#top-mid').addEventListener('click', function(e){
    if (count % 2 === 0 && topMid !== 'O'){
        document.querySelector('#top-mid').innerHTML ='X';
        topMid = 'X';
        count++;
        assignPlayerOne(document.querySelector('#top-mid'));
    } else if (count % 2 !== 0 && topMid !== 'X') {
        document.querySelector('#top-mid').innerHTML ='O';
        topMid = 'O';
        count++;
        assignPlayerTwo(document.querySelector('#top-mid'));
    }
    setTimeout(winner, 500);
    setTimeout(draw, 500);
    setTimeout(playerTurn, 250);
})

document.querySelector('#top-right').addEventListener('click', function(e){
    if (count % 2 === 0 && topRight !== 'O'){
        document.querySelector('#top-right').innerHTML ='X';
        topRight = 'X';
        count++;
        assignPlayerOne(document.querySelector('#top-right'));
    } else if (count % 2 !== 0 && topRight !== 'X') {
        document.querySelector('#top-right').innerHTML ='O';
        topRight = 'O';
        count++;
        assignPlayerTwo(document.querySelector('#top-right'));
    }
    setTimeout(winner, 500);
    setTimeout(draw, 500);
    setTimeout(playerTurn, 250);
})

document.querySelector('#mid-left').addEventListener('click', function(e){
    if (count % 2 === 0 && midLeft !== 'O'){
        document.querySelector('#mid-left').innerHTML ='X';
        midLeft = 'X';
        count++;
        assignPlayerOne(document.querySelector('#mid-left'));
    } else if (count % 2 !== 0 && midLeft !== 'X') {
        document.querySelector('#mid-left').innerHTML ='O';
        midLeft = 'O';
        count++;
        assignPlayerTwo(document.querySelector('#mid-left'));
    }
    setTimeout(winner, 500);
    setTimeout(draw, 500);
    setTimeout(playerTurn, 250);
})

document.querySelector('#mid-mid').addEventListener('click', function(e){
    if (count % 2 === 0 && midMid !== 'O'){
        document.querySelector('#mid-mid').innerHTML ='X';
        midMid = 'X';
        count++;
        assignPlayerOne(document.querySelector('#mid-mid'));
    } else if (count % 2 !== 0 && midMid !== 'X') {
        document.querySelector('#mid-mid').innerHTML ='O';
        midMid = 'O';
        count++;
        assignPlayerTwo(document.querySelector('#mid-mid'));
    }
    setTimeout(winner, 500);
    setTimeout(draw, 500);
    setTimeout(playerTurn, 250);
})

document.querySelector('#mid-right').addEventListener('click', function(e){
    if (count % 2 === 0 && midRight !== 'O'){
        document.querySelector('#mid-right').innerHTML ='X';
        midRight = 'X';
        count++;
        assignPlayerOne(document.querySelector('#mid-right'));
    } else if (count % 2 !== 0 && midRight !== 'X') {
        document.querySelector('#mid-right').innerHTML ='O';
        midRight = 'O';
        count++;
        assignPlayerTwo(document.querySelector('#mid-right'));
    }
    setTimeout(winner, 500);
    setTimeout(draw, 500);
    setTimeout(playerTurn, 250);
})

document.querySelector('#bot-left').addEventListener('click', function(e){
    if (count % 2 === 0 && botLeft !== 'O'){
        document.querySelector('#bot-left').innerHTML ='X';
        botLeft = 'X';
        count++;
        assignPlayerOne(document.querySelector('#bot-left'));
    } else if (count % 2 !== 0 && botLeft !== 'X') {
        document.querySelector('#bot-left').innerHTML ='O';
        botLeft = 'O';
        count++;
        assignPlayerTwo(document.querySelector('#bot-left'));
    }
    setTimeout(winner, 500);
    setTimeout(draw, 500);
    setTimeout(playerTurn, 250);
})

document.querySelector('#bot-mid').addEventListener('click', function(e){
    if (count % 2 === 0 && botMid !== 'O'){
        document.querySelector('#bot-mid').innerHTML ='X';
        botMid = 'X';
        count++;
        assignPlayerOne(document.querySelector('#bot-mid'));
    } else if (count % 2 !== 0 && botMid !== 'X') {
        document.querySelector('#bot-mid').innerHTML ='O';
        botMid = 'O';
        count++;
        assignPlayerTwo(document.querySelector('#bot-mid'));
    }
    setTimeout(winner, 500);
    setTimeout(draw, 500);
    setTimeout(playerTurn, 250);
})

document.querySelector('#bot-right').addEventListener('click', function(e){
    if (count % 2 === 0 && botRight !== 'O'){
        document.querySelector('#bot-right').innerHTML ='X';
        botRight = 'X';
        count++;
        assignPlayerOne(document.querySelector('#bot-right'));
    } else if (count % 2 !== 0 && botRight !== 'X') {
        document.querySelector('#bot-right').innerHTML ='O';
        botRight = 'O';
        count++;
        assignPlayerTwo(document.querySelector('#bot-right'));
    }
    setTimeout(winner, 500);
    setTimeout(draw, 500);
    setTimeout(playerTurn, 250);
})

document.querySelector('#reset').addEventListener('click', function(e) {
    count = 0;
    topLeft = 'A';
    topMid = 'A';
    topRight = 'A';
    midLeft = 'A';
    midMid = 'A';
    midRight = 'A';
    botLeft = 'A';
    botMid = 'A';
    botRight = 'A';
    document.querySelector('#top-left').innerHTML = '';
    document.querySelector('#top-mid').innerHTML = '';
    document.querySelector('#top-right').innerHTML = '';
    document.querySelector('#mid-left').innerHTML = '';
    document.querySelector('#mid-mid').innerHTML = '';
    document.querySelector('#mid-right').innerHTML = '';
    document.querySelector('#bot-left').innerHTML = '';
    document.querySelector('#bot-mid').innerHTML = '';
    document.querySelector('#bot-right').innerHTML = '';
    playerTurn();
})

// can adjust if cell === '' for box clicks
// can set gameLive const to end game if winner or draw