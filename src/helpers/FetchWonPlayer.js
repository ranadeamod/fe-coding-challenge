import React from 'react';

const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export const fetchWonPlayer = (board) => {
    const flattenedBoard = board.flat();
    for (let i = 0; i < winningMoves.length; i++) {
        const [index0, index1, index2] = winningMoves[i];
        if (
            flattenedBoard[index0] &&
            flattenedBoard[index0] === flattenedBoard[index1] &&
            flattenedBoard[index0] === flattenedBoard[index2]
        ) {
            return flattenedBoard[index0];
        }
    }
    return null;
}
