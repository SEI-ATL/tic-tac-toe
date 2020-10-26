console.log('Hello Front End');

/*------------------------------CONSTANTS------------------------------*/
const sq1 = document.querySelector('#sq1');
const sq2 = document.querySelector('#sq2');
const sq3 = document.querySelector('#sq3');
const sq4 = document.querySelector('#sq4');
const sq5 = document.querySelector('#sq5');
const sq6 = document.querySelector('#sq6');
const sq7 = document.querySelector('#sq7');
const sq8 = document.querySelector('#sq8');
const sq9 = document.querySelector('#sq9');
const cell = document.querySelector('.cell');
const playersTurn = document.querySelector('#player');
const output = document.querySelector('#output');
const clear = document.querySelector('#clear');
const gameOver = document.querySelector('#gameOver');
const pow = document.querySelector('#pow');



/*---------------------------EVENT LISTENERS---------------------------*/

document.querySelector('#sq1').addEventListener("click", function () {
      if (playersTurn.textContent === "Player 1's Turn (X)") {
        changeToX(sq1);
      } else if (playersTurn.textContent === "Player 2's Turn (O)") {
        changeToO(sq1);
}      
})

document.querySelector('#sq2').addEventListener("click", function () {
  if (playersTurn.textContent === "Player 1's Turn (X)") {
    changeToX(sq2);
  } else if (playersTurn.textContent === "Player 2's Turn (O)") {
    changeToO(sq2);
}      
})

document.querySelector('#sq3').addEventListener("click", function () {
  if (playersTurn.textContent === "Player 1's Turn (X)") {
    changeToX(sq3);
  } else if (playersTurn.textContent === "Player 2's Turn (O)") {
    changeToO(sq3);
}      
})

document.querySelector('#sq4').addEventListener("click", function () {
  if (playersTurn.textContent === "Player 1's Turn (X)") {
    changeToX(sq4);
  } else if (playersTurn.textContent === "Player 2's Turn (O)") {
    changeToO(sq4);
}      
})

document.querySelector('#sq5').addEventListener("click", function () {
  if (playersTurn.textContent === "Player 1's Turn (X)") {
    changeToX(sq5);
  } else if (playersTurn.textContent === "Player 2's Turn (O)") {
    changeToO(sq5);
}      
})

document.querySelector('#sq6').addEventListener("click", function () {
  if (playersTurn.textContent === "Player 1's Turn (X)") {
    changeToX(sq6);
  } else if (playersTurn.textContent === "Player 2's Turn (O)") {
    changeToO(sq6);
}      
})

document.querySelector('#sq7').addEventListener("click", function () {
  if (playersTurn.textContent === "Player 1's Turn (X)") {
    changeToX(sq7);
  } else if (playersTurn.textContent === "Player 2's Turn (O)") {
    changeToO(sq7);
}      
})

document.querySelector('#sq8').addEventListener("click", function () {
  if (playersTurn.textContent === "Player 1's Turn (X)") {
    changeToX(sq8);
  } else if (playersTurn.textContent === "Player 2's Turn (O)") {
    changeToO(sq8);
}      
})

document.querySelector('#sq9').addEventListener("click", function () {
  if (playersTurn.textContent === "Player 1's Turn (X)") {
    changeToX(sq9);
  } else if (playersTurn.textContent === "Player 2's Turn (O)") {
    changeToO(sq9);
}      
})

document.querySelector('#clear').addEventListener('click', function() {
    clearBoard();
})
/*---------------------------FUNCTIONS--------------------------*/

function changeToX(e) {
      if (output.textContent === "Player 1 Wins!" || output.textContent === "Player 2 Wins!") {
      gameEnd();
      return;
    } else if (e.textContent === 'O' || e.textContent === 'X' ) {    
      chooseAnotherBox();
      return;
    } else (playersTurn.textContent === "Player 1's Turn (X)") 
    e.textContent = "X";
    playersTurn.textContent = "Player 2's Turn (O)";
    output.style.color = 'green';
    output.textContent = "Go!";
      playerOneWins();
}

function changeToO(e) {
  if (output.textContent === "Player 1 Wins!" || output.textContent === "Player 2 Wins!") {
    gameEnd();
    return;
  } else if (e.textContent === 'O' || e.textContent === 'X' ) {    
    chooseAnotherBox();
    return;
  } else (playersTurn.textContent === "Player 2's Turn (O)")
  e.textContent = "O"; 
  playersTurn.textContent = "Player 1's Turn (X)";
  output.style.color = 'green';
  output.textContent = "Go!";
    playerTwoWins();
}

function chooseAnotherBox() {
    output.style.color = 'red';
    output.textContent = "Choose a Different Box";
}

function clearBoard() {
    sq1.textContent = " ";
    sq2.textContent = "  ";
    sq3.textContent = "   ";
    sq4.textContent = "    ";
    sq5.textContent = "     ";
    sq6.textContent = "      ";
    sq7.textContent = "       ";
    sq8.textContent = "        ";
    sq9.textContent = "         ";
    playersTurn.textContent = "Player 1's Turn (X)";
    chooseAnotherBox();
    output.style.color = 'green';
    output.textContent = "Let's Begin!";
    gameOver.textContent = ""
}

function gameEnd(){
    gameOver.style.color = "red";
    gameOver.textContent = 'PLEASE RESET THE GAME TO CONTINUE';
    
}

/*--------------------------WINNING CONDITIONS------------------------*/

function playerOneWins() {
    if (sq1.textContent === sq2.textContent && sq2.textContent === sq3.textContent ||
      sq4.textContent === sq5.textContent && sq5.textContent === sq6.textContent ||  
      sq7.textContent === sq8.textContent && sq8.textContent === sq9.textContent ||
      sq1.textContent === sq4.textContent && sq4.textContent === sq7.textContent ||
      sq3.textContent === sq6.textContent && sq6.textContent === sq9.textContent ||
      sq2.textContent === sq5.textContent && sq5.textContent === sq8.textContent ||
      sq3.textContent === sq5.textContent && sq5.textContent === sq7.textContent ||
      sq1.textContent === sq5.textContent && sq5.textContent === sq9.textContent) {
    output.style.color = 'green';
    output.textContent = "Player 1 Wins!";
        } else
        return;
}

function playerTwoWins() {
  if (sq1.textContent === sq2.textContent && sq2.textContent === sq3.textContent ||
      sq4.textContent === sq5.textContent && sq5.textContent === sq6.textContent ||  
      sq7.textContent === sq8.textContent && sq8.textContent === sq9.textContent ||
      sq1.textContent === sq4.textContent && sq4.textContent === sq7.textContent ||
      sq3.textContent === sq6.textContent && sq6.textContent === sq9.textContent ||
      sq2.textContent === sq5.textContent && sq5.textContent === sq8.textContent ||
      sq3.textContent === sq5.textContent && sq5.textContent === sq7.textContent ||
      sq1.textContent === sq5.textContent && sq5.textContent === sq9.textContent) {
  output.style.color = 'green';
  output.textContent = "Player 2 Wins!";
      } else
      return;
}


// function tieGame() {
//   if (sq1.textContent === true && sq2.textContent === true &&
//   sq3.textContent === true && sq4.textContent === true &&
//   sq5.textContent === true && sq6.textContent === true &&
//   sq7.textContent === true && sq8.textContent === true &&
//   sq9.textContent === true && output.textContent !== "Go!") {
// output.style.color = 'green';
// output.textContent = "Tie!";
// gameEnd();
//    } else
//     return;
// }