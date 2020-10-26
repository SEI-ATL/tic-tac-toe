// set variables:
var turn = 1;
var player1Selections = [];
var player2Selections = [];
// an array of possible winning combinations:
const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
// event listeners:
document.getElementById("1").addEventListener("click", fillSquareOne);
document.getElementById("2").addEventListener("click", fillSquareTwo);
document.getElementById("3").addEventListener("click", fillSquareThree);
document.getElementById("4").addEventListener("click", fillSquareFour);
document.getElementById("5").addEventListener("click", fillSquareFive);
document.getElementById("6").addEventListener("click", fillSquareSix);
document.getElementById("7").addEventListener("click", fillSquareSeven);
document.getElementById("8").addEventListener("click", fillSquareEight);
document.getElementById("9").addEventListener("click", fillSquareNine);

// callback functions:
function arrayEquals(a, b) {
    // a replacement for === for arrays
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }
function checkWinner () {
    // compares player choice arrays to possible winning combos:
    let winner = null;
    for (let i = 0; i < combos.length; i++) {
        if (arrayEquals(player1Selections, combos[i])) {
            console.log("Player 1 wins!");
            winner = 1;
        } else if (arrayEquals(player2Selections, combos[i])) {
            console.log("Player 2 wins!");
            winner = 2;
        }
    }
    return winner;
    }
// functions to mark each square an with X or O, alternating turns:
function fillSquareOne() {
    if (turn % 2 !== 0) {
        document.getElementById("1").innerText = "X";
        player1Selections.push(0);
        } else if (turn % 2 === 0) {
        document.getElementById("1").innerText = "O";
        player2Selections.push(0);
    }
    checkWinner();
    turn += 1;
    return turn; 
    }
function fillSquareTwo() {
        if (turn % 2 !== 0) {
            document.getElementById("2").innerText = "X";
            player1Selections.push(1);
            } else if (turn % 2 === 0) {
            document.getElementById("2").innerText = "O";
            player2Selections.push(1);
        }
        checkWinner();
        turn += 1;
        return turn; 
        }
function fillSquareThree() {
    if (turn % 2 !== 0) {
        document.getElementById("3").innerText = "X";
        player1Selections.push(2);
    } else if (turn % 2 === 0) {
        document.getElementById("3").innerText = "O";
        player2Selections.push(2);
    }
    checkWinner();
    turn += 1;
    return turn;
}        
function fillSquareFour () {
    if (turn % 2 !== 0) {
        document.getElementById("4").innerText = "X";
        player1Selections.push(3);
    } else if (turn % 2 === 0) {
        document.getElementById("4").innerText = "O";
        player2Selections.push(3);
    }
    checkWinner();
    turn += 1;
    return turn;
}
function fillSquareFive () {
    if (turn % 2 !== 0) {
        document.getElementById("5").innerText = "X";
        player1Selections.push(4);
    } else if (turn % 2 === 0) {
        document.getElementById("5").innerText = "O";
        player2Selections.push(4);
    }
    checkWinner();
    turn += 1;
    return turn;
}
function fillSquareSix () {
    if (turn % 2 !== 0) {
        document.getElementById("6").innerText = "X";
        player1Selections.push(5);
    } else if (turn % 2 === 0) {
        document.getElementById("6").innerText = "O";
        player2Selections.push(5);
    }
    checkWinner();
    turn += 1;
    return turn;
}
function fillSquareSeven () {
    if (turn % 2 !== 0) {
        document.getElementById("7").innerText = "X";
        player1Selections.push(6);
    } else if (turn % 2 === 0) {
        document.getElementById("7").innerText = "O";
        player2Selections.push(6);
    }
    checkWinner();
    turn += 1;
    return turn;
}
function fillSquareEight () {
    if (turn % 2 !== 0) {
        document.getElementById("8").innerText = "X";
        player1Selections.push(7);
    } else if (turn % 2 === 0) {
        document.getElementById("8").innerText = "O";
        player2Selections.push(7);
    }
    checkWinner();
    turn += 1;
    return turn;
}
function fillSquareNine () {
    if (turn % 2 !== 0) {
        document.getElementById("9").innerText = "X";
        player1Selections.push(8);
    } else if (turn % 2 === 0) {
        document.getElementById("9").innerText = "O";
        player2Selections.push(8);
    }
    checkWinner();
    turn += 1;
    return turn;
}