
newGame = () =>{

    // game has started so button should change to reset
    let restart = document.querySelector('#startBtn');
    //change button so they can reset the game
    restart.innerText = "RESET";
    restart.style.backgroundColor = "rgba(190, 158, 87, 0.5)"
    // starts new game when clicked
    // loading bar to indicate new game has is starting
    restart.addEventListener('click', newGame);
    document.querySelector("#timer").style.opacity = "0.0";

    // loading function indicator
    loading = () => {
        var elem = document.querySelector("#timer");
        elem.style.opacity = "0.0";
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width == 100) {
            clearInterval(id);
          } else {
            width++;
            elem.style.width = width + '%';
          }
        }
      }

    restart.addEventListener('click', loading);



    // create the board
    // nested array to represent the grids
    // board starts off with all values as null
    const board = [...Array(3)].map(() => Array(3).fill(null));

    // spaces = calls the space in question
    let spaces = document.querySelectorAll('.space');

    // initializes each div space with a clear space
    // each div space is clickable
    // when clicked, calls the update space function
    for (let i=0; i<spaces.length; i++){
        spaces[i].innerHTML = '';
        spaces[i].onclick = ()=> updateSpace(spaces[i]);
    // on click functions needs to be wrapped in another function
    }

    // create object of players
    let players = [
        // calling values from keys in objects - all strings are strings???
        {player: 1, mark: 'X', img: "img/cross.png"},
        {player: 2, mark: 'O', img: "img/heart.png"}
    ];

    //initialize first player X to start
    // later give user option to select x or o
    let currentPlayer = players[0];

    // call all player classes as array
    let playerDiv = document.querySelectorAll('.player');

    // how do i combine clear and show player div into one function with if/else
    clearPlayerDiv = () => {
        // gets index of current player
        // i have to do this each time the function is called
        // makes the div invisible
        let playerIndex = players.indexOf(currentPlayer);
        playerDiv[playerIndex].innerText = '';
        playerDiv[playerIndex].style.opacity = "0";
    }

    showPlayerDiv = () =>{
        // prints player's turn and their marker inside their respective div
        // and makes it visible if they are current player
        let playerIndex = players.indexOf(currentPlayer);
        playerDiv[playerIndex].innerText = `PLAYER ${currentPlayer['mark']} TURN`;
        playerDiv[playerIndex].style.opacity = "1.0";
    }

    // show the first ('x') player's div to indicate it is their turn
    showPlayerDiv();


    // after clicking a space, the udpate space function is called
    updateSpace = (space) =>{

        // once a valid space is clicked, call clear div
        clearPlayerDiv();

        // get the id of the div space in order to update the board array
        let location = space.id.split('').map(x=>parseInt(x));
        let x = location[0];
        let y = location[1];

        //if board space in array is empty, the move is valid
        if (!board[x][y]){
            // if the player is x, print x image
            if (currentPlayer == players[0]) {
                space.innerHTML = '<img src="img/cross.png">';
            } else {
            // else print o imamage
                space.innerHTML = '<img src="img/heart.png">';
            }

            // call update board function with locations
            updateBoard(x,y);

            // check if there is a winner
            // if check returns true, and there is a winner
            // clear the div
            // print the winner
            // change to new game
            if (checkWinner()){
                clearPlayerDiv();
                document.querySelector('.one').innerHTML = currentPlayer['mark'] +' WINS';
                restart.innerText = "NEW GAME";
                restart.addEventListener('click', newGame);
            } else if (checkWinner()=='Tie'){
                // if checkwinner returns a tie
                // new game
                clearPlayerDiv();
                document.querySelector('.one').innerHTML = `TIE`;
                restart.innerText = "NEW GAME";
                restart.addEventListener('click', newGame);
            }

        // if there is no winner or tie, continue to swap players by calling update player function
        updatePlayer();

        } else{
            // else move is invalid, and you need to pick another place
            document.querySelector('.one').innerText = 'TRY AGAIN';
            // has issue with div clear/shows
        }

        //ternary func >> toggle ternary
        // update player var
        // if player = x is true
        // change to o
        // if false change to x

    }

    // function to take x,y coordinates of selected place in game
    // and update the board array with either 1 or 2 for player x, o respectively
    updateBoard = (x,y) =>{
        board[x][y] = currentPlayer['player'];
        console.log(board);
    }

    // function to swap players
    updatePlayer = () => {
        currentPlayer = (currentPlayer == players[0] ? players[1] : players[0]);
        showPlayerDiv();
    }

    // function to check if there is a winner
    checkWinner = () => {
        //winner happens when three in a row
        // else board is full and it's a tie

        // all rows of the board
        let boardRow = [board[0], board[1], board[2]];

        function* zip(...args) {
            const iterators = args.map(x => x[Symbol.iterator]());
            while (true) {
                const current = iterators.map(x => x.next());
                if (current.some(x => x.done)) {
                    break;
                }
                yield current.map(x => x.value);
            }
        }
        // all col of the board
        let boardCol = [...zip(...boardRow)];

        // all potential winning combos
        let combos = [
            boardRow[0], boardRow[1], boardRow[2],
            boardCol[0], boardCol[1], boardCol[2],
            [board[0][0], board[1][1], board[2][2]],
            [board[2][0], board[1][1], board[0][2]]
        ];

        // check each element in winning lines to see if any row is equal
        // loop through each element in combos
        for (let i=0; i<combos.length; i++){
            // every element in the array is the same
            if (combos[i].every(x => x==combos[i][0])){
                // and none are null
                if (!combos[i].includes(null)){
                    // return true = winner
                    console.log(i);
                    return true;
                }
            } else if (!combos.includes(null)) {
        // if null is not in any of the combos, it means all grids are filled
        // and if there is no winner, it is a tie

        /// this isnt workinngggggg
            console.log('Tie');
            return false;
            }

        }

        return false;
    }


    let winner = checkWinner();

    if (winner) {
        restart.innerText = "new game";
        restart.addEventListener('click', newGame);
        }

}

/// there should be a better way
document.querySelector('#X.player').style.opacity = "0.0";
document.querySelector('#O.player').style.opacity = "0.0";
document.querySelector("#timer").style.opacity = "0.0";

// create a button to start the game
const start = document.createElement("button");
// set id as start button, and text as start, then append
start.id = 'startBtn';
start.innerHTML = "START";
document.querySelector('.two').appendChild(start);
//onclick of button, call newgame function
document.querySelector('#startBtn').addEventListener('click', newGame);














