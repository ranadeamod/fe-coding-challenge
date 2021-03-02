import React from 'react';

import { Cell } from '../cell';

import './index.css';

export const Game = (props) => {
    const { board, player } = props;
    return (
        <div className="Game-Grid">
            {board.map((boardRow, boardRowIndex) => (
                <div key={boardRowIndex} className="Game-Grid-Row">
                    {boardRow.map((boardCell, boardCellIndex) => (
                        <Cell
                            key={boardRowIndex + '-' + boardCellIndex}
                            cell={boardCell}
                            rowIndex={boardRowIndex}
                            cellIndex={boardCellIndex}
                            player={player} />
                    ))}
                </div>
            ))}
        </div>
    )
}
