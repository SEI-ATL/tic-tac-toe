/*
Good Evening,

Resolved the scope issue. The game now functions accordingly!!
*/
window.onload = function() {
let players = "";
//this constant will help switch between 2 different players
let moveCounter=0;
//this constant will help keep track of moves made by the players - will acuumulate value
const winningConditions = [[0,3,6],[1,4,7,],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[2,4,6],[0,4,8]];
/*this constant stores winning combinations of boxes clicked by a player
the feild beig:
0 1 2
3 4 5
6 7 8
example:
diaganal wins will be written out as ([0,4,8] or [2,4,6]);
*/
let xMoves=[];
//array that stores moves by the first player "X";
let oMoves=[];
// array that stores moves by the second player "0";
let status ="gameOn";
// a constant that enables click events in the grid

//fetching elements from HTML
const squares = document.querySelectorAll('.cell');
let victoryMessage= document.getElementById('screen');
const buttonDiv= document.getElementById('buttonBox');
const squaresDefault = document.querySelectorAll('.reset');




//HELPER FUNCTIONS

//Array iteration - this function will determine if  either player hit elements of the winnig combiantion - 
function arrayContainsArray (superset, subset) {
    if (0 === subset.length) {
      return false;
    }
    return subset.every(function (value) {
      return (superset.indexOf(value) >= 0);
    });
  }

//FUNCTION THAT RESETS THE GAME!!!!
function resetGame(){
    players = "";
    xMoves=[];
    oMoves=[];
    victoryMessage.innerText ="";
    moveCounter=0;
    status ="gameOn";
    let scrap = buttonDiv.lastChild
    buttonDiv.removeChild(scrap);
    for (let i = 0; i < squaresDefault.length; i++){
        squaresDefault[i].innerText="";
        
    }
    //console.log('Hello! You Clicked Me!!')
    
}
//FUNCTION THAT TRACKS USER'S MOVES AND CALLS THE WINNER WHEN THE WINNINF CONDITION IS MET! THE FUNCTION LATER CREATES A MESSAGE AND A "RESET BUTTON" - after all the work I now realize that it would have been better to make a separate function that creates a RESET BUTTON. Still works - but looks messy and hard to read...

function checkWinner (player){
    for (i = 0; i < winningConditions.length; i++){
        console.log(player,winningConditions[i])
        
        if(arrayContainsArray (player, winningConditions[i]
            ))
            {

            //console.log(`${player} WIIIIIINNNNSSS!!!`) - for tests
            
            victoryMessage.innerText =`Player ${players} won the game!!`;
            let resetButton= document.createElement('button');
            resetButton.innerHTML="Reset Game!!";
            buttonDiv.appendChild(resetButton);
            resetButton.addEventListener('click', resetGame);
            status ="gameOver";
            console.log(status);
            return  status, true;
        }
            
    } 
  }
  //FUNCTION THAT TRACKS MOVES AND CALLS A TIE WHEN CONDITION IS MET - I have the logis set up in a way that it checks the array that records user moves versus the arrays of winning combianations. If all elements of the grid have been clicked (9 elements toatal - 9 moves) without any wins - we call a "TIE". 

  function isItaTie (){
      if (moveCounter === 9 && !checkWinner(oMoves) && !checkWinner(xMoves)){
          victoryMessage.innerText ="It's a tie!!!"
          let resetButton= document.createElement('button');
          resetButton.innerHTML="Reset Game!!";
          buttonDiv.appendChild(resetButton);
          resetButton.addEventListener('click', resetGame);
          status ="gameOver";
            console.log(status);
          return true;
      }
  }

// GAME ENGINE!! RUNS MOST OF THE VITAL FUCTIONS AFTER USER CLICKS. Used the priciples of Pete's 'PETTING ZOO' tutorial to link clicks to a HTML element.  

//if (status === "gameOn")
for (let i = 0; i < squares.length; i++){
    
    // will enable the game unless the status will change later on....
    squares[i].addEventListener('click', function() {
         if(status==="gameOn"){
        //switching player between X and O
        console.log(status);
        moveCounter = moveCounter + 1;
        if(moveCounter % 2 !== 0){
            players = "X";
            xMoves.push(i);
            xMoves=xMoves.sort();
            
            //console.log(moveCounter,player,oMoves) - for tests;
        }else{
            players = "O";
            oMoves.push(i);
            oMoves=oMoves.sort()
            //console.log(moveCounter,player, xMoves) - for tests;
        }
        // --------------------------------------------    
        const id = event.target.id;
        const h1 =document.getElementById(`for${id}`
        )
        //console.log(`You clicked on ${id}.`);
        h1.innerText = players;
        let playerInfo =document.querySelector('h2');
        playerInfo.innerText =`Player ${players}`
        if(players === "X"){
            checkWinner(xMoves)
        }else{
            checkWinner(oMoves)

        }
        isItaTie ()
      
    }
    }) 
    
   

}  





//++++++++++++++++++++++++++++++++++
}


