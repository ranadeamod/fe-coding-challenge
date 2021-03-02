import * as Actions from './moves'
import {DECLARE_WINNER, RESTART} from './moves';

describe('selectCell', () => {
  it('should create an action to select a cell', () => {
    const expectedAction = {
      type: Actions.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 0
    }
    const result = Actions.selectCell('X', 0, 0)
    expect(result).toEqual(expectedAction)
  });

  it('should create an action to declare winner', () => {
    const expectedAction = {
      type: DECLARE_WINNER,
      winner: 'X'
    };
    const result = Actions.declareWinner('X');
    expect(result).toEqual(expectedAction);
  });

  it('should create an action to restart the game', () => {
    const expectedAction = {
      type: RESTART
    };
    const result = Actions.restartGame();
    expect(result).toEqual(expectedAction);
  });
})
