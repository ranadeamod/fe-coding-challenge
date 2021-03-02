export const SELECT_CELL = 'SELECT_CELL';
export const DECLARE_WINNER = 'DECLARE_WINNER';
export const RESTART = 'RESTART';

export function selectCell(currentPlayer, row, col) {
  return {
    type: SELECT_CELL,
    currentPlayer,
    row,
    col
  };
}

export function declareWinner(winner) {
  return {
    type: DECLARE_WINNER,
    winner
  };
}

export function restartGame() {
  return {
    type: RESTART
  };
}
