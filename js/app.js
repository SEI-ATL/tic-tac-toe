
const statusDiv = document.querySelector('.status');
const clearDiv = document.querySelector('.clear');
const boxDivs = document.querySelectorAll('.box');


const xSymbol = 'x';
const oSymbol = 'o';


let gameStarted = true;
let xIsNext = true;
let winner = null;



const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
  gameStarted = false;
  if (letter === 'x') {
    statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
  } else {
    statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
  }
};

const checkGameData = () => {
  const topLeft = boxDivs[0].classList[2];
  const topMiddle = boxDivs[1].classList[2];
  const topRight = boxDivs[2].classList[2];
  const middleLeft = boxDivs[3].classList[2];
  const middleMiddle = boxDivs[4].classList[2];
  const middleRight = boxDivs[5].classList[2];
  const bottomLeft = boxDivs[6].classList[2];
  const bottomMiddle = boxDivs[7].classList[2];
  const bottomRight = boxDivs[8].classList[2];


  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    boxDivs[0].classList.add('won');
    boxDivs[1].classList.add('won');
    boxDivs[2].classList.add('won');
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    boxDivs[3].classList.add('won');
    boxDivs[4].classList.add('won');
    boxDivs[5].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    boxDivs[6].classList.add('won');
    boxDivs[7].classList.add('won');
    boxDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    boxDivs[0].classList.add('won');
    boxDivs[3].classList.add('won');
    boxDivs[6].classList.add('won');
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    boxDivs[1].classList.add('won');
    boxDivs[4].classList.add('won');
    boxDivs[7].classList.add('won');
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    boxDivs[2].classList.add('won');
    boxDivs[5].classList.add('won');
    boxDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    boxDivs[0].classList.add('won');
    boxDivs[4].classList.add('won');
    boxDivs[8].classList.add('won');
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    boxDivs[2].classList.add('won');
    boxDivs[4].classList.add('won');
    boxDivs[6].classList.add('won');
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameStarted = false;
    statusDiv.innerHTML = 'Game is tied!';
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusDiv.innerHTML = `${xSymbol} is next`;
    } else {
      statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
    }
  }
};

const handleClear = () => {
  xIsNext = true;
  statusDiv.innerHTML = `${xSymbol} is next`;
  for (const boxDiv of boxDivs) {
    boxDiv.classList.remove('x');
    boxDiv.classList.remove('o');
    boxDiv.classList.remove('won');
  }
  gameStarted = true;
};

const handleBoxClick = (e) => {
  const classList = e.target.classList;

  if (!gameStarted || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (xIsNext) {
    classList.add('x');
    checkGameData();
  } else {
    classList.add('o');
    checkGameData();
  }
};

clearDiv.addEventListener('click', handleClear);

for (const boxDiv of boxDivs) {
  boxDiv.addEventListener('click', handleBoxClick)
}






















































// // HTML Elements
// const statusDiv = document.querySelector('.status')
// const clearDiv = document.querySelector('.clear')
// const boxDivs = document.querySelectorAll('.box')


// // game constants

// const xSymbol = 'x';
// const oSymbol = 'o';

// // game Variables

// let gameStarted = true;
// let xIsNext = true;
// let winner = null;


// //  functions

// const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;




// const checkGameData = () => {
//     const topLeft = boxDivs[0].classList[2];
//     const topMiddle = boxDivs[1].classList[2];
//     const topRight = boxDivs[2].classList[2];
//     const middleLeft = boxDivs[3].classList[2];
//     const middleMiddle = boxDivs[4].classList[2];
//     const middleRight = boxDivs[5].classList[2];
//     const bottomLeft = boxDivs[6].classList[2];
//     const bottomMiddle = boxDivs[7].classList[2];
//     const bottomRight = boxDivs[8].classList[2];


//     // is there a winner?
//     if (topLeft && topLeft === topMiddle && topLeft === topRight) {
//         gameStarted = false;
//         winner = topLeft;
//         statusDiv.innerHTML = `${letterToSymbol(topLeft)} has won!`;
//     }



// };




// //  event Handlers
// const handleClear = (e) => {
//     console.log(e);
// }

// const handleBoxClick = (e) => {
//     const classList = e.target.classList;
//     const location = classList[1];

//     if (classList[2] === 'x' || classList[2] === 'o') {
//         return;
//     }

//     if (xIsNext) {
//         classList.add('x');
//         checkGameData()

//         xIsNext = !xIsNext;
//     } else {
//         classList.add('o');
//         checkGameData;

//         xIsNext = !xIsNext;
//     }

// };

// // event Listeners
// clearDiv.addEventListener('click', handleClear);



// for (const boxDiv of boxDivs) {
//     boxDiv.addEventListener('click', handleBoxClick)
// }