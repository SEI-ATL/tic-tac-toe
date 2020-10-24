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

function setX(click){
    document.getElementById(click).innerText = "x";
    console.log(click)

}

function click(event,target, id){
    document.addEventListener('click', function(e){
        setX(e.target.id)
    }
    
    )
}
click()
setX(1)

function setY(spaceNum){
    let newValue = document.getElementById(spaceNum).innerText = "o";
    return newValue
}


const winCondsX = [winCond1, winCond2, winCond3,  winCond4,  winCond5,  winCond6,  winCond7,  winCond8]



function checkBoard(){ for (let i = 0; i <= 8; i++) {
    function winIsTrue(winCond){
        let winValue = [true, true, true]
        winCondsX[i] == winValue //what am I saying here?
    }
    if (winCondsX[i].every(winIsTrue) === true) {
        console.log("x wins") // here I can put the code to change the players turn to display a winner
        
        return true
    } else {
        console.log(winCondsX[i])
        console.log(winCondsX[i] == winValue)
        return false
    }
}

}

let winValue = [true, true, true]



console.log(winCond1)
console.log(winValue)
console.log(winValue === winCond1)
// make a loop to check index of each winCond and winValue for the same value
// detect winner and whether the game is a draw ** WIN CONDITIONS MADE HOWEVER NEEDS IF STATEMENT ALSO NEEDS A FUNCTION THAT CHECKS FOR DRAW
// maybe set the ids of the ps to 1-9 and use if statements to determine if someone has won after each turn
// maybe use something to check if every square is no longer a number and no one has won then the game is a draw

//*BONUS 
// set a clear button that will clear the board
// make a heading to tell us who's turn it is

// Win Conditions for x copy for y ___________________ Make this run after every click


// DONE ____________________________________________
// set up html like p,p,p paragraph elements
// set up html like p,p,p paragraph elements
// set up html like p,p,p paragraph elements

// have two functions set to change a paragraph to x or y
// maybe have a radio button to denote which character you want to put
// style it as a grid just ad a border on the grids to give it that box makeup
