const topLeft = document.querySelector('#topLeft').addEventListener("click", playerOneMove)
const topMiddle = document.querySelector('#topMiddle').addEventListener("click", playerTwoMove)
const topRight = document.querySelector('#topRight')
const middleLeft = document.querySelector('#middleLeft')
const center = document.querySelector('#center')
const middleRight = document.querySelector('#middleRight')
const bottomLeft = document.querySelector('#bottomLeft')
const bottomMiddle = document.querySelector('#bottomMiddle')
const bottomRight = document.querySelector('#bottomRight')

function playerOneMove() {
    document.getElementById("topLeft").innerHTML = "X"
};
function playerTwoMove() {
    document.getElementById("topMiddle").innerHTML = "O"
};

