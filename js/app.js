// const topLeft = document.getElementById('aa')
// const topMiddle = document.getElementById('topMiddle')
// const topRight = document.getElementById('topRight')
// const middleLeft = document.getElementById('middleLeft')
// const middleMiddle = document.getElementById('middleMiddle')
// const middleRight = document.getElementById('middleRight')
// const bottomLeft = document.getElementById('bottomLeft')
// const bottomMiddle = document.getElementById('bottomMiddle')
// const bottomLeft = document.getElementById('bottomLeft')

// aA.addEventListener('click', populateElement)
// topMiddle.addEventListener('click', populateElement)
// topRight.addEventListener('click', populateElement)
// middleLeft.addEventListener('click', populateElement)
// middleMiddle.addEventListener('click', populateElement)
// middleRight.addEventListener('click', populateElement)
// bottomLeft.addEventListener('click', populateElement)
// bottomMiddle.addEventListener('click', populateElement)
// bottomLeft.addEventListener('click', populateElement)

// GrtopMiddlebing needed elements
const resetButton = document.querySelector('.game-reset');
const cellDivs = document.querySelectorAll('.cell');
const isGameOver = document.querySelector('.game-status');
let winner = null;

// varitopMiddleles
let  gameStatus = true;
let xIsNext = true;

const verifyGameStatus = () => {
    const topLeft = cellDivs[0].classList[2];
    const topMiddle = cellDivs[1].classList[2];
    const topRight = cellDivs[2].classList[2];
    const middleLeft = cellDivs[3].classList[2];
    const middleMiddle = cellDivs[4].classList[2];
    const middleRight = cellDivs[5].classList[2];
    const bottomLeft = cellDivs[6].classList[2];
    const bottomMiddle = cellDivs[7].classList[2];
    const bottomRight = cellDivs[8].classList[2];
//horizontal check
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        gameStatus = false;
        winner = topLeft
        isGameOver.innerHTML = `${topLeft} has won!`;
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        gameStatus = false;
        winner = middleLeft
        isGameOver.innerHTML = `${middleLeft} has won!`;
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        gameStatus = false;
        winner = bottomLeft
        isGameOver.innerHTML = `${bottomLeft} has won!`;

//vertibottomLeftl check        
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        gameStatus = false;
        winner = topLeft
        isGameOver.innerHTML = `${topLeft} has won!`;
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        gameStatus = false;
        winner = topMiddle
        isGameOver.innerHTML = `${topMiddle} has won!`;
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        gameStatus = false;
        winner = topRight
        isGameOver.innerHTML = `${topRight} has won!`;
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        gameStatus = false;
        winner = topLeft;
        isGameOver.innerHTML = `${topLeft} has won!`;
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        gameStatus = false;
        winner = topRight;
        isGameOver.innerHTML = `${topRight} has won!`;
    } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomLeft) {
        gameStatus = false;
        isGameOver.innerHTML = "Tie Game!";
    } else {
        xIsNext =! xIsNext;
        if (xIsNext) {
            isGameOver.innerHTML = "X is Next";
        } else {
            isGameOver.innerHTML = "O is Next"
        }
    }


};


// functions

const handleReset = (e) => {
    
};
const handlePlayerClick = (e) => {
    console.log(e.target.classList)
    const cellValue = e.target.classList[1];
    
    const classList = e.target.classList;
    const location = classList[1]
    if (classList[2] === 'x' || classList[2] === 'o') {
        return;
    }



    if (xIsNext === true) {
        e.target.classList.add('x');
        verifyGameStatus();
    } else {
        e.target.classList.add('o');
        verifyGameStatus();
    }
}

resetButton.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handlePlayerClick)
}
