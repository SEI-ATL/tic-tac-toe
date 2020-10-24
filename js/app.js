const winCondX1 = [
    document.getElementById("1").innerText === "x",
    document.getElementById("2").innerText === "x",
    document.getElementById("3").innerText === "x",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondX2 = [
    document.getElementById("4").innerText === "x",
    document.getElementById("5").innerText === "x",
    document.getElementById("6").innerText === "x",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondX3 = [
    document.getElementById("7").innerText === "x",
    document.getElementById("8").innerText === "x",
    document.getElementById("9").innerText === "x",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondX4 = [
    document.getElementById("1").innerText === "x",
    document.getElementById("4").innerText === "x",
    document.getElementById("7").innerText === "x",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondX5 = [
    document.getElementById("2").innerText === "x",
    document.getElementById("5").innerText === "x",
    document.getElementById("8").innerText === "x",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondX6 = [
    document.getElementById("3").innerText === "x",
    document.getElementById("6").innerText === "x",
    document.getElementById("9").innerText === "x",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondX7 = [
    document.getElementById("1").innerText === "x",
    document.getElementById("5").innerText === "x",
    document.getElementById("9").innerText === "x",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondX8 = [
    document.getElementById("3").innerText === "x",
    document.getElementById("5").innerText === "x",
    document.getElementById("7").innerText === "x",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondO1 = [
    document.getElementById("1").innerText === "o",
    document.getElementById("2").innerText === "o",
    document.getElementById("3").innerText === "o",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondO2 = [
    document.getElementById("4").innerText === "o",
    document.getElementById("5").innerText === "o",
    document.getElementById("6").innerText === "o",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondO3 = [
    document.getElementById("7").innerText === "o",
    document.getElementById("8").innerText === "o",
    document.getElementById("9").innerText === "o",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondO4 = [
    document.getElementById("1").innerText === "o",
    document.getElementById("4").innerText === "o",
    document.getElementById("7").innerText === "o",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondO5 = [
    document.getElementById("2").innerText === "o",
    document.getElementById("5").innerText === "o",
    document.getElementById("8").innerText === "o",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondO6 = [
    document.getElementById("3").innerText === "o",
    document.getElementById("6").innerText === "o",
    document.getElementById("9").innerText === "o",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondO7 = [
    document.getElementById("1").innerText === "o",
    document.getElementById("5").innerText === "o",
    document.getElementById("9").innerText === "o",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]
const winCondO8 = [
    document.getElementById("3").innerText === "o",
    document.getElementById("5").innerText === "o",
    document.getElementById("7").innerText === "o",
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
]

function setO(click){
    document.getElementById(click).innerText = "o";
    document.getElementById("turn-order").innerText = "Player X's Turn";
    
}

function setX(click){
    document.getElementById(click).innerText = "x";
    document.getElementById("turn-order").innerText = "Player O's Turn";
}

function click(event,target, id){
    document.addEventListener('click', function(e){
        if (document.getElementById("turn-order").innerText === "Player X's Turn"){
            setX(e.target.id)
        } else {
            setO(e.target.id)
        }
    })
}

click()

const winCondsX = [winCondX1, winCondX2, winCondX3,  winCondX4,  winCondX5,  winCondX6,  winCondX7,  winCondX8]
const winCondsO = [winCondO1, winCondO2, winCondO3,  winCondO4,  winCondO5,  winCondO6,  winCondO7,  winCondO8]




// make a loop to check index of each winCondindex and winValueindex for the same value
// detect winner and whether the game is a draw ** WIN CONDITIONS MADE HOWEVER NEEDS IF STATEMENT ALSO NEEDS A FUNCTION THAT CHECKS FOR DRAW
// maybe use something to check if every square is no longer a number and no one has won then the game is a draw

//*BONUS 
// set a clear button that will clear the board
// make a heading to tell us who's turn it is