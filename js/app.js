//fist step is to select all the document that are in the DOM
const box1 = document.querySelector('#box-1');
const box2 = document.querySelector('#box-2');
const box3 = document.querySelector('#box-3');
const box4 = document.querySelector('#box-4');
const box5 = document.querySelector('#box-5');
const box6 = document.querySelector('#box-6');
const box7 = document.querySelector('#box-7');
const box8 = document.querySelector('#box-8');
const box9 = document.querySelector('#box-9');

//document.getElementById("reset").onclick = function() {
   // document.getElementById("numbers").innerHTML = "";
// };
// setting the player
let player ='X';
    //function changeTurn(){
   //     player = !player;
    //}

// set up the action after player clicks box
box1.addEventListener('click',() => { // im grabbing the box and adding event listiner
    if(player === 'X') { 
        box1.textContent = player;
        let topRowX = topRowWinner(box1, box2, box3, player); // setting a true or false statement
        if (topRowX) { // if X's are all on top row true otherwise false 
        retun
        
        }
        player = 'O';
        
    }  else {
        box1.textContent = player;
        let topRowO = topRowWinner(box1, box2, box3, player); 
        player = 'X';
    }
});
box2.addEventListener('click', () => { // im grabbing the box and adding event listiner
    if(player === 'X') {
        box2.textContent = player;
        let topRowX = topRowWinner(box1, box2, box3, player); // setting a true or false statement
        if (topRowX) { // if X's are all on top row true otherwise false 

        }
        player = 'O';
    }  else {
        box1.textContent = player;
        let topRowO = topRowWinner(box1, box2, box3, player); 
        player = 'X';
    }
});

box3.addEventListener('click', () => { // im grabbing the box and adding event listiner
    if(player === 'X') {
        box3.textContent = player;
        let topRowX = topRowWinner(box1, box2, box3, player); // setting a true or false statement
        if (topRowX) { // if X's are all on top row true otherwise false 

        }
        player = 'O';
    }  else {
        box3.textContent = player;
        let topRowO = topRowWinner(box1, box2, box3, player); 
        player = 'X';
    }
});

// defining the boxes
function topRowWinner(box1, box2, box3, player) {
    if (box1.textContent === player && box2.textContent === player && box3.textContent === player) {
        return true;
    } else {
        return false;
    }
}
box4.addEventListener('click', () => {
    if(player === 'X') {
        box4.textContent = player;
        let centerRowX = centerRowWinner(box4, box5, box6, player);
        if (centerRowX) {

        }
        player = 'O'
    } else {
        box4.textContent = player;
        let centerRowO = centerRowWinner(box4, box5, box6, player);
        player = 'X';
    }
});
box5.addEventListener('click', ()=> {
    if(player === 'X') {
        box5.textContent = player;
        let centerRowX = centerRowWinner(box4,box5,box6, player);
        if (centerRowX) {

        }
        player = 'O'
    }  else {
        box5.textContent = player;
        let centerRowO = centerRowWinner(box4, box5, box6, player);
        player = 'X';
        
        }

    });
box6.addEventListener('click', () => {
    if(player === 'X') {
        box6.textContent = player;
        let centerRowX = centerRowWinner(box4, box5,box6, player);
        if (centerRowX) {
            
        }
        player = 'O'
    }  else{
        box6.textContent = player;
        let centerRowO = centerRowWinner (box4, box5, box6, player);
        player = 'X';
    }
});

// need to difine the boxes
function centerRowWinner(box4, box5, box6, player) {
    if (box4.textContent === player && box5.textContent === player && box6.textContent === player) {
        return true;
    } else {
        return false;
    }
}

box7.addEventListener('click', () => {
    if(player === 'X') {
        box7.textContent = player;
        let bottomRowX = bottomRowWinner(box7, box8, box9, player);
        if (bottomRowX) {

        }
        player ='O'
    } else {
        box7.textContent = player;
        let bottomRowO = bottomRowWinner(box7, box8, box9, player);
        player = 'X';
    }
});
box8.addEventListener('click', () => {
    if(player === 'X') {
        box8.textContent = player;
        let bottomRowX = bottomRowWinner(box7, box8, box9, player);
        if (bottomRowX) {

        }
        player ='O'
    } else {
        box8.textContent = player;
        let bottomRowO = bottomRowWinner(box7, box8, box9, player);
        player = 'X';
    }
});
box9.addEventListener('click', () => {
    if(player === 'X') {
        box9.textContent = player;
        let bottomRowX = bottomRowWinner(box7, box8, box9, player);
        if (bottomRowX) {
    
         }
        player ='O'
    } else
        box9.textContent = player;
        let bottomRowO = bottomRowWinner(box7, box8, box9, player);
        player = 'X';
    });
              

function bottomRowWinner(box7, box8, box9, player) {
    if (box7.textContent === player && box8.textContent === player && box9.textContent === player) {
        return true;
    } else {
        return false;
    }
}
// change player turn

//

