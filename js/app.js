
//     //players coice is X
//     function playerChoice(i){
//     document.getElementById(i).innerHTML = "X";
//     }
//    //using a for loop to be able to cycle through each id 
//     for(let i=1; i<=9; i++){
//    document.getElementById(i).addEventListener("click", function(){
//     return playerChoice(i)  
//    });
//  }

//  //computer chice selects O
//    function computerChoice(j){
//        document.getElementById(j).innerHTML = "O";
//    }
//    for(let j=1; j<=9; j++){
//     document.getElementById(j).addEventListener("click", function(){
//      return computerChoice(j)  
//     });

//  }
// // toggling between X and O? equations 


// function insertOne(){
//     document.querySelector(".eachBox").innerHTML = "X";
// };

// function insertTwo(){
//     document.querySelector(".eachBox").innerHTML = "O"; 

// switching x and 2 

var playerOne = [];
var playerTwo = [];

var clickCount = 0;

function clicked(id){


if(clickCount%2==0 && playerOne.indexOf(id)<0 && playerTwo.indexOf(id)<0 && clickCount<=9){

document.getElementById(id).innerHTML= "X";
playerOne.push(id);
clickCount++;
if(winnerOne())
clickCount = 10;
  }

if(clickCount%2!=0 && playerOne.indexOf(id)<0 && playerTwo.indexOf(id)<0 && clickCount<=9){

document.getElementById(id).innerHTML= "O";
playerTwo.push(id);
clickCount++;
if(winnerTwo())
clickCount = 10;
  }

  // attempt at reset
  function clear(){
    return document.querySelectorAll(".eachBox").innerHTML = "";
  }
}