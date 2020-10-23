console.log('Hello frontend');

let gameboard = document.querySelector('.gameboard');

gameboard.addEventListener('click', turnSquareRed);

let player1 = true;

function turnSquareRed(event) {
  if (player1 === true) {
    event.target.style.backgroundColor = 'green';
    event.target.innerText = 'X';
    player1 = false;
  } else {
    event.target.style.backgroundColor = 'green';
    event.target.innerText = 'O';
    player1 = true;
  }
}