import React from 'react';
import { createBoard } from '../store/reducers';
import { fetchWonPlayer } from './FetchWonPlayer.js';

describe('test fetchWonPlayer', () => {
    it('invokes fetchWonPlayer with a winner possibility', () => {
        const board = createBoard(3);
        board[0][0] = 'X';
        board[0][1] = 'X';
        board[0][2] = 'X';
        const result = fetchWonPlayer(board);
        expect(result).toBe('X');
    });

    it('invokes fetchWonPlayer with no winner possibility', () => {
        const board = createBoard(3);
        board[0][0] = 'X';
        board[0][1] = 'X';
        board[0][2] = 'O';
        const result = fetchWonPlayer(board);
        expect(result).toBe(null);
    });
})
