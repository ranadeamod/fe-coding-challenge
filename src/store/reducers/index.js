import { combineReducers } from "redux";
import {SELECT_CELL, DECLARE_WINNER, RESTART} from "../actions/moves";

export const createBoard = (i) =>
  Array(i)
    .fill(null)
    .map(_ =>
      Array(i)
        .fill(null)
    )

const boardInitialState = createBoard(3);
const gameInitialState = { currentPlayer: 'X', winner: null };

export const board = (state = boardInitialState, action) => {
  switch (action.type) {
    case SELECT_CELL: {
      const newBoard = JSON.parse(JSON.stringify(state))
      newBoard[action.row][action.col] = action.currentPlayer
      return newBoard
    }
    case RESTART: {
      return boardInitialState;
    }
    default: {
      return state
    }
  }
}

export const game = (state = gameInitialState, action) => {
  switch (action.type) {
    case SELECT_CELL: {
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X'
      }
    }
    case DECLARE_WINNER: {
      return {
        ...state,
        winner: action.winner
      };
    }
    case RESTART: {
      return gameInitialState;
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  board,
  game
})
