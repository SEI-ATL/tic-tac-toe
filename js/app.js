const winCondX1 = [
    document.getElementById("1").innerText === "x",
    document.getElementById("2").innerText === "x",
    document.getElementById("3").innerText === "x",
]
    // once finished make a condition to check (if true true true value in the trues wins)
    // use a for loop for every item in list if one is false there is no winner
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


let clearButton = document.querySelector("#clear-button");

function checkXWin(){
if (winCondX1[0] === true && winCondX1[1] === true && winCondX1[2] === true){
    alert("Player X Wins")
return true}
else if (winCondX2[0] === true && winCondX2[1] === true && winCondX2[2] === true){
    alert("Player X Wins")
return true}
else if (winCondX3[0] === true && winCondX3[1] === true && winCondX3[2] === true){
    alert("Player X Wins")
return true}
else if (winCondX4[0] === true && winCondX4[1] === true && winCondX4[2] === true){
    alert("Player X Wins")
return true}
else if (winCondX5[0] === true && winCondX5[1] === true && winCondX5[2] === true){
    alert("Player X Wins")
return true}
else if (winCondX6[0] === true && winCondX6[1] === true && winCondX6[2] === true){
    alert("Player X Wins")
return true}
else if (winCondX7[0] === true && winCondX7[1] === true && winCondX7[2] === true){
    alert("Player X Wins")
return true}

else if (winCondX8[0] === true && winCondX8[1] === true && winCondX8[2] === true){
    alert("Player X Wins")
return true}
else {
    return false
}
}


function checkOWin(){
if (winCondO1[0] === true && winCondO1[1] === true && winCondO1[2] === true){
    alert("Player O Wins")
return true}
else if (winCondO2[0] === true && winCondO2[1] === true && winCondO2[2] === true){
    alert("Player O Wins")
return true}
else if (winCondO3[0] === true && winCondO3[1] === true && winCondO3[2] === true){
    alert("Player O Wins")
return true}
else if (winCondO4[0] === true && winCondO4[1] === true && winCondO4[2] === true){
    alert("Player O Wins")
return true}
else if (winCondO5[0] === true && winCondO5[1] === true && winCondO5[2] === true){
    alert("Player O Wins")
return true}
else if (winCondO6[0] === true && winCondO6[1] === true && winCondO6[2] === true){
    alert("Player O Wins")
return true}
else if (winCondO7[0] === true && winCondO7[1] === true && winCondO7[2] === true){
    alert("Player O Wins")
return true}
else if (winCondO8[0] === true && winCondO8[1] === true && winCondO8[2] === true){
    alert("Player O Wins")
return true}
else {
    return false
}
}
function click(event,target, id){
    document.addEventListener('click', function(e){
        if (document.getElementById("turn-order").innerText === "Player X's Turn"){
            setX(e.target.id)
            checkOWin()
            checkXWin()
        } else {
            setO(e.target.id)
            checkXWin()
            checkOWin()
        }
    })
}

function clear(click) {
    clearButton.addEventListener("click", function(){
        document.getElementById("1").innerText = " "
    })
}
function setO(click){
    document.getElementById(click).innerHTML = "o";
    document.getElementById("turn-order").innerHTML = "Player X's Turn";
    checkXWin();
    checkOWin();
}

function setX(click){
    document.getElementById(click).innerHTML = "x";
    document.getElementById("turn-order").innerHTML = "Player O's Turn";
    checkXWin();
    checkOWin();
    
}
function clickforwin(){
    document.addEventListener('click', function(){
        if (checkXWin() === true) {
            alert("X has won")
            console.log(Hello)
        }
        else if(checkOWin() === true){
            alert("O has won")
        }
        else {
            alert("Take your turn please")
        }
})
}


click()
clickforwin()
// detect winner and whether the game is a draw ** WIN CONDITIONS MADE HOWEVER NEEDS IF STATEMENT ALSO NEEDS A FUNCTION THAT CHECKS FOR DRAW
// maybe use something to check if every square is no longer a number and no one has won then the game is a draw

//*BONUS 
// set a clear button that will clear the board
// make a heading to tell us who's turn it is

// console.log(checkOWin())
// console.log(win)