
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

// switching x and o 

var playerOne = [];
var playerTwo = [];

var count = 0;

function clicked(id){


if(count%2==0 && playerOne.indexOf(id)<0 && playerTwo.indexOf(id)<0 && count<=9){

document.getElementById(id).innerHTML= "X";
playerOne.push(id);
count++;
if(winner())
count = 10;
  }

if(count%2!=0 && playerOne.indexOf(id)<0 && playerTwo.indexOf(id)<0 && count<=9){

document.getElementById(id).innerHTML= "O";
playerTwo.push(id);
count++;
if(winner())
count = 10;
  }
}



  // attempt at reset
//   function clear(){
//     return document.querySelectorAll(".eachBox").innerHTML = "";
//   }


//need to set up winner combinations using a function that can read inputs in the ID's below maybe an array using elementbyID

//box1,box2,box3
// var winONE = ["box1","box2","box3"];

// or(var i=0; i<winONE.length;+ i++){
// //     if(document.getElementById)

// }

//box4,box5,box6
//box7,box8,box9
//box3,box5,box7
//box1,box4,box7
//box2,box5,box8
//box3,box6,box9
//box1,box5,box9
