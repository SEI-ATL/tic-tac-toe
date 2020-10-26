// create object of players
let players = [
    {player: 1, mark: 'X', img: "img/cross.png", score: 0},
    {player: 2, mark: 'O', img: "img/heart.png", score: 0}
];

// random initialization of button changing and things
const printStuff = () =>{
    document.querySelector("#xcount").innerHTML = `${players[0]['score']}`;
    document.querySelector("#ocount").innerHTML = `${players[1]['score']}`;
    document.querySelector('.one').innerText = 'TIC-TAC-TOE';
    // game has started so button should change to reset
    const restart = document.querySelector('#buttonL');
    //change button so they can reset the game
    restart.innerText = "RESET";
    restart.style.backgroundColor = "rgba(190, 158, 87, 0.5)"
    // starts new game when clicked
    // loading bar to indicate new game has is starting
    restart.addEventListener('click', resetGame());

    const next = document.querySelector('#buttonR');
    next.innerHTML = "NEXT";
    document.querySelector('.two').appendChild(next);
    //onclick of button, call newgame function
    next.style.backgroundColor = "rgba(86, 63, 189, 0.5)"
}

// const updateScore = () => {
//     document.querySelector("#xcount").innerHTML = `${players[0]['score']}`;
//     document.querySelector("#ocount").innerHTML = `${players[1]['score']}`;
// }

const pvp = () => {
    printStuff();

    document.querySelector('#buttonR').addEventListener('click', pvp);
    //document.querySelector('#buttonR').addEventListener('click', updateScore);

    // create the board
    // nested array to represent the grids
    // board starts off with all values as null
    const board = [...Array(3)].map(() => Array(3).fill(null));
    // spaces = calls the space in question
    let spaces = document.querySelectorAll('.space');

    // initializes each div space with a clear space
    // each div space is clickable
    // when clicked, calls the update space function
    for (let i = 0; i < spaces.length; i++) {
        spaces[i].innerHTML = '';
        // on click functions needs to be wrapped in another function
        spaces[i].onclick = () => updateSpace(spaces[i]);
    }

    // initialize first player X to start
    // later give user option to select x or o
    let currentPlayer = players[0];

    // call all player classes as array
    let playerDiv = document.querySelectorAll('.player');

    const toggleTurn = () => {
        // Get index of current player
        let playerIndex = players.indexOf(currentPlayer);

        // Show the current player's turn indicator:
        playerDiv[playerIndex].innerText = `PLAYER ${currentPlayer['mark']} TURN`;
        setTimeout(function(){playerDiv[playerIndex].innerText = '';}, 1000);

        // let prevPlayerIndex = playerIndex === 0 ? 1 : 0;
    }

    toggleTurn();

    // after clicking a space, the udpate space function is called
    const updateSpace = (space) => {

        // once a valid space is clicked, call clear div
        // clearPlayerDiv();
        // get the id of the div space in order to update the board array
        let location = space.id.split('').map(x => parseInt(x));
        let x = location[0];
        let y = location[1];

        // if board space in array is empty, the move is valid
        if (!board[x][y]) {

            // if the player is x, print x
            let playerIndex = players.indexOf(currentPlayer);
            space.innerHTML = `<img src="${players[playerIndex].img}">`;

            // call update board function with locations
            board[x][y] = currentPlayer['player'];

            // check if there is a winner
            // if check returns true, and there is a winner
            // clear the div
            // print the winner
            // change to new game
            if (checkWinner()==true) {
                document.querySelector('.one').innerHTML = currentPlayer['mark'] + ' WINS';
            } else if (checkWinner() == 'Tie') {
                // if checkwinner returns a tie
                // new game
                document.querySelector('.one').innerHTML = "TIE";
            } else {
                // if there is no winner or tie, continue to swap players by calling update player function
                currentPlayer = (currentPlayer == players[0] ? players[1] : players[0]);
                toggleTurn();
            }
        } else {
            // else move is invalid, and you need to pick another place
            document.querySelector('.one').innerText = 'PICK AGAIN';
            setTimeout(function(){document.querySelector('.one').innerText = 'TIC-TAC-TOE';}, 1000);
            // has issue with div clear/shows
        }
    }

    // function to check if there is a winner
    const checkWinner = () => {
        // winner happens when three in a row
        // else board is full and it's a tie

        // all rows of the board
        let boardRow = [board[0], board[1], board[2]];
        // all col of the board
        let boardCol = [
            [board[0][0], board[1][0], board[2][0]],
            [board[0][1], board[1][1], board[2][1]],
            [board[0][2], board[1][2], board[2][2]]
        ];

        // all potential winning combos
        let combos = [
            // Horizontal wins:
            boardRow[0], boardRow[1], boardRow[2],
            // Vertical wins
            boardCol[0], boardCol[1], boardCol[2],
            // Diagonal top left to bottom right
            [board[0][0], board[1][1], board[2][2]],
            // Diagonal top right to bottom left
            [board[2][0], board[1][1], board[0][2]]
        ];

        // check each element in winning lines to see if any row is equal
        // loop through each element in combos
        for (let i = 0; i < combos.length; i++){
            // If every element is the same, and not null

            // null, X, X
            // null, null, null
            if (combos[i][0] !== null && new Set(combos[i]).size == 1) {
            // if (combos[i].every(x => x == combos[i][0]) && !combos[i].includes(null)) {
                //update players score
                currentPlayer['score'] ++;
                return true;
            }
        }

        // If no winner was found, check if the board is full, that would be a tie:
        // 1: Write a for loop to check if there is some empty spot, if ANY empty spot; return false
        // 2: Use a single every or some and a single includes
        for(let i = 0; i < board.length; i++) {
            if (board[i].includes(null)) {
                return false;
            }
        }

        return 'Tie';
    }

}

const pvai = () => {

    printStuff();
    document.querySelector('#buttonR').addEventListener('click', pvai);

    const board = [...Array(3)].map(() => Array(3).fill(null));
    let spaces = document.querySelectorAll('.space');

    for (let i = 0; i < spaces.length; i++) {
        spaces[i].innerHTML = '';

        spaces[i].onclick = () => updateSpace(spaces[i]);
    }

    // initialize first player X to start
    // later give user option to select x or o
    let currentPlayer = players[0];

    const updateSpace = (space) => {

        let location = space.id.split('').map(x => parseInt(x));
        let x = location[0];
        let y = location[1];

        if (!board[x][y]) {
            let playerIndex = players.indexOf(currentPlayer);
            space.innerHTML = `<img src="${players[playerIndex].img}">`;
            board[x][y] = currentPlayer['player'];

            //call AI move function
            const aiMove = () =>{
                let openSpaces = [];
                for (let x=0; x<board.length; x++){
                    for (let y=0; y<board[x].length; y++){
                        if (!board[x][y]){
                            openSpaces.push([x,y])
                        }
                    }
                }

                if(!openSpaces.length){
                    return
                }

                let [xSelect, ySelect] = openSpaces[Math.floor(Math.random()*openSpaces.length)];
                // let aiSelect = openSpaces[Math.floor(Math.random()*openSpaces.length)];
                // let first = aiSelect[0];
                // let second = aiSelect[1];


                let aiid = `${xSelect}${ySelect}`;
                setTimeout(function(){document.getElementById(`${aiid}`).innerHTML = `<img src="${players[1].img}">`},500);

                board[xSelect][ySelect] = 2;
                }

                aiMove();

            // check if there is a winner
            // if check returns true, and there is a winner
            // clear the div
            // print the winner
            // change to new game
            if (checkWinner()==true) {
                document.querySelector('.one').innerHTML = currentPlayer['mark'] + ' WINS';
            } else if (checkWinner() == 'Tie') {
                // if checkwinner returns a tie
                // new game
                document.querySelector('.one').innerHTML = "TIE";
            }
        } else {
            // else move is invalid, and you need to pick another place
            document.querySelector('.one').innerText = 'PICK AGAIN';
            setTimeout(function(){document.querySelector('.one').innerText = 'TIC-TAC-TOE';}, 1000);
        }
    }

    // function to check if there is a winner
    const checkWinner = () => {
        // winner happens when three in a row
        // else board is full and it's a tie

        // all rows of the board
        let boardRow = [board[0], board[1], board[2]];
        // all col of the board
        let boardCol = [
            [board[0][0], board[1][0], board[2][0]],
            [board[0][1], board[1][1], board[2][1]],
            [board[0][2], board[1][2], board[2][2]]
        ];

        // all potential winning combos
        let combos = [
            // Horizontal wins:
            boardRow[0], boardRow[1], boardRow[2],
            // Vertical wins
            boardCol[0], boardCol[1], boardCol[2],
            // Diagonal top left to bottom right
            [board[0][0], board[1][1], board[2][2]],
            // Diagonal top right to bottom left
            [board[2][0], board[1][1], board[0][2]]
        ];

        // check each element in winning lines to see if any row is equal
        // loop through each element in combos
        for (let i = 0; i < combos.length; i++){
            // If every element is the same, and not null
            if (combos[i][0] !== null && new Set(combos[i]).size == 1) {
            // if (combos[i].every(x => x == combos[i][0]) && !combos[i].includes(null)) {
                //update players score
                currentPlayer['score'] +=1
                return true;
            }
        }
        // If no winner was found, check if the board is full, that would be a tie:
        // 1: Write a for loop to check if there is some empty spot, if ANY empty spot; return false
        // 2: Use a single every or some and a single includes
        for(let i = 0; i < board.length; i++) {
            if (board[i].includes(null)) {
                return false;
            }
        }
        return 'Tie';
    }

}

const resetGame = () =>{
    players[0]['score']=0;
    players[1]['score']=0;
    // spaces = calls the space in question
    let spaces = document.querySelectorAll('.space');
    for (let i = 0; i < spaces.length; i++) {
        spaces[i].innerHTML = '';
    }
}


const pvaiGame = document.createElement("button");
pvaiGame.id = 'buttonL';
pvaiGame.innerHTML = "PvAI";
document.querySelector('.two').appendChild(pvaiGame);
//onclick of button, call newgame function
document.querySelector('#buttonL').addEventListener('click', pvai);

const pvpGame = document.createElement("button");
pvpGame.id = 'buttonR';
pvpGame.innerHTML = "PvP";
document.querySelector('.two').appendChild(pvpGame);
//onclick of button, call newgame function
document.querySelector('#buttonR').addEventListener('click', pvp);