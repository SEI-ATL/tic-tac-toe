// HTMl Elements
const statusDiv = document.querySelector(".status")
const resetDiv = document.querySelector(".reset")
const cellDivs = document.querySelectorAll(".game-cell")

// Game Constants
const xSymbol = '×';
const oSymbol = '○';

// Game variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;

// functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol; 

const handleWin = (letter) => {
gameIsLive = false;
winner = letter;
    if (winner === 'x') {
    statusDiv.innerHTML =`${letterToSymbol(winner)} has won!`;
} else { 
    statusDiv.innerHTML =`<span>${letterToSymbol(winner)} has won!</span>
    `;
}
}


const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const middleLeft = cellDivs[3].classList[1];
    const middleMiddle = cellDivs[4].classList[1];
    const middleRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const bottomRight = cellDivs[8].classList[1];

    // check winner

    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        handleWin(topLeft);
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        handleWin(middleLeft);
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        handleWin(bottomLeft);
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        handleWin(topLeft);
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle ) {
        handleWin(topMiddle);
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        handleWin(topRight);
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        handleWin(topLeft);
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        handleWin(topRight);
    } else if(topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
        gameIsLive = false
        statusDiv.innerHTML = 'Tie Game';
    } else {
        xIsNext = !xIsNext;
        if(xIsNext) {
            statusDiv.innerHTML = `${xSymbol} is next`
        } else {
            statusDiv.innerHTML= `<span>${oSymbol} is next</span>`;
        }
    }
};



// Event Handlers
const handleReset = (e) => {
    xIsNext = true;
    statusDiv.innerHTML = `${xSymbol} is next`;
    winner = null;
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
    }

};

const handleCellCLick = (e) => {
    const classList = e.target.classList;
    

if (classList[1] === 'x' || classList[1] === 'o'){
    return;
}

    if(xIsNext) {
        classList.add('x');
        checkGameStatus();
    } else {
        classList.add('o');
        checkGameStatus();
    }
}



// Event Listeners
resetDiv.addEventListener('click', handleReset);

for(const cellDiv of cellDivs)
    cellDiv.addEventListener('click', handleCellCLick);