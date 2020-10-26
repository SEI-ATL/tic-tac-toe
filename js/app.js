let one = document.getElementById('1').innerHTML;
let two = document.getElementById('2').innerHTML;
let three = document.getElementById('3').innerHTML;
let four = document.getElementById('4').innerHTML;
let five = document.getElementById('5').innerHTML;
let six = document.getElementById('6').innerHTML;
let seven = document.getElementById('7').innerHTML;
let eight = document.getElementById('8').innerHTML;
let nine = document.getElementById('9').innerHTML;
const elements = document.querySelectorAll('.spot');
let playerTurn;
let moves = 0

elements.forEach(element => {
    element.addEventListener('click', eachMove, { once: true})
});


function eachMove(event) {
    let spot = event.target;
    let currentTurn = playerTurn ? "O": "X";
    spot.innerHTML = currentTurn;
    checkWin();
    swapTurns();
    checkDraw();
}

function swapTurns () {
    playerTurn = !playerTurn;
}

function checkWin() {
    if (one === two && two === three && three !== '') {
        winMessage();
    } else if (four === five && five === six && six !== '') {
        winMessage();
    } else if (seven === eight && eight === nine && nine !== '') {
        winMessage();
    } else if (one === four && four === seven && seven !== ''){
        winMessage();
    } else if (two === five && five === eight && eight !== ''){
        winMessage();
    } else if (three === six && six === nine && nine !== '') {
        winMessage();
    } else if (one === five && five === nine && nine !== '') {
        winMessage();
    } else if (three === five && five === seven && seven !== '') {
        winMessage();
    }
}

function checkDraw() {
    moves++;
    if (moves === 9) {
        alert('This game is a draw.')
    }
}

function winMessage() {
    if (playerTurn) {
        alert('X is the winner!')
    } else {
        alert('O is the winner!')
    }
};