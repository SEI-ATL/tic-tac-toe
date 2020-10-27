# Let's play some tic-tac-toe!
___

To start, `fork` and `clone` this [repo](https://github.com/tcgilbert/tic-tac-toe) on your local machine.

Once you have cloned the repo, open the `index.html` file in your brower, and then simply click a square to start playing!

## Technologies used
`Javascript`, `HTML`, and `CSS`
___
## [JS] Game Logic

The back-bone of the game logic starts with the use of a two-dimensional array that represents the game-board

```js
var selections = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
```

Once a selection is made by a player either a 1 (for X) or a -1 (for O) is reassigned to the corresponding index based on the location of the box div


```js
let arrays = row.concat(col, diag);
  if (lastChoice.length != 9) {
      arrays.forEach((i) => {
          if (i == 3 || i == -3) {
              gameOverWin(i);
        animateWinners(arrays);
      }
```

After every move the values for each position are reduced and placed into an array that has a value for each `row`, `column`, and `diagonal`: if any value is equal to `3` or `-3` the game is over and a winning message is displayed.



![tic-tac-toe](img/tic-tac-toe.gif)

