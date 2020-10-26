const boxCheck = document.querySelectorAll('.box');
let playerTurn = true
const xMark = 'X'
const oMark = 'O'




startGame()


function startGame() {
    boxCheck.forEach(box => {
    box.addEventListener('click', clickBox, { once: true})
    })
}
// Makes sure box is only clicked on "once" then stops it listening after 1 click

function clickBox(whoseTurn) {
    const box = whoseTurn.target
    const currentMark = playerTurn ? xMark : oMark;
    // if playerturn then return xmark otherwise return omark
    placeMark(box,currentMark)
    //check for win
    //check for draw
    //check for loss
    changeTurn()
}
// throw all funcitons inside this one to run all these functions on click! 

function placeMark(box, currentMark){
    box.classList.add(currentMark);
    checkWin();
}
//each click is an x or an o depending on playerTurn status

function changeTurn() {
    playerTurn = !playerTurn;
    
}
// switch turns
function checkWin(playerTurn) {
    let box1 = document.getElementById('box1').className;
    let box2 = document.getElementById('box2').className;
    let box3 = document.getElementById('box3').className;
    let box4 = document.getElementById('box4').className;
    let box5 = document.getElementById('box5').className;
    let box6 = document.getElementById('box6').className;
    let box7 = document.getElementById('box7').className;
    let box8 = document.getElementById('box8').className;
    let box9 = document.getElementById('box9').className;

    
    if (box1 === box2 && box2 === box3) {
        console.log('win'); 
    } else if (box3 === box4 && box4 === box5) {
        console.log('win');
    } else if (box6 === box7 && box7 === box8) {
        console.log('win');
    } else if (box1 === box4 && box4 === box7) {
        console.log('win');
    } else if (box2 === box5 && box5 === box8) {
        console.log('win');
    } else if (box3 === box6 && box6 === box9) {
        console.log('win');
    } else if (box1 === box5 && box5 === box9) {
        console.log('win');
    } else if (box3 === box5 && box5 === box7) {
        console.log('win');
    } else {
        console.log('draw');
    }
}