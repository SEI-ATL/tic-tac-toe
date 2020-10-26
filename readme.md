# Tic-Tac-Toe

## A simple tic-tac-toe game in vanilla javascript.

* Contains PvP and PvAi modes.
* Still needs to be optimized.

### PvP
![alt text](https://github.com/ruvvet/tic-tac-toe/blob/main/img/ttt-pvp.gif)

### PvAi
![alt text](https://github.com/ruvvet/tic-tac-toe/blob/main/img/ttt-pve.gif)

### To-Do

* Add hard-mode PvAI w/ max-min algorithm
* Highlight winning lines

```javascript
// Some of the code for fun
// nested array board keeps state of the game
const board = [...Array(3)].map(() => Array(3).fill(null));
//...
// checking for a winner means looping through all rows/col/diagonals
// checks if null, if its a 1 or a 2, etc. to determine game outcome
for (let i = 0; i < combos.length; i++){
    if (combos[i][0] !== null && new Set(combos[i]).size == 1) {
        currentPlayer['score'] +=1
        return true;
    }
}
```