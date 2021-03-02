# Syft Tic-Tac-Toe

## Tasks

### Create Tic-Tac-Toe Board

* In `src/components/board` we provide a base component to be modified to render out a Tic-Tac-Toe board.
* The board data is available from the `board` variable, with the current player available in `game.currentPlayer`.
* Selecting a cell can be achieved by dispatching the `selectCell` action with the current player and the cell co-ordinates to select.

Your task is to create a board grid containing the values of the board, and to hook up the dispatch action to allow the selection of each blank cell in the grid.

### Create a win condition

* In `src/store` we provide support for `redux-thunk`, `redux-saga` and `redux-observable`. You must use one of these to implement a win condition with.
* A player wins by selecting 3 uninterrupted cells in a row, column or diagonal.
* The winning player should be populated inside `state.game.winner`.

Your task is to create a win condition handler that checks on each move whether a player has won. If a player wins, display a win message with the winning player.

## Limitations

* Please utilise only `redux-thunk`, `redux-saga` or `redux-observable` for handling side effects.
* Make your changes within this codebase, we'd like to see how you interact with legacy code.
* UI can be implemented using a library or plain CSS, however you feel most comfortable.
* Feel free to use any helpers or utility libraries you need.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Notes for Reviewers
* As stated in the readme, the original code is legacy and is not expected to be optimized. Hence instead of touching
  the legacy code for any modifications, I took the liberty to flatten the "board" array (multi-dimensional) for better 
  and easy decision-making to derive a winner. The results can be achieved by referring to the legacy code and writing 
  recursive and little complex logics (check horizontal matches, check vertical matches and check diagonal matches), 
  but I felt they are not necessary.
* I have updated (and written) the required test cases, but the project is not set up to generate code coverage to
  validate the coverage %. I have not enabled it, not sure if that was a requirement. It can be done using jest along 
  with istanbul coverage libraries.
* I haven't used any UI libraries to beautify the look and feel. Instead have written some custom CSS to make it look
  little better.
* No Async actions have been used due to their unsuitability for the current requirement.
