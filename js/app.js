const gameStatus = document.querySelector('gamestatus')

const player1 = 'x'
const player2 = 'o'
let gameState = ['','','','','','','','','']
let xO = ['X','O','X','O','X','O','X','O','X']
let currentPlayer = 'x'
let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let b3 = document.getElementById('b3')
let b4 = document.getElementById('b4')
let b5 = document.getElementById('b5')
let b6 = document.getElementById('b6')
let b7 = document.getElementById('b7')
let b8 = document.getElementById('b8')
let b9 = document.getElementById('b9')

function changeCurrentPlayer(){
    if (currentPlayer===player1){
        currentPlayer=player2
    }
    else  {
        currentPlayer=player1
    }
};

b1.addEventListener('click',function(){
    b1.textContent= currentPlayer 
    changeCurrentPlayer()
    checkingForWinner()
})

b2.addEventListener('click',function(){
    b2.textContent= currentPlayer 
    changeCurrentPlayer()
    checkingForWinner()
})
b3.addEventListener('click',function(){
    b3.textContent= currentPlayer 
    changeCurrentPlayer()
    checkingForWinner()
})
b4.addEventListener('click',function(){
    b4.textContent= currentPlayer 
    changeCurrentPlayer()
    checkingForWinner()
})
b5.addEventListener('click',function(){
    b5.textContent= currentPlayer 
    changeCurrentPlayer()
    checkingForWinner()
})
b6.addEventListener('click',function(){
    b6.textContent= currentPlayer 
    changeCurrentPlayer()
    checkingForWinner()
})
b7.addEventListener('click',function(){
    b7.textContent= currentPlayer 
    changeCurrentPlayer()
    checkingForWinner()
})
b8.addEventListener('click',function(){
    b8.textContent= currentPlayer 
    changeCurrentPlayer()
    checkingForWinner()
})

b9.addEventListener('click',function(){
    b9.textContent= currentPlayer 
    changeCurrentPlayer()
    checkingForWinner()
})








    
function rowOneForWinner(gamestate,player1){
    if(b1.textContent===player1 && b2.textContent===player1 && b3.textContent===player1)
    {console.log('winner is player1')}
    else if (b1.textContent===player2 && b2.textContent===player2 && b3.textContent===player2)
    {console.log( 'winner is player2')} 
};

function rowTwoForWinner(gamestate,player1){
    if(b4.textContent===player1 && b5.textContent===player1 && b6.textContent===player1)
    {console.log('winner is player1')}
    else if(b4.textContent===player2 && b5.textContent===player2 && b6.textContent===player2)
    {console.log( 'winner is player2')} 
};
function rowThreeForWinner(gamestate,player1){
    if(b7.textContent===player1 && b8.textContent===player1 && b9.textContent===player1)
    {console.log('winner is player1')}
    else if(b7.textContent===player2 && b8.textContent===player2 && b9.textContent===player2)
    {console.log( 'winner is player2')} 
};
function columnOneForWinner(gamestate,player1){
    if(b1.textContent===player1 && b4.textContent===player1 && b7.textContent===player1)
    {console.log('winner is player1')}
    else if(b1.textContent===player2 && b4.textContent===player2 && b7.textContent===player2)
    {console.log( 'winner is player2')} 
};
function columnTwoForWinner(gamestate,player1){
    if(b2.textContent===player1 && b5.textContent==player1 && b8.textContent===player1)
    {console.log('winner is player1')}
    else if(b2.textContent===player2 && b5.textContent===player2 && b8.textContent===player2)
    {console.log( 'winner is player2')} 
};
function columnThreeForWinner(gamestate,player1){
    if(b3.textContent===player1 && b6.textContent===player1 && b9.textContent===player1)
    {console.log('winner is player1')}
    else if(b3.textContent===player2 && b6.textContent===player2 && b9.textContent===player2)
    {console.log( 'winner is player2')} 
};
function diagonalOneForWinner(gamestate,player1){
    if(b1.textContent===player1 && b5.textContent===player1 && b9.textContent===player1)
    {console.log('winner is player1')}
    else if(b1.textContent===player2 && b5.textContent===player2 && b9.textContent===player2)
    {console.log( 'winner is player2')} 
};
function diagonalTwoForWinner(gamestate,player1){
    if(b3.textContent===player1 && b5.textContent===player1 && b7.textContent===player1)
    {console.log('winner is player1')}
    else if(b3.textContent===player2 && b5.textContent===player2 && b7.textContent===player2)
    {console.log( 'winner is player2')} 
};

function checkingForWinner(){
    rowOneForWinner()
    rowTwoForWinner()
    rowThreeForWinner()
    columnOneForWinner()
    columnTwoForWinner()
    columnThreeForWinner()
    diagonalOneForWinner()
    diagonalTwoForWinner()
};
console.log(checkingForWinner)

